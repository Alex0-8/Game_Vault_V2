🕹️ GameVault (React)

GameVault is a work-in-progress application for exploring and managing video games, built with React and Redux Toolkit.
It serves as a modern, modular replacement for the original HTML+SASS version, now featuring a fully redesigned neon/arcade.

🔗 Live Demo: [GameVault](https://alex0-8.github.io/Game_Vault_V2/)

🔹 Current Status

- Integrated with the IGDB API to fetch game information.
- Added backup APIs (RAWG + CheapShark) that automatically take over when the main IGDB server is offline.
- The app now includes a resilient fallback chain:
- IGDB (local server)
- RAWG + CheapShark (for game data and pricing)
- Local mock generator (as last resort)
- Fully restyled with a gaming / neon style.
- Neon orange (#ff9900 / #ff4d00) as the main accent.
- Added responsive design, optimized layout for mobile and desktop.
- Hover effects adapted to work differently on desktop and touch devices.
- Added a search bar component that allows users to find games dynamically.
- Base sections like Home and Cart are functional, while others are still under development.

🚧 Upcoming Improvements

- Fully detailed game pages with reviews, genres, and prices.
- Advanced filtering and search functionality.
- Global cart persistence and optional user authentication.
- Further UI/UX enhancements and animations for a smoother experience.

⚙️ Tech Stack

- Frontend: React, Redux Toolkit, Styled Components
- Styling: SASS/SCSS
- APIs: IGDB (local), RAWG, CheapShark
- Other: Axios for API calls, custom hooks, localStorage cart handling
- Deployment: GitHub Pages

🧩 Architecture Notes

The fetchGames thunk implements a multi-layer API fallback:
- If IGDB fails → attempts to fetch data from RAWG.
- Then fetches pricing from CheapShark.
- If both fail, it generates fake prices and discounts locally to keep the UI consistent.

The new fetchSearchResults thunk powers the search bar with the same fallback logic, ensuring seamless functionality even when external APIs are unavailable.

Last updated: October 27, 2025

--------------------------------------------------------------------------------------------

🕹️ GameVault (React)

GameVault es una aplicación en desarrollo para explorar y gestionar videojuegos, construida con React y Redux Toolkit.
Es una versión moderna y modular del proyecto original hecho en HTML+SASS, ahora con una estética tipo neón / arcade completamente rediseñada.

🔗 Versión en línea: [GameVault](https://alex0-8.github.io/Game_Vault_V2/)

🔹 Estado Actual

- Integración con la API de IGDB para obtener información de videojuegos.
- Se añadieron APIs de respaldo (RAWG + CheapShark) que se activan automáticamente cuando el servidor principal no responde.
- El sistema de carga usa una cadena de respaldo:
- IGDB (servidor local)
- RAWG + CheapShark (para datos y precios)
- Generador local de tarjetas (último recurso)
- Se aplicó un nuevo diseño visual estilo gaming / neón:
- Naranja neón (#ff9900 / #ff4d00) como color principal.
- Se añadió diseño responsive y ajustes de hover adaptados a PC y dispositivos móviles.
- Nuevo componente de barra de búsqueda, que permite encontrar juegos dinámicamente
- Secciones como Inicio y Carrito son funcionales, mientras que otras siguen en desarrollo.

🚧 Próximas Mejoras

- Páginas de detalles de juegos con reseñas, géneros y precios.
- Búsqueda y filtrado avanzado en el catálogo.
- Persistencia global del carrito y posible autenticación de usuario.
- Más mejoras de UI/UX y animaciones para una experiencia más fluida.

⚙️ Stack Tecnológico

- Frontend: React, Redux Toolkit, Styled Components
- Estilos: SASS/SCSS
- APIs: IGDB (local), RAWG, CheapShark
- Otros: Axios, hooks personalizados, manejo de carrito con localStorage
- Despliegue: GitHub Pages

🧩 Notas Técnicas

El thunk fetchGames implementa una cadena de respaldo entre APIs:
- Si IGDB falla → intenta obtener datos desde RAWG.
- Luego busca precios en CheapShark.
- Si ambas fallan, genera precios y descuentos falsos localmente para mantener la interfaz funcional.

El nuevo thunk fetchSearchResults impulsa la barra de búsqueda con la misma lógica de respaldo, garantizando que siga funcionando incluso sin conexión al servidor principal

Última actualización: 27 de octubre de 2025
