const main = (text = '') => {
    let textLower = text.toLowerCase();
    let arrCaracter = textLower.split('');
    let arrRepeticao = {};
    let count = 0;

    for (let i = 0; i < arrCaracter.length; i++) {
        let letra = arrCaracter[i];
        let reg = letra;
        let nReg = new RegExp(reg,"g");
        let countLetra = (textLower.match(nReg) || []).length;
        arrRepeticao[letra] = countLetra;
    }

    Object.entries(arrRepeticao).forEach(([key, value]) => {
    if(value > 1){
        count += 1;
    }
    });
    console.log(count);
    return count;
}

main("Rafaelr");