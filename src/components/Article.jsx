import React, { useState } from "react";
import { NewsContext } from "./App";
import "../article.css";
import { useContext } from "react";
import NoImage from "../assets/NoImage.png";
function Article({ article }) {
  const [isParagraphOpen, setIsParagraphOpen] = useState(false);
  const { Favorites, setFavorites } = useContext(NewsContext);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("blue");

  const toggleParagraph = () => {
    setIsParagraphOpen(!isParagraphOpen);
  };

  const handleToggleFavorite = () => {
    // Check if article is in the Favorites array
    const isArticleFavorite = Favorites?.includes(article);

    // Toggle the favorite status
    if (isArticleFavorite) {
        setButtonBackgroundColor("blue")
      // If it's a favorite, remove it
      setFavorites(Favorites.filter((fav) => fav !== article));
    } else {
        setButtonBackgroundColor("red")
      // If it's not a favorite, add it
      setFavorites([...Favorites, article]);
    }
  };

  return (
    <>
      {article ? (
        <div onClick={toggleParagraph} className={`article-div ${buttonBackgroundColor === "red"
        ? "red-background"
        : "blue-background"}` }>
          <h3 className="article-headline" >
          {article.author}
          </h3>
          <h4 >{article.source.id}</h4>
          <img  className={`article-image ${isParagraphOpen ? "open" : ""}`} src={article.image? article.image:NoImage} alt="" />
          <p  className={`article-text ${isParagraphOpen ? "open" : ""}`}>
            {article.title}
          </p>
          <div className="article-bottom-div">
            <span>{article.publishedAt}</span>
            <button
              onClick={handleToggleFavorite}
              
            >
              Add/Remove Favorite
            </button>{" "}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <span>Read More</span>
            </a>
          </div>
        </div>
      ) : (
        "Loading"
      )}
      <br />
      <br />
    </>
  );
}

export default Article;
