module.exports = {
    content: [
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.html',
    ],
    theme: {
        extend: {}
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};