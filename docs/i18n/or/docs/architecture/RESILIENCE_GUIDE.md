# Resilience Guide (ଓଡ଼ିଆ)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute ରେ ତିନୋଟି ପୃଥକ କିନ୍ତୁ ପରସ୍ପର ସମ୍ପର୍କିତ resilience ପ୍ରଣାଳୀ ଅଛି। ପ୍ରତ୍ୟେକର ପରିସର ଏବଂ ଉଦ୍ଦେଶ୍ୟ ଭିନ୍ନ ଅଟେ। ରାଉଟିଂ ଆଚରଣ ଡିବଗ୍ କରିବା ସମୟରେ ସେଗୁଡ଼ିକୁ ଅଲଗା ଅଲଗା ରଖନ୍ତୁ।

![3-ସ୍ତରୀୟ resilience ମଡେଲ](../diagrams/exported/resilience-3layers.svg)

> ଉତ୍ସ: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. ପ୍ରୋଭାଇଡର ସର୍କିଟ ବ୍ରେକର

**ପରିସର:** ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରୋଭାଇଡର (ଯେପରିକି `glm`, `openai`, `anthropic`)।

**ଉଦ୍ଦେଶ୍ୟ:** ଅପଷ୍ଟ୍ରିମ/ସେବା ସ୍ତରରେ ବାରମ୍ବାର ବିଫଳ ହେଉଥିବା ପ୍ରୋଭାଇଡରକୁ ଟ୍ରାଫିକ ପଠାଇବା ବନ୍ଦ କରିବା।

**କାର୍ଯ୍ୟାନ୍ବୟନ:**

- ମୂଳ କ୍ଲାସ: `src/shared/utils/circuitBreaker.ts`
- ୱାୟରିଂ: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- ସ୍ଥିତି API: `GET /api/monitoring/health`
- ରିସେଟ API: `POST /api/resilience/reset`
- ର୍ୟାପର: `open-sse/services/accountFallback.ts`
- DB ଟେବୁଲ: `domain_circuit_breakers`

**ଅବସ୍ଥାଗୁଡ଼ିକ:**

- `CLOSED` — ସାଧାରଣ ଟ୍ରାଫିକ ଅନୁମତିପ୍ରାପ୍ତ
- `DEGRADED` — ଟ୍ରାଫିକ ଏବେ ବି ଅନୁମତିପ୍ରାପ୍ତ, କିନ୍ତୁ ବଢୁଥିବା ପ୍ରୋଭାଇଡର ବିଫଳତାଗୁଡ଼ିକୁ ଟ୍ରାକ୍ କରାଯାଉଛି; ଯଥେଷ୍ଟ ସଫଳତା ମିଳିଲେ, ବୈଧ ସଂଯୋଗ ପରୀକ୍ଷା ହେଲେ, କିମ୍ବା ଶେଷ ବିଫଳତା ପ୍ରକାର ପାଇଁ ସବୁଠାରୁ ଦୀର୍ଘ `OPEN` ଧାରଣ ସମୟ (ଏହାର `cooldownByKind` ମୂଲ୍ୟ, ନଚେତ୍ `resetTimeout`, × `maxBackoffMultiplier`, ଅତିକମରେ ଗୋଟିଏ କୁଲଡାଉନ) ପରେ ନୂତନ ବିଫଳତା ନ ଥିଲେ `CLOSED` କୁ ଫେରିଥାଏ
- `OPEN` — ପ୍ରୋଭାଇଡର ଅସ୍ଥାୟୀ ଭାବେ ଅବରୁଦ୍ଧ; କମ୍ବୋ ରାଉଟିଂ ଏହାକୁ ଏଡ଼ାଇ ଯାଏ
- `HALF_OPEN` — ରିସେଟ ଟାଇମଆଉଟ ସମାପ୍ତ ହୋଇଛି; ପ୍ରୋବ ଅନୁରୋଧ ଅନୁମତିପ୍ରାପ୍ତ

**ବିନ୍ୟାସଯୋଗ୍ୟ ଡିଫଲ୍ଟ (`open-sse/config/constants.ts`, Dashboard → Settings → Resilience ରେ ଦୃଶ୍ୟମାନ):**

| ଶ୍ରେଣୀ  | DEGRADED ହେବା | OPEN ହେବା | ରିସେଟ ଟାଇମଆଉଟ |
| ------- | ------------- | --------- | ------------- |
| OAuth   | 5 ବିଫଳତା      | 8 ବିଫଳତା  | 60s           |
| API-key | 7 ବିଫଳତା      | 12 ବିଫଳତା | 30s           |
| Local   | ଉଦ୍ଭୂତ        | 2 ବିଫଳତା  | 15s           |

`degradationThreshold` ନିୟନ୍ତ୍ରଣ କରେ ଯେ ପ୍ରୋଭାଇଡର କେବେ `DEGRADED` ରେ ପ୍ରବେଶ କରିବ; `failureThreshold` ନିୟନ୍ତ୍ରଣ କରେ ଯେ ଏହା କେବେ ଖୋଲିବ ଏବଂ ଏଡ଼ାଯିବ। ସ୍ଥାନୀୟ ପ୍ରୋଭାଇଡର ପ୍ରୋଫାଇଲଗୁଡ଼ିକ ଏପର୍ଯ୍ୟନ୍ତ Resilience ସେଟିଂସ ପୃଷ୍ଠାରେ ଉପଲବ୍ଧ ନାହିଁ।

**ଟ୍ରିପ କୋଡ:** କେବଳ ପ୍ରୋଭାଇଡର-ସ୍ତରୀୟ ସ୍ଥିତି `[408, 500, 502, 503, 504]`। ଆକାଉଣ୍ଟ-ସ୍ତରୀୟ ତ୍ରୁଟି ପାଇଁ ଟ୍ରିପ କରନ୍ତୁ ନାହିଁ (ଅଧିକାଂଶ 401/403/429 — ସେଗୁଡ଼ିକ କୁଲଡାଉନ କିମ୍ବା ଲକଆଉଟ ଅନ୍ତର୍ଗତ)।

**ଧୀର ପୁନରୁଦ୍ଧାର:** ଯେତେବେଳେ `OPEN` ସମାପ୍ତ ହୁଏ, `getStatus()`, `canExecute()`, `getRetryAfterMs()` ଅବସ୍ଥାକୁ `HALF_OPEN` କୁ ତାଜା କରନ୍ତି। ସେହି ପଠନଗୁଡ଼ିକ (ଏବଂ ପରବର୍ତ୍ତୀ ବିଫଳତା) ପୁରୁଣା `DEGRADED` କୁ ପୁଣି `CLOSED` କୁ ଫେରାଇଥାଏ। ବ୍ୟାକଗ୍ରାଉଣ୍ଡ ଟାଇମର ଆବଶ୍ୟକ ନାହିଁ।

---

### ଅପ୍ଟ-ଇନ ଗ୍ଲୋବାଲ ପ୍ରୋଭାଇଡର କୁଲଡାଉନ (ୱିଣ୍ଡୋ ଗେଟ)

ଚତୁର୍ଥ, **ଅପ୍ଟ-ଇନ** ସ୍ତର (`PROVIDER_COOLDOWN_ENABLED`, ଡିଫଲ୍ଟ **ବନ୍ଦ**) ବିଫଳ ପ୍ରୋଭାଇଡରଗୁଡ଼ିକର କ୍ରସ-ରିକ୍ୱେଷ୍ଟ ମେମୋରି `open-sse/services/providerCooldownTracker.ts` ରେ ରଖେ, ଯାହାକୁ କମ୍ବୋ ଟାର୍ଗେଟ ରିଜୋଲ୍ୟୁସନ ଦ୍ୱାରା ପରାମର୍ଶ କରାଯାଏ, ଯାହାଦ୍ୱାରା କ୍ରମାଗତ କମ୍ବୋ ଅନୁରୋଧଗୁଡ଼ିକ ହଇଁ ବିଫଳ ହୋଇଥିବା ପ୍ରୋଭାଇଡରକୁ ପୁଣି ଥରେ ଚାଲିବା ବନ୍ଦ କରନ୍ତି। ପ୍ରୋଭାଇଡର-ସ୍ତରୀୟ ଏଣ୍ଟ୍ରିଗୁଡ଼ିକ `PROVIDER_PROFILES` ୱିଣ୍ଡୋ ଗେଟ ଅନୁସରଣ କରନ୍ତି:

| ପ୍ରୋଫାଇଲ | ପରେ ଟ୍ରିପ ହୁଏ (`providerFailureThreshold`) | ଭିତରେ (`providerFailureWindowMs`) | ପାଇଁ କୁଲ ହୁଏ (`providerCooldownMs`) |
| -------- | -----------------------------------------: | --------------------------------: | ----------------------------------: |
| OAuth    |                                       `10` |                           `15min` |                              `5min` |
| API key  |                                       `15` |                           `30min` |                             `10min` |

ଥ୍ରେସହୋଲ୍ଡ ତଳେ ପ୍ରୋଭାଇଡରକୁ କୁଲିଂ ଭାବେ ବିବେଚନା କରାଯାଏ **ନାହିଁ**; ଗୋଟିଏ ସଫଳତା ୱିଣ୍ଡୋକୁ ଖାଲି କରିଦିଏ। ସଂଯୋଗ-ସ୍ତରୀୟ ଏଣ୍ଟ୍ରିଗୁଡ଼ିକ (`provider:connectionId`) ଏକ୍ସପୋନେନସିଆଲ `minRetryCooldownMs → maxRetryCooldownMs` ବ୍ୟାକଅଫ ବଜାୟ ରଖନ୍ତି। ଓଭରରାଇଡ: `OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`। ରିଗ୍ରେସନ ଗାର୍ଡ: `tests/unit/provider-cooldown-window-gate.test.ts`।

## 2. ସଂଯୋଗ କୁଲ୍ଡାଉନ୍ (Connection Cooldown)

**ପରିସର (Scope):** ଏକାକୀ ପ୍ରୋଭାଇଡର୍ ସଂଯୋଗ/ଆକାଉଣ୍ଟ/କୀ।

**ଉଦ୍ଦେଶ୍ୟ:** ଗୋଟିଏ ଖରାପ କୀକୁ ଛାଡ଼ିଦେବା, ଯେତେବେଳେ ସେହି ପ୍ରୋଭାଇଡର୍ ପାଇଁ ଅନ୍ୟ ସଂଯୋଗଗୁଡ଼ିକ ସେବା ଜାରି ରଖନ୍ତି।

**କାର୍ଯ୍ୟାନ୍ୱୟନ:**

- ଅଣଉପଲବ୍ଧ ଭାବେ ଚିହ୍ନଟ: `src/sse/services/auth.ts::markAccountUnavailable()`
- ଚୟନ: ସେହି ଫାଇଲରେ `getProviderCredentials*`
- କୁଲ୍ଡାଉନ୍ ଗଣନା: `open-sse/services/accountFallback.ts::checkFallbackError()`
- ସେଟିଂସ୍: `src/lib/resilience/settings.ts`

**ପ୍ରତ୍ୟେକ ସଂଯୋଗ ପାଇଁ ଫିଲ୍ଡଗୁଡ଼ିକ:**

- `rateLimitedUntil` — କୁଲ୍ଡାଉନ୍ ସମାପ୍ତ ହେବା ପର୍ୟ୍ୟନ୍ତ ଟାଇମ୍ଷ୍ଟାମ୍ପ
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — ଏକ୍ସପୋନେନ୍ସିଆଲ୍ ବ୍ୟାକଅଫ୍ କାଉଣ୍ଟର୍

**ଡିଫଲ୍ଟ କୁଲ୍ଡାଉନ୍ଗୁଡ଼ିକ:**

- OAuth ଆଧାର: 5s
- API-କୀ ଆଧାର: 3s
- API-କୀ 429: ଅପ୍ଷ୍ଟ୍ରିମ୍ `Retry-After`/ରିସେଟ୍ ହେଡର୍/ପାର୍ସ ଯୋଗ୍ୟ ରିସେଟ୍ ଟେକ୍ସଟକୁ ଅଗ୍ରାଧିକାର ଦିଏ
- ବ୍ୟାକଅଫ୍: `baseCooldownMs * 2 ** failureIndex`

**ଥଣ୍ଡରିଂ-ହର୍ଡ ପ୍ରତିରୋଧ:** ଏକାସାଙ୍ଗରେ ଘଟୁଥିବା ବିଫଳତାଗୁଡ଼ିକ କୁଲ୍ଡାଉନ୍କୁ ଅତ୍ୟଧିକ ବଢ଼ାଇବା କିମ୍ବା `backoffLevel`କୁ ଦୁଇଥର ବଢ଼ାଇବାରୁ ରୋକେ।

