# Resilience Guide (ગુજરાતી)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute પાસે ત્રણ અલગ પરંતુ એકબીજા સાથે સંબંધિત રેઝિલિયન્સ મિકેનિઝ્મ છે. દરેકનો અવકાશ અને હેતુ અલગ છે. રૂટિંગ વર્તન ડીબગ કરતી વખતે તેમને અલગ રાખો.

![3-સ્તરીય રેઝિલિયન્સ મોડેલ](../diagrams/exported/resilience-3layers.svg)

> સ્રોત: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. પ્રોવાઈડર સર્કિટ બ્રેકર

**અવકાશ:** સમગ્ર પ્રોવાઈડર (દા.ત., `glm`, `openai`, `anthropic`).

**હેતુ:** અપસ્ટ્રીમ/સર્વિસ સ્તરે વારંવાર નિષ્ફળ થઈ રહેલા પ્રોવાઈડરને ટ્રાફિક મોકલવાનું બંધ કરવું.

**અમલીકરણ:**

- કોર ક્લાસ: `src/shared/utils/circuitBreaker.ts`
- વાયરિંગ: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- સ્ટેટસ API: `GET /api/monitoring/health`
- રીસેટ API: `POST /api/resilience/reset`
- રેપર્સ: `open-sse/services/accountFallback.ts`
- DB ટેબલ: `domain_circuit_breakers`

**સ્થિતિઓ:**

- `CLOSED` — સામાન્ય ટ્રાફિકને મંજૂરી
- `DEGRADED` — ટ્રાફિકને હજુ પણ મંજૂરી છે, પરંતુ વધી રહેલી પ્રોવાઈડર નિષ્ફળતાઓ ટ્રેક થઈ રહી છે; પૂરતી સફળતાઓ પર, માન્ય કનેક્શન ટેસ્ટ પર, અથવા છેલ્લા નિષ્ફળતા પ્રકાર માટેના સૌથી લાંબા `OPEN` હોલ્ડ (તેનું `cooldownByKind` મૂલ્ય, નહીંતર `resetTimeout`, × `maxBackoffMultiplier`, ઓછામાં ઓછું એક કૂલડાઉન) પછી નવી નિષ્ફળતા વગર `CLOSED` પર પાછું ફરે છે
- `OPEN` — પ્રોવાઈડર અસ્થાયી રૂપે અવરોધિત; કોમ્બો રૂટિંગ તેને સ્કિપ કરે છે
- `HALF_OPEN` — રીસેટ ટાઈમઆઉટ પૂરો થયો; પ્રોબ રિક્વેસ્ટને મંજૂરી

**કન્ફિગર કરી શકાય તેવા ડિફોલ્ટ્સ (`open-sse/config/constants.ts`, ડેશબોર્ડ → સેટિંગ્સ → રેઝિલિયન્સ માં દર્શાવેલ):**

| વર્ગ    | ડિગ્રેડ થાય ત્યારે | ઓપન થાય ત્યારે | રીસેટ ટાઈમઆઉટ |
| ------- | ------------------ | -------------- | ------------- |
| OAuth   | 5 નિષ્ફળતાઓ        | 8 નિષ્ફળતાઓ    | 60s           |
| API-key | 7 નિષ્ફળતાઓ        | 12 નિષ્ફળતાઓ   | 30s           |
| Local   | વ્યુત્પન્ન         | 2 નિષ્ફળતાઓ    | 15s           |

`degradationThreshold` નિયંત્રિત કરે છે કે પ્રોવાઈડર ક્યારે `DEGRADED` માં પ્રવેશે; `failureThreshold` નિયંત્રિત કરે છે કે તે ક્યારે ઓપન થાય અને સ્કિપ થાય. લોકલ પ્રોવાઈડર પ્રોફાઇલ્સ હજુ રેઝિલિયન્સ સેટિંગ્સ પેજ પર દર્શાવવામાં આવતી નથી.

**ટ્રિપ કોડ્સ:** ફક્ત પ્રોવાઈડર-સ્તરીય સ્ટેટસ `[408, 500, 502, 503, 504]`. એકાઉન્ટ-સ્તરીય ભૂલો માટે ટ્રિપ કરશો નહીં (મોટાભાગના 401/403/429 — તે કૂલડાઉન અથવા લોકઆઉટમાં આવે છે).

**લેઝી રિકવરી:** જ્યારે `OPEN` સમાપ્ત થાય, ત્યારે `getStatus()`, `canExecute()`, `getRetryAfterMs()` સ્થિતિને `HALF_OPEN` પર રિફ્રેશ કરે છે. એ જ રીડ્સ (અને આગળની નિષ્ફળતા) જૂના `DEGRADED` ને ફરી `CLOSED` પર ઘટાડે છે. કોઈ બેકગ્રાઉન્ડ ટાઈમરની જરૂર નથી.

---

### ઓપ્ટ-ઇન ગ્લોબલ પ્રોવાઈડર કૂલડાઉન (વિન્ડો ગેટ)

ચોથો, **ઓપ્ટ-ઇન** સ્તર (`PROVIDER_COOLDOWN_ENABLED`, ડિફોલ્ટ **બંધ**) નિષ્ફળ
થયેલા પ્રોવાઈડર્સની ક્રોસ-રિક્વેસ્ટ મેમરી
`open-sse/services/providerCooldownTracker.ts` માં રાખે છે, જેનો સંદર્ભ કોમ્બો ટાર્ગેટ
રિઝોલ્યુશન દ્વારા લેવામાં આવે છે જેથી ક્રમિક કોમ્બો રિક્વેસ્ટ્સ હમણાં જ
નિષ્ફળ થયેલા પ્રોવાઈડર પર ફરીથી ન ફરે. પ્રોવાઈડર-સ્તરીય એન્ટ્રીઓ `PROVIDER_PROFILES`
વિન્ડો ગેટનું પાલન કરે છે:

| પ્રોફાઇલ | આ પછી ટ્રિપ થાય (`providerFailureThreshold`) | આ વિન્ડોની અંદર (`providerFailureWindowMs`) | આટલા માટે કૂલ થાય (`providerCooldownMs`) |
| -------- | -------------------------------------------: | ------------------------------------------: | ---------------------------------------: |
| OAuth    |                                         `10` |                                     `15min` |                                   `5min` |
| API key  |                                         `15` |                                     `30min` |                                  `10min` |

થ્રેશોલ્ડથી નીચે પ્રોવાઈડર કૂલિંગ ગણવામાં આવતો **નથી**; સફળતા
વિન્ડો સાફ કરે છે. કનેક્શન-સ્તરીય એન્ટ્રીઓ (`provider:connectionId`) તેના બદલે
ઘાતાંકીય `minRetryCooldownMs → maxRetryCooldownMs` બેકઑફ જાળવી રાખે છે. ઓવરરાઈડ્સ:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
રિગ્રેશન ગાર્ડ: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. કનેક્શન કૂલડાઉન

**અવકાશ:** એક પ્રોવાઇડર કનેક્શન/એકાઉન્ટ/કી.

**હેતુ:** એક ખરાબ કીને સ્કિપ કરવી જ્યારે એ જ પ્રોવાઇડરના અન્ય કનેક્શનો સેવા આપતા રહે.

**અમલીકરણ:**

- અનુપલબ્ધ તરીકે ચિહ્નિત કરવું: `src/sse/services/auth.ts::markAccountUnavailable()`
- પસંદગી: એ જ ફાઇલમાં `getProviderCredentials*`
- કૂલડાઉન ગણતરી: `open-sse/services/accountFallback.ts::checkFallbackError()`
- સેટિંગ્સ: `src/lib/resilience/settings.ts`

**દરેક કનેક્શનના ફીલ્ડ્સ:**

- `rateLimitedUntil` — કૂલડાઉન સમાપ્ત થાય ત્યાં સુધીનો ટાઇમસ્ટેમ્પ
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — એક્સપોનેન્શિયલ બેકઑફ કાઉન્ટર

**ડિફૉલ્ટ કૂલડાઉન્સ:**

- OAuth બેઝ: 5s
- API-કી બેઝ: 3s
- API-કી 429: અપસ્ટ્રીમ `Retry-After`/રીસેટ હેડર્સ/પાર્સ કરી શકાય તેવા રીસેટ ટેક્સ્ટને પ્રાથમિકતા આપે છે
- બેકઑફ: `baseCooldownMs * 2 ** failureIndex`

**એન્ટિ-થંડરિંગ-હર્ડ ગાર્ડ:** એકસાથે થતી નિષ્ફળતાઓ કૂલડાઉનને વધુ પડતી લંબાવે અથવા `backoffLevel` બમણું વધારે તે અટકાવે છે.

