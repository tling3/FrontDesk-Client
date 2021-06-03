import React from 'react';
import ReactDOM from 'react-dom';
import history from '../History';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={() => history.push(`/session/members/${props.sessionId}`)} className="ui dimmer modals visible active">
            <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Member Search</div>
                <div className="content">
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                    <br />
                    <div>This is the Modal!!!</div>
                </div>
                <div className="actions">
                    <button className="ui primary button">Sample</button>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;
