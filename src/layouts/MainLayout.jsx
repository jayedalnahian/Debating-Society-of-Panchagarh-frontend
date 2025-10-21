import Navbar from '../components/MainLayoutComponents/Navbar';
import Footer from '../components/MainLayoutComponents/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen relative top-16'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;