import {WidgetMeta, WidgetTableMeta} from "@tesler-ui/core/interfaces/widget";

export interface TasksState {
    tasks: any[],
    row: any
}

export const initialState: TasksState = {
    tasks: [
        {
            "id":"9",
            "errors":null,
            "vstamp":0,
            "createdDate":"2022-05-24T14:02:43.245335",
            "updatedDate":"2022-06-06T15:02:09.45873",
            "variant":"Первичная",
            "type":"Проверка рисков по НС",
            "status":"В работе",
            "assignment":"ashepeleva@vsk.ru",
            "assignmentRole":"Медицинский андеррайтер",
            "assignmentFullName":"Анастасия Шепелева",
            "processId":"0588776c-e2f2-47f4-96b4-2a656dc85d33",
            "currentApplicationType":null,
            "previousAgreementNumber":null,
            "applicationType":null,
            "anotherPolicyFlag":false,
            "closeDate":null,
            "planAssignmentDateStart":"2022-05-24T14:02:43.198561",
            "planAssignmentDateEnd":"2022-05-25T10:03:00",
            "decision":null,
            "sla":300,
            "decisionAcceptingAvailableTask":false,
            "decisionAcceptingAvailableInspection":false,
            "decisionDisplayingAvailableInspection":false,
            "agreement":false,
            "showApplication":false,
            "showApplicationTypeV0":false,
            "showApplicationTypeV1":false,
            "taskTypeIsValidateMortgageStatusInProgress":false,
            "mortgageCommentsCreateAvailable":true,
            "agreementOrTaskTypeIsContractVerification":false,
            "showChannelChatV1":false,
            "hasDecision":true,
            "typeKey":"USER_TASK_TYPE_CHECK_ACCIDENT_RISKS",
            "statusKey":"USER_TASK_STATUS_IN_PROGRESS",
            "planAssignmentDateColor":"#ff4443",
            "hasControlVskInspection":false,
            "EXT_MORTGAGE_NULLVALUE_object":null,
            "EXT_MORTGAGE_STRINGVALUE_branch":"testMortgage",
            "EXT_MORTGAGE_NULLVALUE_agentName":null,
            "EXT_MORTGAGE_NULLVALUE_insurerName":null,
            "EXT_MORTGAGE_NULLVALUE_salesChannel":null,
            "EXT_STRINGVALUE_mainProcess.statusKey":"NEW",
            "EXT_MORTGAGE_STRINGVALUE_agreementNumber":"testAgreementNumber"
        },
    ],
    row: {"row":{"actions":[],"fields":[{"key":"planAssignmentDateEnd","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"EXT_KASKO_STRINGVALUE_vin","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"applicationType","disabled":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"EXT_KASKO_STRINGVALUE_agreementNumber","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"decision","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[{"value":"На доработку (требуется осмотр)","options":{}},{"value":"Требуются документы","options":{}},{"value":"Не согласовано","options":{}},{"value":"Помощь специалиста","options":{}},{"value":"На доработку (Отклонены документы)","options":{}},{"value":"Отказано","options":{}},{"value":"Согласовано","options":{}},{"value":"Выполнено","options":{}},{"value":"На доработку","options":{}},{"value":"На доработку (Отклонены фото)","options":{}},{"value":"На доработку (Отклонены документы и фото)","options":{}}],"options":{}},{"key":"EXT_MORTGAGE_STRINGVALUE_insurerName","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"EXT_MORTGAGE_STRINGVALUE_agentName","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"EXT_KASKO_STRINGVALUE_bodyNumber","disabled":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"updatedDate","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"assignmentRole","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[{"value":"Медицинский андеррайтер","options":{}},{"value":"Риск-инженер","options":{}},{"value":"Специалист по проверке на мошенничество","options":{}},{"value":"Диспетчер по организации осмотра","options":{}},{"value":"Специалист ЦПМ по ипотеке","options":{}},{"value":"Юрист","options":{}},{"value":"Андеррайтер-контролер по ипотеке","options":{}},{"value":"Андеррайтер по ипотеке","options":{}},{"value":"Специалист группы технической оценки риска","options":{}},{"value":"Сотрудник перестрахования","options":{}},{"value":"Сотрудник эксплуатации по ипотеке","options":{}},{"value":"Сотрудник эксплуатации по КАСКО","options":{}},{"value":"Оперативный андеррайтер","options":{}}],"options":{}},{"key":"EXT_MORTGAGE_STRINGVALUE_salesChannel","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"type","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[{"value":"Проверка рисков по титулу","options":{}},{"value":"Проверка рисков по титулу ЦПМ","options":{}},{"value":"Проверка рисков по имуществу","options":{}},{"value":"Проверка согласования договора по ипотеке","options":{}},{"value":"Проверка рисков по НС","options":{}},{"value":"Согласование договора по ипотеке","options":{}}],"options":{}},{"key":"EXT_MORTGAGE_STRINGVALUE_object","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"EXT_MORTGAGE_STRINGVALUE_agreementNumber","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"closeDate","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"EXT_KASKO_STRINGVALUE_inspectionType","disabled":true,"hidden":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"createdDate","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"EXT_KASKO_STRINGVALUE_previousAgreementNumber","disabled":true,"hidden":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"assignmentFullName","disabled":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"variant","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[{"value":"Повторная","options":{}},{"value":"Первичная","options":{}}],"options":{}},{"key":"EXT_MORTGAGE_STRINGVALUE_branch","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"id","disabled":true,"filterable":true,"drillDown":"screen/allmortgagetasks/view/mortgagetask/mortgageTask/9","drillDownType":"inner","currentValue":null,"values":[],"filterValues":[],"options":{}},{"key":"status","disabled":true,"filterable":true,"currentValue":null,"values":[],"filterValues":[{"value":"Новая","options":{}},{"value":"Отменена","options":{}},{"value":"Выполнена","options":{}},{"value":"В работе","options":{}}],"options":{}}]}}

}

