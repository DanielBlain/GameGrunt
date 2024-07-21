import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'
import { appTitle } from '../config/globals'

const Header = () => {

    const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    const isDesktop = (e) => {
        if(e.matches){
            setShowNav(false)
        }
    }
    
    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width: 600px)')
        mediaQuery.addEventListener('change', isDesktop)

        return() => mediaQuery.removeEventListener('change', isDesktop)
    }, [])

    return (
        <header className={showNav ? 'show' : ''}>
            <h1><Link to="/">{appTitle}</Link></h1>
            {/**
             * HTML for the Hamburger icon modified from HTMl
             * found at this codepen:
             * https://codepen.io/RRoberts/pen/ZBYaJr
             */}
            <button className="btn-main-nav"
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={toggleNav}
                    >
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                <span className="sr-only">Menu</span>
            </button>
            <Nav handleShowHideNav={toggleNav} />
        </header>
    )

}

Header.propTypes = {
    navPages: PropTypes.array
}

export default Header
