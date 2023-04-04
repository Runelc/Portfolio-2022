import PostItem1 from "./Postitem"; 
import "./portfolio.css"; 

import {useState, useEffect} from 'react'; 


export default function Portfolio() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://headless.runelc.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
						console.log(data);
            setPosts(data);
        }
        getData();
    }, []);


    return ( 
        <section className="section container" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Seneste projekter</span>
        


            <section className="grid-container">
                {posts.map(post => (
                <PostItem1 key={post.id} post={post} />
    ))}
            </section>
        </section>
    );
}