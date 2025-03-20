import { Meta, StoryObj } from '@storybook/react';

import ArticleEditPage from './ArticleEditPage';

const meta = {
    title: 'pages/ArticleEditPage/ArticleEditPage',
    component: ArticleEditPage,
} satisfies Meta<typeof ArticleEditPage>;

export default meta;

type Story = StoryObj<typeof ArticleEditPage>;

export const Primary: Story = {
    args: {},
};
