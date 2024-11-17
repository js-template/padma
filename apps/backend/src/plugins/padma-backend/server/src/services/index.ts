import PublicService from './public-page';
import Category from './category';
import PrivateFrontpage from './private-frontpage';

import PublicFrontpage from './public-frontpage';
import Layout from './layout';
import Permalink from './permalink';
import Post from './post';
import PrivatePage from './private-page';
import PostSetting from './post-setting';

export default {
  'public-frontpage': PublicFrontpage,
  'private-frontpage': PrivateFrontpage,
  'post-setting': PostSetting,
  'public-page': PublicService,
  'private-page': PrivatePage,
  category: Category,
  layout: Layout,
  permalink: Permalink,
  post: Post,
};
