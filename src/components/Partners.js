import React, { PureComponent } from 'react'
import Styles from '../Styles/general.module.css'
import Partner01 from '../imagenes/Partner01.png'
import Partner02 from '../imagenes/Partner02.png'
import Partner03 from '../imagenes/Partner03.png'
import Partner04 from '../imagenes/Partner04.png'
import Partner05 from '../imagenes/Partner05.png'
import Partner06 from '../imagenes/Partner06.png'
import Partner07 from '../imagenes/Partner07.png'
import Partner08 from '../imagenes/Partner08.png'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
export default class Partners extends PureComponent {

    onSlideChange(e) {
        console.log('Item`s position during a change: ', e.item);
        console.log('Slide`s position during a change: ', e.slide);
      }
    
      onSlideChanged(e) {
        console.log('Item`s position after changes: ', e.item);
        console.log('Slide`s position after changes: ', e.slide);
      }

      
    render() {
        const responsive = {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1024: {
              items: 4
            }
          };
        return (
            <div id="Partners" className={Styles.Seccion}>
              
                <div className={Styles.Barra}>
                <div className={Styles.shdivider}>
                        <div className={Styles.shdividercontent}>
                            <span className={Styles.shdividertitle}>				Partners			</span>
                        </div>
                    </div>
                    <div className={Styles.BarraContainer}>
                <AliceCarousel
       duration={500}
       autoPlay={true}
       startIndex = {1}
       fadeOutAnimation={true}
       mouseDragEnabled={true}
       playButtonEnabled={false}
       dotsDisabled={true}
        buttonsDisabled={true}
       responsive={responsive}
       autoPlayInterval={2000}
       autoPlayDirection="rtl"
       autoPlayActionDisabled={true}

      >
                    <img src={Partner01} alt="AutoDesk" height="40"></img>
                    <img src={Partner02} alt="AutoDesk" height="40"></img>
                    <img src={Partner03} alt="AutoDesk" height="40"></img>
                    <img src={Partner04} alt="AutoDesk" height="40"></img>
                    <img src={Partner05} alt="AutoDesk" height="40"></img>
                    <img src={Partner06} alt="AutoDesk" height="40"></img>
                    <img src={Partner07} alt="AutoDesk" height="40"></img>
                    <img src={Partner08} alt="AutoDesk" height="40"></img>
                    </AliceCarousel>
                </div></div>
            </div>
        )
    }
}
