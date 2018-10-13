import { consoleTimeline, consoleTimelineReport, consoleTimelineReset } from "../../src";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

// hmm... no tests so far, forks are welcome!

describe('Internal module test', () => {
	it('should do this', () => {
		expect(true).toBe(true);
	});
});
