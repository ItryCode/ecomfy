export const formatPrice = (amount) => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
