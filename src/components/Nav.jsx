import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Nav = ({ handleShowHideNav }) => {

    const closeNav = (e) => {
        if( window.innerWidth < 600){
            handleShowHideNav();
        } else {
            e.target.blur();
        }
    }

    return (
        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/products'>Products</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    );

}

Nav.propTypes = {
    handleShowHideNav: PropTypes.func
}

export default Nav