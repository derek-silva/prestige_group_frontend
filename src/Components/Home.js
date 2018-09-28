import React from "react";

export default () => {
  return (
    <div>
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br />
            <h1 class="header center red-text text-darken-4">
              Making Investing Smarter
            </h1>
            <div class="row center">
              <h4 class="header col s12 light black-text text-darken-4">
                A modern response to outdated trading techniques
              </h4>
            </div>
            <div class="row center">
              <a
                href="#"
                id="download-button"
                class="btn-large waves-effect waves-light indigo"
              >
                Become an Investor
              </a>
            </div>
            <br />
          </div>
        </div>
        <div class="parallax">
          <img
            src={require("../images/background.jpg")}
            alt="Unsplashed background img 1"
          />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons">flash_on</i>
                </h2>
                <h5 class="center">Speeds up market analysis</h5>

                <p class="light">
                  We crunch the numbers for you and provide you the most precise
                  market data to make decisions.
                </p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons">group</i>
                </h2>
                <h5 class="center">User Experience Focused</h5>

                <p class="light">
                  We keep our user interface simple and clean. Giving you what
                  you need, when you need it.
                </p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons">settings</i>
                </h2>
                <h5 class="center">Easy to work with</h5>

                <p class="light">Intuitive work flow</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container valign-wrapper">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="row center">
              <h5 class="header col s12 light">
                Step into the future of investing
              </h5>
            </div>
          </div>
        </div>
        <div class="parallax">
          <img
            src={require("../images/building.jpg")}
            alt="Unsplashed background img 2"
          />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 center">
              <h3>
                <i class="mdi-content-send brown-text" />
              </h3>
              <h4>Contact Us</h4>
              <p class="left-align light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque id nunc nec volutpat. Etiam pellentesque tristique
                arcu, non consequat magna fermentum ac. Cras ut ultricies eros.
                Maecenas eros justo, ullamcorper a sapien id, viverra ultrices
                eros. Morbi sem neque, posuere et pretium eget, bibendum
                sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu
                mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi
                massa odio, condimentum sed ipsum ac, gravida ultrices erat.
                Nullam eget dignissim mauris, non tristique erat. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae;
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container valign-wrapper">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="row center">
              <h5 class="header col s12 light">
                Utilize modern finance technology
              </h5>
            </div>
          </div>
        </div>
        <div class="parallax">
          <img
            src={require("../images/building.jpg")}
            alt="Unsplashed background img 3"
          />
        </div>
      </div>

      <footer class="page-footer teal">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Company Bio</h5>
              <p class="grey-text text-lighten-4">
                We are a team of college students working on this project like
                it's our full time job. Any amount would help support and
                continue development on this project and is greatly appreciated.
              </p>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Settings</h5>
              <ul>
                <li>
                  <a class="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Connect</h5>
              <ul>
                <li>
                  <a class="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
