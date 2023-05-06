
const Button = ({ titulo, counter, changeCounter }) => {
    console.log(titulo, counter, changeCounter)
    const handleClick = () => {
        console.log("Me han clicado")
        changeCounter(counter + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>{titulo}</button>
        </div>
    )
}
export default Button;