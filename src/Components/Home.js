import React from "react";
import { Button, Icon, Parallax } from "react-materialize";

export default () => {
  return (
    <div>
      <Parallax imageSrc={require("../images/more_buildings.jpg")} />
      <div className="center row container">
        <h2 className="header">Join the Future of Investing</h2>
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
        <Button waves="light" className="teal darken-4">
          Become an Investor
        </Button>
      </div>

      <Parallax imageSrc={require("../images/blur.jpg")} />
      <div className="center section white">
        <div className="row container">
          <h2 className="header">About us</h2>
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

      <Parallax imageSrc={require("../images/gold.jpg")} />
      <footer class="page-footer teal darken-4">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Prestige Group LP</h5>
              <p class="grey-text text-lighten-4">
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
                cubilia Curae
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
