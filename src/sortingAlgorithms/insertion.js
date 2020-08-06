export function getInsertionSortAnimations(array) {
  const animations = [];
  insertionSortHelper(array, animations);
  return animations;
}

function insertionSortHelper(mainArray,animations)
{
  for(var x = 1; x <mainArray.length;x++)
  {
    var key = mainArray[x];
    var y = x-1;
    while(y>=0 && key<mainArray[y])
    {
      mainArray[y+1] = mainArray[y];
      animations.push([y+1,mainArray[y],"turquoise"]);
      animations.push([y,mainArray[y+1],"blue"]);
      y--;
    }
    mainArray[y+1] = key;
    animations.push([y+1,key,"turquoise"])
  }
}
