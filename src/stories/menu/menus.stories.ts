import type { Meta, StoryObj } from '@storybook/angular';
import { MenuComponent } from './menu.component';

const meta: Meta<MenuComponent> = {
  title: 'Design System/Menu',
  component: MenuComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {
  args: {},
};
