var homeDepotArray2 = require('../testsAssets/homeDepotArray2')
var homeDepotArray = require('../testsAssets/homeDepotArray')
var homeDepot = {}
module.exports = {
    before: browser => {
        homeDepot = browser.page.homeDepotPage()
        homeDepot.navigate()
        // .waitForElementPresent('body')
    },
    after: browser => {
        homeDepot.end()
    },
    // 'sign up test': browser => {
    //     homeDepot
    //         .click('@myAccount')
    //         .click('@register')
    //         .setValue('@enterEmail', 'omomagreg@gamil.com')
    //         .setValue('@enterPw', 'Pokemon2')
    //         .setValue('@enterZip', '11413')
    //         .setValue('@enterPhone', '6466517770')
    //         .click('@createAcct')
    //         .click('@skipForNow')
    // },
    // 'sign in test': browser => {
    //     homeDepot
    //         .click('@myAccount')
    //         .click('@signInBtn')
    //         .setValue('@enterEmail', 'omomagreg@yahoo.com')
    //         .setValue('@enterPw', 'Pokemon1')
    //         .click('@signInBtn')
    // },
    'verify featured categories': browser => {
        var homeDepotObject = {
            process: (pageObject, item) => {
                pageObject
                    .click('@homeDecor')
                    .click(item.category)
                    .verify.containsText('@header', item.result)
                    .click('@home')
            }
        }
        homeDepotArray.forEach(info => {
            homeDepotObject.process(homeDepotPage, info)
        })

    },
    'verify featured categories 2': broswer => {
        var homeDepotObject2 = {
            stage: (pageObject, piece) => {
                pageObject
                    .useXpath()
                    .click(`(//img[@class="visualNav__img"])[${piece.number}]`)
                    .verify.containsText(piece.result)
                    .click('@home')
            }
        }
        homeDepotArray2.forEach(data => {
            homeDepotObject2.stage(homeDepotPage, data)
        })
    }
}   