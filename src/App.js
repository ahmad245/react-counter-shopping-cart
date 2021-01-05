import React, { useState } from 'react';
import './App.css';

import Counters from './components/Counters';
import NavBar from './components/Navbar';

function App() {
  const [counters,setCounter]= useState(  [
                                            { id: 1, value: 0 },
                                            { id: 2, value: 0 },
                                            { id: 3, value: 0 },
                                            { id: 4, value: 0 }
                                         ]
                                        );
 const increase =(id)=>{
    let newCounters=[...counters];
    let index=newCounters.findIndex((el)=>el.id==id);
    newCounters[index].value=newCounters[index].value + 1;
    setCounter(newCounters);

  }       
 const  decrease=(id)=>{
    let newCounters=[...counters];
    let index=newCounters.findIndex((el)=>el.id==id);
    if(newCounters[index].value > 0){
      newCounters[index].value=newCounters[index].value - 1;
      setCounter(newCounters);
    }
   

  }   
  const remove=(id)=>{
    let newCounters=[...counters];
    let index=newCounters.findIndex((el)=>el.id==id);
    newCounters.splice(index,1);
    setCounter(newCounters);
  }  
  const totalCounters=()=>{
    let sum=0;
    for (const counter of counters) {
       if( counter.value > 0){
         sum +=1;
       }
    }
    return sum;
  }                                     
  return (
    <div className="App">
      <NavBar totalCounters={totalCounters()} />
     <Counters remove={remove} increase ={increase } decrease={decrease} counters={counters} />
    </div>
  );
}

export default App;
