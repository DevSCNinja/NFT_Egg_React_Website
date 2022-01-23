// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
          'londrina-black': ['LondrinaSolid-Black', 'sans-serif'],
          'londrina-thin': ['LondrinaSolid-Thin', 'sans-serif'],
          'robot-mono': ['Roboto Mono', 'monospace'],
        },
        extend: {
            colors: {
                'primary': '#20B3FF',
                'secondary': '#007CBC',
                'dark-green': '#133241',
                'grey': '#EDEDED',
            }
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
      container: true
    },
    plugins: [
        require('@tailwindcss/forms'),
        function ({ addComponents }) {
            addComponents({
              '.container': {
                width: '100%',
                margin: '0 auto',
                '@screen sm': {
                  maxWidth: '640px',
                },
                '@screen md': {
                  maxWidth: '768px',
                },
                '@screen lg': {
                  maxWidth: '1024px',
                },
                '@screen xl': {
                  maxWidth: '1200px',
                },
                '@screen 2xl': {
                  maxWidth: '1380px',
                },
              }
            })
          }
    ],
}