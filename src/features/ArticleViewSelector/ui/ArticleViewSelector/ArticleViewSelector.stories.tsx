import { StoryObj, Meta } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>;

export const Primary: Story = {
    args: {},
};
