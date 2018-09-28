import React from "react";
import { Button, Icon, Parallax } from "react-materialize";

export default () => {
  return (
    <div>
      <Parallax imageSrc={require("../images/more_buildings.jpg")} />
      <div className="center section white">
        <div className="row container">
          <h2 className="header">Our Mission</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu,
            non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas
            eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi
            sem neque, posuere et pretium eget, bibendum sollicitudin lacus.
            Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed.
            Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed
            ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non
            tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae
          </p>
        </div>
      </div>
      <Parallax imageSrc={require("../images/blur.jpg")} />
      <div className="center row container">
        <h2 className="header">Become an Investor</h2>
        <p className="grey-text text-darken-3 lighten-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu,
          non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas
          eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem
          neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam
          eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla
          imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac,
          gravida ultrices erat. Nullam eget dignissim mauris, non tristique
          erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae
        </p>
      </div>
      <Parallax imageSrc={require("../images/gold.jpg")} />
      <footer class="page-footer teal darken-4">
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
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
