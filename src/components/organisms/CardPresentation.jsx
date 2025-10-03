import React from 'react';
import whatsAppIcon from '../../assets/img/icons/whatsapp.png'
import linkedinIcon from '../../assets/img/icons/linkedin.png'
import instagramIcon from '../../assets/img/icons/instagram.png'

const CardPresentation = ({ title="Andrea", body="Artista digital", image="/assets/img/carusel/webapp.png", path="/assets/img/carusel/webapp.png" }) => {
    return (
        <div className=' card'>
            <h1 className="title">{title}</h1>
            <p className="text-neutral-700 mt-2 font-bold">{body}</p>
            <img src={image} alt={title} className='w-1/2 rounded-full' />
            <a href={path} className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">Ver más</a>
            <div className="mt-4">
                <p className="text-neutral-700 font-bold">Contacto</p>
            </div>
           <div className='flex flex-row justify-center gap-10 w-full '>
                <a href="https://wa.me/5219991234567" target="_blank" rel="noopener noreferrer"><img src={whatsAppIcon} alt="WhatsApp" className="w-6 h-6" /></a>
                <a href="https://www.linkedin.com/in/andrea-leticia-venegas-cepeda/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
                <a href="https://www.instagram.com/andrea_leticia_venegas_cepeda/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
           </div>
        </div>
    );
};


export default CardPresentation;
