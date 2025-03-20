import { StoryObj, Meta } from '@storybook/react';

import { StarRating } from './StarRating';

const meta = {
    title: 'shared/StarRating',
    component: StarRating,
} satisfies Meta<typeof StarRating>;

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Normal: Story = {
    args: {},
};
