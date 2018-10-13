// methods

export const consoleTimeline = (timelineName: string, taskName: string): void => {
  if (!timelines[ timelineName ]) timelines[ timelineName ] = { ticks: [] };
  timelines[ timelineName ].ticks.push({ taskName, time: now() })
};

export const consoleTimelineReport = (timelineName: string, consoleIt: boolean = true): ITimeline => {
  const timeline: ITimeline = timelines[ timelineName ];
  if (timeline) {
    if (consoleIt) consoleReportTimeline(timelineName, timeline);
    return timeline;
  }
  else {
    console.error(`consoleTimelineReport: there is not timeline with this name`);
    return null;
  }
};

export const consoleTimelineReset = (timelineName: string, consoleIt: boolean = true): void => {
  delete timelines[ timelineName ];
};

// interfaces

interface ITimelines {
  [ timelinaName: string ]: ITimeline;
}

export interface ITimeline {
  ticks: ITick[];
}

export interface ITick {
  taskName: string;
  time: number;
}

const timelines: ITimelines = {};

// private

const consoleReportTimeline = (timelineName: string, timeline: ITimeline): void => {
  if (!timeline.ticks.length) {
    console.log('consoleTimelineReport: no ticks, nothing to show');
    return;
  }

  let lastTime: number = timeline.ticks[ 0 ].time;
  const duration: number = timeline.ticks[ timeline.ticks.length - 1 ].time - timeline.ticks[ 0 ].time;
  const maxTime: number = timeline.ticks.reduce((acc: number, tick: ITick) => tick.time - timeline.ticks[ 0 ].time > acc ? tick.time - timeline.ticks[ 0 ].time : acc, 0);
  const maxTickTimeLength: number = roundText(duration, hasPerformanceNow ? 3 : 0).length;
  const graphWidth: number = 40;
  console.log('consoleTimelineReport for timeline', timelineName, new Date);
  timeline.ticks.forEach((tick: ITick) => {
    const timeLappsedNum: number = round(tick.time - lastTime, hasPerformanceNow ? 3 : 0);
    const timeLappsedText: string = roundText(tick.time - lastTime, hasPerformanceNow ? 3 : 0);
    lastTime = tick.time;
    const graph: string = Array(round((graphWidth * timeLappsedNum / maxTime) || 0, 0)).fill('#').join('');
    let output: string = "";
    output += textSize(graph, graphWidth, 'r') + " ";
    output += textSize(timeLappsedText, maxTickTimeLength, 'r') + " ";
    output += tick.taskName;
    console.log(output);
  });
  console.log('total duration', duration);
};

const textSize = (text: string, size: number, align: string): string => {
  text = text.substr(0, size);
  while (text.length < size) {
    if (align === 'l') text += " "; else text = " " + text;
  }
  return text;
};

const hasPerformanceNow: boolean = !!(typeof performance !== "undefined" && performance.now);

const now = (): number => {
  return hasPerformanceNow
    ? performance.now()
    : Number(new Date);
};

export const round = (value: number, digits: number): number => {
  return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits);
};

export const roundText = (value: number, digits: number): string => {
  const minValue: number = 1 / (Math.pow(10, digits));
  let text: string;

  if (value === 0 || value >= minValue) {
    text = round(value, digits).toLocaleString();
  }
  else {
    text = '<' + (minValue.toLocaleString());
  }

  if (digits > 0) {
    if (text.indexOf('.') == -1) text += '.';
    while (text.length - text.indexOf('.') - 1 < digits) text += '0';
  }

  return text;
};
