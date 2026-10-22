# Resilience Guide (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute ina mifumo mitatu tofauti lakini inayohusiana ya ustahimilivu (resilience). Kila moja ina wigo na kusudi lake. Ziweke tofauti wakati wa kufuatilia matatizo ya tabia ya uelekezaji (routing).

![3-layer resilience model](../diagrams/exported/resilience-3layers.svg)

> Chanzo: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Mvunja Mzunguko wa Mtoa Huduma (Provider Circuit Breaker)

**Wigo:** mtoa huduma mzima (k.m., `glm`, `openai`, `anthropic`).

**Kusudi:** kuacha kutuma trafiki kwa mtoa huduma anayeshindwa mara kwa mara katika kiwango cha upstream/huduma.

**Utekelezaji:**

- Darasa kuu: `src/shared/utils/circuitBreaker.ts`
- Muunganisho: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API ya hali: `GET /api/monitoring/health`
- API ya kuweka upya: `POST /api/resilience/reset`
- Vifunikaji (wrappers): `open-sse/services/accountFallback.ts`
- Jedwali la DB: `domain_circuit_breakers`

**Hali:**

- `CLOSED` — trafiki ya kawaida inaruhusiwa
- `DEGRADED` — trafiki bado inaruhusiwa, lakini kushindwa kwa mtoa huduma kwa kiwango cha juu kunafuatiliwa; hurejea `CLOSED` baada ya mafanikio ya kutosha, baada ya jaribio halali la muunganisho, au baada ya kushikilia `OPEN` kwa muda mrefu zaidi kwa aina ya kushindwa ya mwisho (thamani yake ya `cooldownByKind`, vinginevyo `resetTimeout`, × `maxBackoffMultiplier`, angalau muda mmoja wa kupoa) bila kushindwa kupya
- `OPEN` — mtoa hudume amezuiliwa kwa muda; uelekezaji wa combo humuruka
- `HALF_OPEN` — muda wa kuweka upya umeisha; ombi la uchunguzi (probe) linaruhusiwa

**Chaguo-msingi zinazoweza kusanidiwa (`open-sse/config/constants.ts`, zimefichuliwa katika Dashboard → Settings → Resilience):**

| Darasa  | Hudidimia baada ya | Hufunguka baada ya | Muda wa kuweka upya |
| ------- | ------------------ | ------------------ | ------------------- |
| OAuth   | kushindwa 5        | kushindwa 8        | 60s                 |
| API-key | kushindwa 7        | kushindwa 12       | 30s                 |
| Local   | inayotokana        | kushindwa 2        | 15s                 |

`degradationThreshold` hudhibiti lini mtoa huduma anaingia `DEGRADED`; `failureThreshold` hudhibiti lini anafunguka na kurukwa. Wasifu wa watoa huduma wa Local bado haujafichuliwa kwenye ukurasa wa mipangilio ya Resilience.

**Misimbo ya kukatiza:** hali za kiwango cha mtoa huduma tu `[408, 500, 502, 503, 504]`. USIKATIZE kwa makosa ya kiwango cha akaunti (mengi ya 401/403/429 — hayo ni ya muda wa kupoa (cooldown) au kufungwa (lockout)).

**Urejeshaji wa kuchelewa (lazy recovery):** wakati `OPEN` inapoisha muda wake, `getStatus()`, `canExecute()`, `getRetryAfterMs()` husasisha hali hadi `HALF_OPEN`. Usoaji huo huo (na kushindwa kunakofuata) hupunguza `DEGRADED` iliyopitwa na wakati kurudi `CLOSED`. Hakuna kipima muda cha usuli kinachohitajika.

---

### Muda wa Kupoa kwa Mtoa Huduma wa Kimataifa wa Kujiunga (Opt-in global Provider Cooldown) — geto la dirisha (window gate)

Tabaka la nne, la **kujiunga kwa hiari** (`PROVIDER_COOLDOWN_ENABLED`, chaguo-msingi **kimezimwa**) huhifadhi kumbukumbu ya watoa huduma wanaoshindwa kati ya maombi katika
`open-sse/services/providerCooldownTracker.ts`, inayotazamwa na utatuzi wa malengo ya combo ili maombi mfululizo ya combo yaache kutembelea tena mtoa huduma aliyeshindwa hivi karibuni. Vipengee vya kiwango cha mtoa huduma hutii geto la dirisha la `PROVIDER_PROFILES`:

| Wasifu  | hutikia baada ya (`providerFailureThreshold`) | ndani ya (`providerFailureWindowMs`) | hupoa kwa (`providerCooldownMs`) |
| ------- | --------------------------------------------: | -----------------------------------: | -------------------------------: |
| OAuth   |                                          `10` |                              `15min` |                           `5min` |
| API key |                                          `15` |                              `30min` |                          `10min` |

Chini ya kizingiti mtoa huduma **hana**kubaliwa kuwa anapoa; mafanikio hufuta dirisha. Vipengee vya kiwango cha muunganisho (`provider:connectionId`) hubaki na kupungua kasi (backoff) wa kielezo `minRetryCooldownMs → maxRetryCooldownMs` badala yake. Kubatilisha:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Ulinzi dhidi ya kurudi nyuma: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Kupooza kwa Muunganisho

**Wigo:** muunganisho/akaunti/ufunguo mmoja wa mtoa huduma.

**Lengo:** kuruka ufunguo mmoja mbaya huku miunganisho mingine ya mtoa huduma yuleyule ikiendelea kutoa huduma.

**Utekelezaji:**

- Kuweka alama ya kutopatikana: `src/sse/services/auth.ts::markAccountUnavailable()`
- Uchaguzi: `getProviderCredentials*` katika faili hilehile
- Hesabu ya kupooza: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Mipangilio: `src/lib/resilience/settings.ts`

**Sehemu kwa kila muunganisho:**

- `rateLimitedUntil` — alama ya muda hadi kipindi cha kupooza kinaisha
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — kihesabu cha kupungua kwa ongezeko la kipeua

**Vipindi vya kupooza chaguomsingi:**

- Msingi wa OAuth: 5s
- Msingi wa API-key: 3s
- API-key 429: hupendelea `Retry-After` ya upstream / vichwa vya reset / maandishi ya reset yanayoweza kuchambuliwa
- Kupungua: `baseCooldownMs * 2 ** failureIndex`

**Ulinzi dhidi ya msukosuko wa kundi (thundering herd):** huzuia kushindwa kwa sambamba kusipanua kupita kiasi kipindi cha kupooza au kuongeza `backoffLevel` mara mbili.

**429 za kikomo cha uwiano hazipandi ngazi ya kupungua.** `429` ambayo mwili wake unaripoti kikomo cha uwiano ("too many concurrent requests", "concurrency limit", "parallel request limit", GLM `并发数过高`) ina maana akaunti iko nzuri lakini ina shughuli nyingi. `checkFallbackError()` hurudisha sababu `concurrency_limited`: hamia muunganisho unaofuata mara moja, pooza huu kwa `CONCURRENCY_LIMIT_COOLDOWN_MS` iliyowekwa imara (1s) au kidokezo cha kujaribu tena kutoka upstream, acha `backoffLevel` bila kubadilika, na uweke `skipProviderBreaker`. Mwili wa mgawo ulio wazi bado hushinda, kwa hivyo mwili unaolingana pia na muundo wa mgawo hubaki kuwa uamuzi wa mgawo. Utambuzi: `looksLikeConcurrencyLimit()` katika `src/shared/utils/classify429.ts`; uamuzi: `open-sse/services/accountFallback/concurrencyLimit429.ts`. `classify429()` (`FailureKind` ya breaker) haijabadilika na bado husoma `rate_limit` kwa miili hii.

**Kukwama kwa maudhui ya stream hakupoozi akaunti.** Wakati mchunguzi wa kukwama kwa maudhui (`open-sse/utils/streamHandler.ts`) anakata tamaa stream ambayo hajatuma pato la modeli kwa wakati, `markAccountUnavailable()` hurekodi kosa kwenye muunganisho lakini hawei kipindi cha kupooza: kukwama huku ni kwa ombi hilo, mara nyingi mzunguko mrefu wa hoja bila pato bado. Waendeshaji wanaweza kujiunga tena kwa `resilienceSettings.streamStallCooldown.enabled` (chaguomsingi `false`).

