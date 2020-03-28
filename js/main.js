const getRate = document.querySelector('.rate');
const annually = document.querySelectorAll(".annually")
const monthly = document.querySelectorAll(".monthly")

getRate.addEventListener('click', function(){
    console.log(getRate.checked);
    if(getRate.checked){
        console.log("Pricing is monthly");
        for(let i = 0; i < 3; i++){
            console.log(annually[i].classList.add("hide-me"))
            console.log(monthly[i].classList.remove("hide-me"))
        }
  
    }
    else{
        console.log("Pricing is yearly",annually);
      for(let i = 0; i < 3; i++){
          console.log(annually[i].classList.remove("hide-me"))
          console.log(monthly[i].classList.add("hide-me"))
      }
    }

})

