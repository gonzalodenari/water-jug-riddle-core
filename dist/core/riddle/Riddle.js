"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../model/types");
const Math_1 = require("../util/Math");
const State_1 = require("../model/State");
class Riddle {
    findSolution(input) {
        if ((input.measureZ % Math_1.gcd(input.jugX, input.jugY)) != 0) {
            return { hasSolution: false };
        }
        if (Math.max(input.jugX, input.jugY) < input.measureZ) {
            return { hasSolution: false };
        }
        const r1 = this.pour(input.jugX, input.jugY, input.measureZ);
        const r2 = this.pour(input.jugY, input.jugX, input.measureZ);
        if (r1.states.length < r2.states.length) {
            return r1;
        }
        else {
            return Object.assign({}, r2, { states: r2.states.map(s => ({ x: s.y, y: s.x })) });
        }
    }
    pour(fromJug, toJug, measure) {
        const states = [];
        const actions = [];
        const current = new State_1.State(fromJug, 0, fromJug, toJug);
        states.push(current.clone());
        actions.push(types_1.Action.Fill);
        let toBeTransfered;
        while (!current.foundMeasure(measure)) {
            toBeTransfered = Math.min(current.x, toJug - current.y);
            current.transferFromXtoY(toBeTransfered);
            actions.push(types_1.Action.Transfer);
            states.push(current.clone());
            if (current.foundMeasure(measure)) {
                return { hasSolution: true, states, actions };
            }
            // If first jug becomes empty, fill it
            if (current.isXEmpty()) {
                current.fillX();
                actions.push(types_1.Action.Fill);
                states.push(current.clone());
            }
            // If second jug becomes full, empty it
            if (current.isYFull()) {
                current.emptyY();
                actions.push(types_1.Action.Empty);
                states.push(current.clone());
            }
        }
        return { hasSolution: true, states, actions };
    }
}
exports.default = Riddle;
//# sourceMappingURL=Riddle.js.map