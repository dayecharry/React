const Info = ({ person, estilo }) => {

    return (
        <p className={estilo}>
            Nombre: {person.name} Apellido: {person.lastname}
        </p>)
}
export default Info