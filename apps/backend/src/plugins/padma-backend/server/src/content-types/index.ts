import PostSetting from './post-setting/schema.json';
import Category from './category/schema.json';
import PrivateFrontPage from './private-frontpage/schema.json';

import PublicFrontpage from './public-frontpage/schema.json';
import Layout from './layout/schema.json';
import Permalink from './permalink/schema.json';
import Post from './post/schema.json';
import PrivatePage from './private-page/schema.json';
import PublicPage from './public-page/schema.json';
import PrivateLayout from './private-layout/schema.json';
import MyProfile from './my-profile/schema.json';

export default {
  layout: {
    schema: Layout,
  },
  'public-page': {
    schema: PublicPage,
  },
  'private-page': {
    schema: PrivatePage,
  },
  'private-frontpage': {
    schema: PrivateFrontPage,
  },
  'public-frontpage': {
    schema: PublicFrontpage,
  },
  'private-layout': {
    schema: PrivateLayout,
  },

  post: {
    schema: Post,
  },
  category: {
    schema: Category,
  },
  'post-setting': {
    schema: PostSetting,
  },
  permalink: {
    schema: Permalink,
  },
  'my-profile': {
    schema: MyProfile,
  },
};
