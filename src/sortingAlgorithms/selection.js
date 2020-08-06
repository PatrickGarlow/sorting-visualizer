export function getSelectionSortAnimations(array) {
  const animations = [];
  selectionSortHelper(array, animations);
  return animations;
}

function selectionSortHelper(mainArray,animations)
{
  for(var x = 0; x < mainArray.length; x++)
  {
    var lowest_pos = x;
    var lowest_val = mainArray[x];
    for(var y = x; y < mainArray.length; y++)
    {
      if(mainArray[y] < lowest_val)
      {
        lowest_val = mainArray[y];
        lowest_pos = y;
      }
    }
    animations.push([x,mainArray[lowest_pos],"turquoise"]);
    animations.push([lowest_pos,mainArray[x],"turquoise"]);
    var temp = mainArray[x];
    mainArray[x] = mainArray[lowest_pos];
    mainArray[lowest_pos] = temp;

  }
}
