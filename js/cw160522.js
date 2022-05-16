// Jenny has written a function that returns a greeting for a user `Hello, ${name}!`. 
// However, she's in love with Johnny, and would like to greet him slightly different 'Hello, my love!'.

function greet(name){
  if(name === 'Johnny'){
    return 'Hello, my love!'
  } else {
    return `Hello, ${name}!`
  }  
}