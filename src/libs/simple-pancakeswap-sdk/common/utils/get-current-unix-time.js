"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUnixTime = getCurrentUnixTime;
const get_unix_time_1 = require("./get-unix-time.js");
/**
 * Get the current unit time
 */
function getCurrentUnixTime() {
    return (0, get_unix_time_1.getUnixTime)(new Date());
}
