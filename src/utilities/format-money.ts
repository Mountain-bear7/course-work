export const formatMoney = (price: number) => new Intl.NumberFormat(undefined,{
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
}).format(price)