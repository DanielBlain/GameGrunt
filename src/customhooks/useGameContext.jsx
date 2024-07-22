import PropTypes from 'prop-types'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'

import { useKeys } from './useKeys'
import { gameList } from '../config/globals'

export const GameContext = createContext('/', null)

/*****
 * Inspired by: https://www.youtube.com/watch?v=I7dwJxGuGYQ ; ByteGrad
 * 
 * useGameContextProvider
 * 
 * If the URL contains the key of an object in the gameList (array),
 * that game becomes the currGame.
 * 
 * gameList keys ought to be unique; or else only the first instance is returned
 * */
export function GameContextProvider({ children }) {
    const currURL = useLocation()
    const [key, setKey, currGame] = useKeys(gameList, currURL.pathname)
    
    return (
        <GameContext.Provider
            value={{
                key,
                setKey,
                currGame
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

GameContextProvider.propTypes = {
    children: PropTypes.element
}

export default GameContext