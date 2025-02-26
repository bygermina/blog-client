export { ArticleDetailsSkeleton } from './ui/ArticleDetails/ArticleDetails';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleSearch } from './ui/ArticleSearch/ArticleSearch';

export type { Article, Block } from './model/types/article';

export { fetchArticlesList } from './model/services/fetchArticlesList';
export {
    getArticlesListOrder,
    getArticlesListSort,
    getArticlesListType,
    getArticlesListSearch,
    getArticlesListLimit,
    getArticlesListError,
    getArticlesListHasMore,
    getArticlesListIsLoading,
} from './model/selectors/articlesListSelectors';

export { getArticles } from './model/slice/articlesListSlice';

export { getArticlesListView } from './model/selectors/articlesListSelectors';
export { articlesPageActions } from './model/slice/articlesListSlice';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { ArticleList } from './ui/ArticleList/ArticleList';
export { getArticleDetailsData } from './model/selectors/articleDetails';
export { createArticle } from './model/services/saveArticle';
export { updateArticle } from './model/services/upadateArticle';
export { fetchArticleById } from './model/services/fetchArticleById';
export type {
    ArticleView,
    ArticleType,
    ArticleSortField,
    ArticleBlockType,
} from './model/types/articleConsts';

export { initArticlesList } from './model/services/initArticlesPage';

export { articlesPageReducer } from './model/slice/articlesListSlice';

export { fetchNextArticlesPage } from './model/services/fetchNextArticlesPage';
