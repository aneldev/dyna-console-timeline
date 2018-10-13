export declare const consoleTimeline: (timelineName: string, taskName: string) => void;
export declare const consoleTimelineReport: (timelineName: string, consoleIt?: boolean) => ITimeline;
export declare const consoleTimelineReset: (timelineName: string, consoleIt?: boolean) => void;
export interface ITimeline {
    ticks: ITick[];
}
export interface ITick {
    taskName: string;
    time: number;
}
