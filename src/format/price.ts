import { currencySign, placeholder } from './constants';

function formatPrice(price: number, addCurrencySign: boolean = false): string {
  if (!price) {
    return placeholder;
  }
  const priceRegExp: RegExp = /\B(?=(\d{3})+(?!\d))/g;
  const formattedPrice: string = price.toString().replace(priceRegExp, ' ');
  return addCurrencySign ? `${formattedPrice} ${currencySign}` : formattedPrice;
}

function formatPriceRange(priceMin: number, priceMax: number): string {
  return `${formatPrice(priceMin)} - ${formatPrice(priceMax)} ${currencySign}`;
}

export { formatPrice, formatPriceRange };
