# Resilience Guide (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute má tři odlišné, ale vzájemně související mechanismy odolnosti. Každý má jiný rozsah a účel. Při ladění chování směrování je udržujte oddělené.

![Třívrstvý model odolnosti](../diagrams/exported/resilience-3layers.svg)

> Zdroj: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Circuit breaker poskytovatele

**Rozsah:** celý poskytovatel (např. `glm`, `openai`, `anthropic`).

**Účel:** přestat posílat provoz poskytovateli, který opakovaně selhává na úrovni upstreamu/služby.

**Implementace:**

- Základní třída: `src/shared/utils/circuitBreaker.ts`
- Zapojení: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API stavu: `GET /api/monitoring/health`
- API pro reset: `POST /api/resilience/reset`
- Obalové vrstvy: `open-sse/services/accountFallback.ts`
- Databázová tabulka: `domain_circuit_breakers`

**Stavy:**

- `CLOSED` — normální provoz je povolen
- `DEGRADED` — provoz je stále povolen, ale zvýšená míra selhání poskytovatele je sledována; vrací se do stavu `CLOSED` po dostatečném počtu úspěchů, po úspěšném testu připojení, nebo po uplynutí nejdelší doby podržení stavu `OPEN` pro poslední druh selhání (jeho hodnota `cooldownByKind`, jinak `resetTimeout`, × `maxBackoffMultiplier`, minimálně jeden cooldown) bez nového selhání
- `OPEN` — poskytovatel je dočasně blokován; combo směrování jej přeskakuje
- `HALF_OPEN` — časový limit resetu uplynul; zkušební požadavek je povolen

**Konfigurovatelné výchozí hodnoty (`open-sse/config/constants.ts`, zpřístupněné v Dashboard → Settings → Resilience):**

| Třída   | Degradace při | Otevření při | Časový limit resetu |
| ------- | ------------- | ------------ | ------------------- |
| OAuth   | 5 selháních   | 8 selháních  | 60 s                |
| API-key | 7 selháních   | 12 selháních | 30 s                |
| Local   | odvozeno      | 2 selháních  | 15 s                |

`degradationThreshold` řídí, kdy poskytovatel vstoupí do stavu `DEGRADED`; `failureThreshold` řídí, kdy se otevře a je přeskočen. Profily lokálních poskytovatelů zatím nejsou na stránce nastavení Resilience zpřístupněny.

**Aktivační kódy:** pouze stavové kódy na úrovni poskytovatele `[408, 500, 502, 503, 504]`. NEAKTIVOVAT při chybách na úrovni účtu (většina 401/403/429 — ty spadají pod cooldown nebo lockout).

**Líné obnovení:** když vyprší `OPEN`, metody `getStatus()`, `canExecute()`, `getRetryAfterMs()` obnoví stav na `HALF_OPEN`. Tytéž operace čtení (a případné další selhání) převedou zastaralý stav `DEGRADED` zpět na `CLOSED`. Není potřeba žádný časovač na pozadí.

---

### Volitelný globální cooldown poskytovatele (okenní brána)

Čtvrtá, **volitelná** vrstva (`PROVIDER_COOLDOWN_ENABLED`, výchozí **vypnuto**) uchovává
paměť selhávajících poskytovatelů napříč požadavky v
`open-sse/services/providerCooldownTracker.ts`. Využívá ji rozlišování cílů
combo směrování, takže po sobě jdoucí combo požadavky přestanou opakovaně zkoušet
poskytovatele, který právě selhal. Záznamy na úrovni poskytovatele respektují
okenní bránu `PROVIDER_PROFILES`:

| Profil  | aktivace po (`providerFailureThreshold`) | během (`providerFailureWindowMs`) | chladnutí po (`providerCooldownMs`) |
| ------- | ---------------------------------------: | --------------------------------: | ----------------------------------: |
| OAuth   |                                     `10` |                           `15min` |                              `5min` |
| API key |                                     `15` |                           `30min` |                             `10min` |

Pod prahem poskytovatel **není** považován za chladnoucího; úspěch okno vymaže.
Záznamy na úrovni připojení (`provider:connectionId`) si místo toho uchovávají
exponenciální backoff `minRetryCooldownMs → maxRetryCooldownMs`. Přepsání:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Regresní test: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Cooldown připojení

**Rozsah:** jedno připojení/účet/klíč poskytovatele.

**Účel:** přeskočit jeden vadný klíč, zatímco ostatní připojení téhož poskytovatele dál obsluhují požadavky.

**Implementace:**

- Označení nedostupnosti: `src/sse/services/auth.ts::markAccountUnavailable()`
- Výběr: `getProviderCredentials*` ve stejném souboru
- Výpočet cooldownu: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Nastavení: `src/lib/resilience/settings.ts`

**Pole pro každé připojení:**

- `rateLimitedUntil` — časová značka, do kdy cooldown vyprší
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — počítadlo exponenciálního backoffu

**Výchozí cooldowny:**

- Základ pro OAuth: 5 s
- Základ pro API klíč: 3 s
- API klíč 429: upřednostňuje upstreamové hlavičky `Retry-After`/reset případně zpracovatelný text resetu
- Backoff: `baseCooldownMs * 2 ** failureIndex`

**Ochrana proti thundering herd:** zabraňuje souběžným selháním příliš prodlužovat cooldown nebo dvakrát navyšovat `backoffLevel`.

