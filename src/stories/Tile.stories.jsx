import Tile from '../components/Tile/Tile';

export default {
    title: 'Game/Tile',
    component: Tile,
    tags: ['autodocs'],

    decorators: [
        (Story) => (
            <div style={{ width: '100px', height: '100px', padding: '5px' }}>
                <Story />
            </div>
        ),
    ],

    argTypes: {
        number: {
            control: { type: 'number', min: 1, max: 15 },
            description: 'Число, яке відображається на плитці',
        },
        isBlank: {
            control: 'boolean',
            description: 'Чи є ця клітинка порожньою (місце для ходу)',
        },
        onClick: {
            action: 'clicked',
            description: 'Функція, що викликається при кліку на плитку',
        },
    },
};

// Звичайна плитка з однозначним числом
export const Standard = {
    args: {
        number: 5,
        isBlank: false,
    },
};

// Плитка з двозначним числом (для перевірки розміру шрифту)
export const DoubleDigit = {
    args: {
        number: 15,
        isBlank: false,
    },
};

// Порожня плитка
export const Blank = {
    args: {
        number: null,
        isBlank: true,
    },
};