**Fremu za hoja huanzisha upya bajeti ya kukwama kwa maudhui.** Modeli ya hoja inaweza kufikiria kwa dakika kabla ya tokeni yake ya kwanza inayoonekana: Claude hutiririsha fremu za `thinking_delta` ambazo maandishi yake ya kufikiria yanaweza kuwa matupu, na Responses API hutiririsha kipengee kimoja cha hoja baada ya kingine. `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) hutambua fremu hizi, na mchunguzi huanzisha upya bajeti yake kwa kila moja badala ya kughairi mzunguko. Bado si pato la modeli, kwa hivyo mzunguko unaomalizika kwa hoja pekee bado huripotiwa kuwa mtupu, na mzunguko unaosimamisha hoja na kutuma heartbeat pekee bado huuzindua mchunguzi.

Fremu za binary za `reasoningContentEvent` za Kiro zenye saini isiyo tupu huhifadhi shughuli hii ya hoja kupitia kitekelezaji kama delta tupu ya `reasoning_content`. Saini haitumwi mbele. Metadata, fremu zisizokamilika na saini tupu hazianzishi upya bajeti ya maudhui; muda wa mwisho huru wa stream hai na kughairiwa kwa mteja bado vinatumika (`open-sse/executors/kiro/reasoning.ts`).

**Hali za mwisho (SI vipindi vya kupooza):**

- `banned` — huwekwa na utambuzi wa maneno yaliyopigwa marufuku / marufuku ya akaunti (tazama [BAN_DETECTION](../security/BAN_DETECTION.md)), na kwa kukataliwa mara tatu mfululizo kwa kila ombi kutoka upstream (`request_rejected`, k.m. Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); kukataliwa mara moja kunapooza tu muunganisho
- `expired` (hubadilika kuwa hali ya mwisho baada ya majaribio yenye kikomo — `EXPIRED_RETRY_MAX = 3` yenye kupungua kwa ongezeko la kipeua — ili makosa ya muda ya OAuth yaweze kujiponya kabla akaunti haijazimwa kabisa)
- `credits_exhausted`

Hizi hudumu hadi vitambulisho vibadilike au mwendeshaji azirejeshe. Usibatilize hali za mwisho kwa hali ya muda ya kupooza.

**Urejesheji wa uvivu:** wakati `rateLimitedUntil` umepita, muunganisho unastahili tena. Baada ya matumizi yenye mafanikio, `clearAccountError()` hufuta sehemu zote za makosa.

### Ukuta wa matumizi wa Claude OAuth: njia ya kipaumbele cha chini + kuweka upya kikomo cha kipindi

**Wigo:** muunganisho mmoja wa usajili wa Claude (OAuth). Vipengele vyote viwili ni **hiari kwa kila muunganisho** (Hariri muunganisho → sehemu ya Claude → `lowPriorityMode` / `autoLimitReset` katika `providerSpecificData`, vyote vimezimwa chaguomsingi) na huiga amri za Claude Code `/low-priority` na `/limit-reset` (mkataba wa wire ulionaswa kutoka Claude Code 2.1.263).

**Utekelezaji:**

- Mashine ya hali + uainishaji wa majibu: `open-sse/services/claudeLowPriority.ts`
- Mteja wa hali/dai ya kuweka upya: `open-sse/services/claudeLimitReset.ts`
- Hook ya kitekelezaji (uingizaji wa vichwa + kujaribu tena akaunti ileile): `open-sse/executors/base.ts::execute()`
- Udumishaji wa hiari: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**Kichocheo:** ukuta wa matumizi wa saa 5 — `429` ambayo vichwa vyake vina `anthropic-ratelimit-unified-status: rejected` na, wakati akaunti inastahili, `anthropic-ratelimit-unified-slow-offer: treatment`. Hakuna kinachotumwa kabla ya 429 hiyo ya kwanza ya ukuta; 429 ya mlipuko bila vichwa vya unified hupitia njia ya kawaida ya kupooza.

**Njia ya kipaumbele cha chini** (`lowPriorityMode`):

- Kwenye ukuta wa 429, kitekelezaji hukubali ofa na mara moja hujaribu tena akaunti **hiyo hiyo** kwa `anthropic-usage-limit: slow`; njia hubaki hai hadi `anthropic-ratelimit-unified-reset` iliyotangazwa (msamaha wa +60s) na kila ombi katika dirisha hilo hubeba kichwa hicho. 429 iliyokatizwa haifiki kamwe `handleChatCore`, hivyo muunganisho **hau**wekewi kwenye cooldown wala haubadilishwi mbali.
- `anthropic-ratelimit-unified-slow-status` kwenye majibu ya baadaye: `active` / `not_needed` huhifadhi njia; `slot_busy` (429) au `529` husubiri `anthropic-ratelimit-unified-slow-retry-after` ya seva (chaguo-msingi 20s, kikomo 5–600s, jitter ya ±30%) kisha hujaribu tena, ukifungwa na `anthropic-ratelimit-unified-slow-max-wait` (chaguo-msingi dakika 20, kikomo dakika 1–saa 6) — baada ya hapo njia huisha na kipindi cha kupoa cha dakika 10 huzuia kukubaliwa tena. Kusubiri pia kunawekewa kikomo na kile kilichobaki cha muda wa kuanzia-upstream wa ombi lenyewe (`resolveFetchStartTimeout`, dakika 10 kwa chaguo-msingi) baada ya kuondoa kiasi cha sekunde 5: bila kikomo hicho, muda wa kusubiri wa chaguo-msingi wa dakika 20 ungezidi maisha ya ombi na usingizi ungesitishwa katikati ya kusubiri, ukibainisha `TimeoutError` badala ya mwisho mpole wa `max_wait` + kipindi cha kupoa.
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, mabadiliko ya dirisha la saa 5, au `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (ambayo huimaliza kama `extra_usage` kwa hali yoyote, kwa kuwa overage ya kulipia sasa inafunika ukuta) huimaliza njia; jibu kisha huenda kwenye njia ya kawaida ya cooldown. `budget_exhausted` hukumbukwa hadi kuwekwa upya kwa bajeti iliyotangazwa (≤ siku 8).
- Ukaguzi wa ukuta hufanyika baada ya majaribio ya ndani ya jaribio yanayochochewa na 400 ya kitekelezaji chenyewe (uhariri wa muktadha, vikomo vya thinking/effort, kujifunza kiotomatiki kwa param), hivyo ukuta wa 429 ambao huonekana tu kwenye mojawapo ya majaribio hayo bado hukatizwa badala ya kufika kwenye njia ya cooldown.
- Hali iko kwenye kumbukumbu kwa kila muunganisho (kuanzisha upya kunagharimu ukuta mmoja wa ziada wa 429 ili kukubali tena).

**Kuweka upya kikomo cha kipindi** (`autoLimitReset`, hujaribiwa kabla ya njia wakati zote mbili zimewashwa):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → kizuizi cha `juniper_tide`; wakati `arm: "reset"` na `available: true`, `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` na `{ "program": "juniper_tide" }` (UUID ya shirika kutoka `providerSpecificData.organizationUUID`, mbadala wa bootstrap).
- `result: reset|not_limited` → ombi hujaribiwa tena kwa kasi kamili (bila kichwa cha slow). `already_used` / `not_offered` huhifadhi kumbukumbu `next_available_at` (chaguo-msingi wiki moja); kushindwa kwowote husubiri dakika 15. Kuweka upya ni mara moja kwa wiki na bado huhesabiwa kwenye kikomo cha kila wiki.

Vilinzi vya regression: `tests/unit/claude-low-priority-mode.test.ts`,
`tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`.

### Uambatano wa kipindi (#7274)

**Wigo:** kipindi kimoja cha mteja (kichwa cha `X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`) kimebandikwa kwenye muunganisho mmoja, kwa mtoa huduma **yeyote**.

**Lengo:** kuweka wakala wa mzunguko mwingi (Claude Code, aider, mawakala maalum) kwenye akaunti ile ile kati ya maombi, hupunguza upotevu wa muktadha kati ya akaunti na 429 za kuanza-baridi zinazojirudia kwa watoa huduma wenye hali ya kipindi kwa kila akaunti.

**Utekelezaji:**

- Uamuzi wa TTL: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Uchaguzi/uundaji wa pini: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Uchimbaji wa kichwa (wa jumla, mtoa huduma yeyote): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Jedwali la pini lililohifadhiwa: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Mpangilio: `sessionAffinityTtlMs` (TTL ya kimataifa kwa ms, `0` huzima) — `src/lib/db/settings.ts`. Ilirejelewa upya kutoka `codexSessionAffinityTtlMs` ya Codex pekee kwa uhamiaji `124_generic_session_affinity_ttl.sql`, ambao huhamisha TTL yoyote ya Codex iliyosanidiwa hapo awali kama chaguo-msingi jipya.

Kabla ya #7274, `resolveSessionAffinityTtlMs()` iliondoka moja kwa moja kwa `0` kwa kila mtoa huduma isipokuwa `codex`, hivyo mpangilio wa TTL (na vichwa vya kipindi) haukuwa na athari popote pengine ingawa utaratibu wa kubandika na uchimbaji wa vichwa tayari ulikuwa hautegemei mtoa huduma. Marekebisho yaliondoa kurudi-mapema huku; TTL sasa hutumika sawasawa kwa kila mtoa huduma mara tu inapowekwa kimataifa juu ya `0`.

Vichwa vitatu vya uambatano wa kipindi havipelekwi kamwe upstream — vitekelezaji hujenga vichwa vyao vya upstream kuanzia mwanzo badala ya kupitisha vichwa vya mteja, hivyo hiki hubaki kama kitambulisho cha uhusiano wa ndani tu.

### Leseni za kipekee za muunganisho wa kipindi kilichosimamiwa

**Wigo:** mteja/kipindi kimoja hai cha HTTP kilichosimamiwa humiliki muunganisho mmoja wa OmniRoute unaostahili.

**Lengo:** kutoa umiliki wa kudumu na wa kipekee wa muunganisho kwa wateja wanaohitaji uzio imara wa uelekezaji kati ya maombi. Hii inatofautiana na uambatano wa kipindi, ambao ni upendeleo mwepesi wa mwendelezo: leseni ya kipekee huhifadhi hali ya mzunguko wa maisha katika SQLite, hutekeleza upekee wa kimataifa wa mmiliki-hai na muunganisho-hai, na hukataa kizazi kilichopitwa na wakati kabla ya usambazaji kwa mtoa huduma.

Kipengele hiki ni cha kujiunga kwa hiari kwa kila ufunguo wa API. Ufunguo uliosimamiwa lazima uwe na wigo wa `lease:exclusive` na orodha ya `allowedConnections` iliyo wazi na isiyo tupu. Mteja yeyote wa HTTP anaweza kutumia endpoint ya mzunguko wa maisha; hakuna jina la mteja, user-agent, mtoa huduma, njia ya OAuth, au modeli inayohitajika. Leseni inamiliki muunganisho, si modeli, hivyo mabadiliko ya modeli huhifadhi ufungao wakati muunganisho unapoendelea kustahili kwa kawaida. Sheria za kawaida za modeli, quota, afya, cooldown, na orodha-ya-kuruhusu hubaki kuwa za mamlaka na zinaweza kuhamisha kizazi kile kile kwenye muunganisho mwingine huru unaostahili.

Mzunguko wa maisha ni `POST /api/v1/session-leases` wenye vitendo vya JSON `acquire`, `renew`, na `release`.
Maombi ya inference yanayodhibitiwa yanaonyesha thamani nyeto ya `X-OmniRoute-Lease-Owner` na
`X-OmniRoute-Lease-Generation` halisi. Mmiliki hutumia `vlo_` ikifuatiwa na herufi 43 za base64url; ni
hash yake ya SHA-256 pekee ndiyo huhifadhiwa. Kila uzio wa mwisho wa dispatch pia hufunga kitambulisho
cha ufunguo wa API uliothibitishwa na kitambulisho cha muunganisho amilifu. Vichwa vya udhibiti wa
lease huondolewa kwenye logi, picha za maombi zilizohifadhiwa, na vichwa vya utekelezaji wa upstream.

Ikiwa usambazaji wa kawaida una wagombea wanaodhibitiwa wanaostahili lakini kila mgombea huru
ameshikiliwa na lease amilifu ya kigeni, OmniRoute hurejesha HTTP `429`, msimbo wa
lease-capacity-unavailable, hali ya kusubiri uwezo (waiting-for-capacity), na `Retry-After`
yenye kikomo inayotokana na muda wa mwisho wa mapema zaidi unaohusika. Ustahili mtupu wa kawaida si
mzozo wa lease na hudumia semantics zake zilizopo za hitilafu za usambazaji.

Mbinu zinazohusiana hubaki tofauti:

- Ushikiliaji wa kipindi cha OAuth ni usambazaji laini wa ndani ya mchakato (process-local) kwa ajili ya akaunti za OAuth.
- Semaphore za akaunti huzitoa ruhusa za ulandanizi wa maombi na kuisha wakati ombi linapokamilika.
- Lease za kipekee za vipindi vinavyodhibitiwa ni umiliki wa kudumu wa mzunguko wa maisha wenye uzio wa kizazi (generation fence).

---

## 3. Kufungwa kwa Modeli (Model Lockout)

**Wigo:** seti ya tatu ya provider + connection + model.

**Wigo wa ufunguo kulingana na hali:** hali iliyoshindwa ndiyo inayoamua ufunguo gani kufungwa kunaandikwa (`resolveLockoutScope()` katika `open-sse/services/accountFallback/exactModelLock.ts`):

- `429` / `403` / `402` — ishara ya quota au haki ya matumizi — funga **familia ya quota**:
  kwa codex wigo mzima wa `codex` / `spark` (kila modeli ya `gpt-5*` ya
  connection), kwa provider nyingine `getQuotaScopedModelForProvider()`.
