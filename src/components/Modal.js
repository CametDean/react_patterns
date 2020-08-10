import React from "react";

export const Modal = ({children, isOpen, onModalClosed}) => {
    const [isModalOpen, setIsModalOpen] = React.useState(true)
    const modalChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            isModalOpen: isModalOpen,
            onModalClosed: (value) => {setIsModalOpen(value); return onModalClosed(value)},
        })
    })

    return isOpen ? (<div>
            <Overlay onClick={() => onModalClosed(false)}/>
            <Content>
                {modalChildren}
            </Content>
        </div>)
        : null
}

export const Overlay = ({onClick}) => {
    return <div className="overlay" onClick={onClick}></div>
}

export const Content = ({children}) => {
    return <div className="modal">{children}</div>
}


export const ModalButtonClose = ({children, onModalClosed}) => {
    return <div
        className="btnClose"
    >
        <button onClick={() => onModalClosed(false)}>{children}</button>
    </div>
}