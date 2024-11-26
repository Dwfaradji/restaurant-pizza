import { StaticImageData } from 'next/image';

type Nutrition = {
  calories: number;
  fat: string;
  carbohydrates: string;
  protein: string;
};

type PizzaOptions = {
  crust: string[];
  extraToppings: string[];
};

export type Pizza = {
  id: number;
  slug: string;
  title: string;
  price: { grande: number; petite: number };
  image: StaticImageData;
  description: string;
  rating: number;
  base: string;
  ingredients: string;
  dimensions: string;
  review: string;
  nutrition: Nutrition;
  options: PizzaOptions;
  selectedSize?: 'grande' | 'petite'; // Restreindre les tailles possibles
};
