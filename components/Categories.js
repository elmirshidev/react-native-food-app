import {View,Text, ScrollView} from "react-native";
import CategoryCard from "./CategoryCard";
import { useEffect } from "react";
import { client } from "../sanity";
import { useState } from "react";
export default function Categories(){
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        client.fetch(`
            *[_type == "category"]
        `).then(data => {
            setCategories(data)
        })
    },[])

    return (
       <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
       }}
       >
       
       {categories?.map(c => (
        <CategoryCard 
            key={c._id}
            imgUrl={c.image}
            title={c.name}
        />
       ))}

       </ScrollView>
    )
}