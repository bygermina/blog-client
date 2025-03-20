module.exports = (layer, componentName) => `import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { ${componentName} } from './${componentName}';

export default {
    title: '${layer}/${componentName}',
    component: ${componentName},
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ${componentName}>;

const Template: StoryObj<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};`;
