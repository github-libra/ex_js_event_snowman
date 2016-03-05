var which = '';
var x = 0;
var y = 0;

function resetIndex() {
    var imgs = document.querySelectorAll('img')
    for (var i = imgs.length - 1; i >= 0; i--) {
        imgs[i].style.zIndex = 5;
    }
}
document.body.addEventListener('dragstart', function(e) {
    which = e.target;
    x = e.offsetX;
    y = e.offsetY;
    resetIndex()
    which.style.zIndex = 10;
}, false)

document.body.addEventListener('dragover', function(e) {
    e.preventDefault();
}, false)

document.body.addEventListener('drop', function(e) {
    e.preventDefault();
    which.style.left = e.pageX - x + 'px';
    which.style.top = e.pageY - y + 'px';
}, false)

document.body.addEventListener('touchstart', function(e) {
    e.preventDefault();
    var whichPiece = e.target;
    var finger = e.touches[0];
    var xx = whichPiece.offsetLeft - finger.pageX;
    var yy = whichPiece.offsetTop - finger.pageY;
    resetIndex()
    whichPiece.style.zIndex = 10;

    whichPiece.addEventListener('touchmove', function() {
        whichPiece.style.left = finger.pageX + xx + 'px';
        whichPiece.style.top = finger.pageY + yy + 'px';
    }, false)
}, false)
