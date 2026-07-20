'use client';

import Container from '@/components/layout/container';
import { Logo } from '@/components/layout/logo';
import { NavbarMobile } from '@/components/layout/navbar-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useNavbarLinks } from '@/config/navbar-config';
import { useScroll } from '@/hooks/use-scroll';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './locale-switcher';

interface NavBarProps {
  scroll?: boolean;
}

const customNavigationMenuTriggerStyle = cn(
  navigationMenuTriggerStyle(),
  'relative cursor-pointer border border-transparent bg-transparent text-base text-[#91a395]',
  'hover:border-[#8fcf78]/40 hover:bg-[#111a15] hover:text-[#f4f1df]',
  'focus:border-[#8fcf78]/40 focus:bg-[#111a15] focus:text-[#f4f1df]',
  'focus-visible:ring-[#8fcf78]/40',
  'data-active:border-[#8fcf78]/60 data-active:bg-[#111a15] data-active:text-[#f0a23a]',
  'data-[active=true]:border-[#8fcf78]/60 data-[active=true]:bg-[#111a15] data-[active=true]:text-[#f0a23a]',
  'data-[state=open]:border-[#8fcf78]/40 data-[state=open]:bg-[#111a15] data-[state=open]:text-[#f4f1df]'
);

function isCurrentPathActive(pathname: string, href?: string) {
  if (!href) {
    return false;
  }

  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function Navbar({ scroll }: NavBarProps) {
  const t = useTranslations();
  const scrolled = useScroll(50);
  const menuLinks = useNavbarLinks();
  const localePathname = useLocalePathname();

  return (
    <section
      className={cn(
        'sticky inset-x-0 top-0 z-50 border-[#2a4434] border-b py-4 text-[#f4f1df] backdrop-blur-md transition-all duration-300',
        scroll
          ? scrolled
            ? 'bg-[#080d0b]/94 shadow-[0_8px_24px_rgba(6,16,24,0.36)] supports-backdrop-filter:bg-[#080d0b]/94'
            : 'bg-[#080d0b]/88 supports-backdrop-filter:bg-[#080d0b]/88'
          : 'bg-[#080d0b]/94 supports-backdrop-filter:bg-[#080d0b]/94'
      )}
    >
      <Container className="px-4">
        {/* desktop navbar */}
        <nav className="hidden lg:flex">
          {/* logo and name */}
          <div className="flex items-center">
            <LocaleLink href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="hidden whitespace-nowrap font-display text-lg font-bold tracking-wide xl:inline">
                {t('Metadata.name')}
              </span>
            </LocaleLink>
          </div>

          {/* menu links */}
          <div className="flex-1 flex items-center justify-center space-x-2">
            <NavigationMenu className="relative">
              <NavigationMenuList className="flex items-center">
                {menuLinks?.map((item, index) =>
                  item.items ? (
                    <NavigationMenuItem key={index} className="relative">
                      <NavigationMenuTrigger
                        data-active={
                          isCurrentPathActive(localePathname, item.href) ||
                          item.items.some((subItem) =>
                            isCurrentPathActive(localePathname, subItem.href)
                          )
                            ? 'true'
                            : undefined
                        }
                        className={customNavigationMenuTriggerStyle}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items?.map((subItem, subIndex) => {
                            const isSubItemActive =
                              subItem.href &&
                              localePathname.startsWith(subItem.href);
                            return (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <LocaleLink
                                    href={subItem.href || '#'}
                                    target={
                                      subItem.external ? '_blank' : undefined
                                    }
                                    rel={
                                      subItem.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                    }
                                    className={cn(
                                      'group flex select-none flex-row items-center gap-4 rounded-md',
                                      'p-2 leading-none no-underline outline-hidden transition-colors',
                                      'hover:bg-[#111a15] hover:text-[#f0a23a]',
                                      'focus:bg-[#111a15] focus:text-[#f0a23a]',
                                      isSubItemActive &&
                                        'bg-[#111a15] text-[#f0a23a]'
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        'flex size-8 shrink-0 items-center justify-center transition-colors',
                                        'bg-transparent text-[#91a395]',
                                        'group-hover:bg-transparent group-hover:text-[#f0a23a]',
                                        'group-focus:bg-transparent group-focus:text-[#f0a23a]',
                                        isSubItemActive &&
                                          'bg-transparent text-[#f0a23a]'
                                      )}
                                    >
                                      {subItem.icon ? subItem.icon : null}
                                    </div>
                                    <div className="flex-1">
                                      <div
                                        className={cn(
                                          'text-sm font-medium text-[#91a395]',
                                          'group-hover:bg-transparent group-hover:text-[#f0a23a]',
                                          'group-focus:bg-transparent group-focus:text-[#f0a23a]',
                                          isSubItemActive &&
                                            'bg-transparent text-[#f0a23a]'
                                        )}
                                      >
                                        {subItem.title}
                                      </div>
                                      {subItem.description && (
                                        <div
                                          className={cn(
                                            'text-sm text-[#91a395]',
                                            'group-hover:bg-transparent group-hover:text-[#a8b7aa]',
                                            'group-focus:bg-transparent group-focus:text-[#a8b7aa]',
                                            isSubItemActive &&
                                              'bg-transparent text-[#a8b7aa]'
                                          )}
                                        >
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                    {subItem.external && (
                                      <ArrowUpRightIcon
                                        className={cn(
                                          'size-4 shrink-0 text-[#91a395]',
                                          'group-hover:bg-transparent group-hover:text-[#f0a23a]',
                                          'group-focus:bg-transparent group-focus:text-[#f0a23a]',
                                          isSubItemActive &&
                                            'bg-transparent text-[#f0a23a]'
                                        )}
                                      />
                                    )}
                                  </LocaleLink>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        active={
                          item.href
                            ? isCurrentPathActive(localePathname, item.href)
                            : false
                        }
                        className={customNavigationMenuTriggerStyle}
                      >
                        <LocaleLink
                          href={item.href || '#'}
                          target={item.external ? '_blank' : undefined}
                          rel={
                            item.external ? 'noopener noreferrer' : undefined
                          }
                        >
                          {item.title}
                        </LocaleLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-x-4">
            <LocaleSwitcher />
          </div>
        </nav>

        {/* mobile navbar */}
        <NavbarMobile className="lg:hidden" />
      </Container>
    </section>
  );
}
