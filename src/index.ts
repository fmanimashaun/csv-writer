import { paymentWriter } from './paymentWriter';
import { employeeWriter } from './employeeWriter';

paymentWriter.addRows([
	{ id: 1, to: 'Alice', amount: 50, note: 'Rent' },
	{ id: 2, to: 'Bob', amount: 100, note: 'Food' }
]);

employeeWriter.addRows([
	{ id: 1, name: 'Alice', position: 'Manager', department: 'Sales' },
	{ id: 2, name: 'Bob', position: 'Developer', department: 'Engineering' }
]);

employeeWriter.saveToFile('./data/employees.csv');


paymentWriter.saveToFile('./data/payments.csv');