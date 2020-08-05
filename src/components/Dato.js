import React, { PureComponent } from 'react'
import styles from '../Styles/general.module.css'

export default class Dato extends PureComponent {
    render() {
        return (
            <div className={styles.DatoAbout}>
                <div>
                    <span className={styles.Datodata}>{this.props.data}</span>
                </div>
                <div className={styles.DatoDiv} style={this.props.arreglo} >
                    <span className={styles.DatoTitulo}>{this.props.Titulo}</span><br/>
                    <span className={styles.DatoSubtitulo}>{this.props.SubTitulo}</span><br/>
                </div>
            </div>
        )
    }
}
