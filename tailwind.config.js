module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    variants: {
      extend: {
        backgroundImage: {
          "hero-pattern":
            "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url(/public/images/profile.jpg",
        },
        colors: {
          "cool-white": "#F5F5F5",
          "warm-white": "#FBF2EF",
          "soft-gray": "rgba(255, 255, 255, 0.7)",
          "full-gray": "#ddd",
          "rich-black": "#171E27",
          "primary-color": "#1A6490",
          "secondary-color": "#E1771E",
          "secondary-light-neutral": "#D0B096",
          "secondary-dark-neutral": "#251E19",
          "primary-light-neutral": "#627885",
          "primary-dark-neutral": "#101517",
          "primary-rich": "#067DC3",
          "secondary-rich": "#FF7400",
          "accent-color": "#149769",
          "accent-rich": "#00C982",
          "accent-light-neutral": "#658C7E",
          "accent-dark-neutral": "#111916",
        },
      },
    },
  },
  plugins: [],
};
