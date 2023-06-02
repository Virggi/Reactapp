

const searchCountry = ({handleSumit}) => {

    return (
    <>
    <form action="" onSubmit={handleSumit}>
        <input className="imputClima" type="text" placeholder="Escribe tu ciudad"/>
        <button className="buttoHome">Buscar</button>
    </form>
    </>
    )
}

export default searchCountry;