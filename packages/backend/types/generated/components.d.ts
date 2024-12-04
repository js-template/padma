import type { Schema, Struct } from '@strapi/strapi';

export interface BlockBanner extends Struct.ComponentSchema {
  collectionName: 'components_block_banners';
  info: {
    description: 'Banner component with advanced text, style, and layout options';
    displayName: 'Banner';
    icon: 'image';
  };
  attributes: {
    content: Schema.Attribute.Component<'config.section-title', false>;
    style: Schema.Attribute.Component<'component.style-section', false>;
    variation: Schema.Attribute.Enumeration<
      [
        'simple',
        'center',
        'bottom right',
        'left right',
        'box left',
        'box right',
        'circle',
      ]
    > &
      Schema.Attribute.DefaultTo<'simple'>;
  };
}

export interface BlockBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_block_blog_cards';
  info: {
    description: '';
    displayName: 'Blog Post';
    icon: 'collapse';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.link', false>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    posts: Schema.Attribute.Relation<'oneToMany', 'plugin::padma-backend.post'>;
    style: Schema.Attribute.Component<'component.style-section', false>;
  };
}

export interface BlockBreadcrumbs extends Struct.ComponentSchema {
  collectionName: 'components_block_breadcrumbs';
  info: {
    description: '';
    displayName: 'Breadcrumbs';
    icon: 'manyWays';
  };
  attributes: {
    items: Schema.Attribute.JSON;
    separator: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    style: Schema.Attribute.Component<'component.style-section', false>;
    variation: Schema.Attribute.Enumeration<['default', 'simple', 'minimal']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlockCategoryCard extends Struct.ComponentSchema {
  collectionName: 'components_category_cards';
  info: {
    description: '';
    displayName: 'Category Card';
    icon: 'arrowRight';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.link', false>;
    category: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::padma-backend.category'
    >;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    style: Schema.Attribute.Component<'component.style-section', false>;
  };
}

export interface BlockContentBox extends Struct.ComponentSchema {
  collectionName: 'components_block_content_boxes';
  info: {
    description: 'A content box with text, icons, and style options.';
    displayName: 'Content Box';
    icon: 'box';
  };
  attributes: {
    content: Schema.Attribute.Component<'config.section-title', true>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    icon_box: Schema.Attribute.Component<'component.icon-box', true>;
    style: Schema.Attribute.Component<'component.style-section', false>;
  };
}

export interface BlockImageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_block_image_carousels';
  info: {
    description: 'Carousel component with configurable cards and styling options.';
    displayName: 'Image Carousel';
    icon: 'images';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    cards: Schema.Attribute.Component<'config.carousel-card', true> &
      Schema.Attribute.Required;
    interval: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3000>;
    style: Schema.Attribute.Component<'component.style-section', false>;
    variation: Schema.Attribute.Enumeration<
      ['default', 'fade', 'slide', 'zoom']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlockImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_block_image_gallery';
  info: {
    description: 'A component for displaying multiple images in various layouts.';
    displayName: 'Image Gallery';
    icon: 'gallery';
  };
  attributes: {
    content: Schema.Attribute.Component<'config.section-title', false>;
    images: Schema.Attribute.Media<undefined, true> & Schema.Attribute.Required;
    style: Schema.Attribute.Component<'component.style-section', false>;
    variation: Schema.Attribute.Enumeration<
      ['grid', 'masonry', 'carousel', 'grid-with-title']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'grid'>;
  };
}

export interface BlockReviewBlock extends Struct.ComponentSchema {
  collectionName: 'components_block_reviews';
  info: {
    description: 'A block for displaying multiple reviews with customizable options.';
    displayName: 'Review Block';
    icon: 'star';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.link', false>;
    content: Schema.Attribute.Component<'config.section-title', false>;
    empty: Schema.Attribute.Component<'shared.empty', false>;
    reviews: Schema.Attribute.Component<'config.review-card', true>;
    style: Schema.Attribute.Component<'component.style-section', false>;
    variation: Schema.Attribute.Enumeration<
      ['default', 'compact', 'detailed']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface ComponentGridContainer extends Struct.ComponentSchema {
  collectionName: 'components_component_grid_containers';
  info: {
    description: '';
    displayName: 'GridContainer';
    icon: 'brush';
  };
  attributes: {
    columns: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    columnSpacing: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    rowSpacing: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    spacing: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    wrap: Schema.Attribute.Enumeration<['wrap-reverse', 'nowrap', 'wrap']> &
      Schema.Attribute.DefaultTo<'wrap'>;
    zeroMinWidth: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentIconBox extends Struct.ComponentSchema {
  collectionName: 'components_component_icon_boxes';
  info: {
    description: '';
    displayName: 'Icon Box';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Short description about the icon box.'>;
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'bx:info-circle'>;
    link: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Your Title Here'>;
  };
}

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'bx:smile'>;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
    type: Schema.Attribute.Enumeration<['External', 'Internal']>;
  };
}

export interface ComponentMenu extends Struct.ComponentSchema {
  collectionName: 'components_component_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    child: Schema.Attribute.Component<'component.link', true>;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'bx:smile'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
    type: Schema.Attribute.Enumeration<['External', 'Internal']>;
  };
}

export interface ComponentPageTitle extends Struct.ComponentSchema {
  collectionName: 'components_component_page_titles';
  info: {
    displayName: 'pageTitle';
    icon: 'arrowRight';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_component_social_links';
  info: {
    description: '';
    displayName: 'SocialLink';
    icon: 'arrowRight';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentStyleSection extends Struct.ComponentSchema {
  collectionName: 'components_component_style_sections';
  info: {
    description: '';
    displayName: 'styleSection';
    icon: 'arrowUp';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    color: Schema.Attribute.String;
    desktop: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    mobile: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    tab: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
  };
}

export interface ComponentTextField extends Struct.ComponentSchema {
  collectionName: 'components_component_text_fields';
  info: {
    description: '';
    displayName: 'Text Field';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentTitles extends Struct.ComponentSchema {
  collectionName: 'components_component_titles';
  info: {
    description: '';
    displayName: 'Titles';
    icon: 'arrowRight';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ConfigCarouselCard extends Struct.ComponentSchema {
  collectionName: 'components_carousel_cards';
  info: {
    description: 'Card with title, paragraph, and image for use in carousel components.';
    displayName: 'Carousel Card';
    icon: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ConfigHeaderConfig extends Struct.ComponentSchema {
  collectionName: 'components_config_header_configs';
  info: {
    description: '';
    displayName: 'headerConfig';
    icon: 'arrowRight';
  };
  attributes: {
    enableDelete: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    enableEdit: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface ConfigHeaderField extends Struct.ComponentSchema {
  collectionName: 'components_config_header_fields';
  info: {
    description: '';
    displayName: 'headerField';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right', 'center']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Name'>;
    sort: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ConfigMenu extends Struct.ComponentSchema {
  collectionName: 'components_config_menus';
  info: {
    description: '';
    displayName: 'Menu';
    icon: 'bulletList';
  };
  attributes: {
    child: Schema.Attribute.Component<'component.link', true>;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'bx:smile'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
    type: Schema.Attribute.Enumeration<['External', 'Internal']>;
  };
}

export interface ConfigMetaData extends Struct.ComponentSchema {
  collectionName: 'components_component_meta_datas';
  info: {
    description: '';
    displayName: 'Meta Data';
    icon: 'chartBubble';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ConfigReviewCard extends Struct.ComponentSchema {
  collectionName: 'components_review_cards';
  info: {
    description: '';
    displayName: 'Review Card';
    icon: 'star';
  };
  attributes: {
    avatar: Schema.Attribute.Media;
    date: Schema.Attribute.Date;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    review: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'This is a review text.'>;
    reviewer: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'John Doe'>;
  };
}

export interface ConfigRole extends Struct.ComponentSchema {
  collectionName: 'components_config_roles';
  info: {
    displayName: 'role';
    icon: 'user';
  };
  attributes: {
    role: Schema.Attribute.Enumeration<
      ['employer', 'candidate', 'authenticated']
    >;
  };
}

export interface ConfigSectionTitle extends Struct.ComponentSchema {
  collectionName: 'components_config_section_titles';
  info: {
    displayName: 'Section Title';
    icon: 'arrowRight';
  };
  attributes: {
    sub_title: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    variation: Schema.Attribute.Enumeration<['Variation One', 'Variation Two']>;
  };
}

export interface ConfigSinglePage extends Struct.ComponentSchema {
  collectionName: 'components_config_single_pages';
  info: {
    description: '';
    displayName: 'singlePage';
    icon: 'arrowRight';
  };
  attributes: {
    collectionModel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'api/padma-backend/posts'>;
    singelModel: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface ConfigTableHead extends Struct.ComponentSchema {
  collectionName: 'components_config_table_heads';
  info: {
    displayName: 'tableHead';
    icon: 'bulletList';
  };
  attributes: {
    fields: Schema.Attribute.Component<'config.header-field', true>;
  };
}

export interface FooterContactWidget extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_widgets';
  info: {
    displayName: 'Contact Widget';
    icon: 'envelop';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface FooterCopyrightBar extends Struct.ComponentSchema {
  collectionName: 'components_footer_copyright_bars';
  info: {
    description: 'Bottom-most section for copyright text';
    displayName: 'Copyright Bar';
    icon: 'copyright';
  };
  attributes: {
    content: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface FooterMenuWidget extends Struct.ComponentSchema {
  collectionName: 'components_footer_menu_widgets';
  info: {
    displayName: 'Menu Widget';
    icon: 'arrowDown';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface FormsFormButtons extends Struct.ComponentSchema {
  collectionName: 'components_forms_form_buttons';
  info: {
    displayName: 'formButtons';
    icon: 'server';
  };
  attributes: {
    back: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Previous'>;
    cancel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cancel'>;
    next: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Next'>;
    skip: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Skip'>;
    submit: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Submit'>;
  };
}

export interface FormsGoogleMap extends Struct.ComponentSchema {
  collectionName: 'components_forms_google_maps';
  info: {
    displayName: 'Google Map';
    icon: 'pinMap';
  };
  attributes: {
    errorText: Schema.Attribute.String;
    inputStep: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    noteText: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface FormsInput extends Struct.ComponentSchema {
  collectionName: 'components_forms_inputs';
  info: {
    description: '';
    displayName: 'Input';
    icon: 'puzzle';
  };
  attributes: {
    defaultValue: Schema.Attribute.String;
    desktopGrid: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    errorText: Schema.Attribute.String;
    fullWidth: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    inputStep: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label: Schema.Attribute.String;
    mobileGrid: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    noteText: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    tabGrid: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    type: Schema.Attribute.Enumeration<
      ['text', 'date', 'email', 'number', 'password', 'textarea', 'tel', 'url']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface FormsMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_component_markdowns';
  info: {
    description: '';
    displayName: 'markdown';
    icon: 'italic';
  };
  attributes: {
    errorText: Schema.Attribute.String;
    inputStep: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    noteText: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface FormsSearchForm extends Struct.ComponentSchema {
  collectionName: 'components_forms_search_forms';
  info: {
    description: '';
    displayName: 'Search';
  };
  attributes: {
    button: Schema.Attribute.String;
    link: Schema.Attribute.String;
    searchByCategory: Schema.Attribute.String;
    searchByLocation: Schema.Attribute.String;
    searchByWords: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormsSelect extends Struct.ComponentSchema {
  collectionName: 'components_forms_selects';
  info: {
    description: '';
    displayName: 'select';
    icon: 'bulletList';
  };
  attributes: {
    desktopGrid: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    errorText: Schema.Attribute.String;
    fullWidth: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    inputStep: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    label: Schema.Attribute.String;
    mobileGrid: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<12>;
    model: Schema.Attribute.String;
    multiple: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    noteText: Schema.Attribute.String;
    options: Schema.Attribute.Component<'forms.select-item', true>;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    tabGrid: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
  };
}

export interface FormsSelectItem extends Struct.ComponentSchema {
  collectionName: 'components_forms_select_items';
  info: {
    displayName: 'selectItem';
    icon: 'check';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface HeaderHeaderBottom extends Struct.ComponentSchema {
  collectionName: 'components_header_header_bottoms';
  info: {
    description: '';
    displayName: 'Header bottom';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    menu: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    style: Schema.Attribute.Component<'component.style-section', false>;
  };
}

export interface HeaderLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_logos';
  info: {
    description: '';
    displayName: 'Logo';
    icon: 'chartBubble';
  };
  attributes: {
    link: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'>;
    md_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<175>;
    sm_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<160>;
    xs_width: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<150>;
  };
}

export interface HeaderMainMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_main_menus';
  info: {
    description: 'Main Menu';
    displayName: 'Main Menu';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    dark_logo: Schema.Attribute.Component<'header.logo', false>;
    dark_mode: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    langague: Schema.Attribute.Component<'component.link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    light_logo: Schema.Attribute.Component<'header.logo', false>;
    main_menu: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    notification: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    style: Schema.Attribute.Component<'component.style-section', false>;
  };
}

export interface HeaderTopBar extends Struct.ComponentSchema {
  collectionName: 'components_header_top_bars';
  info: {
    description: 'Top bar for additional information and links';
    displayName: 'Top Bar';
    icon: 'bars';
  };
  attributes: {
    left_content: Schema.Attribute.Text;
    right_content: Schema.Attribute.Component<'component.link', true>;
    style: Schema.Attribute.Component<'component.style-section', false>;
  };
}

export interface LayoutColumns extends Struct.ComponentSchema {
  collectionName: 'components_layout_columns';
  info: {
    displayName: 'Columns';
    icon: 'arrowRight';
  };
  attributes: {};
}

export interface SharedEmpty extends Struct.ComponentSchema {
  collectionName: 'components_shared_empties';
  info: {
    description: '';
    displayName: 'empty';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Try to refresh the page or check back later'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'No Data Founds'>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedShareMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_menus';
  info: {
    displayName: 'Share Menu';
    icon: 'server';
  };
  attributes: {
    menus: Schema.Attribute.Component<'config.menu', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    role: Schema.Attribute.Enumeration<['candidate', 'employer']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'candidate'>;
  };
}

export interface SharedSocialMedias extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_medias';
  info: {
    displayName: 'Social Medias';
    icon: 'earth';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      [
        'facebook',
        'instagram',
        'twitter',
        'linkedin',
        'snapchat',
        'tiktok',
        'pinterest',
        'reddit',
        'tumblr',
        'youtube',
        'whatsapp',
        'wechat',
        'discord',
        'telegram',
        'viber',
        'line',
        'kik',
        'clubhouse',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedSpacing extends Struct.ComponentSchema {
  collectionName: 'components_shared_spacings';
  info: {
    displayName: 'spacing';
    icon: 'oneToOne';
  };
  attributes: {
    gap: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface SingleTypeBlogDetails extends Struct.ComponentSchema {
  collectionName: 'components_single_type_blog_details';
  info: {
    description: '';
    displayName: 'Blog Details';
    icon: 'arrowRight';
  };
  attributes: {
    sidebar: Schema.Attribute.Enumeration<
      ['Left Sidebar', 'Right Sidebar', 'Both Sidebar', 'No Sidebar']
    >;
    style: Schema.Attribute.Component<'component.style-section', false>;
    title: Schema.Attribute.String;
  };
}

export interface UiAuthorInfo extends Struct.ComponentSchema {
  collectionName: 'ui_author-info';
  info: {
    description: 'Author details for the article';
    displayName: 'Author Info';
    icon: 'user';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profilePicture: Schema.Attribute.Media<'images'>;
  };
}

export interface UiContentSection extends Struct.ComponentSchema {
  collectionName: 'ui_content_section';
  info: {
    description: 'Content section for the article';
    displayName: 'Content Section';
    icon: 'file';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    demo: Schema.Attribute.Component<'ui.author-info', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.banner': BlockBanner;
      'block.blog-card': BlockBlogCard;
      'block.breadcrumbs': BlockBreadcrumbs;
      'block.category-card': BlockCategoryCard;
      'block.content-box': BlockContentBox;
      'block.image-carousel': BlockImageCarousel;
      'block.image-gallery': BlockImageGallery;
      'block.review-block': BlockReviewBlock;
      'component.grid-container': ComponentGridContainer;
      'component.icon-box': ComponentIconBox;
      'component.link': ComponentLink;
      'component.menu': ComponentMenu;
      'component.page-title': ComponentPageTitle;
      'component.social-link': ComponentSocialLink;
      'component.style-section': ComponentStyleSection;
      'component.text-field': ComponentTextField;
      'component.titles': ComponentTitles;
      'config.carousel-card': ConfigCarouselCard;
      'config.header-config': ConfigHeaderConfig;
      'config.header-field': ConfigHeaderField;
      'config.menu': ConfigMenu;
      'config.meta-data': ConfigMetaData;
      'config.review-card': ConfigReviewCard;
      'config.role': ConfigRole;
      'config.section-title': ConfigSectionTitle;
      'config.single-page': ConfigSinglePage;
      'config.table-head': ConfigTableHead;
      'footer.contact-widget': FooterContactWidget;
      'footer.copyright-bar': FooterCopyrightBar;
      'footer.menu-widget': FooterMenuWidget;
      'forms.form-buttons': FormsFormButtons;
      'forms.google-map': FormsGoogleMap;
      'forms.input': FormsInput;
      'forms.markdown': FormsMarkdown;
      'forms.search-form': FormsSearchForm;
      'forms.select': FormsSelect;
      'forms.select-item': FormsSelectItem;
      'header.header-bottom': HeaderHeaderBottom;
      'header.logo': HeaderLogo;
      'header.main-menu': HeaderMainMenu;
      'header.top-bar': HeaderTopBar;
      'layout.columns': LayoutColumns;
      'shared.empty': SharedEmpty;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.share-menu': SharedShareMenu;
      'shared.social-medias': SharedSocialMedias;
      'shared.spacing': SharedSpacing;
      'single-type.blog-details': SingleTypeBlogDetails;
      'ui.author-info': UiAuthorInfo;
      'ui.content-section': UiContentSection;
    }
  }
}
