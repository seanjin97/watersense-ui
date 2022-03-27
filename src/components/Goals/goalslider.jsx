
import React,{useState,useEffect} from "react";
export default function GoalSlider() {
    const [value,onChange]=useState(1);
    useEffect(()=>{
        const ele = document.querySelector('.buble');
      if (ele) {
        ele.style.left = `${Number(value / 4)}px`;
      }
    })
    return (
      <div className="slider-parent">
        <input type="range" min="1" max="50000" value={value}
           onChange={({ target: { value: radius } }) => {
                      onChange(radius);
                    }}
        />
        <div className="buble"> 
        {'Monthly: ' + value +'L'}
        <br></br>
        <br></br>
        <button className ="submit">Set Limit</button>   
        </div>
      </div>
  
    );
  }