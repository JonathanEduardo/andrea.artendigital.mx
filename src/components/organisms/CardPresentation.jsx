import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import whatsAppIcon from '../../assets/img/icons/whatsapp.png';
import linkedinIcon from '../../assets/img/icons/linkedin.png';
import instagramIcon from '../../assets/img/icons/instagram.png';

const CardPresentation = ({
  title = "Andrea",
  body = "Artista digital",
  image = "/assets/img/carusel/webapp.png",
  path = "/assets/img/carusel/webapp.png",
  qr = ""
}) => {

  // 🧷 Referencia al componente que queremos capturar
  const cardRef = useRef(null);

  // 📸 Función que convierte el componente en imagen y lo descarga
  const handleDownload = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        backgroundColor: 'white', // evita transparencia
        quality: 1.0,
      });

      const link = document.createElement('a');
      link.download = `${title.replace(/\s+/g, "_")}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Error al generar la imagen:', error);
    }
  };

  return (
    <div ref={cardRef} className='card bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-4'>

      <div className="flex flex-col items-center">
        <h1 className="title text-2xl font-bold text-gray-800 text-center">{title}</h1>
        <br />
        <p className="body text-gray-600 text-center ">{body}</p>
        <img src={image} alt={title} className='photo w-40 h-40 object-cover rounded-full my-4' />

        <button
        onClick={handleDownload}
        className="buttonDownload "
      >
        Descargar tarjeta
      </button>
      </div>

      {/* 🔽 Botón para descargar */}
    

      <div className='flex flex-row justify-center gap-8 mt-4'>
        <a href="https://wa.me/524441424697" target="_blank" rel="noopener noreferrer">
          <img src={whatsAppIcon} alt="WhatsApp" className="icon w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/andreakircof" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon w-8 h-8" />
        </a>
        <a href="https://www.instagram.com/andrea_alv04" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="icon w-8 h-8" />
        </a>
      </div>

      <div className='flex flex-col items-center mt-5'>
        <p className="text-about text-center italic text-gray-700">
          "Cuéntanos tu mayor problema que enfrenta tu negocio… <br />
          <span className='font-medium'> nosotros lo resolvemos con tecnología.</span>"
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScFJSkvtE3G-mC2Y8QqQBI7-W4rJO40mmyW1K9Gh_MxN3VPHg/viewform?usp=send_form"
          className="showMore mt-2 text-blue-600  hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Formulario
        </a>
      </div>
    </div>
  );
};

export default CardPresentation;
