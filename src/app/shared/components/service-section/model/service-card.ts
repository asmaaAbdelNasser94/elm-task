export const serviceTagSeverities = ['success', 'info', 'secondary'] as const;

export type ServiceTagSeverity = (typeof serviceTagSeverities)[number];

export interface ServiceTag {
  labelKey: string;
  severity: ServiceTagSeverity;
}

export interface ServiceCard {
  id: number;
  titleKey: string;
  descriptionKey: string;
  tags: ServiceTag[];
  primaryActionKey: string;
  secondaryActionKey: string;
}
