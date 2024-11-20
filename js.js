var a = 18
var b = 41
var c = "/"
switch(c){
    case "+":
        document.write("Addition: ", a+b)
    break;
    case "-":
        document.write("Subtraction: ", a-b)
    break;
    case "*":
        document.write("Multiplication: ", a*b)
    break;
    case "/":
        document.write("Division: ", a/b)
    break;
    default:
        document.write("Invalid Operator!")
}