**કન્કરન્સી-લિમિટ 429 બેકઑફ સીડી ચઢતા નથી.** `429` જેના બોડીમાં કન્કરન્સી લિમિટની
જાણ થાય છે ("too many concurrent requests", "concurrency limit", "parallel request
limit", GLM `并发数过高`) તેનો અર્થ એ છે કે એકાઉન્ટ તંદુરસ્ત છે પણ વ્યસ્ત છે.
`checkFallbackError()` કારણ `concurrency_limited` પરત કરે છે: હમણાં જ આગલા
કનેક્શન પર ફેલઓવર કરો, આ કનેક્શનને નિશ્ચિત `CONCURRENCY_LIMIT_COOLDOWN_MS` (1s) અથવા
અપસ્ટ્રીમ રીટ્રાય હિન્ટ માટે કૂલ કરો, `backoffLevel` અયથાવત રાખો અને `skipProviderBreaker`
સેટ કરો. સ્પષ્ટ ક્વોટા બોડી હજુ પણ જીતે છે, એટલે કે ક્વોટા પેટર્ન સાથે પણ મેળ ખાતી
બોડી ક્વોટા ચુકાદો જ રહે છે. શોધ: `looksLikeConcurrencyLimit()` in `src/shared/utils/classify429.ts`;
ચુકાદો: `open-sse/services/accountFallback/concurrencyLimit429.ts`. `classify429()` (બ્રેકરનો
`FailureKind`) અયથાવત છે અને આ બોડીઓ માટે હજુ `rate_limit` જ વાંચે છે.

**સ્ટ્રીમ કન્ટેન્ટ સ્ટૉલ એકાઉન્ટને કૂલ કરતું નથી.** જ્યારે કન્ટેન્ટ-સ્ટૉલ વોચડોગ
(`open-sse/utils/streamHandler.ts`) એવી સ્ટ્રીમથી હાર માની લે છે જેણે સમયસર કોઈ મોડલ આઉટપુટ
મોકલ્યું નથી, ત્યારે `markAccountUnavailable()` કનેક્શન પર ભૂલ નોંધે છે પણ કોઈ
કૂલડાઉન સેટ કરતું નથી: સ્ટૉલ તે રીક્વેસ્ટની જ છે, મોટેભાગે એવા લાંબા રીઝનિંગ ટર્નની
જેમાં હજુ કોઈ આઉટપુટ નથી. ઓપરેટર્સ `resilienceSettings.streamStallCooldown.enabled`
(ડિફૉલ્ટ `false`) વડે ફરીથી ઓપ્ટ-ઇન કરી શકે છે.

**રીઝનિંગ ફ્રેમ્સ કન્ટેન્ટ-સ્ટૉલ બજેટ રીસ્ટાર્ટ કરે છે.** રીઝનિંગ મોડલ તેના પ્રથમ
દૃશ્યમાન ટોકન પહેલાં મિનિટો સુધી વિચારી શકે છે: Claude `thinking_delta` ફ્રેમ્સ સ્ટ્રીમ કરે
છે જેમનો થિંકિંગ ટેક્સ્ટ ખાલી હોઈ શકે છે, અને Responses API એક પછી એક રીઝનિંગ આઇટમ
સ્ટ્રીમ કરે છે. `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) આ ફ્રેમ્સ
ઓળખે છે, અને વોચડોગ ટર્ન રદ કરવાને બદલે દરેક પર પોતાનું બજેટ રીસ્ટાર્ટ કરે છે.
તેમ છતાં તેઓ મોડલ આઉટપુટ નથી, તેથી ફક્ત રીઝનિંગ સાથે સમાપ્ત થતું ટર્ન હજુ ખાલી તરીકે
રિપોર્ટ થાય છે, અને રીઝનિંગ બંધ કરીને ફક્ત હાર્ટબીટ મોકલતું ટર્ન હજુ વોચડોગને ટ્રિપ
કરે છે.

નોન-એમ્પ્ટી સિગ્નેચર ધરાવતી Kiro ની બાઈનરી `reasoningContentEvent` ફ્રેમ્સ આ રીઝનિંગ
પ્રવૃત્તિને એક્ઝિક્યુટર મારફતે ખાલી `reasoning_content` ડેલ્ટા તરીકે જાળવી રાખે છે. સિગ્નેચર
આગળ મોકલવામાં આવતું નથી. મેટાડેટા, અધૂરી ફ્રેમ્સ અને ખાલી સિગ્નેચર કન્ટેન્ટ બજેટ
રીસ્ટાર્ટ કરતા નથી; સ્વતંત્ર ઍક્ટિવ-સ્ટ્રીમ ટાઇમઆઉટ અને ક્લાયન્ટ કેન્સલેશન હજુ
લાગુ પડે છે (`open-sse/executors/kiro/reasoning.ts`).

**ટર્મિનલ સ્થિતિઓ (કૂલડાઉન નથી):**

- `banned` — પ્રતિબંધિત-કીવર્ડ / એકાઉન્ટ-બૅન શોધ દ્વારા સેટ થાય છે (જુઓ [BAN_DETECTION](../security/BAN_DETECTION.md)), અને ત્રણ ક્રમિક અપસ્ટ્રીમ પ્રતિ-રીક્વેસ્ટ નકારથી (`request_rejected`, દા.ત. Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); એકલ નકાર ફક્ત કનેક્શનને કૂલ કરે છે
- `expired` (મર્યાદિત રીટ્રાય પછી ટર્મિનલમાં સ્થાનાંતરિત થાય છે — એક્સપોનેન્શિયલ બેકઑફ સાથે `EXPIRED_RETRY_MAX = 3` — જેથી ક્ષણિક OAuth ભૂલો એકાઉન્ટ કાયમી નિષ્ક્રિય થાય તે પહેલાં જાતે સુધરી શકે)
- `credits_exhausted`

ક્રેડેન્શિયલ્સ બદલાય અથવા ઓપરેટર તેને રીસેટ કરે ત્યાં સુધી આ ટકી રહે છે. ટર્મિનલ સ્થિતિઓને ક્ષણિક કૂલડાઉન સ્થિતિથી ઓવરરાઇટ કરશો નહીં.

**લેઝી રિકવરી:** જ્યારે `rateLimitedUntil` વીતી જાય, ત્યારે કનેક્શન ફરીથી પાત્ર બને છે. સફળ ઉપયોગ પર, `clearAccountError()` તમામ ભૂલ ફીલ્ડ્સ સાફ કરે છે.

### Claude OAuth વપરાશ દીવાલ: લોઅર-પ્રાયોરિટી લેન + સેશન-લિમિટ રીસેટ

**અવકાશ:** એક Claude સબ્સ્ક્રિપ્શન (OAuth) કનેક્શન. બંને ફીચર્સ **પ્રતિ-કનેક્શન
ઓપ્ટ-ઇન** છે (કનેક્શન એડિટ કરો → Claude વિભાગ → `providerSpecificData` માં
`lowPriorityMode` / `autoLimitReset`, બંને ડિફૉલ્ટ રૂપે બંધ) અને Claude Code ના
`/low-priority` અને `/limit-reset` કમાન્ડ્સનું પ્રતિબિંબ છે (Claude Code 2.1.263 માંથી
કેપ્ચર કરેલ વાયર કોન્ટ્રાક્ટ).

**અમલીકરણ:**

- સ્ટેટ મશીન + રિસ્પોન્સ વર્ગીકરણ: `open-sse/services/claudeLowPriority.ts`
- રીસેટ સ્ટેટસ/ક્લેમ ક્લાયન્ટ: `open-sse/services/claudeLimitReset.ts`
- એક્ઝિક્યુટર હુક (હેડર ઇન્જેક્શન + સેમ-એકાઉન્ટ રીટ્રાય): `open-sse/executors/base.ts::execute()`
- ઓપ્ટ-ઇન પર્સિસ્ટન્સ: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**ટ્રિગર:** 5-કલાકની વપરાશ દીવાલ — `429` જેના હેડર્સમાં
`anthropic-ratelimit-unified-status: rejected` હોય છે અને, જ્યારે એકાઉન્ટ પાત્ર હોય ત્યારે,
`anthropic-ratelimit-unified-slow-offer: treatment`. તે પ્રથમ દીવાલ 429 પહેલાં કંઈ મોકલવામાં
આવતું નથી; યુનિફાઇડ હેડર્સ વગરનો બર્સ્ટ 429 સામાન્ય કૂલડાઉન માર્ગથી પસાર થાય છે.

**લોઅર-પ્રાયોરિટી લેન** (`lowPriorityMode`):

- વોલ 429 પર એક્ઝિક્યુટર ઓફર સ્વીકારે છે અને `anthropic-usage-limit: slow` સાથે તુરંત જ **એ જ** એકાઉન્ટ સાથે ફરી પ્રયાસ કરે છે; જાહેર કરાયેલા `anthropic-ratelimit-unified-reset` (+60s ગ્રેસ) સુધી લેન સક્રિય રહે છે અને તે વિન્ડોની દરેક રિક્વેસ્ટ આ હેડર ધરાવે છે. અટકાવેલો 429 ક્યારેય `handleChatCore` સુધી પહોંચતો નથી, તેથી કનેક્શન કૂલડાઉનમાં મૂકવામાં આવતું **નથી** અને રોટેટ કરીને દૂર પણ કરવામાં આવતું નથી.
- પછીના રિસ્પોન્સ પર `anthropic-ratelimit-unified-slow-status`: `active` / `not_needed` લેન જાળવી રાખે છે; `slot_busy` (429) અથવા `529` સર્વરના `anthropic-ratelimit-unified-slow-retry-after` (ડિફોલ્ટ 20s, ક્લેમ્પ 5–600s, ±30% જિટર) જેટલી રાહ જુએ છે અને ફરી પ્રયાસ કરે છે, જે `anthropic-ratelimit-unified-slow-max-wait` (ડિફોલ્ટ 20 મિનિટ, ક્લેમ્પ 1 મિનિટ–6 કલાક) દ્વારા મર્યાદિત છે — તેની પછી લેન સમાપ્ત થાય છે અને 10-મિનિટનો કૂલ-ઓફ ફરી-સ્વીકારને અવરોધે છે. આ રાહ વધુમાં રિક્વેસ્ટના પોતાના અપસ્ટ્રીમ-સ્ટાર્ટ ટાઇમઆઉટ (`resolveFetchStartTimeout`, ડિફોલ્ટ 10 મિનિટ)માંથી 5 s માર્જિન બાદ કરતાં જે બચે છે તેટલામાં પણ કેપ થાય છે: તે કેપ વિના 20-મિનિટની ડિફોલ્ટ max-wait રિક્વેસ્ટ કરતાં લાંબી ટકી જાત અને સ્લીપ રાહની વચ્ચે જ અબોર્ટ થઈ જાત, જેનાથી ગ્રેસફુલ `max_wait` સમાપ્તિ + કૂલ-ઓફને બદલે `TimeoutError` દેખાત.
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, 5h-વિન્ડો રોલઓવર, અથવા `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (જે કોઈપણ સ્ટેટસ પર લેનને `extra_usage` તરીકે સમાપ્ત કરે છે, કારણ કે ચૂકવણીયુક્ત ઓવરેજ હવે વોલને આવરી લે છે) લેન સમાપ્ત કરે છે; પછી રિસ્પોન્સ સામાન્ય કૂલડાઉન પાથમાં વહે છે. `budget_exhausted` જાહેર કરાયેલા બજેટ રીસેટ (≤ 8 દિવસ) સુધી યાદ રાખવામાં આવે છે.
- વોલ ચેક એક્ઝિક્યુટરના પોતાના 400-આધારિત ઇન્ટ્રા-અટેમ્પ્ટ ફરી પ્રયાસો (કોન્ટેક્સ્ટ એડિટિંગ, thinking/effort ક્લેમ્પ, પેરામ ઓટો-લર્ન) પછી ચાલે છે, તેથી જે વોલ 429 ફક્ત તે ફરી પ્રયાસોમાંના કોઈ એક પર જ દેખાય છે તે પણ કૂલડાઉન પાથ સુધી પહોંચવાને બદલે અટકાવવામાં જ આવે છે.
- સ્થિતિ દરેક કનેક્શન માટે ઇન-મેમરી છે (રીસ્ટાર્ટ કરવાથી ફરી-સ્વીકાર માટે એક વધારાનો વોલ 429 ખર્ચાય છે).

**સેશન-મર્યાદા રીસેટ** (`autoLimitReset`, બંને ચાલુ હોય ત્યારે લેન પહેલાં અજમાવાય છે):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → `juniper_tide` બ્લોક; જ્યારે `arm: "reset"` અને `available: true` હોય, ત્યારે `{ "program": "juniper_tide" }` સાથે `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` (ઓર્ગેનાઇઝેશન UUID `providerSpecificData.organizationUUID` પરથી, બૂટસ્ટ્રેપ ફોલબેક).
- `result: reset|not_limited` → રિક્વેસ્ટ સંપૂર્ણ ઝડપે ફરી અજમાવવામાં આવે છે (કોઈ slow હેડર નહીં). `already_used` / `not_offered` `next_available_at` મેમોઇઝ કરે છે (ડિફોલ્ટ એક અઠવાડિયું); કોઈપણ નિષ્ફળતા 15 મિનિટ બેક ઓફ કરે છે. રીસેટ અઠવાડિયામાં એક જ વાર થાય છે અને તે છતાં સાપ્તાહિક મર્યાદામાં ગણાય છે.

રિગ્રેશન ગાર્ડ: `tests/unit/claude-low-priority-mode.test.ts`, `tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`.

### સેશન એફિનિટી (#7274)

**અવધિ:** એક ક્લાયન્ટ સેશન (`X-Session-Id` / `x-codex-session-id` / `x-omniroute-session` હેડર) એક કનેક્શન સાથે પિન કરાયેલું, **કોઈપણ** પ્રોવાઇડર માટે.

**હેતુ:** બહુ-ટર્ન એજન્ટ (Claude Code, aider, કસ્ટમ એજન્ટ)ને રિક્વેસ્ટો પાર એ જ એકાઉન્ટ પર રાખવું, જેથી ક્રોસ-એકાઉન્ટ કોન્ટેક્સ્ટ ખોવાવું અને પ્રતિ-એકાઉન્ટ સેશન સ્થિતિ ધરાવતા પ્રોવાઇડર્સ પર વારંવારના કોલ્ડ-સ્ટાર્ટ 429 ઓછા થાય.

**અમલીકરણ:**

- TTL રિઝોલ્યુશન: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- પિન પસંદગી/બનાવટ: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- હેડર એક્સટ્રેક્શન (જેનરિક, કોઈપણ પ્રોવાઇડર): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- પર્સિસ્ટેડ પિન ટેબલ: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- સેટિંગ: `sessionAffinityTtlMs` (ગ્લોબલ TTL ms માં, `0` અક્ષમ કરે છે) — `src/lib/db/settings.ts`. માઇગ્રેશન `124_generic_session_affinity_ttl.sql` દ્વારા Codex-માત્ર `codexSessionAffinityTtlMs` માંથી નામ બદલવામાં આવ્યું, જે અગાઉ ગોઠવાયેલા કોઈપણ Codex TTL ને નવી ડિફોલ્ટ તરીકે ટ્રાન્સફર કરે છે.

#7274 પહેલાં, `resolveSessionAffinityTtlMs()` `codex` સિવાયના દરેક પ્રોવાઇડર માટે `0` પર હાર્ડ-બેઇલ કરતું, તેથી પિનિંગ મિકેનિઝમ અને હેડર એક્સટ્રેક્શન પહેલેથી જ પ્રોવાઇડર-અજ્ઞેય હોવા છતાં TTL સેટિંગની (અને સેશન હેડર્સની) બીજે ક્યાંય કોઈ અસર થતી ન હતી. ફિક્સે તે અર્લી-રિટર્ન દૂર કર્યું; હવે ગ્લોબલી `0` થી ઉપર સેટ થતાં જ TTL દરેક પ્રોવાઇડર પર એકસરખું લાગુ થાય છે.

ત્રણેય સેશન-એફિનિટી હેડર્સ ક્યારેય અપસ્ટ્રીમ ફોરવર્ડ થતા નથી — એક્ઝિક્યુટર્સ ક્લાયન્ટ હેડર્સ પાસ-થ્રુ કરવાને બદલે પોતાના અપસ્ટ્રીમ હેડર્સ શૂન્યથી બનાવે છે, તેથી આ ફક્ત આંતરિક કોરિલેશન id તરીકે જ રહે છે.

### એક્સક્લુઝિવ મેનેજ્ડ સેશન કનેક્શન લીઝ

**અવધિ:** એક સક્રિય મેનેજ્ડ HTTP ક્લાયન્ટ/સેશન એક લાયક OmniRoute કનેક્શનની માલિકી ધરાવે છે.

**હેતુ:** એવા ક્લાયન્ટ્સ માટે ટકાઉ એક્સક્લુઝિવ કનેક્શન માલિકી પૂરી પાડવી જેમને રિક્વેસ્ટો પાર સખત રૂટિંગ ફેન્સની જરૂર હોય છે. આ સેશન એફિનિટીથી અલગ છે, જે એક સોફ્ટ કન્ટિન્યુઇટી પસંદગી છે: એક્સક્લુઝિવ લીઝ SQLite માં લાઇફસાઇકલ સ્થિતિ સંગ્રહે છે, ગ્લોબલ એક્ટિવ-ઓનર અને એક્ટિવ-કનેક્શન યુનિકનેસ લાગુ કરે છે, અને પ્રોવાઇડર ડિસ્પેચ પહેલાં સ્ટેલ જનરેશનને નકારે છે.

આ ફીચર પ્રતિ API કી ઓપ્ટ-ઇન છે. મેનેજ્ડ કી પાસે `lease:exclusive` સ્કોપ અને સ્પષ્ટ બિન-ખાલી `allowedConnections` યાદી હોવી જ જોઈએ. કોઈપણ HTTP ક્લાયન્ટ લાઇફસાઇકલ એન્ડપોઇન્ટ વાપરી શકે છે; કોઈ ક્લાયન્ટ નામ, યુઝર-એજન્ટ, પ્રોવાઇડર, OAuth પદ્ધતિ કે મોડેલ જરૂરી નથી. લીઝ મોડેલની નહીં પણ કનેક્શનની માલિકી ધરાવે છે, તેથી કનેક્શન સામાન્ય રીતે લાયક રહે ત્યાં સુધી મોડેલ ફેરફાર છતાં બાઈન્ડિંગ જળવાઈ રહે છે. સામાન્ય મોડેલ, ક્વોટા, હેલ્થ, કૂલડાઉન અને એલાઉલિસ્ટ નિયમો અધિકૃત જ રહે છે અને એ જ જનરેશનને બીજા ફ્રી લાયક કનેક્શન પર ખસેડી શકે છે.

લાઇફસાઇકલ `POST /api/v1/session-leases` છે, જેમાં JSON ક્રિયાઓ `acquire`, `renew`, અને `release` છે.
મેનેજ્ડ ઇન્ફરન્સ વિનંતીઓ અપારદર્શક `X-OmniRoute-Lease-Owner` મૂલ્ય અને ચોક્કસ
`X-OmniRoute-Lease-Generation` રજૂ કરે છે. માલિક `vlo_` નો ઉપયોગ કરે છે જેની પાછળ 43 base64url
અક્ષરો હોય છે; ફક્ત તેનો SHA-256 હેશ સંગ્રહિત થાય છે. દરેક અંતિમ ડિસ્પેચ ફેન્સ પ્રમાણિત API કી ID અને
સક્રિય કનેક્શન ID ને પણ બાંધે છે. લીઝ કંટ્રોલ હેડરો લોગ્સ, જાળવેલા વિનંતી સ્નેપશોટ્સ અને
અપસ્ટ્રીમ એક્ઝિક્યુટર હેડરોમાંથી દૂર કરવામાં આવે છે.

જો સામાન્ય રૂટિંગમાં યોગ્ય મેનેજ્ડ ઉમેદવારો હોય પરંતુ દરેક મુક્ત ઉમેદવાર વિદેશી સક્રિય લીઝ દ્વારા
કબજે હોય, તો OmniRoute HTTP `429`, લીઝ-ક્ષમતા-અનુપલબ્ધ કોડ, ક્ષમતા-માટે-રાહ-જોઈ-રહેલી સ્થિતિ, અને સૌથી વહેલી સંબંધિત સમાપ્તિમાંથી મેળવેલી મર્યાદિત `Retry-After` પરત કરે છે.
સામાન્ય ખાલી પાત્રતા લીઝ સંઘર્ષ નથી અને તેના હાલના રૂટિંગ ભૂલ અર્થશાસ્ત્ર જાળવી રાખે છે.

સંબંધિત પદ્ધતિઓ અલગ રહે છે:

- OAuth સત્ર કબજો OAuth એકાઉન્ટ્સ માટે પ્રક્રિયા-સ્થાનિક સોફ્ટ વિતરણ છે.
- એકાઉન્ટ સિમાફોર્સ વિનંતી-સમવર્તીતા પરમિટ આપે છે અને વિનંતી પૂર્ણ થાય ત્યારે સમાપ્ત થાય છે.
- એક્સક્લુઝિવ મેનેજ્ડ સત્ર લીઝો જનરેશન ફેન્સ સાથે ટકાઉ લાઇફસાઇકલ માલિકી છે.

---

## 3. મોડલ લોકઆઉટ

**અવધિ (Scope):** provider + connection + model ત્રિપુટી.

**સ્થિતિ પ્રમાણે કી અવધિ:** નિષ્ફળ સ્થિતિ નક્કી કરે છે કે લોકઆઉટ કઈ કી પર લખાય છે
(`open-sse/services/accountFallback/exactModelLock.ts` માં `resolveLockoutScope()`):

- `429` / `403` / `402` — ક્વોટા કે હકારાત્મકતા (entitlement) સંકેત — **ક્વોટા કુટુંબ** ને લોક કરે છે:
  codex માટે આખું `codex` / `spark` અવધિ (કનેક્શનના દરેક `gpt-5*` મોડલ), અન્ય પ્રોવાઇડરો માટે
  `getQuotaScopedModelForProvider()`.
- `404` ખાલી મોડલને લોક કરે છે (`getModelLockKey()` `not_found` ને સાંકડી બનાવે છે).
- અન્ય કોઈપણ સ્થિતિ — `5xx` ટ્રાન્સપોર્ટ/સર્વર નિષ્ફળતાઓ અને OmniRoute ની પોતાની
  ગુણવત્તા માન્યતામાંથી સંશ્લેષિત `502` — ફક્ત **ચોક્કસ**
  provider/connection/model ટ્યુપલને જ લોક કરે છે. એક મોડલ પર ખરાબ સ્ટ્રીમ એ
  એકાઉન્ટના ક્વોટા વિશેનો પુરાવો નથી; આ નિયમ પહેલાં
  `codex/gpt-5.6-luna` પર એક ખાલી પ્રતિભાવ એ કનેક્શનના દરેક `gpt-5*` મોડલને
  2–30 મિનિટ (વધતા જતા સ્વરૂપે) માટે રૂટિંગમાંથી દૂર કરી દેતું, જ્યારે તેનો ક્વોટા અછળ રહેતો.
- કૉલરનો સ્પષ્ટ `scope` વિકલ્પ હંમેશા જીતે છે (Antigravity `"exact"` પાસ કરે છે).

**હેતુ:** જ્યારે ફક્ત એક જ મોડલ અનુપલબ્ધ કે ક્વોટા-મર્યાદિત હોય ત્યારે આખું કનેક્શન અક્ષમ થવાથી બચાવવું.

**ઉદાહરણો:**

- 429 પરત કરતા દર-મોડલ ક્વોટા પ્રોવાઇડરો
- એક ગાયબ મોડલ માટે 404 પરત કરતા સ્થાનિક પ્રોવાઇડરો
- પ્રોવાઇડર-વિશિષ્ટ મોડ/મોડલ પરવાનગી નિષ્ફળતાઓ (દા.ત., Grok મોડ્સ)

**અમલીકરણ:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### મોડલ કૂલડાઉન ડેશબોર્ડ (v3.8.0)

UI: Settings → Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

સક્રિય લોકઆઉટની યાદી આપે છે: provider, connection, model, કારણ, expiresAt. ઓપરેટરો કાર્ડમાંથી મોડલને જાતે ફરીથી સક્ષમ કરી શકે છે.

**REST API:**

- `GET /api/resilience/model-cooldowns` — સક્રિય લોકઆઉટની યાદી
- `DELETE /api/resilience/model-cooldowns` — જાતે ફરી-સક્ષમ કરવું. બોડી: `{provider, connection, model}`. ઓથ: management.

### કૂલડાઉન મેનેજર

UI: Monitoring → Cooldown Manager (`src/app/(dashboard)/dashboard/resilience/cooldowns/`).

અસ્થાયી કારણસર રૂટિંગની બહાર હોય એવા દરેક કનેક્શન માટે એક જ પૃષ્ઠ,
દરેક પ્રોવાઇડરનું પૃષ્ઠ ખોલવાને બદલે. તે કનેક્શન કૂલડાઉન, મોડલ લોકઆઉટ અને ટર્મિનલ
સ્થિતિઓની યાદી આપે છે, તેમને દરેક કનેક્શન માટે, પસંદગી માટે, કે પ્રોવાઇડરના બધા કનેક્શન માટે
સાફ કરે છે, અને સૌથી વધુ ટ્યુન કરાયેલા કૂલડાઉન નિયમો ફેરફાર કરે છે: `streamStallCooldown.enabled` અને OAuth / API-key
`connectionCooldown` બેઝ કૂલડાઉન અને મહત્તમ બેકઓફ સ્ટેપ્સ (`PATCH /api/resilience` દ્વારા સાચવાય છે). ટર્મિનલ સ્થિતિઓ (`banned`, `expired`, `credits_exhausted`)
યાદીમાં બતાવાય છે પણ અહીં ક્યારેય સાફ થતી નથી.

**REST API** (`src/lib/resilience/cooldownManager.ts`, ઓથ: management):

- `GET /api/resilience/cooldowns[?provider=]` — સ્થિતિ, બાકીનો કૂલડાઉન,
  બેકઓફ સ્તર, છેલ્લી ભૂલનો પ્રકાર અને મોડલ લોકઆઉટ સાથેના કનેક્શનો (ક્રેડેન્શિયલ્સ વિના)
- `POST /api/resilience/cooldowns` — બોડી `{connectionIds: string[]}` અથવા
  `{all: true, provider?}`; પરત આપે `{cleared, unchanged, skippedTerminal, lockoutsCleared}`

### લોકઆઉટ સેટિંગ્સ UI + સફળતા-ક્ષય પુનઃપ્રાપ્તિ (v3.8.23)

મોડલ લોકઆઉટ હંમેશા-ચાલુ હાર્ડકોડેડ વર્તનમાંથી સંપૂર્ણ રૂપરેખાંકિતય,
ઓપ્ટ-ઇન ફીચર બન્યું — પોતાના સેટિંગ્સ કાર્ડ અને સ્વ-સારવાર પુનઃપ્રાપ્તિ માર્ગ સાથે.

**સેટિંગ્સ કાર્ડ:** Settings → Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
આ ઉપરના ફક્ત-વાંચન માટેના `ModelCooldownsCard` થી **અલગ** છે (જે ફક્ત સક્રિય લોકઆઉટની
_યાદી_ બતાવે છે) — નવું કાર્ડ _પરિમાણોને રૂપરેખાંકિત કરે છે_. ડિફોલ્ટ્સ
`DEFAULT_MODEL_LOCKOUT_SETTINGS` માં રહે છે
(`src/lib/resilience/modelLockoutSettings.ts`):

| સેટિંગ                  | ડિફોલ્ટ                          | અર્થ                                                           |
| ----------------------- | -------------------------------- | -------------------------------------------------------------- |
| `enabled`               | `false`                          | માસ્ટર ટૉગલ — મોડલ લોકઆઉટ **ડિફોલ્ટ રૂપે બંધ** છે.             |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | મોડલ-સ્કોપ્ડ નિષ્ફળતા ગણાતા અપસ્ટ્રીમ સ્થિતિ કોડ.              |
| `baseCooldownMs`        | `120_000` (120 s)                | પ્રથમ નિષ્ફળતા માટે પ્રારંભિક લોકઆઉટ અવધિ.                     |
| `maxCooldownMs`         | `1_800_000` (30 min)             | વધારેલા કૂલડાઉન પર મર્યાદા.                                    |
| `maxBackoffSteps`       | `10`                             | મહત્તમ ઘાતાંકીય-બેકઓફ વધારા સ્ટેપ્સ.                           |
| `useExponentialBackoff` | `true`                           | પુનરાવર્તિત નિષ્ફળતાઓ કૂલડાઉનને ઘાતાંકીય રીતે વધારે છે કે કેમ. |

સેટિંગ્સ સામાન્ય સેટિંગ્સ સ્ટોર દ્વારા ટકી રહે છે અને resilience સેટિંગ્સ સ્કીમા દ્વારા માન્ય થાય છે;
કાર્ડ `baseCooldownMs`/`maxCooldownMs` ને ક્લેમ્પ કરે છે
(`maxCooldownMs ≥ baseCooldownMs` સાથે) અને `maxBackoffSteps` ને પણ.

**સફળતા-ક્ષય પુનઃપ્રાપ્તિ:** પુનઃપ્રાપ્તિ **ફક્ત** ટાઇમર સમાપ્તિ નથી. તંદુરસ્ત
પ્રતિભાવ મોડલની નિષ્ફળતા સંખ્યા પાછી ઘટાડે છે જેથી વિન્ડોની મધ્યમાં સુધરી ગયેલું મોડલ
વધવાનું બંધ કરે (અને સાફ થઈ જાય) — તેના ટાઇમર પહેલાં. સફળ કોમ્બો ટાર્ગેટ પર,
`open-sse/services/combo.ts` `decayModelFailureCount()` ને કૉલ કરે છે
(`open-sse/services/accountFallback.ts`), જે સંગ્રહિત `failureCount` ને
**અર્ધો** કરે છે (`Math.floor(failureCount / 2)`); જ્યારે તે `0` સુધી પહોંચે ત્યારે લોકઆઉટ
એન્ટ્રી સંપૂર્ણપણે કાઢી નાખવામાં આવે છે. તેનું સમકક્ષ `recordModelLockoutFailure()`
એસ્કેલેશન વિન્ડોની અંદરની નિષ્ફળતાઓ પર સંખ્યા વધારે છે (અને કૂલડાઉન એસ્કેલેટ કરે છે).
આ સફળતા-ક્ષય સાદી ટાઇમર સમાપ્તિ ઉપરાંત છે — બંનેમાંથી કોઈપણ માર્ગ મોડલને ફરી-સક્ષમ કરી શકે છે.

**સ્થિતિ (State):** લોકઆઉટ **ઇન-મેમરી** રાખવામાં આવે છે (દરેક-પ્રક્રિયાના `Map`s —
`provider:connectionId:model` દ્વારા કી કરાયેલા `ModelLockoutEntry`, અને exact-scope લોક્સ
`provider:connectionId:exact:model` દ્વારા), DB માં ટકાવી રાખવામાં આવતા નથી — રીસ્ટાર્ટ પર ખોવાઈ જાય છે. _સેટિંગ્સ_ ટકાવી રાખવામાં આવે છે; સક્રિય લોકઆઉટ
_સ્થિતિ_ ક્ષણભંગુર છે.

---

## 4. ક્વોટા-શેર કન્કરન્સી નિયંત્રણ (v3.8.36)

સબ્સ્ક્રિપ્શન એકાઉન્ટ્સ (GLM, MiniMax વગેરે) ઘણી વખત ફક્ત ~1–3 સમવર્તી
રિક્વેસ્ટ્સ જ સ્વીકારે છે; તેનાથી વધુ જતાં 429s અને કૂલડાઉન્સ ટ્રિગર થાય છે. આ સમસ્યા
**ક્વોટા-શેર** (`qtSd/…`) કોમ્બો હેઠળ તીવ્ર બને છે, જ્યાં અનેક API કીઓ એક જ અપસ્ટ્રીમ
એકાઉન્ટ શેર કરે છે. ત્રણ સ્તરો શેર કરેલા એકાઉન્ટને રિક્વેસ્ટ્સના પ્રવાહથી બચાવે છે.

### દર-કનેક્શન કન્કરન્સી કેપ (`max_concurrent`)

દરેક પ્રોવાઇડર કનેક્શન `max_concurrent` મર્યાદા જાહેર કરી શકે છે
(`provider_connections.max_concurrent`, કનેક્શન મોડલ / API / DB માં સેટ થાય છે).
મર્યાદા ન જોઈતી હોય તો તેને ખાલી છોડી દો. આ નીચેના સીરિયલાઇઝેશન
સ્તરને ચલાવનાર એકમાત્ર નિયંત્રણ છે — તેને એકાઉન્ટની વાસ્તવિક કન્કરન્સી પર સેટ કરો (દા.ત. GLM ~1, MiniMax ~2).

### દર-મોડલ કન્કરન્સી કેપ્સ (`modelConcurrency`)

કનેક્શન ઉપરાંત તેના `rateLimitOverrides` મેપની અંદર ચોક્કસ દર-મોડલ કન્કરન્સી
મર્યાદાઓ પણ જાહેર કરી શકે છે:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

તેને કનેક્શન મોડલમાં સેટ કરો (**રેટ લિમિટ ઓવરરાઇડ્સ → દર-મોડલ
કન્કરન્સી કેપ્સ**, દરેક લાઇનમાં એક `model=cap`) અથવા
`PATCH /api/providers/[id]` દ્વારા એ જ JSON આકાર સાથે. મુખ્ય સિમેન્ટિક્સ:

- **કનેક્શન-વ્યાપી vs મોડલ-વિશિષ્ટ:** `maxConcurrent` શેર કરેલી
  કનેક્શન-વ્યાપી મર્યાદા તરીકે રહે છે. જ્યારે બંને લાગુ પડે, ત્યારે બંને ગેટ્સ
  એક જ કોમ્પોઝિટ ગેટમાં એટોમિક રીતે મેળવાય છે
  (`global → provider → account → model`); અસરકારક વર્તન એ વધુ
  કડક લાગુ મર્યાદા મુજબનું હોય છે.
- **ચોક્કસ મોડલ-કી મેળ:** કી એ રાઉટિંગ રિઝોલ્યુશન પછી એક્ઝિક્યુટરને
  પાસ થતી મોડલ સ્ટ્રિંગ છે — સામાન્ય રીતે બેર અપસ્ટ્રીમ મોડલ id
  (`glm-5`), ક્લાયન્ટ-સાઇડ `provider/model` એલિયસ નહીં (`zai/glm-5` એ
  `glm-5` સાથે મેળ ખાતું નથી). વેલ્યુઓ ધન-પૂર્ણાંક સમવર્તી-રિક્વેસ્ટ મર્યાદાઓ છે.
- **સ્થાનિક ક્યૂઇંગ, કોઈ ડિસ્કવરી નહીં:** વધારાની રિક્વેસ્ટ્સ હાજરના ક્યૂ/ટાઇમઆઉટ
  સિમેન્ટિક્સ સાથે સ્થાનિક રીતે ક્યૂમાં રહે છે (ટાઇપ્ડ `SEMAPHORE_TIMEOUT` /
  `SEMAPHORE_QUEUE_FULL` એડમિશન એરર્સ). OmniRoute અપસ્ટ્રીમ નીતિ
  શોધતું નથી કે અનુમાન લગાવતું નથી — તે ઓપરેટરે કન્ફિગર કરેલી
  ચોક્કસ મર્યાદાઓ લાગુ કરે છે. સંતૃપ્ત મોડલ ગેટ ક્યારેય પ્રોવાઇડરને
  અક્ષમ કરતું નથી અને ક્યારેય કાયમી મોડલ લોકઆઉટ બનાવતું નથી; અપસ્ટ્રીમ
  429/કૂલડાઉન/ફોલબેક વર્તન એરર બેકસ્ટોપ તરીકે રહે છે.
- **દર-કનેક્શન, દર-પ્રોસેસ સ્કોપ:** કેપ્સ દરેક ડેટાબેઝ કનેક્શન માટે છે
  અને ઇન-મેમરી રાખવામાં આવે છે, તેથી એક જ અપસ્ટ્રીમ API કીનો ફરી ઉપયોગ
  કરતાં બે કનેક્શન્સ એકબીજા સાથે સંકલન કરતાં નથી.
- **અકન્ફિગર્ડ એટલે અપરિબદ્ધિત:** મેપ છોડી દેવો (અથવા
  ડેશબોર્ડ ફીલ્ડ ખાલી રાખવું) કોઈ મોડલ ગેટ ઉમેરતું નથી. કોઈપણ સાર્વત્રિક
  પ્રોવાઇડર મર્યાદા દર્શાવ્યા વિનાનું ઉદાહરણ કન્ફિગરેશન:

```text
glm-5=1
glm-4.7=3
```

### ક્વોટા-શેર રિક્વેસ્ટ સીરિયલાઇઝેશન

જ્યારે ક્વોટા-શેર ડિસ્પેચ એવા કનેક્શનને લક્ષ્ય બનાવે છે જે ધન
`max_concurrent` જાહેર કરે છે, ત્યારે તે **એકાઉન્ટ** પરની સમવર્તી રિક્વેસ્ટ્સ
દર-કનેક્શન સેમાફોર (કી `qsconn:<connectionId>`) દ્વારા સીરિયલાઇઝ થાય છે: વધારાની
રિક્વેસ્ટ્સ એકાઉન્ટને પ્રવાહમાં નાખવાને બદલે **ક્યૂમાં રાહ જુએ છે**. તે
**ફેલ-ઓપન** છે — સંતૃપ્ત ક્યૂ અથવા ટાઇમઆઉટ સ્લોટ વિના આગળ વધે છે, ડિસ્પેચ
થઈ શકે એવી રિક્વેસ્ટને ક્યારેય નકારતું નથી. **સેટિંગ્સ → રેઝિલિયન્સ → ક્વોટા-શેર દર-કનેક્શન
કન્કરન્સી** માં ટૉગલ કરો (`resilienceSettings.quotaShareConcurrencyLimit.enabled`,
ડિફોલ્ટ ચાલુ). `max_concurrent` કેપ વિના વર્તન અપરિબદ્ધિત રહે છે.

> ક્વોટા-શેર રાઉટિંગ ગેટ (`selectQuotaShareTarget`, DRR + P2C) પોતે પણ
> ફેલ-ઓપન છે અને કેપ પર પહોંચેલા કનેક્શનને માત્ર _ઓછી પ્રાથમિકતા_ આપે છે —
> સિંગલ-કનેક્શન પૂલ સાથે તે હાર્ડ-લિમિટ કરી શકતું નથી, તેથી આ સેમાફોર જ ખરેખર
> પ્રવાહને રોકે છે.

### કોમ્બો કૂલડાઉન-જાગૃત રિટ્રાય

દરેક કોમ્બો સ્ટ્રેટેજી માટે (ચાલુ હોય ત્યારે), ટૂંકા ક્ષણિક કૂલડાઉન માટે 429
ઉત્પન્ન કરનારી રિક્વેસ્ટ 429 પરત કરવાને બદલે તેની રાહ જુએ છે અને ફરી
ડિસ્પેચ થાય છે — આ મલ્ટિ-મોડલ કોમ્બો પર Gemini-વર્ગની TPM/RPM વિન્ડો
(~60s retry-after) ને આવરી લે છે, દા.ત. 2-મોડલ કોમ્બોના બંને લક્ષ્યો
દર-મોડલ રેટ લિમિટને અથડાય ત્યારે. **સેટિંગ્સ → રેઝિલિયન્સ** માં `comboCooldownWait`
(`enabled`, `maxWaitMs`, `maxAttempts`, `budgetMs`) દ્વારા મર્યાદિત. તે ક્યારેય
`quota_exhausted` (મધ્યરાત્રિ સુધી લોક) અથવા ઓથ/નોટ-ફાઉન્ડ કારણો માટે રાહ જોતું નથી.

તે જ ગેટ પ્રી-ડિસ્પેચ કેસને (#16319) આવરી લે છે: જ્યારે કોમ્બોનું દરેક
લક્ષ્ય કોઈપણ પ્રયાસ થાય તે પહેલાં જ સ્કિપ થઈ જાય કારણ કે તેનું મોડલ ટૂંકા
ક્ષણિક લોકઆઉટમાં હોય, ત્યારે ઝીરો-અટેમ્પ્ટ પાથ એ જ મર્યાદાઓ હેઠળ લોકની રાહ
જુએ છે અને ફરી ડિસ્પેચ કરે છે, હિન્ટ-વિહોણું
`503 ALL_TARGETS_SKIPPED` જવાબ આપવાને બદલે. જ્યારે કોઈ રાહ જોવાની મંજૂરી ન હોય
(મર્યાદા, પ્રયાસ અથવા બજેટ ખતમ, અથવા ફીચર બંધ), ત્યારે ટર્મિનલ
રિસ્પોન્સ `429 rate_limit_error` માં અપગ્રેડ થાય છે, જે સૌથી વહેલી
ક્ષણિક લોક સમાપ્તિમાંથી `retry_after` / `reset_at` વહન કરે છે; ક્વોટા, ઓથ
અને નોટ-ફાઉન્ડ લોક્સ હિન્ટ-વિહોણું 503 જાળવી રાખે છે.

---

## 5. રિક્વેસ્ટ ક્યૂ એડમિશન કંટ્રોલ (v3.8.49 · issue #6593)

**દાયરો**: સ્થાનિક પ્રતિ-પ્રોવાઇડર+કનેક્શન રેટ-લિમિટ ક્યૂ (`open-sse/services/rateLimitManager.ts`, Bottleneck દ્વારા સમર્થિત), ઉપરની ત્રણ મિકેનિઝમ્સ કરતાં એક સ્તર નીચે.

**`maxWaitMs` ક્યૂ રાહને મર્યાદિત કરે છે; `executionMaxWaitMs` એક્ઝિક્યુશનને મર્યાદિત કરે છે.**
બંને જાણીજોઈને અલગ રાખવામાં આવ્યા છે, અને બંને પૈકી કોઈ એક બીજાને ફીડ કરતું નથી.

`resilienceSettings.requestQueue.maxWaitMs` એ **ક્યૂ-વેઇટ બજેટ** છે: તે પ્રોવાઇડર સ્લોટની રાહ જોવી અને પછી QUEUED માં બેઠા રહેવાને આવરી લે છે, અને જે ક્ષણે જોબ QUEUED માંથી બહાર નીકળીને એક્ઝિક્યુટ થવાનું શરૂ કરે છે તે ક્ષણે તેનો ટાઇમર ક્લિયર થઈ જાય છે (`rateLimitManager.ts`, `wrappedFn`). તેને ઓળંગી જનારી રિક્વેસ્ટ ક્યારેય અપસ્ટ્રીમ સુધી પહોંચતી નથી. ડિફોલ્ટ 30000ms, જે `src/lib/resilience/settings.ts` માં `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS` દ્વારા આપવામાં આવે છે અને `tests/unit/ratelimit-admission-control-6593.test.ts` દ્વારા પિન કરવામાં આવે છે, જેથી તેમાં ફેરફાર કરવાથી આ પરિચ્છેદ શાંતિથી જૂનો થઈ જવાને બદલે તે ટેસ્ટ લાલ થઈ જાય છે.

`resilienceSettings.requestQueue.executionMaxWaitMs` એ જ છે જે Bottleneck ને જોબ `expiration` તરીકે મળે છે, જેનો ટાઇમર ફક્ત ડિસ્પેચ પછી જ શરૂ થાય છે. તે પોતાનો અપસ્ટ્રીમ ટાઇમઆઉટ ન ધરાવતા એક્ઝિક્યુટરો માટે બેકસ્ટોપ છે, અને જ્યારે એક્ઝિક્યુટરનો પોતાનો fetch-start ટાઇમઆઉટ લાંબો હોય ત્યારે તેને તે સુધી વધારવામાં આવે છે, જેથી તે સ્વસ્થ ઇન-ફ્લાઇટ રિસ્પોન્સને કાપી ન શકે. ડિફોલ્ટ 600000ms (10 મિનિટ).

ક્યૂ બજેટને `expiration` માં ફીડ કરવું એ જ હતું જે પહેલાં નોન-ઇન્ક્રિમેન્ટલ ગેટવેને મિડ-ફ્લાઇટ મારી નાખતું હતું — તેઓ પ્રથમ બાઇટ્સ પહેલાં કાયદેસર રીતે મિનિટો સુધી ચાલે છે — અને એટલે જ એક્સપાયરેશન `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) તરીકે દેખાય છે જ્યારે ક્યૂ બજેટ ક્યૂ-ટાઇમઆઉટ કોડ ધરાવે છે. બંને પૈકી કોઈપણને `RATE_LIMIT_MAX_WAIT_MS` / `RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) અથવા ડેશબોર્ડ (**સેટિંગ્સ → રેઝિલિયન્સ**) દ્વારા ઓવરરાઇડ કરો. નોર્મલાઇઝ થતાં બંને 1ms–24h પર ક્લેમ્પ થાય છે.

**પ્રાધાન્યક્રમ, બંને માટે:** env var ફક્ત _ડિફોલ્ટ_ આપે છે. `resilienceSettings.requestQueue` માં સાચવેલું મૂલ્ય (ડેશબોર્ડ / API patch, `key_value` માં સંગ્રહિત) તેના કરતાં પ્રાથમિકતા ધરાવે છે, અને પ્રતિ-કનેક્શન `rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` તેના કરતાં પ્રાથમિકતા ધરાવે છે. તેથી પહેલેથી જ સાચવેલું મૂલ્ય ધરાવતા ડિપ્લોયમેન્ટ પર env var સેટ કરવાથી કંઈ બદલાતું નથી — તેના બદલે સાચવેલી સેટિંગ ક્લિયર કરો અથવા અપડેટ કરો.

ક્યૂ રેઝિડન્સ `maxWaitMs` દ્વારા મર્યાદિત છે; નીચેનું `maxQueueDepth` એક સાથે કેટલા કૉલર ક્યૂમાં રહી શકે તે મર્યાદિત કરે છે.

**બોડી-સ્ટેટેડ રીટ્રાય: પેસિંગ વિરુદ્ધ લૉકઆઉટ.** 429 બોડી પોતાની રાહ જાહેર કરી શકે છે (Gemini `RetryInfo.retryDelay`, "retry after Ns" ટેક્સ્ટ), જે `updateFromResponseBody` વાંચે છે. કનેક્શનના `maxWaitMs` માં સમાતી રાહ એ પેસિંગ છે: લિમિટર એટલા સમય સુધી પોતાનો રિઝર્વોયર ખાલી કરે છે અને તે ફરી ભરાય ત્યારે ક્યૂમાં રહેલા કૉલ ડિસ્પેચ થાય છે. `maxWaitMs` કરતાં લાંબી રાહ એવી વસ્તુ નથી જેને ક્યૂ બેસીને પસાર કરી શકે — Gemini ખતમ થયેલા દૈનિક ક્વોટાનો જવાબ `retryDelay: "86399s"` થી આપે છે. રીબિલ્ટ થયેલા 429 (#16528) પર રિલે થયેલો `Retry-After` પહેલેથી જ ફોલબેક એન્જિનને તે વિન્ડો માટે મોડલ લૉક કરાવે છે, પરંતુ તેના માટે લિમિટરને પણ પોઝ કરવું એ કી પર વહેલી પહોંચી જતી કોઈપણ કૉલને (દા.ત. રેઝિલિયન્સ રીસેટ પછી) આખા `maxWaitMs` માટે સ્થગિત કરી દેશે. જ્યારે આવી રાહ ટાઇપ્ડ Google `RetryInfo` ડિટેઇલમાંથી આવે છે (`google_rpc_retry_info` પ્રોવેનન્સ) અને કીનો લિમિટર પહેલેથી જ મોડલ પર સ્કોપ થયેલો હોય (જુઓ `getLimiterKey`), ત્યારે 429 તે કનેક્શન પર મોડલ લૉકઆઉટ બની જાય છે (`open-sse/services/rateLimitManager/bodyRetryPause.ts` માં `lockModelForLongBodyRetry`, 24h પર કેપ), અને લિમિટરને પોઝ કર્યા વિના છોડી દેવામાં આવે છે. એકાઉન્ટ સિલેક્શન તે લૉક પર `isModelLocked()` દ્વારા સ્કિપ થાય છે, અને કનેક્શન પર પિન થયેલા ટાર્ગેટ્સ માટે કોમ્બો પ્રી-ડિસ્પેચ ગેટ પણ એ જ કરે છે. antigravity પર, જેનો લિમિટર પ્રતિ ક્વોટા ફેમિલી છે, લૉક ચોક્કસ મોડલ પર હોય છે, જેમ કે તેના અન્ય ક્વોટા લૉક. જ્યારે એલિયસ ક્લાયન્ટે માંગેલા નામને તે મોડલ પર રિઝોલ્વ કરે ત્યારે માંગેલું નામ પણ લૉક થાય છે, કારણ કે તે તપાસો માંગેલા નામનો ઉપયોગ કરે છે; તે ચોક્કસ રીતે લૉક થાય છે (`lockExactModel`), જેથી antigravity ક્વોટા ફેમિલી અથવા codex સ્કોપ ઓળંગતી એલિયસ ક્યારેય પોતાના નામને લૉક કરતી નથી. પ્રોઝ હિન્ટ, અનટાઇપ્ડ `retryDelay`, અથવા આખા કનેક્શન દ્વારા શેર થયેલો લિમિટર પોઝ જાળવી રાખે છે. જ્યારે 429 પાથે હમણાં જ રીબિલ્ટ કરેલો લિમિટર પોઝ થાય છે, ત્યારે જે કૉલરનો બાકીનો ક્યૂ સમય પોઝ પૂરો થવા પહેલાં જ પૂરો થઈ જાય છે તેને તે સમય પૂરો થવાની રાહ જોવાને બદલે તરત જ ક્યૂ-ટાઇમઆઉટ કોડ સાથે પાછો ફેરવવામાં આવે છે (`checkLimiterPause`); રેકોર્ડ થયેલો અંત લિમિટર બનતાં પહેલાં એન્કર થયેલો હોય છે, જ્યાં Bottleneck પોતાની રિફ્રેશ ક્લૉક શરૂ કરે છે, અને રિઝર્વોયરમાં પછી થયેલો કોઈપણ ફેરફાર તેને ભૂલી જાય છે. `tests/unit/rate-limit-long-body-retry-lockout.test.ts` અને `tests/unit/rate-limit-body-retry-pause.test.ts` દ્વારા આવરી લેવામાં આવ્યું છે.

**`maxQueueDepth` — ઓપ્ટ-ઇન એડમિશન કેપ (નવું).** `resilienceSettings.requestQueue.maxQueueDepth` એક પ્રોવાઇડર+કનેક્શન માટે એક સાથે કેટલી રિક્વેસ્ટ ક્યૂમાં બેસી શકે (હજુ ડિસ્પેચ થઈ નથી) તે મર્યાદિત કરે છે. જ્યારે ક્યૂ પહેલેથી જ `maxQueueDepth` રિક્વેસ્ટ ધરાવે છે, ત્યારે નવી રિક્વેસ્ટ `limiter.schedule()` સુધી પહોંચે **તે પહેલાં** જ ટાઇપ્ડ `code: "RATE_LIMIT_QUEUE_FULL"` એરર સાથે ફાસ્ટ-રિજેક્ટ થાય છે — જેથી રિજેક્શન સસ્તું હોય છે અને તે રિક્વેસ્ટ માટેના કોઈપણ ડાઉનસ્ટ્રીમ પ્રોમ્પ્ટ-કમ્પ્રેશન / ટ્રાન્સલેશન કાર્ય કરતાં પહેલાં થાય છે. ડિફોલ્ટ `0` = ડિસેબલ્ડ, જે હાલના અનબાઉન્ડેડ-ક્યૂ વર્તનને જાળવી રાખે છે; બાઉન્ડ 0–100000. `RATE_LIMIT_MAX_QUEUE_DEPTH` (env) અથવા `resilienceSettings.requestQueue.maxQueueDepth` (ડેશબોર્ડ/API patch) દ્વારા ઓવરરાઇડ કરો.

એડમિશન તપાસ પોતે એક પ્યોર ફંક્શન છે (`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`) જેથી તે વાસ્તવિક Bottleneck લિમિટર વિના યુનિટ-ટેસ્ટ કરી શકાય છે.

> જે RFC એ #6593 ખોલ્યું તેમાં `bypassCompressionOnRateLimit` ફ્લેગ પણ પ્રસ્તાવિત કરવામાં આવ્યો હતો. આ રેપોની `open-sse/services/compression/` પાઇપલાઇન એ આઉટબાઉન્ડ LLM રિક્વેસ્ટ પરનું prompt/context કમ્પ્રેશન છે (`chatCore.ts`, `resolveCompressionSettings`/`selectCompressionStrategy` બ્લોકની આસપાસ), સંશ્લેષિત 429 બોડી પરનું HTTP રિસ્પોન્સ કમ્પ્રેશન નહીં — શાબ્દિક બાયપાસ ફ્લેગ માટે કોઈ મેળ ખાતો કોડ પાથ નથી. એ prompt-compression સ્ટેપ હાલમાં રિક્વેસ્ટ પાઇપલાઇનમાં `withRateLimit()` પહેલાં _ચાલે છે_, તેથી કતાર ભરાયેલી હોવાના રિજેક્શન પર તેને છોડી દેવા માટે ફરીથી ક્રમ ગોઠવવો એ આ ઇશ્યુના સ્કોપ કરતાં અલગ, મોટો ફેરફાર છે; તેને અહીં જાણી જોઈને **લાગુ કરવામાં આવ્યો નથી** અને જો CPU-બચતનો ફાયદો ફરીથી ક્રમ ગોઠવવાના જોખમને લાયક હોય તો ફોલો-અપ તરીકે છોડી દેવામાં આવ્યો છે.

### રેટ-લિમિટ ઓટો-એનેબલ સેફ્ટી નેટ અને કનેક્શન પ્રોટેક્શન (`rateLimitProtection`)

**ઓટો-એનેબલ સેફ્ટી નેટ** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, ડિફોલ્ટ `true`):
ડિફોલ્ટ રીતે, OmniRoute બધા સક્રિય API-key પ્રોવાઇડર કનેક્શન્સ (`getProviderCategory(provider) === "apikey"`) માટે રેટ-લિમિટ કતાર પ્રોટેક્શન આપોઆપ ચાલુ કરે છે. આ સુનિશ્ચિત કરે છે કે રેટ-સંવેદનશીલ અપસ્ટ્રીમ API કી માટેની આવતી રિક્વેસ્ટ્સ Bottleneck દ્વારા કતારમાં ગોઠવાય અને થ્રોટલ થાય, અપસ્ટ્રીમ 429 એરરમાં ધસી જવાને બદલે. સેફ્ટી નેટને `RATE_LIMIT_AUTO_ENABLE` એન્વાયર્નમેન્ટ વેરિયેબલ દ્વારા ઓવરરાઇડ કરી શકાય છે (`false`/`0`/`off` નિષ્ક્રિય કરે છે, `true`/`1`/`on` જબરદસ્તી ચાલુ કરે છે), જે સંગ્રહિત ડેશબોર્ડ સેટિંગ (**Settings → Resilience** / `PATCH /api/resilience`) પર પ્રાધાન્ય ધરાવે છે.

**પ્રતિ-કનેક્શન `rateLimitProtection` નો અર્થ:**
પ્રતિ-કનેક્શન રેટ-લિમિટ પ્રોટેક્શન પ્રોવાઇડર કનેક્શન્સ પરના `rateLimitProtection` બુલિયન ફીલ્ડ દ્વારા ટ્રેક થાય છે (SQLite માં `rate_limit_protection` તરીકે સંગ્રહિત):

- **સ્પષ્ટ ચાલુ (`rateLimitProtection === true`)**: આ કનેક્શન માટે રેટ-લિમિટ પ્રોટેક્શન સ્પષ્ટ રીતે ચાલુ છે, પ્રોવાઇડર કેટેગરી અથવા ઓટો-એનેબલ સેફ્ટી નેટ ચાલુ છે કે નહીં તે ધ્યાનમાં લીધા વિના.
- **સ્પષ્ટ બંધ (`rateLimitProtection === false`)**: સ્પષ્ટ પ્રોટેક્શન નિષ્ક્રિય કરે છે, પરંતુ સક્રિય API-key કનેક્શનને ગ્લોબલ ઓટો-એનેબલ સેફ્ટી નેટમાંથી બહાર **કાઢતું નથી**. `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`) માં, `false` અને `undefined` સમાન છે: ફક્ત `rateLimitProtection === true` ને સ્પષ્ટ ઓવરરાઇડ તરીકે ગણવામાં આવે છે. જો `rateLimitProtection` `false` હોય (અથવા સેટ ન હોય), તો પણ સક્રિય API-key કનેક્શન ઓટો-એનેબલ શરત સાથે મેળ ખાય છે અને રેટ-લિમિટ સુરક્ષિત રહે છે.
- **પ્રતિ-કનેક્શન ઓપ્ટ-આઉટ નથી**: ઓપરેટર હાલમાં એ વ્યક્ત કરી શકતો નથી કે "આ એક સક્રિય API-key કનેક્શન રેટ-લિમિટ કતાર પ્રોટેક્શન વિના ચાલવું જોઈએ" જ્યારે અન્યો માટે ઓટો-એનેબલ સક્રિય રહે. API-key કનેક્શન્સને રેટ-લિમિટ કતાર વિના સંપૂર્ણપણે ચલાવવા માટે, સેફ્ટી નેટ ગ્લોબલી બંધ કરવી પડશે (`RATE_LIMIT_AUTO_ENABLE=false` અથવા `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`).

