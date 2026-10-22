# Resilience Guide (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute verfügt über drei unterschiedliche, aber verwandte Resilienzmechanismen. Jeder hat einen eigenen Geltungsbereich und Zweck. Halten Sie sie beim Debuggen des Routing-Verhaltens auseinander.

![3-Schichten-Resilienzmodell](../diagrams/exported/resilience-3layers.svg)

> Quelle: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Provider-Circuit-Breaker

**Geltungsbereich:** gesamter Provider (z. B. `glm`, `openai`, `anthropic`).

**Zweck:** den Datenverkehr zu einem Provider stoppen, der auf Upstream-/Service-Ebene wiederholt fehlschlägt.

**Implementierung:**

- Kernklasse: `src/shared/utils/circuitBreaker.ts`
- Verdrahtung: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- Status-API: `GET /api/monitoring/health`
- Reset-API: `POST /api/resilience/reset`
- Wrapper: `open-sse/services/accountFallback.ts`
- DB-Tabelle: `domain_circuit_breakers`

**Zustände:**

- `CLOSED` — normaler Datenverkehr erlaubt
- `DEGRADED` — Datenverkehr weiterhin erlaubt, aber erhöhte Provider-Fehlschläge werden verfolgt; kehrt zu `CLOSED` zurück bei ausreichend vielen Erfolgen, bei einem gültigen Verbindungstest oder nach Ablauf der längsten `OPEN`-Haltezeit für die letzte Fehlerart (deren `cooldownByKind`-Wert, sonst `resetTimeout`, × `maxBackoffMultiplier`, mindestens ein Cooldown) ohne neuen Fehlschlag
- `OPEN` — Provider vorübergehend blockiert; Combo-Routing überspringt ihn
- `HALF_OPEN` — Reset-Timeout abgelaufen; Prüfanfrage erlaubt

**Konfigurierbare Standardwerte (`open-sse/config/constants.ts`, einsehbar unter Dashboard → Einstellungen → Resilienz):**

| Klasse        | Degradiert bei | Öffnet bei      | Reset-Timeout |
| ------------- | -------------- | --------------- | ------------- |
| OAuth         | 5 Fehlschlägen | 8 Fehlschlägen  | 60s           |
| API-Schlüssel | 7 Fehlschlägen | 12 Fehlschlägen | 30s           |
| Lokal         | abgeleitet     | 2 Fehlschlägen  | 15s           |

`degradationThreshold` steuert, wann ein Provider in den Zustand `DEGRADED` eintritt; `failureThreshold` steuert, wann er öffnet und übersprungen wird. Lokale Provider-Profile werden auf der Resilienz-Einstellungsseite noch nicht angezeigt.

**Auslösecodes:** nur Provider-Level-Statuscodes `[408, 500, 502, 503, 504]`. Keine Auslösung bei Account-Level-Fehlern (die meisten 401/403/429 — diese gehören zu Cooldown oder Lockout).

**Lazy Recovery:** Wenn `OPEN` abläuft, aktualisieren `getStatus()`, `canExecute()`, `getRetryAfterMs()` den Zustand auf `HALF_OPEN`. Dieselben Lesevorgänge (und der nächste Fehlschlag) lassen einen veralteten `DEGRADED` zurück auf `CLOSED` abklingen. Kein Hintergrund-Timer erforderlich.

---

### Opt-in globaler Provider-Cooldown (Fenster-Gate)

Eine vierte, **Opt-in**-Schicht (`PROVIDER_COOLDOWN_ENABLED`, standardmäßig **aus**) führt in
`open-sse/services/providerCooldownTracker.ts` ein anfrageübergreifendes Gedächtnis fehlschlagender Provider, das bei der Combo-Zielauflösung herangezogen wird, damit aufeinanderfolgende Combo-Anfragen einen gerade fehlgeschlagenen Provider nicht erneut durchlaufen. Provider-Level-Einträge berücksichtigen das `PROVIDER_PROFILES`-Fenster-Gate:

| Profil        | löst aus nach (`providerFailureThreshold`) | innerhalb von (`providerFailureWindowMs`) | kühlt ab für (`providerCooldownMs`) |
| ------------- | -----------------------------------------: | ----------------------------------------: | ----------------------------------: |
| OAuth         |                                       `10` |                                   `15min` |                              `5min` |
| API-Schlüssel |                                       `15` |                                   `30min` |                             `10min` |

Unterhalb des Schwellenwerts gilt der Provider **nicht** als abkühlend; ein Erfolg leert das Fenster. Verbindungs-Level-Einträge (`provider:connectionId`) behalten stattdessen den exponentiellen `minRetryCooldownMs → maxRetryCooldownMs`-Backoff bei. Überschreibungen:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Regressionsabsicherung: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Verbindungs-Cooldown

**Geltungsbereich:** einzelne Provider-Verbindung/-Konto/-Schlüssel.

**Zweck:** einen schlechten Schlüssel überspringen, während andere Verbindungen desselben Providers weiter bedienen.

**Implementierung:**

- Als nicht verfügbar markieren: `src/sse/services/auth.ts::markAccountUnavailable()`
- Auswahl: `getProviderCredentials*` in derselben Datei
- Cooldown-Berechnung: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Einstellungen: `src/lib/resilience/settings.ts`

**Felder pro Verbindung:**

- `rateLimitedUntil` — Zeitstempel, bis der Cooldown abläuft
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — exponentieller Backoff-Zähler

**Standard-Cooldowns:**

- OAuth-Basis: 5s
- API-Schlüssel-Basis: 3s
- API-Schlüssel 429: bevorzugt Upstream-`Retry-After`/Reset-Header/parsebaren Reset-Text
- Backoff: `baseCooldownMs * 2 ** failureIndex`

**Anti-Thundering-Herd-Schutz:** verhindert, dass gleichzeitige Fehler den Cooldown übermäßig verlängern oder `backoffLevel` doppelt erhöhen.

