import { Action } from "./types";
import { IState } from "./State";
export default interface RiddleResponse {
    hasSolution: boolean;
    actions?: Action[];
    states?: IState[];
}