**સમર્થિત રાઇટ પાથ:**

- **`POST /api/rate-limits`**: કનેક્શન માટે `rateLimitProtection` ટૉગલ કરવા માટેનો સમર્થિત મેનેજમેન્ટ રાઇટ પાથ (`{ connectionId: string, enabled: boolean }`). આને `enabled: true` સાથે કૉલ કરવાથી સ્પષ્ટ પ્રોટેક્શન ચાલુ થાય છે; આને `enabled: false` સાથે કૉલ કરવાથી સ્પષ્ટ પ્રોટેક્શન દૂર થાય છે (જોકે જો ઓટો-એનેબલ ચાલુ હોય તો સક્રિય API-key કનેક્શન્સ ગ્લોબલ સેફ્ટી નેટ હેઠળ આવરી લેવાયેલા રહે છે).
- **`PUT /api/providers/[id]`**: જાણી જોઈને `rateLimitProtection` સ્વીકારતું નથી કે તેને ફ્લિપ કરતું નથી (#11278). `PUT /api/providers/[id]` દ્વારા પ્રોવાઇડર કનેક્શન મેટાડેટા અપડેટ કરવાથી સંગ્રહિત રેટ-લિમિટ પ્રોટેક્શન સ્થિતિ ક્યારેય બદલાશે નહીં.

---

## 6. ધીમી-સ્ટ્રીમ થ્રુપુટ વોચડૉગ (#9709)

વૈકલ્પિક `resilienceSettings.streamRecovery.throughputWatchdog` ગાર્ડ એવા અપસ્ટ્રીમને શોધે છે જે હજી પણ ચંક્સ મોકલી રહ્યું છે, પરંતુ ગોઠવેલા ઉપયોગી-આઉટપુટ દર કરતાં ઓછું assistant આઉટપુટ ઉત્પન્ન કરી રહ્યું છે. તે idle timeoutથી ઇરાદાપૂર્વક અલગ છે: heartbeats અને metadata કોઈપણ ટાઈમરને રીસેટ કરતા નથી અને તેમને પ્રગતિ તરીકે ગણવામાં આવતા નથી. તે hard attempt deadline (#9153)થી પણ અલગ છે, જે આઉટપુટની ગુણવત્તાને ધ્યાનમાં લીધા વિના સંપૂર્ણ સલામતી મર્યાદા તરીકે યથાવત્ રહે છે.

વોચડૉગને abort કરી શકાય તે પહેલાં warm-up અવધિ અને ત્યારબાદ સંપૂર્ણ rolling window જરૂરી છે. તે Chat Completions અને Responses APIના આઉટપુટ ઇવેન્ટ્સમાંથી text deltas ગણે છે (સાવચેત UTF-8 byte proxy), usage-only અને ખાલી ઇવેન્ટ્સને અવગણે છે અને tool-call અથવા reasoning ઇવેન્ટ્સ ચાલુ હોય ત્યારે નિર્ણય સ્થગિત રાખે છે. તે ડિફૉલ્ટ રૂપે અક્ષમ છે અને `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true` વડે સક્ષમ કરી શકાય છે; window, warm-up, minimum rate અને minimum measurable output સામાન્ય resilience-settings normalization layer દ્વારા મર્યાદિત કરવામાં આવે છે.

સક્ષમ હોય ત્યારે, વોચડૉગ abort માત્ર સક્રિય અપસ્ટ્રીમ પ્રયાસ પર લાગુ થાય છે. કોઈપણ client-visible bytes પહેલાં, હાલનો same-account early-recovery path પ્રયાસને ફરી ખોલી શકે છે. Commit પછી, સ્ટ્રીમને ક્યારેય અંધાધૂંધ રીતે replay કરવામાં આવતી નથી; માત્ર હાલનો safe mid-stream continuation contract જ suffix જોડાવી શકે છે. Finalization એક જ વાર થાય છે, તેથી usage accounting અને semaphore release ફરીથી થતા નથી.

---

## 7. અપસ્ટ્રીમ સ્ટેટસનું પુનઃસ્થાપન (ખોટી રીતે દર્શાવાયેલી quota ભૂલો)

**વ્યાપ્તિ:** એક અપસ્ટ્રીમ gateway જે temporary quota exhaustionને ખોટા HTTP status સાથે દર્શાવે છે.

**હેતુ:** classification પહેલાં ગેરમાર્ગે દોરતા statusને સુધારવો, જેથી downstream consumers (fallback engine, combo aggregation, client-facing response) નિષ્ફળતાની સાચી retryable પ્રકૃતિ જોઈ શકે.

કેટલાક gateways TEMPORARY quota exhaustionને non-retryable HTTP
status સાથે સંકેત આપે છે. `agentrouter.org` પ્રમાણભૂત `429`ને બદલે
ચાઇનીઝ body (`用户额度不足` / `额度不足`) સાથે `403` (ક્યારેક `400`) પરત
કરે છે. Claude Code જેવા clients `403`ને કાયમી માનીને sessionને abort કરે
છે, અને સુધારા વિના fallback engine તેને quota eventને બદલે
`AUTH_ERROR` તરીકે વર્ગીકૃત કરશે.

**અમલીકરણ:**

- Registry + matcher: `open-sse/config/upstreamStatusRestatement.ts` — પ્રતિ-provider નિયમોની યાદી (`{id, fromStatuses, toStatus, textMarkers, excludeMarkers, defaultRetryAfterMs}`), જેને `applyStatusRestatement()` દ્વારા match કરવામાં આવે છે.
- Call site: `open-sse/handlers/chatCore.ts`ના `providerFailure:` blockમાં (લગભગ line 3654), `parseUpstreamError()` કોઈ error HTTP status ધરાવતો અપસ્ટ્રીમ response (`!providerResponse.ok`) parse કરે તે તરત પછી અને કોઈપણ classification ચાલે તે પહેલાં, જેથી દરેક downstream consumerને સુધારેલો status મળે. `200` SSE streamની અંદર embedded errors અલગ, પછીના stream-parsing pathને અનુસરે છે અને આજે આ hookના **અંતર્ગત નથી** — આ જાણીતી મર્યાદા છે અને agentrouterના misstatus માટે હજી જરૂરી નથી (તે error HTTP status તરીકે સપાટી પર આવે છે).
- Retry eligibility: `429` `RETRY_AFTER_ELIGIBLE_STATUSES` (`open-sse/services/combo/unavailableRetryGate.ts`)માં છે, તેથી restated error dead `403` તરીકે દેખાવા બદલે વાસ્તવિક retry window સાથે આવે છે.
- Synthetic `60s` `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`) માત્ર restated response **client**ને જે કહે છે તે છે; તે connectionની આંતરિક cooldown/lockout અવધિ નથી — તે અલગથી restated errorને ખરેખર સંભાળતી mechanism દ્વારા નિયંત્રિત થાય છે (Connection Cooldownનું વધતું backoff, §2, API-key providers માટે base `3s`; અથવા per-model-quota providers જેવા કે agentrouter માટે Model Lockout, §3). Router clientને જાહેર કરેલી 60s window કરતાં વહેલું આંતરિક રીતે retry માટે eligible બની શકે છે — આ ઇરાદાપૂર્વકનું headroom છે, bug નથી.

કાયમી errors (agentrouterનું `无权访问模型` — આ model સુધી કોઈ access નથી)ને
ક્યારેય restate કરવામાં આવતા નથી: `textMarkers` hit થાય ત્યારે પણ
`excludeMarkers` નિયમને veto કરે છે, તેથી error પોતાનો મૂળ status જાળવી રાખે છે
અને તેને અનંતકાળ સુધી retry કરવામાં આવતું નથી. સંબંધિત provider
classification rule
(`open-sse/config/providerErrorRules.ts`માં
`agentrouter-model-access-denied`: `reason: "auth_error"`,
`scope: "model"`, જાહેર કરાયેલ `6h` base cooldown)ને
`checkFallbackError` (`open-sse/services/accountFallback.ts`)
generic apikey-category `FORBIDDEN` early-return _પહેલાં_ તપાસે છે, જે
`honorsRuleLockScope(provider)` (#10334) પર આધારિત છે — હાલમાં
`providerErrorRules.ts`માંના `HONORS_RULE_LOCK_SCOPE_PROVIDERS`
allowlist દ્વારા માત્ર agentrouter માટે સક્ષમ છે. નિયમનું જાહેર કરાયેલ 6h
cooldown `fallbackResult.baseCooldownMs` તરીકે આગળ વહે છે, પરંતુ તે હજી પણ
હાલના per-model-quota lockout path
(`lockModelIfPerModelQuota()` /
`recordModelLockoutFailure()`, જેમાં #10334 દ્વારા cooldown source સિવાય
કોઈ ફેરફાર થયો નથી)માં જાય છે: દરેક અન્ય model lockoutની જેમ તેને operatorના
`mlSettings.maxCooldownMs` (default `1_800_000ms` / 30min) સુધી clamp કરવામાં
આવે છે, અને _persisted lockout reason_ હાલનું hardcoded `"forbidden"` જ રહે છે,
નિયમનું `"auth_error"` નહીં — સમગ્ર પ્રક્રિયામાં માત્ર cooldown duration
માન્ય રાખવામાં આવે છે, reason string નહીં. Connection પોતે સક્રિય રહે છે;
એ જ connection પરના sibling models પર કોઈ અસર થતી નથી.

પુનઃવ્યક્ત કરાયેલ ક્વોટા ભૂલો (`额度不足`) પ્રોડક્શનમાં પ્રોવાઇડર નિયમ સુધી પહોંચે છે
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`, પોતાનો કોઈ ઘોષિત કૂલડાઉન નથી — પર્સિસ્ટન્સ લેયરનો
સ્કેલ્ડ બેકઑફ ડિફૉલ્ટ લાગુ પડે છે). #10334 થી, `ProviderErrorRuleMatch` પરનો
`scope` એન્ડ-ટુ-એન્ડ કન્ઝ્યુમ થાય છે, પરંતુ **ફક્ત**
`HONORS_RULE_LOCK_SCOPE_PROVIDERS` ઍલાઉલિસ્ટમાં રહેલા પ્રોવાઇડર્સ માટે
(`providerErrorRules.ts` — આજે ફક્ત `"agentrouter"`, `honorsRuleLockScope()` દ્વારા ગેટેડ). દરેક
અન્ય પ્રોવાઇડર માટે `scope` માહિતીપરય જ રહે છે, બરાબર #10334 પહેલાંની જેમ.
`checkFallbackError` મેળ ખાતા નિયમના scope ને
`fallbackResult.ruleScope` તરીકે સરફેસ કરે છે; `isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) એ શેર્ડ ગાર્ડ છે જે પુષ્ટિ કરે છે કે
`ruleScope` ખરેખર કનેક્શન-વ્યાપી, સ્વ-પુનઃપ્રાપ્તિ સિગ્નલ તરીકે
સન્માનવા માટે સુરક્ષિત છે (scope `"connection"`, reason `quota_exhausted`,
ક્યારેય `permanent` નહીં, ક્યારેય `creditsExhausted` નહીં — ભવિષ્યના એવા નિયમ
સામેનું રક્ષણ જે scope `"connection"` ને કાયમી એકાઉન્ટ સ્થિતિ સાથે જોડે). બે કન્ઝ્યુમર્સ તેને કૉલ કરે છે:

- **પર્સિસ્ટન્સ** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  પાસથ્રુ-પ્રોવાઇડરની **પ્રતિ-મોડલ** લૉકઆઉટ
  શાખામાં જવાને બદલે (agentrouter `passthroughModels: true` છે → `hasPerModelQuota()`
  `true` પરત કરે છે), તે **અસ્થાયી કનેક્શન કૂલડાઉન** લાગુ કરે છે —
  `testStatus: "unavailable"` + `rateLimitedUntil`, ક્યારેય ટર્મિનલ સ્ટેટસ નહીં
  (`credits_exhausted`/`banned`/`expired`) — જેથી કૂલડાઉન સમાપ્ત થતાં જ
  કનેક્શન સ્વ-પુનઃપ્રાપ્ત થઈ જાય, મેન્યુઅલ ક્રેડેન્શિયલ રીસેટની જરૂરિયાત વગર.
  `disableCooling: true` ધરાવતા કનેક્શન્સ માટે સ્કિપ થાય છે (#2997): તે ઑપ્ટ-આઉટ
  તેના બદલે પ્રતિ-મોડલ લૉકઆઉટમાં ફોલ થ્રુ થાય છે (દસ્તાવેજીકૃત ટ્રેડ-ઑફ —
  શાખા ઉપરની કોડ કમેન્ટ જુઓ).
- **સમાન-રિક્વેસ્ટ કૉમ્બો રાઉટિંગ** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): એ જ ગાર્ડ
  કનેક્શનને ઇન-મેમરી `exhaustedConnections` સેટમાં માર્ક કરે છે, જે
  `${provider}:${connectionId}` દ્વારા કી થયેલ છે. આ ફક્ત તે બાકીના
  SAME-REQUEST ટાર્ગેટને જ સ્કિપ કરે છે જે પોતાના ટાર્ગેટ ઑબ્જેક્ટ પર
  _પોતે પહેલેથી જ તે ચોક્કસ `connectionId` ધરાવે છે_
  (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `exhaustedConnections`
  લુકઅપ પહેલાં `if (provider &&
connectionId)`) — એક સાદો
  મોડલ-લિસ્ટ કૉમ્બો, જ્યાં સિબલિંગ ટાર્ગેટ્સ પોતાનો કોઈ પિન કરેલો `connectionId`
  ધરાવતા નથી અને એક ફક્ત રિસ્પોન્સના
  `X-OmniRoute-Selected-Connection-Id` હેડરમાંથી પ્રતિ-ડિસ્પેચ રિઝૉલ્વ થાય છે,
  તે કી મેચને ક્યારેય હિટ કરતું નથી. તે
  સામાન્ય કેસ માટે, બાકીનો લેગ હમણાં-જ-થાકેલા એકાઉન્ટનો ફરીથી ઉપયોગ કરે
  તે સામેનું વાસ્તવિક રક્ષણ આ Set નથી — તે ઉપરનું પર્સિસ્ટન્સ લેયર છે
  (કનેક્શનનો `rateLimitedUntil` હવે ભવિષ્યમાં છે) અને નિષ્ફળતા માટે
  `transientRateLimitedProviders` ને દબાવતા આ જ ગાર્ડનું સંયોજન
  (જુઓ "બે-તબક્કાની ડિઝાઇન" અને `targetExhaustion.ts` માં
  `isAgentrouterConnectionQuotaScope` શાખા પરની કોડ કમેન્ટ): તે Set ને
  અનમાર્ક્ડ છોડી દેવાયેલ હોવાથી, `combo.ts` નો `allowRateLimitedConnection` ફોર્સ-ઍલાઉ
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) પ્રોવાઇડરના
  બાકીના લેગ્સ માટે લાગુ થતો નથી, જેથી ક્રેડેન્શિયલ પસંદગીનો `rateLimitedUntil`
  ફિલ્ટર (`src/sse/services/auth.ts:1238`) સામાન્ય રીતે સન્માનિત થાય છે અને
  બાકીનો લેગ કાં તો અલગ, હજુ પાત્ર agentrouter
  કનેક્શન પસંદ કરે છે અથવા કોઈ ક્રેડેન્શિયલ્સ ઉપલબ્ધ ન હોવાથી નિષ્ફળ જાય છે —
  તે આ શાખાએ હમણાં જ કૂલ ડાઉન કરેલા કનેક્શન પર બળજબરીથી પાછું ફરતું નથી.