**429er wegen Parallelitätslimits steigen nicht die Backoff-Leiter hinauf.** Ein `429`, dessen Body ein
Parallelitätslimit meldet ("too many concurrent requests", "concurrency limit", "parallel request
limit", GLM `并发数过高`), bedeutet, dass das Konto gesund, aber ausgelastet ist.
`checkFallbackError()` gibt den Grund `concurrency_limited` zurück: jetzt auf die nächste
Verbindung ausweichen, diese hier für ein festes `CONCURRENCY_LIMIT_COOLDOWN_MS` (1s) oder den
Upstream-Retry-Hinweis abkühlen, `backoffLevel` unverändert lassen und `skipProviderBreaker`
setzen. Ein expliziter Quota-Body hat weiterhin Vorrang, sodass ein Body, der auch auf ein
Quota-Muster passt, ein Quota-Urteil bleibt. Erkennung: `looksLikeConcurrencyLimit()` in
`src/shared/utils/classify429.ts`; Urteil: `open-sse/services/accountFallback/concurrencyLimit429.ts`.
`classify429()` (das `FailureKind` des Breakers) ist unverändert und liest für diese Bodies
weiterhin `rate_limit`.

**Stream-Inhaltsstaus kühlen das Konto nicht ab.** Wenn der Content-Stall-Watchdog
(`open-sse/utils/streamHandler.ts`) einen Stream aufgibt, der rechtzeitig keine Modellausgabe
gesendet hat, zeichnet `markAccountUnavailable()` den Fehler auf der Verbindung auf, setzt aber
keinen Cooldown: Der Stall gehört zu dieser Anfrage, meist ein langer Reasoning-Turn ohne
bisherige Ausgabe. Betreiber können dies mit `resilienceSettings.streamStallCooldown.enabled`
(Standard `false`) wieder aktivieren.

**Reasoning-Frames starten das Content-Stall-Budget neu.** Ein Reasoning-Modell kann minutenlang
denken, bevor sein erstes sichtbares Token erscheint: Claude streamt `thinking_delta`-Frames,
deren Thinking-Text leer sein kann, und die Responses API streamt ein Reasoning-Element nach
dem anderen. `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) erkennt diese
Frames, und der Watchdog startet sein Budget bei jedem davon neu, statt den Turn abzubrechen.
Sie sind weiterhin keine Modellausgabe, sodass ein Turn, der nur mit Reasoning endet, weiterhin
als leer gemeldet wird, und ein Turn, der das Reasoning einstellt und nur noch Heartbeats
sendet, löst den Watchdog weiterhin aus.

Kiros binäre `reasoningContentEvent`-Frames mit einer nicht-leeren Signatur bewahren diese
Reasoning-Aktivität durch den Executor als leeres `reasoning_content`-Delta. Die Signatur wird
nicht weitergeleitet. Metadaten, unvollständige Frames und leere Signaturen starten das
Content-Budget nicht neu; der unabhängige Active-Stream-Timeout und die Client-Stornierung gelten
weiterhin (`open-sse/executors/kiro/reasoning.ts`).

**Terminalzustände (KEINE Cooldowns):**

- `banned` — gesetzt durch Banned-Keyword-/Konto-Ban-Erkennung (siehe [BAN_DETECTION](../security/BAN_DETECTION.md)) und durch drei aufeinanderfolgende Upstream-Ablehnungen pro Anfrage (`request_rejected`, z. B. Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); eine einzelne Ablehnung kühlt nur die Verbindung ab
- `expired` (geht nach begrenzten Wiederholungen in den Terminalzustand über — `EXPIRED_RETRY_MAX = 3` mit exponentiellem Backoff —, damit sich vorübergehende OAuth-Fehler selbst heilen können, bevor das Konto dauerhaft deaktiviert wird)
- `credits_exhausted`

Diese bleiben bestehen, bis sich die Anmeldedaten ändern oder ein Betreiber sie zurücksetzt.
Terminalzustände nicht mit vorübergehendem Cooldown-Zustand überschreiben.

**Lazy Recovery:** Wenn `rateLimitedUntil` überschritten ist, wird die Verbindung wieder zulässig.
Bei erfolgreicher Nutzung löscht `clearAccountError()` alle Fehlerfelder.

### Claude-OAuth-Nutzungswand: Lane mit niedrigerer Priorität + Sitzungslimit-Reset

**Geltungsbereich:** eine Claude-Abonnement-(OAuth-)Verbindung. Beide Funktionen sind **pro
Verbindung opt-in** (Verbindung bearbeiten → Claude-Bereich → `lowPriorityMode` / `autoLimitReset`
in `providerSpecificData`, beide standardmäßig deaktiviert) und spiegeln Claude Codes
`/low-priority`- und `/limit-reset`-Befehle (Wire-Vertrag aus Claude Code 2.1.263 erfasst).

**Implementierung:**

- Zustandsmaschine + Antwortklassifizierung: `open-sse/services/claudeLowPriority.ts`
- Reset-Status-/Claim-Client: `open-sse/services/claudeLimitReset.ts`
- Executor-Hook (Header-Injektion + Wiederholung auf demselben Konto): `open-sse/executors/base.ts::execute()`
- Opt-in-Persistenz: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**Auslöser:** die 5-Stunden-Nutzungswand — ein `429`, dessen Header
`anthropic-ratelimit-unified-status: rejected` tragen und, wenn das Konto zulässig ist,
`anthropic-ratelimit-unified-slow-offer: treatment`. Vor diesem ersten Wand-429 wird nichts
gesendet; ein Burst-429 ohne Unified-Header durchläuft den normalen Cooldown-Pfad.

**Lane mit niedrigerer Priorität** (`lowPriorityMode`):

- Bei einem Wall-429 nimmt der Executor das Angebot an und wiederholt sofort den **gleichen**
  Account mit `anthropic-usage-limit: slow`; die Lane bleibt aktiv bis zum angekündigten
  `anthropic-ratelimit-unified-reset` (+60 s Kulanz), und jede Anfrage in diesem Zeitfenster trägt
  den Header. Der abgefangene 429 erreicht nie `handleChatCore`, daher wird die Verbindung
  **nicht** in den Cooldown versetzt und nicht wegrotiert.
- `anthropic-ratelimit-unified-slow-status` bei späteren Antworten: `active` / `not_needed`
  behalten die Lane bei; `slot_busy` (429) oder ein `529` warten auf den
  `anthropic-ratelimit-unified-slow-retry-after` des Servers (Standard 20 s, begrenzt auf 5–600 s, ±30 % Jitter)
  und versuchen es erneut, begrenzt durch `anthropic-ratelimit-unified-slow-max-wait` (Standard 20 min, begrenzt
  auf 1 min–6 h) — darüber hinaus endet die Lane und eine 10-minütige Abkühlphase blockiert die erneute
  Annahme. Die Wartezeit wird zusätzlich durch den Rest des eigenen Upstream-Start-Timeouts
  der Anfrage (`resolveFetchStartTimeout`, standardmäßig 10 min) abzüglich einer 5-s-Marge
  gedeckelt: Ohne diese Deckelung würde das standardmäßige Max-Wait von 20 Minuten die Anfrage überleben
  und der Sleep mitten im Warten abgebrochen werden, was einen `TimeoutError` statt des sauberen
  `max_wait`-Endes + Cool-off zutage fördern würde.
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, ein Rollover des 5h-Fensters oder
  `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (was die Lane bei jedem Status
  als `extra_usage` beendet, da bezahltes Overage nun die Wall abdeckt) beenden die Lane; die
  Antwort fließt dann in den normalen Cooldown-Pfad. `budget_exhausted` wird bis zum
  angekündigten Budget-Reset gemerkt (≤ 8 Tage).
- Die Wall-Prüfung läuft nach den eigenen, durch 400 ausgelösten Intra-Attempt-Retries des
  Executors (Context-Editing, Thinking/Effort-Clamps, Param-Auto-Learn), sodass ein Wall-429, der erst
  bei einem dieser Retries auftaucht, trotzdem abgefangen wird, statt den Cooldown-Pfad zu erreichen.
- Der Zustand liegt pro Verbindung im Speicher (ein Neustart kostet einen zusätzlichen Wall-429, um
  wieder anzunehmen).

**Session-Limit-Reset** (`autoLimitReset`, wird vor der Lane versucht, wenn beide aktiv sind):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → `juniper_tide`-Block;
  wenn `arm: "reset"` und `available: true`,
  `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` mit
  `{ "program": "juniper_tide" }` (Organisations-UUID aus
  `providerSpecificData.organizationUUID`, Bootstrap-Fallback).
- `result: reset|not_limited` → die Anfrage wird mit voller Geschwindigkeit wiederholt (kein Slow-Header).
  `already_used` / `not_offered` merken sich `next_available_at` (Standard: eine Woche); jeder
  Fehler führt zu einem 15-minütigen Backoff. Der Reset ist einmal pro Woche möglich und zählt weiterhin
  auf das Wochenlimit.

Regressionsschutz: `tests/unit/claude-low-priority-mode.test.ts`,
`tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`.

### Session-Affinität (#7274)

**Umfang:** eine Client-Session (`X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`-Header) an eine Verbindung gepinnt, für **jeden** Provider.

**Zweck:** einen Multi-Turn-Agenten (Claude Code, aider, eigene Agenten) über Anfragen hinweg auf demselben Account halten, um accountübergreifenden Kontextverlust und wiederholte Cold-Start-429s bei Providern mit Session-Zustand pro Account zu reduzieren.

**Implementierung:**

- TTL-Auflösung: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Pin-Auswahl/-Erstellung: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Header-Extraktion (generisch, jeder Provider): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Persistierte Pin-Tabelle: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Einstellung: `sessionAffinityTtlMs` (globale TTL in ms, `0` deaktiviert) — `src/lib/db/settings.ts`. Umbenannt vom Codex-spezifischen `codexSessionAffinityTtlMs` durch die Migration `124_generic_session_affinity_ttl.sql`, die eine zuvor konfigurierte Codex-TTL als neuen Standard übernimmt.

Vor #7274 brach `resolveSessionAffinityTtlMs()` für jeden Provider außer `codex` hart auf `0` ab, sodass die TTL-Einstellung (und die Session-Header) überall sonst wirkungslos blieben, obwohl der Pinning-Mechanismus und die Header-Extraktion bereits provider-agnostisch waren. Der Fix entfernte diesen Early-Return; die TTL gilt nun einheitlich für jeden Provider, sobald sie global auf einen Wert über `0` gesetzt ist.

Die drei Session-Affinitäts-Header werden nie upstream weitergegeben — Executors bauen ihre eigenen Upstream-Header von Grund auf neu, statt Client-Header durchzureichen; daher bleibt dies ausschließlich eine interne Korrelations-ID.

### Exklusive Verbindungs-Leases für verwaltete Sessions

**Umfang:** ein aktiver verwalteter HTTP-Client/eine aktive verwaltete Session besitzt eine infrage kommende OmniRoute-Verbindung.

**Zweck:** dauerhafte exklusive Verbindungsinhaberschaft für Clients bereitstellen, die über Anfragen hinweg einen harten Routing-Zaun benötigen. Dies unterscheidet sich von der Session-Affinität, einer weichen Kontinuitätspräferenz: Ein exklusives Lease persistiert Lifecycle-Zustand in SQLite, erzwingt globale Eindeutigkeit von aktivem Owner und aktiver Verbindung und weist eine veraltete Generation vor dem Provider-Dispatch zurück.

Das Feature ist pro API-Key opt-in. Ein verwalteter Key muss den Scope `lease:exclusive` sowie eine explizite, nicht leere `allowedConnections`-Liste besitzen. Jeder HTTP-Client kann den Lifecycle-Endpoint verwenden; weder Client-Name, User-Agent, Provider, OAuth-Methode noch Modell sind erforderlich. Das Lease besitzt eine Verbindung, kein Modell; ein Modellwechsel behält daher die Bindung bei, solange die Verbindung regulär infrage kommt. Die normalen Modell-, Quota-, Health-, Cooldown- und Allowlist-Regeln bleiben maßgeblich und können dieselbe Generation auf eine andere freie, infrage kommende Verbindung überführen.

Der Lebenszyklus ist `POST /api/v1/session-leases` mit den JSON-Aktionen `acquire`, `renew` und `release`.
Verwaltete Inferenzanfragen übermitteln den opaken `X-OmniRoute-Lease-Owner`-Wert und die exakte
`X-OmniRoute-Lease-Generation`. Der Owner verwendet `vlo_`, gefolgt von 43 Base64url-Zeichen;
gespeichert wird nur sein SHA-256-Hash. Jede finale Dispatch-Fence bindet außerdem die
authentifizierte API-Key-ID und die aktive Verbindungs-ID. Lease-Steuerungs-Header werden aus Logs,
aufbewahrten Request-Snapshots und Upstream-Executor-Headern entfernt.

Wenn das normale Routing geeignete verwaltete Kandidaten hat, aber jeder freie Kandidat durch ein
fremdes aktives Lease belegt ist, gibt OmniRoute HTTP `429` zurück, den Code
lease-capacity-unavailable, den Zustand waiting-for-capacity und einen begrenzten `Retry-After`-Wert,
der aus dem frühesten relevanten Ablaufzeitpunkt abgeleitet wird. Eine gewöhnliche leere
Eignungsmenge ist keine Lease-Konkurrenz und behält ihre bestehende Routing-Fehlersemantik bei.

Verwandte Mechanismen bleiben getrennt:

- Die OAuth-Sitzungsbelegung ist eine prozesslokale weiche Verteilung für OAuth-Konten.
- Konto-Semaphore gewähren Genehmigungen für Anfrage-Nebenläufigkeit und enden, wenn eine Anfrage abgeschlossen ist.
- Exklusive verwaltete Sitzungs-Leases sind dauerhafter Lebenszyklus-Besitz mit einer Generations-Fence.

---

## 3. Model Lockout

**Geltungsbereich:** Provider + Verbindung + Modell-Tripel.

**Schlüssel-Scope nach Status:** Der fehlgeschlagene Status entscheidet, auf welchen Schlüssel ein Lockout geschrieben wird (`resolveLockoutScope()` in `open-sse/services/accountFallback/exactModelLock.ts`):

- `429` / `403` / `402` — ein Quota- oder Entitlement-Signal — sperrt die **Quota-Familie**:
  für codex den gesamten `codex`-/`spark`-Scope (jedes `gpt-5*`-Modell der
  Verbindung), für andere Provider `getQuotaScopedModelForProvider()`.
- `404` sperrt das reine Modell (`getModelLockKey()` grenzt `not_found` ein).
- Jeder andere Status — `5xx`-Transport-/Serverfehler und OmniRoutes eigener, aus
  der Qualitätsvalidierung synthetisierter `502` — sperrt nur das **exakte**
  Provider/Verbindung/Modell-Tupel. Ein fehlerhafter Stream bei einem Modell sagt
  nichts über das Kontingent des Kontos aus; vor dieser Regel entfernte eine
  einzige leere Antwort auf `codex/gpt-5.6-luna` jedes `gpt-5*`-Modell dieser
  Verbindung für 2–30 Min. (eskalierend) aus dem Routing, während das Kontingent
  unberührt blieb.
- Die explizite `scope`-Option eines Aufrufers hat immer Vorrang (Antigravity übergibt `"exact"`).

**Zweck:** verhindern, dass eine ganze Verbindung deaktiviert wird, wenn nur ein Modell nicht verfügbar oder kontingentbegrenzt ist.

**Beispiele:**

- Provider mit Pro-Modell-Kontingent, die 429 zurückgeben
- Lokale Provider, die 404 für ein fehlendes Modell zurückgeben
- Providerspezifische Modus-/Modell-Berechtigungsfehler (z. B. Grok-Modi)

**Implementierung:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Model Cooldowns Dashboard (v3.8.0)

UI: Einstellungen → Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Listet aktive Lockouts auf mit: provider, connection, model, reason, expiresAt. Operatoren können ein Modell über die Karte manuell wieder aktivieren.

**REST-API:**

- `GET /api/resilience/model-cooldowns` — aktive Lockouts auflisten
- `DELETE /api/resilience/model-cooldowns` — manuelle Wiederaktivierung. Body: `{provider, connection, model}`. Auth: management.

### Cooldown Manager

UI: Monitoring → Cooldown Manager (`src/app/(dashboard)/dashboard/resilience/cooldowns/`).

Eine Seite für jede Verbindung, die aus einem vorübergehenden Grund aus dem Routing
genommen wurde, statt jede Provider-Seite einzeln zu öffnen. Sie listet
Verbindungs-Cooldowns, Modell-Lockouts und terminale Zustände, löscht sie pro
Verbindung, für eine Auswahl oder für alle Verbindungen eines Providers, und
bearbeitet die am häufigsten angepassten Cooldown-Regeln:
`streamStallCooldown.enabled` sowie den Basis-Cooldown und die maximalen
Backoff-Stufen des OAuth-/API-Schlüssel-`connectionCooldown` (gespeichert über
`PATCH /api/resilience`). Terminale Zustände (`banned`, `expired`,
`credits_exhausted`) werden aufgelistet, aber hier nie gelöscht.

**REST-API** (`src/lib/resilience/cooldownManager.ts`, Auth: management):

- `GET /api/resilience/cooldowns[?provider=]` — Verbindungen mit Status,
  verbleibendem Cooldown, Backoff-Stufe, letztem Fehlertyp und Modell-Lockouts
  (keine Zugangsdaten)
- `POST /api/resilience/cooldowns` — Body `{connectionIds: string[]}` oder
  `{all: true, provider?}`; gibt `{cleared, unchanged, skippedTerminal, lockoutsCleared}` zurück

### Lockout-Einstellungs-UI + Success-Decay-Wiederherstellung (v3.8.23)

Model Lockout wandelte sich von einem immer aktiven, hartcodierten Verhalten zu einer
vollständig konfigurierbaren Opt-in-Funktion mit eigener Einstellungskarte und einem
selbstheilenden Wiederherstellungspfad.

**Einstellungskarte:** Einstellungen → Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Diese ist **verschieden** von der schreibgeschützten `ModelCooldownsCard` oben
(die aktive Lockouts nur _auflistet_) — die neue Karte _konfiguriert die
Parameter_. Standardwerte liegen in `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| Einstellung             | Standard                         | Bedeutung                                                    |
| ----------------------- | -------------------------------- | ------------------------------------------------------------ |
| `enabled`               | `false`                          | Hauptschalter — Model Lockout ist **standardmäßig aus**.     |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Upstream-Statuscodes, die als modellbezogener Fehler zählen. |
| `baseCooldownMs`        | `120_000` (120 s)                | Anfängliche Lockout-Dauer für den ersten Fehler.             |
| `maxCooldownMs`         | `1_800_000` (30 Min.)            | Obergrenze für den eskalierten Cooldown.                     |
| `maxBackoffSteps`       | `10`                             | Maximale Eskalationsstufen des exponentiellen Backoffs.      |
| `useExponentialBackoff` | `true`                           | Ob wiederholte Fehler den Cooldown exponentiell eskalieren.  |

Einstellungen werden über den normalen Settings-Store persistiert und über das
Resilience-Einstellungsschema validiert; die Karte begrenzt
`baseCooldownMs`/`maxCooldownMs` (mit `maxCooldownMs ≥ baseCooldownMs`) und
`maxBackoffSteps`.

**Success-Decay-Wiederherstellung:** Die Wiederherstellung ist **nicht** reines
Timer-Ablaufen. Eine erfolgreiche Antwort zählt den Fehlerzähler des Modells
schrittweise zurück, sodass ein Modell, das sich mitten im Fenster erholt hat,
nicht weiter eskaliert (und freigegeben wird), bevor sein Timer ablaufen würde.
Bei einem erfolgreichen Combo-Ziel ruft `open-sse/services/combo.ts`
`decayModelFailureCount()` (`open-sse/services/accountFallback.ts`) auf, das den
gespeicherten `failureCount` **halbiert** (`Math.floor(failureCount / 2)`);
erreicht er `0`, wird der Lockout-Eintrag vollständig gelöscht. Das Gegenstück
`recordModelLockoutFailure()` erhöht den Zähler (und eskaliert den Cooldown) bei
Fehlern innerhalb des Eskalationsfensters. Dieser Success-Decay gilt zusätzlich
zum einfachen Timer-Ablauf — beide Pfade können ein Modell wieder aktivieren.

**Zustand:** Lockouts werden **im Arbeitsspeicher** gehalten (prozesslokale
`Map`s von `ModelLockoutEntry` mit den Schlüsseln
`provider:connectionId:model`, Exact-Scope-Sperren mit
`provider:connectionId:exact:model`), nicht in der DB persistiert — sie gehen bei
einem Neustart verloren. Die _Einstellungen_ werden persistiert; der aktive
Lockout-_Zustand_ ist ephemer.

---

## 4. Quota-Share-Parallelitätssteuerung (v3.8.36)

Abonnement-Konten (GLM, MiniMax usw.) akzeptieren oft nur ~1–3 gleichzeitige
Anfragen; eine Überschreitung löst 429-Fehler und Cooldowns aus. Besonders akut
ist dies bei **Quota-Share**-Kombos (`qtSd/…`), bei denen sich mehrere
API-Schlüssel ein Upstream-Konto teilen. Drei Ebenen verhindern, dass ein
geteiltes Konto überflutet wird.

### Parallelitätslimit pro Verbindung (`max_concurrent`)

Jede Provider-Verbindung kann ein `max_concurrent`-Limit deklarieren
(`provider_connections.max_concurrent`, gesetzt im Verbindungsmodal / per API / DB).
Leer lassen für kein Limit. Dies ist der zentrale Regler, der die unten
beschriebene Serialisierungsebene steuert – auf die tatsächliche Parallelität
des Kontos setzen (z. B. GLM ~1, MiniMax ~2).

### Parallelitätslimits pro Modell (`modelConcurrency`)

Eine Verbindung kann zusätzlich exakte Parallelitätslimits pro Modell
innerhalb ihrer `rateLimitOverrides`-Map deklarieren:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

Im Verbindungsmodal einstellen (**Rate-Limit-Überschreibungen → Parallelitätslimits
pro Modell**, ein `model=cap` pro Zeile) oder über
`PATCH /api/providers/[id]` mit derselben JSON-Struktur. Wichtige Semantik:

- **Verbindungsweit vs. modellspezifisch:** `maxConcurrent` bleibt das gemeinsame
  verbindungsweite Limit. Wenn beide gelten, werden beide Gates atomar
  im selben zusammengesetzten Gate erworben
  (`global → provider → account → model`); das effektive Verhalten entspricht dem
  strengeren anwendbaren Limit.
- **Exakte Modellschlüssel-Übereinstimmung:** Der Schlüssel ist der Modellstring,
  der nach der Routing-Auflösung an den Executor übergeben wird – normalerweise
  die reine Upstream-Modell-ID (`glm-5`), nicht ein clientseitiger
  `provider/model`-Alias (`zai/glm-5` stimmt nicht mit `glm-5` überein). Werte
  sind positive ganzzahlige Obergrenzen für gleichzeitige Anfragen.
- **Lokale Einreihung, keine Erkennung:** Überschüssige Anfragen reihen sich lokal
  mit der bestehenden Warteschlangen-/Timeout-Semantik ein (typisierte
  `SEMAPHORE_TIMEOUT`- / `SEMAPHORE_QUEUE_FULL`-Zulassungsfehler). OmniRoute
  erkennt bzw. erschließt keine Upstream-Richtlinien – es erzwingt exakt die
  Obergrenzen, die der Betreiber konfiguriert hat. Ein gesättigtes Modell-Gate
  deaktiviert den Provider niemals und erzeugt niemals eine permanente
  Modellsperre; das Upstream-Verhalten bei 429/Cooldown/Fallback bleibt die
  letzte Fehlerabsicherung.
- **Geltungsbereich pro Verbindung und Prozess:** Limits gelten pro
  Datenbankverbindung und werden im Speicher gehalten; zwei Verbindungen, die
  denselben Upstream-API-Schlüssel wiederverwenden, stimmen sich daher nicht
  untereinander ab.
- **Nicht konfiguriert heißt unverändert:** Das Weglassen der Map (oder ein leer
  gelassenes Dashboard-Feld) fügt kein Modell-Gate hinzu. Beispielkonfiguration,
  ohne ein universelles Provider-Limit zu behaupten:

```text
glm-5=1
glm-4.7=3
```

### Quota-Share-Anfragenserialisierung

Wenn ein Quota-Share-Dispatch auf eine Verbindung zielt, die ein positives
`max_concurrent` deklariert, werden gleichzeitige Anfragen an dieses **Konto**
über ein Semaphor pro Verbindung serialisiert (Schlüssel `qsconn:<connectionId>`):
Überschüssige Anfragen **warten in der Warteschlange**, statt das Konto zu
überfluten. Der Mechanismus ist **fail-open** – eine volle Warteschlange oder ein
Timeout setzt die Verarbeitung ohne Slot fort, statt jemals eine dispatchfähige
Anfrage abzulehnen. Umschaltbar unter **Einstellungen → Resilienz →
Quota-Share-Parallelität pro Verbindung**
(`resilienceSettings.quotaShareConcurrencyLimit.enabled`, standardmäßig
aktiviert). Ohne ein `max_concurrent`-Limit bleibt das Verhalten unverändert.

> Das Quota-Share-Routing-Gate (`selectQuotaShareTarget`, DRR + P2C) ist selbst
> fail-open und stuft eine ausgelastete Verbindung lediglich _herab_ – bei einem
> Pool mit nur einer Verbindung kann es kein hartes Limit durchsetzen, daher ist
> dieses Semaphor das, was die Flut tatsächlich eindämmt.

### Cooldown-bewusste Combo-Wiederholung

Bei jeder Kombo-Strategie (sofern aktiviert) wartet eine Anfrage, die einen 429
für einen KURZEN transienten Cooldown als Ergebnis fixieren würde, diesen ab und
dispatcht erneut, statt den 429 zurückzugeben – dies deckt TPM/RPM-Fenster der
Gemini-Klasse (~60s Retry-After) bei Multi-Modell-Kombos ab, etwa wenn beide
Ziele einer 2-Modell-Kombo ein modellbezogenes Rate-Limit erreichen. Begrenzt
durch `comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`, `budgetMs`)
unter **Einstellungen → Resilienz**. Es wartet niemals bei `quota_exhausted`
(bis Mitternacht gesperrt) oder bei Authentifizierungs-/Nicht-gefunden-Gründen.

Dasselbe Gate deckt den Pre-Dispatch-Fall ab (#16319): Wenn jedes Ziel einer
Kombo übersprungen wird, bevor auch nur ein Versuch unternommen wurde, weil sich
sein Modell in einer kurzen transienten Sperre befindet, wartet der
Null-Versuch-Pfad die Sperre unter denselben Obergrenzen ab und dispatcht erneut,
statt mit einem hinweislosen `503 ALL_TARGETS_SKIPPED` zu antworten. Wenn kein
Warten erlaubt ist (Obergrenze, Versuche oder Budget erschöpft oder das Feature
deaktiviert), wird die terminale Antwort auf `429 rate_limit_error` hochgestuft
und trägt `retry_after` / `reset_at` vom frühesten Ablauf einer transienten
Sperre; Quota-, Auth- und Nicht-gefunden-Sperren behalten die hinweislose 503 bei.

---

## 5. Zulassungssteuerung der Request-Warteschlange (v3.8.49 · Issue #6593)

**Geltungsbereich**: die lokale Rate-Limit-Warteschlange pro Provider+Verbindung (`open-sse/services/rateLimitManager.ts`, auf Basis von Bottleneck), eine Ebene unterhalb der drei oben beschriebenen Mechanismen.

**`maxWaitMs` begrenzt das Warten in der Warteschlange; `executionMaxWaitMs` begrenzt die Ausführung.**
Die beiden sind bewusst voneinander getrennt, und keiner der Werte speist den anderen.

`resilienceSettings.requestQueue.maxWaitMs` ist das **Budget für die Warteschlangen-Wartezeit**: Es deckt das Warten auf einen Provider-Slot und das anschließende Verweilen im Status QUEUED ab, und sein Timer wird in dem Moment gelöscht, in dem der Job den Status QUEUED verlässt und mit der Ausführung beginnt (`rateLimitManager.ts`, `wrappedFn`). Ein Request, der das Budget überschreitet, erreicht das Upstream-System nie. Standardwert 30000 ms, bereitgestellt von `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS` in `src/lib/resilience/settings.ts` und abgesichert durch `tests/unit/ratelimit-admission-control-6593.test.ts`, sodass eine Änderung daran diesen Test rot werden lässt, statt diesen Absatz still veralten zu lassen.

`resilienceSettings.requestQueue.executionMaxWaitMs` ist der Wert, den Bottleneck als `expiration` des Jobs erhält und dessen Timer erst nach dem Dispatch startet. Er ist eine letzte Absicherung für Executoren ohne eigenes Upstream-Timeout und wird auf das eigene Fetch-Start-Timeout des Executors angehoben, wenn dieses länger ist, sodass er eine gesunde, bereits laufende Antwort nicht abschneiden kann. Standardwert 600000 ms (10 Min.).

Das Einspeisen des Warteschlangen-Budgets in `expiration` war es, das nicht-inkrementelle Gateways früher mitten im Flug abbrach – sie laufen legitim minutenlang, bevor die ersten Bytes ankommen –, und es ist der Grund, warum ein Ablauf der `expiration` als `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) gemeldet wird, während das Warteschlangen-Budget den Queue-Timeout-Code trägt. Beide Werte lassen sich über `RATE_LIMIT_MAX_WAIT_MS` / `RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (Env) oder das Dashboard (**Einstellungen → Resilienz**) überschreiben. Beide werden bei der Normalisierung auf 1 ms–24 h begrenzt.

**Vorrang, für beide:** Die Env-Variable liefert nur den _Standardwert_. Ein in `resilienceSettings.requestQueue` persistierter Wert (Dashboard / API-Patch, gespeichert in `key_value`) hat Vorrang vor ihr, und ein verbindungsspezifischer `rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` hat wiederum Vorrang davor. Das Setzen der Env-Variable bei einer Bereitstellung, die bereits einen persistierten Wert hat, ändert daher nichts – löschen oder aktualisieren Sie stattdessen die persistierte Einstellung.

Die Verweildauer in der Warteschlange wird durch `maxWaitMs` begrenzt; `maxQueueDepth` weiter unten begrenzt, wie viele Aufrufer gleichzeitig eingereiht sein dürfen.

**Im Body genannte Wiederholungen: Pacing vs. Sperrung.** Ein 429-Body kann eine eigene Wartezeit nennen (Gemini `RetryInfo.retryDelay`, Text „retry after Ns"), die `updateFromResponseBody` ausliest. Eine Wartezeit, die in das `maxWaitMs` der Verbindung passt, ist Pacing: Der Limiter leert sein Reservoir für diese Dauer, und eingereihte Aufrufe werden abgesendet, sobald es sich wieder auffüllt. Eine Wartezeit länger als `maxWaitMs` kann die Warteschlange nicht aussitzen – Gemini beantwortet ein erschöpftes Tageskontingent mit `retryDelay: "86399s"`. Der weitergereichte `Retry-After` auf dem neu aufgebauten 429 (#16528) lässt die Fallback-Engine das Modell bereits für dieses Zeitfenster sperren, aber den Limiter ebenfalls dafür zu pausieren, würde jeden Aufruf, der den Key vorzeitig erreicht (etwa nach einem Resilienz-Reset), trotzdem für das gesamte `maxWaitMs` blockieren. Stammt eine solche Wartezeit aus einem typisierten Google-`RetryInfo`-Detail (der Herkunft `google_rpc_retry_info`) und ist der Limiter des Keys bereits auf das Modell begrenzt (siehe `getLimiterKey`), wird aus dem 429 stattdessen eine Modellsperrung auf dieser Verbindung (`lockModelForLongBodyRetry` in `open-sse/services/rateLimitManager/bodyRetryPause.ts`, begrenzt auf 24 h), und der Limiter bleibt unpausiert. Die Kontoauswahl überspringt aufgrund dieser Sperre via `isModelLocked()`, und ebenso das Pre-Dispatch-Gate der Combo für Ziele, die an die Verbindung gepinnt sind. Bei antigravity, dessen Limiter pro Kontingentfamilie arbeitet, gilt die Sperre für das exakte Modell, wie auch seine anderen Kontingentsperren. Der vom Client angefragte Name wird ebenfalls gesperrt, wenn ein Alias ihn auf dieses Modell aufgelöst hat, weil diese Prüfungen den angefragten Namen verwenden; er wird exakt gesperrt (`lockExactModel`), sodass ein Alias, der eine antigravity-Kontingentfamilie oder einen codex-Geltungsbereich überschreitet, niemals das Eigene sperrt. Ein Freitext-Hinweis, ein untypisiertes `retryDelay` oder ein von der gesamten Verbindung geteilter Limiter behält die Pause bei. Wenn der Limiter, den der 429-Pfad gerade neu aufgebaut hat, tatsächlich pausiert, wird ein Aufrufer, dessen verbleibende Wartezeit in der Warteschlange vor der Pause endet, sofort mit dem Queue-Timeout-Code abgewiesen (`checkLimiterPause`), statt diese Zeit abzuwarten; das aufgezeichnete Ende wird verankert, bevor der Limiter gebaut wird, dort, wo Bottleneck seine Refresh-Uhr startet, und jede spätere Änderung am Reservoir vergisst es. Abgedeckt durch `tests/unit/rate-limit-long-body-retry-lockout.test.ts` und `tests/unit/rate-limit-body-retry-pause.test.ts`.

**`maxQueueDepth` — Opt-in-Zulassungsobergrenze (neu).** `resilienceSettings.requestQueue.maxQueueDepth` begrenzt, wie viele Requests gleichzeitig für eine Provider+Verbindung eingereiht (noch nicht abgesendet) sein dürfen. Wenn die Warteschlange bereits `maxQueueDepth` Requests enthält, wird ein neuer Request mit einem typisierten Fehler `code: "RATE_LIMIT_QUEUE_FULL"` schnell abgelehnt, **bevor** er überhaupt `limiter.schedule()` erreicht — die Ablehnung ist also günstig und erfolgt vor jeglicher nachgelagerter Prompt-Komprimierungs- / Übersetzungsarbeit für diesen Request. Standard `0` = deaktiviert, wodurch das bisherige Verhalten mit unbegrenzter Warteschlange erhalten bleibt; begrenzt auf 0–100000. Überschreiben via `RATE_LIMIT_MAX_QUEUE_DEPTH` (Env) oder `resilienceSettings.requestQueue.maxQueueDepth` (Dashboard/API-Patch).

Die Zulassungsprüfung selbst ist eine reine Funktion (`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`), sodass sie ohne echten Bottleneck-Limiter unit-testbar ist.

> Das RFC, mit dem #6593 eröffnet wurde, schlug außerdem ein
> `bypassCompressionOnRateLimit`-Flag vor. Die
> `open-sse/services/compression/`-Pipeline dieses Repos ist eine
> Prompt-/Kontext-Komprimierung auf der ausgehenden LLM-Anfrage (`chatCore.ts`,
> rund um den `resolveCompressionSettings`/`selectCompressionStrategy`-Block),
> keine HTTP-Antwortkomprimierung auf synthetisierten 429-Bodies — es gibt
> keinen passenden Codepfad für ein wörtliches Bypass-Flag. Dieser
> Prompt-Komprimierungsschritt läuft zudem aktuell _vor_ `withRateLimit()` in
> der Request-Pipeline, sodass eine Umstellung, um ihn bei einer
> Queue-voll-Ablehnung zu überspringen, eine separate, größere Änderung ist als
> der Umfang dieses Issues; sie wurde hier bewusst **nicht** implementiert und
> bleibt als Follow-up offen, falls der CPU-Einsparungsgewinn das
> Umstellungsrisiko wert ist.

### Rate-Limit-Auto-Aktivierungs-Schutznetz & Verbindungsschutz (`rateLimitProtection`)

**Auto-Aktivierungs-Schutznetz** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, Standard `true`):
Standardmäßig aktiviert OmniRoute automatisch den Rate-Limit-Warteschlangenschutz für alle aktiven API-Key-Provider-Verbindungen (`getProviderCategory(provider) === "apikey"`). Dadurch wird sichergestellt, dass eingehende Anfragen an ratenempfindliche Upstream-API-Keys über Bottleneck in eine Warteschlange gestellt und gedrosselt werden, statt in Upstream-429-Fehler auszuarten. Das Schutznetz kann über die Umgebungsvariable `RATE_LIMIT_AUTO_ENABLE` überschrieben werden (`false`/`0`/`off` deaktiviert, `true`/`1`/`on` erzwingt die Aktivierung), wobei diese Vorrang vor der persistierten Dashboard-Einstellung hat (**Einstellungen → Resilience** / `PATCH /api/resilience`).

**Semantik des verbindungsbezogenen `rateLimitProtection`:**
Der verbindungsbezogene Rate-Limit-Schutz wird über das boolesche Feld `rateLimitProtection` auf Provider-Verbindungen verfolgt (persistiert als `rate_limit_protection` in SQLite):

- **Explizit an (`rateLimitProtection === true`)**: Der Rate-Limit-Schutz ist für diese Verbindung explizit aktiviert, unabhängig von der Provider-Kategorie oder davon, ob das Auto-Aktivierungs-Schutznetz eingeschaltet ist.
- **Explizit aus (`rateLimitProtection === false`)**: Deaktiviert den expliziten Schutz, nimmt eine aktive API-Key-Verbindung jedoch **nicht** aus dem globalen Auto-Aktivierungs-Schutznetz heraus. In `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`) sind `false` und `undefined` äquivalent: Nur `rateLimitProtection === true` wird als explizites Override behandelt. Wenn `rateLimitProtection` `false` (oder nicht gesetzt) ist, erfüllt eine aktive API-Key-Verbindung weiterhin die Auto-Aktivierungs-Bedingung und bleibt Rate-Limit-geschützt.
- **Kein verbindungsbezogenes Opt-out**: Ein Operator kann aktuell nicht ausdrücken, dass „diese einzelne aktive API-Key-Verbindung ohne Rate-Limit-Warteschlangenschutz laufen muss“, während die Auto-Aktivierung für andere aktiv bleibt. Um API-Key-Verbindungen vollständig ohne Rate-Limit-Warteschlangen zu betreiben, muss das Schutznetz global deaktiviert werden (`RATE_LIMIT_AUTO_ENABLE=false` oder `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`).

**Unterstützte Schreibpfade:**

- **`POST /api/rate-limits`**: Der unterstützte Verwaltungs-Schreibpfad, um `rateLimitProtection` für eine Verbindung umzuschalten (`{ connectionId: string, enabled: boolean }`). Ein Aufruf mit `enabled: true` aktiviert den expliziten Schutz; ein Aufruf mit `enabled: false` entfernt den expliziten Schutz (aktive API-Key-Verbindungen bleiben jedoch durch das globale Schutznetz abgedeckt, wenn die Auto-Aktivierung eingeschaltet ist).
- **`PUT /api/providers/[id]`**: Akzeptiert bzw. ändert `rateLimitProtection` bewusst **nicht** (#11278). Das Aktualisieren von Provider-Verbindungsmetadaten über `PUT /api/providers/[id]` ändert niemals den persistierten Rate-Limit-Schutzstatus.

---

## 6. Slow-Stream-Durchsatz-Watchdog (#9709)

Die optionale `resilienceSettings.streamRecovery.throughputWatchdog`-Schutzfunktion erkennt
ein Upstream, das noch Chunks sendet, aber Assistentenausgabe unterhalb der konfigurierten
Rate nützlicher Ausgabe produziert. Sie ist bewusst vom Idle-Timeout getrennt: Heartbeats
und Metadaten setzen keinen der beiden Timer zurück und gelten nicht als Fortschritt. Sie ist
außerdem von der harten Versuchs-Deadline (#9153) getrennt, die unabhängig von der
Ausgabequalität eine absolute Sicherheitsobergrenze bleibt.

Der Watchdog benötigt eine Aufwärmphase, gefolgt von einem vollständigen gleitenden Fenster,
bevor er abbrechen kann. Er zählt Text-Deltas aus Chat-Completions- und
Responses-API-Ausgabeereignissen (ein konservativer UTF-8-Byte-Proxy), ignoriert reine
Usage-Ereignisse und leere Ereignisse und setzt die Beurteilung aus, solange Tool-Call- oder
Reasoning-Ereignisse unterwegs sind. Er ist standardmäßig deaktiviert und kann mit
`STREAM_THROUGHPUT_WATCHDOG_ENABLED=true` aktiviert werden; Fenster, Aufwärmphase,
Mindestrate und minimale messbare Ausgabe werden durch die normale
Normalisierungsschicht der Resilience-Einstellungen begrenzt.

Wenn aktiviert, wird ein Watchdog-Abbruch nur auf den aktiven Upstream-Versuch angewendet.
Vor jeglichen client-sichtbaren Bytes kann der vorhandene Same-Account-Early-Recovery-Pfad
den Versuch erneut öffnen. Nach dem Commit wird der Stream niemals blind wiederholt; nur der
vorhandene sichere Mid-Stream-Fortsetzungsvertrag kann ein Suffix anfügen. Die Finalisierung
bleibt Single-Shot, sodass Usage-Abrechnung und Semaphor-Freigabe nicht dupliziert werden.

---

## 7. Upstream-Status-Umdeklaration (falsch ausgewiesene Quota-Fehler)

**Umfang:** ein Upstream-Gateway, das temporäre Quota-Erschöpfung mit dem falschen HTTP-Status meldet.

**Zweck:** einen irreführenden Status VOR der Klassifizierung korrigieren, damit nachgelagerte Konsumenten (Fallback-Engine, Combo-Aggregation, die client-seitige Antwort) die wahre wiederholbare Natur des Fehlers sehen.

Einige Gateways signalisieren TEMPORÄRE Quota-Erschöpfung mit einem nicht
wiederholbaren HTTP-Status. `agentrouter.org` gibt `403` (manchmal `400`) mit einem
chinesischen Body (`用户额度不足` / `额度不足`) statt des Standard-`429` zurück.
Clients wie Claude Code behandeln `403` als permanent und brechen die Sitzung ab, und
ohne Korrektur würde die Fallback-Engine ihn als `AUTH_ERROR` statt als Quota-Ereignis
klassifizieren.

**Implementierung:**

- Registry + Matcher: `open-sse/config/upstreamStatusRestatement.ts` — eine
  pro-Provider-Liste von Regeln (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), abgeglichen via `applyStatusRestatement()`.
- Aufrufstelle: der `providerFailure:`-Block in `open-sse/handlers/chatCore.ts`
  (um Zeile 3654), direkt nachdem `parseUpstreamError()` eine Upstream-Antwort mit
  einem Fehler-HTTP-Status (`!providerResponse.ok`) geparst hat und bevor irgendeine
  Klassifizierung läuft, sodass jeder nachgelagerte Konsument den korrigierten Status
  sieht. Fehler, die in einen `200`-SSE-Stream eingebettet sind, folgen einem separaten,
  späteren Stream-Parsing-Pfad und werden von diesem Hook heute **nicht** abgedeckt —
  eine bekannte Einschränkung, die für agentrouters Fehlstatus (der als Fehler-HTTP-Status
  auftritt) bislang nicht benötigt wird.
- Retry-Eignung: `429` ist in `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`) enthalten, sodass ein umdeklarierter
  Fehler ein echtes Retry-Fenster mit sich bringt, statt als toter `403` aufzutauchen.
- Das synthetische `60s`-`defaultRetryAfterMs` (`upstreamStatusRestatement.ts`)
  ist nur das, was die umdeklarierte Antwort dem **Client** mitteilt; es ist nicht selbst
  die interne Cooldown-/Lockout-Dauer der Verbindung — diese wird separat von dem
  Mechanismus gesteuert, der den umdeklarierten Fehler tatsächlich behandelt (der
  eskalierende Backoff des Connection Cooldown, §2, Basis `3s` für API-Key-Provider;
  oder Model Lockout, §3, für Per-Model-Quota-Provider wie agentrouter). Der Router
  kann intern früher wieder retry-fähig werden als das 60s-Fenster, das er dem Client
  anzeigt — beabsichtigter Spielraum, kein Bug.

Permanente Fehler (agentrouters `无权访问模型` — kein Zugriff auf dieses Modell) werden
NIEMALS umdeklariert: `excludeMarkers` legt ein Veto gegen die Regel ein, selbst wenn
`textMarkers` treffen, sodass der Fehler seinen ursprünglichen Status behält und nichts
ihn ewig wiederholt. Die passende Provider-Klassifizierungsregel
(`agentrouter-model-access-denied` in `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, ein deklarierter `6h`-Basis-Cooldown) wird von
`checkFallbackError` (`open-sse/services/accountFallback.ts`) _vor_ dem generischen
`FORBIDDEN`-Early-Return der apikey-Kategorie herangezogen, wobei dies hinter
`honorsRuleLockScope(provider)` geschaltet ist (#10334 — derzeit agentrouter-exklusiv
via der `HONORS_RULE_LOCK_SCOPE_PROVIDERS`-Allowlist in `providerErrorRules.ts`). Der
deklarierte 6h-Cooldown der Regel fließt als `fallbackResult.baseCooldownMs` durch, speist
aber weiterhin den bereits vorhandenen Per-Model-Quota-Lockout-Pfad
(`lockModelIfPerModelQuota()` / `recordModelLockoutFailure()`, unverändert durch #10334
bis auf die Cooldown-Quelle): Er wird auf das `mlSettings.maxCooldownMs` des Betreibers
nach unten begrenzt (Standard `1_800_000ms` / 30min), wie jeder andere Model-Lockout, und
der _persistierte Lockout-Grund_ bleibt der bereits vorhandene hartkodierte `"forbidden"`,
nicht das `"auth_error"` der Regel — nur die Cooldown-Dauer wird Ende zu Ende übernommen,
nicht der Grund-String. Die Verbindung selbst bleibt aktiv; Geschwistermodelle auf
derselben Verbindung sind unbeeinträchtigt.

