import Header from '@/component/shared/Header';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
         <Header/>
            {children}
        </>
    );
};

export default MainLayout;