import { SanityClient } from "@sanity/client"
import {ImageUrlBuilder} from "@sanity/image-url"

const client = SanityClient({
    projectId: "m01o4t7b",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
})

const builder = ImageUrlBuilder(client);
export const urlfor = (source) => builder.image(source);

export default client;
