// creo una variabile dove voglio salvare i numeri
randomNumberIndex=[]

//   seleziono il l'elemento della DOM dove voglio inserire i numeri
let divSelector = document.querySelector(".numeri_visibili")
console.log(divSelector)

//    creo un Array di numeri casuali generati dalla funzione che inserirò nell'HTML
 while(randomNumberIndex.length !==5){
   const number = Math.floor(Math.random()*100)
  if (!randomNumberIndex.includes(number)){
  randomNumberIndex.push(number)
   console.log(randomNumberIndex)
  }
 }

// mostro i numeri nella DOM
divSelector.innerHTML = `Memorizza questi numeri: ${randomNumberIndex}`

// nascondo i numeri che sono visibili
    setTimeout(function hideNumbers(){ 
      // rimuovo dalla DOM  i numeri mostrati

      divSelector.innerHTML = ""
    }, 29000);


    // Dopo 30 secondi compare il promt e l'utente deve inserire i numeri che ha visto

    setTimeout(function insertNumbers(){ 
      
       // creo una variabile dei numeri scritti dall'utente
       const listUserNumber = []; 

      for (let i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt('Inserisci uno dei numeri che ha i visto prima'))
        console.log(userNumber);
        if (randomNumberIndex.includes(userNumber) && !listUserNumber.includes(userNumber)) {
          listUserNumber.push(userNumber)
        }
      }

      console.log(listUserNumber);
 // risultato
  alert(`Hai indovinato ${listUserNumber.length} numeri su ${randomNumberIndex.length
  } - I numeri indovinati sono: ${listUserNumber}`)

    }, 30000);
    
  
  



     

     

      
   
    