import React from 'react';
import Counter from './Counter';

const Counters=(props)=>{
   
 
   const counterList= props.counters.map((counter)=>{
        return <Counter remove={props.remove} increase ={props.increase } decrease={props.decrease} key={counter.id} counter={counter} />
    })
    console.log(props.counters);
    
    return (
        <React.Fragment>
           {counterList}
        </React.Fragment>
       
    )
}
export default Counters;