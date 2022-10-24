import React from 'react';

import { BlurAssets } from './BlurAssets';

export default {
  title: 'Example/BlurAssets',
  component: BlurAssets,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <BlurAssets {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'BOTTOM-LEFT 30%',
  top: '33%',
  left: '-33%'
}

export const Secondary = Template.bind({});

Secondary.args = {
  primary: true,
  label: 'BOTTOM-LEFT 50%',
  top: '40%',
  left: '-20%'
}

export const Third = Template.bind({});

Third.args = {
  primary: true,
  label: 'LEFT 30%',
  top: '20%',
  left: '-30%',
  width:'432px',
  height:'1088px',
  rotation: 25
}

export const Fourth = Template.bind({});

Fourth.args = {
  primary: true,
  label: 'LEFT 50%',
  top: '20%',
  left: '-35%',
  width:'432px',
  height:'1088px',
  rotation: 10
}