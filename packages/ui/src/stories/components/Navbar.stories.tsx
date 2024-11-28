import { BrowserRouter } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '../../components/Navbar';

type Story = StoryObj<typeof Navbar>;

/**
 * `Navbar` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof Navbar> = {
  title: 'components/Navbar',
  component: Navbar,
};

export default meta;

/**
 * `DefaultNavbar`는 `Navbar` 컴포넌트의 기본 스토리입니다.
 */
export const DefaultNavbar: Story = {
  render: () => (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  ),
};