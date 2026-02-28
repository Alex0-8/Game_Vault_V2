[English Version](#english)

# 🕹️ GameVault

<div align="center">
  
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" />
  </a>
  <a href="https://redux-toolkit.js.org/">
    <img src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?logo=redux&logoColor=white&style=flat-square" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat-square" />
  </a>
  <a href="https://sass-lang.com/">
    <img src="https://img.shields.io/badge/SASS-CC6699?logo=sass&logoColor=white&style=flat-square" />
  </a>
  <a href="https://testing-library.com/">
    <img src="https://img.shields.io/badge/Jest%20%2B%20RTL-99424B?logo=jest&logoColor=white&style=flat-square" />
  </a>
  <a href="https://alex0-8.github.io/Game_Vault_V2/">
    <img src="https://img.shields.io/badge/Live%20Demo-brightgreen?logo=vercel&logoColor=white&style=flat-square" />
  </a>

</div>

---

**GameVault** es una aplicación web moderna para **descubrir, explorar y gestionar tu colección de videojuegos** con un estilo **neón/arcade** muy cuidado.

Es la evolución completa de un proyecto anterior (HTML + SASS) hacia una arquitectura escalable y mantenible usando **React**, **Redux Toolkit** y un sistema inteligente de fallback entre APIs para garantizar que siempre veas información aunque una API falle.

🔗 **Demo en vivo** → [https://alex0-8.github.io/Game_Vault_V2/](https://alex0-8.github.io/Game_Vault_V2/)

<img width="1350" height="602" alt="gamevault" src="https://github.com/user-attachments/assets/03a3fc7c-b5aa-40d2-aaa8-f87ba8af38ee" />

---

## ✨ Características principales

- Búsqueda dinámica de videojuegos con autocompletado  
- Sistema **resiliente** de fallback entre 3 fuentes de datos  
- Modal detallado con información extendida (descripción, géneros, plataformas, capturas, etc.)  
- Diseño **responsive** 100% (móvil + escritorio)  
- Estilo **neón** moderno con transiciones suaves, glows y efectos hover/touch  
- Carrito persistente con **localStorage**  
- Tests unitarios e integración con **Jest + React Testing Library**  

---

## 🛠️ Stack Tecnológico

| Categoría          | Tecnología / Herramienta                              | Notas                               |
|--------------------|-------------------------------------------------------|-------------------------------------|
| Framework          | React 18+                                             | Hooks + Functional Components       |
| Estado global      | Redux Toolkit + RTK Query                             | Thunks + caché                      |
| Estilos            | SASS/SCSS + Styled Components                         | Neon theme centralizado             |
| HTTP / APIs        | Axios                                                 | Interceptors + error handling       |
| Testing            | Jest + React Testing Library + jest-dom               | >80% cobertura en componentes clave |
| APIs externas      | IGDB (principal), RAWG, CheapShark                    | Fallback automático                 |
| Almacenamiento     | localStorage                                          | Carrito de compras                  |
| Build & Deploy     | Vite + GitHub Pages                                   | CI/CD básico vía GitHub Actions     |

---

## 🔥 Retos enfrentados y cómo los resolví

| Reto                                      | Solución aplicada                                                                                 | Impacto                                      |
|-------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------|
| IGDB requiere servidor proxy (CORS)       | Servidor local ligero con Express + dotenv para manejar claves y requests                         | Seguridad + evita exponer keys en frontend   |
| APIs caen frecuentemente o tienen límites | Cadena de fallback: IGDB → RAWG + CheapShark → datos mock generados localmente                   | 99% uptime visual para el usuario            |
| Diferencias de formato entre APIs         | Normalización de datos en un modelo unificado (Game interface) antes de guardar en Redux         | Código limpio y predecible                   |
| Experiencia móvil pobre con hover         | Detección de dispositivo + eventos touch + fallback visual (scale + brightness)                   | UX consistente en móvil y tablet             |

---

## 🚀 Cómo empezar

### 1. ¿Qué necesito tener instalado?

- **Node.js** → versión 18 o superior  
  [Descargar aquí](https://nodejs.org/)  
  (viene con **npm** incluido)

### 2. Pasos para tener el proyecto corriendo en tu computadora

1. Descarga o clona el proyecto  
   ```bash
   git clone https://github.com/alex0-8/Game_Vault_V2.git
   cd Game_Vault_V2
   ````
2. Instala todas las dependencias
    ````bash
      npm install
      ````
3. Inicia el proyecto (se abre solo en el navegador)
   ````bash
   npm start
   ````
→ Abre http://localhost:5173 (o el puerto que te diga)

¡Listo! Ya puedes explorar videojuegos con estilo neón 🔥
Comandos más útiles

````Bash
# Correr tests (se actualizan al guardar)
npm test

# Ver qué tan bien testeado está el proyecto
npm test -- --coverage

# Crear versión final para subir a internet
npm run build
````

# 🗺️ Posibles Futuras mejoras

- [ ] Filtros avanzados (género, plataforma, año, precio, rating)
- [ ] Paginación / infinite scroll
- [ ] Autenticación opcional + lista de deseados personal
- [ ] Animaciones con Framer Motion
- [ ] Soporte multilenguaje (es/en)
- [ ] Mejora de cobertura de tests (>90%)

📄 Licencia
MIT License – siéntete libre de usar, modificar y compartir.
Última actualización importante: 28 de febrero de 2026

¡Gracias por visitar GameVault!

# English
# 🕹️ GameVault

<div align="center">
  
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" />
  </a>
  <a href="https://redux-toolkit.js.org/">
    <img src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?logo=redux&logoColor=white&style=flat-square" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat-square" />
  </a>
  <a href="https://sass-lang.com/">
    <img src="https://img.shields.io/badge/SASS-CC6699?logo=sass&logoColor=white&style=flat-square" />
  </a>
  <a href="https://testing-library.com/">
    <img src="https://img.shields.io/badge/Jest%20%2B%20RTL-99424B?logo=jest&logoColor=white&style=flat-square" />
  </a>
  <a href="https://alex0-8.github.io/Game_Vault_V2/">
    <img src="https://img.shields.io/badge/Live%20Demo-brightgreen?logo=vercel&logoColor=white&style=flat-square" />
  </a>

</div>

---

**GameVault** is a sleek, modern web app for **discovering, exploring, and managing video games** with a stunning **neon/arcade** aesthetic.

This is a complete rewrite and upgrade of the original HTML + SASS version, now built with **React**, **Redux Toolkit**, and a smart multi-API fallback system that keeps the app usable even if one data source goes down.

🔗 **Live Demo** → [https://alex0-8.github.io/Game_Vault_V2/](https://alex0-8.github.io/Game_Vault_V2/)

<img width="1350" height="602" alt="gamevault" src="https://github.com/user-attachments/assets/03a3fc7c-b5aa-40d2-aaa8-f87ba8af38ee" />

---

## ✨ Key Features

- Dynamic game search with real-time results  
- Resilient **multi-API fallback** system for maximum reliability  
- Detailed game modal (description, genres, platforms, screenshots, ratings, etc.)  
- Fully **responsive** design — looks great on mobile, tablet, and desktop  
- Polished **neon** UI with smooth transitions, glow effects, and hover/touch support  
- Persistent shopping cart using **localStorage**  
- Solid test coverage with **Jest + React Testing Library**

---

## 🛠️ Tech Stack

| Category           | Technology / Tool                                      | Notes                               |
|--------------------|--------------------------------------------------------|-------------------------------------|
| Frontend           | React 18+                                              | Hooks + Functional Components       |
| State Management   | Redux Toolkit + RTK Query                              | Thunks + built-in caching           |
| Styling            | SASS/SCSS + Styled Components                          | Centralized neon theme              |
| HTTP / APIs        | Axios                                                  | Interceptors + robust error handling|
| Testing            | Jest + React Testing Library + jest-dom                | >80% coverage on core components    |
| External APIs      | IGDB (primary), RAWG, CheapShark                       | Automatic fallback chain            |
| Storage            | localStorage                                           | Shopping cart persistence           |
| Build & Deploy     | Vite + GitHub Pages                                    | Fast builds + free hosting          |

---

## 🔥 Challenges Faced & How They Were Solved

| Challenge                                  | Solution Implemented                                                                 | Impact                                      |
|--------------------------------------------|--------------------------------------------------------------------------------------|---------------------------------------------|
| IGDB API requires proxy due to CORS        | Lightweight local Express proxy server with dotenv for secure key handling          | Keeps API keys safe, no frontend exposure   |
| Unreliable / rate-limited external APIs    | Full fallback chain: IGDB → RAWG + CheapShark → local mock data generator           | Near 100% content availability              |
| Inconsistent data shapes across APIs       | Unified `Game` interface + data normalization layer before storing in Redux         | Clean, predictable state & components       |
| Hover effects poor on touch devices        | Device detection + touch-friendly alternatives (scale + brightness on tap)          | Consistent UX across mobile & desktop       |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher  
  → Download from [https://nodejs.org/](https://nodejs.org/) (includes npm)

### Step-by-Step Setup

1. Clone or download the repository  
   ```bash
   git clone https://github.com/alex0-8/Game_Vault_V2.git
   cd Game_Vault_V2
   ````
2. Install all depenndencies
   ````bash
   npm install
   ````
3. Start the develpment server
   ````bash
   npm start
   ````
→ It should automatically open http://localhost:5173 in your browser

That's it! You're now running GameVault locally with the full neon experience.
# Most Useful Commands
````bash
# Run tests in watch mode (great for development)
npm test

# Generate test coverage report
npm test -- --coverage

# Create production build (for deployment)
npm run build
````

## 🗺️ Planned Improvements

- [ ] Advanced filters (genre, platform, year, price range, rating)
- [ ] Infinite scroll / pagination
- [ ] Optional user authentication + personal wishlists
- [ ] Framer Motion animations & micro-interactions
- [ ] Multi-language support (English / Spanish)
- [ ] Increase test coverage to >90%

Last major update: February 28, 2026

---

Thanks for checking out GameVault!
