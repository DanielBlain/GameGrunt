import PropTypes from 'prop-types'

// Components
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {

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