module.exports = function check(s, confArr) {

  const leftArr = [];
  const confLeft = new Map(confArr);
  
  s = s.split('')
    .some(el => {
      if ((confLeft.has(el) && confLeft.get(el) != el) ||
        (confLeft.get(el) == el && leftArr[leftArr.length - 1] !== el)) {
        leftArr.push(el);
      } else if (confLeft.get(leftArr[leftArr.length - 1]) === el) {
        leftArr.pop();
      } else {
        leftArr.length = 1;
        return true;
      }
    });

  return leftArr.length === 0 ? true : false;
}
