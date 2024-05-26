import { NavBar } from "../components/NavBar";
import profielfoto from "../images/profiel_foto.png";


export function ContactPage () {
    return (
        <>
        <NavBar />
            <div className="container projecten_container">
                <h2 className="center h2FullWidth">Contact</h2>
                <div className="row">
                    <img className="h2FullWidth profielfotoContact" src={profielfoto} alt="profielfoto" />
                    <div className="gegevens">
                        <ul className="column">
                            <li>Marlène Braem</li>
                            <li>marlenebraem@hotmail.be</li>
                        </ul>
                        <button>Download cv</button>
                    </div>
                </div>
            </div>
            <div className="green_container icons row">
                <p><i className="fi fi-brands-linkedin"></i>LinkedIn</p>
                <p><i className="fi fi-brands-github"></i>GitHub</p>
                <p><i className="fi fi-sr-envelope"></i>E-mail</p>
            </div>
        </>
    )
}