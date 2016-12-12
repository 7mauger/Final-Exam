class Cart{
  //What is the first part of every class? Type it below.
constructor(itemList,quantityList){
  this.itemList = [];
  this.quantityList = [];
}
  //Type the instance functions below this comment.
addItem(i,q){
  let i = this.itemList.push(i);
  let q = this.quantityList.push(q);
}

totalCart(){
  let total = 0;
  for(var c=0;c < this.itemlist[].length;c++){
    total =  total+this.itemList[c]*this.quantityList[c];
  }
  return total;
}

subCart(days){
  let subCart = new Cart()
}
}
