import React from 'react';
import googlePlay from '../assets/icon/googleplay.svg'
import appStore from '../assets/icon/appstore.svg'

function Footer() {
  return (
    <React.Fragment>
        <footer className='footer'>
            <div className="container">
                
                 <div className="footer__box">
                 <div className="left">
                   <a href="#!"><img className='google' src={googlePlay} alt="" /></a>
                    <a href="#!"><img className='app' src={appStore} alt="" /></a>
                   </div>
                  
                   <a className='right' href="#!">© PROWEB. В целях обучения 2023</a>
                   
                 </div>
               
            </div>
        </footer>
    </React.Fragment>
  )
}

export default Footer
