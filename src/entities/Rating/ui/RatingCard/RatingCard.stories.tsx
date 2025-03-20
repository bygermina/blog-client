import { StoryObj, Meta } from '@storybook/react';

import { RatingCard } from './RatingCard';

const meta = {
    title: 'entities/Rating/RatingCard',
    component: RatingCard,
} satisfies Meta<typeof RatingCard>;

export default meta;

type Story = StoryObj<typeof RatingCard>;

export const Primary: Story = {
    args: {},
};
