const enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

const BASE_URL = 'http://206.189.60.138:3000';

export const generateWrapperSitemap = async (
    generateContent: (() => Promise<string>)[],
) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    const content = await Promise.all(
        generateContent.map((generateContent) => generateContent()),
    );

    content.forEach((content) => {
        xml += content;
    });

    xml += `</urlset>`;

    return xml;
};

const generateStaticPagesSitemap = async () => {
    // TODO save this info from pages and get this from backend
    const urls = [
        {
            loc: AppRoutes.MAIN,
            changefreq: 'monthly',
            priority: 1.0,
            title: 'main',
            description: 'description main',
        },
        {
            loc: AppRoutes.ABOUT,
            changefreq: 'monthly',
            priority: 0.8,
            title: 'about',
            description: 'description about',
        },
        {
            loc: AppRoutes.ARTICLES,
            changefreq: 'monthly',
            priority: 0.5,
            title: 'articles',
            description: 'description articles list',
        },
        {
            loc: AppRoutes.FORBIDDEN,
            changefreq: 'monthly',
            priority: 0.1,
            title: 'forbidden',
            description: 'description forbidden',
        },
        {
            loc: AppRoutes.NOT_FOUND,
            changefreq: 'monthly',
            priority: 0.1,
            title: 'not_found',
            description: 'description not_found',
        },
    ];

    let xml = '';

    urls.forEach(({ loc, changefreq, priority, title, description }) => {
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}/${loc}</loc>\n`;
        xml += `    <title>${title}</title>\n`;
        xml += `    <description>${description}</description>\n`;
        xml += `    <changefreq>${changefreq}</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;
        xml += `  </url>\n`;
    });

    return xml;
};

const generateArticlesSitemap = async () => {
    try {
        const result = await fetch(`${__API__}/articles-sitemap`, {
            method: 'GET',
        });
        const articles = await result.json();

        let xml = '';

        articles.forEach((article: any) => {
            const { id, title, subtitle } = article;
            xml += '  <url>\n';
            xml += `    <loc>${BASE_URL}/article/${id}</loc>\n`; // change urls to human understanding instead of ids for seo
            xml += `    <title>${title}</title>\n`;
            xml += `    <description>${subtitle}</description>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>1.0</priority>\n`;
            xml += '  </url>\n';
        });

        return xml;
    } catch (error) {
        // TODO log error

        return '';
    }
};

export const generateContent = [
    generateStaticPagesSitemap,
    generateArticlesSitemap,
];

// export const createSitemap = async () => {
//     const sitemapContent = await generateWrapperSitemap(generateContent);
//     const sitemapPath = path.join(__dirname, 'sitemap.xml');

//     writeFileSync(sitemapPath, sitemapContent, 'utf8');
// };

// export const createSitemap = async () => {
//     const sitemapContent = await generateWrapperSitemap(generateContent);

//     const blob = new Blob([sitemapContent], { type: 'application/xml' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'sitemap.xml';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
// };
