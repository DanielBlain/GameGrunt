import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import PageHome from '../pages/PageHome'
import PageProducts from '../pages/PageProducts'
import PageServices from '../pages/PageServices'
import PageSearch from '../pages/PageSearch'
import PageContact from '../pages/PageContact'
import PageNotFound from '../pages/PageNotFound'

function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <div className='wrapper'>
                            <Header />
                            <Outlet />
                            <Footer />
                        </div>
                    }
                >
                    <Route path='/' exact element={<PageHome />} />
                    <Route path='/search' element={<PageSearch />} />
                    <Route path='/:gamekey' exact element={<PageHome />} />
                        <Route path='/:gamekey/products' element={<PageProducts />} />
                        <Route path='/:gamekey/services' element={<PageServices />} />
                        <Route path='/:gamekey/contact' element={<PageContact />} />
                        <Route path='/:gamekey/*' element={<PageNotFound />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter