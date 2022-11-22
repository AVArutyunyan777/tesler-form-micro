import React from 'react'
import {Menu} from 'antd'
import styles from './ScreenNavigation.module.css'
import {SmileOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import {MenuInfo} from "rc-menu/lib/interface"

function ScreenNavigation() {
    const router = useRouter()
    // const screens = useSelector((state: AppState) => state.session.screens)
    const screens = [
        {
            label: 'FromBuilder',
            key: 'form-builder',
            icon: <SmileOutlined />
        },
        {
            label: 'AllTasks',
            key: 'all-tasks',
            icon: <SmileOutlined />
        }
    ]
    const selectedUrl = screens.find(item => '/' + item.key === router.asPath)
    const screenUrl = selectedUrl?.key || ''

    const handleScreen = (e: MenuInfo) => {
        return router.push(e.key)
    }

    return (
        <div className={styles.menuContainer}>
            <Menu className={styles.Container} selectedKeys={[screenUrl]} onClick={handleScreen} items={screens} theme="light"/>
        </div>
    )
}

export default React.memo(ScreenNavigation)