### બે-તબક્કાની ડિઝાઇન: સ્ટેટસ પુનઃવ્યક્તિ, પછી વર્ગીકરણ

સ્ટેટસ પુનઃવ્યક્તિ (`upstreamStatusRestatement.ts`) અને પ્રોવાઇડર
વર્ગીકરણ નિયમો (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) અલગ-અલગ રજિસ્ટ્રીઓ છે જે બંને પ્રોવાઇડર id
અને ટેક્સ્ટ માર્કર્સ પર કી કરે છે, પરંતુ તેઓ અલગ-અલગ જગ્યાએ ચાલે છે અને
અલગ-અલગ હેતુઓ પૂરા કરે છે: પુનઃવ્યક્તિ `chatCore.ts` માં
શરૂઆતમાં જ HTTP સ્ટેટસને ફરીથી લખે છે; વર્ગીકરણ નિયમો
`checkFallbackError()` (`open-sse/services/accountFallback.ts`) ની અંદર ફોલબેક
`reason` અને લૉક `scope` (`model` / `provider` / `connection`) પસંદ કરે છે.

વર્ગીકરણ નિયમો સંપૂર્ણ ભૂલ **ટેક્સ્ટ** (`额度不足` જેવા બોડી
માર્કર્સને મેચ કરવા માટે જરૂરી) ફક્ત `providerErrorRules.ts` માંની
`FULL_TEXT_RULE_PROVIDERS` ઍલાઉલિસ્ટમાં સૂચિબદ્ધ પ્રોવાઇડર્સ માટે જ જુએ છે —
હાલમાં ફક્ત `"agentrouter"`. દરેક અન્ય **બિલ્ટ-ઇન કેટલોગ**
પ્રોવાઇડર માટે, `checkFallbackError` `getProviderErrorRuleMatch` ને
ફક્ત સ્ટ્રક્ચર્ડ ભૂલ (`{code, type}`) આપે છે, જે
હેડર/સ્ટેટસ/કોડ-આધારિત નિયમો માટે પૂરતું છે પરંતુ બોડી-ટેક્સ્ટ માર્કર્સ
માટે અંધ છે. હેલ્પર `resolveRuleMatchBody()` આ પસંદગી કરે છે:
ઍલાઉલિસ્ટેડ પ્રોવાઇડર્સ માટે સંપૂર્ણ ભૂલ ટેક્સ્ટ, નહીંતર સ્ટ્રક્ચર્ડ ભૂલ.
`FULL_TEXT_RULE_PROVIDERS` માં **બિલ્ટ-ઇન** પ્રોવાઇડર ઉમેરવો એ સ્પષ્ટ
પ્રતિ-પ્રોવાઇડર ઑપ્ટ-ઇન છે — તે એટલા માટે અસ્તિત્વમાં છે કે સૂચિમાં ન હોય તેવા
દરેક પ્રોવાઇડર માટે ડિફૉલ્ટ પાથ બાઇટ-ફોર-બાઇટ અફેર રહે.

