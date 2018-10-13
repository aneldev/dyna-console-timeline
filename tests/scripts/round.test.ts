import { consoleTimeline, consoleTimelineReport, consoleTimelineReset } from "../../src";
import { round, roundText } from "../../src/consoleTimeline";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('round', () => {
  it('round to precision 2', () => {
    expect(round(2.345, 2)).toBe(2.35);
  });
  it('round to precision 3', () => {
    expect(round(2.3457, 3)).toBe(2.346);
  });
  it('round to text precision 3', () => {
    expect(roundText(2.3457, 3)).toBe("2.346");
  });
  it('round to text precision 3 with zeros', () => {
    expect(roundText(2.3, 3)).toBe("2.300");
  });
});
