import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { API_URL } from '@/shared/api/api';

import { NotificationList } from './NotificationList';

const meta = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
} satisfies Meta<typeof NotificationList>;

export default meta;

type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
    args: {},
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${API_URL}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description:
                            'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '2',
                        title: 'Уведомление 2',
                        description:
                            'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '3',
                        title: 'Уведомление 3',
                        description:
                            'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                ],
            },
        ],
    },
};
