import React from 'react'
import { useLocation } from 'umi'
import { StoreProvider } from 'think-react-store'
import { ErrorBoundary, MenuBar } from '@/components'
import { ContextProvider } from '@/state'
import * as store from '@/stores'
import styles from './index.css';


function BasicLayout(props: any) {
    const location = useLocation()
    const paths = ['/', '/order', '/user']

    return (
        <StoreProvider store={store}>
            <div className={styles.normal}>
                <ErrorBoundary>
                    {props.children}
                </ErrorBoundary>
                <MenuBar show={paths.includes(location.pathname)} pathname={location.pathname} />
            </div>
        </StoreProvider>
    );
}

export default BasicLayout;