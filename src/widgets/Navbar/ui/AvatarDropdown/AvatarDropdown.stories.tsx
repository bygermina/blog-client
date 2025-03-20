import { StoryObj, Meta } from '@storybook/react';

import { AvatarDropdown } from './AvatarDropdown';

const meta = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
} satisfies Meta<typeof AvatarDropdown>;

export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const Normal: Story = {
    args: {},
};
