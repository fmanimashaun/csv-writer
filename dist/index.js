"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paymentWriter_1 = require("./paymentWriter");
const employeeWriter_1 = require("./employeeWriter");
paymentWriter_1.paymentWriter.addRows([
    { id: 1, to: 'Alice', amount: 50, note: 'Rent' },
    { id: 2, to: 'Bob', amount: 100, note: 'Food' }
]);
employeeWriter_1.employeeWriter.addRows([
    { id: 1, name: 'Alice', position: 'Manager', department: 'Sales' },
    { id: 2, name: 'Bob', position: 'Developer', department: 'Engineering' }
]);
employeeWriter_1.employeeWriter.saveToFile('./data/employees.csv');
paymentWriter_1.paymentWriter.saveToFile('./data/payments.csv');
//# sourceMappingURL=index.js.map