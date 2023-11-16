import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.react_app_sanity_projectId,
  dataset: 'production',
  apiversion: '20220201',
  useCdn: true,
  token: process.env.react_app_sanity_token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);