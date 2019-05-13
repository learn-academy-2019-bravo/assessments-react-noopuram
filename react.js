React Assessments.......

1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
import React, { Component } from 'react';
class Comp extends component {
  render(){
    return(
      <h1>I am a component<h1>
    )
  }
}


2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]
//
stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)

})

function vanila (arr) {

  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]+ "is at index: "+i);

  var x =  arr[i]+ "is at index: "+i
  console.log(x);
  }
}console.log(vanila(stuffArray));

your for loop here, you can use the same stuffArray array


3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the signle lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price
var price1 = [10, 27, 9, 57, 46, 11]

var steal = function(price){

  var newPrice = price.sort(function(a, b){return a-b})
  return newPrice[0]
}
console.log(steal(price1));
  // your logic here
