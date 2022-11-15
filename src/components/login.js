export const login = () => {
  const pageLogin = `<section class="containerAuth container">    
    <section class="containerAuth__content">
      <h1 class="containerAuth__title-content">Inicia sesion</h1>
      <div class= "containerAuth__register-content">
        <form class="containerAuth__form-register" id="formLogin">
          <input class="containerAuth__email-form" placeholder="email" id="emailLogin" name="email">
          <input class="containerAuth__password-form" placeholder="Contraseña" id="passwordLogin" name="password" type="password">
          <h3 class="lines-effect">OR</h3>
          <a href="#" id="loginGoogle" class="containerAuth__button-google">
            <img src="assets/img/google.png" alt="logo de google">
            Login con Google
          </a>
          <button class="containerAuth__login-button" id="login">Ingresar</button>
        </form>
      </div>
      <div class="error"></div>
    </section>
    <div class="img-desktop">
    <img src="assets/img/background_principal__rec.jpg">
    </div>
  </section>`;
  return pageLogin;
};
