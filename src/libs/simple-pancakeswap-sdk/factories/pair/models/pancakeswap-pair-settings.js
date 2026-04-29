"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PancakeswapPairSettings = void 0;
class PancakeswapPairSettings {
    constructor(settings) {
        this.slippage = settings?.slippage || 0.005;
        this.deadlineMinutes = settings?.deadlineMinutes || 20;
        this.disableMultihops = settings?.disableMultihops || false;
    }
}
exports.PancakeswapPairSettings = PancakeswapPairSettings;
