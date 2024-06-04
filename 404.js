var time = 5;
var show = function(t) {
    if (t === 0){
        location.href="https://oliver13211.github.io/WangLearning/";
    }
    else {
        document.getElementById("sec").innerHTML = t+'';
    }
}
window.setInterval("show(time--)",1000);