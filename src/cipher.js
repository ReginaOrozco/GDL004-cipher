window.cipher = {
  encode: (textBeforeCipher, offset) => {
    var messageInUpperCase = textBeforeCipher.toUpperCase();
    for (var i = 0; i < messageInUpperCase.length; i++){
      console.log(messageInUpperCase.charAt(i));
    }

    return messageInUpperCase;
    }


   }
