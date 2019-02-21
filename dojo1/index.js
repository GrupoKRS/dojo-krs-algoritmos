// Carol e Bruno

var strings = ['1-HOME-SWEET-HOME', 'MY-MISERABLE-JOB', 'MY LOVE'];
var output = '';
var map = [
  { 'A': 2 },
  { 'B': 2 },
  { 'C': 2 },
  { 'D': 3 },
  { 'E': 3 },
  { 'F': 3 },
  { 'G': 4 },
  { 'H': 4 },
  { 'I': 4 },
  { 'J': 5 },
  { 'K': 5 },
  { 'L': 5 },
  { 'M': 6 },
  { 'N': 6 },
  { 'O': 6 },
  { 'P': 7 },
  { 'Q': 7 },
  { 'R': 7 },
  { 'S': 7 },
  { 'T': 8 },
  { 'U': 8 },
  { 'V': 8 },
  { 'W': 9 },
  { 'X': 9 },
  { 'Y': 9 },
  { 'Z': 9 },
];

strings.forEach(function(string){
  output = '';
  for(var i =0; i < string.length; i++){
    var finded = false;
    var char = string.charAt(i).toUpperCase();
      if(char == ' ') {
        output += ' ';
        finded = true;
      } else 
      if(char == 1) {
        output += 1;
        finded = true;
      } else
      if(char == 0) {
        output += 0;
        finded = true;
      } else {
        map.forEach(function(a){
          if(a[char] != undefined) {
            output += a[char];
            finded = true;
          }
        });
      }
      if(!finded) {
        output += char;
      }
  }
  console.log(output);
});