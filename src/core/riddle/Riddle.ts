import { Action } from "../model/types";
import { gcd } from "../util/Math";
import RiddleInput from "../model/RiddleInput";
import RiddleResponse from "../model/RiddleResponse";
import { IState, State } from "../model/State";

export default class Riddle  {
    public findSolution(input: RiddleInput): RiddleResponse {
        if ((input.measureZ % gcd(input.jugX, input.jugY)) != 0) {
            return { hasSolution: false };
        }
        if (Math.max(input.jugX, input.jugY) < input.measureZ) {
            return { hasSolution: false };
        }
        const r1: RiddleResponse = this.pour(input.jugX, input.jugY, input.measureZ);
        const r2: RiddleResponse = this.pour(input.jugY, input.jugX, input.measureZ);
        if (r1.states.length < r2.states.length) {
            return r1;
        } else {
            return { ...r2, states: r2.states.map(s => ({ x: s.y, y: s.x })) };
        }
    }

    private pour(fromJug: number, toJug: number, measure: number): RiddleResponse {
        const states: IState[] = [];
        const actions: Action[] = [];

        const current: State = new State(fromJug, 0, fromJug, toJug);
        states.push(current.clone());
        actions.push(Action.Fill);

        let toBeTransfered: number;
        while (!current.foundMeasure(measure)) {
            toBeTransfered = Math.min(current.x, toJug - current.y);

            current.transferFromXtoY(toBeTransfered);
            actions.push(Action.Transfer);
            states.push(current.clone());

            if (current.foundMeasure(measure)) {
                return { hasSolution: true, states, actions };
            }

            // If first jug becomes empty, fill it
            if (current.isXEmpty()) {
                current.fillX();
                actions.push(Action.Fill);
                states.push(current.clone());
            }

            // If second jug becomes full, empty it
            if (current.isYFull()) {
                current.emptyY();
                actions.push(Action.Empty);
                states.push(current.clone());
            }
        }
        return { hasSolution: true, states, actions };
    }
}
