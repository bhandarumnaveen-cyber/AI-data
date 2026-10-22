# Resilience Guide (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute ima tri različita, ali povezana mehanizma otpornosti. Svaki ima drugačiji opseg i svrhu. Držite ih odvojenima prilikom otklanjanja grešaka u ponašanju usmeravanja.

![Model otpornosti sa 3 sloja](../diagrams/exported/resilience-3layers.svg)

> Izvor: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Prekidač kola provajdera (circuit breaker)

**Opseg:** ceo provajder (npr. `glm`, `openai`, `anthropic`).

**Svrha:** zaustaviti slanje saobraćaja ka provajderu koji stalno otkazuje na nivou upstream-a/usluge.

**Implementacija:**

- Osnovna klasa: `src/shared/utils/circuitBreaker.ts`
- Povezivanje: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API za status: `GET /api/monitoring/health`
- API za resetovanje: `POST /api/resilience/reset`
- Omotači: `open-sse/services/accountFallback.ts`
- Tabela u bazi podataka: `domain_circuit_breakers`

**Stanja:**

- `CLOSED` — normalan saobraćaj je dozvoljen
- `DEGRADED` — saobraćaj je i dalje dozvoljen, ali se prate povećani otkazi provajdera; vraća se u `CLOSED` nakon dovoljnog broja uspeha, nakon uspešnog testa konekcije, ili nakon najdužeg `OPEN` zadržavanja za poslednju vrstu otkaza (njena vrednost `cooldownByKind`, inače `resetTimeout`, × `maxBackoffMultiplier`, najmanje jedan cooldown) bez novog otkaza
- `OPEN` — provajder je privremeno blokiran; combo usmeravanje ga preskače
- `HALF_OPEN` — istekao je tajm-aut resetovanja; probni zahtev je dozvoljen

**Podrazumevane vrednosti koje se mogu konfigurisati (`open-sse/config/constants.ts`, izložene u Kontrolna tabla → Podešavanja → Otpornost):**

| Klasa   | Degradira se pri | Otvara se pri | Tajm-aut resetovanja |
| ------- | ---------------- | ------------- | -------------------- |
| OAuth   | 5 otkaza         | 8 otkaza      | 60s                  |
| API-key | 7 otkaza         | 12 otkaza     | 30s                  |
| Local   | izvedeno         | 2 otkaza      | 15s                  |

`degradationThreshold` kontroliše kada provajder ulazi u `DEGRADED`; `failureThreshold` kontroliše kada se otvara i preskače. Profili lokalnih provajdera još nisu izloženi na stranici podešavanja otpornosti.

**Kodovi aktiviranja:** samo statusi na nivou provajdera `[408, 500, 502, 503, 504]`. NE aktivirati za greške na nivou naloga (većina 401/403/429 — one pripadaju cooldown-u ili zaključavanju).

**Lenj oporavak:** kada `OPEN` istekne, `getStatus()`, `canExecute()`, `getRetryAfterMs()` osvežavaju stanje na `HALF_OPEN`. Ista čitanja (i sledeći otkaz) postepeno vraćaju zastarelo `DEGRADED` nazad na `CLOSED`. Pozadinski tajmer nije potreban.

---

### Opcioni globalni cooldown provajdera (kapija prozora)

Četvrti, **opcioni** sloj (`PROVIDER_COOLDOWN_ENABLED`, podrazumevano **isključen**) čuva memoriju o provajderima koji otkazuju između zahteva u
`open-sse/services/providerCooldownTracker.ts`, koju konsultuje razrešavanje combo ciljeva kako bi uzastopni combo zahtevi prestali da ponovo prolaze kroz provajdera koji je upravo
otkazao. Zapisi na nivou provajdera poštuju kapiju prozora `PROVIDER_PROFILES`:

| Profil  | aktivira se nakon (`providerFailureThreshold`) | unutar (`providerFailureWindowMs`) | hladi se (`providerCooldownMs`) |
| ------- | ---------------------------------------------: | ---------------------------------: | ------------------------------: |
| OAuth   |                                           `10` |                            `15min` |                          `5min` |
| API key |                                           `15` |                            `30min` |                         `10min` |

Ispod praga provajder se **ne** smatra u hlađenju; uspeh čisti
prozor. Zapisi na nivou konekcije (`provider:connectionId`) umesto toga zadržavaju
eksponencijalni backoff `minRetryCooldownMs → maxRetryCooldownMs`. Nadjačavanja:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Zaštita od regresije: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Хлађење конекције

**Обухват:** једна конекција/налог/кључ провајдера.

**Сврха:** прескочити један лош кључ док друге конекције за истог провајдера настављају да опслужују.

**Имплементација:**

- Означавање недоступним: `src/sse/services/auth.ts::markAccountUnavailable()`
- Избор: `getProviderCredentials*` у истом фајлу
- Израчунавање хлађења: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Подешавања: `src/lib/resilience/settings.ts`

**Поља по конекцији:**

- `rateLimitedUntil` — временска ознака докле хлађење истиче
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — бројач експоненцијалног backoff-а

**Подразумевана хлађења:**

- OAuth основно: 5s
- API-кључ основно: 3s
- API-кључ 429: преферира upstream `Retry-After`/reset заглавља/текст ресета који се може парсирати
- Backoff: `baseCooldownMs * 2 ** failureIndex`

**Заштита од thundering-herd ефекта:** спречава да истовремени неуспеси прекомерно продужавају хлађење или двоструко увећају `backoffLevel`.

