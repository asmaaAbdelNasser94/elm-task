import { FooterIconAction, FooterLinkGroup } from './model/footer-link.model';

export const footerGroups: readonly FooterLinkGroup[] = [
  {
    titleKey: '_Layout.footer.summary.title',
    links: [
      '_Layout.footer.summary.about',
      '_Layout.footer.summary.privacy',
      '_Layout.footer.summary.howTo',
      '_Layout.footer.summary.news',
      '_Layout.footer.summary.sla',
    ],
  },
  {
    titleKey: '_Layout.footer.important.title',
    links: [
      '_Layout.footer.important.national',
      '_Layout.footer.important.openData',
      '_Layout.footer.important.strategy',
      '_Layout.footer.important.openPortal',
      '_Layout.footer.important.participation',
    ],
  },
  {
    titleKey: '_Layout.footer.support.title',
    links: [
      '_Layout.footer.support.customers',
      '_Layout.footer.support.contact',
      '_Layout.footer.support.share',
      '_Layout.footer.support.complaint',
      '_Layout.footer.support.report',
    ],
  },
];

export const footerSocials: readonly FooterIconAction[] = [
  { icon: 'twitter', labelKey: '_Layout.footer.social.x' },
  { icon: 'linkedin', labelKey: '_Layout.footer.social.linkedin' },
  { icon: 'instagram', labelKey: '_Layout.footer.social.instagram' },
];

export const footerTools: readonly FooterIconAction[] = [
  { icon: 'hand', labelKey: '_Layout.footer.accessibility.sign' },
  { icon: 'search', labelKey: '_Layout.footer.accessibility.zoom' },
  { icon: 'eye', labelKey: '_Layout.footer.accessibility.contrast' },
];

export const footerUtilityLinks = [
  '_Layout.footer.sitemap',
  '_Layout.footer.rss',
  '_Layout.footer.mobileApp',
] as const;
