#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

function compile(content: string): string {
  let output = content;
  // component -> class
  output = output.replace(/component\s+([A-Za-z0-9_]+)\s*\{/g, 'class $1 {');
  // fun name(args) => {  -> name(args) {
  output = output.replace(/^(\s*)fun\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)\s*=>\s*\{/gm, '$1$2($3) {');
  // print(expr) -> console.log(expr)
  output = output.replace(/print\s*\(([^)]*)\);?/g, 'console.log($1);');
  return output;
}

const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Usage: reon <file.ro>');
  process.exit(1);
}

const absIn = resolve(process.cwd(), inputPath);
const input = readFileSync(absIn, 'utf-8');
const compiled = compile(input);
const outPath = absIn.replace(/\.ro$/, '.ts');
writeFileSync(outPath, compiled, 'utf-8');
console.log(`Compiled ${inputPath} -> ${outPath}`);
