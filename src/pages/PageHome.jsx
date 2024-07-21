import { useEffect, useState, useContext } from 'react'
import { GameContext } from '../components/GameContext'
import { appTitle } from '../config/globals'

const PageHome = () => {

    const { setUserInfo } = useContext(GameContext)
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `${appTitle} - Home`
    }, [])

    function minus() {
        setCount(count-1)
    }

    function plus() {
        setCount(count+1)
    }

    function setName() {
        setUserInfo({name: 'POTATO SALAD'})
    }

    return (
        <main>
            <section>
                <h2>Home Page</h2>
                <article>
                    <h2>Article 01</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quas modi cupiditate iusto? Placeat, molestias expedita tempora error cumque similique amet natus eum nesciunt doloribus totam, incidunt ducimus dolores optio!</p>
                    <p>
                        <button onClick={minus}>&minus;</button>
                        <span> {count} </span>
                        <button onClick={plus}>&#x2B;</button>
                    </p>
                    <p>
                        <button onClick={setName}>Click for name</button>
                    </p>
                </article>
                <article>
                    <h2>Article 02</h2>
                    <p>Accusamus tempora assumenda laborum aliquam totam, perferendis optio delectus porro molestias odio, nostrum quidem maiores, illo impedit quod dignissimos ut eligendi. Veritatis quis ea est nisi ad accusamus et ullam.</p>
                </article>
            </section>
        </main>
    )
    
}

export default PageHome