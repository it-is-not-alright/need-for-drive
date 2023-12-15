import { currencySign, placeholder } from './constants';

function toCurrencyString(
  price: number,
  addCurrencySign: boolean = false,
): string {
  if (!price) {
    return placeholder;
  }
  const priceRegExp: RegExp = /\B(?=(\d{3})+(?!\d))/g;
  const formattedPrice: string = price.toString().replace(priceRegExp, ' ');
  return addCurrencySign ? `${formattedPrice} ${currencySign}` : formattedPrice;
}

export { toCurrencyString };
