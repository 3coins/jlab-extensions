import { Token } from '@lumino/coreutils';


 export const IPrebuiltA = new Token<IPrebuiltA>(
    'prebuilt-extension-a:IPrebuiltA'
  );


  export interface IPrebuiltA {
      propertyA: string
  }