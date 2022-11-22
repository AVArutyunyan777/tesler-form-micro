import { DataValue } from '@tesler-ui/schema'

export interface VSKDataState {
    [bcName: string]: VSKDataItem[]
}

export interface VSKDataItem {
    id: string
    vstamp: number
    [fieldName: string]: DataValue | PhotoViewerComment[]
}

export interface PhotoViewerItem extends VSKDataItem {
    url: string
    state: EPhotoStatus
    underwritersComments: PhotoViewerComment[]
}

export interface PhotoViewerComment {
    author: string
    text: string
}

export enum EPhotoStatus {
    New = 'NEW',
    Approved = 'APPROVED',
    Rejected = 'REJECTED'
}

export enum EPhotoBlockType {
    Image = 'IMAGE_BLOCK',
    Request = 'REQUEST_BLOCK',
    Draft = 'DRAFT_BLOCK'
}

export enum PhotoBlockType {
    Image = 'IMAGE_BLOCK',
    Request = 'REQUEST_BLOCK',
    Draft = 'DRAFT_BLOCK'
}

/**
 * Ответ сервиса обрабатывающего выпадающий список выбора БИК
 */
export type BikServiceResponse = BikDataItem[]

export interface BikDataItem {
    /**
     * БИК (может повторяться если у банка несколько корр.счетов)
     */
    bik: string
    /**
     * Корреспондентский счет банка (уникальный, ключ)
     */
    correspondentAccount: string
    /**
     * Наименование банка
     */
    bankName: string
}