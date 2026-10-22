# Resilience Guide (नेपाली)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute मा तीनवटा फरक तर परस्पर सम्बन्धित रिजिलियन्स संयन्त्रहरू छन्। प्रत्येकको दायरा र उद्देश्य फरक छ। राउटिङ व्यवहार डिबग गर्दा यिनीहरूलाई अलग राख्नुहोस्।

![3-तह रिजिलियन्स मोडेल](../diagrams/exported/resilience-3layers.svg)

> स्रोत: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. प्रोभाइडर सर्किट ब्रेकर

**दायरा:** सम्पूर्ण प्रोभाइडर (जस्तै, `glm`, `openai`, `anthropic`)।

**उद्देश्य:** अपस्ट्रिम/सेवा स्तरमा बारम्बार असफल भइरहेको प्रोभाइडरमा ट्राफिक पठाउन रोक्नु।

**कार्यान्वयन:**

- मुख्य क्लास: `src/shared/utils/circuitBreaker.ts`
- वायरिङ: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- स्थिति API: `GET /api/monitoring/health`
- रिसेट API: `POST /api/resilience/reset`
- र्यापरहरू: `open-sse/services/accountFallback.ts`
- DB तालिका: `domain_circuit_breakers`

**अवस्थाहरू:**

- `CLOSED` — सामान्य ट्राफिक अनुमति छ
- `DEGRADED` — ट्राफिक अझै अनुमति छ, तर बढेका प्रोभाइडर असफलताहरू ट्र्याक गरिँदैछ; पर्याप्त सफलतामा, मान्य कनेक्सन परीक्षणमा, वा अन्तिम असफलता प्रकारको लागि सबैभन्दा लामो `OPEN` होल्डपछि (यसको `cooldownByKind` मान, नभए `resetTimeout`, × `maxBackoffMultiplier`, कम्तीमा एउटा कुलडाउन) नयाँ असफलता बिना `CLOSED` मा फर्कन्छ
- `OPEN` — प्रोभाइडर अस्थायी रूपमा ब्लक गरिएको; कम्बो राउटिङले यसलाई छोड्छ
- `HALF_OPEN` — रिसेट समय सकिएको; प्रोब अनुरोध अनुमति छ

**कन्फिगर गर्न मिल्ने पूर्वनिर्धारित मानहरू (`open-sse/config/constants.ts`, Dashboard → Settings → Resilience मा देखाइएको):**

| वर्ग    | Degraded हुने | खुल्ने (Opens) | रिसेट समय |
| ------- | ------------- | -------------- | --------- |
| OAuth   | 5 असफलता      | 8 असफलता       | 60s       |
| API-key | 7 असफलता      | 12 असफलता      | 30s       |
| Local   | व्युत्पन्न    | 2 असफलता       | 15s       |

`degradationThreshold` ले प्रोभाइडर कहिले `DEGRADED` मा प्रवेश गर्छ भनी नियन्त्रण गर्छ; `failureThreshold` ले कहिले खुल्छ र छोडिन्छ भनी नियन्त्रण गर्छ। Local प्रोभाइडर प्रोफाइलहरू अहिलेसम्म Resilience सेटिङ पेजमा देखाइएका छैनन्।

**ट्रिप कोडहरू:** केवल प्रोभाइडर-स्तरका स्थितिहरू `[408, 500, 502, 503, 504]`। खाता-स्तरका त्रुटिहरूका लागि ट्रिप नगर्नुहोस् (अधिकांश 401/403/429 — ती कुलडाउन वा लकआउट अन्तर्गत पर्छन्)।

**लेजी रिकभरी:** `OPEN` को समय सकिएपछि, `getStatus()`, `canExecute()`, `getRetryAfterMs()` ले अवस्था `HALF_OPEN` मा ताजा गर्छन्। उही रिडहरू (र अर्को असफलता) ले पुरानो `DEGRADED` लाई `CLOSED` मा घटाउँछन्। ब्याकग्राउन्ड टाइमर आवश्यक छैन।

---

### अप्ट-इन ग्लोबल प्रोभाइडर कुलडाउन (विन्डो गेट)

चौथो, **अप्ट-इन** तह (`PROVIDER_COOLDOWN_ENABLED`, पूर्वनिर्धारित **बन्द**) ले असफल प्रोभाइडरहरूको क्रस-अनुरोध स्मृति `open-sse/services/providerCooldownTracker.ts` मा राख्छ, जुन कम्बो लक्ष्य रिजोलुसनले सन्दर्भ गर्छ, जसले गर्दा लगातारका कम्बो अनुरोधहरूले भर्खरै असफल भएको प्रोभाइडरलाई फेरि-फेरि हिँड्दैनन्। प्रोभाइडर-स्तरका एन्ट्रीहरूले `PROVIDER_PROFILES` विन्डो गेट मान्छन्:

| प्रोफाइल | ट्रिप हुने (`providerFailureThreshold`) | भित्र (`providerFailureWindowMs`) | कुल हुने (`providerCooldownMs`) |
| -------- | --------------------------------------: | --------------------------------: | ------------------------------: |
| OAuth    |                                    `10` |                           `15min` |                          `5min` |
| API key  |                                    `15` |                           `30min` |                         `10min` |

थ्रेसहोल्डभन्दा तल प्रोभाइडरलाई कुलिङमा रहेको मानिँदैन; सफलताले विन्डो खाली गर्छ। कनेक्सन-स्तरका एन्ट्रीहरू (`provider:connectionId`) ले यसको सट्टा घातांकीय `minRetryCooldownMs → maxRetryCooldownMs` ब्याकअफ राख्छन्। ओभरराइडहरू:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`।
रिग्रेसन गार्ड: `tests/unit/provider-cooldown-window-gate.test.ts`।

## 2. जडान कुलडाउन (Connection Cooldown)

**दायरा:** एकल प्रोभाइडर जडान/खाता/की।

**उद्देश्य:** एउटा खराब की लाई छोड्ने, जबकि उही प्रोभाइडरका अन्य जडानहरूले सेवा दिइरहन्छन्।

**कार्यान्वयन:**

- अनुपलब्ध चिन्ह लगाउने: `src/sse/services/auth.ts::markAccountUnavailable()`
- चयन: उही फाइलमा `getProviderCredentials*`
- कुलडाउन गणना: `open-sse/services/accountFallback.ts::checkFallbackError()`
- सेटिङहरू: `src/lib/resilience/settings.ts`

**प्रत्येक जडानका फिल्डहरू:**

- `rateLimitedUntil` — कुलडाउन सकिने समयसम्मको टाइमस्ट्याम्प
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — घातांकीय ब्याकअफ काउन्टर

**पूर्वनिर्धारित कुलडाउनहरू:**

- OAuth आधार: 5s
- API-key आधार: 3s
- API-key 429: अपस्ट्रिम `Retry-After`/रिसेट हेडरहरू/पार्स गर्न मिल्ने रिसेट पाठलाई प्राथमिकता
- ब्याकअफ: `baseCooldownMs * 2 ** failureIndex`

**एन्टि-थन्डरिङ-हर्ड सुरक्षा:** एकैसाथ हुने असफलताहरूले कुलडाउन अत्यधिक लम्ब्याउने वा `backoffLevel` दोहोरो बढाउने कुरा रोक्छ।

**Concurrency-limit 429 हरू ब्याकअफ सिँढीमा चढ्दैनन्।** जुन `429` को body ले
concurrency limit रिपोर्ट गर्छ ("too many concurrent requests", "concurrency limit", "parallel request
limit", GLM `并发数过高`), त्यसको अर्थ खाता स्वस्थ छ तर व्यस्त छ भन्ने हो।
`checkFallbackError()` ले कारण `concurrency_limited` फर्काउँछ: अहिले नै अर्को
जडानतर्फ फेलओभर गर्ने, यस जडानलाई निश्चित `CONCURRENCY_LIMIT_COOLDOWN_MS` (1s) वा
अपस्ट्रिम रिट्राइ संकेतअनुसार कुल गर्ने, `backoffLevel` अपरिवर्तित राख्ने, र `skipProviderBreaker`
सेट गर्ने। स्पष्ट quota body ले अझै पनि जित्छ, त्यसैले quota ढाँचासँग पनि मिल्ने body
quota निर्णय नै रहन्छ। पत्ता लगाउने: `src/shared/utils/classify429.ts` मा
`looksLikeConcurrencyLimit()`; निर्णय: `open-sse/services/accountFallback/concurrencyLimit429.ts`।
`classify429()` (ब्रेकरको `FailureKind`) अपरिवर्तित छ र यी body हरूका लागि अझै पनि
`rate_limit` नै पढ्छ।

**स्ट्रिम सामग्री स्टलहरूले खाता कुल गर्दैन।** जब content-stall वाचडगले
(`open-sse/utils/streamHandler.ts`) समयभित्र कुनै मोडेल आउटपुट नपठाएको स्ट्रिमलाई
छोडिदिन्छ, `markAccountUnavailable()` ले जडानमा त्रुटि रेकर्ड गर्छ तर कुनै
कुलडाउन सेट गर्दैन: त्यो स्टल त्यही अनुरोधसँग सम्बन्धित हुन्छ, प्रायः अझै आउटपुट
नदिएको लामो reasoning टर्न। अपरेटरहरूले `resilienceSettings.streamStallCooldown.enabled`
(पूर्वनिर्धारित `false`) बाट यो सुविधा फेरि सक्षम गर्न सक्छन्।

**Reasoning फ्रेमहरूले content-stall बजेट पुनः सुरु गर्छन्।** reasoning मोडेलले
पहिलो देखिने टोकनअघि केही मिनेटसम्म सोच्न सक्छ: Claude ले `thinking_delta` फ्रेमहरू स्ट्रिम गर्छ जसको
thinking पाठ खाली हुन सक्छ, र Responses API ले एकपछि अर्को reasoning आइटम स्ट्रिम
गर्छ। `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) ले
यी फ्रेमहरू चिन्छ, र वाचडगले प्रत्येक फ्रेममा आफ्नो बजेट पुनः सुरु गर्छ, टर्न
रद्द गर्ने सट्टा। तर यी अझै पनि मोडेल आउटपुट होइनन्, त्यसैले reasoning मात्रसँग सकिएको
टर्न अझै खाली नै रिपोर्ट हुन्छ, र reasoning रोकिएर heartbeat मात्र पठाउने
टर्नले अझै पनि वाचडग ट्रिगर गर्छ।

Kiro को non-empty signature भएका बाइनरी `reasoningContentEvent` फ्रेमहरूले यो
reasoning गतिविधिलाई executor मार्फत खाली `reasoning_content` delta को रूपमा
जोगाउँछन्। signature फर्वार्ड गरिँदैन। मेटाडाटा, अपूर्ण फ्रेमहरू र खाली signature हरूले
content बजेट पुनः सुरु गर्दैनन्; स्वतन्त्र active-stream टाइमआउट र क्लाइन्ट
रद्दीकरण अझै लागू हुन्छ (`open-sse/executors/kiro/reasoning.ts`)।

**टर्मिनल अवस्थाहरू (कुलडाउन होइनन्):**

- `banned` — banned-keyword / account-ban पत्ता लगाउने प्रणालीले सेट गर्छ (हेर्नुहोस् [BAN_DETECTION](../security/BAN_DETECTION.md)), र लगातार तीन अपस्ट्रिम per-request अस्वीकृतिहरूले पनि (`request_rejected`, जस्तै Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); एउटा मात्र अस्वीकृतिले जडानलाई कुलडाउन मात्र गर्छ
- `expired` (सीमित रिट्राइहरूपछि टर्मिनलतर्फ सर्छ — `EXPIRED_RETRY_MAX = 3` घातांकीय ब्याकअफसहित — जसले गर्दा अस्थायी OAuth त्रुटिहरू खाता स्थायी रूपमा निष्क्रिय हुनुअघि आफैं निको हुन सक्छन्)
- `credits_exhausted`

यी अवस्थाहरू क्रेडेन्सियल परिवर्तन नभएसम्म वा अपरेटरले रिसेट नगरेसम्म कायम रहन्छन्। टर्मिनल अवस्थाहरूलाई अस्थायी कुलडाउन अवस्थाले ओभरराइट नगर्नुहोस्।

**आलसी रिकभरी (Lazy recovery):** `rateLimitedUntil` बितेपछि, जडान फेरि योग्य हुन्छ। सफल प्रयोगमा, `clearAccountError()` ले सबै त्रुटि फिल्डहरू खाली गर्छ।

### Claude OAuth प्रयोग भित्ता (usage wall): कम-प्राथमिकता लेन + session-limit रिसेट

**दायरा:** एउटा Claude सदस्यता (OAuth) जडान। दुवै सुविधाहरू **प्रत्येक जडानमा
opt-in** हुन् (Edit connection → Claude खण्ड → `providerSpecificData` मा
`lowPriorityMode` / `autoLimitReset`, दुवै पूर्वनिर्धारित रूपमा बन्द) र यी Claude Code को `/low-priority` र
`/limit-reset` कमान्डहरूको प्रतिबिम्ब हुन् (wire contract Claude Code 2.1.263 बाट क्याप्चर गरिएको)।

**कार्यान्वयन:**

