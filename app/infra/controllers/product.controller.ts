import { ProductRepository } from './repositories/product.ts';

export class ProductController {
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }
  
  async getAll(): Promise<ProductSchema[]> {
    const users = await this.productRepository.getAll();
    if (users.length === 0) {
      throw new Error('No users found');
    }
    return users;
  }
  
  async getById(id: string): Promise<void]> {
    const user = await this.productRepository.getById(id);
    if (users.length === 0) {
      throw new Error('No users found');
    }
    return users;
  }
  
  async create(product: ProductSchema) {
    // Check if there is a user if no error has occurred
    const user = await this.productRepository.getById(product.id);
    if (user === null) {
      throw new Error('User not found');
    }
    return users;
    // Check if the user is already in the database
    // if (user.products.length > 0) {
    //   throw new Error('User already in database');
    // }
    
  }
  
  async update(id: string, product: ProductSchema) {
    
  }
  
  async delete(id: string) {
    //  deleted
    

  }
}