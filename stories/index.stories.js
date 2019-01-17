import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';
import SampleComponent from '../components/SampleComponent';
import SearchBox from '../components/SearchBox';
import ChatPreview from '../components/ChatPreview';


//storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('SearchBox', module)
  .addDecorator(withKnobs)
  .add('to Storybook', () => (
    <SearchBox
      placeholder={text('placeholder')}
      onChange={action('onChange')}
      onSubmit={e => { e.preventDefault(); action('onSubmit')(e); }}
      onFocus={action('onFocus')}
      value={text('value')} />
  ));

storiesOf('ChatPreview', module)
  .addDecorator(withKnobs)
  .add('to Storybook', () => (
    <ChatPreview />
  ));

/*

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
*/

const SampleComponentStories = storiesOf('SampleComponent', module);
SampleComponentStories.addDecorator(withKnobs({ escapeHTML: false }));
SampleComponentStories.add('to Storybook', () => <SampleComponent onClick={action('clicked')} focused={boolean('focused', false)}>Sample Component!</SampleComponent>);
