[English Ver](#english)

# 🕹️ GameVault (React)

GameVault es una aplicación en desarrollo para **explorar y gestionar videojuegos**, construida con **React** + **Redux Toolkit**.  
Representa una versión moderna, modular y mucho más mantenible del proyecto original hecho en HTML + SASS, ahora con una estética **neón** completamente rediseñada.

🔗 **Demo en vivo:** [🕹️ GameVault](https://alex0-8.github.io/Game_Vault_V2/)

<br>

## 🔹 Estado actual

- Integración principal con **IGDB API** (servidor local) para obtener información detallada de videojuegos
- Sistema **resiliente de fallback** automático entre APIs:
  1. IGDB (principal)
  2. RAWG + CheapShark (datos + precios)
  3. Generador local de datos mock (último recurso)
- Búsqueda dinámica de juegos con la misma lógica de respaldo
- Modal de detalle de juego con información extendida
- Diseño **responsive** optimizado para móvil y escritorio
- Estilo **neón** renovado y pulido:
  - Color principal: naranja neón (`#ff9900` → `#ff4d00`)
  - Mejoras recientes en hover, transiciones, sombras y efectos glow
  - Adaptación de interacciones hover → touch en dispositivos móviles
- **Tests unitarios e integración** añadidos con **Jest** + **React Testing Library**
  - Cobertura de componentes principales, hooks y flujos críticos
  - Tests de renderizado, interacción y accesibilidad básica

<br>

## 🚧 Próximas mejoras planeadas

- Filtros avanzados y búsqueda mejorada (género, plataforma, año, precio, etc.)
- Autenticación opcional de usuario
- Animaciones más fluidas y micro-interacciones
- Mejora de cobertura de tests

<br>

## ⚙️ Stack Tecnológico

| Categoría         | Tecnologías / Herramientas                              |
|-------------------|-----------------------------------------------------------------|
| Frontend          | React, Redux Toolkit, React Hooks                              |
| Estilos           | SASS/SCSS + Styled Components                                  |
| Testing           | **Jest**, **React Testing Library**, jest-dom                  |
| APIs              | IGDB (local), RAWG, CheapShark                                 |
| HTTP              | Axios                                                          |
| Almacenamiento    | localStorage (carrito)                                         |
| Despliegue        | GitHub Pages                                                   |
|

<br>

## 🧩 Notas de arquitectura importantes

- **fetchGames** y **fetchSearchResults** (thunks) implementan la cadena de fallback completa
- Si IGDB falla → RAWG → CheapShark → datos mock locales (precios y descuentos falsos)
- El modal de detalles reutiliza estilos globales → tipografía, neón, botones glowing y sombras consistentes
- Los tests con **React Testing Library** se centran en comportamiento del usuario:
  - ¿Se renderiza correctamente?
  - ¿Responde a clics y escritura?
  - ¿Muestra estados de carga/error/fallback?

<br>

## 🛠️ Comandos principales

```bash
# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm start

# Ejecutar tests (modo watch)
npm test

# Ejecutar tests + coverage
npm test -- --coverage

# Build de producción
npm run build
```
Ultima actualizacion importante: 21/Enero/2026

# English
# 🕹️ GameVault (React)

GameVault is a work-in-progress application for **exploring and managing video games**, built with **React** + **Redux Toolkit**.  
It is a modern, modular, and much more maintainable version of the original project built with HTML + SASS, now featuring a completely redesigned **neon** aesthetic.

🔗 **Live Demo:** [🕹️ GameVault](https://alex0-8.github.io/Game_Vault_V2/)

<br>

## 🔹 Current Status

- Main integration with **IGDB API** (local server) for detailed game information
- Resilient **automatic fallback system** between APIs:
  1. IGDB (primary)
  2. RAWG + CheapShark (data + pricing)
  3. Local mock data generator (last resort)
- Dynamic game search powered by the same fallback logic
- Game detail modal with extended information
- **Responsive design** optimized for mobile and desktop
- Renewed and polished **neon/arcade** style:
  - Primary color: neon orange (`#ff9900` → `#ff4d00`)
  - Recent improvements in hover effects, transitions, shadows, and glows
  - Hover interactions adapted to touch on mobile devices
- **Unit and integration tests** added with **Jest** + **React Testing Library**
  - Coverage of main components, hooks, and critical flows
  - Tests for rendering, user interactions, and basic accessibility

<br>

## 🚧 Planned Improvements

- Advanced filters and enhanced search (genre, platform, year, price, etc.)
- Optional user authentication
- Smoother animations and micro-interactions
- Improve test coverage

<br>

## ⚙️ Tech Stack

| Category          | Technologies / Tools                                           |
|-------------------|----------------------------------------------------------------|
| Frontend          | React, Redux Toolkit, React Hooks                              |
| Styling           | SASS/SCSS + Styled Components                                  |
| Testing           | **Jest**, **React Testing Library**, jest-dom                  |
| APIs              | IGDB (local), RAWG, CheapShark                                 |
| HTTP              | Axios                                                          |
| Storage           | localStorage (cart)                                            |
| Deployment        | GitHub Pages                                                   |
|

<br>

## 🧩 Key Architecture Notes

- fetchGames and **fetchSearchResults** thunks implement the full fallback chain
- If IGDB fails → RAWG → CheapShark → local mock data (fake prices and discounts)
- The game detail modal reuses global styles for consistency: typography, neon accents, glowing buttons, and shadows
- **React Testing Library** tests focus on user behavior:
  - Does it render correctly?
  - Does it respond to clicks and typing?
  - Does it handle loading/error/fallback states properly?

<br>

## 🛠️ Main Commands

```bash
# Install dependencies
npm install

# Start in development mode
npm start

# Run tests (watch mode)
npm test

# Run tests with coverage
npm test -- --coverage

# Build for production
npm run build
```

Last major update: January/21/2026