**Odpovědi 429 kvůli limitu souběžnosti nešplhají po žebříku backoffu.** Odpověď `429`, jejíž tělo hlásí
limit souběžnosti ("too many concurrent requests", "concurrency limit", "parallel request
limit", GLM `并发数过高`), znamená, že účet je v pořádku, jen je zaneprázdněný.
`checkFallbackError()` vrací důvod `concurrency_limited`: okamžitě přepnout na další
připojení, toto ochladit na pevnou dobu `CONCURRENCY_LIMIT_COOLDOWN_MS` (1 s) nebo podle
nápovědy pro opakování z upstreamu, ponechat `backoffLevel` beze změny a nastavit `skipProviderBreaker`.
Explicitní tělo s kvótou má stále přednost, takže tělo, které zároveň odpovídá vzoru kvóty,
zůstává verdiktem kvóty. Detekce: `looksLikeConcurrencyLimit()` v `src/shared/utils/classify429.ts`;
verdikt: `open-sse/services/accountFallback/concurrencyLimit429.ts`. Funkce `classify429()` (typ
`FailureKind` breakeru) je beze změny a pro tato těla stále hlásí `rate_limit`.

**Zaseknutí obsahu streamu účet neochlazuje.** Když se watchdog zaseknutí obsahu
(`open-sse/utils/streamHandler.ts`) vzdá streamu, který včas neposlal žádný výstup modelu,
`markAccountUnavailable()` zaznamená chybu na připojení, ale nenastaví žádný
cooldown: zaseknutí se týká daného požadavku, nejčastěji dlouhého kola uvažování,
které ještě nevydalo žádný výstup. Provozovatelé mohou ochlazování znovu zapnout pomocí
`resilienceSettings.streamStallCooldown.enabled` (výchozí `false`).

**Reasoning rámce restartují rozpočet zaseknutí obsahu.** Reasoning model může před svým
prvním viditelným tokenem přemítat celé minuty: Claude streamuje rámce `thinking_delta`,
jejichž text uvažování může být prázdný, a Responses API streamuje jednu reasoning
položku za druhou. `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) tyto
rámce rozpozná a watchdog při každém z nich restartuje svůj rozpočet místo zrušení
kola. Stále však nejde o výstup modelu, takže kolo, které skončí pouhým uvažováním, je
nadále hlášeno jako prázdné, a kolo, které přestane uvažovat a posílá jen heartbeaty,
stále spustí watchdog.

Binární rámce `reasoningContentEvent` od Kira s neprázdným podpisem zachovávají tuto
aktivitu uvažování skrz executor jako prázdnou deltu `reasoning_content`. Podpis se dál
nepředává. Metadata, neúplné rámce a prázdné podpisy rozpočet obsahu nerestartují;
nadále platí nezávislý timeout aktivního streamu a zrušení ze strany klienta
(`open-sse/executors/kiro/reasoning.ts`).

**Terminální stavy (NE cooldowny):**

- `banned` — nastavuje detekce zakázaných klíčových slov / zákazu účtu (viz [BAN_DETECTION](../security/BAN_DETECTION.md)) a také tři po sobě jdoucí odmítnutí jednotlivých požadavků z upstreamu (`request_rejected`, např. Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); jediné odmítnutí připojení pouze ochladí
- `expired` (do terminálního stavu přechází až po omezeném počtu opakování — `EXPIRED_RETRY_MAX = 3` s exponenciálním backoffem — takže přechodné chyby OAuth se mohou samy napravit, než je účet trvale deaktivován)
- `credits_exhausted`

Tyto stavy přetrvávají, dokud se nezmění přihlašovací údaje nebo je operátor neresetuje. Nepřepisujte terminální stavy přechodným stavem cooldownu.

**Líné zotavení:** když `rateLimitedUntil` vyprší, připojení se opět stává způsobilým. Při úspěšném použití `clearAccountError()` vymaže všechna chybová pole.

### Limit využití Claude OAuth: linka s nižší prioritou + reset limitu relace

**Rozsah:** jedno připojení předplatného Claude (OAuth). Obě funkce jsou **opt-in pro každé
připojení** (Upravit připojení → sekce Claude → `lowPriorityMode` / `autoLimitReset` v
`providerSpecificData`, obě ve výchozím stavu vypnuté) a zrcadlí příkazy `/low-priority` a
`/limit-reset` z Claude Code (wire kontrakt zachycený z Claude Code 2.1.263).

**Implementace:**

- Stavový automat + klasifikace odpovědí: `open-sse/services/claudeLowPriority.ts`
- Klient pro stav/uplatnění resetu: `open-sse/services/claudeLimitReset.ts`
- Hook executoru (vkládání hlaviček + opakování na stejném účtu): `open-sse/executors/base.ts::execute()`
- Perzistence opt-in: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**Spouštěč:** pětihodinový limit využití — odpověď `429`, jejíž hlavičky nesou
`anthropic-ratelimit-unified-status: rejected` a, pokud je účet způsobilý,
`anthropic-ratelimit-unified-slow-offer: treatment`. Před touto první odpovědí 429 z limitu se
nic neodesílá; nárazová 429 bez unified hlaviček prochází normální cestou cooldownu.

**Linka s nižší prioritou** (`lowPriorityMode`):

- Při wall 429 executor přijme nabídku a okamžitě zopakuje požadavek na **stejný**
  účet s `anthropic-usage-limit: slow`; pruh (lane) zůstává aktivní až do ohlášeného
  `anthropic-ratelimit-unified-reset` (+60 s tolerance) a každý požadavek v tomto okně nese
  danou hlavičku. Zachycená 429 se nikdy nedostane do `handleChatCore`, takže spojení
  **není** uvedeno do cooldownu a není rotováno pryč.
- `anthropic-ratelimit-unified-slow-status` v pozdějších odpovědích: `active` / `not_needed`
  ponechají pruh; `slot_busy` (429) nebo `529` čekají na serverové
  `anthropic-ratelimit-unified-slow-retry-after` (výchozí 20 s, omezení 5–600 s, ±30% jitter)
  a zopakují požadavek, omezeno `anthropic-ratelimit-unified-slow-max-wait` (výchozí 20 min, omezení
  1 min–6 h) — po překročení pruh skončí a 10minutový cool-off zablokuje opětovné přijetí. Čekání
  je navíc omezeno tím, co zbývá z vlastního upstream-start timeoutu požadavku
  (`resolveFetchStartTimeout`, výchozí 10 min) mínus 5s rezerva: bez tohoto omezení by
  výchozí 20minutové max-wait přežilo požadavek a spánek by byl přerušen
  uprostřed čekání, což by vyvolalo `TimeoutError` místo elegantního ukončení `max_wait` + cool-off.
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, přetočení 5h okna, nebo
  `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (což jej ukončí jako
  `extra_usage` při jakémkoli stavu, protože placený overage nyní pokrývá wall) ukončí pruh; odpověď
  pak plyne do normální cesty cooldownu. `budget_exhausted` se pamatuje až do
  ohlášeného resetu rozpočtu (≤ 8 dní).
- Kontrola wall probíhá až po vlastních opakováních v rámci pokusu řízených chybou 400, která provádí
  executor (úprava kontextu, omezení thinking/effort, automatické učení parametrů), takže wall 429, která se objeví pouze při
  jednom z těchto opakování, je stále zachycena, místo aby se dostala do cesty cooldownu.
- Stav je v paměti pro každé spojení (restart stojí jednu wall 429 navíc pro opětovné přijetí).

**Reset limitu relace** (`autoLimitReset`, zkouší se před pruhem, když jsou oba zapnuté):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → blok `juniper_tide`;
  když `arm: "reset"` a `available: true`,
  `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` s
  `{ "program": "juniper_tide" }` (UUID organizace z
  `providerSpecificData.organizationUUID`, fallback na bootstrap).
- `result: reset|not_limited` → požadavek se zopakuje plnou rychlostí (bez slow hlavičky).
  `already_used` / `not_offered` si memoizují `next_available_at` (výchozí jeden týden); jakékoli
  selhání vede k odkladu 15 minut. Reset je jednou týdně a stále se počítá do
  týdenního limitu.

Regresní pojistky: `tests/unit/claude-low-priority-mode.test.ts`,
`tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`.

### Afinita relace (#7274)

**Rozsah:** jedna klientská relace (hlavička `X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`) připnutá k jednomu spojení, pro **jakéhokoli** poskytovatele.

**Účel:** udržet vícekolového agenta (Claude Code, aider, vlastní agenti) na stejném účtu napříč požadavky, čímž se snižuje ztráta kontextu mezi účty a opakované cold-start 429 u poskytovatelů se stavem relace na účet.

**Implementace:**

- Rozlišení TTL: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Výběr/vytvoření pinu: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Extrakce hlavičky (obecná, jakýkoli poskytovatel): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Tabulka perzistentních pinů: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Nastavení: `sessionAffinityTtlMs` (globální TTL v ms, `0` vypíná) — `src/lib/db/settings.ts`. Přejmenováno z Codex-only `codexSessionAffinityTtlMs` migrací `124_generic_session_affinity_ttl.sql`, která přenáší jakékoli dříve nakonfigurované Codex TTL jako nový výchozí.

Před #7274 se `resolveSessionAffinityTtlMs()` natvrdo vracelo `0` pro každého poskytovatele kromě `codex`, takže nastavení TTL (a hlavičky relace) neměly jinde žádný účinek, přestože mechanisms pinování a extrakce hlaviček už byly na poskytovateli nezávislé. Oprava odstranila tento předčasný return; TTL se nyní jednotně uplatňuje na každého poskytovatele, jakmile je globálně nastaveno nad `0`.

Tyto tři hlavičky afinity relace se nikdy nepředávají upstream — executori sestavují své vlastní upstream hlavičky od nuly, místo aby předávali klientské hlavičky, takže to zůstává pouze interním korelačním id.

### Exkluzivní lease spojení spravované relace

**Rozsah:** jeden aktivní spravovaný HTTP klient/relace vlastní jedno vhodné spojení OmniRoute.

**Účel:** poskytnout trvalé exkluzivní vlastnictví spojení pro klienty, kteří potřebují pevnou
směrovací hranici napříč požadavky. To se liší od afinity relace, což je měkká preference
kontinuity: exkluzivní lease uchovává stav životního cyklu v SQLite, vynucuje globální jedinečnost
aktivního vlastníka a aktivního spojení a odmítá zastaralou generaci před odesláním poskytovateli.

Funkce je opt-in pro každý API klíč. Spravovaný klíč musí mít scope `lease:exclusive` a
explicitní neprázdný seznam `allowedConnections`. Jakýkoli HTTP klient může použít endpoint
životního cyklu; není vyžadován název klienta, user-agent, poskytovatel, metoda OAuth ani model.
Lease vlastní spojení, nikoli model, takže změna modelu zachová vazbu, dokud spojení zůstává běžně
vhodné. Normální pravidla pro model, kvótu, zdraví, cooldown a allowlist zůstávají autoritativní a mohou
tuto stejnou generaci přesunout na jiné volné vhodné spojení.

Životní cyklus je `POST /api/v1/session-leases` s JSON akcemi `acquire`, `renew` a `release`.
Řízené inferenční požadavky předkládají neprůhlednou hodnotu `X-OmniRoute-Lease-Owner` a přesnou
`X-OmniRoute-Lease-Generation`. Vlastník používá `vlo_` následované 43 znaky base64url; ukládá se
pouze jeho SHA-256 hash. Každý finální fence odeslání také váže autentizované ID API klíče a ID
aktivního připojení. Řídicí hlavičky lease se odstraňují z logů, uchovávaných snímků požadavků
a hlaviček upstream executoru.

Pokud má běžné směrování způsobilé řízené kandidáty, ale každý volný kandidát je obsazen cizím
aktivním lease, OmniRoute vrátí HTTP `429`, kód lease-capacity-unavailable, stav
waiting-for-capacity a omezenou hodnotu `Retry-After` odvozenou z nejdřívější relevantní expirace.
Běžná prázdná způsobilost není konkurence o lease a zachovává svou stávající sémantiku chyb směrování.

Související mechanismy zůstávají oddělené:

- Obsazení relace OAuth je měkké rozdělení lokální v rámci procesu pro účty OAuth.
- Semaforо účtů udělují povolení k souběžnosti požadavků a končí po dokončení požadavku.
- Exkluzivní řízené lease relací jsou trvalé vlastnictví životního cyklu s generačním fence.

---

## 3. Blokování modelu (Model Lockout)

**Rozsah:** trojice provider + connection + model.

**Rozsah klíče podle stavu:** stav chyby rozhoduje, ke kterému klíči se blokování zapíše
(`resolveLockoutScope()` v `open-sse/services/accountFallback/exactModelLock.ts`):

- `429` / `403` / `402` — signál kvóty nebo oprávnění — zablokuje se **rodina kvót**:
  pro codex celý rozsah `codex` / `spark` (každý model `gpt-5*` daného
  připojení), pro ostatní providery `getQuotaScopedModelForProvider()`.
- `404` zablokuje pouhý model (`getModelLockKey()` zúží `not_found`).
- Jakýkoli jiný stav — transportní/serverové chyby `5xx` a vlastní syntetizovaný
  `502` z validace kvality v OmniRoute — zablokuje pouze **přesnou**
  trojici provider/connection/model. Vadný stream na jednom modelu není důkazem
  o kvótě účtu; před tímto pravidlem jediná prázdná odpověď na
  `codex/gpt-5.6-luna` vyřadila z routingu všechny modely `gpt-5*` daného připojení
  na 2–30 min (eskalující), zatímco jejich kvóta zůstala nedotčena.
- Explicitní volba `scope` volajícího má vždy přednost (Antigravity předává `"exact"`).

**Účel:** zabránit deaktivaci celého připojení, když je nedostupný nebo kvótově omezený jen jeden model.

**Příklady:**

- Provideri s kvótami na model vracející 429
- Lokální provideri vracející 404 pro jeden chybějící model
- Chyby oprávnění režimu/modelu specifické pro providera (např. režimy Grok)

**Implementace:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Přehled Model Cooldowns (v3.8.0)

UI: Settings → Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Vypisuje aktivní blokování s údaji: provider, connection, model, reason, expiresAt. Operátoři mohou model z karty ručně znovu povolit.

**REST API:**

- `GET /api/resilience/model-cooldowns` — seznam aktivních blokování
- `DELETE /api/resilience/model-cooldowns` — ruční opětovné povolení. Tělo: `{provider, connection, model}`. Autentizace: management.

### Cooldown Manager

UI: Monitoring → Cooldown Manager (`src/app/(dashboard)/dashboard/resilience/cooldowns/`).

Jedna stránka pro každé připojení, které je vyřazeno z routingu z přechodného důvodu,
místo otevírání stránek jednotlivých providerů. Vypisuje cooldowny připojení, blokování modelů
a terminální stavy, umožňuje je vymazat pro jednotlivé připojení, pro výběr nebo pro všechna
připojení providera, a upravuje nejčastěji laděná pravidla cooldownu: `streamStallCooldown.enabled`
a základní cooldown `connectionCooldown` pro OAuth / API klíč a maximální počet kroků backoffu
(ukládá se přes `PATCH /api/resilience`). Terminální stavy (`banned`, `expired`,
`credits_exhausted`) jsou vypsány, ale zde se nikdy nemazou.

**REST API** (`src/lib/resilience/cooldownManager.ts`, autentizace: management):

- `GET /api/resilience/cooldowns[?provider=]` — připojení se stavem, zbývajícím cooldownem,
  úrovní backoffu, typem poslední chyby a blokováními modelů (bez přihlašovacích údajů)
- `POST /api/resilience/cooldowns` — tělo `{connectionIds: string[]}` nebo
  `{all: true, provider?}`; vrací `{cleared, unchanged, skippedTerminal, lockoutsCleared}`

### UI nastavení blokování + obnova pomocí success-decay (v3.8.23)

Blokování modelu přešlo z vždy zapnutého natvrdo zakódovaného chování na plně
konfigurovatelnou, opt-in funkci s vlastní kartou nastavení a samoléčebnou cestou obnovy.

**Karta nastavení:** Settings → Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Tato karta je **odlišná** od výše uvedené karty `ModelCooldownsCard` určené pouze pro čtení
(která aktivní blokování jen _vypisuje_) — nová karta _konfiguruje parametry_. Výchozí hodnoty
jsou v `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| Nastavení               | Výchozí                          | Význam                                                               |
| ----------------------- | -------------------------------- | -------------------------------------------------------------------- |
| `enabled`               | `false`                          | Hlavní přepínač — blokování modelu je **ve výchozím stavu vypnuté**. |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Stavy upstreamu, které se počítají jako selhání v rozsahu modelu.    |
| `baseCooldownMs`        | `120_000` (120 s)                | Počáteční délka blokování při prvním selhání.                        |
| `maxCooldownMs`         | `1_800_000` (30 min)             | Strop eskalovaného cooldownu.                                        |
| `maxBackoffSteps`       | `10`                             | Maximální počet kroků eskalace exponenciálního backoffu.             |
| `useExponentialBackoff` | `true`                           | Zda opakovaná selhání eskalují cooldown exponenciálně.               |

Nastavení se uchovávají prostřednictvím běžného úložiště nastavení a validují se
schématem nastavení resilience; karta omezuje `baseCooldownMs`/`maxCooldownMs`
(s `maxCooldownMs ≥ baseCooldownMs`) a `maxBackoffSteps`.

**Obnova pomocí success-decay:** obnova **není** čistě o vypršení časovače. Zdravá
odpověď snižuje počet selhání modelu zpět, takže model, který se zotavil uprostřed
okna, přestane eskalovat (a zruší blokování) dříve, než by vypršel jeho časovač. Při
úspěšném cíli combo volá `open-sse/services/combo.ts` funkci `decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`), která **způlí** uložený
`failureCount` (`Math.floor(failureCount / 2)`); když dosáhne `0`, záznam blokování
se zcela smaže. Protějšek `recordModelLockoutFailure()`
zvýší počet (a eskaluje cooldown) při selháních v rámci
eskalacečního okna. Tento success-decay je doplněk k prostému vypršení časovače —
k opětovnému povolení modelu může vést obě cesty.

**Stav:** blokování jsou držena **v paměti** (per-proces `Map`y
`ModelLockoutEntry` klíčované podle `provider:connectionId:model`, zámky s přesným rozsahem podle
`provider:connectionId:exact:model`), neukládají se do
DB — při restartu se ztratí. _Nastavení_ se ukládají trvale; aktivní
_stav_ blokování je efemérní.

---

## 4. Řízení souběžnosti quota-share (v3.8.36)

Účty s předplatným (GLM, MiniMax atd.) často přijímají pouze ~1–3 souběžné
požadavky; při jejich překročení dochází k chybám 429 a cooldownům. Tento problém
je obzvlášť naléhavý u kombinací **quota-share** (`qtSd/…`), kde několik klíčů API
sdílí jeden upstreamový účet. Tři vrstvy zabraňují zahlcení sdíleného účtu.

### Limit souběžnosti na připojení (`max_concurrent`)

Každé připojení poskytovatele může deklarovat limit `max_concurrent`
(`provider_connections.max_concurrent`, nastavuje se v modálním okně připojení /
API / DB). Ponechte jej prázdný, pokud nechcete žádný limit. Toto je jediný
ovladač, který řídí níže popsanou serializační vrstvu — nastavte jej na skutečnou
souběžnost účtu (např. GLM ~1, MiniMax ~2).

### Limity souběžnosti podle modelu (`modelConcurrency`)

Připojení může navíc deklarovat přesné limity souběžnosti pro jednotlivé modely
uvnitř své mapy `rateLimitOverrides`:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

Nastavte je v modálním okně připojení (**Přepsání rate limitů → Limity
souběžnosti podle modelu**, jeden `model=cap` na řádek) nebo pomocí
`PATCH /api/providers/[id]` se stejnou strukturou JSON. Sémantika klíčů:

- **Celé připojení vs. konkrétní model:** `maxConcurrent` zůstává sdíleným
  limitem celého připojení. Pokud platí obojí, obě brány se získají atomicky
  v rámci stejné složené brány (`global → provider → account → model`);
  výsledné chování odpovídá přísnějšímu z platných limitů.
- **Přesná shoda klíče modelu:** klíčem je řetězec modelu předaný exekutoru po
  vyhodnocení směrování — obvykle holé upstreamové ID modelu (`glm-5`), nikoli
  klientský alias `provider/model` (`zai/glm-5` neodpovídá `glm-5`). Hodnoty
  představují limity souběžných požadavků v podobě kladných celých čísel.
- **Místní fronta, žádné zjišťování:** přebytečné požadavky čekají v místní
  frontě se stávající sémantikou fronty/timeoutu (typované chyby přijetí
  `SEMAPHORE_TIMEOUT` / `SEMAPHORE_QUEUE_FULL`). OmniRoute nezjišťuje ani
  neodvozuje upstreamové zásady — vynucuje přesné limity, které operátor
  nakonfiguroval. Nasycená brána modelu nikdy nezakáže poskytovatele a nikdy
  nevytvoří trvalé zablokování modelu; upstreamové chování 429/cooldown/fallback
  zůstává chybovou pojistkou.
- **Rozsah na připojení a proces:** limity platí pro každé připojení v databázi
  a jsou uchovávány v paměti, takže dvě připojení používající stejný upstreamový
  klíč API se vzájemně nekoordinují.
- **Nenastaveno znamená beze změny:** vynechání mapy (nebo ponechání pole
  v dashboardu prázdné) nepřidá žádnou bránu modelu. Příklad konfigurace bez
  uplatnění jakéhokoli univerzálního limitu poskytovatele:

```text
glm-5=1
glm-4.7=3
```

### Serializace požadavků quota-share

Když odeslání quota-share cílí na připojení, které deklaruje kladný
`max_concurrent`, souběžné požadavky na daný **účet** jsou serializovány přes
semafor na připojení (klíč `qsconn:<connectionId>`): přebytečné požadavky
**čekají ve frontě** místo zahlcování účtu. Semafor je **fail-open** — nasycená
fronta nebo timeout pokračuje bez slotu, místo aby kdykoli odmítl odeslatelný
požadavek. Přepíná se v **Nastavení → Odolnost → Souběžnost quota-share na
připojení** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`, ve výchozím
nastavení zapnuto). Bez limitu `max_concurrent` zůstává chování nezměněné.

