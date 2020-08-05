import React, { PureComponent } from 'react'
import styles from '../Styles/general.module.css'
import Solucion2 from '../imagenes/Solucion02a.png'
import Solucion1 from '../imagenes/Solucion01a.png'
import Solucion3 from '../imagenes/Solucion03a.png'
import Product from './Product'
export default class Services extends PureComponent {
    render() {
        return (
            <div id="Services" className={styles.Seccion}>
                <div className={styles.shdivider}>
                        <div className={styles.shdividercontent}>
                            <span className={styles.shdividertitle}>				Our Services			</span>
                        </div>
                    </div>
                    <div className={styles.BarraContainer}></div>
            <div className={styles.Products}>
               <Product ImageURL={Solucion1} AltImagen="Imagen1" Titulo="Workplace
Evolution" SubTitulo="Operations Solutions" data={[{title:"Unified Endpoint Management", url: "Unified_Endpoint_Management"}
,{title:"Teamwork",url:"TeamWork"},{title:"Security & Compliance",url:"Security_&_Compliance"},{title:"Mobility",url:"Mobility"},
{title:"Desktop as a Service", url:"Desktop_as_a_Service"}]} ></Product>

<Product ImageURL={Solucion2} AltImagen="Imagen2" Titulo="Datacenter Evolution" SubTitulo="IT Solutions" data={[{title:"Cloud Infrastructure & Management",url:"Cloud_Infrastructure_&_Management"}
,{title:"Server & Workloads Migration",url:"Server_&_Workloads_Migration"},{title:"DRaaS",url:"DRaaS"},{title:"Automation & Cloud Backup",url:"Automation_&_Cloud_Backup"}
,{title:"Security & Compliance",url:"Security_&_Compliance"},{title:"High Availability",url:"High_Availability"}]} ></Product>

<Product ImageURL={Solucion3} AltImagen="Imagen3" Titulo="Business App Evolution" SubTitulo="Development Solutions" data={[{title:"Artificial Intelligence",url:"Artificial_Intelligence"},
{title:"Data Migration",url:"Data_Migration"},{title:"Digital Transformation",url:"Digital_Transformation"}]} ></Product>

                
               
            </div>
                
            </div>
        )
    }
}
