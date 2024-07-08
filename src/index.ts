import { appendFileSync } from "fs";

interface Payment {
	id: number;
	to: string;
	amount: number;
	note: string;
}

type PaymentColumns = ('id' | 'to' | 'amount' | 'note')[]

class CsvWriter {
	constructor(private columns: PaymentColumns) {
		this.csv = columns.join(',') + '\n';
	}

	private csv: string;

	saveToFile(filename: string): void {
		appendFileSync(filename, this.csv);
		this.csv = '\n';
		console.log('Saved to', filename);
	}

	addRows(values: Payment[]): void {
		let rows = values.map(this.formatRow.bind(this));
		this.csv += rows.join('\n') + '\n';
	}

	private formatRow(row: Payment): string {
		return this.columns.map(column => row[column]).join(',');
	}
};

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