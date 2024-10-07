import './Header.scss'
import numIcn from './Call.svg'


function Header(props) {
    return (
        <div className="greet-block__container flex flex-col w-full h-full">

            <div className="greet-block__nav-row nav-row">
                <div className="nav-row__container p-10 flex flex-wrap justify-between items-center w-full h-full">

                    <div className="nav-row__title font-bold text-white">ROBO.SCHOOL</div>

                    <div className="nav-row__buttons flex flex-wrap flex-row gap-3">
                        <button className="nav-row__btn text-white text-sm">О школе</button>
                        <button className="nav-row__btn text-white text-sm">Тренеры</button>
                        <button className="nav-row__btn text-white text-sm">Стоимость</button>

                        <div className="nav-row__number-icon-btn p-2">
                            <img src={numIcn} alt="nicn"/>
                        </div>

                        <div className="nav-row__burger-btn p-2">
                            <div className="line line_1"></div>
                            <div className="line line_2"></div>
                            <div className="line line_3"></div>
                        </div>

                    </div>

                    <div className="nav-row__number text-white">+7 800 000 11 22</div>

                </div>
            </div>

            <div className="greet-block__content content flex  w-full h-full">

                <div className="greet-block__greet-text greet-text flex flex-wrap flex-col">

                    <div className="greet-text__all-text">
                        <div className="greet-text__title font-semibold text-white">
                            ROBO SCHOOL
                        </div>
                        <div className="greet-text__text text-white w-2/3">
                            Курсы повышения квалификации по робототехнике для педагогов начальной школы
                        </div>
                    </div>

                    <button className="greet-text__btn text-white bg-red-700 rounded-lg">Записаться на курс</button>
                </div>

            </div>

        </div>
    )
}

export default Header