import { StoryObj, Meta } from '@storybook/react';

import { Code } from './Code';

const meta = {
    title: 'shared/Code',
    component: Code,
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        text:
            'export default {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            "        backgroundColor: { control: 'color' },\n" +
            '    },\n' +
            '} as Meta<typeof Code>;\n' +
            '\n' +
            'const Template: StoryObj<typeof Code> = (args) => <Code {...args} />;\n' +
            '\n' +
            'export const Normal = Template.bind({});',
    },
};
