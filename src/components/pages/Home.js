import '../../App.css'
import Footer from '../Footer';
import Motivation from './Motivation';
import HeroSection from '../HeroSection'
import { Option } from 'nasi-lemak';

import { useLocation } from 'react-router-dom';

function Home () {
    const location = useLocation();
    const name = Option.value(Option.truthy(location.state?.data), '');
    return (
        <>
            <HeroSection />
            <Motivation />
            <Footer/>
        </>
    )
}

export default Home;
