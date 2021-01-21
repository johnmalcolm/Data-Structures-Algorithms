// Can you merge two sorted arrays into on sorted arrray?
// Expected Output -- [0,3,4,4,6,30,31]
function mergeSortedArrays(array1, array2) {
  // Check Inputs
  if (!Array.isArray(array1) || !Array.isArray(array2) ) {
    return "please pass an array";
  }
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));