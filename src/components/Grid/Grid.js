import React from 'react';
import './Grid.css';
const { useState } = React;
function Grid() {
    var items=[];
    for(let i=1;i<=100;i++){
        items.push(<Button key={i} label={i}/>);
    }
    var array=[],temp=[];
    for(let i=0;i<=100;i++){
      temp.push(items[i]);
      if(temp.length==4){
        array.push(temp);
        temp=[];
      }
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
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
        marginTop:2,
        marginRight:2,
        marginLeft:2,
        borderRadius:5
      }}
    >
    {label}
    </button>
  )
}

export default Grid