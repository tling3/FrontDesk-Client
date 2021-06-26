import React from 'react';
import ReactDOM from 'react-dom';
import history from '../History';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push(`/session/members/${props.sessionId}`)} className="ui dimmer modals visible active">
            <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Member Search</div>
                <div className="scrolling content">
                    {props.children}
                </div>
                <div className="actions"></div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;
