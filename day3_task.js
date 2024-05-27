// 1. How to compare two JSON have same properties without order?
//         a. let obj = {name:"person 1", age:5};
//         b .let obj = {age:5, name:"person 1"};


let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };


let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);
console.log(str1);

if (str1 === str2) {                  // Compare strings
  console.log("Objects are equal.");
} else {
  console.log("Objects are not equal.");
}

// --------------------------------------------------



// 2. Use the Rest countries API URL ("https://restcountries.com/v3.1/all") and display all the country flags on the console.

const url = "https://restcountries.com/v3.1/all";

var http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {

        var restCountries = JSON.parse(this.responseText)
         console.log (restCountries);

           restCountries.forEach(function(f){
            console.log (f.flags.png);
    });
    
    } else {
      console.log("error loading server");
    }

};  
    
http.open("GET", url);

http.send();

// --------------------------------------------------



// 3. use the url "https://restcountries.com/v3.1/all" and print all countries names, region, su-region and population.

// const url = "https://restcountries.com/v3.1/all";

var http = new XMLHttpRequest();
http.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {

        var restCountries = JSON.parse(this.responseText)
         console.log (restCountries);

           restCountries.forEach(function(data){
            // console.log (data.flags.png);

      console.log("Country: ", data.name.common);
      console.log("Region: ", data.region);
      console.log("Sub-region: ", data.subregion);
      console.log("Population: ", data.population);
      console.log('-------------------------');

    });
    
    } else {
      console.log("error loading server");
    }

};  
    
http.open("GET", url);

http.send();
