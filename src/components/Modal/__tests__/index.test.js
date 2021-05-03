import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup);

const mockToggleModal = jest.fn();

describe('Modal component', () => {
  it('renders', () => {
    render(
      <Modal
        currentPhoto={currentPhoto}
        onClose={mockToggleModal}
      />
    )
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
    fireEvent.click(getByText('Close'));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});