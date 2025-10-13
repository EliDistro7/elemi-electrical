/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Primary brand colors - Gold/Yellow from logo
        primary: {
          50: '#fffbeb',
          100: '#fef3c7', 
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Main gold
          600: '#d97706',  // Rich gold
          700: '#b45309',  // Deep gold
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        
        // Secondary colors - Sage/Gray-Green from logo
        sage: {
          50: '#f7f9f8',
          100: '#ecf0ed',
          200: '#d9e2dc',
          300: '#b8c8be',
          400: '#93ab9d',
          500: '#7a9386',  // Main sage
          600: '#6b8275',  // Medium sage
          700: '#5a6d61',  // Deep sage
          800: '#4a5a50',
          900: '#3d4a42',
          950: '#212a26',
        },

        // Accent gold variations
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },

        // Green accent colors (for success states)
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },

        // Light backgrounds with subtle tints
        background: {
          50: '#fefefe',     // Pure white
          100: '#fdfdfd',    // Off-white
          200: '#fafafb',    // Very light gray
          300: '#f7f8f9',    // Light gray
          400: '#f3f4f6',    // Medium light gray
          500: '#eef0f2',    // Neutral gray
        },

        // Text colors optimized for light backgrounds
        text: {
          primary: '#1f2937',    // Dark gray for main text
          secondary: '#6b7280',  // Medium gray for secondary text
          tertiary: '#9ca3af',   // Light gray for tertiary text
          accent: '#d97706',     // Gold for accents
          sage: '#5a6d61',       // Sage for special accents
          muted: '#d1d5db',      // Very light for disabled text
        },

        // Border colors
        border: {
          light: '#f3f4f6',      // Very light borders
          default: '#e5e7eb',    // Default borders
          medium: '#d1d5db',     // Medium borders
          dark: '#9ca3af',       // Darker borders
          accent: '#d97706',     // Gold accent borders
          sage: '#7a9386',       // Sage accent borders
        },

        // Success, warning, error states
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
         
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },

      // Custom gradients with brand colors
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)',
        'sage-gradient': 'linear-gradient(135deg, #5a6d61 0%, #7a9386 50%, #93ab9d 100%)',
        'brand-gradient': 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #7a9386 100%)',
        'accent-gradient': 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
        'light-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        'hero-gradient': 'linear-gradient(135deg, #d97706 0%, #f59e0b 25%, #fbbf24 50%, #7a9386 75%, #5a6d61 100%)',
      },

      // Custom shadows with brand colors
      boxShadow: {
        'primary': '0 4px 20px rgba(217, 119, 6, 0.15)',
        'primary-lg': '0 10px 30px rgba(217, 119, 6, 0.2)',
        'sage': '0 4px 20px rgba(122, 147, 134, 0.15)',
        'sage-lg': '0 10px 30px rgba(122, 147, 134, 0.2)',
        'gold': '0 4px 20px rgba(245, 158, 11, 0.15)',
        'gold-lg': '0 10px 30px rgba(245, 158, 11, 0.2)',
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },

      // Enhanced Typography
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'Fira Code', 'monospace'],
      },

      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.025em' }],
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.03em' }],
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.035em' }],
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.04em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.045em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.05em' }],
        '8xl': ['6rem', { lineHeight: '1.0', letterSpacing: '-0.05em' }],
        '9xl': ['8rem', { lineHeight: '1.0', letterSpacing: '-0.05em' }],
      },

      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
      },

      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },

      animation: {
        'gentle-float': 'gentle-float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },

      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-3px) translateX(2px)' },
          '66%': { transform: 'translateY(2px) translateX(-2px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        '.glass': {
          'backdrop-filter': 'blur(16px)',
          'background': 'rgba(255, 255, 255, 0.1)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-strong': {
          'backdrop-filter': 'blur(24px)',
          'background': 'rgba(255, 255, 255, 0.15)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
        },
        
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.3)',
        },

        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },

        '.btn-primary': {
          'background': 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)',
          'border': 'none',
          'color': 'white',
          'font-weight': '600',
          'font-family': 'var(--font-poppins)',
          'letter-spacing': '-0.01em',
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 8px 25px rgba(217, 119, 6, 0.3)',
          },
        },
        
        '.btn-secondary': {
          'background': 'linear-gradient(135deg, #5a6d61 0%, #7a9386 50%, #93ab9d 100%)',
          'border': 'none',
          'color': 'white',
          'font-weight': '600',
          'font-family': 'var(--font-poppins)',
          'letter-spacing': '-0.01em',
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 8px 25px rgba(122, 147, 134, 0.3)',
          },
        },

        '.btn-success': {
          'background': 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
          'border': 'none',
          'color': 'white',
          'font-weight': '600',
          'font-family': 'var(--font-poppins)',
          'letter-spacing': '-0.01em',
          'transition': 'all 0.3s ease',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 8px 25px rgba(34, 197, 94, 0.3)',
          },
        },

        '.text-display-xs': {
          'font-family': 'var(--font-poppins)',
          'font-size': '1.5rem',
          'font-weight': '700',
          'line-height': '1.3',
          'letter-spacing': '-0.025em',
        },
        '.text-display-sm': {
          'font-family': 'var(--font-poppins)',
          'font-size': '2rem',
          'font-weight': '700',
          'line-height': '1.25',
          'letter-spacing': '-0.03em',
        },
        '.text-display-md': {
          'font-family': 'var(--font-poppins)',
          'font-size': '2.5rem',
          'font-weight': '800',
          'line-height': '1.2',
          'letter-spacing': '-0.035em',
        },
        '.text-display-lg': {
          'font-family': 'var(--font-poppins)',
          'font-size': '3.5rem',
          'font-weight': '800',
          'line-height': '1.15',
          'letter-spacing': '-0.04em',
        },
        '.text-display-xl': {
          'font-family': 'var(--font-poppins)',
          'font-size': '4.5rem',
          'font-weight': '900',
          'line-height': '1.1',
          'letter-spacing': '-0.045em',
        },
      }
      
      addUtilities(newUtilities)
    },
  ],
}