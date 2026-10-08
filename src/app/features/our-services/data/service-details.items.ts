import { MenuItem } from 'primeng/api';
import { ServiceTag } from '../../../shared/components/service-section/model/service-card';
import { ServiceDetailApps, ServiceDetailContact, ServiceDetailFact, ServiceDetailMark, ServiceDetailTab } from '../models/services.model';

export const serviceDetailBreadcrumb: MenuItem[] = [
  { label: '_Layout.header.home', routerLink: '/home' },
  { label: '_Services.details.title' },
];

export const serviceDetailTags: ServiceTag[] = [
  { labelKey: '_Services.details.tags.entity', severity: 'secondary' },
  { labelKey: '_Services.details.tags.journey', severity: 'info' },
  { labelKey: '_Services.details.tags.platform', severity: 'success' },
];


export const serviceDetailFacts: ServiceDetailFact[] = [
  {
    icon: 'user',
    titleKey: '_Services.details.facts.audience',
    valueKey: '_Services.details.facts.audienceValue',
  },
  {
    icon: 'clock',
    titleKey: '_Services.details.facts.duration',
    valueKey: '_Services.details.facts.durationValue',
  },
  {
    icon: 'computer-phone-sync',
    titleKey: '_Services.details.facts.channels',
    valueKey: '_Services.details.facts.channelsValue',
  },
  {
    icon: 'money',
    titleKey: '_Services.details.facts.cost',
    valueKey: '_Services.details.facts.costValue',
  },
];

export const serviceDetailPayments: ServiceDetailMark[] = [
  { src: '/images/mada.svg', altKey: '_Services.details.payments.mada' },
  { src: '/images/stc-pay.svg', altKey: '_Services.details.payments.stc' },
];

export const serviceDetailContacts: ServiceDetailContact[] = [
  {
    titleKey: '_Services.details.faq.phone',
    titleIcon: 'phone',
    label: '9200343222',
    href: 'tel:9200343222',
  },
  {
    titleKey: '_Services.details.faq.email',
    titleIcon: 'mail',
    label: 'help@company.sa',
    href: 'mailto:help@company.sa',
  },
];

export const serviceDetailApps: ServiceDetailApps = {
  featured: { src: '/images/app-store.svg', altKey: '_Services.details.apps.appStore' },
  side: [
    { src: '/images/google-play.svg', altKey: '_Services.details.apps.googlePlay' },
    { src: '/images/app-gallery.svg', altKey: '_Services.details.apps.appGallery' },
  ],
};

export const serviceDetailTabs: ServiceDetailTab[] = [
  { id: 'steps', labelKey: '_Services.details.tabs.steps' },
  { id: 'terms', labelKey: '_Services.details.tabs.terms' },
  { id: 'documents', labelKey: '_Services.details.tabs.documents' },
];

export const serviceDetailTerms = [
  '_Services.details.terms.1',
  '_Services.details.terms.2',
  '_Services.details.terms.3',
] as const;

export const serviceDetailDocuments = [
  '_Services.details.documents.1',
  '_Services.details.documents.2',
  '_Services.details.documents.3',
  '_Services.details.documents.4',
] as const;

export const serviceDetailSteps = [
  '_Services.details.steps.1',
  '_Services.details.steps.2',
  '_Services.details.steps.3',
  '_Services.details.steps.4',
  '_Services.details.steps.5',
  '_Services.details.steps.6',
  '_Services.details.steps.7',
] as const;
