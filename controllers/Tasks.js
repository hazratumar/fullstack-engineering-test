var Async = require("async");
var RSVP = require('rsvp');
const { htmlOpen, htmlClose, tableRow, tableHeader, tableClose, errorHanding } = require("../client/titleTable");
const { IWantTitle } = require("../operation/Scraper");

//-------------------------------First Task----------------------------------------//

module.exports.FirstTask = async (req, res) => {
    if (req.url.indexOf("address=") == -1) {
        errorHanding(res, "Please enter one or more addresses in URL")
        return;
    }
    htmlOpen(res);
    tableHeader(res, "First Task : Control Flow By Pain Node Js");
    let allFunctions = [];
    if (req.query.address instanceof Array) {
        const array = req.query.address
        for (let address = 0; address < array.length; address++) {
            const url = array[address];
            allFunctions.push(new Promise((resolve) => {
                IWantTitle(url, ((title, webURL) => {
                    resolve([title, webURL])
                }))
            }))
        }
    } else {
        allFunctions.push(new Promise((resolve) => {
            IWantTitle(req.query.address, ((title, webURL) => {
                resolve([title, webURL])
            }))
        }))
    }
    await Promise.all(allFunctions).then((itemArray) => {
        itemArray.map((item) => {
            tableRow(res, item[0], item[1])
        });
        tableClose(res);
        htmlClose(res);
    }).catch((error) => {
        console.log("error", error)
    })
}


//-------------------------------Second Task----------------------------------------//

module.exports.SecondTask = (req, res) => {
    var allFunctions = [];
    if (req.url.indexOf("address=") == -1) {
        errorHanding(res, "Please enter one or more addresses in URL")
        return;
    }
    htmlOpen(res);
    tableHeader(res, "Second Task : Control Flow By Async.Js module");
    if (req.query.address instanceof Array) {
        const array = req.query.address
        for (let address = 0; address < array.length; address++) {
            const url = array[address];
            const getFunction = (cbTitle) => {
                IWantTitle(url, ((title, webURL) => {
                    cbTitle(null, title, webURL);
                }))
            }
            allFunctions.push(getFunction)
        }
    } else {
        const getFunction = (cbTitle) => {
            IWantTitle(req.query.address, ((title, webURL) => {
                cbTitle(null, title, webURL);
            }))
        }
        allFunctions.push(getFunction)
    }
    Async.parallel(allFunctions, (err, itemArray) => {
        if (!err) {
            itemArray.map((item) => {
                tableRow(res, item[0], item[1])
            });
            tableClose(res);
            htmlClose(res);
        }
    });
};

//-------------------------------Third Task----------------------------------------//
module.exports.ThirdTask = (req, res) => {
    if (req.url.indexOf("address=") == -1) {
        errorHanding(res, "Please enter one or more addresses in URL")
        return;
    }
    htmlOpen(res);
    tableHeader(res, "Third Task : Control Flow By RSVP.Js module");
    var allFunctions = [];
    if (req.query.address instanceof Array) {
        const array = req.query.address
        for (let address = 0; address < array.length; address++) {
            const url = array[address];
            allFunctions.push(new RSVP.Promise((resolve, reject) => {
                IWantTitle(url, ((title, webURL) => {
                    resolve([title, webURL]);
                }))
            }))
        }

    } else {
        allFunctions.push(new RSVP.Promise((resolve, reject) => {
            IWantTitle(req.query.address, ((title, webURL) => {
                resolve([title, webURL]);
            }));
        }))
    }
    RSVP.all(allFunctions).then((itemArray) => {
        itemArray.map((item) => {
            tableRow(res, item[0], item[1])
        });
        tableClose(res);
        htmlClose(res);
    }).catch((error) => {
        console.log("error", error)
    })
};
// For Other Routes handling
module.exports.ForOtherRoutes = (req, res) => {
    errorHanding(res, "Please enter correct route")
};