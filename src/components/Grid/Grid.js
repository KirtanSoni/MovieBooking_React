import React from 'react';
import './Grid.css';
const { useState } = React;

function Grid() {
  const [mov, setMov] = useState([]);
  //axios.get("http://localhost:3080/movies/bookedseat",mov).then((res)=>{    
  //setMov(res.data.movie);
  //console.log(mov);

      
   // });
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
    function selectedseats(){
      var arr=document.querySelectorAll(".active");
      arr.forEach(function (x){
        alert(x.id);
      })
    }
  return (
    <div>
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
    <button className="btn btn-primary" onClick={selectedseats}>List of Seats</button>
    </div>
  )
}

function Button({label}) {

  const [active, setActive] = useState(false);
  
  const handleClick = (e) => {
    setActive(a => !a);
  };
  var booked=[5,10,16];
  function checkID(id){
    if(booked.includes(id))
      return true;
    return false;
  }
  return (
    <button 
      type='button' 
      className={active ? 'active' : ''} 
      onClick={handleClick}
      id={label}
      style={{
        width:33,
        marginTop:4,
        marginRight:4,
        marginLeft:4,
        borderRadius:5
      }}
      disabled={checkID(label)?true:false}
    >
    {label}
    </button>
  )
}
export default Grid
