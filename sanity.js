import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "sanity";

const client = sanityClient({
    projectId:"pid9ktne",
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-10-21",
}); t

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