**429-ке због ограничења конкурентности не пењу се backoff лествицом.** `429` чије тело пријављује
ограничење конкурентности ("too many concurrent requests", "concurrency limit", "parallel request
limit", GLM `并发数过高`) значи да је налог здрав али заузет.
`checkFallbackError()` враћа разлог `concurrency_limited`: одмах пребаци на следећу
конекцију, охлади ову на фиксних `CONCURRENCY_LIMIT_COOLDOWN_MS` (1s) или према upstream
наговештају за поновни покушај, задржи `backoffLevel` непромењеним и постави `skipProviderBreaker`.
Експлицитно тело о квоти и даље има предност, тако да тело које такође одговара обрасцу квоте
остаје одлука о квоти. Детекција: `looksLikeConcurrencyLimit()` у `src/shared/utils/classify429.ts`;
одлука: `open-sse/services/accountFallback/concurrencyLimit429.ts`. `classify429()` (`FailureKind`
прекидача) је непромењен и и даље чита `rate_limit` за ова тела.

**Застоји садржаја тока не хладе налог.** Када watchdog за застој садржаја
(`open-sse/utils/streamHandler.ts`) одустане од тока који није на време послао излаз модела,
`markAccountUnavailable()` бележи грешку на конекцији али не поставља
хлађење: застој припада том захтеву, најчешће дугом кораку резоновања који још увек нема
излаз. Оператери могу поново да се укључе помоћу `resilienceSettings.streamStallCooldown.enabled`
(подразумевано `false`).

**Оквири резоновања поново покрећу буџет за застој садржаја.** Модел резоновања може да размишља
минутима пре свог првог видљивог токена: Claude током шаље `thinking_delta` оквире чији
текст размишљања може бити празан, а Responses API током шаље једну ставку резоновања за
другом. `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) препознаје
ове оквире, а watchdog поново покреће свој буџет на сваком од њих уместо да откаже
корак. Они и даље нису излаз модела, тако да се корак који се заврши само резоновањем и даље
пријављује као празан, а корак који престане да резонује и шаље само heartbeat-ове и даље
активира watchdog.

Kiro-јеви бинарни `reasoningContentEvent` оквири са непразним потписом чувају ову
активност резоновања кроз егзекутор као празну `reasoning_content` делту. Потпис се
не прослеђује. Метаподаци, непотпуни оквири и празни потписи не покрећу поново
буџет садржаја; независни тајмаут активног тока и отказивање од стране клијента и даље
важе (`open-sse/executors/kiro/reasoning.ts`).

**Терминална стања (НИСУ хлађења):**

- `banned` — поставља га детекција забрањених кључних речи / забране налога (види [BAN_DETECTION](../security/BAN_DETECTION.md)), и три узастопна upstream одбијања по захтеву (`request_rejected`, нпр. Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); једно одбијање само хлади конекцију
- `expired` (прелази у терминално стање након ограниченог броја поновних покушаја — `EXPIRED_RETRY_MAX = 3` са експоненцијалним backoff-ом — тако да пролазне OAuth грешке могу да се самоизлече пре него што се налог трајно деактивира)
- `credits_exhausted`

Ова стања трају док се акредитиви не промене или их оператер не ресетује. Не преписујте терминална стања пролазним стањем хлађења.

**Лењ опоравак:** када `rateLimitedUntil` прође, конекција поново постаје подобна. При успешној употреби, `clearAccountError()` брише сва поља грешке.

### Claude OAuth зид потрошње: трака нижег приоритета + ресет ограничења сесије

**Обухват:** једна Claude претплатничка (OAuth) конекција. Обе функције су **по избору, по
конекцији** (Уређивање конекције → Claude одељак → `lowPriorityMode` / `autoLimitReset` у
`providerSpecificData`, обе подразумевано искључене) и одсликавају команде `/low-priority` и
`/limit-reset` из Claude Code-а (wire уговор снимљен из Claude Code 2.1.263).

**Имплементација:**

- Машина стања + класификација одговора: `open-sse/services/claudeLowPriority.ts`
- Клијент за статус/захтев ресета: `open-sse/services/claudeLimitReset.ts`
- Кука егзекутора (убацивање заглавља + поновни покушај са истим налогом): `open-sse/executors/base.ts::execute()`
- Перзистенција опције укључивања: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**Окидач:** зид потрошње од 5 сати — `429` чија заглавља носе
`anthropic-ratelimit-unified-status: rejected` и, када је налог подобан,
`anthropic-ratelimit-unified-slow-offer: treatment`. Ништа се не шаље пре те прве 429-ке зида;
нагла 429-ка без unified заглавља пролази кроз нормалну путању хлађења.

**Трака нижег приоритета** (`lowPriorityMode`):

- На wall 429 извршилац прихвата понуду и одмах понавља захтев на **истом**
  налогу са `anthropic-usage-limit: slow`; трака остаје активна до најављеног
  `anthropic-ratelimit-unified-reset` (+60s грејса) и сваки захтев у том прозору носи
  заглавље. Преспретнути 429 никада не стиже до `handleChatCore`, тако да се веза
  **не** ставља у cooldown и не ротира.
- `anthropic-ratelimit-unified-slow-status` на каснијим одговорима: `active` / `not_needed`
  задржавају траку; `slot_busy` (429) или `529` чекају серверско
  `anthropic-ratelimit-unified-slow-retry-after` (подразумевано 20s, ограничено на 5–600s,
  ±30% џитер) и понављају, ограничено са `anthropic-ratelimit-unified-slow-max-wait`
  (подразумевано 20 min, ограничено на 1 min–6 h) — након тога трака се завршава и
  10-минутни cool-off блокира поновно прихватање. Чекање је додатно ограничено
  преосталим временом сопственог upstream-start тајмаута захтева
  (`resolveFetchStartTimeout`, подразумевано 10 min) минус маргина од 5 s: без тог
  ограничења подразумевани max-wait од 20 минута би надживео захтев и спавање би било
  прекинуто усред чекања, што би извргло `TimeoutError` уместо грациозног завршетка
  `max_wait` + cool-off.
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, прелазак 5-часовног прозора,
  или `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (што траку завршава
  као `extra_usage` при било ком статусу, јер плаћено прекорачење сада покрива wall)
  завршавају траку; одговор затим прелази у нормалну cooldown путању. `budget_exhausted`
  се памти до најављеног ресета буџета (≤ 8 дана).
- Провера wall-а се извршава након сопствених поновних покушаја извршиоца унутар покушаја
  покренутих статусом 400 (уређивање контекста, ограничења thinking/effort, ауто-учење
  параметара), тако да се wall 429 који се појави тек на једном од тих поновних покушаја
  и даље пресреће уместо да стигне до cooldown путање.
- Стање се чува у меморији по вези (рестарт кошта један додатни wall 429 за поновно
  прихватање).

**Ресет ограничења сесије** (`autoLimitReset`, покушава се пре траке када су оба укључена):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → `juniper_tide`
  блок; када је `arm: "reset"` и `available: true`,
  `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` са
  `{ "program": "juniper_tide" }` (UUID организације из
  `providerSpecificData.organizationUUID`, bootstrap резерва).
- `result: reset|not_limited` → захтев се понавља пуном брзином (без slow заглавља).
  `already_used` / `not_offered` мемоизују `next_available_at` (подразумевано једна
  недеља); сваки неуспех уводи паузу од 15 минута. Ресет је једном недељно и и даље се
  рачуна у недељно ограничење.

Регресионе заштите: `tests/unit/claude-low-priority-mode.test.ts`,
`tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`.

### Афинитет сесије (#7274)

**Обухват:** једна клијентска сесија (заглавље `X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`) причвршћена за једну везу, за **било којег** провајдера.

**Сврха:** задржати агента у вишеобртним разговорима (Claude Code, aider, прилагођени агенти) на истом налогу кроз захтеве, смањујући губитак контекста између налога и поновљене 429 одговоре хладног старта код провајдера са стањем сесије по налогу.

**Имплементација:**

- Одређивање TTL-а: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Избор/креирање пина: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Екстракција заглавља (генеричка, било који провајдер): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Персистирана табела пинова: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Подешавање: `sessionAffinityTtlMs` (глобални TTL у ms, `0` искључује) — `src/lib/db/settings.ts`. Преименовано из Codex-специфичног `codexSessionAffinityTtlMs` миграцијом `124_generic_session_affinity_ttl.sql`, која преноси сваки претходно подешени Codex TTL као нову подразумевану вредност.

Пре #7274, `resolveSessionAffinityTtlMs()` је безусловно враћала `0` за сваког провајдера осим `codex`, тако да подешавање TTL-а (и заглавља сесије) нису имала ефекта нигде другде иако су механизам пиновања и екстракција заглавља већ били независни од провајдера. Исправка је уклонила тај рани повратак; TTL се сада равномерно примењује на сваког провајдера чим се глобално постави изнад `0`.

Три заглавља афинитета сесије се никада не прослеђују upstream — извршиоци граде сопствена upstream заглавља од нуле уместо да пропуштају клијентска заглавља, тако да ово остаје само интерни корелациони идентификатор.

### Ексклузивни закупи веза за управљане сесије

**Обухват:** један активан управљани HTTP клијент/сесија поседује једну подобну OmniRoute везу.

**Сврха:** обезбедити трајно ексклузивно власништво над везом за клијенте којима је потребна чврста ограда рутирања кроз захтеве. Ово се разликује од афинитета сесије, који је мекана преференца континуитета: ексклузивни закуп перзистира стање животног циклуса у SQLite, намеће глобалну јединственост активног власника и активне везе, и одбија застарелу генерацију пре прослеђивања провајдеру.

Функција је опциона (opt-in) по API кључу. Управљани кључ мора имати опсег `lease:exclusive` и експлицитну непразну листу `allowedConnections`. Било који HTTP клијент може користити крајњу тачку животног циклуса; није потребно име клијента, user-agent, провајдер, OAuth метода или модел. Закуп поседује везу, а не модел, тако да промена модела задржава везивање док веза остаје уобичајено подобна. Нормална правила за модел, квоту, здравље, cooldown и листу дозвољених остају меродавна и могу преместити исту генерацију на другу слободну подобну везу.

Животни циклус је `POST /api/v1/session-leases` са JSON акцијама `acquire`, `renew` и `release`.
Управљани захтеви за инференцу достављају непрозирну вредност `X-OmniRoute-Lease-Owner` и тачну
вредност `X-OmniRoute-Lease-Generation`. Власник користи `vlo_` праћено са 43 base64url карактера; чува се само
његов SHA-256 хеш. Свака коначна ограда (fence) при диспечовању такође везује ID аутентификованог API кључа и
ID активне конекције. Заглавља за контролу лиза уклањају се из логова, задржаних снимака захтева и
заглавља upstream извршиоца.

Ако обично рутирање има подобне управљане кандидате, али је сваки слободан кандидат заузет
туђим активним лизом, OmniRoute враћа HTTP `429`, кôд недоступности капацитета лиза,
стање чекања на капацитет и ограничени `Retry-After` изведен из најранијег релевантног истека.
Обична празна подобност није спор око лиза и задржава своју постојећу семантику грешака рутирања.

Повезани механизми остају одвојени:

- Заузетост OAuth сесије је мека дистрибуција локална за процес, намењена OAuth налозима.
- Семафори налога додељују дозволе за конкурентност захтева и завршавају се када се захтев заврши.
- Ексклузивни лизови управљаних сесија представљају трајно власништво над животним циклусом са оградом генерације.

---

## 3. Zaključavanje modela

**Opseg:** trojka provajder + konekcija + model.

**Opseg ključa prema statusu:** status koji je prouzrokovao neuspeh određuje pod kojim ključem se zaključavanje upisuje (`resolveLockoutScope()` u `open-sse/services/accountFallback/exactModelLock.ts`):

- `429` / `403` / `402` — signal kvote ili prava korišćenja — zaključava **porodicu kvota**: za codex ceo opseg `codex` / `spark` (svaki `gpt-5*` model te konekcije), za ostale provajdere `getQuotaScopedModelForProvider()`.
- `404` zaključava sam konkretan model (`getModelLockKey()` sužava `not_found`).
- Svaki drugi status — `5xx` transportne/serverske greške i OmniRoute-ov sopstveni sintetisani `502` iz validacije kvaliteta — zaključava samo **tačnu** torku provajder/konekcija/model. Loš stream na jednom modelu nije dokaz o kvoti naloga; pre ovog pravila jedan prazan odgovor na `codex/gpt-5.6-luna` uklanjao je svaki `gpt-5*` model te konekcije iz rutiranja na 2–30 min (eskalirajuće), dok je njegova kvota ostajala netaknuta.
- Eksplicitna opcija `scope` pozivaoca uvek ima prednost (Antigravity prosleđuje `"exact"`).

**Svrha:** izbeći onemogućavanje cele konekcije kada je samo jedan model nedostupan ili ograničen kvotom.

**Primeri:**

- Provajderi sa kvotom po modelu koji vraćaju 429
- Lokalni provajderi koji vraćaju 404 za jedan nedostajući model
- Greške dozvola za režim/model specifične za provajdera (npr. Grok režimi)

**Implementacija:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Kontrolna tabla hlađenja modela (v3.8.0)

UI: Podešavanja → Hlađenja modela (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Prikazuje aktivna zaključavanja sa: provajder, konekcija, model, razlog, expiresAt. Operatori mogu ručno ponovo omogućiti model sa kartice.

**REST API:**

- `GET /api/resilience/model-cooldowns` — prikazuje aktivna zaključavanja
- `DELETE /api/resilience/model-cooldowns` — ručno ponovno omogućavanje. Telo: `{provider, connection, model}`. Autentikacija: management.

### Upravitelj hlađenja

UI: Praćenje → Upravitelj hlađenja (`src/app/(dashboard)/dashboard/resilience/cooldowns/`).

Jedna stranica za svaku konekciju koja je van rutiranja iz prolaznog razloga, umesto otvaranja stranice svakog provajdera. Prikazuje hlađenja konekcija, zaključavanja modela i terminalna stanja, briše ih po konekciji, za izabrani skup ili za sve konekcije jednog provajdera, i uređuje najčešće podešavana pravila hlađenja: `streamStallCooldown.enabled` i osnovno hlađenje `connectionCooldown` za OAuth / API-ključ kao i maksimalne korake backoff-a (čuva se kroz `PATCH /api/resilience`). Terminalna stanja (`banned`, `expired`, `credits_exhausted`) se prikazuju, ali se ovde nikada ne brišu.

**REST API** (`src/lib/resilience/cooldownManager.ts`, autentikacija: management):

- `GET /api/resilience/cooldowns[?provider=]` — konekcije sa statusom, preostalim hlađenjem, nivoom backoff-a, tipom poslednje greške i zaključavanjima modela (bez kredencijala)
- `POST /api/resilience/cooldowns` — telo `{connectionIds: string[]}` ili
  `{all: true, provider?}`; vraća `{cleared, unchanged, skippedTerminal, lockoutsCleared}`

### UI podešavanja zaključavanja + oporavak slabljenjem pri uspehu (v3.8.23)

Zaključavanje modela je prešlo sa uvek uključenog, hardkodovanog ponašanja na potpuno podesivu, opt-in funkciju sa sopstvenom karticom podešavanja i putanjom samoisceljujućeg oporavka.

**Kartica podešavanja:** Podešavanja → Zaključavanje modela
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Ovo je **različito** od gornje kartice `ModelCooldownsCard` koja je samo za čitanje (koja samo _prikazuje_ aktivna zaključavanja) — nova kartica _podešava parametre_. Podrazumevane vrednosti se nalaze u `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| Podešavanje             | Podrazumevano                    | Značenje                                                                |
| ----------------------- | -------------------------------- | ----------------------------------------------------------------------- |
| `enabled`               | `false`                          | Glavni prekidač — zaključavanje modela je **podrazumevano isključeno**. |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Upstream statusi koji se računaju kao neuspeh u opsegu modela.          |
| `baseCooldownMs`        | `120_000` (120 s)                | Početno trajanje zaključavanja za prvi neuspeh.                         |
| `maxCooldownMs`         | `1_800_000` (30 min)             | Gornja granica eskaliranog hlađenja.                                    |
| `maxBackoffSteps`       | `10`                             | Maksimalan broj koraka eskalacije eksponencijalnog backoff-a.           |
| `useExponentialBackoff` | `true`                           | Da li ponovljeni neuspesi eksponencijalno eskaliraju hlađenje.          |

Podešavanja se trajno čuvaju kroz uobičajeno skladište podešavanja i validiraju putem šeme podešavanja otpornosti; kartica ograničava `baseCooldownMs`/`maxCooldownMs`
(uz `maxCooldownMs ≥ baseCooldownMs`) i `maxBackoffSteps`.

**Oporavak slabljenjem pri uspehu:** oporavak **nije** čisto istek tajmera. Zdrav odgovor smanjuje brojač neuspeha modela, tako da model koji se oporavio usred prozora prestaje da eskalira (i biva otključan) pre nego što bi njegov tajmer istekao. Pri uspešnom combo cilju, `open-sse/services/combo.ts` poziva `decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`), koja **prepolovljava** sačuvani
`failureCount` (`Math.floor(failureCount / 2)`); kada dostigne `0`, unos zaključavanja se u potpunosti briše. Pandan `recordModelLockoutFailure()` uvećava brojač (i eskalira hlađenje) pri neuspesima unutar prozora eskalacije. Ovo slabljenje pri uspehu je dodatak običnom isteku tajmera — bilo koja od dve putanje može ponovo omogućiti model.

**Stanje:** zaključavanja se drže **u memoriji** (`Map` strukture po procesu sa
`ModelLockoutEntry` ključevanim po `provider:connectionId:model`, a zaključavanja tačnog opsega po
`provider:connectionId:exact:model`), ne čuvaju se trajno u bazi — gube se pri restartu. _Podešavanja_ se trajno čuvaju; aktivno _stanje_ zaključavanja je efemerno.

---

## 4. Kontrola konkurentnosti za deljenu kvotu (v3.8.36)

Nalozi zasnovani na pretplati (GLM, MiniMax itd.) često prihvataju samo ~1–3 istovremena zahteva; prekoračenje tog broja izaziva greške 429 i periode hlađenja. Ovo je posebno izraženo kod kombinacija sa **deljenom kvotom** (`qtSd/…`), gde više API ključeva deli jedan uzvodni nalog. Tri sloja sprečavaju da deljeni nalog bude preplavljen.

### Ograničenje konkurentnosti po konekciji (`max_concurrent`)

Svaka konekcija ka provajderu može da deklariše gornju granicu `max_concurrent`
(`provider_connections.max_concurrent`, podešava se u modalu konekcije / API-ju / bazi podataka).
Ostavite prazno za rad bez ograničenja. Ovo je jedini parametar koji pokreće sloj
serijalizacije opisan u nastavku — podesite ga na stvarnu konkurentnost naloga (npr. GLM ~1, MiniMax ~2).

### Ograničenja konkurentnosti po modelu (`modelConcurrency`)

Konekcija može dodatno da deklariše tačne gornje granice konkurentnosti po modelu
unutar svoje mape `rateLimitOverrides`:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

Podesite je u modalu konekcije (**Rate limit overrides → Per-model
concurrency caps**, jedan `model=cap` po redu) ili putem
`PATCH /api/providers/[id]` sa istim JSON oblikom. Ključna semantika:

- **Na nivou konekcije naspram po modelu:** `maxConcurrent` ostaje deljena
  gornja granica za celu konekciju. Kada se primenjuju oba, oba prolaza se zauzimaju
  atomski u okviru istog kompozitnog prolaza
  (`global → provider → account → model`); efektivno ponašanje odgovara
  strožem od primenljivih ograničenja.
- **Tačno podudaranje ključa modela:** ključ je string modela prosleđen
  izvršiocu nakon razrešenja rutiranja — obično goli ID uzvodnog modela
  (`glm-5`), a ne alijas `provider/model` na strani klijenta (`zai/glm-5` se ne
  podudara sa `glm-5`). Vrednosti su pozitivni celi brojevi koji predstavljaju
  gornje granice broja istovremenih zahteva.
- **Lokalno čekanje u redu, bez otkrivanja:** višak zahteva čeka lokalno u redu uz
  postojeću semantiku reda i vremenskih ograničenja (tipizirane greške prijema `SEMAPHORE_TIMEOUT` /
  `SEMAPHORE_QUEUE_FULL`). OmniRoute ne otkriva niti
  pretpostavlja uzvodnu politiku — on sprovodi tačno one granice koje je operator
  konfigurisao. Zasićen prolaz modela nikada ne onemogućava provajdera i nikada
  ne stvara trajnu blokadu modela; uzvodno ponašanje 429/hlađenja/fallback-a
  ostaje poslednja linija odbrane od grešaka.
- **Opseg po konekciji i po procesu:** ograničenja važe po konekciji
  u bazi podataka i čuvaju se u memoriji, pa se dve konekcije koje koriste isti
  uzvodni API ključ međusobno ne usklađuju.
- **Bez konfiguracije nema promene:** izostavljanje mape (ili ostavljanje
  polja na kontrolnoj tabli praznim) ne dodaje nikakav prolaz po modelu. Primer konfiguracije
  bez nametanja bilo kakvog univerzalnog ograničenja provajdera:

```text
glm-5=1
glm-4.7=3
```

### Serijalizacija zahteva pri deljenju kvote

Kada raspodela sa deljenom kvotom cilja konekciju koja deklariše pozitivan
`max_concurrent`, istovremeni zahtevi ka tom **nalogu** serijalizuju se kroz
semafor po konekciji (ključ `qsconn:<connectionId>`): višak zahteva **čeka u
redu** umesto da preplavi nalog. Ona je **otvorena pri otkazu (fail-open)** — zasićen
red ili isteklo vreme nastavlja bez zauzetog mesta, umesto da ikada odbije zahtev
koji se može rasporediti. Uključivanje/isključivanje u **Settings → Resilience → Quota-share per-connection
concurrency** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`, podrazumevano
uključeno). Bez ograničenja `max_concurrent` ponašanje je nepromenjeno.

> Prolaz rutiranja za deljenu kvotu (`selectQuotaShareTarget`, DRR + P2C) je i sam
> fail-open i samo _smanjuje prioritet_ konekcije koja je dosegla granicu — sa
> pulom od jedne konekcije ne može da nametne strogo ograničenje, pa je ovaj semafor ono što stvarno
> obuzdava poplavu.

### Ponovni pokušaj za kombinacije svestan perioda hlađenja

Za svaku strategiju kombinacije (kada je uključena), zahtev koji bi kristalisao grešku 429
zbog KRATKOG prolaznog perioda hlađenja sačeka da on istekne i ponovo se
raspodeli, umesto da vrati 429 — ovo pokriva TPM/RPM prozore klase Gemini (~60s retry-after)
kod kombinacija sa više modela, npr. kada oba cilja kombinacije od 2 modela naiđu na ograničenje
brzine po modelu. Ograničeno je parametrom `comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`,
`budgetMs`) u **Settings → Resilience**. Nikada ne čeka na `quota_exhausted`
(zaključano do ponoći) niti na razloge vezane za autentifikaciju ili nepronalaženje.

