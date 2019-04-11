export interface IState {
    x: number;
    y: number;
}
export declare class State implements IState {
    x: number;
    y: number;
    private xCapacity;
    private yCapacity;
    constructor(x: number, y: number, xCapacity: number, yCapacity: number);
    clone(): State;
    foundMeasure(z: number): boolean;
    transferFromXtoY(toBeTransfered: number): void;
    isXEmpty(): boolean;
    isYEmpty(): boolean;
    isXFull(): boolean;
    isYFull(): boolean;
    fillX(): void;
    emptyY(): void;
}
