
import { utma2_backend } from 'declarations/utma2_backend';

function App() {
  

  return (
    <body>

<header>
  
  <nav class="navbar navbar-expand-lg bg-body">
    <div class="container-fluid">
      <button
        data-mdb-collapse-init
        class="navbar-toggler"
        type="button"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contenedor</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Registros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div
    class="p-5 text-center bg-image"
    style="
      background-image: url('img/fondo.jpeg');
      height: 400px;
    "
  >
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Fase preeliminar</h1>
          <h4 class="mb-3">Planta tratadora</h4>
          <a data-mdb-ripple-init class="btn btn-outline-light btn-lg" href="#!" role="button"
          >Vaciar</a
          >
        </div>
      </div>
    </div>
  </div>
  
</header>

<div class="card text-center">
  <div class="card-header">Contenedor</div>
  <div class="card-body">
    <h5 class="card-title">Peso Actual</h5>
    <p class="card-text">3 kilos</p>
  </div>
  <div class="card-footer text-muted">
    <h4>Cantidad de usos</h4>
    <h5>5</h5>
  </div>
</div>
</body>

  );
}

export default App;
