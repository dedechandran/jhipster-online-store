import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'app/entities/product';
import { ProductCatalogComponent } from './product-catalog.component';
import { MatCardModule, MatButtonModule, MatGridListModule } from '@angular/material';

@NgModule({
    declarations: [ProductCatalogComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatGridListModule],
    providers: [ProductService]
})
export class ProductCatalogModule {}
