import Button from '../components/Button/Button';

export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Стиль кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Чи активна кнопка',
    },
    children: {
      control: 'text',
      description: 'Текст на кнопці',
    },
    onClick: { action: 'clicked' },
  },
};

// Основна кнопка (Primary)
export const Primary = {
  args: {
    variant: 'primary',
    children: 'Почати гру',
    disabled: false,
  },
};

// Другорядна кнопка (Secondary)
export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Налаштування',
    disabled: false,
  },
};

// Заблокована кнопка (Disabled)
export const Disabled = {
  args: {
    variant: 'primary',
    children: 'Завантаження...',
    disabled: true,
  },
};