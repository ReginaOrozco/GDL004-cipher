window.cipher = {
  encode: (textBeforeCipher, offset) => {
    let encodeMessage = "";
    var messageInUpperCase = textBeforeCipher.toUpperCase();
    var offsetParseInt = parseInt(offset);
      for (var i = 0; i < messageInUpperCase.length; i++){
        cipherMessage = (messageInUpperCase.charCodeAt(i) - 65 + offsetParseInt) % 26 + 65;
        encodeMessage += String.fromCharCode(cipherMessage);
      }
    return encodeMessage;

  },
  decode: (textBeforeCipher, offset) => {
      let encodeMessage = "";
      var messageInUpperCase = textBeforeCipher.toUpperCase();
      var offsetParseInt = parseInt(offset);
        for (var i = 0; i < messageInUpperCase.length; i++){
          cipherMessage = (messageInUpperCase.charCodeAt(i) - 65 + offsetParseInt) % 26 + 65;
          encodeMessage += String.fromCharCode(cipherMessage);
        }
      return encodeMessage;
    }
  }
