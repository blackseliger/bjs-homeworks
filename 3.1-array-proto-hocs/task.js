function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e)
 {

 }}

 function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

  const compareArrays = function(arr1, arr2) {
    return (
      arr1.length === arr2.length &&
      arr1.every(function(el, i) {
        return el === arr2[i];
      })
    );
  };