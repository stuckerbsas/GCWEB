import React, { PureComponent } from 'react'
import styles from '../Styles/general.module.css'

export default class Product extends PureComponent {
    render() {
        return (
            <div style={{borderLeft: "0.5px solid #cccccc"}}>
                 <div className={styles.Product}>
                        <div className={styles.ProductDiv}>
                            <div className={styles.ProductImagen}>
                                <img src={this.props.ImageURL} height="50"  className={styles.Icono} alt={this.props.AltImgen}></img>
                            </div>
                            <div className={styles.ProductTitulo}>
                            <span className={styles.TituloProduct}>{this.props.Titulo}</span><br/>
                                <span className={styles.SubTituloProduct}>{this.props.SubTitulo}</span>
                            </div>
                        </div>
                        <ul className={styles.Listado}>
                            {
                                this.props.data.map(dato=>
                                    <li>{dato}</li>
                                    )
                            }
                           
                        </ul>
                    </div>
            </div>
        )
    }
}