Restatete Quota-Fehler (`额度不足`) treffen in der Produktion auf eine Provider-Regel (`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope: "connection"`, kein eigener deklarierter Cooldown — es gilt der skalierte Standard-Backoff der Persistenzschicht). Seit #10334 wird `scope` auf `ProviderErrorRuleMatch` tatsächlich End-to-End ausgewertet, aber **nur** für Provider in der Allowlist `HONORS_RULE_LOCK_SCOPE_PROVIDERS` (`providerErrorRules.ts` — derzeit nur `"agentrouter"`, abgesichert über `honorsRuleLockScope()`). Für jeden anderen Provider bleibt `scope` rein informativ, exakt wie vor #10334. `checkFallbackError` stellt den Scope der gematchten Regel als `fallbackResult.ruleScope` bereit; `isAgentrouterConnectionQuotaScope()` (`src/sse/services/auth.ts`) ist der gemeinsam genutzte Guard, der bestätigt, dass ein `ruleScope` wirklich sicher als verbindungsweites, sich selbst erholendes Signal honoriert werden kann (Scope `"connection"`, Reason `quota_exhausted`, niemals `permanent`, niemals `creditsExhausted` — eine Absicherung gegen eine künftige Regel, die Scope `"connection"` mit einem permanenten Kontozustand kombiniert). Zwei Konsumenten rufen ihn auf:

