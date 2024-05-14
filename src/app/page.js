import Image from "next/image";
import Link from "next/link";
import { } from "next/font/google";

export default function Home() {
  return (
    <main className="wrapper flex min-h-screen flex-col gap-4 items-center p-24">
      <h1 className="text-center font-bold md:text-7xl bg-black p-2 rounded-md text-4xl text-white">SAVE-EZGİ-EKİNCİ</h1>
      <h2 className="text-2xl font-bold text-[#FFD166] bg-black p-2 rounded-md">Sister, Friend and Teacher</h2>
      <Image src={"/img/ezgi-main.jpg"} height={'300'} width={'300'} className="bg-black p-4"></Image>
      <p className="first_par">
        Ezgi is an amazing person. Shes funny, but i didnt know that until i found out that she was kidnapped by KVK. Then i thought about it a lot. This is why i recreated this website.
        I will start the with the conditions that Ezgi is living. She is such an hardworking people, and doing everything for club to get better but they didnt even buy a car for her. Look at this damn video !!!!!!!!!!!!!
        THAT POOR LADY IS STILL USING 41AT AMK!!!! ARE YOU KIDDING ME LAN ? 
      </p>
      <video src="/img/41at.mp4" controls className="bg-black p-4"></video>
      <p className="second_par">
        You know about Dante ? In the Divine Comedy (İlahi Komedya) by Dante Alighieri, a guy has a journey through hell to heaven. Ezgi comes from the hell, place of Malebranche (yeaah he hates males) and now stuck in Purgatorio (Purgatory). We need to help her to get out of there. Sorry KVK, you are the Purgatory at that case. Now we have a vision about
        Ezgis journey to Paradiso (Heaven). What would you say ? Is she going to find the pace of GOD and pace of grace (Bible ref) ? Or she will stuck in the Purgatory forever ?
      </p>
      <video src="/img/lord.mp4" controls className="bg-black p-4"></video>
      <p className="third_par">What they vandalize, shell evangalize !!!</p>
      <div className="w-1/3 bg-white p-8 flex flex-col gap-4">
      <h1 className="text-center font-bold">LETS LEARN MORE ABOUT THE DEVIL !!!</h1>
      <Image width={'300'} height={'400'} className="w-96 m-auto" src="/img/kvk.webp" />
      <p>They wear green or blue t-shirts. They call themselves fella. In a den of thieves, every man disguise. When they start to lie,remember this advice.
      </p>
      </div>
      <p className="text-center text-3xl bg-[#FFD166] p-4">Wanna get that bitch out of KVK ?</p>
      <Image width={'1152'} height={'296'} src="/img/BANNER.png"/>
      <ul className="flex gap-4">
        <li className="bg-[#FC4100] p-2 text-white rounded-sm text-3xl"><Link href={"/about"}>About Us</Link></li>
        <li className="bg-[#FC4100] p-2 text-white rounded-sm text-3xl"><Link href={"/donate"}>Donate</Link></li>
        <li className="bg-[#FC4100] p-2 text-white rounded-sm text-3xl"><Link href={"/who-is-ezgi"}>Who is Ezgi</Link></li>
      </ul>
    </main>
  );
}
