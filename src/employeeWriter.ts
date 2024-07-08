import { CsvWriter } from "./csvWriter";

interface Employee {
    id: number;
    name: string;
    position: string;
    department: string;
}

export const employeeWriter = new CsvWriter<Employee>(['id', 'name', 'position', 'department']);