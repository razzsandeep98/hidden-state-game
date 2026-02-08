import { arcium } from "../arcium/arciumClient.js";

export async function encryptMove(player){
 const move = Math.floor(Math.random()*52);
 const cipher = await arcium.encrypt({
   data: move,
   owner: player
 });
 return cipher;
}

export async function revealMove(cipher){
 return await arcium.decrypt(cipher);
}
