/** @type {import('next').NextConfig} */
export const images = {
    domains: ['courses-top.ru']
};
export function webpack(config, options) {
    config.module.rules.push({
        loader: '@svgr/webpack',
        options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
                plugins: [{ removeViewBox: false }],
            },
            titleProp: true,
        },
        test: /\.svg$/,
    });

    return config;
}