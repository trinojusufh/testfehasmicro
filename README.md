# HashMicro Frontend Developer Technical Test

## 📌 Project Overview

This project is a **non-functional CRUD Frontend Application** built as part of the **Frontend Developer Technical Test for HashMicro Indonesia**.

The goal of this project is to demonstrate:

* Frontend architecture
* Vue 3 fundamentals
* State management using Pinia
* UI/UX implementation aligned with HashMicro’s brand

> ⚠️ **Note:** All CRUD actions are simulated on the frontend only (no backend / API).

---

## 🛠 Tech Stack

* **Vue 3** (Composition API)
* **Vite** (Build tool)
* **Pinia** (State Management)
* **Vue Router**
* **Tailwind CSS**
* **SweetAlert2** (UI Feedback)
* **Lucide Icons**
* **Node.js v16**

---

## 🎨 UI Theme

The UI follows **HashMicro corporate colors**:

* 🔴 **Red** – destructive actions (Delete)
* 🔵 **Navy** – navigation & informational actions
* 🟠 **Orange** – primary actions (Create, Edit, Save)

Design style is inspired by **Material UI aesthetics** with modern card layouts and responsive spacing.

---

## 📂 Project Structure

```
src/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── Navbar.vue
│   └── ProductList.vue
│   └── ProductCreate.vue
│   ├── ProductEdit.vue
│   └── ProductDetail.vue
│   ├── SkeletonCard.vue
│   └── IndustryCard.vue
├── stores/
│   └── productStore.js
│   └── indusriesStore.js
├── utils/
│   └── swal.js
├── router/
│   └── index.js
├── views/
│   └── IndustriesView.vue
├── App.vue
└── main.js
```

---

## 🔁 CRUD Flow (Frontend Only)

1. **Product List**

   * Displays product cards
   * Actions: View, Edit, Delete

2. **Create Product**

   * Input product name, price, description
   * Stored in Pinia state

3. **Edit Product**

   * Updates selected product in Pinia

4. **Product Detail**

   * Displays product information

5. **Delete Product**

   * Confirmation using SweetAlert

---

## 📦 State Management (Pinia)

All product data is managed using **Pinia Store**:

* Add Product
* Update Product
* Delete Product
* Select Product

This ensures predictable and centralized state management.

---

## 📱 Responsive Design

* Mobile-first approach
* Optimized for **mobile, tablet, and desktop**
* Uses Tailwind CSS utility classes

---

## 🚀 Running the Project

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Run development server

```bash
npm run dev
```

### 3️⃣ Open in browser

```
http://localhost:5173
```

---

## 📎 Submission Notes

* This project is intentionally **frontend-only**
* No backend, SQL, or API integration
* CRUD behavior is simulated via Pinia

---

## 👤 Author

**Trino Jusuf Habibie**
Frontend Developer (Vue.js)

---

Thank you for reviewing this technical test 🙏
