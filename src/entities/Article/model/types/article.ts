import { OutputBlockData } from '@editorjs/editorjs';

import { User } from '@/entities/User';

import { ArticleBlockType, ArticleType } from './articleConsts';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'code';
    data: {
        code: string;
    };
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'image';
    data: {
        title: string;
        file: {
            url: string;
        };
    };
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'paragraph';
    data: {
        text: string;
    };
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock;

export type Block = OutputBlockData<ArticleBlockType, ArticleBlock['data']>;

export interface Article {
    id: string;
    title: string;
    userId?: string;
    user?: User;
    subtitle: string;
    img?: string;
    views?: number;
    createdAt?: string;
    type: ArticleType[];
    blocks: Block[];
}
