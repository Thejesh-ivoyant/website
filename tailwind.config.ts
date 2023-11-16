import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        grape : '#5D3F9C',
        'grape-100' : '#7741E8',
        'haiti' : '#1B0740',
        'light': '#f3f4fe33',
        'grape-dark': '#02041833',
        'head-grape': '#433C4A',
        'geekblue': '#85A5FF',
        'HeaderGray': '#E9E9EC',
        'TinBlue': '#EEEBFF',
        'PurpBlue': "#0D0B71"
        
      },
      fontFamily:{
        poppins : ['Poppins'],
        montserrat : ['Montserrat'],
        oxygen : ['Oxygen']
      }
    },
  },
  plugins: [],
} satisfies Config

