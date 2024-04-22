import React, {  useState } from 'react'

export default function UpCollapse({ children ,title}: { children: React.ReactNode,title:string }) {
    const [show, setShow] = useState(false);



    return (
        <div className='collapse'>
            <div className='collapse__header' onClick={() => setShow(!show)}>
                <img className={show?"active__drop":""} src="./img/down-arrow.svg" alt="" />
                <span>{title}</span>
            </div>
            <div  className={!show?"collapse__body":"collapse__body collapse__hide"} >
                {
                    children
                }
            </div>
        </div>
    )
}
