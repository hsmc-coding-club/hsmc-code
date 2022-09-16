import './Modal.css';

function Modal({children, onClickOut} : {children: any, onClickOut?: any}) {
    return (
        <div className="modal" onClick={onClickOut}>
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;