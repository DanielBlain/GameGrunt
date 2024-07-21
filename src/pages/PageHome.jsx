import { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { GameContext } from '../components/GameContext'
import { appTitle } from '../config/globals'

const PageHome = () => {

    const { currGame, setCurrGame, findGame } = useContext(GameContext)
    const getQueryParams = (search) => new URLSearchParams(search)
    const queryParams = getQueryParams(useLocation().search)
    const gamekey = queryParams.get('key')
    const expansionkey = queryParams.get('expansion')
    const navigate = useNavigate()

    const [count, setCount] = useState(0)

    useEffect(() => {
        const chosenGame = findGame(gamekey)
        if (chosenGame) {
            setCurrGame(chosenGame)
            document.title = chosenGame.title
        }
        else {
            if (gamekey) {
                setCurrGame(null)
                navigate('/notfound')
            }
            // else do nothing, user is seeking the homepage
        }
    }, [setCurrGame, findGame, gamekey])

    function minus() {
        setCount(count-1)
    }

    function plus() {
        setCount(count+1)
    }

    return (
        <main>
            <section>
                <h2>{appTitle}{currGame && ` - ${currGame.title}`}</h2>
                <article>
                    <h2>Article 01</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quas modi cupiditate iusto? Placeat, molestias expedita tempora error cumque similique amet natus eum nesciunt doloribus totam, incidunt ducimus dolores optio!</p>
                    <p>
                        <button onClick={minus}>&minus;</button>
                        <span> {count} </span>
                        <button onClick={plus}>&#x2B;</button>
                    </p>
                </article>
                <article>
                    <h2>Article 02</h2>
                    <p>Accusamus tempora assumenda laborum aliquam totam, perferendis optio delectus porro molestias odio, nostrum quidem maiores, illo impedit quod dignissimos ut eligendi. Veritatis quis ea est nisi ad accusamus et ullam.</p>
                    <div>
                        <h3>Game Page</h3>
                        <p>Game key: {gamekey}</p>
                        <p>Expansion key: {expansionkey}</p>
                    </div>
                </article>
            </section>
            <Outlet />
        </main>
    )
    
}

export default PageHome