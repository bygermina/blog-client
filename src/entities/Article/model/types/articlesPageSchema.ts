import { EntityState } from '@reduxjs/toolkit';

import { Article } from './article';
import {
    ArticleView,
    ArticleSortField,
    ArticleType,
} from '../consts/articleConsts';

import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}

export interface Articles {
    pages: Number;
    data: Article[];
}
