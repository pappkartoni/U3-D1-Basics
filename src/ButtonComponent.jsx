// Create a button, push it to have some fun

const ButtonComponent = (props) => {
    return <button className="btn-compo" onClick={() => {console.log(props.label)}}>{props.label}</button>
}

export default ButtonComponent