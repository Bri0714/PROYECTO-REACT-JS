import React from 'react';
import './Footer.css';
import { CiFacebook } from 'react-icons/ci'
import {GrInstagram} from 'react-icons/Gr'
import {AiFillTwitterCircle} from 'react-icons/ai'

function Footer() {
    return (
        <footer className='fondo py-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <h5 className = 'textfooter'>Información de contacto</h5>
                        <p className = 'textfooter'>Dirección: 123 Calle Principal, Ciudad</p>
                        <p className='textfooter'>Teléfono: (123) 456-7890</p>
                        <p className='textfooter'>Correo electrónico: info@ejemplo.com</p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <h5  className='textfooter' >Redes sociales</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='https://www.facebook.com/' className = 'facebook' target='_blank' rel='noreferrer'>
                                    <CiFacebook size={35}/>
                                </a>
                            </li>
                            <li>
                                <a href='https://twitter.com/'  className = 'twitter' target='_blank' rel='noreferrer'>
                                    <AiFillTwitterCircle size={35}/>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/' className = 'instagram' target='_blank' rel='noreferrer'>
                                    <GrInstagram size={25}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;