import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../../src/components/Button';
import CenterView from '../CenterView';

storiesOf('Test Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Test new button', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ));
