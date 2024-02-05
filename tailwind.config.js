/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/*.md", "themes/dorothy/layouts/**/*.html"],
  theme: {
    fontFamily: {
      sans: ['system-ui', 'sans-serif'],
      serif: ['Times New Roman', 'sans-serif'],
      mono: ['Andalé Mono', 'monospace'],
    }, 
    extend: {
      typography: ({ theme }) => ({ 
        default: {
          css: {
            color: theme('colors.slate'),
          }
        },
        slate: {
          css: { 
            'img': {
              borderRadius: '10px'
            },
            '.prose a': { 
              borderBottom: '1px dashed #6b7280',
              fontWeight: '400',
              textDecoration: 'none',
            },
            'h1,h2,h3,h4,h5,h6': { 
              // fontSize: '100%',
              // fontFamily: 'Arial, sans-serif',
              fontWeight: '500',
              // textTransform: 'uppercase',
            }
            ,
            '--tw-prose-body': theme('colors.slate[600]'),
            '--tw-prose-headings': theme('colors.slate[800]'),
            '--tw-prose-lead': theme('colors.slate[800]'),
            '--tw-prose-links': theme('colors.slate[800]'),
            '--tw-prose-bold': theme('colors.slate[800]'),
            '--tw-prose-counters': theme('colors.slate[800]'),
            '--tw-prose-bullets': theme('colors.slate[800]'),
            '--tw-prose-hr': theme('colors.slate[200]'),
            '--tw-prose-quotes': theme('colors.slate[600]'),
            '--tw-prose-quote-borders': theme('colors.slate[200]'),
            '--tw-prose-captions': theme('colors.slate[800]'),
            '--tw-prose-code': theme('colors.slate[800]'),
            '--tw-prose-pre-code': theme('colors.slate[800]'),
            '--tw-prose-pre-bg': theme('colors.slate[800]'),
            '--tw-prose-th-borders': theme('colors.slate[200]'),
            '--tw-prose-td-borders': theme('colors.slate[200]'),
            // Everything below will be dark mode
            '--tw-prose-invert-body': theme('colors.slate[300]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[300]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[300]'),
            '--tw-prose-invert-hr': theme('colors.zinc[600]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[300]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.zinc[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.emerald[800]'),
            '--tw-prose-invert-td-borders': theme('colors.emerald[800]'),
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}