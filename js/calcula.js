function bin2dec() {
  var number = document.getElementById('binNumber').value;
  var decNumber = 0;

  for (var i = number.length - 1; i >= 0; i--) {
    decNumber += parseInt(number[i]) * (2 ** ((number.length - 1) - i));
  }

  document.getElementById('decNumber').innerHTML = decNumber;
}
