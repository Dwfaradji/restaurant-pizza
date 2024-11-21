import images from '../images/pexels-nano-erdozain-120534369-29039071.jpg';
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
    price: number;
    image: StaticImageData;
    description: string;
    rating: number;
    base: string;
    ingredients: string;
    dimensions: string;
    review: string;
    nutrition: Nutrition;
    options: PizzaOptions;
};


const cardTomate: Pizza[] = [
    {
        id: 1,
        slug: 'margherita',
        title: "Pizza Margherita",
        price: 10,
        image: images,
        description: "Une pizzas classique napolitaine avec une pâte fine et croustillante, garnie de mozzarella fraîche, de basilic, et d'une sauce tomate riche.",
        rating: 4.5,
        base: "Tomate",
        ingredients: "Tomate, Mozzarella, Basilic, Huile d'olive, Parmesan, Sel, Poivre",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "J'adore cette pizzas ! Elle est délicieuse, la pâte est parfaite et les ingrédients sont frais. Je la recommande vivement.",
        nutrition: {
            calories: 250,
            fat: "10g",
            carbohydrates: "30g",
            protein: "12g"
        },
        options: {
            crust: ["Fine", "Épaisse", "Farcie"],
            extraToppings: ["Champignons", "Olives", "Mozzarella supplémentaire"]
        }
    },
    {
        id: 2,
        slug: 'pepperoni',
        title: "Pizza Pepperoni",
        price: 12,
        image: images,
        description: "Une pizzas épicée garnie de pepperoni savoureux, de mozzarella, et d'une sauce tomate.",
        rating: 4.7,
        base: "Tomate",
        ingredients: "Tomate, Mozzarella, Pepperoni, Origan, Flocons de piment",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "Parfaite pour ceux qui aiment un peu de piquant ! Le pepperoni est savoureux et se marie bien avec la sauce tomate.",
        nutrition: {
            calories: 350,
            fat: "15g",
            carbohydrates: "40g",
            protein: "18g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Piment", "Mozzarella supplémentaire"]
        }
    },
    {
        id: 3,
        slug: 'veggieSupreme',
        title: "Pizza Veggie Suprême",
        price: 11,
        image: images,
        description: "Une pizzas pour les amoureux des légumes, garnie de tomates fraîches, poivrons, oignons, olives, champignons et d'une sauce tomate.",
        rating: 4.6,
        base: "Tomate",
        ingredients: "Tomate, Mozzarella, Poivrons, Olives, Champignons, Oignons, Basilic",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "C'est la meilleure pizzas pour les végétariens ! Les légumes frais se mélangent parfaitement avec la sauce tomate pour un goût incroyable.",
        nutrition: {
            calories: 280,
            fat: "11g",
            carbohydrates: "35g",
            protein: "15g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Avocat", "Tofu", "Olives noires"]
        }
    },
    {
        id: 4,
        slug: 'pouletBBQ',
        title: "Pizza Poulet BBQ",
        price: 13,
        image: images,
        description: "Une pizzas avec une base de sauce BBQ, garnie de poulet grillé, d'oignons rouges, de mozzarella, et d'une touche de sauce tomate.",
        rating: 4.8,
        base: "Tomate",
        ingredients: "Tomate, Mozzarella, Poulet grillé, Oignon rouge, Sauce BBQ, Coriandre",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "Une pizzas unique avec des saveurs fumées et du poulet tendre. Le mélange de sauce BBQ et tomate est un incontournable.",
        nutrition: {
            calories: 400,
            fat: "20g",
            carbohydrates: "38g",
            protein: "25g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Jalapeños", "Bacon", "Fromage bleu"]
        }
    },
    {
        id: 5,
        slug: 'quattroStagioni',
        title: "Pizza Quattro Stagioni",
        price: 14,
        image: images,
        description: "Une délicieuse combinaison de quatre ingrédients de saison : champignons, olives, jambon et artichauts, le tout sur une base de sauce tomate.",
        rating: 4.6,
        base: "Tomate",
        ingredients: "Tomate, Mozzarella, Champignons, Olives, Jambon, Artichauts, Origan",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "Une excellente manière de goûter aux saisons avec chaque part ! Les garnitures sont diverses et la sauce tomate équilibre parfaitement le tout.",
        nutrition: {
            calories: 350,
            fat: "18g",
            carbohydrates: "32g",
            protein: "20g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Parmesan", "Olives noires", "Roquette"]
        }
    }
];


