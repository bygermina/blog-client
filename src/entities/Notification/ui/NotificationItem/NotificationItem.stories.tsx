import { StoryObj, Meta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
} satisfies Meta<typeof NotificationItem>;

export default meta;

type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {},
};
