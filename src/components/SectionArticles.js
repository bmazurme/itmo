import CardArticle from "./CardArticle";

function SectionArticles() {
  return(
    <div className="section-articles">
      <h2 className="section-articles__title">
        Публикации
      </h2>
      <div className="section-articles__cards">
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
        <CardArticle/>
      </div>
    </div>
  );
}

export default SectionArticles;