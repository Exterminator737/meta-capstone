import React from 'react'
import heroImg from "../images/restauranfood.jpg"


export default function Header() {
  
    return (
        <header>
            <section>
                <div className='hero'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family-owned Mediterranean restaurant,
                        focused on traditional recipes served with a mordern twist
                    </p>
                    <a href = "/booking"><button aria-label='On Click'>Book a table</button></a>
                </div>
                <div className='hero-img'>
                    <img src={heroImg} alt='hero image'/>
                </div>
            </section>
        </header>
    )

}

