import dragPage from '../pageobjects/drag.page'

describe('Testes de Drag and Drop', () => {

    beforeEach( async () => {
        dragPage.abrirMenuDrag()
    });

    // Como o dragAndDrop deu o erru "Couldn't find element for pointerMove", provavelmente devido a eu usar um emulator com tela pequena
    // foi utilizado o método abaixo para resolver o problema, pois ficavam peças sobrepostas na tela
    it('Arrastar cada peça para seu local correto', async () => {
    const lados = ['l', 'c', 'r'];
    const posicoes = ['1', '2', '3'];

    for (const lado of lados) {
        for (const pos of posicoes) {
            const id = `${lado}${pos}`;

            const peca = await $(`~drag-${id}`);
            const destino = await $(`~drop-${id}`);

            await peca.waitForDisplayed({timeout: 5000});

            const pecaLocation = await peca.getLocation();
            const destinoLocation = await destino.getLocation();

            await driver.action('pointer')
                .move({ duration: 0, x: Math.ceil(pecaLocation.x + 20), y: Math.ceil(pecaLocation.y +20)})
                .down({ button: 0})
                .pause(800)
                .move({
                    duration: 1500,
                    x: Math.ceil(destinoLocation.x + 20),
                    y: Math.ceil(destinoLocation.y +20)
                })
                .up({ button: 0})
                .perform();

            await driver.pause(500);
        }
    }
    await browser.pause(3000)

    const mensagem = await $('android=new UiSelector().text("Congratulations")');
    await expect(mensagem).toBeDisplayed();
    });
    
});