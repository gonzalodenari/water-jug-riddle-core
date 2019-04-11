import Riddle from "../../../src/core/riddle/Riddle";
import RiddleResponse from "../../../src/core/model/RiddleResponse";
import { Action } from "../../../src/core/model/types";

describe("Wather Jug Solver", () => {
  it("should create instance", () => {
    const instance: Riddle = new Riddle();
    expect(instance).not.toBe(undefined);
  });

  it("should return a negative resolution response", () => {
    const instance: Riddle = new Riddle();
    const result: RiddleResponse = instance.findSolution({
        jugX: 8,
        jugY: 2,
        measureZ: 7,
    });
    expect(result.hasSolution).toBe(false);
  });

  it("should return a negative resolution response (Z is greater than max(x, y))", () => {
    const instance: Riddle = new Riddle();
    const result: RiddleResponse = instance.findSolution({
        jugX: 5,
        jugY: 2,
        measureZ: 7,
    });
    expect(result.hasSolution).toBe(false);
  });

  it("should return a positive resolution response", () => {
    const instance: Riddle = new Riddle();
    const result: RiddleResponse = instance.findSolution({
        jugX: 7,
        jugY: 4,
        measureZ: 5
    });
    expect(result.hasSolution).toBe(true);
    const expected = [
        { x: 0, y: 4 },
        { x: 4, y: 0 },
        { x: 4, y: 4 },
        { x: 7, y: 1 },
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 1, y: 4 },
        { x: 5, y: 0 }
    ];
    expect(result.states).toEqual(expected);
    expect(result.actions).toEqual([
        Action.Fill,
        Action.Transfer,
        Action.Fill,
        Action.Transfer,
        Action.Empty,
        Action.Transfer,
        Action.Fill,
        Action.Transfer
    ]);
  });
});
