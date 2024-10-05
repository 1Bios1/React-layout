import './Menu.scss'

function Menu(props) {
    return (    
        <div className="menu__content flex justify-center items-center">
            <div className="menu__nav-row nav-row w-full h-20 bg-slate-600">


                <div className="nav-row__container flex flex-wrap justify-between items-center w-full h-full">

                    <div className="nav-row__title text-white text-xl p-4">MyJourney</div>
                    <div className="nav-row__search p-2 bg-white rounded-lg">
                        <input type="text" id='menu-search'  placeholder='search' />
                    </div>
                    <div className="nav-row__buttons flex flex-row h-full">
                        <button className="nav-row__btn p-3 text-white transition-all">Кнопка 1</button>
                        <button className="nav-row__btn p-3 text-white transition-all">Кнопка 2</button>
                        <button className="nav-row__btn p-3 text-white transition-all">Кнопка 3</button>
                    </div>

                    <button className="nav-row__burger-button">Развернуть</button>

                </div>


            </div>
        </div>
    )
}

export default Menu