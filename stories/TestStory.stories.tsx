import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TestComponent from '../src/components/TestComponent';

export default {
  title: 'Тестовая стори (Switch)',
  decorators: [
    withKnobs,
    (storyFn: () => React.ReactNode): React.ReactNode => storyFn(),
  ],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const TestTaskStory = () => {
  return <TestComponent />;
};

TestTaskStory.story = {
  name: 'Тестовая стори (Switch)',
};
