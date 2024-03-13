import { useNavigate} from "react-router-dom";
export default function WriteButton(){
    const navigate = useNavigate()
    function clickHandler(){
        navigate('/WriteBlog')
    }

    return(
        <button className="write-btn" onClick={clickHandler}>
        <i className="fa-solid fa-pen"></i>
        </button>
    )
}