- स्टेट मेसिन + प्रतिक्रिया वर्गीकरण: `open-sse/services/claudeLowPriority.ts`
- रिसेट स्थिति/क्लेम क्लाइन्ट: `open-sse/services/claudeLimitReset.ts`
- Executor हुक (हेडर इन्जेक्सन + उही-खाता रिट्राइ): `open-sse/executors/base.ts::execute()`
- Opt-in पर्सिस्टेन्स: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**ट्रिगर:** 5-घण्टे प्रयोग भित्ता — एउटा `429` जसको हेडरमा
`anthropic-ratelimit-unified-status: rejected` हुन्छ र, खाता योग्य भएमा,
`anthropic-ratelimit-unified-slow-offer: treatment` हुन्छ। त्यो पहिलो भित्ता
429 अघि केही पनि पठाइँदैन; unified हेडर नभएको burst 429 सामान्य कुलडाउन बाटोबाट जान्छ।

**कम-प्राथमिकता लेन** (`lowPriorityMode`):

- वाल 429 मा एक्जिक्युटरले प्रस्ताव स्वीकार गर्छ र तुरुन्तै `anthropic-usage-limit: slow` सहित **उही** खातामा पुनः प्रयास गर्छ; लेन घोषित `anthropic-ratelimit-unified-reset` (+60s ग्रेस) सम्म सक्रिय रहन्छ र त्यो विन्डोभित्रका हरेक अनुरोधमा हेडर रहन्छ। अन्तरक्षेपित 429 कहिल्यै `handleChatCore` सम्म पुग्दैन, त्यसैले कनेक्सनलाई कूलडाउनमा राखिँदैन **छैन** र रोटेट पनि गरिँदैन।
- पछिल्ला प्रतिक्रियाहरूमा `anthropic-ratelimit-unified-slow-status`: `active` / `not_needed` ले लेन कायम राख्छन्; `slot_busy` (429) वा `529` ले सर्भरको `anthropic-ratelimit-unified-slow-retry-after` (पूर्वनिर्धारित 20s, क्ल्याम्प 5–600s, ±30% जिटर) पर्खेर पुनः प्रयास गर्छ, जुन `anthropic-ratelimit-unified-slow-max-wait` (पूर्वनिर्धारित 20 मिनेट, क्ल्याम्प 1 मिनेट–6 घण्टा) ले सीमाबद्ध गरेको हुन्छ — त्यसभन्दा बढीमा लेन समाप्त हुन्छ र 10-मिनेटको कूल-अफले पुनः स्वीकृति रोक्छ। प्रतीक्षा थप रूपमा अनुरोधको आफ्नै अपस्ट्रिम-सुरु टाइमआउट (`resolveFetchStartTimeout`, पूर्वनिर्धारित 10 मिनेट) मा बाँकी रहेको अवधिबाट 5 s मार्जिन घटाएर सीमित हुन्छ: त्यो सीमा नभएमा 20-मिनेटको पूर्वनिर्धारित max-wait अनुरोधभन्दा लामो हुनेछ र स्लिप पर्खाइकै बीचमा रद्द हुनेछ, जसले सुगम `max_wait` समाप्ति + कूल-अफको सट्टा `TimeoutError` देखाउँछ।
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, 5h-विन्डो रोलओभर, वा `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (जसले यसलाई कुनै पनि स्थितिमा `extra_usage` को रूपमा समाप्त गर्छ, किनकि भुक्तानी गरिएको ओभरेजले अब वाल समेट्छ) ले लेन समाप्त गर्छ; त्यसपछि प्रतिक्रिया सामान्य कूलडाउन मार्गमा बग्छ। `budget_exhausted` घोषित बजेट रिसेट (≤ 8 दिन) सम्म सम्झिएको रहन्छ।
- वाल जाँच एक्जिक्युटरको आफ्नै 400-द्वारा चालित इन्ट्रा-एटेम्प्ट पुनः प्रयासहरू (कन्टेक्स्ट सम्पादन, thinking/effort क्ल्याम्पहरू, प्याराम अटो-लर्न) पछि चल्छ, त्यसैले ती पुनः प्रयासहरूमध्ये कुनै एकमा मात्र देखिने वाल 429 पनि कूलडाउन मार्गमा नपुगी अन्तरक्षेपित नै हुन्छ।
- स्थिति प्रत्येक कनेक्सनका लागि इन-मेमोरी हुन्छ (रिस्टार्टले पुनः स्वीकार गर्न एक थप वाल 429 खर्च गर्छ)।

**सेसन-सीमा रिसेट** (`autoLimitReset`, दुवै सक्रिय हुँदा लेनअघि प्रयास गरिन्छ):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → `juniper_tide` ब्लक; जब `arm: "reset"` र `available: true` हुन्छ, `{ "program": "juniper_tide" }` सहित `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` (संगठन UUID `providerSpecificData.organizationUUID` बाट, बुटस्ट्र्याप फलब्याक)।
- `result: reset|not_limited` → अनुरोध पूर्ण गतिमा पुनः प्रयास गरिन्छ (slow हेडर बिना)। `already_used` / `not_offered` ले `next_available_at` मेमोइज गर्छ (पूर्वनिर्धारित एक हप्ता); कुनै पनि असफलताले 15 मिनेट ब्याक अफ गर्छ। रिसेट हप्तामा एक पटक मात्र हुन्छ र अझै पनि साप्ताहिक सीमामा गनिन्छ।

रेग्रेसन गार्डहरू: `tests/unit/claude-low-priority-mode.test.ts`, `tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`।

### सेसन एफिनिटी (#7274)

**दायरा:** एक क्लाइन्ट सेसन (`X-Session-Id` / `x-codex-session-id` / `x-omniroute-session` हेडर) एक कनेक्सनमा पिन गरिएको, **कुनै पनि** प्रोभाइडरका लागि।

**उद्देश्य:** बहु-टर्न एजेन्ट (Claude Code, aider, कस्टम एजेन्टहरू) लाई अनुरोधहरूपारि उही खातामा राख्ने, जसले प्रति-खाता सेसन स्थिति भएका प्रोभाइडरहरूमा क्रस-खाता कन्टेक्स्ट हानि र दोहोरिने कोल्ड-स्टार्ट 429 हरू घटाउँछ।

**कार्यान्वयन:**

- TTL रिजोलुसन: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- पिन चयन/सिर्जना: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- हेडर निकासी (जेनेरिक, कुनै पनि प्रोभाइडर): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- पर्सिस्ट गरिएको पिन तालिका: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- सेटिङ: `sessionAffinityTtlMs` (ग्लोबल TTL मि.से.मा, `0` ले निष्क्रिय गर्छ) — `src/lib/db/settings.ts`। Codex-मात्र `codexSessionAffinityTtlMs` बाट माइग्रेसन `124_generic_session_affinity_ttl.sql` द्वारा पुनःनामकरण गरिएको, जसले पहिले कन्फिगर गरिएको कुनै पनि Codex TTL लाई नयाँ पूर्वनिर्धारितको रूपमा सार्छ।

#7274 अघि, `resolveSessionAffinityTtlMs()` ले `codex` बाहेकका सबै प्रोभाइडरहरूका लागि `0` मा हार्ड-बेल गर्थ्यो, त्यसैले TTL सेटिङ (र सेसन हेडरहरू) को अन्यत्र कुनै प्रभाव हुँदैनथ्यो, यद्यपि पिनिङ मेकानिज्म र हेडर निकासी पहिल्यै प्रोभाइडर-अज्ञोस्टिक थिए। फिक्सले त्यो अर्ली-रिटर्न हटायो; TTL अब ग्लोबल रूपमा `0` भन्दा माथि सेट गरिएपछि हरेक प्रोभाइडरमा समान रूपमा लागू हुन्छ।

तीनवटा सेसन-एफिनिटी हेडरहरू कहिल्यै अपस्ट्रिम फर्वार्ड गरिँदैनन् — एक्जिक्युटरहरूले क्लाइन्ट हेडरहरू पास गर्नुको सट्टा आफ्नै अपस्ट्रिम हेडरहरू सुरुदेखि बनाउँछन्, त्यसैले यो आन्तरिक कोरिलेसन आईडी मात्रै रहन्छ।

### एक्सक्लुसिभ व्यवस्थित सेसन कनेक्सन लीजहरू

**दायरा:** एक सक्रिय व्यवस्थित HTTP क्लाइन्ट/सेसनले एक योग्य OmniRoute कनेक्सनको स्वामित्व राख्छ।

**उद्देश्य:** अनुरोधहरूपारि हार्ड रुटिङ फेन्स चाहने क्लाइन्टहरूका लागि टिकाउ एक्सक्लुसिभ कनेक्सन स्वामित्व प्रदान गर्ने। यो सेसन एफिनिटीभन्दा फरक छ, जुन एउटा सफ्ट निरन्तरता प्राथमिकता हो: एक्सक्लुसिभ लीजले SQLite मा लाइफसाइकल स्थिति पर्सिस्ट गर्छ, ग्लोबल सक्रिय-स्वामी र सक्रिय-कनेक्सन अद्वितीयता लागू गर्छ, र प्रोभाइडर डिस्प्याचअघि नै स्टेल जेनेरेसनलाई अस्वीकार गर्छ।

यो सुविधा प्रति API कुञ्जी अप्ट-इन हो। व्यवस्थित कुञ्जीसँग `lease:exclusive` स्कोप र स्पष्ट गैर-खाली `allowedConnections` सूची हुनुपर्छ। कुनै पनि HTTP क्लाइन्टले लाइफसाइकल एन्डपोइन्ट प्रयोग गर्न सक्छ; क्लाइन्ट नाम, युजर-एजेन्ट, प्रोभाइडर, OAuth विधि, वा मोडेल आवश्यक छैन। लीजले कनेक्सनको स्वामित्व राख्छ, मोडेलको होइन, त्यसैले कनेक्सन सामान्य रूपमा योग्य रहुञ्जेल मोडेल परिवर्तन भए पनि बाइन्डिङ कायम रहन्छ। सामान्य मोडेल, कोटा, स्वास्थ्य, कूलडाउन, र एलाउलिस्ट नियमहरू आधिकारिक नै रहन्छन् र उही जेनेरेसनलाई अर्को खाली योग्य कनेक्सनमा सार्न सक्छन्।

जीवनचक्र भनेको `POST /api/v1/session-leases` हो, जसमा JSON कार्यहरू `acquire`, `renew`, र
`release` प्रयोग हुन्छन्। व्यवस्थित इन्फरेन्स अनुरोधहरूले अपारदर्शी `X-OmniRoute-Lease-Owner`
मान र ठीक `X-OmniRoute-Lease-Generation` प्रस्तुत गर्छन्। स्वामीले `vlo_` अनुसरण गरेर 43 वटा
base64url अक्षरहरू प्रयोग गर्छ; यसको SHA-256 ह्यास मात्र भण्डारण गरिन्छ। प्रत्येक अन्तिम
डिस्प्याच फेन्सले प्रमाणीकृत API कुञ्जी ID र सक्रिय जडान ID लाई पनि बाँध्छ। लिज नियन्त्रण
हेडरहरू लगहरू, सञ्चित अनुरोध स्न्यापसटहरू, र अपस्ट्रिम एक्जिक्युटर हेडरहरूबाट हटाइन्छन्।

यदि सामान्य राउटिङसँग योग्य व्यवस्थित उम्मेदवारहरू छन् तर प्रत्येक खाली उम्मेदवार पराई सक्रिय
लिजले कब्जा गरिएको छ भने, OmniRoute ले HTTP `429`, lease-capacity-unavailable कोड,
waiting-for-capacity अवस्था, र सबैभन्दा चाँडैको सम्बन्धित समाप्तिबाट व्युत्पन्न गरिएको सीमित
`Retry-After` फर्काउँछ। सामान्य खाली योग्यता भने लिज प्रतिस्पर्धा होइन र यसले आफ्नो मौजुदा
राउटिङ त्रुटि सिमान्टिक्स नै कायम राख्छ।

सम्बन्धित संयन्त्रहरू अलगै रहन्छन्:

- OAuth सत्र अधिभोग भनेको OAuth खाताहरूका लागि प्रोसेस-स्थानीय सफ्ट वितरण हो।
- खाता सेमाफोरहरूले अनुरोध-कन्करेन्सी अनुमतिहरू प्रदान गर्छन् र अनुरोध पूरा भएपछि समाप्त हुन्छन्।
- एक्सक्लुसिभ व्यवस्थित सत्र लिजहरू जेनेरेसन फेन्ससहितको दिगो जीवनचक्र स्वामित्व हुन्।

---

## ३. मोडेल लकआउट

**दायरा:** प्रोभाइडर + कनेक्सन + मोडेल त्रिगुट।

**स्थिति अनुसार कुञ्जी दायरा:** असफल स्थितिले लकआउटले कुन कुञ्जीमा लेख्ने भनेर निर्णय गर्छ
(`open-sse/services/accountFallback/exactModelLock.ts` मा `resolveLockoutScope()`):

- `429` / `403` / `402` — कोटा वा अधिकार (entitlement) संकेत — **कोटा परिवार** लक गर्नुहोस्:
  codex को लागि सम्पूर्ण `codex` / `spark` दायरा (त्यस कनेक्सनका
  सबै `gpt-5*` मोडेलहरू), अन्य प्रोभाइडरहरूको लागि `getQuotaScopedModelForProvider()`।
- `404` ले नग्न मोडेल लक गर्छ (`getModelLockKey()` ले `not_found` लाई साँघुरो बनाउँछ)।
- अन्य कुनै पनि स्थिति — `5xx` ट्रान्सपोर्ट/सर्भर असफलताहरू र गुणस्तर प्रमाणीकरणबाट OmniRoute को आफ्नै
  संश्लेषित `502` — ले **ठीक** (exact)
  प्रोभाइडर/कनेक्सन/मोडेल टपल मात्र लक गर्छ। एउटा मोडेलमा खराब स्ट्रिम भएको कुरा
  खाताको कोटाको प्रमाण होइन; यो नियम अघि
  `codex/gpt-5.6-luna` मा एउटा खाली प्रतिक्रियाले त्यस कनेक्सनका सबै `gpt-5*` मोडेलहरूलाई
  रुटिङबाट २–३० मिनेटका लागि (बढ्दो क्रममा) हटाउँथ्यो, जबकि त्यसको कोटा छोएको हुँदैनथ्यो।
- कलरको स्पष्ट `scope` विकल्पले सधैँ जित्छ (Antigravity ले `"exact"` पास गर्छ)।

**उद्देश्य:** एउटा मात्र मोडेल अनुपलब्ध वा कोटा-सीमित भएको बेला सम्पूर्ण कनेक्सन अक्षम पार्नबाट जोगाउन।

**उदाहरणहरू:**

- प्रति-मोडेल कोटा प्रोभाइडरहरूले 429 फर्काउने
- लोकल प्रोभाइडरहरूले एउटा हराएको मोडेलको लागि 404 फर्काउने
- प्रोभाइडर-विशिष्ट मोड/मोडेल अनुमति असफलताहरू (जस्तै, Grok मोडहरू)

**कार्यान्वयन:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`।

