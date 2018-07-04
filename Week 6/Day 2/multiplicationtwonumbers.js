function multiply() {
    var firstnumber = document.getElementById('firstnumber').value,
        secondnumber = document.getElementById('secondnumber').value,
        multiply= firstnumber * secondnumber;
        document.getElementById('multiply').innerHTML=multiply;
}
function playMusic() {
    var sound = new Howl({
        src: ['answer.mp3']
    })
    sound.play();
}
