import { useEffect } from 'react';
import { appTitle } from '../config/globals'

const PageServices = () => {

    useEffect(() => {
        document.title = `${appTitle} - Services`
    }, [])

    return (
        <main>
            <section>
                <h2>Services Page</h2>
                <article>
                    <h2>Article 01</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ipsum aspernatur laboriosam, fugit natus explicabo, deserunt consectetur animi asperiores itaque veritatis dolores, quos aliquid eaque quis rem laborum facere nesciunt.</p>
                    <p>Aliquam, quam. Odio voluptatibus reiciendis necessitatibus mollitia asperiores exercitationem vel? Voluptate minima molestiae consectetur rerum illum! Nemo explicabo alias ipsum magnam harum esse saepe vero facilis sapiente voluptatem, earum accusantium.</p>
                </article>
                <article>
                    <h2>Article 02</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ullam illum blanditiis hic, harum, sed alias amet sint odio dolorum numquam possimus architecto sapiente non culpa dicta in at. Beatae!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere harum error! Labore facere alias autem, nobis delectus impedit dolor est culpa commodi, eveniet obcaecati molestiae id odit ea iste.</p>
                </article>
            </section>
        </main>
    );

};

export default PageServices