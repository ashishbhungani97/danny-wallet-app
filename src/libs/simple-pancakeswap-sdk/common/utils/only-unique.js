"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onlyUnique = onlyUnique;
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
