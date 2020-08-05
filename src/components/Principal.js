import React, { PureComponent } from 'react'
import Cuerpo from './Cuerpo';
import Header from './Header';
import About from './About';
import Team from './Team';
import Partners from './Partners';
import Contact from './Contact';
import Services from './Services';

export default class Principal extends PureComponent {
    render() {
        return (
            <div  className="Fondo">
                      <Header></Header>
      <div style={{width:"100%",height:"140px"}}></div>
      <Cuerpo></Cuerpo>
      <Team></Team>
      <Partners></Partners>
      <Services></Services>
      <About></About>
      <Contact></Contact>
            </div>
        )
    }
}
