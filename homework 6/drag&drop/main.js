Element.prototype.makeDraggable = function() {
  let obj = this
  obj.onmousedown = function(e) {
    let offsetX = e.pageX - parseInt(obj.style.left)
    let offsetY = e.pageY - parseInt(obj.style.top)
    document.onmousemove = function(e) {
      obj.style.left = Math.max(Math.min(e.pageX - offsetX,obj.parentNode.clientWidth - obj.clientWidth), 0) + 'px'
      obj.style.top = Math.max(Math.min(e.pageY - offsetY,obj.parentNode.clientHeight - obj.clientHeight), 0) + 'px'
    }
    document.onmouseup = function(e) {
      document.onmousemove = obj.onmouseup = null
    }
  }
  obj.ondragstart = function() { return 0 }
}
document.getElementById('first').makeDraggable()
document.getElementById('second').makeDraggable()