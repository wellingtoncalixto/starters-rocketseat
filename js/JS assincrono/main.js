// Aula 1
// var xhr = new XMLHttpRequest();

// xhr.open("GET", "http://api.github.com/users/wellingtoncalixto");
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// };

// Aula 2

// var promisse = function() {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://api.github.com/users/wellingtoncalixto");
//     xhr.send(null);

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if(xhr.status === 200){
//           resolve(JSON.parse(xhr.responseText));
//         }else{
//           reject('erro na requisiçao')
//         }
//       }
//     };
//   });
// };

// promisse()
//   .then(function(response){
//     console.log(response)
//   })
//   .catch(function(error){
//     console.log(error)
//   })

// Aula 3

// axios.ger('http://api.github.com/users/wellingtoncalixto')
//   .then(function(response){
//     console.log(response)
//   })
//   .catch(function(error){
//     console.log(error)
//   })