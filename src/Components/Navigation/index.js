import React from "react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import './nav.css'
const Navigation = () => (
  <div>
    <ul className="nav">
      <li>
        <Link to={ROUTES.SIGN_IN} className="link">Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING} className="link">Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME} className="link">Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT} className="link">Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN} className="link">Admin</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
