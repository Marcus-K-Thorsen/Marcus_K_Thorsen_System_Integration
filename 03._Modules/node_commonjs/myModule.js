class ClassA {
    constructor() {
        console.log("Class A initialized");
    }
}

class ClassB {
    constructor() {
        console.log("Class B initialized");
    }
}

module.exports = ClassA;
module.exports.ClassB = ClassB;

// Export multiple classes
// module.exports = { ClassA, ClassB };