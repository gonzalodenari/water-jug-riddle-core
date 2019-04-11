import Riddle from "./core/riddle/Riddle";
import RiddleInput from "./core/model/RiddleInput";
import RiddleResponse from "./core/model/RiddleResponse";
import { IState, State } from "./core/model/State";
import { Action } from "./core/model/types";

const riddle: Riddle = new Riddle();
export default (input: RiddleInput): RiddleResponse => riddle.findSolution(input);

export { RiddleInput, RiddleResponse, IState, State, Action };
