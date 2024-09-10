function fetchAllProducts(){
    for(let i=0;i<315620;i++)    {
        console.log("product"+i)
    }    
    console.log("finished");
}
function showOrderHistory(){
    let str ='';
    for(let i=0; i<10;i++){
          str=str+'Order'+i+'<br>'
    }
    document.getElementById('d1').innerHTML=str;  
       
 }
function captureReview(){
  let review = document.getElementById('review').value;
  document.getElementById("showReview").innerHTML=review;
}
function fetchProductsAsychronously(){
        setTimeout(()=>fetchAllProducts(),3000); 
          
}

