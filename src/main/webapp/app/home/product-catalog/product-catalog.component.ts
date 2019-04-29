import { Component, OnInit } from '@angular/core';
import { IProduct } from 'app/shared/model/product.model';
import { ProductService } from 'app/entities/product';
import { JhiAlertService } from 'ng-jhipster';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'jhi-product-catalog',
    templateUrl: './product-catalog.component.html',
    styleUrls: ['./product-catalog.scss']
})
export class ProductCatalogComponent implements OnInit {
    products: IProduct[];
    constructor(private productService: ProductService, private jhiAlertService: JhiAlertService) {}
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

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
