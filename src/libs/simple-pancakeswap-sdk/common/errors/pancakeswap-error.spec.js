"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../index.js");
const error_codes_1 = require("./error-codes.js");
describe('Pancakeswap', () => {
    const message = 'message_error';
    const code = error_codes_1.ErrorCodes.canNotFindChainId;
    const pankecakeswapError = new __1.PancakeswapError(message, code);
    it('should have the correct name on error', () => {
        expect(pankecakeswapError.name).toEqual('PancakeswapError');
    });
    it('should have the correct code on error', () => {
        expect(pankecakeswapError.code).toEqual(code);
    });
    it('should have the correct message on error', () => {
        expect(pankecakeswapError.message).toEqual(message);
    });
});
