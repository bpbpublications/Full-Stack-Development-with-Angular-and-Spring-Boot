function fetchAllProducts(){
    for(let i=0;i<415620;i++)
    {
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
        
        //console.log("order"+i)
 }
function captureReview(){
  console.log(document.getElementById('review').value);
}

function main(){
 let time = setTimeout(()=>fetchAllProducts(),3000);
//captureReview();
//showOrderHistory();

}