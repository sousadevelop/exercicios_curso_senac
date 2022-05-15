/*var impar = 100;

while (impar < 200) {
    document.write((impar % 2) != 0);
    document.write("<br>");
}

document.write("Os números impares entre 100 a 200 são :" + "<br>" + impar);*/

document.write("Os números impares são " + "<br>");

for(var i = 100; i < 201; i++) {
    if ((i % 2) != 0){
        
        document.write(i);
        document.write("<br>");
    }
}