(() => {
  // a.js
  var A = class {
    a() {
      console.log("__A__");
    }
  };

  // dep.js
  console.log("__D__");

  // index.js
  console.log(A);
})();