**କନ୍କରେନ୍ସି-ସୀମା 429 ଗୁଡ଼ିକ ବ୍ୟାକଅଫ୍ ସିଢ଼ି ଉପରକୁ ଉଠନ୍ତି ନାହିଁ।** ଯେଉଁ `429`ର ବଡି କନ୍କରେନ୍ସି
ସୀମା ରିପୋର୍ଟ କରେ ("too many concurrent requests", "concurrency limit", "parallel request
limit", GLM `并发数过高`), ତାହାର ଅର୍ଥ ଆକାଉଣ୍ଟ୍ ସୁସ୍ଥ ଅଛି କିନ୍ତୁ ବ୍ୟସ୍ତ ଅଛି।
`checkFallbackError()` `concurrency_limited` କାରଣ ଫେରାଏ: ବର୍ତ୍ତମାନ ପରବର୍ତ୍ତୀ
ସଂଯୋଗକୁ ଫେଲଓଭର୍ କରନ୍ତୁ, ଏହାକୁ ନିର୍ଦ୍ଧାରିତ `CONCURRENCY_LIMIT_COOLDOWN_MS` (1s) କିମ୍ବା
ଅପ୍ଷ୍ଟ୍ରିମ୍ ରିଟ୍ରାଏ ସୂଚନା ପାଇଁ କୁଲ୍ କରନ୍ତୁ, `backoffLevel`କୁ ଅପରିବର୍ତ୍ତିତ ରଖନ୍ତୁ, ଏବଂ `skipProviderBreaker`
ସେଟ୍ କରନ୍ତୁ। ଏକ ସ୍ପଷ୍ଟ କୋଟା ବଡି ତଥାପି ଜିତେ, ତେଣୁ ଯେଉଁ ବଡି କୋଟା ପ୍ୟାଟର୍ନ ସହ ମଧ୍ୟ ମେଳ ଖାଏ, ତାହା କୋଟା
ନିଷ୍ପତ୍ତି ହିଁ ରହେ। ଚିହ୍ନଟ: `src/shared/utils/classify429.ts`ରେ `looksLikeConcurrencyLimit()`;
ନିଷ୍ପତ୍ତି: `open-sse/services/accountFallback/concurrencyLimit429.ts`। `classify429()` (ବ୍ରେକରର
`FailureKind`) ଅପରିବର୍ତ୍ତିତ ରହେ ଏବଂ ଏହି ବଡିଗୁଡ଼ିକ ପାଇଁ ତଥାପି `rate_limit` ପଢ଼େ।

**ଷ୍ଟ୍ରିମ୍ ବିଷୟବସ୍ତୁ ଷ୍ଟଲ୍ ଆକାଉଣ୍ଟକୁ କୁଲ୍ କରେ ନାହିଁ।** ଯେତେବେଳେ ବିଷୟବସ୍ତୁ-ଷ୍ଟଲ୍ ୱାଚ୍ଡଗ୍
(`open-sse/utils/streamHandler.ts`) ଏପରି ଷ୍ଟ୍ରିମ୍ ଉପରେ ହାର ମାନେ ଯାହା ନିର୍ଦ୍ଧାରିତ ସମୟରେ
କୌଣସି ମଡେଲ୍ ଆଉଟପୁଟ୍ ପଠାଇନି, `markAccountUnavailable()` ସଂଯୋଗରେ ତ୍ରୁଟି ରେକର୍ଡ କରେ କିନ୍ତୁ କୌଣସି
କୁଲ୍ଡାଉନ୍ ସେଟ୍ କରେ ନାହିଁ: ଷ୍ଟଲ୍ ସେହି ଅନୁରୋଧର, ଯାହା ବେଶାଗଳରେ କୌଣସି ଆଉଟପୁଟ୍ ନ ଥିବା ଏକ ଦୀର୍ଘ ରିଜନିଂ ଟର୍ନ୍ ହୋଇଥାଏ।
ଅପରେଟରମାନେ `resilienceSettings.streamStallCooldown.enabled` (ଡିଫଲ୍ଟ `false`) ସହ ପୁଣି ଅପ୍ଟ-ଇନ୍ କରିପାରିବେ।

**ରିଜନିଂ ଫ୍ରେମ୍ଗୁଡ଼ିକ ବିଷୟବସ୍ତୁ-ଷ୍ଟଲ୍ ବଜେଟ୍ ପୁଣି ଆରମ୍ଭ କରନ୍ତି।** ଏକ ରିଜନିଂ ମଡେଲ୍ ନିଜର ପ୍ରଥମ ଦୃଶ୍ୟମାନ ଟୋକେନ୍ ପୂର୍ବରୁ
ମିନିଟ୍ ମିନିଟ୍ ଭାବିପାରେ: Claude `thinking_delta` ଫ୍ରେମ୍ ଷ୍ଟ୍ରିମ୍ କରେ ଯାହାର ଥିଙ୍କିଂ ଟେକ୍ସଟ୍ ଖାଲି ହୋଇପାରେ,
ଏବଂ Responses API ଗୋଟିଏ ପରେ ଗୋଟିଏ ରିଜନିଂ ଆଇଟମ୍ ଷ୍ଟ୍ରିମ୍ କରେ।
`isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) ଏହି ଫ୍ରେମ୍ଗୁଡ଼ିକୁ ଚିହ୍ନଟ କରେ,
ଏବଂ ୱାଚ୍ଡଗ୍ ପ୍ରତ୍ୟେକ ଫ୍ରେମରେ ଟର୍ନ୍ ବାଟଲାଇବା ପରିବର୍ତ୍ତେ ନିଜ ବଜେଟ୍ ପୁଣି ଆରମ୍ଭ କରେ। ସେଗୁଡ଼ିକ ତଥାପି
ମଡେଲ୍ ଆଉଟପୁଟ୍ ନୁହନ୍ତି, ତେଣୁ କେବଳ ରିଜନିଂ ସହ ଶେଷ ହେଉଥିବା ଟର୍ନ୍ ଖାଲି ଭାବେ ରିପୋର୍ଟ ହୁଏ,
ଏବଂ ରିଜନିଂ ବନ୍ଦ କରି କେବଳ ହାର୍ଟବିଟ୍ ପଠାଉଥିବା ଟର୍ନ୍ ତଥାପି ୱାଚ୍ଡଗ୍କୁ ଟ୍ରିପ୍ କରେ।

Kiroର ବାଇନାରି `reasoningContentEvent` ଫ୍ରେମ୍ଗୁଡ଼ିକ (ଅଣଖାଲି ସିଗ୍ନେଚର ସହ) ଏହି ରିଜନିଂ କାର୍ଯ୍ୟକଳାପକୁ
ଏକ୍ସକ୍ୟୁଟର୍ ମାଧ୍ୟମରେ ଏକ ଖାଲି `reasoning_content` ଡେଲ୍ଟା ଭାବେ ବଜାୟ ରଖନ୍ତି। ସିଗ୍ନେଚର ଫରୱାର୍ଡ ହୁଏ ନାହିଁ।
ମେଟାଡାଟା, ଅସମ୍ପୂର୍ଣ୍ଣ ଫ୍ରେମ୍ ଏବଂ ଖାଲି ସିଗ୍ନେଚର ବିଷୟବସ୍ତୁ ବଜେଟ୍ ପୁଣି ଆରମ୍ଭ କରନ୍ତି ନାହିଁ;
ସ୍ୱାଧୀନ ସକ୍ରିୟ-ଷ୍ଟ୍ରିମ୍ ଟାଇମ୍ଆଉଟ୍ ଏବଂ କ୍ଲାଏଣ୍ଟ ବାଟଲିଂ ତଥାପି ଲାଗୁ ହୁଏ
(`open-sse/executors/kiro/reasoning.ts`)।

**ଅନ୍ତିମ ଅବସ୍ଥାଗୁଡ଼ିକ (କୁଲ୍ଡାଉନ୍ ନୁହେଁ):**

- `banned` — ନିଷିଦ୍ଧ-କୀୱାର୍ଡ / ଆକାଉଣ୍ଟ୍-ବ୍ୟାନ୍ ଚିହ୍ନଟ ଦ୍ୱାରା ସେଟ୍ ହୁଏ (ଦେଖନ୍ତୁ [BAN_DETECTION](../security/BAN_DETECTION.md)), ଏବଂ କ୍ରମାଗତ ତିନୋଟି ଅପ୍ଷ୍ଟ୍ରିମ୍ ପ୍ରତି-ଅନୁରୋଧ ପ୍ରତ୍ୟାଖ୍ୟାନ ଦ୍ୱାରା (`request_rejected`, ଯେପରିକି Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); ଗୋଟିଏ ପ୍ରତ୍ୟାଖ୍ୟାନ କେବଳ ସଂଯୋଗକୁ କୁଲ୍ କରେ
- `expired` (ସୀମିତ ପୁନଃପ୍ରୟାସ ପରେ ଅନ୍ତିମ ଅବସ୍ଥାକୁ ଯାଏ — `EXPIRED_RETRY_MAX = 3` ଏକ୍ସପୋନେନ୍ସିଆଲ୍ ବ୍ୟାକଅଫ୍ ସହ — ଯାହା ଫଳରେ ଆକାଉଣ୍ଟ୍ ସ୍ଥାୟୀ ଭାବେ ନିଷ୍କ୍ରିୟ ହେବା ପୂର୍ବରୁ କ୍ଷଣସ୍ଥାୟୀ OAuth ତ୍ରୁଟିଗୁଡ଼ିକ ନିଜେ ସୁଧାରି ହୋଇପାରିବେ)
- `credits_exhausted`

ଏଗୁଡ଼ିକ କ୍ରେଡେନ୍ସିଆଲ୍ ପରିବର୍ତ୍ତନ ହେବା ପର୍ଯ୍ୟନ୍ତ କିମ୍ବା କୌଣସି ଅପରେଟର୍ ସେଗୁଡ଼ିକୁ ରିସେଟ୍ କରିବା ପର୍ଯ୍ୟନ୍ତ ରହନ୍ତି। ଅନ୍ତିମ ଅବସ୍ଥାଗୁଡ଼ିକୁ କ୍ଷଣସ୍ଥାୟୀ କୁଲ୍ଡାଉନ୍ ଅବସ୍ଥାରେ ଓଭର୍ରାଇଟ୍ କରନ୍ତୁ ନାହିଁ।

**ଅଳ୍ସୁଆ ପୁନରୁଦ୍ଧାର (Lazy recovery):** ଯେତେବେଳେ `rateLimitedUntil` ଅତିକ୍ରମ ହୁଏ, ସଂଯୋଗ ପୁଣି ଯୋଗ୍ୟ ହୁଏ। ସଫଳ ବ୍ୟବହାରରେ, `clearAccountError()` ସମସ୍ତ ତ୍ରୁଟି ଫିଲ୍ଡ ସଫା କରେ।

### Claude OAuth ବ୍ୟବହାର କାନ୍ଥ: ନିମ୍ନ-ଅଗ୍ରାଧିକାର ଲେନ୍ + ସେସନ୍-ସୀମା ରିସେଟ୍

**ପରିସର:** ଗୋଟିଏ Claude ସବସ୍କ୍ରିପସନ୍ (OAuth) ସଂଯୋଗ। ଉଭୟ ବୈଶିଷ୍ଟ୍ୟ **ପ୍ରତ୍ୟେକ ସଂଯୋଗ ପାଇଁ
ଅପ୍ଟ-ଇନ୍** (ସଂଯୋଗ ସମ୍ପାଦନ କରନ୍ତୁ → Claude ବିଭାଗ → `providerSpecificData`ରେ
`lowPriorityMode` / `autoLimitReset`, ଉଭୟ ଡିଫଲ୍ଟ ବନ୍ଦ) ଏବଂ Claude Codeର `/low-priority` ଏବଂ
`/limit-reset` କମାଣ୍ଡଗୁଡ଼ିକୁ ପ୍ରତିବିମ୍ବିତ କରନ୍ତି (Claude Code 2.1.263ରୁ କ୍ୟାପଚର ହୋଇଥିବା ୱାୟାର୍ କଣ୍ଟ୍ରାକ୍ଟ)।

**କାର୍ଯ୍ୟାନ୍ୱୟନ:**

- ଷ୍ଟେଟ୍ ମେସିନ୍ + ପ୍ରତିକ୍ରିୟା ଶ୍ରେଣୀକରଣ: `open-sse/services/claudeLowPriority.ts`
- ରିସେଟ୍ ସ୍ଥିତି/ଦାବି କ୍ଲାଏଣ୍ଟ: `open-sse/services/claudeLimitReset.ts`
- ଏକ୍ସକ୍ୟୁଟର୍ ହୁକ୍ (ହେଡର୍ ଇଞ୍ଜେକସନ୍ + ସମାନ-ଆକାଉଣ୍ଟ୍ ପୁନଃପ୍ରୟାସ): `open-sse/executors/base.ts::execute()`
- ଅପ୍ଟ-ଇନ୍ ସ୍ଥାୟିତ୍ୱ: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**ଟ୍ରିଗର୍:** 5-ଘଣ୍ଟା ବ୍ୟବହାର କାନ୍ଥ — ଏକ `429` ଯାହାର ହେଡର୍ରେ
`anthropic-ratelimit-unified-status: rejected` ଥାଏ ଏବଂ, ଯେତେବେଳେ ଆକାଉଣ୍ଟ୍ ଯୋଗ୍ୟ ଥାଏ,
`anthropic-ratelimit-unified-slow-offer: treatment` ଥାଏ। ସେହି ପ୍ରଥମ କାନ୍ଥ 429 ପୂର୍ବରୁ କିଛି ପଠାଯାଏ ନାହିଁ;
ୟୁନିଫାଏଡ୍ ହେଡର୍ ବିନା ବର୍ଷ୍ଟ 429 ସାଧାରଣ କୁଲ୍ଡାଉନ୍ ପଥ ଦେଇ ଯାଏ।

**ନିମ୍ନ-ଅଗ୍ରାଧିକାର ଲେନ୍** (`lowPriorityMode`):

- wall 429 ଉପରେ executor ଅଫର୍ ଗ୍ରହଣ କରେ ଏବଂ ତୁରନ୍ତ `anthropic-usage-limit: slow` ସହିତ **ସମାନ**
  ଆକାଉଣ୍ଟକୁ ପୁଣି ଚେଷ୍ଟା କରେ; ଘୋଷିତ `anthropic-ratelimit-unified-reset` (+60s ଗ୍ରେସ୍) ପର୍ଯ୍ୟନ୍ତ lane
  ସକ୍ରିୟ ରହେ ଏବଂ ସେହି ୱିଣ୍ଡୋର ପ୍ରତ୍ୟେକ ଅନୁରୋଧ ସେହି header ବହନ କରେ। ଅଟକାଯାଇଥିବା 429 କେବେ ବି
  `handleChatCore` ପାଖରେ ପହଞ୍ଚେ ନାହିଁ, ତେଣୁ ସଂଯୋଗକୁ cooldown ରେ ରଖାଯାଏ **ନାହିଁ** ଏବଂ rotate ମଧ୍ୟ କରାଯାଏ ନାହିଁ।
- ପରବର୍ତ୍ତୀ ପ୍ରତିକ୍ରିୟାଗୁଡ଼ିକରେ `anthropic-ratelimit-unified-slow-status`: `active` / `not_needed`
  lane କୁ ବଜାୟ ରଖେ; `slot_busy` (429) କିମ୍ବା ଗୋଟିଏ `529` ସର୍ଭରର
  `anthropic-ratelimit-unified-slow-retry-after` (ଡିଫଲ୍ଟ 20s, clamp 5–600s, ±30% jitter)
  ଅପେକ୍ଷା କରେ ଏବଂ ପୁଣି ଚେଷ୍ଟା କରେ, ଯାହା `anthropic-ratelimit-unified-slow-max-wait` (ଡିଫଲ୍ଟ 20 ମିନିଟ୍, clamp
  1 ମିନିଟ୍–6 ଘଣ୍ଟା) ଦ୍ୱାରା ସୀମିତ — ତାହା ଅତିକ୍ରମ କଲେ lane ଶେଷ ହୁଏ ଏବଂ ଗୋଟିଏ 10-ମିନିଟ୍ cool-off
  ପୁନଃ-ଗ୍ରହଣକୁ ଅଟକାଏ। ଅପେକ୍ଷା ଅତିରିକ୍ତ ଭାବରେ ଅନୁରୋଧର ନିଜ upstream-start timeout
  (`resolveFetchStartTimeout`, ଡିଫଲ୍ଟରେ 10 ମିନିଟ୍)ର ଅବଶିଷ୍ଟ ସମୟ ବିୟୋଗ 5 s margin ଦ୍ୱାରା ସୀମିତ:
  ସେହି cap ନ ଥିଲେ 20-ମିନିଟ୍ ଡିଫଲ୍ଟ max-wait ଅନୁରୋଧ ଅପେକ୍ଷା ଅଧିକ ଦିନ ବଞ୍ଚିରହିଥାଆନ୍ତା ଏବଂ sleep
  ଅପେକ୍ଷା ମଝିରେ ବାତିଲ୍ ହୋଇଯାଆନ୍ତା, ଯାହା ସୁଗମ `max_wait` ଶେଷ + cool-off ବଦଳରେ `TimeoutError` ଦେଖାଇଥାଆନ୍ତା।
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, ଗୋଟିଏ 5h-ୱିଣ୍ଡୋ rollover, କିମ୍ବା
  `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (ଯାହା ଯେକୌଣସି status ରେ ଏହାକୁ
  `extra_usage` ଭାବରେ ଶେଷ କରେ, କାରଣ ଦେୟ overage ବର୍ତ୍ତମାନ wall କୁ ଆଚ୍ଛାଦନ କରେ) lane ଶେଷ କରେ;
  ପ୍ରତିକ୍ରିୟା ତାପରେ ସାଧାରଣ cooldown ପଥକୁ ପ୍ରବାହିତ ହୁଏ। `budget_exhausted` କୁ ଘୋଷିତ budget reset
  (≤ 8 ଦିନ) ପର୍ଯ୍ୟନ୍ତ ମନେ ରଖାଯାଏ।
- wall ଯାଞ୍ଚ executor ର ନିଜ 400-ଚାଳିତ intra-attempt ପୁନଃଚେଷ୍ଟାଗୁଡ଼ିକ (context ସମ୍ପାଦନା,
  thinking/effort clamps, param auto-learn) ପରେ ଚାଲେ, ତେଣୁ ଯେଉଁ wall 429 କେବଳ ସେହି
  ପୁନଃଚେଷ୍ଟାଗୁଡ଼ିକ ମଧ୍ୟରୁ ଗୋଟିଏରେ ଦେଖାଯାଏ ତାହା ମଧ୍ୟ cooldown ପଥରେ ପହଞ୍ଚିବା ବଦଳରେ ଅଟକାଯାଏ।
- ଅବସ୍ଥା ପ୍ରତି ସଂଯୋଗରେ in-memory ଅଟେ (ଗୋଟିଏ restart ପୁନଃ-ଗ୍ରହଣ ପାଇଁ ଗୋଟିଏ ଅତିରିକ୍ତ wall 429 ଖର୍ଚ୍ଚ କରେ)।

**Session-limit reset** (`autoLimitReset`, ଉଭୟ ଚାଲୁ ଥିଲେ lane ପୂର୍ବରୁ ଚେଷ୍ଟା କରାଯାଏ):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → `juniper_tide`
  block; ଯେତେବେଳେ `arm: "reset"` ଏବଂ `available: true`,
  `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits`
  `{ "program": "juniper_tide" }` ସହିତ (organization UUID
  `providerSpecificData.organizationUUID` ରୁ, bootstrap fallback)।
- `result: reset|not_limited` → ଅନୁରୋଧକୁ ପୂର୍ଣ୍ଣ ଗତିରେ ପୁଣି ଚେଷ୍ଟା କରାଯାଏ (slow header ନାହିଁ)।
  `already_used` / `not_offered` `next_available_at` କୁ memoise କରେ (ଡିଫଲ୍ଟ ଗୋଟିଏ ସପ୍ତାହ); ଯେକୌଣସି
  ବିଫଳତା 15 ମିନିଟ୍ back off କରେ। reset ସପ୍ତାହରେ ଥରେ ଏବଂ ତଥାପି ସାପ୍ତାହିକ ସୀମା ଆଡ଼କୁ ଗଣାଯାଏ।

Regression ସୁରକ୍ଷାଗୁଡ଼ିକ: `tests/unit/claude-low-priority-mode.test.ts`,
`tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`।

### Session affinity (#7274)

**ପରିସର:** ଗୋଟିଏ କ୍ଲାଏଣ୍ଟ ସେସନ୍ (`X-Session-Id` / `x-codex-session-id` / `x-omniroute-session` header) ଗୋଟିଏ ସଂଯୋଗ ସହିତ pin କରାଯାଇଛି, **ଯେକୌଣସି** ପ୍ରୋଭାଇଡର୍ ପାଇଁ।

**ଉଦ୍ଦେଶ୍ୟ:** ଅନୁରୋଧଗୁଡ଼ିକ ମଧ୍ୟରେ ଗୋଟିଏ multi-turn agent (Claude Code, aider, କଷ୍ଟମ୍ agentଗୁଡ଼ିକ)କୁ ସମାନ ଆକାଉଣ୍ଟରେ ରଖିବା, ଯାହା ଦ୍ୱାରା ପ୍ରତି-ଆକାଉଣ୍ଟ ସେସନ୍ ଅବସ୍ଥା ଥିବା ପ୍ରୋଭାଇଡରମାନଙ୍କରେ cross-account context ହାନି ଏବଂ ବାରମ୍ବାର cold-start 429 କମ୍ ହୁଏ।

**କାର୍ଯ୍ୟାନ୍ୱୟନ:**

- TTL ସମାଧାନ: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Pin ଚୟନ/ସୃଷ୍ଟି: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Header ନିଷ୍କାସନ (ସାଧାରଣ, ଯେକୌଣସି ପ୍ରୋଭାଇଡର୍): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- ସଞ୍ଚିତ pin ଟେବୁଲ୍: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- ସେଟିଂ: `sessionAffinityTtlMs` (ms ରେ ଗ୍ଲୋବାଲ୍ TTL, `0` ଅକ୍ଷମ କରେ) — `src/lib/db/settings.ts`। migration `124_generic_session_affinity_ttl.sql` ଦ୍ୱାରା Codex-ମାତ୍ର `codexSessionAffinityTtlMs` ରୁ ନାମ ପରିବର୍ତ୍ତନ କରାଯାଇଛି, ଯାହା ପୂର୍ବରୁ ବିନ୍ୟାସ କରାଯାଇଥିବା ଯେକୌଣସି Codex TTL କୁ ନୂତନ ଡିଫଲ୍ଟ ଭାବରେ ଗ୍ରହଣ କରେ।

#7274 ପୂର୍ବରୁ, `resolveSessionAffinityTtlMs()` `codex` ବ୍ୟତୀତ ପ୍ରତ୍ୟେକ ପ୍ରୋଭାଇଡର୍ ପାଇଁ `0` କୁ hard-bail କରୁଥିଲା, ତେଣୁ TTL ସେଟିଂ (ଏବଂ ସେସନ୍ headerଗୁଡ଼ିକ)ର ଅନ୍ୟ କୌଣସି ଠାରେ କୌଣସି ପ୍ରଭାବ ନ ଥିଲା, ଯଦିଓ pinning ପ୍ରକ୍ରିୟା ଏବଂ header ନିଷ୍କାସନ ପୂର୍ବରୁ provider-agnostic ଥିଲା। ସୁଧାର ସେହି early-return କୁ ଅପସାରଣ କଲା; ଗ୍ଲୋବାଲ୍ ଭାବରେ `0` ଠାରୁ ଅଧିକ ସେଟ୍ ହେଲେ TTL ବର୍ତ୍ତମାନ ପ୍ରତ୍ୟେକ ପ୍ରୋଭାଇଡର୍ ଉପରେ ସମାନ ଭାବରେ ପ୍ରୟୋଗ ହୁଏ।

ତିନୋଟି session-affinity header କେବେ ବି upstream କୁ ପଠାଯାଏ ନାହିଁ — executorମାନେ କ୍ଲାଏଣ୍ଟ headerଗୁଡ଼ିକୁ ପାସ୍ କରିବା ବଦଳରେ ନିଜର upstream headerଗୁଡ଼ିକୁ ଶୂନ୍ୟରୁ ତିଆରି କରନ୍ତି, ତେଣୁ ଏହା କେବଳ ଗୋଟିଏ ଆଭ୍ୟନ୍ତରୀଣ correlation id ଭାବରେ ରହେ।

### ଏକ୍ସକ୍ଲୁସିଭ୍ ପରିଚାଳିତ ସେସନ୍ ସଂଯୋଗ leaseଗୁଡ଼ିକ

**ପରିସର:** ଗୋଟିଏ ସକ୍ରିୟ ପରିଚାଳିତ HTTP କ୍ଲାଏଣ୍ଟ/ସେସନ୍ ଗୋଟିଏ ଯୋଗ୍ୟ OmniRoute ସଂଯୋଗର ମାଲିକାନା ରଖେ।

**ଉଦ୍ଦେଶ୍ୟ:** ଅନୁରୋଧଗୁଡ଼ିକ ମଧ୍ୟରେ କଠିନ routing fence ଆବଶ୍ୟକ କରୁଥିବା କ୍ଲାଏଣ୍ଟମାନଙ୍କ ପାଇଁ ଟିକାଉ
ଏକ୍ସକ୍ଲୁସିଭ୍ ସଂଯୋଗ ମାଲିକାନା ପ୍ରଦାନ କରିବା। ଏହା session affinity ଠାରୁ ଭିନ୍ନ, ଯାହା ଗୋଟିଏ ନରମ
ନିରନ୍ତରତା ପସନ୍ଦ: ଏକ୍ସକ୍ଲୁସିଭ୍ lease SQLite ରେ lifecycle ଅବସ୍ଥା ସଂରକ୍ଷଣ କରେ, ଗ୍ଲୋବାଲ୍ active-owner ଏବଂ
active-connection ଅନନ୍ୟତା ଲାଗୁ କରେ, ଏବଂ provider dispatch ପୂର୍ବରୁ ଗୋଟିଏ ପୁରାତନ generation କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରେ।

ଏହି ବୈଶିଷ୍ଟ୍ୟ ପ୍ରତି API କୀ ଅନୁସାରେ opt-in ଅଟେ। ଗୋଟିଏ ପରିଚାଳିତ କୀ ରେ `lease:exclusive` scope ଏବଂ
ଗୋଟିଏ ସ୍ପଷ୍ଟ ଅଣ-ଖାଲି `allowedConnections` ତାଲିକା ଥିବା ଆବଶ୍ୟକ। ଯେକୌଣସି HTTP କ୍ଲାଏଣ୍ଟ lifecycle endpoint
ବ୍ୟବହାର କରିପାରିବ; କୌଣସି କ୍ଲାଏଣ୍ଟ ନାମ, user-agent, ପ୍ରୋଭାଇଡର୍, OAuth ପଦ୍ଧତି, କିମ୍ବା ମଡେଲ୍ ଆବଶ୍ୟକ ନାହିଁ।
lease ଗୋଟିଏ ସଂଯୋଗର ମାଲିକ, ମଡେଲ୍ ନୁହେଁ, ତେଣୁ ସଂଯୋଗ ସାଧାରଣ ଭାବରେ ଯୋଗ୍ୟ ରହିଥିବା ବେଳେ ମଡେଲ୍ ପରିବର୍ତ୍ତନ
binding କୁ ବଜାୟ ରଖେ। ସାଧାରଣ ମଡେଲ୍, quota, health, cooldown, ଏବଂ allowlist ନିୟମଗୁଡ଼ିକ ଅଧିକାରୀକ
ରହେ ଏବଂ ସମାନ generation କୁ ଅନ୍ୟ ଗୋଟିଏ ମୁକ୍ତ ଯୋଗ୍ୟ ସଂଯୋଗକୁ ସ୍ଥାନାନ୍ତର କରିପାରେ।

ଲାଇଫ୍ସାଇକଲ୍ ହେଉଛି `POST /api/v1/session-leases` ଯେଉଁଥିରେ JSON କାର୍ଯ୍ୟ `acquire`, `renew`, ଏବଂ `release` ରହିଛି।
ପରିଚାଳିତ inference ଅନୁରୋଧଗୁଡ଼ିକ ଅସ୍ୱଚ୍ଛ (opaque) `X-OmniRoute-Lease-Owner` ମୂଲ୍ୟ ଏବଂ ସଠିକ୍
`X-OmniRoute-Lease-Generation` ଉପସ୍ଥାପନ କରନ୍ତି। owner `vlo_` ପରେ 43 ଟି base64url ଅକ୍ଷର ବ୍ୟବହାର କରେ; କେବଳ
ଏହାର SHA-256 hash ସଂରକ୍ଷିତ ହୁଏ। ପ୍ରତ୍ୟେକ ଅନ୍ତିମ dispatch fence ମଧ୍ୟ ପ୍ରମାଣିତ API key ID ଏବଂ
ସକ୍ରିୟ connection ID କୁ ବାନ୍ଧେ। lease control header ଗୁଡ଼ିକ ଲଗ୍, ରଖାଯାଇଥିବା request snapshot, ଏବଂ
upstream executor header ଗୁଡ଼ିକରୁ ଅପସାରଣ କରାଯାଏ।

ଯଦି ସାଧାରଣ routing ରେ ଯୋଗ୍ୟ ପରିଚାଳିତ candidate ଥାଏ କିନ୍ତୁ ପ୍ରତ୍ୟେକ ଖାଲି candidate କୌଣସି
ବିଦେଶୀ ସକ୍ରିୟ lease ଦ୍ୱାରା ଅଧିକୃତ, ତେବେ OmniRoute HTTP `429`, lease-capacity-unavailable କୋଡ୍,
capacity ପାଇଁ ଅପେକ୍ଷା କରୁଥିବା ଅବସ୍ଥା, ଏବଂ ସବୁଠାରୁ ଶୀଘ୍ର ପ୍ରାସଙ୍ଗିକ ସମାପ୍ତିରୁ ଆସିଥିବା ସୀମିତ `Retry-After` ଫେରାଏ।
ସାଧାରଣ ଖାଲି ଯୋଗ୍ୟତା lease ବିବାଦ ନୁହେଁ ଏବଂ ଏହାର ବିଦ୍ୟମାନ routing error semantics ବଜାୟ ରଖେ।

ସମ୍ପର୍କିତ ପ୍ରକ୍ରିୟାଗୁଡ଼ିକ ଅଲଗା ରୁହନ୍ତି:

- OAuth session occupancy ହେଉଛି OAuth account ଗୁଡ଼ିକ ପାଇଁ process-local soft distribution।
- Account semaphore ଗୁଡ଼ିକ request-concurrency permit ପ୍ରଦାନ କରନ୍ତି ଏବଂ ଅନୁରୋଧ ସମାପ୍ତ ହେଲେ ଶେଷ ହୁଅନ୍ତି।
- Exclusive ପରିଚାଳିତ session lease ଗୁଡ଼ିକ ହେଉଛି generation fence ସହିତ durable lifecycle ownership।

---

## 3. ମଡେଲ୍ ଲକ୍ଆଉଟ୍

**ପରିସର:** ପ୍ରଦାନକାରୀ + ସଂଯୋଗ + ମଡେଲ୍ ତ୍ରୟୀ।

**ସ୍ଥିତି ଅନୁଯାୟୀ କୀ ପରିସର:** ବିଫଳ ହୋଇଥିବା ସ୍ଥିତି ନିର୍ଦ୍ଧାରଣ କରେ ଯେ ଲକ୍ଆଉଟ୍ କେଉଁ କୀରେ
ଲେଖିବ (`open-sse/services/accountFallback/exactModelLock.ts` ଭିତରେ `resolveLockoutScope()`):

- `429` / `403` / `402` — ଏକ କୋଟା କିମ୍ବା ଅଧିକାର ସଙ୍କେତ — **କୋଟା ପରିବାର**କୁ ଲକ୍ କରେ:
  codex ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ `codex` / `spark` ପରିସର (ସଂଯୋଗର ପ୍ରତ୍ୟେକ `gpt-5*` ମଡେଲ୍),
  ଅନ୍ୟ ପ୍ରଦାନକାରୀଙ୍କ ପାଇଁ `getQuotaScopedModelForProvider()`।
- `404` କେବଳ ମୂଳ ମଡେଲ୍କୁ ଲକ୍ କରେ (`getModelLockKey()` `not_found`କୁ ସଂକୁଚିତ କରେ)।
- ଅନ୍ୟ ଯେକୌଣସି ସ୍ଥିତି — `5xx` ପରିବହନ/ସର୍ଭର ବିଫଳତା ଏବଂ ଗୁଣବତ୍ତା ଯାଞ୍ଚରୁ
  OmniRoute ନିଜେ ସୃଷ୍ଟି କରିଥିବା `502` — କେବଳ **ସଠିକ୍**
  ପ୍ରଦାନକାରୀ/ସଂଯୋଗ/ମଡେଲ୍ ଟ୍ୟୁପଲ୍କୁ ଲକ୍ କରେ। ଗୋଟିଏ ମଡେଲ୍ର ଖରାପ ଷ୍ଟ୍ରିମ୍
  ଆକାଉଣ୍ଟର କୋଟା ସମ୍ପର୍କରେ ପ୍ରମାଣ ନୁହେଁ; ଏହି ନିୟମ ପୂର୍ବରୁ
  `codex/gpt-5.6-luna`ର ଗୋଟିଏ ଖାଲି ପ୍ରତିକ୍ରିୟା ସେହି ସଂଯୋଗର ପ୍ରତ୍ୟେକ `gpt-5*` ମଡେଲ୍କୁ
  2–30 ମିନିଟ୍ ପାଇଁ ରାଉଟିଂରୁ ହଟାଇ ଦେଉଥିଲା (କ୍ରମଶଃ ବୃଦ୍ଧି ପାଉଥିଲା), ଯେତେବେଳେ ତାହାର କୋଟା ଅପରିବର୍ତ୍ତିତ ରହୁଥିଲା।
- କଲର୍ର ସ୍ପଷ୍ଟ `scope` ବିକଳ୍ପ ସର୍ବଦା ପ୍ରାଧାନ୍ୟ ପାଏ (Antigravity `"exact"` ପଠାଏ)।

**ଉଦ୍ଦେଶ୍ୟ:** କେବଳ ଗୋଟିଏ ମଡେଲ୍ ଅନୁପଲବ୍ଧ କିମ୍ବା କୋଟା-ସୀମିତ ଥିବାବେଳେ ସମ୍ପୂର୍ଣ୍ଣ ସଂଯୋଗକୁ ଅକ୍ଷମ କରିବାରୁ ରକ୍ଷା କରିବା।

**ଉଦାହରଣ:**

- ପ୍ରତି-ମଡେଲ୍ କୋଟା ପ୍ରଦାନକାରୀଙ୍କ ଦ୍ୱାରା ଫେରାଯାଉଥିବା 429
- ଗୋଟିଏ ନଥିବା ମଡେଲ୍ ପାଇଁ ସ୍ଥାନୀୟ ପ୍ରଦାନକାରୀଙ୍କ ଦ୍ୱାରା ଫେରାଯାଉଥିବା 404
- ପ୍ରଦାନକାରୀ-ନିର୍ଦ୍ଦିଷ୍ଟ ମୋଡ୍/ମଡେଲ୍ ଅନୁମତି ବିଫଳତା (ଯଥା, Grok ମୋଡ୍ଗୁଡ଼ିକ)

**କାର୍ଯ୍ୟାନ୍ୱୟନ:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`।

### ମଡେଲ୍ କୁଲ୍ଡାଉନ୍ ଡ୍ୟାସ୍ବୋର୍ଡ (v3.8.0)

UI: ସେଟିଂସ୍ → ମଡେଲ୍ କୁଲ୍ଡାଉନ୍ (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

ସକ୍ରିୟ ଲକ୍ଆଉଟ୍ଗୁଡ଼ିକୁ ଏହି ସୂଚନା ସହିତ ତାଲିକାଭୁକ୍ତ କରେ: ପ୍ରଦାନକାରୀ, ସଂଯୋଗ, ମଡେଲ୍, କାରଣ, expiresAt। ଅପରେଟର୍ମାନେ କାର୍ଡରୁ ମାନୁଆଲ୍ ଭାବରେ ଏକ ମଡେଲ୍କୁ ପୁନଃସକ୍ଷମ କରିପାରିବେ।

**REST API:**

- `GET /api/resilience/model-cooldowns` — ସକ୍ରିୟ ଲକ୍ଆଉଟ୍ଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କରେ
- `DELETE /api/resilience/model-cooldowns` — ମାନୁଆଲ୍ ପୁନଃସକ୍ଷମୀକରଣ। ବଡି: `{provider, connection, model}`। ପ୍ରମାଣୀକରଣ: ପରିଚାଳନା।

### କୁଲ୍ଡାଉନ୍ ପରିଚାଳକ

UI: ମନିଟରିଂ → କୁଲ୍ଡାଉନ୍ ପରିଚାଳକ (`src/app/(dashboard)/dashboard/resilience/cooldowns/`)।

ପ୍ରତ୍ୟେକ ପ୍ରଦାନକାରୀ ପୃଷ୍ଠା ଖୋଲିବା ପରିବର୍ତ୍ତେ, ଅସ୍ଥାୟୀ କାରଣରୁ ରାଉଟିଂରୁ ବାହାରେ ଥିବା ପ୍ରତ୍ୟେକ ସଂଯୋଗ ପାଇଁ
ଗୋଟିଏ ପୃଷ୍ଠା। ଏହା ସଂଯୋଗ କୁଲ୍ଡାଉନ୍, ମଡେଲ୍ ଲକ୍ଆଉଟ୍ ଏବଂ ଅନ୍ତିମ
ସ୍ଥିତିଗୁଡ଼ିକୁ ତାଲିକାଭୁକ୍ତ କରେ; ସଂଯୋଗ ପିଛା, ଏକ ଚୟନ ପାଇଁ, କିମ୍ବା ଗୋଟିଏ ପ୍ରଦାନକାରୀର ସମସ୍ତ ସଂଯୋଗ ପାଇଁ ସେଗୁଡ଼ିକୁ ସଫା କରେ;
ଏବଂ ସର୍ବାଧିକ ସମନ୍ୱୟ କରାଯାଉଥିବା କୁଲ୍ଡାଉନ୍ ନିୟମଗୁଡ଼ିକୁ ସମ୍ପାଦନା କରେ: `streamStallCooldown.enabled` ଏବଂ OAuth / API-key
`connectionCooldown`ର ମୂଳ କୁଲ୍ଡାଉନ୍ ଓ ସର୍ବାଧିକ ବ୍ୟାକ୍ଅଫ୍ ପଦକ୍ଷେପଗୁଡ଼ିକ (`PATCH /api/resilience` ମାଧ୍ୟମରେ
ସଞ୍ଚିତ)। ଅନ୍ତିମ ସ୍ଥିତିଗୁଡ଼ିକ (`banned`, `expired`, `credits_exhausted`) ତାଲିକାଭୁକ୍ତ ହୁଏ,
କିନ୍ତୁ ଏଠାରେ କେବେ ମଧ୍ୟ ସଫା କରାଯାଏ ନାହିଁ।

**REST API** (`src/lib/resilience/cooldownManager.ts`, ପ୍ରମାଣୀକରଣ: ପରିଚାଳନା):

- `GET /api/resilience/cooldowns[?provider=]` — ସ୍ଥିତି, ଅବଶିଷ୍ଟ କୁଲ୍ଡାଉନ୍,
  ବ୍ୟାକ୍ଅଫ୍ ସ୍ତର, ଶେଷ ତ୍ରୁଟି ପ୍ରକାର ଏବଂ ମଡେଲ୍ ଲକ୍ଆଉଟ୍ ସହିତ ସଂଯୋଗଗୁଡ଼ିକ (କୌଣସି ପ୍ରମାଣପତ୍ର ନାହିଁ)
- `POST /api/resilience/cooldowns` — ବଡି `{connectionIds: string[]}` କିମ୍ବା
  `{all: true, provider?}`; `{cleared, unchanged, skippedTerminal, lockoutsCleared}` ଫେରାଏ

### ଲକ୍ଆଉଟ୍ ସେଟିଂସ୍ UI + ସଫଳତା-କ୍ଷୟ ପୁନରୁଦ୍ଧାର (v3.8.23)

ମଡେଲ୍ ଲକ୍ଆଉଟ୍ ସର୍ବଦା-ସକ୍ରିୟ ହାର୍ଡକୋଡ୍ ଆଚରଣରୁ ଏକ ସମ୍ପୂର୍ଣ୍ଣ ବିନ୍ୟାସଯୋଗ୍ୟ,
ନିଜସ୍ୱ ସେଟିଂସ୍ କାର୍ଡ ଓ ସ୍ୱୟଂ-ପୁନରୁଦ୍ଧାର ପଥ ସହିତ ଅପ୍ଟ-ଇନ୍ ବୈଶିଷ୍ଟ୍ୟରେ ପରିଣତ ହୋଇଛି।

**ସେଟିଂସ୍ କାର୍ଡ:** ସେଟିଂସ୍ → ମଡେଲ୍ ଲକ୍ଆଉଟ୍
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`)।
ଏହା ଉପରୋକ୍ତ କେବଳ-ପଠନୀୟ `ModelCooldownsCard`ଠାରୁ **ପୃଥକ** (ଯାହା କେବଳ
ସକ୍ରିୟ ଲକ୍ଆଉଟ୍ଗୁଡ଼ିକୁ _ତାଲିକାଭୁକ୍ତ_ କରେ) — ନୂଆ କାର୍ଡଟି _ପାରାମିଟର୍ଗୁଡ଼ିକୁ ବିନ୍ୟାସ କରେ_। ଡିଫଲ୍ଟଗୁଡ଼ିକ
`DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`)ରେ ରହିଛି:

