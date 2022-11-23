const Contacto = () => {
    return(
        <form className="flex justify-center flex-col items-center p-20 gap-4">
            <h1 className="text-3xl">Cuentanos ¿En qué te podemos ayudar?</h1>
            <label htmlFor="email">Correo:</label>
            <input type="email" className=" border-2 rounded-lg p-2 border-emerald-700 w-5/12 min-w-full" />
            <label htmlFor="descripción">Descripción:</label>
            <textarea className=" border-2 rounded-lg p-2 border-emerald-700 w-5/12 min-w-full"  name="" id="" cols="30" rows="10"></textarea>
        </form>
    )
}

export default Contacto;