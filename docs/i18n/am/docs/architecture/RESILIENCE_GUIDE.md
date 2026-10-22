# Resilience Guide (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute ሦስት የተለያዩ ግን የተያያዙ የመቋቋም አቅም (resilience) ስልቶች አሉት። እያንዳንዳቸው የተለየ መድረክ እና ዓላማ አላቸው። የማዛወሪያ (routing) ባህሪይን በሚያጣሩበት (debug) ጊዜ እነዚህን ለይተው ይያዟቸው።

![የ3-ንብርብር የመቋቋም አቅም ሞዴል](../diagrams/exported/resilience-3layers.svg)

> ምንጭ: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. የአቅራቢ ሰርኪት ብሬከር (Circuit Breaker)

**መድረክ:** ሙሉ አቅራቢ (ለምሳሌ፣ `glm`፣ `openai`፣ `anthropic`)።

**ዓላማ:** በአፕስትሪም/አገልግሎት ደረጃ ተከታታይ ውድቀት ለሚያሳይ አቅራቢ ትራፊክ መላክን ማቆም።

**ትግበራ:**

- ዋና ክላስ: `src/shared/utils/circuitBreaker.ts`
- ግንኙነት (wiring): `src/sse/handlers/chatHelpers.ts`፣ `src/sse/handlers/chat.ts`
- የሁኔታ API: `GET /api/monitoring/health`
- የዳግም ማስጀመሪያ API: `POST /api/resilience/reset`
- ማሸጊያዎች (wrappers): `open-sse/services/accountFallback.ts`
- የዳታቤዝ ሰንጠረዥ: `domain_circuit_breakers`

**ሁኔታዎች:**

- `CLOSED` — መደበኛ ትራፊክ ይፈቀዳል
- `DEGRADED` — ትራፊክ አሁንም ይፈቀዳል፣ ግን ከፍ ያሉ የአቅራቢ ውድቀቶች እየተከታተሉ ነው፤ በቂ ስኬቶች ሲገኙ፣ ትክክለኛ የግንኙነት ሙከራ ሲፈጸም፣ ወይም ለመጨረሻው የውድቀት አይነት ረጅሙ የ`OPEN` መቆያ (የ`cooldownByKind` እሴቱ፣ አለበለዚያ `resetTimeout`፣ × `maxBackoffMultiplier`፣ ቢያንስ አንድ cooldown) ያለ አዲስ ውድቀት ሲያልፍ ወደ `CLOSED` ይመለሳል
- `OPEN` — አቅራቢው ለጊዜው ታግዷል፤ combo ማዛወሪያ ያለፍበታል
- `HALF_OPEN` — የዳግም ማስጀመሪያ ጊዜ አልፏል፤ የመሞከሪያ (probe) ጥያቄ ይፈቀዳል

**ሊዋቀሩ የሚችሉ ነባሪዎች (`open-sse/config/constants.ts`፣ በDashboard → Settings → Resilience ላይ የተጋለጡ):**

| መደብ     | DEGRADED የሚሆንበት | የሚከፈትበት  | የዳግም ማስጀመሪያ ጊዜ |
| ------- | --------------- | -------- | -------------- |
| OAuth   | 5 ውድቀቶች         | 8 ውድቀቶች  | 60s            |
| API-key | 7 ውድቀቶች         | 12 ውድቀቶች | 30s            |
| Local   | የሚሰላ            | 2 ውድቀቶች  | 15s            |

`degradationThreshold` አቅራቢው መቼ `DEGRADED` እንደሚሆን ይቆጣጠራል፤ `failureThreshold` መቼ እንደሚከፈት እና እንደሚዘለል ይቆጣጠራል። የአካባቢ (Local) አቅራቢ መገለጫዎች ገና በResilience ቅንብሮች ገጽ ላይ አልተጋለጡም።

**የማነቃቂያ ኮዶች (trip codes):** የአቅራቢ-ደረጃ ሁኔታዎች `[408, 500, 502, 503, 504]` ብቻ። ለመለያ-ደረጃ ስህተቶች ፈጽሞ አይነቃቁም (አብዛኛዎቹ 401/403/429 — እነዚያ ለcooldown ወይም ለlockout የሚሆኑ ናቸው)።

**ዝግታ ማገገም (lazy recovery):** `OPEN` ሲያበቃ፣ `getStatus()`፣ `canExecute()`፣ `getRetryAfterMs()` ሁኔታውን ወደ `HALF_OPEN` ያድሳሉ። ተመሳሳዮቹ ንባቦች (እና ቀጣዩ ውድቀት) ጊዜው ያለፈበትን `DEGRADED` ወደ `CLOSED` እስኪመለስ ይቀንሱታል። የጀርባ ታይመር አያስፈልግም።

---

### በፈቃደኝነት የሚጀምር አጠቃላይ የአቅራቢ Cooldown (የመስኮት በር)

አራተኛው፣ **በፈቃደኝነት (opt-in)** የሚጀምር ንብርብር (`PROVIDER_COOLDOWN_ENABLED`፣ ነባሪ **ጠፍቷል**) በ`open-sse/services/providerCooldownTracker.ts` ውስጥ ውድቀት ለሚያሳዩ አቅራቢዎች በጥያቄዎች መካከል የሚቆይ ትውስታ ይይዛል፣ ይህም በcombo ዒላማ መወሰን (target resolution) ላይ የሚጠነቀቅ ሲሆን፣ ተከታታይ combo ጥያቄዎች በቅርቡ የወደቀ አቅራቢን እንደገና መሄድ እንዲያቆሙ ያደርጋል። የአቅራቢ-ደረጃ ግቤቶች የ`PROVIDER_PROFILES` የመስኮት በርን ይከተላሉ:

| መገለጫ    | የሚነቃበት ገደብ (`providerFailureThreshold`) | ውስጥ (`providerFailureWindowMs`) | የሚቀዝቅዝበት ጊዜ (`providerCooldownMs`) |
| ------- | --------------------------------------: | ------------------------------: | ---------------------------------: |
| OAuth   |                                    `10` |                         `15min` |                             `5min` |
| API key |                                    `15` |                         `30min` |                            `10min` |

ከገደቡ በታች አቅራቢው እየቀዘቀዘ ነው ተብሎ **አይወሰድም**፤ ስኬት መስኮቱን ያጸዳል። የግንኙነት-ደረጃ ግቤቶች (`provider:connectionId`) ይልቁንም የ`minRetryCooldownMs → maxRetryCooldownMs` ኤክስፖነንሺያል (exponential) backoff ይጠብቃሉ። ላይ-መጻፊያዎች (overrides):
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`።
የሪግሬሽን መከላከያ (regression guard): `tests/unit/provider-cooldown-window-gate.test.ts`።

## 2. የግንኙነት ማቀዝቀዣ ጊዜ

**ወሰን፦** አንድ የአቅራቢ ግንኙነት/መለያ/ቁልፍ።

**ዓላማ፦** ሌሎች የዚያው አቅራቢ ግንኙነቶች እያገለገሉ ሳሉ አንድ መጥፎ ቁልፍ ዝለል።

**ትግበራ፦**

- የማይገኝ ምልክት ማድረግ፦ `src/sse/services/auth.ts::markAccountUnavailable()`
- ምርጫ፦ `getProviderCredentials*` በዚያው ፋይል ውስጥ
- የማቀዝቀዣ ጊዜ ስሌት፦ `open-sse/services/accountFallback.ts::checkFallbackError()`
- ቅንብሮች፦ `src/lib/resilience/settings.ts`

**ለእያንዳንዱ ግንኙነት ያሉ መስኮች፦**

- `rateLimitedUntil` — የማቀዝቀዣው ጊዜ እስኪያበቃ ድረስ ያለ የጊዜ ማህተም
- `testStatus: "unavailable"`
- `lastError`፣ `lastErrorType`፣ `errorCode`
- `backoffLevel` — የኤክስፖኔንሻል ባክኦፍ ቆጣሪ

**ነባሪ የማቀዝቀዣ ጊዜዎች፦**

- የOAuth መሠረት፦ 5s
- የAPI-ቁልፍ መሠረት፦ 3s
- የAPI-ቁልፍ 429፦ የላይኛውን `Retry-After`/የማስተካከያ ራስጌዎች/ሊተረጎም የሚችል የማስተካከያ ጽሑፍ ይመርጣል
- ባክኦፍ፦ `baseCooldownMs * 2 ** failureIndex`

**የተመሳሳይ ጊዜ ውድቀት ማዕበል መከላከያ፦** በአንድ ጊዜ የሚከሰቱ ውድቀቶች የማቀዝቀዣውን ጊዜ ከመጠን በላይ እንዳያራዝሙ ወይም `backoffLevel`ን በእጥፍ እንዳይጨምሩ ይከላከላል።

**የተመሳሳይ ጊዜ ገደብ 429ዎች የባክኦፍ መሰላልን አይወጡም።** አካሉ የተመሳሳይ ጊዜ ገደብን የሚያመለክት
(`"too many concurrent requests"`፣ `"concurrency limit"`፣ `"parallel request limit"`፣ GLM `并发数过高`) `429` ማለት መለያው ጤናማ ግን ተጨናንቋል ማለት ነው።
`checkFallbackError()` የሚለውን ምክንያት `concurrency_limited` ይመልሳል፦ አሁን ወደ ቀጣዩ
ግንኙነት ይቀይሩ፣ ይህን ደግሞ ለተወሰነ `CONCURRENCY_LIMIT_COOLDOWN_MS` (1s) ወይም በላይኛው
የማስተካከያ ፍንጭ መጠን ያቀዘቅዙ፣ `backoffLevel` ሳይለወጥ ይቆያል፣ እና `skipProviderBreaker` ይቀናበራል።
ግልጽ የኮታ አካል አሁንም ያሸንፋል፣ ስለዚህ ከኮታ ንድፍ ጋር የሚመሳሰል አካል የኮታ ፍርድ ሆኖ ይቆያል።
መለያ፦ `looksLikeConcurrencyLimit()` በ `src/shared/utils/classify429.ts` ውስጥ፤
ፍርድ፦ `open-sse/services/accountFallback/concurrencyLimit429.ts`። `classify429()` (የወረዳ ሰባሪው `FailureKind`) አልተቀየረም እና ለእነዚህ አካላት አሁንም `rate_limit` ያነባል።

**የዥረት ይዘት መቆሚያዎች መለያውን አያቀዘቅዙም።** የይዘት መቆሚያ ጠባቂው
(`open-sse/utils/streamHandler.ts`) በጊዜው ምንም የሞዴል ውጤት ባልላከ ዥረት ላይ ሲተው፣
`markAccountUnavailable()` ስህተቱን በግንኙነቱ ላይ ይመዘግባል ግን ምንም የማቀዝቀዣ ጊዜ
አያስቀምጥም፦ መቆሚያው የዚያ ጥያቄ ነው፣ ብዙውን ጊዜም እስካሁን ውጤት የሌለው ረጅም የማመዛዘን ዙር ነው።
ኦፕሬተሮች `resilienceSettings.streamStallCooldown.enabled` በማብራት እንደገና
ማንቃት ይችላሉ (ነባሪ `false`)።

**የማመዛዘን ፍሬሞች የይዘት መቆሚያ በጀቱን እንደገና ያስጀምራሉ።** የማመዛዘን ሞዴል ከመጀመሪያው
የሚታየው ቶከን በፊት ለደቂቃዎች ማሰብ ይችላል፦ Claude የማሰብ ጽሑፋቸው ባዶ ሊሆን የሚችል
`thinking_delta` ፍሬሞችን ያስተላልፋል፣ የResponses API ደግሞ አንዱን ተከትሎ አንድ የማመዛዘን ንጥል
ያስተላልፋል። `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) እነዚህን
ፍሬሞች ይለያል፣ ጠባቂውም ዙሩን ከመሰረዝ ይልቅ በየእያንዳንዱ ፍሬም ላይ በጀቱን እንደገና ይጀምራል።
አሁንም የሞዴል ውጤት አይደሉም፣ ስለዚህ በማመዛዘን ብቻ የሚያበቃ ዙር አሁንም እንደ ባዶ
ሪፖርት ይደረጋል፣ ማመዛዘን አቁሞ የልብ ምት ብቻ የሚልክ ዙር ደግሞ አሁንም ጠባቂውን ያስነሳል።

የKiro ሁለትዮሽ `reasoningContentEvent` ፍሬሞች ባዶ ያልሆነ ፊርማ ያላቸው ከሆነ ይህን
የማመዛዘን እንቅስቃሴ በአስፈጻሚው በኩል እንደ ባዶ `reasoning_content` ዴልታ ይጠብቃሉ። ፊርማው
አይተላለፍም። ሜታዳታ፣ ያልተሟሉ ፍሬሞች እና ባዶ ፊርማዎች የይዘት በጀቱን እንደገና
አያስጀምሩም፤ ራሱን የቻለው የንቁ ዥረት ጊዜ ማብቂያ እና የደንበኛ ስረዛ አሁንም
ተግባራዊ ይሆናሉ (`open-sse/executors/kiro/reasoning.ts`)።

**የመጨረሻ ሁኔታዎች (የማቀዝቀዣ ጊዜዎች አይደሉም)፦**

- `banned` — በተከለከለ-ቃል ፍለጋ / የመለያ-እገዳ መለያ ይቀናበራል (ይመልከቱ [BAN_DETECTION](../security/BAN_DETECTION.md))፣ እንዲሁም በሦስት ተከታታይ የላይኛው በየጥያቄ እምቢታዎች (`request_rejected`፣ ለምሳሌ Anthropic OAuth 403 `"Request not allowed"` — `open-sse/services/requestRejectedStreak.ts`)፤ አንድ ነጠላ እምቢታ ግንኙነቱን ብቻ ያቀዘቅዛል
- `expired` (ከተወሰነ ድጋሚ ሙከራ በኋላ ወደ መጨረሻ ሁኔታ ይሸጋገራል — `EXPIRED_RETRY_MAX = 3` ከኤክስፖኔንሻል ባክኦፍ ጋር — ስለዚህ ጊዜያዊ የOAuth ስህተቶች መለያው ከመዘጋቱ በፊት ራሳቸውን ማዳን ይችላሉ)
- `credits_exhausted`

እነዚህ ምስክርነቶች እስኪቀየሩ ወይም ኦፕሬተር እስኪያስተካክላቸው ድረስ ይቆያሉ። የመጨረሻ ሁኔታዎችን በጊዜያዊ የማቀዝቀዣ ሁኔታ አይተኩ።

**ሰነፍ መልሶ ማገገም፦** `rateLimitedUntil` ሲያልፍ፣ ግንኙነቱ እንደገና ብቁ ይሆናል። በተሳካ አጠቃቀም ላይ፣ `clearAccountError()` ሁሉንም የስህተት መስኮች ያጸዳል።

