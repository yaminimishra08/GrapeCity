/* ===============================
   Google Fonts Import
================================= */
/* Playfair Display for headings & Poppins for body */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap');


/* ===============================
   Reset Default Browser Styling
================================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* ===============================
   Body Styling
================================= */
body {
   /* Sets overall background & font */
    font-family: 'Poppins', sans-serif;
    background-color: #fdf2f8;   /* Soft elegant pink background */
    color: #3f3f46;
    line-height: 1.6;
}


/* ===============================
   Center Main Layout Content
================================= */
section,
header,
nav,
footer {
    max-width: 1100px;
    margin: auto;
}


/* ===============================
    Header Section
================================= */
header {
    background: #be185d;        /* Deep classy pink */
    color: white;
    text-align: center;
    padding: 60px 20px;         /* Increased padding */
    margin-bottom: 15px;        /* Creates separation from navigation */
}

/* Main Name Styling */
header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 44px;
    margin-bottom: 12px;
    letter-spacing: 1px;        /* Makes text wider */
}

/* Tagline Styling */
header p {
    font-size: 18px;
    font-weight: 300;
}


/* ===============================
   Navigation Bar
================================= */
nav {
    background: #9d174d;
    padding: 8px 0;             /* Adds vertical */
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav li {
    margin: 12px 25px;          /* Slightly reduced spacing */
}

nav a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    transition: 0.3s ease;
}

nav a:hover {
    color: #fbcfe8;             /* Soft pink hover */
}


/* ===============================
   Section Spacing
   Reduced vertical gaps
================================= */
section {
    padding: 30px 20px;
}


/* ===============================
   Section Headings
================================= */
h2 {
    font-family: 'Playfair Display', serif;
    font-size: 34px;
    color: #9d174d;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

/* Decorative underline below headings */
h2::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background-color: #db2777;
    margin-top: 8px;
    border-radius: 2px;
}


/* Paragraph Spacing */
section p {
    margin-bottom: 12px;
}

/* Ordered List Styling */
ol {
    margin-left: 25px;
    margin-top: 8px;
}

/* Adds space between delete button and text */
#benefitsList button {
    margin-left: 10px;
}

/* ===============================
   Projects Section (Flexbox)
================================= */
.project-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.project-card {
    background: white;
    flex: 1 1 30%;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(190, 24, 93, 0.08);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-card h3 {
    margin-bottom: 10px;
    color: #be185d;
}

.project-card a {
    display: inline-block;
    margin-top: 10px;
    text-decoration: none;
    color: #db2777;
    font-weight: 600;
}

.project-card a:hover {
    text-decoration: underline;
}


/* ===============================
   Contact Form Styling
================================= */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;          /* Reduced top spacing */
}

input,
textarea {
    padding: 12px;
    border: 1px solid #f9a8d4;
    border-radius: 8px;
    font-family: inherit;
    font-size: 14px;
}

textarea {
    min-height: 120px;
    resize: vertical;
}

/* Submit Button */
button {
    padding: 12px;
    border: none;
    border-radius: 8px;
    background-color: #db2777;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
}

button:hover {
    background-color: #9d174d;
}


/* ===============================
   Footer Section
================================= */
footer {
    background: #be185d;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 20px;          /* Reduced from 40px */
}

footer a {
    color: #fbcfe8;
    text-decoration: none;
    margin: 0 10px;
    font-weight: 500;
}

footer a:hover {
    text-decoration: underline;
}


/* ===============================
   Responsive Design
================================= */
@media (max-width: 768px) {

    nav ul {
        flex-direction: column;
        align-items: center;
    }

    .project-container {
        flex-direction: column;
    }

    header h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 24px;
    }
}
