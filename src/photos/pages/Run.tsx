import { Gallery } from "../components/Gallery";

interface Photo {
  src: string,
  alt: string
}

const photos: Array<Photo> = [
  { src: "/img/gallery-photos/bill-mt-tam.1-2007.jpg", alt: "Mt. Tam - 2007" },
  { src: "/img/bill-steamboat-rrr.jpeg", alt: "Steamboat 50 Mile Finish" },
  { src: "/img/gallery-photos/bill-mt-tam.2-2007.jpg", alt: "Mt. Tam - 2007" },
  { src: "/img/gallery-photos/bill-rrr-midway-2010.jpg", alt: "Steamboat 50 Mile Mid-point" },
  { src: "/img/gallery-photos/bill-boulder-xc.2-2007.JPG", alt: "Boulder XC Masters Nationals - 2007" },
  { src: "/img/gallery-photos/bill-baldy.1-2006.jpg", alt: "Mt. Baldy Hillclimb - 2006" },
  { src: "/img/gallery-photos/run/rim-rock-marathon-1.jpg", alt: "Rim Rock Marathon Descent - 2010" },
  { src: "/img/gallery-photos/bill-mt-tam.3-2007.bmp", alt: "Mt. Tam - 2007" },
  { src: "/img/gallery-photos/bill-boulder-xc.1-2007.JPG", alt: "Boulder XC Masters Nationals - 2007" },
  { src: "/img/gallery-photos/run/north-fork-50m.jpg", alt: "North Fork 50 Mile - 2011" },
  { src: "/img/gallery-photos/run/rim-rock-marathon-2.jpg", alt: "Rim Rock Marathon Ascent - 2010" },
];


function PhotosRun() {

  return (
    <>
      <Gallery photos={photos} />
    </>
  )
}

export default PhotosRun