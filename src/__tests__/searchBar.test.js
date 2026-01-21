import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../redux/slices/gameSlice';
import SearchBar from '../Components/SearchBar';
import { fetchSearchResults } from '../redux/slices/gameSlice';


// Mock del thunk para que no haga peticiones reales a la API y de Axios
jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
  },
}));

jest.mock('../redux/slices/gameSlice', () => {
    const originalModule = jest.requireActual('../redux/slices/gameSlice');
    return {
        ...originalModule,
        fetchSearchResults: jest.fn(() => ({ type: 'games/fetchSearchResults' })),
    };
});


describe('SearchBar Component', () => {
    let store;

    beforeEach(() => {
        // Creamos un store real para el test pero con el reducer del slice
        store = configureStore({
            reducer: {
                games: gameReducer,
            },
        });
        store.dispatch = jest.fn(); // Se mockea el dispatch para espiar las llamadas
    });

    it('should show the input whith the toggle btn', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );

        const openButton = screen.getByLabelText('open-searchBar');
        fireEvent.click(openButton);

        const input = screen.getByPlaceholderText('Buscar juegos');
        expect(input).toBeInTheDocument();
    });

    it('should update the input value', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );

        const input = screen.getByPlaceholderText('Buscar juegos');
        fireEvent.change(input, { target: { value: 'Zelda' } });

        expect(input.value).toBe('Zelda');
    });

    it('should dispatch fetchSearchResults whit the submitBtn', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );

        const input = screen.getByPlaceholderText('Buscar juegos');
        const submitButton = screen.getByLabelText('searchGame');
        
        fireEvent.change(input, { target: { value: 'Elden Ring' } });
        fireEvent.click(submitButton);

        expect(fetchSearchResults).toHaveBeenCalledWith('Elden Ring');
    });
});