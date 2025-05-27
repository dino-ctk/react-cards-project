import "./card.css"
import Detail from "../detail/Detail"

function Card(props){

    return(
        <div key= {props.id} className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <img
                    className="circle-img"
                    src={props.url}
                    alt="avatar_img"
                />
            </div>
            <div className="bottom">
                <Detail content={props.tel}/>
                <Detail content={props.email}/>
            </div>
            {/* <h2>neki nalso</h2> */}
        </div>
    )
}

export default Card