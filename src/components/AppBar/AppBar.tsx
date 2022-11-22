import React from "react";
import styles from "./AppBar.module.css"
import {Layout} from "antd";
import {WidgetTypes} from "@tesler-ui/schema";
import {ViewNavigationWidget} from "@tesler-ui/core";
import cn from 'classnames';
import {NavigationWidgetMeta} from "@tesler-ui/core/interfaces/widget";
import {UserMenu} from "../UserMenu/UserMenu";

export const AppBar: React.FC = () => {
    // const widgets = useSelector((state: AppState) => state.view.widgets)
    const widgets: any[] = []
    const tabWidgets = (
        widgets?.filter(
            item => item.type === WidgetTypes.SecondLevelMenu || item.type === WidgetTypes.ViewNavigation
        ) as NavigationWidgetMeta[]
    ).sort((a, b) => (a.options?.navigationLevel ?? 1) - (b.options?.navigationLevel ?? 1))

    return (
        <Layout.Header className={cn(styles.container, { [styles.withTabs]: tabWidgets?.length > 0 })}>
            {/*<div className={styles.tabs}>*/}
            {/*    {tabWidgets?.map((item, index) => (*/}
            {/*        <ViewNavigationWidget meta={item} key={index} />*/}
            {/*    ))}*/}
            {/*</div>*/}
            <UserMenu className={styles.user} />
        </Layout.Header>
    )
}