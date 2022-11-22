import {rowSelector, tasksSelector} from "../store/tasks/tasks.selector";
import {NextPage} from "next";
import {Table} from "../components/Table/Table";
import {AppContent} from "../components/AppContent/AppContent";

const AllTasks: NextPage = () => {

    const tasks = tasksSelector()
    const row = rowSelector()
    const meta: any = {
        "id": "1051405",
        "errors": null,
        "vstamp": 0,
        "name": "allMortgageTask",
        "widgetId": 1,
        "position": 2,
        "descriptionTitle": null,
        "description": null,
        "snippet": null,
        "showExportStamp": false,
        "limit": 10,
        "type": "List",
        "url": "allMortgageTask",
        "bcName": "allMortgageTask",
        "title": "",
        "fields": [
            {
                "title": "#",
                "key": "id",
                "type": "number",
                "drillDown": true,
                "width": 10
            },
            {
                "title": "SLA",
                "key": "sla",
                "type": "input",
                "width": 50
            },
            {
                "title": "Филиал",
                "key": "EXT_MORTGAGE_STRINGVALUE_branch",
                "type": "input",
                "width": 100
            },
            {
                "title": "КП",
                "key": "EXT_MORTGAGE_STRINGVALUE_salesChannel",
                "type": "input",
                "width": 40
            },
            {
                "title": "Вариант задачи",
                "key": "variant",
                "type": "dictionary",
                "width": 40
            },
            {
                "title": "Номер договора",
                "key": "EXT_MORTGAGE_STRINGVALUE_agreementNumber",
                "type": "input",
                "width": 100
            },
            {
                "title": "Страхователь",
                "key": "EXT_MORTGAGE_STRINGVALUE_insurerName",
                "type": "input",
                "width": 100
            },
            {
                "title": "Тип задачи",
                "key": "type",
                "type": "dictionary",
                "width": 100
            },
            {
                "title": "Объект",
                "key": "EXT_MORTGAGE_STRINGVALUE_object",
                "type": "input",
                "width": 40
            },
            {
                "title": "Статус",
                "key": "status",
                "type": "dictionary",
                "width": 50
            },
            {
                "title": "Решение",
                "key": "decision",
                "type": "dictionary",
                "width": 50
            },
            {
                "title": "Исполнитель",
                "key": "assignmentFullName",
                "type": "input",
                "width": 50
            },
            {
                "title": "Дата создания",
                "key": "createdDate",
                "type": "dateTime",
                "width": 50
            },
            {
                "title": "Дата исполнения",
                "key": "closeDate",
                "type": "dateTime",
                "width": 50
            },
            {
                "title": "Агент",
                "key": "EXT_MORTGAGE_STRINGVALUE_agentName",
                "type": "input",
                "width": 50
            }
        ],
        "options": {
            "filtersOrder": []
        },
        "pivotFields": null,
        "axisFields": [],
        "showCondition": [],
        "chart": [],
        "graph": null,
        "x": null,
        "y": null,
        "width": null,
        "height": null,
        "minHeight": null,
        "maxHeight": null,
        "minWidth": null,
        "maxWidth": null,
        "isDraggable": null,
        "isResizable": null,
        "gridWidth": 2,
        "gridBreak": 0,
        "hide": false
    }

    return (
        <div className={'container'}>
            <AppContent />
            <Table meta={meta}/>
        </div>
)
}

export default AllTasks
