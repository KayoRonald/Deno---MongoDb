import db from '../database/db.ts'
import { ProductSchema } from '../models/product.ts'

class ProductRepository {
  private productCollection = db.collection("product");
  // Retorna todos os produtos
  async getAll(){
    const users = await this.productCollection.find();  
    return users;
  }
  // Retorna um produto pelo seu ID
  async getById(id: string){
    const user = await this.productCollection.findOne({ _id: id });
    return user;
  }
  // Cria um novo produto
  async create(product: ProductSchema){
    const user = await this.productCollection.insert(product)
  }
  // Atualiza um produto existente
  async update(id: string, product: ProductSchema){
    const result = await this.productCollection.update({ _id: id }, product);
    return result;
  }
  // Deletar um produto pelo id
  async delete(id: string){
    const result = await this.productCollection.remove({ _id: id });
    return result;
  }
}