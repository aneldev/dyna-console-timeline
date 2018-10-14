export declare const consoleTimeline: (timelineName: string, taskName: string, consoleIt?: boolean) => void;
export declare const consoleTimelineReport: (timelineName: string, consoleIt?: boolean) => ITimeline;
export declare const consoleTimelineReset: (timelineName: string) => void;
export interface ITimeline {
    ticks: ITick[];
}
export interface ITick {
    taskName: string;
    time: number;
}
export declare const round: (value: number, digits: number) => number;
export declare const roundText: (value: number, digits: number) => string;
