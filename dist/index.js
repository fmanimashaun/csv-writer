"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paymentWriter_1 = require("./paymentWriter");
paymentWriter_1.paymentWriter.addRows([
    { id: 1, to: 'Alice', amount: 50, note: 'Rent' },
    { id: 2, to: 'Bob', amount: 100, note: 'Food' }
]);
paymentWriter_1.paymentWriter.saveToFile('./data/payments.csv');
//# sourceMappingURL=index.js.map