Isti prolaz pokriva i slučaj pre raspodele (#16319): kada je svaki cilj
kombinacije preskočen pre nego što je ijedan pokušaj izvršen, jer se njegov model
nalazi u kratkoj prolaznoj blokadi, putanja bez ijednog pokušaja sačeka da blokada istekne pod istim
granicama i ponovo raspodeli, umesto da odgovori sa
`503 ALL_TARGETS_SKIPPED` bez nagoveštaja. Kada čekanje nije dozvoljeno (dostignuta granica, iscrpljeni pokušaji ili budžet,
ili je funkcija isključena), završni odgovor se nadograđuje na
`429 rate_limit_error` koji nosi `retry_after` / `reset_at` najranijeg
isteka prolazne blokade; blokade zbog kvote, autentifikacije i nepronađenog resursa
zadržavaju odgovor 503 bez nagoveštaja.

---

## 5. Kontrola prijema u red čekanja zahteva (v3.8.49 · issue #6593)

**Opseg**: lokalni red čekanja za ograničenje protoka po dobavljaču+konekciji (`open-sse/services/rateLimitManager.ts`, podržan od strane Bottleneck-a), jedan sloj ispod tri mehanizma opisana iznad.

**`maxWaitMs` ograničava čekanje u redu; `executionMaxWaitMs` ograničava izvršavanje.**
Ova dva su namerno odvojena i nijedno ne utiče na drugo.

`resilienceSettings.requestQueue.maxWaitMs` je **budžet čekanja u redu**: pokriva čekanje na slobodno mesto kod dobavljača, a zatim i boravak u statusu QUEUED, a njegov tajmer se poništava čim posao napusti QUEUED i počne da se izvršava (`rateLimitManager.ts`, `wrappedFn`). Zahtev koji ga prekorači nikada ne stiže do uzvodnog servisa. Podrazumevano 30000ms, definiše ga `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS` u `src/lib/resilience/settings.ts` i fiksiran je testom `tests/unit/ratelimit-admission-control-6593.test.ts`, tako da promena te vrednosti čini da taj test padne, umesto da ovaj pasus tiho zastari.

`resilienceSettings.requestQueue.executionMaxWaitMs` je ono što Bottleneck prima kao `expiration` posla, čiji tajmer počinje tek nakon slanja na izvršavanje. To je krajnja zaštita za izvršioce koji nemaju sopstveni tajmaut za uzvodni servis, a podiže se na sopstveni tajmaut početka fetch-a izvršioca kada je taj duži, tako da ne može da prekine zdrav odgovor koji je već u toku. Podrazumevano 600000ms (10 min).

Prosleđivanje budžeta reda u `expiration` je ono što je ranije prekidalo neinkrementalne gejtveje usred izvršavanja — oni legitimno rade minutima pre prvih bajtova — i zato se istek `expiration` prikazuje kao `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504), dok budžet reda nosi kod tajmauta reda. Obe vrednosti se mogu promeniti preko `RATE_LIMIT_MAX_WAIT_MS` / `RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) ili kontrolne table (**Settings → Resilience**). Obe se pri normalizaciji ograničavaju na 1ms–24h.

