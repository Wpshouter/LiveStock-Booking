import Image from "next/image";
import Loading from "../loading";
import Banner from "@/component/homepage/Banner";
import { getAnimalsData } from "@/lib/data";
import FeaturedAnimals from "@/component/homepage/FeaturedAnimals";
import QurbaniTips from "@/component/homepage/QurbaniTips";
import TopBridge from "@/component/homepage/TopBridge";



export default async function Home() {
     // Utility function to get random items
      function getRandomAnimals(arr, count) {
      return arr
          .slice() 
          .sort(() => Math.random() - 0.5) 
          .slice(0, count); 
      }
      const Animals = await getAnimalsData();

      // Usage in your component
      const randomAnimals = getRandomAnimals(Animals, 6);


  console.log(Animals);
  return (<>
    <div className="">
        <Banner/>
        <FeaturedAnimals Animals={randomAnimals} />
        <QurbaniTips/>
        <TopBridge animals={randomAnimals} />
    </div>
  
       
  </>

  );
}
