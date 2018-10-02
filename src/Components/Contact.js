import React from "react";

export default () => {
  return (
    <div
      align="center"
      style={{
        width: "600px",
        margin: "auto"
      }}
    >
      <h1 className="header teal-text text-darken-4">Contact Us</h1>
      <hr />
      <div className="card hoverable">
        <div className="card-header teal darken-4">
          <h5>Sean "The Don" Huang</h5>
        </div>
        <div>&nbsp;</div>
        <img
          style={{
            width: "300px",
            margin: "auto"
          }}
          src="https://avatars1.githubusercontent.com/u/1383759?s=400&v=4"
          alt=""
        />
        <ul>
          <li>email: thedon@prestigegroup.com</li>
          <li>phone: 555-555-5555</li>
          <li>fax: 444-444-4444</li>
        </ul>
        <div className="card-action">
          <a
            href="https://github.com/hyprul"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="card hoverable">
        <div className="card-header teal darken-4">
          <h5>Nancy Do</h5>
        </div>
        <div>&nbsp;</div>
        <img
          style={{
            width: "300px",
            margin: "auto"
          }}
          src="https://avatars2.githubusercontent.com/u/39013174?s=400&v=4"
          alt=""
        />
        <ul>
          <li>email: nancydo@prestigegroup.com</li>
          <li>phone: 555-555-5555</li>
          <li>fax: 444-444-4444</li>
        </ul>
        <div className="card-action">
          <a
            href="https://github.com/bunnyd"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="card hoverable">
        <div className="card-header teal darken-4">
          <h5>Derek Silva</h5>
        </div>
        <div>&nbsp;</div>
        <img
          style={{
            width: "300px",
            margin: "auto"
          }}
          src="https://avatars2.githubusercontent.com/u/37221715?s=400&v=4"
          alt=""
        />
        <ul>
          <li>email: dereksilva@prestigegroup.com</li>
          <li>phone: 555-555-5555</li>
          <li>fax: 444-444-4444</li>
        </ul>
        <div className="card-action">
          <a
            href="https://github.com/derek-silva"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
