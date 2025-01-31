// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
    plugins: [
        tailwindcss,  // Use Tailwind CSS as a PostCSS plugin
        autoprefixer, // Use Autoprefixer to add vendor prefixes
    ],
};
