import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
        const categories: Category[] = [
            { id: 1, name: "Recreation", description: "Payments of recreation"},
            { id: 2, name: "House", description: "Payments of house things"},
            { id: 3, name: "Car", description: "Spending in the car"},
            { id: 4, name: "Salary", description: "Incomes from the work"}
        ];

        return { categories }
    }
    
}