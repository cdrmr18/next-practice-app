import articleStyles from '../styles/Article.module.css';
import ArticlesItem from './ArticlesItem';

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticlesItem article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
