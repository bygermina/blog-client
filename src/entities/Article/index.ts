export { ArticleDetailsSkeleton } from './ui/ArticleDetails/ArticleDetails';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleSearch } from './ui/ArticleSearch/ArticleSearch';

export type { Article, Block } from './model/types/article';

export { fetchArticlesList } from './model/services/fetchArticlesList';
export {
    getArticlesPageOrder,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageSearch,
    getArticlesPageLimit,
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
} from './model/selectors/articlesPageSelectors';

export { getArticles } from './model/slice/articlesPageSlice';

export { getArticlesPageView } from './model/selectors/articlesPageSelectors';
export { articlesPageActions } from './model/slice/articlesPageSlice';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { ArticleList } from './ui/ArticleList/ArticleList';
export { getArticleDetailsData } from './model/selectors/articleDetails';
export { createArticle } from './model/services/saveArticle';
export { updateArticle } from './model/services/upadateArticle';
export { fetchArticleById } from './model/services/fetchArticleById/fetchArticleById';
export {
    ArticleView,
    ArticleType,
    ArticleSortField,
    ArticleBlockType,
} from './model/consts/articleConsts';

export { initArticlesPage } from './model/services/initArticlesPage';

export { articlesPageReducer } from './model/slice/articlesPageSlice';

export { fetchNextArticlesPage } from './model/services/fetchNextArticlesPage';