> Směrovací brána quota-share (`selectQuotaShareTarget`, DRR + P2C) je sama
> o sobě fail-open a pouze _snižuje prioritu_ připojení, které je na limitu —
> s poolem s jediným připojením nemůže tvrdě omezit, takže právě tento semafor
> skutečně zadržuje záplavu.

### Opakování combo s ohledem na cooldown

U každé strategie combo (pokud je povolena) požadavek, který by vyústil ve 429
kvůli KRÁTKÉMU přechodnému cooldownu, vyčká jeho vypršení a znovu se odešle,
místo aby vrátil 429 — to pokrývá okna TPM/RPM třídy Gemini (~60s retry-after)
u vícemodelových combo, např. když oba cíle 2modelového komba narazí na rate
limit daného modelu. Omezeno parametry `comboCooldownWait` (`enabled`,
`maxWaitMs`, `maxAttempts`, `budgetMs`) v **Nastavení → Odolnost**. Nikdy nečeká
při `quota_exhausted` (zamčeno do půlnoci) nebo z důvodů auth/not-found.

Stejná brána pokrývá i případ před odesláním (#16319): když jsou všechny cíle
komba přeskočeny ještě před jakýmkoli pokusem, protože jejich model je v krátkém
přechodném zablokování, větev s nulovým počtem pokusů počká na vypršení zámku za
stejných limitů a znovu odešle, místo aby odpověděla `503 ALL_TARGETS_SKIPPED`
bez nápovědy. Když není čekání povoleno (vyčerpán limit, pokusy nebo rozpočet,
nebo je funkce vypnutá), koncová odpověď se povýší na `429 rate_limit_error`
nesoucí `retry_after` / `reset_at` z nejbližšího vypršení přechodného zámku;
zámky kvóty, auth a not-found si ponechávají 503 bez nápovědy.

---

## 5. Řízení přijímání do fronty požadavků (v3.8.49 · issue #6593)

**Rozsah**: lokální fronta omezení rychlosti pro kombinaci poskytovatel+připojení (`open-sse/services/rateLimitManager.ts`, postavená na Bottleneck), o jednu vrstvu níže než tři mechanismy popsané výše.

**`maxWaitMs` ohraničuje čekání ve frontě; `executionMaxWaitMs` ohraničuje vykonávání.**
Tyto dvě hodnoty jsou záměrně oddělené a žádná neslouží jako vstup pro druhou.

`resilienceSettings.requestQueue.maxWaitMs` je **rozpočet čekání ve frontě**: pokrývá čekání na slot poskytovatele a následné setrvání ve stavu QUEUED, a jeho časovač se zruší ve chvíli, kdy úloha opustí stav QUEUED a začne se vykonávat (`rateLimitManager.ts`, `wrappedFn`). Požadavek, který tento rozpočet překročí, se k upstreamu vůbec nedostane. Výchozí hodnota 30000ms, poskytovaná konstantou `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS` v `src/lib/resilience/settings.ts` a ukotvená testem `tests/unit/ratelimit-admission-control-6593.test.ts`, takže její změna zbarví tento test červeně, místo aby tento odstavec tiše zůstal zastaralý.

`resilienceSettings.requestQueue.executionMaxWaitMs` je hodnota, kterou Bottleneck obdrží jako `expiration` úlohy a jejíž časovač se spustí až po odeslání k vykonání (dispatch). Slouží jako pojistka pro exekutory, které nemají vlastní upstreamový timeout, a pokud je vlastní fetch-start timeout exekutoru delší, je na něj navýšena, takže nemůže useknout zdravou, právě probíhající odpověď. Výchozí hodnota 600000ms (10 min).

Předávání rozpočtu fronty do `expiration` je to, co dříve zabíjelo neinkrementální brány uprostřed běhu — ty legitimně běží minuty, než dorazí první bajty — a proto se expiration zobrazuje jako `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504), zatímco rozpočet fronty nese kód timeoutu fronty. Obojí lze přepsat přes `RATE_LIMIT_MAX_WAIT_MS` / `RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) nebo v dashboardu (**Nastavení → Odolnost**). Obě hodnoty jsou při normalizaci oříznuty na rozsah 1ms–24h.

