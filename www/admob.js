var admobid={}
  if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3778512068936565/6390809497',
  adId:admobid.banner,
  position:AdMob.AD_POSITION.BOTTOM_CENTER,
  autoShow:true
  }};