### मोडेल कुलडाउन ड्यासबोर्ड (v3.8.0)

UI: Settings → Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

सक्रिय लकआउटहरू सूचीबद्ध गर्छ: प्रोभाइडर, कनेक्सन, मोडेल, कारण, expiresAt। अपरेटरहरूले कार्डबाट मोडेल म्यानुअल रूपमा पुनः सक्षम गर्न सक्छन्।

**REST API:**

- `GET /api/resilience/model-cooldowns` — सक्रिय लकआउटहरू सूचीबद्ध गर्ने
- `DELETE /api/resilience/model-cooldowns` — म्यानुअल पुनः सक्षमीकरण। बडी: `{provider, connection, model}`। प्रमाणीकरण: management।

### कुलडाउन व्यवस्थापक

UI: Monitoring → Cooldown Manager (`src/app/(dashboard)/dashboard/resilience/cooldowns/`)।

अस्थायी कारणले रुटिङ बाहिर रहेका प्रत्येक कनेक्सनको लागि एउटै पृष्ठ,
प्रत्येक प्रोभाइडर पृष्ठ खोल्नुको सट्टा। यसले कनेक्सन कुलडाउनहरू, मोडेल लकआउटहरू र टर्मिनल
अवस्थाहरू सूचीबद्ध गर्छ, तिनीहरूलाई प्रति कनेक्सन, चयन गरिएको समूहका लागि, वा प्रोभाइडरका
सबै कनेक्सनहरूका लागि खाली गर्छ, र सबैभन्दा धेरै ट्युन गरिएका कुलडाउन नियमहरू सम्पादन गर्छ: `streamStallCooldown.enabled` र OAuth / API-key
`connectionCooldown` आधार कुलडाउन तथा अधिकतम ब्याकअफ चरणहरू (`PATCH /api/resilience` मार्फत सेभ गरिन्छ)। टर्मिनल अवस्थाहरू (`banned`, `expired`, `credits_exhausted`)
सूचीबद्ध त गरिन्छन् तर यहाँ कहिल्यै खाली गरिँदैनन्।

**REST API** (`src/lib/resilience/cooldownManager.ts`, प्रमाणीकरण: management):

- `GET /api/resilience/cooldowns[?provider=]` — स्थिति, बाँकी कुलडाउन,
  ब्याकअफ स्तर, अन्तिम त्रुटि प्रकार र मोडेल लकआउटहरूसहितका कनेक्सनहरू (प्रमाणहरू बिना)
- `POST /api/resilience/cooldowns` — बडी `{connectionIds: string[]}` वा
  `{all: true, provider?}`; `{cleared, unchanged, skippedTerminal, lockoutsCleared}` फर्काउँछ

### लकआउट सेटिङ्स UI + सफलता-क्षय रिकभरी (v3.8.23)

मोडेल लकआउट सधैँ-सक्रिय हार्डकोड गरिएको व्यवहारबाट पूर्ण रूपमा कन्फिगर गर्न मिल्ने,
आफ्नै सेटिङ्स कार्ड र स्व-उपचार रिकभरी मार्गसहितको अप्ट-इन सुविधामा परिणत भयो।

**सेटिङ्स कार्ड:** Settings → Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`)।
यो माथिको पढ्न-मात्र मिल्ने `ModelCooldownsCard` भन्दा **फरक** हो (जसले केवल
सक्रिय लकआउटहरू _सूचीबद्ध_ गर्छ) — नयाँ कार्डले _प्यारामिटरहरू कन्फिगर गर्छ_। पूर्वनिर्धारित मानहरू
`DEFAULT_MODEL_LOCKOUT_SETTINGS` मा रहेका छन्
(`src/lib/resilience/modelLockoutSettings.ts`):

| सेटिङ                   | पूर्वनिर्धारित                   | अर्थ                                                                     |
| ----------------------- | -------------------------------- | ------------------------------------------------------------------------ |
| `enabled`               | `false`                          | मास्टर टगल — मोडेल लकआउट **पूर्वनिर्धारित रूपमा बन्द** हुन्छ।            |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | मोडेल-स्कोप असफलताका रूपमा गनिने अपस्ट्रिम स्थितिहरू।                    |
| `baseCooldownMs`        | `120_000` (120 s)                | पहिलो असफलताको लागि प्रारम्भिक लकआउट अवधि।                               |
| `maxCooldownMs`         | `1_800_000` (30 min)             | बढाइएको कुलडाउनको सीमा।                                                  |
| `maxBackoffSteps`       | `10`                             | अधिकतम एक्सपोनेन्सियल-ब्याकअफ बढोत्तरी चरणहरू।                           |
| `useExponentialBackoff` | `true`                           | दोहोरिएका असफलताहरूले कुलडाउनलाई एक्सपोनेन्सियल रूपमा बढाउने कि नबढाउने। |

सेटिङ्सहरू सामान्य सेटिङ्स स्टोर मार्फत पर्सिस्ट हुन्छन् र
रेजिलियन्स सेटिङ्स स्किमाबाट भ्यालिडेट हुन्छन्; कार्डले `baseCooldownMs`/`maxCooldownMs`
(`maxCooldownMs ≥ baseCooldownMs` सहित) र `maxBackoffSteps` लाई क्ल्याम्प गर्छ।

**सफलता-क्षय रिकभरी:** रिकभरी **शुद्ध टाइमर समाप्ति मात्र होइन**। स्वस्थ
प्रतिक्रियाले मोडेलको असफलता गणनालाई तल्लोतिर फर्काउँछ, जसले गर्दा विन्डोको बीचमा निको भएको
मोडेल बढोत्तरी गर्न बन्द गर्छ (र खाली हुन्छ) — यसको टाइमर सकिनु भन्दा अगाडि नै। सफल
कम्बो लक्ष्यमा, `open-sse/services/combo.ts` ले `decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`) कल गर्छ, जसले भण्डारण गरिएको
`failureCount` लाई **आधा** बनाउँछ (`Math.floor(failureCount / 2)`); जब यो `0` मा पुग्छ,
लकआउट एन्ट्री पूर्ण रूपमा मेटाइन्छ। यसको साथी `recordModelLockoutFailure()`
ले बढोत्तरी विन्डो भित्रका असफलताहरूमा गणना बढाउँछ (र कुलडाउन बढाउँछ)। यो सफलता-क्षय
साधारण टाइमर समाप्तिको अतिरिक्त हो —
दुवै मार्गमध्ये जुनसुकैले पनि मोडेल पुनः सक्षम गर्न सक्छ।

**अवस्था:** लकआउटहरू **इन-मेमोरी** राखिन्छन् (प्रति-प्रक्रिया `Map`हरू,
`ModelLockoutEntry` हरू `provider:connectionId:model` कुञ्जीमा, एक्ज्याक्ट-स्कोप लकहरू
`provider:connectionId:exact:model` कुञ्जीमा), DB मा पर्सिस्ट
गरिएको होइन — रिस्टार्टमा ती हराउँछन्। _सेटिङ्सहरू_ पर्सिस्ट गरिन्छन्; सक्रिय
लकआउट _अवस्था_ भने क्षणिक हुन्छ।

---

## 4. कोटा-शेयर समवर्ती नियन्त्रण (v3.8.36)

सदस्यता खाताहरू (GLM, MiniMax, आदि) ले प्रायः ~1–3 समवर्ती
अनुरोधहरू मात्र स्वीकार गर्छन्; त्यसभन्दा बढी गर्दा 429 र कुलडाउनहरू ट्रिगर हुन्छन्। यो
**कोटा-शेयर** (`qtSd/…`) कम्बोहरूमा विशेष गम्भीर हुन्छ, जहाँ धेरै API कुञ्जीहरूले एउटै अपस्ट्रिम
खाता साझा गर्छन्। तीन तहहरूले साझा खातालाई बाढी हुनबाट जोगाउँछन्।

### प्रति-जडान समवर्ती सीमा (`max_concurrent`)

प्रत्येक प्रदायक जडानले `max_concurrent` सीमा घोषणा गर्न सक्छ
(`provider_connections.max_concurrent`, जडान मोडाल / API / DB मा सेट गरिन्छ)।
कुनै सीमा नचाहिएमा खाली छोड्नुहोस्। यो नै तलको क्रमीकरण
तह चलाउने एकमात्र नब हो — यसलाई खाताको वास्तविक समवर्ती सङ्ख्यामा सेट गर्नुहोस् (जस्तै GLM ~1, MiniMax ~2)।

### प्रति-मोडेल समवर्ती सीमाहरू (`modelConcurrency`)

जडानले थप रूपमा आफ्नो `rateLimitOverrides` नक्सा भित्र ठीक प्रति-मोडेल समवर्ती सीमाहरू
घोषणा गर्न सक्छ:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

यसलाई जडान मोडालमा (**दर सीमा ओभरराइडहरू → प्रति-मोडेल
समवर्ती सीमाहरू**, प्रति लाइन एउटा `model=cap`) वा उही JSON आकारसँग
`PATCH /api/providers/[id]` मार्फत सेट गर्नुहोस्। मुख्य सेमान्टिक्स:

- **जडान-व्यापी बनाम मोडेल-विशिष्ट:** `maxConcurrent` साझा
  जडान-व्यापी सीमा नै रहन्छ। दुवै लागू हुँदा, दुवै गेटहरू
  एउटै सम्मिश्र गेट (`global → provider → account → model`) भित्र एटोमिक रूपमा
  प्राप्त गरिन्छन्; प्रभावकारी व्यवहार लागू हुने
  कडा सीमा नै हुन्छ।
- **ठीक मोडेल-कुञ्जी मिलान:** कुञ्जी भनेको रूटिङ रिजोल्युसनपछि executor
  मा पठाइएको मोडेल स्ट्रिङ हो — सामान्यतया नाङ्गो अपस्ट्रिम मोडेल id
  (`glm-5`), क्लाइन्ट-साइड `provider/model` उपनाम होइन (`zai/glm-5` ले
  `glm-5` सँग मिल्दैन)। मानहरू धनात्मक-पूर्णाङ्क समवर्ती-अनुरोध सीमाहरू हुन्।
- **स्थानीय लामबद्धता, कुनै खोजी छैन:** अतिरिक्त अनुरोधहरू अहिलेकै
  लाम/टाइमआउट सेमान्टिक्ससँग स्थानीय रूपमा लाममा बस्छन् (टाइप गरिएका `SEMAPHORE_TIMEOUT` /
  `SEMAPHORE_QUEUE_FULL` प्रवेश त्रुटिहरू)। OmniRoute ले अपस्ट्रिम नीति खोज्दैन
  वा अनुमान गर्दैन — यसले सञ्चालकले कन्फिगर गरेको
  ठीक सीमाहरू मात्र लागू गर्छ। भरिएको मोडेल गेटले कहिल्यै प्रदायकलाई
  असक्षम पार्दैन र कहिल्यै स्थायी मोडेल लकआउट सिर्जना गर्दैन;
  अपस्ट्रिम 429/कुलडाउन/फलब्याक व्यवहार नै त्रुटि ब्याकस्टप रहन्छ।
- **प्रति-जडान, प्रति-प्रक्रिया दायरा:** सीमाहरू प्रति डेटाबेस जडान
  हुन् र मेमोरीमा राखिन्छन्, त्यसैले उही अपस्ट्रिम API कुञ्जी
  पुनः प्रयोग गर्ने दुई जडानहरू एकअर्कासँग समन्वय गर्दैनन्।
- **कन्फिगर नगरेको भनेको अपरिवर्तित:** नक्सा छोड्दा (वा
  ड्यासबोर्ड फिल्ड खाली छोड्दा) कुनै मोडेल गेट थपिँदैन। कुनै पनि
  विश्वव्यापी प्रदायक सीमा नदाबी गर्ने उदाहरण कन्फिगरेसन:

```text
glm-5=1
glm-4.7=3
```

### कोटा-शेयर अनुरोध क्रमीकरण

जब कोटा-शेयर डिस्प्याचले धनात्मक
`max_concurrent` घोषणा गरेको जडानलाई लक्षित गर्छ, त्यो **खाता** मा गरिने
समवर्ती अनुरोधहरू प्रति-जडान सेमाफोर (कुञ्जी `qsconn:<connectionId>`) मार्फत
क्रमीकृत हुन्छन्: अतिरिक्त अनुरोधहरू खातामा बाढी बगाउनुको सट्टा **लाममा
पर्खन्छन्**। यो **फेल-ओपन** हो — भरिएको
लाम वा टाइमआउटले डिस्प्याच गर्न मिल्ने
अनुरोधलाई कहिल्यै अस्वीकार गर्नुको सट्टा स्लट बिना नै अगाडि बढ्छ।
**सेटिङहरू → रिजिलिएन्स → कोटा-शेयर प्रति-जडान
समवर्ती** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`, पूर्वनिर्धारित
अन) मा टगल गर्नुहोस्। `max_concurrent` सीमा बिना व्यवहार अपरिवर्तित रहन्छ।

