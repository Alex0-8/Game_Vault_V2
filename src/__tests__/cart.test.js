import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {  ThemeProvider } from 'styled-components';
import { darkTheme } from '../theme';
import '@testing-library/jest-dom';
import Cart from '../Components/Cart';

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  console.log.mockRestore();
});

//Mocks
jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
  },
}));

let mockClearCart = jest.fn()

jest.mock('../Components/hooks/useCart.js', () => ({
  useCart: () => ({
    cartList: [
      { id: 1, title: 'Game 1', price: 10, quantity: 5, coverUrl: null },
      { id: 2, title: 'Game 2', price: 20, quantity: 1, coverUrl: null },
    ],
    cartAmount: 70,
    removeOne: jest.fn(),
    removeAllOfOne: jest.fn(),
    clearCart: mockClearCart,
  })
}));


const renderWithProvider = (ui) => {
  return render(
      <ThemeProvider theme={darkTheme}>
        {ui}
      </ThemeProvider>
  );
}

describe('Cart tests', () => {
  it('should show the cart data', () => {
    renderWithProvider(<Cart isOpen={true} />)

    expect(screen.getByText('Game 1')).toBeInTheDocument();
    expect(screen.getByText('Game 2')).toBeInTheDocument();

    expect(screen.getByText('quitar todo')).toBeInTheDocument();
    expect(screen.getByText('Total:')).toBeInTheDocument();
  });

  it('should remove all the cartItems', () => {
    renderWithProvider(<Cart isOpen={true} />)

    const removeAllBtn = screen.getByText('Quitar todo')
    fireEvent.click(removeAllBtn)

    expect(mockClearCart).toHaveBeenCalledTimes(1);
  });
});