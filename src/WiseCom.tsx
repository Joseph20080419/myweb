import React, {useState} from "react";
import "./WiseCom.css";
import MyData from "./data.json"

const WiseCom:React.FC = () => {
    const [nb, setNb] = useState(0)

    const buttClick = () => {
        const ranNum = Math.floor(Math.random() * 6)
        setNb(ranNum)

    }

    return(
        <div className="divwise">
            <button className="btnexe" onClick={buttClick}> 명언</button>
            <p>{MyData.wise[nb].content}</p>
        </div>
    )
}

export default WiseCom