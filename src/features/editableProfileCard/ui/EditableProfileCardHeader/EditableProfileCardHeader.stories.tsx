import { StoryObj, Meta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta = {
    title: 'features/editableProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;

type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})],
};
