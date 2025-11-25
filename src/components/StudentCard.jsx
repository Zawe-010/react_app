function StudentCard(props) {
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Course: {props.course}</p>
                <p className="card-text">Score: {props.score}</p>
            </div>
        </div>
    );
}

export default StudentCard;