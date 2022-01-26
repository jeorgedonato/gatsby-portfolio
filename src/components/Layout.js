import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { AppProvider } from '../context/siteContext'

const Layout = ( { children } ) => {

    return (
        <>
            <AppProvider>
                <div className='flex min-h-screen relative flex-col font-sans overflow-hidden'>
                    <Header />
                    <div className='flex-grow'>
                        {children}
                    </div>
                    <Footer />
                </div>
            </AppProvider>
        </>
    )
}

export default Layout