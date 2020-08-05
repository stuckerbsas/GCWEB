import React, { PureComponent } from 'react'
import styles from '../Styles/general.module.css'

import Dato from './Dato'


 // var test =[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];
export default class About extends PureComponent {
   
    render() {
        return (
            <div id="About" className={styles.Seccion}>
                
                <div className={styles.Achievements}>
                    <div className={styles.shdivider}>
                        <div className={styles.shdividercontent}>
                            <span className={styles.shdividertitle}>				Achievements			</span>
                        </div>
                    </div>
                    <div className={styles.DatosAbout}>
                        <Dato data="+250" Titulo="Active" arreglo={{left:'-30px'}} SubTitulo="Clients"></Dato>
                        <Dato data="+70" Titulo="Success Proyects" SubTitulo="In the last Year"></Dato>
                        <Dato data="+14k" Titulo="Proyect Hours" SubTitulo="In the last Year"></Dato>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
