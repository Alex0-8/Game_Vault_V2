import React, { act, use } from 'react';
import { render, screen } from '@testing-library/react';
import {  ThemeProvider } from 'styled-components';
import { darkTheme } from '../theme';
import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import gameReducer from '../redux/slices/gameSlice';
import Products from '../Components/Products';

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

jest.mock('../Components/hooks/useCart.js', () => ({
    useCart: () => ({
        addToCart: jest.fn(),
        removeFromCart: jest.fn(),
        clearCart: jest.fn(),
    })
}))

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

describe('Products component tests', () => {
  const baseGamestate = {
    list: [],
    loading: false,
    error: null,
    cartList: [],
    cartCount: 0,
    cartAmount: 0,
    searchResults: [],
    searchLoading: false,
    searchError: null,
    selectedGame: null,
    detailsLoading: false,
  }

  it('should render Products component', () => {
    renderWithProvider(<Products testing={true} />, {
        preloadedState: {
          games: {
            ...baseGamestate,
            list: [
              { id: 1, name: 'Game 1', basePrice: 20, discount: 50, finalPrice: 10 },
              { id: 2, name: 'Game 2', basePrice: 30, discount: 30, finalPrice: 20 },
            ],
          },
        },
    });



    expect(screen.getByText('Game 1')).toBeInTheDocument();
    expect(screen.getByText('Game 2')).toBeInTheDocument();
    expect(screen.getByText('Oferta: $10 USD (50% OFF)')).toBeInTheDocument();
    expect(screen.getByText('Oferta: $20 USD (30% OFF)')).toBeInTheDocument();
    expect(screen.getAllByText('Agregar al Carrito').length).toBe(2);
  });

  it('should render the backup cards if there are no search results', () => {
    renderWithProvider(<Products testing={true} />, {
        preloadedState: {
          games: {
            ...baseGamestate,
            list: undefined,
          },
        },
    });

    expect(screen.getByText('No se encontró el servidor')).toBeInTheDocument()
  });

  it('should show loading state', () => {
    renderWithProvider(<Products testing={true} />, {
        preloadedState: {
          games: {
            ...baseGamestate,
            loading: true,
          },
        },
    });

    expect(screen.getByAltText('Cargando...')).toBeInTheDocument();
  });

  it('should show error state', () => {
    renderWithProvider(<Products testing={true} />, {
        preloadedState: {
          games: {
            ...baseGamestate,
            error: 'Failed to fetch games',
          },
        },
    });

    expect(screen.getByText('Error: Failed to fetch games')).toBeInTheDocument();
  });
});