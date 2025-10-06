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
        

           <div className='flex flex-row justify-center gap-10 w-full '>
                <a href="https://wa.me/524441424697" target="_blank" rel="noopener noreferrer"><img src={whatsAppIcon} alt="WhatsApp" className="icon" /></a>
                <a href="https://www.linkedin.com/in/andreakircof" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" className="icon" /></a>
                <a href="https://www.instagram.com/andrea_alv04" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" className="icon" /></a>
           </div>


           <div className='flex flex-col items-center mt-5'>
            <div>
                <p className="text-about"> "Cuéntanos tu mayor problema que se enfrenta tu negocio… <br/> <span className='font-medium'> nosotros lo resolvemos con tecnología.</span>"</p>
            </div>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScFJSkvtE3G-mC2Y8QqQBI7-W4rJO40mmyW1K9Gh_MxN3VPHg/viewform?usp=send_form"
                className="showMore"
                target="_blank"
                rel="noopener noreferrer"
                > Formulario.</a>
            
            </div>
        </div>
    );
};


export default CardPresentation;
