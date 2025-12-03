module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        card: 'var(--card)'
      ,
      skills: {
        react: '#61DBFB',
        reactBg: '#102130',
        javascript: '#F7DF1E',
        javascriptBg: '#2b2a2a',
        python: '#3776AB',
        pythonBg: '#0f172a',
        git: '#F05032',
        gitBg: '#111827',
        django: '#092E20',
        djangoBg: '#e6f4ef',
        figma: '#F24E1E',
        figmaBg: '#fff7f5',
        photoshop: '#31A8FF',
        photoshopBg: '#071430',
        illustrator: '#FF9A00',
        illustratorBg: '#2a1b00'
      }
      },
      boxShadow: {
        soft: '0 6px 18px rgba(2,6,23,0.5)'
      }
    },
  },
  plugins: [],
}
