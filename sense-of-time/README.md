# ⚡ Sense of Seconds  

A fun and fast reflex timer game built using **React + Vite**.  
Start the countdown and stop it as close to zero as possible — the closer you are, the higher your score 🕹️  

---

## 🎯 Overview  

This project is a small, interactive game that helps practice timing precision and React fundamentals.  
It demonstrates core concepts like **state management**, **refs**, and **component communication** while keeping the gameplay light and engaging.

---

## 🎮 How to Play  

1. Click **Start** to begin the countdown.  
2. Watch the timer tick down…  
3. Hit **Stop** just before it reaches zero.  
4. Your score is based on how close you stopped the timer to zero.  
5. Miss it? Try again and improve your sense of perfect timing!  

---

## 🧩 Key Learnings  

### ⚛️ React Concepts  
- Managed real-time updates using `useState`.  
- Used `useRef` and `useImperativeHandle` to control native `<dialog>` behavior between components.  
- Practiced communication between parent (`TimerChallenge`) and child (`Result`) components.  

### 🧠 UI Behavior  
- Implemented a clean, responsive layout using CSS media queries.  
- Controlled the `<dialog>` popup dynamically from React.  
- Calculated scores using millisecond precision for accurate gameplay.  

### ⚙️ Tooling & Setup  
- Configured **Vite** for fast builds and hot-reload development.  
- Used **ESLint** with React plugin rules for clean, readable code.  
- Leveraged modern **ECMAScript modules** and the **React Compiler** for optimization.  

---

## 🧱 Folder Structure  

```
sense-of-seconds/
│
├── src/
│   ├── components/
│   │   ├── TimerChallenge.jsx
│   │   └── Result.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🧠 Setup & Run Instructions  

Make sure you have **Node.js (v18+)** installed.

```bash
# 1. Install dependencies
npm install

# 2. Run the app in development mode
npm run dev

# 3. Open the local server
# (usually http://localhost:5173)
```

To stop the dev server:
```bash
Ctrl + C
```

---


## 🪄 Reflection  

Building **Sense of Seconds** was a hands-on way to understand how React state and refs work together for interactive UIs.  
It reinforced how simple components can create dynamic behavior when structured correctly.  
This project turned out to be a fun mix of logic, UI control, and creative timing challenges — making learning React feel like playing a game.  

---

## 🛠️ Future Improvements  

- 🏆 Add leaderboard and scoring persistence  
- 🎵 Include ticking sounds and visual countdown effects  
- 🌗 Dark / light mode toggle  
- ✨ Animations with Framer Motion  

---

## 🧾 License  

This project is open for learning and experimentation.  
Feel free to explore, modify, and improve it.
