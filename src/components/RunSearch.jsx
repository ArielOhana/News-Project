import { NewsContext } from "./App";
import { useContext } from "react";
import Article from "./Article";
import { useParams } from "react-router-dom";
function RunSearch() {
  const { select, keyword } = useParams();
  const { SportNews, GamingNews, EconomicNews, GeneralNews, IsraeliNews } =
    useContext(NewsContext);

  
  let news;
  switch (true) {
    case select == "General":
      news = GeneralNews;
      break;

    case select == "Economic":
      news = EconomicNews;
      break;

    case select == "Gaming":
      news = GamingNews;
      break;
    case select == "Sport":
      news = SportNews;
      break;
    case select == "Israel":
      news = IsraeliNews;
      break;
    default: {
      news = SportNews;
      news.articles = [
        ...SportNews.articles,
        ...GamingNews.articles,
        ...EconomicNews.articles,
        ...GeneralNews.articles,
      ];
      console.log(news.articles);
      break;
    }
  }
  let filtererdarticles = news;

  if (keyword !== "default") {
    filtererdarticles = news.articles?.filter(
      (article) =>
        (article.title?.includes(keyword) || article.body?.includes(keyword)) &&
        !article.isDuplicate
    );
   
  }
  else{
    filtererdarticles = filtererdarticles.articles;
  }
  console.log(filtererdarticles)
  return (
    <>
      {filtererdarticles ? (
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            margin: 0,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {
            <div
              style={{
                width: "70%",
                display: "flex",
                justifyContent: "center",
                margin: 0,
                backgroundColor: "#DDD",
                flexWrap: "wrap",
                flexDirection:"column",
                alignItems:"center",
              }}
            >
              <h1>
                {select}, {keyword}
              </h1>

              {
              filtererdarticles.map((article, index) => (
                <Article article={article} key={index}></Article>
              ))}
            </div>
          }
        </div>
      ) : (
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            margin: 0,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}
export default RunSearch;
