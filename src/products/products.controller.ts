import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
   constructor(private readonly proudctsService: ProductsService) {
   }
   @Get()
   getProducts(): string {
      return this.proudctsService.getProducts()
   }
}