| ସେଟିଂ                   | ଡିଫଲ୍ଟ                           | ଅର୍ଥ                                                               |
| ----------------------- | -------------------------------- | ------------------------------------------------------------------ |
| `enabled`               | `false`                          | ମୁଖ୍ୟ ଟଗଲ୍ — ମଡେଲ୍ ଲକ୍ଆଉଟ୍ **ଡିଫଲ୍ଟ ଭାବରେ ବନ୍ଦ**।                  |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | ମଡେଲ୍-ପରିସରଭୁକ୍ତ ବିଫଳତା ଭାବରେ ଗଣାଯାଉଥିବା ଅପ୍ଷ୍ଟ୍ରିମ୍ ସ୍ଥିତିଗୁଡ଼ିକ। |
| `baseCooldownMs`        | `120_000` (120 ସେକେଣ୍ଡ)          | ପ୍ରଥମ ବିଫଳତା ପାଇଁ ପ୍ରାରମ୍ଭିକ ଲକ୍ଆଉଟ୍ ଅବଧି।                         |
| `maxCooldownMs`         | `1_800_000` (30 ମିନିଟ୍)          | ବୃଦ୍ଧି କରାଯାଇଥିବା କୁଲ୍ଡାଉନ୍ର ସର୍ବୋଚ୍ଚ ସୀମା।                        |
| `maxBackoffSteps`       | `10`                             | ସର୍ବାଧିକ ଘାତୀୟ-ବ୍ୟାକ୍ଅଫ୍ ବୃଦ୍ଧି ପଦକ୍ଷେପ।                           |
| `useExponentialBackoff` | `true`                           | ପୁନରାବୃତ୍ତ ବିଫଳତା କୁଲ୍ଡାଉନ୍କୁ ଘାତୀୟ ଭାବେ ବଢ଼ାଇବ କି ନାହିଁ।          |

ସେଟିଂସ୍ଗୁଡ଼ିକ ସାଧାରଣ ସେଟିଂସ୍ ଷ୍ଟୋର୍ ମାଧ୍ୟମରେ ସ୍ଥାୟୀ ରହେ ଏବଂ
ରେଜିଲିଏନ୍ସ ସେଟିଂସ୍ ସ୍କିମା ମାଧ୍ୟମରେ ବୈଧତା ଯାଞ୍ଚ ହୁଏ; କାର୍ଡଟି `baseCooldownMs`/`maxCooldownMs`
(`maxCooldownMs ≥ baseCooldownMs` ସହିତ) ଏବଂ `maxBackoffSteps`କୁ ସୀମାବଦ୍ଧ କରେ।

**ସଫଳତା-କ୍ଷୟ ପୁନରୁଦ୍ଧାର:** ପୁନରୁଦ୍ଧାର **କେବଳ** ଟାଇମର୍ର ମିଆଦ ଶେଷ ହେବା ଉପରେ ନିର୍ଭରଶୀଳ ନୁହେଁ। ଏକ ସୁସ୍ଥ
ପ୍ରତିକ୍ରିୟା ମଡେଲ୍ର ବିଫଳତା ଗଣନାକୁ ଧୀରେ ଧୀରେ କମାଏ, ଯାହାଦ୍ୱାରା ମଧ୍ୟବର୍ତ୍ତୀ ସମୟରେ ସୁସ୍ଥ ହୋଇଥିବା ମଡେଲ୍
ତାହାର ଟାଇମର୍ ଶେଷ ହେବା ପୂର୍ବରୁ ବୃଦ୍ଧି ପାଇବା ବନ୍ଦ କରେ (ଏବଂ ସଫା ହୋଇଯାଏ)। ଏକ ସଫଳ
କମ୍ବୋ ଟାର୍ଗେଟ୍ରେ, `open-sse/services/combo.ts` `decayModelFailureCount()`କୁ କଲ୍ କରେ
(`open-sse/services/accountFallback.ts`), ଯାହା ସଞ୍ଚିତ
`failureCount`କୁ **ଅଧା** କରେ (`Math.floor(failureCount / 2)`); ଏହା `0`ରେ ପହଞ୍ଚିଲେ ଲକ୍ଆଉଟ୍
ଏଣ୍ଟ୍ରି ସମ୍ପୂର୍ଣ୍ଣ ଭାବେ ବିଲୋପ ହୁଏ। ଏହାର ପ୍ରତିପକ୍ଷ `recordModelLockoutFailure()`
ବୃଦ୍ଧି ୱିଣ୍ଡୋ ମଧ୍ୟରେ ବିଫଳତା ଘଟିଲେ ଗଣନା ବଢ଼ାଏ (ଏବଂ କୁଲ୍ଡାଉନ୍କୁ ବୃଦ୍ଧି କରେ)।
ଏହି ସଫଳତା-କ୍ଷୟ ସାଧାରଣ ଟାଇମର୍ ମିଆଦ ଶେଷ ହେବା ସହିତ ଅତିରିକ୍ତ ଭାବେ କାର୍ଯ୍ୟ କରେ —
ଯେକୌଣସି ପଥ ଏକ ମଡେଲ୍କୁ ପୁନଃସକ୍ଷମ କରିପାରେ।

**ସ୍ଥିତି:** ଲକ୍ଆଉଟ୍ଗୁଡ଼ିକ **ଇନ୍-ମେମୋରି** ଭାବେ ରଖାଯାଏ (ପ୍ରତି-ପ୍ରକ୍ରିୟା `Map`ଗୁଡ଼ିକରେ
`provider:connectionId:model` ଦ୍ୱାରା କୀ କରାଯାଇଥିବା `ModelLockoutEntry`, ସଠିକ୍-ପରିସର ଲକ୍ଗୁଡ଼ିକ
`provider:connectionId:exact:model` ଦ୍ୱାରା କୀ କରାଯାଇଥାଏ), DBରେ ସ୍ଥାୟୀ ଭାବେ ସଞ୍ଚିତ ହୁଏ ନାହିଁ —
ପୁନରାରମ୍ଭ କଲେ ସେଗୁଡ଼ିକ ହଜିଯାଏ। _ସେଟିଂସ୍_ ସ୍ଥାୟୀ ଭାବେ ସଞ୍ଚିତ ହୁଏ; ସକ୍ରିୟ
ଲକ୍ଆଉଟ୍ _ସ୍ଥିତି_ ଅସ୍ଥାୟୀ।

---

## 4. କୋଟା-ଶେୟାର ସମକାଳୀନତା ନିୟନ୍ତ୍ରଣ (v3.8.36)

ସବ୍ସ୍କ୍ରିପ୍ସନ୍ ଆକାଉଣ୍ଟଗୁଡ଼ିକ (GLM, MiniMax ଇତ୍ୟାଦି) ସାଧାରଣତଃ କେବଳ ~1–3ଟି ସମକାଳୀନ
ଅନୁରୋଧ ଗ୍ରହଣ କରନ୍ତି; ଏହି ସୀମା ଅତିକ୍ରମ କଲେ 429 ଏବଂ କୁଲ୍ଡାଉନ୍ ସକ୍ରିୟ ହୁଏ। ଏହା
**କୋଟା-ଶେୟାର** (`qtSd/…`) କମ୍ବୋଗୁଡ଼ିକରେ ବିଶେଷ ଭାବେ ଗୁରୁତର, ଯେଉଁଠାରେ ଅନେକ API କୀ
ଗୋଟିଏ ଅପ୍ଷ୍ଟ୍ରିମ୍ ଆକାଉଣ୍ଟ ସେୟାର କରନ୍ତି। ତିନୋଟି ସ୍ତର ଏକ ସେୟାର୍ଡ ଆକାଉଣ୍ଟକୁ
ଅତ୍ୟଧିକ ଅନୁରୋଧରେ ପ୍ଲାବିତ ହେବାରୁ ରୋକେ।

### ପ୍ରତି-କନେକ୍ସନ୍ ସମକାଳୀନତା ସୀମା (`max_concurrent`)

ପ୍ରତ୍ୟେକ ପ୍ରଦାତା କନେକ୍ସନ୍ ଗୋଟିଏ `max_concurrent` ସର୍ବୋଚ୍ଚ ସୀମା ଘୋଷଣା କରିପାରେ
(`provider_connections.max_concurrent`, ଯାହା କନେକ୍ସନ୍ ମୋଡାଲ୍ / API / DBରେ ସେଟ୍ କରାଯାଏ)।
କୌଣସି ସୀମା ନ ରଖିବାକୁ ଏହାକୁ ଖାଲି ଛାଡ଼ନ୍ତୁ। ନିମ୍ନର ସିରିଆଲାଇଜେସନ୍
ସ୍ତରକୁ ନିୟନ୍ତ୍ରଣ କରୁଥିବା ଏହା ହେଉଛି ଏକମାତ୍ର ବିକଳ୍ପ — ଏହାକୁ ଆକାଉଣ୍ଟର ପ୍ରକୃତ
ସମକାଳୀନତା ଅନୁଯାୟୀ ସେଟ୍ କରନ୍ତୁ (ଯଥା GLM ~1, MiniMax ~2)।

### ପ୍ରତି-ମଡେଲ୍ ସମକାଳୀନତା ସୀମା (`modelConcurrency`)

ଗୋଟିଏ କନେକ୍ସନ୍ ଅତିରିକ୍ତ ଭାବେ ତାହାର `rateLimitOverrides` ମ୍ୟାପ୍ରେ
ସଠିକ୍ ପ୍ରତି-ମଡେଲ୍ ସମକାଳୀନତା ସର୍ବୋଚ୍ଚ ସୀମା ଘୋଷଣା କରିପାରେ:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

ଏହାକୁ କନେକ୍ସନ୍ ମୋଡାଲ୍ରେ (**ରେଟ୍ ସୀମା ଓଭର୍ରାଇଡ୍ → ପ୍ରତି-ମଡେଲ୍
ସମକାଳୀନତା ସୀମା**, ପ୍ରତି ଧାଡ଼ିରେ ଗୋଟିଏ `model=cap`) କିମ୍ବା ସମାନ JSON ଗଠନ ସହିତ
`PATCH /api/providers/[id]` ମାଧ୍ୟମରେ ସେଟ୍ କରନ୍ତୁ। କୀର ଅର୍ଥବିଧି:

- **ସମଗ୍ର କନେକ୍ସନ୍ ବନାମ ମଡେଲ୍-ନିର୍ଦ୍ଦିଷ୍ଟ:** `maxConcurrent` ସେୟାର୍ଡ
  ସମଗ୍ର-କନେକ୍ସନ୍ ସର୍ବୋଚ୍ଚ ସୀମା ଭାବେ ରହିଥାଏ। ଉଭୟ ପ୍ରଯୁଜ୍ୟ ହେଲେ, ସମାନ କମ୍ପୋଜିଟ୍
  ଗେଟ୍ରେ ଉଭୟ ଗେଟ୍ ପରମାଣବିକ ଭାବେ ଅଧିଗ୍ରହଣ କରାଯାଏ
  (`global → provider → account → model`); ପ୍ରଭାବୀ ଆଚରଣ ଅଧିକ କଠୋର
  ପ୍ରଯୁଜ୍ୟ ସୀମା ଅନୁସାରେ ହୁଏ।
- **ସଠିକ୍ ମଡେଲ୍-କୀ ମେଳ:** କୀଟି ହେଉଛି ରାଉଟିଂ ସମାଧାନ ପରେ
  ଏକ୍ସିକ୍ୟୁଟର୍କୁ ପ୍ରେରିତ ମଡେଲ୍ ଷ୍ଟ୍ରିଙ୍ଗ୍ — ସାଧାରଣତଃ ମୂଳ ଅପ୍ଷ୍ଟ୍ରିମ୍ ମଡେଲ୍ id
  (`glm-5`), କ୍ଲାଏଣ୍ଟ-ପକ୍ଷର `provider/model` ଉପନାମ ନୁହେଁ (`zai/glm-5`, `glm-5` ସହିତ
  ମେଳ ଖାଏ ନାହିଁ)। ମୂଲ୍ୟଗୁଡ଼ିକ ହେଉଛି ଧନାତ୍ମକ-ପୂର୍ଣ୍ଣସଂଖ୍ୟା ସମକାଳୀନ-ଅନୁରୋଧ ସର୍ବୋଚ୍ଚ ସୀମା।
