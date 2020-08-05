import React, { PureComponent } from 'react'

import HeaderE from './HeaderE'

import styles from '../Styles/producto.module.css'
import Desktop from '../imagenes/Desktop-Security.png'
import Mobility from '../imagenes/mobility.png'
import Teamwork from '../imagenes/teamwork.png'
import Security from '../imagenes/security-compliance.png'
import DesktopServices from '../imagenes/Desktop-Service.png'
import cloudinfra from '../imagenes/Cloud-Infrastructure-Management.png'
import Workloads from '../imagenes/Server-Workload-Migration.png'
import ddras from '../imagenes/DRaaS.png'
import Automation from '../imagenes/Automation-Cloud-Backup.png'
import HighAvi from '../imagenes/High-Availability.png'
import ia from '../imagenes/ia.png'
import DataMigration from '../imagenes/data-migration.png'
import DigitalT from '../imagenes/Digital-Transformation.png'

export default class Ecommerce extends PureComponent {
    render() {
        let objeto = {ImageURL:Teamwork,//"https://www.microsoft.com/security/blog/wp-content/uploads/2019/02/OfficeNews_SecurityBlog_Header_04_Blue-1335x500.png",
                      Title:"The evolution of Threat Protection",
                      Url:"The_evolution_of_Threat_Protection",
                      Descripcion:"Learn about the latest enhancements to Threat Protection offering next-gen SIEM, hybrid infrastructures, and holistic security for the modern workplace."}
        return (
            <div>
                <HeaderE></HeaderE>
                <div style={{width:"100%",height:"140px"}}></div>
                
                <div className={styles.Titulo} style={{backgroundImage:"url(" + Desktop + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Unified Endpoint Management"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + Teamwork + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Teamwork"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + Security + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Security & Compliance"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + Mobility + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Mobility"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + DesktopServices + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Desktop as a Service"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + cloudinfra + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Cloud Infrastructure & Management"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>  
                <div className={styles.Titulo} style={{backgroundImage:"url(" + Workloads + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Server & Workloads Migration"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + ddras + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"DRaaS"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + Automation + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Automation & Cloud Backup"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + HighAvi + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"High Availabilit"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + ia + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Artificial Intelligence"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + DataMigration + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Data Migration"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>
                <div className={styles.Titulo} style={{backgroundImage:"url(" + DigitalT + ")"}}>
                    <div className={styles.CTitulo} >
                        <h1 className={styles.STitulo}>"Digital Transformation"</h1>
                        <p className={styles.PTitulo}>{objeto.Descripcion}</p>
                    </div>
                </div>  
            </div>
        )
    }
}
