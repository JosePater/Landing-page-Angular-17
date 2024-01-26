import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{
  
  loading: boolean = true;
  public product?: IProduct;
  
  private _route = inject(ActivatedRoute);  // To navigation url
  private _apiService = inject(ApiService); // To get product
  
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProductId(params['id']).subscribe((data: IProduct) => {
        this.product = data;
        this.loading = false;
      })
    });
  }

}
