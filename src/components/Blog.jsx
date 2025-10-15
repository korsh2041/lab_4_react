import blogData from "../mockData/blogData";

export const BlogCard = ({ article }) => {
  const titleClass = article.isMain ? "blog_title" : "blog_title_secondary";
  
  return (
    <div className={`blog_card ${article.isMain ? 'main_card' : ''}`}>
      <img src={article.image} alt={article.alt} />
      <div className="blog_content">
        <div className="blog_date">{article.date}</div>
        <h3 className={titleClass}>{article.title}</h3>
        <a href={article.readMoreLink} className="blog_read_more">
          Читать полную статью
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const { header, articles } = blogData;
  
  const mainArticle = articles.find(article => article.isMain);
  const secondaryArticles = articles.filter(article => !article.isMain);

  return (
    <>
      <h2 className="blog_header" dangerouslySetInnerHTML={{ __html: header }} />
      <div className="blog_container">
        <div className="blog_main">
          {mainArticle && <BlogCard article={mainArticle} />}
        </div>
        <div className="blog_secondary">
          {secondaryArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;