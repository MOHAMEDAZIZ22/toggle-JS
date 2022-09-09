var toggleBtns = document.getElementById("toggle-button");
var toggleTxts= document.getElementById("toggle-text");

var colors = ["red", "blue", "green","green"];
var flag = 0;

var handleToggle = function () {
    var box = this.parentNode;

    var p = box.quaryselector('p');
    console.log(p)
};
toggleBtns.forEach(function(toggleBtn){
    toggleBtn.addeventListener("click",handleToggle)
})

   