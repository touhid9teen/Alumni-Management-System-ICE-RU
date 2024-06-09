export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                100: "400px",
                4.5: "18px",
                10.5: "42px",
            },
            colors: {
                primary: "#aaebec",
                secondary: "#ECECEC",
                "deep-blue": "#00156A",
                "light-blue": "#F3F6F9",
                "royal-indigo": "#2B3674",
                "tranquil-blue": "#B9C1D9",
                "silver-cloud": "#F3F3F3",
                "grayish-blue": "#F3F6F9",
                "han-purple": "#5630FF",
                "vivid-blue": "#4318FF",
                textDark: "#464E5F",
                "dark-indigo": "#0C1421",
                "dark-slate-blue": "#313957",
            },
            borderWidth: {
                0.5: "0.5px",
            },
            boxShadow: {
                toggle: "1px 1px 2px -1px rgba(51, 51, 51, 0.30)",
                tooltip: "0px 11px 10.7px 0px rgba(0, 0, 0, 0.08)",
                "action-menu": "0px 4px 15px 0px rgba(0, 0, 0, 0.10)",
            },
        },
    },
};
