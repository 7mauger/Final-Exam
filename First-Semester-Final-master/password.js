class Password{
  //The first part of the class.
  constructor(pb,pv){
    this.publickey = pb;
    this.privatekey = pv;
  }
  //Instance functions below this comment.
validPublicKey(){
  while(this.publickey.length > 8 && this.publickey.length < 25){
    return true;
  }
  else{
    return false;
  }
}
  //Static function below this comment.
  static makePrivateKey(){
    let key = "";
    let limit = 14;
    while(var x=0;x<limit;x++){
      if(x==4 || x==9){
        key += "-"
      }
      else{
        var number = Math.random()*10;
        number = Math.floor(number);
        key += number
      }
    }
    return key;
  }
}
