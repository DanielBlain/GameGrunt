import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

/*   Typical entry to the gameList:
{
    key: string, an identifier for the game that is unique in the gameList
    title: string, the game's title for headers, lists, and navigation tabs
    style: filepath (string), the game's specific CSS file
    expansions: Array[], expansions for this game
    }
    {
        key: '',
        title: '',
        style: '',
        expansions: Array()
        },    
        */
const gameList = [
    {
        key: 'arnak',
        title: 'Arnak',
        style: '',
        expansions: Array()
    },
    {
        key: 'alien-frontiers',
        title: 'Alien Frontiers',
        style: '',
        expansions: Array()
    },
    {
        key: 'azul',
        title: 'Azul',
        style: '',
        expansions: Array()
    },
    {
        key: 'brass-birmingham',
        title: 'Brass Birmingham',
        style: '',
        expansions: Array()
    },
    {
        key: 'dead-reckoning',
        title: 'Dead Reckoning',
        style: '',
        expansions: Array()
    },
    {
        key: 'ecos',
        title: 'Ecos',
        style: '',
        expansions: Array()
    },
    {
        key: 'endless-winter',
        title: 'Endless Winter',
        style: '',
        expansions: Array()
    },
    {
        key: 'everdell',
        title: 'Everdell',
        style: '',
        expansions: Array()
    },
    {
        key: 'great-wall',
        title: 'The Great Wall',
        style: '',
        expansions: Array()
    },
    {
        key: 'hegemony',
        title: 'Hegemony',
        style: '',
        expansions: Array()
    },
    {
        key: 'isle-of-skye',
        title: 'Isle of Skye',
        style: '',
        expansions: Array()
    },
    {
        key: 'last-will',
        title: 'Last Will',
        style: '',
        expansions: Array()
    },
    {
        key: 'pandemic',
        title: 'Pandemic',
        style: '',
        expansions: Array()
    },
    {
        key: 'scythe',
        title: 'Scythe',
        style: '',
        expansions: Array()
    },
    {
        key: 'spirit-island',
        title: 'Spirit Island',
        style: '',
        expansions: Array()
    },
    {
        key: 'strasbourg',
        title: 'Strasbourg',
        style: '',
        expansions: Array()
    },
    {
        key: 'tapestry',
        title: 'Tapestry',
        style: '',
        expansions: Array()
    },
    {
        key: 'ticket-to-ride',
        title: 'Ticket To Ride',
        style: '',
        expansions: Array()
    },
    {
        key: 'viticulture',
        title: 'Viticulture',
        style: '',
        expansions: Array()
    },
    {
        key: 'wingspan',
        title: 'Wingspan',
        style: '',
        expansions: Array()
    },
]

export const GameContext = createContext(null)

export const GameContextProvider = ({ children }) => {
    const [currGame, setCurrGame] = useState(null)

    const findGame = (gamekey) => gameList.find((game) => game.key === gamekey)

    const value = {
        currGame,
        setCurrGame,
        findGame
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

GameContextProvider.propTypes = {
  children: PropTypes.element
};