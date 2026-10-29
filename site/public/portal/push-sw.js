/* baglamagram bildirim betiği */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('push', function (event) {
  var p = {};
  try { p = event.data ? event.data.json() : {}; } catch (e) { p = { notification: { body: event.data ? event.data.text() : '' } }; }
  var n = p.notification || {};
  var d = p.data || {};
  var title = n.title || d.title || 'baglamagram';
  var link = (p.fcmOptions && p.fcmOptions.link) || (n.click_action) || '/portal/';
  event.waitUntil(self.registration.showNotification(title, {
    body: n.body || d.body || '',
    icon: '/portal/apple-touch-icon.png',
    badge: '/portal/apple-touch-icon.png',
    data: { link: link, screen: d.screen || '', d: d },
  }));
});
// Dokununca: açık portal varsa ona ekranı söyler (mesajla), yoksa portalı ekranın adresiyle açar (?git=DersHazirlik&…)
var GIT = ['DersHazirlik', 'OdemeTalepleri', 'Basvurular', 'HataBildirimleri'];
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var nd = event.notification.data || {};
  var link = nd.link || '/portal/';
  var d = nd.d || {};
  var git = GIT.indexOf(nd.screen) !== -1 ? nd.screen : '';
  if (git) {
    var q = ['git=' + encodeURIComponent(git)];
    Object.keys(d).forEach(function (k) { if (['title', 'body', 'screen', 'type'].indexOf(k) === -1) q.push(encodeURIComponent(k) + '=' + encodeURIComponent(d[k])); });
    link = '/portal/?' + q.join('&');
  }
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.indexOf('/portal') !== -1 && 'focus' in list[i]) {
        if (git) list[i].postMessage({ tip: 'bildirim', data: Object.assign({}, d, { screen: git }) });
        return list[i].focus();
      }
    }
    return self.clients.openWindow(link);
  }));
});
