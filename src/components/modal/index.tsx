import React from 'react'
import { Icon } from 'antd-mobile';
import CreatePortal from '../createportal'

interface ModalProps {
    visible: boolean
    onClose: () => void
}

const Styles = {
    body: {
        Position: 'fixed',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        Position: 'absolute',
        top: '10px',
        right: '10px'
    }
};

class Modal extends React.Component<ModalProps, {}> {

    handleClose = () => {
        const { onClose } = this.props
        onClose && onClose()
    }

    render() {
        const { visible } = this.props
        return (
            <>
                {visible ?
                    <CreatePortal>
                        <div style={{ ...Styles.body, position: 'fixed' }}>
                            {this.props.children}
                            <Icon type='cross' size='lg' style={{ ...Styles.close, position: 'absolute' }} onClick={this.handleClose} />
                        </div>
                    </CreatePortal> : null
                }
            </>
        )
    }
}

export default Modal

