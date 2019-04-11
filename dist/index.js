"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Riddle_1 = __importDefault(require("./core/riddle/Riddle"));
const State_1 = require("./core/model/State");
exports.State = State_1.State;
const types_1 = require("./core/model/types");
exports.Action = types_1.Action;
const riddle = new Riddle_1.default();
exports.default = (input) => riddle.findSolution(input);
//# sourceMappingURL=index.js.map