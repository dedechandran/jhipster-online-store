import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'app/entities/product';
import { ProductCatalogComponent } from './product-catalog.component';

@NgModule({
    declarations: [ProductCatalogComponent],
    imports: [CommonModule],
    providers: [ProductService]
})
export class ProductCatalogModule {}
