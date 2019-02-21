// Rafael e Julio

const numeros = {
  'elements': [
    { 'key': "ABC", 'value': 2 },
    { 'key': "DEF", 'value': 3 },
    { 'key': "GHI", 'value': 4 },
    { 'key': "JKL", 'value': 5 },
    { 'key': "MNO", 'value': 6 },
    { 'key': "PQRS", 'value': 7 },
    { 'key': "TUV", 'value': 8 },
    { 'key': "WXYZ", 'value': 9 },
  ]
}

module.exports.init = compara;

function start() {
  numeros.elements.forEach((v, i) => {
    console.log(v, i);
  });
}                 

function compara(inputString = "Teste") {
  const stringArray = inputString.toUpperCase().split("");
  let finalNumber = ""
  numeros.elements.map((v) => {
    const atualString = v.key.split("");
    stringArray.map((vS) => {
      atualString.map((v0) => { 
        console.log(v0, vS)
        if (v0 === vS) {
          finalNumber += v.value
          return
        }
      })
    })
  })
  console.log(finalNumber)
  return
}