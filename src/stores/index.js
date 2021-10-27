import CartStore from './cart'
import ProductStore from './product'
class RootStore{
  constructor() {
    this.cartStore=new CartStore(this)
    this.productStore=new ProductStore(this)

  }
}
export default RootStore
