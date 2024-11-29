import "../components/Navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <header>
        <div class="header">
          <div class="bar">
            <i class="fa-solid fa-bars"></i>
            <i class="fa-solid fa-xmark" id="hdcross"></i>
          </div>
          <div class="nav">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/menu">
                <li>Menu</li>
              </Link>
              <Link to="/">
                <li>Book Table</li>
              </Link>
              <Link to="/login">
                <li>Log In</li>
              </Link>
              <Link to="/register">
                <li>Sign Up</li>
              </Link>
            </ul>
          </div>
          <div class="nav"></div>
          <div class="account">
            <ul>
              <a href="#">
                <li>
                  <ion-icon name="home-outline"></ion-icon>
                </li>
              </a>
              <a href="#">
                <li>
                  <ion-icon name="search-outline"></ion-icon>
                </li>
              </a>
              <div class="search" id="searchinput2">
                <input type="search" />
                <ion-icon name="search-outline"></ion-icon>
              </div>
              <a href="#">
                <li>
                  <ion-icon name="person-circle-outline"></ion-icon>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;
