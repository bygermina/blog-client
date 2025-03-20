import { Meta, StoryObj } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

const meta = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
} satisfies Meta<typeof CurrencySelect>;

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Primary: Story = {
    args: {},
};
