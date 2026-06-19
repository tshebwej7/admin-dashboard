const revenueChart = document.getElementById("revenueChart");

new Chart(revenueChart, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Revenue",
            data: [12000, 19000, 15000, 22000, 18000, 25000],
            borderWidth: 2
        }]
    }
});

const salesChart = document.getElementById("salesChart");

new Chart(salesChart, {
    type: "doughnut",
    data: {
        labels: ["Products", "Services", "Subscriptions"],
        datasets: [{
            data: [45, 30, 25]
        }]
    }
});

const themeButton = document.querySelector(".theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}