import {
    ArticleImageBlock,
    ArticleTextBlock,
    Block,
} from '../../model/types/article';
import { ArticleImageBlockComponent } from '../Components/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../Components/ArticleTextBlockComponent/ArticleTextBlockComponent';

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
        case 'image':
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block as unknown as ArticleImageBlock}
                    className={cls.block}
                />
            );
        case 'paragraph':
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
