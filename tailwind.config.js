const { transform } = require('typescript');

/**@type {import('tailwindcss').Config}*/
module.exports = {
    content: ['./app/**/*.{ts,tsx,css}'],
    darkMode : 'class',
    theme: {
        extend: {
            animation : {
                turn: 'turn 4s infinte '
            },
            keyframes: {
                turn: {
                    '0% 100%': {
                        transform: 'rotate(-120deg)'
                    },
                    
                }
            }
        }
    }
}