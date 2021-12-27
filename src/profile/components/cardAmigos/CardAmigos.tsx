

export const CardAmigos = () => {
    const amigos = [
        {
            id: 1,
            name: 'Mario Rodriguez',
            img: 'https://images.unsplash.com/photo-1504131582848-89af412e36e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        },
        {
            id: 2,
            name: 'Lucia Lopez',
            img: 'https://images.unsplash.com/photo-1513021115044-2a2843b05665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1569&q=80',

        },
        {
            id: 3,
            name: 'Fernando F.',
            img: 'https://images.unsplash.com/photo-1593697820940-43e77b53a1e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

        },
        {
            id: 4,
            name: 'Guadalupe S.',
            img: 'https://images.unsplash.com/photo-1639905517685-d2ee1bc42879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

        },
        {
            id: 5,
            name: 'Sergio Ramirez',
            img: 'https://images.unsplash.com/photo-1639538557748-c8a20046dd02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',

        },
        {
            id: 6,
            name: 'Lopez R.',
            img: 'https://images.unsplash.com/photo-1639644495906-42bae1c7d717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

        }

    ]
    return (
        <div className="card-profile">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl">Amigos</h1>
                    <h3 className="text-lg text-gray-400">614 amigos</h3>
                </div>
                <h2 className="text-blue-400 text-lg p-2 hover:bg-gray-700 rounded-lg">Ver todos los amigos</h2>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
                {
                    amigos.map(({ id, name, img }) =>
                        <div key={id} >
                            <div className="bg-gray-900 h-32  sm:h-20 md:h-24 lg:h-32 rounded-lg flex items-stretch justify-center">
                                <img src={img} alt="fotos" className=" w-44 rounded-lg hover:brightness-75 transition ease-linear" />
                            </div>
                            <p className="text-sm text-gray-400 ">{name}</p>
                        </div>

                    )

                }
            </div>
        </div>
    )
}
