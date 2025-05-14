import { theme } from "@/app/theme";
import { ProductCard } from "@/components/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

type Rating = {
    rate: number,
    count: number,
}

type Product = {
    id: number,
    title: string,
    price: number,
    image: string,
    description: string,
    category: string,
    rating: Rating,
}

export default function NewProduct(){

    const [productsList, setProductsList] = useState<Product[]>([]);
    async function downloadProducts(){
        const response = await axios.get('https://fakestoreapi.com/products');
        setProductsList(response.data);
    }

    useEffect(() => {
        if(productsList.length === 0)
            downloadProducts();
    }, []);
    return (
        <ScrollView 
            style={styles.container} 
            contentContainerStyle={styles.contentContainer}
        >
            {productsList.map((product) => (
                <ProductCard key={product.id} title={product.title} price={product.price} image={product.image} id={product.id}/>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.white,
    },
    contentContainer: {
        padding: 12,
    }
})