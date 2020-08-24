const I = actor();

module.exports = {

    async grabImgs(){
        return urls = I.grabAttributeFrom('//*/div/img','src');
    },

    async filterWorkingImgs(urls){
        let exp = /.*\.com\/(img\/)[A-Za-z-]*\.jpg/g;
        //let workingUrls = []
        return workingUrls = urls.filter(url => {
            return url.match(exp);
        });
    },

    async filterBrokenImgs(urls){
        let exp = /.*\.com\/(img\/)[A-Za-z-]*\.jpg/g;
        //let brokenUrls = []
        return brokenUrls = urls.filter(url => {
            return !url.match(exp);
        });
    },

    async printoConsole(urls, color){
        for (let url of urls) {
            I.say(url,color)
        }
    }
}