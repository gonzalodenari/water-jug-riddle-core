"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gcd(a, b) {
    return (b == 0) ? Math.abs(a) : gcd(b, a % b);
}
exports.gcd = gcd;
//# sourceMappingURL=Math.js.map