- `404` hufunga modeli yenyewe pekee (`getModelLockKey()` hupunguza wigo wa `not_found`).
- Hali nyingine yoyote — kushindwa kwa usafirishaji/seva wa `5xx` na `502`
  iliyotengenezwa na OmniRoute yenyewe kutoka kwa uthibitishaji wa ubora — hufunga
  tuple **halisi** ya provider/connection/model pekee. Mtiririko (stream) mbaya kwenye
  modeli moja si ushahidi kuhusu quota ya akaunti; kabla ya kanuni hii, jibu moja
  tupu kwenye `codex/gpt-5.6-luna` liliondoa kila modeli ya `gpt-5*` ya connection
  hiyo kutoka kwa routing kwa dakika 2–30 (ikiongezeka hatua kwa hatua) ilhali quota
  yake haikuguswa.
- Chaguo la `scope` lililotajwa waziwazi na mwitaji hushinda kila mara (Antigravity hupitisha `"exact"`).

**Lengo:** kuepuka kuzima connection nzima wakati ni modeli moja tu isiyopatikana au iliyozuiwa na quota.

**Mifano:**

- Provider zenye quota kwa kila modeli zinazorejesha 429
- Provider za ndani zinazorejesha 404 kwa modeli moja inayokosekana
- Kushindwa kwa ruhusa za mode/model mahususi kwa provider (mf., modes za Grok)

**Utekelezaji:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Dashibodi ya Model Cooldowns (v3.8.0)

UI: Settings → Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Huorodhesha lockouts zinazotumika zenye: provider, connection, model, reason, expiresAt. Waendeshaji wanaweza kuwasha tena modeli kwa mkono kutoka kwenye kadi.

**REST API:**

- `GET /api/resilience/model-cooldowns` — orodhesha lockouts zinazotumika
- `DELETE /api/resilience/model-cooldowns` — kuwasha tena kwa mkono. Mwili: `{provider, connection, model}`. Uthibitishaji: management.

### Cooldown Manager

UI: Monitoring → Cooldown Manager (`src/app/(dashboard)/dashboard/resilience/cooldowns/`).

Ukurasa mmoja kwa kila connection iliyo nje ya routing kwa sababu ya muda (transient), badala ya
kufungua ukurasa wa kila provider. Huorodhesha cooldowns za connection, lockouts za modeli na hali
za mwisho (terminal), huziondoa kwa kila connection, kwa uteuzi, au kwa connections zote za provider,
na hurekebisha kanuni za cooldown zinazoboreshwa mara nyingi zaidi: `streamStallCooldown.enabled` na
cooldown ya msingi ya `connectionCooldown` ya OAuth / API-key pamoja na hatua za juu za backoff
(huhifadhiwa kupitia `PATCH /api/resilience`). Hali za mwisho (`banned`, `expired`, `credits_exhausted`)
huorodheshwa lakini haziondolewi hapa kamwe.

**REST API** (`src/lib/resilience/cooldownManager.ts`, uthibitishaji: management):

- `GET /api/resilience/cooldowns[?provider=]` — connections zenye hali, cooldown iliyobaki,
  kiwango cha backoff, aina ya kosa la mwisho na lockouts za modeli (bila credentials)
- `POST /api/resilience/cooldowns` — mwili `{connectionIds: string[]}` au
  `{all: true, provider?}`; hurejesha `{cleared, unchanged, skippedTerminal, lockoutsCleared}`

### UI ya mipangilio ya Lockout + uponyaji wa success-decay (v3.8.23)

Kufungwa kwa modeli kulibadilika kutoka tabia ya kudumu iliyopachikwa moja kwa moja (hardcoded)
na kuwa kipengele kinachosanidiwa kikamilifu, cha hiari (opt-in), chenye kadi yake ya mipangilio
na njia ya kupona inayojitibu yenyewe.