### የClaude OAuth የአጠቃቀም ግድግዳ፦ ዝቅተኛ-ቅድሚያ መስመር + የክፍለ-ጊዜ ገደብ ማስተካከያ

**ወሰን፦** አንድ የClaude ምዝገባ (OAuth) ግንኙነት። ሁለቱም ባህሪያት **ለየግንኙነት
አማራጭ (opt-in)** ናቸው (ግንኙነት አርትዕ → የClaude ክፍል → `lowPriorityMode` / `autoLimitReset` በ
`providerSpecificData` ውስጥ፣ ሁለቱም በነባሪ ጠፍተዋል) እና የClaude Codeን `/low-priority` እና
`/limit-reset` ትዕዛዞችን ያንጸባርቃሉ (የመገናኛ ውል ከClaude Code 2.1.263 የተያዘ)።

**ትግበራ፦**

- የሁኔታ ማሽን + የምላሽ ምደባ፦ `open-sse/services/claudeLowPriority.ts`
- የማስተካከያ ሁኔታ/የጥያቄ ደንበኛ፦ `open-sse/services/claudeLimitReset.ts`
- የአስፈጻሚ መንጠር (የራስጌ ማስገባት + በዚያው መለያ ድጋሚ ሙከራ)፦ `open-sse/executors/base.ts::execute()`
- የአማራጭ ተግባራዊነት ማስቀመጥ፦ `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**ማስነሻ፦** የ5-ሰዓት የአጠቃቀም ግድግዳ — ራስጌዎቹ
`anthropic-ratelimit-unified-status: rejected` የሚይዙ እና መለያው ብቁ ሲሆን
`anthropic-ratelimit-unified-slow-offer: treatment` የሚይዙ `429`። ከዚያ የመጀመሪያ ግድግዳ
429 በፊት ምንም አይላክም፤ የተቀናጁ ራስጌዎች የሌለው የፍንዳታ 429 በመደበኛው የማቀዝቀዣ
መንገድ ያልፋል።

**ዝቅተኛ-ቅድሚያ መስመር** (`lowPriorityMode`)፦

- በwall 429 ላይ executor ቀረጻውን (offer) ይቀበላል እና ወዲያውኑ **ተመሳሳይ** accountን በ`anthropic-usage-limit: slow` እንደገና ይሞክራል፤ lane እስከ ተገለጸው `anthropic-ratelimit-unified-reset` (+60s ተጨማሪ ጸጥታ ጊዜ) ድረስ ንቁ ይቆያል እና በዚያ መስኮት ውስጥ ያለ እያንዳንዱ request ያንን header ይሸከማል። የተከለከለው 429 በጭራሽ ወደ `handleChatCore` አይደርስም፣ ስለዚህ connection ወደ cooldown **አይገባም** እና አይተካም (rotate አይደረግም)።
- በኋለኛው responses ላይ ያለው `anthropic-ratelimit-unified-slow-status`፦ `active` / `not_needed` laneን ያቆያሉ፤ `slot_busy` (429) ወይም `529` የserverን `anthropic-ratelimit-unified-slow-retry-after` (ነባሪ 20s፣ clamp 5–600s፣ ±30% jitter) ይጠብቃሉ እና እንደገና ይሞክራሉ፣ ይህም በ`anthropic-ratelimit-unified-slow-max-wait` (ነባሪ 20 ደቂቃ፣ clamp 1 ደቂቃ–6 ሰዓት) የተገደበ ነው — ከዚያ በላይ lane ያበቃል እና 10 ደቂቃ cool-off እንደገና መቀበልን (re-acceptance) ይከለክላል። መጠበቁ ተጨማሪ በrequest የራሱ upstream-start timeout ቀሪ ክፍል (`resolveFetchStartTimeout`፣ በነባር 10 ደቂቃ) 5 ሰከንድ ህዳጌ ቀንሶ ይገደባል፦ ያ ገደብ ባይኖር ኖሮ 20 ደቂቃው ነባሪ max-wait ከrequest ሕይወት ይበልጥ ነበር እና sleep በመጠበቅ መሃል ላይ ሲቋረጥ ነበር፣ ይህም ምሁራዊው `max_wait` መጨረሻ + cool-off ፋንታ `TimeoutError` ይታያል ነበር።
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`፣ የ5 ሰዓት መስኮት rollover፣ ወይም `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (ይህ በማንኛውም status ላይ እንደ `extra_usage` ያበቃዋል፣ ምክንያቱም የተከፈለበት overage አሁን wallን ይሸፍናል) laneን ያበቃሉ፤ response ከዚያ ወደ መደበኛው cooldown መንገድ ይፈሳል። `budget_exhausted` እስከ ተገለጸው budget reset (≤ 8 ቀናት) ድረስ ይታወሳል።
- የwall ምርመራ ከexecutor የራሱ በ400 የሚነሱ የውስጥ-ሙከራ እንደገና ሙከራዎች (context አርትዖት፣ thinking/effort clamps፣ param auto-learn) በኋላ ይሰራል፣ ስለዚህ በእነዚያ እንደገና ሙከራዎች አንዱ ላይ ብቻ የሚታይ wall 429 ወደ cooldown መንገድ ከመድረስ ይልቅ አሁንም ይከለከላል (intercept ይደረጋል)።
- ሁኔታው በእያንዳንዱ connection በማህደረ ትውስታ (in-memory) ውስጥ ነው (restart ለእንደገና መቀበል አንድ ተጨማሪ wall 429 ያስከፍላል)።

**የSession-ገደብ ዳግም ማስጀመር (reset)** (`autoLimitReset`፣ ሁለቱም በርትተው ሲሆኑ ከlane በፊት የሚሞከር)፦

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → የ`juniper_tide` ብሎክ፤ `arm: "reset"` እና `available: true` ሲሆኑ፣
  `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` ከ
  `{ "program": "juniper_tide" }` ጋር (የድርጅቱ UUID ከ
  `providerSpecificData.organizationUUID`፣ bootstrap fallback)።
- `result: reset|not_limited` → ጥያቄው በሙሉ ፍጥነት እንደገና ይሞከራል (ምንም slow header የለም)።
  `already_used` / `not_offered` `next_available_at`ን ያስታውሳሉ (memoise) (ነባሪ አንድ ሳምንት)፤ ማንኛውም ስህተት 15 ደቂቃ backs off ያደርጋል። ዳግም ማስጀመሪያው በሳምንት አንድ ጊዜ ነው እና አሁንም ወደ ሳምንታዊው ገደብ ይቆጠራል።

የRegression ጠባቂዎች፦ `tests/unit/claude-low-priority-mode.test.ts`,
`tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`.

### የSession affinity (#7274)

**ወሰን፦** አንድ የደንበኛ session (`X-Session-Id` / `x-codex-session-id` / `x-omniroute-session` header) ከአንድ connection ጋር የተጣመረ (pinned)፣ ለ**ማንኛውም** provider።

**ዓላማ፦** ብዙ-ዙር agentን (Claude Code፣ aider፣ ብጁ agents) በጥያቄዎች ውስጥ በተመሳሳይ account ላይ ማቆየት፣ ይህም የመለያ-መሻር (cross-account) context መጥፋትን እና በበየ-account የsession ሁኔታ ላላቸው providers ተከታታይ cold-start 429ዎችን ይቀንሳል።

**አተገባበር፦**

- TTL መፍትሄ፦ `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- የpin ምርጫ/ፍጠር፦ `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Header ማውጣት (አጠቃላይ፣ ማንኛውም provider)፦ `src/sse/services/auth.ts::extractSessionAffinityKey()`
- የተቀመጠ (persisted) pin ሰንጠረዥ፦ `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- ቅንብር፦ `sessionAffinityTtlMs` (አጠቃላይ TTL በms፣ `0` ያሰናክላል) — `src/lib/db/settings.ts`. migration `124_generic_session_affinity_ttl.sql` ከCodex-ብቻ `codexSessionAffinityTtlMs` ተቀይሮ የተሰየመ፣ ይህም ቀደም ሲል የተዋቀረ ማንኛውንም Codex TTL እንደ አዲሱ ነባሪ ያስተላልፋል።

ከ#7274 በፊት፣ `resolveSessionAffinityTtlMs()` ከ`codex` በስተቀር ለእያንዳንዱ provider ወደ `0` ጠብቆ ይመለስ ነበር (hard-bail)፣ ስለዚህ የTTL ቅንብሩ (እና የsession headers) pin ማድረጊያው ስርዓት እና header extraction አስቀድመው provider-agnostic ቢሆኑም በሌላ ስፍራ ምንም ውጤት አልነበራቸውም። እካዳሚው ያንን ቀደምት መመለስ (early-return) አስወግዷል፤ TTL አሁን በአጠቃላይ ከ`0` በላይ ሲቀመጥ ለእያንዳንዱ provider በእኩልነት ይተገበራል።

ሶስቱ የsession-affinity headers በጭራሽ upstream አይላኩም — executors የደንበኛ headersን ማሳለፍ ይልቅ የራሳቸውን upstream headers ከቅድ ይገንባሉ፣ ስለዚህ ይህ የውስጥ correlation id ብቻ ነው የሚሆነው።

### ልዩ የሚስተዳደር session connection leases

**ወሰን፦** አንድ ንቁ የሚስተዳደር (managed) HTTP client/session አንድ ብቁ OmniRoute connection ይይዛል።

**ዓላማ፦** በጥያቄዎች መካከል ጠንካራ የማሰራጫ ግመት (hard routing fence) ለሚፈልጉ ደንበኞች ዘላቂ ልዩ የconnection ባለቤትነት መስጠት። ይህ ከsession affinity ይለያል፣ ያም ለስላሳ የቀጣይነት ምርጫ ነው፦ ልዩ lease የlifecycle ሁኔታን በSQLite ውስጥ ያቆያል፣ አጠቃላይ ንቁ-ባለቤት እና ንቁ-connection ልዩነትን (uniqueness) ያስከብራል፣ እና የከፋ (stale) generation ከprovider dispatch በፊት ውድቅ ያደርጋል።

ባህሪው በእያንዳንዱ API ቁልፍ መሰረት opt-in ነው። የሚስተዳደር ቁልፍ የ`lease:exclusive` scope እና ግልጽ ባዶ ያልሆነ `allowedConnections` ዝርዝር ሊኖረው ይገባል። ማንኛውም HTTP client የlifecycle endpointን መጠቀም ይችላል፤ የደንበኛ ስም፣ user-agent፣ provider፣ የOAuth ዘዴ ወይም model አያስፈልግም። lease connectionን ይይዛል እንጂ modelን አይደለም፣ ስለዚህ የmodel ለውጥ ተያያዥነቱን (binding) ያቆያል connection በመደበኛነት ብቁ ሆኖ ሲቆይ። መደበኛ የmodel፣ quota፣ health፣ cooldown እና allowlist ህጎች ስልጣናቸውን ይቀጥላሉ እና ተመሳሳዩን generation ወደ ሌላ ነጻ ብቁ connection ሊያስተላልፉት ይችላሉ።

የሕይወት ዑደቱ `POST /api/v1/session-leases` ሲሆን ከJSON እርምጃዎች `acquire`፣ `renew` እና `release` ጋር ነው።
የሚተዳደሩ የግምት (inference) ጥያቄዎች ግልጽ ያልሆነውን የ`X-OmniRoute-Lease-Owner` እሴት እና ትክክለኛውን
`X-OmniRoute-Lease-Generation` ያቀርባሉ። ባለቤቱ `vlo_` ተከትሎ 43 base64url ቁምፊዎችን ይጠቀማል፤ የሚቀመጠው
የእሱ SHA-256 ሃሽ ብቻ ነው። እያንዳንዱ የመጨረሻ መላኪያ መከላከያ (fence) እውናኛነቱ የተረጋገጠውን የAPI ቁልፍ መታወቂያ እና
ንቁ የግንኙነት መታወቂያ ያገናኛል። የሊዝ መቆጣጠሪያ ራስጌዎች ከመዝገቦች፣ ከተቀመጡ የጥያቄ ምስሎች እና ከአፕስትሪም
አፈጻጸም ራስጌዎች ይወገዳሉ።

ተራው ማዘዋወር ብቁ የሆኑ የተተዳደሩ እጩዎች ካሉት ግን እያንዳንዱ ነጻ እጩ በሌላ ባለቤት ንቁ ሊዝ የተያዘ ከሆነ፣
OmniRoute የHTTP `429`፣ የሊዝ አቅም ማጣት ኮድ፣ አቅምን በመጠባበቅ ላይ ያለ ሁኔታ እና ከቅድሚያው ተዛማጅ የማብቂያ
ጊዜ የሚመነጭ ወሰን ያለው `Retry-After` ይመልሳል። ተራ ባዶ ብቁነት የሊዝ ፉክክር አይደለምም፤ ያለውንም የማዘዋወር
ስህተት ትርጉም ይጠብቃል።

ተዛማጅ ስርዓቶች በተለየ ይቀጥላሉ፦

- የOAuth ክፍለ ጊዜ ይዞታ ለOAuth መለያዎች በሂደት ውስጥ ብቻ የሚሠራ ለስላሳ (soft) ስርጭት ነው።
- የመለያ ሴማፎሮች የጥያቄ ተጣምሮ አፈጻጸም ፈቃዶችን ይሰጣሉ፤ ጥያቄውም ሲጠናቀቅ ያበቃሉ።
- ልዩ የተተዳደሩ የክፍለ ጊዜ ሊዞች ከትውልድ መከላከያ ጋር ዘላቂ የሕይወት ዑደት ባለቤትነት ናቸው።

---

## 3. የሞዴል መቆለፍ

**ወሰን:** የአቅራቢ + ግንኙነት + ሞዴል ሶስትዮሽ።

**በሁኔታ መሠረት የቁልፍ ወሰን:** መቆለፊያው የሚጽፍበትን ቁልፍ የሚወስነው የስህተቱ ሁኔታ ነው
(`resolveLockoutScope()` በ `open-sse/services/accountFallback/exactModelLock.ts`):

- `429` / `403` / `402` — የኮታ ወይም የመብት ምልክት — የ**ኮታ ቤተሰቡን** ይቆልፋል፦
  ለ codex ሙሉውን `codex` / `spark` ወሰን (በዚያ ግንኙነት ያሉ ሁሉንም
  `gpt-5*` ሞዴሎች)፣ ለሌሎች አቅራቢዎች `getQuotaScopedModelForProvider()`።
