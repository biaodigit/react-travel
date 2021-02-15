import React from 'react'
import { useLocation } from 'umi'
import { ErrorBoundary, MenuBar } from '@/components'
import { ContextProvider } from '@/state'
import styles from './index.css';


function BasicLayout(props: any) {
    const location = useLocation()
    const paths = ['/', '/order', '/user']
    return (
        <ContextProvider>
            <div className={styles.normal}>
                <ErrorBoundary>
                    {props.children}
                </ErrorBoundary>
                <MenuBar show={paths.includes(location.pathname)} pathname={location.pathname} />
            </div>
        </ContextProvider>
    );
}

export default BasicLayout;