document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");
    const loginButton = document.getElementById("login-btn");
    const userType = document.getElementById("userType");
    const usernameInput = document.getElementById("username");

    // Toggle Password Visibility
    togglePassword.addEventListener("click", function () {
        passwordField.type = passwordField.type === "password" ? "text" : "password";
        this.classList.toggle("fa-eye-slash");
    });

    // Regular login functionality
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordField.value.trim();
        const adminData = JSON.parse(localStorage.getItem("admin")) || [];
        const userData = JSON.parse(localStorage.getItem("userData")) || [];

        if (userType.value === "user") {
            const user = userData.find(u => u.username === username && u.password === password);
            if (user) {
                localStorage.setItem("activeUser", JSON.stringify(user));
                Swal.fire({ icon: "success", title: "Welcome, User!", text: "Login successful!" })
                    .then(() => window.location.href = "../userFiles/user.html");
            } else {
                Swal.fire({ icon: "error", title: "Login Failed", text: "Invalid User credentials!" });
            }
        } else if (userType.value === "admin") {
            const admin = adminData.find(a => a.username === username && a.password === password);
            if (admin) {
                localStorage.setItem("activeUser", JSON.stringify(admin));
                Swal.fire({ icon: "success", title: "Welcome, Admin!", text: "Login successful!" })
                    .then(() => window.location.href = "../adminFiles/admin.html");
            } else {
                Swal.fire({ icon: "error", title: "Login Failed", text: "Invalid Admin credentials!" });
            }
        } else {
            Swal.fire({ icon: "warning", title: "User Type Missing", text: "Please select a user type!" });
        }
    });

    // Guest User Login (No authentication)
    document.getElementById("guestUser").addEventListener("click", () => {
        const guestUser = { username: "GuestUser", role: "user" };
        localStorage.setItem("activeUser", JSON.stringify(guestUser));
        Swal.fire({ icon: "success", title: "Logged in as Guest User!", text: "Redirecting to user dashboard..." })
            .then(() => window.location.href = "../userFiles/user.html");
    });

    // Guest Admin Login (No authentication)
    document.getElementById("guestAdmin").addEventListener("click", () => {
        const guestAdmin = { username: "GuestAdmin", role: "admin" };
        localStorage.setItem("activeUser", JSON.stringify(guestAdmin));
        Swal.fire({ icon: "success", title: "Logged in as Guest Admin!", text: "Redirecting to admin dashboard..." })
            .then(() => window.location.href = "../adminFiles/admin.html");
    });
});
