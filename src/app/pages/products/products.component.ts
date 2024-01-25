import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productsList: IProduct[] = [];
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      this.productsList = data;
    });
  }
}
