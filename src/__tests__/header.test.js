jest.mock('axios');
jest.mock('../redux/slices/gameSlice', () => ({ __esModule: true, default: (state = {}) => state }));
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Components/header';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../theme';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import gameReducer from '../redux/slices/gameSlice';

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  console.log.mockRestore();
});

const renderWithProvider = (ui, { preloadedState } = {}) => {
  const store = configureStore({
    reducer: {
      games: gameReducer,
    },
    preloadedState,
  })

  return render(
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        {ui}
      </ThemeProvider>
    </Provider>
  );
}

describe('Header tests', () => {
  it('should show the header logo and icons', () => {
    renderWithProvider(<Header onToggle={() => {}} switchTheme={() => {}} isDark={true} />, {});

    expect(screen.getByAltText('logo principal')).toBeInTheDocument();
    expect(screen.getByAltText('carrito de compras')).toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBe(2);
  });

  it('should display the correct cart count from Redux store', () => {
    renderWithProvider(<Header onToggle={() => {}} switchTheme={() => {}} isDark={true} />, {
      preloadedState: {
        games: {
          cartCount: 5,
        },
      },
    });

    const cartCountDiv = screen.getByText('5');
    expect(cartCountDiv).toBeInTheDocument();
  })
});
