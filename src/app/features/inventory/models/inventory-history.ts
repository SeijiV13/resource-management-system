import { Inventory } from "./inventory";

export interface InventoryHistory {
    $key?: string;
    name: string;
    description: string;
    transactionBy: number;
    transactionDate: string;
}