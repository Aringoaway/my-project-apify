const Apify = require('apify');

Apify.main(async () => {
    const sources = [
        'https://www.amazon.com/s?k=samsung&i=deals-intl-ship&ref=nb_sb_noss_2',
        'https://www.amazon.com/s?k=apple&i=deals-intl-ship&ref=nb_sb_noss_2',
        'https://www.amazon.com/s?k=xiaomi&i=deals-intl-ship&ref=nb_sb_noss_1',
    ];

    const requestList = await Apify.openRequestList('categories', sources);
    const requestQueue = await Apify.openRequestQueue();

    const crawler = new Apify.CheerioCrawler({
        maxRequestsPerCrawl: 50,
        requestList,
        requestQueue,
        handlePageFunction: async ({ $, request }) => {
            console.log(`Processing ${request.url}`);

            if (request.userData.detailPage) {

                const results = {
                    url: request.url,
                    title: $('#titleSelection h1').text(),
                    description: $('ul[class^= a-unordered-list a-vertical a-spacing-mini]').text(),
                    price: $('#priceblock_ourprice').text(),

                };
                await Apify.pushData(results);




                if (!request.userData.detailPage) {
                    await Apify.utils.enqueueLinks({
                        $,
                        requestQueue,
                        selector: 'div.s-result-item > a',
                        baseUrl: request.loadedUrl,
                        transformRequestFunction: req => {
                            req.userData.detailPage = true;
                            return req;
                        },
                    });
                }
            }
        });
