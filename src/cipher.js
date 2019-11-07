window.cipher = {
  encode: (textBeforeCipher, offset) => {
    var messageInUpperCase = textBeforeCipher.toUpperCase();
    for (var i = 0; i < messageInUpperCase.length; i++){
      parseInt(offset);
      console.log(parseInt(offset));
      var cipherMessage = (messageInUpperCase.charCodeAt(i) - 65 + offset) % 26 + 65;
    }
    return cipherMessage;
    }


   }