**Prioritet, za obe:** env promenljiva daje samo _podrazumevanu_ vrednost. Vrednost sačuvana u `resilienceSettings.requestQueue` (kontrolna tabla / API patch, skladištena u `key_value`) ima prednost nad njom, a `rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` po konekciji ima prednost nad tom. Postavljanje env promenljive na instalaciji koja već ima sačuvanu vrednost zato ne menja ništa — umesto toga obrišite ili ažurirajte sačuvano podešavanje.

Boravak u redu ograničava `maxWaitMs`; `maxQueueDepth` ispod ograničava koliko pozivalaca može istovremeno biti u redu.

**Ponovni pokušaji navedeni u telu odgovora: tempiranje naspram blokade.** Telo odgovora 429 može samo da navede svoje čekanje (Gemini `RetryInfo.retryDelay`, tekst "retry after Ns"), koje čita `updateFromResponseBody`. Čekanje koje staje u `maxWaitMs` konekcije je tempiranje: limiter prazni svoj rezervoar na to vreme, a pozivi u redu se šalju na izvršavanje kada se on ponovo napuni. Čekanje duže od `maxWaitMs` nije nešto što red može da isčeka — Gemini na iscrpljenu dnevnu kvotu odgovara sa `retryDelay: "86399s"`. Prosleđeni `Retry-After` na ponovo izgrađenom odgovoru 429 (#16528) već tera fallback mehanizam da zaključa model na taj period, ali pauziranje limitera zbog njega bi i dalje blokiralo svaki poziv koji stigne do ključa prerano (na primer, nakon resetovanja otpornosti) na ceo `maxWaitMs`. Kada takvo čekanje dolazi iz tipiziranog Google `RetryInfo` detalja (poreklo `google_rpc_retry_info`) i limiter ključa je već ograničen na model (vidi `getLimiterKey`), 429 umesto toga postaje blokada modela na toj konekciji (`lockModelForLongBodyRetry` u `open-sse/services/rateLimitManager/bodyRetryPause.ts`, ograničeno na 24h), a limiter ostaje nepauziran. Izbor naloga preskače tu blokadu preko `isModelLocked()`, kao i kombinovana kapija pre slanja na izvršavanje za ciljeve vezane za konekciju. Na antigravity-ju, čiji je limiter po familiji kvota, blokada je na tačnom modelu, kao i njegove ostale blokade kvota. Ime koje je klijent zatražio takođe se zaključava kada ga je alias razrešio na taj model, jer te provere koriste zatraženo ime; zaključava se tačno (`lockExactModel`), tako da alias koji prelazi antigravity familiju kvota ili codex opseg nikada ne zaključava svoj sopstveni. Prozna naznaka, netipiziran `retryDelay` ili limiter koji deli cela konekcija zadržavaju pauzu. Kada se limiter koji je putanja 429 upravo ponovo izgradila ipak pauzira, pozivalac čije preostalo vreme u redu ističe pre pauze odmah se odbija kodom tajmauta reda (`checkLimiterPause`), umesto da to vreme isčekuje; zabeleženi kraj je usidren pre nego što se limiter izgradi, tamo gde Bottleneck pokreće svoj tajmer osvežavanja, a svaka kasnija promena rezervoara ga zaboravlja. Pokriveno testovima `tests/unit/rate-limit-long-body-retry-lockout.test.ts` i `tests/unit/rate-limit-body-retry-pause.test.ts`.

**`maxQueueDepth` — opciono ograničenje prijema (novo).** `resilienceSettings.requestQueue.maxQueueDepth`
ograničava koliko zahteva može istovremeno čekati u redu (još neposlatih na izvršavanje) za jednog dobavljača+konekciju. Kada red već sadrži `maxQueueDepth` zahteva, novi zahtev se brzo odbija tipiziranom greškom
`code: "RATE_LIMIT_QUEUE_FULL"` **pre** nego što uopšte stigne do `limiter.schedule()`
— tako da je odbijanje jeftino i dešava se pre svakog nizvodnog rada na kompresiji prompta / prevodu za taj zahtev. Podrazumevano `0` = onemogućeno, čime se zadržava postojeće ponašanje neograničenog reda; ograničeno na 0–100000.
Menja se preko `RATE_LIMIT_MAX_QUEUE_DEPTH` (env) ili
`resilienceSettings.requestQueue.maxQueueDepth` (kontrolna tabla/API patch).

Sama provera prijema je čista funkcija
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`), tako da se može jedinično testirati bez pravog Bottleneck limitera.

> RFC koji je otvorio #6593 takođe je predložio zastavicu `bypassCompressionOnRateLimit`.
> Pipeline `open-sse/services/compression/` u ovom repozitorijumu predstavlja
> kompresiju prompt-a/konteksta na odlaznom LLM zahtevu (`chatCore.ts`,
> oko bloka `resolveCompressionSettings`/`selectCompressionStrategy`),
> a ne HTTP kompresiju odgovora na sintetisanim 429 telima — ne postoji
> odgovarajuća putanja koda za bukvalnu zastavicu zaobilaženja. Taj korak
> kompresije prompt-a takođe se trenutno izvršava _pre_ `withRateLimit()` u
> pipeline-u zahteva, pa je preraspoređivanje radi njegovog preskakanja pri
> odbijanju zbog popunjenog reda zasebna, veća izmena od obima ovog issue-a;
> ona je namerno **nije** implementirana ovde i ostavljena je kao naknadni
> korak u slučaju da ušteda CPU-a opravdava rizik preraspoređivanja.

### Sigurnosna mreža za automatsko omogućavanje ograničenja brzine i zaštita konekcija (`rateLimitProtection`)

**Sigurnosna mreža automatskog omogućavanja** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, podrazumevano `true`):
OmniRoute podrazumevano automatski omogućava zaštitu redom čekanja od ograničenja brzine za sve aktivne konekcije provajdera sa API ključem (`getProviderCategory(provider) === "apikey"`). Ovo obezbeđuje da dolazni zahtevi ka uzvodnim API ključevima osetljivim na brzinu budu stavljeni u red čekanja i prigušeni kroz Bottleneck, umesto da u naletu izazovu uzvodne 429 greške. Sigurnosna mreža se može prepisati putem promenljive okruženja `RATE_LIMIT_AUTO_ENABLE` (`false`/`0`/`off` onemogućava, `true`/`1`/`on` prisilno uključuje), koja ima prednost nad sačuvanom postavkom na kontrolnoj tabli (**Podešavanja → Otpornost** / `PATCH /api/resilience`).

**Semantika `rateLimitProtection` po konekciji:**
Zaštita od ograničenja brzine po konekciji prati se putem bulovskog polja `rateLimitProtection` na konekcijama provajdera (trajno se čuva kao `rate_limit_protection` u SQLite-u):

- **Eksplicitno uključeno (`rateLimitProtection === true`)**: Zaštita od ograničenja brzine je eksplicitno omogućena za ovu konekciju, bez obzira na kategoriju provajdera ili na to da li je sigurnosna mreža automatskog omogućavanja uključena.
- **Eksplicitno isključeno (`rateLimitProtection === false`)**: Onemogućava eksplicitnu zaštitu, ali **ne** izuzima aktivnu konekciju sa API ključem iz globalne sigurnosne mreže automatskog omogućavanja. U `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`), `false` i `undefined` su ekvivalentni: samo se `rateLimitProtection === true` tretira kao eksplicitno prepisivanje. Ako je `rateLimitProtection` `false` (ili nije postavljeno), aktivna konekcija sa API ključem i dalje ispunjava uslov automatskog omogućavanja i ostaje zaštićena od ograničenja brzine.
- **Bez izuzimanja po konekciji**: Operator trenutno ne može da izrazi „ova jedna aktivna konekcija sa API ključem mora da radi bez zaštite redom čekanja od ograničenja brzine" dok automatsko omogućavanje ostaje aktivno za ostale. Da bi konekcije sa API ključem radile potpuno bez redova čekanja za ograničenje brzine, sigurnosna mreža mora biti isključena globalno (`RATE_LIMIT_AUTO_ENABLE=false` ili `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`).

**Podržane putanje upisa:**

- **`POST /api/rate-limits`**: Podržana administrativna putanja upisa za prebacivanje `rateLimitProtection` za konekciju (`{ connectionId: string, enabled: boolean }`). Poziv sa `enabled: true` uključuje eksplicitnu zaštitu; poziv sa `enabled: false` uklanja eksplicitnu zaštitu (iako aktivne konekcije sa API ključem ostaju pokrivene globalnom sigurnosnom mrežom ako je automatsko omogućavanje uključeno).
- **`PUT /api/providers/[id]`**: Namerno **ne** prihvata niti menja `rateLimitProtection` (#11278). Ažuriranje metapodataka konekcije provajdera putem `PUT /api/providers/[id]` nikada neće promeniti sačuvano stanje zaštite od ograničenja brzine.

---

## 6. Надзорник пропусности за споре токове (#9709)

Опциона заштита `resilienceSettings.streamRecovery.throughputWatchdog` открива
узводни сервер који још увек шаље делове, али производи излаз асистента испод
конфигурисане стопе корисног излаза. Намерно је различита од временског ограничења неактивности:
откуцаји и метаподаци не ресетују ниједан тајмер и не рачунају се као напредак. Такође је
различита од чврстог рока покушаја (#9153), који остаје апсолутни безбедносни
горњи лимит без обзира на квалитет излаза.

Надзорник захтева период загревања, након чега следи комплетан покретни прозор, пре
него што може да прекине. Броји делта текста из догађаја излаза Chat Completions и Responses API
(конзервативни прокси у бајтовима UTF-8), игнорише догађаје само са употребом и празне догађаје и
обуставља просуђивање док су догађаји позива алата или резоновања у току. Подразумевано је онемогућен и може се
омогућити помоћу `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`; прозор, загревање, минимална стопа и минимални мерљиви излаз
ограничени су нормалним слојем нормализације подешавања отпорности.

Када је омогућен, прекид од стране надзорника примењује се само на активни покушај узводног сервера. Пре
било којих бајтова видљивих клијенту, постојећа путања раног опоравка за исти налог може поново отворити
покушај. Након потврђивања, стрим се никада не репродукује наслепо; само постојећи
безбедни уговор о наставку усред стрима може сашити суфикс. Финализација остаје
једнократна, тако да се обрачун употребе и ослобађање семафора не дуплирају.

---

## 7. Поновно исказивање статуса узводног сервера (погрешно приказане грешке квоте)

**Обим:** један узводни гејтвеј који пријављује привремену исцрпљеност квоте са погрешним HTTP статусом.

**Сврха:** исправити обмањујући статус ПРЕ класификације, тако да низводни потрошачи (механизам за резервне путање, агрегација комбоа, одговор ка клијенту) виде праву природу грешке која се може поновити.

Неки гејтвеји сигнализирају ПРИВРЕМЕНУ исцрпљеност квоте неретентабилним HTTP
статусом. `agentrouter.org` враћа `403` (понекад `400`) са кинеским телом
(`用户额度不足` / `额度不足`) уместо стандардног `429`. Клијенти као што је Claude
Code третирају `403` као трајан и прекидају сесију, а без исправке
би механизам за резервне путање то класификовао као `AUTH_ERROR` уместо као догађај квоте.

**Имплементација:**

- Регистар + механизам за подударање: `open-sse/config/upstreamStatusRestatement.ts` — листа
  правила по провајдеру (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), која се подударају преко `applyStatusRestatement()`.
- Место позива: блок `providerFailure:` у `open-sse/handlers/chatCore.ts`
  (око реда 3654), одмах након што `parseUpstreamError()` рашчлани одговор узводног
  сервера са HTTP статусом грешке (`!providerResponse.ok`), и пре него што се покрене било која
  класификација, тако да сваки низводни потрошач види исправљен
  статус. Грешке уграђене унутар `200` SSE стрима прате одвојену,
  каснију путању рашчлањивања стрима и **нису** обухваћене овом куком данас — познато
  ограничење, још увек није потребно за agentrouter-ов погрешан статус (који
  се појављује као HTTP статус грешке).
- Подобност за поновни покушај: `429` се налази у `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`), тако да поново исказана грешка
  носи стварни прозор за поновни покушај уместо да се појави као мртва `403`.
- Синтетички `60s` `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`)
  је само оно што поново исказани одговор саопштава **клијенту**; то није само
  интерно трајање хлађења/закључавања везе — то се регулише
  одвојено механизмом који заправо обрађује поново исказану грешку
  (ескалирајуће одлагање Connection Cooldown-а, §2, основно `3s` за провајдере са API кључем; или Model Lockout, §3, за провајдере са квотом по моделу као што је
  agentrouter). Рутер може постати подобан за интерни поновни покушај раније
  од прозора од 60s који оглашава клијенту — намерни простор за резерву,
  није грешка.

Трајне грешке (agentrouter-ово `无权访问模型` — нема приступа овом моделу) се
НИКАДА не исказују поново: `excludeMarkers` ставља вето на правило чак и када се `textMarkers` поклопе,
тако да грешка задржава оригинални статус и ништа је не понавља у недоглед. Одговарајуће
правило класификације провајдера
(`agentrouter-model-access-denied` у `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, декларисано основно хлађење од `6h`) консултује
`checkFallbackError` (`open-sse/services/accountFallback.ts`)
_пре_ генеричког раног враћања `FORBIDDEN` за категорију apikey, уз услов
`honorsRuleLockScope(provider)` (#10334 — тренутно ексклузивно за agentrouter преко
дозвољене листе `HONORS_RULE_LOCK_SCOPE_PROVIDERS` у
`providerErrorRules.ts`). Декларисано хлађење од 6h из правила преноси се као
`fallbackResult.baseCooldownMs`, али и даље улази у постојећу
путању закључавања због квоте по моделу (`lockModelIfPerModelQuota()` /
`recordModelLockoutFailure()`, непромењено у #10334 осим извора хлађења): ограничава се на оператерово `mlSettings.maxCooldownMs`
(подразумевано `1_800_000ms` / 30min), као и свако друго закључавање модела, а
_трајно сачуван разлог закључавања_ остаје постојећи тврдо кодиран `"forbidden"`,
не правило `"auth_error"` — само се трајање хлађења поштује од почетка до краја, не
ниска разлога. Сама веза остаје активна;
суседни модели на истој вези нису погођени.

Preformulisane greške kvote (`额度不足`) u produkciji stižu do pravila provajdera (`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope: "connection"`, bez sopstvenog deklarisanog cooldown-a — primenjuje se podrazumevani skalirani backoff sloja perzistencije). Od #10334, `scope` na `ProviderErrorRuleMatch` JESTE iskorišćen s kraja na kraj, ali **samo** za provajdere sa `HONORS_RULE_LOCK_SCOPE_PROVIDERS` liste dozvoljenih (`providerErrorRules.ts` — danas samo `"agentrouter"`, kontrolisano preko `honorsRuleLockScope()`). Za svaki drugi provajder `scope` ostaje informativan, tačno kao pre #10334. `checkFallbackError` izlaže scope pogođenog pravila kao `fallbackResult.ruleScope`; `isAgentrouterConnectionQuotaScope()` (`src/sse/services/auth.ts`) je deljena zaštita koja potvrđuje da je `ruleScope` zaista bezbedno poštovati kao signal koji važi za celu konekciju i sam se oporavlja (scope `"connection"`, reason `quota_exhausted`, nikad `permanent`, nikad `creditsExhausted` — odbrana od budućeg pravila koje bi uparilo scope `"connection"` sa trajnim stanjem naloga). Dva potrošača je pozivaju:

- **Perzistencija** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  umesto da upadne u granu **per-model** blokade za passthrough provajdere
  (agentrouter je `passthroughModels: true` → `hasPerModelQuota()` vraća
  `true`), primenjuje **privremeni cooldown konekcije** — `testStatus: "unavailable"` + `rateLimitedUntil`, nikad terminalni status
  (`credits_exhausted`/`banned`/`expired`) — tako da se konekcija sama oporavi
  kada cooldown istekne, umesto da zahteva ručno resetovanje kredencijala.
  Preskače se za konekcije sa `disableCooling: true` (#2997): to isključivanje
  pada na per-model blokadu (dokumentovan kompromis — vidi komentar u kodu
  iznad grane).
- **Rutiranje combo ciljeva unutar istog zahteva** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): ista zaštita upisuje
  konekciju u `exhaustedConnections` skup u memoriji, pod ključem
  `${provider}:${connectionId}`. Ovo preskače samo preostali cilj U OKVIRU
  ISTOG ZAHTEVA koji _sam već nosi upravo taj `connectionId`_ na sopstvenom
  ciljnom objektu (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` pre pretrage `exhaustedConnections`) — običan combo sa listom
  modela, u kojem susedni ciljevi nemaju sopstveni zakačeni `connectionId` i
  on se razrešava tek pri dispatch-u iz zaglavlja odgovora
  `X-OmniRoute-Selected-Connection-Id`, nikad ne pogađa to podudaranje ključa.
  Za taj uobičajeni slučaj, prava zaštita protiv toga da preostala grana
  ponovo upotrebi upravo iscrpljeni nalog NIJE ovaj Set — to je gore opisani
  sloj perzistencije (`rateLimitedUntil` konekcije je sada u budućnosti) u
  kombinaciji sa ovom istom zaštitom koja za taj neuspeh potiskuje
  `transientRateLimitedProviders` (vidi „Dvofazni dizajn" i komentar koda na
  grani `isAgentrouterConnectionQuotaScope` u `targetExhaustion.ts`): dok je
  taj Set neoznačen, force-allow mehanizam `allowRateLimitedConnection` u
  `combo.ts` (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) se NE
  aktivira za preostale grane tog provajdera, pa se `rateLimitedUntil` filter
  pri izboru kredencijala (`src/sse/services/auth.ts:1238`) normalno poštuje i
  preostala grana ili bira neku drugu, i dalje podobnu agentrouter konekciju,
  ili ne uspeva uz to da nema dostupnih kredencijala — ne probija se silom
  nazad na konekciju koju je ova grana upravo ohladila.

### Dvofazni dizajn: preformulacija statusa, zatim klasifikacija

Preformulacija statusa (`upstreamStatusRestatement.ts`) i pravila klasifikacije
provajdera (`open-sse/config/providerErrorRules.ts`, `providerRuleRegistry`)
su odvojeni registri koji oba ključiraju na id provajdera i tekstualne markere,
ali se izvršavaju na različitim mestima i služe različitim svrhama:
preformulacija prepisuje HTTP status rano u `chatCore.ts`; pravila klasifikacije
biraju fallback `reason` i lock `scope` (`model` / `provider` / `connection`)
unutar `checkFallbackError()` (`open-sse/services/accountFallback.ts`).

Pravila klasifikacije vide pun **tekst** greške (potreban za podudaranje
markera tela poput `额度不足`) samo za provajdere navedene na
`FULL_TEXT_RULE_PROVIDERS` listi dozvoljenih u `providerErrorRules.ts` —
trenutno samo `"agentrouter"`. Za svaki drugi provajder **ugrađenog kataloga**,
`checkFallbackError` predaje `getProviderErrorRuleMatch` samo strukturiranu
grešku (`{code, type}`), što je dovoljno za pravila zasnovana na
zaglavljima/statusu/kodu, ali slepo za markere teksta tela. Pomoćna funkcija
`resolveRuleMatchBody()` vrši ovaj izbor: pun tekst greške za provajdere sa
liste, inače strukturiranu grešku. Dodavanje **ugrađenog** provajdera u
`FULL_TEXT_RULE_PROVIDERS` je eksplicitno uključivanje po provajderu — postoji
kako bi podrazumevana putanja za svaki provajder koji nije na listi ostala
nepromenjena bajt po bajt.

`scope` pravila (`model` / `provider` / `connection`) je odvojeno uključivanje
od `FULL_TEXT_RULE_PROVIDERS`: `checkFallbackError` ga izlaže samo kao
`fallbackResult.ruleScope`, a nizvodni potrošači ga poštuju kao išta više od
informativne oznake samo za provajdere sa `HONORS_RULE_LOCK_SCOPE_PROVIDERS`
liste dozvoljenih u istom fajlu (`gated via honorsRuleLockScope()` — danas
samo `"agentrouter"`). Vidi „Preformulisane greške kvote" iznad za ono što
pogodak `scope: "connection"` stvarno radi kada se provajder nađe na toj listi
dozvoljenih.

**#11104 — pravila koja deklariše operator zaobilaze obe liste dozvoljenih.** Operator može
da deklariše pravilo po dobavljaču u vreme izvršavanja putem `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
bez izmene ovog fajla. Uslovljavanje pravila operatora listama
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` — listama
dozvoljenih namenjenim zaštiti **podrazumevanog** ponašanja ugrađenih pravila kataloga —
učinilo bi mehanizam podešavanja neefektivnim za svakog dobavljača osim onih koji su
već tamo navedeni, pošto je deklarisanje pravila već samo po sebi eksplicitno
opredeljenje (opt-in) operatora. `resolveRuleMatchBody()` i `honorsRuleLockScope()` obe
prvo proveravaju `hasOperatorRuleForProvider()`: dobavljač sa pravilom operatora dobija
sirovi tekst greške i njegov deklarisani `scope` se poštuje, bez obzira na to
da li se takođe pojavljuje na bilo kojoj listi dozvoljenih.

**Poznati propust — `providerRuleRegistry` se nikada ne konsultuje za HTTP 400.**
Grana `BAD_REQUEST` funkcije `checkFallbackError` klasifikuje status 400 u potpunosti
kroz sopstvene nizove obrazaca (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS`, itd. u `accountFallback.ts`) i vraća se pre nego što
se do grane `configuredRule`/`getProviderErrorRuleMatch` iznad nje uopšte dođe.
Ugrađeno pravilo kataloga (ili pravilo operatora) sa `status: 400` je
sintaksno ispravno, ali se nikada neće aktivirati. Nijedno postojeće pravilo danas
ne cilja 400, pa ništa u produkciji nije pogođeno — ali buduće pravilo za 400
zahteva da se ova grana prvo izmeni, što je veća promena od dodavanja pravila
(ponovo klasifikuje 400 za svakog dobavljača koji se već oslanja na ponašanje
nizova obrazaca) i izlazi van opsega dodavanja pravila za jednog dobavljača.

### Dodavanje novog gateway-a koji netačno prijavljuje kvotu

1. Registrujte jedan niz pravila u `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Neka `textMarkers`
   ostanu specifični za dobavljača; nikada nemojte ponovo koristiti generičke engleske
   fraze koje se poklapaju sa `CREDITS_EXHAUSTED_SIGNALS`
   (`open-sse/services/accountFallback.ts`).
2. Opciono registrujte pravila klasifikacije u
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) da biste izabrali
   pravi opseg zaključavanja (`connection` za kvotu na nivou naloga, `model` za
   greške po modelu). Ovaj korak stupa na snagu u produkciji samo za
   dobavljače čija pravila zahtevaju pun tekst greške (markere tela): dodajte
   id dobavljača u `FULL_TEXT_RULE_PROVIDERS` u istom fajlu — inače
   `checkFallbackError` pravilu uvek prosleđuje samo strukturiranu
   `{code, type}` grešku i pravilo zasnovano na tekstu tela nikada neće
   poklopiti stvarni saobraćaj. Pravilima koja se poklapaju isključivo na osnovu
   `status`/`headers` (kao Opencode-ova ili Minimax-ova) ovo opredeljenje
   nije potrebno. Zasebno, ako pravilo deklariše
   `scope: "connection"` i namera je stvarni cooldown na nivou konekcije
   plus preskakanje combo-a u okviru istog zahteva (ne samo informativna
   oznaka), dodajte id dobavljača u `HONORS_RULE_LOCK_SCOPE_PROVIDERS`
   u istom fajlu — to je ono što kontroliše potrošnju u stilu
   `isAgentrouterConnectionQuotaScope()` u `markAccountUnavailable()`
   (`src/sse/services/auth.ts`) i `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); bez toga, `scope`
   i dalje protiče kroz `fallbackResult.ruleScope`, ali ništa ne deluje na njega.
