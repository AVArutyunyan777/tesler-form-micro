import {OperationPreInvokeType} from "@tesler-ui/core/interfaces/operation";

type OperationPreInvokeTypeVsk = `${OperationPreInvokeType}` | 'bc'

export interface OperationPreInvokeVSK {
    type: OperationPreInvokeTypeVsk
    message?: string
    bcName?: string
}