import React, { Component } from 'react'
import styles from '../Styles/general.module.css'

export default class Cuerpo extends Component {
    render() {
        return (
            <div id="Home" className={styles.Seccion}>
                <div className={styles.Home}>
                    <div className={styles.MensajeCentral}>
                        <span className={styles.Titulo}>IT EVOLUTION</span><br/>
                        <span className={styles.SubTitulo}>for human work</span><br/>
                        <span className={styles.Texto}>25 years accompanying our</span><br/>
                        <span className={styles.Texto}>customers in their IT challenges</span><br/>
                    </div>
                </div>
            </div>
        )
    }
}
