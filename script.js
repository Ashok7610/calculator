   console.log("ram ram ji");
   let string = "";
   let  buttons = document.querySelectorAll('.button');
   Array.from(buttons).forEach((btn)=>btn.addEventListener('click',()=>{this
       this.style.color = "blue";
   }))
   Array.from(buttons).forEach((all) => {
    all.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.getElementById('screen').value = string;
        }
        else if(e.target.innerHTML == "c"){
            string = "" ;
            document.getElementById('screen').value = string;
        }

        else{
       console.log(e.target);
       string = string + e.target.innerHTML;
       document.getElementById('screen').value = string;}
     })
   }
  
   );
     