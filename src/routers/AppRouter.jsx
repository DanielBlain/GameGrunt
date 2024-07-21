// AppRouter
// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { GameContextProvider } from '../components/GameContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

// Pages
import PageHome     from '../pages/PageHome'
import PageSearch   from '../pages/PageSearch'
import PageProducts from '../pages/PageProducts'
import PageServices from '../pages/PageServices'
import PageContact  from '../pages/PageContact'
import PageNotFound from '../pages/PageNotFound'

function AppRouter() {    

    return (
        <GameContextProvider>
            <BrowserRouter>
                <div className="wrapper">
                    <Header />
                    <main>
                        <Routes>
                            <Route path='/' exact element={<PageHome />} />
                                <Route path='/g' element={<PageHome />} />
                            <Route path='/search'   element={<PageSearch />}    />
                                <Route path='/search/:movieID' element={<PageSearch />} />
                            <Route path='/products' element={<PageProducts />}  />
                            <Route path='/services' element={<PageServices />}  />
                            <Route path='/contact'  element={<PageContact />}   />
                            <Route path='/notfound' element={<PageNotFound />}  />
                            <Route path='*'         element={<PageNotFound />}  />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </GameContextProvider>
    )
}

export default AppRouter