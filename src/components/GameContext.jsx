import PropTypes from 'prop-types'
import { createContext, useState } from 'react'
import { Route } from 'react-router-dom'

import { gameList } from '../config/globals'
import PageHome     from '../pages/PageHome'
import PageProducts from '../pages/PageProducts'
import PageServices from '../pages/PageServices'
import PageContact  from '../pages/PageContact'

export const GameContext = createContext(null)

export const GameContextProvider = ({ children }) => {
    const [currGame, setCurrGame] = useState(null)

    const findGame = (gamekey) => gameList.find((game) => game.key === gamekey)

    function gamesRoutes() {
        return (
            <>
                {gameList.map((gameData) => {
                    return (
                        <>
                            <Route key={`/${gameData.key}-home`}        path={`/${gameData.key}`}            element={<PageHome />}      />
                            <Route key={`/${gameData.key}-products`}    path={`/${gameData.key}/products`}   element={<PageProducts />}  />
                            <Route key={`/${gameData.key}-services`}    path={`/${gameData.key}/services`}   element={<PageServices />}  />
                            <Route key={`/${gameData.key}-contact`}     path={`/${gameData.key}/contact`}    element={<PageContact />}   />
                        </>                        
                    )
                })}
            </>
        )
    }

    const value = {
        currGame,
        setCurrGame,
        findGame,
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