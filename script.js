const friends = ["Mango", "Poly", "kiwi", "Skibidi"];
// console.log(friends.join(","));

let result = "";

for (let i = 0; i < friends.length; i++) {
   
    result += friends[i];
    
  
    if (i < friends.length - 1) {
        result += ',';
    }
}


console.log(result);