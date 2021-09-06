import React from 'react';
import logo from 'src/assets/logo.png';
import Search from 'src/svg/Search';
import Down from 'src/svg/Down';
import Menu from 'src/svg/Menu';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="nav_item">
          <ul className="desktop">
            <li>About us</li>
            <li>Sustainability</li>
            <li>Insights & News</li>
            <li>Strategies</li>
            <li>Funds</li>
            <li id="dropdown">
              <div className="dropdown">
                <div className="dropdown_select">
                  Singapore <Down></Down>
                </div>
                <div className="dropdown_list">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Search />
            </li>
          </ul>
          <ul className="responsive_menu">
            <Search />
            <Menu />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