> कोटा-शेयर रूटिङ गेट (`selectQuotaShareTarget`, DRR + P2C) आफै पनि
> फेल-ओपन हो र सीमा पुगेको जडानलाई केवल _प्राथमिकता घटाउँछ_ —
> एकल-जडान पुलसँग यसले कडा सीमा लगाउन सक्दैन, त्यसैले यही
> सेमाफोर हो जसले वास्तवमा बाढीलाई नियन्त्रणमा राख्छ।

### कम्बो कुलडाउन-सचेत पुनःप्रयास

प्रत्येक कम्बो रणनीतिका लागि (सक्षम हुँदा), छोटो अस्थायी कुलडाउनका कारण
429 मा ठोसिने अनुरोधले 429 फर्काउनुको सट्टा त्यो अवधि
पर्खेर पुनः डिस्प्याच गर्छ — यसले बहु-मोडेल कम्बोहरूमा
Gemini-वर्गका TPM/RPM विन्डोहरू (~60s retry-after) समेट्छ,
जस्तै 2-मोडेल कम्बोका दुवै लक्ष्यहरूले प्रति-मोडेल दर सीमा भेट्नु।
**सेटिङहरू → रिजिलिएन्स** मा रहेको `comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`,
`budgetMs`) ले सीमाबद्ध गरिन्छ। यसले कहिल्यै `quota_exhausted`
(मध्यरातिसम्म लक गरिएको) वा auth/not-found कारणहरूमा पर्ख्दैन।

उही गेटले डिस्प्याच-पूर्व केस (#16319) पनि समेट्छ: जब कम्बोका
सबै लक्ष्यहरू कुनै प्रयास हुनु अघि नै छोडिन्छन् किनकि तिनीहरूका
मोडेल छोटो अस्थायी लकआउटमा छन्, शून्य-प्रयास पथले संकेत-विहीन
`503 ALL_TARGETS_SKIPPED` जवाफ दिनुको सट्टा उही सीमाहरूमुनि लक सकिएसम्म
पर्खेर पुनः डिस्प्याच गर्छ। जब कुनै पर्खाइ अनुमति हुँदैन
(सीमा, प्रयास वा बजेट सकिएको, वा सुविधा बन्द),
टर्मिनल प्रतिक्रिया `429 rate_limit_error` मा अपग्रेड हुन्छ जसले
सबैभन्दा चाँडो सकिने अस्थायी लकको `retry_after` / `reset_at`
बोक्छ; quota, auth र not-found लकहरूले भने संकेत-विहीन 503 नै राख्छन्।

---

## 5. अनुरोध क्यू एडमिसन नियन्त्रण (v3.8.49 · issue #6593)

**दायरा**: स्थानीय प्रति-प्रदायक+जडान रेट-लिमिट क्यू (`open-sse/services/rateLimitManager.ts`, Bottleneck द्वारा समर्थित), माथि उल्लेखित तीनवटा संयन्त्रहरूभन्दा एक तह तल।

**`maxWaitMs` ले क्यू प्रतीक्षा सीमाबद्ध गर्छ; `executionMaxWaitMs` ले कार्यान्वयन सीमाबद्ध गर्छ।**
यी दुवै जानाजान अलग राखिएका छन्, र कुनै पनि ले अर्कोलाई फिड गर्दैन।

`resilienceSettings.requestQueue.maxWaitMs` भनेको **क्यू-प्रतीक्षा बजेट** हो: यसले प्रदायक स्लटको लागि प्रतीक्षा गर्ने र त्यसपछि QUEUED मा बसिरहने समयलाई समेट्छ, र जबले QUEUED छोडेर कार्यान्वयन सुरु गर्छ, त्यही क्षण यसको टाइमर खारेज हुन्छ (`rateLimitManager.ts`, `wrappedFn`)। यो सीमा नाघेको अनुरोध कहिल्यै अपस्ट्रिमसम्म पुग्दैन। पूर्वनिर्धारित 30000ms, `src/lib/resilience/settings.ts` मा `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS` द्वारा आपूर्ति गरिएको र `tests/unit/ratelimit-admission-control-6593.test.ts` द्वारा पिन गरिएको, त्यसैले यसमा भएको परिवर्तनले त्यो परीक्षणलाई रातो बनाउँछ, यो अनुच्छेदलाई चुपचाप पुरानो भएर बस्न दिँदैन।

`resilienceSettings.requestQueue.executionMaxWaitMs` भनेको Bottleneck ले जब `expiration` को रूपमा प्राप्त गर्ने मान हो, जसको टाइमर डिस्प्याचपछि मात्र सुरु हुन्छ। यो आफ्नै अपस्ट्रिम टाइमआउट नभएका एक्जिक्युटरहरूका लागि ब्याकस्टप हो, र जब एक्जिक्युटरको आफ्नै fetch-start टाइमआउट लामो हुन्छ, यसलाई त्यही बराबर बढाइन्छ, त्यसैले यसले स्वस्थ इन-फ्लाइट प्रतिक्रियालाई काट्न सक्दैन। पूर्वनिर्धारित 600000ms (10 मिनेट)।

क्यू बजेटलाई `expiration` मा फिड गर्नु नै पहिले non-incremental गेटवेहरूलाई मध्य-फ्लाइटमै मार्ने कुरा थियो — तिनीहरू पहिलो बाइट्सअघि वैध रूपमा मिनेटौंसम्म चल्छन् — र यही कारणले expiration लाई `code:
"RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) को रूपमा देखाइन्छ, जबकि क्यू बजेटले क्यू-टाइमआउट कोड बोक्छ। जुनसुकैलाई `RATE_LIMIT_MAX_WAIT_MS` / `RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) वा ड्यासबोर्ड (**सेटिङहरू → रिजिलियन्स**) मार्फत ओभरराइड गर्नुहोस्। सामान्यीकरण गर्दा दुवै 1ms–24h मा क्ल्याम्प गरिन्छन्।

**दुवैका लागि प्राथमिकता:** env var ले _पूर्वनिर्धारित_ मात्र आपूर्ति गर्छ। `resilienceSettings.requestQueue` मा पर्सिस्ट गरिएको मान (ड्यासबोर्ड / API patch, `key_value` मा भण्डारित) ले त्यसलाई जित्छ, र प्रति-जडान `rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` ले अझ त्यसलाई जित्छ। त्यसैले, पहिल्यै पर्सिस्ट गरिएको मान भएको डिप्लयमेन्टमा env var सेट गर्नुले केही पनि फर्कंदैन — त्यसको सट्टा पर्सिस्ट गरिएको सेटिङ हटाउनुहोस् वा अद्यावधिक गर्नुहोस्।

क्यूमा बसोबास `maxWaitMs` द्वारा सीमाबद्ध छ; तलको `maxQueueDepth` ले एकैपटक कति कलरहरू क्यूमा रहन पाउँछन् भनी सीमाबद्ध गर्छ।

**बडी-वर्णित पुनःप्रयासहरू: पेसिङ बनाम लकआउट।** 429 बडीले आफ्नै प्रतीक्षा समय तोक्न सक्छ (Gemini `RetryInfo.retryDelay`, "retry after Ns" पाठ), जुन `updateFromResponseBody` ले पढ्छ। जडानको `maxWaitMs` भित्र फिट हुने प्रतीक्षा भनेको पेसिङ हो: लिमिटरले त्यति अवधिभर आफ्नो रिजर्भोइर खाली गर्छ र रिफिल हुँदा क्यू गरिएका कलहरू डिस्प्याच हुन्छन्। `maxWaitMs` भन्दा लामो प्रतीक्षा भनेको क्यूले बसेर सक्ने कुरा होइन — Gemini ले सकिएको दैनिक कोटाको जवाफ `retryDelay: "86399s"` ले दिन्छ। पुनःनिर्मित 429 (#16528) मा रिले गरिएको `Retry-After` ले फलब्याक इन्जिनलाई त्यो विन्डोभरि मोडेल लक गराइसक्छ, तर त्यसका लागि लिमिटर पनि रोक्नुले कुञ्जीमा चाँडै पुग्ने कुनै पनि कललाई (उदाहरणतः रिजिलियन्स रिसेटपछि) सम्पूर्ण `maxWaitMs` भरि अल्झाउनेछ। जब त्यस्तो प्रतीक्षा टाइप गरिएको Google `RetryInfo` विवरणबाट (`google_rpc_retry_info` प्रोभेनन्स) आउँछ र कुञ्जीको लिमिटर पहिल्यै मोडेलमा स्कोप गरिएको हुन्छ (`getLimiterKey` हेर्नुहोस्), त्यसबेला 429 त्यो जडानमा मोडेल लकआउटमा बदलिन्छ (`open-sse/services/rateLimitManager/bodyRetryPause.ts` मा `lockModelForLongBodyRetry`, 24h मा क्याप गरिएको), र लिमिटर नरोकिएकै छोडिन्छ। एकाउन्ट चयनले त्यो लकमा `isModelLocked()` मार्फत स्किप गर्छ, र त्यो जडानमा पिन गरिएका लक्ष्यहरूका लागि कम्बो प्रि-डिस्प्याच गेटले पनि त्यस्तै गर्छ। antigravity मा, जहाँ लिमिटर प्रति कोटा परिवार हुन्छ, लक ठ्याक्कै मोडेलमै हुन्छ, यसका अन्य कोटा लकहरूजस्तै। एलियासले क्लाइन्टले मागेको नामलाई त्यो मोडेलमा रिजल्भ गरेको छ भने त्यो नाम पनि लक हुन्छ, किनकि ती जाँचहरूले मागिएको नाम प्रयोग गर्छन्; यो ठ्याक्कै लक गरिन्छ (`lockExactModel`), त्यसैले antigravity कोटा परिवार वा codex स्कोप क्रस गर्ने एलियासले आफ्नैलाई कहिल्यै लक गर्दैन। प्रोज संकेत, अनटाइप गरिएको `retryDelay`, वा सम्पूर्ण जडानद्वारा साझा गरिएको लिमिटरले भने पज नै कायम राख्छ। जब 429 पाथले भर्खरै पुनःनिर्मित गरेको लिमिटर पज हुन्छ, जस कलरको बाँकी क्यू समय पज सकिनुअघि नै सकिन्छ, त्यसलाई त्यो समय पर्खिएर होइन, तुरुन्तै क्यू-टाइमआउट कोडसहित (`checkLimiterPause`) फर्काइन्छ; रेकर्ड गरिएको अन्त्य लिमिटर बन्नुअघि नै एन्कर गरिएको हुन्छ, जहाँ Bottleneck ले आफ्नो रिफ्रेस घडी सुरु गर्छ, र रिजर्भोइरमा पछि भएको कुनै पनि परिवर्तनले त्यसलाई बिर्सन्छ। `tests/unit/rate-limit-long-body-retry-lockout.test.ts` र `tests/unit/rate-limit-body-retry-pause.test.ts` द्वारा कभर गरिएको।

**`maxQueueDepth` — अप्ट-इन एडमिसन क्याप (नयाँ)।** `resilienceSettings.requestQueue.maxQueueDepth` ले एक प्रदायक+जडानका लागि एकैपटक कति अनुरोधहरू क्यूमा (अझै डिस्प्याच नभएका) रहन सक्छन् भनी सीमाबद्ध गर्छ। क्यूमा पहिल्यै `maxQueueDepth` अनुरोधहरू भएको बेला, नयाँ अनुरोध `limiter.schedule()` सम्म पुग्नु **अघि** नै टाइप गरिएको `code: "RATE_LIMIT_QUEUE_FULL"` त्रुटिसहित छिटो-अस्वीकृत हुन्छ — त्यसैले अस्वीकार सस्तो हुन्छ र त्यो अनुरोधका लागि कुनै पनि डाउनस्ट्रिम प्रम्प्ट-कम्प्रेसन / अनुवाद कार्यभन्दा अघि हुन्छ। पूर्वनिर्धारित `0` = अक्षम, हालको अप्रतिबन्धित-क्यू व्यवहार कायम राख्दै; 0–100000 मा सीमित। `RATE_LIMIT_MAX_QUEUE_DEPTH` (env) वा `resilienceSettings.requestQueue.maxQueueDepth` (ड्यासबोर्ड/API patch) मार्फत ओभरराइड गर्नुहोस्।

एडमिसन जाँच आफैमा शुद्ध फंक्सन हो (`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`), त्यसैले यो वास्तविक Bottleneck लिमिटर बिना नै युनिट-परीक्षणयोग्य छ।

> #6593 खोल्ने RFC ले `bypassCompressionOnRateLimit` फ्ल्याग पनि प्रस्ताव गरेको थियो। यस रिपोको `open-sse/services/compression/` पाइपलाइन आउटबाउन्ड LLM अनुरोधमा प्रम्प्ट/सन्दर्भ कम्प्रेसन हो (`chatCore.ts`, `resolveCompressionSettings`/`selectCompressionStrategy` ब्लक वरिपरि), synthesized 429 बडीहरूमा HTTP रेस्पोन्स कम्प्रेसन होइन — शाब्दिक bypass फ्ल्यागका लागि मेल खाने कुनै कोड पाथ छैन। त्यो प्रम्प्ट-कम्प्रेसन चरण हाल अनुरोध पाइपलाइनमा `withRateLimit()` भन्दा _अघि_ चल्छ, त्यसैले queue-full अस्वीकृतिमा यसलाई छोड्न पुनःक्रमण गर्नु यस इस्यूको दायराभन्दा फरक, ठूलो परिवर्तन हो; यसलाई जानाजानी यहाँ कार्यान्वयन गरिएको **छैन** र CPU-बचत लाभ पुनःक्रमण जोखिमभन्दा सार्थक छ कि भनेर follow-up को रूपमा छोडिएको छ।

### दर-सीमा स्वतः-सक्षम सुरक्षा जाल र जडान सुरक्षा (`rateLimitProtection`)

**स्वतः-सक्षम सुरक्षा जाल** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, डिफल्ट `true`):
डिफल्ट रूपमा, OmniRoute ले सबै सक्रिय API-key प्रोभाइडर जडानहरूका लागि दर-सीमा queue सुरक्षा स्वतः सक्षम गर्छ (`getProviderCategory(provider) === "apikey"`)। यसले दर-संवेदनशील अपस्ट्रिम API key हरूतर्फ आउने अनुरोधहरू अपस्ट्रिम 429 त्रुटिहरूमा burst हुनुको सट्टा Bottleneck मार्फत queue र throttle हुन्छन् भनी सुनिश्चित गर्छ। सुरक्षा जाललाई `RATE_LIMIT_AUTO_ENABLE` वातावरण चर मार्फत ओभरराइड गर्न सकिन्छ (`false`/`0`/`off` ले असक्षम गर्छ, `true`/`1`/`on` ले बलपूर्वक सक्षम गर्छ), जसले निरन्तर ड्यासबोर्ड सेटिङभन्दा प्राथमिकता लिन्छ (**सेटिङ → Resilience** / `PATCH /api/resilience`)।

