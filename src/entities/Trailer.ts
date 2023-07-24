export default interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string }; // Question -- how do you know you are supposed to just be looking at "results" in the console log
}
