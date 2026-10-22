import settingsFile from '../content/settings/general.json';

export const siteSettings = {
  siteTitle: settingsFile.siteTitle || 'SolarPower Co.',
  siteDescription: settingsFile.siteDescription || 'Solar energy solutions for homes and businesses.',
  siteUrl: settingsFile.siteUrl || 'https://loquacious-genie-16444d.netlify.app',
  companyName: settingsFile.companyName || settingsFile.siteTitle || 'SolarPower Co.',
  email: settingsFile.email || '',
  phone: settingsFile.phone || '',
  address: settingsFile.address || '',
  social: {
    facebook: settingsFile.social?.facebook || '',
    twitter: settingsFile.social?.twitter || '',
    linkedin: settingsFile.social?.linkedin || '',
    instagram: settingsFile.social?.instagram || '',
  },
};

export function absoluteSiteUrl(path = '') {
  const base = siteSettings.siteUrl.endsWith('/') ? siteSettings.siteUrl : `${siteSettings.siteUrl}/`;
  return new URL(path.replace(/^\//, ''), base).toString();
}
