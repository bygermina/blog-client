import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage />
);

export const Normal = Template.bind({});
Normal.args = {};
