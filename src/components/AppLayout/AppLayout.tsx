import React from 'react';
import styles from './AppLayout.module.css';
import {AppHeader} from '../AppHeader/AppHeader';
import {AppSide} from '../AppSide/AppSide';
import {Layout} from "antd";

export const AppLayout: React.FC<{children: JSX.Element}> = ({children}) => {
    return (
        <div>
            <AppHeader />
            <Layout>
                <Layout className={styles.appLayout}>
                    <div className={styles.appLayout__child}>
                        <AppSide />
                        <Layout.Content>
                            <div className={styles.app_bar}>

                            </div>
                            <div className={styles.container}>
                                {children}
                            </div>
                        </Layout.Content>
                    </div>
                </Layout>
            </Layout>
        </div>
    )
}