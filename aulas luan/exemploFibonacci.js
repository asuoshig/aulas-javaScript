let a = 0, b = 1, temp;
while(a < 100){
    console.log(a);
    temp = a;
    a = b;
    b = temp + b;
}