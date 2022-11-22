import { actionTypes, CustomEpic } from 'src/interfaces/actions'
import { Observable } from 'rxjs/Observable'
import { $do } from 'src/actions/types'
import { CustomEpicSlice } from '@tesler-ui/core/interfaces/customEpics'
import { OperationPreInvokeVSK } from 'src/interfaces/operations'
import { CustomWidgetTypes } from 'src/interfaces/widget'

const showFormPopup: CustomEpic = (action$, store) =>
    action$.ofType(actionTypes.processPreInvoke).switchMap(action => {
        const preInvoke = action.payload.preInvoke as OperationPreInvokeVSK
        const widgetName = store
            .getState()
            .view.widgets.find(item => item.bcName === preInvoke.bcName && item.type === CustomWidgetTypes.FormPopup)?.name
        if (!widgetName) {
            return Observable.empty()
        }
        switch (preInvoke.type) {
            case 'bc': {
                return Observable.of(
                    $do.showViewPopup({
                        bcName: preInvoke.bcName!,
                        widgetName
                    })
                )
            }
            default:
                return Observable.empty()
        }
    })

const closeFormPopup: CustomEpic = (action$, store) =>
    action$.ofType(actionTypes.sendOperationSuccess).switchMap(action => {
        const { widgetName: popupWidget, bcName } = store.getState().view.popupData || {}
        const widgetName = store.getState().view.widgets.find(item => item.name === popupWidget)?.name
        if (!widgetName) {
            return Observable.empty()
        }
        return Observable.concat(Observable.of($do.closeViewPopup({})), Observable.of($do.setPreInvokeSuccessBcName(bcName!)))
    })
const selectFirstImageEpic: CustomEpic = (action$, store) =>
    action$
        .ofType(actionTypes.bcFetchRowMetaSuccess)
        .filter(action => {
            return action.payload.bcName === 'controlVskInspectionImage'
        })
        .mergeMap(action => {
            const state = store.getState()
            console.log(action.payload)
            if (action.payload.cursor === '_0') {
                const nextCursor = state.data?.[action.payload.bcName].find(img => img.imageType === 'IMAGE_BLOCK')?.id

                return nextCursor
                    ? Observable.of($do.bcSelectRecord({ bcName: action.payload.bcName, cursor: nextCursor }))
                    : Observable.empty()
            }
            return Observable.empty()
        })

export const viewEpics: CustomEpicSlice<'viewEpics'> = {
    showFormPopup,
    closeFormPopup,
    selectFirstImageEpic
}