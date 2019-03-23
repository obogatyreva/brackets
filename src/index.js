module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  for (let k in bracketsConfig) {
    open.push(bracketsConfig[k][0]);
    close.push(bracketsConfig[k][1]);
  }

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  let recursive = function (arr) {
    let temp = [...arr];
    for (let k = 0; k < arr.length; k++) {
      let ch1 = arr[k];
      let ch2 = arr[k + 1];
      let openkey = open.indexOf(ch1);
      if (openkey > -1 && close.indexOf(ch2) > -1 && close.indexOf(ch2) === openkey) {
        delete arr[k];
        delete arr[k + 1];
      }
    }
    arr = arr.filter(function (el) {
      return el != null;
    });
    if (temp.length !== arr.length && arr.length > 0) {
      return recursive(arr);
    } else {
      return arr.length > 0 ? false : true;
    }
  };
  let output = recursive(arr);

  return output;
}

