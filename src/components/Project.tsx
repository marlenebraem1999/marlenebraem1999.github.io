import { useNavigate } from "react-router-dom";

// props title, discription, image1, image2
export interface ProjectProps {
    title: string;
    discription: string;
    image1: string;
}

export function Project(props: ProjectProps) {
    const n = useNavigate();

    function navigateToProjectDetail() {
        n("/projectDetail")
    }

    return (
        <>
            <div className="project hide_desktop">
                <h6 className="margin_title">{props.title}</h6>
                <p>{props.discription}</p>
                <div className="margin">
                    <img src={props.image1} alt="image1" />
                </div>
                <button className="no_margin" onClick={navigateToProjectDetail} >Toon meer</button>
            </div>

            <div className="screen">
                <div className="hide_mobile projectDesktop margin_bottom" >
                    <img src={props.image1} alt="image1" />
                    <div className="margin_left">
                        <h6 className="margin_title h2FullWidth">{props.title}</h6>
                        <p>{props.discription}</p>
                        <br />
                        <p>{props.discription}</p>
                        <button className="no_margin" onClick={navigateToProjectDetail} >Toon meer</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}