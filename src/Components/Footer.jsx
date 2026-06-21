import { faFacebook, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <footer className=''>

        <div className=' bg-black/90  font-serif p-10 center  flex-col'>
            <div className='container text-center'>
                <div className='center gap-5'>
                    <span className="icons">
                    <FontAwesomeIcon  icon={faFacebook}/>
                    </span>
                    <span className="icons">
                    <FontAwesomeIcon  icon={faInstagram}/>
                    </span>
                    <span className="icons">
                    <FontAwesomeIcon  icon={faTwitter}/>
                    </span>
                    <span className="icons">
                    <FontAwesomeIcon  icon={faGoogle}/>
                    </span>
                    <span className="icons">
                    <FontAwesomeIcon  icon={faYoutube}/>
                    </span>
                </div>
                <ul className=" center flex-col lg:flex-row footList ">
                    <Link to="/">
                    <li>Home</li>
                    </Link>
                    <li>News</li>
                    <li>About</li>
                    <li>Contacts Us</li>
                    <li>Our Team</li>
                </ul>
            </div>
        </div>
        <div className='text-lg bg-black center'>
            <div className='container text-white  text-center py-3'>
            <p>Copyright <FontAwesomeIcon icon={faCopyright}  /> ; Designed By <b className='text-gray-400'>iamsasani</b> </p>

            </div>
        </div>
    </footer>

  )
}

export default Footer