- **Persistenz** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  Statt in den **Per-Model**-Lockout-Zweig für Passthrough-Provider zu fallen
  (agentrouter ist `passthroughModels: true` → `hasPerModelQuota()` gibt
  `true` zurück), wird ein **temporärer Verbindungs-Cooldown** angewendet —
  `testStatus: "unavailable"` + `rateLimitedUntil`, niemals ein terminaler
  Status (`credits_exhausted`/`banned`/`expired`) — sodass sich die
  Verbindung nach Ablauf des Cooldowns selbst erholt, statt einen manuellen
  Reset der Zugangsdaten zu erfordern. Übersprungen bei Verbindungen mit
  `disableCooling: true` (#2997): Dieses Opt-out fällt stattdessen in den
  Per-Model-Lockout durch (ein dokumentierter Trade-off — siehe den
  Code-Kommentar oberhalb des Zweigs).
- **Same-Request-Combo-Routing** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): Derselbe Guard trägt die
  Verbindung in das In-Memory-Set `exhaustedConnections` ein, geschlüsselt
  als `${provider}:${connectionId}`. Dadurch wird nur ein verbleibendes
  SAME-REQUEST-Ziel übersprungen, das _selbst bereits genau diese
  `connectionId`_ auf seinem eigenen Zielobjekt trägt
  (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` vor dem `exhaustedConnections`-Lookup) — eine einfache
  Modelllisten-Combo, bei der Schwesterziele keine eigene gepinnte
  `connectionId` tragen und eine solche erst pro Dispatch aus dem
  `X-OmniRoute-Selected-Connection-Id`-Header der Antwort aufgelöst wird,
  erreicht diesen Schlüsseltreffer nie. Für diesen häufigen Fall ist der
  eigentliche Schutz davor, dass ein verbleibender Leg das gerade erschöpfte
  Konto wiederverwendet, NICHT dieses Set — sondern die obige
  Persistenzschicht (das `rateLimitedUntil` der Verbindung liegt nun in der
  Zukunft), kombiniert damit, dass derselbe Guard
  `transientRateLimitedProviders` für den Fehlschlag unterdrückt (siehe
  „Zweistufiges Design“ und den Code-Kommentar am
  `isAgentrouterConnectionQuotaScope`-Zweig in `targetExhaustion.ts`):
  Bleibt dieses Set unmarkiert, greift das
  `allowRateLimitedConnection`-Force-Allow von `combo.ts`
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) für die
  verbleibenden Legs des Providers NICHT, sodass der
  `rateLimitedUntil`-Filter der Credential-Auswahl
  (`src/sse/services/auth.ts:1238`) normal honoriert wird und ein
  verbleibender Leg entweder eine andere, weiterhin geeignete
  agentrouter-Verbindung auswählt oder fehlschlägt, weil keine
  Zugangsdaten verfügbar sind — er erzwingt keinen Rückweg auf die
  Verbindung, die dieser Zweig gerade in den Cooldown versetzt hat.

### Zweistufiges Design: Status-Restatement, dann Klassifizierung

Das Status-Restatement (`upstreamStatusRestatement.ts`) und die
Provider-Klassifizierungsregeln (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) sind getrennte Registries, die beide auf Provider-ID
und Textmarker schlüsseln, aber an unterschiedlichen Stellen laufen und
unterschiedliche Zwecke erfüllen: Das Restatement schreibt den HTTP-Status
früh in `chatCore.ts` um; die Klassifizierungsregeln wählen den
Fallback-`reason` und den Lock-`scope` (`model` / `provider` /
`connection`) innerhalb von `checkFallbackError()`
(`open-sse/services/accountFallback.ts`).

Klassifizierungsregeln sehen den vollständigen Fehler-**Text** (nötig, um
Body-Marker wie `额度不足` zu matchen) nur für Provider, die in der Allowlist
`FULL_TEXT_RULE_PROVIDERS` in `providerErrorRules.ts` gelistet sind —
derzeit nur `"agentrouter"`. Für jeden anderen Provider des
**Built-in-Katalogs** übergibt `checkFallbackError` an
`getProviderErrorRuleMatch` nur den strukturierten Fehler (`{code, type}`),
was für Header-, Status- und Code-basierte Regeln ausreicht, aber blind für
Body-Text-Marker ist. Der Helper `resolveRuleMatchBody()` trifft diese
Auswahl: vollständiger Fehlertext für Allowlist-Provider, andernfalls der
strukturierte Fehler. Das Aufnehmen eines **Built-in**-Providers in
`FULL_TEXT_RULE_PROVIDERS` ist ein explizites Opt-in pro Provider — es
existiert, damit der Standardpfad für jeden Provider, der nicht auf der
Liste steht, Byte für Byte unverändert bleibt.

Der `scope` einer Regel (`model` / `provider` / `connection`) ist ein von
`FULL_TEXT_RULE_PROVIDERS` getrenntes Opt-in: `checkFallbackError` stellt
ihn nur als `fallbackResult.ruleScope` bereit, und nachgelagerte Konsumenten
honorieren ihn nur dann als mehr als ein informatives Label, wenn der
Provider in der Allowlist `HONORS_RULE_LOCK_SCOPE_PROVIDERS` in derselben
Datei steht (`gated via honorsRuleLockScope()` — derzeit nur
`"agentrouter"`). Was ein `scope: "connection"`-Match tatsächlich bewirkt,
sobald ein Provider auf dieser Allowlist steht, ist oben unter „Restatete
Quota-Fehler“ beschrieben.

**#11104 — Vom Operator deklarierte Regeln umgehen beide Allowlists.** Ein Operator
kann zur Laufzeit über `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
eine Provider-spezifische Regel deklarieren, ohne diese Datei zu bearbeiten.
Eine Operator-Regel hinter
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` zu schalten —
Allowlists, die das **Standard**-Verhalten der eingebauten Katalogregeln schützen
sollen — würde den Settings-Mechanismus für jeden Provider wirkungslos machen,
außer für die dort bereits aufgeführten, da das Deklarieren der Regel bereits
das explizite Opt-in des Operators ist. `resolveRuleMatchBody()` und
`honorsRuleLockScope()` prüfen beide zuerst `hasOperatorRuleForProvider()`:
Ein Provider mit einer Operator-Regel erhält den rohen Fehlertext, und sein
deklarierter `scope` wird berücksichtigt, unabhängig davon, ob er zusätzlich
in einer der beiden Allowlists erscheint.

**Bekannte Lücke — `providerRuleRegistry` wird bei HTTP 400 nie konsultiert.**
Der `BAD_REQUEST`-Zweig von `checkFallbackError` klassifiziert Status 400
vollständig über seine eigenen Muster-Arrays (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS` usw. in `accountFallback.ts`) und kehrt zurück,
bevor der darüber liegende `configuredRule`/`getProviderErrorRuleMatch`-Zweig
erreicht wird. Eine eingebaute Katalogregel (oder eine Operator-Regel) mit
`status: 400` ist syntaktisch gültig, wird aber nie ausgelöst. Derzeit zielt
keine bestehende Regel auf 400, sodass in der Produktion nichts betroffen ist —
aber eine zukünftige 400-Regel erfordert, dass dieser Zweig zuerst angepasst
wird, was eine größere Änderung ist als das Hinzufügen einer Regel (sie
klassifiziert 400 für jeden Provider neu, der sich bereits auf das
Muster-Array-Verhalten verlässt) und liegt außerhalb des Umfangs einer
Regel-Ergänzung für einen einzelnen Provider.

