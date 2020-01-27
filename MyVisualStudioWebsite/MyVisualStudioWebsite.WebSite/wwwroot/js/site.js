// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//Animates two boxes
function myAnimate() {
    var box1 = document.getElementById("animatedBox1");
    var box2 = document.getElementById("animatedBox2");
    box1.style.display = "block";
    box2.style.display = "block";
    var duration = 2;
    var msPerFrame = 5;
    var id = setInterval(frame, msPerFrame);
    var maxIterations = duration / (msPerFrame / 1000);
    var i = 1;
    alert(iterations);

    function frame() {
        box1.style.top = (Math.random())*i + "px";
        box2.style.bottom = (Math.random()) * i + "px";
        box1.style.width = 100 - (i / maxIterations) * 100 + "px";
        box1.style.height = 100 - (i / maxIterations) * 100 + "px";
        box2.style.width = 100 - (i / maxIterations) * 100 + "px";
        box2.style.height = 100 - (i / maxIterations) * 100 + "px";
        i++;
        if (i >= maxIterations) {
            box1.style.display = "none";
            box2.style.display = "none";
            clearInterval(id);
        }
    }
}