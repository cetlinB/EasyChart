import React from "react";
import { setVisibilityFilter, VisibilityFilters } from "/src/actions/actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  setChart = () => {
    setVisibilityFilter(VisibilityFilters.SHOW_CHART);
  };

  setMain = () => {
    setVisibilityFilter(VisibilityFilters.SHOW_MAIN);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar" id="navbarNav">
          <ul className="nav navbar-nav-right">
            <li className="nav-item active">
              <a class="btn text-light" onClick={this.setChart} id="chart">
                Przejdź do wykresu
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                onClick={this.setChart}
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn text-light"
              >
                Wykres
              </a>
              <input
                type="color"
                id="html5colorpicker"
                onchange="clickColor(0, -1, -1, 5)"
                value="#ff0000"
              />
              <div
                class="dropdown-menu bg-light drop-list"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" onClick={this.setMain} id="main">
                  Utwórz nowy
                </a>
                <a
                  class="dropdown-item"
                  onClick={this.props.onChange}
                  id="save"
                >
                  Zapisz
                </a>
                <a
                  class="dropdown-item"
                  onClick={this.props.onChange}
                  id="open"
                >
                  Otwórz
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link text-light dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn text-light"
              >
                Edycja
              </a>
              <div
                class="dropdown-menu bg-light drop-list"
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
                className="nav-link bg-light dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn text-light"
              >
                Widok
              </a>
              <div
                class="dropdown-menu bg-light drop-list"
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
                class="btn text-light"
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
