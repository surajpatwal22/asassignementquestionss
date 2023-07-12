In JavaScript, the super keyword is used to call methods or access properties on the parent class within a subclass. It is specifically used within the constructor or methods of a subclass to refer to the parent class and invoke its constructor or methods.

The super keyword has two main purposes:

Accessing the Parent Class Constructor: When defining a subclass, the super keyword is used in the constructor to call the constructor of the parent class. This ensures that the parent class's initialization logic is executed before the subclass's own initialization. It allows the subclass to inherit and set up the properties defined in the parent class.

Accessing Parent Class Methods: The super keyword can also be used to call methods defined in the parent class from within a method of the subclass. It allows the subclass to inherit and extend the behavior defined in the parent class.