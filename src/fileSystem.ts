import { writeFile, readFile } from "node:fs/promises";

try {
    const writeResult = await writeFile('../public/example.txt', 'sometext...');
    const readResult = await readFile('../public/example.txt', 'utf-8');

    console.log(readResult)
} catch (e) {
    console.log(e);
}