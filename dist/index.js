"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CsvWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = columns.join(',') + '\n';
    }
    saveToFile(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('Saved to', filename);
    }
    addRows(values) {
        let rows = values.map(this.formatRow.bind(this));
        this.csv += rows.join('\n') + '\n';
    }
    formatRow(row) {
        return this.columns.map(column => row[column]).join(',');
    }
}
;
const writer = new CsvWriter(['id', 'to', 'amount', 'note']);
writer.addRows([
    { id: 1, to: 'John Doe', amount: 100, note: 'Lunch' },
    { id: 2, to: 'Jane Doe', amount: 200, note: 'Dinner' },
]);
writer.saveToFile('./data/payments.csv');
writer.addRows([
    { id: 3, to: 'John Doe', amount: 50, note: 'Coffee' },
    { id: 4, to: 'Jane Doe', amount: 150, note: 'Tea' },
]);
writer.saveToFile('./data/payments.csv');
//# sourceMappingURL=index.js.map