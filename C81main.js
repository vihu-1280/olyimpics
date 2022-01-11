canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="grey";
width="5";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=4;
ctx.rect(150,143,430,200);
ctx.stroke();

color="blue";
width="5";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=4;
ctx.arc(250,210,40,0,2* Math.PI);
ctx.stroke();

color="black";
width="5";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=4;
ctx.arc(350,210,40,0,2* Math.PI);
ctx.stroke();

color="red";
width="5";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=4;
ctx.arc(450,210,40,0,2* Math.PI);
ctx.stroke();

color="yellow";
width="5";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=4;
ctx.arc(300,250,40,0,2* Math.PI);
ctx.stroke();

color="green";
width="5";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=4;
ctx.arc(400,250,40,0,2* Math.PI);
ctx.stroke();



canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color= document.getElementById("color").value;
    console.log(color);
    width_of_line = document.getElementById("width").value;
    console.log(width);
    mouse_x= e.clientX-canvas.offsetLeft;
    mouse_y= e.clientY-canvas.offsetTop;
    console.log("X= "+mouse_x+"Y= "+mouse_y);
    circle(mouse_x,mouse_y);

}
function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= 2;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
