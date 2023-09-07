const MongoClient = require('mongodb').MongoClient;

class Budget {
    constructor(name, totalIncome, totalExpense, startDate, endDate) {
        this.name = name;
        this.totalIncome = totalIncome;
        this.totalExpense = totalExpense;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    async addIncome() {
       
    }

    async addExpense() {
        
    }

    async calculateTotalIncome() {
        
    }

    async calculateTotalExpense() {
    
    }

    async generateReport() {
        
    }
}
