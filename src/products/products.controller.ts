import { Body, Controller, Get, Head, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
   constructor(private readonly proudctsService: ProductsService) {
   }
   // use static route
   @Get('phones')
   getProducts(): string {
      return this.proudctsService.getProducts()
   }

   // use param route (dynamic param)
   @Get(':id/:name')
   getProduct(@Param() params, @Param('name') name): string {
      return `ur id : #${params.id} and ur name : ${name}`
   }


   // handle request body payload
   // handle request query paramters payload
   @Post()
   addProduct(@Body() body,
      @Body('id') id,
      @Query() query,
      @Query('product_id') product_id
   ): any {
      console.log(query, product_id)
      if (id != '1') {
         throw new NotFoundException()
      }
      return { ...body, msg: 'this is ur added data' }
   }
}
