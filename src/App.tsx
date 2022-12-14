import React from 'react';
import './App.css';
import data from './data/dishes.json'

export interface Root {
  dishes: Dish[]
}

export interface Dish {
  id: number
  name: string
  restaurant: string
  availableMeals: string[]
}

// get unique types
export const unique = [...new Set(data.dishes.map(item => item.availableMeals).flat())];
const unique_pair = unique.map( item => ({
  [item]: item.charAt(0).toUpperCase() + item.slice(1)
}));

// get restaurants based on type
export const results = data.dishes.filter(item => item.availableMeals.includes("lunch"));

function retrieveData (){
  
}

function App() {
  // for (var item in data.dishes){
  //   console.log("Dish " + data.dishes[item].name)
  // }
  
  // const items = results.map( item => {
  //   console.log("Restaurants " + item.restaurant)
  // });
    console.log(unique_pair);
  
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