**प्रति-जडान `rateLimitProtection` को शब्दार्थ:**
प्रति-जडान दर-सीमा सुरक्षा प्रोभाइडर जडानहरूमा `rateLimitProtection` बुलियन फिल्ड मार्फत ट्र्याक गरिन्छ (SQLite मा `rate_limit_protection` को रूपमा निरन्तर):

- **स्पष्ट सक्षम (`rateLimitProtection === true`)**: प्रोभाइडर कोटि वा स्वतः-सक्षम सुरक्षा जाल सक्रिय छ कि छैन भन्ने कुराबाहेक, यस जडानका लागि दर-सीमा सुरक्षा स्पष्ट रूपमा सक्षम गरिएको छ।
- **स्पष्ट असक्षम (`rateLimitProtection === false`)**: स्पष्ट सुरक्षा असक्षम गर्छ, तर सक्रिय API-key जडानलाई विश्वव्यापी स्वतः-सक्षम सुरक्षा जालबाट **बाहिर निकाल्दैन**। `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`) मा, `false` र `undefined` समान हुन्: केवल `rateLimitProtection === true` लाई मात्र स्पष्ट ओभरराइडको रूपमा लिइन्छ। यदि `rateLimitProtection` `false` छ (वा सेट गरिएको छैन), सक्रिय API-key जडानले अझै स्वतः-सक्षम सर्त मेल खान्छ र दर-सीमा सुरक्षित नै रहन्छ।
- **कुनै प्रति-जडान opt-out छैन**: अपरेटरले हाल अरूका लागि स्वतः-सक्षम सक्रिय राख्दै "यो एकल सक्रिय API-key जडान दर-सीमा queue सुरक्षाबिना चल्नुपर्छ" भनी व्यक्त गर्न सक्दैन। API-key जडानहरूलाई दर-सीमा queue बिना पूर्ण रूपमा चलाउन, सुरक्षा जाल विश्वव्यापी रूपमा बन्द गर्नुपर्छ (`RATE_LIMIT_AUTO_ENABLE=false` वा `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`)।

**समर्थित लेखन पाथहरू:**

- **`POST /api/rate-limits`**: कुनै जडानका लागि `rateLimitProtection` टगल गर्ने समर्थित व्यवस्थापन लेखन पाथ (`{ connectionId: string, enabled: boolean }`)। यसलाई `enabled: true` सँग कल गर्दा स्पष्ट सुरक्षा सक्षम हुन्छ; `enabled: false` सँग कल गर्दा स्पष्ट सुरक्षा हटाइन्छ (यद्यपि स्वतः-सक्षम सक्रिय भएमा सक्रिय API-key जडानहरू विश्वव्यापी सुरक्षा जालअन्तर्गत नै रहन्छन्)।
- **`PUT /api/providers/[id]`**: जानाजानी `rateLimitProtection` स्वीकार वा फ्लिप गर्दैन (#11278)। `PUT /api/providers/[id]` मार्फत प्रोभाइडर जडान मेटाडेटा अद्यावधिक गर्दा निरन्तर दर-सीमा सुरक्षा स्थिति कहिल्यै परिवर्तन हुँदैन।

---

## 6. सुस्त-स्ट्रिम थ्रुपुट वाचडग (#9709)

वैकल्पिक `resilienceSettings.streamRecovery.throughputWatchdog` गार्डले यस्तो अपस्ट्रिम पत्ता लगाउँछ जुन अझै पनि चंकहरू पठाइरहेको त हुन्छ तर कन्फिगर गरिएको उपयोगी-आउटपुट दरभन्दा कम assistant आउटपुट उत्पादन गरिरहेको हुन्छ। यो जानाजानी आइडल टाइमआउटबाट फरक राखिएको छ: हार्टबिटहरू र मेटाडेटाले कुनै पनि टाइमर रिसेट गर्दैनन् र प्रगतिका रूपमा गनिँदैनन्। यो हार्ड अटेम्प्ट डेडलाइन (#9153) बाट पनि फरक छ, जुन आउटपुटको गुणस्तर जे भए पनि निरपेक्ष सुरक्षा सीमाका रूपमा रहन्छ।

वाचडगले अबोर्ट गर्न सक्नुअघि वार्म-अप अवधि र त्यसपछि पूर्ण रोलिङ विन्डो आवश्यक हुन्छ। यसले Chat Completions र Responses API आउटपुट इभेन्टहरूबाट टेक्स्ट डेल्टाहरू गन्छ (एक संयमित UTF-8 बाइट प्रोक्सी), usage-मात्र र खाली इभेन्टहरूलाई बेवास्ता गर्छ, र टुल-कल वा रिजनिङ इभेन्टहरू जारी रहँदा निर्णय स्थगित गर्छ। यो पूर्वनिर्धारित रूपमा अक्षम हुन्छ र `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true` ले सक्षम गर्न सकिन्छ; विन्डो, वार्म-अप, न्यूनतम दर, र न्यूनतम नाप्न मिल्ने आउटपुट सामान्य रिजिलियन्स-सेटिङ्स नर्मलाइजेसन तहद्वारा सीमाबद्ध हुन्छन्।

सक्षम गरिएको बेला, वाचडग अबोर्ट केवल सक्रिय अपस्ट्रिम अटेम्प्टमा मात्र लागू हुन्छ। क्लायन्टलाई देखिने कुनै पनि बाइट्सअघि, अवस्थित समान-खाता प्रारम्भिक-रिकभरी मार्गले अटेम्प्ट पुनः खोल्न सक्छ। कमिटपछि, स्ट्रिम कहिल्यै अन्धाधुन्ध रिप्ले गरिँदैन; केवल अवस्थित सुरक्षित मिड-स्ट्रिम निरन्तरता अनुबन्धले मात्र सफिक्स जोड्न सक्छ। फाइनलाइजेसन एक-पटकको (single-shot) नै रहन्छ, त्यसैले प्रयोग लेखा र सेमाफोर रिलीज दोहोरिँदैन।

---

## 7. अपस्ट्रिम स्ट्याटस पुनःकथन (गलत रूपमा बताइएका कोटा त्रुटिहरू)

**दायरा:** अस्थायी कोटा समाप्तिलाई गलत HTTP स्ट्याटससँग रिपोर्ट गर्ने एउटा अपस्ट्रिम गेटवे।

**उद्देश्य:** वर्गीकरणअघि नै भ्रामक स्ट्याटस सच्याउनु, ताकि डाउनस्ट्रिम उपभोक्ताहरू (फलब्याक इन्जिन, कम्बो एग्रिगेसन, क्लायन्ट-सामुन्नेको प्रतिक्रिया) ले असफलताको साँचो पुनःप्रयासयोग्य स्वभाव देखून्।

केही गेटवेहरूले अस्थायी कोटा समाप्तिलाई गैर-पुनःप्रयासयोग्य HTTP स्ट्याटससँग संकेत गर्छन्। `agentrouter.org` ले मानक `429` को सट्टा चिनियाँ बडी (`用户额度不足` / `额度不足`) सहित `403` (कहिलेकाहीँ `400`) फर्काउँछ। Claude Code जस्ता क्लायन्टहरूले `403` लाई स्थायी ठानेर सत्र रद्द गर्छन्, र सच्याइएको छैन भने फलब्याक इन्जिनले यसलाई कोटा इभेन्टको सट्टा `AUTH_ERROR` भनेर वर्गीकृत गर्नेछ।

**कार्यान्वयन:**

- रजिस्ट्री + म्याचर: `open-sse/config/upstreamStatusRestatement.ts` — प्रति-प्रोभाइडर नियमहरूको सूची (`{id, fromStatuses, toStatus, textMarkers, excludeMarkers, defaultRetryAfterMs}`), `applyStatusRestatement()` मार्फत मिलाइन्छ।
- कल साइट: `open-sse/handlers/chatCore.ts` को `providerFailure:` ब्लक (करिब लाइन 3654), ठीक `parseUpstreamError()` ले त्रुटि HTTP स्ट्याटस (`!providerResponse.ok`) भएको अपस्ट्रिम प्रतिक्रिया पार्स गरेपछि, र कुनै पनि वर्गीकरण चल्नुअघि, ताकि प्रत्येक डाउनस्ट्रिम उपभोक्ताले सच्याइएको स्ट्याटस देखोस्। `200` SSE स्ट्रिमभित्र इम्बेड गरिएका त्रुटिहरू छुट्टै, पछिल्लो स्ट्रिम-पार्सिङ मार्ग पछ्याउँछन् र आज यो हुकद्वारा **समेटिएका छैनन्** — एउटा ज्ञात सीमा, जुन agentrouter को गलत-स्ट्याटसका लागि अहिलेसम्म आवश्यक छैन (जुन त्रुटि HTTP स्ट्याटसका रूपमा देखा पर्छ)।
- पुनःप्रयास योग्यता: `429` `RETRY_AFTER_ELIGIBLE_STATUSES` मा छ (`open-sse/services/combo/unavailableRetryGate.ts`), त्यसैले पुनःकथित त्रुटिले मृत `403` का रूपमा देखिनुको सट्टा वास्तविक पुनःप्रयास विन्डो बोक्छ।
- कृत्रिम `60s` `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`) केवल पुनःकथित प्रतिक्रियाले **क्लायन्टलाई** बताउने कुरा हो; यो आफैमा कनेक्सनको आन्तरिक कुलडाउन/लकआउट अवधि होइन — त्यो पुनःकथित त्रुटि वास्तवमा जुन संयन्त्रले ह्यान्डल गर्छ त्यसद्वारा अलग्गै नियन्त्रित हुन्छ (Connection Cooldown को बढ्दो ब्याकअफ, §2, API-key प्रोभाइडरहरूका लागि आधार `3s`; वा agentrouter जस्ता प्रति-मोडेल-कोटा प्रोभाइडरहरूका लागि Model Lockout, §3)। राउटर क्लायन्टलाई घोषणा गरेको 60s विन्डोभन्दा चाँडै आन्तरिक रूपमा पुनःप्रयासका लागि योग्य बन्न सक्छ — जानाजानी राखिएको मार्जिन हो, बग होइन।

स्थायी त्रुटिहरू (agentrouter को `无权访问模型` — यस मोडेलमा पहुँच छैन) कहिल्यै पुनःकथित गरिँदैनन्: `textMarkers` मिले पनि `excludeMarkers` ले नियमलाई भिटो गर्छ, त्यसैले त्रुटिले आफ्नो मौलिक स्ट्याटस कायम राख्छ र केहीले पनि यसलाई सधैंभरि पुनःप्रयास गर्दैन। मिल्ने प्रोभाइडर वर्गीकरण नियम (`open-sse/config/providerErrorRules.ts` मा `agentrouter-model-access-denied`: `reason: "auth_error"`, `scope: "model"`, `6h` घोषित आधार कुलडाउन) सामान्य apikey-श्रेणीको `FORBIDDEN` अर्ली-रिटर्न _अघि_ `checkFallbackError` (`open-sse/services/accountFallback.ts`) द्वारा परामर्श गरिन्छ, जुन `honorsRuleLockScope(provider)` मा गेट गरिएको छ (#10334 — हाल `providerErrorRules.ts` भित्रको `HONORS_RULE_LOCK_SCOPE_PROVIDERS` एलाउलिस्ट मार्फत agentrouter-मात्र)। नियमको घोषित 6h कुलडाउन `fallbackResult.baseCooldownMs` का रूपमा प्रवाहित हुन्छ, तर यसले अझै पनि पूर्व-अवस्थित प्रति-मोडेल-कोटा लकआउट मार्गलाई नै फिड गर्छ (`lockModelIfPerModelQuota()` / `recordModelLockoutFailure()`, कुलडाउन स्रोत बाहेक #10334 बाट परिवर्तित छैन): अरू हरेक मोडेल लकआउट जस्तै, यो अपरेटरको `mlSettings.maxCooldownMs` (पूर्वनिर्धारित `1_800_000ms` / 30 मिनेट) मा झारेर सीमित गरिन्छ, र _पर्सिस्ट गरिएको लकआउट कारण_ भने पूर्व-अवस्थित हार्डकोड गरिएको `"forbidden"` नै रहन्छ, नियमको `"auth_error"` होइन — अन्त्यदेखि-अन्त्यसम्म केवल कुलडाउन अवधि मात्र सम्मानित हुन्छ, कारण स्ट्रिङ होइन। कनेक्सन आफैँ सक्रिय नै रहन्छ; उही कनेक्सनमा रहेका भाइचारा मोडेलहरू असरग्रस्त हुँदैनन्।

पुनः व्याख्या गरिएका कोटा त्रुटिहरू (`额度不足`) प्रोडक्शनमा एउटा प्रोभाइडर नियमसम्म पुग्छन्
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`, आफ्नै घोषित cooldown छैन — persistence तहको
scaled backoff डिफल्ट लागू हुन्छ)। #10334 देखि, `ProviderErrorRuleMatch` मा रहेको
`scope` end-to-end उपभोग गरिन्छ नै, तर **केवल**
`HONORS_RULE_LOCK_SCOPE_PROVIDERS` allowlist मा रहेका प्रोभाइडरहरूका लागि (`providerErrorRules.ts` —
आज केवल `"agentrouter"`, `honorsRuleLockScope()` मार्फत गेट गरिएको)। अन्य हरेक
प्रोभाइडरका लागि `scope` जानकारीमूलक मात्र रहन्छ, #10334 भन्दा अघिकै जस्तै।
`checkFallbackError` ले मिलान भएको नियमको scope लाई
`fallbackResult.ruleScope` को रूपमा देखाउँछ; `isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) भनेको साझा guard हो जसले कुनै
`ruleScope` लाई connection-wide, आफैँ-रिकभर हुने सिग्नलको रूपमा मान्न वास्तवमै सुरक्षित छ कि छैन भनी
पुष्टि गर्छ (scope `"connection"`, reason `quota_exhausted`, कहिल्यै `permanent` होइन,
कहिल्यै `creditsExhausted` होइन — भविष्यमा कुनै नियमले scope
`"connection"` लाई स्थायी खाता अवस्थासँग जोड्न सक्ने सम्भावनाविरुद्धको रक्षा)। दुई उपभोक्ताहरूले यसलाई कल गर्छन्:

- **स्थायी भण्डारण (persistence)** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  passthrough-provider को **per-model** lockout शाखामा खस्नुको सट्टा
  (agentrouter `passthroughModels: true` भएकाले → `hasPerModelQuota()`
  ले `true` फर्काउँछ), यसले **अस्थायी connection cooldown** लागू गर्छ —
  `testStatus: "unavailable"` + `rateLimitedUntil`, कहिल्यै terminal status होइन
  (`credits_exhausted`/`banned`/`expired`) — त्यसैले cooldown सकिएपछि connection
  आफैँ रिकभर हुन्छ, म्यानुअल credential रिसेट आवश्यक पर्दैन।
  `disableCooling: true` भएका connectionहरूका लागि यो छोडिन्छ (#2997): त्यो opt-out
  त्यसोभए per-model lockout मा नै खस्छ (लेखित trade-off —
  शाखा माथिको कोड कमेन्ट हेर्नुहोस्)।
- **उही-अनुरोध combo routing** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): उही guard ले
  connection लाई in-memory `exhaustedConnections` सेटमा चिन्ह लगाउँछ, key
  `${provider}:${connectionId}` सहित। यसले केवल बाँकी SAME-REQUEST target लाई छोड्छ जसले
  _आफैँ त्यही ठीक `connectionId` बोकेको_ हुन्छ आफ्नै
  target object मा (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `exhaustedConnections` lookup भन्दा अघिको `if (provider &&
connectionId)`) — साधारण
  model-list combo, जहाँ sibling targetहरूले आफ्नै pinned `connectionId` बोक्दैनन्
  र एउटा मात्र response को
  `X-OmniRoute-Selected-Connection-Id` header बाट per-dispatch resolve हुन्छ, कहिल्यै त्यो key match मा पुग्दैन।
  त्यो सामान्य अवस्थामा, बाँकी leg ले भर्खरै exhausted गरिएको खाता पुनः प्रयोग गर्नबाट जोगाउने वास्तविक सुरक्षा यो
  Set नै होइन — यो माथिको persistence तह हो
  (connection को `rateLimitedUntil` अब भविष्यमा छ) र यही guard ले
  असफलताका लागि `transientRateLimitedProviders` लाई दबाउनुको संयोजन हो
  ("दुई-चरणीय डिजाइन" र `targetExhaustion.ts` मा रहेको
  `isAgentrouterConnectionQuotaScope` शाखाको कोड कमेन्ट हेर्नुहोस्): त्यो
  Set चिन्ह नलगाइएकाले, `combo.ts` को `allowRateLimitedConnection` force-allow
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) प्रोभाइडरका बाँकी legहरूका लागि लागू
  हुँदैन, त्यसैले credential selection को `rateLimitedUntil`
  फिल्टर (`src/sse/services/auth.ts:1238`) सामान्य रूपमा मानिन्छ र
  बाँकी leg ले या त फरक, अझै योग्य agentrouter
  connection छान्छ, या कुनै credential उपलब्ध नभएर असफल हुन्छ — यसले यो शाखाले भर्खरै cool down गरेको
  connection मा जबर्जस्ती फर्कने बाटो बनाउँदैन।

