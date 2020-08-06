export function getBubbleSortAnimations(array) {
  const animations = [];
  bubbleSortHelper(array, animations);
  return animations;
}

function bubbleSortHelper(mainArray,animations)
{
    let len = mainArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i-1; j++) {
            if (mainArray[j] > mainArray[j + 1]) {
              animations.push([j,mainArray[j],"blue"]);
              animations.push([j+1,mainArray[j+1],"turquoise"]);
              animations.push([j,mainArray[j+1],"turquoise"]);
              animations.push([j+1,mainArray[j],"turquoise"]);
              animations.push([j,mainArray[j+1],"turquoise"]);
              var temp = mainArray[j];
              mainArray[j] = mainArray[j+1];
              mainArray[j+1] = temp;
            }
        }
    }
};
