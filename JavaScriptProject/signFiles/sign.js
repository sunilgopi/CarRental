const form = document.getElementById('signupForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => (el.textContent = ''));

    let isValid = true;

    // Validate user type
    const userType = document.getElementById('userType').value;
    if (!userType) {
        isValid = false;
        document.getElementById('userTypeError').textContent = 'Please select a user type.';
    }

    // Validate username
    const username = document.getElementById('username').value.trim();
    if (username.length < 3) {
        isValid = false;
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
    }

    // Validate password
    const password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordPattern.test(password)) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password is Weak';
    }

    // Validate re-entered password
    const rePassword = document.getElementById('rePassword').value;
    if (rePassword !== password) {
        isValid = false;
        document.getElementById('rePasswordError').textContent = 'Passwords do not match.';
    }

    if (isValid) {
        // Check if user/admin data already exists in localStorage
        const storageKey = userType === 'user' ? 'userData' : 'admin';
        const existingData = JSON.parse(localStorage.getItem(storageKey)) || [];

        // Check for duplicate email or username
        const isDuplicate = existingData.some(user => user.email === email || user.username === username);

        if (isDuplicate) {
            Swal.fire({
                icon: 'error',
                title: 'Duplicate Data',
                text: 'User or Admin with this email or username already exists.',
                confirmButtonText: 'OK',
            });
            return; // Stop further execution
        }

        // Store user/admin data in localStorage
        const userData = {
            username: username,
            email: email,
            password: password,
        };

        existingData.push(userData);
        localStorage.setItem(storageKey, JSON.stringify(existingData));

        // Success SweetAlert
        Swal.fire({
            icon: 'success',
            title: `${userType === 'user' ? 'User' : 'Admin'} Signed Up Successfully!`,
            text: 'Redirecting to login page...',
            confirmButtonText: 'OK',
        }).then(() => {
            form.reset(); // Reset the form
            window.location.href = "../loginFiles/login.html"; // Redirect to login page
        });
    }
});

// Toggle Password Visibility
function toggleVisibility(inputId, toggleIconId) {
    const inputField = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleIconId);

    toggleIcon.addEventListener('click', function () {
        if (inputField.type === 'password') {
            inputField.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash'); // Change icon to 'Hide'
        } else {
            inputField.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye'); // Change icon to 'Show'
        }
    });
}

toggleVisibility('password', 'togglePassword');
toggleVisibility('rePassword', 'toggleRePassword');
