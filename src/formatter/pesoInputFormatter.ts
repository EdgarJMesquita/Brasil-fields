import { obterReal } from '../utilBrasilFields/obterReal';
import { handleInputValue } from './utils/handleInputValue';

export function pesoInputFormatter(callback: (value: string) => void) {
  return (value: any) => {
    try {
      const handledValue = handleInputValue(value);
      callback(obterReal(handledValue, { moeda: false, decimal: 3 }));
    } catch (error) {
      console.warn(error);
      callback(value);
    }
  };
}
