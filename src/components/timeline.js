import { signOutUser, authState } from '../lib/auth.js';
import { getPost, realTime } from '../lib/crud.js';
import { modalPost, eventsModalPost } from './ModalPost.js';
import { Post } from './Post.js';

export const timeline = () => {
  const pageTimeline = `<section class="timeline">
  <header class="header__timeline">
    <div class="header__logo">
      <span class="nombre-logo">Food Track</span>
    </div>
  </header>   
  <section class="timeline__container">
    <div class="create-post">
      <img id="foto-perfil-post" src="">
      <button class="btn-create-post" id="btn-post">
        Comparte tu reseña 
        <i class="fa-solid fa-circle-plus"></i>
      </button>
    </div>
    <div class="modal"></div>
    <div class="posts"></div>
  </section>
  <nav class="menu-nav">
      <i class="fa-solid fa-house"></i>
      <!--<p id="nombre"></p>-->
      <img id="foto-perfil" src="">
      <i class="fa-solid fa-right-from-bracket" id="cerrar-sesion"></i>
    </nav> 
</section>
`;
  return pageTimeline;
};

export const eventsTimeLine = () => {
  const $ = (selector) => document.querySelector(selector);

  realTime(() => {
    const showPost = async () => {
      const querySnapshot = await getPost();
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        $('.posts').insertAdjacentHTML('beforeend', Post(doc.data()));
      });
    };
    showPost();
  });

  authState((user) => {
    console.log(user);
    if (user !== null) {
      const fotoUsuario = user.photoURL;
      $('#foto-perfil-post').src = fotoUsuario;
      $('#foto-perfil-post').referrerpolicy = 'no-referrer';
      $('#foto-perfil').src = fotoUsuario;
      $('#foto-perfil').referrerpolicy = 'no-referrer';
      // $('#nombre').innerHTML = nombreUsuario;
    }
  });

  $('#btn-post').addEventListener('click', () => {
    $('.modal').innerHTML = modalPost();
    eventsModalPost();
  });

  $('#cerrar-sesion').addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser()
      .then(() => {
        window.location.hash = '#login';
        window.location.reload();
      })
      .catch((error) => console.log(error));
  });
};
