import { CardDetalles } from "../components/cardDetalles/CardDetalles"
import { Header } from "../components/header/Header"
import { CardFotos } from '../components/cardFotos/CardFotos';
import { CardPublicar } from '../components/cardPublicar/CardPublicar';
import { CardFiltro } from "../components/cardFiltro/CardFiltro";
import { CardAmigos } from '../components/cardAmigos/CardAmigos';
import { CardPublicacion } from '../components/cardPublicacion/CardPublicacion';

export const Profile = () => {
    return (
        <div className="bg-gradient-to-t from-gray-900 to-blue-900">
            <Header />
            <div className="flex justify-center bg-gradient-to-t from-gray-900 to-blue-900">
                <div className="">
                    <div className="flex justify-center">
                        <div className="relative">
                            <img src="https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/259786353_4786955998021752_8367263059276609854_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=F1_SaDFPPrUAX9MR2YO&_nc_ht=scontent.fmex36-1.fna&oh=00_AT-yHsqS07CzyoveS8E53wFkRR323h4GuBUsWlT17O6Ypw&oe=61C9C723" alt="" />
                            <div className="absolute bottom-10 right-10 ">
                                <button className="bg-gray-200 px-3 py-1 rounded-lg text-gray-600 font-bold text-sm hover:bg-gray-300">
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
                    <hr />

                    <nav className="flex flex-grow gap-4 justify-between py-1 mt-2 ">
                        <div className="flex gap-2 item-nav-p">
                            <a href="#" className="border-b-2 border-blue-500">Publicaciones</a>
                            <a href="#" className="hidden md:block">Información</a>
                            <a href="#" className="hidden md:block">Amigos 614</a>
                            <a href="#" >Más <i className="fas fa-angle-down"></i></a>
                        </div>
                        <div className="flex gap-2 m-2 text-sm text-white text-center">
                            <button className="p-2 w-10 md:w-auto rounded-md bg-blue-600 hover:bg-blue-700 ">
                                <i className="fas fa-plus-circle"></i>
                                <span className="ml-1 hidden md:block float-right">Agregar a historia</span>
                            </button>
                            <button className="p-2 w-10 md:w-auto rounded-md bg-blue-600 hover:bg-blue-700">
                                <i className="fas fa-pencil-alt"></i>
                                <span className="ml-1 hidden md:block float-right">Editar perfil</span>
                            </button>
                            <button className="p-2 w-10 md:w-auto px-3 rounded-md bg-blue-600 hover:bg-blue-700"><i className="fas fa-align-justify"></i></button>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="flex justify-center  bg-gray-900 ">
                    <div className="grid grid-cols-1  grid-row-1 sm:grid-cols-2  sm:grid-row-3 gap-3">
                        <div className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 order-1 lg:order-1">
                            <CardDetalles />
                        </div>
                        <div className="order-4 sm:order-2">
                            <CardPublicar />
                        </div>
                        <div className="order-5 sm:order-3">
                            <CardFiltro />
                        </div>
                        <div className="order-2 sm:order-4">
                            <CardFotos />
                        </div>
                        <div className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-3 order-6 sm:order-5 " >
                            <CardPublicacion />
                        </div>
                        <div className="order-3 lg:order-5">
                            <CardAmigos />
                        </div>
                    </div>
            </div>

        </div>
    )
}
