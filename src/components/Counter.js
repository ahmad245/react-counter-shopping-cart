import React from 'react';

const Counter=(props)=>{
 const formatCount = () => {
    const { value } = props.counter;
    return value === 0 ? "Zero" : value;
  };

  const  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };
    return (
        <div>
        <div className="row">
          <div className="col-md-1">
            <span style={{ fontSize: 24 }} className={getBadgeClasses()}>
              {formatCount()}
            </span>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-secondary"
              onClick={()=>props.increase(props.counter.id)}
             
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-info m-2"
              onClick={()=>props.decrease(props.counter.id)}
            
             
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={()=>props.remove(props.counter.id)}
             
             
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
}
export default Counter;