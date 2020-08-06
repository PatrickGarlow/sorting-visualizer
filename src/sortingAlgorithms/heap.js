export function getHeapSortAnimations(array) {
  const animations = [];
  heapSortHelper(array,animations);
  return animations;
}

function heapSortHelper(mainArray,animations)
{
  var n = mainArray.length;
  for(var x = Math.floor(n/2)-1;x>-1;x--)
  {
    heapify(mainArray,n,x,animations);
  }
  for(var x = n-1;x>0;x--)
  {
    animations.push([x,mainArray[0],"turquoise"]);
    animations.push([0,temp,"turquoise"]);
    var temp = mainArray[x];
    mainArray[x] = mainArray[0];
    mainArray[0] = temp;
    heapify(mainArray,x,0,animations);
  }
}
function heapify(array,n,x,animations)
{
  var largest = x
  var left = 2 * x + 1
  var right = 2 * x + 2
  if(left < n && array[x] < array[left])
  {
    largest = left
  }
  if(right < n && array[largest] < array[right])
  {
      largest = right
  }
  if(largest != x)
  {
    animations.push([x,array[largest],"turquoise"]);
    animations.push([largest,temp,"turquoise"]);
    var temp = array[x]
    array[x] = array[largest]
    array[largest] = temp
    heapify(array, n, largest,animations)
  }
}