**Priorita, pro obě:** proměnná prostředí poskytuje pouze _výchozí hodnotu_. Hodnota uložená v `resilienceSettings.requestQueue` (dashboard / API patch, uložená v `key_value`) má přednost před ní a hodnota `rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` pro konkrétní připojení má přednost před touto. Nastavení proměnné prostředí na nasazení, které již má uloženou hodnotu, proto nic nezmění — místo toho uložené nastavení vymažte nebo aktualizujte.

Doba setrvání ve frontě je ohraničena pomocí `maxWaitMs`; `maxQueueDepth` níže ohraničuje, kolik volajících může být ve frontě současně.

**Opakování uvedená v těle odpovědi: tempování vs uzamčení.** Tělo odpovědi 429 může samo určit dobu čekání (Gemini `RetryInfo.retryDelay`, text "retry after Ns"), kterou čte `updateFromResponseBody`. Čekání, které se vejde do `maxWaitMs` daného připojení, je tempování (pacing): limiter na takovou dobu vyprázdní svou nádrž a zařazená volání se odešlou, až se znovu naplní. Čekání delší než `maxWaitMs` není něco, co by fronta dokázala vyčkat — Gemini na vyčerpanou denní kvótu odpovídá `retryDelay: "86399s"`. Předaná hlavička `Retry-After` na přestavěné odpovědi 429 (#16528) již způsobí, že fallback engine uzamkne model na toto okno, ale pozastavení limiteru by navíc stále zdrželo každé volání, které ke klíči dorazí předčasně (například po resetu nastavení odolnosti), po celou dobu `maxWaitMs`. Když takové čekání pochází z typovaného detailu Google `RetryInfo` (provenance `google_rpc_retry_info`) a limiter klíče je již vymezen na model (viz `getLimiterKey`), stává se z 429 místo toho uzamčení modelu na daném připojení (`lockModelForLongBodyRetry` v `open-sse/services/rateLimitManager/bodyRetryPause.ts`, omezené na 24h) a limiter zůstává nepozastavený. Výběr účtu přes toto uzamčení přeskakuje skrze `isModelLocked()` a stejně tak brána combo před odesláním u cílů připnutých k připojení. Na antigravity, jehož limiter je na rodinu kvót, je zámek na přesný model, stejně jako jeho ostatní kvótové zámky. Jméno, o které klient žádal, se uzamkne také, pokud ho alias přeložil na daný model, protože tyto kontroly používají požadované jméno; uzamkne se přesně (`lockExactModel`), takže alias, který překračuje rodinu kvót antigravity nebo rozsah codex, nikdy neuzamkne svůj vlastní. Pouhá textová nápověda, netypovaný `retryDelay` nebo limiter sdílený celým připojením ponechává pozastavení. Když se limiter, který cesta 429 právě přestavěla, skutečně pozastaví, volající, jehož zbývající čas ve frontě skončí dříve než pozastavení, je okamžitě odmítnut kódem timeoutu fronty (`checkLimiterPause`), místo aby tento čas vyčkal; zaznamenaný konec je ukotven před sestavením limiteru, tam, kde Bottleneck spouští své hodiny obnovy, a jakákoli pozdější změna nádrže na něj zapomene. Pokryto testy `tests/unit/rate-limit-long-body-retry-lockout.test.ts` a `tests/unit/rate-limit-body-retry-pause.test.ts`.

**`maxQueueDepth` — volitelný strop přijímání (nové).** `resilienceSettings.requestQueue.maxQueueDepth` ohraničuje, kolik požadavků může současně čekat ve frontě (ještě neodeslaných k vykonání) pro jednu kombinaci poskytovatel+připojení. Když fronta již obsahuje `maxQueueDepth` požadavků, je nový požadavek rychle odmítnut typovanou chybou `code: "RATE_LIMIT_QUEUE_FULL"` **ještě předtím**, než se vůbec dostane k `limiter.schedule()` — odmítnutí je tedy levné a nastane před jakoukoli následnou prací na kompresi promptu / překladu pro daný požadavek. Výchozí hodnota `0` = vypnuto, což zachovává dosavadní chování neomezené fronty; rozsah 0–100000. Přepsání přes `RATE_LIMIT_MAX_QUEUE_DEPTH` (env) nebo `resilienceSettings.requestQueue.maxQueueDepth` (dashboard/API patch).

Samotná kontrola přijetí je čistá funkce
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`), takže je jednotkově testovatelná bez skutečného Bottleneck limiteru.

> RFC, které otevřelo #6593, navrhovalo také příznak
> `bypassCompressionOnRateLimit`. Pipeline `open-sse/services/compression/`
> v tomto repozitáři představuje kompresi promptu/kontextu odchozího
> požadavku na LLM (`chatCore.ts`, kolem bloku
> `resolveCompressionSettings`/`selectCompressionStrategy`), nikoli HTTP
> kompresi odpovědí na syntetizovaných tělech 429 — pro doslovný příznak
> obejití neexistuje odpovídající cesta v kódu. Tento krok komprese promptu
> navíc aktuálně běží _před_ `withRateLimit()` v pipeline požadavku, takže
> přeskládání tak, aby se při odmítnutí kvůli plné frontě přeskočil, je
> samostatná, větší změna než rozsah tohoto issue; zde byla záměrně
> **neimplementována** a je ponechána jako následný krok, pokud zisk
> v podobě úspory CPU stojí za riziko přeskládání.

### Pojistka automatického zapnutí rate-limitu a ochrana připojení (`rateLimitProtection`)

**Pojistka automatického zapnutí** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, výchozí `true`):
Ve výchozím nastavení OmniRoute automaticky zapíná ochranu frontou rate-limitu pro všechna aktivní připojení poskytovatelů s API klíčem (`getProviderCategory(provider) === "apikey"`). To zajišťuje, že příchozí požadavky na upstream API klíče citlivé na omezování jsou řazeny do fronty a škrceny přes Bottleneck, místo aby nárazově narážely na upstream chyby 429. Pojistku lze přepsat proměnnou prostředí `RATE_LIMIT_AUTO_ENABLE` (`false`/`0`/`off` vypíná, `true`/`1`/`on` vynutí zapnutí), která má přednost před trvale uloženým nastavením z dashboardu (**Nastavení → Odolnost** / `PATCH /api/resilience`).

**Sémantika `rateLimitProtection` na úrovni připojení:**
Ochrana rate-limitu na úrovni jednotlivých připojení je sledována pomocí booleovského pole `rateLimitProtection` na připojeních poskytovatelů (trvale uloženého jako `rate_limit_protection` v SQLite):

- **Explicitně zapnuto (`rateLimitProtection === true`)**: Ochrana rate-limitu je pro toto připojení explicitně zapnutá, bez ohledu na kategorii poskytovatele nebo na to, zda je pojistka automatického zapnutí aktivní.
- **Explicitně vypnuto (`rateLimitProtection === false`)**: Vypíná explicitní ochranu, ale **nevyjímá** aktivní připojení s API klíčem z globální pojistky automatického zapnutí. V `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`) jsou `false` a `undefined` ekvivalentní: pouze `rateLimitProtection === true` je považováno za explicitní přepsání. Pokud je `rateLimitProtection` `false` (nebo nenastaveno), aktivní připojení s API klíčem stále odpovídá podmínce automatického zapnutí a zůstává chráněno rate-limitem.
- **Žádné vyjmutí na úrovni připojení**: Operátor aktuálně nemůže vyjádřit „toto jediné aktivní připojení s API klíčem musí běžet bez ochrany frontou rate-limitu“ a zároveň ponechat automatické zapnutí aktivní pro ostatní. Aby připojení s API klíčem běžela zcela bez front rate-limitu, musí být pojistka globálně vypnutá (`RATE_LIMIT_AUTO_ENABLE=false` nebo `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`).

**Podporované cesty zápisu:**

- **`POST /api/rate-limits`**: Podporovaná cesta pro správu a přepínání `rateLimitProtection` pro připojení (`{ connectionId: string, enabled: boolean }`). Volání s `enabled: true` explicitní ochranu zapíná; volání s `enabled: false` explicitní ochranu odebírá (přičemž aktivní připojení s API klíčem zůstávají pokryta globální pojistkou, pokud je automatické zapnutí aktivní).
- **`PUT /api/providers/[id]`**: Záměrně `rateLimitProtection` **nepřijímá** ani nepřepíná (#11278). Aktualizace metadat připojení poskytovatele přes `PUT /api/providers/[id]` nikdy nezmění trvale uložený stav ochrany rate-limitu.

---

## 6. Watchdog propustnosti pomalého streamu (#9709)

Volitelná pojistka `resilienceSettings.streamRecovery.throughputWatchdog` detekuje
upstream, který stále posílá chunky, ale produkuje výstup asistenta pod
nakonfigurovanou mírou užitečného výstupu. Je záměrně odlišný od idle timeoutu:
heartbeaty ani metadata neresetují ani jeden z časovačů a nepočítají se jako
pokrok. Je také odlišný od pevného limitu pokusu (#9153), který zůstává absolutním
bezpečnostním stropem bez ohledu na kvalitu výstupu.

Watchdog vyžaduje období zahřívání následované kompletním klouzavým oknem, než
může provést abort. Počítá textové delty z Chat Completions a výstupních událostí
Responses API (konzervativní proxy v podobě UTF-8 bajtů), ignoruje události
obsahující pouze usage a prázdné události a pozastavuje posuzování, dokud
probíhají události volání nástrojů nebo uvažování. Ve výchozím nastavení je
vypnutý a lze jej zapnout pomocí `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`; okno,
zahřívání, minimální rychlost a minimální měřitelný výstup jsou omezeny
normální vrstvou normalizace resilience-settings.

Když je zapnutý, abort watchdogu se aplikuje pouze na aktivní pokus o upstream.
Před jakýmikoli klientem viditelnými bajty může stávající cesta včasného zotavení
na stejném účtu znovu otevřít pokus. Po commitu se stream nikdy slepě nepřehrává;
suffix může spojit pouze stávající bezpečný kontrakt pro pokračování uprostřed
streamu. Finalizace zůstává jednorázová, takže účtování usage a uvolnění semaforu
se neduplikují.

---

## 7. Přerámování stavu upstreamu (chybně uvedené chyby kvóty)

**Rozsah:** jedna upstream brána, která hlásí dočasné vyčerpání kvóty s nesprávným HTTP statusem.

**Účel:** opravit zavádějící status PŘED klasifikací, aby downstream konzumenti (fallback engine, agregace combo, odpověď směřující ke klientovi) viděli skutečnou povahu selhání, které lze znovu zkusit.

Některé brány signalizují DOČASNÉ vyčerpání kvóty s HTTP statusem, který
nelze znovu zkusit. `agentrouter.org` vrací `403` (někdy `400`) s čínským tělem
(`用户额度不足` / `额度不足`) místo standardního `429`. Klienti jako Claude
Code považují `403` za trvalé a ukončí relaci, a bez opravy
by ho fallback engine klasifikoval jako `AUTH_ERROR` místo události
kvóty.

**Implementace:**

- Registry + matcher: `open-sse/config/upstreamStatusRestatement.ts` — seznam
  pravidel pro jednotlivé providery (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), párovaných prostřednictvím `applyStatusRestatement()`.
- Místo volání: blok `providerFailure:` v `open-sse/handlers/chatCore.ts`
  (kolem řádku 3654), hned po tom, co `parseUpstreamError()` zpracuje upstream
  odpověď s chybovým HTTP statusem (`!providerResponse.ok`), a předtím, než
  proběhne jakákoli klasifikace, takže každý downstream konzument vidí opravený
  status. Chyby vložené uvnitř `200` SSE streamu sledují samostatnou,
  pozdější cestu zpracování streamu a **nejsou** tímto hookem dnes pokryty —
  známé omezení, zatím nepotřebné pro agentrouterův chybný status (který
  se projevuje jako chybový HTTP status).
- Způsobilost pro opakování: `429` je v `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`), takže přerámovaná chyba
  nese skutečné okno pro opakování místo toho, aby se projevila jako mrtvý `403`.
- Syntetická hodnota `60s` v `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`)
  je jen to, co přerámovaná odpověď sděluje **klientovi**; sama o sobě to není
  interní doba cooldownu/lockoutu spojení — tu řídí samostatně ten mechanismus,
  který přerámovanou chybu skutečně zpracovává (eskalující backoff Connection
  Cooldown, §2, základ `3s` pro providery s API klíčem; nebo Model Lockout, §3,
  pro providery s kvótou na úrovni modelu, jako je agentrouter). Router se může
  stát interně způsobilým pro opakování dříve než v 60s okně, které inzeruje
  klientovi — záměrná rezerva, nikoli chyba.

Trvalé chyby (agentrouterova `无权访问模型` — žádný přístup k tomuto modelu) se
NIKDY nepřerámovávají: `excludeMarkers` vetuje pravidlo i tehdy, když `textMarkers`
zasáhly, takže chyba si zachová svůj původní status a nic ji nezkouší donekonečna.
Odpovídající pravidlo klasifikace providera
(`agentrouter-model-access-denied` v `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, deklarovaný základní cooldown `6h`)
je konzultováno funkcí `checkFallbackError` (`open-sse/services/accountFallback.ts`)
_před_ generickým early-returnem kategorie apikey `FORBIDDEN`, pod podmínkou
`honorsRuleLockScope(provider)` (#10334 — v současnosti exkluzivní pro agentrouter
prostřednictvím allowlistu `HONORS_RULE_LOCK_SCOPE_PROVIDERS` v
`providerErrorRules.ts`). Deklarovaný 6h cooldown pravidla protéká jako
`fallbackResult.baseCooldownMs`, ale stále vstupuje do předchozí cesty lockoutu
pro kvótu na úrovni modelu (`lockModelIfPerModelQuota()` /
`recordModelLockoutFailure()`, nezměněné #10334 kromě zdroje cooldownu): je
omezen dolů na operátorovo `mlSettings.maxCooldownMs`
(výchozí `1_800_000ms` / 30 min), jako každý jiný model lockout, a
_přetrvávající důvod lockoutu_ zůstává předchozí hardcoded `"forbidden"`,
nikoli pravidlovo `"auth_error"` — end-to-end se ctí pouze doba trvání cooldownu,
nikoli řetězec důvodu. Samotné spojení zůstává aktivní;
sousední modely na stejném spojení nejsou ovlivněny.

Přeformulované chyby kvóty (`额度不足`) se v produkci shodují s pravidlem poskytovatele (`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope: "connection"`, bez vlastního deklarovaného cooldownu — uplatní se výchozí škálovaný backoff perzistenční vrstvy). Od #10334 JE `scope` na `ProviderErrorRuleMatch` konzumován end-to-end, ale **pouze** u poskytovatelů v allowlistu `HONORS_RULE_LOCK_SCOPE_PROVIDERS` (`providerErrorRules.ts` — dnes pouze `"agentrouter"`, podmíněno přes `honorsRuleLockScope()`). U všech ostatních poskytovatelů zůstává `scope` pouze informativní, přesně jako před #10334. `checkFallbackError` zveřejňuje scope nalezeného pravidla jako `fallbackResult.ruleScope`; `isAgentrouterConnectionQuotaScope()` (`src/sse/services/auth.ts`) je sdílený guard, který potvrzuje, že `ruleScope` lze skutečně bezpečně uznávat jako signál platný pro celé připojení a schopný samo-zotavení (scope `"connection"`, reason `quota_exhausted`, nikdy `permanent`, nikdy `creditsExhausted` — obrana proti budoucímu pravidlu, které by spárovalo scope `"connection"` s trvalým stavem účtu). Volají ho dva konzumenti:

- **Perzistence** (`markAccountUnavailable()`, `src/sse/services/auth.ts`): místo aby spadla do větve **per-model** lockoutu pro passthrough poskytovatele (agentrouter má `passthroughModels: true` → `hasPerModelQuota()` vrací `true`), použije **dočasný cooldown připojení** — `testStatus: "unavailable"` + `rateLimitedUntil`, nikdy terminální stav (`credits_exhausted`/`banned`/`expired`) — takže se připojení po uplynutí cooldownu samo zotaví, místo aby vyžadovalo ruční reset přihlašovacích údajů. U připojení s `disableCooling: true` (#2997) se přeskakuje: tento opt-out místo toho propadne do per-model lockoutu (zdokumentovaný kompromis — viz komentář v kódu nad touto větví).
- **Směrování combo v rámci téhož požadavku** (`applyComboTargetExhaustion()`, `open-sse/services/combo/targetExhaustion.ts`): stejný guard zařadí připojení do in-memory množiny `exhaustedConnections`, klíčované `${provider}:${connectionId}`. Toto přeskočí pouze zbývající cíl TÉHOŽ POŽADAVKU, který _sám již nese přesně toto `connectionId`_ na svém vlastním cílovém objektu (`getExhaustedTargetSkipReason()`, `open-sse/services/combo/comboPredicates.ts`, `if (provider && connectionId)` před vyhledáním v `exhaustedConnections`) — prosté combo typu seznam modelů, kde sourozenecké cíle nenesou žádné vlastní připnuté `connectionId` a jedno se přiřazuje až při dispatchi z hlavičky odpovědi `X-OmniRoute-Selected-Connection-Id`, se o tuto shodu klíče nikdy netrefí. Pro tento běžný případ NENÍ skutečnou ochranou před tím, aby zbývající větev znovu použila právě vyčerpaný účet, tento Set — je jí výše popsaná perzistenční vrstva (`rateLimitedUntil` připojení je nyní v budoucnosti) v kombinaci s týmž guardem, který pro toto selhání potlačuje `transientRateLimitedProviders` (viz „Dvoustupňový návrh" a komentář v kódu u větve `isAgentrouterConnectionQuotaScope` v `targetExhaustion.ts`): když tento Set zůstane neoznačený, force-allow `allowRateLimitedConnection` v `combo.ts` (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) se pro zbývající větve poskytovatele NEAKTIVUJE, takže filtr `rateLimitedUntil` při výběru přihlašovacích údajů (`src/sse/services/auth.ts:1238`) je normálně respektován a zbývající větev buď vybere jiné, stále způsobilé připojení agentrouter, nebo selže s tím, že nejsou k dispozici žádné přihlašovací údaje — neprotlačí se zpět na připojení, které tato větev právě podrobila cooldownu.

### Dvoustupňový návrh: přeformulování statusu, poté klasifikace

Přeformulování statusu (`upstreamStatusRestatement.ts`) a klasifikační pravidla poskytovatelů (`open-sse/config/providerErrorRules.ts`, `providerRuleRegistry`) jsou samostatné registry, které se obě klíčují podle id poskytovatele a textových markerů, ale běží na různých místech a slouží různým účelům: přeformulování přepisuje HTTP status časně v `chatCore.ts`; klasifikační pravidla určují fallback `reason` a `scope` zámku (`model` / `provider` / `connection`) uvnitř `checkFallbackError()` (`open-sse/services/accountFallback.ts`).

Klasifikační pravidla vidí plný **text** chyby (potřebný k porovnání s markery těla, jako je `额度不足`) pouze u poskytovatelů uvedených v allowlistu `FULL_TEXT_RULE_PROVIDERS` v `providerErrorRules.ts` — aktuálně pouze `"agentrouter"`. U každého jiného poskytovatele **vestavěného katalogu** předává `checkFallbackError` funkci `getProviderErrorRuleMatch` pouze strukturovanou chybu (`{code, type}`), která stačí pro pravidla založená na hlavičkách, statusu či kódu, ale je slepá vůči markerům v textu těla. Pomocná funkce `resolveRuleMatchBody()` provádí tento výběr: plný text chyby pro poskytovatele z allowlistu, jinak strukturovanou chybu. Přidání **vestavěného** poskytovatele do `FULL_TEXT_RULE_PROVIDERS` je explicitní opt-in pro daného poskytovatele — existuje proto, aby výchozí cesta pro každého poskytovatele mimo seznam zůstala bajt po bajtu nezměněná.

`scope` pravidla (`model` / `provider` / `connection`) je samostatný opt-in nezávislý na `FULL_TEXT_RULE_PROVIDERS`: `checkFallbackError` jej pouze zveřejňuje jako `fallbackResult.ruleScope` a následní (downstream) konzumenti jej uznávají jako cokoli jiného než informativní štítek pouze u poskytovatelů v allowlistu `HONORS_RULE_LOCK_SCOPE_PROVIDERS` ve stejném souboru (`gated via honorsRuleLockScope()` — dnes pouze `"agentrouter"`). Co shoda `scope: "connection"` skutečně způsobí, jakmile se poskytovatel do tohoto allowlistu dostane, viz „Přeformulované chyby kvóty" výše.

**#11104 — pravidla deklarovaná operátorem obcházejí oba allowlisty.** Operátor může za běhu deklarovat pravidlo pro konkrétního poskytovatele prostřednictvím `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`), aniž by upravoval tento soubor. Podmínění pravidla operátora allowlisty
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` — allowlisty určené k ochraně **výchozího** chování vestavěných katalogových pravidel — by učinilo mechanismus nastavení neúčinným pro každého poskytovatele kromě těch, kteří v nich již jsou uvedeni, protože deklarace pravidla je již sama o sobě explicitním opt-in operátora. `resolveRuleMatchBody()` i `honorsRuleLockScope()` nejprve kontrolují
`hasOperatorRuleForProvider()`: poskytovatel s pravidlem operátora získá nezpracovaný text chyby a jeho deklarovaný `scope` je respektován, bez ohledu na to, zda se zároveň nachází v některém z allowlistů.

**Známá mezera — `providerRuleRegistry` se pro HTTP 400 nikdy nekonzultuje.**
Větev `BAD_REQUEST` funkce `checkFallbackError` klasifikuje status 400 zcela prostřednictvím vlastních polí vzorů (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS` atd. v `accountFallback.ts`) a vrací se dříve, než je dosaženo větve `configuredRule`/`getProviderErrorRuleMatch` nad ní.
Vestavěné katalogové pravidlo (nebo pravidlo operátora) se `status: 400` je syntakticky platné, ale nikdy se nespustí. Žádné existující pravidlo dnes necílí na 400, takže v produkci není nic ovlivněno — ale budoucí pravidlo pro 400 vyžaduje nejprve zasáhnout do této větve, což je větší změna než přidání pravidla (reklasifikuje 400 pro každého poskytovatele, který se již spoléhá na chování polí vzorů), a je mimo rozsah přidání pravidla pro jednoho poskytovatele.

### Přidání nové brány, která nesprávně uvádí kvótu

1. Zaregistrujte jedno pole pravidel v `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Udržujte `textMarkers` specifické pro daného poskytovatele; nikdy znovu nepoužívejte obecné anglické fráze, které kolidují s
   `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`).
2. Volitelně zaregistrujte klasifikační pravidla v
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) pro výběr správného rozsahu zámku (`connection` pro kvótu v rámci celého účtu, `model` pro chyby jednotlivých modelů). Tento krok se v produkci projeví pouze u poskytovatelů, jejichž pravidla potřebují plný text chyby (značky těla): přidejte id poskytovatele do `FULL_TEXT_RULE_PROVIDERS` ve stejném souboru — jinak `checkFallbackError` pravidlu vždy předá pouze strukturovanou chybu
   `{code, type}` a pravidlo založené na textu těla nikdy nebude odpovídat živému provozu. Pravidla, která se shodují čistě na základě `status`/`headers` (jako pravidla Opencode nebo Minimaxu), tento opt-in nepotřebují. Samostatně, pokud pravidlo deklaruje
   `scope: "connection"` a záměrem je skutečný cooldown v rámci celého připojení plus přeskočení combo v rámci téhož požadavku (ne jen informační štítek), přidejte id poskytovatele do `HONORS_RULE_LOCK_SCOPE_PROVIDERS` ve stejném souboru — právě to řídí konzumaci ve stylu `isAgentrouterConnectionQuotaScope()` v
   `markAccountUnavailable()` (`src/sse/services/auth.ts`) a
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); bez toho `scope` sice stále prochází přes `fallbackResult.ruleScope`, ale nic na něj nereaguje.
3. Přidejte jednotkové testy zrcadlící `tests/unit/upstream-status-restatement.test.ts`
   a `tests/unit/agentrouter-error-rules.test.ts` (včetně pojistek not-permanent / not-creditsExhausted a — pokud poskytovatel allowlist potřebuje — testu, který ověřuje, že `resolveRuleMatchBody()` vrací plný text pouze pro tohoto poskytovatele).

V `chatCore.ts`, `classifyError` ani combo nejsou nutné žádné změny.

#### Zámek seskupený podle egress IP (#10880)

Poskytovatelé v `EGRESS_BUCKETED_LOCK_PROVIDERS` (rodina opencode) jsou považováni za upstream seskupený podle IP (free tier opencode je seskupen podle IP, ne podle účtu — viz #9611): status 429 klasifikovaný jako `quota_exhausted`
**nebo** `rate_limit_exceeded` ochladí každé připojení z rodiny na allowlistu, jehož poslední známá egress IP odpovídá IP selhávajícího připojení, ještě než je rotace může vyzkoušet
— čímž se předejde N-1 zaručeně neúspěšným voláním upstream (stejný princip jako #10460/#10525).
`rate_limit_exceeded` je zahrnut záměrně: na cestě `markAccountUnavailable` se pravidla specifická pro opencode nikdy neshodují (`checkFallbackError` nedostává žádné hlavičky/tělo a opencode není v `FULL_TEXT_RULE_PROVIDERS`), takže 429, jejíž tělo nese text o kvótě předplatného ("monthly usage limit
reached"), je klasifikována jako `quota_exhausted` fallbackem pro text kvóty
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; 1h cooldown) ještě předtím, než je vůbec dosaženo pravidla `status_429` — zatímco 429 bez textu kvóty (běžné omezení rychlosti) se klasifikuje přes pravidlo `status_429` jako `rate_limit_exceeded`
a přesto rodinu IP ochladí. Pro poskytovatele na allowlistu je rate limit seskupený podle IP stejný signál jako vyčerpaná kvóta. Upřímná omezení:

- **Best-effort**: zámek vyřeší poslední známou `egress_ip` připojení
  z `proxy_logs` (okno 24 h, synchronně, bez cache). Studená cache (egress
  IP nikdy nesondována) nebo žádný řádek → selhávající připojení je stále
  zchlazeno větví (zaznamenáno jako dnes), pouze žádný sourozenec není uzamčen.
- **Nikdy terminální**: cooldown je obnovující se kvótové okno
  (`testStatus: "unavailable"`); trvalý stav není nikdy odvozen ze signálu
  na úrovni IP. Připojení s `disableCooling` tuto větev zcela přeskakují.
- **Mění se granularita zámku pro allowlistovanou rodinu**: jde o změnu
  rozsahu, nejen o optimalizaci sourozenců. opencode je poskytovatel
  `passthroughModels`, takže před touto větví 429 produkovalo lockout na
  úrovni MODELU; nyní produkuje cooldown připojení — a to i pro operátora
  provozujícího jediné připojení zcela bez sourozence. To je granularita,
  kterou pravidlová tabulka opencode již deklaruje jako správnou
  (`scope: "connection"`, `providerErrorRules.ts`), dosud však nebyla
  uplatněna, protože opencode není v `HONORS_RULE_LOCK_SCOPE_PROVIDERS`.
  Větev sama zapíše cooldown selhávajícího připojení + `backoffLevel`,
  zrcadlíc větev agentrouter s rozsahem připojení, a vrátí se — blok na
  úrovni modelu a obecná cesta níže se nikdy nedosáhnou.
- **Včetně comba**: stejně jako větev agentrouter, rozsah záměrně ignoruje
  downgrade `persistUnavailableState`/`isCombo`, který volající combo
  uplatňuje na 429. Lockout na úrovni modelu není slabší formou tohoto
  rozsahu, je to špatná jednotka: nic neříká o vyčerpané IP, takže rotace
  comba by dál pálila jeden zaručeně selhávající hovor na každého sourozence.
- **Bezpečnost sourozenců**: sourozenec, který je již terminální
  (banned/credits_exhausted) nebo již v delším cooldownu, se nikdy
  nepřepisuje.
- **Výhradní allowlist**: rozšíření `EGRESS_BUCKETED_LOCK_PROVIDERS` je
  explicitní rozhodnutí vlastníka; žádné generické zapojení (vzor
  #10334/#10419). Dotaz na sourozence váže stejný allowlist, místo aby jej
  opakoval jako SQL literál, takže rozšíření zůstává jednořádkovou změnou.
- **Rotace egress IP, oběma směry**: okno vyhledávání (24 h) je mnohem
  širší než TTL cache egress IP (5 min), takže „poslední známá IP“ je
  historie, nikoli aktuální stav. Pokud se proxy připojení v rámci okna
  otočila, zámek může **minout** skutečně sdílenou IP (zaznamenaná IP je
  nová, nevyčerpaná) — a symetricky může **zchladit sourozence, který se
  od vyčerpané IP mezitím odklonil**. Druhý případ stojí tohoto sourozence
  jedno okno cooldownu; oba jsou přijímané best-effort limity vyhledávání
  založeného na historii.
- **Náklady**: dva ohraničené průchody `proxy_logs` (filtrováno oknem přes
  `idx_pl_timestamp`), pouze při frekvenci 429. Žádný nový index (migrace 134
  YAGNI). Měřeno na kopii DB s reálným provozem střední velikosti; instance
  s vysokou propustností drží ve stejném okně proporcionálně více řádků.

## Další funkce odolnosti

- **20 strategií směrování** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — viz [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Směrování s ohledem na reset** (v3.8.0) — upřednostňuje připojení podle času obnovení kvóty.
- **Degradace režimu na pozadí** — Responses API `background: true` degradováno na synchronní režim s varováním.
- **Dynamická detekce limitu nástrojů** — odstupuje od poskytovatelů při dosažení limitů počtu nástrojů.
- **Nouzový fallback** — řízen proměnnou `OMNIROUTE_EMERGENCY_FALLBACK`; operátoři jej mohou přepsat na stránce Feature Flags bez restartu.

---

## Ladění

- Vážené combo odpovídá `503 all_targets_cooling_down` (`Retry-After` nastaveno, `diagnostics.excluded` obsahuje všechny cíle s `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable`) → pool je nakonfigurován a připojen, každý cíl je pouze vyloučen časovačem odolnosti; varování `[COMBO] Weighted selection: every target excluded before dispatch — …` uvádí důvody a zbývající sekundy. `404 no_executable_targets` ze stejného comba znamená, že žádný časovač odolnosti nehrál roli (nic ke spuštění, nebo každý účet neprošel testem dostupnosti). Vytvořeno v `open-sse/services/combo/pinRecovery.ts` z vyloučení shromážděných v `targetResolution.ts`.
- Všechny klíče poskytovatele přeskočeny → zkontrolujte jak stav circuit breakeru, TAK `rateLimitedUntil`/`testStatus` každého připojení.
- Poskytovatel trvale vyloučen po okně resetu → kód čte surový `state` místo `getStatus()`/`canExecute()`.
- Jeden klíč selhává, ostatní by měly fungovat → upřednostněte connection cooldown před circuit breakerem.
- Selhává pouze jeden model → upřednostněte model lockout před connection cooldown.
- Stav by se měl sám obnovit, ale neobnoví → zkontrolujte časové razítko v budoucnosti + cestu čtení, která obnovuje expirovaný stav. Trvalé stavy vyžadují ruční změny.

---

## Stav za běhu — rychlá reference pro agenta

> Přesunuto beze změn z `AGENTS.md` → "Resilience Runtime State" (PR #12743), aby
> příručka pro agenta zůstala pod kontextovým limitem 40k. Jedná se o zhuštěný pohled
> na výše uvedené sekce určený agentovi; číslované sekce zůstávají úplnou referencí.

OmniRoute má tři příbuzné, ale odlišné mechanismy pro dočasná selhání. Při ladění
chování směrování udržujte jejich rozsah oddělený. Pro rychlý přehled viz
[diagram 3vrstvé odolnosti](../diagrams/exported/resilience-3layers.svg)
(zdroj: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)).

### Circuit breaker poskytovatele

**Rozsah**: celý poskytovatel, např. `glm`, `openai`, `anthropic`.

**Účel**: zastavit posílání provozu poskytovateli, který opakovaně selhává na úrovni
upstreamu/služby, aby jeden nezdravý poskytovatel nezpomaloval každý požadavek.

**Implementace**:

- Základní třída: `src/shared/utils/circuitBreaker.ts`
- Zapojení brány/spuštění chatu: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API stavu za běhu: `src/app/api/monitoring/health/route.ts`
- Sdílené obálky: `open-sse/services/accountFallback.ts`
- Tabulka trvalého stavu: `domain_circuit_breakers`

**Stavy** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: normální provoz je povolen.
- `DEGRADED`: pásmo včasného varování — selhání překročila práh degradace, ale ještě
  ne práh breakeru; provoz stále teče, dashboardy zobrazují varování. Platný test
  připojení nebo klidné okno bez nového selhání jej vrátí do `CLOSED`
  (okno popisuje `docs/architecture/RESILIENCE_GUIDE.md`).
- `OPEN`: poskytovatel je dočasně zablokován; volající dostanou odpověď
  provider-circuit-open, nebo combo směrování přeskočí na jiný cíl.
- `HALF_OPEN`: uplynul časový limit resetu; povolí se zkušební požadavek. Úspěch
  breaker uzavře, selhání jej znovu otevře.

**Výchozí hodnoty** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, spotřebováváno přes
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` v `src/lib/resilience/settings.ts` →
`getCircuitBreaker(provider, …)` v `src/sse/handlers/chatHelpers.ts`). Breaker celého
poskytovatele běží na `circuitBreakerThreshold` / `circuitBreakerReset`:

| Profil   | degraduje se při | otevře se při (`circuitBreakerThreshold`) | reset (`circuitBreakerReset`) |
| -------- | ---------------: | ----------------------------------------: | ----------------------------: |
| OAuth    |              `5` |                                       `8` |                         `60s` |
| API klíč |              `7` |                                      `12` |                         `30s` |
| Lokální  |       (odvozeno) |                                       `2` |                         `15s` |

`PROVIDER_PROFILES` také definuje `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (15/30/5 min) a `providerCooldownMs` (5/10/1 min): tyto pohánějí
**okenní bránu volitelného globálního Provider Cooldown** (`PROVIDER_COOLDOWN_ENABLED`, ve
výchozím stavu vypnuto) — záznam na úrovni poskytovatele v
`open-sse/services/providerCooldownTracker.ts` se počítá jako chladnoucí až po
`providerFailureThreshold` selháních uvnitř `providerFailureWindowMs`, a poté chladne po
dobu `providerCooldownMs`. NEJSOU to prahy živého breakeru — nenalaďujte je
v očekávání chování breakeru. Každou výchozí hodnotu lze přepsat pomocí env proměnných
`OMNIROUTE_PROVIDER_BREAKER_*` a `OMNIROUTE_CIRCUIT_BREAKER_*`; referenční tabulka přesná
pro běh systému se nachází v `docs/architecture/RESILIENCE_GUIDE.md`.

Pouze stavy selhání na úrovni poskytovatele by měly aktivovat breaker poskytovatele:

```ts
(408, 500, 502, 503, 504);
```

Neaktivujte breaker celého poskytovatele pro běžné chyby účtu/klíče/modelu, jako je
většina případů `401`, `403` nebo `429`. Ty obvykle patří do connection cooldown nebo
model lockout. Obecné `403` poskytovatele s API klíčem by mělo být obnovitelné, pokud
není klasifikováno jako terminální chyba poskytovatele/účtu.

Jistič používá línou obnovu, nikoli časovač na pozadí. Když vyprší stav `OPEN`,
čtení jako `getStatus()`, `canExecute()` a `getRetryAfterMs()` obnoví stav na
`HALF_OPEN`, takže nástěnky a sestavovače kandidátů na kombinace (combo)
nevylučují poskytovatele s vypršenou platností donekonečna.

### Cooldown spojení

**Rozsah**: jedno spojení/účet/klíč poskytovatele.

**Účel**: dočasně přeskočit jeden vadný klíč/účet a zároveň umožnit, aby ostatní
spojení stejného poskytovatele dál obsluhovala požadavky.

**Implementace**:

- Cesta pro zápis/aktualizaci: `src/sse/services/auth.ts::markAccountUnavailable()`
- Výběr/filtrování účtů: `src/sse/services/auth.ts::getProviderCredentials...`
- Výpočet cooldownu: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Nastavení: `src/lib/resilience/settings.ts`

Důležitá pole na spojeních poskytovatele:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

Při výběru účtu je spojení přeskakováno, pokud:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

Cooldowny jsou také líné: když je `rateLimitedUntil` v minulosti, spojení se opět
stává způsobilým. Při úspěšném použití `clearAccountError()` vymaže `testStatus`,
`rateLimitedUntil`, chybová pole a `backoffLevel`.

Výchozí chování cooldownu spojení:

- Základní cooldown pro OAuth: `5s`.
- Základní cooldown pro API klíč: `3s`.
- U API klíče by se u chyby `429` měly upřednostňovat nápovědy pro opakování z upstreamu
  (`Retry-After`, resetovací hlavičky nebo parsovatelný text resetu), pokud jsou
  k dispozici.
- Opakované opravitelné chyby používají exponenciální backoff:

```ts
baseCooldownMs * 2 ** failureIndex;
```

Pojistka proti efektu thundering herd (náhlému hromadnému náporu) zabraňuje tomu, aby
souběžná selhání na stejném spojení opakovaně prodlužovala cooldown nebo dvakrát
inkrementovala `backoffLevel`.

Terminální stavy nejsou cooldowny. `banned`, `expired` (který se stává terminálním až
po N omezených opakováních prostřednictvím `EXPIRED_RETRY_MAX`) a
`credits_exhausted` mají zůstat nedostupné, dokud se nezmění přihlašovací
údaje/nastavení nebo je operátor neresetuje. Nepřepisujte terminální stavy přechodným
stavem cooldownu.

### Zablokování modelu

**Rozsah**: poskytovatel + spojení + model.

**Účel**: zabránit deaktivaci celého spojení, když je pro dané spojení nedostupný
nebo kvótově omezený pouze jeden model.

Příklady:

- Poskytovatelé s kvótami na jednotlivé modely vracející `429`.
- Místní poskytovatelé vracející `404` pro jeden chybějící model.
- Selhání oprávnění režimu/modelu specifická pro poskytovatele, například vybrané
  režimy Grok.

Zablokování modelu je implementováno v `open-sse/services/accountFallback.ts` a
umožňuje, aby stejné spojení dál obsluhovalo ostatní modely.

### Pokyny pro ladění

- Pokud jsou všechny klíče poskytovatele přeskakovány, zkontrolujte jak stav jističe
  poskytovatele, tak `rateLimitedUntil`/`testStatus` každého spojení.
- Pokud se zdá, že je poskytovatel trvale vyloučen i po uplynutí okna resetu,
  zkontrolujte, zda kód nečte surový `state` místo použití
  `getStatus()`/`canExecute()`.
- Pokud selže jeden klíč poskytovatele, ale ostatní by měly fungovat, upřednostněte
  cooldown spojení před jističem poskytovatele.
- Pokud selhává pouze jeden model, upřednostněte zablokování modelu před cooldownem
  spojení.
- Pokud se má stav sám obnovit, měl by mít časovou značku v budoucnosti/časový limit
  resetu a cestu čtení, která obnoví vypršený stav. Trvalé stavy vyžadují ruční změnu
  přihlašovacích údajů nebo konfigurace.

---

## TLS fingerprinting a utajení

Utajení specifické pro jednotlivé poskytovatele (JA3/JA4, CCH, obfuskace) je dokumentováno samostatně — viz `docs/security/STEALTH_GUIDE.md` (git; není kompilováno do `/docs`).

---

## Testování odolnosti (fáze 8 · blok C)

Nad rámec jednotkových testů logiky odolnosti existují tři testy, které zatěžují runtime za skutečných podmínek zátěže a selhání (všechny jsou integrační/noční — žádný neblokuje PR):

| Test        | Co ověřuje                                                                                                                                                                           | Spuštění                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| Chaos       | Uzel fake-upstream vkládá skutečnou latenci/resety/timeouty/503; ověřuje, že se circuit breaker otevře a zotaví a že `checkFallbackError` klasifikuje 503 jako obnovitelný fallback. | `RUN_CHAOS_INT=1 npm run test:chaos`   |
| Heap-growth | ~500 streamů na `createSSEStream` pod `--expose-gc`; selže, pokud halda překročí stanovený strop (strážce OOM #3069).                                                                | `npm run test:heap`                    |
| k6 soak     | Trvalá zátěž proti `/api/monitoring/health`; prahové hodnoty p95/chybovosti.                                                                                                         | `k6 run tests/load/k6-soak.js` (noční) |

Orchestrace probíhá přes `.github/workflows/nightly-resilience.yml` (cron + dispatch). Ve výchozím `test:integration` se chaos a heap sami přeskočí (bez `RUN_CHAOS_INT`/`--expose-gc`).

---

## Viz také

- [Průvodce architekturou](./ARCHITECTURE.md) — Architektura systému a vnitřní principy
- [Uživatelská příručka](../guides/USER_GUIDE.md) — Poskytovatelé, kombinace, integrace CLI
- [Auto-Combo Engine](../routing/AUTO-COMBO.md) — 16faktorové skórování, balíčky režimů
