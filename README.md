# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built using **Vanilla JavaScript, HTML, and CSS**.  
This project allows users to track financial activity, visualize spending patterns, and manage transactions through a simple and intuitive interface.

---


## 📌 Features

### 📊 Dashboard Overview
- Total Balance, Income, and Expense summary cards
- Line chart for transaction trend
- Pie chart for category-wise expense breakdown

### 📋 Transactions
- Displays transaction list with:
  - Date
  - Amount
  - Category
  - Type (Income/Expense)
- Search transactions by category
- Filter by income/expense

### 🔐 Role-Based UI
- Viewer → Read-only access
- Admin → Can add transactions

### ➕ Add Transaction
- Admin can add new transactions dynamically
- Updates dashboard instantly

### 📈 Insights
- Automatically detects highest spending category
- Displays meaningful financial insights

### 💾 Data Persistence
- Uses **LocalStorage** to save transactions
- Data remains even after page refresh

### 🌙 Dark Mode
- Toggle between light and dark theme

### 📱 Responsive Design
- Works on mobile, tablet, and desktop screens

---

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Chart.js (for data visualization)

---

## ⚙️ How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/AbhinavGupta-code/finance-dashboard-ui.git
````

2. Open the folder:

```bash
cd finance-dashboard
```

3. Open `index.html` in your browser

---

## 🧠 Technical Approach

* Built using **Vanilla JavaScript** to demonstrate strong understanding of core concepts like DOM manipulation and state handling.
* Application state is managed using JavaScript arrays and functions.
* Charts are implemented using **Chart.js** for efficient data visualization.
* LocalStorage is used to persist user data without backend integration.

---

## ⚖️ Trade-offs & Decisions

* Chose Vanilla JS over frameworks to focus on fundamentals and simplicity.
* Manual state management instead of libraries like Redux for better control and understanding.
* Focused on clean UI and usability rather than over-complicating features.

---

## 🚧 Future Improvements

* Backend integration for real-time data
* Authentication system
* Advanced analytics and reports
* Export data (CSV/JSON)
* Better UI enhancements and animations

---

## 🙌 Author

**Abhinav Gupta**

---

## 📄 License

This project is for educational and evaluation purposes.

```
