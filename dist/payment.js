"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentWriter = void 0;
const csvWriter_1 = require("./csvWriter");
exports.paymentWriter = new csvWriter_1.CsvWriter(['id', 'to', 'amount', 'note']);
//# sourceMappingURL=payment.js.map