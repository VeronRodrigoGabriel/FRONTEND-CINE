import { NavNarTwo } from "../NavBar/NavBarTwo.jsx"
export const HeaderTwo = () => {
    return (
        <header className="">
            <div className="direc-container">

                <a href="" className="direc-logo">Cines Formosa</a>
                <input type="checkbox" id="direc-menu" />

                <label htmlFor="direc-menu">
                    <img src="/img/logo.png" className="direc-icon" alt="icon" />
                </label>

                <NavNarTwo />

                <a href="btn-login">Iniciar sesión</a>
                <a className="btn-register" href="">Registrarse</a>
            </div>
            < div className="header-content container">

            </div>
        </header>

    )
}