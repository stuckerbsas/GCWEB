import React, { PureComponent } from 'react'
import styles from '../Styles/general.module.css'
import Solucion2 from '../imagenes/Solucion02a.png'
import Solucion1 from '../imagenes/Solucion01a.png'
import Solucion3 from '../imagenes/Solucion03a.png'
import Product from './Product'
import Dato from './Dato'

export default class About extends PureComponent {
    render() {
        return (
            <div id="About" className={styles.Seccion}>
                <div className={styles.Products}>
                   <Product ImageURL={Solucion1} AltImagen="Imagen1" Titulo="Workplace
Evolution" SubTitulo="Operations Solutions" data={["Unified Endpoint Management"
,"Teamwork","Security & Compliance","Mobility","Desktop as a Service"]} ></Product>

<Product ImageURL={Solucion2} AltImagen="Imagen2" Titulo="Datacenter Evolution" SubTitulo="IT Solutions" data={["Cloud Infrastructure & Management"
,"Server & Workloads Migration","DRaaS","Automation & Cloud Backup","Security & Compliance","High Availability"]} ></Product>

<Product ImageURL={Solucion3} AltImagen="Imagen3" Titulo="Business App Evolution" SubTitulo="Development Solutions" data={["Artificial Intelligence"
,"Data Migration","Digital Transformation"]} ></Product>

                    
                   
                </div>
                <div className={styles.Achievements}>
                    <div className={styles.shdivider}>
                        <div className={styles.shdividercontent}>
                            <span className={styles.shdividertitle}>				Achievements			</span>
                        </div>
                    </div>
                    <div className={styles.DatosAbout}>
                        <Dato data="+250" Titulo="Active" SubTitulo="Clients"></Dato>
                        <Dato data="+70" Titulo="Success Proyects" SubTitulo="In the last Year"></Dato>
                        <Dato data="+14k" Titulo="Proyect Hours" SubTitulo="In the last Year"></Dato>
                        
                    </div>
                </div>
            </div>
        )
    }
}
