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

let showCodeAndOffset = ()=> {
  var text = document.getElementById("putYourCodeHere").value;
  document.getElementById("messageToCode").innerHTML = text;
  var printOffset = document.getElementById("number").value;
  var cipherMessage = window.cipher.encode(text, printOffset);
  document.getElementById("messageAfterCode").innerHTML = cipherMessage;
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

let increaseValue2= ()=> {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number2').value = value;
}

let decreaseValue2= ()=> {
  var value = parseInt(document.getElementById('number2').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number2').value = value;
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
  var text = document.getElementById("putYourDecodeHere2").value;
  document.getElementById("messageToDecode").innerHTML = text;
  var printOffset = document.getElementById("number2").value;
  var decodeMessage = window.cipher.decode(text, printOffset);
  document.getElementById("messageAfterDecode").innerHTML = decodeMessage;
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