નિયમનો `scope` (`model` / `provider` / `connection`) એ
`FULL_TEXT_RULE_PROVIDERS` થી અલગ ઑપ્ટ-ઇન છે: `checkFallbackError` તેને
ફક્ત `fallbackResult.ruleScope` તરીકે સરફેસ કરે છે, અને ડાઉનસ્ટ્રીમ કન્ઝ્યુમર્સ
તેને માહિતીપર લેબલ સિવાય બીજું કંઈપણ તરીકે ફક્ત તે જ ફાઇલમાંની
`HONORS_RULE_LOCK_SCOPE_PROVIDERS` ઍલાઉલિસ્ટમાં રહેલા પ્રોવાઇડર્સ માટે જ સન્માને છે
(`gated via
honorsRuleLockScope()` — આજે ફક્ત `"agentrouter"`). પ્રોવાઇડર તે ઍલાઉલિસ્ટ પર આવ્યા પછી
`scope: "connection"` મેચ વાસ્તવમાં શું કરે છે તે માટે ઉપર "પુનઃવ્યક્ત કરાયેલ ક્વોટા
ભૂલો" જુઓ.

**#11104 — operator-જાહેર નિયમો બંને allowlists ને bypass કરે છે.** Operator
`settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
દ્વારા runtime પર — આ ફાઇલમાં ફેરફાર કર્યા વિના — per-provider નિયમ જાહેર કરી શકે છે.
Operator નિયમને
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` પાછળ gate કરવો — built-in catalog નિયમોના **default** વર્તનને સુરક્ષિત કરવા માટે બનાવેલા allowlists — settings mechanism ને ત્યાં પહેલેથી સૂચિબદ્ધ providers સિવાયના દરેક provider માટે નિષ્ક્રિય બનાવી દેશે, કારણ કે નિયમ જાહેર કરવો એ પોતે જ operator નું explicit opt-in છે. `resolveRuleMatchBody()` અને `honorsRuleLockScope()` બંને પહેલા `hasOperatorRuleForProvider()` તપાસે છે: operator નિયમ ધરાવતો provider ને કાચો error text મળે છે અને તેનો જાહેર કરેલો `scope` માન્ય રાખવામાં આવે છે, ભલે તે બંનેમાંથી કોઈપણ allowlist માં દેખાતો હોય કે નહીં.

