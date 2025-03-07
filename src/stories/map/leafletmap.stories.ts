import type { Meta, StoryObj } from '@storybook/angular';
import { LeafletMapComponent } from './leafletmap.component';

const meta: Meta<LeafletMapComponent> = {
  title: "Design System/Map",
  component: LeafletMapComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<LeafletMapComponent>;

export const Default: Story = {
  args: {},
};
