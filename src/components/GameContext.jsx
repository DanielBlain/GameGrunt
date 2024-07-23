import PropTypes from 'prop-types'

const GameContext = ({ children }) => {
  return (
    <div>
        <h2>GameContext!!</h2>
        { children }
    </div>
  )
}

GameContext.propTypes = {
    children: PropTypes.element
}

export default GameContext