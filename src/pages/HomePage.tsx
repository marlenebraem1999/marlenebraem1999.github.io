import profielfoto from "../images/profiel_foto.png";
import collageprojecten from "../images/projecten_collage.png";
import collageprojectenmobile from "../images/mobile_projecten.png";
import { NavBar } from "../components/NavBar";

export function HomePage() {

    const placeholderSkills = "data:image/png;base64,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";

    let elements = [];

    for (let i = 0; i < 14; i++) {
        elements.push( 
        <li><img src={placeholderSkills} alt="" /></li>
         );
    }

    return (
        <>
                <NavBar />
                <div className="header">
                    <div className="kader">
                        <h1>Marlène Braem</h1>
                        <div>
                            <h3>Toegepaste informatica</h3>
                            <h3>Digital Experience Design</h3>
                        </div>
                    </div>
                </div>
                <div className="quote">
                  <h4>“Better an oops, than a what if”</h4>
                </div>
                <div className="green_container">
                    <div>
                        <h2>Over mij</h2>
                        <p>
                        Mijn naam is Marlène Braem, ik ben 24 jaar oud en volg op dit moment een verkort traject Digital Experience Design aan Thomas More.
                        <br /> <br /> 
                        Deze studie vulde mijn bachelor Toegepaste Informatica mooi aan om mijn creatieve kant te kunnen uiten. In mijn vrije tijd geniet ik van sportieve en creatieve activiteiten.Ook verdiep ik me graag in ondernemen en heb ik de ambitie om in de toekomst een eigen onderneming te starten in bijberoep.
                        </p>
                    </div>
                    <img className="profielfoto" src={profielfoto} alt="profielfoto" />
                </div>
                <div className="white_container skills">
                    <h2>Skills</h2>
                    <ul>
                        {elements}
                    </ul>
                </div>
                <div className="green_container column">
                    <div className="title_box">
                        <h2>Projecten</h2>
                        <img className="hide_desktop" src={collageprojectenmobile} alt="projecten collage" />
                        <button>Toon meer</button>
                    </div>
                    <img className="hide_mobile" src={collageprojecten} alt="projecten collage" />
                </div>
        </>
    )
}