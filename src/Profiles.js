function Profiles(props) {
    return (
        <div className="item">
            <img src={props.img} alt="Profile photo" width="300px" />
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age} | Height: {props.height} | Weight: {props.weight}</p>
            <p>About: {props.description}</p>
        </div>
    )
}

export default Profiles;