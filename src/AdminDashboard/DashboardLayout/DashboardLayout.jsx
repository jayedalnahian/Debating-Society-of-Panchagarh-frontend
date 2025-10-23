import React from 'react';
import { Outlet } from 'react-router';
import DashboardNavbar from '../DashboardComponents/DashboardNavbar';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;