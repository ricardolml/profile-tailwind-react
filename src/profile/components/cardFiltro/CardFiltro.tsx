
export const CardFiltro = () => {
    return (
        <div className="card-profile">
            <div className="flex gap-1 justify-between flex-grow ">
                <label className="text-xl">Publicaciones </label>
                

                <div className="bg-gray-600 rounded-lg px-3 py-1 text-center w-full hover:bg-gray-500">
                    <span><i className="fas fa-bars"></i></span>
                    <label> Filtro</label>
                </div>
                <button className="flex gap-2 justify-center bg-gray-600 rounded-lg px-3 py-1 text-md w-full hover:bg-gray-500">
                    <span><i className="fas fa-cogs"></i></span>
                    <label className="ocultar-sm"> Administrar</label>
                </button>

            </div>
            <hr />

            <div className="flex gap-1 justify-between flex-grow mt-2">
                <div className="rounded-t-lg px-3 py-1 text-center w-full border-b-4 border-blue-500 ">
                    <span><i className="fas fa-bars"></i></span>
                    <label> Vista de lista</label>
                </div>
                <div className="rounded-lg px-3 py-1 text-center hover:bg-gray-500 w-full">
                    <span><i className="fas fa-border-all"></i></span>
                    <label> Vista de cuadrícula</label>
                </div>

            </div>
        </div>
    )
}
