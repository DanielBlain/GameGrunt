import PropTypes from 'prop-types'
import { useState } from 'react'

import { gameList } from '../config/globals'

import { useSelected } from '../customhooks/useSelected.jsx'

const GameContext = ({ children }) => {

    const [ selected, setKey ] = useSelected(gameList, 'arnak')

    return (
        <div>
            <h2 style={{color: 'red'}}>GameContext!!{selected && `Title-"${selected.title}" Key="${selected.key}"`}</h2>
            <p>initial game: arnak</p>
            <button onClick={()=>{setKey('pandemic')}}>setKey(pandemic)</button>
            <button onClick={()=>{setKey('wingspan')}}>setKey(wingspan)</button>
            <button onClick={()=>{setKey('ticket-to-ride')}}>setKey(ticket to ride)</button>
            { children }
        </div>
    )

}

GameContext.propTypes = {
    children: PropTypes.element
}

export default GameContext