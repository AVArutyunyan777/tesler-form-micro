import { WidgetField, WidgetOptions, WidgetTypes } from '@tesler-ui/schema'
import { WidgetMeta } from '@tesler-ui/core/interfaces/widget'

export enum CustomFieldTypes {
    MultipleSelect = 'multipleSelect',
    Bik = 'bik'
}

export enum CustomWidgetTypes {
    Header = 'Header',
    PhotoViewer = 'PhotoViewer',
    PhotoComments = 'PhotoComments',
    FormPopup = 'FormPopup',
    Steps = 'Steps',
    FormBuilder = 'FormBuilder',
    ListOfForms = 'ListOfForms'
}

export const removeRecordOperationWidgets: Array<WidgetTypes | string> = [WidgetTypes.List]

export type WidgetFieldVsk = WidgetField & {
    correspondentAccountKey: string
    bankNameKey: string
}

export interface StepsWidgetMeta extends WidgetMeta {
    type: CustomWidgetTypes.Steps
    options: WidgetOptions & {
        stepsOptions: {
            stepsDictionaryKey: string
        }
    }
}

export type PhotoViewerField = WidgetField & {
    formPopupForRequestBcName: string
    formPopupForRequestWidgetName: string
    formPopupForEditWidgetName: string
    formPopupForDeleteWidgetName: string
}

export interface PhotoViewerWidgetMeta extends WidgetMeta {
    type: CustomWidgetTypes.PhotoViewer
    fields: PhotoViewerField[]
    options: WidgetOptions & {
        actionTheme?: Record<string, 'good' | 'bad'>
    }
}