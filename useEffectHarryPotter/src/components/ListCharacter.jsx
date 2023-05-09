function ListCharacter({ characters }) {

    const renderCharacters = () => {
        return characters.map((char) => <article key={char.id}>
            <img src={char.image} alt="" />
            <h4>{char.name}</h4>
        </article>)
    }

    return (
        <section>
            {renderCharacters()}
        </section>
    )
}
export default ListCharacter