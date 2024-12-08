import { OutputBlockData } from '@editorjs/editorjs';

import { User } from '@/entities/User';

import { ArticleBlockType, ArticleType } from '../consts/articleConsts';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

// export interface ArticleCodeBlock extends ArticleBlockBase {
//     type: ArticleBlockType.CODE;
//     code: string;
// }

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    data: {
        src: string;
        title: string;
    };
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    data: {
        text: string;
    };
}

export type ArticleBlock =
    // | ArticleCodeBlock
    ArticleImageBlock | ArticleTextBlock;

export type Block = OutputBlockData<ArticleBlockType, ArticleBlock>;

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
