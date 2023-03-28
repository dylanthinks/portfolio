import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "mqeuek5y",
  dataset: "production",
  apiVersion: "2022-09-07",
  useCdn: true,
});
