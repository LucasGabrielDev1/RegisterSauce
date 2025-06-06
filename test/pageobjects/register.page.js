import { $ } from '@wdio/globals'

// Função para fazer swipe para cima (rolar a tela para baixo)
async function swipeUp() {
  const { width, height } = await driver.getWindowSize();
  const startX = width / 2;
  const startY = height * 0.8;
  const endY = height * 0.2;

  await driver.touchAction([
    { action: 'press', x: startX, y: startY },
    { action: 'wait', ms: 200 },
    { action: 'moveTo', x: startX, y: endY },
    'release'
  ]);
}

// Função para tentar localizar o elemento, rolando até 5 vezes
async function scrollToElement(selector, maxSwipes = 5) {
  let found = false;
  let swipes = 0;

  while (!found && swipes < maxSwipes) {
    const elem = await $(selector);
    if (await elem.isDisplayed()) {
      found = true;
      break;
    }
    await swipeUp();
    swipes++;
  }

  if (!found) {
    throw new Error(`Elemento ${selector} não encontrado após ${maxSwipes} swipes`);
  }
}

class RegisterPage {
    
    get nome() {
        return $('//android.widget.EditText[@resource-id="firstName"]');
    }
    get sobrenome() {
        return $('//android.widget.EditText[@resource-id="lastName"]');
    }

    get numero() {
        return $('//android.widget.EditText[@resource-id="phone"]');
    }

    get email() {
        return $('//android.widget.EditText[@resource-id="email"]');
    }

    get password() {
        return $('//android.widget.EditText[@resource-id="password"]');
    }

    get confirmarsenha() {
        return $('//android.widget.EditText[@resource-id="repassword"]');
    }

    get btnCreate() {
        return $('~Create');
    }

    async register(nome, sobrenome, numero, email, password, confirmarsenha) {
        const nomeInput = await this.nome;
        await nomeInput.waitForDisplayed({timeout: 10000});
        await nomeInput.setValue(nome);

        const sobrenomeinput = await this.sobrenome;
        await sobrenomeinput.waitForDisplayed({timeout: 10000});
        await sobrenomeinput.setValue(sobrenome);

        const numeroInput = await this.numero;
        await numeroInput.waitForDisplayed({timeout: 10000});
        await numeroInput.setValue(numero);

        const emailInput = await this.email;
        await emailInput.scrollIntoView();
        await emailInput.waitForDisplayed({ timeout: 10000 });
        await emailInput.setValue(email);

        const passwordInput = await this.password;
        await passwordInput.scrollIntoView();
        await passwordInput.waitForDisplayed({ timeout: 10000 });
        await passwordInput.setValue(password);

        const confirmarsenhainput = await this.confirmarsenha;
        await confirmarsenhainput.scrollIntoView();
        await confirmarsenhainput.waitForDisplayed({timeout: 10000});
        await confirmarsenhainput.setValue(confirmarsenha);

        // Agora usamos scrollToElement para garantir que o botão esteja visível, rolando a tela se precisar
        await scrollToElement('~Create', 5);

        const CreateButton = await this.btnCreate;
        await CreateButton.waitForDisplayed({ timeout: 10000 });
        await CreateButton.click();

    }
    
}

export default new RegisterPage();

