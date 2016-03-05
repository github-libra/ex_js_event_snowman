var which = '';
var x = 0;
var y = 0;
document.body.addEventListener('dragstart', function(e) {
    which = e.target;
    x = e.offsetX;
    y = e.offsetY;
}, false)

document.body.addEventListener('dragover', function(e) {
    e.preventDefault();
}, false)

document.body.addEventListener('drop', function(e) {
    e.preventDefault();
    console.log('drag: ', which);
    console.log('drop target', e.target);
    console.log('drop position', e.pageX - x, e.pageY - y);
    which.style.left = e.pageX - x + 'px';
    which.style.top = e.pageY - y + 'px';
}, false)



