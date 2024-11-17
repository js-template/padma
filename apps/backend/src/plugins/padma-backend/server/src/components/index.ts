// all Text type Components
import Typography from './config/typography.json';

// all Config type Components
import ReviewCard from './config/review-card.json';
import CarouselCard from './config/carousel-card.json';

// all block type Components
import PublicHeader from './block/public-header.json';
import Banner from './block/banner.json';
import ReviewBlock from './block/review-block.json';
import BlogCard from './block/blog-card.json';
import CategoryCard from './block/category-card.json';
import BreadCrumbs from './block/breadcrumbs.json';
import PrivateHeader from './block/private-header.json';
import ContentBox from './block/content-box.json';
import Imagecarousel from './block/image-carousel.json';
import ImageGallery from './block/image-gallery.json';

import AuthorInfo from './ui/author-info.json';
import contentSection from './ui/content-section.json';

import IconBox from './component/icon-box.json';

import Link from './component/link.json';
import Menu from './config/menu.json';
import MetaData from './config/meta-data.json';
import SharedSEO from './shared/seo.json';
import PageTitle from './component/page-title.json';
import SocialLink from './component/social-link.json';
import StyleSection from './component/style-section.json';
import TextField from './component/text-field.json';
import Title from './component/titles.json';

import Logo from './header/logo.json';
import Topbar from './header/topbar.json';

import Collums from './layout/columns.json';
import Empty from './shared/empty.json';
import MetaSocial from './shared/meta-social.json';
import ShareMenu from './shared/share-menu.json';
import SocialMeias from './shared/social-medias.json';
import Spacing from './shared/spacing.json';

import BlogDetails from './single-type/blog-details.json';
import GridContainer from './component/grid-container.json';
import SearchForm from './forms/search-form.json';

import Formsbutton from './forms/form-buttons.json';

import SinglePage from './config/single-page.json';

export default {
  'config.review-card': ReviewCard,
  'config.carousel-card': CarouselCard,
  'text.typography': Typography,
  'forms.search-form': SearchForm,
  'ui.author-info': AuthorInfo,
  'ui.content-section': contentSection,

  'component.icon-box': IconBox,
  'component.link': Link,
  'component.menu': Menu,
  'component.meta-data': MetaData,
  'component.page-title': PageTitle,
  'component.social-link': SocialLink,
  'component.style-section': StyleSection,
  'component.text-field': TextField,
  'component.title': Title,

  'header.logo': Logo,
  'header.topbar': Topbar,
  'layout.columns': Collums,
  'shared.empty': Empty,
  'shared.seo': SharedSEO,
  'shared.meta-social': MetaSocial,
  'shared.share-menu': ShareMenu,
  'shared.social-medias': SocialMeias,
  'shared.spacing': Spacing,
  'single-type.blog-details': BlogDetails,

  'component.grid-container': GridContainer,
  'forms.form-buttons': Formsbutton,
  'config.single-page': SinglePage,

  'block.public-header': PublicHeader,
  'block.private-header': PrivateHeader,
  'block.breadcrumbs': BreadCrumbs,
  'block.blog-card': BlogCard,
  'block.category-card': CategoryCard,
  'block.review-block': ReviewBlock,
  'block.banner': Banner,
  'block.content-box': ContentBox,
  'block.image-carousel': Imagecarousel,
  'block.image-gallery': ImageGallery,
};
