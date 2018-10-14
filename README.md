# About

Debug tool that makes the time a good friend.

The `consoleTimeline` works exactly as the `console.time` but the report can be consoled or get it as object. This makes easier to debug or write tests.

Track in timeline view, the elapsed time of running tasks.

Create ticks on time calling the `consoleTimeline` and whenever you want `consoleTimelineReport`.

You can create multiple timelines.

# Example

```
import {consoleTimeline, consoleTimelineReport} from "dyna-console-timeline";

consoleTimeline('Process customer request', 'start');
consoleTimeline('Process customer request', 'load from database');
consoleTimeline('Process customer request', 'calc the debit');
consoleTimeline('Process customer request', 'return to client');
consoleTimeline('Process customer request', 'completed');

consoleTimelineReport('Process customer request');
    // consoles
-CTL- [Process customer request] Console Timeline Report Sun Oct 14 2018 08:28:17 GMT+0200 (Central European Summer Time)
-CTL- [Process customer request]                                            0.000 start
-CTL- [Process customer request]                           ############## 138.000 load from database
-CTL- [Process customer request]                     #################### 203.500 calc the debit
-CTL- [Process customer request]                                       ##  17.300 return to client
-CTL- [Process customer request]                                     ####  41.400 completed
-CTL- [Process customer request] total duration 400.200
```

# methods

## consoleTimeline = (timelineName: string, taskName: string, consoleIt: boolean = false): void

Create a tick.

Console the tick setting the `consoleIt` to true.

## consoleTimelineReport = (timelineName: string, consoleIt: boolean = true): ITimeline

Console the report.

To do not console it set the `consoleIt` false.

This method always return the ITimeLine object where contains the report of the specific timeline.

```
interface ITimeline {
  ticks: ITick[];
}

interface ITick {
  taskName: string;
  time: number;
}
```


## consoleTimelineReset = (timelineName: string): void

Reset all collected data for this timeline.