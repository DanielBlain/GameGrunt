import { Routes, Route } from 'react-router-dom'

import PageHome from '../pages/PageHome'
import PageSearch from '../pages/PageSearch'
import PageNotFound from '../pages/PageNotFound'

const RoutesMap = () => {

    return (
        <Routes>
            <Route path='/' exact element={<PageHome />} />
            <Route path='/search' element={<PageSearch />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default RoutesMap