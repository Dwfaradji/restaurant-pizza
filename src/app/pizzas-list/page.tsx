import React, { Suspense } from "react";
import PizzasList from "@/components/Pizzas-list";

export default function PizzasPage() {
    return (
        <Suspense fallback={<div>Chargement des pizzas...</div>}>
            <PizzasList />
        </Suspense>
    );
}
