"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_current_unix_time_1 = require("./get-current-unix-time.js");
describe('getCurrentUnixTime', () => {
    it('should getCurrentUnixTime correctly', () => {
        const result = (0, get_current_unix_time_1.getCurrentUnixTime)();
        expect(typeof result).toEqual('number');
    });
});
