import {ScreenState as TeslerScreenState} from "@tesler-ui/core/interfaces/screen";
import {Store} from "@tesler-ui/core/interfaces/store";
import {CustomSession} from "src/reducers/session";
import {VSKDataState} from "src/interfaces/data";
import {CustomView} from "src/reducers/view";



export interface AppReducers extends Partial<Omit<Store, 'data'>> {
    screen: ScreenState
    data: VSKDataState
    view: CustomView
    session: CustomSession
}

export type AppState = Store & AppReducers

export interface ScreenState extends TeslerScreenState {
    menuCollapsed: boolean
}