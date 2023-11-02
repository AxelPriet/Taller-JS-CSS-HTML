function calculateAverage() {
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var grade1 = parseFloat(document.getElementById('grade1').value);
    var grade2 = parseFloat(document.getElementById('grade2').value);
    var grade3 = parseFloat(document.getElementById('grade3').value);

    var average = (grade1 + grade2 + grade3) / 3;
    var resultElement = document.getElementById('result');

    if (average >= 3) {
        resultElement.innerHTML = 'Felicitaciones ' + name + ', su nota es ' + average.toFixed(2) + ', Pasaste la materia ' + subject + '.';
        resultElement.className = 'passed';
    } else {
        resultElement.innerHTML = 'Lo siento ' + name + ', su nota es ' + average.toFixed(2) + ', No pasaste la materia ' + subject + '.';
        resultElement.className = 'failed';
    }
}
