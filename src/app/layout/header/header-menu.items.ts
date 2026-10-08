import { TranslateService } from "@ngx-translate/core";
import { Router } from '@angular/router';
import { MenuItem } from "primeng/api";

export function HeaderMenuItems(_TranslateService: TranslateService, _Router: Router,): MenuItem[] {

  const menu: MenuItem[] = [
    {
      label: _TranslateService.instant('_Layout.header.menuItems.1'),
      routerLink: ['/'],
      routerLinkActiveOptions: { exact: true },
      items: [
        {
          label: _TranslateService.instant('_Layout.header.menuItems.1'),
          routerLink: ['/'],
        },
      ]
    },
    {
      label: _TranslateService.instant('_Layout.header.menuItems.2'),
      routerLink: ['/'],
      items: [
        {
          label: _TranslateService.instant('_Layout.header.menuItems.2'),
          routerLink: ['/'],
        },
      ]
    },
    {
      label: _TranslateService.instant('_Layout.header.menuItems.3'),
      routerLink: ['/'],
      items: [
        {
          label: _TranslateService.instant('_Layout.header.menuItems.3'),
          routerLink: ['/'],
        },
      ]
    },
    {
      label: _TranslateService.instant('_Layout.header.menuItems.4'),
      routerLink: ['/'],
      items: [
        {
          label: _TranslateService.instant('_Layout.header.menuItems.4'),
          routerLink: ['/'],
        },
      ]
    },
    {
      label: _TranslateService.instant('_Layout.header.menuItems.5'),
      routerLink: ['/'],
      items: [
        {
          label: _TranslateService.instant('_Layout.header.menuItems.5'),
          routerLink: ['/'],
        },
      ]
    },
    {
      label: _TranslateService.instant('_Layout.header.menuItems.6'),
      routerLink: ['/'],
      items: [
        {
          label: _TranslateService.instant('_Layout.header.menuItems.6'),
          routerLink: ['/'],
        },
      ]
    },
    {
      label: _TranslateService.instant('_Layout.header.menuItems.7'),
      routerLink: ['/'],
      items: [
        {
          label: _TranslateService.instant('_Layout.header.menuItems.7'),
          routerLink: ['/'],
        },
      ]
    }
  ];


  return menu
}
