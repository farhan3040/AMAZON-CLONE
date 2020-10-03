import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />

            {/* product id, title, proce, rating , image */}

            <div className="home_row">

            <Product 
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Readicaly Successful Business Paperback"
            price={11.90}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />

            <Product 
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Readicaly Successful Business Paperback"
            price={11.90}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
            </div>

            <div className="home_row">

            <Product 
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Readicaly Successful Business Paperback"
            price={11.90}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />

            <Product 
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Readicaly Successful Business Paperback"
            price={11.90}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg"
            />

            <Product 
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Readicaly Successful Business Paperback"
            price={11.90}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
            </div>

            <div className="home_row">

            <Product 
            id="12345"
            title="The Lean Startup: How Constant Innovation Creates Readicaly Successful Business Paperback"
            price={11.90}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />
            </div>

        </div>
    )
}

export default Home
