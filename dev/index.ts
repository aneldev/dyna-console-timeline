import { consoleTimeline, consoleTimelineReport } from "../src";

consoleTimeline('Process customer request', 'start');
setTimeout(()=>consoleTimeline('Process customer request', 'load from database'), 100);
setTimeout(()=>consoleTimeline('Process customer request', 'calc the debit'), 200);
setTimeout(()=>consoleTimeline('Process customer request', 'return to client'), 300);
setTimeout(()=>consoleTimeline('Process customer request', 'completed'), 400);
setTimeout(()=>consoleTimelineReport('Process customer request'), 500);






