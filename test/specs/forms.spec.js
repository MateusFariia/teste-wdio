import formPage from '../pageobjects/forms.page'

describe('Funcionalidade: Tela de formulario', () => {

    beforeEach(async () => {
        formPage.abrirMenuForm()
    });

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await formPage.preencherTexto('Teste Appium')
        expect(await formPage.validarTexto()).toEqual('Teste Appium')
        await driver.pause(5000)
    });

    it('Validar a seleção do dropdown', async () => {
        await formPage.selecionarOpcao('Appium is awesome')
        expect(await formPage.validarOpcao()).toEqual('Appium is awesome')
        await driver.pause(5000)
    });

    it.only('Deve trocar o botão de ON para OFF', async () => {
        //Trocar para ON
        const botaoOnOff = await driver.$("accessibility id:switch");
        await botaoOnOff.click();
        await driver.pause(5000)
        //Trocar para OFF
        await browser.swipe({
        direction: 'left',                  // Swipe from right to left
        duration: 5000,                     // Last for 5 seconds
        percent: 0.1,                       // Swipe 50% of the scrollableElement
        scrollableElement: botaoOnOff,  // The element to swipe within
    })
    });

});