import {action, observable} from "mobx";

class ProductStore{
  
  @observable all=[
    {id:1,name:'商品1',cost:1000,img:img1},
    {id:2,name:'商品2',cost:600,img:img2},
    {id:3,name:'商品3',cost:1400,img:img3},
    {id:4,name:'商品4',cost:350,img:img4},
    {id:5,name:'商品5',cost:500,img:img5},
  ]
  constructor(rootStore) {
    this.rootStore=rootStore
  }
  @action.bound getAllProducts(){
    this.all.getAllProducts((products)=>{
      this.setAll(products)
    })
  }

  @action.bound setAll (products){
    this.all=products
  }

}
export default ProductStore
