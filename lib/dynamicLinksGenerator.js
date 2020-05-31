const { post } = require('request-promise');
const { CONSTANTS } = require('./constants');
const { logger } = require('./logger');

const dynamicLinksGenerator = async (url) => {
    try {
        const options = {
            uri: CONSTANTS.FIREBASE_DYNAMIC_LINK_END_POINT,
            qs: {
                key: process.env.API_KEY
            },
            body: {
                dynamicLinkInfo: {
                    domainUriPrefix: process.env.DYNAMIC_LINK_APP_NAME,
                    link: url
                }
            },
            json: true
        }

        logger.info(`Attempting to generate short url for => ${url}`);
        const result = await post(options);
        return { shortLink: result.shortLink };
    } catch (err) {
        logger.error(`There was an error while processing request.\n\t Error=> ${err.message}`);
        throw err;
    }
}

module.exports = { dynamicLinksGenerator }