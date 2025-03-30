import { Gallery } from "../components/Gallery";

interface Photo {
  src: string,
  alt: string
}

const photos: Array<Photo> = [
  { src: "/img/gallery-photos/GJ-arches.jpg", alt: "Colorado Nat'l Monument" },
  { src: "/img/gallery-photos/grand-junc-solo-tree.jpg", alt: "Colorado Nat'l Monument" },
  { src: "/img/grand-junction-rocks.jpeg", alt: "Colorado Nat'l Monument - Grand Junction" },
  { src: "/img/honda-accord-crystals.PNG", alt: "Crystals on Honda Accord Roof" },
  { src: "/img/gallery-photos/nature/moab-1.jpg", alt: "Arches National Park, Moab" },
  { src: "/img/gallery-photos/nature/moab-2.jpg", alt: "Arches National Park, Moab" },
];


function PhotosNature() {

  return (
    <>
      <Gallery photos={photos} />
    </>
  )
}

export default PhotosNature