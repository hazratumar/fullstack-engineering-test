const getMetaData = require('metadata-scraper')

module.exports.IWantTitle = (address, getTitle) => {
    //if address without protocol add "https://" because this module not accept url without protocol
    const https = address.split("https://").length == 1 ? "https://" + address : address
    getMetaData(https).then((data) => {
        getTitle((data.title ? data.title : "Not Found"), address)
    }).catch(() => {
        getTitle("No Response", address)
    })
}