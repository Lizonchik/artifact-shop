interface IAttribute {
  name: string;
  value: string;
}
interface IArtifact {
  title: string;
  attributes: IAttribute[];
  modifiers: string[];
  flavour_text: string;
  image_url: string;
  price: string;
}