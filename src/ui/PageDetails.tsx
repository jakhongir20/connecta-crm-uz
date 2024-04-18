import { useState } from "react"


export default function PageDetails() {
    const [isActive, ] = useState(false);
    return (
        <div className="details">
            <div className="details__header">
                <div className="details__header__col">
                    {
                        isActive ?
                            <div className="details__header__controller-left">
                                <span><img src="./img/details/close-right.svg" alt="" /></span>
                                <span><img src="./img/details/resize.svg" alt="" /></span>
                                <span><img src="./img/details/up-arrow.svg" alt="" /></span>
                                <span><img src="./img/details/down-arrow.svg" alt="" /></span>
                            </div>
                            :
                            <div className="details__header__controller">
                                <span><img src="./img/details/close.svg" alt="" /></span>
                                <span><img src="./img/details/up-arrow.svg" alt="" /></span>
                                <span><img src="./img/details/down-arrow.svg" alt="" /></span>
                                <span><img src="./img/details/resize.svg" alt="" /></span>
                            </div>
                    }



                    <div className="details__header__userid">
                        #600009
                    </div>
                    <div className="details__header__username">
                        Ali Brian
                    </div>
                </div>
                <div className="details__header__col">
                    <div className="details__header__user">
                        <img src="./img/main_user_img.svg" alt="" />
                        <div className="details__header__select">
                            <select >
                                <option >Ali Brian</option>
                            </select>
                        </div>
                    </div>
                    <button className="details__header__archive">Archive</button>
                    <span className="details__header__more">
                        <img src="./img/dt_table/more.svg" alt="" />
                    </span>
                </div>
            </div>
            <div className="details__content">
                ...
            </div>
        </div>
    )
}


