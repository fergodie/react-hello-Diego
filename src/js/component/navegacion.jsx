import React from "react";

function Navegacion() {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid col-sm-12 col-lg-9">
        <div>
          <a class="navbar-brand nav-title" href="#">Start Bootstrap</a>
        </div>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Porfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>

  );




}

export default Navegacion;




