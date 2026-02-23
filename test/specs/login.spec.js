import loginPage from "../pageobjects/login.page";

describe('Funcionalidade: Login', () => {

    beforeEach( async() => {
        await loginPage.abrirMenu()
    });

    afterEach( async () => {
        await browser.relaunchActiveApp()
    });

    it('Deve fazer login com sucesso', async () => {
        // Sempre que for usar acessibility id, usar o ~ antes do id
        await loginPage.preencherLogin('mateus@teste.com', 'senha@123')
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
        await $('id=android:id/button1').click()
    });

    it('Deve falhar ao fazer o login com email invalido', async () => {
        await loginPage.preencherLogin('mateus@teste', 'teste@123')
        await loginPage.mensagemErro('Please enter a valid email address')
    });

    it('Deve falhar ao fazer login com senha inválida', async () => {
        await loginPage.preencherLogin('mateus@teste.com', '123')
        await loginPage.mensagemErro('Please enter at least 8 characters')
        
    });
    
});