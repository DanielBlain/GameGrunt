// AppRouter
// Development Components
import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

// Pages
import PageHome     from '../pages/PageHome'
import PageSearch   from '../pages/PageSearch'
import PageProducts from '../pages/PageProducts'
import PageServices from '../pages/PageServices'
import PageContact  from '../pages/PageContact'
import PageNotFound from '../pages/PageNotFound'

export const AppContext = createContext(null)

function AppRouter() {    

    const [userName, setUserName] = useState(null)

    return (
        <AppContext.Provider value={{userName, setUserName}}>
            <BrowserRouter>
                <div className="wrapper">
                    <Header />
                    <main>
                        <Routes>
                            <Route path='/'         element={<PageHome />}      />
                            <Route path='/search'   element={<PageSearch />}    />
                                <Route path='/search/:movieID' element={<PageSearch />} />
                            <Route path='/products' element={<PageProducts />}  />
                            <Route path='/services' element={<PageServices />}  />
                            <Route path='/contact'  element={<PageContact />}   />
                            <Route path='*'         element={<PageNotFound />}  />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default AppRouter