### Hinzufügen eines neuen Gateways, das Kontingente falsch meldet

1. Registrieren Sie ein Regel-Array in `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Halten Sie `textMarkers`
   Provider-spezifisch; verwenden Sie niemals generische englische Phrasen
   wieder, die mit `CREDITS_EXHAUSTED_SIGNALS`
   (`open-sse/services/accountFallback.ts`) kollidieren.
2. Registrieren Sie optional Klassifizierungsregeln in
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`), um den
   richtigen Sperrbereich zu wählen (`connection` für kontoweite Kontingente,
   `model` für modellbezogene Fehler). Dieser Schritt wirkt sich in der
   Produktion nur für Provider aus, deren Regeln den vollständigen Fehlertext
   benötigen (Body-Marker): Fügen Sie die Provider-ID zu
   `FULL_TEXT_RULE_PROVIDERS` in derselben Datei hinzu — andernfalls übergibt
   `checkFallbackError` der Regel immer nur den strukturierten
   `{code, type}`-Fehler, und eine Body-Text-Regel wird niemals auf
   Live-Traffic matchen. Regeln, die rein auf `status`/`headers` matchen
   (wie die von Opencode oder Minimax), benötigen dieses Opt-in nicht.
   Wenn die Regel separat `scope: "connection"` deklariert und die Absicht ein
   tatsächlicher verbindungsweiter Cooldown plus Überspringen der Combo
   innerhalb derselben Anfrage ist (nicht nur ein informatives Label), fügen
   Sie die Provider-ID zu `HONORS_RULE_LOCK_SCOPE_PROVIDERS` in derselben
   Datei hinzu — dies steuert den Konsum im Stil von
   `isAgentrouterConnectionQuotaScope()` in `markAccountUnavailable()`
   (`src/sse/services/auth.ts`) und `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); ohne dies fließt `scope`
   zwar weiterhin durch `fallbackResult.ruleScope`, aber nichts reagiert
   darauf.
3. Fügen Sie Unit-Tests hinzu, die `tests/unit/upstream-status-restatement.test.ts`
   und `tests/unit/agentrouter-error-rules.test.ts` widerspiegeln
   (einschließlich der not-permanent-/not-creditsExhausted-Guards und — falls
   der Provider die Allowlist benötigt — eines Tests, der sicherstellt, dass
   `resolveRuleMatchBody()` den vollständigen Text nur für diesen Provider
   zurückgibt).

Es sind keine Änderungen an `chatCore.ts`, `classifyError` oder Combo
erforderlich.

#### Egress-Bucket-Sperre (#10880)

Provider in `EGRESS_BUCKETED_LOCK_PROVIDERS` (Opencode-Familie) werden upstream
als IP-basiert behandelt (das kostenlose Opencode-Tier ist IP-basiert, nicht
kontobasiert — siehe #9611): Ein Status 429, der als `quota_exhausted`
**oder** `rate_limit_exceeded` klassifiziert wird, versetzt jede Verbindung aus
der Allowlist-Familie, deren zuletzt bekannte Egress-IP mit der der
fehlschlagenden Verbindung übereinstimmt, in einen Cooldown, bevor die
Rotation sie versuchen kann — wodurch N-1 garantiert fehlschlagende
Upstream-Aufrufe vermieden werden (gleiches Muster wie #10460/#10525).
`rate_limit_exceeded` ist bewusst enthalten: Auf dem
`markAccountUnavailable`-Pfad matchen die Opencode-spezifischen Regeln nie
(es werden keine Header/Body an `checkFallbackError` übergeben, Opencode ist
nicht in `FULL_TEXT_RULE_PROVIDERS`), sodass ein 429, dessen Body den
Abonnement-Kontingent-Text trägt („monthly usage limit reached", d. h.
„monatliches Nutzungslimit erreicht"), vom Kontingent-Text-Fallback
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; 1h Cooldown) als
`quota_exhausted` klassifiziert wird, bevor die `status_429`-Regel überhaupt
erreicht wird — während ein 429 ohne Kontingent-Text (einfaches Rate Limiting)
über die `status_429`-Regel als `rate_limit_exceeded` klassifiziert wird und
die IP-Familie trotzdem in den Cooldown versetzt. Für einen
Allowlist-Provider ist ein IP-basiertes Rate Limit dasselbe Signal wie ein
erschöpftes Kontingent. Ehrliche Einschränkungen:

- **Best-Effort**: Die Sperre löst die zuletzt bekannte `egress_ip` der
  Verbindung aus `proxy_logs` auf (24h-Fenster, synchron, kein Cache). Bei
  kaltem Cache (Egress-IP nie ermittelt) oder fehlender Zeile → die
  fehlschlagende Verbindung wird vom Branch weiterhin abgekühlt (wie bisher
  aufgezeichnet), nur wird kein Sibling gesperrt.
- **Niemals terminal**: Der Cooldown ist ein sich erneuerndes
  Kontingentfenster (`testStatus: "unavailable"`); ein permanenter Zustand
  wird niemals aus einem Signal auf IP-Ebene abgeleitet.
  `disableCooling`-Verbindungen überspringen den Branch vollständig.
- **Sperrgranularität ändert sich für die allowlistete Familie**: Dies ist
  eine Scope-Änderung, nicht nur eine Sibling-Optimierung. opencode ist ein
  `passthroughModels`-Provider, sodass eine 429 vor diesem Branch eine
  Sperrung pro MODELL erzeugte; nun erzeugt sie einen Verbindungs-Cooldown —
  auch für einen Betreiber, der eine einzelne Verbindung ganz ohne Sibling
  betreibt. Das ist genau die Granularität, die die opencode-Regeltabelle
  bereits als korrekt deklariert (`scope: "connection"`,
  `providerErrorRules.ts`), die jedoch bisher nie beachtet wurde, weil
  opencode nicht in `HONORS_RULE_LOCK_SCOPE_PROVIDERS` enthalten ist. Der
  Branch schreibt den Cooldown + `backoffLevel` der fehlschlagenden
  Verbindung selbst, spiegelt damit den connection-scoped agentrouter-Branch
  und kehrt zurück — der Per-Model-Block und der generische Pfad darunter
  werden nie erreicht.
- **Combo eingeschlossen**: Wie der agentrouter-Branch ignoriert der Scope
  bewusst das `persistUnavailableState`/`isCombo`-Downgrade, das ein
  Combo-Caller auf eine 429 anwendet. Eine Per-Model-Sperrung ist keine
  schwächere Form dieses Scopes, sie ist die falsche Einheit: Sie sagt nichts
  über die erschöpfte IP aus, sodass die Combo-Rotation weiterhin einen
  garantiert fehlschlagenden Aufruf pro Sibling verbrennen würde.
- **Sibling-Sicherheit**: Ein Sibling, das bereits terminal ist
  (banned/credits_exhausted) oder sich bereits in einem längeren Cooldown
  befindet, wird niemals überschrieben.
- **Exklusive Allowlist**: Das Erweitern von
  `EGRESS_BUCKETED_LOCK_PROVIDERS` ist eine explizite Owner-Entscheidung;
  keine generische Verdrahtung (Pattern #10334/#10419). Die Sibling-Abfrage
  bindet dieselbe Allowlist, statt sie als SQL-Literal zu wiederholen, sodass
  ihre Erweiterung eine einzeilige Änderung bleibt.
- **Egress-IP-Rotation, in beide Richtungen**: Das Abfragefenster (24h) ist
  deutlich breiter als die Egress-IP-Cache-TTL (5 Min.), sodass "zuletzt
  bekannte IP" Historie ist, nicht der aktuelle Zustand. Wenn der Proxy einer
  Verbindung innerhalb des Fensters rotiert ist, kann die Sperre eine
  tatsächlich geteilte IP **verfehlen** (die aufgezeichnete IP ist die neue,
  nicht erschöpfte) — und symmetrisch kann sie **ein Sibling abkühlen, das
  inzwischen von der erschöpften IP wegrotiert ist**. Der zweite Fall kostet
  dieses Sibling ein Cooldown-Fenster; beides sind akzeptierte
  Best-Effort-Grenzen einer historienbasierten Abfrage.
- **Kosten**: Zwei begrenzte Scans von `proxy_logs` (fenstergefiltert über
  `idx_pl_timestamp`), nur mit 429-Häufigkeit. Kein neuer Index (Migration
  134 YAGNI). Gemessen auf einer DB-Kopie mit echtem Traffic moderater Größe;
  eine Instanz mit hohem Durchsatz hält proportional mehr Zeilen im selben
  Fenster.

---

## Weitere Resilienz-Funktionen

- **20 Routing-Strategien** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — siehe [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Reset-bewusstes Routing** (v3.8.0) — priorisiert Verbindungen nach dem Zeitpunkt des Quota-Resets.
- **Degradierung des Hintergrundmodus** — Responses-API `background: true` wird mit Warnung auf synchron heruntergestuft.
- **Dynamische Erkennung von Tool-Limits** — setzt Provider zurück, wenn Limits für die Tool-Anzahl erreicht werden.
- **Notfall-Fallback** — gesteuert über `OMNIROUTE_EMERGENCY_FALLBACK`; Operatoren können ihn auf der Feature-Flags-Seite ohne Neustart überschreiben.

---

## Debugging

- Eine Weighted-Combo antwortet mit `503 all_targets_cooling_down` (`Retry-After` gesetzt, `diagnostics.excluded` listet jedes Ziel mit `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable`) → der Pool ist konfiguriert und verbunden, jedes Ziel ist lediglich durch einen Resilienz-Timer ausgeschlossen; die Warnung `[COMBO] Weighted selection: every target excluded before dispatch — …` nennt die Gründe und die verbleibenden Sekunden. Ein `404 no_executable_targets` derselben Combo bedeutet, dass kein Resilienz-Timer beteiligt war (nichts auszuführen, oder jedes Konto hat die Verfügbarkeitsprüfung nicht bestanden). Implementiert in `open-sse/services/combo/pinRecovery.ts` aus den in `targetResolution.ts` gesammelten Ausschlüssen.
- Alle Schlüssel eines Providers übersprungen → sowohl den Circuit-Breaker-Status ALS AUCH `rateLimitedUntil`/`testStatus` jeder Verbindung prüfen.
- Provider nach dem Reset-Fenster dauerhaft ausgeschlossen → Code liest das rohe `state` statt `getStatus()`/`canExecute()`.
- Ein Schlüssel schlägt fehl, andere sollten funktionieren → Connection-Cooldown dem Circuit Breaker vorziehen.
- Nur ein Modell schlägt fehl → Model-Lockout dem Connection-Cooldown vorziehen.
- Status sollte sich von selbst erholen, tut es aber nicht → auf einen zukünftigen Zeitstempel prüfen + auf einen Lesepfad, der abgelaufenen Status aktualisiert. Permanente Status erfordern manuelle Änderungen.

---

## Laufzeitstatus — Kurzreferenz für Agents

> Wörtlich aus `AGENTS.md` → „Resilience Runtime State" (PR #12743) verschoben, damit der
> Agent-Leitfaden unter dem 40k-Kontextbudget bleibt. Es ist die komprimierte, an Agents
> gerichtete Ansicht der obigen Abschnitte; die nummerierten Abschnitte bleiben die
> vollständige Referenz.

OmniRoute verfügt über drei verwandte, aber unterschiedliche Mechanismen für temporäre
Fehler. Halten Sie deren Geltungsbereiche beim Debuggen des Routing-Verhaltens getrennt.
Siehe das [3-Schichten-Resilienzdiagramm](../diagrams/exported/resilience-3layers.svg)
(Quelle: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
für eine Übersicht auf einen Blick.

### Provider Circuit Breaker

**Geltungsbereich**: gesamter Provider, z. B. `glm`, `openai`, `anthropic`.

**Zweck**: den Traffic zu einem Provider stoppen, der auf Upstream-/Service-Ebene wiederholt
fehlschlägt, damit ein fehlerhafter Provider nicht jede Anfrage verlangsamt.

**Implementierung**:

- Kernklasse: `src/shared/utils/circuitBreaker.ts`
- Chat-Gate-/Ausführungsverdrahtung: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- Laufzeit-Status-API: `src/app/api/monitoring/health/route.ts`
- Gemeinsame Wrapper: `open-sse/services/accountFallback.ts`
- Persistierte Statustabelle: `domain_circuit_breakers`

**Zustände** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: normaler Traffic ist erlaubt.
- `DEGRADED`: Frühwarnband — Fehler haben die Degradierungsschwelle überschritten, aber noch
  nicht die Breaker-Schwelle; der Traffic fließt weiter, Dashboards zeigen die Warnung. Ein
  gültiger Verbindungstest oder ein ruhiges Fenster ohne neue Fehler setzt den Zustand auf
  `CLOSED` zurück (`docs/architecture/RESILIENCE_GUIDE.md` enthält das Fenster).
- `OPEN`: Der Provider ist vorübergehend blockiert; Aufrufer erhalten eine
  Provider-Circuit-Open-Antwort oder das Combo-Routing springt zu einem anderen Ziel.
- `HALF_OPEN`: Der Reset-Timeout ist abgelaufen; eine Testanfrage wird zugelassen. Erfolg
  schließt den Breaker, ein Fehlschlag öffnet ihn erneut.

**Standardwerte** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, konsumiert über
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` in `src/lib/resilience/settings.ts` →
`getCircuitBreaker(provider, …)` in `src/sse/handlers/chatHelpers.ts`). Der Breaker für den
gesamten Provider läuft über `circuitBreakerThreshold` / `circuitBreakerReset`:

