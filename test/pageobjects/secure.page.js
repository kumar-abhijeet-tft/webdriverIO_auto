const Page = require('./page');

class SecurePage extends Page {
    
    get accountName () {
        return $("//h1[@class='XY0ASe']");
    }
}

module.exports = new SecurePage();
