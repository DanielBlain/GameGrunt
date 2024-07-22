// AppRouter
// Development Components
import { BrowserRouter } from 'react-router-dom'

// Routing component
import RoutesMap from './RoutesMap'

// Components
import Layout from '../components/Layout'

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <RoutesMap />
            </Layout>
        </BrowserRouter>
    )
}

export default AppRouter