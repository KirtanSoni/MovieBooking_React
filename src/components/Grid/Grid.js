import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Grid.css';
const { useState } = React;
class Grid extends Component {
  render(){
    var items=[];
    for(let i=1;i<=80;i++){
        items.push(<Button key={i} label={i}/>);
    }
    var array=[],temp=[];
    for(let i=0;i<=80;i++){
      temp.push(items[i]);
      if(temp.length==8){
        array.push(temp);
        temp=[];
      }
    }
    function Button({label}) {

      const [active, setActive] = useState(false);
      
      const handleClick = (e) => {
        setActive(a => !a);
      };
      
      return (
        <button 
          type='button' 
          className={active ? 'active' : ''} 
          onClick={handleClick}
          id={label}
          style={{
            width:33,
            marginTop:5,
            marginRight:5,
            marginLeft:5,
            borderRadius:5
          }}
        >
        {label}
        </button>
      )
    }
  return (
    <div className="Grid">
        <table>
        <tbody>
          {array.slice(0, array.length).map((item, index) => {
            return (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
                <td>{item[7]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
}
export default Grid