3. Dodajte jedinične testove koji prate `tests/unit/upstream-status-restatement.test.ts`
   i `tests/unit/agentrouter-error-rules.test.ts` (uključujući
   zaštite koje osiguravaju da rezultat nije permanent odnosno creditsExhausted,
   i — ako dobavljač zahteva listu dozvoljenih — test koji potvrđuje da
   `resolveRuleMatchBody()` vraća pun tekst samo za tog dobavljača).

Nisu potrebne izmene u `chatCore.ts`, `classifyError` ili combo.

#### Egress-grupisano zaključavanje (#10880)

Dobavljači u `EGRESS_BUCKETED_LOCK_PROVIDERS` (opencode porodica) tretiraju se
kao upstream grupisan po IP adresama (opencode besplatni nivo je grupisan po IP,
a ne po nalogu — vidi #9611): status 429 klasifikovan kao `quota_exhausted`
**ili** `rate_limit_exceeded` obustavlja (cooldown) svaku konekciju iz porodice na
listi dozvoljenih čija poslednja poznata egress IP adresa odgovara adresi konekcije
koja je otkazala, pre nego što rotacija može da ih proba — čime se izbegava
N-1 zagarantovano neuspešnih upstream poziva (ista šema kao #10460/#10525).
`rate_limit_exceeded` je uključen namerno: na putanji `markAccountUnavailable`
pravila specifična za opencode se nikada ne poklapaju (nema zaglavlja/tela
prosleđenih funkciji `checkFallbackError`, opencode nije u `FULL_TEXT_RULE_PROVIDERS`),
pa se 429 čije telo nosi tekst o kvoti pretplate ("monthly usage limit
reached") klasifikuje kao `quota_exhausted` preko fallback-a za tekst kvote
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; cooldown od 1h) pre nego što
se do pravila `status_429` uopšte dođe — dok se 429 bez teksta kvote (obično
ograničavanje stope) klasifikuje preko pravila `status_429` kao
`rate_limit_exceeded` i i dalje obustavlja IP porodicu. Za dobavljača na listi
dozvoljenih, ograničenje stope grupisano po IP adresi isti je signal kao
iscrpljena kvota. Iskrena ograničenja:

- **Најбоље могуће (best-effort)**: катанац разрешава последњу познату `egress_ip`
  везе из `proxy_logs` (прозор од 24h, синхроно, без кеша). Хладан кеш (egress
  IP никад није испитан) или нема реда → веза која је отказала се и даље
  охлађује на грани (забележено као до сада), само се ниједан сродник не закључава.
- **Никада терминално**: период хлађења је обнављајући прозор квоте
  (`testStatus: "unavailable"`); трајно стање се никада не изводи из
  сигнала на нивоу IP-а. Везе са `disableCooling` у потпуности прескачу грану.
- **Гранулярност катанца се мења за фамилију на дозвољеној листи**: ово је
  промена обима, не само оптимизација сродника. opencode је `passthroughModels`
  провајдер, па је пре ове гране 429 производио блокаду по МОДЕЛУ; сада
  производи хлађење везе — укључујући и за оператера који покреће једну
  везу без икаквог сродника. То је гранулярност коју opencode табела правила
  већ проглашава исправном (`scope: "connection"`,
  `providerErrorRules.ts`), а која до сада није поштована јер opencode није у
  `HONORS_RULE_LOCK_SCOPE_PROVIDERS`. Грана сама уписује хлађење везе која је
  отказала + `backoffLevel`, огледајући грану agentrouter на нивоу везе, и
  враћа се — блокада по моделу и генерички пут испод се никада не достижу.
- **Комбиновано укључено**: као и грана agentrouter, обим намерно
  занемарује поништење `persistUnavailableState`/`isCombo` које комбиновани
  позивалац примењује на 429. Блокада по моделу није слабији облик овог обима,
  већ погрешна јединица: не говори ништа о исцрпљеној IP адреси, па би
  комбинована ротација наставила да троши по један загарантовано неуспешан позив
  по сроднику.
- **Безбедност сродника**: сродник који је већ терминалан (banned/credits_exhausted)
  или већ у дужем хлађењу се никада не преписује.
- **Ексклузивна дозвољена листа**: проширивање `EGRESS_BUCKETED_LOCK_PROVIDERS` је
  експлицитна одлука власника; без генеричког повезивања (образац #10334/#10419).
  Упит сродника везује ту исту дозвољену листу уместо да је понавља као SQL
  литерал, па проширивање остаје промена од једног реда.
- **Ротација egress IP, у оба смера**: прозор претраге (24h) је далеко
  шири од TTL-а кеша egress IP (5 мин), па је „последња позната IP" историја,
  а не тренутно стање. Ако се прокси везе ротирао унутар прозора, катанац може
  да **промаши** заиста дељену IP (забележена IP је нова,
  неисцрпљена) — и симетрично може да **охлади сродника који се у међувремену
  ротирао даље** од исцрпљене IP. Други случај кошта тог сродника један
  прозор хлађења; оба су прихваћена ограничења најбољег могућег приступа
  претраге засноване на историји.
- **Цена**: два ограничена скенирања `proxy_logs` (филтрирана по прозору преко
  `idx_pl_timestamp`), само на учесталости 429. Без новог индекса (миграција 134
  YAGNI). Мерено на копији базе са стварним саобраћајем умерене величине;
  инстанца високог пропусног опсега држи пропорционално више редова у истом прозору.

---

## Ostale funkcije otpornosti

- **20 strategija rutiranja** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — pogledajte [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Rutiranje svesno reseta** (v3.8.0) — daje prioritet konekcijama prema vremenu reseta kvote.
- **Degradacija pozadinskog režima** — Responses API `background: true` se degradira na sinhroni režim uz upozorenje.
- **Dinamičko otkrivanje ograničenja alata** — povlači provajdere kada se dostigne ograničenje broja alata.
- **Hitni rezervni mehanizam** — kontroliše ga `OMNIROUTE_EMERGENCY_FALLBACK`; operatori ga mogu pregaziti sa stranice Feature Flags bez restartovanja.

---

## Otklanjanje grešaka

- Weighted combo odgovara sa `503 all_targets_cooling_down` (`Retry-After` postavljen, `diagnostics.excluded` navodi svaki cilj sa `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable`) → pool je konfigurisan i povezan, svaki cilj je samo isključen tajmerom otpornosti; upozorenje `[COMBO] Weighted selection: every target excluded before dispatch — …` navodi razloge i preostale sekunde. `404 no_executable_targets` iz istog komboa znači da nijedan tajmer otpornosti nije bio uključen (nema ništa za izvršavanje, ili svaki nalog nije prošao proveru dostupnosti). Izgrađeno u `open-sse/services/combo/pinRecovery.ts` na osnovu isključenja prikupljenih u `targetResolution.ts`.
- Svi ključevi za provajdera preskočeni → proverite i stanje circuit breaker-a I `rateLimitedUntil`/`testStatus` svake konekcije.
- Provajder trajno isključen nakon prozora reseta → kod čita sirovo `state` umesto `getStatus()`/`canExecute()`.
- Jedan ključ otkazuje, ostali bi trebalo da rade → dajte prednost connection cooldown-u nad circuit breaker-om.
- Samo jedan model otkazuje → dajte prednost model lockout-u nad connection cooldown-om.
- Stanje bi trebalo da se samo oporavi, ali se ne oporavlja → proverite vremensku oznaku u budućnosti + putanju čitanja koja osvežava isteklo stanje. Trajni statusi zahtevaju ručne izmene.

---

## Stanje u vreme izvršavanja — brza referenca za agenta

> Doslovno preneto iz `AGENTS.md` → "Resilience Runtime State" (PR #12743) kako bi
> vodič za agenta ostao ispod budžeta konteksta od 40k. Ovo je zgusnuti prikaz gornjih
> odeljaka okrenut agentu; numerisani odeljci ostaju puna referenca.

OmniRoute ima tri povezana, ali različita mehanizma za privremene otkaze. Držite njihove
opsege odvojenima prilikom otklanjanja grešaka u ponašanju rutiranja. Pogledajte
[dijagram otpornosti u 3 sloja](../diagrams/exported/resilience-3layers.svg)
(izvor: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
za mapu pogodnu za brzi pregled.

### Circuit breaker provajdera

**Opseg**: ceo provajder, npr. `glm`, `openai`, `anthropic`.

**Svrha**: zaustaviti slanje saobraćaja provajderu koji stalno otkazuje na
nivou upstream-a/usluge, kako jedan neispravan provajder ne bi usporavao svaki zahtev.

**Implementacija**:

- Osnovna klasa: `src/shared/utils/circuitBreaker.ts`
- Povezivanje chat gate-a/izvršavanja: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API statusa u vreme izvršavanja: `src/app/api/monitoring/health/route.ts`
- Deljeni omotači: `open-sse/services/accountFallback.ts`
- Tabela trajnog stanja: `domain_circuit_breakers`

**Stanja** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: normalan saobraćaj je dozvoljen.
- `DEGRADED`: zona ranog upozorenja — otkazi su prešli prag degradacije, ali još ne i
  prag prekidača; saobraćaj i dalje teče, kontrolne table prikazuju upozorenje. Važeći
  test konekcije ili miran prozor bez novih otkaza vraća ga u `CLOSED`
  (`docs/architecture/RESILIENCE_GUIDE.md` sadrži taj prozor).
- `OPEN`: provajder je privremeno blokiran; pozivaoci dobijaju odgovor
  provider-circuit-open ili combo rutiranje preskače na drugi cilj.
- `HALF_OPEN`: tajmaut reseta je istekao; dozvoljava se probni zahtev. Uspeh zatvara
  prekidač, neuspeh ga ponovo otvara.

**Podrazumevane vrednosti** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, koristi se preko
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` u `src/lib/resilience/settings.ts` →
`getCircuitBreaker(provider, …)` u `src/sse/handlers/chatHelpers.ts`). Prekidač za ceo
provajder radi na osnovu `circuitBreakerThreshold` / `circuitBreakerReset`:

| Profil    | degradira se na | otvara se na (`circuitBreakerThreshold`) | reset (`circuitBreakerReset`) |
| --------- | --------------: | ---------------------------------------: | ----------------------------: |
| OAuth     |             `5` |                                      `8` |                         `60s` |
| API ključ |             `7` |                                     `12` |                         `30s` |
| Lokalni   |      (izvedeno) |                                      `2` |                         `15s` |

`PROVIDER_PROFILES` takođe definiše `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (15/30/5 min) i `providerCooldownMs` (5/10/1 min): oni pokreću
**kapiju prozora opcionog globalnog Provider Cooldown-a** (`PROVIDER_COOLDOWN_ENABLED`, podrazumevano
isključeno) — unos na nivou provajdera u `open-sse/services/providerCooldownTracker.ts` računa se kao
hlađenje tek nakon `providerFailureThreshold` otkaza unutar `providerFailureWindowMs`, a zatim
se hladi tokom `providerCooldownMs`. Oni NISU pragovi aktivnog prekidača — nemojte ih podešavati
očekujući ponašanje prekidača. Svaka podrazumevana vrednost može se pregaziti kroz
env varijable `OMNIROUTE_PROVIDER_BREAKER_*` i `OMNIROUTE_CIRCUIT_BREAKER_*`;
referentna tabela tačna za vreme izvršavanja nalazi se u `docs/architecture/RESILIENCE_GUIDE.md`.

Samo statusi otkaza na nivou provajdera trebalo bi da aktiviraju prekidač provajdera:

```ts
(408, 500, 502, 503, 504);
```

Nemojte aktivirati prekidač celog provajdera za uobičajene greške naloga/ključa/modela
kao što je većina slučajeva `401`, `403` ili `429`. One obično pripadaju connection
cooldown-u ili model lockout-u. Generički `403` provajdera sa API ključem trebalo bi da
bude oporavljiv, osim ako nije klasifikovan kao terminalna greška provajdera/naloga.

Prekidač koristi lenji oporavak, a ne pozadinski tajmer. Kada `OPEN` istekne, čitanja poput `getStatus()`, `canExecute()` i `getRetryAfterMs()` osvežavaju stanje na `HALF_OPEN`, tako da kontrolne table i graditelji combo kandidata ne nastavljaju da zauvek isključuju provajdera čije je ograničenje isteklo.

### Hlađenje konekcije

**Opseg**: jedna konekcija/nalog/ključ provajdera.

**Svrha**: privremeno preskočiti jedan neispravan ključ/nalog, dok druge konekcije za istog provajdera nastavljaju da opslužuju zahteve.

**Implementacija**:

- Putanja za upis/ažuriranje: `src/sse/services/auth.ts::markAccountUnavailable()`
- Izbor/filtriranje naloga: `src/sse/services/auth.ts::getProviderCredentials...`
- Izračunavanje hlađenja: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Podešavanja: `src/lib/resilience/settings.ts`

Važna polja na konekcijama provajdera:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

Tokom izbora naloga, konekcija se preskače dok:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

Hlađenja su takođe lenja: kada `rateLimitedUntil` bude u prošlosti, konekcija ponovo postaje podobna. Pri uspešnoj upotrebi, `clearAccountError()` briše `testStatus`, `rateLimitedUntil`, polja greške i `backoffLevel`.

Podrazumevano ponašanje hlađenja konekcije:

- Osnovno OAuth hlađenje: `5s`.
- Osnovno hlađenje za API ključ: `3s`.
- API ključ `429` treba da preferira nagoveštaje za ponovni pokušaj od uzvodnog servisa (`Retry-After`, reset zaglavlja ili tekst o resetovanju koji se može parsirati) kada su dostupni.
- Ponovljeni otkazi koji se mogu povratiti koriste eksponencijalni backoff:

```ts
baseCooldownMs * 2 ** failureIndex;
```

Zaštita od thundering-herd efekta sprečava da istovremeni otkazi na istoj konekciji više puta produžavaju hlađenje ili dvostruko uvećavaju `backoffLevel`.

Terminalna stanja nisu hlađenja. `banned`, `expired` (koje postaje terminalno tek nakon N ograničenih ponovnih pokušaja preko `EXPIRED_RETRY_MAX`) i `credits_exhausted` treba da ostanu nedostupni dok se kredencijali/podešavanja ne promene ili ih operator ne resetuje. Nemojte prepisivati terminalna stanja prolaznim stanjem hlađenja.

### Blokada modela

**Opseg**: provajder + konekcija + model.

**Svrha**: izbeći onemogućavanje cele konekcije kada je samo jedan model nedostupan ili ograničen kvotom za tu konekciju.

Primeri:

- Provajderi sa kvotom po modelu koji vraćaju `429`.
- Lokalni provajderi koji vraćaju `404` za jedan model koji nedostaje.
- Neuspesi dozvola za režim/model specifični za provajdera, kao što su odabrani Grok režimi.

Blokada modela se nalazi u `open-sse/services/accountFallback.ts` i omogućava da ista konekcija nastavi da opslužuje druge modele.

### Smernice za otklanjanje grešaka

- Ako su svi ključevi za provajdera preskočeni, proverite i stanje prekidača provajdera i `rateLimitedUntil`/`testStatus` svake konekcije.
- Ako provajder izgleda trajno isključen nakon prozora za resetovanje, proverite da li kod čita sirovo `state` umesto da koristi `getStatus()`/`canExecute()`.
- Ako jedan ključ provajdera ne uspe, a drugi bi trebalo da rade, dajte prednost hlađenju konekcije u odnosu na prekidač provajdera.
- Ako ne uspe samo jedan model, dajte prednost blokadi modela u odnosu na hlađenje konekcije.
- Ako stanje treba da se samo oporavi, treba da ima vremensku oznaku u budućnosti/reset timeout i putanju čitanja koja osvežava isteklo stanje. Trajni statusi zahtevaju ručne izmene kredencijala ili konfiguracije.

---

## TLS fingerprinting i prikrivanje (stealth)

Prikrivanje specifično za provajdera (JA3/JA4, CCH, obfuskacija) dokumentovano je zasebno — pogledajte `docs/security/STEALTH_GUIDE.md` (git; nije kompajlirano u `/docs`).

---

## Testiranje otpornosti (Faza 8 · Blok C)

Pored jediničnih testova za logiku otpornosti, tri testa izlažu runtime stvarnim
uslovima stresa/otkaza (svi su integracioni/noćni — nijedan ne blokira PR-ove):

| Test        | Šta radi                                                                                                                                                                                             | Pokretanje                             |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Chaos       | Lažni upstream čvor ubacuje stvarno kašnjenje/reset/timeout/503; proverava da se prekidač kola (circuit breaker) otvara i oporavlja i da `checkFallbackError` klasifikuje 503 kao povratni fallback. | `RUN_CHAOS_INT=1 npm run test:chaos`   |
| Heap-growth | ~500 tokova po `createSSEStream` pod `--expose-gc`; pada ako hip preraste zadati plafon (OOM zaštita #3069).                                                                                         | `npm run test:heap`                    |
| k6 soak     | Trajno opterećenje na `/api/monitoring/health`; pragovi za p95/greške.                                                                                                                               | `k6 run tests/load/k6-soak.js` (noćno) |

Orkestrirano putem `.github/workflows/nightly-resilience.yml` (cron + dispatch). U
podrazumevanom `test:integration`, chaos i heap testovi se sami preskaču (bez `RUN_CHAOS_INT`/`--expose-gc`).

---

## Pogledajte takođe

- [Vodič kroz arhitekturu](./ARCHITECTURE.md) — Arhitektura sistema i interne komponente
- [Korisnički vodič](../guides/USER_GUIDE.md) — Provajderi, kombinacije, CLI integracija
- [Auto-Combo Engine](../routing/AUTO-COMBO.md) — Bodovanje po 16 faktora, paketi režima
