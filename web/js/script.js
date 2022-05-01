// INICIO SIMPLE-SLIDE

  if(window.SimpleSlide) {
    new SimpleSlide({
        slide: 'principal', // nome do atributo data-slide="principal"
        nav: true, // se deve ou não mostrar a navegação
        auto: true, // se o slide deve passar automaticamente
        time: 2000, // tempo de transição dos slides
        pauseOnHover: true, // pausa a transição automática
      });
  }
// FINAL SIMPLE-SLIDE



// INÍCIO SIMPLE-ANIME

if(window.SimpleAnime) {
  new SimpleAnime()
}






// INICIA JS DO MODAL:

  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault()
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal(event) {
    if(event.target === this) {
    toggleModal(event);
    }
  }

  botaoAbrir.addEventListener('click', toggleModal);
  botaoFechar.addEventListener('click', toggleModal);
  containerModal.addEventListener('click', cliqueForaModal);

// FINAL JS DO MODAL



// FUNCIONAMENTO

const funcionamento = document.querySelector('[data-semana]');
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioFuncionamento = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const diaDaSemanaAberto = diasSemana.indexOf(diaAgora) !== -1;
const horarioAberto = (horarioAgora >= horarioFuncionamento[0] && horarioAgora < horarioFuncionamento[1]);

if(diaDaSemanaAberto && horarioAberto) {
  funcionamento.classList.add('aberto')
}