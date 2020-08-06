import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/merge.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/bubble.js';
import {getHeapSortAnimations} from '../sortingAlgorithms/heap.js';
import {getQuickSortAnimations} from '../sortingAlgorithms/quick.js';
import {getInsertionSortAnimations} from '../sortingAlgorithms/insertion.js';
import {getSelectionSortAnimations} from '../sortingAlgorithms/selection.js';

import './SortingVisualizer.css';
import Slider from '@material-ui/core/Slider';
var ANIMATION_SPEED_MS = 10;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'blue';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      array_size: 100,
      showAll: false,
    };
  }
  componentDidMount()
  {
    this.resetArray();
  }
  resetArray()
  {
    const array = [];
    for(let x = 0; x < this.state.array_size; x++)
    {
      if(this.state.showAll)
      {
        array.push(randomIntFromInterval(5,350));
      }
      else
      {
        array.push(randomIntFromInterval(5,815));
      }

    }
    this.setState({array:array});
  }
  handleNumChange = (event,value) => {
    this.state.array_size = valuetext(event.target.value);
    this.resetArray();
  };
  handleSpeedChange = (event,value) => {
    var temp = event.target.value;
    var temp2 = temp/100;
    var temp3 = 1/temp2;
    ANIMATION_SPEED_MS = valuetext(temp3);
  };
  toggleShowAll()
  {
    this.state.showAll = !this.state.showAll;
    this.resetArray();
  }
  mergeSortTest()
  {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight, newColor] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        barOneStyle.backgroundColor = `${newColor}`;
      }, i * ANIMATION_SPEED_MS);
    }
  }

  mergeSort()
  {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort()
  {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight, newColor] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        barOneStyle.backgroundColor = `${newColor}`;
      }, i * ANIMATION_SPEED_MS);
    }
  }

  heapSort()
  {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight, newColor] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        barOneStyle.backgroundColor = `${newColor}`;
      }, i * ANIMATION_SPEED_MS);
    }
  }

  bubbleSort()
  {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight, newColor] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        barOneStyle.backgroundColor = `${newColor}`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
  insertionSort()
  {
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight, newColor] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        barOneStyle.backgroundColor = `${newColor}`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
  selectionSort()
  {
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight, newColor] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        barOneStyle.backgroundColor = `${newColor}`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
  mergeSortForAll(array,starting)
  {
    const animations = getMergeSortAnimations(array);
    for(var x = 0; x < animations.length; x++)
    {
      animations[x][0] = animations[x][0]+starting;
    }
    return animations;
  }
  bubbleSortForAll(array,starting)
  {
    const animations = getBubbleSortAnimations(array);
    for(var x = 0; x < animations.length; x++)
    {
      animations[x][0] = animations[x][0]+starting;
    }
    return animations;
  }
  selectionSortForAll(array,starting)
  {
    const animations = getSelectionSortAnimations(array);
    for(var x = 0; x < animations.length; x++)
    {
      animations[x][0] = animations[x][0]+starting;
    }
    return animations;
  }
  insertionSortForAll(array,starting)
  {
    const animations = getInsertionSortAnimations(array);
    for(var x = 0; x < animations.length; x++)
    {
      animations[x][0] = animations[x][0]+starting;
    }
    return animations;
  }
  heapSortForAll(array,starting)
  {
    const animations = getHeapSortAnimations(array);
    for(var x = 0; x < animations.length; x++)
    {
      animations[x][0] = animations[x][0]+starting;
    }
    return animations;
  }
  quickSortForAll(array,starting)
  {
    const animations = getQuickSortAnimations(array);
    for(var x = 0; x < animations.length; x++)
    {
      animations[x][0] = animations[x][0]+starting;
    }
    return animations;
  }
  sortAll()
  {
    const arrayBars = document.getElementsByClassName('array-bar');
    var bubbleArr = [];
    var insertionArr = [];
    var selectionArr = [];
    var mergeArr = [];
    var quickArr = [];
    var heapArr = [];
    var size = this.state.array_size;
    for(var x = 0*size;x<1*size;x++) //these get  the arrays to be put into the algorithms
    {
      var temp = arrayBars[x].style;
      var tempHeight = temp.height;
      var temp2 = tempHeight.replace("px","");
      var temp3 = parseInt(temp2);
      bubbleArr.push(temp3);
    }
    for(var x = 1*size;x<2*size;x++) //these get  the arrays to be put into the algorithms
    {
      var temp = arrayBars[x].style;
      var tempHeight = temp.height;
      var temp2 = tempHeight.replace("px","");
      var temp3 = parseInt(temp2);
      mergeArr.push(temp3);
    }
    for(var x = 1*size;x<2*size;x++) //these get  the arrays to be put into the algorithms
    {
      var temp = arrayBars[x].style;
      var tempHeight = temp.height;
      var temp2 = tempHeight.replace("px","");
      var temp3 = parseInt(temp2);
      selectionArr.push(temp3);
    }
    for(var x = 2*size;x<3*size;x++) //these get  the arrays to be put into the algorithms
    {
      var temp = arrayBars[x].style;
      var tempHeight = temp.height;
      var temp2 = tempHeight.replace("px","");
      var temp3 = parseInt(temp2);
      heapArr.push(temp3);
    }
    for(var x = 3*size;x<4*size;x++) //these get  the arrays to be put into the algorithms
    {
      var temp = arrayBars[x].style;
      var tempHeight = temp.height;
      var temp2 = tempHeight.replace("px","");
      var temp3 = parseInt(temp2);
      quickArr.push(temp3);
    }
    for(var x = 4*size;x<5*size;x++) //these get  the arrays to be put into the algorithms
    {
      var temp = arrayBars[x].style;
      var tempHeight = temp.height;
      var temp2 = tempHeight.replace("px","");
      var temp3 = parseInt(temp2);
      insertionArr.push(temp3);
    }
    var bubbleAnimation = this.bubbleSortForAll(bubbleArr,0*size);
    var mergeAnimation = this.mergeSortForAll(mergeArr,1*size);
    var selectionAnimation = this.selectionSortForAll(bubbleArr,2*size);
    var heapAnimation = this.heapSortForAll(heapArr,3*size);
    var quickAnimation = this.quickSortForAll(quickArr,4*size);
    var insertionAnimation = this.insertionSortForAll(insertionArr,5*size);
    var max_length = Math.max(bubbleAnimation.length,mergeAnimation.length,selectionAnimation.length,heapAnimation.length,quickAnimation.length,insertionAnimation.length)
    var combinedAnimation = [];
    for(var x = 0; x < max_length;x++)
    {
      if(bubbleAnimation[x] != null)
      {
        combinedAnimation.push(bubbleAnimation[x]);
      }
      if(mergeAnimation[x] != null)
      {
        combinedAnimation.push(mergeAnimation[x]);
      }
      if(selectionAnimation[x] != null)
      {
        combinedAnimation.push(selectionAnimation[x]);
      }
      if(heapAnimation[x] != null)
      {
        combinedAnimation.push(heapAnimation[x]);
      }
      if(quickAnimation[x] != null)
      {
        combinedAnimation.push(quickAnimation[x]);
      }
      if(insertionAnimation[x] != null)
      {
        combinedAnimation.push(insertionAnimation[x]);
      }
    }
    var mergeCount = 0;
    for (let x = 0; x < combinedAnimation.length; x++) {
      const isColorChange = (mergeCount % 3 !== 2)&&(combinedAnimation[x][3] == "merge");
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = combinedAnimation[x];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx+1*size].style;
        const color = mergeCount % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, x * ANIMATION_SPEED_MS);
      }
      else
      {
        setTimeout(() => {
          const [barOneIdx, newHeight, newColor] = combinedAnimation[x];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          barOneStyle.backgroundColor = `${newColor}`;
        }, x * ANIMATION_SPEED_MS);
      }
      if(combinedAnimation[x][3] == "merge")
      {
        mergeCount++;
      }
    }
  }
  render() {
    const {array} = this.state;
    if(this.state.showAll) //shows 6 charts
    {
      return (
        <div className="page-container-show-all">
          <div class="header">
            <h1>Sorting Algorithm Visualizer</h1>
          </div>
          <div class="arrays-container-all">
            <div className="text-array-container">
              <h2>Bubble Sort</h2>
              <div className="array-container-show-all" id="bubble-sort">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    height: `${value}px`,
                  }}></div>
              ))}
              </div>
            </div>
            <div className="text-array-container">
              <h2>Merge Sort</h2>
              <div className="array-container-show-all" id="merge-sort">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    height: `${value}px`,
                  }}></div>
              ))}
              </div>
            </div>
            <div className="text-array-container">
              <h2>Selection Sort</h2>
              <div className="array-container-show-all" id="selection-sort">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    height: `${value}px`,
                  }}></div>
              ))}
              </div>
            </div>
            <div className="text-array-container">
              <h2>Heap Sort</h2>
              <div className="array-container-show-all" id="heap-sort">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    height: `${value}px`,
                  }}></div>
              ))}
              </div>
            </div>
            <div className="text-array-container">
              <h2>Quick Sort</h2>
              <div className="array-container-show-all" id="quick-sort">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    height: `${value}px`,
                  }}></div>
              ))}
              </div>
            </div>
            <div className="text-array-container">
              <h2>Insertion Sort</h2>
              <div className="array-container-show-all" id="insertion-sort">
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    height: `${value}px`,
                  }}></div>
              ))}
              </div>
            </div>
          </div>
          <div className="bottom-bar-all">
            <div className="number-container">
              <h3>Number of Bars</h3>
              <input type="range" min="1" max="180" class="slider" id="myRange" onChange={this.handleNumChange}/>
            </div>
            <div className="speed-container">
              <h3>Speed</h3>
              <input type="range" min="5" max="100" class="slider" id="myRange" onChange={this.handleSpeedChange}/>
            </div>
            <button onClick={() => this.sortAll()} className="start-all">Start</button>
            <button onClick={() => this.resetArray()} className="new-all">Generate New Arrays</button>
            <button onClick={() => this.toggleShowAll()} className="toggle-all">Toggle</button>
          </div>
        </div>
      );
    }
    else
    {
      return (
        <div className="page-container-show-all">
          <div class="header">
            <h1>Sorting Algorithm Visualizer</h1>
          </div>
          <div class="arrays-container-one">
            <div className="array-container-one" id="one">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  height: `${value}px`,
                }}></div>
            ))}
            </div>
          </div>
          <div className="bottom-bar-one">
            <div className="number-container">
              <h3>Number of Bars</h3>
              <input type="range" min="1" max="360" class="slider" id="myRange" onChange={this.handleNumChange}/>
            </div>
            <div className="speed-container">
              <h3>Speed</h3>
              <input type="range" min="5" max="100" class="slider" id="myRange" onChange={this.handleSpeedChange}/>
            </div>
            <button onClick={() => this.resetArray()} className="new-one">Generate New Arrays</button>
            <button onClick={() => this.bubbleSort()} className="bubble-one">Bubble</button>
            <button onClick={() => this.insertionSort()} className="insertion-one">Insertion</button>
            <button onClick={() => this.selectionSort()} className="selection-one">Selection</button>
            <button onClick={() => this.mergeSort()} className="merge-one">Merge</button>
            <button onClick={() => this.quickSort()} className="quick-one">Quick</button>
            <button onClick={() => this.heapSort()} className="heap-one">Heap</button>
            <button onClick={() => this.toggleShowAll()} className="toggle-one">Toggle</button>
          </div>
        </div>
      );
    }
  }
}
function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}
function valuetext(value) {
  return `${value}`;
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
