/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
        unoptimized: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
}

module.exports = nextConfig