var data = {date:"2018-07-04 19:59:45",plate:"FRD969", distance:10000, time:360};
var speed = 10000/360*3.6;
speed=Math.ceil(speed);
document.getElementById('date').innerHTML=data["date"];
document.getElementById('plate').innerHTML=data["plate"];
document.getElementById('distance').innerHTML=data["distance"];
document.getElementById('time').innerHTML=data["time"];
document.getElementById('speed').innerHTML=speed;
