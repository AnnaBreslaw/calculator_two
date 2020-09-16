let result;
let num1 = ''
let num2 = ''
let operator = ''


    function add(num1, num2){
        result = (num1 + num2)
        return result;
    }

    function subtract(num1, num2){
        result = (num1 - num2)
        return result;
    }
   

    function multiply(num1, num2){
        result = (num1 * num2)
        return result;
    }
  

    function divide(num1, num2){
        result = (num1/num2)
        return result;
    }

    function operate(num1, num2, operator){
        switch(operator){
            case 'add':
                return add(num1, num2)
            case 'subtract':
                return subtract(num1, num2)
            default:
                return 'error'
        }
    }

    console.log(operate(3,3,'subtract'))


    //TD = operators. TH = numbers.

    let calcButtons = document.getElementById('calc-input')

    let calcOutput = document.getElementById('calc-output')
    

    calcButtons.addEventListener('click', function (event) {
        // console.log(event.target.innerHTML)
        // console.log(event)
        if(event.target.localName === 'th'){
            
            //if no operator, store in num1, else:
           if(!operator){
                if(!num1){
                    num1 = event.target.innerHTML
                } else {
                    num1 = (num1 + event.target.innerHTML)
                }
           }
           else{
               if(!num2){
                   num2 = event.target.innerHTML
               } else {
                   num2 = (num2 + event.target.innerHTML)
               }
           }
        } 
        if(event.target.localName === 'td'){
            operator = event.target.innerHTML
        }

         calcOutput.innerHTML = num1 + operator + num2;
    })
    