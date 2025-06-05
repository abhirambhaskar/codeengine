# Reon Programming Language

Reon (`.ro`) is an experimental layer on top of TypeScript. It offers a compact syntax for defining components, functions and printing values. The `reon` compiler converts `.ro` files to TypeScript so they can be compiled with existing tooling.

## Syntax Overview

### Components
Use `component` to declare a class-like component.

```ro
component Greeter {
  // members...
}
```

Compiles to:

```ts
class Greeter {
}
```

### Functions
Define functions using the `fun` keyword followed by `=>` and an opening brace.

```ro
fun hello(name) => {
  print("Hello, " + name);
}
```

Compiles to:

```ts
hello(name) {
  console.log("Hello, " + name);
}
```

### Printing
Use `print(expr)` to send output to the console. It compiles to `console.log`.

```ro
print("debug");
```

Compiles to:

```ts
console.log("debug");
```

## Getting Started

1. Install dependencies and build the compiler:

```bash
npm install
npm run build
```

2. Compile `.ro` files:

```bash
npx reon examples/hello.ro
```

This produces `examples/hello.ts` which can be processed by `tsc` or Node.js.

## Status

Reon is highly experimental and only demonstrates a minimal set of features built over TypeScript. Feel free to extend the compiler with additional syntax rules.
