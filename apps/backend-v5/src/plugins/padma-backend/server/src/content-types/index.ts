import BlogDetail from './blog-detail/schema.json';
import Category from './category/schema.json';
import DashboardHome from './dashboard-home/schema.json';
import Form from './form/schema.json';
import HomePage from './home-page/schema.json';
import Layout from './layout/schema.json';
import Permalink from './permalink/schema.json';
import Post from './post/schema.json';
import PrivatePage from './private-page/schema.json';
import PublicPage from './public-page/schema.json';
import Sidebar from './sidebar/schema.json';

export default {
  'public-page': {
    schema: PublicPage,
  },
  'private-page': {
    schema: PrivatePage,
  },
  'dashboard-home': {
    schema: DashboardHome,
  },
  'home-page': {
    schema: HomePage,
  },
  layout: {
    schema: Layout,
  },
  sidebar: {
    schema: Sidebar,
  },
  post: {
    schema: Post,
  },
  category: {
    schema: Category,
  },
  'blog-detail': {
    schema: BlogDetail,
  },
  form: {
    schema: Form,
  },
  permalink: {
    schema: Permalink,
  },
};
