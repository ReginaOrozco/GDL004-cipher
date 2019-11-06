window.cipher = {
    encode: (userKey, userMess1) => { //variables que extraen datos del html
      let encodeMessage = ""; //declaracion variable mensaje de salida
      for (let i = 0; i < userMess1.length; i++) { //ciclo for para iniciar bucle de cifrado
        let result = (userMess1.charCodeAt(i) - 65 + userKey) % 26 + 65; //fórmula codigo ascii igualada a una variable
        encodeMessage += String.fromCharCode(result);//salida de numero de desplazamiento en codigo Ascii
      }
      return encodeMessage; //salida de mensaje Cifrado

    },//bloque declarado para cifrar
    decode: (userKey, userMess2) => { //variables que extraen datos del html
      let decodeMessage = ""; //declaracion variable mensaje de salida
      for (let i = 0; i < userMess2.length; i++) { //ciclo for para iniciar bucle de decifrado
        let result = (userMess2.charCodeAt(i) - 90 - userKey) % 26 + 90; //fórmula codigo ascii en reversa igualada a una variable
        decodeMessage += String.fromCharCode(result); //salida de numero de desplazamiento en codigo Ascii en reversa

      }
      return decodeMessage; //salida de mensaje Decifrado
    }
  };
