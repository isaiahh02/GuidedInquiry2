let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;

let tomBMI = tomMass / (tomHeight * tomHeight);
let jerryBMI = jerryMass / (jerryHeight * jerryHeight);

let bool;
if(tomBMI > jerryBMI) {
    bool = false;


}
else if(tomBMI < jerryBMI) {
    bool = true;

}
console.log("Is Tom's BMI higher than Jerry's? " +bool)