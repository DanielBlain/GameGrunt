import PropTypes from 'prop-types'
import { useState } from 'react'

import { gameList } from '../config/globals'

import { useSelected } from '../customhooks/useSelected.jsx'

const GameContext = ({ children }) => {

    const [ selected, setKey ] = useSelected(gameList, 0)

    return (
        <div>
            <h2 style={{color: 'red'}}>GameContext!!{selected && `Title-"${selected.title}" Key="${selected.key}"`}</h2>
            <button onClick={()=>{setKey(0)}}>setKey(0)</button>
            <button onClick={()=>{setKey(5)}}>setKey(5)</button>
            <button onClick={()=>{setKey(11)}}>setKey(11)</button>
            { children }
        </div>
    )

}

GameContext.propTypes = {
    children: PropTypes.element
}

export default GameContext