**Kadi ya mipangilio:** Settings → Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Hii ni **tofauti** na `ModelCooldownsCard` ya kusoma tu hapo juu (ambayo _huorodhesha_ tu
lockouts zinazotumika) — kadi mpya _husanidi vigezo_. Chaguomsingi zipo katika
`DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| Mpangilio               | Chaguomsingi                     | Maana                                                                          |
| ----------------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| `enabled`               | `false`                          | Swichi kuu — kufungwa kwa modeli **kumezimwa kwa chaguomsingi**.               |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Hali za upstream zinazohesabiwa kama kushindwa kwa wigo wa modeli.             |
| `baseCooldownMs`        | `120_000` (s 120)                | Muda wa awali wa kufungwa kwa kushindwa kwa kwanza.                            |
| `maxCooldownMs`         | `1_800_000` (dakika 30)          | Kikomo cha juu cha cooldown iliyopandishwa hatua.                              |
| `maxBackoffSteps`       | `10`                             | Idadi ya juu ya hatua za kupandishwa za exponential backoff.                   |
| `useExponentialBackoff` | `true`                           | Iwapo kushindwa kunakarudiwa kunapandisha cooldown kwa kiwango cha kipeongezi. |

Mipangilio huhifadhiwa kupitia hifadhi ya kawaida ya mipangilio na kuthibitishwa kupitia
schema ya mipangilio ya resilience; kadi hupunguza (clamp) `baseCooldownMs`/`maxCooldownMs`
(kwa `maxCooldownMs ≥ baseCooldownMs`) na `maxBackoffSteps`.

**Uponyaji wa success-decay:** kupona **si** kumalizika kwa kipima muda pekee. Jibu
lililo sawa hupunguza idadi ya kushindwa kwa modeli hatua kwa hatua, hivyo modeli iliyopona
katikati ya dirisha huacha kupandishwa hatua (na kufunguliwa) kabla ya kipima muda chake
kumalizika. Kwa lengo la combo lililofanikiwa, `open-sse/services/combo.ts` huita
`decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`), ambayo **hugawanya kwa nusu** `failureCount`
iliyohifadhiwa (`Math.floor(failureCount / 2)`); inapofikia `0` ingizo la lockout
hufutwa kabisa. Kinzake `recordModelLockoutFailure()`
huongeza idadi (na kupandisha cooldown hatua) kwa kushindwa ndani ya
dirisha la kupandishwa. Hii success-decay ni nyongeza ya kumalizika kwa kawaida kwa kipima
muda — njia yoyote kati ya hizi mbili inaweza kuwasha tena modeli.

**Hali:** lockouts huhifadhiwa **katika kumbukumbu (in-memory)** (`Map`s za kila mchakato
za `ModelLockoutEntry` zenye ufunguo wa `provider:connectionId:model`, lockouts za wigo
halisi kwa `provider:connectionId:exact:model`), hazihifadhiwi kwenye
DB — hupotea inapowashwa upya. _Mipangilio_ huhifadhiwa; _hali_ ya lockout
zinazotumika ni ya muda tu (ephemeral).

---

## 4. Udhibiti wa Usambamba wa Quota-Share (v3.8.36)

Akaunti za usajili (GLM, MiniMax, n.k.) mara nyingi hukubali miombi ~1–3 sambamba tu; kuzidi hapo husababisha 429 na cooldown. Hili ni suala kali zaidi chini ya combo za **quota-share** (`qtSd/…`), ambapo funguo kadhaa za API hushiriki akaunti moja ya upstream. Tabaka tatu huzuia akaunti inayoshirikiwa isifurikwe.

### Kikomo cha usambamba cha kila muunganisho (`max_concurrent`)

Kila muunganisho wa mtoa huduma unaweza kutangaza kikomo cha juu cha `max_concurrent`
(`provider_connections.max_concurrent`, kinachowekwa kwenye modali ya muunganisho / API / DB).
Kiache wazi kwa hakuna kikomo. Hiki ndicho kitufe pekee kinachoendesha tabaka la ufuatanyaji
lililo hapa chini — kikiweke kwenye usambamba halisi wa akaunti (k.m. GLM ~1, MiniMax ~2).

### Vikomo vya usambamba vya kila modeli (`modelConcurrency`)

Muunganisho unaweza pia kutangaza vikomo halisi vya juu vya usambamba vya kila modeli
ndani ya ramani yake ya `rateLimitOverrides`:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

Viweke kwenye modali ya muunganisho (**Mapuuza ya vikomo vya kiwango → Vikomo vya
usambamba vya kila modeli**, `model=cap` moja kwa kila mstari) au kupitia
`PATCH /api/providers/[id]` kwa umbo lile lile la JSON. Semantiki muhimu:

- **Kikomo cha muunganisho mzima dhidi ya kile cha modeli mahususi:** `maxConcurrent` hubaki
  kikomo cha juu cha pamoja cha muunganisho mzima. Zote zikitumika, milango yote miwili
  hupatikana kwa atomiki ndani ya lango moja la mchanganyiko
  (`global → provider → account → model`); tabia inayotumika ni
  kikomo kali zaidi kinachohusika.
- **Ulinganifu halisi wa ufunguo wa modeli:** ufunguo ni mfuatano wa modeli unaopitishwa
  kwa kitekelezaji baada ya utatuzi wa uelekezaji — kwa kawaida kitambulisho safi cha modeli
  ya upstream (`glm-5`), si jina bandia la `provider/model` la upande wa mteja
  (`zai/glm-5` hailingani na `glm-5`). Thamani ni vikomo vya juu vya miombi sambamba
  vya namba nzima chanya.
- **Foleni ya ndani, hakuna ugunduzi:** miombi ya ziada huingia kwenye foleni ya ndani kwa
  semantiki zilizopo za foleni/timeout (makosa ya udahili yaliyoainishwa `SEMAPHORE_TIMEOUT` /
  `SEMAPHORE_QUEUE_FULL`). OmniRoute haugundui wala kuhitimisha sera ya upstream —
  hutekeleza vikomo halisi ambavyo mwendeshaji alisanidi. Lango la modeli lililojaa
  kamwe halimzuii mtoa huduma wala haliumbi kufuli ya kudumu ya modeli; tabia ya
  429/cooldown/fallback ya upstream hubaki kama kinga ya mwisho ya makosa.
- **Wigo wa kila muunganisho, kila mchakato:** vikomo ni vya kila muunganisho wa
  hifadhidata na huhifadhiwa kwenye kumbukumbu, hivyo miunganisho miwili inayotumia tena
  ufunguo ule ule wa API wa upstream hairatibu wao kwa wao.
- **Kutokusanidiwa kunamaanisha hakuna mabadiliko:** kuacha ramani (au kuacha
  uga wa dashibodi wazi) hakuongezi lango lolote la modeli. Mfano wa usanidi bila
  kudai kikomo chochote cha jumla cha mtoa huduma:

```text
glm-5=1
glm-4.7=3
```

### Ufuatanyaji wa miombi ya quota-share

Upelekaji wa quota-share unapolenga muunganisho unaotangaza `max_concurrent`
chanya, miombi sambamba kwa **akaunti** hiyo hufuatanywa kupitia semaphore ya
kila muunganisho (ufunguo `qsconn:<connectionId>`): miombi ya ziada **husubiri kwenye
foleni** badala ya kumwagilia akaunti. Ni **fail-open** — foleni iliyojaa au timeout
huendelea bila nafasi badala ya kamwe kukataa ombi linaloweza kupelekwa. Washa/zima kwenye
**Mipangilio → Ustahimilivu → Usambamba wa kila muunganisho wa quota-share**
(`resilienceSettings.quotaShareConcurrencyLimit.enabled`, chaguomsingi imewashwa).
Bila kikomo cha `max_concurrent` tabia haibadiliki.

> Lango la uelekezaji la quota-share (`selectQuotaShareTarget`, DRR + P2C) lenyewe ni
> fail-open na _hupunguza kipaumbele_ tu cha muunganisho uliofikia kikomo — kwa
> dimbwi la muunganisho mmoja haliwezi kuweka kikomo cha lazima, hivyo semaphore hii
> ndicho kinachozuia mafuriko kweli kweli.

### Ujaribio upya wa combo unaozingatia cooldown

Kwa kila mkakati wa combo (ukiwa umewashwa), ombi ambalo lingethibitisha 429
kwa cooldown FUPI ya mpito husubiri iishe na kupeleka upya badala ya
kurudisha 429 — hii inashughulikia madirisha ya TPM/RPM ya darasa la Gemini (~60s retry-after)
kwenye combo za modeli nyingi, k.m. malengo yote mawili ya combo ya modeli 2 kugonga kikomo
cha kiwango cha kila modeli. Inapakwa na `comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`,
`budgetMs`) kwenye **Mipangilio → Ustahimilivu**. Kamwe haisubiri kwa `quota_exhausted`
(imefungwa hadi usiku wa manane) wala sababu za uthibitishaji/haijapatikana.

Lango lile lile linashughulikia hali ya kabla ya upelekaji (#16319): wakati kila lengo la
combo linarukwa kabla ya jaribio lolote kufanywa kwa sababu modeli yake iko ndani ya kufuli
fupi ya mpito, njia ya majaribio-sifuri husubiri kufuli iishe chini ya vikomo
vile vile na kupeleka upya, badala ya kujibu
`503 ALL_TARGETS_SKIPPED` isiyo na kidokezo. Wakati kusubiri hakuruhusiwi (kikomo,
jaribio au bajeti imekwisha, au kipengele kimezimwa), jibu la mwisho hupandishwa hadi
`429 rate_limit_error` likibeba `retry_after` / `reset_at` kutoka muda wa mapema zaidi
wa kuisha kwa kufuli ya mpito; kufuli za quota, uthibitishaji na haijapatikana huhifadhi
503 isiyo na kidokezo.

---

## 5. Udhibiti wa Upokeaji kwa Mkusanyiko wa Maombi (v3.8.49 · issue #6593)

**Eneo**: mkusanyiko wa kiwango cha mzunguko kwa kila mtoa huduma+muunganisho (`open-sse/services/rateLimitManager.ts`, iliyosaidiwa na Bottleneck), safu moja chini ya mifumo mitatu iliyo juu.

**`maxWaitMs` inaweka mipaka ya kusubiri kwenye msafini; `executionMaxWaitMs` inaweka mipaka ya utekelezaji.**  
Mbili hao vimetenganywa kwa makusudi, wala hakuna inayochangia moja kwa moja nyingine.

`resilienceSettings.requestQueue.maxWaitMs` ni **hazina ya muda wa kusubiri msafini**: inahusisha kusubiri nafasi ya mtoa huduma na kisha kukaa katika `QUEUED`, na kipima muda chake hufutwa mara tu kazi inapohama kutoka `QUEUED` na kuanza kutekelezwa (`rateLimitManager.ts`, `wrappedFn`). Ombi linalozidi haya halifiki upande wa juu. Chaguo la kawaida ni 30000ms, lililotolewa kupitia `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS` katika `src/lib/resilience/settings.ts` na kulazimishwa katika `tests/unit/ratelimit-admission-control-6593.test.ts`, hivyo mabadiliko yake yanafanya mtihani huo kuwa mwekundu badala ya kuacha aya hii ikikaa bila umakini.

`resilienceSettings.requestQueue.executionMaxWaitMs` ni kile ambacho Bottleneck hupokea kama `expiration` ya kazi, ambapo kipima muda kinaanza tu baada ya kusafirishwa. Ni kinga kwa watekelezaji wasio na muda wa kugawa kutoka kwa mfumo wa juu, na huongezwa hadi kufikia muda wa kuanza fetch wa mtendaji pale ikiwa ni mrefu zaidi, hivyo haiwezi kukatakata jibu lenye afya linaloendelea. Chaguo la kawaida ni 600000ms (dakika 10).

Kuingiza bajeti ya msafini ndani ya `expiration` ndio ilivyokuwa husababisha kuangamiza milango isiyoongeza hatua katikati ya safari — wanakimbia kwa dakika kabla ya byte ya kwanza — na ndio sababu expiration inatolewa kama `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) huku bajeti ya msafini ikibeba msimbo wa muda wa msafini. Badilisha mojawapo kupitia `RATE_LIMIT_MAX_WAIT_MS` / `RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) au kupitia dashibodi (**Settings → Resilience**). Zote zimewekewa mipaka ya 1ms–24h wakati zimefanyiwa utaratibu.

**Upendeleo, kwa wote wawili:** env var inatoa tu _chaguo la msingi_. Thamani iliyohifadhiwa katika `resilienceSettings.requestQueue` (dashibodi / API patch, imehifadhiwa katika `key_value`) inashinda juu yake, na kwa kila muunganisho `rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` inashinda hayo. Kuweka env var kwenye usambazaji ambao tayari una thamani iliyohifadhiwa, kwa hiyo haibadilishi chochote — fafanua au sasisha mpangilio uliohifadhiwa badala yake.

Uwepo kwenye msafini unawekewa mipaka na `maxWaitMs`; `maxQueueDepth` hapa chini inaweka mipaka ya idadi ya waombaji wanaoweza kusubiri kwa wakati mmoja.

**Majaribio yaliyotajwa kwenye mwili: kupanga upya dhidi ya kuzuiliwa.**  
Mwili wa 429 unaweza kutaja muda wake wa kusubiri (Gemini `RetryInfo.retryDelay`, maandishi "retry after Ns"), ambayo `updateFromResponseBody` husoma. Muda wa kusubiri unaofaa na `maxWaitMs` ya muunganisho ni kupanga: kipunguza huachia hazina yake tupu kwa muda huo na miito iliyopangwa huwasilishwa tunapojazwa tena. Muda wa kusubiri unaozidi `maxWaitMs` si kitu ambacho msafini kinaweza kustahimili — Gemini inajibu kiwango kilichotumika kabisa cha kila siku kwa `retryDelay: "86399s"`. `Retry-After` iliyotumwa kwenye 429 iliyojengwa upya (#16528) tayari husababisha injini mbadala kuifunga modeli hiyo kwa kipindi hicho, lakini kusitisha kipunguza nayo pia kungechangia kusimamishwa kwa wito wowote unaofikia ufunguo mapema (mfano, baada ya usanidi upya wa resilience) kwa kipindi kizima cha `maxWaitMs`.  
Wakati msubiri kama huo unatokana na undani uliotajwa wa Google `RetryInfo` (chanzo cha `google_rpc_retry_info`) na kipunguza cha ufunguo kimekwisha kuwekwa kwa modeli (angalia `getLimiterKey`), 429 inakuwa kufungiwa kwa modeli kwenye muunganisho huo badala yake (`lockModelForLongBodyRetry` katika `open-sse/services/rateLimitManager/bodyRetryPause.ts`, kimewekewa kikomo cha 24h), na kipunguza hukubaki kisisitishwa. Uchaguzi wa akaunti hufukuzwa kwenye ufunuo huo kupitia `isModelLocked()`, vivyo hivyo na lango la kabla ya kusafirisha kwa malengo yaliyobandikwa kwenye muunganisho.  
Katika antigravity, ambako kipunguza kinahusishwa na kila familia ya mikopo, ufunuo uko kwenye modeli hiyo hasa, kama ufunuo mwingine wa mikopo. Jina ambalo mteja aliomba linafungwa pia wakati anwani mbadala ilipolitatua kwamba ni kwa modeli hiyo, kwa sababu ukaguzi huo unatumia jina lilioulizwa; linafungwa kabisa (`lockExactModel`), hivyo anwani mbadala inayovuka familia ya mikopo ya antigravity au upana wa codex haifungi yake. Kidokezo cha maneno, `retryDelay` isiyotajwa aina, au kipunguza kinachoshirikiwa na muunganisho mzima, hukumbaa kusitishwa.  
Wakati kipunguza katika njia ya 429 kilichojengwa upya kimesitishwa, mteja ambaye muda uliobaki wa msafini unamalizika kabla ya kusitishwa hukataliwa mara moja na msimbo wa muda wa msafini (`checkLimiterPause`) badala ya kusubiri muda huo kumalizika; mwisho uliorekodiwa umefungwa kabla ya kipunguza kujengwa, mahali ambapo Bottleneck huanzisha saa yake ya upya, na mabadiliko yoyote baadaye kwenye hazina husahau hilo. Imefunikwa na `tests/unit/rate-limit-long-body-retry-lockout.test.ts` na `tests/unit/rate-limit-body-retry-pause.test.ts`.

**`maxQueueDepth` — kikomo kipya cha upokeaji kwa kujisajili.**  
`resilienceSettings.requestQueue.maxQueueDepth` inaweka mipaka ya idadi ya maombi yanayoweza kukaa kwenye msafini (ambayo hayajasafirishwa bado) kwa mtoa huduma+muunganisho mmoja kwa wakati mmoja. Wakati msafini tayari umekuwa na maombi ya thamani ya `maxQueueDepth`, ombi jipya linakandamishwa haraka kwa kosa lililoandikwa `code: "RATE_LIMIT_QUEUE_FULL"` **kabla** halifikii `limiter.schedule()` — hivyo kukataliwa kunakuwa rahisi na kufanyika kabla ya kazi yoyote ya kusindika/utafsiri inayofuata kwa ombi hilo. Chaguo la kawaida ni `0` = limezimwa, likihifadhi tabia ya msafi usio na mipaka uliopo; mipaka inaweza kuwekwa 0–100000. Badilisha kupitia `RATE_LIMIT_MAX_QUEUE_DEPTH` (env) au `resilienceSettings.requestQueue.maxQueueDepth` (dashibodi/API patch).

Uhakiki wa upokeaji wenyewe ni kazi safi (`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`) kwa hiyo inaweza kupimika kwa vitengo bila kuwa na kipunguza halisi cha Bottleneck.

> RFC iliyofungua #6593 pia ilipendekeza bendera ya
> `bypassCompressionOnRateLimit`. Mchakato wa `open-sse/services/compression/`
> katika hazina hii ni ukandamizaji wa prompt/context kwenye ombi la LLM
> linalotoka (`chatCore.ts`, karibu na kizuizi cha
> `resolveCompressionSettings`/`selectCompressionStrategy`), si ukandamizaji
> wa majibu ya HTTP kwenye miili ya 429 iliyotungwa — hakuna njia ya msimbo
> inayolingana kwa bendera halisi ya kuepuka. Hatua hiyo ya ukandamizaji wa
> prompt pia kwa sasa huendeshwa _kabla_ ya `withRateLimit()` katika mchakato
> wa ombi, kwa hivyo kupanga upya ili kuiruka wakati wa kukataliwa kwa foleni
> iliyojaa ni mabadiliko tofauti, makubwa zaidi kuliko wigo wa suala hili;
> kimakusudi **haikutekelezwa** hapa na imeachwa kama kazi ya kufuatilia
> ikiwa faida ya kuokoa CPU inastahili hatari ya kupanga upya.

### Kinga ya Usalama ya Kuwasha Kiotomatiki Kikomo cha Kiwango na Ulinzi wa Muunganisho (`rateLimitProtection`)

**Kinga ya usalama ya kuwasha kiotomatiki** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, chaguo-msingi `true`):
Kwa chaguo-msingi, OmniRoute huwasha kiotomatiki ulinzi wa foleni ya kikomo cha kiwango kwa miunganisho yote inayofanya kazi ya watoa huduma wenye ufunguo wa API (`getProviderCategory(provider) === "apikey"`). Hii huhakikisha kwamba maombi yanayoingia yanayokwenda kwa funguo za API za upstream zilizo nyeti kwa kiwango huwekwa foleni na kudhibitiwa kupitia Bottleneck badala ya kulipuka na kusababisha makosa ya 429 kutoka upstream. Kinga ya usalama inaweza kubatilishwa kupitia kigeugeu cha mazingira `RATE_LIMIT_AUTO_ENABLE` (`false`/`0`/`off` huzima, `true`/`1`/`on` hulazimisha kuwasha), ambayo ina kipaumbele juu ya mpangilio wa dashibodi uliohifadhiwa (**Mipangilio → Ustahimilivu** / `PATCH /api/resilience`).

**Semantiki za `rateLimitProtection` ya kila muunganisho:**
Ulinzi wa kikomo cha kiwango wa kila muunganisho hufuatiliwa kupitia uga wa boolean `rateLimitProtection` kwenye miunganisho ya watoa huduma (unaohifadhiwa kama `rate_limit_protection` katika SQLite):

- **Imewashwa waziwazi (`rateLimitProtection === true`)**: Ulinzi wa kikomo cha kiwango umewashwa waziwazi kwa muunganisho huu, bila kujali kategoria ya mtoa huduma au kama kinga ya usalama ya kuwasha kiotomatiki imewashwa.
- **Imezimwa waziwazi (`rateLimitProtection === false`)**: Huzima ulinzi wa wazi, lakini **haitoi** muunganisho unayofanya kazi wa ufunguo wa API nje ya kinga ya usalama ya kimataifa ya kuwasha kiotomatiki. Katika `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`), `false` na `undefined` ni sawa: ni `rateLimitProtection === true` pekee inayochukuliwa kama kubatilisha kwa wazi. Ikiwa `rateLimitProtection` ni `false` (au haijawekwa), muunganisho unayofanya kazi wa ufunguo wa API bado unalingana na sharti la kuwasha kiotomatiki na unabaki chini ya ulinzi wa kikomo cha kiwango.
- **Hakuna kujiondoa kwa muunganisho mmojammoja**: Kwa sasa mwendeshaji hawezi kueleza "muunganisho huu mmoja unayofanya kazi wa ufunguo wa API lazima uendeshwe bila ulinzi wa foleni ya kikomo cha kiwango" huku kuwasha kiotomatiki kukiwa kimewashwa kwa wengine. Ili kuendesha miunganisho ya funguo za API kabisa bila foleni za kikomo cha kiwango, kinga ya usalama lazima izimwe kimataifa (`RATE_LIMIT_AUTO_ENABLE=false` au `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`).

**Njia za kuandika zinazotumika:**

- **`POST /api/rate-limits`**: Njia ya kuandika ya usimamizi inayotumika kubadilisha hali ya `rateLimitProtection` kwa muunganisho (`{ connectionId: string, enabled: boolean }`). Kuiita kwa `enabled: true` huwasha ulinzi wa wazi; kuiita kwa `enabled: false` huondoa ulinzi wa wazi (ingawa miunganisho inayofanya kazi ya funguo za API hubaki imefunikwa chini ya kinga ya usalama ya kimataifa ikiwa kuwasha kiotomatiki kunawashwa).
- **`PUT /api/providers/[id]`**: Kwa makusudi **haikubali** wala kubadilisha `rateLimitProtection` (#11278). Kusasisha metadata ya muunganisho wa mtoa huduma kupitia `PUT /api/providers/[id]` kamwe hakutabadilisha hali iliyohifadhiwa ya ulinzi wa kikomo cha kiwango.

---

## 6. Mlinzi wa tija ya mkondo polepole (#9709)

Ulinzi wa hiari wa `resilienceSettings.streamRecovery.throughputWatchdog` hutambua
upstream ambayo bado inatuma vipande lakini inazalisha pato la msaidizi chini ya
kiwango kilichosanidiwa cha pato lenye manufaa. Kwa makusudi ni tofauti na muda wa
kuisha wa baze (idle timeout): mapigo ya uhai (heartbeats) na metadata hayawawezi
kuweka upya kipima muda chochote kati ya hivi wala havihesabiwi kama maendeleo. Pia
ni tofauti na kikomo ngumu cha jaribio (#9153), ambacho hubaki kama kikomo cha juu
cha usalama bila kujali ubora wa pato.

Mlinzi huhitaji kipindi cha kujiandaa (warm-up) kufuatwa na dirisha kamili
linalozunguka (rolling window) kabla ya kuweza kusitisha. Huhesabu tofauti za
maandishi kutoka kwa matukio ya pato ya Chat Completions na Responses API
(kiwakilishi cha bytes cha UTF-8 cha kihafidhina), hupuuza matukio ya matumizi-pekee
na yaliyo tupu, na kusitisha hukumu wakati matukio ya wito wa zana au ya kufikiri
(reasoning) yanaendelea. Umezimwa kwa chaguo-msingi na unaweza kuwashwa kwa
`STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`; dirisha, kipindi cha kujiandaa, kiwango
cha chini, na pato la chini linaloweza kupimika vimezuiliwa na safu ya kawaida ya
uwekaji sawa wa mipangilio ya ustahimilivu.

Ikiwashwa, kusitishwa na mlinzi kutumikwa tu kwa jaribio la upstream linalotumika.
Kabla ya bytes zozote zinazoonekana kwa mteja, njia iliyopo ya urejeshaji wa mapema
wa akaunti hiyo hiyo inaweza kufungua tena jaribio. Baada ya commit, mkondo
haurudiwi ovyo; ni mkataba ulio salama wa kuendeleza katikati ya mkondo pekee
unaoweza kushona kiambishi cha mwisho (suffix). Ukamilishaji hubaki wa mara moja tu,
hivyo uhasibu wa matumizi na uachaji wa semaphore havirudiwi.

---

## 7. Kubainisha Upya Hali ya Upstream (makosa ya mgao yaliyotajwa vibaya)

**Wigo:** lango moja la upstream linaloripoti kuisha kwa mgao wa muda kwa hali
isiyo sahihi ya HTTP.

**Lengo:** kusahihisha hali inayopotosha KABLA ya uainishaji, ili watumiaji wa
downstream (injini ya fallback, ujumuishaji wa combo, jibu linaloelekea kwa mteja)
waone asili halisi ya kushindwa kunakoweza kurudiwa.

Baadhi ya malango hupasha kuisha kwa mgao wa MUDA kwa hali ya HTTP isiyoweza
kurudiwa. `agentrouter.org` hurejesha `403` (wakati mwingine `400`) na mwili wa
Kichina (`用户额度不足` / `额度不足`) badala ya `429` ya kawaida. Wateja kama
Claude Code huchukulia `403` kama ya kudumu na kusitisha kipindi, na bila
urekebishaji injini ya fallback ingeliainisha kama `AUTH_ERROR` badala ya tukio
la mgao.

**Utekelezaji:**

- Rejesta + kilinganishi: `open-sse/config/upstreamStatusRestatement.ts` —
  orodha ya sheria kwa kila mtoa huduma (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), inayolinganishwa kupitia
  `applyStatusRestatement()`.
- Mahali pa wito: kizuizi cha `providerFailure:` katika
  `open-sse/handlers/chatCore.ts` (karibu na mstari 3654), mara tu baada ya
  `parseUpstreamError()` kuchanganua jibu la upstream lenye hali ya HTTP ya kosa
  (`!providerResponse.ok`), na kabla ya uainishaji wowote kuendeshwa, ili kila
  mtumiaji wa downstream aone hali iliyosahihishwa. Makosa yaliyopachikwa ndani
  ya mkondo wa SSE wa `200` hufuata njia tofauti ya baadaye ya kuchanganua mkondo
  na **hayaja**shughulikiwa na ndoano hii leo — kikwazo kinachojulikana, ambacho
  bado hakijahitajika kwa hali mbaya ya agentrouter (ambayo huonekana kama hali
  ya HTTP ya kosa).
- Ustahiki wa kurudia: `429` iko katika `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`), hivyo kosa lililobainishwa
  upya hubeba dirisha halisi la kurudia badala ya kuonekana kama `403` iliyokufa.
- `defaultRetryAfterMs` ya bandia ya `60s` (`upstreamStatusRestatement.ts`) ni
  tu kile jibu lililobainishwa upya linachomwambia **mteja**; si muda wa ndani
  wa cooldown/lockout wa muunganiko weneyewe — huo unadhibitiwa kando na
  njia yoyote inayoshughulikia kosa lililobainishwa upya (backoff
  inayoongezeka ya Connection Cooldown, §2, msingi `3s` kwa watoa huduma wa
  API-key; au Model Lockout, §3, kwa watoa huduma wa mgao-kwa-kila-mfano kama
  agentrouter). Kiraka (router) kinaweza kustahiki kurudia ndani mapema kuliko
  dirisha la sekunde 60 linalotangazwa kwa mteja — nafasi ya ziada ya makusudi,
  si hitilafu.

Makosa ya kudumu (`无权访问模型` ya agentrouter — hakuna ruhusa ya kufikia mfano
huu) KAMWE hayabainishwi upya: `excludeMarkers` hupiga kura ya kupinga sheria hata
wakati `textMarkers` zinagonga, hivyo kosa hubaki na hali yake ya awali na hakuna
kitu kinachokirudia milele. Sheria inayolingana ya uainishaji wa mtoa huduma
(`agentrouter-model-access-denied` katika `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, na cooldown ya msingi iliyotangazwa ya
`6h`) huzingatiwa na `checkFallbackError` (`open-sse/services/accountFallback.ts`)
_kabla_ ya kurudi mapema kwa `FORBIDDEN` wa kategoria ya jumla ya apikey, ikiwa
imedhibitiwa na `honorsRuleLockScope(provider)` (#10334 — kwa sasa ni ya
agentrouter pekee kupitia orodha ya kuruhusu `HONORS_RULE_LOCK_SCOPE_PROVIDERS`
katika `providerErrorRules.ts`). Cooldown ya saa 6 iliyotangazwa ya sheria
hupitishwa kama `fallbackResult.baseCooldownMs`, lakini bado huilisha njia
iliyokuwepo ya lockout ya mgao-kwa-kila-mfano (`lockModelIfPerModelQuota()` /
`recordModelLockoutFailure()`, ambayo haikubadilishwa na #10334 isipokuwa kwa
chanzo cha cooldown): hupunguzwa hadi `mlSettings.maxCooldownMs` ya mwendeshaji
(chaguo-msingi `1_800_000ms` / dakika 30), kama kila lockout nyingine ya mfano, na
_sababu ya lockout iliyohifadhiwa_ hubaki `"forbidden"` iliyowekwa moja kwa moja
(hardcoded) tangu awali, si `"auth_error"` ya sheria — ni muda wa cooldown pekee
unaoheshimiwa kutoka mwanzo hadi mwisho, si mfuatano wa sababu. Muunganiko
wenyewe hubaki hai; mifano ndugu kwenye muunganiko huo huo haiathiriwi.

