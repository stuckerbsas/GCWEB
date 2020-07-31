import React, { PureComponent } from 'react'
import Styles from '../Styles/general.module.css'
import Manager01 from '../imagenes/Manager01.png'
import Manager02 from '../imagenes/Manager02.png'
import Manager03 from '../imagenes/Manager03.png'
import Manager04 from '../imagenes/Manager04.png'
import linkedin from '../imagenes/in.png'



export default class Team extends PureComponent {
    render() {
        return (
            <div id="Team" className={Styles.Seccion}>
                <div className={Styles.Linea}>
                    <span className={Styles.TeamSubTitulo}>One & Only</span>
                </div>
                <div className={Styles.Linea}>
                    <span className={Styles.TeamTitulo}>Team of Experts</span>
                </div>
                <div className={Styles.Expertos}>
                <div className={Styles.Experto}>
                        <div className={Styles.ImagenExperto}>
                            <img src={Manager01} alt="Daniela Hansen - Institutional Relationship Director"></img>
                        </div>
                        <div className={Styles.SpanExpertos}>
                            <span className={Styles.TituloExperto}>
                                Daniela Hansen
                            </span><br/>
                            <span className={Styles.SubTituloExperto}>
                                Institutional Relationship Director
                            </span><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/danielahansen/"><img height="14" src={linkedin} alt="linkeding"></img></a>
                        </div>
                    </div>
                    <div className={Styles.Experto}>
                        <div className={Styles.ImagenExperto}>
                            <img src={Manager02} alt="Mariano Riccio - Comercial Director"></img>
                        </div>
                        <div className={Styles.SpanExpertos}>
                            <span className={Styles.TituloExperto}>
                                Mariano Riccio
                            </span><br/>
                            <span className={Styles.SubTituloExperto}>
                                Comercial Director
                            </span><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marianoriccio/"><img height="14" src={linkedin} alt="linkeding"></img></a>
                        </div>
                    </div>
                    <div className={Styles.Experto}>
                        <div className={Styles.ImagenExperto}>
                            <img src={Manager03} alt="Rodrigo Biazzo - Operational Director"></img>
                        </div>
                        <div className={Styles.SpanExpertos}>
                            <span className={Styles.TituloExperto}>
                                Rodrio Biazzo
                            </span><br/>
                            <span className={Styles.SubTituloExperto}>
                                Operation Director
                            </span><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rodrigobiazzo/"><img height="14" src={linkedin} alt="linkeding"></img></a>
                        </div>
                    </div>
                    <div className={Styles.Experto}>
                        <div className={Styles.ImagenExperto}>
                            <img src={Manager04} alt="Fernando Gauchat - Financial Director"></img>
                        </div>
                        <div className={Styles.SpanExpertos}>
                            <span className={Styles.TituloExperto}>
                                Fernando Gauchat
                            </span><br/>
                            <span className={Styles.SubTituloExperto}>
                                Financial Director
                            </span><br/>
                                <a target="_blank" rel="noopener noreferrer" className={Styles.AExperto} href="https://www.linkedin.com/in/fernando-gauchat/"><img height="14" src={linkedin} alt="linkeding"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
