import React from 'react';
import { string } from 'prop-types';

function greet(language, name) {
  switch (language) {
    case 'es':
      return `Hola, ${name}!`;
    case 'gb':
      return `Halo ${name}`;
    case 'en':
    default:
      return `Hello ${name}`;
  }
}

function LocaleGreet({ language, name }) {
  return <span>{greet(language, name)}</span>;
}

LocaleGreet.propTypes = {
  language: string.isRequired,
  name: string.isRequired,
};

export default LocaleGreet;
