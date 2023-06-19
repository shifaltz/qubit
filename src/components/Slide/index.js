import React from 'react';
import Carousel from 'react-elastic-carousel';

export default function Slide(){
    return(
        <Carousel itemsToShow={1} enableAutoPlay autoPlaySpeed={5000} pagination={true} >
                <div className="carousel"><img src="https://sndecommerceimage.azureedge.net/content/Images/thumbs/0065870_notebook-lenovo-b330-156-led-intel-i3-7020u-4gb-500gb-w10-pro-prata-81g70003br.jpeg" alt="Slide"/></div>
                <div className="carousel"><img src="https://sndecommerceimage.azureedge.net/content/Images/thumbs/0064590_roteador-mercusys-wireless-n300-mbps-2-antenas-ipv6-mw301rbr_415.jpeg" alt="Slide"/></div>
                <div className="carousel"><img src="https://sndecommerceimage.azureedge.net/content/Images/thumbs/0065919_benq-instashow-wdc10-plug-e-play_415.jpeg" alt="Slide"/></div>
                <div className="carousel"><img src="https://sndecommerceimage.azureedge.net/content/Images/thumbs/0065929_monitor-samsung-s22f350-full-hd-22-ultra-fino-preto_415.jpeg" alt="Slide"/></div>
                <div className="carousel"><img src="https://sndecommerceimage.azureedge.net/content/Images/thumbs/0063586_brother-toner-preto-tn-419cbr-rendimento-9000-paginas.jpeg" alt="Slide"/></div>
        </Carousel>
    )        
}