### दुई-चरणीय डिजाइन: status पुनः व्याख्या, त्यसपछि वर्गीकरण

Status पुनः व्याख्या (`upstreamStatusRestatement.ts`) र प्रोभाइडर
वर्गीकरण नियमहरू (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) छुट्टाछुट्टै रजिस्ट्रीहरू हुन् जुन दुवै प्रोभाइडर id
र text markerहरूमा key गर्छन्, तर तिनीहरू फरक ठाउँमा चल्छन् र फरक
उद्देश्य पूरा गर्छन्: पुनः व्याख्याले `chatCore.ts` मा चाँडै HTTP status पुनः लेख्छ;
वर्गीकरण नियमहरूले `checkFallbackError()`
(`open-sse/services/accountFallback.ts`) भित्र fallback `reason` र lock `scope`
(`model` / `provider` / `connection`) छान्छन्।

वर्गीकरण नियमहरूले पूर्ण त्रुटि **text** (`额度不足`
जस्ता body markerहरू मिलान गर्न आवश्यक) `providerErrorRules.ts` मा रहेको `FULL_TEXT_RULE_PROVIDERS`
allowlist मा सूचीबद्ध प्रोभाइडरहरूका लागि मात्र देख्छन् — हाल केवल `"agentrouter"`। अन्य हरेक
**built-in catalog** प्रोभाइडरका लागि, `checkFallbackError` ले
`getProviderErrorRuleMatch` लाई structured error (`{code, type}`) मात्र दिन्छ,
जुन header/status/code-आधारित नियमहरूका लागि पर्याप्त छ तर body-text markerहरूप्रति अन्धो।
`resolveRuleMatchBody()` helper ले यो चयन गर्छ: allowlist गरिएका प्रोभाइडरहरूका लागि पूर्ण त्रुटि
text, अन्यथा structured error। `FULL_TEXT_RULE_PROVIDERS` मा **built-in** प्रोभाइडर थप्नु
स्पष्ट per-provider opt-in हो — यो यसैकारण राखिएको हो कि सूचीमा नभएका हरेक प्रोभाइडरको
डिफल्ट path byte-for-byte अपरिवर्तित रहोस्।

नियमको `scope` (`model` / `provider` / `connection`) `FULL_TEXT_RULE_PROVIDERS` भन्दा छुट्टै
opt-in हो: `checkFallbackError` ले यसलाई
`fallbackResult.ruleScope` को रूपमा मात्र देखाउँछ, र downstream उपभोक्ताहरूले
यसलाई जानकारीमूलक लेबल बाहेक अरू केहीको रूपमा उही फाइलको
`HONORS_RULE_LOCK_SCOPE_PROVIDERS` allowlist मा रहेका प्रोभाइडरहरूका लागि मात्र मान्छन् (`gated via
honorsRuleLockScope()` — आज केवल `"agentrouter"`)।
प्रोभाइडर त्यो allowlist मा भएपछि `scope: "connection"` match ले वास्तवमा के गर्छ भनी माथिको "पुनः व्याख्या गरिएका
कोटा त्रुटिहरू" हेर्नुहोस्।

**#11104 — operator-घोषित rules ले दुवै allowlist बाइपास गर्छन्।** Operator ले यो फाइल सम्पादन नगरी runtime मा `settings.providerErrorRules` (`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`) मार्फत per-provider rule घोषणा गर्न सक्छ। Operator rule लाई `FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` पछाडि gate गर्नु — built-in catalog rules को **default** व्यवहार जोगाउन बनाइएका allowlists — ले त्यहाँ पहिल्यै सूचीबद्ध भएकाहरू बाहेक हरेक provider का लागि settings mechanism निष्क्रिय बनाइदिनेछ, किनकि rule घोषणा गर्नु आफैंमा operator को स्पष्ट opt-in हो। `resolveRuleMatchBody()` र `honorsRuleLockScope()` दुवैले पहिले `hasOperatorRuleForProvider()` जाँच्छन्: operator rule भएको provider ले raw error text पाउँछ र यसको घोषित `scope` मान्य हुन्छ, यो कुनै पनि allowlist मा छ कि छैन भन्ने कुराले फरक पार्दैन।

**चिनिएको खाली ठाउँ — `providerRuleRegistry` HTTP 400 का लागि कहिल्यै सोधपुछ गरिँदैन।** `checkFallbackError` को `BAD_REQUEST` branch ले status 400 लाई पूरै आफ्नै pattern arrays (`MODEL_ACCESS_DENIED_PATTERNS`, `CONTEXT_OVERFLOW_PATTERNS`, आदि `accountFallback.ts` मा) मार्फत वर्गीकृत गर्छ र यसभन्दा माथि रहेको `configuredRule`/`getProviderErrorRuleMatch` branch मा पुग्नुअघि नै return गर्छ। `status: 400` भएको built-in catalog rule (वा operator rule) सिन्ट्याक्टिक रूपमा मान्य छ तर कहिल्यै fire हुँदैन। आज कुनै पनि अवस्थित rule ले 400 लक्षित गर्दैन, त्यसैले production मा केही पनि प्रभावित छैन — तर भविष्यको 400 rule लाई पहिले यो branch छोएको चाहिन्छ, जुन rule थप्नुभन्दा ठूलो परिवर्तन हो (यसले pattern-array व्यवहारमा पहिल्यै निर्भर रहेका हरेक provider का लागि 400 पुनः वर्गीकृत गर्छ) र single-provider rule थप्ने कामको दायरा बाहिर छ।

### नयाँ quota-गलत बताउने gateway थप्दै

