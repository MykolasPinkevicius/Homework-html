// var data = {date:"2018-07-04 19:59:45",plate:"FRD969", distance:10000, time:360};
// var speed = distance/ * 3.6;
window.onload = function(){
    document.getElementById("car-details-form").addEventListener("submit", addRow);
//   first row is created from hardcoded array as per requirements in task
    // renderTableRow(['2018-07-06 08:30', 'FRD969', 10000, 360]);
// var data = [['2018-07-09 13:43:43','FRD969',10000,360],['2018-07-09 12:40:40', 'KLM696', 10000, 300],['2018-07-09 09:05:05', 'BDB969', 10000, 420]],
// document.getElementById('date').innerHTML=arr[0]
// document.getElementById('car-number').innerHTML=arr[1]
// document.getElementById('distance').innerHTML=arr[2]
// document.getElementById('time').innerHTML=arr[3]
}
function renderTableRow(arr){
    document.getElementById('date').innerHTML = arr[0];
    document.getElementById('car-number').innerHTML = arr[1];
    document.getElementById('distance').innerHTML = arr[2];
    document.getElementById('time').innerHTML = arr[3];
}
function addRow(event){
    event.preventDefault();
    var date=document.getElementById('input-date');
    var carNumber=document.getElementById('input-car-number');
    var distance=document.getElementById('input-distance');
    var time=document.getElementById('input-time')
    if (date.value == '') {
        date.focus();
        return
    }
    if (carNumber.value == '') {
        carNumber.focus();
        return
    }
    if (distance.value == '') {
        distance.focus();
        return
    }
    if (time.value == '') {
        time.focus();
        return
    }
    var dateTd = "<td>" + date.value + "</td>";
    var carNumberTd = "<td>" + carNumber.value + "</td>";
    var distanceTd = "<td>" + distance.value + "</td>";
    var timeTd = "<td>" + time.value + "</td>";
    var newRow = "<tr>"+ dateTd + carNumberTd + distanceTd + timeTd + "</tr>";
    var tableBody =
        document.getElementById('tbody');
        tableBody.innerHTML += newRow;
        date.value = "";
        carNumber.value = "";
        distance.value = "";
        time.value = "";

}



    // distance = data[0][2]
    // time = data[0][3]
    // speed = distance / time * 3.6
    // distance2 = data[1][2]
    // time2 = data[1][3]
    // speed2 = distance2 / time2 * 3.6
    // distance3 = data[2][2]
    // time3 = data[2][3]
    // speed3 = distance3 / time3 * 3.6
    // speed=Math.ceil(speed);
    // speed2=Math.ceil(speed2);
    // speed3=Math.ceil(speed3);
// document.getElementById('date').innerHTML=data[0][0];
// document.getElementById('plate').innerHTML=data[0][1];
// document.getElementById('distance').innerHTML=data[0][2];
// document.getElementById('time').innerHTML=data[0][3];
// document.getElementById('speed').innerHTML=speed;
// document.getElementById('date2').innerHTML=data[1][0];
// document.getElementById('plate2').innerHTML=data[1][1];
// document.getElementById('distance2').innerHTML=data[1][2];
// document.getElementById('time2').innerHTML=data[1][3];
// document.getElementById('speed2').innerHTML=speed2;
// document.getElementById('date3').innerHTML=data[2][0];
// document.getElementById('plate3').innerHTML=data[2][1];
// document.getElementById('distance3').innerHTML=data[2][2];
// document.getElementById('time3').innerHTML=data[2][3];
// document.getElementById('speed3').innerHTML=speed3;
