// import { useTranslation } from 'react-i18next';
// import { memo } from 'react';
// import clsx from 'clsx';

// import { Card } from '@/shared/ui/redesigned/Card';
// import { ArticleSortSelector } from '@/features/ArticleSortSelector';
// import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
// import { ArticleViewSelector } from '@/features/ArticleViewSelector';
// import { ArticleSearch } from '@/entities/Article';

// import { useArticleFilters } from '../../lib/hooks/useArticleFilters';
// import { useView } from '../../lib/hooks/useView';

// import cls from './ArticlesPageFilters.module.scss';

// type Props = {
//     className?: string;
// };

// export const ArticlesPageFilters = memo(({ className }: Props) => {
//     const { t } = useTranslation();
//     const { onChangeSort, onChangeType, sort, type, onChangeOrder, order } =
//         useArticleFilters();

//     const { view, onChangeView } = useView();

//     return (
//         <div className={clsx(cls.ArticlesPageFilters, className)}>
//             <div className={cls.sortWrapper}>
//                 <ArticleSortSelector
//                     order={order}
//                     sort={sort}
//                     onChangeOrder={onChangeOrder}
//                     onChangeSort={onChangeSort}
//                 />
//                 <ArticleViewSelector view={view} onViewClick={onChangeView} />
//             </div>
//             <Card className={cls.search}>
//                 <ArticleSearch />
//             </Card>
//             <ArticleTypeTabs
//                 value={type}
//                 onChangeType={onChangeType}
//                 className={cls.tabs}
//             />
//         </div>
//     );
// });
export {};
