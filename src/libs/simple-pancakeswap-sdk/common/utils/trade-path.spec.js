"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trade_path_1 = require("../../enums/trade-path.js");
const bat_token_mock_1 = require("../../mocks/bat-token.mock.js");
const uni_token_mock_1 = require("../../mocks/uni-token.mock.js");
const tokens_1 = require("../tokens/index.js");
const trade_path_2 = require("./trade-path.js");
describe('getTradePath', () => {
    it('should return `TradePath.ethToErc20`', () => {
        const result = (0, trade_path_2.getTradePath)(tokens_1.BNB.token(), (0, bat_token_mock_1.MOCKBAT)());
        expect(result).toEqual(trade_path_1.TradePath.ethToErc20);
    });
    it('should return `TradePath.erc20ToEth`', () => {
        const result = (0, trade_path_2.getTradePath)((0, bat_token_mock_1.MOCKBAT)(), tokens_1.BNB.token());
        expect(result).toEqual(trade_path_1.TradePath.erc20ToEth);
    });
    it('should return `TradePath.erc20ToErc20`', () => {
        const result = (0, trade_path_2.getTradePath)((0, bat_token_mock_1.MOCKBAT)(), (0, uni_token_mock_1.MOCKUNI)());
        expect(result).toEqual(trade_path_1.TradePath.erc20ToErc20);
    });
});