- `404` ባዶ ሞዴሉን ይቆልፋል (`getModelLockKey()` `not_found`ን ያጠባል)።
- ማንኛውም ሌላ ሁኔታ — `5xx` የትራንስፖርት/ሰርቨር አለመሳካቶች እና ከጥራት ማረጋገጫ የመነጨው የOmniRoute `502` — ትክክለኛውን
  የአቅራቢ/ግንኙነት/ሞዴል ሶስትዮሽ ብቻ ይቆልፋል። በአንድ ሞዴል ላይ የተበላሸ የውሂብ ፍሰት ስለ መለያው ኮታ ማስረጃ አይደለም፤ ይህ ደንብ ከመጣ በፊት በ `codex/gpt-5.6-luna` ላይ የተፈጠረ አንድ ባዶ ምላሽ በግንኙነቱ ያሉትን ሁሉንም `gpt-5*` ሞዴሎች ከማዘዋወር ላይ ለ2–30 ደቂቃዎች (በደረጃ እየጨመረ) ያስወግድ ነበር፣ ኮታው ግን ሳይነካ።
- የተጠሪው ግልጽ `scope` አማራጭ ሁልጊዜ ቅድሚያ አለው (Antigravity `"exact"`ን ያስተላልፋል)።

**ዓላማ:** አንድ ሞዴል ብቻ የማይገኝ ወይም የኮታ ገደብ ያለበት ሲሆን ሙሉ ግንኙነትን እንዳያሰናክል መከላከል።

**ምሳሌዎች:**

- በሞዴል ደረጃ ኮታ የሚያስተዳድሩ አቅራቢዎች `429` ሲመልሱ
- የሌለ አንድ ሞዴል `404` ሲመልሱ የአካባቢ አቅራቢዎች
- ለአቅራቢ የተለዩ የሞድ/ሞዴል ፈቃድ አለመሳካቶች (ለምሳሌ የGrok ሞዶች)

**ትግበራ:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`።

### የሞዴል ማቀዝቀዣ ዳሽቦርድ (v3.8.0)

UI: ቅንብሮች → የሞዴል ማቀዝቀዣዎች (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

ንቁ የመቆለፊያ ሁኔታዎችን ከአቅራቢ፣ ግንኙነት፣ ሞዴል፣ ምክንያት እና expiresAt ጋር ይዘረዝራል። ኦፕሬተሮች ከካርዱ ላይ ሞዴልን በእጅ እንደገና ማንቃት ይችላሉ።

**REST API:**

- `GET /api/resilience/model-cooldowns` — ንቁ የመቆለፊያ ሁኔታዎችን ይዘርዝራል
- `DELETE /api/resilience/model-cooldowns` — በእጅ እንደገና ማንቃት። የሰውነት ይዘት፦ `{provider, connection, model}`። ማረጋገጫ፦ management።

### የማቀዝቀዣ አስተዳዳሪ

UI: ክትትል → የማቀዝቀዣ አስተዳዳሪ (`src/app/(dashboard)/dashboard/resilience/cooldowns/`)።

ለጊዜያዊ ምክንያት ከማዘዋወር ውጭ ለሆነ እያንዳንዱ ግንኙነት አንድ ገጽ ያቀርባል፤ እያንዳንዱን የአቅራቢ ገጽ መክፈት አያስፈልግም። የግንኙነት ማቀዝቀዣዎችን፣ የሞዴል መቆለፊያዎችን እና የመጨረሻ ሁኔታዎችን ይዘረዝራል፤ እነዚህንም በግንኙነት፣ ለተመረጡ ግንኙነቶች ወይም የአንድ አቅራቢ ሁሉንም ግንኙነቶች መሠረት ያጸዳል። በብዛት የሚስተካከሉ የማቀዝቀዣ ደንቦችንም ያስተካክላል፦ `streamStallCooldown.enabled` እና የOAuth / API-key `connectionCooldown` መነሻ የማቀዝቀዣ ጊዜ እና ከፍተኛው የድጋሚ መጨመሪያ ደረጃዎች (በ
`PATCH /api/resilience` ይቀመጣሉ)። የመጨረሻ ሁኔታዎች (`banned`, `expired`, `credits_exhausted`) ይዘረዘራሉ፣ ነገር ግን እዚህ ፈጽሞ አይጸዱም።

**REST API** (`src/lib/resilience/cooldownManager.ts`, ማረጋገጫ፦ management):

- `GET /api/resilience/cooldowns[?provider=]` — ሁኔታ፣ የቀረው የማቀዝቀዣ ጊዜ፣ የድጋሚ መጨመሪያ ደረጃ፣ የመጨረሻው የስህተት አይነት እና የሞዴል መቆለፊያዎች ያላቸውን ግንኙነቶች ይመልሳል (የማረጋገጫ መረጃ የለውም)
- `POST /api/resilience/cooldowns` — የሰውነት ይዘት `{connectionIds: string[]}` ወይም `{all: true, provider?}`፤ `{cleared, unchanged, skippedTerminal, lockoutsCleared}`ን ይመልሳል

### የመቆለፊያ ቅንብሮች UI + በስኬት የሚቀንስ መልሶ ማግኛ (v3.8.23)

የሞዴል መቆለፍ ሁልጊዜ ከሚነቃ በኮድ ውስጥ ከተወሰነ ባህሪ ወደ ሙሉ በሙሉ ሊዋቀር ወደሚችል፣ በተጠቃሚው ፈቃድ ብቻ የሚነቃ ባህሪ ተቀይሯል፤ የራሱ የቅንብሮች ካርድ እና ራሱን የሚያድስ የመልሶ ማግኛ መንገድም አለው።

**የቅንብሮች ካርድ:** ቅንብሮች → የሞዴል መቆለፍ
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`)።
ይህ ከላይ ካለው የንባብ-ብቻ `ModelCooldownsCard` **የተለየ** ነው (ይህ ካርድ ንቁ የመቆለፊያ ሁኔታዎችን _ብቻ ይዘረዝራል_) — አዲሱ ካርድ መለኪያዎቹን _ያዋቅራል_። ነባሪዎቹ በ `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`) ውስጥ ይገኛሉ፦

| ቅንብር                    | ነባሪ                              | ትርጉም                                                        |
| ----------------------- | -------------------------------- | ----------------------------------------------------------- |
| `enabled`               | `false`                          | ዋና መቀየሪያ — የሞዴል መቆለፍ በነባሪ ጠፍቷል።                             |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | እንደ የሞዴል ወሰን ያለው አለመሳካት የሚቆጠሩ የላይኛው አገልጋይ ሁኔታዎች።            |
| `baseCooldownMs`        | `120_000` (120 ሰከንድ)             | ለመጀመሪያው አለመሳካት የሚሰጠው የመጀመሪያ የመቆለፊያ ጊዜ።                      |
| `maxCooldownMs`         | `1_800_000` (30 ደቂቃ)             | በደረጃ የሚጨምረው የማቀዝቀዣ ጊዜ ከፍተኛ ገደብ።                             |
| `maxBackoffSteps`       | `10`                             | ከፍተኛው የኤክስፖኔንሻል-ድጋሚ መጨመሪያ ደረጃዎች ብዛት።                        |
| `useExponentialBackoff` | `true`                           | ተደጋጋሚ አለመሳካቶች የማቀዝቀዣ ጊዜውን በኤክስፖኔንሻል መጠን እንዲጨምሩ ወይም እንዳይጨምሩ። |

ቅንብሮቹ በመደበኛው የቅንብሮች ማከማቻ በኩል ይቀመጣሉ እና በየመቋቋሚያ ቅንብሮች ስኪማ ይረጋገጣሉ፤ ካርዱም `baseCooldownMs`/`maxCooldownMs`ን
(`maxCooldownMs ≥ baseCooldownMs` እንዲሆን) እና `maxBackoffSteps`ን በተወሰኑ ገደቦች ውስጥ ያቆያል።

**በስኬት የሚቀንስ መልሶ ማግኛ:** መልሶ ማግኛው በቆጣሪ ጊዜ ማብቂያ ብቻ አይደለም። ጤናማ ምላሽ የሞዴሉን የአለመሳካት ቆጠራ ቀስ በቀስ ወደ ታች ያመጣዋል፤ በመካከለኛው ጊዜ ውስጥ ያገገመ ሞዴል ቆጣሪው ከማለቁ በፊት መጨመሩን እንዲያቆም (እና እንዲጸዳ) ያደርጋል። በተሳካ የcombo ዒላማ ላይ `open-sse/services/combo.ts`
`decayModelFailureCount()`ን ይጠራል (`open-sse/services/accountFallback.ts`)፤ ይህም የተቀመጠውን
`failureCount` በግማሽ ይቀንሳል (`Math.floor(failureCount / 2)`)፤ ወደ `0` ሲደርስ የመቆለፊያ መዝገቡ ሙሉ በሙሉ ይሰረዛል። ተጓዳኙ `recordModelLockoutFailure()` በደረጃ መጨመሪያ ጊዜ መስኮት ውስጥ በሚፈጠሩ አለመሳካቶች ላይ ቆጠራውን ይጨምራል (እና የማቀዝቀዣ ጊዜውን በደረጃ ያሳድጋል)። ይህ በስኬት የሚቀንስ መልሶ ማግኛ ከመደበኛው የቆጣሪ ጊዜ ማብቂያ በተጨማሪ ነው — ሁለቱም መንገዶች ሞዴልን እንደገና ማንቃት ይችላሉ።

**ሁኔታ:** የመቆለፊያ ሁኔታዎች በማስታወሻ ውስጥ ይያዛሉ (በእያንዳንዱ process የሚገኙ `Map`s የ `ModelLockoutEntry` መዝገቦችን በ
`provider:connectionId:model` ቁልፍ ይይዛሉ፤ የትክክለኛ ወሰን መቆለፊያዎች ደግሞ በ
`provider:connectionId:exact:model` ይታወቃሉ)፤ በDB ውስጥ አይቀመጡም — ከዳግም ማስጀመር በኋላ ይጠፋሉ። _ቅንብሮቹ_ ግን ይቀመጣሉ፤ ንቁው የመቆለፊያ _ሁኔታ_ ጊዜያዊ ነው።

---

## 4. የኮታ-ካፍል ማመሳሰል ቁጥጥር (v3.8.36)

የደንበኝነት ምዝገባ መለያዎች (GLM፣ MiniMax ወዘተ.) ብዙውን ጊዜ ~1–3 ብቻ በአንድ ጊዜ የሚከናወኑ ጥያቄዎችን ይቀበላሉ; ይህንን ማለፍ 429 ስህተቶችን እና ማቀዝቀዣዎችን ያስከትላል። ይህ ችግር በ**ኮታ-ካፍል** (`qtSd/…`) ኮምቦዎች ሥር በጣም ከባድ ነው፣ በዚያም ብዙ የAPI ቁልፎች አንድ የላይኛው ጅረት መለያ ይጋራሉ። ሦስት ሽፋኖች የጋራ መለያ ከጎርፍ ጋር እንዳይገጥም ይከላከላሉ።

### የእያንዳንዱ ግንኙነት የማመሳሰል ገደብ (`max_concurrent`)

እያንዳንዱ የአቅራቢ ግንኙነት የ`max_concurrent` ከፍተኛ ገደብ ማውጣት ይችላል
(`provider_connections.max_concurrent`፣ በግንኙነት ሞዳል / API / DB ውስጥ የሚዘጋጅ)።
ገደብ ከሌለ ባዶ ይተዉት። ይህ ከታች ያለውን የተከታታይነት ሽፋን የሚያንቀሳቅስ ብቸኛው መቆጣጠሪያ ነው — ወደ መለያው እውነተኛ ማመሳሰል ያስቀምጡት (ለምሳሌ GLM ~1፣ MiniMax ~2)።

### የእያንዳንዱ ሞዴል የማመሳሰል ገደቦች (`modelConcurrency`)

ግንኙነቱ በተጨማሪም በ`rateLimitOverrides` ካርታው ውስጥ ትክክለኛ የእያንዳንዱ ሞዴል የማመሳሰል ገደቦችን ማውጣት ይችላል፦

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

በግንኙነት ሞዳል ውስጥ ያስቀምጡት (**የፍጥነት ገደብ ሽፋኖች → የእያንዳንዱ ሞዴል የማመሳሰል ገደቦች**፣ በእያንዳንዱ መስመር አንድ `model=cap`) ወይም በ`PATCH /api/providers/[id]` በተመሳሳይ JSON ቅርጽ። ዋና ትርጉሞች፦

- **በግንኙነት ደረጃ vs በሞዴል ደረጃ፦** `maxConcurrent` የጋራ የግንኙነት-አቀፍ ከፍተኛ ገደብ ሆኖ ይቀጥላል። ሁለቱም ሲተገብሩ፣ ሁለቱም በርዎች በአንድ ውህድ በር ውስጥ በአቶሚክ ሁኔታ ይገኛሉ
  (`global → provider → account → model`); ውጤታማው ባህሪ ከሚተገበሩት መካከል ጥብቁ ገደብ ነው።
- **ትክክለኛ የሞዴል-ቁልፍ ይዛመዳል፦** ቁልፉ ከመስወገጃ ፍታህ በኋላ ወደ አስፈጻሚው የሚተላለፍ የሞዴል ሕብረቁምፊ ነው — በተለምዶ ቀላሉ የላይኛው ጅረት የሞዴል መታወቂያ
  (`glm-5`)፣ ሳይሆን የደንበኛ-ጎን `provider/model` ምህዳር (`zai/glm-5` ከ`glm-5` ጋር አይዛመድም)። እሴቶቹ አዎንታዊ-ኢንቲጀር የተዛማጅ-ጥያቄ ገደቦች ናቸው።
- **አካባቢያዊ ተራ መጠበቅ፣ ምንም ግኝት የለም፦** ተጨባጭ ጥያቄዎች በአካባቢው በአሁኑ ተራ/ጊዜ-ማብቂያ ትርጉሞች በተራ ይጠብቃሉ (የተለዩ `SEMAPHORE_TIMEOUT` /
  `SEMAPHORE_QUEUE_FULL` የመግቢያ ስህተቶች)። OmniRoute የላይኛው ጅረት ፖሊሲ አያገኝም ወይም አይገምትም — ኦፔሬተሩ ያዘጋጀውን ትክክለኛ ገደብ ብቻ ያስከብራል። የሞላ የሞዴል በር አቅራቢውን ፈጽሞ አያሰናክልም እና ቋሚ የሞዴል መዝጊያ ፈጽሞ አይፈጥርም; የላይኛው ጅረት 429/ማቀዝቀዣ/fallback ባህሪ የስህተት መጨረሻ ድጋፍ ሆኖ ይቀጥላል።
- **በእያንዳንዱ ግንኙነት፣ በእያንዳንዱ ሂደት መስፈሪያ፦** ገደቦች በእያንዳንዱ የዳታቤዝ ግንኙነት የተከፋፈሉ ናቸው እና በማህደረ ትውስታ ውስጥ ይዘዋል፣ ስለዚህ ተመሳሳይ የላይኛው ጅረት የAPI ቁልፍ እንደገና የሚጠቀሙ ሁለት ግንኙነቶች እርስ በርስ አይቀናጁም።
- **ያልተዋቀረ ማለት ያልተለወጠ ማለት ነው፦** ካርታውን ማስተዋል (ወይም የዳሽቦርዱን መስክ ባዶ መተው) ምንም የሞዴል በር አይጨምርም። ምንም አጠቃላይ የአቅራቢ ገደብ ሳይገልጽ የምሳሌ ውቅረት፦

