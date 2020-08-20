const I = actor();

module.exports = {
    async brokenImg() { 
        let urls = await I.grabAttributeFrom('//*/div/img','src');
        //console.log(urls);
        let exp = /.*\.com\/(?!img\/)[A-Za-z-]*\.jpg/g;
        
        brokenUrls = urls.filter(url => {
            return url.match(exp);
        });
        
        return brokenUrls;
    },
    
    async printoConsole(brokenUrls){
        brokenUrls.forEach((element, i) => {
            I.say(`Image #${i+1}: ${element}`)
        });
        
        //return console.log(brokenUrls.join('\n'));
    }
}