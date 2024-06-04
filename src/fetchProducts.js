import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl, {
    mode: "cors",
  });
  if (!response.ok) {
    throw new Error("Response is not okay");
  }
  if (response) {
    return response.json();
  }
  return response;
};

export default fetchProducts;
