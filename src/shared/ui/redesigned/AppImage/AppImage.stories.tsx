import { StoryObj, Meta } from '@storybook/react';

import { AppImage } from './AppImage';

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
} satisfies Meta<typeof AppImage>;

export default meta;

type Story = StoryObj<typeof AppImage>;

export const Normal: Story = {
    args: {},
};
