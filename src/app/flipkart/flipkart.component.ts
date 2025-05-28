import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  products = [
    { name: 'pen', price: 10, rating: 3, freeDelivery: true },
    { name: 'phone', price: 100, rating: 2, freeDelivery: false },
    { name: 'shirt', price: 400, rating: 4, freeDelivery: true },
    { name: 'cap', price: 200, rating: 5, freeDelivery: false },
    { name: 'mobile case', price: 300, rating: 2, freeDelivery: true },
    { name: 'remote', price: 400, rating: 2.5, freeDelivery: false }
  ];

  name = '';
  price: number = 0;
  rating: number = 0;
  freeDelivery: boolean = true;

  addProduct() {
    if (this.name && this.price && this.rating) {
      this.products.push({
        name: this.name,
        price: this.price,
        rating: this.rating,
        freeDelivery: this.freeDelivery
      });
      this.name = '';
      this.price = 0;
      this.rating = 0;
      this.freeDelivery = true;
    }
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  sortByPriceLow() {
    this.products.sort((a, b) => a.price - b.price);
  }

  sortByPriceHigh() {
    this.products.sort((a, b) => b.price - a.price);
  }

  sortByRatingLow() {
    this.products.sort((a, b) => a.rating - b.rating);
  }

  sortByRatingHigh() {
    this.products.sort((a, b) => b.rating - a.rating);
  }

  filterFreeDelivery() {
    this.products = this.products.filter(p => p.freeDelivery);
  }

  applyDiscount() {
    this.products = this.products.map(p => ({ ...p, price: p.price / 2 }));
  }

  totalCartItems() {
    return this.products.length;
  }

  totalPrice() {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}
