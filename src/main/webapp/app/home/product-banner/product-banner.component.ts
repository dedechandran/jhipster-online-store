import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/entities/product';
import { IProduct } from 'app/shared/model/product.model';
import { HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-product-banner',
    templateUrl: './product-banner.component.html',
    styles: []
})
export class ProductBannerComponent implements OnInit {
    products: IProduct[];
    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.loadAll();
    }
    loadAll() {
        this.productService
            .query()
            .subscribe(
                (res: HttpResponse<IProduct[]>) => this.paginateProducts(res.body, res.headers),
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }
    protected paginateProducts(data: IProduct[], headers: HttpHeaders) {
        // this.links = this.parseLinks.parse(headers.get('link'));
        // this.totalItems = parseInt(headers.get('X-Total-Count'), 10);
        this.products = data;
    }

    protected onError(errorMessage: string) {}
}
