import {action, computed, observable} from "mobx";

class CartStore{
  @observable items=[]
  constructor(rootStore) {
    this.rootStore=rootStore
  }
  @action addItem(product){
    this.items.push(product)
  }

  @computed showAllCart(){
    return this.items
  }
}
export default CartStore
