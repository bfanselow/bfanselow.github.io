import { Gallery } from "../components/Gallery";

interface Photo {
  src: string,
  alt: string
}

const photos: Array<Photo> = [
  { src: "/img/gallery-photos/memories/mom-tanoble-patio.jpg", alt: "Mom, Tanoble Patio - 2003" },
  { src: "/img/gallery-photos/memories/dad-tanoble-patio.jpg", alt: "Dad, Tanoble Patio - 2003" },
  { src: "/img/gallery-photos/33359-lyttle-dowdle.jpg", alt: "33359 Lyttle Dowdle Dr." },
  { src: "/img/gallery-photos/memories/dad-breckenridge-2004.jpg", alt: "Dad, Breckenridge - 2004" },
  { src: "/img/gallery-photos/memories/mom-breckenridge-2004.jpg", alt: "Mom, Breckenridge - 2004" },
  { src: "/img/gallery-photos/memories/jack-stained-glass.jpg", alt: "Stained Glass" },
  { src: "/img/gallery-photos/memories/mom-breckenridge-2-2004.jpg", alt: "Mom, Breckenridge - 2004" },
  { src: "/img/gallery-photos/memories/john-breckenridge-2005.jpg", alt: "John, Breckenridge - 2004" },
  { src: "/img/gallery-photos/memories/mom-dad-breckenridge-2004.jpg", alt: "Mom & Dad, Breckenridge - 2004" },
  { src: "/img/gallery-photos/memories/jack-king-soopers-2019.jpg", alt: "Jack ready for King Soopers shift - 2019" },
  { src: "/img/gallery-photos/jack-bears-2010.1.jpg", alt: "Bears Soccer - Oct, 2010" },
  { src: "/img/gallery-photos/jack-turks-caicos.1.jpg", alt: "Turks & Caicos Island - 2016" },
  { src: "/img/gallery-photos/jack-samba-2016.1.jpg", alt: "WAFC Samba Soccer - 2016" },
  { src: "/img/gallery-photos/memories/family-tanoble-2004.jpg", alt: "Family, Tanoble Front Porch - 2004" },
  { src: "/img/gallery-photos/memories/three-amigos.jpg", alt: "Coal Creek Canyon - Three Amigos" },
  { src: "/img/gallery-photos/memories/coal-creek-flood.jpg", alt: "Coal Creek Flood" },
  { src: "/img/gallery-photos/memories/turks-n-caicos-driving-boat.jpg", alt: "Turks & Caicos" },
  { src: "/img/gallery-photos/jack-samba-2015.1.jpg", alt: "WAFC Samba Soccer - 2015" },
  { src: "/img/gallery-photos/8648-gladiola-cir.jpg", alt: "8648 Gladiola Cir" },
  { src: "/img/gallery-photos/jack-samba-halloween.jpg", alt: "WAFC Samba Halloween - 2015" },
  { src: "/img/gallery-photos/totalled-honda.jpg", alt: "Totalled Honda Accord on Berthoud Pass" },
  { src: "/img/gallery-photos/memories/dad-dog-2023.jpeg", alt: "Dad & Dog - 2023" },
  { src: "/img/gallery-photos/memories/33359-lyttle-dowdle-2.jpg", alt: "Wild Fox Wood - 33359 Lyttle Dowdle" },
  { src: "/img/gallery-photos/memories/bears-soccer-2012.jpg", alt: "Bears Soccer - 2012" },
  { src: "/img/gallery-photos/memories/turks-n-caicos-boat-jump.jpg", alt: "Turks & Caicos" },
  { src: "/img/gallery-photos/memories/boneyard-hut.jpg", alt: "New Sign for the Boneyard Hut" },
  { src: "/img/gallery-photos/memories/rvhs-graduate.jpg", alt: "Ralston Valley HS Graduate!" },
  { src: "/img/gallery-photos/memories/pond-2004.jpg", alt: "Pond - 2004" },
  { src: "/img/gallery-photos/memories/john-pilot.jpg", alt: "Your Captain, Mr. John Fanselow" },
  { src: "/img/gallery-photos/memories/33359-lyttle-dowdle-3.jpg", alt: "Wild Fox Wood - 33359 Lyttle Dowdle" },
  { src: "/img/gallery-photos/memories/jamie-jack-baking.jpg", alt: "Baking Preparations" },
  { src: "/img/gallery-photos/memories/jack-dad-pond-2005.jpg", alt: "Jack & Dad at the Pond - 2005" },
];


function PhotosMemories() {

  return (
    <>
      <Gallery photos={photos} />
    </>
  )
}

export default PhotosMemories