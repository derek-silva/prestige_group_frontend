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
      <h1>Contact Us</h1>
      <div className="card hoverable">
        <p>Sean "The Don" Huang</p>
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
      </div>
      <div className="card hoverable">
        <p>Nancy Do</p>
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
      </div>
      <div className="card hoverable">
        <p>Derek Silva</p>
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
      </div>
    </div>
  );
};
