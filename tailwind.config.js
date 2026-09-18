/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aesthetic: {
          black: '#09090B',
          canvas: '#09090B',
          surface: '#121215',
          surfaceHover: '#18181D',
          border: 'rgba(255, 255, 255, 0.08)',
          borderFocus: 'rgba(255, 85, 0, 0.4)',
          text: '#F4F4F5',
          muted: '#A1A1AA',
          dim: '#71717A',
          orange: '#FF5500',
          orangeHover: '#FF661A',
          orangeDim: 'rgba(255, 85, 0, 0.12)',
          amber: '#FF9500',
          amberDim: 'rgba(255, 149, 0, 0.15)',
          danger: '#EF4444',
          dangerDim: 'rgba(239, 68, 68, 0.15)',
          success: '#10B981',
          successDim: 'rgba(16, 185, 129, 0.15)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', '"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'orange-glow': '0 0 20px rgba(255, 85, 0, 0.18)',
        'orange-glow-sm': '0 0 10px rgba(255, 85, 0, 0.25)',
        'orange-glow-lg': '0 0 35px rgba(255, 85, 0, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.55), 0 0 25px rgba(255, 85, 0, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(255, 85, 0, 0.15)' },
          '100%': { boxShadow: '0 0 28px rgba(255, 85, 0, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