**જાણીતી ખામી — HTTP 400 માટે `providerRuleRegistry` ને ક્યારેય consult કરવામાં આવતું નથી.**
`checkFallbackError` ની `BAD_REQUEST` branch status 400 ને સંપૂર્ણપણે પોતાના pattern arrays (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS`, વગેરે `accountFallback.ts` માં) દ્વારા વર્ગીકૃત કરે છે અને તેની ઉપર આવેલી
`configuredRule`/`getProviderErrorRuleMatch` branch સુધી પહોંચે તે પહેલાં જ return કરી દે છે.
`status: 400` ધરાવતો built-in catalog નિયમ (અથવા operator નિયમ) વાક્યરચનાની દૃષ્ટિએ માન્ય છે પરંતુ ક્યારેય fire થશે નહીં. આજે કોઈ હાજર નિયમ 400 ને લક્ષ્ય બનાવતો નથી, તેથી production માં કંઈ પણ અસરગ્રસ્ત નથી — પરંતુ ભવિષ્યના 400 નિયમ માટે આ branch ને પહેલા સ્પર્શવી પડશે, જે નિયમ ઉમેરવા કરતાં મોટો ફેરફાર છે (તે pattern-array વર્તન પર પહેલેથી આધાર રાખતા દરેક provider માટે 400 નું પુનઃવર્ગીકરણ કરે છે) અને single-provider rule addition ના scope થી બહાર છે.

### નવો quota-ખોટું જણાવતો gateway ઉમેરવો

1. `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`) માં એક rule array નોંધાવો. `textMarkers` ને
   provider-specific રાખો; `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`) સાથે અથડાતા સામાન્ય English શબ્દસમૂહોનો ક્યારેય પુનઃઉપયોગ કરશો નહીં.
2. યોગ્ય lock scope પસંદ કરવા માટે
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) માં વૈકલ્પિક રીતે classification નિયમો નોંધાવો (account-wide quota માટે `connection`, per-model errors માટે `model`). આ પગલું production માં ફક્ત તે જ providers માટે અસર કરે છે જેમના નિયમોને સંપૂર્ણ error text (body markers) ની જરૂર છે: તે જ ફાઇલમાં `FULL_TEXT_RULE_PROVIDERS` માં provider id ઉમેરો — નહીંતર
   `checkFallbackError` નિયમને ફક્ત structured
   `{code, type}` error જ આપે છે અને body-text નિયમ live traffic સાથે ક્યારેય match થશે નહીં.
   શુદ્ધ `status`/`headers` પર match થતા નિયમોને (Opencode અથવા
   Minimax ના જેવા) આ opt-in ની જરૂર નથી. અલગથી, જો નિયમ
   `scope: "connection"` જાહેર કરે છે અને હेतુ વાસ્તવિક connection-wide cooldown વત્તા same-request combo skip છે (ફક્ત માહિતીપ્રદ label નહીં), તો તે જ ફાઇલમાં `HONORS_RULE_LOCK_SCOPE_PROVIDERS` માં provider id ઉમેરો — આ જ `markAccountUnavailable()` (`src/sse/services/auth.ts`) અને
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`) માં `isAgentrouterConnectionQuotaScope()`-શૈલીના consumption ને gate કરે છે; તેના વિના, `scope` હજુ પણ `fallbackResult.ruleScope` થઈને વહે છે પરંતુ કંઈ પણ તેના પર ક્રિયા કરતું નથી.
3. `tests/unit/upstream-status-restatement.test.ts`
   અને `tests/unit/agentrouter-error-rules.test.ts` ને અનુરૂપ unit tests ઉમેરો (not-permanent / not-creditsExhausted guards સહિત, અને — જો provider ને allowlist ની જરૂર હોય — `resolveRuleMatchBody()` ફક્ત તે provider માટે જ સંપૂર્ણ text return કરે છે તેવો દાવો કરતો test).

