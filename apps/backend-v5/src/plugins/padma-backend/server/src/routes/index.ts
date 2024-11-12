import PublicRoute from './public-page';
import Catgegory from './category';
import PrivateFrontPage from './private-frontpage';

import PublicFrontPage from './public-frontpage';
import Layout from './layout';
import Permalink from './permalink';
import Post from './post';
import PrivatePage from './private-page';
import PostSetting from './post-setting';

export default {
  'public-page': PublicRoute,
  'private-page': PrivatePage,
  'public-frontpage': PublicFrontPage,
  'post-setting': PostSetting,
  category: Catgegory,
  'private-home': PrivateFrontPage,
  layout: Layout,
  permalink: Permalink,
  post: Post,
};
