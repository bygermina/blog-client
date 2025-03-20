import { StoryObj, Meta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from '@/entities/Article';
import { API_URL } from '@/shared/api/api';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${API_URL}/articles?_limit=3`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: '1' },
                    { ...article, id: '2' },
                    { ...article, id: '3' },
                ],
            },
        ],
    },
};
