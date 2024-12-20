document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Simulate a backend check (you can replace this with actual API requests)
    if (email === "admin@logistics.com" && password === "admin123") {
        alert("Welcome, Admin!");
        window.location.href = "admin.html";
    } else if (email === "user@logistics.com" && password === "user123") {
        alert("Welcome, Customer!");
        window.location.href = "index.html";
    } else {
        alert("Invalid login credentials.");
    }
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const role = document.getElementById("registerRole").value;

    alert(`Registered as ${role}!`);
    // Save to backend or localStorage
});
