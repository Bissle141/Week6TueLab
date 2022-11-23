const {By} = require('selenium-webdriver')




const populateMovieList = async(driver) => {
        await driver.findElement(By.xpath(`//input`)).sendKeys("Matilda")
        await driver.findElement(By.xpath(`//button`)).click()
}

const removeMovie = async(driver) => {
    const ul = await driver.findElement(By.xpath('//ul'))

    await populateMovieList(driver)

    await driver.findElement(By.id("Matilda")).click()

    expect(ul.hasChildren).toBeFalsy()
}

const toggleWatch = async(driver) => {
    await populateMovieList(driver)
    const span = await driver.findElement(By.xpath('//span'))
    await span.click()
    expect(`${span}[contains(@class,"checked")]`)
}

const notificationDisplayed = async(driver) => {
    const notification = await driver.findElement(By.id('message'))
    const displayed = notification.isDisplayed()
    expect(displayed).toBeTruthy()
}

module.exports = {
    populateMovieList, removeMovie, toggleWatch, notificationDisplayed
}