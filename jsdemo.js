    function add(a,b)
    {
        
        return a+b;
    }

    function subtract(a,b)
    {
        return a-b;
    }

    function calculator(addition,subtraction)
    {
      
        function calculate(operation,number1,number2)
        {
              var operation=calculate.arguments[0];
              var number1=calculate.arguments[1];
              var number2=calculate.arguments[2];
              var operations=[{key:"add",value:addition(number1,number2)},{key:"subtract",value:subtract(number1,number2)}];
            for(var i=0;i<operations.length;i++)
            {
                if(operations[i].key==operation)
                    return operations[i].value;
            }
        }
        return calculate;

    }
    function main()
    {
        var func=calculator(add,subtract);
        console.log(func("add",1,2));
        // var traineeOne=new Trainee("Subham","123abc");
        // console.log(traineeOne.getName());
        // document.getElementById('divBody').style.background = '#000';
    }
    // function Trainee (name , id) {
    //     this.traineeName=name;
    //     this.traineeId=id;
    //     this.getName = function(){
    //         return this.traineeId + " " + this.traineeName;
    //     }
    // }
    main();