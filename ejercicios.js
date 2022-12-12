/* EJERCICIO # 1*/
function numDuplicados(str){
   let newObj = {};
   let count = 0;

   for(let i = 0; i < str.length; i++){
      let letra = str[i];
         if(newObj[letra]){
            newObj[letra]++;
         }
         else{
            newObj[letra] = 1;
         }
   }
   for(let valor in newObj){
      if(newObj[valor] > 1){
         count += 1;
      }
   }
   return count;   
}
console.log(numDuplicados('hola'))
console.log(numDuplicados("abab"))
//================================================================================================================

/* EJERCICIO # 2*/
function frecuencias(str){
   str = str.replaceAll(" ","");
   let newObj = {};

   for(let i = 0; i < str.length; i++){
      let letra = str[i];
         if(newObj[letra]){
            newObj[letra]++;
         }
         else{
            newObj[letra] = 1;
         }
   }
   return newObj;
}
console.log(frecuencias('hola mundo'))

//===================================================================================================================
/** EJERCICIO # 3*/
function caracteresEnComun(str1,str2){
   let enComun = [];
   for(let i = 0; i < str1.length; i++){
      for(let j = 0; j < str2.length; j++){
         if(str1[i] === str2[j] && ! enComun.includes(str1[i])){
            enComun.push(str1[i])
      }      
   }
   } 
   return enComun;
}

console.log( caracteresEnComun("Hola", "Mundo")); // ["o"]
console.log( caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
console.log( caracteresEnComun("Hola", "Bye")); // []
// ========================================================================================================
/** EJERCICIO # 4 */
function ajustarTexto(str,num){
   let newArr = str.slice(0,num);
   
   return `"${newArr}"`
}

console.log(ajustarTexto("", 3)) // " " 
console.log(ajustarTexto("hola", 2)) // "ho" 
console.log(ajustarTexto("Hola", 0)) // "" 
console.log(ajustarTexto("Hola", 5)) // "Hola "