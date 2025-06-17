# 🎸 Guitar La

**Guitar La** is a simple e-commerce application built entirely with **React 19** and **Vite**. Developed as part of the course by [Juan de la Torre](https://codigoconjuan.com/), it demonstrates the use of custom React Hooks to manage a product catalog and shopping cart — all without a backend.

---

## 🚀 Tech Stack

- ⚛️ React 19.1
- ⚡ Vite
- 🎨 Plain CSS
- 🧠 React Hooks (`useState`, `useEffect`)

---

## 🛍️ Features

- Browse a list of guitar products
- Add items to the shopping cart
- Increase or decrease item quantities
- Remove individual items or clear the cart
- Fully client-side — no API or database

---

## 📁 Project Structure

```text
src/
├── assets/              # Static assets
├── components/          # Reusable components
│   ├── Footer.jsx
│   ├── Guitar.jsx
│   └── Header.jsx
├── data/
│   └── db.js            # Static product data
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## 📸 Preview

If you upload a screenshot of the project, save it as `screenshot.png` in the root folder. It will display like this:

![Guitar La Screenshot](./screenshot.png)

---

## ⚙️ Getting Started

Follow these steps to install and run the project locally on your machine:

### 1. Clone the Repository

> Download the project from GitHub to your computer:

```bash
git clone https://github.com/dvallejos/guitarla.git
```

Then enter the project folder:

```bash
cd guitarla
```

### 2. Install Dependencies

> This will install all the libraries the project needs to work:

```bash
npm install
```

### 3. Start the Development Server

> This will run the app locally and open it in your browser:

```bash
npm run dev
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
