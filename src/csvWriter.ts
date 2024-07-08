import { appendFileSync } from "fs";


export class CsvWriter<T> {
	constructor(private columns: (keyof T)[]) {
		this.csv = columns.join(',') + '\n';
	}

	private csv: string;

	saveToFile(filename: string): void {
		appendFileSync(filename, this.csv);
		this.csv = '\n';
		console.log('Saved to', filename);
	}

	addRows(values: T[]): void {
		let rows = values.map(this.formatRow.bind(this));
		this.csv += rows.join('\n') + '\n';
	}

	private formatRow(row: T): string {
		return this.columns.map(column => row[column]).join(',');
	}
};