| Profil        | degradiert bei | öffnet bei (`circuitBreakerThreshold`) | Reset (`circuitBreakerReset`) |
| ------------- | -------------: | -------------------------------------: | ----------------------------: |
| OAuth         |            `5` |                                    `8` |                         `60s` |
| API-Schlüssel |            `7` |                                   `12` |                         `30s` |
| Lokal         |   (abgeleitet) |                                    `2` |                         `15s` |

`PROVIDER_PROFILES` definiert außerdem `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (15/30/5 min) und `providerCooldownMs` (5/10/1 min): Diese steuern
das **Fenster-Gate des optionalen globalen Provider-Cooldowns** (`PROVIDER_COOLDOWN_ENABLED`,
standardmäßig aus) — ein Eintrag auf Provider-Ebene in
`open-sse/services/providerCooldownTracker.ts` gilt erst nach `providerFailureThreshold`
Fehlern innerhalb von `providerFailureWindowMs` als abkühlend und kühlt dann für
`providerCooldownMs` ab. Sie sind NICHT die Schwellenwerte des aktiven Breakers — tunen Sie
sie nicht in der Erwartung von Breaker-Verhalten. Jeder Standardwert kann über die
Umgebungsvariablen `OMNIROUTE_PROVIDER_BREAKER_*` und `OMNIROUTE_CIRCUIT_BREAKER_*`
überschrieben werden; die laufzeitgenaue Referenztabelle liegt in
`docs/architecture/RESILIENCE_GUIDE.md`.

Nur Fehlerstatus auf Provider-Ebene sollten den Provider-Breaker auslösen:

```ts
(408, 500, 502, 503, 504);
```

Lösen Sie den Breaker für den gesamten Provider nicht bei normalen
Konto-/Schlüssel-/Modellfehlern aus, wie bei den meisten `401`-, `403`- oder `429`-Fällen.
Diese gehören üblicherweise zum Connection-Cooldown oder Model-Lockout. Ein generischer
`403` eines API-Schlüssel-Providers sollte wiederherstellbar sein, es sei denn, er wird als
endgültiger Provider-/Kontofehler klassifiziert.

Der Breaker verwendet Lazy Recovery, keinen Hintergrund-Timer. Wenn `OPEN` abläuft, aktualisieren Lesezugriffe wie `getStatus()`, `canExecute()` und `getRetryAfterMs()` den Zustand auf `HALF_OPEN`, sodass Dashboards und Builder für Combo-Kandidaten einen Provider, dessen Sperrung abgelaufen ist, nicht dauerhaft weiter ausschließen.

### Verbindungs-Cooldown

**Geltungsbereich**: eine Provider-Verbindung/ein Konto/ein Schlüssel.

**Zweck**: einen fehlerhaften Schlüssel bzw. ein fehlerhaftes Konto vorübergehend überspringen, während andere Verbindungen desselben Providers weiterhin Anfragen bedienen können.

**Implementierung**:

- Schreib-/Aktualisierungspfad: `src/sse/services/auth.ts::markAccountUnavailable()`
- Kontoauswahl/-filterung: `src/sse/services/auth.ts::getProviderCredentials...`
- Cooldown-Berechnung: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Einstellungen: `src/lib/resilience/settings.ts`

Wichtige Felder auf Provider-Verbindungen:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

Während der Kontoauswahl wird eine Verbindung übersprungen, solange:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

Cooldowns sind ebenfalls lazy ausgelegt: Wenn `rateLimitedUntil` in der Vergangenheit liegt, wird die Verbindung wieder auswählbar. Bei erfolgreicher Nutzung setzt `clearAccountError()` die Felder `testStatus`, `rateLimitedUntil`, die Fehlerfelder und `backoffLevel` zurück.

Standardverhalten des Verbindungs-Cooldowns:

- OAuth-Basis-Cooldown: `5s`.
- API-Schlüssel-Basis-Cooldown: `3s`.
- Bei `429` eines API-Schlüssels sollten Upstream-Wiederholungshinweise (`Retry-After`, Reset-Header oder parsbarer Reset-Text) bevorzugt werden, sofern verfügbar.
- Wiederholte behebbare Fehler verwenden exponentielles Backoff:

```ts
baseCooldownMs * 2 ** failureIndex;
```

Der Schutz gegen den Thundering-Herd-Effekt verhindert, dass gleichzeitig auftretende Fehler auf derselben Verbindung den Cooldown wiederholt verlängern oder `backoffLevel` doppelt erhöhen.

Terminale Zustände sind keine Cooldowns. `banned`, `expired` (das erst nach N begrenzten Wiederholungen über `EXPIRED_RETRY_MAX` terminal wird) und `credits_exhausted` sollen so lange nicht verfügbar bleiben, bis sich Zugangsdaten/Einstellungen ändern oder ein Operator sie zurücksetzt. Überschreiben Sie terminale Zustände nicht mit einem transienten Cooldown-Zustand.

### Modell-Sperrung

**Geltungsbereich**: Provider + Verbindung + Modell.

**Zweck**: vermeiden, dass eine ganze Verbindung deaktiviert wird, wenn nur ein Modell für diese Verbindung nicht verfügbar oder kontingentbeschränkt ist.

Beispiele:

- Provider mit Kontingenten pro Modell, die `429` zurückgeben.
- Lokale Provider, die `404` für ein fehlendes Modell zurückgeben.
- Provider-spezifische Modus-/Modell-Berechtigungsfehler, etwa bei ausgewählten Grok-Modi.

Die Modell-Sperrung befindet sich in `open-sse/services/accountFallback.ts` und ermöglicht es derselben Verbindung, weiterhin andere Modelle zu bedienen.

### Hinweise zur Fehlersuche

- Wenn alle Schlüssel eines Providers übersprungen werden, prüfen Sie sowohl den Breaker-Zustand des Providers als auch `rateLimitedUntil`/`testStatus` jeder Verbindung.
- Wenn ein Provider nach dem Reset-Fenster dauerhaft ausgeschlossen erscheint, prüfen Sie, ob Code den rohen `state` liest, anstatt `getStatus()`/`canExecute()` zu verwenden.
- Wenn ein Provider-Schlüssel fehlschlägt, andere aber funktionieren sollten, bevorzugen Sie den Verbindungs-Cooldown gegenüber dem Provider-Breaker.
- Wenn nur ein Modell fehlschlägt, bevorzugen Sie die Modell-Sperrung gegenüber dem Verbindungs-Cooldown.
- Wenn sich ein Zustand selbst erholen soll, sollte er einen zukünftigen Zeitstempel bzw. Reset-Timeout und einen Lesepfad besitzen, der abgelaufene Zustände aktualisiert. Permanente Status erfordern manuelle Änderungen an Zugangsdaten oder Konfiguration.

---

## TLS-Fingerprinting & Stealth

Providerspezifische Stealth-Funktionen (JA3/JA4, CCH, Obfuskation) sind separat dokumentiert — siehe `docs/security/STEALTH_GUIDE.md` (Git; nicht in `/docs` kompiliert).

---

## Resilienztests (Phase 8 · Block C)

Über Unit-Tests für die Resilienzlogik hinaus prüfen drei Tests die Laufzeit unter
realen Stress-/Fehlerbedingungen (alle Integration/Nightly — keiner blockiert PRs):

| Test          | Was                                                                                                                                                                                         | Ausführen                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Chaos         | Ein Fake-Upstream-Node injiziert echte Latenz/Reset/Timeout/503; validiert, dass der Circuit Breaker öffnet/sich erholt und `checkFallbackError` 503 als behebbaren Fallback klassifiziert. | `RUN_CHAOS_INT=1 npm run test:chaos`     |
| Heap-Wachstum | ~500 Streams pro `createSSEStream` unter `--expose-gc`; schlägt fehl, wenn der Heap über die Obergrenze wächst (OOM-Schutz #3069).                                                          | `npm run test:heap`                      |
| k6-Soak       | Dauerlast gegen `/api/monitoring/health`; p95-/Fehler-Schwellenwerte.                                                                                                                       | `k6 run tests/load/k6-soak.js` (nightly) |

Orchestriert durch `.github/workflows/nightly-resilience.yml` (Cron + Dispatch). Im
standardmäßigen `test:integration` überspringen sich Chaos und Heap selbst (ohne `RUN_CHAOS_INT`/`--expose-gc`).

---

## Siehe auch

- [Architekturleitfaden](./ARCHITECTURE.md) — Systemarchitektur und Interna
- [Benutzerhandbuch](../guides/USER_GUIDE.md) — Provider, Kombos, CLI-Integration
- [Auto-Combo-Engine](../routing/AUTO-COMBO.md) — 16-Faktor-Bewertung, Moduspakete
