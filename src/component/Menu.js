import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar" id="navbarNav">
          <ul className="nav navbar-nav-right">
            <li className="nav-item active">
              <a class="nav-link" href="/chart">
                Przejdź do wykresu
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Wykres
              </a>
              <div
                class="dropdown-menu drop-list"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="/">
                  Utwórz nowy
                </a>
                <a class="dropdown-item" href="/save">
                  Zapisz
                </a>
                <a class="dropdown-item" href="/open">
                  Otwórz
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Edycja
              </a>
              <div
                class="dropdown-menu drop-list"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="/data">
                  Edytuj dane
                </a>
                <a class="dropdown-item" href="/type_chart">
                  Edytuj wykres
                </a>
                <a class="dropdown-item" href="/description">
                  Opis
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Widok
              </a>
              <div
                class="dropdown-menu drop-list"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a
                class="nav-link"
                href="http://nonsensopedia.wikia.com/wiki/Gra:Gra"
              >
                Pomoc<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
