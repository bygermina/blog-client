import { StoryObj, Meta } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { API_URL } from '@/shared/api/api';

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
} satisfies Meta<typeof ArticleRating>;

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const Normal: Story = {
    args: {
        articleId: '1',
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${API_URL}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
};

export const WithoutRate: Story = {
    args: {
        articleId: '1',
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: { id: '1' },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${API_URL}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
};
