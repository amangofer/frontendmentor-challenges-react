import MilkbottlesMobile from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import MilkbottlesDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import ConeMobile from "../assets/images/mobile/image-gallery-cone.jpg";
import ConeDesktop from "../assets/images/desktop/image-gallery-cone.jpg";
import OrangeMobile from "../assets/images/mobile/image-gallery-orange.jpg";
import OrangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg";
import SugarcubesMobile from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import SugarcubesDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg";
import { Picrure } from "./ui/Picture";

const images = [
  {
    id: 1,
    desktopImage: MilkbottlesDesktop,
    mobileImage: MilkbottlesMobile,
    alt: "Milk Bottles Image",
  },
  {
    id: 2,
    desktopImage: OrangeDesktop,
    mobileImage: OrangeMobile,
    alt: "Orange Image",
  },
  {
    id: 3,
    desktopImage: ConeDesktop,
    mobileImage: ConeMobile,
    alt: "Ice Cream Cone Image",
  },
  {
    id: 4,
    desktopImage: SugarcubesDesktop,
    mobileImage: SugarcubesMobile,
    alt: "Sugar Cubes Image",
  },
];

export function ImageGallery() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      {images.map((image) => {
        return (
          <Picrure
            key={image.id}
            mobileImage={image.mobileImage}
            desktopImage={image.desktopImage}
            alt={image.alt}
          />
        );
      })}
    </section>
  );
}
