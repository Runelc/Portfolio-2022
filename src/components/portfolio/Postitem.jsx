import parse from "html-react-parser";
import "./portfolio.css";

export default function PostItem({ post }) {
  let image = "https://cederdorff.github.io/img/logo512.webp";

  if (post._embedded && post._embedded["wp:featuredmedia"]) {
    image = post._embedded["wp:featuredmedia"][0].source_url;
  }

  return (
    <article>
      <img
        className="billede_portefolie"
        src={image}
        alt={post.title.rendered}
      />
      <h2 className="undertitel_portefolio">{parse(post.title.rendered)}</h2>
      {parse(post.content.rendered)}

      <p>
        {post.acf.website ? (
          <a
            className="portfolio__button"
            href={post.acf.website}
            target="_blank"
            rel="noreferrer"
          >
            Link til website
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </a>
        ) : (
          <p className="no__portfolio__button"> Intet link</p>
        )}
      </p>
    </article>
  );
}
