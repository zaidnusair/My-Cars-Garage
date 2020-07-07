"use strict";
var carArr = [];

var country = [Germany, korea, Japan, France, USA];
function addNewCar(name, model, price, origin) {
  this.name = name;
  this.model = model;
  this.price = price;
  this.origin = origin;
  carArr.push(this);
}

function selectCarList() {
  var carOrigins = document.getElementById("carOrigin");
  console.log(carOrigins);

  for (var i = 0; i < country.length; i++) {
    var origins = document.createElement("option");
    Option.value = country[i];
    Option.text = country[i];
    carOrigins.appendChild(origins);
  }
}

function generateRandomPrice() {
  var random = Math.floor(Math.random() * 100000 + 7000);
  return random;
}

function cartable() {
  var table = document.getElementById("carsTable");

  for (var i = 0; i < carArr.length; i++) {
    var TR = document.createElement("tr");
    table.appendChild(TR);

    var TD1 = document.createElement("td");
    TD1.textContent = car.name[i];
    TR.appendChild(TD1);

    var TD2 = document.createElement("td");
    TD2.textContent = car.model[i];
    TR.appendChild(TD2);

    var TD3 = document.createElement("td");
    TD3.textContent = car.price[i];
    TR.appendChild(TD3);

    var TD4 = document.createElement("td");
    TD4.textContent = car.origin[i];
    TR.appendChild(TD4);
  }
}
