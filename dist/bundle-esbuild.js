(() => {
  // a.js
  var A = class {
    a() {
      console.log("__A__");
    }
  };

  // dep.js
  var B = class extends C {
    b() {
      console.log("__B__");
    }
  };
  var dep_default = B;
  console.log("__D__");

  // index.js
  console.log(A);
})();