const cardCream :Pizza [] = [
    {
        id: 6,
        slug: 'cremeBacon',
        title: "Pizza Crème Bacon",
        price: 12,
        image: images,
        description: "Une pizzas riche et crémeuse garnie de bacon croustillant, de champignons, de mozzarella, et d'une base de crème fraîche.",
        rating: 4.7,
        base: "Crème fraîche",
        ingredients: "Crème fraîche, Mozzarella, Bacon, Champignons, Ail, Persil",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "Une pizzas crémeuse et savoureuse avec du bacon croustillant et des champignons. Parfaite pour ceux qui aiment les saveurs riches !",
        nutrition: {
            calories: 450,
            fat: "22g",
            carbohydrates: "35g",
            protein: "25g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Oignons caramélisés", "Fromage de chèvre"]
        }
    },
    {
        id: 7,
        slug: 'carbonara',
        title: "Pizza Carbonara",
        price: 13,
        image: images,
        description: "Inspirée du plat classique, cette pizzas combine une base crémeuse, du pancetta et une touche de parmesan.",
        rating: 4.8,
        base: "Crème fraîche",
        ingredients: "Crème fraîche, Mozzarella, Pancetta, Parmesan, Œufs, Poivre noir",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "Une pizzas crémeuse et indulgente qui ressemble au plat de pâtes carbonara classique. Absolument délicieuse !",
        nutrition: {
            calories: 500,
            fat: "25g",
            carbohydrates: "40g",
            protein: "30g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Champignons", "Jambon", "Parmesan supplémentaire"]
        }
    },
    {
        id: 8,
        slug: 'pouletChampignons',
        title: "Pizza Poulet Champignons",
        price: 11,
        image: images,
        description: "Une pizzas savoureuse avec une base crémeuse, garnie de poulet grillé, de champignons, de mozzarella, et une touche de thym.",
        rating: 4.6,
        base: "Crème fraîche",
        ingredients: "Crème fraîche, Mozzarella, Poulet grillé, Champignons, Thym, Ail",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "La combinaison parfaite de poulet tendre et de champignons terreux avec une base crémeuse. À essayer absolument !",
        nutrition: {
            calories: 420,
            fat: "18g",
            carbohydrates: "35g",
            protein: "28g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Oignons rouges", "Roquette"]
        }
    },
    {
        id: 9,
        slug: 'fourFromagesCreme',
        title: "Pizza 4 Fromages Crème",
        price: 14,
        image: images,
        description: "Une pizzas crémeuse garnie de quatre fromages : mozzarella, fromage de chèvre, gorgonzola et parmesan.",
        rating: 4.9,
        base: "Crème fraîche",
        ingredients: "Crème fraîche, Mozzarella, Fromage de chèvre, Gorgonzola, Parmesan, Ail",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "Un rêve pour les amateurs de fromage. La base crémeuse avec les quatre fromages différents rend cette pizzas irrésistible !",
        nutrition: {
            calories: 550,
            fat: "30g",
            carbohydrates: "40g",
            protein: "25g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Roquette", "Pignons de pin"]
        }
    },
    {
        id: 10,
        slug: 'saumonEtAneth',
        title: "Pizza Saumon et Aneth",
        price: 15,
        image: images,
        description: "Une pizzas crémeuse garnie de saumon fumé, d'aneth frais, de mozzarella, et d'un peu de citron pour une touche rafraîchissante.",
        rating: 4.7,
        base: "Crème fraîche",
        ingredients: "Crème fraîche, Mozzarella, Saumon fumé, Aneth, Citron, Câpres",
        dimensions: "grande (12 x 12 cm), medio (8 x 8 cm), chico (5 x 5 cm)",
        review: "La combinaison de saumon fumé et de base crémeuse est luxueuse, et l'aneth et le citron ajoutent un équilibre rafraîchissant.",
        nutrition: {
            calories: 600,
            fat: "35g",
            carbohydrates: "40g",
            protein: "30g"
        },
        options: {
            crust: ["Fine", "Épaisse"],
            extraToppings: ["Câpres", "Oignons rouges"]
        }
    }
];

const allPizzas : Pizza[] = [...cardTomate, ...cardCream];
export { allPizzas , cardTomate, cardCream };

