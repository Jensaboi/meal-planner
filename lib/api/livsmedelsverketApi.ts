/* 
 Search endpoint:
 https://soknaringsinnehall.livsmedelsverket.se/Home/HamtaLivsmedelTillAutoComplete?sokOrd=sm%C3%B6r&soktyp=1
 -sokOrd = kyckling etc.
 -soktyp: 1 = livsmedel, 2 = näringsämnen.
*/

const BASE_URL =
  "https://dataportal.livsmedelsverket.se/livsmedel/api/v1/livsmedel/";

const SEARCH_ENDPOINT =
  "https://soknaringsinnehall.livsmedelsverket.se/Home/HamtaLivsmedelTillAutoComplete?soktyp=1&sokOrd=";

export async function searchFoods(query: string) {
  try {
    const res = await fetch(SEARCH_ENDPOINT + query);

    if (!res.ok) {
      throw new Error(`Failed to load results for: ${query}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getFoods(offset: string) {
  try {
    const res = await fetch(`${BASE_URL}${offset ? `?offset=${offset}` : ""}`);

    if (!res.ok) {
      throw new Error(`Failed to load food list.`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getFoodNutrients(foodNumber: number) {
  try {
    const res = await fetch(`${BASE_URL}/${foodNumber}/naringsvarden?sprak=1`);

    if (!res.ok) {
      throw new Error(`Failed to load nutrients for food: ${foodNumber}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getFoodsListByCategoryAndQuery() {
  const res = await fetch(
    "https://soknaringsinnehall.livsmedelsverket.se/Home/FoodResult",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sokOrd: "",
        kategoriId: 25619,
        id: "0",
        arVisaAlla: false,
        soktyp: "1",
      }),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to load food list.");
  }
  const data = await res.json();
}
