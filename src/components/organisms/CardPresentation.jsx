import React from 'react';
import whatsAppIcon from '../../assets/img/icons/whatsapp.png'
import linkedinIcon from '../../assets/img/icons/linkedin.png'
import instagramIcon from '../../assets/img/icons/instagram.png'

const CardPresentation = ({ title="Andrea", body="Artista digital", image="/assets/img/carusel/webapp.png", path="/assets/img/carusel/webapp.png", qr="" }) => {
    return (
        <div className=' card'>
            <div className="flex flex-col items-center">
                <h1 className="title">{title}</h1>
                <p className="body">{body}</p>
                <img src={image} alt={title} className='photo' />
            </div>
            <div>
                <a href={path} className="showMore">Ver más</a>
            </div>
            {/* <div className="mt-4">
                <p className="text-neutral-700 font-bold">Contacto</p>
                <div className="qr">
                    <img src={qr} alt="" />
                </div>
            </div> */}
     
        <hr />  
           <div className='flex flex-row justify-center gap-10 w-full '>
                <a href="https://wa.me/5219991234567" target="_blank" rel="noopener noreferrer"><img src={whatsAppIcon} alt="WhatsApp" className="icon" /></a>
                <a href="https://www.linkedin.com/in/andrea-leticia-venegas-cepeda/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" className="icon" /></a>
                <a href="https://www.instagram.com/andrea_leticia_venegas_cepeda/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" className="icon" /></a>
           </div>
        </div>
    );
};


export default CardPresentation;
