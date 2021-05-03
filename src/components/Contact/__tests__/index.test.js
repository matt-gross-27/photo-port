import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm />);
  });

  // snapshot test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  // h1 text
  it('has h1 text "Contact me"', () => {
    const { getByTestId } = render(<ContactForm/>);
    expect(getByTestId('h1Tag')).toHaveTextContent('Contact me');
  });

  // button text
  it('has button text "Submit"', () => {
    const { getByTestId } = render(<ContactForm/>);
    expect(getByTestId('buttonTag')).toHaveTextContent('Submit');
  });
});