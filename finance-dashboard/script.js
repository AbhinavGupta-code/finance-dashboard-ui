const tableBody = document.getElementById("tableBody");
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const roleSelect = document.getElementById("role");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const insightText = document.getElementById("insightText");

let lineChart, pieChart;

// Storage
function saveData() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadData() {
    const data = localStorage.getItem("transactions");
    if (data) transactions = JSON.parse(data);
}

// Render Table
function renderTable(data) {
    tableBody.innerHTML = "";

    if (data.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4">No transactions found</td></tr>`;
        return;
    }

    data.forEach(t => {
        tableBody.innerHTML += `
      <tr>
        <td>${t.date}</td>
        <td>₹${t.amount}</td>
        <td>${t.category}</td>
        <td>${t.type}</td>
      </tr>
    `;
    });
}

// Summary
function updateSummary(data) {
    let income = 0, expense = 0;

    data.forEach(t => {
        if (t.type === "income") income += t.amount;
        else expense += t.amount;
    });

    balanceEl.innerText = "Balance: ₹" + (income - expense);
    incomeEl.innerText = "Income: ₹" + income;
    expenseEl.innerText = "Expense: ₹" + expense;
}

// Charts
function renderCharts(data) {
    const dates = data.map(t => t.date);
    const amounts = data.map(t => t.amount);

    const categories = {};
    data.forEach(t => {
        if (t.type === "expense") {
            categories[t.category] = (categories[t.category] || 0) + t.amount;
        }
    });

    if (lineChart) lineChart.destroy();
    if (pieChart) pieChart.destroy();

    lineChart = new Chart(document.getElementById("lineChart"), {
        type: "line",
        data: {
            labels: dates,
            datasets: [{
                label: "Amount Trend (₹)",
                data: amounts
            }]
        }
    });

    pieChart = new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: Object.keys(categories),
            datasets: [{
                data: Object.values(categories)
            }]
        }
    });
}

// Insights
function generateInsights(data) {
    if (data.length === 0) {
        insightText.innerText = "No data available";
        return;
    }

    const categoryTotals = {};

    data.forEach(t => {
        if (t.type === "expense") {
            categoryTotals[t.category] =
                (categoryTotals[t.category] || 0) + t.amount;
        }
    });

    let maxCategory = "";
    let maxAmount = 0;

    for (let cat in categoryTotals) {
        if (categoryTotals[cat] > maxAmount) {
            maxAmount = categoryTotals[cat];
            maxCategory = cat;
        }
    }

    insightText.innerText =
        `You spent the most on ${maxCategory} (₹${maxAmount}).`;
}

// Filters
function applyFilters() {
    let filtered = [...transactions];

    const searchText = searchInput.value.toLowerCase();
    const filterType = filterSelect.value;

    if (searchText) {
        filtered = filtered.filter(t =>
            t.category.toLowerCase().includes(searchText)
        );
    }

    if (filterType !== "all") {
        filtered = filtered.filter(t => t.type === filterType);
    }

    renderTable(filtered);
    updateSummary(filtered);
    renderCharts(filtered);
    generateInsights(filtered);
}

// Role
roleSelect.addEventListener("change", () => {
    addBtn.style.display = roleSelect.value === "admin" ? "block" : "none";
});

// Add Transaction
addBtn.addEventListener("click", () => {
    const amount = prompt("Enter amount:");
    const category = prompt("Enter category:");
    const type = prompt("income/expense:");

    if (!amount || !category || !type) return;

    transactions.push({
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
        amount: Number(amount),
        category,
        type
    });

    saveData();
    applyFilters();
});

// Dark Mode
document.getElementById("darkModeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// Events
searchInput.addEventListener("input", applyFilters);
filterSelect.addEventListener("change", applyFilters);

// Init
function init() {
    loadData();
    applyFilters();
}

init();