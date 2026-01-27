import React from 'react'

import Agency from '../../component/Agency/Agency'
import Services from '../../component/Services/Services'
import Experts from '../../component/Experts/Experts'
import Consulting from '../../component/Consulting/Consulting'
import Choose from '../../component/Choose/Choose'
import Cases from '../../component/Cases/Cases'
import Champs from '../../component/Champs/Champs'
import Career from '../../component/Career/Career'
// import LogoCarousel from '../../component/Agency/LogoCarousel'

function Home() {
  return (
    <div>
      
        <Agency />
        {/* <LogoCarousel/> */}
    
      <Services />
      <Experts />
      <Consulting/>
      <Choose/>
      <Cases/>
      <Champs/>
      <Career/>

      
    </div>
  )
}

export default Home