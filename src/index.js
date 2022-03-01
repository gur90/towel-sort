/*function towelSort (matrix) {
  matrix.map(function(key,index) {
    if(index % 2 !=0) {
      key.reverse();
    }
  })
  let arr =[].concat(...matrix)
  console.log(arr)
}
towelSort ( [
  [1, 2, 8],
  [3, 4, 6, 7],
]) */

module.exports = function towelSort (matrix) {
  if (arguments.length==0){return []} else {
  matrix.map(function(num,index) {
    if(index % 2 !=0) {
      num.reverse();
    }
  })

  let arr =[].concat(...matrix)
  return arr
}
}

