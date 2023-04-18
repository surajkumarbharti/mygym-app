// import React from 'react'
// import offerimage from '../images/offer.png'

// function Offer ()  {
//   return (
//     <div id='offer'>
//         <div className='pr-heading'>
//             <h1>A BIG <span>OFFER</span>FOR THIS SUMMER</h1>
//             <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//             <div className='pr-btns'>
//                 <a href='#' className='pr-btn'>JOIN NOW</a>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Offer
import React from 'react'
import offerimage from '../images/offer.png';

function About() {
  return (
    <div id = 'offer'>
        <div className='offer-image'>
            <img src={offerimage} alt = ''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex impedit recusandae explicabo dicta
                 ipsa quo eaque atque ipsum sapiente dolore,
                  maxime, consequuntur, nam debitis. Voluptates.</p>
                  <button className='pr-btn'>READ MORE</button>
        </div>

    </div>
  )
}

export default About