Restated quota errors (`额度不足`) zinafikia kanuni ya mtoa huduma katika uzalishaji (`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope: "connection"`, bila cooldown iliyotangazwa mwenyewe — default ya scaled backoff ya persistence layer inatumika). Tangu #10334, `scope` kwenye `ProviderErrorRuleMatch` INATUMIKA kutoka mwisho hadi mwisho, lakini **tu** kwa watoa huduma walio kwenye orodha ya ruhusa ya `HONORS_RULE_LOCK_SCOPE_PROVIDERS` (`providerErrorRules.ts` — hadi leo ni `"agentrouter"` tu, ikidhibitiwa kupitia `honorsRuleLockScope()`). Kwa kila mtoa huduma mwingine, `scope` inabakia kuwa ya taarifa, sawa kabisa na kabla ya #10334.
`checkFallbackError` inaonyesha `scope` ya kanuni iliyolingana kama `fallbackResult.ruleScope`; `isAgentrouterConnectionQuotaScope()` (`src/sse/services/auth.ts`) ni mlinzi wa pamoja anayethibitisha kuwa `ruleScope` ni salama kweli kuheshimiwa kama ishara ya muunganisho mzima unaojirudisha mwenyewe (scope `"connection"`, reason `quota_exhausted`, kamwe `permanent`, kamwe `creditsExhausted` — ulinzi dhidi ya kanuni ya baadaye inayounganisha scope `"connection"` na hali ya akaunti ya kudumu). Wateja wawili wanaitumia:

