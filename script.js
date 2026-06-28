const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;
    const terms = document.getElementById("terms").checked;
    const role = document.querySelector('input[name="role"]:checked');

    message.className = "";
    message.textContent = "";

    // Full Name Validation
    if (fullName.length < 3) {
        showError("Full Name must be at least 3 characters.");
        return;
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showError("Please enter a valid email address.");
        return;
    }

    // Password Validation
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordPattern.test(password)) {
        showError(
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number."
        );
        return;
    }

    // Confirm Password
    if (password !== confirmPassword) {
        showError("Passwords do not match.");
        return;
    }

    // Date of Birth
    if (dob === "") {
        showError("Please select your Date of Birth.");
        return;
    }

    // Radio Button
    if (!role) {
        showError("Please select Student or Employee.");
        return;
    }

    // Checkbox
    if (!terms) {
        showError("You must agree to the Terms and Conditions.");
        return;
    }

    // Success
    message.classList.add("success");
    message.textContent = "Registration Successful!";

    form.reset();
});

// Error Function
function showError(text) {
    message.classList.add("error");
    message.textContent = text;
}