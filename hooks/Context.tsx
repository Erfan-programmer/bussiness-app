import React, { createContext, useEffect, useState } from "react";
import { BlogType , FeatureType , TeamType , TestimonialType} from "./../types/blog";
import {Blogs} from "./../data/db"
interface ItemsType {
  BlogItems: BlogType[];
  featuresItems:FeatureType[];
  TeamItems:TeamType[];
  TestimonialItems:TestimonialType[]
}
// create items context
const ContextItem = createContext<ItemsType>({
  BlogItems: [],
  featuresItems:[],
  TeamItems:[],
  TestimonialItems:[]
});

// create provider

function BlogItemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [BlogItems, setBlogItems] = useState<BlogType[]>([]);
  const [featuresItems, setFeaturesItems] = useState<FeatureType[]>([]);
  const [TeamItems, setTeamItems] = useState<TeamType[]>([]);
  const [TestimonialItems, setTestimonialItems] = useState<TestimonialType[]>([]);

  useEffect(() => {
    setBlogItems(
      Blogs.blogs.map((item) => ({
        ...item,
        role: '',
        date: '',
      }))
    );
    setFeaturesItems(Blogs.Feature);
    setTeamItems(Blogs.teams);
    setTestimonialItems(Blogs.testimonial);
  }, []);


  return (
    <ContextItem.Provider value={{ BlogItems , featuresItems , TeamItems , TestimonialItems }}>
      {children}
    </ContextItem.Provider>
  );
}


export {ContextItem}
export default BlogItemProvider