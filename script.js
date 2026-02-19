const usersCount = document.getElementById("usersCount");
const ordersCount = document.getElementById("ordersCount");
const revenueCount = document.getElementById("revenueCount");
const ordersTable = document.getElementById("ordersTable");

const data = {
    users: 1240,
    orders: 320,
    revenue: 85600,
    recentOrders: [
        {id:101, customer:"Rahul", amount:2500, status:"Completed"},
        {id:102, customer:"Anita", amount:1800, status:"Pending"},
        {id:103, customer:"Kiran", amount:3200, status:"Completed"},
        {id:104, customer:"Meena", amount:1500, status:"Pending"}
    ]
};

function loadDashboard(){
    usersCount.textContent = data.users;
    ordersCount.textContent = data.orders;
    revenueCount.textContent = "₹" + data.revenue;

    ordersTable.innerHTML = "";
    data.recentOrders.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>₹${order.amount}</td>
            <td class="status-${order.status.toLowerCase()}">${order.status}</td>
        `;
        ordersTable.appendChild(row);
    });
}

function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle("active");
}

loadDashboard();
