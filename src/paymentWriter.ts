import { CsvWriter } from './csvWriter';

interface Payment {
    id: number;
    to: string;
    amount: number;
    note: string;
}

export const paymentWriter = new CsvWriter<Payment>(['id', 'to', 'amount', 'note']);
