/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "skin-pink":
                    "linear-gradient(to bottom right, var(--color-bg-from-pink), var(--color-bg-to-pink))",
                "skin-halloween":
                    "linear-gradient(to bottom right, var(--color-bg-from-halloween), var(--color-bg-to-halloween)), url('../public/images/7410.jpg')",
            },
            backgroundColor: {
                "input-pink": "var(--color-input-background-pink)",
                "box-pink": "var(--color-box-bg-pink)",
                "box-inner-pink": "var(--color-box-border-inner-pink)",
                "box-outter-pink": "var(--color-box-border-outter-pink)",
                "button-hover-pink":
                    "var(--color-button-background-hover-pink)",
                "button-pink": "var(--color-button-background-pink)",
                "input-halloween": "var(--color-input-background-halloween)",
                "box-halloween": "var(--color-box-bg-halloween)",
                "box-inner-halloween":
                    "var(--color-box-border-inner-halloween)",
                "box-outter-halloween":
                    "var(--color-box-border-outter-halloween)",
                "button-halloween": "var(--color-button-background-halloween)",
                "button-hover-halloween":
                    "var(--color-button-background-hover-halloween)",
            },
            textColor: {
                "header-icon-pink": "var(--color-header-icon-pink)",
                "header-pink": "var(--color-header-text-pink)",
                "skin-pink": "var(--color-text-pink)",
                "input-pink": "var(--color-input-text-pink)",
                "box-pink": "var(--color-box-text-pink)",
                "header-icon-halloween": "var(--color-header-icon-halloween)",
                "header-halloween": "var(--color-header-text-halloween)",
                "skin-halloween": "var(--color-text-halloween)",
                "input-halloween": "var(--color-input-text-halloween)",
                "box-halloween": "var(--color-box-text-halloween)",
            },
            borderColor: {
                "input-pink": "var(--color-input-border-pink)",
                "box-inner-pink": "var(--color-box-border-inner-pink)",
                "box-outter-pink": "var(--color-box-border-outter-pink)",
                "input-halloween": "var(--color-input-border-halloween)",
                "box-inner-halloween":
                    "var(--color-box-border-inner-halloween)",
                "box-outter-halloween":
                    "var(--color-box-border-outter-halloween)",
            },
        },
    },
    plugins: [],
};