- **ସ୍ଥାନୀୟ କ୍ୟୁଇଂ, କୌଣସି ଆବିଷ୍କାର ନାହିଁ:** ଅତିରିକ୍ତ ଅନୁରୋଧଗୁଡ଼ିକ
  ବିଦ୍ୟମାନ କ୍ୟୁ/ଟାଇମ୍ଆଉଟ୍ ଅର୍ଥବିଧି ସହିତ ସ୍ଥାନୀୟ ଭାବେ କ୍ୟୁରେ ରହେ (ଟାଇପ୍ଯୁକ୍ତ
  `SEMAPHORE_TIMEOUT` / `SEMAPHORE_QUEUE_FULL` ଗ୍ରହଣ ତ୍ରୁଟି)। OmniRoute ଅପ୍ଷ୍ଟ୍ରିମ୍
  ନୀତି ଆବିଷ୍କାର କିମ୍ବା ଅନୁମାନ କରେ ନାହିଁ — ଏହା ଅପରେଟର୍ ବିନ୍ୟାସ କରିଥିବା ସଠିକ୍
  ସର୍ବୋଚ୍ଚ ସୀମାଗୁଡ଼ିକୁ ପ୍ରବର୍ତ୍ତନ କରେ। ପୂର୍ଣ୍ଣ ହୋଇଥିବା ମଡେଲ୍ ଗେଟ୍ କେବେବି ପ୍ରଦାତାକୁ
  ନିଷ୍କ୍ରିୟ କରେ ନାହିଁ ଏବଂ କେବେବି ଏକ ସ୍ଥାୟୀ ମଡେଲ୍ ଲକ୍ଆଉଟ୍ ସୃଷ୍ଟି କରେ ନାହିଁ;
  ଅପ୍ଷ୍ଟ୍ରିମ୍ 429/କୁଲ୍ଡାଉନ୍/ଫଲ୍ବ୍ୟାକ୍ ଆଚରଣ ତ୍ରୁଟି ପ୍ରତିରକ୍ଷା ଭାବେ ରହିଥାଏ।
- **ପ୍ରତି-କନେକ୍ସନ୍, ପ୍ରତି-ପ୍ରକ୍ରିୟା ପରିସର:** ସୀମାଗୁଡ଼ିକ ପ୍ରତି ଡାଟାବେସ୍
  କନେକ୍ସନ୍ ପାଇଁ ପ୍ରଯୁଜ୍ୟ ଏବଂ ମେମୋରିରେ ରଖାଯାଏ, ତେଣୁ ସମାନ ଅପ୍ଷ୍ଟ୍ରିମ୍ API କୀକୁ
  ପୁନଃବ୍ୟବହାର କରୁଥିବା ଦୁଇଟି କନେକ୍ସନ୍ ପରସ୍ପର ସହିତ ସମନ୍ୱୟ କରନ୍ତି ନାହିଁ।
- **ବିନ୍ୟାସ ହୋଇନଥିଲେ ଅପରିବର୍ତ୍ତିତ:** ମ୍ୟାପ୍କୁ ବାଦ ଦେବା (କିମ୍ବା
  ଡ୍ୟାସ୍ବୋର୍ଡ ଫିଲ୍ଡକୁ ଖାଲି ଛାଡ଼ିବା) କୌଣସି ମଡେଲ୍ ଗେଟ୍ ଯୋଡ଼େ ନାହିଁ। କୌଣସି
  ସାର୍ବଜନୀନ ପ୍ରଦାତା ସୀମା ଦାବି ନ କରିଥିବା ବିନ୍ୟାସର ଉଦାହରଣ:

```text
glm-5=1
glm-4.7=3
```

### କୋଟା-ଶେୟାର ଅନୁରୋଧ ସିରିଆଲାଇଜେସନ୍

ଯେତେବେଳେ ଗୋଟିଏ କୋଟା-ଶେୟାର ଡିସ୍ପ୍ୟାଚ୍ ଧନାତ୍ମକ `max_concurrent` ଘୋଷଣା କରୁଥିବା
ଏକ କନେକ୍ସନ୍କୁ ଲକ୍ଷ୍ୟ କରେ, ସେହି **ଆକାଉଣ୍ଟ** ପାଇଁ ସମକାଳୀନ ଅନୁରୋଧଗୁଡ଼ିକୁ ଗୋଟିଏ
ପ୍ରତି-କନେକ୍ସନ୍ ସେମାଫୋର୍ (କୀ `qsconn:<connectionId>`) ମାଧ୍ୟମରେ କ୍ରମିକ କରାଯାଏ:
ଅତିରିକ୍ତ ଅନୁରୋଧଗୁଡ଼ିକ ଆକାଉଣ୍ଟକୁ ପ୍ଲାବିତ କରିବା ପରିବର୍ତ୍ତେ **କ୍ୟୁରେ ଅପେକ୍ଷା କରନ୍ତି**।
ଏହା **ଫେଲ୍-ଓପେନ୍** — ପୂର୍ଣ୍ଣ ହୋଇଥିବା କ୍ୟୁ କିମ୍ବା ଟାଇମ୍ଆଉଟ୍ କେବେବି ଡିସ୍ପ୍ୟାଚ୍ଯୋଗ୍ୟ
ଅନୁରୋଧକୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରିବା ପରିବର୍ତ୍ତେ ସ୍ଲଟ୍ ବିନା ଆଗକୁ ବଢ଼େ।
**ସେଟିଂସ୍ → ସହନଶୀଳତା → କୋଟା-ଶେୟାର ପ୍ରତି-କନେକ୍ସନ୍ ସମକାଳୀନତା**
(`resilienceSettings.quotaShareConcurrencyLimit.enabled`, ଡିଫଲ୍ଟ ଭାବେ ସକ୍ରିୟ)
ରେ ଏହାକୁ ଟଗଲ୍ କରନ୍ତୁ। `max_concurrent` ସୀମା ବିନା ଆଚରଣ ଅପରିବର୍ତ୍ତିତ ରହେ।

> କୋଟା-ଶେୟାର ରାଉଟିଂ ଗେଟ୍ (`selectQuotaShareTarget`, DRR + P2C) ନିଜେ
> ଫେଲ୍-ଓପେନ୍ ଏବଂ ସୀମାରେ ପହଞ୍ଚିଥିବା କନେକ୍ସନ୍କୁ କେବଳ _କମ୍ ପ୍ରାଥମିକତା_ ଦିଏ —
> ଗୋଟିଏ-କନେକ୍ସନ୍ ପୁଲ୍ରେ ଏହା କଠୋର ସୀମା ଲାଗୁ କରିପାରେ ନାହିଁ, ତେଣୁ ଏହି ସେମାଫୋର୍
> ବାସ୍ତବରେ ଅନୁରୋଧର ପ୍ଲାବନକୁ ନିୟନ୍ତ୍ରଣ କରେ।

### କମ୍ବୋ କୁଲ୍ଡାଉନ୍-ସଚେତନ ପୁନଃପ୍ରୟାସ

ପ୍ରତ୍ୟେକ କମ୍ବୋ କୌଶଳ ପାଇଁ (ସକ୍ରିୟ ଥିବାବେଳେ), ଏକ ସ୍ୱଳ୍ପ ଅସ୍ଥାୟୀ କୁଲ୍ଡାଉନ୍ରେ
429କୁ ଚୂଡ଼ାନ୍ତ କରିଦେଇଥାନ୍ତା ଏପରି ଅନୁରୋଧ, 429 ଫେରାଇବା ପରିବର୍ତ୍ତେ ଏହା ସମାପ୍ତ
ହେବା ପର୍ଯ୍ୟନ୍ତ ଅପେକ୍ଷା କରେ ଏବଂ ପୁନଃ ଡିସ୍ପ୍ୟାଚ୍ ହୁଏ — ଏହା ବହୁ-ମଡେଲ୍ କମ୍ବୋରେ
Gemini-ଶ୍ରେଣୀର TPM/RPM ୱିଣ୍ଡୋ (~60s retry-after)କୁ ଆବୃତ କରେ, ଯଥା 2-ମଡେଲ୍
କମ୍ବୋର ଉଭୟ ଲକ୍ଷ୍ୟ ଗୋଟିଏ ପ୍ରତି-ମଡେଲ୍ ରେଟ୍ ସୀମାରେ ପହଞ୍ଚିବା।
**ସେଟିଂସ୍ → ସହନଶୀଳତା**ରେ `comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`,
`budgetMs`) ଦ୍ୱାରା ଏହା ସୀମିତ। ଏହା `quota_exhausted` (ମଧ୍ୟରାତ୍ରି ପର୍ଯ୍ୟନ୍ତ ଲକ୍)
କିମ୍ବା ପ୍ରାମାଣିକରଣ/ନ-ମିଳିବା କାରଣରେ କେବେବି ଅପେକ୍ଷା କରେ ନାହିଁ।

ସମାନ ଗେଟ୍ ପ୍ରି-ଡିସ୍ପ୍ୟାଚ୍ ଘଟଣାକୁ ମଧ୍ୟ ଆବୃତ କରେ (#16319): ଯେତେବେଳେ କୌଣସି
ପ୍ରୟାସ କରାଯିବା ପୂର୍ବରୁ କମ୍ବୋର ପ୍ରତ୍ୟେକ ଲକ୍ଷ୍ୟକୁ ଏଡ଼ାଇ ଦିଆଯାଏ, କାରଣ ତାହାର
ମଡେଲ୍ ଏକ ସ୍ୱଳ୍ପ ଅସ୍ଥାୟୀ ଲକ୍ଆଉଟ୍ରେ ଅଛି, ସେତେବେଳେ ଶୂନ୍ୟ-ପ୍ରୟାସ ପଥ ସୂଚନାହୀନ
`503 ALL_TARGETS_SKIPPED` ଉତ୍ତର ଦେବା ପରିବର୍ତ୍ତେ ସମାନ ସର୍ବୋଚ୍ଚ ସୀମା ଅଧୀନରେ
ଲକ୍ ସମାପ୍ତ ହେବାକୁ ଅପେକ୍ଷା କରେ ଏବଂ ପୁନଃ ଡିସ୍ପ୍ୟାଚ୍ କରେ। ଯେତେବେଳେ ଅପେକ୍ଷା
ଅନୁମୋଦିତ ନୁହେଁ (ସର୍ବୋଚ୍ଚ ସୀମା, ପ୍ରୟାସ କିମ୍ବା ବଜେଟ୍ ଶେଷ, କିମ୍ବା ବୈଶିଷ୍ଟ୍ୟ
ବନ୍ଦ), ସେତେବେଳେ ଚୂଡ଼ାନ୍ତ ପ୍ରତିକ୍ରିୟା ସବୁଠାରୁ ପ୍ରଥମ ଅସ୍ଥାୟୀ ଲକ୍ର ମିଆଦ
ସମାପ୍ତିରୁ `retry_after` / `reset_at` ବହନ କରୁଥିବା `429 rate_limit_error`କୁ
ଉନ୍ନୀତ ହୁଏ; କୋଟା, ପ୍ରାମାଣିକରଣ ଏବଂ ନ-ମିଳିବା ଲକ୍ଗୁଡ଼ିକ ସୂଚନାହୀନ 503କୁ
ବଜାୟ ରଖନ୍ତି।

---

## 5. ଅନୁରୋଧ ଧାଡ଼ି ପ୍ରବେଶ ନିୟନ୍ତ୍ରଣ (Request Queue Admission Control) (v3.8.49 · issue #6593)

**ପରିସର (Scope)**: ସ୍ଥାନୀୟ per-provider+connection rate-limit ଧାଡ଼ି (`open-sse/services/rateLimitManager.ts`,
Bottleneck ଦ୍ୱାରା ସମର୍ଥିତ), ଉପରୋକ୍ତ ତିନୋଟି ଯନ୍ତ୍ରଣା (mechanism)ଠାରୁ ଗୋଟିଏ ସ୍ତର ତଳେ।

**`maxWaitMs` ଧାଡ଼ିରେ ଅପେକ୍ଷାକୁ ସୀମିତ କରେ; `executionMaxWaitMs` କାର୍ଯ୍ୟକାରିତାକୁ (execution) ସୀମିତ କରେ।**
ଏହି ଦୁଇଟି ଜାଣିଶୁଣି ପୃଥକ ରଖାଯାଇଛି, ଏବଂ କୌଣସି ଗୋଟିଏ ଅନ୍ୟଟିକୁ ପରିପୋଷଣ କରେ ନାହିଁ।

`resilienceSettings.requestQueue.maxWaitMs` ହେଉଛି **ଧାଡ଼ି-ଅପେକ୍ଷା ବଜେଟ୍ (queue-wait budget)**: ଏହା
provider slot ପାଇଁ ଅପେକ୍ଷା କରିବା ଏବଂ ତାପରେ QUEUED ଅବସ୍ଥାରେ ରହିବାକୁ ଅନ୍ତର୍ଭୁକ୍ତ କରେ, ଏବଂ job QUEUED ଛାଡ଼ି
କାର୍ଯ୍ୟକାରି ହେବା ଆରମ୍ଭ କରିବା ମୂହୂର୍ତ୍ତରେ ଏହାର ଟାଇମର୍ ବନ୍ଦ ହୋଇଯାଏ
(`rateLimitManager.ts`, `wrappedFn`)। ଏହାକୁ ଅତିକ୍ରମ କରୁଥିବା ଅନୁରୋଧ କେବେବି
upstream ପର୍ଯ୍ୟନ୍ତ ପହଞ୍ଚେ ନାହିଁ। ଡିଫଲ୍ଟ 30000ms, ଯାହା `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS`
ଦ୍ୱାରା `src/lib/resilience/settings.ts`ରେ ଯୋଗାଯାଏ ଏବଂ
`tests/unit/ratelimit-admission-control-6593.test.ts` ଦ୍ୱାରା ପିନ୍ ହୋଇଛି, ତେଣୁ ଏଥିରେ କୌଣସି ପରିବର୍ତ୍ତନ
ସେହି ଟେଷ୍ଟକୁ ଲାଲ (red) କରିଦିଏ, ଏହି ଅନୁଚ୍ଛେଦକୁ ନୀରବରେ ପୁରୁଣା (stale) ଛାଡ଼ିଦିଏ ନାହିଁ।

`resilienceSettings.requestQueue.executionMaxWaitMs` ହେଉଛି ଯାହା Bottleneck
job `expiration` ଭାବେ ଗ୍ରହଣ କରେ, ଯାହାର ଟାଇମର୍ କେବଳ dispatch ପରେ ଆରମ୍ଭ ହୁଏ। ଏହା
ନିଜର କୌଣସି upstream timeout ନଥିବା executorମାନଙ୍କ ପାଇଁ ଏକ ବ୍ୟାକଷ୍ଟପ୍ (backstop) ଅଟେ, ଏବଂ executorର ନିଜସ୍ୱ
fetch-start timeout ଅଧିକ ଲମ୍ବା ହେଲେ ଏହାକୁ ସେତିକିକୁ ବଢ଼ାଯାଏ, ଯେପରି ଏହା
ସୁସ୍ଥ ଚାଲୁଥିବା (in-flight) ପ୍ରତିକ୍ରିୟାକୁ କାଟିଦିଏ ନାହିଁ। ଡିଫଲ୍ଟ 600000ms (10 ମିନିଟ୍)।

ଧାଡ଼ି ବଜେଟ୍କୁ `expiration` ଭିତରକୁ ପରିପୋଷଣ କରିବା ହିଁ ଅତୀତରେ non-incremental
gatewayଗୁଡ଼ିକୁ ମଝିରେ (mid-flight) ବନ୍ଦ କରିଦେଉଥିଲା — ସେମାନେ ପ୍ରଥମ ବାଇଟ୍ ପୂର୍ବରୁ ବୈଧ ଭାବେ ମିନିଟ୍ ମିନିଟ୍ ଧରି
ଚାଲନ୍ତି — ଏବଂ ଏହିପାଇଁ ଏକ expiration `code:
"RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) ଭାବେ ପ୍ରଦର୍ଶିତ ହୁଏ, ଯେତେବେଳେ ଧାଡ଼ି ବଜେଟ୍
queue-timeout code ବହନ କରେ। ଯେକୌଣସିଟିକୁ `RATE_LIMIT_MAX_WAIT_MS` /
`RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) କିମ୍ବା dashboard
(**Settings → Resilience**) ମାଧ୍ୟମରେ override କରନ୍ତୁ। ଉଭୟ ସ୍ୱାଭାବିକକରଣ (normalise) ସମୟରେ 1ms–24h ମଧ୍ୟରେ clamp ହୁଅନ୍ତି।

**ଉଭୟ ପାଇଁ ପ୍ରାଥମିକତା (precedence):** env var କେବଳ _ଡିଫଲ୍ଟ_ ଯୋଗାଏ।
`resilienceSettings.requestQueue`ରେ ସଂରକ୍ଷିତ (persisted) ଏକ ମୂଲ୍ୟ
(dashboard / API patch, `key_value`ରେ ସଞ୍ଚିତ) ଏହା ଉପରେ ବିଜୟୀ ହୁଏ, ଏବଂ ପ୍ରତି-ସଂଯୋଗ (per-connection)
`rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` ତାହା ଉପରେ ବିଜୟୀ ହୁଏ।
ତେଣୁ, ଯେଉଁ deploymentରେ ପୂର୍ବରୁ ସଂରକ୍ଷିତ ମୂଲ୍ୟ ଅଛି, ସେଥିରେ env var ସେଟ୍ କରିବା
କିଛି ବଦଳାଏ ନାହିଁ — ତାହା ବଦଳରେ ସଂରକ୍ଷିତ ସେଟିଂକୁ ଖାଲି କରନ୍ତୁ (clear) କିମ୍ବା ଅଦ୍ୟତନ କରନ୍ତୁ।

ଧାଡ଼ିରେ ରହିବା (queue residence) `maxWaitMs` ଦ୍ୱାରା ସୀମିତ; ତଳେ ଥିବା `maxQueueDepth`
ଏକକାଳୀନ କେତେ ଜଣ caller ଧାଡ଼ିରେ ରହିପାରିବେ ତାହାକୁ ସୀମିତ କରେ।

