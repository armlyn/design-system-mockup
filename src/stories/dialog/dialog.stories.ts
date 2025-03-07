import type { Meta, StoryObj } from '@storybook/angular';
import { DialogComponent } from './dialog.component';

const meta: Meta<DialogComponent> = {
  title: 'Design System/Dialog',
  component: DialogComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DialogComponent>;

export const Default: Story = {
  args: {},
};