- **Persistence** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  Badala ya kuingia kwenye tawi la lockout ya **per-model** la mtoa huduma (agentrouter ni `passthroughModels: true` → `hasPerModelQuota()` inarudisha `true`), inatumia **temporary connection cooldown** — `testStatus: "unavailable"` + `rateLimitedUntil`, kamwe hali ya mwisho (`credits_exhausted`/`banned`/`expired`) — hivyo muunganisho unajirekebisha mwenyewe mara tu cooldown inapomalizika badala ya kuhitaji kuweka upya hati miliki kwa mkono. Imepitiwa kwa miunganisho yenye `disableCooling: true` (#2997): hiyo chaguo la kujiondoa inapita kwenda kwenye lockout ya per-model badala yake (ni maelezo ya biashara yaliyoandikwa — angalia maoni ya msimbo juu ya tawi hilo).

- **Same-request combo routing** (`applyComboTargetExhaustion()`, `open-sse/services/combo/targetExhaustion.ts`): Mlinzi huyo huo anaweka alama muunganisho kwenye set ya `exhaustedConnections` iliyohifadhiwa katika kumbukumbu, ikifunguliwa na `${provider}:${connectionId}`. Hii inapita tu target iliyobaki ya SAME-REQUEST ambayo _hivyo peke yake tayari inabeba hiyo kamili ya `connectionId`_ kwenye object yake ya target (`getExhaustedTargetSkipReason()`, `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` kabla ya lookup ya `exhaustedConnections`) — ni combo ya orodha ya modeli ya kawaida, ambapo malengo ya ndugu hayabebi `connectionId` iliyosimamishwa ya wao wenyewe na moja inatatuliwa tu kwa kila usambazaji kutoka kwenye kichwa cha jibu `X-OmniRoute-Selected-Connection-Id`, na kamwe haipatikani na mlinganisho wa ufunguo ule ule. Kwa kesi hiyo ya kawaida, ulinzi wa kweli dhidi ya sehemu iliyobaki inayorejesha akaunti iliyofunguzwa hivi karibuni SIO Set hii — ni tabaka la persistence hapo juu (muunganisho `rateLimitedUntil` sasa uko siku zijazo) iliyochanganywa na mlinzi huo huo anayezuia `transientRateLimitedProviders` kwa ajili ya kushindwa (angalia "Two-stage design" na maoni ya msimbo kwenye tawi la `isAgentrouterConnectionQuotaScope` katika `targetExhaustion.ts`): ukiwa na Set hiyo ikiwa haijaweka alama, force-allow ya `allowRateLimitedConnection` kwenye `combo.ts` (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) haitaanza kwa miguu iliyobaki ya mtoa huduma, hivyo kichujio cha `rateLimitedUntil` cha uchaguzi wa hati miliki (`src/sse/services/auth.ts:1238`) kinazingatiwa kawaida na sehemu iliyobaki inachagua muunganisho mwingine wa agentrouter tofauti, bado inayofaa, au inashindwa kwa kutokuwa na hati miliki zinazopatikana — haijaruhusu kuongeza force juu ya muunganisho ambao tawi hili limepumzika muda tu.

### Muundo wa Hatua Mbili: Ufafanuzi upya wa hali, halafu upangaji wa makundi

Ufafanuzi upya wa hali (`upstreamStatusRestatement.ts`) na sheria za upangaji wa makundi ya watoa huduma (`open-sse/config/providerErrorRules.ts`, `providerRuleRegistry`) ni rejista tofauti ambazo zote zinatumia ufunguo wa id ya mtoa huduma na alama za maandishi, lakini hufanya kazi katika maeneo tofauti na zinahudumia malengo tofauti: ufafanuzi upya unaandika tena hali ya HTTP mapema ndani ya `chatCore.ts`; sheria za upangaji wa makundi huzichagua `reason` ya kuchukua uteupe na kufunga `scope` (`model` / `provider` / `connection`) ndani ya `checkFallbackError()` (`open-sse/services/accountFallback.ts`).

Sheria za upangaji wa makundi huona tu **text** kamili ya kosa (yanayohitajika kulinganisha alama za mwili kama `额度不足`) kwa watoa huduma walioorodheshwa kwenye orodha ya ruhusa ya `FULL_TEXT_RULE_PROVIDERS` katika `providerErrorRules.ts` — kwa sasa `"agentrouter"` tu. Kwa kila mtoa huduma mwingine wa **built-in catalog**, `checkFallbackError` inawapa `getProviderErrorRuleMatch` kosa liliolengeshwa (`{code, type}`) pekee, jambo ambalo linatosha kwa sheria zinazotegemea kichwa/halisi/nambari lakini sikuzingatia alama za maandishi ya mwili. Msaidizi `resolveRuleMatchBody()` hufanya uchaguzi huu: maandishi kamili ya kosa kwa watoa huduma walio kwenye orodha ya ruhusa, na kosa liliolengeshwa vinginevyo. Kuongeza mtoa huduma wa **built-in** kwenye `FULL_TEXT_RULE_PROVIDERS` ni uchaguzi wazi kwa kila mtoa huduma — ipo ili njia ya chaguo chaguomsingi kwa kila mtoa huduma ambaye hayupo kwenye orodha ibaki bila mabadiliko ya byte-for-byte.

`Scope` ya kanuni (`model` / `provider` / `connection`) ni chaguo tofauti kutoka `FULL_TEXT_RULE_PROVIDERS`: `checkFallbackError` inaiweka tu kama `fallbackResult.ruleScope`, na watumiaji wa chini wanaiheshimu tu kama kitu kingine tofauti na lebo ya taarifa, kwa watoa huduma walio kwenye orodha ya ruhusa ya `HONORS_RULE_LOCK_SCOPE_PROVIDERS` katika faili hiyo hiyo (`gated via honorsRuleLockScope()` — hadi leo `"agentrouter"` tu). Tazama "Restated quota errors" hapo juu ili kuona kile kinachofanywa na mlinganisho wa `scope: "connection"` mara tu mtoa huduma apowekwa kwenye orodha hiyo.

**#11104 — sheria zilizotangazwa na operator hupita orodha zote mbili za kuruhusu.** Operator anaweza
kutangaza sheria ya kila-provider wakati wa utekelezaji kupitia `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
bila kuhariri faili hii. Kufunga sheria ya operator nyuma ya
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` — orodha za kuruhusu
zilizokusudiwa kulinda tabia ya **chaguomsingi** ya sheria za katalogi zilizojengwa ndani — kungefanya
utaratibu wa settings kuwa bila matumizi kwa kila provider isipokuwa wale walio
kwishaorodheshwa humo, kwa kuwa kutangaza sheria tayari ni
kujitokeza kwa wazi kwa operator. `resolveRuleMatchBody()` na `honorsRuleLockScope()` zote mbili hukagua
`hasOperatorRuleForProvider()` kwanza: provider yenye sheria ya operator hupata
maandishi ghafi ya kosa na `scope` yake iliyotangazwa hutiiwa, bila kujali
kama pia inatokea katika orodha yoyote ya kuruhusu.

**Pengo linalojulikana — `providerRuleRegistry` haitumiki kamwe kwa HTTP 400.**
Tawi la `BAD_REQUEST` la `checkFallbackError` linaweka status 400 katika makundi kabisa
kupitia safu zake mwenyewe za mifumo (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS`, n.k. katika `accountFallback.ts`) na hurejesha kabla
ya tawi la `configuredRule`/`getProviderErrorRuleMatch` lililo juu yake kufikiwa.
Sheria ya katalogi iliyojengwa ndani (au sheria ya operator) yenye `status: 400` ni
sahihi kisintaksia lakini haitawashwa kamwe. Hakuna sheria iliyopo inayolenga 400 leo,
kwa hivyo hakuna chochote katika uzalishaji kinachoathirika — lakini sheria ya 400 ya baadaye inahitaji
tawi hili kuguswa kwanza, ambayo ni mabadiliko makubwa zaidi kuliko kuongeza sheria (hii
hupanga upya makundi ya 400 kwa kila provider inayotegemea tayari tabia
ya safu ya mifumo) na iko nje ya wigo wa kuongeza sheria ya provider moja.

### Kuongeza gateway mpya inayopoteza uwakilishi wa quota

1. Sajili safu moja ya sheria katika `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Weka `textMarkers`
   mahususi kwa provider; usitumie tena vifungu vya Kiingereza vya jumla vinavyogongana na
   `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`).
2. Kwa hiari sajili sheria za uainishaji katika
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) ili kuchagua
   scope sahihi ya kufuli (`connection` kwa quota ya akaunti nzima, `model` kwa
   makosa ya kila-model). Hatua hii huwa na athari katika uzalishaji tu kwa
   provider ambazo sheria zake zinahitaji maandishi kamili ya kosa (alama za body): ongeza
   provider id kwenye `FULL_TEXT_RULE_PROVIDERS` katika faili hiyo hiyo — vinginevyo
   `checkFallbackError` hukabidhi sheria tu kosa lenye muundo
   `{code, type}` na sheria ya maandishi ya body haitalingana kamwe na trafiki ya moja kwa moja.
   Sheria zinazolingana tu kwa `status`/`headers` (kama za Opencode au
   Minimax) hazihitaji kujitokeza huku. Kando na hayo, ikiwa sheria inatangaza
   `scope: "connection"` na lengo ni cooldown halisi ya muunganiko mzima
   pamoja na kuruka combo ya ombi lilelile (si lebo ya taarifa tu), ongeza
   provider id kwenye `HONORS_RULE_LOCK_SCOPE_PROVIDERS` katika faili hiyo hiyo — hii
   ndiyo inayodhibiti matumizi ya mtindo wa `isAgentrouterConnectionQuotaScope()` katika
   `markAccountUnavailable()` (`src/sse/services/auth.ts`) na
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); bila hiyo, `scope`
   bado hupitishwa kupitia `fallbackResult.ruleScope` lakini hakuna kinachochukua hatua juu yake.
