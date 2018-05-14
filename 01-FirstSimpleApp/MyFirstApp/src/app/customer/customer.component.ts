import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/model/customer';
import { CUSTOMERS } from '../../domain/mock-customers';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    customers = CUSTOMERS;
    selectedCustomer: Customer;

    constructor() { }

    ngOnInit() { }

    onSelect(customer: Customer): void {
        this.selectedCustomer = customer;
    }
}
