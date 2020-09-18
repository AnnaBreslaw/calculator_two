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
            case '+':
                return add(num1, num2)
            case '-':
                return subtract(num1, num2)
            case 'x':
                return multiply(num1, num2)
            case '/':
                return divide(num1, num2)
            default:
                return 'error'
        }
    }

    // console.log(operate(3,3,'-'))


    //TD = operators. TH = numbers.

    let calcButtons = document.getElementById('calc-input')

    let calcOutput = document.getElementById('calc-output')
    

    calcButtons.addEventListener('click', function (event) {
        // console.log(event.target.innerHTML)
        // console.log(event)
        if(event.target.localName === 'th'){
            
          //if no operator, start building num 1
           if(!operator){
            
                //if no num1, set event target as first digit of num1
                if(!num1){
                    num1 = event.target.innerHTML
                } else {

                    //if num1 exists, set second digit after first digit
                    num1 = (num1 + event.target.innerHTML)
                }
           }
           else{
         //if there IS an operator, start num2
               if(!num2){
                   //if no num2, set event target as first digit of num2
                   num2 = event.target.innerHTML
               } else {
                   //if num2 exists, set second digit after first digit
                   num2 = (num2 + event.target.innerHTML)
               }
           }
        } 
        if(event.target.localName === 'td'){
           

            if(event.target.innerHTML === 'C'){
                num1 = '';
                num2 = '';
                operator = '';
            }

            else if(event.target.innerHTML === '='){
                if(num2 !== '0'){
                    num1 = operate(Number(num1), Number(num2), operator)
                    num2 = ''
                    operator = ''
                }
                else {
                    window.alert("Stop playing yourself.")
                }
            }
            else{
                if(!num2){
                    operator = event.target.innerHTML
                 
                    }
                else {
                    if(num2 !== '0'){
                        num1 = operate(Number(num1), Number(num2), operator)
                        operator = event.target.innerHTML
                        num2 = ''
                    }
                    else {
                        window.alert('Stop playing yourself.')
                    }
                }
            }
        }
        calcOutput.innerHTML = num1 + operator + num2;
             
    })
    