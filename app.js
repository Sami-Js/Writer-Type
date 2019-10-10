
let span = document.querySelector('span'),
    words = ['Developer' , 'Designer' , 'in My Website '],
    timer,
    current = 0,
    currentWord = 0 ,
    value = true,
    word,
    finish; // condtion finish to write 


    function writer() {

        if(finish) return ;
        chooseWord(); 

        value ? increment() : decrement() ;   

        if(current === word.length) value = false ;

        if(current < 0 ){
         value = true ; 
         currentWord++ ;
         }

         condtionFinish();
         
      
         setTimeout(writer , timer);
        
    }

    
    // function condtion increment letter and setTime and decrement 

    function increment() {
        current++;
        timer = 400 ;
    }


    function decrement() {
        current--;
        timer = 200 ;
    }


    // choose word 

    function chooseWord() {
        word = words[currentWord];
        span.innerHTML = word.substring(0,current);
    }

  

    // when to finish in the write 

    function condtionFinish() {
        
        if ( currentWord ===  words.length - 1 && current === word.length ){
            finish = true ;
            span.style.borderRight = 'none';
        }
    }

    writer();
    

    
   



     
    













  /*  function cons() {
        console.log('you are doing great work');
    }
*/
     
