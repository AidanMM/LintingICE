vehicle = {
  distance: 0,
  move: function(speed) {this.distance += speed}
}

Radio = {
  playMusic: function() {}
}

Engine = {
  regenerativelyBrake() {}
}

Car = Object.create(vehicle)

Object.assign( Car, {
  create: function(){
    var car = Object.create(this)
    return car
  },
  doors: 4,
  radio: Radio
})

Airplane = Object.create(vehicle)

Object.assign(Airplane, {
  doors: 1,
  create: function(){
    var airplane = Object.create(this)
    return airplane
  },
  eject: function(){}
})

Prius = Object.create(Car)

Object.assign(Prius, {
  hybridEngine: Engine
})

myPrius = Prius.create()
myPrius.move(30)
myPrius.move = function(){}