**ବଡ଼ି-ଉଲ୍ଲେଖିତ ପୁନଃଚେଷ୍ଟା (body-stated retries): pacing ବନାମ lockout।** ଏକ 429 ବଡ଼ି ନିଜର ଅପେକ୍ଷା ସମୟ
ଉଲ୍ଲେଖ କରିପାରେ (Gemini `RetryInfo.retryDelay`, "retry after Ns" ପାଠ୍ୟ), ଯାହା
`updateFromResponseBody` ପଢ଼େ। ଯେଉଁ ଅପେକ୍ଷା ସଂଯୋଗର `maxWaitMs` ଭିତରେ ବସେ
ତାହା pacing ଅଟେ: limiter ସେତିକି ସମୟ ପାଇଁ ନିଜର reservoir ଖାଲି କରିଦିଏ ଏବଂ ଧାଡ଼ିରେ ଥିବା callଗୁଡ଼ିକ
ତାହା ପୁଣି ଭରିଲେ dispatch ହୁଅନ୍ତି। `maxWaitMs`ଠାରୁ ଅଧିକ ଅପେକ୍ଷା ଏପରି କିଛି ନୁହେଁ ଯାହା
ଧାଡ଼ି ଅପେକ୍ଷା କରି ରହିପାରିବ — Gemini ସମାପ୍ତ ଦୈନିକ quota ପାଇଁ
`retryDelay: "86399s"` ଉତ୍ତର ଦିଏ। ପୁନଃନିର୍ମିତ 429 ଉପରେ relay ହୋଇଥିବା `Retry-After` (#16528)
ପୂର୍ବରୁ fallback engineକୁ ସେହି ସମୟ ପାଇଁ modelକୁ lock କରିବାକୁ ବାଧ୍ୟ କରେ, କିନ୍ତୁ
ଏହା ପାଇଁ limiterକୁ ମଧ୍ୟ ବିରାମ (pause) ଦେଲେ ଯେକୌଣସି call ଯାହା key ନିକଟରେ ଶୀଘ୍ର ପହଞ୍ଚେ
(ଉଦାହରଣ ସ୍ୱରୂପ resilience reset ପରେ) ତାହାକୁ ପୂରା `maxWaitMs` ପାଇଁ ଅଟକାଇ ରଖିବ। ଯେତେବେଳେ ଏପରି ଅପେକ୍ଷା ଏକ typed Google `RetryInfo`
detailରୁ ଆସେ (`google_rpc_retry_info` ଉତ୍ପତ୍ତି/provenance) ଏବଂ keyର limiter
ପୂର୍ବରୁ model ପାଇଁ scoped ହୋଇଥାଏ (ଦେଖନ୍ତୁ `getLimiterKey`), ସେହି 429 ସେହି ସଂଯୋଗରେ
ଏକ model lockout ହୋଇଯାଏ (`lockModelForLongBodyRetry`,
`open-sse/services/rateLimitManager/bodyRetryPause.ts`ରେ, 24hରେ capped), ଏବଂ
limiterକୁ ବିରାମ ବିନା ଛାଡ଼ିଦିଆଯାଏ। Account selection ସେହି lock ଉପରେ
`isModelLocked()` ମାଧ୍ୟମରେ ଏଡ଼ାଏ (skip), ଏବଂ ସେହି ସଂଯୋଗ ସହିତ ବାନ୍ଧା (pinned) targetମାନଙ୍କ ପାଇଁ combo pre-dispatch
gate ମଧ୍ୟ ଏଡ଼ାଏ। antigravityରେ, ଯାହାର limiter quota family ଅନୁଯାୟୀ, ସେହି lock
ଠିକ୍ ସେହି model ଉପରେ ହୁଏ, ଏହାର ଅନ୍ୟ quota lockଗୁଡ଼ିକ ପରି। ଯେତେବେଳେ ଏକ alias ଏହାକୁ ସେହି
model ସହିତ ସମାଧାନ (resolve) କରେ, client ଯାହା ମାଗିଥିବା ନାମ ମଧ୍ୟ lock ହୁଏ,
କାରଣ ସେହି ଯାଞ୍ଚଗୁଡ଼ିକ ଅନୁରୋଧିତ ନାମ ବ୍ୟବହାର କରନ୍ତି; ଏହା ଠିକ୍ ଭାବେ lock ହୁଏ (`lockExactModel`), ତେଣୁ
ଯେଉଁ alias ଏକ antigravity quota family କିମ୍ବା codex scope ଅତିକ୍ରମ କରେ ତାହା ନିଜକୁ କେବେ ମଧ୍ୟ lock କରେ ନାହିଁ। ଏକ
ଗଦ୍ୟ ଇଙ୍ଗିତ (prose hint), ଏକ untyped `retryDelay`, କିମ୍ବା
ସମଗ୍ର ସଂଯୋଗ ଦ୍ୱାରା ଅଂଶୀଦାର ହୋଇଥିବା limiter ବିରାମ (pause)କୁ ବଜାୟ ରଖେ। ଯେତେବେଳେ 429 ପଥ ନୂଆ ନିର୍ମାଣ କରିଥିବା limiter
ବିରାମ ନେଏ, ଯେଉଁ callerର ବାକି ଧାଡ଼ି ସମୟ ବିରାମ ଶେଷ ପୂର୍ବରୁ ଶେଷ ହୁଏ, ତାହାକୁ ତୁରନ୍ତ
queue-timeout code ସହିତ ଫେରାଇଦିଆଯାଏ (`checkLimiterPause`), ସେହି ସମୟ ପାଇଁ ଅପେକ୍ଷା ନ କରାଇ; ରେକର୍ଡ ହୋଇଥିବା ଶେଷ ସମୟ
limiter ନିର୍ମାଣ ପୂର୍ବରୁ anchor ହୋଇଥାଏ, ଯେଉଁଠାରେ Bottleneck ନିଜର refresh
ଘଡ଼ି ଆରମ୍ଭ କରେ, ଏବଂ reservoirରେ ପରବର୍ତ୍ତୀ କୌଣସି ପରିବର୍ତ୍ତନ ଏହାକୁ ଭୁଲିଯାଏ।
`tests/unit/rate-limit-long-body-retry-lockout.test.ts` ଏବଂ
`tests/unit/rate-limit-body-retry-pause.test.ts` ଦ୍ୱାରା ଆଚ୍ଛାଦିତ (covered)।

**`maxQueueDepth` — opt-in ପ୍ରବେଶ ସୀମା (ନୂତନ)।** `resilienceSettings.requestQueue.maxQueueDepth`
ଗୋଟିଏ provider+connection ପାଇଁ ଏକକାଳୀନ କେତେଗୁଡ଼ିଏ ଅନୁରୋଧ ଧାଡ଼ିରେ ରହିପାରିବେ (ଏପର୍ଯ୍ୟନ୍ତ dispatch ହୋଇନାହାନ୍ତି)
ତାହାକୁ ସୀମିତ କରେ। ଯେତେବେଳେ ଧାଡ଼ିରେ ପୂର୍ବରୁ `maxQueueDepth`ଟି
ଅନୁରୋଧ ରହିଛି, ନୂତନ ଅନୁରୋଧକୁ `limiter.schedule()`ରେ ପହଞ୍ଚିବା **ପୂର୍ବରୁ** ଏକ typed
`code: "RATE_LIMIT_QUEUE_FULL"` error ସହିତ ଶୀଘ୍ର-ପ୍ରତ୍ୟାଖ୍ୟାନ (fast-reject) କରାଯାଏ
— ତେଣୁ ପ୍ରତ୍ୟାଖ୍ୟାନ ସଶସ୍ତ୍ର (cheap) ହୁଏ ଏବଂ ସେହି ଅନୁରୋଧ ପାଇଁ ଯେକୌଣସି downstream
prompt-compression / translation କାର୍ଯ୍ୟ ପୂର୍ବରୁ ଘଟେ। ଡିଫଲ୍ଟ `0` =
ଅକ୍ଷମ (disabled), ବିଦ୍ୟମାନ ଅସୀମିତ-ଧାଡ଼ି ଆଚରଣକୁ ବଜାୟ ରଖେ; 0–100000 ମଧ୍ୟରେ ସୀମିତ।
`RATE_LIMIT_MAX_QUEUE_DEPTH` (env) କିମ୍ବା
`resilienceSettings.requestQueue.maxQueueDepth` (dashboard/API patch) ମାଧ୍ୟମରେ override କରନ୍ତୁ।

ପ୍ରବେଶ ଯାଞ୍ଚ ନିଜେ ଏକ ବିଶୁଦ୍ଧ ଫଙ୍କସନ୍ (pure function)
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`), ତେଣୁ
ପ୍ରକୃତ Bottleneck limiter ବିନା ଏହା unit-test ହୋଇପାରିବ।

> #6593 କୁ ଖୋଲିଥିବା RFC ଏକ `bypassCompressionOnRateLimit`
> ଫ୍ଲାଗ୍ ମଧ୍ୟ ପ୍ରସ୍ତାବ ଦେଇଥିଲା। ଏହି repo ର `open-sse/services/compression/` ପାଇପଲାଇନ୍
> ହେଉଛି ଆଉଟବାଉଣ୍ଡ LLM ଅନୁରୋଧ ଉପରେ ପ୍ରମ୍ପ୍ଟ/କନ୍ଟେକ୍ସ୍ଟ କମ୍ପ୍ରେସନ୍ (`chatCore.ts`,
> `resolveCompressionSettings`/`selectCompressionStrategy` ବ୍ଲକ୍ ନିକଟରେ),
> ସିନ୍ଥେସାଇଜ୍ ହୋଇଥିବା 429 body ଗୁଡ଼ିକ ଉପରେ HTTP ରିସପନ୍ସ କମ୍ପ୍ରେସନ୍ ନୁହେଁ — ଏକ ଆକ୍ଷରିକ bypass ଫ୍ଲାଗ୍ ପାଇଁ କୌଣସି ମେଳ ହେଉଥିବା code path ନାହିଁ। ସେହି ପ୍ରମ୍ପ୍ଟ-କମ୍ପ୍ରେସନ୍ ପଦକ୍ଷେପ ମଧ୍ୟ ବର୍ତ୍ତମାନ ଅନୁରୋଧ ପାଇପଲାଇନରେ `withRateLimit()` _ପୂର୍ବରୁ_ ଚାଲେ, ତେଣୁ
> କ୍ୟୁ-ଫୁଲ୍ ପ୍ରତ୍ୟାଖ୍ୟାନରେ ଏହାକୁ ଏଡ଼ାଇବା ପାଇଁ ପୁନଃକ୍ରମଣ କରିବା ଏହି issue ର ପରିଧିଠାରୁ ଏକ ପୃଥକ, ବଡ଼
> ପରିବର୍ତ୍ତନ; ଏହା ଇଚ୍ଛାକୃତଭାବେ ଏଠାରେ କାର୍ଯ୍ୟକାରୀ କରାଯାଇ **ନାହିଁ** ଏବଂ ଯଦି CPU-ସଞ୍ଚୟ ଲାଭ ପୁନଃକ୍ରମଣ ଜୋଖିମ ଅପେକ୍ଷା ମୂଲ୍ୟବାନ ହୁଏ ତେବେ ଏହାକୁ follow-up ଭାବେ ଛଡ଼ା ଯାଇଛି।

### ରେଟ୍-ଲିମିଟ୍ ଅଟୋ-ଏନେବଲ୍ ସୁରକ୍ଷା ନେଟ୍ ଏବଂ କନେକସନ୍ ସୁରକ୍ଷା (`rateLimitProtection`)

**ଅଟୋ-ଏନେବଲ୍ ସୁରକ୍ଷା ନେଟ୍** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, ଡିଫଲ୍ଟ `true`):
ଡିଫଲ୍ଟ ଅନୁଯାୟୀ, OmniRoute ସମସ୍ତ ସକ୍ରିୟ API-କି ପ୍ରୋଭାଇଡର୍ କନେକସନ୍ (`getProviderCategory(provider) === "apikey"`) ପାଇଁ ରେଟ୍-ଲିମିଟ୍ କ୍ୟୁ ସୁରକ୍ଷାକୁ ସ୍ୱୟଂଚାଳିତ ଭାବେ ସକ୍ଷମ କରେ। ଏହା ନିଶ୍ଚିତ କରେ ଯେ rate-sensitive ଅପଷ୍ଟ୍ରିମ୍ API key ଗୁଡ଼ିକୁ ଆସୁଥିବା ଅନୁରୋଧଗୁଡ଼ିକ ଅପଷ୍ଟ୍ରିମ୍ 429 ତ୍ରୁଟିରେ burst ନ ହୋଇ Bottleneck ମାଧ୍ୟମରେ କ୍ୟୁ ଏବଂ ଥ୍ରୋଟଲ୍ ହୁଅନ୍ତି। ସୁରକ୍ଷା ନେଟକୁ `RATE_LIMIT_AUTO_ENABLE` ଏନଭାଏରନମେଣ୍ଟ ଭେରିଏବଲ୍ (`false`/`0`/`off` ଅକ୍ଷମ କରେ, `true`/`1`/`on` ଜୋରକରି ସକ୍ଷମ କରେ) ମାଧ୍ୟମରେ ଓଭରରାଇଡ୍ କରାଯାଇପାରେ, ଯାହା ସଂରକ୍ଷିତ ଡ୍ୟାସବୋର୍ଡ ସେଟିଂ (**ସେଟିଂସ୍ → ରେଜିଲିଏନ୍ସ୍** / `PATCH /api/resilience`) ଅପେକ୍ଷା ପ୍ରାଥମିକତା ପାଏ।

**ପ୍ରତି-କନେକସନ୍ `rateLimitProtection` ର ଅର୍ଥ (semantics):**
ପ୍ରତି-କନେକସନ୍ ରେଟ୍-ଲିମିଟ୍ ସୁରକ୍ଷା ପ୍ରୋଭାଇଡର୍ କନେକସନ୍ ଗୁଡ଼ିକରେ `rateLimitProtection` boolean ଫିଲ୍ଡ ମାଧ୍ୟମରେ ଟ୍ରାକ୍ କରାଯାଏ (SQLite ରେ `rate_limit_protection` ଭାବେ ସଂରକ୍ଷିତ):

- **ସ୍ପଷ୍ଟ ଅନ୍ (`rateLimitProtection === true`)**: ପ୍ରୋଭାଇଡର୍ ବର୍ଗ କିମ୍ବା ଅଟୋ-ଏନେବଲ୍ ସୁରକ୍ଷା ନେଟ୍ ଚାଲୁ ଅଛି କି ନାହିଁ ତାହା ନିର୍ବିଶେଷରେ, ଏହି କନେକସନ୍ ପାଇଁ ରେଟ୍-ଲିମିଟ୍ ସୁରକ୍ଷା ସ୍ପଷ୍ଟ ଭାବେ ସକ୍ଷମ କରାଯାଏ।
- **ସ୍ପଷ୍ଟ ଅଫ୍ (`rateLimitProtection === false`)**: ସ୍ପଷ୍ଟ ସୁରକ୍ଷାକୁ ଅକ୍ଷମ କରେ, କିନ୍ତୁ ସକ୍ରିୟ API-କି କନେକସନକୁ ଗ୍ଲୋବାଲ୍ ଅଟୋ-ଏନେବଲ୍ ସୁରକ୍ଷା ନେଟ୍ରୁ ବାଦ୍ ଦିଏ **ନାହିଁ**। `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`) ରେ, `false` ଏବଂ `undefined` ସମାନ: କେବଳ `rateLimitProtection === true` କୁ ସ୍ପଷ୍ଟ ଓଭରରାଇଡ୍ ଭାବେ ଗଣାଯାଏ। ଯଦି `rateLimitProtection` `false` (କିମ୍ବା ସେଟ୍ ହୋଇନାହିଁ), ତେବେ ଏକ ସକ୍ରିୟ API-କି କନେକସନ୍ ତଥାପି ଅଟୋ-ଏନେବଲ୍ ସର୍ତ୍ତ ସହିତ ମେଳ ଖାଏ ଏବଂ ରେଟ୍-ଲିମିଟ୍ ସୁରକ୍ଷିତ ରହେ।
- **କୌଣସି ପ୍ରତି-କନେକସନ୍ ଅପ୍ଟ-ଆଉଟ୍ ନାହିଁ**: ଅନ୍ୟମାନଙ୍କ ପାଇଁ ଅଟୋ-ଏନେବଲ୍ ସକ୍ରିୟ ରଖି, ଜଣେ ଅପରେଟର୍ ବର୍ତ୍ତମାନ "ଏହି ଏକକ ସକ୍ରିୟ API-କି କନେକସନ୍ ରେଟ୍-ଲିମିଟ୍ କ୍ୟୁ ସୁରକ୍ଷା ବିନା ଚାଲିବା ଉଚିତ୍" ବୋଲି ବ୍ୟକ୍ତ କରିପାରିବେ ନାହିଁ। API-କି କନେକସନ୍ ଗୁଡ଼ିକୁ ରେଟ୍-ଲିମିଟ୍ କ୍ୟୁ ବିନା ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଚଲାଇବା ପାଇଁ, ସୁରକ୍ଷା ନେଟକୁ ଗ୍ଲୋବାଲ୍ ଭାବେ ବନ୍ଦ କରିବାକୁ ପଡ଼ିବ (`RATE_LIMIT_AUTO_ENABLE=false` କିମ୍ବା `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`)।

**ସମର୍ଥିତ ଲେଖା ପଥ (write paths):**

- **`POST /api/rate-limits`**: କୌଣସି କନେକସନ୍ ପାଇଁ `rateLimitProtection` ଟଗଲ୍ କରିବା ପାଇଁ ସମର୍ଥିତ ପରିଚାଳନା ଲେଖା ପଥ (`{ connectionId: string, enabled: boolean }`)। ଏହାକୁ `enabled: true` ସହିତ କଲ୍ କରିବା ସ୍ପଷ୍ଟ ସୁରକ୍ଷା ସକ୍ଷମ କରେ; `enabled: false` ସହିତ କଲ୍ କରିବା ସ୍ପଷ୍ଟ ସୁରକ୍ଷାକୁ ହଟାଏ (ଯଦିଓ ଅଟୋ-ଏନେବଲ୍ ଚାଲୁ ଥିଲେ ସକ୍ରିୟ API-କି କନେକସନ୍ ଗୁଡ଼ିକ ଗ୍ଲୋବାଲ୍ ସୁରକ୍ଷା ନେଟ୍ ଅଧୀନରେ ରହନ୍ତି)।
- **`PUT /api/providers/[id]`**: ଇଚ୍ଛାକୃତଭାବେ `rateLimitProtection` ଗ୍ରହଣ କରେ **ନାହିଁ** କିମ୍ବା ଫ୍ଲିପ୍ କରେ ନାହିଁ (#11278)। `PUT /api/providers/[id]` ମାଧ୍ୟମରେ ପ୍ରୋଭାଇଡର୍ କନେକସନ୍ ମେଟାଡେଟା ଅପଡେଟ୍ କରିବା ସଂରକ୍ଷିତ ରେଟ୍-ଲିମିଟ୍ ସୁରକ୍ଷା ଅବସ୍ଥାକୁ କେବେ ବଦଳାଏ ନାହିଁ।

---

## 6. ଧୀର-ଷ୍ଟ୍ରିମ୍ ଥ୍ରୁପୁଟ୍ ୱାଚ୍ଡଗ୍ (#9709)

ଐଚ୍ଛିକ `resilienceSettings.streamRecovery.throughputWatchdog` ଗାର୍ଡ ସେହି ଅପଷ୍ଟ୍ରିମ୍କୁ ଚିହ୍ନଟ କରେ ଯାହା ଏବେବି chunk ପଠାଉଛି କିନ୍ତୁ କନଫିଗର କରାଯାଇଥିବା ଉପଯୋଗୀ-ଆଉଟପୁଟ୍ ହାର ଠାରୁ କମ୍ assistant ଆଉଟପୁଟ୍ ଉତ୍ପନ୍ନ କରୁଛି। ଏହା ଇଚ୍ଛାକୃତ ଭାବରେ idle ଟାଇମ୍ଆଉଟ୍ଠାରୁ ପୃଥକ: heartbeat ଏବଂ ମେଟାଡାଟା କୌଣସି ଟାଇମର୍ ରିସେଟ୍ କରନ୍ତି ନାହିଁ ଏବଂ ଅଗ୍ରଗତି ଭାବରେ ଗଣାଯାଆନ୍ତି ନାହିଁ। ଏହା ମଧ୍ୟ କଠୋର ପ୍ରୟାସ ସମୟସୀମା (#9153)ଠାରୁ ପୃଥକ, ଯାହା ଆଉଟପୁଟ୍ ଗୁଣବତ୍ତା ନିର୍ବିଶେଷରେ ଏକ ନିରପେକ୍ଷ ସୁରକ୍ଷା ସୀମା ଭାବରେ ରହେ।

ୱାଚ୍ଡଗ୍ abort କରିବା ପୂର୍ବରୁ ଏକ warm-up ଅବଧି ଏବଂ ତାପରେ ଏକ ସମ୍ପୂର୍ଣ୍ଣ rolling ୱିଣ୍ଡୋ ଆବଶ୍ୟକ କରେ। ଏହା Chat Completions ଏବଂ Responses API ଆଉଟପୁଟ୍ ଇଭେଣ୍ଟରୁ text delta ଗଣେ (ଏକ ରକ୍ଷଣାତ୍ମକ UTF-8 byte proxy), usage-only ଏବଂ ଖାଲି ଇଭେଣ୍ଟକୁ ଅଣଦେଖା କରେ, ଏବଂ tool-call କିମ୍ବା reasoning ଇଭେଣ୍ଟ ଚାଲୁଥିବା ବେଳେ ବିଚାର ସ୍ଥଗିତ କରେ। ଏହା ଡିଫଲ୍ଟ ଭାବରେ ଅକ୍ଷମ ଅଟେ ଏବଂ `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true` ସହିତ ସକ୍ଷମ କରାଯାଇପାରିବ; ୱିଣ୍ଡୋ, warm-up, ସର୍ବନିମ୍ନ ହାର ଏବଂ ସର୍ବନିମ୍ନ ମାପଯୋଗ୍ୟ ଆଉଟପୁଟ୍ ସାଧାରଣ resilience-settings normalization ସ୍ତର ଦ୍ୱାରା ସୀମାବଦ୍ଧ।

ସକ୍ଷମ ହେଲେ, ୱାଚ୍ଡଗ୍ abort କେବଳ ସକ୍ରିୟ ଅପଷ୍ଟ୍ରିମ୍ ପ୍ରୟାସରେ ପ୍ରୟୋଗ ହୁଏ। କୌଣସି client-ଦୃଶ୍ୟମାନ byte ପୂର୍ବରୁ, ବିଦ୍ୟମାନ ସମାନ-ଆକାଉଣ୍ଟ early-recovery ପଥ ପ୍ରୟାସକୁ ପୁନର୍ବାର ଖୋଲିପାରେ। commit ପରେ, ଷ୍ଟ୍ରିମ୍ କେବେବି ଅନ୍ଧ ଭାବରେ ପୁନର୍ଚାଳନ ହୁଏ ନାହିଁ; କେବଳ ବିଦ୍ୟମାନ ସୁରକ୍ଷିତ mid-stream continuation ଚୁକ୍ତି ଏକ suffix ଯୋଡ଼ିପାରେ। Finalization single-shot ରହେ, ତେଣୁ usage ହିସାବ ଏବଂ semaphore ରିଲିଜ୍ ନକଲ ହୁଏ ନାହିଁ।

---

## 7. ଅପଷ୍ଟ୍ରିମ୍ ଷ୍ଟାଟସ୍ ପୁନଃବିବୃତି (ଭୁଲ୍ ଦର୍ଶାଯାଇଥିବା quota ତ୍ରୁଟି)

**ପରିସର:** ଗୋଟିଏ ଅପଷ୍ଟ୍ରିମ୍ ଗେଟୱେ ଯାହା ଭୁଲ୍ HTTP ଷ୍ଟାଟସ୍ ସହିତ ଅସ୍ଥାୟୀ quota ସମାପ୍ତି ରିପୋର୍ଟ କରେ।

**ଉଦ୍ଦେଶ୍ୟ:** ଶ୍ରେଣୀବିଭାଗ ପୂର୍ବରୁ ଏକ ବିଭ୍ରାନ୍ତିକର ଷ୍ଟାଟସ୍କୁ ସଂଶୋଧନ କରିବା, ଯାହାଦ୍ୱାରା ଡାଉନଷ୍ଟ୍ରିମ୍ ଉପଭୋକ୍ତାମାନେ (fallback ଇଞ୍ଜିନ୍, combo ସମାହାର, client-ମୁଖୀ ପ୍ରତିକ୍ରିୟା) ବିଫଳତାର ପ୍ରକୃତ retry-ଯୋଗ୍ୟ ସ୍ୱଭାବ ଦେଖିପାରିବେ।

କିଛି ଗେଟୱେ ଅ-ରିଟ୍ରାଏବଲ୍ HTTP ଷ୍ଟାଟସ୍ ସହିତ ଅସ୍ଥାୟୀ quota ସମାପ୍ତି ସୂଚାଆନ୍ତି। `agentrouter.org` ମାନକ `429` ବଦଳରେ ଚୀନ୍ ବଡି (`用户额度不足` / `额度不足`) ସହିତ `403` (ବେଳେବେଳେ `400`) ଫେରାଏ। Claude Code ପରି clientମାନେ `403`କୁ ସ୍ଥାୟୀ ଭାବରେ ବିବେଚନା କରନ୍ତି ଏବଂ ସେସନ୍ ବନ୍ଦ କରିଦିଅନ୍ତି, ଏବଂ ସଂଶୋଧନ ବିନା fallback ଇଞ୍ଜିନ୍ ଏହାକୁ quota ଇଭେଣ୍ଟ ବଦଳରେ `AUTH_ERROR` ଭାବରେ ଶ୍ରେଣୀଭୁକ୍ତ କରିଥାନ୍ତା।

**କାର୍ଯ୍ୟାନ୍ୱୟନ:**

- ରେଜିଷ୍ଟ୍ରି + ମ୍ୟାଚର୍: `open-sse/config/upstreamStatusRestatement.ts` — ନିୟମର ଏକ provider-ଅନୁଯାୟୀ ତାଲିକା (`{id, fromStatuses, toStatus, textMarkers, excludeMarkers, defaultRetryAfterMs}`), `applyStatusRestatement()` ମାଧ୍ୟମରେ ମିଳାଯାଏ।
- କଲ୍ ସାଇଟ୍: `open-sse/handlers/chatCore.ts`ରେ `providerFailure:` ବ୍ଲକ୍ (ପ୍ରାୟ ଧାଡ଼ି 3654), `parseUpstreamError()` ଏକ ତ୍ରୁଟି HTTP ଷ୍ଟାଟସ୍ (`!providerResponse.ok`) ସହିତ ଅପଷ୍ଟ୍ରିମ୍ ପ୍ରତିକ୍ରିୟା ପାର୍ସ କରିବା ଠିକ୍ ପରେ ଏବଂ କୌଣସି ଶ୍ରେଣୀବିଭାଗ ଚାଲିବା ପୂର୍ବରୁ, ଯାହାଦ୍ୱାରା ପ୍ରତ୍ୟେକ ଡାଉନଷ୍ଟ୍ରିମ୍ ଉପଭୋକ୍ତା ସଂଶୋଧିତ ଷ୍ଟାଟସ୍ ଦେଖେ। `200` SSE ଷ୍ଟ୍ରିମ୍ ଭିତରେ ଏମ୍ବେଡ୍ ହୋଇଥିବା ତ୍ରୁଟିଗୁଡ଼ିକ ଏକ ପୃଥକ, ପରବର୍ତ୍ତୀ ଷ୍ଟ୍ରିମ୍-ପାର୍ସିଂ ପଥ ଅନୁସରଣ କରନ୍ତି ଏବଂ ଆଜି ଏହି ହୁକ୍ ଦ୍ୱାରା **ଆଚ୍ଛାଦିତ ନୁହଁନ୍ତି** — ଏକ ଜ୍ଞାତ ସୀମା, ଯାହା agentrouterର misstatus ପାଇଁ ଏପର୍ଯ୍ୟନ୍ତ ଆବଶ୍ୟକ ନାହିଁ (ଯାହା ଏକ ତ୍ରୁଟି HTTP ଷ୍ଟାଟସ୍ ଭାବରେ ଦେଖାଯାଏ)।
- Retry ଯୋଗ୍ୟତା: `429` `RETRY_AFTER_ELIGIBLE_STATUSES`ରେ ଅଛି (`open-sse/services/combo/unavailableRetryGate.ts`), ତେଣୁ ପୁନଃବିବୃତ ତ୍ରୁଟି ଏକ ମୃତ `403` ଭାବରେ ଦେଖାଯିବା ବଦଳରେ ଏକ ପ୍ରକୃତ retry ୱିଣ୍ଡୋ ବହନ କରେ।
- କୃତ୍ରିମ `60s` `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`) କେବଳ ସେତିକି ଯାହା ପୁନଃବିବୃତ ପ୍ରତିକ୍ରିୟା **client**କୁ କୁହେ; ଏହା ନିଜେ ସଂଯୋଗର ଆଭ୍ୟନ୍ତରୀଣ cooldown/lockout ଅବଧି ନୁହେଁ — ତାହା ଯେକୌଣସି ପ୍ରକ୍ରିୟା ବାସ୍ତବରେ ପୁନଃବିବୃତ ତ୍ରୁଟି ହ୍ୟାଣ୍ଡଲ୍ କରେ ତାହା ଦ୍ୱାରା ପୃଥକ ଭାବରେ ପରିଚାଳିତ ହୁଏ (Connection Cooldownର ବର୍ଦ୍ଧିତ backoff, §2, API-key providerମାନଙ୍କ ପାଇଁ ଆଧାର `3s`; କିମ୍ବା Model Lockout, §3, agentrouter ପରି per-model-quota providerମାନଙ୍କ ପାଇଁ)। ରାଉଟର୍ clientକୁ ଘୋଷଣା କରୁଥିବା 60s ୱିଣ୍ଡୋ ଠାରୁ ଶୀଘ୍ର ଆଭ୍ୟନ୍ତରୀଣ ଭାବରେ retry ପାଇଁ ଯୋଗ୍ୟ ହୋଇପାରେ — ଇଚ୍ଛାକୃତ ହେଡ୍ରୁମ୍, ବଗ୍ ନୁହେଁ।

ସ୍ଥାୟୀ ତ୍ରୁଟିଗୁଡ଼ିକ (agentrouterର `无权访问模型` — ଏହି ମଡେଲ୍କୁ ପହଞ୍ଚ ନାହିଁ) କେବେବି ପୁନଃବିବୃତ ହୁଅନ୍ତି ନାହିଁ: `textMarkers` ମ୍ୟାଚ୍ ହେଲେ ମଧ୍ୟ `excludeMarkers` ନିୟମକୁ ଭିଟୋ କରେ, ତେଣୁ ତ୍ରୁଟି ନିଜ ମୂଳ ଷ୍ଟାଟସ୍ ରଖେ ଏବଂ କିଛି ବି ଏହାକୁ ଅନନ୍ତ କାଳ ପର୍ଯ୍ୟନ୍ତ retry କରେ ନାହିଁ। ମିଳୁଥିବା provider ଶ୍ରେଣୀବିଭାଗ ନିୟମ (`open-sse/config/providerErrorRules.ts`ରେ `agentrouter-model-access-denied`: `reason: "auth_error"`, `scope: "model"`, `6h` ଘୋଷିତ ଆଧାର cooldown) ସାଧାରଣ apikey-ବର୍ଗ `FORBIDDEN` early-return _ପୂର୍ବରୁ_ `checkFallbackError` (`open-sse/services/accountFallback.ts`) ଦ୍ୱାରା ପରାମର୍ଶ କରାଯାଏ, `honorsRuleLockScope(provider)` ଉପରେ ଗେଟ୍ ହୋଇଥାଏ (#10334 — ବର୍ତ୍ତମାନ `providerErrorRules.ts`ରେ `HONORS_RULE_LOCK_SCOPE_PROVIDERS` allowlist ମାଧ୍ୟମରେ କେବଳ agentrouter-ପାଇଁ)। ନିୟମର ଘୋଷିତ 6h cooldown `fallbackResult.baseCooldownMs` ଭାବରେ ପ୍ରବାହିତ ହୁଏ, କିନ୍ତୁ ଏହା ତଥାପି ପୂର୍ବ-ବିଦ୍ୟମାନ per-model-quota lockout ପଥକୁ ଯୋଗାଏ (`lockModelIfPerModelQuota()` / `recordModelLockoutFailure()`, cooldown ଉତ୍ସ ବ୍ୟତୀତ #10334 ଦ୍ୱାରା ଅପରିବର୍ତ୍ତିତ): ଏହା ଅପରେଟରଙ୍କ `mlSettings.maxCooldownMs` (ଡିଫଲ୍ଟ `1_800_000ms` / 30 ମିନିଟ୍)କୁ ସୀମିତ କରାଯାଏ, ଅନ୍ୟ ପ୍ରତ୍ୟେକ ମଡେଲ୍ lockout ପରି, ଏବଂ _ସଂରକ୍ଷିତ lockout କାରଣ_ ପୂର୍ବ-ବିଦ୍ୟମାନ hardcoded `"forbidden"` ରହେ, ନିୟମର `"auth_error"` ନୁହେଁ — କେବଳ cooldown ଅବଧି ଶେଷରୁ-ଶେଷ ପର୍ଯ୍ୟନ୍ତ ସମ୍ମାନିତ ହୁଏ, କାରଣ ଷ୍ଟ୍ରିଂ ନୁହେଁ। ସଂଯୋଗ ନିଜେ ସକ୍ରିୟ ରହେ; ସମାନ ସଂଯୋଗରେ ଥିବା ସହୋଦର ମଡେଲଗୁଡ଼ିକ ଅପ୍ରଭାବିତ ରହନ୍ତି।

ପୁନଃବ୍ୟକ୍ତ କୋଟା ତ୍ରୁଟିଗୁଡ଼ିକ (`额度不足`) ଉତ୍ପାଦନ ପରିବେଶରେ ଏକ ପ୍ରଦାତା ନିୟମ ପର୍ଯ୍ୟନ୍ତ ପହଞ୍ଚେ
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`, ଏହାର ନିଜସ୍ୱ ଘୋଷିତ cooldown ନାହିଁ — persistence ସ୍ତରର
scaled backoff ଡିଫଲ୍ଟ ପ୍ରୟୋଗ ହୁଏ)। #10334 ପରଠାରୁ,
`ProviderErrorRuleMatch`-ରେ ଥିବା `scope` ଆରମ୍ଭରୁ ଶେଷ ପର୍ଯ୍ୟନ୍ତ ବ୍ୟବହୃତ ହୁଏ, କିନ୍ତୁ
**କେବଳ** `HONORS_RULE_LOCK_SCOPE_PROVIDERS` allowlist-ରେ ଥିବା ପ୍ରଦାତାମାନଙ୍କ ପାଇଁ
(`providerErrorRules.ts` —
ବର୍ତ୍ତମାନ କେବଳ `"agentrouter"`, `honorsRuleLockScope()` ମାଧ୍ୟମରେ ନିୟନ୍ତ୍ରିତ)। ଅନ୍ୟ
ପ୍ରତ୍ୟେକ ପ୍ରଦାତା ପାଇଁ `scope`, #10334 ପୂର୍ବରୁ ଯେପରି ଥିଲା, ଠିକ୍ ସେହିପରି କେବଳ
ସୂଚନାମୂଳକ ହୋଇ ରହେ।
`checkFallbackError` ମେଳ ଖାଇଥିବା ନିୟମର scope-କୁ
`fallbackResult.ruleScope` ଭାବେ ପ୍ରକାଶ କରେ; `isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) ହେଉଛି ସାଧାରଣ guard, ଯାହା ଏକ
`ruleScope`-କୁ connection-ବ୍ୟାପୀ, ସ୍ୱୟଂ-ପୁନରୁଦ୍ଧାରଶୀଳ
ସଙ୍କେତ ଭାବେ ସମ୍ମାନ କରିବା ପ୍ରକୃତରେ ନିରାପଦ ବୋଲି ନିଶ୍ଚିତ କରେ (scope `"connection"`,
reason `quota_exhausted`, କେବେବି `permanent` ନୁହେଁ,
କେବେବି `creditsExhausted` ନୁହେଁ — ଭବିଷ୍ୟତର କୌଣସି ନିୟମ scope
`"connection"`-କୁ ଏକ ସ୍ଥାୟୀ account state ସହ ଯୋଡ଼ିବା ବିରୋଧରେ ଏକ ସୁରକ୍ଷା)। ଦୁଇଜଣ consumer ଏହାକୁ call କରନ୍ତି:

- **Persistence** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  passthrough-provider-ର **ପ୍ରତି-model** lockout
  branch-କୁ ଯିବା ପରିବର୍ତ୍ତେ (agentrouter ହେଉଛି `passthroughModels: true` → `hasPerModelQuota()`
  `true` ଫେରାଏ), ଏହା ଏକ **ଅସ୍ଥାୟୀ connection cooldown** ପ୍ରୟୋଗ କରେ —
  `testStatus: "unavailable"` + `rateLimitedUntil`, କେବେବି terminal status
  (`credits_exhausted`/`banned`/`expired`) ନୁହେଁ — ତେଣୁ cooldown ସମାପ୍ତ ହେବା ପରେ
  connection-ଟି manual credential reset ଆବଶ୍ୟକ କରିବା ପରିବର୍ତ୍ତେ ସ୍ୱୟଂ ପୁନରୁଦ୍ଧାର ହୁଏ।
  `disableCooling: true` ଥିବା connection-ଗୁଡ଼ିକ ପାଇଁ ଏହା ଏଡ଼ାଇ ଦିଆଯାଏ (#2997): ସେହି opt-out
  ପରିବର୍ତ୍ତେ ପ୍ରତି-model lockout-କୁ ଅଗ୍ରସର ହୁଏ (ଏକ ଲିପିବଦ୍ଧ trade-off —
  branch-ଟିର ଉପରେ ଥିବା code comment ଦେଖନ୍ତୁ)।
- **ସମାନ-request combo routing** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): ସେହି guard connection-ଟିକୁ
  in-memory `exhaustedConnections` set-ରେ ଚିହ୍ନିତ କରେ, ଯାହା
  `${provider}:${connectionId}` ଦ୍ୱାରା key କରାଯାଇଛି। ଏହା କେବଳ ଏକ ଅବଶିଷ୍ଟ ସମାନ-REQUEST
  target-କୁ ଏଡ଼ାଏ, ଯାହା _ନିଜେ ନିଜ target object-ରେ ସେହି ସଠିକ୍ `connectionId` ବହନ କରେ_
  (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)`-ଟି `exhaustedConnections` lookup ପୂର୍ବରୁ) — ଏକ ସାଧାରଣ
  model-list combo, ଯେଉଁଠାରେ sibling target-ଗୁଡ଼ିକ ନିଜସ୍ୱ pinned `connectionId`
  ବହନ କରନ୍ତି ନାହିଁ ଏବଂ response-ର
  `X-OmniRoute-Selected-Connection-Id` header-ରୁ ପ୍ରତ୍ୟେକ dispatch ପାଇଁ କେବଳ ଗୋଟିଏ resolve ହୁଏ,
  କେବେବି ସେହି key match-ରେ ପହଞ୍ଚେ ନାହିଁ। ସେହି ସାଧାରଣ କ୍ଷେତ୍ରରେ, ଏକ ଅବଶିଷ୍ଟ leg-କୁ
  ସଦ୍ୟ-ଶେଷ ହୋଇଥିବା account ପୁନର୍ବ୍ୟବହାର କରିବାରୁ ବାରଣ କରୁଥିବା ପ୍ରକୃତ ସୁରକ୍ଷା ଏହି Set ନୁହେଁ —
  ଏହା ହେଉଛି ଉପରୋକ୍ତ persistence ସ୍ତର
  (connection-ର `rateLimitedUntil` ବର୍ତ୍ତମାନ ଭବିଷ୍ୟତରେ ଅଛି), ଯାହା
  failure-ଟି ପାଇଁ ଏହି ଏକେ guard ଦ୍ୱାରା `transientRateLimitedProviders`-କୁ ଦମନ କରିବା ସହ
  ମିଳିତ ଭାବେ କାମ କରେ ("ଦୁଇ-ପର୍ଯ୍ୟାୟ design" ଏବଂ
  `targetExhaustion.ts`-ରେ ଥିବା `isAgentrouterConnectionQuotaScope` branch-ର code comment ଦେଖନ୍ତୁ):
  ସେହି Set-କୁ ଅଚିହ୍ନିତ ରଖିଲେ, `combo.ts`-ର `allowRateLimitedConnection` force-allow
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) ପ୍ରଦାତାର ଅବଶିଷ୍ଟ leg-ଗୁଡ଼ିକ ପାଇଁ
  ସକ୍ରିୟ ହୁଏ ନାହିଁ, ତେଣୁ credential selection-ର `rateLimitedUntil`
  filter (`src/sse/services/auth.ts:1238`) ସାଧାରଣ ଭାବେ ସମ୍ମାନିତ ହୁଏ ଏବଂ ଏକ
  ଅବଶିଷ୍ଟ leg ହୁଏ ଅନ୍ୟ କୌଣସି, ଏପର୍ଯ୍ୟନ୍ତ ଯୋଗ୍ୟ agentrouter
  connection ବାଛେ, ନହେଲେ କୌଣସି credential ଉପଲବ୍ଧ ନଥିବାରୁ ବିଫଳ ହୁଏ — ଏହି branch ଯେଉଁ
  connection-କୁ ସଦ୍ୟ cooldown କରିଛି, ତାହାକୁ ବଳପୂର୍ବକ ପୁନଃବ୍ୟବହାର କରେ ନାହିଁ।

