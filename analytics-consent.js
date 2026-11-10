let analyticsStarted = false;

function syncAnalyticsConsent() {
  const consent = window.getCkyConsent?.();
  const allowed = consent?.isUserActionCompleted && consent.categories?.analytics === true;

  if (!allowed) {
    if (analyticsStarted) window.location.reload();
    return;
  }
  if (analyticsStarted) return;
  analyticsStarted = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  window.gtag('js', new Date());
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5PM3PJHX';
  document.head.append(tag);
}

document.addEventListener('cookieyes_banner_loaded', syncAnalyticsConsent);
document.addEventListener('cookieyes_consent_update', syncAnalyticsConsent);
