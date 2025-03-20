import { StoryObj, Meta } from '@storybook/react';

import { Page } from './Page';

const meta = {
    title: 'widgets/Page',
    component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof Page>;

export const Primary: Story = {
    args: {},
};
