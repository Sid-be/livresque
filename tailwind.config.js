/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        book: {
          title: "#2b180f",
          isabel: "#f7f2eb",
          bouton: "#daaa63",
          champ: "#f3e5d0",
          placeholder:"#998e87",
          input:"#ffffff",
          lion: "#bf904b",
          main: "#f8f3ed",
          back: "#f3e5d0",
        },
      },
      borderRadius: {
        // ...
        xl: "2rem",
      },
      backgroundImage: {
        'login-img': "url('/assets/login.png')",
        'etagere': "url('/assets/etagere.svg')",
        'dep':"url('/assets/dep.svg')"
        
      },
      dropShadow: {
        'shademd': '0 1.75em 1.2em #2b180f8c',
        'shadesm': '0 0.3em 0.3em #2b180f',
        'depthmd':'0.4rem 0.12rem 0.2rem #2b180f8c',
        'depthsm':'0.5rem 0.5 0.6rem #2b180f8c',
      }
    },
  },
  plugins: [],
};
