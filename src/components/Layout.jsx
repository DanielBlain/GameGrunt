import PropTypes from 'prop-types'
import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { GameContext } from '../customhooks/useGameContext'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    const currURL = useLocation()
    const { key, setKey } = useContext( GameContext )
 
    useEffect(() => {
        console.log('prevkey ' + key)
        console.log('currpath ' + currURL.pathname)
        setKey(currURL.pathname)
    }, [key, setKey, currURL.pathname])
    
    return (
        <div className="wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element
}

export default Layout