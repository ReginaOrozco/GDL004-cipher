let instructionsToCipher= ()=> {
document.getElementById("codeMessage").style.display = "block";
document.getElementById("Bienvenida").style.display = "none";
}

let increaseValue= ()=> {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

let decreaseValue= ()=> {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

let showCode = ()=> {
  var text = document.getElementById("putYourCodeHere").value;
  document.getElementById("yourMessage").innerHTML = text;
}

let encryptingCode= ()=> {
  document.getElementById("encryptingCode").style.display = "block";
  document.getElementById("codeMessage").style.display = "none";
}

let codeResults= ()=> {
  document.getElementById("codeResults").style.display = "block";
  document.getElementById("encryptingCode").style.display = "none";
}

let codeOtherMessage= ()=> {
  document.getElementById("codeMessage").style.display = "block";
  document.getElementById("codeResults").style.display = "none";
}

let decodeMessage= ()=> {
  document.getElementById("decodeMessage").style.display = "block";
  document.getElementById("codeMessage").style.display = "none";
  document.getElementById("codeResults").style.display = "none";
}

let desencryptingCode= ()=> {
  document.getElementById("desencryptingCode").style.display = "block";
  document.getElementById("decodeMessage").style.display = "none";
}

let decodeResults= ()=> {
  document.getElementById("decodeResults").style.display = "block";
  document.getElementById("desencryptingCode").style.display = "none";
}

let decodeOtherMessage= ()=> {
document.getElementById("decodeMessage").style.display = "block";
document.getElementById("decodeResults").style.display = "none";
}

let decodeTocode= ()=> {
  document.getElementById("codeMessage").style.display = "block";
  document.getElementById("decodeResults").style.display = "none";
}
