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
    consoleTimelineReport for timeline Process customer request Sat Oct 13 2018 17:01:26 GMT+0200 (Central European Summer Time)
                                                0 start
                             ############### 2089 load from database
                           ################# 2297 calc the debit
                                        ####  671 return to client
                                        ####  528 completed
    total duration 5585

```

# methods

## consoleTimeline = (timelineName: string, taskName: string): void

## consoleTimelineReport = (timelineName: string, consoleIt: boolean = true): ITimeline

## consoleTimelineReset = (timelineName: string, consoleIt: boolean = true): void
