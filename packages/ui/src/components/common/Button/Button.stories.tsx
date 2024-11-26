import type { Meta, StoryFn } from '@storybook/react';

import { Flex } from '../FlexBox';

import Button from '.';

// type Story = StoryObj<typeof Button>;

/**
 * `Button` 컴포넌트의 스토리북 정의입니다.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/common/Button',
  component: Button,
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => (
  <Flex direction="row" gap={10}>
    <Button {...args}>button1</Button>
    <Button {...args}>button2</Button>
  </Flex>
);

/**
 * `DefaultButton`는 'Button' 컴포넌트의 기본 스토리입니다.
 */
export const DefaultButton = Template;
DefaultButton.args = {};
