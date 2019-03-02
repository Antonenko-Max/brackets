module.exports = function check(str, bracketsConfig) {
  // your solution
  var strArray = str.split('');

  var stack = [];
  
  for (i in strArray) {
    for (j in bracketsConfig) {
      if (bracketsConfig[j].some(e => e == strArray[i])) {
        var ind = bracketsConfig[j].indexOf(strArray[i]);
        // case of different brackets
        if (ind == 0 && bracketsConfig[j][0] != bracketsConfig[j][1]) {
          stack.push(strArray[i]);
        }
        else if (ind == 1 && bracketsConfig[j][0] != bracketsConfig[j][1]) {
          let check = stack.pop();
          if (check != bracketsConfig[j][0]) return false;
        }
        // case of similar brackets
        else if (ind == 0 && bracketsConfig[j][0] == bracketsConfig[j][1]) {
          let check = stack[stack.length - 1] ;
          if (check == strArray[i]) stack.pop()
          else stack.push(strArray[i]);
        }
      }
    }
  }
  if (stack.length == 0) return true
  else return false;
}