### ଦୁଇ-ପର୍ଯ୍ୟାୟ design: status ପୁନଃବ୍ୟକ୍ତି, ତା'ପରେ classification

Status ପୁନଃବ୍ୟକ୍ତି (`upstreamStatusRestatement.ts`) ଏବଂ ପ୍ରଦାତା
classification ନିୟମଗୁଡ଼ିକ (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) ହେଉଛି ପୃଥକ registry, ଯେଉଁ ଦୁଇଟି ମଧ୍ୟ ପ୍ରଦାତା id
ଏବଂ text marker ଦ୍ୱାରା key ହୁଏ, କିନ୍ତୁ ସେଗୁଡ଼ିକ ଭିନ୍ନ ସ୍ଥାନରେ ଚାଲେ ଏବଂ ଭିନ୍ନ
ଉଦ୍ଦେଶ୍ୟ ପୂରଣ କରେ: ପୁନଃବ୍ୟକ୍ତି `chatCore.ts`-ର ପ୍ରାରମ୍ଭିକ ପର୍ଯ୍ୟାୟରେ HTTP status-କୁ ପୁନର୍ଲିଖନ କରେ;
classification ନିୟମଗୁଡ଼ିକ `checkFallbackError()` ଭିତରେ fallback `reason` ଏବଂ lock `scope`
(`model` / `provider` / `connection`) ବାଛନ୍ତି
(`open-sse/services/accountFallback.ts`)।

Classification ନିୟମଗୁଡ଼ିକ କେବଳ `providerErrorRules.ts`-ର
`FULL_TEXT_RULE_PROVIDERS` allowlist-ରେ ଥିବା ପ୍ରଦାତାମାନଙ୍କ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ error **text**
ଦେଖନ୍ତି (`额度不足` ପରି body marker ସହ ମେଳ କରିବା ପାଇଁ ଏହା ଆବଶ୍ୟକ) —
ବର୍ତ୍ତମାନ କେବଳ `"agentrouter"`। ଅନ୍ୟ ପ୍ରତ୍ୟେକ **built-in catalog** ପ୍ରଦାତା ପାଇଁ,
`checkFallbackError`, `getProviderErrorRuleMatch`-କୁ କେବଳ structured error
(`{code, type}`) ଦିଏ, ଯାହା header/status/code-ଆଧାରିତ ନିୟମଗୁଡ଼ିକ ପାଇଁ ପର୍ଯ୍ୟାପ୍ତ,
କିନ୍ତୁ body-text marker ଦେଖିପାରେ ନାହିଁ।
`resolveRuleMatchBody()` helper ଏହି selection କରେ: allowlist-ରେ ଥିବା ପ୍ରଦାତାମାନଙ୍କ ପାଇଁ
ସମ୍ପୂର୍ଣ୍ଣ error text, ଅନ୍ୟଥା structured error। କୌଣସି **built-in** ପ୍ରଦାତାକୁ
`FULL_TEXT_RULE_PROVIDERS`-ରେ ଯୋଡ଼ିବା ହେଉଛି ଏକ ସ୍ପଷ୍ଟ ପ୍ରତି-provider opt-in —
ଏହା ଏଥିପାଇଁ ରହିଛି, ଯେପରି ତାଲିକାରେ ନଥିବା ପ୍ରତ୍ୟେକ ପ୍ରଦାତାର ଡିଫଲ୍ଟ path
byte-for-byte ଅପରିବର୍ତ୍ତିତ ରହେ।

କୌଣସି ନିୟମର `scope` (`model` / `provider` / `connection`) ହେଉଛି
`FULL_TEXT_RULE_PROVIDERS`-ଠାରୁ ପୃଥକ opt-in: `checkFallbackError` କେବଳ ଏହାକୁ
`fallbackResult.ruleScope` ଭାବେ ପ୍ରକାଶ କରେ, ଏବଂ downstream consumer-ମାନେ ଏହାକୁ
କେବଳ ସେହି ପ୍ରଦାତାମାନଙ୍କ ପାଇଁ ସୂଚନାମୂଳକ label ବ୍ୟତୀତ ଅନ୍ୟ କିଛି ଭାବେ ସମ୍ମାନ କରନ୍ତି,
ଯେଉଁମାନେ ସେହି file-ର `HONORS_RULE_LOCK_SCOPE_PROVIDERS` allowlist-ରେ ଅଛନ୍ତି (`gated via
honorsRuleLockScope()` — ବର୍ତ୍ତମାନ କେବଳ `"agentrouter"`)। କୌଣସି ପ୍ରଦାତା ସେହି
allowlist-ରେ ଥିବାବେଳେ `scope: "connection"` match ପ୍ରକୃତରେ କ'ଣ କରେ, ତାହା ପାଇଁ
ଉପରୋକ୍ତ "ପୁନଃବ୍ୟକ୍ତ କୋଟା ତ୍ରୁଟିଗୁଡ଼ିକ" ଦେଖନ୍ତୁ।

**#11104 — ଅପରେଟର-ଘୋଷିତ ନିୟମଗୁଡ଼ିକ ଉଭୟ ଅନୁମତି ତାଲିକାକୁ ବାଇପାସ୍ କରେ।** ଜଣେ ଅପରେଟର ଏହି ଫାଇଲ୍ ସମ୍ପାଦନା ନକରି `settings.providerErrorRules` (`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`) ମାଧ୍ୟମରେ ରନଟାଇମ୍ରେ ପ୍ରତି-ପ୍ରଦାନକାରୀ ନିୟମ ଘୋଷଣା କରିପାରିବ। `FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` ପଛରେ ଏକ ଅପରେଟର ନିୟମକୁ ଗେଟ୍ କରିବା — ଯାହାକି ବିଲ୍ଟ-ଇନ୍ କାଟାଲଗ୍ ନିୟମଗୁଡ଼ିକର **ଡିଫଲ୍ଟ** ଆଚରଣକୁ ସୁରକ୍ଷା ଦେବା ପାଇଁ ଉଦ୍ଦିଷ୍ଟ ଅନୁମତି ତାଲିକା — ସେଠାରେ ପୂର୍ବରୁ ତାଲିକାଭୁକ୍ତ ପ୍ରଦାନକାରୀମାନଙ୍କ ବ୍ୟତୀତ ଅନ୍ୟ ସମସ୍ତ ପ୍ରଦାନକାରୀଙ୍କ ପାଇଁ ସେଟିଂସ୍ ମେକାନିଜିମ୍କୁ ନିଷ୍କ୍ରିୟ କରିଦେବ, କାରଣ ନିୟମ ଘୋଷଣା କରିବା ପୂର୍ବରୁ ହିଁ ଅପରେଟରଙ୍କ ସ୍ପଷ୍ଟ ଅପ୍ଟ-ଇନ୍ ଅଟେ। `resolveRuleMatchBody()` ଏବଂ `honorsRuleLockScope()` ଉଭୟ ପ୍ରଥମେ `hasOperatorRuleForProvider()` ଯାଞ୍ଚ କରନ୍ତି: ଏକ ଅପରେଟର ନିୟମ ଥିବା ପ୍ରଦାନକାରୀ ମୂଳ ତ୍ରୁଟି ପାଠ୍ୟ ପାଏ ଏବଂ ଏହାର ଘୋଷିତ `scope` ସମ୍ମାନିତ ହୁଏ, ଯଦିଓ ଏହା କୌଣସି ଅନୁମତି ତାଲିକାରେ ଦେଖାଯାଉଛି କି ନାହିଁ।

