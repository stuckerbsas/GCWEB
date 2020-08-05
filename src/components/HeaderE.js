import React, { PureComponent } from 'react'
import styles from '../Styles/general.module.css'
import Iso02 from '../imagenes/GC ISO-02.svg'
import  '../Styles/menu.css'

export default class HeaderE extends PureComponent {
    render() {
        return (
            <div className={styles.Encabezado}>
                <img src={Iso02} alt="logo" style={{position:"relative",left:"-45px"}}></img>
              
                <nav id="site-navigation" aria-label="Menu">
 
  <label htmlFor ="toggle-mobile-menu" aria-label="Menu">&#9776;</label>
  <input id="toggle-mobile-menu" type="checkbox" />
 
  <ul id="main-menu">
    <li><a href="/#Home">Home</a></li>
    <li><a href="/#Team">Team</a></li>
    <li><a href="/#Partners">Partners</a></li>
    <li><a href="/#About">About</a></li>
    <li><a href="/#Contact">Contact</a></li>
  </ul>
</nav>

                
                
            </div>
        )
    }
}
