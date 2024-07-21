// AppRouter
// Development Components
import { BrowserRouter } from 'react-router-dom'

// Routing component
import RoutesMap from './RoutesMap'

// Components
import { GameContextProvider } from '../components/GameContext'
import Layout from '../components/Layout'

function AppRouter() {    

    return (
        <BrowserRouter>
            <GameContextProvider>
                <Layout>
                    <RoutesMap />
                </Layout>
            </GameContextProvider>
        </BrowserRouter>
    )
}

export default AppRouter