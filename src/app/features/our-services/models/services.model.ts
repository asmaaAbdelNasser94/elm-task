export interface ServiceDetailFact {
    icon: string;
    titleKey: string;
    valueKey: string;
}

export interface ServiceDetailMark {
    src: string;
    altKey: string;
}

export interface ServiceDetailContact {
    label: string;
    href: string;
    titleKey?: string;
    titleIcon?: string;
}

export interface ServiceDetailApps {
    featured: ServiceDetailMark;
    side: ServiceDetailMark[];
}

export interface ServiceDetailTab {
    id: string;
    labelKey: string;
}
