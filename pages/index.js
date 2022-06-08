import Image from "next/image";
import dog1 from "../public/images/dog1.JPEG";
import bird from "../public/images/bird2.jpg";
import dog2 from "../public/images/dog2.jpg";
import goats from "../public/images/goats.jpg";
import dog3 from "../public/images/dog3.jpg";
import turkey from "../public/images/turkey.jpg";

import { data } from "autoprefixer";
import react from "react";


export default function Home() {
  const Animals = [
    {name: dog1},
    {name: bird},
    {name: dog2},
    {name: goats},
    {name: dog3},
    {name: turkey}
  ];
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-3xl text-center'>Random Animal Photos 
      <br></br> from my Camera Roll</h1>
      <br></br>
      {Animals.map(data =>(
          <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-red-500 ring-offset-4">

          <Image
          objectFit='cover'
          src={data.name}
          alt='Picture of an animal'
          layout='fill'
          priority 
          />
          <br></br>
          <br></br>
        </div>
      ))}
        
    </div>
  )
}
