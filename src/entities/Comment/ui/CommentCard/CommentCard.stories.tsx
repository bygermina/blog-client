import { StoryObj, Meta } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;

const normalArgs = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
};

type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: normalArgs,
};

export const NormalRedesigned: Story = {
    args: normalArgs,
    decorators: [NewDesignDecorator],
};

export const Loading: Story = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        isLoading: true,
    },
};
