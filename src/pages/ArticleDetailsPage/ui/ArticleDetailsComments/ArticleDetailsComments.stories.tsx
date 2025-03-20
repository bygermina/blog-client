import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
} satisfies Meta<typeof ArticleDetailsComments>;

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>;

export const Normal: Story = {
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({})],
};
