// NAV SHADOW (kept your original)
window.addEventListener("scroll", () => {
    let nav = document.getElementById("nav");
    if (nav) {
        nav.style.boxShadow = window.scrollY > 40 ? "0 4px 15px rgba(0,0,0,.2)" : "none";
    }
});

/// LOGIN FUNCTIONALITY
const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email");
        let password = document.getElementById("password");

        let errorMsg = document.getElementById("errorMsg");

        errorMsg.textContent = "";
        errorMsg.style.color = "red";

        if (email.value.trim() === "" || password.value.trim() === "") {
            errorMsg.textContent = "Please fill all fields.";
            return;
        }

        // fake correct password example
        const correctPassword = "Admin@123";

        if (password.value !== correctPassword) {
            errorMsg.textContent = "Incorrect password.";
            return;
        }

        // SAVE LOGIN STATUS
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email.value);
        localStorage.setItem("userRole", document.getElementById("role").value);

        errorMsg.style.color = "green";
        errorMsg.textContent = "Login successful! Redirecting...";

        // REDIRECT AFTER 1 SECOND
        setTimeout(() => {
            window.location.href = "dynamic.html";
        }, 1000);

    });
}

// SHOW PASSWORD TOGGLE
const toggle = document.getElementById("togglePassword");
if (toggle) {
    toggle.addEventListener("click", () => {
        let pass = document.getElementById("password");
        pass.type = pass.type === "password" ? "text" : "password";
    });
}

// SIGNUP FUNCTIONALITY
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let fullName = document.getElementById("fullName").value.trim();
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("signupEmail").value.trim();
        let password = document.getElementById("password").value.trim();
        let errorMsg = document.getElementById("errorMsg");

        if (fullName === "" || username === "" || email === "" || password === "") {
            errorMsg.textContent = "Please fill all fields.";
            return;
        }

        // Save user info
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userFullName", fullName);
        localStorage.setItem("userUsername", username);
        localStorage.setItem("userEmail", email);

        errorMsg.style.color = "green";
        errorMsg.textContent = "Account created successfully! Redirecting...";

        setTimeout(() => {
            window.location.href = "dynamic.html";
        }, 1000);

    });
}



const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

/* SCROLL REVEAL */

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.8;

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < trigger) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});


// Scroll reveal animation
const elements = document.querySelectorAll('.feature-card, .hub-card, .blog-card, .testimonial');
elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.6s ease";
});
window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

function downloadNotes(subject) {

    const notesLinks = {
        math: "https://www.downloadclassnotes.com/mathematics-notes-for-9th-class-for-fbise-islamabad-punjab-boards/",
        science: "https://www.scribd.com/document/825057711/General-Science-Notes-Qureshi-compressed",
        language: "https://www.scribd.com/document/472689941/ENGLISH-GRAMMAR-NOTES#:~:text=The%20document%20provides%20an%20overview,conjunctions%2C%20phrases%20and%20sentence%20structure."
    };

    const link = document.createElement("a");
    link.href = notesLinks[subject];
    link.download = subject + "-notes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



