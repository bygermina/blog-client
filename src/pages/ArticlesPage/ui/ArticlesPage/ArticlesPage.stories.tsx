import { StoryObj, Meta } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
} satisfies Meta<typeof ArticlesPage>;

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
    args: {},
};
