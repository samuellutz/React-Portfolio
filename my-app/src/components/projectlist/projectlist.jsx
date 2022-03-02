import "./projectlist.css";
import Project from "../projects/projects"
import {project} from "../../data"


const Projectlist = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Projects</h1>
                    <p className="pl-desc">
                        Here is a list of my favorite projects!
                    </p>
            </div>
            <div className="pl-list">
                {project.map((item) =>
                <Project key={item.id} img={item.img}link={item.link}/>
                )}
            </div>
        </div>
    )
}

export default Projectlist