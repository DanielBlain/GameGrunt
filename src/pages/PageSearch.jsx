import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { appTitle } from '../config/globals'

const PageSearch = () => {

    useEffect(() => {
        document.title = `${appTitle} - Search`
    }, [])

    let { movieID } = useParams()

    return (
        <main>
            <section>
                <h2>Search</h2>
                <article>
                    <h2>Article 01</h2>
                    <p>Here{movieID}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quas modi cupiditate iusto? Placeat, molestias expedita tempora error cumque similique amet natus eum nesciunt doloribus totam, incidunt ducimus dolores optio!</p>
                </article>
                <article>
                    <h2>Article 02</h2>
                    <p>Accusamus tempora assumenda laborum aliquam totam, perferendis optio delectus porro molestias odio, nostrum quidem maiores, illo impedit quod dignissimos ut eligendi. Veritatis quis ea est nisi ad accusamus et ullam.</p>
                </article>
            </section>
        </main>
    )
    
}

export default PageSearch