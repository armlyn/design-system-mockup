import type { Meta, StoryObj } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';

const meta: Meta<NavigationComponent> = {
  title: 'Design System/Navigation',
  component: NavigationComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NavigationComponent>;

export const Default: Story = {
  args: {},
};
