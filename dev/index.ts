import { consoleTimeline, consoleTimelineReport } from "../src";

consoleTimeline('Process customer request', 'start', true);
setTimeout(()=>consoleTimeline('Process customer request', 'load from database', true), 100);
setTimeout(()=>consoleTimeline('Process customer request', 'calc the debit', true), 200);
setTimeout(()=>consoleTimeline('Process customer request', 'return to client', true), 300);
setTimeout(()=>consoleTimeline('Process customer request', 'completed', true), 400);
setTimeout(()=>(window as any).ctlr=consoleTimelineReport('Process customer request', true), 500);






