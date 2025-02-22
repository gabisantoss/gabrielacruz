// Refactoring example: Renaming a method in C#

public class Calculator {

    public int Add(int a, int b) {

        return a + b;

    }

}

// After refactoring `Add` to `Sum`, all references are automatically updated.

public class Calculator {

    public int Sum(int a, int b) {

        return a + b;

    }

}