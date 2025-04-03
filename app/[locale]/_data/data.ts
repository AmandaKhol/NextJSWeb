enum FOOD_STATE {
  SOLD = "sold",
  AVAILABLE = "available",
}

export enum FOOD_CATEGORIES {
  VEGAN = "vegan",
  VEGETARIAN = "vegetarian",
}

export enum ALERGIES {
  PEANUTS = "peanuts",
  SOY = "soy",
  GLUTEN = "gluten",
}

export type FoodData = {
  id: number;
  name: string;
  link: string;
  categories: Array<FOOD_CATEGORIES>;
  alergies: ALERGIES[];
  state?: FOOD_STATE;
};

export const foodData: FoodData[] = [
  {
    id: 0,
    name: "salad",
    state: FOOD_STATE.SOLD,
    link: "/vegan/salad.jpg",
    categories: [FOOD_CATEGORIES.VEGAN],
    alergies: [ALERGIES.PEANUTS],
  },
  {
    id: 1,
    name: "sandwich with cheese",
    state: FOOD_STATE.SOLD,
    link: "/vegetarian/sandwich_with_cheese.jpg",
    categories: [FOOD_CATEGORIES.VEGETARIAN],
    alergies: [ALERGIES.SOY, ALERGIES.GLUTEN],
  },
];
