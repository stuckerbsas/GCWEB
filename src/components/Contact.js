import React, { PureComponent } from 'react'
import styles from '../Styles/general.module.css'
import { Map, GoogleApiWrapper,InfoWindow ,Marker } from 'google-maps-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from "@fortawesome/free-solid-svg-icons";

var FA = require('react-fontawesome');
const mapStyles = {
    width: '100%',
    height: '100%'
  };
  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '300px'
  }
 class Contact extends PureComponent {
    constructor(props)
    {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
          };
    }
    
      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });    
    render() {
        return (
            <div id="Contact">
                <div className={styles.ContactDiv}>
                    <div className={styles.Detalle} style={{backgroundColor:"#0344e7"}}>
                    <div className={styles.centrado}>
                          <div>
                            <a href="mailto:info@gemco.tech"><span style={{color:"white",fontSize:"20px"}}><FA size="2x" inverse={false}  name="envelope"/></span></a>
                          </div>
                          <div>
                            <div>
                            <b style={{color:"white",fontSize:"20px"}}>Mail</b>
                            </div>
                            <div>
                              <a href="mailto:info@gemco.tech"><span style={{color:"white",fontSize:"20px"}}>Info@gemco.tech</span></a>
                            </div>
                          </div>
                             
                         </div>
                    
                    </div>
                    <div className={styles.Detalle} style={{backgroundColor:"#0039c6"}}>
                    <div className={styles.centrado}>
                          <div>
                             <span style={{color:"white",fontSize:"20px"}}><FontAwesomeIcon icon={faClock} size="2x" /></span>
                          </div>
                          <div>
                            <div>
                            <b style={{color:"white",fontSize:"20px"}}>Working hours</b>
                            </div>
                            <div>
                            <span style={{color:"white",fontSize:"20px"}}>Mon - Fri 9 - 18 </span>
                            </div>
                          </div>
                             
                         </div>
                    </div>
                    <div className={styles.Detalle} style={{backgroundColor:"#032f9c"}}>
                    <div className={styles.centrado} style={{width:"200px"}}>
                          <div>
                            <span style={{color:"white",fontSize:"20px"}}><FA size="2x" inverse={false}  name="phone"/></span>
                          </div>
                          <div>
                            <div>
                            <b style={{color:"white",fontSize:"20px"}}>Telephone</b>
                            </div>
                            <div>
                              <span style={{color:"white",fontSize:"20px"}}> (305) 301 9065</span>
                            </div>
                          </div>
                             
                         </div>
                    </div>

                </div>
                
                 <Map 
                 containerStyle={containerStyle}
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{
         lat: 26.8014334,
         lng: -80.0340763
        }}>
            <Marker onClick={this.onMarkerClick} name='Geminis Consulting'></Marker>
            <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
          height="100"
        >
          <div>
            <h4 className={styles.mapdTitulo}>{this.state.selectedPlace.name}</h4>
            <span className={styles.mapTitulo}>5086 N Ocean Dr</span><br/>
            <span className={styles.mapSubTitulo}>RIVIERA BEACH, FL 33404-2646</span><br/>
            <span className={styles.mapSubTitulo}><FA name="phone"></FA> ‪(305) 301 9065‬</span>
          </div>
        </InfoWindow>
        </Map>
        </div>
            
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCbY-q6qisNeI7Bui2dLNrDZY5PkgvQBSc'
  })(Contact);