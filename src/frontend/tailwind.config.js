import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                'matte-black': 'oklch(var(--matte-black))',
                'neon-red': 'oklch(var(--neon-red))',
                'metallic-gold': 'oklch(var(--metallic-gold))',
                'frosted-glass': 'oklch(var(--frosted-glass))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                'glow-red': '0 0 8px oklch(var(--neon-red) / 0.3), 0 0 16px oklch(var(--neon-red) / 0.15)',
                'glow-gold': '0 0 8px oklch(var(--metallic-gold) / 0.3), 0 0 16px oklch(var(--metallic-gold) / 0.15)',
                'glow-red-strong': '0 0 12px oklch(var(--neon-red) / 0.4), 0 0 24px oklch(var(--neon-red) / 0.2)',
                'official': '0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
                'official-sm': '0 1px 4px rgba(0, 0, 0, 0.12)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'ippb-pulse-ring': {
                    '0%': {
                        boxShadow: '0 0 0 0 oklch(var(--metallic-gold) / 0.4)',
                        opacity: '1'
                    },
                    '50%': {
                        boxShadow: '0 0 0 12px oklch(var(--metallic-gold) / 0.1)',
                        opacity: '0.8'
                    },
                    '100%': {
                        boxShadow: '0 0 0 20px oklch(var(--metallic-gold) / 0)',
                        opacity: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'ippb-pulse-ring': 'ippb-pulse-ring 1s ease-out infinite'
            },
            letterSpacing: {
                'official': '-0.01em'
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
