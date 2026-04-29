"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_ether_1 = require("./format-ether.js");
describe('formatEther', () => {
    it('should formatEther correctly', () => {
        const result = (0, format_ether_1.formatEther)('1000000000');
        expect(result.toFixed()).toEqual('0.000000001');
    });
});
