export const CardFotos = () => {
    const fotos = [
        'https://blog.dataprius.com/wp-content/uploads/2019/06/fotos-en-la-nube.jpg',
        'https://media.gettyimages.com/photos/cortez-palace-cuernavaca-mexico-picture-id586605881?s=612x612',
        'https://photo980x880.mnstatic.com/37f93c7924cb320de906a1f1b9f4e12a/la-gran-via-de-madrid-1072541.jpg',
        'https://cdn.shopify.com/s/files/1/0229/0839/files/01_-_Como_vender_fotos_online.jpg?v=1605024228&width=1024',
        'https://www.purosviajes.com/wp-content/uploads/2021/09/Canada-Toronto_.jpg',
        'https://www.caribbeannewsdigital.com/sites/default/files/2021-06/Las-razones-Canada-permanece-cerrado-turismo.jpeg',
        'https://www.primusimmigration.com/wp/wp-content/uploads/El-clima-en-Canada-y-sus-variaciones-estacionales.jpg',
        'https://wp-growpro.s3-eu-west-1.amazonaws.com/media/2018/04/que-ver-en-vancouver.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Xomb4JsPm-TpuobCxTySuyBT9GlvPD9fN_X-VNVVJzdZjP0M39llFESkTtZa13GZOAo&usqp=CAU'
    ];
    return (
        <div className="card-profile">
            <div className="flex justify-between">
                <h1 className="text-2xl">Fotos</h1>
                <h2 className="text-blue-400 text-lg p-2 hover:bg-gray-700 rounded-lg">Ver todas las fotos</h2>

            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">

                {
                    fotos.map(foto => 
                        <div key={foto} className="bg-gray-900 rounded-lg flex items-stretch justify-center">
                            <img src={ foto } alt="fotos" className=" w-44 rounded-lg hover:brightness-75 transition ease-linear" />
                        </div>
                    )

                }
            </div>
        </div>
    )
}

export default CardFotos;