```text
glm-5=1
glm-4.7=3
```

### የኮታ-ካፍል ጥያቄ ተከታታይነት

የኮታ-ካፍል መላኪያ አዎንታዊ `max_concurrent` የገለጸ ግንኙነትን ሲያግብር፣ ወደዚያ **መለያ** የሚሄዱ ተዛማጅ ጥያቄዎች በእያንዳንዱ ግንኙነት ሴማፎር (ቁልፍ `qsconn:<connectionId>`) በኩል ተከታታይ ይሆናሉ፦ ተጨባጭ ጥያቄዎች መለያውን ከማራገፍ ይልቅ **በተራ ውስጥ ይጠብቃሉ**። ይህ **fail-open** ነው — የሞላ ተራ ወይም ጊዜ-ማብቂያ ሊላክ የሚገባ ጥያቄን ከመካድ ይልቅ ያለ ቦታ ይቀጥላል። በ**ቅንብሮች → ጽናት → የኮታ-ካፍል የእያንዳንዱ ግንኙነት ማመሳሰል** ውስጥ ያብሩ/ያጥፉ
(`resilienceSettings.quotaShareConcurrencyLimit.enabled`፣ ነባሪ በርቷል)። የ`max_concurrent` ገደብ ከሌለ ባህሪው አይለወጥም።

> የኮታ-ካፍል መስወገጃ በር (`selectQuotaShareTarget`፣ DRR + P2C) ራሱ
> fail-open ነው እና ወደ ገደቡ የደረሰ ግንኙነትን _ቅድሚያ መስጠትን_ ብቻ ያቆማል — በነጠላ-ግንኙነት ገንዳ ጥብቅ ገደብ ማድረግ አይችልም፣ ስለዚህ ጎርፉን በእውነት የሚያጠቃው ይህ ሴማፎር ነው።

### ኮምቦ ማቀዝቀዣ-አዋቂ እንደገና ሙከራ

ለእያንዳንዱ የኮምቦ ስትራቴጂ (ሲነቃ)፣ ለአጭር ጊዜያዊ ማቀዝቀዣ 429 የሚያወጣ ጥያቄ 429 ከመመለስ ይልቅ ማቀዝቀዣውን ይጠብቃል እና እንደገና ይልካል — ይህ በባለ-ብዙ-ሞዴል ኮምቦዎች ላይ የGemini-ደረጃ TPM/RPM መስኮቶችን (~60ሰከንድ retry-after) ይሸፍናል፣ ለምሳሌ የ2-ሞዴል ኮምቦ ሁለቱም ዒላማዎች በእያንዳንዱ ሞዴል የፍጥነት ገደብ ሲመቱ። በ**ቅንብሮች → ጽናት** ውስጥ በ`comboCooldownWait` (`enabled`፣ `maxWaitMs`፣ `maxAttempts`፣ `budgetMs`) የሚወሰን። በ`quota_exhausted` (እስከ እኩለ ሌሊት ተቆልፏል) ወይም በማረጋገጫ/አልተገኘም ምክንያቶች ፈጽሞ አይጠብቅም።

ተመሳሳዩ በር ከመላክ በፊት ያለውን ሁኔታ (#16319) ይሸፍናል፦ የኮምቦው እያንዳንዱ ዒላማ ማንኛውም ሙከራ ከመድረጉ በፊት ሞዴሉ በአጭር ጊዜያዊ መቆለፊያ ውስጥ ስለሚቀመጥ ሲዝለል፣ የዜሮ-ሙከራ መንገዱ ቆለፉን በተመሳሳይ ገደቦች ሥር ይጠብቃል እና እንደገና ይልካል፣ ምልክት-አልባ `503 ALL_TARGETS_SKIPPED` ከመመለስ ይልቅ። መጠበቅ ሳይፈቀድ ሲቀር (ገደብ፣ ሙከራ ወይም በጀት ሲያልቅ፣ ወይም ባህሪው ሲጠፋ)፣ የመጨረሻው ምላሽ ወደ `429 rate_limit_error` ይሻረዋል ከቀዳሚው ጊዜያዊ ቆለፍ ማብቂያ `retry_after` / `reset_at` ጋር; የኮታ፣ የማረጋገጫ እና አልተገኘም ቆለፎች ምልክት-አልባውን 503 ያዝናሉ።

---

## 5. የጥያቄ ሰልፍ መግቢያ ቁጥጥር (v3.8.49 · ጉዳይ #6593)

**ወሰን**፡ ከላይ ካሉት ሦስቱ ዘዴዎች አንድ ደረጃ በታች ያለው የአካባቢ የእያንዳንዱ አቅራቢ+ግንኙነት የፍጥነት ገደብ ሰልፍ (`open-sse/services/rateLimitManager.ts`፣ በ Bottleneck የሚደገፍ)።

**`maxWaitMs` የሰልፍ ጥበቃን ይገድባል፤ `executionMaxWaitMs` አፈጻጸምን ይገድባል።** ሁለቱ ሆን ተብለው የተለያዩ ናቸው፣ አንዳቸውም ሌላውን አይመግቡም።

`resilienceSettings.requestQueue.maxWaitMs` **የሰልፍ ጥበቃ በጀት** ነው፡ የአቅራቢ ቦታን መጠበቅን እና ከዚያም በ QUEUED ሁኔታ መቀመጥን ይሸፍናል፣ እና ሰዓት ቆጣሪው ስራው QUEUED ለቆ ማስፈጸም ሲጀምር ወዲያውኑ ይጠፋል (`rateLimitManager.ts`፣ `wrappedFn`)። ይህን የሚያልፍ ጥያቄ ወደ ወደላይ በፍጹም አይደርስም። ነባሪ 30000ms፣ በ `src/lib/resilience/settings.ts` ውስጥ በ `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS` የሚቀርብ እና በ `tests/unit/ratelimit-admission-control-6593.test.ts` የተሰካ፣ ስለዚህ በእሱ ላይ የሚደረግ ለውጥ ይህ አንቀጽ በጸጥታ ከመታረዙ ይልቅ ያንን ፈተና ቀይ ያደርገዋል።

`resilienceSettings.requestQueue.executionMaxWaitMs` Bottleneck እንደ ስራው `expiration` የሚቀበለው ነው፣ የሱ ሰዓት ቆጣሪ ከመላክ በኋላ ብቻ ይጀምራል። የራሱ ወደላይ የጊዜ ገደብ ለሌላቸው አስፈጻሚዎች የመጨረሻ መከላከያ ነው፣ እና የአስፈጻሚው የራሱ የመሳብ መጀመሪያ የጊዜ ገደብ ሲረዝም ወደዚያ ከፍ ይላል፣ ስለዚህ ጤናማ በሂደት ላይ ያለ ምላሽን ማቋረጥ አይችልም። ነባሪ 600000ms (10 ደቂቃ)።

የሰልፍ በጀቱን ወደ `expiration` ማስገባት ቀደም ሲል ተራማጅ-ያልሆኑ በሮችን በሂደት ላይ የሚገድል ነበር — እነሱ በትክክል የመጀመሪያ ባይቶች ከመድረሳቸው በፊት ለደቂቃዎች ይሮጣሉ — እና ለዚህም ነው ጊዜ ማለቂያ በ `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) የሚታየው ሲሆን የሰልፍ በጀቱ የሰልፍ-ጊዜ-ማለቂያ ኮድ ይይዛል። አንዱንም በ `RATE_LIMIT_MAX_WAIT_MS` / `RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) ወይም በዳሽቦርድ (**Settings → Resilience**) ይሽሩ። ሁለቱም ሲመደቡ ወደ 1ms–24h ይገደባሉ።

**ቅድሚያ፣ ለሁለቱም፡** የ env ተለዋዋጭ የሚያቀርበው _ነባሪውን_ ብቻ ነው። በ `resilienceSettings.requestQueue` ውስጥ የተቀመጠ እሴት (ዳሽቦርድ / API patch፣ በ `key_value` ውስጥ የተከማቸ) በእሱ ላይ ያሸንፋል፣ እና የእያንዳንዱ ግንኙነት `rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` በዚያ ላይ ያሸንፋል። ስለዚህ ቀድሞውኑ የተቀመጠ እሴት ባለው ማሰማራት ላይ የ env ተለዋዋጭን ማዘጋጀት ምንም አይለውጥም — በምትኩ የተቀመጠውን ቅንብር ያጽዱ ወይም ያዘምኑ።

የሰልፍ ቆይታ በ `maxWaitMs` ይገደባል፤ ከዚህ በታች ያለው `maxQueueDepth` በአንድ ጊዜ ስንት ደዋዮች ሊሰለፉ እንደሚችሉ ይገድባል።

