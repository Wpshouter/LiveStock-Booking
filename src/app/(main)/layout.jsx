import Footer from '@/component/shared/Footer';
import Header from '@/component/shared/Header';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
         <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default MainLayout;