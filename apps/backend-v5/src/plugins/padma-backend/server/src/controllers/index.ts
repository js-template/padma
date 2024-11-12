import PublicPageController from './public-page';
import BlogDetailController from './post-setting';
import CategoryController from './category';
import PrivateFrontPageeController from './private-frontpage';

import PublicFrontPageController from './public-frontpage';
import LayoutController from './layout';
import PermalinkController from './permalink';
import PostController from './post';
import PrivatePageController from './private-page';

export default {
  'public-page': PublicPageController,
  'post-setting': BlogDetailController,
  category: CategoryController,
  'private-frontpage': PrivateFrontPageeController,
  'public-frontpage': PublicFrontPageController,
  layout: LayoutController,
  permalink: PermalinkController,
  post: PostController,
  'private-page': PrivatePageController,
};
