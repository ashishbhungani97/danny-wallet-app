"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_unix_time_1 = require("./get-unix-time.js");
describe('getUnixTime', () => {
    it('should getUnixTime correctly', () => {
        const result = (0, get_unix_time_1.getUnixTime)(new Date('2015-03-25'));
        expect(result).toEqual(1427241600);
    });
});
