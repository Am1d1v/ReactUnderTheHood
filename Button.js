import './ButtonStyle.css'

const Button = (props) => {

    const {toggle} = props;

    return(
        <button className="btn" onClick={toggle}>Change</button>
    )
}
export default Button;