import PublicPageController from './public-page';
import BlogDetailController from './blog-detail';
import CategoryController from './category';
import DashboardHomeController from './dashboard-home';
import FormController from './form';
import HomePageController from './home-page';
import LayoutController from './layout';
import PermalinkController from './permalink';
import PostController from './post';
import PrivatePageController from './private-page';
import SidebarController from './sidebar';

export default {
  'public-page': PublicPageController,
  'blog-detail': BlogDetailController,
  category: CategoryController,
  'dashboard-home': DashboardHomeController,
  form: FormController,
  'home-page': HomePageController,
  layout: LayoutController,
  permalink: PermalinkController,
  post: PostController,
  'private-page': PrivatePageController,
  sidebar: SidebarController,
};
