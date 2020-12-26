import React from 'react'
import ErrorBoundary from '@/components/errorboundary'
import styles from './index.css';


function BasicLayout(props: any) {
    return (
        <div className={styles.normal}>
            <h1 className={styles.title}>Hello! Welcome to umi!</h1>
            <ErrorBoundary>
                {props.children}
            </ErrorBoundary>
        </div>
    );
}

export default BasicLayout;