import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { GameContext } from '../components/GameContext'

import PageHome     from '../pages/PageHome'
import PageSearch   from '../pages/PageSearch'
import PageNotFound from '../pages/PageNotFound'

const RoutesMap = () => {
    
    const { gamesRoutes } = useContext(GameContext)

    return (
        <Routes>
            <Route path='/' exact element={<PageHome />} />
            {gamesRoutes()}
            <Route path='/search' element={<PageSearch />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default RoutesMap