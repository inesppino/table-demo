import { z } from "zod";

export class Property {
  constructor(
    public readonly title: string,
    public readonly link: string,
    public readonly address: string,
    public readonly city: string,
    public readonly image: string,
    public readonly id: string
  ) {
    this.title = z.string().parse(title);
    this.link = z.string().parse(link);
    this.address = z.string().parse(address);
    this.city = z.string().parse(city);
    this.image = z.string().parse(image);
    this.id = z.string().parse(id);
  }
}
