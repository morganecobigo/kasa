import { NavLink } from "react-router-dom";
import "./errorpage.css";

export default function NoPage() {
  return (
    <>
      <div className="error_container">
        <p className="errorContainer__number">404</p>
        <p className="errorContainer__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className="errorcontainer__link">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </>
  );
}
