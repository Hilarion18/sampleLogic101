class Flap {
  // some stuff
}
class Wing extends Flap {
  // some stuff
}
class Aircraft extends Wing {
  // some stuff
}

console.log(Flap)
console.log(Wing)
console.log(Aircraft)

// If you want to extends with existing class, 
// make sure the root class that want to extend is on the top, 
// because we don't know which to extend if it's not declare first