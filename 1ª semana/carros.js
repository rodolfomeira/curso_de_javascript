 

// código JavaScript
 var auto=[];
 r= prompt("Digite a quantidade de carro que deseja cadastrar:");
 for(c=0;c<=r;c++)
 {
	 
	 auto[c]=prompt("Digite o "+ (c+1) +"º Carro:");
	 
 }

  for(k=0;k<=r;k++)
 {
	 
	 document.write(" Carro nº"+(k+1)+" = " + auto[k] + "</br>");
	 
 }
 