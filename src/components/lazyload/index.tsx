import * as React from 'react'

interface LazyLoadProps {
    component?: { default: React.ComponentType<any> }
    delay?: number
}

const LazyLoad: React.FC<LazyLoadProps> = (props) => {
    const { component, delay, ...restprops } = props

    const asyncLazy = (component: any): Promise<{ default: React.ComponentType<any> }> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(component)
            }, delay || 300)
        })
    }

    const renderLazy = () => {
        let Lazy;
        if (!component || component.constructor.name !== 'Promise') {
            Lazy = React.lazy(() => asyncLazy(import('./error')))
        } else {
            Lazy = React.lazy(() => asyncLazy(component))
        }

        return <Lazy {...restprops} />
    }

    return (
        <>
            <React.Suspense fallback={<div>loading...</div>}>
                {renderLazy()}
            </React.Suspense>
        </>
    )
}

export default LazyLoad