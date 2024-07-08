"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvWriter = void 0;
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
exports.CsvWriter = CsvWriter;
;
//# sourceMappingURL=csvWriter.js.map