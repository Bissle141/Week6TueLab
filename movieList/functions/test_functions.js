const {By} = require('selenium-webdriver')

let moviesArr = ["Matilda", "Scooby Doo", "Home Alone"]



const populateMovieList = async(driver) => {
    for (let i = 0; i < moviesArr.length; i++) {
        await driver.findElement(By.xpath(`//input`)).sendKeys(moviesArr[i])
        await driver.findElement(By.xpath(`//button`)).click()
    }
    await driver.sleep(3000)
}

const removeMovie = async(driver) => {
    await driver.findElement(By.id('HomeAlone')).click()
    await driver.sleep(3000)
}

const toggleWatch = async(driver) => {
    await driver.findElement(By.xpath('//span[1]')).click()
}

const notificationDisplayed = async(driver) => {
    const notification = await driver.findElement(By.id('message'))
    const displayed = notification.isDisplayed()
    expect(displayed).toBeTruthy()

}

module.exports = {
    populateMovieList, removeMovie, toggleWatch, notificationDisplayed
}