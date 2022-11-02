

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get accountName () {
        return $("//h1[@class='XY0ASe']");
    }
}

module.exports = new SecurePage();
