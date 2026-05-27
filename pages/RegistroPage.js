class RegistroPage {
  constructor(page) {
    this.page = page;

    this.inputNombre = '#nombre';
    this.inputEmail = '#email';
    this.inputPassword = '#password';
    this.btnRegistrar = 'button[type="submit"]';
    this.labelStatus = '#status';
  }

  async navegar() {
    await this.page.goto('http://localhost:3000');
  }

  async llenarFormulario(nombre, email, password) {
    await this.page.fill(this.inputNombre, nombre);
    await this.page.fill(this.inputEmail, email);
    await this.page.fill(this.inputPassword, password);
  }

  async registrar() {
    await this.page.click(this.btnRegistrar);
  }
}

module.exports = { RegistroPage };