var V2Ray = "SOCKS5 127.0.0.1:1081; SOCKS 127.0.0.1:1081; DIRECT;";

var domains = [
// ========== GOOGLE ==========
  'google.com',
  'about.google',
  'googletagservices',
  'stats.g.doubleclick.net',
  'google.co.jp',
  'youtube.com',
  'youtu.be',
  'googlevideo.com',
  'ggpht.com',
  'ytimg.com',
  'googlecommerce.com',
  'googleapis.com',
  'google-analytics.com',
  'googletagservices.com',
  'appspot.com',
// MAP
  'gstatic.com',
  'googleusercontent.com',
  'googlesyndication.com',
// BLOGGER
  'blogger.com',
// GMAIL
  'gmail.com',
// AD
  'googleadservices.com',
// Calendar
  'calendar.com',
  'static.zdassets.com',

// ========== SOFT ==========
  'duetdisplay.com',
  'rime.im',
// Termius
  'termius.com',
  'webflow.com',
  'gitbook.com',
  'firebaseio.com',
// MindNode
  'mindnode.com',
  'analytics.ideasoncanvas.com',

// ========== APPLE ==========
  'itunes.apple.com',
  'appleid.apple.com',
  'communities.apple.com',
  'discussions.apple.com',

// ========== UTILITY ==========
  'ifixit.com',
// Noisli
  'noisli.com',
  'mxpnl.com',
  'v2ray.com',
  'justmysocks2.net',

// ========== HOSTSERVER ==========
  'bandwagonhost.com',
  'comodo.com',
  'statuscake.com',

// ========== FORUMS ==========
// MacRumors
  'macrumors.com',
  'sharethrough.com',
  'nsstatic.net',
  'yumenetworks.com',
  'mgr.consensu.org',
  'scorecardresearch.com',
  'amazon-adsystem.com',
  'ytimg.com',
  'switchadhub.com',
// WordPress
  'wordpress.com',
  'wordpress.org',
  'pinimg.com',

// ========== DEVELOPER ==========
  'ruanyifeng.*',
  'xdebug.org',
  'vuejs.org',
  'yapi.*',
  'regexr.com',
  'i.stack',
  'webpackjs',
  'webpack.js',
  'gitter.im',
  'apachefriends.com',
  'gnu.org',
  'fontawesome.com',
// GITHUB
  'github.com',
  'githubassets.com',
  'githubusercontent.com',
// STACKFLOW
  'stackoverflow.com',
  'stack.imgur.com',
  'cdn.sstatic.net',
  'stackexchange.com',
  'scorecardresearch.com',
  'quantcount.com',
// DISQUS
  'disqus.com',
  'disquscdn.com',
// DROP BOX
  'dropbox.com',
  'dropboxstatic.com',
// TAMPER MONKEY
  'openuserjs.org',
  'tampermonkey.net',
// Mozilla.org
  'developer.mozilla.org',
  'secure.gravatar.com',
// CodeSandbox
  'codesandbox.io',
  'codefund.app',
  'stripe.com',
// Vue
  'vimeo.com',
// =JSfiddle
  'fiddle.jshell.net',
  'jsfiddle.net',
// SVG.js
  'cdn.rawgit.com',
  'jsfiddle.net',
  'github.io',
// IDEA
  'jetbrains.com',
// DISCORD
  'discordapp.com',
  'discordapp.net',


// ========== XXOO ==========
  'xvideos.com',
// PORNHUB
  'pornhub.com',
  'phncdn.com',
  'contentabc.com',
  'trafficjunky.net',

// ========== POPULAR ==========
// WIKI
  'wikipedia.org',
// FACEBOOK
  'facebook.net',
  'facebook.com',
  'fbcdn.net',
// INSTAGRAM
  'instagram.com',
  'cdninstagram.com',
// LINKEDIN
  'linkedin.com',
  'adnxs.com',
  'lynda.com',
  'licdn.com',
// TWITTER
  'twitter.com',
  'twimg.com',
  't.co',
//  ad ##
  'ads-twitter.com',
// relate
  'doubleclick.net',
// SPOTIFY
  'spotify.com',
  't.co',
  'snapchat.com',
  'adsrvr.org',
  'semasio.ne',
  'scdn.co',
  'global.ssl.fastly.net',
  'hotjar.com',
  'myvisualiq.net',
  'fastly-insights.com',
// Grammly
  'grammarly.com',
  'reddit.com',
  'redditstatic.com',
  'grammarly.io',
  'quora.com',
// Netflix
  'netflix.com',
  'nflxext.com',
// REDDIT
  'redd.it',
  'redditmedia.com',
  'redditstatic.com',


// ========== IM ==========
// What's app
  'whatsapp.com',
  'whatsapp.net',
// TELEGRAM
  'telegram.org',
  'telegram.me',
// Skype
  'skype.com',
  'browser.pipe.aria.microsoft.com',
// Whatsapp
  'whatsapp.com',

// ========== DESIGN ==========
  '500px.com',
  'unsplash.com',
  'adobe.com',
  'adobemobiledev.demdex.net',
  'sketch.com',
  'sketchapp.com',
  '500px.org',

// ========== NEWS ==========
  'npr.org',
// BBC
  'bbc.com',
  'atwola.com',
  'bbc.co.uk',
  'bbci.co.uk',
  'crwdcntrl.net',
  'skimresources.com',
// Yahho
  'yahoo.com',
  'mathtag.com',
  'adtechus.com',
  'yimg.com',
// NewyorkTime
  'nytimes.com',
  'nyt.com',
// NBC news
  'nbcnews.com',
  'mobileadtrading.com',
  'zemanta.com',
  'moatads.com',
  'fwmrm.net',
  'taboola.com',
  's-nbcnews.com',
  'parsely.com',
  'perfectmarket.com',
  'quantserve.com',
// WASHINGDON POST
  'washingtonpost.com',
  'krxd.net',
  'netmng.com',
  'experianmarketingservices.digital',
  'pubmatic.com',
  'eyeota.net',
  'turn.com',
  'casalemedia.com',
  'amgdgt.com',
  'cloudfront.net',
  'sharethis.com',
// ABC NEWS
  'abcnews.go.com',
  'abcnews.com',
  'uplynk.com',
  'newrelic.com',
  'optimizely.com',
  'imrworldwide.com',
  'vilynx.com',
// TBS
  'tbs.com',
  'squarespace.com',
  'typekit.net',

// TEAM COCO
  'teamcoco.com',
  'teamcococdn.com',
  'trustarc.com',
  'art19.com',
  'amazonaws.com',
  'ywxi.net',
  'azureedge.net',
  'shopify.com',

// ========== OTHERS ==========
  'inpandora.com',
  'workona.com',
  'producthunt.com',
  'workona.com.*',
  'amazon.com',
  'cloudfront.net',
// EBAY
  'ebaystatic.com',
  'ebay-us.com',
  'online-metrix.net',

// ========== GAMES ==========
// EA
  'ea.com',
  'soundcloud.com',
  'typekit.net',
];

function FindProxyForURL(url, host) {
  for (var i = domains.length - 1; i >= 0; i--) {
    if (dnsDomainIs(host, domains[i])) {
      return V2Ray;
    }
  }
  return "DIRECT";
}