`chatCore.ts`, `classifyError`, અથવા combo માં કોઈ ફેરફારની જરૂર નથી.

#### Egress-બકેટેડ લૉક (#10880)

`EGRESS_BUCKETED_LOCK_PROVIDERS` માંના providers (opencode family) ને IP-bucketed upstream તરીકે ગણવામાં આવે છે (opencode free tier IP-bucketed છે,
account-bucketed નહીં — જુઓ #9611): `quota_exhausted` **અથવા** `rate_limit_exceeded` તરીકે વર્ગીકૃત status-429, rotation તેમને અજમાવી શકે તે પહેલાં, નિષ્ફળ connection ના છેલ્લા જાણીતા egress IP સાથે મેળ ખાતા દરેક allowlisted-family connection ને cool down કરે છે
— આમ N-1 ખાતરીપૂર્વક-નિષ્ફળ upstream calls ટળે છે (#10460/#10525 જેવો જ આકાર).
`rate_limit_exceeded` ઇરાદાપૂર્વક સામેલ છે: `markAccountUnavailable`
path પર opencode-specific નિયમો ક્યારેય match થતા નથી (`checkFallbackError` ને કોઈ headers/body આપવામાં આવતા નથી, opencode `FULL_TEXT_RULE_PROVIDERS` માં નથી), તેથી જેના body માં subscription-quota text ("monthly usage limit
reached") હોય એવો 429, `status_429` નિયમ સુધી ક્યારેય પહોંચે તે પહેલાં જ quota-text fallback
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; 1h cooldown) દ્વારા `quota_exhausted` તરીકે વર્ગીકૃત થાય છે — જ્યારે quota-text વિનાનો 429 (સાદું
rate limiting) `status_429` નિયમ મારફતે `rate_limit_exceeded` તરીકે વર્ગીકૃત થાય છે
અને તોપણ IP family ને cool down કરે છે. Allowlisted provider માટે IP-bucketed
rate limit એ exhausted quota સમાન જ સંકેત છે. પ્રામાણિક મર્યાદાઓ:

- **બેસ્ટ-એફર્ટ**: લોક કનેક્શનનો છેલ્લો જાણીતો `egress_ip`
  `proxy_logs` માંથી ઉકેલે છે (24h વિન્ડો, સિંક્રોનસ, કોઈ કેશ નહીં). કોલ્ડ કેશ
  (egress IP ક્યારેય પ્રોબ થયો નથી) અથવા કોઈ રો નહીં → નિષ્ફળ કનેક્શન હજુ પણ
  બ્રાન્ચ દ્વારા કૂલ થાય છે (આજની જેમ રેકોર્ડ થાય છે), ફક્ત કોઈ સિબ્લિંગ લોક થતું
  નથી.
- **ક્યારેય ટર્મિનલ નહીં**: કૂલડાઉન એ રિન્યૂ થતી ક્વોટા વિન્ડો છે
  (`testStatus: "unavailable"`); IP-સ્તરીય સિગ્નલમાંથી કાયમી સ્થિતિ ક્યારેય મેળવવામાં
  આવતી નથી. `disableCooling` કનેક્શનો બ્રાન્ચને સંપૂર્ણપણે સ્કિપ કરે છે.
- **ઍલાઉલિસ્ટેડ ફેમિલી માટે લોક ગ્રેન્યુલેરિટી બદલાય છે**: આ સ્કોપ
  ચેન્જ છે, ફક્ત સિબ્લિંગ ઓપ્ટિમાઇઝેશન નહીં. opencode એ `passthroughModels`
  પ્રોવાઇડર છે, તેથી આ બ્રાન્ચ પહેલાં 429 એ પ્રતિ-MODEL લોકઆઉટ ઉત્પન્ન કર્યું; હવે
  તે કનેક્શન કૂલડાઉન ઉત્પન્ન કરે છે — જેમાં સંપૂર્ણપણે સિબ્લિંગ વગર એકલ કનેક્શન
  ચલાવતા ઓપરેટરનો પણ સમાવેશ થાય છે. તે જ ગ્રેન્યુલેરિટી છે જેને opencode રૂલ
  ટેબલ પહેલેથી જ સાચી જાહેર કરે છે (`scope: "connection"`,
  `providerErrorRules.ts`), પરંતુ અત્યાર સુધી ક્યારેય માન્ય રાખવામાં આવી નથી કારણ કે
  opencode `HONORS_RULE_LOCK_SCOPE_PROVIDERS` માં નથી. બ્રાન્ચ નિષ્ફળ
  કનેક્શનનો કૂલડાઉન + `backoffLevel` જાતે લખે છે, કનેક્શન-સ્કોપ્ડ agentrouter
  બ્રાન્ચને મિરર કરીને, અને રિટર્ન કરે છે — પ્રતિ-મોડેલ બ્લોક અને નીચેનો જેનરિક પાથ
  ક્યારેય પહોંચાતા નથી.
- **કોમ્બો સામેલ**: agentrouter બ્રાન્ચની જેમ, સ્કોપ જાણીજોઈને
  `persistUnavailableState`/`isCombo` ડાઉનગ્રેડને અવગણે છે જે કોમ્બો કોલર
  429 પર લાગૂ કરે છે. પ્રતિ-મોડેલ લોકઆઉટ આ સ્કોપનું નબળું સ્વરૂપ નથી, તે ખોટો
  એકમ છે: તે ખતમ થયેલા IP વિશે કંઈ કહેતું નથી, તેથી કોમ્બો રોટેશન પ્રતિ સિબ્લિંગ
  એક ગેરંટીડ-નિષ્ફળ કોલ બર્ન કરતું રહે.
- **સિબ્લિંગ સેફ્ટી**: પહેલેથી ટર્મિનલ (banned/credits_exhausted)
  અથવા પહેલેથી લાંબા કૂલડાઉનમાં હોય તેવું સિબ્લિંગ ક્યારેય ઓવરરાઇટ થતું નથી.
- **એક્સક્લુઝિવ ઍલાઉલિસ્ટ**: `EGRESS_BUCKETED_LOCK_PROVIDERS` ને
  વિસ્તૃત કરવું એ સ્પષ્ટ માલિક નિર્ણય છે; કોઈ જેનરિક વાયરિંગ નહીં (pattern
  #10334/#10419). સિબ્લિંગ ક્વેરી તે જ ઍલાઉલિસ્ટને બાઇન્ડ કરે છે, તેને SQL લિટરલ
  તરીકે પુનરાવર્તિત કરવાને બદલે, જેથી તેને વિસ્તૃત કરવું એક-લાઇન ફેરફાર જ રહે.
- **Egress IP રોટેશન, બંને દિશાઓ**: લુકઅપ વિન્ડો (24h) egress-IP કેશ
  TTL (5 min) કરતાં ઘણી પહોળી છે, તેથી "છેલ્લો જાણીતો IP" ઇતિહાસ છે, વર્તમાન
  સ્થિતિ નહીં. જો કનેક્શનનો પ્રોક્સી વિન્ડોની અંદર રોટેટ થયો હોય તો લોક સાચ્છા શેયર્ડ
  IP ને **મિસ** કરી શકે છે (રેકોર્ડ થયેલો IP નવો, ન વપરાયેલો છે) — અને સમપ્રમાણમાં
  તે **એવા સિબ્લિંગને કૂલ કરી શકે છે જે ખતમ થયેલા IP થી ત્યારબાદ દૂર રોટેટ થઈ
  ગયું છે**. બીજો કેસ તે સિબ્લિંગને એક કૂલડાઉન વિન્ડોનો ખર્ચ પાડે છે; બંને
  ઇતિહાસ-આધારિત લુકઅપની સ્વીકારેલી બેસ્ટ-એફર્ટ મર્યાદાઓ છે.
- **ખર્ચ**: `proxy_logs` ના બે બાઉન્ડેડ સ્કેન (`idx_pl_timestamp`
  દ્વારા વિન્ડો-ફિલ્ટર્ડ), ફક્ત 429 ફ્રીક્વન્સીએ. કોઈ નવો ઇન્ડેક્સ નહીં (migration
  134 YAGNI). મધ્યમ કદની રિયલ-ટ્રાફિક DB કોપી પર માપવામાં આવ્યું; હાઈ-થ્રુપુટ
  ઇન્સ્ટન્સ એ જ વિન્ડોમાં પ્રમાણસર વધુ રો રાખે છે.

---

## અન્ય રેઝિલિયન્સ સુવિધાઓ

- **20 રાઉટિંગ સ્ટ્રેટેજી** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — જુઓ [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **રીસેટ-અવેર રાઉટિંગ** (v3.8.0) — ક્વોટા રીસેટ સમય પ્રમાણે કનેક્શનોને પ્રાથમિકતા આપે છે.
- **બેકગ્રાઉન્ડ મોડ ડિગ્રેડેશન** — Responses API `background: true` ચેતવણી સાથે સિંક પર ડિગ્રેડ થાય છે.
- **ડાયનામિક ટૂલ લિમિટ ડિટેક્શન** — ટૂલ સંખ્યાની મર્યાદા પૂરી થાય ત્યારે પ્રોવાઇડર્સને બેક-ઓફ કરે છે.
- **ઈમર્જન્સી ફોલબેક** — `OMNIROUTE_EMERGENCY_FALLBACK` દ્વારા નિયંત્રિત; ઓપરેટરો રીસ્ટાર્ટ વગર Feature Flags પેજથી તેને ઓવરરાઇડ કરી શકે છે.

---

## ડીબગિંગ

- Weighted કોમ્બો `503 all_targets_cooling_down` જવાબ આપે છે (`Retry-After` સેટ થયેલ, `diagnostics.excluded` દરેક ટાર્ગેટને `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable` સાથે લિસ્ટ કરે છે) → પૂલ કોન્ફિગર અને કનેક્ટ થયેલ છે, દરેક ટાર્ગેટ ફક્ત રેઝિલિયન્સ ટાઇમર દ્વારા બાકાત છે; `[COMBO] Weighted selection: every target excluded before dispatch — …` ચેતવણી કારણો અને બાકીના સેકન્ડ જણાવે છે. એ જ કોમ્બો તરફથી `404 no_executable_targets` એનો અર્થ એ કે કોઈ રેઝિલિયન્સ ટાઇમર સંકળાયેલ નથી (ચલાવવા માટે કંઈ નથી, અથવા દરેક એકાઉન્ટ ઉપલબ્ધતા પ્રોબમાં નિષ્ફળ ગયું). `targetResolution.ts` માં એકત્રિત થયેલા exclusion પરથી `open-sse/services/combo/pinRecovery.ts` માં બનાવેલ.
- પ્રોવાઇડરની તમામ કી સ્કિપ થઈ → સર્કિટ બ્રેકર સ્ટેટ અને દરેક કનેક્શનના `rateLimitedUntil`/`testStatus` બંને તપાસો.
- રીસેટ વિન્ડો પછી પ્રોવાઇડર કાયમી રીતે બાકાત → `getStatus()`/`canExecute()` ને બદલે કાચો `state` વાંચતો કોડ.
- એક કી નિષ્ફળ જાય, બાકીની કામ કરવી જોઈએ → સર્કિટ બ્રેકર કરતાં કનેક્શન કૂલડાઉનને પ્રાથમિકતા આપો.
- ફક્ત એક મોડેલ નિષ્ફળ જાય → કનેક્શન કૂલડાઉન કરતાં મોડેલ લોકઆઉટને પ્રાથમિકતા આપો.
- સ્ટેટ સ્વયં-પુનઃપ્રાપ્ત થવું જોઈએ પણ થતું નથી → ભવિષ્યનો ટાઇમસ્ટેમ્પ + સમાપ્ત સ્ટેટ રિફ્રેશ કરતો રીડ પાથ તપાસો. કાયમી સ્ટેટસ માટે મેન્યુઅલ ફેરફારો જરૂરી છે.

---

## રનટાઇમ સ્ટેટ — એજન્ટ ક્વિક રેફરન્સ

> `AGENTS.md` → "Resilience Runtime State" (PR #12743) માંથી યથાતથ ખસેડેલું, જેથી એજન્ટ
> ગાઇડ 40k કોન્ટેક્સ્ટ બજેટ હેઠળ રહે. આ ઉપરના વિભાગોનું સંક્ષિપ્ત, એજન્ટ-ફેસિંગ દૃશ્ય છે;
> ક્રમાંકિત વિભાગો સંપૂર્ણ રેફરન્સ તરીકે રહે છે.

OmniRoute પાસે ત્રણ સંબંધિત પણ અલગ અસ્થાયી-નિષ્ફળતા મિકેનિઝમ છે. રાઉટિંગ વર્તન ડીબગ કરતી વખતે
તેમની અવધિ અલગ રાખો. એક નજરે સમજાય એવો નકશો માટે
[3-લેયર રેઝિલિયન્સ ડાયાગ્રામ](../diagrams/exported/resilience-3layers.svg)
(સોર્સ: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
જુઓ.

### પ્રોવાઇડર સર્કિટ બ્રેકર

**અવધિ**: સમગ્ર પ્રોવાઇડર, દા.ત. `glm`, `openai`, `anthropic`.

**હेतુ**: અપસ્ટ્રીમ/સર્વિસ સ્તરે વારંવાર નિષ્ફળ થતા પ્રોવાઇડરને ટ્રાફિક મોકલવાનું બંધ કરવું,
જેથી એક અસ્વસ્થ પ્રોવાઇડર દરેક રિક્વેસ્ટને ધીમી ન કરે.

**ઇમ્પ્લિમેન્ટેશન**:

- કોર ક્લાસ: `src/shared/utils/circuitBreaker.ts`
- ચેટ ગેટ/એક્ઝિક્યુશન વાયરિંગ: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- રનટાઇમ સ્ટેટસ API: `src/app/api/monitoring/health/route.ts`
- શેર્ડ રેપર્સ: `open-sse/services/accountFallback.ts`
- પર્સિસ્ટેડ સ્ટેટ ટેબલ: `domain_circuit_breakers`

**સ્ટેટ્સ** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: સામાન્ય ટ્રાફિકને મંજૂરી છે.
- `DEGRADED`: અર્લી-વોર્નિંગ બેન્ડ — નિષ્ફળતાઓ ડિગ્રેડેશન થ્રેશોલ્ડ પાર કરી ગઈ છે પણ હજુ
  બ્રેકર થ્રેશોલ્ડ પાર નથી કરી; ટ્રાફિક ચાલુ રહે છે, ડેશબોર્ડ ચેતવણી બતાવે છે. માન્ય
  કનેક્શન ટેસ્ટ અથવા નવી નિષ્ફળતા વગરની શાંત વિન્ડો તેને `CLOSED` પર પાછું લાવે છે
  (વિન્ડો `docs/architecture/RESILIENCE_GUIDE.md` માં છે).
- `OPEN`: પ્રોવાઇડર અસ્થાયી રીતે બ્લોક થયેલ છે; કોલર્સને provider-circuit-open રિસ્પોન્સ
  મળે છે અથવા કોમ્બો રાઉટિંગ બીજા ટાર્ગેટ પર જાય છે.
- `HALF_OPEN`: રીસેટ ટાઇમઆઉટ પૂરો થયો છે; પ્રોબ રિક્વેસ્ટને મંજૂરી આપો. સફળતા બ્રેકરને
  બંધ કરે છે, નિષ્ફળતા તેને ફરી ખોલે છે.

**ડિફોલ્ટ્સ** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, `src/lib/resilience/settings.ts` માં
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` દ્વારા વપરાય છે → `src/sse/handlers/chatHelpers.ts` માં
`getCircuitBreaker(provider, …)`). સમગ્ર-પ્રોવાઇડર બ્રેકર `circuitBreakerThreshold` / `circuitBreakerReset` પર ચાલે છે:

| પ્રોફાઇલ |  ડિગ્રેડ થાય | ખુલે (`circuitBreakerThreshold`) | રીસેટ (`circuitBreakerReset`) |
| -------- | -----------: | -------------------------------: | ----------------------------: |
| OAuth    |          `5` |                              `8` |                         `60s` |
| API કી   |          `7` |                             `12` |                         `30s` |
| લોકલ     | (વ્યુત્પન્ન) |                              `2` |                         `15s` |

`PROVIDER_PROFILES` `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (15/30/5 min) અને `providerCooldownMs` (5/10/1 min) પણ વ્યાખ્યાયિત કરે છે: આ
**ઓપ્ટ-ઇન ગ્લોબલ Provider Cooldown ના વિન્ડો ગેટ** (`PROVIDER_COOLDOWN_ENABLED`, ડિફોલ્ટ બંધ) ને ચલાવે છે — `open-sse/services/providerCooldownTracker.ts` માં પ્રોવાઇડર-લેવલ એન્ટ્રી ફક્ત `providerFailureWindowMs` ની અંદર `providerFailureThreshold` નિષ્ફળતાઓ પછી જ કૂલિંગ તરીકે ગણાય છે, અને પછી `providerCooldownMs` માટે કૂલ થાય છે. આ લાઇવ બ્રેકરના થ્રેશોલ્ડ નથી — બ્રેકર વર્તનની અપેક્ષા રાખીને તેને ટ્યુન ન કરો. દરેક ડિફોલ્ટ `OMNIROUTE_PROVIDER_BREAKER_*` અને `OMNIROUTE_CIRCUIT_BREAKER_*` env વેરિએબલ દ્વારા ઓવરરાઇડ કરી શકાય છે; રનટાઇમ-ચોક્કસ રેફરન્સ ટેબલ `docs/architecture/RESILIENCE_GUIDE.md` માં છે.

ફક્ત પ્રોવાઇડર-લેવલ નિષ્ફળતા સ્ટેટસ જ પ્રોવાઇડર બ્રેકરને ટ્રિપ કરવું જોઈએ:

```ts
(408, 500, 502, 503, 504);
```

મોટા ભાગના `401`, `403`, અથવા `429` કેસ જેવા સામાન્ય એકાઉન્ટ/કી/મોડેલ એરર માટે સમગ્ર-પ્રોવાઇડર બ્રેકરને ટ્રિપ ન કરો. તે સામાન્ય રીતે કનેક્શન કૂલડાઉન અથવા મોડેલ લોકઆઉટમાં આવે છે. જેનરિક API-કી પ્રોવાઇડરનો `403` પુનઃપ્રાપ્ત કરી શકાય એવો હોવો જોઈએ, સિવાય કે તેને ટર્મિનલ પ્રોવાઇડર/એકાઉન્ટ એરર તરીકે વર્ગીકૃત કરવામાં આવ્યો હોય.

બ્રેકર બેકગ્રાઉન્ડ ટાઈમર નહીં, પણ લેઝી રિકવરી વાપરે છે. જ્યારે `OPEN` સમાપ્ત થાય છે,
ત્યારે `getStatus()`, `canExecute()`, અને `getRetryAfterMs()` જેવા રીડ સ્થિતિને
`HALF_OPEN` પર રિફ્રેશ કરે છે, જેથી ડેશબોર્ડ અને કોમ્બો કેન્ડિડેટ બિલ્ડર સમાપ્ત થયેલા
પ્રોવાઇડરને હંમેશ માટે બહાર રાખતા ન રહે.

### કનેક્શન કૂલડાઉન

**અવધિ**: એક પ્રોવાઇડર કનેક્શન/એકાઉન્ટ/કી.

**હેતુ**: એક ખરાબ કી/એકાઉન્ટને અસ્થાયી રૂપે છોડી દેવો, જ્યારે તે જ પ્રોવાઇડરના અન્ય
કનેક્શનો વિનંતીઓ પૂરી પાડવાનું ચાલુ રાખી શકે.

**અમલીકરણ**:

- લખવા/અપડેટ કરવાનો માર્ગ: `src/sse/services/auth.ts::markAccountUnavailable()`
- એકાઉન્ટ પસંદગી/ફિલ્ટરિંગ: `src/sse/services/auth.ts::getProviderCredentials...`
- કૂલડાઉન ગણતરી: `open-sse/services/accountFallback.ts::checkFallbackError()`
- સેટિંગ્સ: `src/lib/resilience/settings.ts`

પ્રોવાઇડર કનેક્શન પર મહત્વપૂર્ણ ફીલ્ડ:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

એકાઉન્ટ પસંદગી દરમિયાન, કનેક્શનને ત્યારે છોડી દેવામાં આવે છે જ્યારે:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

કૂલડાઉન પણ લેઝી છે: જ્યારે `rateLimitedUntil` ભૂતકાળમાં હોય, ત્યારે કનેક્શન ફરીથી લાયક
બને છે. સફળ ઉપયોગ પર, `clearAccountError()` `testStatus`, `rateLimitedUntil`, એરર
ફીલ્ડ અને `backoffLevel` સાફ કરે છે.

ડિફોલ્ટ કનેક્શન કૂલડાઉન વર્તન:

- OAuth બેઝ કૂલડાઉન: `5s`.
- API-કી બેઝ કૂલડાઉન: `3s`.
- API-કી `429` માટે ઉપલબ્ધ હોય ત્યારે અપસ્ટ્રીમ રીટ્રાય સંકેતો (`Retry-After`, રીસેટ
  હેડર, અથવા પાર્સ કરી શકાય એવો રીસેટ ટેક્સ્ટ) ને પ્રાથમિકતા આપવી જોઈએ.
- વારંવાર થતી પુનઃપ્રાપ્ય નિષ્ફળતાઓ એક્સપોનન્શિયલ બેકઑફ વાપરે છે:

```ts
baseCooldownMs * 2 ** failureIndex;
```

એન્ટી-થન્ડરિંગ-હર્ડ ગાર્ડ એ જ કનેક્શન પર એકસાથે થતી નિષ્ફળતાઓને કૂલડાઉન વારંવાર
લંબાવવાથી અથવા `backoffLevel` બેવડું વધારવાથી અટકાવે છે.

ટર્મિનલ સ્થિતિઓ કૂલડાઉન નથી. `banned`, `expired` (જે `EXPIRED_RETRY_MAX` દ્વારા N
સીમિત રીટ્રાય પછી જ ટર્મિનલ બને છે), અને `credits_exhausted` નો ઉદ્દેશ એ છે કે તેઓ
ત્યાં સુધી અનુપલબ્ધ રહે જ્યાં સુધી ક્રેડેન્શિયલ્સ/સેટિંગ્સ બદલાય અથવા ઓપરેટર તેમને
રીસેટ કરે. ટર્મિનલ સ્થિતિઓને ક્ષણિક કૂલડાઉન સ્થિતિથી ઓવરરાઇટ કરશો નહીં.

### મોડેલ લોકઆઉટ

**અવધિ**: પ્રોવાઇડર + કનેક્શન + મોડેલ.

**હેતુ**: જ્યારે તે કનેક્શન માટે ફક્ત એક જ મોડેલ અનુપલબ્ધ હોય અથવા ક્વોટા-સીમિત હોય,
ત્યારે આખું કનેક્શન અક્ષમ કરવાથી બચવું.

ઉદાહરણો:

- દરેક-મોડેલ ક્વોટા ધરાવતા પ્રોવાઇડર `429` પરત કરે છે.
- એક ગુમ થયેલા મોડેલ માટે લોકલ પ્રોવાઇડર `404` પરત કરે છે.
- પસંદ કરેલા Grok મોડ જેવી પ્રોવાઇડર-વિશિષ્ટ મોડ/મોડેલ પરવાનગી નિષ્ફળતાઓ.

મોડેલ લોકઆઉટ `open-sse/services/accountFallback.ts` માં રહેલું છે અને તે જ કનેક્શનને
અન્ય મોડેલો પૂરી પાડવાનું ચાલુ રાખવા દે છે.

### ડીબગિંગ માર્ગદર્શન

- જો પ્રોવાઇડરની બધી કી છોડી દેવામાં આવે, તો પ્રોવાઇડર બ્રેકર સ્થિતિ અને દરેક
  કનેક્શનની `rateLimitedUntil`/`testStatus` બંને તપાસો.
- જો રીસેટ વિન્ડો પછી પણ પ્રોવાઇડર કાયમી રીતે બહાર રહેલો દેખાય, તો તપાસો કે કોડ
  `getStatus()`/`canExecute()` વાપરવાને બદલે કાચી `state` વાંચી રહ્યું છે કે કેમ.
- જો એક પ્રોવાઇડર કી નિષ્ફળ જાય પણ બાકીની કામ કરવી જોઈએ, તો પ્રોવાઇડર બ્રેકરને બદલે
  કનેક્શન કૂલડાઉનને પ્રાથમિકતા આપો.
- જો ફક્ત એક જ મોડેલ નિષ્ફળ જાય, તો કનેક્શન કૂલડાઉનને બદલે મોડેલ લોકઆઉટને પ્રાથમિકતા આપો.
- જો કોઈ સ્થિતિ સ્વયં-પુનઃપ્રાપ્ત થવી જોઈએ, તો તેની પાસે ભવિષ્યનો ટાઈમસ્ટેમ્પ/રીસેટ
  ટાઈમઆઉટ અને સમાપ્ત સ્થિતિને રિફ્રેશ કરતો રીડ માર્ગ હોવો જોઈએ. કાયમી સ્થિતિઓ માટે
  મેન્યુઅલ ક્રેડેન્શિયલ અથવા કોન્ફિગ ફેરફારો જરૂરી છે.

---

## TLS ફિંગરપ્રિન્ટિંગ અને સ્ટીલ્થ

પ્રોવાઇડર-વિશિષ્ટ સ્ટીલ્થ (JA3/JA4, CCH, ઓબ્ફસ્કેશન) અલગથી દસ્તાવેજીકૃત છે — જુઓ `docs/security/STEALTH_GUIDE.md` (git; `/docs` માં કમ્પાઇલ થયેલ નથી).

---

## રેઝિલિયન્સ ટેસ્ટિંગ (ફેઝ 8 · બ્લોક C)

રેઝિલિયન્સ લોજિક માટેના યુનિટ ટેસ્ટ્સ ઉપરાંત, ત્રણ ટેસ્ટ્સ વાસ્તવિક સ્ટ્રેસ/નિષ્ફળતા
પરિસ્થિતિઓ હેઠળ રનટાઇમનું પરીક્ષણ કરે છે (બધા integration/nightly — કોઈપણ PRs ને બ્લોક કરતા નથી):

| ટેસ્ટ       | શું                                                                                                                                                                                                                   | ચલાવો                                    |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Chaos       | ફેક-અપસ્ટ્રીમ નોડ વાસ્તવિક latency/reset/timeout/503 ઇન્જેક્ટ કરે છે; માન્ય કરે છે કે સર્કિટ બ્રેકર ખુલે છે/પુનઃપ્રાપ્ત થાય છે અને `checkFallbackError` 503 ને પુનઃપ્રાપ્ત કરી શકાય એવા ફોલબેક તરીકે વર્ગીકૃત કરે છે. | `RUN_CHAOS_INT=1 npm run test:chaos`     |
| Heap-growth | `--expose-gc` હેઠળ `createSSEStream` દીઠ ~500 સ્ટ્રીમ્સ; જો હીપ સીમાથી આગળ વધે તો નિષ્ફળ થાય છે (OOM ગાર્ડ #3069).                                                                                                    | `npm run test:heap`                      |
| k6 soak     | `/api/monitoring/health` સામે સતત લોડ; p95/error થ્રેશોલ્ડ્સ.                                                                                                                                                         | `k6 run tests/load/k6-soak.js` (nightly) |

`.github/workflows/nightly-resilience.yml` (cron + dispatch) દ્વારા ઓર્કેસ્ટ્રેટેડ.
ડિફોલ્ટ `test:integration` માં, chaos અને heap સ્વ-સ્કિપ થાય છે (`RUN_CHAOS_INT`/`--expose-gc` વિના).

---

## આ પણ જુઓ

- [આર્કિટેક્ચર ગાઇડ](./ARCHITECTURE.md) — સિસ્ટમ આર્કિટેક્ચર અને આંતરિક બાબતો
- [યુઝર ગાઇડ](../guides/USER_GUIDE.md) — પ્રોવાઇડર્સ, કોમ્બો, CLI ઇન્ટિગ્રેશન
- [ઓટો-કોમ્બો એન્જિન](../routing/AUTO-COMBO.md) — 16-ફેક્ટર સ્કોરિંગ, મોડ પેક્સ
