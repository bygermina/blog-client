import {
    ArticleImageBlock,
    ArticleTextBlock,
    Block,
} from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

export const renderArticleBlock = (block: Block) => {
    switch (block.type) {
        // case ArticleBlockType.CODE:
        //     return (
        //         <ArticleCodeBlockComponent
        //             key={block.id}
        //             block={block}
        //             className={cls.block}
        //         />
        //     );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block as unknown as ArticleImageBlock}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block as unknown as ArticleTextBlock}
                />
            );
        default:
            return null;
    }
};
