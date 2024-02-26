import { transformLink } from "../../util/path"
console.log("WORKING 2");

(window as any).transformLink = transformLink;

console.log("WORKING 3");