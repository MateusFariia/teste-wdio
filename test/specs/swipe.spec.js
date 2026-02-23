import swipePage from "../pageobjects/swipe.page";

describe('Dicas da tela Swipe', () => {

    beforeEach(async () => {
        await swipePage.abrirMenuSwipe();
    });

    afterEach(async () => {
        await driver.back(); 
        await driver.pause(2000); 
    });

    it('Deve arrastar para baixo', async () => {
        const { width, height } = await driver.getWindowSize();
        const x = width / 2;
        const startY = height * 0.2; // Topo
        const endY = height * 0.8;   // Base

        await driver.action('pointer')
            .move({ duration: 0, x: x, y: startY })
            .down({ button: 0 })
            .pause(500)
            .move({ duration: 1000, x: x, y: endY })
            .up({ button: 0 })
            .perform();
    });

    it('Deve arrastar para cima usando coordenadas', async () => {
        const { width, height } = await driver.getWindowSize();
        const x = width / 2;

        await driver.action('pointer')
            .move({ duration: 0, x: x, y: height * 0.3 })
            .down({ button: 0 })
            .move({ duration: 1000, x: x, y: height * 0.7 })
            .up({ button: 0 })
            .perform();

        await driver.pause(1000);

        await driver.action('pointer')
            .move({ duration: 0, x: x, y: height * 0.8 }) 
            .down({ button: 0 })
            .pause(500)
            .move({ duration: 1000, x: x, y: height * 0.3 }) 
            .up({ button: 0 })
            .perform();
    });

    it('Deve arrastar pro lado', async () => {
        const { width, height } = await driver.getWindowSize();
        const y = height / 2; 

        await driver.action('pointer')
            .move({ duration: 0, x: width * 0.8, y: y })
            .down({ button: 0 })
            .pause(500)
            .move({ duration: 1000, x: width * 0.2, y: y })
            .up({ button: 0 })
            .perform();
            
        await driver.pause(2000);
    });
});