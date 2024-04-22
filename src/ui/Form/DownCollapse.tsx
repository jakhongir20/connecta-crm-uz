import React, { useState } from 'react'

export default function DownCollapse({ children, title }: { children: React.ReactNode, title: string }) {
    const [show, setShow] = useState(false);



    return (
        <div className='down__collapse'>
            <div className='down__collapse__header' onClick={() => setShow(!show)}>
                <div className='down__collapse__header-item'>
                    <img src="./img/sports-car.svg" alt="" width="20px" height="20px" />
                    <span>{title}</span>
                </div>
                <div className='down__collapse__header-item'>
                    <img src="./img/down.svg" alt="" width="14px" height="14px" />
                </div>
            </div>
            <div className={!show ? "down__collapse__body" : "down__collapse__body down__collapse__hide"} >
                {
                    children
                }
            </div>
        </div>
    )
}
