import React from "react";
import "./Home.css";
 import Product from "./Product";
 import Carousel from 'react-bootstrap/Carousel'
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className='home_image'>
        <Carousel interval='4000'home_image>
        <Carousel.Item>
          <img className="home_image"
           src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-4369_Pride/AMZN_Desktop_GW_RB-4369_Pride_V4_3000x1200._CB667046754_.jpg"alt=""/>

        </Carousel.Item>
        <Carousel.Item>
          <img className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MzQ2ODYzYzMt-w3000._CB670547109_.jpg"alt=""/>

        </Carousel.Item>
        <Carousel.Item>
          <img className="home_image"
           src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MzBiNjIyYjgt/MzBiNjIyYjgt-NWM5ZWJlYTct-w3000._CB669030425_.jpg"alt=""/>

        </Carousel.Item>
        <Carousel.Item>
          <img className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-ODdjMjU1NTIt-w3000._CB655065472_.jpg"alt=""/>

        </Carousel.Item>
        <Carousel.Item>
          <img className="home_image"
           src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/Revelation-GatewayHeroDesktop-English-2x-3000x1200-V03._CB655334651_.jpg"alt=""/>

        </Carousel.Item>
        <Carousel.Item>
          <img className="home_image"
           src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_2x-3000x1200._CB661646560_.jpg"alt=""/>

        </Carousel.Item>
        </Carousel>
        </div>
       

        <div className="home__row">
          <Product
            id="ARGYWKHQ1DZ45FG6HN3H"
            title="Nintendo Switch with Gray Joy‑Con - HAC-001(-01)"
            price={299.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/415ZO0d1vnL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="41Q9V0Y4ZKB776SDBMMS"
            title="Char-Broil 20602107-01 Patio Bistro TRU-Infrared Electric Grill, Blue"
            price={179.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41J4tKkbQ5L._AC_SY322_.jpg"
          />
          
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={329.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71bf9IpGjtL._AC_UL200_SR200,200_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="90829344"
            title="Driftsun Rover 120/220 Inflatable Tandem White-Water Kayak with High Pressure Floor and EVA Padded Seats with High Back Support, Includes Action Cam Mount,..."
            price={1009.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71j9YZmvyPL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
