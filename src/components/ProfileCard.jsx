function ProfileCard(props) {
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Age: {props.age}</p>
                <h6 className="card-subtitle mb-2 text-muted">{props.profession}</h6>
            </div>
        </div>
    );
}

export default ProfileCard;