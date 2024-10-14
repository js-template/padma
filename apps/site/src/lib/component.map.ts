import {
   BreadCrumbs,
   CompanyFilter,
   HeroSection,
   TotalList,
   ClosedList,
   OpenList,
   Spacing,
   AppliedList,
   FavoriteList,
   MatchedList,
   AppliedJobs,
   CategoryBlock
} from "@padma/metajob-ui"

import {
   LatestNotifications,
   LatestBookmarks,
   LatestApplied,
   MessageLayout,
   BookmarkTable,
   ManageLists,
   ManageCompanies,
   ListSearchFilter,
   CategoryCard,
   PostCard,
   ReviewCard,
   ListCard,
   CandidateFilter
} from "@padma/metajob-ui"

interface WidgetConfig {
   component: React.FC<any>
}

export const widgetMapping: Record<string, WidgetConfig> = {
   "widget.total-list": {
      component: TotalList
   },
   "widget.open-list": {
      component: OpenList
   },
   "widget.closed-list": {
      component: ClosedList
   },
   "widget.bookmark-list": {
      component: ClosedList
   }
}

export const blockComponentMapping = {
   "banner.banner-one": {
      component: HeroSection
   },
   "header.breadcrumbs": {
      component: BreadCrumbs
   },
   "forms.job-filter": {
      component: ListSearchFilter
   },
   "forms.company-filter": {
      component: CompanyFilter
   },
   "forms.candidate-filter": {
      component: CandidateFilter
   },
   "block.category-card": {
      component: CategoryCard
   },
   "block.category-card2": {
      component: CategoryBlock
   },
   "block.job-card": {
      component: ListCard
   },
   "block.review-card": {
      component: ReviewCard
   },
   "block.blog-card": {
      component: PostCard
   }
} as any

export const dashboardBlocksMapping = {
   "widget.total-list": {
      component: TotalList
   },
   "widget.open-list": {
      component: OpenList
   },
   "widget.closed-list": {
      component: ClosedList
   },
   "widget.applied-lists": {
      component: AppliedList
   },
   "widget.favorite-lists": {
      component: FavoriteList
   },
   "widget.matched-lists": {
      component: MatchedList
   },
   "shared.spacing": {
      component: Spacing
   },
   "block.bookmark-list": {
      component: LatestBookmarks
   },
   "block.recent-activities": {
      component: LatestNotifications
   },
   "block.latest-applied": {
      component: LatestApplied
   },
   "config.message": {
      component: MessageLayout
   },
   "table.bookmark": {
      component: BookmarkTable
   },
   "block.manage-lists": {
      component: ManageLists
   },
   "block.manage-companies": {
      component: ManageCompanies
   },
   "table.applied-jobs": {
      component: AppliedJobs
   }
} as any
