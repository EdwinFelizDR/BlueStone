import React from 'react'
import '../css/about.css'; // Import the about.css file


function about() {
  return (
    <div>
      <div className="container">
        <h1>Larimar: The Caribbean Gem</h1>
            <div className='whatIsLarimar'>
                <img src='./imgs/WhatIs.jpg' alt="Larimar" />
                <div>
                    <h2>What is larimar</h2>
                    <p>
                        Larimar, also known as the "Dolphin Stone" and "Atlantis Stone,"
                        is a rare beauty found exclusively in the Dominican Republic. 
                        Its hues range from light blue to blue-green, reminiscent of 
                        the Caribbean waters where it originates.
                    </p>
                </div>
            </div>

        <hr className='separator'/>
        <div className='pectolite'>
            <img src='./imgs/pectolite.png' alt="pectolite" />
            <p>
                - Larimar is a type of pectolite mineral, formed when volcanic 
                lava meets cool sea waters. Its unique composition includes cobalt 
                or copper, giving it those distinct blue shades.
            </p>
        </div>
        <hr className='separator'/>
        <div className='history'>
            <h2>The History</h2>
            <p>
                - The indigenous Taíno people revered Larimar, and its history 
                likely spans thousands of years. In 1916, Father Miguel Domingo Fuertes 
                Loren first glimpsed it, but official mining began in 1974 when Miguel Méndez 
                and a Peace Corps volunteer discovered Larimar on the shores of Barahona.
            </p>
        </div>
        <p>
            - Larimar's calming energy resonates with the tranquility of the sea. Holders 
            often feel a sense of peace and connection to ancient wisdom when working with this gemstone.
        </p>
        <p>
            - To cleanse Larimar, simply rinse it in cool water and let it bask in sunlight 
            occasionally. Its translucent beauty deserves admiration.
        </p>
        <p>
            - Remember, authenticity matters! Seek out Larimar from trusted sources 
            to ensure you're getting the real deal.
        </p>
    </div>
    </div>
  )
}

export default about