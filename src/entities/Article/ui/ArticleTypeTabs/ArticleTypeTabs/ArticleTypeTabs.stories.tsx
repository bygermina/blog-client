import { StoryObj, Meta } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;

type Story = StoryObj<typeof ArticleTypeTabs>;

export const Normal: Story = {
    args: {},
};
