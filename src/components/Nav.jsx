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
                {/* <li><NavLink to={currGame ? currGame.title+'/' : '/'}>Home</NavLink></li> */}
                {/* {currGame && `<li><NavLink to={currGame.title+'/search'}>Search</NavLink></li>`}
                {currGame && `<li><NavLink to={currGame.title+'/products'}>Products</NavLink></li>`}
                {currGame && `<li><NavLink to={currGame.title+'/services'}>Services</NavLink></li>`}
                {currGame && `<li><NavLink to={currGame.title+'/contact'}>Contact</NavLink></li>`} */}
            </ul>
        </nav>
    );

}

Nav.propTypes = {
    handleShowHideNav: PropTypes.func
}

export default Nav