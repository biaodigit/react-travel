import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface CreatePortalProps {
}

const CreatePortal: React.FC<CreatePortalProps> = (props) => {
    const body = document.querySelector('body')!
    const el = document.createElement('div')

    useEffect(() => {
        el.setAttribute('id', 'portal-root')
        el.setAttribute('style', 'position:fixed;top:0;left:0;width:100%;height:100%')
        body.appendChild(el)
        return () => {
            body.removeChild(el)
        }
    })

    return (ReactDOM.createPortal(props.children, el))
}

export default CreatePortal