**ଜଣାଶୁଣା ତ୍ରୁଟି — `providerRuleRegistry` କେବେ ବି HTTP 400 ପାଇଁ ପରାମର୍ଶ କରାଯାଏ ନାହିଁ।**
`checkFallbackError` ର `BAD_REQUEST` ଶାଖା ଷ୍ଟାଟସ୍ 400 କୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ନିଜସ୍ୱ ପାଟର୍ନ ଆରେ (`MODEL_ACCESS_DENIED_PATTERNS`, `CONTEXT_OVERFLOW_PATTERNS`, ଇତ୍ୟାଦି `accountFallback.ts` ରେ) ମାଧ୍ୟମରେ ଶ୍ରେଣୀଭୁକ୍ତ କରେ ଏବଂ ଏହା ଉପରେ ଥିବା `configuredRule`/`getProviderErrorRuleMatch` ଶାଖା ପହଞ୍ଚିବା ପୂର୍ବରୁ ଫେରିଯାଏ। `status: 400` ସହିତ ଏକ ବିଲ୍ଟ-ଇନ୍ କାଟାଲଗ୍ ନିୟମ (କିମ୍ବା ଏକ ଅପରେଟର ନିୟମ) ବ୍ୟାକରଣଗତ ଭାବରେ ବୈଧ କିନ୍ତୁ କେବେ ବି କାର୍ଯ୍ୟକାରୀ ହେବ ନାହିଁ। ଆଜି କୌଣସି ବିଦ୍ୟମାନ ନିୟମ 400 କୁ ଟାର୍ଗେଟ୍ କରେ ନାହିଁ, ତେଣୁ ଉତ୍ପାଦନରେ କିଛି ପ୍ରଭାବିତ ହୁଏ ନାହିଁ — କିନ୍ତୁ ଭବିଷ୍ୟତରେ ଏକ 400 ନିୟମ ପାଇଁ ପ୍ରଥମେ ଏହି ଶାଖାକୁ ସ୍ପର୍ଶ କରିବା ଆବଶ୍ୟକ, ଯାହା ଏକ ନିୟମ ଯୋଡିବା ଅପେକ୍ଷା ଏକ ବଡ଼ ପରିବର୍ତ୍ତନ (ଏହା ପାଟର୍ନ-ଆରେ ଆଚରଣ ଉପରେ ନିର୍ଭର କରୁଥିବା ପ୍ରତ୍ୟେକ ପ୍ରଦାନକାରୀ ପାଇଁ 400 କୁ ପୁନଃଶ୍ରେଣୀଭୁକ୍ତ କରେ) ଏବଂ ଏକକ-ପ୍ରଦାନକାରୀ ନିୟମ ଯୋଡିବା ପରିସର ବାହାରେ ଅଟେ।

### ଏକ ନୂତନ କୋଟା-ଭୁଲ୍ ଗେଟୱେ ଯୋଡିବା

1.  `statusRestatementRegistry` (`open-sse/config/upstreamStatusRestatement.ts`) ରେ ଗୋଟିଏ ନିୟମ ଆରେ ପଞ୍ଜୀକରଣ କରନ୍ତୁ। `textMarkers` କୁ ପ୍ରଦାନକାରୀ-ନିର୍ଦ୍ଦିଷ୍ଟ ରଖନ୍ତୁ; `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`) ସହିତ ସଂଘର୍ଷ କରୁଥିବା ସାଧାରଣ ଇଂରାଜୀ ବାକ୍ୟାଂଶଗୁଡ଼ିକୁ କେବେ ବି ପୁନଃ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।
2.  ଠିକ୍ ଲକ୍ ସ୍କୋପ୍ ବାଛିବା ପାଇଁ `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) ରେ ଇଚ୍ଛାଧୀନ ଭାବରେ ଶ୍ରେଣୀକରଣ ନିୟମ ପଞ୍ଜୀକରଣ କରନ୍ତୁ (ଆକାଉଣ୍ଟ-ବ୍ୟାପକ କୋଟା ପାଇଁ `connection`, ପ୍ରତି-ମଡେଲ୍ ତ୍ରୁଟି ପାଇଁ `model`)। ଏହି ପଦକ୍ଷେପ କେବଳ ସେହି ପ୍ରଦାନକାରୀମାନଙ୍କ ପାଇଁ ଉତ୍ପାଦନରେ କାର୍ଯ୍ୟକାରୀ ହୁଏ ଯେଉଁମାନଙ୍କ ନିୟମଗୁଡ଼ିକୁ ସମ୍ପୂର୍ଣ୍ଣ ତ୍ରୁଟି ପାଠ୍ୟ (ବଡି ମାର୍କର୍ସ) ଆବଶ୍ୟକ: ସେହି ଫାଇଲରେ `FULL_TEXT_RULE_PROVIDERS` ରେ ପ୍ରଦାନକାରୀ ID ଯୋଡନ୍ତୁ — ଅନ୍ୟଥା `checkFallbackError` କେବଳ ନିୟମକୁ ସଂରଚିତ `{code, type}` ତ୍ରୁଟି ପ୍ରଦାନ କରେ ଏବଂ ଏକ ବଡି-ପାଠ୍ୟ ନିୟମ କେବେ ବି ଲାଇଭ୍ ଟ୍ରାଫିକ୍ ସହିତ ମେଳ ଖାଇବ ନାହିଁ। ଯେଉଁ ନିୟମଗୁଡ଼ିକ କେବଳ `status`/`headers` ଉପରେ ମେଳ ଖାଏ (ଯେପରିକି Opencode କିମ୍ବା Minimax ର), ସେମାନଙ୍କୁ ଏହି ଅପ୍ଟ-ଇନ୍ ଆବଶ୍ୟକ ନାହିଁ। ପୃଥକ ଭାବରେ, ଯଦି ନିୟମ `scope: "connection"` ଘୋଷଣା କରେ ଏବଂ ଉଦ୍ଦେଶ୍ୟ ହେଉଛି ଏକ ପ୍ରକୃତ କନେକ୍ସନ୍-ବ୍ୟାପକ କୁଲଡାଉନ୍ ଏବଂ ସମାନ-ଅନୁରୋଧ କମ୍ବୋ ସ୍କିପ୍ (କେବଳ ଏକ ସୂଚନାମୂଳକ ଲେବଲ୍ ନୁହେଁ), ତେବେ ସେହି ଫାଇଲରେ `HONORS_RULE_LOCK_SCOPE_PROVIDERS` ରେ ପ୍ରଦାନକାରୀ ID ଯୋଡନ୍ତୁ — ଏହା ହିଁ `markAccountUnavailable()` (`src/sse/services/auth.ts`) ଏବଂ `applyComboTargetExhaustion()` (`open-sse/services/combo/targetExhaustion.ts`) ରେ `isAgentrouterConnectionQuotaScope()`-ଶୈଳୀର ବ୍ୟବହାରକୁ ଗେଟ୍ କରେ; ଏହା ବିନା, `scope` ଏବେ ବି `fallbackResult.ruleScope` ମାଧ୍ୟମରେ ପ୍ରବାହିତ ହୁଏ କିନ୍ତୁ କିଛି ବି ଏହା ଉପରେ କାର୍ଯ୍ୟ କରେ ନାହିଁ।
3.  `tests/unit/upstream-status-restatement.test.ts` ଏବଂ `tests/unit/agentrouter-error-rules.test.ts` କୁ ପ୍ରତିଫଳିତ କରୁଥିବା ୟୁନିଟ୍ ଟେଷ୍ଟ ଯୋଡନ୍ତୁ (ନଟ୍-ପର୍ମାନେଣ୍ଟ / ନଟ୍-କ୍ରେଡିଟ୍ସଏକ୍ସହଷ୍ଟେଡ୍ ଗାର୍ଡ ସହିତ, ଏବଂ — ଯଦି ପ୍ରଦାନକାରୀକୁ ଅନୁମତି ତାଲିକା ଆବଶ୍ୟକ — ଏକ ଟେଷ୍ଟ ଯାହା `resolveRuleMatchBody()` କେବଳ ସେହି ପ୍ରଦାନକାରୀ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ପାଠ୍ୟ ଫେରାଏ ବୋଲି ନିଶ୍ଚିତ କରେ)।

`chatCore.ts`, `classifyError`, କିମ୍ବା combo ରେ କୌଣସି ପରିବର୍ତ୍ତନ ଆବଶ୍ୟକ ନାହିଁ।

#### ଇଗ୍ରେସ୍-ବାକେଟେଡ୍ ଲକ୍ (#10880)

`EGRESS_BUCKETED_LOCK_PROVIDERS` (opencode ପରିବାର) ରେ ଥିବା ପ୍ରଦାନକାରୀମାନଙ୍କୁ IP-ବାକେଟେଡ୍ ଅପଷ୍ଟ୍ରିମ୍ ଭାବରେ ବିବେଚନା କରାଯାଏ (opencode ଫ୍ରି ଟାୟର୍ IP-ବାକେଟେଡ୍, ଆକାଉଣ୍ଟ-ବାକେଟେଡ୍ ନୁହେଁ — #9611 ଦେଖନ୍ତୁ): ଏକ ଷ୍ଟାଟସ୍-429 ଶ୍ରେଣୀଭୁକ୍ତ `quota_exhausted` **କିମ୍ବା** `rate_limit_exceeded` ପ୍ରତ୍ୟେକ ଅନୁମତିପ୍ରାପ୍ତ-ପରିବାର କନେକ୍ସନ୍କୁ ଥଣ୍ଡା କରେ ଯାହାର ଶେଷ ଜଣା ଇଗ୍ରେସ୍ IP ବିଫଳ କନେକ୍ସନ୍ ସହିତ ମେଳ ଖାଏ, ରୋଟେସନ୍ ସେମାନଙ୍କୁ ଚେଷ୍ଟା କରିବା ପୂର୍ବରୁ — N-1 ନିଶ୍ଚିତ-ବିଫଳ ଅପଷ୍ଟ୍ରିମ୍ କଲ୍ଗୁଡ଼ିକୁ ଏଡ଼ାଇ ( #10460/#10525 ସହିତ ସମାନ ଆକୃତି)। `rate_limit_exceeded` ଜାଣିଶୁଣି ଅନ୍ତର୍ଭୁକ୍ତ କରାଯାଇଛି: `markAccountUnavailable` ପଥରେ opencode-ନିର୍ଦ୍ଦିଷ୍ଟ ନିୟମଗୁଡ଼ିକ କେବେ ବି ମେଳ ଖାଏ ନାହିଁ (`checkFallbackError` କୁ କୌଣସି ହେଡର୍ସ/ବଡି ପ୍ରଦାନ କରାଯାଏ ନାହିଁ, opencode `FULL_TEXT_RULE_PROVIDERS` ରେ ନାହିଁ), ତେଣୁ ଏକ 429 ଯାହାର ବଡିରେ ସବସ୍କ୍ରିପ୍ସନ୍-କୋଟା ପାଠ୍ୟ ("monthly usage limit reached") ଥାଏ, ତାହା କୋଟା-ପାଠ୍ୟ ଫଲବ୍ୟାକ୍ (`buildSubscriptionQuotaFallback`, `accountFallback.ts`; 1h କୁଲଡାଉନ୍) ଦ୍ୱାରା `quota_exhausted` ଭାବରେ ଶ୍ରେଣୀଭୁକ୍ତ ହୁଏ, `status_429` ନିୟମରେ ପହଞ୍ଚିବା ପୂର୍ବରୁ — ଯେତେବେଳେ ଏକ କୋଟା-ପାଠ୍ୟ-ମୁକ୍ତ 429 (ସାଧା ରେଟ୍ ଲିମିଟିଂ) `status_429` ନିୟମ ମାଧ୍ୟମରେ `rate_limit_exceeded` ଭାବରେ ଶ୍ରେଣୀଭୁକ୍ତ ହୁଏ ଏବଂ ଏବେ ବି IP ପରିବାରକୁ ଥଣ୍ଡା କରେ। ଏକ ଅନୁମତିପ୍ରାପ୍ତ ପ୍ରଦାନକାରୀ ପାଇଁ ଏକ IP-ବାକେଟେଡ୍ ରେଟ୍ ଲିମିଟ୍ ଏକ ଶେଷ ହୋଇଥିବା କୋଟା ସହିତ ସମାନ ସଙ୍କେତ। ସଚ୍ଚୋଟ ସୀମା:

- **ବେଷ୍ଟ-ଏଫର୍ଟ**: ଲକ୍ ସଂଯୋଗର ଶେଷ ଜଣାଥିବା `egress_ip` କୁ `proxy_logs` (24h window, synchronous, no cache) ଠାରୁ ସମାଧାନ କରେ। ଥଣ୍ଡା କ୍ୟାଚେ (egress IP କେବେବି probe ହୋଇନାହିଁ) କିମ୍ବା କୌଣସି ଧାରୀ ନଥିଲେ → ବିଫଳ ସଂଯୋଗଟି ଆଜିକା ପରି branch ଦ୍ୱାରା cooldown ହେଉଛି, କେବଳ କୌଣସି sibling କୁ lock କରାଯାଏ ନାହିଁ।
- **କେବେବି ଟର୍ମିନାଲ୍ ନୁହେଁ**: cooldown ଟି ଏକ ନିବେଶ ହେଉଥିବା କୋଟା ୱିଣ୍ଡୋ (`testStatus: "unavailable"`); IP-ସ୍ତରର ସିଗ୍ନାଲରୁ ସ୍ଥାୟୀ ଅବସ୍ଥା କେବେବି ନିଷ୍ପତ୍ତି କରାଯାଏ ନାହିଁ। `disableCooling` ସଂଯୋଗଗୁଡ଼ିକ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ branch କୁ ଛାଡ଼ି ଯାଆନ୍ତି।
- **Allowlisted ପରିବାର ପାଇଁ lock granularity ପରିବର୍ତ୍ତନ**: ଏହା କେବଳ ଏକ sibling optimization ନୁହେଁ, ଏହା ଏକ scope ପରିବର୍ତ୍ତନ। opencode ଏକ `passthroughModels` provider, ତେଣୁ ଏହି branch ପୂର୍ବରୁ 429 ଗୋଟିଏ per-MODEL lockout ଉତ୍ପାଦନ କରୁଥିଲା; ଏବେ ଏହା ଗୋଟିଏ connection cooldown ଉତ୍ପାଦନ କରେ — ସେଥିରେ ଗୋଟିଏ ସଂଯୋଗ ଚଲାଉଥିବା ଏବଂ କୌଣସି sibling ନଥିବା ଏକ operator ମଧ୍ୟ ଅନ୍ତର୍ଭୁକ୍ତ। ଏହା ସେହି granularity ଯାହା opencode rule table ପୂର୍ବରୁ ସଠିକ୍ ବୋଲି ଘୋଷଣା କରିଛି (`scope: "connection"`, `providerErrorRules.ts`), ଆଜିଯାଏଁ ସମ୍ମାନିତ ହୋଇନାହିଁ କାରଣ opencode `HONORS_RULE_LOCK_SCOPE_PROVIDERS` ରେ ନାହିଁ। Branch ଟି ବିଫଳ ସଂଯୋଗର cooldown + `backoffLevel` ନିଜେ ଲେଖେ, connection-scoped agentrouter branch କୁ ପ୍ରତିବିମ୍ବିତ କରି, ଏବଂ return କରେ — per-model block ଏବଂ ତଳେ ଥିବା generic path କେବେବି reach ହୁଅନ୍ତି ନାହିଁ।
- **Combo ଅନ୍ତର୍ଭୁକ୍ତ**: agentrouter branch ପରି, scope ଜାଣିଶୁଣି `persistUnavailableState`/`isCombo` downgrade କୁ ଅଣଦେଖା କରେ, ଯାହା ଏକ combo caller 429 ପାଇଁ ପ୍ରୟୋଗ କରେ। Per-model lockout ଏହି scopeର ଏକ ଦୁର୍ବଳ ରୂପ ନୁହେଁ, ଏହା ଭୁଲ୍ ଏକକ: ଏହା ଅନ୍ତ ହୋଇଯାଇଥିବା IP ବିଷୟରେ କିଛି କହେ ନାହିଁ, ତେଣୁ combo rotation ପ୍ରତି sibling ପାଇଁ ଗୋଟିଏ ନିଶ୍ଚିତ-ବିଫଳ କଲ୍ ଜଳାଇବାକୁ ଜାରି ରଖିବ।
- **Sibling safety**: ଯେଉଁ sibling ପୂର୍ବରୁ terminal (`banned`/`credits_exhausted`) ଅବସ୍ଥାରେ ଅଛି କିମ୍ବା ପୂର୍ବରୁ ଏକ ଦୀର୍ଘ cooldown ରେ ଅଛି, ତାକୁ କେବେବି overwrite କରାଯାଏ ନାହିଁ।
- **Exclusive allowlist**: `EGRESS_BUCKETED_LOCK_PROVIDERS` କୁ ପ୍ରସାରଣ କରିବା ଏକ ସ୍ପଷ୍ଟ owner ନିଷ୍ପତ୍ତି; କୌଣସି generic wiring ନାହିଁ (pattern #10334/#10419)। Sibling query ସେହି allowlist କୁ bind କରେ ଏବଂ ଏହାକୁ SQL literal ଭାବରେ ପୁନରାବୃତ୍ତି କରେ ନାହିଁ, ତେଣୁ ଏହାକୁ ପ୍ରସାରଣ କରିବା ଏକ one-line change ହୋଇରହେ।
- **Egress IP rotation, ଉଭୟ ଦିଗରେ**: lookup window (24h) egress-IP cache TTL (5 min) ଠାରୁ ବହୁତ ବଡ଼, ତେଣୁ "last known IP" ହେଉଛି ଇତିହାସ, ବର୍ତ୍ତମାନର ଅବସ୍ଥା ନୁହେଁ। ଯଦି ଗୋଟିଏ ସଂଯୋଗର proxy ଏହି window ଭିତରେ rotate ହୁଏ, ଲକ୍ ଏକ ପ୍ରକୃତରେ shared IP କୁ **miss** କରିପାରେ (recorded IP ନୂଆ, ଅନନ୍ତ ହୋଇନଥିବା ଏକ) — ଏବଂ ସମମିତିକ ଭାବରେ ଏହା ଏପରି ଏକ sibling କୁ **cool** କରିପାରେ ଯାହା exhausted IP ରୁ ପୂର୍ବରୁ rotate ହୋଇସାରିଛି। ଦ୍ୱିତୀୟ କ୍ଷେତ୍ରରେ ସେହି sibling ପାଇଁ ଗୋଟିଏ cooldown window ଖର୍ଚ୍ଚ ହୁଏ; ଉଭୟ ଏକ history-based lookupର ଗ୍ରହଣୀୟ best-effort ସୀମା।
- **Cost**: `proxy_logs` ର ଦୁଇଟି bounded scan (`idx_pl_timestamp` ମାଧ୍ୟମରେ window-filtered), କେବଳ 429 frequency ରେ। କୌଣସି ନୂଆ index ନାହିଁ (migration 134 YAGNI)। ମଧ୍ୟମ ଆକାରର ଏକ real-traffic DB copy ରେ ମାପାଯାଇଛି; ଏକ high-throughput instance ସେହି window ରେ ଅନୁପାତିକ ଭାବରେ ଅଧିକ row ଧାରଣ କରେ।

---

## ଅନ୍ୟାନ୍ୟ Resilience ବୈଶିଷ୍ଟ୍ୟ

- **20ଟି routing strategy** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — [AUTO-COMBO.md](../routing/AUTO-COMBO.md) ଦେଖନ୍ତୁ।
- **Reset-aware routing** (v3.8.0) — quota reset ସମୟ ଅନୁସାରେ connectionଗୁଡ଼ିକୁ ପ୍ରାଥମିକତା ଦିଏ।
- **Background mode degradation** — `background: true` ଥିବା Responses APIକୁ warning ସହିତ sync modeକୁ ପରିବର୍ତ୍ତନ କରେ।
- **Dynamic tool limit detection** — tool count limit ପହଞ୍ଚିଲେ providerଗୁଡ଼ିକୁ back off କରେ।
- **Emergency fallback** — `OMNIROUTE_EMERGENCY_FALLBACK` ଦ୍ୱାରା ନିୟନ୍ତ୍ରିତ; restart ବିନା operatorsମାନେ Feature Flags pageରୁ ଏହାକୁ override କରିପାରିବେ।

---

## Debugging

- Weighted combo `503 all_targets_cooling_down` ଉତ୍ତର ଦିଏ (`Retry-After` ସେଟ୍ ହୋଇଥାଏ, `diagnostics.excluded`ରେ `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable` ସହିତ ପ୍ରତ୍ୟେକ target ତାଲିକାଭୁକ୍ତ ହୋଇଥାଏ) → poolଟି configured ଏବଂ connected ଅଛି, କିନ୍ତୁ resilience timer ଯୋଗୁଁ ପ୍ରତ୍ୟେକ targetକୁ କେବଳ exclude କରାଯାଇଛି; `[COMBO] Weighted selection: every target excluded before dispatch — …` warningରେ କାରଣଗୁଡ଼ିକ ଏବଂ ଅବଶିଷ୍ଟ seconds ଦିଆଯାଇଥାଏ। ସେହି comboରୁ ଆସୁଥିବା `404 no_executable_targets`ର ଅର୍ଥ ହେଉଛି କୌଣସି resilience timer ସମ୍ପୃକ୍ତ ନଥିଲା (ଚଳାଇବା ପାଇଁ କିଛି ନଥିଲା, କିମ୍ବା ପ୍ରତ୍ୟେକ account availability probeରେ ବିଫଳ ହୋଇଥିଲା)। `targetResolution.ts`ରୁ ସଂଗ୍ରହ କରାଯାଇଥିବା exclusions ଆଧାରରେ `open-sse/services/combo/pinRecovery.ts`ରେ ଏହା ନିର୍ମିତ ହୋଇଛି।
- କୌଣସି provider ପାଇଁ ସମସ୍ତ key skip ହୋଇଗଲେ → circuit breaker state ଏବଂ ପ୍ରତ୍ୟେକ connectionର `rateLimitedUntil`/`testStatus` ଉଭୟ ଯାଞ୍ଚ କରନ୍ତୁ।
- reset window ପରେ provider ସ୍ଥାୟୀ ଭାବେ excluded ହେଲେ → `getStatus()`/`canExecute()` ପରିବର୍ତ୍ତେ raw `state` ପଢ଼ୁଥିବା code ଯାଞ୍ଚ କରନ୍ତୁ।
- ଗୋଟିଏ key ବିଫଳ ହେଲେ, ଅନ୍ୟଗୁଡ଼ିକ କାମ କରିବା ଉଚିତ → circuit breaker ଠାରୁ connection cooldownକୁ ଅଗ୍ରାଧିକାର ଦିଅନ୍ତୁ।
- କେବଳ ଗୋଟିଏ model ବିଫଳ ହେଲେ → connection cooldown ଠାରୁ model lockoutକୁ ଅଗ୍ରାଧିକାର ଦିଅନ୍ତୁ।
- state ସ୍ୱୟଂ ପୁନରୁଦ୍ଧାର ହେବା ଉଚିତ କିନ୍ତୁ ହେଉନାହିଁ → future timestamp ସହିତ expired stateକୁ refresh କରୁଥିବା read path ଯାଞ୍ଚ କରନ୍ତୁ। Permanent statuses ପାଇଁ manual changes ଆବଶ୍ୟକ।

---

## Runtime state — agent quick reference

> `AGENTS.md` → "Resilience Runtime State" (PR #12743) ରୁ ଅବିକଳ ଭାବେ ନିଆଯାଇଛି, ଯାହାଦ୍ୱାରା agent
> guideଟି 40k context budget ମଧ୍ୟରେ ରହିପାରିବ। ଏହା ଉପରୋକ୍ତ
> sectionsଗୁଡ଼ିକର ସଂକ୍ଷିପ୍ତ, agent-facing ଦୃଷ୍ଟିକୋଣ; numbered sectionsଗୁଡ଼ିକ ସମ୍ପୂର୍ଣ୍ଣ reference ଭାବେ ରହିଛି।

OmniRouteରେ ତିନୋଟି ସମ୍ପର୍କିତ କିନ୍ତୁ ପୃଥକ temporary-failure mechanism ଅଛି। Routing behavior debug କରିବାବେଳେ ସେମାନଙ୍କର
scopeକୁ ପୃଥକ ରଖନ୍ତୁ। ଏକ ନଜରରେ ମାନଚିତ୍ର ପାଇଁ
[3-layer resilience diagram](../diagrams/exported/resilience-3layers.svg)
(source: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
ଦେଖନ୍ତୁ।

### Provider Circuit Breaker

**Scope**: ସମ୍ପୂର୍ଣ୍ଣ provider, ଯଥା `glm`, `openai`, `anthropic`।

**Purpose**: upstream/service levelରେ ବାରମ୍ବାର ବିଫଳ ହେଉଥିବା providerକୁ traffic ପଠାଇବା ବନ୍ଦ କରିବା, ଯାହାଦ୍ୱାରା ଗୋଟିଏ unhealthy provider ପ୍ରତ୍ୟେକ requestକୁ ଧୀର କରିନପାରେ।

**Implementation**:

- Core class: `src/shared/utils/circuitBreaker.ts`
- Chat gate/execution wiring: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- Runtime status API: `src/app/api/monitoring/health/route.ts`
- Shared wrappers: `open-sse/services/accountFallback.ts`
- Persisted state table: `domain_circuit_breakers`

**States** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: ସାଧାରଣ traffic ଅନୁମୋଦିତ।
- `DEGRADED`: early-warning band — failures degradation threshold ଅତିକ୍ରମ କରିଛି କିନ୍ତୁ breaker threshold ଏପର୍ଯ୍ୟନ୍ତ ନୁହେଁ; traffic ଚାଲୁ ରହେ, dashboards warning ଦେଖାଏ। ଏକ valid connection test କିମ୍ବା କୌଣସି ନୂଆ failure ବିନା ଏକ quiet window ଏହାକୁ `CLOSED`କୁ ଫେରାଇଦିଏ
  (`docs/architecture/RESILIENCE_GUIDE.md`ରେ window ଦିଆଯାଇଛି)।
- `OPEN`: provider ସାମୟିକ ଭାବେ blocked; callers ଏକ provider-circuit-open response ପାଆନ୍ତି କିମ୍ବା combo routing ଅନ୍ୟ targetକୁ skip କରେ।
- `HALF_OPEN`: reset timeout ଶେଷ ହୋଇଛି; ଏକ probe requestକୁ ଅନୁମତି ଦିଏ। ସଫଳତା breakerକୁ close କରେ, ବିଫଳତା ଏହାକୁ ପୁଣି open କରେ।

**Defaults** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, `src/lib/resilience/settings.ts`ରେ `DEFAULT_RESILIENCE_SETTINGS.providerBreaker` ମାଧ୍ୟମରେ ବ୍ୟବହୃତ → `src/sse/handlers/chatHelpers.ts`ରେ `getCircuitBreaker(provider, …)`)। ସମ୍ପୂର୍ଣ୍ଣ-provider breaker `circuitBreakerThreshold` / `circuitBreakerReset` ଉପରେ ଚାଲେ:

| Profile | degrades at | opens at (`circuitBreakerThreshold`) | reset (`circuitBreakerReset`) |
| ------- | ----------: | -----------------------------------: | ----------------------------: |
| OAuth   |         `5` |                                  `8` |                         `60s` |
| API key |         `7` |                                 `12` |                         `30s` |
| Local   |   (derived) |                                  `2` |                         `15s` |

`PROVIDER_PROFILES` `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (15/30/5 min) ଏବଂ `providerCooldownMs` (5/10/1 min) ମଧ୍ୟ ନିର୍ଦ୍ଧାରଣ କରେ: ଏଗୁଡ଼ିକ
**opt-in global Provider Cooldown** (`PROVIDER_COOLDOWN_ENABLED`, default
off)ର **window gate**କୁ ଚାଳନା କରେ — `open-sse/services/providerCooldownTracker.ts`ର provider-level entry କେବଳ ସେତେବେଳେ cooling ଭାବେ ଗଣନା ହୁଏ ଯେତେବେଳେ `providerFailureWindowMs` ମଧ୍ୟରେ `providerFailureThreshold` failures ହୁଏ, ଏବଂ ତାପରେ `providerCooldownMs` ପର୍ଯ୍ୟନ୍ତ cool ହୁଏ। ଏଗୁଡ଼ିକ live breakerର thresholds ନୁହେଁ — breaker behavior ଆଶା କରି ଏଗୁଡ଼ିକୁ tune କରନ୍ତୁ ନାହିଁ। ପ୍ରତ୍ୟେକ default `OMNIROUTE_PROVIDER_BREAKER_*` ଏବଂ `OMNIROUTE_CIRCUIT_BREAKER_*` env vars ମାଧ୍ୟମରେ override କରାଯାଇପାରେ; runtime-accurate reference table `docs/architecture/RESILIENCE_GUIDE.md`ରେ ରହିଛି।

