import React, { PureComponent } from 'react'
import styles from '../Styles/general.module.css'

export default class Productos extends PureComponent {
    render() {
        let data = [{name: "Consulting Hours", cost: 20, costmethod: "per Hour", description: "Work Work Work", logo: "/static/media/GC ISO-02.17dc08bc.svg"},{name: "Consulting Hours", cost: 20, costmethod: "per Hour", description: "Work Work Work", logo: "/imagenes/logo.png"}]
        return (
            <div className={styles.ListadoProductos}>
                {
                    data.map((pro)=>
                            <div className={styles.Proddiv}>
                                <img src={pro.logo}></img>
                                <span>{pro.name}</span>
                            </div>
                        )
                }        
            </div>
        )
    }
}
