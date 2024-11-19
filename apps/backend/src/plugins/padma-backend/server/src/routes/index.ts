import PublicRoute from './public-page';
import Catgegory from './category';
import PrivateFrontPage from './private-frontpage';

import PublicFrontPage from './public-frontpage';
import Layout from './layout';
import PrivateLayout from './private-layout';
import Permalink from './permalink';
import Post from './post';
import PrivatePage from './private-page';
import PostSetting from './post-setting';
import MyProfileRoute from './my-profile';

export default {
  layout: Layout,
  'private-layout': PrivateLayout,
  'public-page': PublicRoute,
  'private-page': PrivatePage,
  'public-frontpage': PublicFrontPage,
  'post-setting': PostSetting,
  category: Catgegory,
  'private-home': PrivateFrontPage,
  permalink: Permalink,
  post: Post,
  'my-profile': MyProfileRoute,
};
