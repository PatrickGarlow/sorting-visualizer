export function getQuickSortAnimations(array) {
  const animations = [];
  quickSortHelper(array,animations,0,array.length-1);
  return animations;
}

function quickSortHelper(mainArray,animations,low,high)
{
  if(low < high)
  {
    var partition = quickSortPartition(mainArray,low,high,animations);
    quickSortHelper(mainArray,animations,low,partition-1);
    quickSortHelper(mainArray,animations,partition+1,high);
  }
}
function quickSortPartition(array,low,high,animations)
{
  var x = low-1;
  var pivot = array[high];
  for(var y = low; y < high;y++)
  {
    if(array[y] < pivot)
    {
      x++;
      animations.push([x,array[y],"turquoise"]);
      animations.push([y,array[x],"turquoise"]);
      var temp = array[x];
      array[x] = array[y];
      array[y] = temp;
    }
  }
  animations.push([x+1,array[high],"turquoise"]);
  animations.push([high,array[x+1],"turquoise"]);
  var temp2 = array[x+1];
  array[x+1] = array[high];
  array[high] = temp2;
  return x+1;
}
