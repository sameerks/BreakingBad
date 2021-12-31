import App from "./App";

function getAllcharacters (props) {
    return(
        <div>
            <img src={props.src} />
            <p>{props.name}</p>
            <p>{props.birthday}</p>
        </div>
    )
}

export default getAllcharacters;