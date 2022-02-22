// import pool from '../configs/conectDB'

let getHomePage = (req, res) => {
    return res.render('homePage')
}
let getAboutPage = (req, res) => {
    return res.render('aboutPage')
}
module.exports = {
    getHomePage,
    getAboutPage
}