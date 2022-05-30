import React from 'react'

// Components
import {Header} from './Header/Header';


const Layout = ( {children} ) => {
    return (
        <>
    <Header/>
    {children}
        </>
    )
}

export default Layout
