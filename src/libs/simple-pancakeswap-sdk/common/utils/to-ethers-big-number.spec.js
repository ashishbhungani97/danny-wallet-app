"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const to_ethers_big_number_1 = require("./to-ethers-big-number.js");
describe('toEthersBigNumber', () => {
    it('should toEthersBigNumber correctly', () => {
        const result = (0, to_ethers_big_number_1.toEthersBigNumber)(new bignumber_js_1.default(1));
        expect(result._isBigNumber).toEqual(true);
    });
});
