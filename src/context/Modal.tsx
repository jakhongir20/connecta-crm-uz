import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();


const ModalProvider = ({ children }:{children:React.ReactNode}) => {
    const [show, hideModal] = useState(false)
    return (
        <ModalContext.Provider value={{ show,hideModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)

export default ModalProvider