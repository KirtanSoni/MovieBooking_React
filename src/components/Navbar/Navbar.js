import React,{ Component } from 'react';
import App from '../../App';
import { Elements } from './Elements';
import './Navbar.css';
class Navbar extends Component{
    state = { clicked: false }
    handleClick=()=>{
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <nav className="NavbarElements">
                <h1 className="Navbar-logo"><i className="fas fa-film"></i> Bookings.com</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Elements.map((item,index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url1}>
                                {item.title}    
                                </a>
                            </li>
                        )
                    })}
                </ul> 
            </nav>
        )
    }
} 
export default Navbar