କେବଳ provider-level failure statuses ହିଁ provider breakerକୁ trip କରିବା ଉଚିତ:

```ts
(408, 500, 502, 503, 504);
```

ସାଧାରଣ account/key/model errors, ଯଥା ଅଧିକାଂଶ
`401`, `403`, କିମ୍ବା `429` cases ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ-provider breakerକୁ trip କରନ୍ତୁ ନାହିଁ। ସେଗୁଡ଼ିକ ସାଧାରଣତଃ
connection cooldown କିମ୍ବା model lockoutର ଅଂଶ ହୋଇଥାଏ। ଏକ generic API-key provider `403` recoverable ହେବା ଉଚିତ, ଯେପର୍ଯ୍ୟନ୍ତ ଏହା terminal provider/account error ଭାବେ classified ହୋଇନଥାଏ।

ବ୍ରେକର୍ ଲେଜି ରିକଭରି (lazy recovery) ବ୍ୟବହାର କରେ, ବ୍ୟାକଗ୍ରାଉଣ୍ଡ ଟାଇମର ନୁହେଁ। ଯେତେବେଳେ `OPEN` ସମାପ୍ତ ହୁଏ, `getStatus()`, `canExecute()`, ଏବଂ `getRetryAfterMs()` ଭଳି ରିଡ୍ଗୁଡ଼ିକ ସ୍ଥିତିକୁ `HALF_OPEN`କୁ ରିଫ୍ରେସ୍ କରନ୍ତି, ଯାହା ଫଳରେ ଡ୍ୟାସବୋର୍ଡ ଏବଂ କମ୍ବୋ କ୍ୟାଣ୍ଡିଡେଟ୍ ବିଲ୍ଡରମାନେ ସମାପ୍ତ ହୋଇଥିବା ପ୍ରୋଭାଇଡରକୁ ଚିରଦିନ ବାଦ୍ ଦେଇ ରହନ୍ତି ନାହିଁ।

### କନେକସନ୍ କୁଲଡାଉନ୍

**ପରିସର**: ଗୋଟିଏ ପ୍ରୋଭାଇଡର କନେକସନ୍/ଆକାଉଣ୍ଟ/କି।

**ଉଦ୍ଦେଶ୍ୟ**: ସମାନ ପ୍ରୋଭାଇଡରର ଅନ୍ୟ କନେକସନଗୁଡ଼ିକୁ ଅନୁରୋଧଗୁଡ଼ିକୁ ସେବା ଦେବା ଜାରି ରଖିବାକୁ ଅନୁମତି ଦେଇ ଗୋଟିଏ ଖରାପ କି/ଆକାଉଣ୍ଟକୁ ଅସ୍ଥାୟୀ ଭାବେ ଏଡ଼ାଇ ଦେବା।

**କାର୍ଯ୍ୟକାରିତା**:

- ଲେଖା/ଅଦ୍ୟତନ ପଥ: `src/sse/services/auth.ts::markAccountUnavailable()`
- ଆକାଉଣ୍ଟ ଚୟନ/ଫିଲ୍ଟରିଂ: `src/sse/services/auth.ts::getProviderCredentials...`
- କୁଲଡାଉନ୍ ଗଣନା: `open-sse/services/accountFallback.ts::checkFallbackError()`
- ସେଟିଂସ୍: `src/lib/resilience/settings.ts`

ପ୍ରୋଭାଇଡର କନେକସନଗୁଡ଼ିକରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଫିଲ୍ଡଗୁଡ଼ିକ:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

ଆକାଉଣ୍ଟ ଚୟନ ସମୟରେ, ଗୋଟିଏ କନେକସନ୍ ଏଡ଼ାଯାଏ ଯେତେବେଳେ:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

କୁଲଡାଉନଗୁଡ଼ିକ ମଧ୍ୟ ଲେଜି ଅଟେ: ଯେତେବେଳେ `rateLimitedUntil` ଅତୀତରେ ରହେ, କନେକସନ୍ ପୁଣି ଯୋଗ୍ୟ ହୋଇଯାଏ। ସଫଳ ବ୍ୟବହାର ପରେ, `clearAccountError()` `testStatus`, `rateLimitedUntil`, ଏରର୍ ଫିଲ୍ଡଗୁଡ଼ିକୁ ଏବଂ `backoffLevel`କୁ ଖାଲି କରେ।

ଡିଫଲ୍ଟ କନେକସନ୍ କୁଲଡାଉନ୍ ଆଚରଣ:

- OAuth ବେସ୍ କୁଲଡାଉନ୍: `5s`।
- API-key ବେସ୍ କୁଲଡାଉନ୍: `3s`।
- API-key `429` ଉପଲବ୍ଧ ଥିବାବେଳେ ଅପଷ୍ଟ୍ରିମ୍ ରିଟ୍ରାଏ ସୂଚନାଗୁଡ଼ିକୁ (`Retry-After`, ରିସେଟ୍ ହେଡର, କିମ୍ବା ପାର୍ସ ଯୋଗ୍ୟ ରିସେଟ୍ ଟେକ୍ସଟ) ପ୍ରାଥମିକତା ଦେବା ଉଚିତ।
- ବାରମ୍ବାର ପୁନରୁଦ୍ଧାର ଯୋଗ୍ୟ ବିଫଳତାଗୁଡ଼ିକ ଏକ୍ସପୋନେନସିଆଲ୍ ବ୍ୟାକଅଫ୍ ବ୍ୟବହାର କରନ୍ତି:

```ts
baseCooldownMs * 2 ** failureIndex;
```

ଆଣ୍ଟି-ଥଣ୍ଡରିଂ-ହାର୍ଡ ଗାର୍ଡ ସମାନ କନେକସନରେ ଏକାକାଳୀନ ବିଫଳତାଗୁଡ଼ିକୁ ବାରମ୍ବାର କୁଲଡାଉନ୍ ବଢ଼ାଇବାରୁ କିମ୍ବା `backoffLevel`କୁ ଦୁଇଥର ବୃଦ୍ଧି କରିବାରୁ ରୋକେ।

ଟର୍ମିନାଲ୍ ସ୍ଥିତିଗୁଡ଼ିକ କୁଲଡାଉନ୍ ନୁହଁନ୍ତି। `banned`, `expired` (ଯାହା `EXPIRED_RETRY_MAX` ମାଧ୍ୟମରେ N ସୀମିତ ପୁନଃପ୍ରୟାସ ପରେ ହିଁ ଟର୍ମିନାଲ୍ ହୁଏ), ଏବଂ `credits_exhausted` କ୍ରେଡେନସିଆଲ/ସେଟିଂସ୍ ପରିବର୍ତ୍ତନ ନ ହେବା ପର୍ଯ୍ୟନ୍ତ କିମ୍ବା ଜଣେ ଅପରେଟର ସେଗୁଡ଼ିକୁ ରିସେଟ୍ ନ କରିବା ପର୍ଯ୍ୟନ୍ତ ଅନୁପଲବ୍ଧ ରହିବା ଉଦ୍ଦିଷ୍ଟ। ଟର୍ମିନାଲ୍ ସ୍ଥିତିଗୁଡ଼ିକୁ କ୍ଷଣସ୍ଥାୟୀ କୁଲଡାଉନ୍ ସ୍ଥିତି ସହିତ ଓଭରରାଇଟ୍ କରନ୍ତୁ ନାହିଁ।

### ମଡେଲ୍ ଲକଆଉଟ୍

**ପରିସର**: ପ୍ରୋଭାଇଡର + କନେକସନ୍ + ମଡେଲ୍।

**ଉଦ୍ଦେଶ୍ୟ**: ଯେତେବେଳେ ସେହି କନେକସନ୍ ପାଇଁ କେବଳ ଗୋଟିଏ ମଡେଲ୍ ଅନୁପଲବ୍ଧ କିମ୍ବା କୋଟା-ସୀମିତ ଥାଏ, ସେତେବେଳେ ସମଗ୍ର କନେକସନକୁ ଅକ୍ଷମ କରିବା ଏଡ଼ାଇବା।

ଉଦାହରଣଗୁଡ଼ିକ:

- ପ୍ରତି-ମଡେଲ୍ କୋଟା ପ୍ରୋଭାଇଡରମାନେ `429` ଫେରାଉଥିବା।
- ଗୋଟିଏ ହଜିଯାଇଥିବା ମଡେଲ୍ ପାଇଁ `404` ଫେରାଉଥିବା ସ୍ଥାନୀୟ ପ୍ରୋଭାଇଡର।
- ଚୟନିତ Grok ମୋଡ୍ଗୁଡ଼ିକ ଭଳି ପ୍ରୋଭାଇଡର-ନିର୍ଦ୍ଦିଷ୍ଟ ମୋଡ୍/ମଡେଲ୍ ଅନୁମତି ବିଫଳତାଗୁଡ଼ିକ।

ମଡେଲ୍ ଲକଆଉଟ୍ `open-sse/services/accountFallback.ts`ରେ ରହେ ଏବଂ ସମାନ କନେକସନକୁ ଅନ୍ୟ ମଡେଲଗୁଡ଼ିକୁ ସେବା ଦେବା ଜାରି ରଖିବାକୁ ଦେଏ।

### ଡିବଗିଂ ନିର୍ଦ୍ଦେଶନା

- ଯଦି ଏକ ପ୍ରୋଭାଇଡର ପାଇଁ ସମସ୍ତ କି ଏଡ଼ାଯାଏ, ପ୍ରୋଭାଇଡର ବ୍ରେକର୍ ସ୍ଥିତି ଏବଂ ପ୍ରତ୍ୟେକ କନେକସନର `rateLimitedUntil`/`testStatus` ଉଭୟକୁ ଯାଞ୍ଚ କରନ୍ତୁ।
- ଯଦି ରିସେଟ୍ ୱିଣ୍ଡୋ ପରେ ପ୍ରୋଭାଇଡର ସ୍ଥାୟୀ ଭାବେ ବାଦ୍ ପଡ଼ିଥିବା ଜଣାଯାଏ, କୋଡ୍ `getStatus()`/`canExecute()` ବ୍ୟବହାର କରିବା ପରିବର୍ତ୍ତେ କଞ୍ଚା `state` ପଢ଼ୁଛି କି ନାହିଁ ଯାଞ୍ଚ କରନ୍ତୁ।
- ଯଦି ଗୋଟିଏ ପ୍ରୋଭାଇଡର କି ବିଫଳ ହୁଏ କିନ୍ତୁ ଅନ୍ୟମାନେ କାମ କରିବା ଉଚିତ, ତେବେ ପ୍ରୋଭାଇଡର ବ୍ରେକର୍ ପରିବର୍ତ୍ତେ କନେକସନ୍ କୁଲଡାଉନ୍କୁ ପ୍ରାଥମିକତା ଦିଅନ୍ତୁ।
- ଯଦି କେବଳ ଗୋଟିଏ ମଡେଲ୍ ବିଫଳ ହୁଏ, ତେବେ କନେକସନ୍ କୁଲଡାଉନ୍ ପରିବର୍ତ୍ତେ ମଡେଲ୍ ଲକଆଉଟ୍କୁ ପ୍ରାଥମିକତା ଦିଅନ୍ତୁ।
- ଯଦି ଏକ ସ୍ଥିତି ସ୍ୱୟଂ-ପୁନରୁଦ୍ଧାର ହେବା ଉଚିତ, ତେବେ ଏହାର ଏକ ଭବିଷ୍ୟତ ଟାଇମଷ୍ଟାମ୍ପ/ରିସେଟ୍ ଟାଇମଆଉଟ୍ ଏବଂ ଏକ ରିଡ୍ ପାଥ୍ ଥିବା ଉଚିତ ଯାହା ସମାପ୍ତ ସ୍ଥିତିକୁ ରିଫ୍ରେସ୍ କରେ। ସ୍ଥାୟୀ ସ୍ଥିତିଗୁଡ଼ିକ ମାନୁଆଲ୍ କ୍ରେଡେନସିଆଲ କିମ୍ବା କନଫିଗ୍ ପରିବର୍ତ୍ତନ ଆବଶ୍ୟକ କରନ୍ତି।

---

## TLS ଫିଙ୍ଗରପ୍ରିଣ୍ଟିଂ ଏବଂ ଷ୍ଟେଲ୍ଥ

ପ୍ରୋଭାଇଡର-ନିର୍ଦ୍ଦିଷ୍ଟ ଷ୍ଟେଲ୍ଥ (JA3/JA4, CCH, ଅବଫସ୍କେସନ୍) ପୃଥକ ଭାବେ ଡକ୍ୟୁମେଣ୍ଟ କରାଯାଇଛି — `docs/security/STEALTH_GUIDE.md` ଦେଖନ୍ତୁ (git; `/docs` ଭିତରକୁ କମ୍ପାଇଲ ହୋଇନାହିଁ)।

---

## ରେଜିଲିଏନ୍ସ ଟେଷ୍ଟିଂ (Phase 8 · Block C)

ରେଜିଲିଏନ୍ସ ଲଜିକ୍ ପାଇଁ ୟୁନିଟ୍ ଟେଷ୍ଟଗୁଡ଼ିକ ବ୍ୟତୀତ, ତିନୋଟି ଟେଷ୍ଟ ପ୍ରକୃତ ଷ୍ଟ୍ରେସ/ବିଫଳତା ପରିସ୍ଥିତି ଅଧୀନରେ ରନ୍ଟାଇମ୍କୁ ପରୀକ୍ଷା କରେ (ସମସ୍ତ integration/nightly — କୌଣସିଟି PR ଅଟକାଏ ନାହିଁ):

| ଟେଷ୍ଟ       | କଣ କରେ                                                                                                                                                                                              | ଚଲାଇବା                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Chaos       | ନକଲି-ଅପଷ୍ଟ୍ରିମ୍ ନୋଡ୍ ପ୍ରକୃତ latency/reset/timeout/503 ଇଞ୍ଜେକ୍ଟ କରେ; ସର୍କିଟ ବ୍ରେକର ଖୋଲେ/ପୁନରୁଦ୍ଧାର ହୁଏ ଏବଂ `checkFallbackError` 503 କୁ ପୁନରୁଦ୍ଧାରଯୋଗ୍ୟ fallback ଭାବେ ଶ୍ରେଣୀଭୁକ୍ତ କରେ ବୋଲି ଯାଞ୍ଚ କରେ। | `RUN_CHAOS_INT=1 npm run test:chaos`     |
| Heap-growth | `--expose-gc` ଅଧୀନରେ ପ୍ରତି `createSSEStream` ପାଇଁ ~500 ଷ୍ଟ୍ରିମ୍; heap ସୀମା ଅତିକ୍ରମ କଲେ ବିଫଳ ହୁଏ (OOM guard #3069)।                                                                                  | `npm run test:heap`                      |
| k6 soak     | `/api/monitoring/health` ବିରୁଦ୍ଧରେ ନିରନ୍ତର ଲୋଡ୍; p95/error ଥ୍ରେସହୋଲ୍ଡ।                                                                                                                              | `k6 run tests/load/k6-soak.js` (nightly) |

`.github/workflows/nightly-resilience.yml` (cron + dispatch) ଦ୍ୱାରା ପରିଚାଳିତ। ଡିଫଲ୍ଟ `test:integration` ରେ, chaos ଏବଂ heap ସ୍ୱୟଂ-ସ୍କିପ୍ ହୁଏ (`RUN_CHAOS_INT`/`--expose-gc` ବିନା)।

---

## ଆହୁରି ଦେଖନ୍ତୁ

- [ଆର୍କିଟେକ୍ଚର ଗାଇଡ୍](./ARCHITECTURE.md) — ସିଷ୍ଟମ୍ ଆର୍କିଟେକ୍ଚର ଏବଂ ଆଭ୍ୟନ୍ତରୀଣ ବିଷୟବସ୍ତୁ
- [ବ୍ୟବହାରକାରୀ ଗାଇଡ୍](../guides/USER_GUIDE.md) — ପ୍ରୋଭାଇଡର, କମ୍ବୋ, CLI ଇଣ୍ଟିଗ୍ରେସନ୍
- [ଅଟୋ-କମ୍ବୋ ଇଞ୍ଜିନ୍](../routing/AUTO-COMBO.md) — 16-ଫ୍ୟାକ୍ଟର ସ୍କୋରିଂ, ମୋଡ୍ ପ୍ୟାକ୍
