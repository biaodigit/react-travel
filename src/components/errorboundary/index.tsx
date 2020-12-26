import React, { ErrorInfo } from 'react'

interface ErrorBoundaryProps {
    onError?: (msg: { error: Error, info: ErrorInfo }) => void
}
interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    // @ts-ignore
    static getDerivedStateFromError(error) {
        console.log('error')
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.props.onError?.({ error, info })
    }

    render() {
        return (
            <div>
                {this.state.hasError ? <h1>发生错误</h1> : this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary