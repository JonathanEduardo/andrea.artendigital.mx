import React from 'react';
import HeroCarousel from '../../components/organisms/HeroCarousel';
import CardPresentation from '../../components/organisms/CardPresentation';

const HomePage = () => {
    return (
        <div className="flex flex-col md:flex-row  p-4 md:p-6 lg:p-8 ">
            <div className="md:w-1/3 w-full  animate-fade-down animate-once animate-duration-2000  ">
                <CardPresentation 
                title="Andrea Leticia Venegas Cepeda"
                body="Ceo de Arten Digital"
                image="/assets/img/profile/andrea.png"
                path="/assets/img/profile/andrea.png"
                qr="/assets/img/profile/qrAndrea.png"
                />
            </div>
            <div className="md:w-2/3 w-full animate-fade-up animate-once animate-duration-2000 ">
                <HeroCarousel />
            </div>
        </div>
    );
};

export default HomePage;
