import { paymentWriter } from './paymentWriter';

paymentWriter.addRows([
	{ id: 1, to: 'Alice', amount: 50, note: 'Rent' },
	{ id: 2, to: 'Bob', amount: 100, note: 'Food' }
]);


paymentWriter.saveToFile('./data/payments.csv');