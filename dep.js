import {C} from "./c.js";

export default class B extends C {
  b() {
    console.log("__B__");
  }
}

console.log("__D__");

export {A} from "./a.js";
