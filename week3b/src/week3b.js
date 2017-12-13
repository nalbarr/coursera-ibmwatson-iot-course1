// <factory method>
// ? -> screen:Array
function createScreen() {
    var screen = new Array(8);
    for (var i = 0; i < 8; i++) {
        screen[i] = new Array(8);
    }    
    return screen;
};

// color:string -> cmd: string
function createScreenCommand(color) {
    var cmd = ""
    for (var r = 0; r < 8; r++) {
        for (var c = 0; c < 8; c++) {
            cmd += r + "," + c + "," + color + "\n";
        }
    }
    return cmd;
};

function createScreenBlankCommand() {
    return createScreenCommand("black");
}

function createScreenOnCommand() {
    return createScreenCommand("maroon");
}

function createScreenOffCommand() {
    return createScreenCommand("green");
}

function parseTemp(tempAsString) {
    var temp = parseFloat(tempAsString) | 0;
    return temp
}

function parseTens(temp) {
    return (temp - parseUnits(temp) ) / 10;
}

function parseUnits(temp) {
    return temp % 10;
}

var grid = [[]];
for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
        grid[x,y] = x + "," + y + "," + "black" + "\n";
    }
}

var tensModel = {
    0: "5,2,black\n",
    1: "5,1,black\n",
    2: "4,2,black\n",
    3: "4,1,black\n",
    4: "3,2,black\n",
    5: "3,1,black\n",
    6: "2,2,black\n",
    7: "2,1,black\n",
    8: "1,2,black\n",
    9: "1,1,black\n"
};

var unitsModel = {
    0: "5,6,black\n",
    1: "5,5,black\n",
    2: "4,6,black\n",
    3: "4,5,black\n",
    4: "3,6,black\n",
    5: "3,5,black\n",
    6: "2,6,black\n",
    7: "2,5,black\n",
    8: "1,6,black\n",
    9: "1,5,black\n"
};

function updateModel(model, value) {
    for (var i = 0; i < value; i++) {
        model[i] = model[i].replace("black", "silver");
    }
    return model;
}

function dumpModel(model, value) {
    for (var i = 0; i < value; i++) {
        console.log("model[" + i + "]:" + model[i]);
    }
    return model;
}

var cmd = createScreenBlankCommand();
console.log("cmd:" + cmd);

var cmd = createScreenOnCommand();
console.log("cmd:" + cmd);

var cmd = createScreenOffCommand();
console.log("cmd:" + cmd);

var i = parseTemp("28.9");
console.log ("i:" + i);
console.log ("parseTens(i):" + parseTens(i));
console.log ("parseUnits(i):" + parseUnits(i));

var tens = parseTens(i);
var units = parseUnits(i);
var tensModel = updateModel(tensModel, tens);
console.log("dumpModel(tensModel): " + dumpModel(tensModel, tens));
var unitsModel = updateModel(unitsModel, units);
console.log("dumpModel(unitsModel): " + dumpModel(unitsModel, units));

// ES6 classes
/*
a = {"a": 1, "b": 2};
b = {"a": 1, "b": 3};
c = {"name": "C", "values": {"a": 1, "b": 2} }
*/

/*
fails due to ES6 strict mode, etc.?
https://www.npmjs.com/package/strict-mode
class A {
    constructor(name, values) {
        this.name = name;
        this.values = values;
    }
    toString() {
        return `(${this.name}, ${this.values})`;
    }
}

class B extends A {
    constructor(name, values) {
        super("B", values);
    }
}

class C extends A {
    constructor(name, values) {
        super("C, values");
    }    
}

const a = new A({"x": 1, "y": 2});
console.log(a.toString);
const b = new B({"x": 1, "y": 3});
console.log(a.toString);
*/

var json1 = {
    "k1": {
        "k11": [
            "v1",
            "v2",
            "v3"
        ]
    },
    "k2": {
        "k21": [
            "v4",
            "v5",
            "v6"
        ]
    }
};

var o = JSON.parse(json1);

console.log(JSON.stringify(o));