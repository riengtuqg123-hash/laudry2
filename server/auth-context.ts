import {AsyncLocalStorage} from 'node:async_hooks';
export type User={userId:string,email:string,displayName:string,mustChange:boolean};
export const userContext=new AsyncLocalStorage<User|null>();
export async function getChatGPTUser(){return userContext.getStore()||null;}
