import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa"


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
            <hr />
                <h3>SpecSpecs</h3>


                <p>Find your perfect eyewear for every ocassion,from a day at the
                    beach to a hidden gem of a party , with our SpecSpecs glasses.{" "}
                </p>

            </div>
            <ul className="footer-links">
                <div className="name-list">
                <li>Rusha</li>
                <a href="https://github.com/rushashrestha" target="-blank">
                    <FaGithub className="giicons" />{" "}
                  </a>
                </div>
               
               <div className="name-list">
               <li>Manjila</li>
                <a href='https://github.com/manjilaaa'>
                        <FaGithub className="giicons" />
                    </a>
               </div>
               
               <div className="name-list">
               <li>Mandira</li>
                <a href='https://github.com/Mandira-Shiwakoti'>
                        <FaGithub className="giicons" />
                    </a>
               </div>
                
                <div className="name-list">
                <li>Dipika</li>
                <a href='https://github.com/dpkaaaaa'>
                        <FaGithub className="giicons" />
                    </a>
                </div>
                
            </ul>
       
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer