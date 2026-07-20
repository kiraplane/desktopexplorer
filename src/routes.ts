import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-spoiler-light-hints',
  FullWalkthrough = '/guides/full-walkthrough',
  AllSolutions = '/guides/all-puzzle-solutions-passwords',
  CavePuzzles = '/guides/cave-puzzles-0-10',
  Puzzle9 = '/guides/puzzle-9-altar-solution',
  Puzzle10 = '/guides/puzzle-10-beyond-solution',
  TempleWalkthrough = '/guides/temple-walkthrough',
  M4x1musNextRooms = '/guides/m4x1mus-password-nextrooms',
  MallF1 = '/guides/mall-f1-puzzles',
  MallF2Admin = '/guides/mall-f2-admin-unlock',
  AdminGuppyEnding = '/guides/admin-guppy-ending',
  Achievements = '/guides/achievements-guide',
  DemoFullGame = '/guides/demo-vs-full-game',
  PlatformsReleasePrice = '/guides/release-price-platforms',
  SystemRequirements = '/system-requirements',
  Review = '/review',
  Download = '/download',

  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',
  Payment = '/payment',
}

export const routesNotAllowedByLoggedInUsers: Routes[] = [];
export const protectedRoutes: Routes[] = [];
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Dashboard;
