import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from '../customhooks/useGameContext'

const PageNotFound = () => {
    const { currGame } = useContext( GameContext )
 
    return (
        <main>
            <section className="page-not-found-section">
                <h2>404 ... : </h2>
                <p>Page not found{currGame && ` - ${currGame.title}`}</p>
                <p>Go to <Link to="/">Home</Link> page.</p>
            </section>
        </main>
    );
    
};

export default PageNotFound