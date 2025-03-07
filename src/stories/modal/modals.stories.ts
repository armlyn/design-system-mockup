import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal.component';

const meta: Meta<ModalComponent> = {
  title: 'Design System/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Default: Story = {
  args: {},
};
