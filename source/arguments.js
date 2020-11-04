function foo(name, age, sex) {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments.callee);
}

foo.a = "111";

foo("stone", 18, "man");
