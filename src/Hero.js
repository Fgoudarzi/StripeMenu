import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
  const {isSidebarOpen, closeSidebar,closeSubmenu}=useGlobalContext()
 
  return (
   <section className="hero" onMouseOver={closeSubmenu}>
     <div className="hero-center">
       <article className="hero-info">
         <h1>Payment infostructure for the Internet</h1>
         <p>
         Aliquam vel tortor orci. In gravida est non augue vulputate, vitae scelerisque lectus fringilla. 
         Sed cursus quis dolor sed auctor. Sed tincidunt aliquam mi, vel venenatis odio pellentesque sit amet.
         </p>
         <button className='btn'>
           start now
         </button>
       </article>
       <article className="hero-images">
         <img src="phoneImg" alt="phone-Image" className="phone-img" />
       </article>
     </div>
   </section>
  )
}

export default Hero
