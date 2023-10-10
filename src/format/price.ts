import { currencySign } from './constants';

function formatPrice(price: number, addCurrencySign: boolean = false): string {
  const priceRegExp: RegExp = /\B(?=(\d{3})+(?!\d))/g;
  const formattedPrice: string = price.toString().replace(priceRegExp, ' ');
  return addCurrencySign ? `${formattedPrice} ${currencySign}` : formattedPrice;
}

function formatPriceRange(priceMin: number, priceMax: number): string {
  return `${formatPrice(priceMin)} - ${formatPrice(priceMax)} ${currencySign}`;
}

export { formatPrice };
export { formatPriceRange };
