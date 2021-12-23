import { Header } from "../components/header/Header"

export const Profile = () => {
    return (
        <div>
            <Header />
            <div className="mx-auto xl:mx-80 ">
                <div className="flex justify-center">
                    <div className="relative">
                        <img src="https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/259786353_4786955998021752_8367263059276609854_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=F1_SaDFPPrUAX9MR2YO&_nc_ht=scontent.fmex36-1.fna&oh=00_AT-yHsqS07CzyoveS8E53wFkRR323h4GuBUsWlT17O6Ypw&oe=61C9C723" alt="" />
                        <div className="absolute bottom-10 right-10 ">
                            <button className="bg-gray-200 p-2 rounded-lg text-gray-600 font-bold text-sm hover:bg-gray-300">
                                <i className="fas fa-camera"></i>
                                <span className="float-right hidden md:block ml-1"> Editar foto de la portada </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative">
                        <img className="w-52 rounded-full -mt-44 z-10 border-2 border-black" src="https://scontent.fmex36-1.fna.fbcdn.net/v/t1.6435-9/116709535_3382440481806651_8287065624226565175_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=D3EpsqZMgewAX9f2Vpk&tn=uc2nBVkggslc1y30&_nc_ht=scontent.fmex36-1.fna&oh=00_AT9mp11Bk0mlzcN6ra9N7th9lWDnFmMeKiF8kExjAnHp1A&oe=61E94802" alt="" />
                        <div className="absolute bottom-6 right-3 ">
                            <button className="bg-gray-600 p-1 rounded-lg text-gray-300 text-lg px-2 hover:bg-gray-800">
                                <i className="fas fa-camera"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <h1 className="text-center text-3xl">Ricardo Espinoza</h1>
                <h2 className="text-center text-blue-400">Agregar presentación</h2>
                <hr className="text-gray-200" />

                <nav className="flex flex-grow gap-4 justify-between py-1 px- ">
                    <div className="flex gap-2 item-nav-p">
                        <a href="https" className="border-b-2 border-blue-500 hidden md:block">Publicaciones</a>
                        <a href="https" className="hidden md:block">Información</a>
                        <a href="https" className="hidden md:block">Amigos 614</a>
                        <a href="https" >Más <i className="fas fa-angle-down"></i></a>
                    </div>
                    <div className="flex gap-2 m-2 text-sm text-white text-center">
                        <button className="p-2 rounded-md bg-blue-600 hover:bg-blue-700"> <i className="fas fa-plus-circle"></i> Agregar a historia</button>
                        <button className="p-2 rounded-md bg-blue-600 hover:bg-blue-700"> <i className="fas fa-pencil-alt"></i> Editar perfil</button>
                        <button className="p-2 px-3 rounded-md bg-blue-600 hover:bg-blue-700"><i className="fas fa-align-justify"></i></button>
                    </div>
                </nav>

            </div>

            <div className="bg-gray-900 h-64">
                    :v
                </div>

        </div>
    )
}
