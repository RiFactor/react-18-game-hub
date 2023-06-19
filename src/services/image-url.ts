import ImagePlaceholder from "../assets/image-placeholder.webp";

const GetCroppedImageUrl = (url: string) => {
  if (!url) return ImagePlaceholder; // !url instead of url === null (Question -- better catch all?)
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);

  return newUrl;
};

export default GetCroppedImageUrl;
