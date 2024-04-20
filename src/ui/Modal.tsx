import { Button } from 'antd'
import { useEffect, useState } from 'react'
export default function Modal({ show }: { show: boolean }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(show)
    }, [show])

    return (
        <div className={!open ? "modal" : "modal modal__active"}>
            <div className='modal__content'>
                <div className='modal__header'>
                    <div className='modal__header__title'>New Task</div>
                    <div className='modal__header__btns'>
                        <button className='modal__cancel' onClick={() => setOpen(false)}>Cancel</button>
                        <Button type="primary" size="small"> Save </Button>
                        {/* <button className='modal__close modal__cancel'>Close</button> */}
                    </div>
                </div>
                <div className='modal__body'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non earum ducimus in pariatur minus repudiandae architecto officiis quae, provident illo iste sequi temporibus nulla, culpa esse eligendi asperiores at voluptas!
                </div>
            </div>
        </div>
    )
}