import React, { useEffect } from 'react';
import HeroSection from '../../components/HomePageComponents/HeroSection';



const HomePage = () => {
    useEffect(() => {
        document.title = "HavenSpace | Home";
    }, []);
    return (
        <div>
           <HeroSection></HeroSection>
        </div>
    );
};

export default HomePage;