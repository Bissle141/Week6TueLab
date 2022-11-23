const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {populateMovieList, removeMovie, toggleWatch, notificationDisplayed} = require('../functions/test_functions')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
}) 

afterAll(async () => {
    await driver.quit()
})

describe('general checks', () => {
    it('removes one movie', async() =>{
        await removeMovie(driver)
    });

    it('toggles watched on a movie', async() =>{
        await toggleWatch(driver)
        await driver.sleep(1000)
    });
    
    it('checks that watched notification is displayed', async() =>{
        await notificationDisplayed(driver)
        await driver.sleep(2000)
    });
})