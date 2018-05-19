
const Rem = (psdW) => {
  if (!window) {
    return false;
  } 
  const root = 1000;
  const designW = psdW ? psdW : 750;
  const ua = UA();
  setHtmlFontSize(designW, root);
  setTimeout(() => {
    setHtmlFontSize(designW, root);
  }, 100);
  window.onresize = function(){
    setHtmlFontSize(designW, root);
  };
  if (ua.os === 'ANDROID' && ua.pf === 'UC') {
    setTimeout(() => {
      const w = window.document.documentElement.clientWidth || document.body.clientWidth;
      const html = window.document.getElementsByTagName('html')[0]; 
      const fontsize = w / designW * root + "px";
      const fontSizeC = parseInt(window.getComputedStyle(html).fontSize);
      if (Math.abs(fontSizeC -fontsize) > 10) {
        html.style.fontSize = w / designW * root + "px"; 
      }
    }, 500);
  }
  function setHtmlFontSize(designW, root) {
    const html = window.document.getElementsByTagName('html')[0]; 
    //屏幕的宽度（兼容处理）
    const w = window.document.documentElement.clientWidth || document.body.clientWidth;
    //750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
    html.style.fontSize = w / designW * root + "px";
  }
  function UA() {
    const ua = window.navigator.userAgent.toLowerCase();
    const getOS = function() {
      if (/\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua)) {
        return 'IOS';
      }
      return ua.indexOf('android') > 1 ? 'ANDROID' : 'OTHERS';
    };
    const getPF = function() {
      if (ua.indexOf('ucbrowser') >= 0) {
        return 'UC';
      }
      return 'OTHERS';
    };
    return {
      os: getOS(),
      pf: getPF()
    };
  }
}
export default Rem;
export {
  Rem
}
