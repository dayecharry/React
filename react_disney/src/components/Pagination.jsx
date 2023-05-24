function Pagination({ setActualPage, actualPage }) {


    const handlerNext = () => {
        setActualPage(actualPage + 1)
    }
    const handlerPrev = () => {
        if (actualPage !== 1) {
            setActualPage(actualPage - 1)
        }

    }

    return (
        <div>
            {/*actualPage > 1 ? <button onClick={handlerPrev}> anterior</button> : null*/}

            <button onClick={handlerPrev} className={actualPage === 1 ? 'hidden' : ''}> anterior</button>
            {/* Hacer la validacion de siguiente para que no sobrepase el numero total de paginas*/}
            <button onClick={handlerNext}> siguiente</button>
        </div>
    )

}
export default Pagination;