**በሰውነት የተገለጹ ድጋሚ ሙከራዎች፡ ፍጥነት ማስተካከል እና መቆለፍ።** የ 429 ሰውነት የራሱን ጥበቃ ሊጠቅስ ይችላል (Gemini `RetryInfo.retryDelay`፣ "retry after Ns" ጽሑፍ)፣ ይህም `updateFromResponseBody` ያነባል። ከግንኙነቱ `maxWaitMs` ጋር የሚስማማ ጥበቃ ፍጥነት ማስተካከል ነው፡ ገዳቢው ማጠራቀሚያውን ለዚያ ጊዜ ያጠፋል እና የተሰለፉ ጥሪዎች ሲሞላ ይላካሉ። ከ `maxWaitMs` የሚበልጥ ጥበቃ ሰልፉ መቆየት የማይችለው ነገር ነው — Gemini የተጨረሰ የዕለታዊ ኮታ በ `retryDelay: "86399s"` ይመልሳል። በተገነባው 429 (#16528) ላይ የተላለፈው `Retry-After` ቀድሞውኑ የመውደቅ ሞተር ሞዴሉን ለዚያ ጊዜ እንዲቆልፍ ያደርጋል፣ ነገር ግን ገዳቢውንም ለዚያ ማቆም ቁልፉ ቀደም ብሎ የሚደርስበትን ማንኛውንም ጥሪ (ለምሳሌ ከመቋቋም ዳግም ማስጀመር በኋላ) ለጠቅላላው `maxWaitMs` አሁንም ያቆማል። እንዲህ ያለ ጥበቃ ከተየመ Google `RetryInfo` ዝርዝር (የ `google_rpc_retry_info` መነሻ) ሲመጣ እና የቁልፉ ገዳቢ ቀድሞውኑ በሞዴሉ ላይ ሲወሰን (see `getLimiterKey`)፣ 429 በምትኩ በዚያ ግንኙነት ላይ የሞዴል መቆለፍ ይሆናል (`lockModelForLongBodyRetry` በ `open-sse/services/rateLimitManager/bodyRetryPause.ts` ውስጥ፣ እስከ 24h የተገደበ)፣ ገዳቢውም ሳይቆመ ይቀመጣል። የመገልገያ ምርጫ በዚያ መቆለፍ ላይ በ `isModelLocked()` ያልፋል፣ እንዲሁም ከግንኙነቱ ጋር ለተሰኩ ዒላማዎች የቅንጅት ቅድመ-መላክ በር ያልፋል። በ antigravity ላይ፣ ገዳቢው በአንድ የኮታ ቤተሰብ ስለሆነ፣ መቆለፉ ልክ በሞዴሉ ላይ ነው፣ ልክ እንደ ሌሎች የኮታ መቆለፊያዎቹ። አንድ ተለዋጭ ስም ወደዚያ ሞዴል ሲፈታው ደንበኛው የጠየቀበት ስምም ይቆለፋል፣ ምክንያቱም እነዚያ ፍተሻዎች የተጠየቀውን ስም ይጠቀማሉ፤ በትክክል ይቆለፋል (`lockExactModel`)፣ ስለዚህ የ antigravity የኮታ ቤተሰብን ወይም የ codex ወሰንን የሚያቋርጥ ተለዋጭ ስም የራሱን ፈጽሞ አይቆልፍም። የጽሑፍ ፍንጭ፣ ያልተየመ `retryDelay`፣ ወይም በጠቅላላው ግንኙነት የሚጋራ ገዳቢ ማቆሙን ይይዛል። የ 429 መንገድ አሁን የገነባው ገዳቢ ሲቆም፣ ቀሪው የሰልፍ ጊዜ ከማቆሙ በፊት የሚያልቅለት ደዋይ ያንን ጊዜ ከመጠበቅ ይልቅ ወዲያውኑ በሰልፍ-ጊዜ-ማለቂያ ኮድ ይመለሳል (`checkLimiterPause`)፤ የተመዘገበው መጨረሻ ገዳቢው ከመገነባቱ በፊት ይሰይማል፣ Bottleneck የማደሻ ሰዓቱን የሚጀምርበት ቦታ፣ እና በማጠራቀሚያው ላይ ማንኛውም በኋላ የሚደረግ ለውጥ ይረሳዋል። በ `tests/unit/rate-limit-long-body-retry-lockout.test.ts` እና `tests/unit/rate-limit-body-retry-pause.test.ts` የተሸፈነ።

**`maxQueueDepth` — ምርጫ-መር የመግቢያ ገደብ (አዲስ)።** `resilienceSettings.requestQueue.maxQueueDepth` ለአንድ አቅራቢ+ግንኙነት በአንድ ጊዜ ስንት ጥያቄዎች ሊሰለፉ (እስካሁን ያልተላኩ) እንደሚችሉ ይገድባል። ሰልፉ ቀድሞውኑ `maxQueueDepth` ጥያቄዎችን ሲይዝ፣ አዲስ ጥያቄ **`limiter.schedule()` ከመድረሱ በፊት** በተየመ `code: "RATE_LIMIT_QUEUE_FULL"` ስህተት በፍጥነት ውድቅ ይደረጋል — ስለዚህ ውድቅ ማድረጉ ርካሽ ነው እና ለዚያ ጥያቄ ከሚከተለው የፕሮምፕት-መጭመቅ / ትርጉም ስራ በፊት ይከናወናል። ነባሪ `0` = ተሰናክሏል፣ ያለውን ያልተገደበ የሰልፍ ባህሪ ይጠብቃል፤ ከ 0–100000 የተገደበ። በ `RATE_LIMIT_MAX_QUEUE_DEPTH` (env) ወይም `resilienceSettings.requestQueue.maxQueueDepth` (ዳሽቦርድ/API patch) ይሽሩ።

የመግቢያ ፍተሻው ራሱ ንጹህ ተግባር ነው (`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`) ስለዚህ ያለ እውነተኛ Bottleneck ገዳቢ በክፍል-ፈተና ሊፈተን ይችላል።

> #6593 ን የከፈተው RFC እንዲሁም `bypassCompressionOnRateLimit`
> የተሰኘ ባንዲራ (flag) አቅርቧል። የዚህ ሪፖ `open-sse/services/compression/` ፓይፕላይን
> በወጪው LLM ጥያቄ ላይ የ prompt/context ማጭበርበር ነው (`chatCore.ts`፣
> በ `resolveCompressionSettings`/`selectCompressionStrategy` ብሎክ አካባቢ)፣
> ማለትም በሲስተሙ የተፈጠሩ 429 አካላት ላይ የ HTTP ምላሽ ማጭበርበር አይደለም — ለትክክለኛው bypass
> ባንዲራ የሚዛመድ የኮድ መንገድ የለም። ይህ የ prompt ማጭበርበር ደረጃ ደግሞ በአሁኑ ጊዜ በጥያቄው
> ፓይፕላይን ውስጥ ከ `withRateLimit()` _በፊት_ ይሰራል፣ ስለዚህ ተራው ሙሉ ሲሆን በሚሰጥ
> እምቢ-አለባበስ (queue-full rejection) ላይ እንዲዘለል ማደራጀት ከዚህ issue መስክ በላይ
> የሆነ ለየት ያለ ትልቅ ለውጥ ነው፤ እዚህ በዓላማ **አልተተገበረም** እና የ CPU ማዳን ትርፉ
> የማደራጀቱን አደጋ የሚገባ ከሆነ ለቀጣይ ስራ (follow-up) ተተወ።

### የ Rate-Limit ራስ-ሰር ማንቃት የደህንነት መረብ እና የግንኙነት ጥበቃ (`rateLimitProtection`)

**ራስ-ሰር ማንቃት የደህንነት መረብ** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`፣ ነባር `true`)፦
በነባሪ፣ OmniRoute ለሁሉም ንቁ የ API-key አቅራቢ ግንኙነቶች (`getProviderCategory(provider) === "apikey"`) የ rate-limit ተራ ጥበቃን በራስ-ሰር ያነቃል። ይህ ለ rate-limit ስሜታዊ የሆኑ upstream API ቁልፎች የሚሄዱ ገቢ ጥያቄዎች ወደ upstream 429 ስህተቶች ሳይፈነዱ በ Bottleneck አማካይነት ተራ መስመር ላይ እንዲገቡ እና እንዲቆጣጠሩ ያረጋግጣል። የደህንነት መረቡ በ `RATE_LIMIT_AUTO_ENABLE` የአካባቢ ተለዋዋጭ ሊተካ ይችላል (`false`/`0`/`off` ያሰናክላል፣ `true`/`1`/`on` በግድ ያነቃል)፣ ይህም በዳሽቦርዱ የተቀመጠውን ቅንብር (**ቅንብሮች → Resilience** / `PATCH /api/resilience`) ቅድሚያ ይወስዳል።

**የእያንዳንዱ ግንኙነት `rateLimitProtection` ትርጓሜ፦**
የእያንዳንዱ ግንኙነት rate-limit ጥበቃ በአቅራቢ ግንኙነቶች ላይ ባለው `rateLimitProtection` ቡሊያን መስክ (boolean field) ይከታተላል (በ SQLite ውስጥ እንደ `rate_limit_protection` ተቀምጧል)፦

- **ግልጽ ነቅቷል (`rateLimitProtection === true`)**: የ rate-limit ጥበቃ ለዚህ ግንኙነት በግልጽ ነቅቷል፣ የአቅራቢው ምድብ ምንም እንኳን ወይም ራስ-ሰር ማንቃት የደህንነት መረብ ነቅቶ እንኳን ምንም ለውጥ አያመጣም።
- **ግልጽ ጠፍቷል (`rateLimitProtection === false`)**: ግልጽ ጥበቃን ያሰናክላል፣ ነገር ግን ንቁ የ API-key ግንኙነትን ከአጠቃላይ ራስ-ሰር ማንቃት የደህንነት መረብ **አያወጣም**። በ `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`) ውስጥ፣ `false` እና `undefined` እኩል ናቸው፦ `rateLimitProtection === true` ብቻ እንደ ግልጽ ተበልጦ ማስተካከያ (explicit override) ይቆጠራል። `rateLimitProtection` `false` (ወይም ያልተዋቀረ) ከሆነ፣ ንቁ የ API-key ግንኙነት አሁንም የራስ-ሰር ማንቃት ሁኔታውን ያሟላል እና በ rate-limit የተጠበቀ ይቆያል።
- **በግንኙነት ደረጃ ማምለጫ የለም**: ኦፕሬተር ለሌሎች ራስ-ሰር ማንቃትን ንቁ አድርጎ ሲያቆይ "ይህ ነጠላ ንቁ የ API-key ግንኙነት ያለ rate-limit ተራ ጥበቃ መሥራት አለበት" የሚል በአሁኑ ጊዜ መግለጽ አይችልም። የ API-key ግንኙነቶችን ሙሉ በሙሉ ያለ rate-limit ተሮች ለማስሄድ፣ የደህንነት መረቡ በአጠቃላይ መጠፋት አለበት (`RATE_LIMIT_AUTO_ENABLE=false` ወይም `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`)።

**የሚደገፉ የጽሑፍ መንገዶች፦**

- **`POST /api/rate-limits`**: ለአንድ ግንኙነት `rateLimitProtection` ን ለመቀያየር (toggle) የሚደገፍ የአስተዳደር የጽሑፍ መንገድ (`{ connectionId: string, enabled: boolean }`)። ይህን በ `enabled: true` መጥራት ግልጽ ጥበቃን ያነቃል፤ በ `enabled: false` መጥራት ግልጽ ጥበቃን ያስወግዳል (ምንም እንኳን ራስ-ሰር ማንቃት ነቅቶ ከሆነ ንቁ የ API-key ግንኙነቶች አሁንም በአጠቃላይ የደህንነት መረብ ስር ይሸፈናሉ)።
- **`PUT /api/providers/[id]`**: በዓላማ `rateLimitProtection` ን ማቀበል ወይም መቀየር **አይችልም** (#11278)። የአቅራቢ ግንኙነት ሜታዳታን በ `PUT /api/providers/[id]` ማዘመን የተቀመጠውን የ rate-limit ጥበቃ ሁኔታ በጭራሽ አይለውጥም።

---

## 6. የዝግተኛ-ፍሰት አፈጻጸም ቁጥጥር (throughput watchdog) (#9709)

አማራጭው `resilienceSettings.streamRecovery.throughputWatchdog` ጥበቃ ክፍሎችን (chunks) መላኩን የቀጠለ ግን የተወሰነውን ጠቃሚ-ውጤት መጠን በታች የሚያመነጭ upstream ያገኛል። ይህ ከ idle timeout በእቅድ የተለየ ነው፦ heartbeats እና metadata ሁለቱንም ሰዓት-ቆጣሪዎች (timers) አያገናኙትም እና እንደ እድገት አይቆጠሩም። እንዲሁም ከጠንካራው የሙከራ ጊዜ ገደብ (hard attempt deadline) (#9153) የተለየ ነው፣ ይህም ምንም ቢሆን የውጤት ጥራት ቢሆን ፍፁም የደህንነት ጣቢያ (absolute safety ceiling) ነው።

ቁጥጥሩ ማቋረጥ (abort) ከመፈጸሙ በፊት የማሞቂያ ጊዜ (warm-up period) ተከትሎ ሙሉ የሚንሸራተተው መስኮት (rolling window) ይጠይቃል። ከ Chat Completions እና Responses API የውጤት ክስተቶች የጽሑፍ deltas ይቆጥራል (ተጠናክሮ የተወሰደ የ UTF-8 ባይት ተወካይ)፣ usage-ብቻ እና ባዶ ክስተቶችን ይተዋል፣ እና የ tool-call ወይም የ reasoning ክስተቶች እየተካሄዱ ሳሉ ፍረጃውን ያግዳል። በነባሪነት ተሰናክሏል እና በ `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true` ማንቃት ይቻላል፤ መስኮቱ፣ ማሞቂያው፣ ዝቅተኛው መጠን እና ዝቅተኛው ሊለካ የሚችል ውጤት በመደበኛው resilience-settings normalization layer የተወሰኑ ናቸው።

በነቃ ሁኔታ ላይ ሲሆን፣ የቁጥጥሩ ማቋረጥ (watchdog abort) በንቁ upstream ሙከራ ላይ ብቻ ነው የሚተገበረው። ለደንበኛ ከሚታዩ ባይቶች በፊት፣ ያለው ተመሳሳይ-መለያ (same-account) ቀደም-ተኮር ማገገሚያ መንገድ ሙከራውን እንደገና መክፈት ይችላል። ከ commit በኋላ፣ ፍሰቱ በዘንግ በማንም ሁኔታ አይደገምም፤ ያለው ደህንነቱ የተጠበቀ የመካከለኛ-ፍሰት ቀጣይነት (safe mid-stream continuation) ውል ብቻ ነው suffix ማገናኘት የሚችለው። Finalization አንድ-ጊዜ ብቻ (single-shot) ስለሚሆን፣ የ usage አገላለጥ እና semaphore መልቀቂያ አይደገሙም።

---

## 7. የ Upstream ሁኔታ እንደገና መግለጽ (Status Restatement) (በስህተት የተገለጹ የ quota ስህተቶች)

**ወሰን፦** ጊዜያዊ የ quota መጠናቀቅን በተሳሳተ የ HTTP ሁኔታ የሚያሳውቅ አንድ upstream ጌትዌይ።

**ዓላማ፦** ከ classiﬁcation **በፊት** የሚያሳስት ሁኔታን ማስተካከል፣ ስለዚህ ቀጣይ ተጠቃሚዎች (fallback ሞተር፣ combo አሃዛዊ ስብስብ፣ ለደንበኛ የሚቀርበው ምላሽ) የውድቀቱን እውነተኛ እንደገና-ሙከራ-ሚችል (retryable) ባህሪ ያያሉ።

አንዳንድ ጌትዌዮች **ጊዜያዊ** የ quota መጠናቀቅን በእንደገና-መሞከር-በማይቻል (non-retryable) የ HTTP ሁኔታ ያመለክታሉ። `agentrouter.org` እንደ መደበኛው `429` በምትኩ `403` (አንዳንዴ `400`) ከቻይንኛ አካላት ጋር (`用户额度不足` / `额度不足`) ይመልሳል። እንደ Claude Code ያሉ ደንበኞች `403`ን እንደ ቋሚ (permanent) ይቆጥሩታል እና ክፍለ-ጊዜውን ያቋርጣሉ፣ እና ማስተካከያ ከሌለ fallback ሞተሩ እንደ quota ክስተት ሳይሆን እንደ `AUTH_ERROR` ይመድበዋል።

**ትግበራ፦**

- Registry + matcher፦ `open-sse/config/upstreamStatusRestatement.ts` — በእያንዳንዱ provider የህግጋት ዝርዝር (`{id, fromStatuses, toStatus, textMarkers, excludeMarkers, defaultRetryAfterMs}`)፣ በ `applyStatusRestatement()` የሚዛመድ።
- የጥሪ ቦታ (call site)፦ በ `open-sse/handlers/chatCore.ts` ውስጥ ያለው `providerFailure:` ብሎክ (ወደ መስመር 3654 አካባቢ)፣ `parseUpstreamError()` በስህተት HTTP ሁኔታ (`!providerResponse.ok`) ያለውን upstream ምላሽ ከተንታነ በኋላ ወዲያውኑ፣ እና ማንኛውም classification ከመሮጡ በፊት፣ ስለዚህ እያንዳንዱ ቀጣይ ተጠቃሚ የተስተካከለውን ሁኔታ ያያል። በ `200` SSE ፍሰት ውስጥ የተከተቡ ስህተቶች የተለየ፣ የኋለኛ የፍሰት-ተንታኝ መንገድ ይከተላሉ እና በዛሬው ጊዜ በዚህ hook **አይሸፈኑም** — ይህ የታወቀ ገደብ ነው፣ ለ agentrouter የተሳሳተ ሁኔታ (misstatus) ገና አያስፈልገውም (ይህም እንደ ስህተት HTTP ሁኔታ ነው የሚታየው)።
- የእንደገና-ሙከራ ብቁነት፦ `429` በ `RETRY_AFTER_ELIGIBLE_STATUSES` ውስጥ ነው (`open-sse/services/combo/unavailableRetryGate.ts`)፣ ስለዚህ እንደገና የተገለጸ (restated) ስህተት እንደ ሞተ `403` ከመታየት ይልቅ እውነተኛ የእንደገና-ሙከራ መስኮት ይሸከማል።
- የተፈጠረው (synthetic) `60s` `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`) የሚነግረው እንደገና የተገለጸው ምላሽ ለ**ደንበኛው** ብቻ ነው፤ ይህ ራሱ የግንኙነቱ ውስጣዊ cooldown/lockout ቆይታ አይደለም — ያ የሚገዛው በተናጠል በዚያው እንደገና በተገለጸው ስህተት ላይ በትክክል የሚሰራው ስርዓት ነው (የ Connection Cooldown ተጨምራ ተግባረ-መዘግየት፣ §2፣ ለ API-key አቅራቢዎች መሰረታዊ `3s`፤ ወይም Model Lockout፣ §3፣ እንደ agentrouter ላሉ በእያንዳንዱ-ሞዴል-quota አቅራቢዎች)። Routerው በውስጡ ከሚያስታውቀው 60s መስኮት በፊት ለእንደገና ሙከራ ብቁ ሊሆን ይችላል — ይህ በእቅድ የተወሰደ የጭራሽ ቦታ (intentional headroom) ነው፣ ትህትና (bug) አይደለም።

ቋሚ ስህተቶች (የ agentrouter `无权访问模型` — ለዚህ ሞዴል መዳረሻ የለም) ፈጽሞ እንደገና አይገለጹም፦ `textMarkers` ቢገናኝ እንኳ `excludeMarkers` ህግጋቱን ይከለክላል፣ ስለዚህ ስህተቱ የመጀመሪያ ሁኔታውን ይይዛል እና ምንም ለዘላለም አይሞክረውም። ተዛማጁ የ provider classiﬁcation ህግጋት (`agentrouter-model-access-denied` በ `open-sse/config/providerErrorRules.ts` ውስጥ፦ `reason: "auth_error"`፣ `scope: "model"`፣ ተገልጿል የ `6h` መሰረታዊ cooldown) ከአጠቃላዩ apikey-ምድብ `FORBIDDEN` ቀደም-ተኮር መመለስ በፊት በ `checkFallbackError` (`open-sse/services/accountFallback.ts`) ይማከራል፣ ይህም በ `honorsRuleLockScope(provider)` (#10334 — በአሁኑ ጊዜ በ `providerErrorRules.ts` ውስጥ ባለው `HONORS_RULE_LOCK_SCOPE_PROVIDERS` allowlist ለ agentrouter ብቻ የተወሰነ) የተጠበቀ ነው። የህግጋቱ የተገለጸ 6h cooldown እንደ `fallbackResult.baseCooldownMs` ይፈስሳል፣ ግን አሁንም ወደ ቀድሞውኑ የነበረው በእያንዳንዱ-ሞዴል-quota lockout መንገድ (`lockModelIfPerModelQuota()` / `recordModelLockoutFailure()`፣ በ #10334 ከ cooldown ምንጭ በስተቀር ያልተቀየረ) ይግባል፦ እንደ ሌላው እያንዳንዱ model lockout ወደ ኦፔሬተሩ `mlSettings.maxCooldownMs` (ነባሪ `1_800_000ms` / 30min) ይቀንሳል፣ እና _የተቀመጠው የ lockout ምክንያት_ ቀድሞውኑ የነበረው hardcoded `"forbidden"` ይሆናል፣ የህግጋቱ `"auth_error"` አይደለም — ከጫፍ እስከ ጫፍ የሚከበረው የ cooldown ቆይታው ብቻ ነው፣ የምክንያቱ ሕብረቁምፊ (reason string) አይደለም። ግንኙነቱ ራሱ ንቁ ይቆያል፤ በተመሳሳይ ግንኙነት ላይ ያሉ አጎራባች ሞዴሎች አይጎዱም።

እንደገና የተገለጹ የኮታ ስህተቶች (`额度不足`) በምርት አካባቢ ወደ አቅራቢ ደንብ ይደርሳሉ
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`፣ የራሱ የተገለጸ cooldown የለውም — የ persistence layer
scaled backoff ነባሪ ተግባራዊ ይሆናል)። ከ#10334 ጀምሮ፣ በ
`ProviderErrorRuleMatch` ላይ ያለው `scope` ከጫፍ እስከ ጫፍ በእርግጥ ጥቅም ላይ ይውላል፣ ነገር ግን
በ`HONORS_RULE_LOCK_SCOPE_PROVIDERS` የተፈቀዱ ዝርዝር ውስጥ ላሉ አቅራቢዎች
**ብቻ** ነው (`providerErrorRules.ts` —
በአሁኑ ጊዜ `"agentrouter"` ብቻ፣ በ`honorsRuleLockScope()` በኩል የተገደበ)። ለሌሎች
አቅራቢዎች ሁሉ `scope` ከ#10334 በፊት እንደነበረው መረጃ ሰጪ ሆኖ ይቀራል።
`checkFallbackError` የተዛመደውን ደንብ ወሰን እንደ
`fallbackResult.ruleScope` ያቀርባል፤ `isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) አንድ
`ruleScope` ለግንኙነቱ በሙሉ የሚሠራና በራሱ የሚያገግም
ምልክት እንደሆነ በደህና ማክበር እንደሚቻል የሚያረጋግጠው የጋራ መከላከያ ነው
(scope `"connection"`፣ reason `quota_exhausted`፣ በፍጹም `permanent`
አይደለም፣ በፍጹም `creditsExhausted` አይደለም — ወደፊት አንድ ደንብ scope
`"connection"`ን ከቋሚ የመለያ ሁኔታ ጋር እንዳያጣምር የሚከላከል ጥበቃ)። ሁለት ተጠቃሚዎች ይጠሩታል፦

- **Persistence** (`markAccountUnavailable()`, `src/sse/services/auth.ts`)፦
  ወደ passthrough-provider **per-model** lockout
  ቅርንጫፍ ከመውደቅ ይልቅ (agentrouter `passthroughModels: true` ነው → `hasPerModelQuota()`
  `true`ን ይመልሳል)፣ **ጊዜያዊ የግንኙነት cooldown** ይተገብራል —
  `testStatus: "unavailable"` + `rateLimitedUntil`፣ በፍጹም የመጨረሻ ሁኔታ
  (`credits_exhausted`/`banned`/`expired`) አይደለም — በዚህም ግንኙነቱ
  cooldown ካለፈ በኋላ በእጅ የምስክርነት መረጃ ዳግም ማስጀመር ሳያስፈልገው በራሱ ያገግማል።
  `disableCooling: true` ላላቸው ግንኙነቶች ይዘለላል (#2997)፦ ያ opt-out
  በምትኩ ወደ per-model lockout ይወርዳል (በሰነድ የተገለጸ trade-off ነው —
  ከቅርንጫፉ በላይ ያለውን የኮድ አስተያየት ይመልከቱ)።
- **በተመሳሳይ ጥያቄ ውስጥ የcombo ማዘዋወር** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`)፦ ተመሳሳዩ መከላከያ ግንኙነቱን
  `${provider}:${connectionId}` ቁልፍ ወደሆነው በማህደረ ትውስታ ውስጥ ወዳለው `exhaustedConnections` set ምልክት ያደርገዋል። ይህ በራሱ
  target object ላይ ያንኑ ትክክለኛ `connectionId` አስቀድሞ የያዘን ቀሪ የSAME-REQUEST
  target **ብቻ** ይዘላል (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` ከ`exhaustedConnections` lookup በፊት) — ተጓዳኝ targets የራሳቸው
  pinned `connectionId` የሌላቸውበት እና አንዱ ከምላሹ
  `X-OmniRoute-Selected-Connection-Id` header በእያንዳንዱ dispatch ብቻ የሚፈታበት ተራ
  model-list combo ያንን የቁልፍ ማዛመጃ በፍጹም አያገኝም። ለዚያ
  የተለመደ ሁኔታ፣ አንድ ቀሪ leg አሁን ኮታው ያለቀበትን መለያ
  እንዳይጠቀም የሚያደርገው እውነተኛ ጥበቃ ይህ Set **አይደለም** — ከላይ ያለው persistence layer
  (የግንኙነቱ `rateLimitedUntil` አሁን ወደፊት ነው) ከዚሁ መከላከያ ለውድቀቱ
  `transientRateLimitedProviders`ን ከማፈኑ ጋር ተጣምሮ ነው ("ባለሁለት-ደረጃ ንድፍ"ን እና በ
  `targetExhaustion.ts` ውስጥ ባለው
  `isAgentrouterConnectionQuotaScope` ቅርንጫፍ ላይ ያለውን የኮድ አስተያየት ይመልከቱ)፦ ያ
  Set ሳይመለከት ሲቀር፣ የ`combo.ts` `allowRateLimitedConnection` force-allow
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) ለአቅራቢው
  ቀሪ legs ተግባራዊ **አይሆንም**፤ ስለዚህ የምስክርነት መረጃ ምርጫ `rateLimitedUntil`
  filter (`src/sse/services/auth.ts:1238`) በተለመደው ሁኔታ ይከበራል፣ እና
  አንድ ቀሪ leg የተለየ፣ አሁንም ብቁ የሆነ agentrouter
  connection ይመርጣል ወይም ምንም ምስክርነት መረጃ ስለማይገኝ ይወድቃል — ይህ ቅርንጫፍ አሁን ወደ cooldown መልሶት ወደነበረው
  connection በግድ ተመልሶ አይገባም።

### ባለሁለት-ደረጃ ንድፍ፦ መጀመሪያ የሁኔታ ዳግም መግለጽ፣ ከዚያም ምደባ

የሁኔታ ዳግም መግለጽ (`upstreamStatusRestatement.ts`) እና የአቅራቢ
ምደባ ደንቦች (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) ሁለቱም በአቅራቢ id
እና በጽሑፍ ምልክቶች ቁልፍ የሚያደርጉ የተለያዩ registries ናቸው፣ ነገር ግን በተለያዩ
ቦታዎች ይሠራሉ እና የተለያዩ ዓላማዎችን ያገለግላሉ፦ restatement በ`chatCore.ts` ውስጥ የHTTP statusን ቀደም ብሎ እንደገና ይጽፋል፤
የምደባ ደንቦች በ`checkFallbackError()` ውስጥ fallback `reason`ን እና lock `scope`ን
(`model` / `provider` / `connection`) ይመርጣሉ
(`open-sse/services/accountFallback.ts`)።

የምደባ ደንቦች ሙሉ የስህተት **ጽሑፍ**ን (እንደ
`额度不足` ያሉ body markersን ለማዛመድ ያስፈልጋል) የሚያዩት በ`providerErrorRules.ts` ውስጥ ባለው
`FULL_TEXT_RULE_PROVIDERS` የተፈቀዱ ዝርዝር ውስጥ ላሉ አቅራቢዎች ብቻ ነው — በአሁኑ ጊዜ `"agentrouter"` ብቻ። ለሌሎች
**built-in catalog** አቅራቢዎች ሁሉ፣ `checkFallbackError`
ለ`getProviderErrorRuleMatch` የሚያስተላልፈው የተዋቀረውን ስህተት (`{code, type}`) ብቻ ነው፤ ይህም
በheader/status/code ላይ ለተመሠረቱ ደንቦች በቂ ቢሆንም body-text markersን ማየት አይችልም።
`resolveRuleMatchBody()` ረዳት ይህን ምርጫ ያከናውናል፦ በተፈቀዱት ዝርዝር ውስጥ ላሉ አቅራቢዎች
ሙሉ የስህተት ጽሑፍ፣ ካልሆነ የተዋቀረው ስህተት። አንድ
**built-in** አቅራቢን ወደ `FULL_TEXT_RULE_PROVIDERS` ማከል በእያንዳንዱ አቅራቢ ደረጃ የሚደረግ ግልጽ
opt-in ነው — ይህ የሚገኘው በዝርዝሩ ላይ ላልሆነ እያንዳንዱ አቅራቢ ነባሪው መንገድ
byte-for-byte ሳይለወጥ እንዲቆይ ነው።

የአንድ ደንብ `scope` (`model` / `provider` / `connection`) ከ
`FULL_TEXT_RULE_PROVIDERS` የተለየ opt-in ነው፦ `checkFallbackError` እንደ
`fallbackResult.ruleScope` ብቻ ያቀርበዋል፣ እና downstream consumers በዚያው ፋይል ውስጥ ባለው
`HONORS_RULE_LOCK_SCOPE_PROVIDERS` የተፈቀዱ ዝርዝር ውስጥ ላሉ አቅራቢዎች ብቻ
ከመረጃ ሰጪ መለያነት በላይ ያከብሩታል (`gated via
honorsRuleLockScope()` — በአሁኑ ጊዜ `"agentrouter"` ብቻ)። አንድ አቅራቢ በዚያ የተፈቀዱ ዝርዝር ውስጥ ከገባ በኋላ
የ`scope: "connection"` ማዛመጃ በተግባር ምን እንደሚያደርግ ከላይ ያለውን "እንደገና የተገለጹ የኮታ
ስህተቶች" ክፍል ይመልከቱ።

**#11104 — በኦፕሬተር የሚገለጹ ህጎች ሁለቱንም allowlists ያልፋሉ።** ኦፕሬተር ይህንን ፋይል ሳያርትም በሰርጥ ጊዜ (runtime) በአንድ-አቅራቢ ህግ ማውገዝ ይችላል በ`settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`) መንገድ። የኦፕሬተር ህግን ከ
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` ጀርባ መዝጋት — የተቀረጹ የካታሎግ ህጎች **ነባሪ** ባህሪያትን ለመጠበቅ የታሰቡ allowlists — ህጉን ማውገዝ ራሱ የኦፕሬተሩ ግልጽ opt-in ስለሆነ፣ የቅንብሮቹን ሥርዓት ከዚያ በዝርዝሩ ከተመዘገቡት አቅራቢዎች በስተቀር ለሁሉም አቅራቢ ዋጋ-አልባ ያደርገዋል። `resolveRuleMatchBody()` እና `honorsRuleLockScope()` ሁለቱም መጀመሪያ
`hasOperatorRuleForProvider()` ን ያመላክታሉ፦ የኦፕሬተር ህግ ያለው አቅራቢ ጥሬውን የስህተት ጽሑፍ ያገኛል እና የተገለጸለት `scope` ይከበርለታል — በማንኛውም allowlist ውስጥ ከሆነም ሆነ ካልሆነ።

**የታወቀ ክፍተት — `providerRuleRegistry` ለHTTP 400 ፈጽሞ አይጠየቅም።**
የ`checkFallbackError` `BAD_REQUEST` ቅርንጫፍ status 400 ን ሙሉ በሙሉ በራሱ pattern arrays (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS` ወዘተ በ`accountFallback.ts`) ያደራጃል እና ከላይ ካለው `configuredRule`/`getProviderErrorRuleMatch` ቅርንጫፍ ከመድረሱ በፊት ይመልሳል። `status: 400` ያለው የተቀረጸ የካታሎግ ህግ (ወይም የኦፕሬተር ህግ) በአገባብ ትክክል ነው ግን ፈጽሞ አይሰራም። ዛሬ ምንም ያለው ህግ 400 ን አይለይም፣ ስለዚህ በምርት ላይ ያለ ምንም ነገር አይነካም — ግን የወደፊት 400 ህግ መጀመሪያ ይህን ቅርንጫፍ መንካት ያስፈልገዋል፣ ይህም ከህግ መጨመር የሚበልጥ ትልቅ ለውጥ ነው (400 ን ለpattern-array ባህሪያት ላይ ገነት ቀርበው ላሉ አቅራቢዎች ሁሉ እንደገና ያደራጃል) እና ለነጠላ-አቅራቢ ህግ ተጨማሪነት ከሥፍራ ውጭ ነው።

### አዲስ quota-ን የሚሳሳት gateway ማከል

1. አንድ የህግ array በ`statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`) ውስጥ ይመዝግቡ። `textMarkers` ን ለአቅራቢው የሚመለከት ያድርጉት፤ ከ
   `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`) ጋር የሚጋጩ አጠቃላይ የእንግሊዝኛ ሐረጎችን ፈጽሞ አይድገሙ።
2. በአማራጭነት ማደራጀት ህጎችን በ
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) ውስጥ ይመዝግቡ ትክክለኛውን የመዝጊያ scope ለመምረጥ (`connection` ለመለያ-አቀፍ quota፣ `model` ለአንድ-ሞዴል ስህተቶች)። ይህ ደረጃ በምርት ላይ ህጎቻቸው ሙሉውን የስህተት ጽሑፍ (body markers) ለሚፈልጉ አቅራቢዎች ብቻ ነው ሚና የሚጫወተው፦ የአቅራቢውን id በተመሳሳይ ፋይል ውስጥ ወደ `FULL_TEXT_RULE_PROVIDERS` ይጨምሩ — አለበለዚያ
   `checkFallbackError` ህጉን የተዋቀረውን
   `{code, type}` ስህተት ብቻ ይሰጠዋል እና body-text ህግ በቀጥታ ትራፊክ ላይ ፈጽሞ አይዛመድም።
   በ`status`/`headers` ላይ ብቻ የሚዛመዱ ህጎች (እንደ Opencode's ወይም
   Minimax's) ይህንን opt-in አይፈልጉም። በተናጠል፣ ህጉ
   `scope: "connection"` ካወገዘ እና ዓላማው እውነተኛ የግንኙነት-አቀፍ cooldown
   ተጨምሮ በተመሳሳይ ጥያቄ combo skip (የመረጃ መለያ ብቻ ሳይሆን) ከሆነ፣ የአቅራቢውን id በተመሳሳይ ፋይል ውስጥ ወደ `HONORS_RULE_LOCK_SCOPE_PROVIDERS` ይጨምሩ — ይህ ነው
   `markAccountUnavailable()` (`src/sse/services/auth.ts`) እና
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`) ውስጥ `isAgentrouterConnectionQuotaScope()`-ዓይነት ፍጆታን የሚቆጣጠረው፤ ያለ እሱ፣ `scope`
   በ`fallbackResult.ruleScope` አቅጣጫ ማለፉን ይቀጥላል ግን ምንም ነገር ላይ እርምጃ አይወስድበትም።
3. `tests/unit/upstream-status-restatement.test.ts` ን እና
   `tests/unit/agentrouter-error-rules.test.ts` ን የሚያንጸባርቁ unit tests ይጨምሩ (not-permanent / not-creditsExhausted ጥበቃዎችን ጨምሮ፣ እና — አቅራቢው allowlist ከፈለገ — `resolveRuleMatchBody()` ሙሉውን ጽሑፍ ለዚያ አቅራቢ ብቻ እንደሚመልስ የሚያረጋግጥ test)።

ለ`chatCore.ts`፣ `classifyError`፣ ወይም combo ምንም ለውጦች አያስፈልጉም።

#### በEgress-bucket የተከፈተ መዝጊያ (#10880)

በ`EGRESS_BUCKETED_LOCK_PROVIDERS` (opencode ቤተሰብ) ውስጥ ያሉ አቅራቢዎች እንደ IP-bucketed upstream ይወሰዳሉ (የopencode ነጻ ደረጃ IP-bucketed ነው፣ account-bucketed አይደለም — #9611 ን ይመልከቱ)፦ status-429 `quota_exhausted` ተብሎ የተመደበ
**ወይም** `rate_limit_exceeded`፣ ሮቴሽኑ መሞከር ከመቻሉ በፊት፣ የመጨረሻ የታወቀው egress IP ከወደቀው ግንኙነት ጋር ከሚዛመድ እያንዳንዱን allowlisted-family ግንኙነት ያቀዝቅዛል
— N-1 የሚያውቁ-ወድቀው የupstream ጥሪዎችን ለማስወገድ (ከ#10460/#10525 ጋር ተመሳሳይ ቅርጽ)።
`rate_limit_exceeded` በታቀደ ያካተተ ነው፦ በ`markAccountUnavailable`
መንገድ ላይ የopencode-ን የሚመለከቱ ህጎች ፈጽሞ አይዛመዱም (ለ`checkFallbackError` ምንም headers/body አይሰጥም፣ opencode በ`FULL_TEXT_RULE_PROVIDERS` ውስጥ የለም)፣ ስለዚህ body ውስጥ የደንበኝነት ምዝገባ-quota ጽሑፍ የሚሸከም 429 ("monthly usage limit
reached")፣ የ`status_429` ህግ ከመድረሱ በፊት በquota-text fallback
(`buildSubscriptionQuotaFallback`፣ `accountFallback.ts`፤ 1h cooldown) `quota_exhausted` ተብሎ ይመደባል — በዚያን ጊዜ quota-text የሌለው 429 (ተራ rate limiting) በ`status_429` ህግ በኩል `rate_limit_exceeded` ተብሎ ይመደባል እና የIP ቤተሰቡን አሁንም ያቀዝቅዛል። ለallowlisted አቅራቢ IP-bucketed rate limit ከአለቀ quota ጋር ተመሳሳይ ምልክት ነው። ታማኝ ገደቦች፦

- **በሚቻለው መጠን**፦ መቆለፊያው ከ`proxy_logs` የግንኙነቱን የመጨረሻ የታወቀ
  `egress_ip` ይፈልጋል (የ24h መስኮት፣ የተመሳሰለ፣ ያለ መሸጎጫ)። ባዶ መሸጎጫ (የመውጫ
  IP ፈጽሞ ካልተፈተሸ) ወይም ምንም ረድፍ ከሌለ → ያልተሳካው ግንኙነት አሁንም በቅርንጫፉ
  ወደ ማቀዝቀዣ ጊዜ ይገባል (እንደ ዛሬው ይመዘገባል)፤ የማይቆለፈው ወንድም ግንኙነት ብቻ ነው።
- **ፈጽሞ ቋሚ አይደለም**፦ የማቀዝቀዣ ጊዜው የሚታደስ የኮታ መስኮት ነው
  (`testStatus: "unavailable"`)፤ ቋሚ ሁኔታ ከIP-ደረጃ ምልክት ፈጽሞ አይወሰንም።
  `disableCooling` ያላቸው ግንኙነቶች ቅርንጫፉን ሙሉ በሙሉ ይዘሉታል።
- **ለተፈቀደለት ቤተሰብ የመቆለፊያው ዝርዝርነት ይለወጣል**፦ ይህ የወሰን
  ለውጥ ነው፤ የወንድም ግንኙነት ማመቻቸት ብቻ አይደለም። opencode የ`passthroughModels`
  አቅራቢ ነው፤ ስለዚህ ከዚህ ቅርንጫፍ በፊት 429 በእያንዳንዱ MODEL ደረጃ መቆለፍን ያስከትል
  ነበር፤ አሁን ግን የግንኙነት ማቀዝቀዣ ጊዜን ያስከትላል — ምንም ወንድም ግንኙነት
  ሳይኖር አንድ ግንኙነት ብቻ ለሚያስኬድ ኦፕሬተርም ጭምር። የopencode ደንብ ሰንጠረዥ
  ቀድሞውኑ ትክክል ነው ብሎ የገለጸው ዝርዝርነት ይህ ነው (`scope: "connection"`,
  `providerErrorRules.ts`)፤ ሆኖም opencode በ`HONORS_RULE_LOCK_SCOPE_PROVIDERS` ውስጥ
  ስለሌለ እስካሁን ተግባራዊ አልሆነም። ቅርንጫፉ ከግንኙነት ወሰን ካለው የagentrouter
  ቅርንጫፍ ጋር በተመሳሳይ መንገድ ያልተሳካውን ግንኙነት የማቀዝቀዣ ጊዜ +
  `backoffLevel` ራሱ ይጽፍና ይመለሳል — ከዚህ በታች ያሉት በእያንዳንዱ ሞዴል
  ደረጃ የሚደረገው እገዳና አጠቃላይ መንገዱ ፈጽሞ አይደረስባቸውም።
- **Combo ተካትቷል**፦ እንደ agentrouter ቅርንጫፍ ሁሉ፣ ይህ ወሰን combo ጠሪ በ429 ላይ
  የሚተገብረውን የ`persistUnavailableState`/`isCombo` ደረጃ ቅነሳ ሆን ብሎ ችላ
  ይላል። በእያንዳንዱ ሞዴል ደረጃ የሚደረግ መቆለፍ የዚህ ወሰን ደካማ ቅርጽ አይደለም፤
  የተሳሳተ አሃድ ነው፦ ስለተሟጠጠው IP ምንም አይናገርም፤ ስለዚህ የcombo ሽክርክሪት
  በእያንዳንዱ ወንድም ግንኙነት አንድ በእርግጠኝነት የሚወድቅ ጥሪ ማባከኑን ይቀጥላል።
- **የወንድም ግንኙነት ደኅንነት**፦ ቀድሞውኑ ቋሚ ሁኔታ ላይ ያለ
  (banned/credits_exhausted) ወይም ረዘም ያለ የማቀዝቀዣ ጊዜ ውስጥ ያለ ወንድም
  ግንኙነት ፈጽሞ አይተካም።
- **የተወሰነ የፍቃድ ዝርዝር**፦ `EGRESS_BUCKETED_LOCK_PROVIDERS`ን ማስፋት ግልጽ
  የባለቤት ውሳኔ ነው፤ አጠቃላይ ሽቦ አገናኝ የለም (ስርዓተ-ጥለት #10334/#10419)።
  የወንድም ግንኙነት መጠይቁ ያንኑ የፍቃድ ዝርዝር እንደ SQL ቀጥተኛ እሴት ከመድገም
  ይልቅ ያስተሳስረዋል፤ ስለዚህ ዝርዝሩን ማስፋት የአንድ መስመር ለውጥ ሆኖ ይቆያል።
- **የመውጫ IP ሽክርክሪት፣ በሁለቱም አቅጣጫዎች**፦ የፍለጋ መስኮቱ (24h)
  ከመውጫ-IP መሸጎጫ TTL (5 min) እጅግ የሰፋ ነው፤ ስለዚህ "የመጨረሻ የታወቀ IP"
  ታሪክ እንጂ የአሁኑ ሁኔታ አይደለም። የግንኙነቱ proxy በመስኮቱ ውስጥ ከተቀያየረ፣
  መቆለፊያው በእውነት የሚጋራውን IP **ሊያመልጠው** ይችላል (የተመዘገበው IP አዲሱ፣
  ያልተሟጠጠው ነው) — በተመሳሳይም ከተሟጠጠው IP ከዚያ በኋላ ተቀይሮ የወጣን
  ወንድም ግንኙነት **ወደ ማቀዝቀዣ ጊዜ ሊያስገባ** ይችላል። ሁለተኛው ሁኔታ ለዚያ
  ወንድም ግንኙነት አንድ የማቀዝቀዣ ጊዜ መስኮት ያስከፍለዋል፤ ሁለቱም በታሪክ ላይ
  የተመሠረተ ፍለጋ እንደሚኖሩት በሚቻለው መጠን የሚደረግ ገደቦች ተቀባይነት አግኝተዋል።
- **ወጪ**፦ ሁለት የተገደቡ የ`proxy_logs` ቅኝቶች (በ`idx_pl_timestamp` በኩል
  በመስኮት የተጣሩ)፣ በ429 ድግግሞሽ ጊዜ ብቻ። አዲስ ማውጫ የለም (migration 134
  YAGNI)። መጠነኛ መጠን ባለው የእውነተኛ ትራፊክ DB ቅጂ ላይ ተለክቷል፤
  ከፍተኛ-የውጤት መጠን ያለው ኢንስታንስ በዚያው መስኮት ውስጥ በተመጣጣኝ ሁኔታ
  ተጨማሪ ረድፎችን ይይዛል።

---

## ሌሎች የችናነት (Resilience) ባህሪያት

- **20 የማዞሪያ (routing) ስትራቴጂዎች** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — [AUTO-COMBO.md](../routing/AUTO-COMBO.md) ይመልከቱ።
- **Reset-aware ማዞሪያ** (v3.8.0) — ግንኙነቶችን በኮታ ዳግም ማስጀመሪያ (reset) ጊዜ መሠረት ቅድሚያ ይሰጣል።
- **የበስተጀርባ ሁነታ (background mode) መቀነስ** — የ Responses API `background: true` ከማስጠንቀቂያ ጋር ወደ sync ቀንሷል።
- **ተለዋዋጭ የመሣሪያ ገደብ መለየት** — የመሣሪያ ብዛት ገደቦች ሲደርሱ አቅራቢዎችን ይነሳል (backs off)።
- **የአደጋ ጊዜ ምትኬ (fallback)** — በ`OMNIROUTE_EMERGENCY_FALLBACK` ይቆጣጠራል፤ ኦፔሬተሮች ያለማደስ (restart) ከ Feature Flags ገጽ መተካት ይችላሉ።

---

## ማረም (Debugging)

- Weighted combo `503 all_targets_cooling_down` መልስ ይሰጣል (`Retry-After` ተቀምጧል፣ `diagnostics.excluded` እያንዳንዱን ዒላማ ከ`model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable` ጋር ይዘረዝራል) → ገንዳው (pool) ተዋቅሮ እና ተገናኝቷል፣ እያንዳንዱ ዒላማ በችናነት ቆጣሪ (resilience timer) ብቻ ነው የተከለከለው፤ የ`[COMBO] Weighted selection: every target excluded before dispatch — …` ማስጠንቀቂያው ምክንያቶችን እና የሚቀሩትን ሰከንዶች ይጠቅሳል። ከተመሳሳይ combo የሚመነጭ `404 no_executable_targets` ማለት ምንም የችናነት ቆጣሪ አልተሳተፈም ማለት ነው (ሊሠራ የሚችል ነገር የለም፣ ወይም እያንዳንዱ መለያ የተገኝነት ምርመራን (availability probe) አሳልፏል)። በ`targetResolution.ts` ውስጥ ከተሰበሰቡት ማግለሎች (exclusions) በ`open-sse/services/combo/pinRecovery.ts` ውስጥ የተገነባ ነው።
- ለአንድ አቅራቢ ያሉት ሁሉም ቁልፎች ዘለው → የcircuit breaker ሁኔታን እና የእያንዳንዱን ግንኙነት `rateLimitedUntil`/`testStatus` ሁለቱንም ያረጋግጡ።
- አቅራቢው ከreset መስኮት በኋላ እስከመጨረሻው ተከልክሏል → ኮዱ ጥሬ `state` እያነበበ ነው፣ ከ`getStatus()`/`canExecute()` ይልቅ።
- አንድ ቁልፍ ይወድቃል፣ ሌሎች መሥራት አለባቸው → ከcircuit breaker ይልቅ የግንኙነት ማቀዝቀዣ (connection cooldown) ይምረጡ።
- አንድ ሞዴል ብቻ ነው የሚወድቀው → ከግንኙነት ማቀዝቀዣ ይልቅ የሞዴል መቆለፊያ (model lockout) ይምረጡ።
- ሁኔታው ራሱ መለስ ማለት አለበት ግን አይለስም → የወደፊት ቀን (timestamp) + ጊዜያቸው ያለፈባቸውን ሁኔታ የሚያድስ የንባብ መንገድ ይፈትሹ። ቋሚ ሁኔታዎች በእጅ ማስተካከያ ይፈልጋሉ።

---

## የሰርቲዋይም (runtime) ሁኔታ — ለወኪል (agent) ፈጣን ማጣቀሻ

> ከ`AGENTS.md` → "Resilience Runtime State" በቃል በቃል ተይዟል (PR #12743) ወኪሉ
> መመሪያ ከ40k የአውድ በጀት (context budget) በታች እንዲቆይ። የላይኞቹ
> ክፍሎች የተቀነባበረ፣ ለወኪል የሚቀርብ እይታ ነው፤ ቁጥር ያላቸው ክፍሎች ሙሉው ማጣቀሻ ይቀጥላሉ።

OmniRoute ሦስት የተያያዙ ግን የተለያዩ ጊዜያዊ-ውድቀት ዘዴዎች አሉት። የማዞሪያ ባህሪ ሲያርሙ
የእያንዳንዱን መድረክ (scope) በተነጻጸረ ይያዙ። የ
[3-ንብርብር የችናነት ንድፍ](../diagrams/exported/resilience-3layers.svg)
ይመልከቱ (ምንጭ፡ [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
በአንድ እይታ ለማየት።

### የአቅራቢ Circuit Breaker

**መድረክ**: ሙሉ አቅራቢ፣ ለምሳሌ `glm`, `openai`, `anthropic`.

**ዓላማ**: በupstream/አገልግሎት ደረጃ ተከታታይ ውድቀቶች ለሚያሳይ አቅራቢ ትራፊክ መላክን
ማቆም፣ አንድ ያልጤና አቅራቢ እያንዳንዱን ጥያቄ እንዳይዘገይው።

**ትግበራ**:

- ዋና ክፍል (class)፡ `src/shared/utils/circuitBreaker.ts`
- የቻት በር/አፈጻጸም ገመድ (wiring)፡ `src/sse/handlers/chatHelpers.ts`፣ `src/sse/handlers/chat.ts`
- የሰርቲዋይም ሁኔታ API፡ `src/app/api/monitoring/health/route.ts`
- የተጋሩ መጠለያዎች (wrappers)፡ `open-sse/services/accountFallback.ts`
- የተቀመጠ ሁኔታ ሠንጠረዥ፡ `domain_circuit_breakers`

**ሁኔታዎች** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: መደበኛ ትራፊክ ይፈቀዳል።
- `DEGRADED`: ቀደም-ተብሎ ማስጠንቀቂያ ክልል — ውድቀቶች የመቀነሱን ገደብ (degradation threshold)
  አቋርጠዋል ግን እስካሁን የbreaker ገደብ አላቋረጡም፤ ትራፊኩ አሁንም ይፈሳል፣ ዳሽቦርዶች ማስጠንቀቂያውን ያሳያሉ።
  ተቀባይነት ያለው የግንኙነት ምርመራ ወይም አዲስ ውድቀት የሌለበት ጸጥ ያለ መስኮት ወደ `CLOSED` ይመልሰዋል
  (`docs/architecture/RESILIENCE_GUIDE.md` መስኮቱን ያለው)።
- `OPEN`: አቅራቢው ለጊዜው ታግዷል፤ ጠሪዎች የprovider-circuit-open ምላሽ ያገኛሉ
  ወይም combo ማዞሪያ ወደ ሌላ ዒላማ ይዘዋወራል።
- `HALF_OPEN`: የreset ጊዜ ማብቃት (timeout) አልፏል፤ የምርመራ ጥያቄ ይፈቀዳል። ስኬት
  breaker-አን ይዘጋል፣ ውድቀት እንደገና ይከፍታል።

**ነባሪዎች** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`፣ በ
`src/lib/resilience/settings.ts` ውስጥ `DEFAULT_RESILIENCE_SETTINGS.providerBreaker` በኩል ተጠቅሞ →
በ`src/sse/handlers/chatHelpers.ts` ውስጥ `getCircuitBreaker(provider, …)`። የሙሉ-አቅራቢው
breaker በ`circuitBreakerThreshold` / `circuitBreakerReset` ላይ ይሠራል፦

| መገለጫ    | የሚቀንስበት | የሚከፍትበት (`circuitBreakerThreshold`) | reset (`circuitBreakerReset`) |
| ------- | ------: | ----------------------------------: | ----------------------------: |
| OAuth   |     `5` |                                 `8` |                         `60s` |
| API ቁልፍ |     `7` |                                `12` |                         `30s` |
| አካባቢያዊ  |  (የተሰራ) |                                 `2` |                         `15s` |

`PROVIDER_PROFILES` እንዲሁም `providerFailureThreshold` (10/15/2)፣
`providerFailureWindowMs` (15/30/5 ደቂቃ) እና `providerCooldownMs` (5/10/1 ደቂቃ) ይገልጻል፦ እነዚህ
**የሚመረጠውን (opt-in) አጠቃላይ Provider Cooldown የመስኮት በርን** ኃይል ይሰጣሉ
(`PROVIDER_COOLDOWN_ENABLED`፣ ነባሪ ጠፍቷል) — በ`open-sse/services/providerCooldownTracker.ts` ውስጥ ያለ የአቅራቢ-ደረጃ ግቤት
ከ`providerFailureThreshold` ውድቀቶች በ`providerFailureWindowMs` ውስጥ በኋላ ብቻ እያቃዘ ይቆጠራል፣
ከዚያም ለ`providerCooldownMs` ያቃዛል። እነዚህ የሕይወቱ (live) breaker ገደቦች አይደሉም — breaker ባህሪ
ተስመምታችሁ ማስተካከል አትሞክሩ። እያንዳንዱ ነባሪ በ
`OMNIROUTE_PROVIDER_BREAKER_*` እና `OMNIROUTE_CIRCUIT_BREAKER_*` የአካባቢ ተለዋዋጮች (env vars) መተካት ይቻላል፤
ትክክለኛው የሰርቲዋይም ማጣቀሻ ሠንጠረዥ በ`docs/architecture/RESILIENCE_GUIDE.md` ውስጥ ነው።

የአቅራቢ breaker የሚያነሳሱት የአቅራቢ-ደረጃ የውድቀት ሁኔታዎች ብቻ መሆን አለባቸው፦

```ts
(408, 500, 502, 503, 504);
```

ሙሉውን የአቅራቢ breaker ለመደበኛ የመለያ/ቁልፍ/ሞዴል ስህተቶች እንደ አብዛኞቹ
`401`, `403`, ወይም `429` አግባቦች አታንሱት። እነዚያ ብዙውን ጊዜ የግንኙነት ማቀዝቀዣ (connection cooldown)
ወይም የሞዴል መቆለፊያ (model lockout) ናቸው። አጠቃላይ የAPI-ቁልፍ አቅራቢ `403` እስካልተመደበ እንደ ማብቃታዊ
የአቅራቢ/መለያ ስህተት (terminal provider/account error) ድረስ ሊድን ይገባል።

ሰሪው ሰነፍ ማገገምን ይጠቀማል እንጂ የጀርባ ቆጣሪን አይጠቀምም። `OPEN` ሲያበቃ፣ እንደ `getStatus()`፣ `canExecute()` እና `getRetryAfterMs()` ያሉ ንባቦች ሁኔታውን ወደ `HALF_OPEN` ያድሳሉ፣ ስለዚህ ዳሽቦርዶች እና የኮምቦ እጩ ሰሪዎች ጊዜው ያለፈ አቅራቢን ለዘላለም ማግለላቸውን አይቀጥሉም።

### የግንኙነት ማቀዝቀዣ

**ልክ**፡ አንድ የአቅራቢ ግንኙነት/መለያ/ቁልፍ።

**ዓላማ**፡ ለተመሳሳይ አቅራቢ ሌሎች ግንኙነቶች ጥያቄዎችን ማገልገላቸውን እንዲቀጥሉ በማድረግ አንድ መጥፎ ቁልፍ/መለያ ለጊዜው ማለፍ።

**ትግበራ**፡

- የጽሑፍ/ዝማኔ መንገድ፡ `src/sse/services/auth.ts::markAccountUnavailable()`
- የመለያ ምርጫ/ማጣራት፡ `src/sse/services/auth.ts::getProviderCredentials...`
- የማቀዝቀዣ ስሌት፡ `open-sse/services/accountFallback.ts::checkFallbackError()`
- ቅንብሮች፡ `src/lib/resilience/settings.ts`

በአቅራቢ ግንኙነቶች ላይ አስፈላጊ መስኮች፡

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

በመለያ ምርጫ ወቅት፣ ግንኙነት ሲሆን ይለፋል፡

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

ማቀዝቀዣዎችም ሰነፍ ናቸው፡ `rateLimitedUntil` ቀደም ሲል ሲያልፍ፣ ግንኙነቱ እንደገና ተቀባይነት ያገኛል። በተሳካ አጠቃቀም ላይ፣ `clearAccountError()` `testStatus`ን፣ `rateLimitedUntil`ን፣ የስህተት መስኮችን እና `backoffLevel`ን ያጸዳል።

ነባሪ የግንኙነት ማቀዝቀዣ ባህሪ፡

- የOAuth መሠረታዊ ማቀዝቀዣ፡ `5s`።
- የAPI-ቁልፍ መሠረታዊ ማቀዝቀዣ፡ `3s`።
- የAPI-ቁልፍ `429` ሲኖር የupstream ዳግም ሙከራ ምክሮችን (`Retry-After`፣ የreset ራስጌዎች፣ ወይም ሊተነተን የሚችል የreset ጽሑፍ) ማስቀደም አለበት።
- የተደጋገሙ ሊረባረቡ የሚችሉ ውድቀቶች ኤክስፖኔንሺያል ባክኦፍ ይጠቀማሉ፡

```ts
baseCooldownMs * 2 ** failureIndex;
```

የፀረ-ነጎድጓድ-መንጋ መከላከያ በአንድ ግንኙነት ላይ የሚሆኑ ተዛማጅ ውድቀቶች ማቀዝቀዣውን ደጋግመው እንዳያራዝሙ ወይም `backoffLevel`ን በድጋሚ እንዳይጨምሩ ይከለክላል።

ማብቂያ ሁኔታዎች ማቀዝቀዣዎች አይደሉም። `banned`፣ `expired` (በ`EXPIRED_RETRY_MAX` በኩል ከN ታህቲል ዳግም ሙከራዎች በኋላ ብቻ ማብቂያ የሚሆን) እና `credits_exhausted` ማረጋገጫዎች/ቅንብሮች እስኪለወጡ ወይም ኦፔሬተር እስኪያስተካክላቸው ድረስ ያለ ተቀባይነት ለመቆየት ታስበው ናቸው። ማብቂያ ሁኔታዎችን በጊዜያዊ የማቀዝቀዣ ሁኔታ አይተኩ።

### የሞዴል መቆለፊያ

**ልክ**፡ አቅራቢ + ግንኙነት + ሞዴል።

**ዓላማ**፡ አንድ ሞዴል ብቻ ለእሱ ግንኙነት ሲጎድል ወይም በኮታ ሲገደብ አጠቃላይ ግንኙነትን ከማሰናከል መቆጠብ።

ምሳሌዎች፡

- `429` የሚመልሱ በሞዴል-ኮታ አቅራቢዎች።
- ለአንድ የጎደለ ሞዴል `404` የሚመልሱ አካባቢያዊ አቅራቢዎች።
- እንደ ተመረጡ Grok ሁነታዎች ያሉ አቅራቢ-ተኮር ሁነታ/ሞዴል ፍቃድ ውድቀቶች።

የሞዴል መቆለፊያ በ`open-sse/services/accountFallback.ts` ውስጥ ይኖራል እና ተመሳሳይ ግንኙነት ሌሎች ሞዴሎችን ማገልገሉን እንዲቀጥል ያደርጋል።

### የማረም መመሪያ

- ሁሉም የአቅራቢ ቁልፎች ከተለፉ፣ የአቅራቢ ሰሪ ሁኔታን እና የእያንዳንዱን ግንኙነት `rateLimitedUntil`/`testStatus` ይመርምሩ።
- አቅራቢ ከዳግም ማስጀመሪያ መስኮት በኋላ በቋሚነት ተገልሏል የሚመስል ከሆነ፣ ኮድ `getStatus()`/`canExecute()` ከመጠቀም ይልቅ ያለ ማቀነባበርያ `state` እያነበበ መሆኑን ይመልከቱ።
- አንድ የአቅራቢ ቁልፍ ከወደቀ ግን ሌሎች መሥራት ካለባቸው፣ የአቅራቢ ሰሪን ይልቅ የግንኙነት ማቀዝቀዣን ይምረጡ።
- አንድ ሞዴል ብቻ ከወደቀ፣ የግንኙነት ማቀዝቀዣን ይልቅ የሞዴል መቆለፊያን ይምረጡ።
- ሁኔታ እራሱን መጠገን ካለበት፣ የወደፊት የጊዜ ማመሳከሪያ/ዳግም ማስጀመሪያ ጊዜ ማብቂያ እና ጊዜው ያለፈ ሁኔታን የሚያድስ የንባብ መንገድ ሊኖረው ይገባል። ቋሚ ሁኔታዎች የእጅ ማረጋገጫ ወይም የውቅር ለውጦችን ይፈልጋሉ።

---

## TLS ፊንገርፕሪንቲንግ እና ስቴልዝ

ለአቅራቢ ልዩ የሆነ ስቴልዝ (JA3/JA4, CCH, obfuscation) በተነጠለ ሰነድ ተዘግቧል — `docs/security/STEALTH_GUIDE.md` ይመልከቱ (git; ወደ `/docs` አልተጣመረም)።

---

## የመቋቋም ምርመራ (ደረጃ 8 · ብሎክ C)

ከመቋቋም ሎጂክ የዩኒት ምርመራዎች በላይ፣ ሦስት ምርመራዎች ራንታይሙን በእውነተኛ
ግፊት/ውድቀት ሁኔታዎች ስር ይፈትሻሉ (ሁሉም integration/nightly ናቸው — ምንም PR አይከለክሉም)፦

| Test        | What                                                                                                                                                          | Run                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Chaos       | ውሸታማ-አፕስትሪም ኖድ እውነተኛ latency/reset/timeout/503 ያስገባል; circuit breaker መክፈቱንና መመለሱን ያረጋግጣል እንዲሁም `checkFallbackError` 503ን እንደሚመለስ fallback መለይቶ መቆጠሩን ያረጋግጣል። | `RUN_CHAOS_INT=1 npm run test:chaos`     |
| Heap-growth | በ`--expose-gc` ስር በእያንዳንዱ `createSSEStream` ~500 ስትሪሞች; heap ከገበያው ጣሪያ በላይ ካደገ ምርመራው ይውድቃል (OOM ጠባቂ #3069)።                                                   | `npm run test:heap`                      |
| k6 soak     | በ`/api/monitoring/health` ላይ ቀጣይ ጭነት; የp95/ስህተት ገደቦች።                                                                                                         | `k6 run tests/load/k6-soak.js` (nightly) |

በ`.github/workflows/nightly-resilience.yml` ይቀናጀዋል (cron + dispatch)።
በነባሪው `test:integration` ውስጥ chaos እና heap ራሳቸውን ያልፋሉ (ያለ `RUN_CHAOS_INT`/`--expose-gc`)።

---

## ይህንም ይመልከቱ

- [የአርክቴክቸር መመሪያ](./ARCHITECTURE.md) — የስርዓት አርክቴክቸር እና ውስጣዊ ክፍሎች
- [የተጠቃሚ መመሪያ](../guides/USER_GUIDE.md) — አቅራቢዎች፣ ኮምቦዎች፣ CLI ውህደት
- [አውቶ-ኮምቦ ሞተር](../routing/AUTO-COMBO.md) — የ16-ምክንያት ነጥብ አሰጣጥ፣ የሞድ ጥቅሎች
