import { websiteConfig } from './config/website';

export enum Routes {
  Root = '/',
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  Guides = '/guides',
  BeginnerGuide = '/guides/beginner-guide',
  Cards = '/cards',
  BestBuilds = '/guides/best-builds',
  MinosBoss = '/guides/minos-boss-guide',
  PoetsOfLimbo = '/guides/poets-of-limbo',
  DemoVsEarlyAccess = '/guides/demo-vs-early-access',
  Controls = '/guides/controls-and-first-run-tips',
  Characters = '/characters',
  ReleaseDate = '/release-date',
  Platforms = '/platforms',
  SteamDeck = '/steam-deck',
  Download = '/download',
  Soundtrack = '/soundtrack',

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