3. Ongeza majaribio ya kitengo yanayoiga `tests/unit/upstream-status-restatement.test.ts`
   na `tests/unit/agentrouter-error-rules.test.ts` (ikiwa ni pamoja na
   ulinzi wa not-permanent / not-creditsExhausted, na — ikiwa provider inahitaji
   orodha ya kuruhusu — jaribio linalothibitisha kwamba `resolveRuleMatchBody()` hurejesha
   maandishi kamili kwa provider hiyo tu).

Hakuna mabadiliko yanayohitajika kwa `chatCore.ts`, `classifyError`, au combo.

#### Kufuli iliyogawanywa kwa vikapu vya egress (#10880)

Provider katika `EGRESS_BUCKETED_LOCK_PROVIDERS` (familia ya opencode) huchukuliwa
kama upstream iliyogawanywa kwa vikapu vya IP (kipaumbele cha bure cha opencode ni cha vikapu vya IP, si
vikapu vya akaunti — angalia #9611): status-429 iliyowekwa katika kundi la `quota_exhausted`
**au** `rate_limit_exceeded` hupoza kila muunganiko wa familia iliyoorodheshwa
ambao IP yake ya egress inayojulikana ya mwisho inalingana na ya muunganiko unaofeli, kabla
mzunguko haujajaribu kutumia
— hivyo kuepuka simu N-1 za upstream zinazohakikishiwa kufeli (umbo sawa na #10460/#10525).
`rate_limit_exceeded` imejumuishwa kwa makusudi: kwenye njia ya `markAccountUnavailable`
sheria mahususi za opencode hazilingani kamwe (hakuna headers/body zinazokabidhiwa kwa
`checkFallbackError`, opencode haiko katika `FULL_TEXT_RULE_PROVIDERS`), kwa hivyo 429
ambayo body yake hubeba maandishi ya quota ya usajili ("monthly usage limit
reached") huwekwa katika kundi la `quota_exhausted` kwa fallback ya maandishi ya quota
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; cooldown ya saa 1) kabla
ya sheria ya `status_429` kufikiwa — ilhali 429 isiyo na maandishi ya quota (rate
limiting ya kawaida) huwekwa katika makundi kupitia sheria ya `status_429` kama `rate_limit_exceeded`
na bado hupoza familia ya IP. Kwa provider iliyoorodheshwa, rate
limit iliyogawanywa kwa vikapu vya IP ni ishara sawa na quota iliyokwisha. Mipaka ya kweli:

- **Juhudi Bora**: kifuli kinatatua `egress_ip` ya mwisho inayojulikana ya muunganisho kutoka `proxy_logs` (dirisha la saa 24, kwa wakati halisi, hakuna cache). Cache baridi (egress IP haijawahi kupimwa) au hakuna mstari → muunganisho ulioshindwa bado unapozwa na tawi (umeandikwa kama leo), hakuna ndugu anayefungiwa.
- **Kamwe si ya mwisho**: kupoa ni dirisha linalojirudia la kipimo cha muda (`testStatus: "unavailable"`); hali ya kudumu haiwezi kutokana na ishara ya ngazi ya IP. Muunganisho wa `disableCooling` unaruka tawi lote.
- **Mabadiliko ya ukubwa wa kifuli kwa familia iliyoruhusiwa**: hii ni mabadiliko ya wigo, sio tu uboreshaji wa ndugu. opencode ni mtoa huduma wa `passthroughModels`, kwa hivyo kabla ya tawi hili 429 ilizalisha kufungiwa kwa kila-MODEL; sasa inazalisha kupoa kwa muunganisho — ikiwa ni pamoja na kwa mwendeshaji anayeendesha muunganisho mmoja bila ndugu hata mmoja. Hii ndio ukubwa ambao jedwali la sheria la opencode tayari linatangaza ni sahihi (`scope: "connection"`, `providerErrorRules.ts`), haijawahi kuheshimiwa hadi sasa kwa sababu opencode haipo katika `HONORS_RULE_LOCK_SCOPE_PROVIDERS`. Tawi linaandika kupoa kwa muunganisho ulioshindwa + `backoffLevel` yenyewe, ikionyesha tawi la wakala lililo na wigo wa muunganisho, na kurudi — kufungiwa kwa kila-modeli na njia ya jumla chini kamwe haifikiwi.
- **Combo pamoja**: kama tawi la wakala, wigo unapuuza kushushwa kwa hali ya `persistUnavailableState`/`isCombo` ambayo mpigaji wa combo anatumia kwa 429. Kufungiwa kwa kila-modeli sio aina dhaifu ya wigo huu, ni kitengo kisicho sahihi: hakionyeshi chochote kuhusu IP iliyochoka, kwa hivyo mzunguko wa combo utaendelea kuchoma simu moja iliyohakikishiwa kushindwa kwa kila ndugu.
- **Usalama wa Ndugu**: ndugu ambaye tayari ni wa mwisho (amepigwa marufuku/credits_exhausted) au tayari yuko kwenye kipindi kirefu zaidi cha kupoa hauandikwi upya.
- **Orodha ya Ruhusa Pekee**: kupanua `EGRESS_BUCKETED_LOCK_PROVIDERS` ni uamuzi wa mmiliki aliye wazi; hakuna wiring ya jumla (pattern #10334/#10419). Uchunguzi wa ndugu unafunga orodha hiyo hiyo ya ruhusa badala ya kuirudia kama SQL halisi, hivyo kupanua inabaki kuwa mabadiliko ya mstari mmoja.
- **Mzunguko wa IP ya Egress, pande zote mbili**: dirisha la utafutaji (saa 24) ni pana zaidi kuliko TTL ya cache ya egress-IP (dakika 5), kwa hivyo "IP ya mwisho inayojulikana" ni historia, sio hali ya sasa. Ikiwa muunganisho wa wakala umebadilishwa ndani ya dirisha kifuli kinaweza **kukosa** IP iliyoshirikiwa kwa kweli (IP iliyorekodiwa ni mpya, isiyo na uchovu) — na kwa usawa inaweza **kupoa ndugu ambaye tangu amehama kutoka kwa IP iliyochoka**. Kesi ya pili inagharimu ndugu huyo dirisha moja la kupoa; zote zinakubaliwa kama mipaka bora ya juhudi ya utafutaji unaotegemea historia.
- **Gharama**: uchunguzi mbili uliopimwa wa `proxy_logs` (uliyo na kichujio cha dirisha kupitia `idx_pl_timestamp`), tu kwa marudio ya 429. Hakuna faharisi mpya (uhamiaji 134 YAGNI). Imepimwa kwenye nakala halisi ya trafiki ya DB ya ukubwa wa wastani; mfano wa juu wa trafiki unashikilia safu nyingi zaidi katika dirisha lile lile.

---

## Vipengele Vingine vya Ustahimilivu

- **Mikakati 20 ya uelekezaji** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — angalia [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Uelekezaji unaozingatia kuweka-upya** (v3.8.0) — unapa kipaumbele miunganisho kulingana na wakati wa kuweka upya kiasi (quota).
- **Upunguzaji wa hali ya mandharinyuma** — Responses API `background: true` hupunguzwa hadi hali ya synchronous pamoja na onyo.
- **Ugunduzi wa kikomo cha zana unaobadilika** — huzuia watoa huduma kwa muda (backs off) vikomo vya idadi ya zana vinapofikiwa.
- **Njia mbadala ya dharura** — inadhibitiwa na `OMNIROUTE_EMERGENCY_FALLBACK`; waendeshaji wanaweza kuibatilisha kutoka ukurasa wa Feature Flags bila kuanzisha upya.

---

## Utatuzi wa Hitilafu

- Combo ya weighted hujibu `503 all_targets_cooling_down` (`Retry-After` imewekwa, `diagnostics.excluded` inataja kila lengo kwa `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable`) → kundi (pool) limewekwa mipangilio na limeunganishwa, kila lengo limetengwa tu na kipima-muda cha ustahimilivu; onyo `[COMBO] Weighted selection: every target excluded before dispatch — …` linataja sababu na sekunde zilizobaki. `404 no_executable_targets` kutoka combo hiyohiyo inamaanisha hakuna kipima-muda cha ustahimilivu kilichohusika (hakuna cha kuendesha, au kila akaunti imeshindwa uchunguzi wa upatikanaji). Imejengwa katika `open-sse/services/combo/pinRecovery.ts` kutoka kwa vitengwa vilivyokusanywa katika `targetResolution.ts`.
- Funguo zote za mtoa huduma zimerukwa → angalia hali ya circuit breaker NA pia `rateLimitedUntil`/`testStatus` ya kila muunganisho.
- Mtoa huduma ametengwa kabisa baada ya dirisha la kuweka upya → msimbo unasoma `state` ghafi badala ya `getStatus()`/`canExecute()`.
- Ufunguo mmoja unashindwa, wengine wanapaswa kufanya kazi → pendelea connection cooldown kuliko circuit breaker.
- Modeli moja tu inashindwa → pendelea model lockout kuliko connection cooldown.
- Hali inapaswa kujiponia yenyewe lakini haifanyi hivyo → angalia timestamp ya siku zijazo + njia ya kusoma inayosasisha (refresh) hali iliyopitwa na wakati. Hali za kudumu zinahitaji mabadiliko ya mwongozo (manual).

---

## Hali ya wakati wa utekelezaji — rejea ya haraka ya ajenti

> Imehamishiwa kama ilivyo (verbatim) kutoka `AGENTS.md` → "Resilience Runtime State" (PR #12743) ili
> mwongozo wa ajenti ubaki chini ya bajeti ya muktadha ya 40k. Huu ni mtazamo uliofupishwa unaolenga
> ajenti wa sehemu zilizo hapo juu; sehemu zenye namba zinabaki kuwa marejeleo kamili.

OmniRoute ina mbinu tatu zinazohusiana lakini tofauti za kushughulikia kushindwa kwa muda. Weka
wigo wao tofauti unapotatua tabia ya uelekezaji. Angalia
[mchoro wa tabaka 3 za ustahimilivu](../diagrams/exported/resilience-3layers.svg)
(chimbuko: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
kwa ramani ya mwonekano wa haraka.

### Kivunja-Mzunguko cha Mtoa Huduma (Provider Circuit Breaker)

**Wigo**: mtoa huduma mzima, k.m. `glm`, `openai`, `anthropic`.

**Lengo**: kuacha kutuma trafiki kwa mtoa huduma anayeshindwa mara kwa mara katika kiwango cha
upstream/huduma, ili mtoa huduma mmoja asiye na afya asipunguze kasi ya kila ombi.

**Utekelezaji**:

- Darasa kuu: `src/shared/utils/circuitBreaker.ts`
- Uunganishaji wa lango la chat/utekelezaji: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API ya hali ya wakati wa utekelezaji: `src/app/api/monitoring/health/route.ts`
- Vifuniko vya pamoja: `open-sse/services/accountFallback.ts`
- Jedwali la hali linalohifadhiwa: `domain_circuit_breakers`

**Hali** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: trafiki ya kawaida inaruhusiwa.
- `DEGRADED`: kanda ya onyo la mapema — kushindwa kumevuka kizingiti cha kupungua lakini bado
  hakijafikia kizingiti cha kivunja-mzunguko; trafiki bado inaendelea, dashibodi zinaonyesha onyo.
  Jaribio halali la muunganisho au dirisha tulivu bila kushindwa kupya huirudisha hadi `CLOSED`
  (`docs/architecture/RESILIENCE_GUIDE.md` ina dirisha hilo).
- `OPEN`: mtoa huduma amezuiwa kwa muda; witoaji hupokea jibu la provider-circuit-open
  au uelekezaji wa combo huruka hadi lengo lingine.
- `HALF_OPEN`: muda wa kuweka upya (reset timeout) umeisha; ruhusu ombi la uchunguzi (probe).
  Mafanikio hufunga kivunja-mzunguko, kushindwa hukifungua tena.

**Chaguomsingi** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, zinazotumika kupitia
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` katika `src/lib/resilience/settings.ts` →
`getCircuitBreaker(provider, …)` katika `src/sse/handlers/chatHelpers.ts`). Kivunja-mzunguko cha
mtoa huduma mzima kinaendeshwa kwa `circuitBreakerThreshold` / `circuitBreakerReset`:

| Wasifu         |  hupungua kwa | hufunguka kwa (`circuitBreakerThreshold`) | kuweka upya (`circuitBreakerReset`) |
| -------------- | ------------: | ----------------------------------------: | ----------------------------------: |
| OAuth          |           `5` |                                       `8` |                               `60s` |
| Ufunguo wa API |           `7` |                                      `12` |                               `30s` |
| Ya ndani       | (inayotokana) |                                       `2` |                               `15s` |

`PROVIDER_PROFILES` pia hufafanua `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (dakika 15/30/5) na `providerCooldownMs` (dakika 5/10/1): hizi huchochea
**lango la dirisha la Provider Cooldown ya kimataifa ya hiari (opt-in)** (`PROVIDER_COOLDOWN_ENABLED`,
chaguomsingi imezimwa) — ingizo la kiwango cha mtoa huduma katika
`open-sse/services/providerCooldownTracker.ts` huhesabiwa kama linalopooza tu baada ya kushindwa
kwa idadi ya `providerFailureThreshold` ndani ya `providerFailureWindowMs`, kisha hupooza kwa
`providerCooldownMs`. Hizi SI vizingiti vya kivunja-mzunguko kilicho hai — usizirekebishe
ukitarajia tabia ya kivunja-mzunguko. Kila chaguomsingi inaweza kubatilishwa kupitia
vigezo vya mazingira `OMNIROUTE_PROVIDER_BREAKER_*` na `OMNIROUTE_CIRCUIT_BREAKER_*`;
jedwali la rejea sahihi la wakati wa utekelezaji liko katika `docs/architecture/RESILIENCE_GUIDE.md`.

Hali za kushindwa za kiwango cha mtoa huduma pekee ndizo zinazopaswa kuuwasha kivunja-mzunguko cha mtoa huduma:

```ts
(408, 500, 502, 503, 504);
```

Usiuwashe kivunja-mzunguko cha mtoa huduma mzima kwa makosa ya kawaida ya akaunti/ufunguo/modeli
kama visa vingi vya `401`, `403`, au `429`. Hivyo mara nyingi ni vya connection cooldown au model
lockout. `403` ya mtoa huduma wa kawaida wa ufunguo wa API inapaswa kuwa inayoweza kupona
isipokuwa ikigawanywa kama kosa la mwisho la mtoa huduma/akaunti.

Mvunjaji hutumia urejeshaji wa uvivu, si kipima muda cha usuli. `OPEN` inapokwisha muda wake, kusoma kama vile `getStatus()`, `canExecute()`, na `getRetryAfterMs()` hufanya upya hali kuwa `HALF_OPEN`, hivyo dashibodi na wajenzi wa wagombea wa combo hawaendelei kumtenga mtoa huduma aliyekwisha muda wake milele.

### Muda wa Kupooza kwa Muunganisho

**Wigo**: muunganisho/akaunti/ufunguo mmoja wa mtoa huduma.

**Kusudi**: kuruka kwa muda ufunguo/akaunti moja mbaya huku ukiruhusu miunganisho mingine ya mtoa huduma yuleyule kuendelea kutumikia maombi.

**Utekelezaji**:

- Njia ya kuandika/kusasisha: `src/sse/services/auth.ts::markAccountUnavailable()`
- Uchaguzi/uchujaji wa akaunti: `src/sse/services/auth.ts::getProviderCredentials...`
- Hesabu ya muda wa kupooza: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Mipangilio: `src/lib/resilience/settings.ts`

Sehemu muhimu kwenye miunganisho ya watoa huduma:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

Wakati wa uchaguzi wa akaunti, muunganisho hurukwa huku:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

Muda wa kupooza pia ni wa uvivu: `rateLimitedUntil` ikishapita, muunganisho hupata sifa tena. Baada ya matumizi yenye mafanikio, `clearAccountError()` hufuta `testStatus`, `rateLimitedUntil`, sehemu za makosa, na `backoffLevel`.

Tabia chaguo-msingi ya muda wa kupooza kwa muunganisho:

- Muda wa msingi wa kupooza wa OAuth: `5s`.
- Muda wa msingi wa kupooza wa ufunguo wa API: `3s`.
- Kwa ufunguo wa API, `429` inapaswa kupendelea vidokezo vya kujaribu tena vya mkondo wa juu (`Retry-After`, vichwa vya kurejesha, au maandishi ya kurejesha yanayoweza kuchanganuliwa) yanapopatikana.
- Kushindwa kwa kurudiarudia kunakoweza kurejeshwa hutumia backoff ya kipeuo:

```ts
baseCooldownMs * 2 ** failureIndex;
```

Ulinzi wa anti-thundering-herd huzuia kushindwa kwa sambamba kwenye muunganisho huo huo kuongeza muda wa kupooza kwa kurudiarudia au kuongeza `backoffLevel` mara mbili.

Hali za mwisho si muda wa kupooza. `banned`, `expired` (ambayo inakuwa ya mwisho tu baada ya majaribio N yaliyowekewa kikomo kupitia `EXPIRED_RETRY_MAX`), na `credits_exhausted` zimekusudiwa kubaki hazipatikani hadi sifa za uthibitishaji/mipangilio zibadilike au mwendeshaji azirejeshe upya. Usiandike juu ya hali za mwisho kwa hali ya mpito ya muda wa kupooza.

### Kufungwa kwa Modeli

**Wigo**: mtoa huduma + muunganisho + modeli.

**Kusudi**: epuka kulemaza muunganisho mzima wakati modeli moja tu haipatikani au imezuiwa na mgawo kwa muunganisho huo.

Mifano:

- Watoa huduma wenye mgawo kwa kila modeli wanaorejesha `429`.
- Watoa huduma wa ndani wanaorejesha `404` kwa modeli moja inayokosekana.
- Kushindwa kwa ruhusa za hali/modeli mahususi kwa mtoa huduma kama hali zilizochaguliwa za Grok.

Kufungwa kwa modeli kunapatikana kwenye `open-sse/services/accountFallback.ts` na huruhusu muunganisho huo huo kuendelea kutumikia modeli nyingine.

### Mwongozo wa Utatuzi

- Ikiwa funguo zote za mtoa huduma zimerukwa, kagua hali ya mvunjaji wa mtoa huduma pamoja na `rateLimitedUntil`/`testStatus` ya kila muunganisho.
- Ikiwa mtoa huduma anaonekana ametengwa kabisa baada ya dirisha la kurejesha, angalia kama msimbo unasoma `state` ghafi badala ya kutumia `getStatus()`/`canExecute()`.
- Ikiwa ufunguo mmoja wa mtoa huduma unashindwa lakini wengine wangepaswa kufanya kazi, pendelea muda wa kupooza kwa muunganisho badala ya mvunjaji wa mtoa huduma.
- Ikiwa modeli moja tu inashindwa, pendelea kufungwa kwa modeli badala ya muda wa kupooza kwa muunganisho.
- Ikiwa hali inapaswa kujiponya yenyewe, inapaswa kuwa na alama ya muda ya siku zijazo/muda wa kukwisha wa kurejesha na njia ya kusoma inayofanya upya hali iliyokwisha. Hali za kudumu zinahitaji mabadiliko ya mwongozo ya sifa za uthibitishaji au usanidi.

---

## Kuchukua Alama za Vidole vya TLS na Ufichaji

Ufichaji mahususi wa mtoa huduma (JA3/JA4, CCH, kuficha) umehatiwa kando — angalia `docs/security/STEALTH_GUIDE.md` (git; haijajengwa ndani ya `/docs`).

---

## Upimaji wa ustahimilivu (Awamu 8 · Kipengele C)

Zaidi ya majaribio ya vitengo ya mantiki ya ustahimilivu, majaribio matatu huitahini runtime chini ya hali halisi za msongo/kushindwa (yote ni ya ujumuishaji/kila usiku — hakuna linalozuia PR):

| Jaribio        | Kinachofanywa                                                                                                                                                                                                          | Kuendesha                                   |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Chaos          | Node bandia ya upstream huingiza ucheleweshaji/uwekaji upya/ukomo wa muda/503 halisi; inathibitisha kwamba kivunja mzunguko hufunguka/hupona na `checkFallbackError` huainisha 503 kama njia mbadala inayoweza kupona. | `RUN_CHAOS_INT=1 npm run test:chaos`        |
| Ukuaji wa heap | Mito ~500 kwa kila `createSSEStream` chini ya `--expose-gc`; hushindwa ikiwa heap inakua zaidi ya kikomo cha juu (ulinzi wa OOM #3069).                                                                                | `npm run test:heap`                         |
| k6 soak        | Mzigo endelevu dhidi ya `/api/monitoring/health`; vizingiti vya p95/hitilafu.                                                                                                                                          | `k6 run tests/load/k6-soak.js` (kila usiku) |

Inaratibiwa na `.github/workflows/nightly-resilience.yml` (cron + dispatch). Katika
`test:integration` chaguo-msingi, chaos na heap hujiruka kiotomatiki (bila `RUN_CHAOS_INT`/`--expose-gc`).

---

## Angalia Pia

- [Muongozo wa Usanifu](./ARCHITECTURE.md) — Usanifu wa mfumo na utendakazi wa ndani
- [Muongozo wa Mtumiaji](../guides/USER_GUIDE.md) — Watoa huduma, michanganyiko, ujumuishaji wa CLI
- [Injini ya Auto-Combo](../routing/AUTO-COMBO.md) — Upigaji alama wa vigezo 16, pakiti za hali