1. `statusRestatementRegistry` (`open-sse/config/upstreamStatusRestatement.ts`) मा एउटा rule array दर्ता गर्नुहोस्। `textMarkers` लाई provider-विशेष राख्नुहोस्; `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`) सँग टकराउने सामान्य अंग्रेजी वाक्यांशहरू कहिल्यै पुनः प्रयोग नगर्नुहोस्।
2. सही lock scope छान्न वैकल्पिक रूपमा `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) मा classification rules दर्ता गर्नुहोस् (account-व्यापी quota का लागि `connection`, per-model errors का लागि `model`)। यो चरण production मा ती provider हरूका लागि मात्र प्रभावकारी हुन्छ जसका rules लाई पूर्ण error text (body markers) चाहिन्छ: उही फाइलमा provider id लाई `FULL_TEXT_RULE_PROVIDERS` मा थप्नुहोस् — अन्यथा `checkFallbackError` ले rule लाई संरचित `{code, type}` error मात्र हस्तान्तरण गर्छ र body-text rule ले live traffic कहिल्यै मिलाउँदैन। खाली `status`/`headers` मा मिल्ने rules (जस्तै Opencode को वा Minimax को) लाई यो opt-in चाहिँदैन। अलग्गै, यदि rule ले `scope: "connection"` घोषणा गर्छ र उद्देश्य वास्तविक connection-व्यापी cooldown प्लस same-request combo skip हो (केवल सूचनात्मक label होइन), उही फाइलमा provider id लाई `HONORS_RULE_LOCK_SCOPE_PROVIDERS` मा थप्नुहोस् — यहीले `markAccountUnavailable()` (`src/sse/services/auth.ts`) र `applyComboTargetExhaustion()` (`open-sse/services/combo/targetExhaustion.ts`) मा `isAgentrouterConnectionQuotaScope()`-शैलीको consumption लाई gate गर्छ; यो बिना, `scope` अझै पनि `fallbackResult.ruleScope` बाट बग्छ तर केही पनि यसमा कार्य गर्दैन।
3. `tests/unit/upstream-status-restatement.test.ts` र `tests/unit/agentrouter-error-rules.test.ts` लाई मिरर गर्ने unit tests थप्नुहोस् (not-permanent / not-creditsExhausted guards सहित, र — यदि provider लाई allowlist चाहिन्छ भने — `resolveRuleMatchBody()` ले पूर्ण text त्यो provider का लागि मात्र फर्काउँछ भनी assert गर्ने test)।

`chatCore.ts`, `classifyError`, वा combo मा कुनै परिवर्तन आवश्यक छैन।

#### Egress-बकेट गरिएको lock (#10880)

`EGRESS_BUCKETED_LOCK_PROVIDERS` मा रहेका provider हरू (opencode परिवार) लाई IP-बकेट गरिएको upstream को रूपमा व्यवहार गरिन्छ (opencode free tier IP-बकेट गरिएको हो, account-बकेट गरिएको होइन — #9611 हेर्नुहोस्): status-429 वर्गीकृत `quota_exhausted` **वा** `rate_limit_exceeded` ले rotation ले तिनीहरूलाई प्रयास गर्नुअघि नै, असफल connection को अन्तिम चिनिएको egress IP सँग मेल खाने हरेक allowlisted-परिवार connection लाई cool down गर्छ — N-1 ग्यारेन्टी गरिएका-असफल upstream calls बाट बचाउँदै (#10460/#10525 जस्तै आकार)। `rate_limit_exceeded` जानाजानी समावेश गरिएको हो: `markAccountUnavailable` path मा opencode-विशेष rules कहिल्यै मिल्दैनन् (`checkFallbackError` लाई कुनै headers/body हस्तान्तरण गरिँदैन, opencode `FULL_TEXT_RULE_PROVIDERS` मा छैन), त्यसैले जुन 429 को body मा subscription-quota text ("monthly usage limit reached") हुन्छ त्यसलाई quota-text fallback (`buildSubscriptionQuotaFallback`, `accountFallback.ts`; 1h cooldown) ले `status_429` rule मा कहिल्यै पुग्नुअघि नै `quota_exhausted` वर्गीकृत गर्छ — जबकि quota-text-विहीन 429 (सामान्य rate limiting) `status_429` rule मार्फत `rate_limit_exceeded` को रूपमा वर्गीकृत हुन्छ र अझै पनि IP परिवारलाई cool down गर्छ। Allowlisted provider का लागि IP-बकेट गरिएको rate limit समाप्त भएको quota सँग उही signal हो। इमानदार सीमाहरू:

- **Best-effort**: लकले कनेक्सनको अन्तिम ज्ञात `egress_ip` लाई `proxy_logs` बाट निर्धारण गर्छ (24 घण्टे विन्डो, synchronous, कुनै क्यास छैन)। कोल्ड क्यास (egress IP कहिल्यै probe गरिएको छैन) वा कुनै row छैन भने → असफल कनेक्सनलाई ब्रान्चले अझै पनि cool गर्छ (आजकाल जस्तै रेकर्ड गरिन्छ), केवल कुनै sibling लक हुँदैन।
- **कहिल्यै terminal हुँदैन**: cooldown एउटा नवीकरण हुने quota window हो
  (`testStatus: "unavailable"`); IP-स्तरको संकेतबाट स्थायी अवस्था कहिल्यै निकालिँदैन। `disableCooling` कनेक्सनहरूले ब्रान्चलाई पूरै skip गर्छन्।
- **Allowlist गरिएको परिवारका लागि लक granularity परिवर्तन हुन्छ**: यो scope परिवर्तन हो, केवल sibling optimization मात्र होइन। opencode एउटा `passthroughModels`
  provider हो, त्यसैले यो ब्रान्चअघि 429 ले per-MODEL lockout उत्पन्न गर्थ्यो; अब यसले कनेक्सन cooldown उत्पन्न गर्छ — एउटै कनेक्सन चलाउने र कुनै sibling नै नभएको operator का लागि समेत। त्यो granularity नै opencode rule तालिकाले पहिलेदेखि नै सही भनी घोषणा गरेको छ (`scope: "connection"`,
  `providerErrorRules.ts`), तर अहिलेसम्म कहिल्यै honor गरिएको थिएन किनकि opencode
  `HONORS_RULE_LOCK_SCOPE_PROVIDERS` मा छैन। ब्रान्चले असफल कनेक्सनको cooldown + `backoffLevel` आफैँ लेख्छ, connection-scoped agentrouter ब्रान्चलाई mirror गर्दै, र return गर्छ — per-model block र तलको generic path कहिल्यै पुगिँदैन।
- **Combo समावेश**: agentrouter ब्रान्च जस्तै, scope ले combo caller ले 429 मा लागू गर्ने `persistUnavailableState`/`isCombo` downgrade लाई जानाजानी बेवास्ता गर्छ। per-model lockout यो scope को कमजोर रूप होइन, यो गलत एकाइ हो: यसले exhaust भएको IP बारे केही भन्दैन, त्यसैले combo rotation ले प्रत्येक sibling का लागि एउटा निश्चित-असफल call जलाइरहन्थ्यो।
- **Sibling सुरक्षा**: पहिल्यै terminal (banned/credits_exhausted) भएको
  वा पहिल्यै लामो cooldown मा रहेको sibling कहिल्यै overwrite हुँदैन।
- **विशेष allowlist**: `EGRESS_BUCKETED_LOCK_PROVIDERS` फराकिलो बनाउनु owner को स्पष्ट निर्णय हो; कुनै generic wiring छैन (pattern #10334/#10419)। sibling query ले त्यही allowlist लाई bind गर्छ, SQL literal को रूपमा दोहोर्याउनुको सट्टा, त्यसैले यसलाई फराकिलो बनाउनु एक-लाइनको परिवर्तनमै सीमित रहन्छ।
- **Egress IP rotation, दुवै दिशामा**: lookup window (24 घण्टा) egress-IP cache TTL (5 मिनेट) भन्दा धेरै फराकिलो छ, त्यसैले "अन्तिम ज्ञात IP" इतिहास हो, हालको अवस्था होइन। यदि कनेक्सनको proxy विन्डोभित्र rotate भएको छ भने लकले साँच्चै साझा भएको IP लाई **miss** गर्न सक्छ (रेकर्ड गरिएको IP नयाँ, unexhausted एउटा हो) — र सममित रूपमा यसले **त्यस्तो sibling लाई cool गर्न सक्छ जुन exhausted IP बाट rotate भइसकेको छ**। दोस्रो केसमा त्यस sibling ले एउटा cooldown window गुमाउँछ; दुवै history-आधारित lookup का स्वीकृत best-effort सीमाहरू हुन्।
- **लागत**: `proxy_logs` का दुई सीमित scan (`idx_pl_timestamp` मार्फत window-filter गरिएको), केवल 429 frequency मा। कुनै नयाँ index छैन (migration 134 YAGNI)। मध्यम आकारको real-traffic DB copy मा नापिएको; high-throughput instance ले उही विन्डोमा अनुपातिक रूपमा बढी row राख्छ।

---

## अन्य रिजिलियन्स सुविधाहरू

- **20 राउटिङ रणनीतिहरू** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — [AUTO-COMBO.md](../routing/AUTO-COMBO.md) हेर्नुहोस्।
- **Reset-aware राउटिङ** (v3.8.0) — कोटा रिसेट समयअनुसार कनेक्सनहरूलाई प्राथमिकता दिन्छ।
- **Background मोड डिग्रेडेसन** — Responses API को `background: true` चेतावनीसहित sync मा डिग्रेड गरिन्छ।
- **डायनामिक टुल सीमा पत्ता लगाउने** — टुल संख्या सीमा पुग्दा प्रोभाइडरहरूलाई ब्याक अफ गर्छ।
- **आपत्कालीन फलब्याक** — `OMNIROUTE_EMERGENCY_FALLBACK` द्वारा नियन्त्रित; अपरेटरहरूले रिस्टार्ट नगरी Feature Flags पेजबाट यसलाई ओभरराइड गर्न सक्छन्।

---

## डिबगिङ

- Weighted कम्बोले `503 all_targets_cooling_down` जवाफ दिन्छ (`Retry-After` सेट गरिएको, `diagnostics.excluded` ले प्रत्येक टार्गेटलाई `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable` सहित सूचीबद्ध गर्छ) → पुल कन्फिगर र जडान भएकै छ, प्रत्येक टार्गेट रिजिलियन्स टाइमरले बहिष्कृत गरिएको मात्र हो; `[COMBO] Weighted selection: every target excluded before dispatch — …` चेतावनीले कारणहरू र बाँकी सेकेन्डहरू उल्लेख गर्छ। उही कम्बोबाट आएको `404 no_executable_targets` भनेको कुनै रिजिलियन्स टाइमर संलग्न थिएन (चलाउन केही छैन, वा प्रत्येक खाता उपलब्धता प्रोबमा असफल भयो)। `targetResolution.ts` मा संकलन गरिएका बहिष्करणहरूबाट `open-sse/services/combo/pinRecovery.ts` मा निर्मित।
- कुनै प्रोभाइडरका सबै कुञ्जीहरू छोडियो → सर्किट ब्रेकर स्थिति र प्रत्येक कनेक्सनको `rateLimitedUntil`/`testStatus` दुवै जाँच्नुहोस्।
- रिसेट विन्डोपछि प्रोभाइडर स्थायी रूपमा बहिष्कृत → `getStatus()`/`canExecute()` को सट्टा कच्चा `state` पढिरहेको कोड।
- एउटा कुञ्जी असफल भयो, अरूले काम गर्नुपर्ने → सर्किट ब्रेकरभन्दा कनेक्सन कुलडाउनलाई प्राथमिकता दिनुहोस्।
- एउटा मात्र मोडेल असफल भयो → कनेक्सन कुलडाउनभन्दा मोडेल लकआउटलाई प्राथमिकता दिनुहोस्।
- स्थिति आफैं रिकभर हुनुपर्ने तर हुँदैन → भविष्यको टाइमस्ट्याम्प + समाप्त भएको स्थिति रिफ्रेस गर्ने रिड पाथ जाँच्नुहोस्। स्थायी स्थितिहरूमा म्यानुअल परिवर्तन आवश्यक हुन्छ।

---

## रनटाइम स्थिति — एजेन्ट द्रुत सन्दर्भ

> एजेन्ट गाइड 40k कन्टेक्स्ट बजेटभित्र रहने गरी `AGENTS.md` → "Resilience Runtime State" (PR #12743)
> बाट हुबहु सारिएको। यो माथिका सेक्सनहरूको संक्षिप्त, एजेन्ट-उन्मुख दृश्य हो; क्रमांकित
> सेक्सनहरू नै पूर्ण सन्दर्भ हुन्।

OmniRoute मा तीनवटा सम्बन्धित तर भिन्न अस्थायी-असफलता संयन्त्रहरू छन्। राउटिङ व्यवहार डिबग गर्दा तिनीहरूको
स्कोप अलग राख्नुहोस्। एकै नजरमा नक्सा हेर्न
[3-तह रिजिलियन्स डायाग्राम](../diagrams/exported/resilience-3layers.svg)
(स्रोत: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
हेर्नुहोस्।

### प्रोभाइडर सर्किट ब्रेकर

**स्कोप**: सम्पूर्ण प्रोभाइडर, जस्तै `glm`, `openai`, `anthropic`।

**उद्देश्य**: अपस्ट्रिम/सेवा स्तरमा बारम्बार असफल भइरहेको प्रोभाइडरमा ट्राफिक पठाउन
रोक्ने, जसरी एउटा अस्वस्थ प्रोभाइडरले हरेक अनुरोधलाई ढिलो नबनाओस्।

**कार्यान्वयन**:

- मुख्य क्लास: `src/shared/utils/circuitBreaker.ts`
- Chat गेट/एक्जिक्युसन वायरिङ: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- रनटाइम स्थिति API: `src/app/api/monitoring/health/route.ts`
- साझा र्यापरहरू: `open-sse/services/accountFallback.ts`
- पर्सिस्ट गरिएको स्थिति तालिका: `domain_circuit_breakers`

**स्थितिहरू** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: सामान्य ट्राफिक अनुमति दिइन्छ।
- `DEGRADED`: प्रारम्भिक-चेतावनी ब्यान्ड — असफलताहरूले डिग्रेडेसन थ्रेसहोल्ड कटे तर अझै
  ब्रेकर थ्रेसहोल्ड कटेको छैन; ट्राफिक अझै बग्छ, ड्यासबोर्डहरूमा चेतावनी देखिन्छ। मान्य कनेक्सन
  परीक्षण वा नयाँ असफलता नभएको शान्त विन्डोले यसलाई `CLOSED` मा फर्काउँछ
  (विन्डो `docs/architecture/RESILIENCE_GUIDE.md` मा छ)।
- `OPEN`: प्रोभाइडर अस्थायी रूपमा ब्लक गरिएको छ; कलरहरूले प्रोभाइडर-सर्किट-खुला प्रतिक्रिया
  पाउँछन् वा कम्बो राउटिङले अर्को टार्गेटमा जान्छ।
- `HALF_OPEN`: रिसेट टाइमआउट सकिएको छ; प्रोब अनुरोधलाई अनुमति दिनुहोस्। सफलताले
  ब्रेकर बन्द गर्छ, असफलताले फेरि खोल्छ।

**डिफल्टहरू** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, `src/lib/resilience/settings.ts` मा रहेको
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` मार्फत उपभोग गरिन्छ →
`src/sse/handlers/chatHelpers.ts` मा रहेको `getCircuitBreaker(provider, …)`)। सम्पूर्ण-प्रोभाइडर
ब्रेकर `circuitBreakerThreshold` / `circuitBreakerReset` मा चल्छ:

