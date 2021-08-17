import React from 'react'
import { Icon } from 'antd-mobile';
import CreatePortal from '../createportal'

interface ModalProps {
    show: boolean
    styleBody?: React.CSSProperties
    styleClose?: React.CSSProperties
    onClose?: () => void
}

interface ModalState {
    showModal: boolean
}

const Styles = {
    modal: {
        position: 'relative',
        top: '0',
        left: '0',
        zIndex: '999'
    },
    body: {
        backgroundColor: '#fff',
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: '0',
        left: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        position: 'absolute',
        top: '10px',
        right: '10px'
    }
};

class Modal extends React.Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    componentWillReceiveProps(nexProps: ModalProps) {
        this.setState({
            showModal: nexProps.show
        })
    }

    handleClose = () => {
        const { onClose } = this.props
        onClose && onClose()
    }

    render() {
        const { show, styleBody, styleClose } = this.props;
        const { showModal } = this.state
        const _styleBody = {
            ...Styles.body,
            ...styleBody
        };
        const _styleClose = {
            ...Styles.close,
            ...styleClose
        };
        return (
            <>
                {showModal ?
                    <CreatePortal>
                        <div style={{ ..._styleBody, position: 'fixed' }}>
                            {this.props.children}
                            <Icon type='cross' size='lg' style={{ ..._styleClose, position: 'absolute' }} onClick={this.handleClose} />
                        </div>
                    </CreatePortal> : null
                }
            </>
        )
    }
}

export default Modal

