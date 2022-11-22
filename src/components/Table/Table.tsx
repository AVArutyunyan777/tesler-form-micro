import React from "react";
import {PaginationMode, WidgetListField, WidgetTableMeta} from "@tesler-ui/core/interfaces/widget";
import styles from "./Table.module.css"

interface TableComponentProps {
    meta: WidgetTableMeta
}

export const Table: React.FC<TableComponentProps> = (props:TableComponentProps) => {
    return (
        <div className={styles.tableContainer}>
            {/*<TableWidget meta={meta} showRowActions expandIconAsCell={undefined} onRowClick={undefined}*/}
            {/*             useFixedHeader={undefined} bodyStyle={undefined} />*/}

            <h1> Table </h1>
        </div>
    )
}