import { useEffect } from 'react'
import { appTitle } from '../global/globals'

const PageProducts = () => {

    useEffect(() => {
        document.title = `${appTitle} - Products`
    }, []);

    return (
        <main>
            <section>
                <h2>Products Page</h2>
                <article>
                    <h2>Article 01</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim odit dolor facilis fuga dignissimos totam fugit dolorem? Nobis aperiam mollitia eius! Cum nihil similique, ipsa doloremque ipsam quisquam qui!</p>
                    <p>Repellendus itaque illo provident commodi ducimus sint a cum. Tenetur similique aperiam deserunt possimus dolorum officia ullam tempore quasi autem, laudantium libero aliquam non recusandae quod saepe magnam excepturi error!</p>
                    <p>Eum veritatis quas blanditiis atque! Magnam sapiente dolor maiores, laboriosam eveniet facilis necessitatibus aut blanditiis? Ut autem illum accusamus beatae voluptas inventore ab aliquid consequuntur harum tenetur, doloremque, veritatis fuga?</p>
                </article>
                <article>
                    <h2>Article 02</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nobis amet velit odio aspernatur ducimus sunt? Sed molestiae ratione iure quam quod provident autem totam pariatur blanditiis libero. Tempore, error!</p>
                </article>
            </section>
        </main>
    );
    
};

export default PageProducts