// AppRouter
// Development Components
import { BrowserRouter } from 'react-router-dom'

// Components
import { GameContextProvider } from '../customhooks/useGameContext.jsx'
import Layout from '../components/Layout'
import RoutesMap from './RoutesMap'

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