import { StoryObj, Meta } from '@storybook/react';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;

type Story = StoryObj<typeof ArticleSortSelector>;

export const Normal: Story = {
    args: {},
};