| प्रोफाइल | डिग्रेड हुने | खुल्ने (`circuitBreakerThreshold`) | रिसेट (`circuitBreakerReset`) |
| -------- | -----------: | ---------------------------------: | ----------------------------: |
| OAuth    |          `5` |                                `8` |                         `60s` |
| API key  |          `7` |                               `12` |                         `30s` |
| Local    | (व्युत्पन्न) |                                `2` |                         `15s` |

`PROVIDER_PROFILES` ले `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (15/30/5 मिनेट) र `providerCooldownMs` (5/10/1 मिनेट) पनि परिभाषित गर्छ: यिनीहरूले
**अप्ट-इन ग्लोबल Provider Cooldown को विन्डो गेट** (`PROVIDER_COOLDOWN_ENABLED`, डिफल्ट
बन्द) चलाउँछन् — `open-sse/services/providerCooldownTracker.ts` मा रहेको प्रोभाइडर-स्तरीय इन्ट्री
`providerFailureWindowMs` भित्र `providerFailureThreshold` असफलताहरूपछि मात्र
कुलिङको रूपमा गणिन्छ, र त्यसपछि `providerCooldownMs` सम्म कुल हुन्छ। यी लाइभ ब्रेकरका थ्रेसहोल्डहरू
होइनन् — ब्रेकर व्यवहार अपेक्षा गरेर यिनीहरू ट्युन नगर्नुहोस्। हरेक डिफल्ट
`OMNIROUTE_PROVIDER_BREAKER_*` र `OMNIROUTE_CIRCUIT_BREAKER_*` env भेरिएबलहरूमार्फत ओभरराइड गर्न सकिन्छ;
रनटाइम-सटीक सन्दर्भ तालिका `docs/architecture/RESILIENCE_GUIDE.md` मा छ।

केवल प्रोभाइडर-स्तरीय असफलता स्थितिहरूले मात्र प्रोभाइडर ब्रेकर ट्रिप गर्नुपर्छ:

```ts
(408, 500, 502, 503, 504);
```

धेरैजसो `401`, `403`, वा `429` केसहरूजस्ता सामान्य खाता/कुञ्जी/मोडेल त्रुटिहरूका लागि
सम्पूर्ण-प्रोभाइडर ब्रेकर ट्रिप नगर्नुहोस्। ती सामान्यतया कनेक्सन कुलडाउन वा मोडेल
लकआउटसँग सम्बन्धित हुन्छन्। जेनेरिक API-कुञ्जी प्रोभाइडरको `403` रिकभर गर्न मिल्ने
हुनुपर्छ जबसम्म यसलाई टर्मिनल प्रोभाइडर/खाता त्रुटिको रूपमा वर्गीकृत गरिएको छैन।

ब्रेकरले lazy recovery प्रयोग गर्छ, ब्याकग्राउन्ड टाइमर होइन। जब `OPEN` समाप्त हुन्छ, `getStatus()`, `canExecute()`, र `getRetryAfterMs()` जस्ता रिडहरूले स्टेटलाई `HALF_OPEN` मा रिफ्रेस गर्छन्, त्यसैले ड्यासबोर्डहरू र कम्बो क्यान्डिडेट बिल्डरहरूले समाप्त भइसकेको प्रोभाइडरलाई सधैँभरि बाहिर राखिरहँदैनन्।

### कनेक्सन कुलडाउन

**दायरा**: एउटा प्रोभाइडर कनेक्सन/खाता/की।

**उद्देश्य**: एउटै प्रोभाइडरका अन्य कनेक्सनहरूले अनुरोधहरू सेवा दिइरहन दिँदै एउटा खराब की/खातालाई अस्थायी रूपमा छोड्नु।

**कार्यान्वयन**:

- लेख्ने/अपडेट गर्ने बाटो: `src/sse/services/auth.ts::markAccountUnavailable()`
- खाता छनोट/फिल्टरिङ: `src/sse/services/auth.ts::getProviderCredentials...`
- कुलडाउन गणना: `open-sse/services/accountFallback.ts::checkFallbackError()`
- सेटिङहरू: `src/lib/resilience/settings.ts`

प्रोभाइडर कनेक्सनहरूमा महत्वपूर्ण फिल्डहरू:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

खाता छनोटका क्रममा, कुनै कनेक्सनलाई यस्तो अवस्थामा छोडिन्छ:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

कुलडाउनहरू पनि lazy छन्: जब `rateLimitedUntil` विगतमा हुन्छ, कनेक्सन फेरि योग्य बन्छ। सफल प्रयोगपछि, `clearAccountError()` ले `testStatus`, `rateLimitedUntil`, एरर फिल्डहरू, र `backoffLevel` खाली गर्छ।

डिफल्ट कनेक्सन कुलडाउन व्यवहार:

- OAuth आधार कुलडाउन: `5s`।
- API-key आधार कुलडाउन: `3s`।
- API-key `429` ले उपलब्ध हुँदा अपस्ट्रिम रिट्राइ संकेतहरू (`Retry-After`, रिसेट हेडरहरू, वा पार्स गर्न सकिने रिसेट टेक्स्ट) लाई प्राथमिकता दिनुपर्छ।
- दोहोरिने रिकभर गर्न सकिने फेलचरहरूले एक्स्पोनेन्सियल ब्याकअफ प्रयोग गर्छन्:

```ts
baseCooldownMs * 2 ** failureIndex;
```

एन्टि-थन्डरिङ-हर्ड गार्डले एउटै कनेक्सनमा एकसाथ हुने फेलचरहरूले कुलडाउनलाई बारम्बार लम्बाउने वा `backoffLevel` लाई दोहोरो-इन्क्रिमेन्ट गर्ने कुराबाट रोक्छ।

टर्मिनल स्टेटहरू कुलडाउन होइनन्। `banned`, `expired` (जो `EXPIRED_RETRY_MAX` मार्फत N वटा सीमित रिट्राइपछि मात्र टर्मिनल हुन्छ), र `credits_exhausted` क्रेडेन्सियल/सेटिङहरू नबदलिएसम्म वा अपरेटरले रिसेट नगरेसम्म अनुपलब्ध नै रहनका लागि हुन्। टर्मिनल स्टेटहरूलाई क्षणिक कुलडाउन स्टेटले अधिलेखन नगर्नुहोस्।

### मोडेल लकआउट

**दायरा**: प्रोभाइडर + कनेक्सन + मोडेल।

**उद्देश्य**: त्यस कनेक्सनका लागि एउटा मात्र मोडेल अनुपलब्ध वा कोटा-सीमित हुँदा सम्पूर्ण कनेक्सनलाई निस्क्रिय पार्नबाट बच्नु।

उदाहरणहरू:

- प्रति-मोडेल कोटा भएका प्रोभाइडरहरूले `429` फर्काउनु।
- एउटा हराइरहेको मोडेलका लागि लोकल प्रोभाइडरहरूले `404` फर्काउनु।
- छानिएका Grok मोडहरू जस्ता प्रोभाइडर-विशिष्ट मोड/मोडेल अनुमति फेलचरहरू।

मोडेल लकआउट `open-sse/services/accountFallback.ts` मा रहन्छ र उही कनेक्सनलाई अन्य मोडेलहरू सेवा दिइरहन दिन्छ।

### डिबगिङ मार्गदर्शन

- यदि कुनै प्रोभाइडरका सबै कीहरू छोडिएका छन् भने, प्रोभाइडर ब्रेकर स्टेट र प्रत्येक कनेक्सनको `rateLimitedUntil`/`testStatus` दुवै जाँच्नुहोस्।
- यदि रिसेट विन्डोपछि पनि कुनै प्रोभाइडर स्थायी रूपमा बाहिरिएको देखिन्छ भने, कोडले `getStatus()`/`canExecute()` प्रयोग गर्नुको सट्टा कच्चा `state` पढिरहेको छ कि जाँच्नुहोस्।
- यदि एउटा प्रोभाइडर की फेल हुन्छ तर अरूले काम गर्नुपर्ने हो भने, प्रोभाइडर ब्रेकरभन्दा कनेक्सन कुलडाउनलाई प्राथमिकता दिनुहोस्।
- यदि एउटा मात्र मोडेल फेल हुन्छ भने, कनेक्सन कुलडाउनभन्दा मोडेल लकआउटलाई प्राथमिकता दिनुहोस्।
- यदि कुनै स्टेट आफैँ रिकभर हुनुपर्ने हो भने, त्यससँग भविष्यको टाइमस्ट्याम्प/रिसेट टाइमआउट र समाप्त भएको स्टेट रिफ्रेस गर्ने रिड पाथ हुनुपर्छ। स्थायी स्ट्याटसहरूका लागि म्यानुअल क्रेडेन्सियल वा कन्फिग परिवर्तनहरू आवश्यक हुन्छन्।

---

## TLS फिंगरप्रिन्टिङ र स्टेल्थ

प्रोभाइडर-विशिष्ट स्टेल्थ (JA3/JA4, CCH, अस्पष्टीकरण) अलग्गै दस्तावेजीकरण गरिएको छ — `docs/security/STEALTH_GUIDE.md` हेर्नुहोस् (git; `/docs` मा कम्पाइल गरिएको छैन)।

---

## लचीलोपन परीक्षण (चरण 8 · ब्लक C)

लचीलोपन तर्कका लागि एकाइ परीक्षणहरूभन्दा बाहिर, तीनवटा परीक्षणहरूले वास्तविक
तनाव/विफलता अवस्थाहरूमा रनटाइमलाई परीक्षण गर्छन् (सबै integration/nightly — कुनै पनि
ले PR लाई ब्लक गर्दैनन्):

| परीक्षण     | के                                                                                                                                                                                                          | चलाउने तरिका                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Chaos       | नक्कली-अपस्ट्रिम नोडले वास्तविक latency/reset/timeout/503 इन्जेक्ट गर्छ; सर्किट ब्रेकर खुल्ने/रिकभर हुने र `checkFallbackError` ले 503 लाई रिकभर हुन सक्ने फलब्याकको रूपमा वर्गीकृत गर्छ भनी प्रमाणित गर्छ। | `RUN_CHAOS_INT=1 npm run test:chaos`     |
| Heap-growth | `--expose-gc` अन्तर्गत प्रत्येक `createSSEStream` मा ~५०० स्ट्रिमहरू; हिप सीमा भन्दा माथि बढ्यो भने असफल हुन्छ (OOM गार्ड #3069)।                                                                           | `npm run test:heap`                      |
| k6 soak     | `/api/monitoring/health` विरुद्ध निरन्तर लोड; p95/त्रुटि थ्रेसहोल्डहरू।                                                                                                                                     | `k6 run tests/load/k6-soak.js` (nightly) |

यसलाई `.github/workflows/nightly-resilience.yml` (cron + dispatch) ले अर्केस्ट्रेट गर्छ।
डिफल्ट `test:integration` मा, chaos र heap आफैं स्किप हुन्छन् (`RUN_CHAOS_INT`/`--expose-gc` बिना)।

---

## यह पनि हेर्नुहोस्

- [आर्किटेक्चर गाइड](./ARCHITECTURE.md) — प्रणाली आर्किटेक्चर र आन्तरिक विवरणहरू
- [प्रयोगकर्ता गाइड](../guides/USER_GUIDE.md) — प्रोभाइडरहरू, कम्बोहरू, CLI एकीकरण
- [अटो-कम्बो इन्जिन](../routing/AUTO-COMBO.md) — १६-कारक स्कोरिङ, मोड प्याकहरू
