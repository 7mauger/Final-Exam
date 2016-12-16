class Cart{
  //What is the first part of every class? Type it below.
constructor(i,q){
  this.itemList = itemList;
  this.quantityList = quantityList;
}
  //Type the instance functions below this comment.
addItem(i,q){
  let i = this.itemList.push(i);
  let q = this.quantityList.push(q);
}

totalCart(){
  let total = 0;
  for(var c=0;c < this.itemList.length;c++){
    total =  total+this.itemList[c].price*this.quantityList[c];
  }
  return total;
}

subCart(days){
  let subCart = new Cart();
  for(var a=0;a < this.itemList.length;a++){
    if(this.itemList[a].shipping == days){
      subCart.itemList.push(this.itemList[a]);
      subCart.quantityList.push(this.quantityList[a]);
    }
  }
  return subCart;
}
}
