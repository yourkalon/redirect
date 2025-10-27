import { initializeApp } from &quot;https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js&quot;;
import { getDatabase, ref, runTransaction } from &quot;https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js&quot;;

// =====================
// Firebase Config
// =====================
const firebaseConfig = {
  apiKey: &quot;AIzaSyCediRkFLFfRhnQWG9sCAEek_6-BMcNXXY&quot;,
  authDomain: &quot;my-website-counter56.firebaseapp.com&quot;,
  projectId: &quot;my-website-counter56&quot;,
  storageBucket: &quot;my-website-counter56.appspot.com&quot;,
  messagingSenderId: &quot;538008405213&quot;,
  appId: &quot;1:538008405213:web:eed758b2a5d8466f944734&quot;,
  databaseURL: &quot;https://my-website-counter56-default-rtdb.asia-southeast1.firebasedatabase.app/&quot;
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// =====================
// Bot detection
// =====================
function isBot() {
  const ua = navigator.userAgent.toLowerCase();
  return /bot|crawl|slurp|spider|mediapartners|google|bing|yandex|baidu/.test(ua);
}

// =====================
// Unique visitor ID
// =====================
function getClientId() {
  let cid = localStorage.getItem(&quot;visitor_id&quot;);
  if (!cid) {
    cid = Math.random().toString(36).substring(2) + Date.now();
    localStorage.setItem(&quot;visitor_id&quot;, cid);
  }
  return cid;
}

// =====================
// Auto-detect site name
// =====================
const SITE_NAME = window.location.hostname.replace(/\./g, &quot;-&quot;);
const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
const siteRef = ref(db, `sites/${SITE_NAME}/${today}`);

const clientId = getClientId();
const referrer = document.referrer || &quot;Direct&quot;;
const bot = isBot();

// =====================
// Date-based Transaction
// =====================
runTransaction(siteRef, (currentData) =&gt; {
  if (currentData === null) {
    return {
      total: 1,
      unique: bot ? 0 : 1,
      bots: bot ? 1 : 0,
      visitors: { [clientId]: { lastRef: referrer, bot, time: new Date().toISOString() } }
    };
  } else {
    currentData.total = (currentData.total || 0) + 1;

    if (bot) currentData.bots = (currentData.bots || 0) + 1;
    else if (!currentData.visitors || !currentData.visitors[clientId])
      currentData.unique = (currentData.unique || 0) + 1;

    if (!currentData.visitors) currentData.visitors = {};
    currentData.visitors[clientId] = { lastRef: referrer, bot, time: new Date().toISOString() };

    return currentData;
  }
});
