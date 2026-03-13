type PropType = {
  mobileImage: string;
  desktopImage: string;
  alt: string;
};
export function Picrure({ mobileImage, desktopImage, alt }: PropType) {
  return (
    <picture>
      <source media="(min-width:768px)" srcSet={desktopImage} />
      <img src={mobileImage} className="w-full" alt={alt} />
    </picture>
  );
}
