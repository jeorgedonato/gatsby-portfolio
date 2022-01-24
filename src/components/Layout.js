import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ( { children } ) => {

    return (
        <>
            <div className='flex min-h-screen relative flex-col font-sans overflow-hidden'>
                <Header />
                <div className='flex-grow'>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout