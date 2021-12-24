
export const CardFotos = () => {
    const fotos = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return (
        <div className="card-profile">
            <div className="flex justify-between">
                <h1 className="text-2xl">Fotos</h1>
                <h2 className="text-blue-400 text-lg p-2 hover:bg-gray-700 rounded-lg">Ver todas las fotos</h2>

            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">

                {
                    fotos.map(foto =>
                            <img key={foto} src={require(`../../../assets/img/${foto}.jpeg`)} alt="fotos" className=" w-44 rounded-lg hover:brightness-75 transition ease-linear" />
                    )

                }
            </div>
        </div>
    )
}
