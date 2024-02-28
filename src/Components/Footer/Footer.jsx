import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">

                <h3>SpecSpecs</h3>


                <p>Find your perfect eyewear for every ocassion,from a day at the
                    beach to a hidden gem of a party , with our SpecSpecs glasses.{" "}
                </p>

            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>About us</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <li>
                    <a href='https://www.facebook.com/'>
                        <FaFacebook className="fbicons" />

                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/'>
                        <FaInstagram className="igicons" />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/'>
                        <FaGithub className="giicons" />
                    </a>
                </li>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer