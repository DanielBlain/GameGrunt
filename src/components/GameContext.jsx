import PropTypes from 'prop-types'
import { createContext } from 'react'
import { Route } from 'react-router-dom'

import { gameList } from '../config/globals'
import { useGameData } from '../customhooks/useGameData'
import PageHome     from '../pages/PageHome'
import PageProducts from '../pages/PageProducts'
import PageServices from '../pages/PageServices'
import PageContact  from '../pages/PageContact'

export const GameContext = createContext(null)

export const GameContextProvider = ({ children }) => {
    const [currGameInfo] = useGameData(gameList, '/')

    function gamesRoutes() {
        if (currGameInfo) {
            return (
                <>
                    <Route
                        key={`/${currGameInfo.key}-home`}
                        path={`/${currGameInfo.key}/home`}
                        element={<PageHome />}
                    />
                    <Route
                        key={`/${currGameInfo.key}-products`}
                        path={`/${currGameInfo.key}/products`}
                        element={<PageProducts />}
                    />
                    <Route
                        key={`/${currGameInfo.key}-services`}
                        path={`/${currGameInfo.key}/services`}
                        element={<PageServices />}
                    />
                    <Route
                        key={`/${currGameInfo.key}-contact`}
                        path={`/${currGameInfo.key}/contact`}
                        element={<PageContact />}
                    />
                </>
            )
        }
        else {
            return (
                <>
                    <Route
                        path={`/`}
                        element={<PageHome />}
                    />
                </>
            )
        }
    }

    const value = {
        currGameInfo,
        gamesRoutes
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

GameContextProvider.propTypes = {
  children: PropTypes.element
}