import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { EditableProfileCard } from './EditableProfileCard';

const meta = {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
} satisfies Meta<typeof EditableProfileCard>;

export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
