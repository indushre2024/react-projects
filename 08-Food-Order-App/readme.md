# 🍽️ React Food Order App  

A modern and interactive food ordering application built using **React**, demonstrating key concepts such as **React Hooks**, **Context API**, **modals**, **custom components**, and **form submission with error handling**.

Users can browse meals, add items to a cart, adjust quantities, and submit their order through a checkout form.  
This project was created as a practice application to strengthen core React knowledge.

---

## 📸 Screenshots

### 🏠 Home Page – Meals Display  
<img width="2077" height="1293" alt="1" src="https://github.com/user-attachments/assets/00a83a05-5af4-41eb-be05-99420c2f8a0f" />


### 🛒 Cart Modal – Adjust Items  
<img width="1540" height="941" alt="2" src="https://github.com/user-attachments/assets/78acb257-5180-40db-84c4-611940d5184e" />


### 📦 Checkout Form  
<img width="1765" height="1204" alt="3" src="https://github.com/user-attachments/assets/af44c508-5421-4fe8-b3c6-69ae1df3c78e" />


### ✅ Order Success Message  
<img width="1387" height="518" alt="4" src="https://github.com/user-attachments/assets/5555a816-dc09-4eb0-943b-d114b26631de" />


---

## 🚀 Features

### ✔️ Fetch Meals from Backend  
- Fetches food items from a REST API.
- Displays meals with images, descriptions, and prices.
- Allows adding meals to the cart.

### ✔️ Cart Management using Context API  
- Add/remove meals.
- Increase/decrease quantity.
- Auto-calculated total price.
- Cart state shared across the app.

### ✔️ Checkout & Order Submission  
- Form collects:
  - Full Name  
  - Email  
  - Street  
  - Postal Code  
  - City  
- Validates fields.
- Sends order to backend via POST.
- Shows success confirmation modal.
- Displays loading + error states.

### ✔️ Error Handling  
Robust error flow:
- Wrong endpoint (404)
- Network failure (server offline)
- Server error responses  
All display a clean user-facing error message.

### ✔️ Clean Reusable UI Components  
- `Input` fields  
- `Button` components  
- `Modal`  
- `CartItem`  
- `MealItem`

---

## 🧠 Concepts Practiced

### 🔹 React Hooks
- `useState`
- `useContext`
- `useEffect`
- `useReducer` (if used for cart)

### 🔹 Context API
- Manage cart globally.
- Modal open/close state management.

### 🔹 Asynchronous Logic
- `async/await`
- `try/catch/finally`
- Fetching data
- Submitting data

### 🔹 Controlled Forms  
- Extract form entries with `FormData`.
- Convert to object using `Object.fromEntries()`.

### 🔹 Component Architecture  
- Separation of logic & UI.
- Passing props.
- Reusable Input and Button components.

---

## ⚙️ How to Run Locally
Run backend application: 
1. Go to folder /backend
> npm install
> npm start
2. Run react appliation:
> npm install
> npm run dev
>

🙌 Acknowledgements

This project was built as part of a React learning journey focused on state management, component design, and real-world workflow patterns.


