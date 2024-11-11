import AuthorInfo from './ui/author-info.json';
import contentSection from './ui/content-section.json';
import { Schema } from '@strapi/strapi';

export default {
  'ui.author-info': AuthorInfo,
  'ui.content-section': contentSection,
} as {
  [key: string]: Schema.Component;
};
