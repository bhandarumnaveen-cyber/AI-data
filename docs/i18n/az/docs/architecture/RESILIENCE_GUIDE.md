# Resilience Guide (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute-da üç fərqli, lakin bir-biri ilə əlaqəli dayanıqlılıq (resilience) mexanizmi var. Hər birinin fərqli əhatə dairəsi və məqsədi var. Marşrutlaşdırma davranışını sazlayarkən (debug) onları bir-birindən ayırın.

![3-qatlı dayanıqlılıq modeli](../diagrams/exported/resilience-3layers.svg)

> Mənbə: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Provayder Circuit Breaker-i

**Əhatə dairəsi:** bütöv provayder (məs., `glm`, `openai`, `anthropic`).

**Məqsəd:** yuxarı axın/xidmət səviyyəsində dəfələrlə uğursuz olan provayderə trafik göndərməyi dayandırmaq.

**İmplementasiya:**

- Əsas sinif: `src/shared/utils/circuitBreaker.ts`
- Bağlantı (wiring): `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- Status API-si: `GET /api/monitoring/health`
- Sıfırlama API-si: `POST /api/resilience/reset`
- Wrapper-lər: `open-sse/services/accountFallback.ts`
- DB cədvəli: `domain_circuit_breakers`

**Vəziyyətlər:**

- `CLOSED` — normal trafikə icazə verilir
- `DEGRADED` — trafikə hələ də icazə verilir, lakin provayderin artan uğursuzluqları izlənilir; kifayət qədər uğur, etibarlı bağlantı testi və ya son uğursuzluq növü üçün ən uzun `OPEN` saxlanma müddətindən (həmin növün `cooldownByKind` dəyəri, əks halda `resetTimeout`, × `maxBackoffMultiplier`, ən azı bir cooldown) sonra yeni uğursuzluq olmadıqda `CLOSED` vəziyyətinə qayıdır
- `OPEN` — provayder müvəqqəti bloklanıb; combo marşrutlaşdırma onu ötürür
- `HALF_OPEN` — sıfırlama vaxtı bitib; yoxlama (probe) sorğusuna icazə verilir

**Konfiqurasiya edilə bilən standart dəyərlər (`open-sse/config/constants.ts`, Dashboard → Settings → Resilience bölməsində göstərilir):**

| Sinif   | DEGRADED həddi | Açılma həddi  | Sıfırlama vaxtı |
| ------- | -------------- | ------------- | --------------- |
| OAuth   | 5 uğursuzluq   | 8 uğursuzluq  | 60s             |
| API-key | 7 uğursuzluq   | 12 uğursuzluq | 30s             |
| Lokal   | hesablanır     | 2 uğursuzluq  | 15s             |

`degradationThreshold` provayderin `DEGRADED` vəziyyətinə nə vaxt keçəcəyini idarə edir; `failureThreshold` isə onun nə vaxt açılacağını və ötürüləcəyini idarə edir. Lokal provayder profilləri hələlik Resilience parametrləri səhifəsində göstərilmir.

**İşə düşmə kodları:** yalnız provayder səviyyəli statuslar `[408, 500, 502, 503, 504]`. Hesab səviyyəli xətalara görə işə DÜŞMƏYİN (əksər 401/403/429 — onlar cooldown və ya bloklanma (lockout) mexanizmlərinə aiddir).

**Tənbəl bərpa (lazy recovery):** `OPEN` müddəti bitdikdə `getStatus()`, `canExecute()`, `getRetryAfterMs()` vəziyyəti `HALF_OPEN`-ə yeniləyir. Eyni oxumalar (və növbəti uğursuzluq) köhnəlmiş `DEGRADED`-i tədricən `CLOSED`-ə qaytarır. Fon taymerinə ehtiyac yoxdur.

---

### Seçimə bağlı qlobal Provider Cooldown (pəncərə qapısı)

Dördüncü, **seçimə bağlı** qat (`PROVIDER_COOLDOWN_ENABLED`, standart olaraq **söndürülüb**) uğursuz olan provayderlərin sorğulararası yaddaşını `open-sse/services/providerCooldownTracker.ts` faylında saxlayır; combo hədəf seçimi ona müraciət edir ki, ardıcıl combo sorğuları təzəcə uğursuz olmuş provayderi təkrar-təkrar gəzməsin. Provayder səviyyəli qeydlər `PROVIDER_PROFILES` pəncərə qapısına riayət edir:

| Profil  | işə düşmə həddi (`providerFailureThreshold`) | pəncərənin içində (`providerFailureWindowMs`) | soyuma müddəti (`providerCooldownMs`) |
| ------- | -------------------------------------------: | --------------------------------------------: | ------------------------------------: |
| OAuth   |                                         `10` |                                       `15min` |                                `5min` |
| API key |                                         `15` |                                       `30min` |                               `10min` |

Həddin altında provayder soyuma hesab **edilmir**; uğurlu nəticə pəncərəni təmizləyir. Bağlantı səviyyəli qeydlər (`provider:connectionId`) əvəzində eksponensial `minRetryCooldownMs → maxRetryCooldownMs` geri çəkilməsini (backoff) saxlayır. Üstələmələr: `OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Reqressiya mühafizəsi: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Bağlantı soyuması

**Əhatə:** tək provayder bağlantısı/hesabı/açarı.

**Məqsəd:** eyni provayderin digər bağlantıları xidmət göstərməyə davam edərkən problemli bir açarı atlamaq.

**İmplementasiya:**

- Əlçatmaz kimi işarələ: `src/sse/services/auth.ts::markAccountUnavailable()`
- Seçim: eyni faylda `getProviderCredentials*`
- Soyuma hesablanması: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Parametrlər: `src/lib/resilience/settings.ts`

**Bağlantı üzrə sahələr:**

- `rateLimitedUntil` — soyuma bitənə qədərki vaxt möhürü
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — eksponensial geri çəkilmə sayğacı

**Defolt soyuma müddətləri:**

- OAuth baza: 5s
- API açarı baza: 3s
- API açarı 429: yuxarı axının `Retry-After`/sıfırlanma başlıqlarını/təhlil edilə bilən sıfırlanma mətnini üstün tutur
- Geri çəkilmə: `baseCooldownMs * 2 ** failureIndex`

**Thundering-herd əleyhinə qoruyucu:** eyni vaxtda baş verən uğursuzluqların soyumanı həddindən artıq uzatmasının və ya `backoffLevel`-ı ikiqat artırmasının qarşısını alır.

**Konkurentlik-limiti 429-ları geri çəkilmə pilləsini qalxmır.** Gövdəsində konkurentlik limiti bildirən ("too many concurrent requests", "concurrency limit", "parallel request limit", GLM `并发数过高`) bir `429`, hesabın sağlam, lakin məşğul olduğunu göstərir.
`checkFallbackError()` səbəb kimi `concurrency_limited` qaytarır: dərhal növbəti bağlantıya keçid et, bu bağlantını sabit `CONCURRENCY_LIMIT_COOLDOWN_MS` (1s) və ya yuxarı axının təkrar-cəhd göstərişi müddətində soyut, `backoffLevel`-ı dəyişməz saxla və `skipProviderBreaker` qoy.
Aşkar kvota gövdəsi yenə də üstün gəlir, ona görə kvota nümunəsinə də uyğun gələn gövdə kvota qərarı olaraq qalır. Aşkarlama: `src/shared/utils/classify429.ts`-də `looksLikeConcurrencyLimit()`;
qərar: `open-sse/services/accountFallback/concurrencyLimit429.ts`. `classify429()` (breaker-in `FailureKind`-ı) dəyişilməyib və bu gövdələr üçün hələ də `rate_limit` oxuyur.

**Axın məzmunu dayanmaları hesabı soyutmur.** Məzmun-dayanma watchdog-u
(`open-sse/utils/streamHandler.ts`) vaxtında heç bir model çıxışı göndərməyən axından əl çəkdikdə, `markAccountUnavailable()` xətanı bağlantıya qeyd edir, lakin soyuma təyin etmir: dayanma həmin sorğuya aiddir — çox vaxt bu, hələ heç bir çıxış verməmiş uzun bir reasoning dövrüdür. Operatorlar `resilienceSettings.streamStallCooldown.enabled` (defolt `false`) ilə bu davranışı yenidən aktivləşdirə bilərlər.

**Reasoning freymləri məzmun-dayanma büdcəsini yenidən başladır.** Reasoning modeli ilk görünən tokenindən əvvəl dəqiqələrlə düşünə bilər: Claude düşünmə mətni boş ola bilən `thinking_delta` freymləri axıdır, Responses API isə bir-birinin ardınca reasoning elementləri axıdır. `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) bu freymləri tanıyır və watchdog dövrü ləğv etmək əvəzinə hər freymdə büdcəsini yenidən başladır. Onlar yenə də model çıxışı sayılmır, ona görə yalnız reasoning ilə başa çatan dövr boş kimi bildirilir, reasoning-i dayandırıb yalnız heartbeat göndərən dövr isə yenə watchdog-u işə salır.

Qeyri-boş imzalı Kiro binar `reasoningContentEvent` freymləri bu reasoning aktivliyini executor vasitəsilə boş `reasoning_content` deltası kimi qoruyub saxlayır. İmza ötürülmür. Metadata, natamam freymlər və boş imzalar məzmun büdcəsini yenidən başlatmır; müstəqil aktiv-axın taymautu və müştəri ləğvi yenə də qüvvədə qalır (`open-sse/executors/kiro/reasoning.ts`).

**Terminal vəziyyətlər (soyuma DƏYİL):**

- `banned` — qadağan açar söz / hesab-bloklanması aşkarlanması ilə təyin olunur (bax: [BAN_DETECTION](../security/BAN_DETECTION.md)), həmçinin üç ardıcıl yuxarı axın sorğu-səviyyəli rədd ilə (`request_rejected`, məs. Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); tək bir rədd bağlantını yalnız soyudur
- `expired` (məhdud sayda təkrar cəhddən sonra — eksponensial geri çəkilmə ilə `EXPIRED_RETRY_MAX = 3` — terminal vəziyyətə keçir, belə ki, hesab həmişəlik deaktiv edilməzdən əvvəl keçici OAuth xətaları öz-özünə sağala bilər)
- `credits_exhausted`

Bunlar etimadnamələr dəyişənə və ya operator onları sıfırlayana qədər qalır. Terminal vəziyyətləri keçici soyuma vəziyyəti ilə əvəz etməyin.

**Tənbəl (lazy) bərpa:** `rateLimitedUntil` vaxtı keçdikdə bağlantı yenidən uyğun olur. Uğurlu istifadə zamanı `clearAccountError()` bütün xəta sahələrini təmizləyir.

### Claude OAuth istifadə divarı: aşağı prioritetli zolaq + sessiya limitinin sıfırlanması

**Əhatə:** bir Claude abunə (OAuth) bağlantısı. Hər iki xüsusiyyət **bağlantı üzrə könüllü (opt-in)** qoşulur (Bağlantını redaktə et → Claude bölməsi → `providerSpecificData` daxilində `lowPriorityMode` / `autoLimitReset`, hər ikisi defolt olaraq sönülüdür) və Claude Code-un `/low-priority` və `/limit-reset` əmrlərini əks etdirir (wire kontraktı Claude Code 2.1.263-dən götürülüb).

**İmplementasiya:**

- Vəziyyət maşını + cavab təsnifatı: `open-sse/services/claudeLowPriority.ts`
- Sıfırlanma statusu/tələb klienti: `open-sse/services/claudeLimitReset.ts`
- Executor hook-u (başlıq injeksiyası + eyni hesabla təkrar cəhd): `open-sse/executors/base.ts::execute()`
- Könüllü qoşulmanın saxlanması: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**Tətik:** 5 saatlıq istifadə divarı — başlıqlarında `anthropic-ratelimit-unified-status: rejected` və hesab uyğun olduqda `anthropic-ratelimit-unified-slow-offer: treatment` daşıyan bir `429`. İlk divar 429-dan əvvəl heç nə göndərilmir; unified başlıqları olmayan partlayış 429-u normal soyuma yolundan keçir.

**Aşağı prioritetli zolaq** (`lowPriorityMode`):

- Divar 429 zamanı icraedici təklifi qəbul edir və dərhal **eyni**
  hesabı `anthropic-usage-limit: slow` ilə yenidən sınayır; zolaq elan edilmiş
  `anthropic-ratelimit-unified-reset` (+60 san. güzəşt) vaxtına qədər aktiv qalır və həmin
  müddətdə hər sorğu başlığı daşıyır. Yaxalanmış 429 `handleChatCore`-a heç vaxt çatmır,
  buna görə bağlantı **soyuma** vəziyyətinə keçirilməz və başqa bağlantı ilə əvəzlənməz.
- Sonrakı cavablarda `anthropic-ratelimit-unified-slow-status`: `active` / `not_needed`
  zolağı saxlayır; `slot_busy` (429) və ya `529` serverin
  `anthropic-ratelimit-unified-slow-retry-after` dəyəri qədər gözləyir (standart 20 san.,
  5–600 san. aralığında məhdudlaşdırma, ±30% təsadüfi dəyişmə) və yenidən sınayır; bu,
  `anthropic-ratelimit-unified-slow-max-wait` ilə məhdudlaşdırılır (standart 20 dəq.,
  1 dəq.–6 saat aralığında məhdudlaşdırma) — bu müddət keçdikdə zolaq başa çatır və
  yenidən qəbul edilməni 10 dəqiqəlik soyuma bloklayır. Gözləmə əlavə olaraq sorğunun öz
  upstream başlanğıc vaxt aşımından (`resolveFetchStartTimeout`, standart olaraq 10 dəq.)
  5 saniyəlik fərq çıxıldıqdan sonra qalan müddətlə də məhdudlaşdırılır: bu məhdudiyyət
  olmasa, standart 20 dəqiqəlik maksimum gözləmə sorğunu keçər və yuxu gözləmə zamanı
  yarıda dayandırılardı; nəticədə normal `max_wait` sonu və soyuma əvəzinə
  `TimeoutError` üzə çıxardı.
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, 5 saatlıq pəncərənin
  çevrilməsi və ya `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true`
  (ödənişli artıq istifadə indi divarı qarşıladığı üçün istənilən statusda onu
  `extra_usage` kimi başa çatdırır) zolağı bitirir; bundan sonra cavab adi soyuma yoluna
  keçir. `budget_exhausted` elan edilmiş büdcə sıfırlanmasına qədər (≤ 8 gün)
  yadda saxlanılır.
- Divar yoxlaması icraedicinin öz 400 əsaslı cəhd-daxili yenidən sınamalarından
  (kontekstin redaktəsi, thinking/effort məhdudiyyətləri, parametrlərin avtomatik
  öyrənilməsi) sonra işləyir; buna görə yalnız həmin yenidən sınamalardan birində üzə çıxan
  divar 429 da soyuma yoluna çatmadan yaxalanır.
- Vəziyyət bağlantı üzrə yaddaşda saxlanılır (yenidən başlatma divarı yenidən qəbul etmək
  üçün bir əlavə 429 tələb edir).

**Sessiya limiti sıfırlaması** (`autoLimitReset`, hər ikisi aktiv olduqda zolaqdan əvvəl sınaqdan keçirilir):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → `juniper_tide`
  bloku; `arm: "reset"` və `available: true` olduqda,
  `{ "program": "juniper_tide" }` ilə `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits`;
  təşkilat UUID-si `providerSpecificData.organizationUUID` dəyərindən, olmadıqda
  bootstrap ehtiyat variantından götürülür.
- `result: reset|not_limited` → sorğu tam sürətlə yenidən sınanır (slow başlığı olmadan).
  `already_used` / `not_offered` `next_available_at` dəyərini yadda saxlayır (standart olaraq
  bir həftə); istənilən uğursuzluq 15 dəqiqəlik geriçəkmə tətbiq edir. Sıfırlama həftədə
  bir dəfə mümkündür və yenə də həftəlik limitə hesablanır.

Reqressiya qoruyucuları: `tests/unit/claude-low-priority-mode.test.ts`,
`tests/unit/claude-limit-reset.test.ts`,
`tests/unit/claude-low-priority-executor.test.ts`.

### Sessiya yaxınlığı (#7274)

**Əhatə dairəsi:** istənilən provayder üçün bir müştəri sessiyası (`X-Session-Id` /
`x-codex-session-id` / `x-omniroute-session` başlığı) bir bağlantıya bağlanır.

**Məqsəd:** çoxaddımlı agenti (Claude Code, aider, xüsusi agentlər) sorğular arasında eyni
hesabda saxlamaq, beləliklə hesablararası kontekst itkisini və hər hesab üzrə sessiya
vəziyyəti olan provayderlərdə təkrarlanan soyuq başlanğıc 429-larını azaltmaq.

**Tətbiq:**

- TTL-in həlli: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Bağlantının seçilməsi/yaradılması: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Başlığın çıxarılması (ümumi, istənilən provayder): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Saxlanılan bağlama cədvəli: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Tənzimləmə: `sessionAffinityTtlMs` (ms ilə qlobal TTL, `0` deaktiv edir) —
  `src/lib/db/settings.ts`. Əvvəllər yalnız Codex üçün olan `codexSessionAffinityTtlMs`
  adından `124_generic_session_affinity_ttl.sql` miqrasiyası ilə dəyişdirilib; bu miqrasiya
  əvvəllər konfiqurasiya edilmiş istənilən Codex TTL dəyərini yeni standart kimi saxlayır.

#7274-dən əvvəl `resolveSessionAffinityTtlMs()` `codex` istisna olmaqla hər bir provayder
üçün dərhal `0` qaytarırdı; buna görə bağlama mexanizmi və başlığın çıxarılması artıq
provayderdən asılı olmasa da, TTL tənzimləməsi (və sessiya başlıqları) başqa heç bir yerdə
təsir göstərmirdi. Düzəliş bu erkən qaytarmanı aradan qaldırdı; TTL qlobal olaraq `0`-dan
yuxarı təyin edildikdə artıq bütün provayderlərə eyni qaydada tətbiq olunur.

Üç sessiya yaxınlığı başlığı upstream-ə heç vaxt ötürülmür — icraedicilər müştəri başlıqlarını
ötürmək əvəzinə öz upstream başlıqlarını sıfırdan qururlar; buna görə bu, yalnız daxili
korrelyasiya identifikatoru olaraq qalır.

### Eksklüziv idarə olunan sessiya bağlantısı icarələri

**Əhatə dairəsi:** bir aktiv idarə olunan HTTP müştərisi/sessiyası bir uyğun OmniRoute
bağlantısına sahib olur.

**Məqsəd:** sorğular arasında sərt marşrutlaşdırma sərhədinə ehtiyacı olan müştərilər üçün
davamlı, eksklüziv bağlantı sahibliyi təmin etməkdir. Bu, yumşaq davamlılıq üstünlüyü olan
sessiya yaxınlığından fərqlənir: eksklüziv icarə həyat dövrü vəziyyətini SQLite-da saxlayır,
aktiv sahibliyin və aktiv bağlantının qlobal unikallığını tətbiq edir və provayderə
göndərilmədən əvvəl köhnə nəsli rədd edir.

Bu funksiya API açarı üzrə könüllü aktivləşdirilir. İdarə olunan açar `lease:exclusive`
əhatə dairəsinə və açıq, boş olmayan `allowedConnections` siyahısına malik olmalıdır.
İstənilən HTTP müştərisi həyat dövrü endpoint-indən istifadə edə bilər; müştəri adı,
user-agent, provayder, OAuth metodu və ya model tələb olunmur. İcarə modelə deyil,
bağlantıya sahib olur; buna görə bağlantı adi qaydada uyğun olaraq qaldığı müddətdə modelin
dəyişdirilməsi bağlamanı saxlayır. Adi model, kvota, sağlamlıq, soyuma və icazə siyahısı
qaydaları yenə də əsas qüvvəyə malikdir və eyni nəsli başqa boş, uyğun bağlantıya keçirə
bilər.

Həyat dövrü `POST /api/v1/session-leases` endpointi üzərində JSON `acquire`, `renew` və `release` əməliyyatları ilə idarə olunur. İdarə olunan inferens sorğuları qeyri-şəffaf `X-OmniRoute-Lease-Owner` dəyərini və dəqiq `X-OmniRoute-Lease-Generation` dəyərini təqdim edir. Sahib `vlo_` ilə başlayır və ardınca 43 base64url simvolu gəlir; yalnız onun SHA-256 heşi saxlanılır. Hər yekun göndərmə baryeri həmçinin autentifikasiya olunmuş API açarı ID-sini və aktiv bağlantı ID-sini əlaqələndirir. Lizinq idarəetmə başlıqları loqlardan, saxlanılan sorğu anlıq görüntülərindən və yuxarı axın icraçı başlıqlarından çıxarılır.

Adi marşrutlaşdırmada uyğun idarə olunan namizədlər varsa, lakin hər boş namizəd yad aktiv lizinq tərəfindən tutulubsa, OmniRoute HTTP `429`, lease-capacity-unavailable kodu, waiting-for-capacity vəziyyəti və ən erkən müvafiq bitmə vaxtından hesablanmış məhdud `Retry-After` qaytarır. Adi halda uyğun namizədlərin olmaması lizinq rəqabəti sayılmır və mövcud marşrutlaşdırma xətası semantikasını saxlayır.

Əlaqəli mexanizmlər ayrı qalır:

- OAuth sessiya məşğulluğu OAuth hesabları üçün prosesdaxili yumşaq paylamadır.
- Hesab semaforları sorğu paralelliyi icazələri verir və sorğu tamamlandıqda bitir.
- Eksklüziv idarə olunan sessiya lizinqiləri generasiya baryeri ilə davamlı həyat dövrü sahibliyidir.

---

## 3. Model kilidlənməsi

**Əhatə dairəsi:** provayder + bağlantı + model üçlüyü.

**Statusa görə açar əhatəsi:** uğursuz status kilidlənmənin hansı açara yazılacağına qərar verir
(`open-sse/services/accountFallback/exactModelLock.ts` faylındakı `resolveLockoutScope()`):

- `429` / `403` / `402` — kvota və ya səlahiyyət siqnalıdır — **kvota ailəsini** kilidləyir:
  codex üçün bütün `codex` / `spark` əhatəsi (bağlantının hər bir `gpt-5*` modeli),
  digər provayderlər üçün `getQuotaScopedModelForProvider()`.
- `404` modelin özünü kilidləyir (`getModelLockKey()` `not_found` halını daraldır).
- İstənilən digər status — `5xx` transport/server xətaları və OmniRoute-un keyfiyyət
  yoxlamasından özünün sintez etdiyi `502` — yalnız **dəqiq**
  provayder/bağlantı/model üçlüyünü kilidləyir. Bir modeldəki pis stream hesabın
  kvotası haqqında dəlil deyil; bu qaydadan əvvəl `codex/gpt-5.6-luna` üzərində bir
  boş cavab həmin bağlantının bütün `gpt-5*` modellərini 2–30 dəqiqəlik (artırıla
  bilən) müddətə marşrutlaşdırmadan çıxarırdı, halbuki kvotasına toxunulmamışdı.
- Çağırıcının açıq şəkildə göstərdiyi `scope` seçimi həmişə üstün gəlir (Antigravity `"exact"` ötürür).

**Məqsəd:** yalnız bir model əlçatan olmadıqda və ya kvota ilə məhdudlaşdıqda bütün bağlantını deaktiv etməmək.

**Nümunələr:**

- Model başına kvotalı provayderlərin 429 qaytarması
- Yerli provayderlərin çatışmayan bir model üçün 404 qaytarması
- Provayderə xas rejim/model icazə xətaları (məs., Grok rejimləri)

**İmplementasiya:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Model Cooldowns paneli (v3.8.0)

UI: Settings → Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Aktiv kilidlənmələri bu məlumatlarla göstərir: provayder, bağlantı, model, səbəb, expiresAt. Operatorlar modeli kartdan əl ilə yenidən aktivləşdirə bilərlər.

**REST API:**

- `GET /api/resilience/model-cooldowns` — aktiv kilidlənmələrin siyahısı
- `DELETE /api/resilience/model-cooldowns` — əl ilə yenidən aktivləşdirmə. Gövdə: `{provider, connection, model}`. Autentifikasiya: management.

### Cooldown Manager

UI: Monitoring → Cooldown Manager (`src/app/(dashboard)/dashboard/resilience/cooldowns/`).

Hər provayder səhifəsini ayrıca açmaq əvəzinə, keçici səbəbə görə marşrutlaşdırmadan
kənar qalan hər bağlantı üçün tək səhifə. Bağlantı cooldown-larını, model kilidlənmələrini
və terminal (yekun) vəziyyətləri göstərir; onları bağlantı başına, seçim üzrə və ya bir
provayderin bütün bağlantıları üçün təmizləyir və ən çox tənzimlənən cooldown qaydalarını
redaktə edir: `streamStallCooldown.enabled` və OAuth / API-açar `connectionCooldown`
baza cooldown-u ilə maksimum backoff addımları (`PATCH /api/resilience` vasitəsilə
saxlanılır). Terminal vəziyyətlər (`banned`, `expired`, `credits_exhausted`) göstərilir,
lakin burada heç vaxt təmizlənmir.

**REST API** (`src/lib/resilience/cooldownManager.ts`, autentifikasiya: management):

- `GET /api/resilience/cooldowns[?provider=]` — status, qalan cooldown, backoff
  səviyyəsi, son xəta növü və model kilidlənmələri ilə bağlantılar (etibarnamələr olmadan)
- `POST /api/resilience/cooldowns` — gövdə `{connectionIds: string[]}` və ya
  `{all: true, provider?}`; `{cleared, unchanged, skippedTerminal, lockoutsCleared}` qaytarır

### Kilidlənmə parametrləri UI + uğura əsaslanan azalma ilə bərpa (v3.8.23)

Model kilidlənməsi həmişə aktiv olan, kodda bərkidilmiş davranışdan tam konfiqurasiya
edilə bilən, istəyə bağlı (opt-in) bir xüsusiyyətə çevrildi — öz parametrlər kartı və
özünü bərpa edən bərpa yolu ilə.

**Parametrlər kartı:** Settings → Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Bu, yuxarıdakı yalnız-oxunan `ModelCooldownsCard`-dan (ki, yalnız aktiv kilidlənmələri
_göstərir_) **fərqlidir** — yeni kart _parametrləri konfiqurasiya edir_. Defolt dəyərlər
`DEFAULT_MODEL_LOCKOUT_SETTINGS`-də yerləşir
(`src/lib/resilience/modelLockoutSettings.ts`):

| Parametr                | Defolt dəyər                     | Mənası                                                         |
| ----------------------- | -------------------------------- | -------------------------------------------------------------- |
| `enabled`               | `false`                          | Əsas açar — model kilidlənməsi **defolt olaraq sönülüdür**.    |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Model əhatəli uğursuzluq sayılan upstream statuslar.           |
| `baseCooldownMs`        | `120_000` (120 s)                | İlk uğursuzluq üçün ilkin kilidlənmə müddəti.                  |
| `maxCooldownMs`         | `1_800_000` (30 dəq)             | Artırılmış cooldown-un yuxarı həddi.                           |
| `maxBackoffSteps`       | `10`                             | Maksimum eksponensial-backoff eskalasiya addımları.            |
| `useExponentialBackoff` | `true`                           | Təkrarlanan uğursuzluqların cooldown-u eksponensial artırması. |

Parametrlər standart parametrlər anbarı vasitəsilə saxlanılır və resilience parametrlər
sxemi ilə yoxlanılır; kart `baseCooldownMs`/`maxCooldownMs` dəyərlərini
(`maxCooldownMs ≥ baseCooldownMs` şərti ilə) və `maxBackoffSteps`-i məhdudlaşdırır.

**Uğura əsaslanan azalma ilə bərpa:** bərpa **yalnız** taymerin bitməsi deyil. Sağlam
cavab modelin uğursuzluq sayını geriyə endirir, buna görə də pəncərə ortasında bərpa
olunan model taymeri bitməzdən əvvəl eskalasiyanı dayandırır (və təmizlənir). Uğurlu
combo hədəfində `open-sse/services/combo.ts` `decayModelFailureCount()` funksiyasını
çağırır (`open-sse/services/accountFallback.ts`), bu da saxlanılan `failureCount`-u
**yarıya bölür** (`Math.floor(failureCount / 2)`); `0`-a çatdıqda kilidlənmə qeydi
tamamilə silinir. Əks funksiya `recordModelLockoutFailure()` isə eskalasiya pəncərəsindəki
uğursuzluqlarda sayı artırır (və cooldown-u eskalasiya edir). Bu uğur-azalması sadə
taymer bitməsinə əlavədir — hər iki yol modeli yenidən aktivləşdirə bilər.

**Vəziyyət:** kilidlənmələr **yaddaşda** saxlanılır (`provider:connectionId:model`
açarı ilə `ModelLockoutEntry`-lərin proses səviyyəli `Map`-ləri, dəqiq əhatəli kilidlər
`provider:connectionId:exact:model` ilə), verilənlər bazasına yazılmır — yenidən
başladılmada itirlər. _Parametrlər_ saxlanılır; aktiv kilidlənmə _vəziyyəti_ isə
müvəqqətidir (efemerdir).

---

## 4. Kvota-paylaşım Paralellik Nəzarəti (v3.8.36)

Abunə hesabları (GLM, MiniMax və s.) çox vaxt cəmi ~1–3 paralel sorğu qəbul edir; həddi aşmaq 429 xətalarına və cooldown-lara səbəb olur. Bu, bir neçə API açarının eyni upstream hesabını paylaşdığı **kvota-paylaşım** (`qtSd/…`) kombolarında xüsusilə kəskindir. Üç qat paylaşılan hesabın sorğu selinə tuş gəlməsinə mane olur.

### Bağlantı üzrə paralellik limiti (`max_concurrent`)

Hər provayder bağlantısı `max_concurrent` hüdudu elan edə bilər
(`provider_connections.max_concurrent`, bağlantı modalında / API / DB-də təyin olunur).
Limitsiz olması üçün boş buraxın. Bu, aşağıdakı seriyalaşdırma qatını idarə edən
yeganə tənzimləyicidir — onu hesabın real paralelliyinə uyğun təyin edin
(məs., GLM ~1, MiniMax ~2).

### Model üzrə paralellik limitləri (`modelConcurrency`)

Bağlantı əlavə olaraq `rateLimitOverrides` xəritəsində model üzrə dəqiq
paralellik hüdudları elan edə bilər:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

Bunu bağlantı modalında təyin edin (**Rate limit əvəzləmələri → Model üzrə
paralellik limitləri**, hər sətirdə bir `model=cap`) və ya eyni JSON forması ilə
`PATCH /api/providers/[id]` vasitəsilə. Əsas semantika:

- **Bağlantı səviyyəsində və model-spesifik:** `maxConcurrent` paylaşılan
  bağlantı səviyyəli hüdud olaraq qalır. Hər ikisi tətbiq olunanda, hər iki qapı
  eyni kompozit qapı daxilində atomik şəkildə alınır
  (`global → provider → account → model`); effektiv davranış tətbiq olunan
  daha sərt limit olur.
- **Dəqiq model açarı uyğunluğu:** açar, marşrut həllindən sonra icraçıya
  ötürülən model sətiridir — adətən çılpaq upstream model ID-si
  (`glm-5`), müştəri tərəfindəki `provider/model` aliası deyil (`zai/glm-5`
  `glm-5` ilə uyğun gəlmir). Dəyərlər paralel sorğular üçün müsbət tam ədəd
  hüdudlardır.
- **Lokal növbələmə, kəşf yoxdur:** artıq sorğular mövcud növbə/timeout
  semantikası ilə lokal olaraq növbəyə yerləşir (tipli `SEMAPHORE_TIMEOUT` /
  `SEMAPHORE_QUEUE_FULL` qəbul xətaları). OmniRoute upstream siyasətini kəşf
  etmir və ya nəticə çıxarmır — operatorun konfiqurasiya etdiyi dəqiq
  hüdudları icra edir. Doymuş model qapısı heç vaxt provayderi deaktiv etmir
  və daimi model kilidlənməsi yaratmır; upstream 429/cooldown/fallback
  davranışı xəta ehtiyatı olaraq qalır.
- **Bağlantı və proses üzrə əhatə dairəsi:** limitlər verilənlər bazası
  bağlantısı üzrədir və yaddaşda saxlanır, ona görə eyni upstream API açarını
  paylaşan iki bağlantı bir-biri ilə koordinasiya olunmur.
- **Konfiqurasiya olunmayıbsa, dəyişiklik yoxdur:** xəritəni göstərməmək (və ya
  paneldəki sahəni boş saxlamaq) heç bir model qapısı əlavə etmir. Heç bir
  universal provayder limiti irəli sürməyən nümunə konfiqurasiya:

```text
glm-5=1
glm-4.7=3
```

### Kvota-paylaşım sorğu seriyalaşdırması

Kvota-paylaşım göndərməsi müsbət `max_concurrent` elan edən bağlantını hədəf
aldıqda, həmin **hesaba** paralel sorğular bağlantı üzrə semafor vasitəsilə
seriyalaşdırılır (açar `qsconn:<connectionId>`): artıq sorğular hesabı selə
vermək əvəzinə **növbədə gözləyir**. O, **fail-open**-dir — dolu növbə və ya
timeout yuva olmadan davam edir və heç vaxt göndərilə bilən sorğunu rədd etmir.
**Parametrlər → Dayanıqlılıq → Kvota-paylaşım bağlantı üzrə paralellik**
bölməsində dəyişdirilir (`resilienceSettings.quotaShareConcurrencyLimit.enabled`,
defolt olaraq aktivdir). `max_concurrent` limiti olmadıqda davranış dəyişməz qalır.

> Kvota-paylaşım marşrutlama qapısı (`selectQuotaShareTarget`, DRR + P2C) özü
> fail-open-dir və limitə çatmış bağlantını yalnız _prioritetdən salır_ —
> tək bağlantılı hovuzda sərt limit qoya bilmir, buna görə seli əslində məhz
> bu semafor saxlayır.

### Kombolarda cooldown-a həssas təkrar cəhd

Hər bir kombo strategiyası üçün (aktiv olduqda), QISA müvəqqəti cooldown
səbəbindən 429 ilə nəticələnəcək sorğu onun bitməsini gözləyir və 429 qaytarmaq
əvəzinə yenidən göndərilir — bu, çoxmodelli kombolarda Gemini sinifli TPM/RPM
pəncərələrini (~60s retry-after) əhatə edir, məs., 2 modelli kombonun hər iki
hədəfinin model üzrə rate limitə düşməsi. **Parametrlər → Dayanıqlılıq**
bölməsindəki `comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`,
`budgetMs`) ilə məhdudlaşdırılır. O, heç vaxt `quota_exhausted` (gecə yarısına
qədər kilidli) və ya autentifikasiya/tapılmadı səbəblərinə görə gözləmir.

Eyni qapı göndərmədən əvvəlki vəziyyəti də əhatə edir (#16319): kombonun hər
hədəfi heç bir cəhd edilməzdən əvvəl atılır, çünki modeli qısa müvəqqəti
kilidlənmədədir; bu halda cəhdsiz yol eyni hüdudlar altında kilidin bitməsini
gözləyir və ipucusuz `503 ALL_TARGETS_SKIPPED` cavabı vermək əvəzinə yenidən
göndərir. Gözləməyə icazə verilmədikdə (hüdud, cəhd və ya büdcə tükənib, ya da
funksiya sönülüdür), son cavab ən erkən müvəqqəti kilidin bitmə vaxtından
`retry_after` / `reset_at` dəyərlərini daşıyan `429 rate_limit_error`-a
yüksəlir; kvota, autentifikasiya və tapılmadı kilidləri isə ipucusuz 503-ü
saxlayır.

---

## 5. Sorğu Növbəsinə Qəbul Nəzarəti (v3.8.49 · issue #6593)

**Əhatə**: provayder+bağlantı üzrə lokal rate-limit növbəsi (`open-sse/services/rateLimitManager.ts`,
Bottleneck ilə dəstəklənir), yuxarıdakı üç mexanizmdən bir qat aşağıda yerləşir.

**`maxWaitMs` növbədə gözləməni məhdudlaşdırır; `executionMaxWaitMs` icranı məhdudlaşdırır.**
İkisi qəsdən ayrıdır və heç biri digərinə ötürülmür.

`resilienceSettings.requestQueue.maxWaitMs` — **növbə-gözləmə büdcəsidir**: o,
provayder slotunun gözlənilməsini və sonra QUEUED vəziyyətində qalmağı əhatə edir və
taymer iş QUEUED statusundan çıxıb icraya başladığı anda sıfırlanır
(`rateLimitManager.ts`, `wrappedFn`). Onu aşan sorğu heç vaxt upstream-ə çatmır.
Defolt 30000ms, `src/lib/resilience/settings.ts`-də `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS`
tərəfindən təmin edilir və
`tests/unit/ratelimit-admission-control-6593.test.ts` ilə bərkidilib, buna görə də ona
edilən dəyişiklik həmin testi qırmızıya salır, bu abzası isə sakitcə köhnəlmiş
vəziyyətdə qoymur.

`resilienceSettings.requestQueue.executionMaxWaitMs` Bottleneck-in iş `expiration`
kimi qəbul etdiyi dəyərdir, taymeri isə yalnız dispatch-dən sonra başlayır. Bu, öz
upstream timeout-u olmayan executor-lar üçün son ehtiyatdır və executor-un öz
fetch-başlanğıc timeout-u daha uzun olduqda həmin dəyərə qədər qaldırılır, buna görə də
sağlam, icrada olan cavabı kəsə bilməz. Defolt 600000ms (10 dəq).

Növbə büdcəsinin `expiration`-a ötürülməsi keçmişdə qeyri-inkremental gateway-ləri
icra ortasında kəsirdi — onlar ilk baytlar gələnə qədər dəqiqələrlə qanuni olaraq
işləyirlər — və buna görə də expiration `code:
"RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) kimi üzə çıxarılır, növbə büdcəsi isə
növbə-timeout kodunu daşıyır. Hər ikisini `RATE_LIMIT_MAX_WAIT_MS` /
`RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) və ya dashboard
(**Settings → Resilience**) vasitəsilə override edin. Hər ikisi normallaşdırma zamanı
1ms–24 saat aralığına sıxılır.

**Hər ikisi üçün prioritet:** env dəyişəni yalnız _defoltu_ təmin edir.
`resilienceSettings.requestQueue`-də saxlanılmış dəyər (dashboard / API patch,
`key_value`-də saxlanılır) ondan üstün gəlir, bağlantı üzrə
`rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` isə ondan da üstün gəlir. Buna
görə də artıq saxlanılmış dəyəri olan bir deployment-də env dəyişənini təyin etmək
heç nəyi dəyişmir — əvəzində saxlanılmış parametri silin və ya yeniləyin.

Növbədə qalma `maxWaitMs` ilə məhdudlaşır; aşağıdakı `maxQueueDepth` isə eyni anda
neçə çağıranın növbədə ola biləcəyini məhdudlaşdırır.

**Bədəndə göstərilən təkrar cəhdlər: templəndirmə (pacing) və bloklama (lockout).**
429 bədəni öz gözləməsini göstərə bilər (Gemini `RetryInfo.retryDelay`, "retry after
Ns" mətni), bunu `updateFromResponseBody` oxuyur. Bağlantının `maxWaitMs`-inə sığan
gözləmə templəndirmədir: limiter bu müddət ərzində rezervuarını boşaldır və o yenidən
dolduqda növbədəki çağırışlar dispatch olunur. `maxWaitMs`-dən uzun gözləmə növbənin
otura biləcəyi bir şey deyil — Gemini tükənmiş gündəlik kvotaya `retryDelay:
"86399s"` ilə cavab verir. Yenidən qurulan 429-da ötürülən `Retry-After` (#16528)
artıq fallback mühərrikinin modeli həmin pəncərə üçün kilidləməsini təmin edir, amma
limiteri də ona görə dayandırmaq, açara tez çatan istənilən çağırışı (məsələn,
resilience sıfırlanmasından sonra) bütün `maxWaitMs` boyunca dayandırardı. Belə bir gözləmə tiplənmiş Google `RetryInfo`
detalından (`google_rpc_retry_info` mənşəyi) gəldikdə və açarın limiteri artıq modelə
sxoplandıqda (bax. `getLimiterKey`), 429 əvəzində həmin bağlantıda model
bloklamasına çevrilir (`open-sse/services/rateLimitManager/bodyRetryPause.ts`-də
`lockModelForLongBodyRetry`, 24 saatla məhdudlaşır) və limiter dayandırılmamış
qalır. Hesab seçimi `isModelLocked()` vasitəsilə həmin kilidə görə atlayır,
bağlantıya bərkidilmiş hədəflər üçün kombinə (combo) dispatch-qabağı qapı da eləcə
edir. Limitəri kvota ailəsi üzrə olan antigravity-də kilid, digər kvota kilidləri kimi,
dəqiq model üzərindədir. Alias sorğunu həmin modelə həll etdikdə müştərinin istədiyi
ad da kilidlənir, çünki bu yoxlamalar istənilən addan istifadə edir; ad dəqiq şəkildə
kilidlənir (`lockExactModel`), buna görə də antigravity kvota ailəsini və ya codex
əhatəsini keçən alias heç vaxt özünü kilidləmir. Nəsr formasında ipucu, tiplənməmiş
`retryDelay` və ya bütün bağlantı tərəfindən paylaşılan limiter pauzanı saxlayır.
429 yolunun bu az əvvəl yenidən qurduğu limiter həqiqətən pauza etdikdə, qalan növbə
vaxtı pauzadan əvvəl bitən çağıran həmin vaxtı gözləmək əvəzinə dərhal növbə-timeout
kodu ilə geri çevrilir (`checkLimiterPause`); qeyd olunmuş son limiter qurulmazdan
əvvəl, Bottleneck-in yenilənmə saatını başlatdığı nöqtədə lövbərlənir və rezervuara
sonradan edilən istənilən dəyişiklik onu unudur. Bu,
`tests/unit/rate-limit-long-body-retry-lockout.test.ts` və
`tests/unit/rate-limit-body-retry-pause.test.ts` ilə əhatə olunub.

**`maxQueueDepth` — istəyə bağlı (opt-in) qəbul həddi (yeni).** `resilienceSettings.requestQueue.maxQueueDepth`
bir provayder+bağlantı üçün eyni anda neçə sorğunun növbədə (hələ dispatch
olunmamış) qala biləcəyini məhdudlaşdırır. Növbə artıq `maxQueueDepth` sorğu
saxladıqda, yeni sorğu `limiter.schedule()`-ə çatmazdan **əvvəl** tiplənmiş
`code: "RATE_LIMIT_QUEUE_FULL"` xətası ilə sürətli rədd edilir — buna görə də rədd
ucuz başa gəlir və həmin sorğu üçün istənilən aşağı axın prompt-sıxılma / tərcümə
işindən əvvəl baş verir. Defolt `0` = söndürülüb, mövcud məhdudiyyətsiz-növbə
davranışını qoruyur; 0–100000 aralığında məhdudlaşıb. `RATE_LIMIT_MAX_QUEUE_DEPTH`
(env) və ya `resilienceSettings.requestQueue.maxQueueDepth` (dashboard/API patch)
vasitəsilə override edin.

Qəbul yoxlamasının özü təmiz funksiyadır
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`), buna görə də
real Bottleneck limiteri olmadan vahid-test oluna bilər.

> #6593-ü açan RFC həmçinin `bypassCompressionOnRateLimit`
> bayrağını təklif edirdi. Bu repodakı `open-sse/services/compression/`
> pipeline-ı sintez olunmuş 429 body-ləri üzərində HTTP cavab sıxılması deyil,
> gedən LLM sorğusunda prompt/kontekst sıxılmasıdır (`chatCore.ts`,
> `resolveCompressionSettings`/`selectCompressionStrategy` blokunun ətrafında)
> — literal bypass bayrağı üçün uyğun kod yolu mövcud deyil. Həmin
> prompt-sıxılma addımı hazırda sorğu pipeline-ında `withRateLimit()`-dən
> _əvvəl_ icra olunur, ona görə də növbə-dolu rəddində onu atlamaq üçün
> sıralamanın dəyişdirilməsi bu issue-nun əhatəsindən kənara çıxan, ayrıca və
> daha böyük bir dəyişiklikdir; o, qəsdən burada **implementasiya edilməyib**
> və CPU qənaəti qazancı sıralama riskinə dəyər olduğu halda sonrakı iş kimi
> saxlanılıb.

### Rate-Limit avtomatik aktivləşdirmə təhlükəsizlik şəbəkəsi və bağlantı qorunması (`rateLimitProtection`)

**Avtomatik aktivləşdirmə təhlükəsizlik şəbəkəsi** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, standart `true`):
Standart olaraq, OmniRoute bütün aktiv API-açar provayder bağlantıları üçün rate-limit növbə qorunmasını avtomatik aktivləşdirir (`getProviderCategory(provider) === "apikey"`). Bu, sürət məhdudiyyətinə həssas upstream API açarlarına gələn sorğuların upstream 429 xətalarına partlamaq əvəzinə Bottleneck vasitəsilə növbəyə alınmasını və boğulmasını təmin edir. Təhlükəsizlik şəbəkəsi `RATE_LIMIT_AUTO_ENABLE` mühit dəyişəni ilə üstələnə bilər (`false`/`0`/`off` söndürür, `true`/`1`/`on` məcburi aktivləşdirir) və bu, saxlanılmış dashboard parametrlərindən (**Parametrlər → Dayanıqlılıq** / `PATCH /api/resilience`) üstünlük təşkil edir.

**Bağlantı səviyyəsində `rateLimitProtection`-ın semantikası:**
Bağlantı səviyyəsində rate-limit qorunması provayder bağlantılarındakı `rateLimitProtection` boolean sahəsi ilə izlənilir (SQLite-də `rate_limit_protection` kimi saxlanılır):

- **Aşkar aktiv (`rateLimitProtection === true`)**: Provayder kateqoriyasından və ya avtomatik aktivləşdirmə təhlükəsizlik şəbəkəsinin yandırılıb-yandırılmamasından asılı olmayaraq, bu bağlantı üçün rate-limit qorunması aşkar şəkildə aktivləşdirilir.
- **Aşkar sönük (`rateLimitProtection === false`)**: Aşkar qorunmanı söndürür, lakin aktiv API-açar bağlantısını qlobal avtomatik aktivləşdirmə təhlükəsizlik şəbəkəsindən **çıxarmır**. `reconcileEnabledConnections` funksiyasında (`open-sse/services/rateLimitManager.ts`) `false` və `undefined` ekvivalentdir: yalnız `rateLimitProtection === true` aşkar üstələmə kimi qəbul edilir. `rateLimitProtection` `false` olduqda (və ya təyin edilmədikdə), aktiv API-açar bağlantısı yenə də avtomatik aktivləşdirmə şərtinə uyğun gəlir və rate-limit qorunması altında qalır.
- **Bağlantı səviyyəsində imtina yoxdur**: Operator hazırda digərləri üçün avtomatik aktivləşdirməni aktiv saxlayarkən "bu tək aktiv API-açar bağlantısı rate-limit növbə qorunması olmadan işləməlidir" tələbini ifadə edə bilmir. API-açar bağlantılarını rate-limit növbələri olmadan tamamilə işlətmək üçün təhlükəsizlik şəbəkəsi qlobal olaraq söndürülməlidir (`RATE_LIMIT_AUTO_ENABLE=false` və ya `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`).

**Dəstəklənən yazma yolları:**

- **`POST /api/rate-limits`**: Bağlantı üçün `rateLimitProtection`-ı açıb-bağlamaq məqsədilə dəstəklənən idarəetmə yazma yolu (`{ connectionId: string, enabled: boolean }`). Bunu `enabled: true` ilə çağırmaq aşkar qorunmanı yandırır; `enabled: false` ilə çağırmaq isə aşkar qorunmanı aradan qaldırır (lakin avtomatik aktivləşdirmə yandırılıbsa, aktiv API-açar bağlantıları qlobal təhlükəsizlik şəbəkəsi altında qorunmaqla qalır).
- **`PUT /api/providers/[id]`**: Qəsdən `rateLimitProtection`-ı qəbul etmir və onu dəyişmir (#11278). `PUT /api/providers/[id]` vasitəsilə provayder bağlantısı metadatasının yenilənməsi heç vaxt saxlanılmış rate-limit qorunma vəziyyətini dəyişməyəcək.

---

## 6. Yavaş axın ötürmə sürəti nəzarətçisi (#9709)

İstəyə bağlı `resilienceSettings.streamRecovery.throughputWatchdog` mühafizəsi hələ də parçalar göndərən, lakin konfiqurasiya edilmiş faydalı çıxış sürətindən aşağı assistent çıxışı istehsal edən upstream-i aşkarlayır. O, qəsdən boşdayanma taymautundan fərqləndirilir: heartbeat-lər və metadata heç bir taymeri sıfırlamır və irəliləyiş kimi sayılmır. O, həmçinin çıxış keyfiyyətindən asılı olmayaraq mütləq təhlükəsizlik həddi olaraq qalan sərt cəhd son müddətindən (#9153) də fərqlidir.

Nəzarətçi dayandırma edə bilməzdən əvvəl istiləşmə dövrü və ardınca tam sürüşən pəncərə tələb edir. O, Chat Completions və Responses API çıxış hadisələrindən mətn deltalarını sayır (ehtiyatlı UTF-8 bayt əvəzedicisi), yalnız-istifadə və boş hadisələri nəzərə almır, alət çağırışı və ya mühakimə hadisələri icra olunarkən isə qərarı təxirə salır. O, defolt olaraq sönülüdür və `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true` ilə aktivləşdirilə bilər; pəncərə, istiləşmə, minimum sürət və minimum ölçülə bilən çıxış standart dayanıqlılıq-parametrləri normallaşdırma qatı ilə məhdudlaşdırılır.

Aktiv olduqda, nəzarətçi dayandırması yalnız aktiv upstream cəhdinə tətbiq olunur. Müştəriyə görünən hər hansı baytdan əvvəl mövcud eyni-hesab erkən bərpa yolu cəhdi yenidən aça bilər. Commit-dən sonra axın heç vaxt kor-koranə təkrarlanmır; yalnız mövcud təhlükəsiz axın-arası davam etdirmə müqaviləsi suffiksi birləşdirə bilər. Yekunlaşdırma birdəfəlik qalır, buna görə istifadə uçotu və semafor buraxılışı təkrarlanmır.

---

## 7. Upstream Statusunun Yenidən Bəyanı (səhv göstərilmiş kvota xətaları)

**Əhatə dairəsi:** müvəqqəti kvota tükənməsini səhv HTTP statusu ilə bildirən bir upstream şlüzü.

**Məqsəd:** təsnifatdan ƏVVƏL yanıltıcı statusu düzəltmək, belə ki, aşağı axın istehlakçıları (fallback mühərriki, kombo aqreqasiyası, müştəriyə yönəlmiş cavab) uğursuzluğun həqiqi yenidən cəhd edilə bilən təbiətini görsünlər.

Bəzi şlüzlər MÜVƏQQƏTİ kvota tükənməsini yenidən cəhd edilə bilməyən HTTP
statusu ilə siqnallaşdırır. `agentrouter.org` standart `429` əvəzinə Çin dilində
bədən (`用户额度不足` / `额度不足`) ilə `403` (bəzən `400`) qaytarır. Claude
Code kimi müştərilər `403`-ü daimi kimi qəbul edir və sessiyanı dayandırır,
düzəliş olmadan isə fallback mühərriki onu kvota hadisəsi əvəzinə
`AUTH_ERROR` kimi təsnif edərdi.

**Tətbiq:**

- Reyestr + uyğunlaşdırıcı: `open-sse/config/upstreamStatusRestatement.ts` —
  provayder üzrə qaydalar siyahısı (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), `applyStatusRestatement()` vasitəsilə uyğunlaşdırılır.
- Çağırış yeri: `open-sse/handlers/chatCore.ts` faylındakı `providerFailure:`
  bloku (təxminən 3654-cü sətir), `parseUpstreamError()` xəta HTTP statuslu
  (`!providerResponse.ok`) upstream cavabını təhlil etdikən dərhal sonra və hər
  hansı təsnifat işə düşməzdən əvvəl, belə ki, hər bir aşağı axın istehlakçısı
  düzəldilmiş statusu görür. `200` SSE axını daxilində yerləşdirilmiş xətalar
  ayrıca, sonrakı axın-təhlili yolunu izləyir və bu gün bu hook tərəfindən əhatə
  **olunmur** — məlum məhdudiyyət, agentrouter-in səhv statusu üçün hələ lazım
  deyil (o, xəta HTTP statusu kimi üzə çıxır).
- Yenidən cəhd uyğunluğu: `429` `RETRY_AFTER_ELIGIBLE_STATUSES`-dədir
  (`open-sse/services/combo/unavailableRetryGate.ts`), buna görə yenidən bəyan
  edilmiş xəta ölü `403` kimi üzə çıxmaq əvəzinə real yenidən cəhd pəncərəsi daşıyır.
- Sintetik `60s` `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`) yalnız
  yenidən bəyan edilmiş cavabın **müştəriyə** dediyi şeydir; o, özü bağlantının
  daxili soyutma/bloklama müddəti deyil — bu, yenidən bəyan edilmiş xətanı
  faktiki idarə edən mexanizm tərəfindən ayrıca tənzimlənir (Bağlantı Soyutmasının
  artan geri çəkilməsi, §2, API-açar provayderləri üçün baza `3s`; və ya
  agentrouter kimi model-kvota-üzrə provayderlər üçün Model Bloklaması, §3).
  Router daxili olaraq müştəriyə elan etdiyi 60s pəncərəsindən daha tez yenidən
  cəhdə uyğun ola bilər — qəsdən saxlanılmış ehtiyat, xəta deyil.

Daimi xətalar (agentrouter-in `无权访问模型` — bu modelə giriş yoxdur) HEÇ
VAXT yenidən bəyan edilmir: `excludeMarkers` `textMarkers` uyğun gəlsə belə
qaydanı veto edir, buna görə xəta orijinal statusunu saxlayır və heç nə onu əbədi
olaraq yenidən cəhd etmir. Uyğun provayder təsnifat qaydası
(`open-sse/config/providerErrorRules.ts` faylındakı `agentrouter-model-access-denied`:
`reason: "auth_error"`, `scope: "model"`, bəyan edilmiş `6h` baza soyutması)
generik apikey-kateqoriya `FORBIDDEN` erkən-qayıdışından _əvvəl_
`checkFallbackError` (`open-sse/services/accountFallback.ts`) tərəfindən nəzərdən
keçirilir, `honorsRuleLockScope(provider)` ilə qapılanır (#10334 — hazırda
`providerErrorRules.ts` faylındakı `HONORS_RULE_LOCK_SCOPE_PROVIDERS` icazə
siyahısı vasitəsilə yalnız agentrouter-ə xasdır). Qaydanın bəyan edilmiş 6s
soyutması `fallbackResult.baseCooldownMs` kimi ötürülür, lakin o, hələ də
əvvəlcədən mövcud model-kvota-üzrə bloklama yolunu qidalandırır
(`lockModelIfPerModelQuota()` / `recordModelLockoutFailure()`, soyutma
mənbəyindən başqa #10334 tərəfindən dəyişdirilməyib): o, hər bir digər model
bloklaması kimi operatorun `mlSettings.maxCooldownMs` dəyərinə (defolt
`1_800_000ms` / 30dəq) qədər aşağı sıxılır və _saxlanılan bloklama səbəbi_
qaydanın `"auth_error"` dəyəri yox, əvvəlcədən mövcud sərt-kodlaşdırılmış
`"forbidden"` olaraq qalır — səbəb sətiri yox, yalnız soyutma müddəti sona
qədər hörmət olunur. Bağlantının özü aktiv qalır; eyni bağlantıdakı qardaş
modellər təsirsiz qalır.

Yenidən ifadə olunmuş kvota xətaları (`额度不足`) produksiyada provayder qaydasına çatır (`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope: "connection"`, özünə məxsus elan edilmiş cooldown yoxdur — persistensiya qatının miqyaslanmış backoff standartı tətbiq olunur). #10334-dən bəri `ProviderErrorRuleMatch`-dəki `scope` ucdan uca istehlak olunur, lakin **yalnız** `HONORS_RULE_LOCK_SCOPE_PROVIDERS` icazə siyahısındakı provayderlər üçün (`providerErrorRules.ts` — bu gün yalnız `"agentrouter"`, `honorsRuleLockScope()` vasitəsilə idarə olunur). Hər bir digər provayder üçün `scope` məlumat xarakterli qalır, dəqiq #10334-dən əvvəlki kimi. `checkFallbackError` uyğun qaydanın scope-unu `fallbackResult.ruleScope` kimi üzə çıxarır; `isAgentrouterConnectionQuotaScope()` (`src/sse/services/auth.ts`) — `ruleScope`-un bağlantı miqyaslı, özünü bərpa edən siqnal kimi qəbul edilməsinin həqiqətən təhlükəsiz olduğunu təsdiqləyən paylaşılan mühafizəçidir (scope `"connection"`, reason `quota_exhausted`, heç vaxt `permanent`, heç vaxt `creditsExhausted` — gələcəkdə bir qaydanın `"connection"` scope-unu daimi hesab vəziyyəti ilə qoşalaşdırmasına qarşı müdafiə). Onu iki istehlakçı çağırır:

- **Persistensiya** (`markAccountUnavailable()`, `src/sse/services/auth.ts`): passthrough-provayderin **model-səviyyəli** kilidlənmə qoluna düşmək əvəzinə (agentrouter `passthroughModels: true`-dur → `hasPerModelQuota()` `true` qaytarır), o, **müvəqqəti bağlantı cooldown-u** tətbiq edir — `testStatus: "unavailable"` + `rateLimitedUntil`, heç vaxt terminal status deyil (`credits_exhausted`/`banned`/`expired`) — belə ki, bağlantı əl ilə credential sıfırlanması tələb etmək əvəzinə cooldown müddəti bitdikdə özünü bərpa edir. `disableCooling: true` olan bağlantılar üçün atlanır (#2997): həmin opt-out bunun əvəzinə model-səviyyəli kilidlənməyə keçir (sənədləşdirilmiş kompromis — qolun üstündəki kod şərhinə baxın).
- **Eyni-sorğu combo marşrutlaşdırması** (`applyComboTargetExhaustion()`, `open-sse/services/combo/targetExhaustion.ts`): eyni mühafizəçi bağlantını yaddaşdaxili `exhaustedConnections` toplusuna `${provider}:${connectionId}` açarı ilə qeyd edir. Bu, yalnız öz hədəf obyektində _həmin dəqiq `connectionId`-ni artıq özü daşıyan_ qalan EYNİ-SORĞU hədəfi atlayır (`getExhaustedTargetSkipReason()`, `open-sse/services/combo/comboPredicates.ts`, `exhaustedConnections` axtarışından əvvəl `if (provider && connectionId)`) — qardaş hədəflərin özlərinə məxsus sabitlənmiş `connectionId` daşımadığı və birinin yalnız cavabın `X-OmniRoute-Selected-Connection-Id` başlığından dispatch başına həll edildiyi sadə model-siyahısı combo-su heç vaxt həmin açar uyğunluğuna düşmür. Həmin ümumi hal üçün qalan seqmentin indicə tükənmiş hesabı yenidən istifadə etməsinə qarşı real müdafiə bu Set DEYİL — o, yuxarıdakı persistensiya qatı (bağlantının `rateLimitedUntil`-i artıq gələcəkdədir) ilə və eyni mühafizəçinin uğursuzluq üçün `transientRateLimitedProviders`-ı yatırtması ilə birləşir ("İki mərhələli dizayn" bölməsinə və `targetExhaustion.ts`-də `isAgentrouterConnectionQuotaScope` qolundakı kod şərhinə baxın): həmin Set işarələnməmiş qaldıqca `combo.ts`-in `allowRateLimitedConnection` məcburi icazəsi (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) provayderin qalan seqmentləri üçün işə DÜŞMÜR, belə ki, credential seçiminin `rateLimitedUntil` filtri (`src/sse/services/auth.ts:1238`) normal şəkildə hörmət olunur və qalan seqment ya fərqli, hələ də uyğun olan agentrouter bağlantısı seçir, ya da mövcud credential olmadığı üçün uğursuz olur — bu qolun indicə soyutduğu bağlantıya öz yolunu məcburən geri açmır.

### İki mərhələli dizayn: statusun yenidən ifadəsi, sonra təsnifat

Statusun yenidən ifadəsi (`upstreamStatusRestatement.ts`) və provayder təsnifat qaydaları (`open-sse/config/providerErrorRules.ts`, `providerRuleRegistry`) hər ikisi provayder id-si və mətn markerləri ilə açarlanan ayrı-ayrı reyestrlərdir, lakin onlar fərqli yerlərdə işləyir və fərqli məqsədlərə xidmət edir: yenidən ifadə HTTP statusunu `chatCore.ts`-də erkən mərhələdə yenidən yazır; təsnifat qaydaları fallback `reason`-u seçir və `checkFallbackError()` (`open-sse/services/accountFallback.ts`) daxilində `scope`-u kilidləyir (`model` / `provider` / `connection`).

Təsnifat qaydaları tam xəta **mətnini** (`额度不足` kimi gövdə markerlərini uyğunlaşdırmaq üçün lazımdır) yalnız `providerErrorRules.ts`-dəki `FULL_TEXT_RULE_PROVIDERS` icazə siyahısında sadalanan provayderlər üçün görür — hazırda yalnız `"agentrouter"`. Hər bir digər **daxili kataloq** provayderi üçün `checkFallbackError` `getProviderErrorRuleMatch`-ə yalnız strukturlaşdırılmış xətanı (`{code, type}`) təhvil verir ki, bu da başlıq/status/kod-əsaslı qaydalar üçün kifayətdir, lakin gövdə mətni markerlərinə qarşı kordur. `resolveRuleMatchBody()` köməkçisi bu seçimi yerinə yetirir: icazə siyahısındakı provayderlər üçün tam xəta mətni, əks halda strukturlaşdırılmış xəta. `FULL_TEXT_RULE_PROVIDERS`-ə **daxili** provayder əlavə etmək açıq provayder-başına opt-in-dir — o, siyahıda olmayan hər bir provayder üçün standart yolun bayt-bayt dəyişməz qalması üçündür.

Qaydanın `scope`-u (`model` / `provider` / `connection`) `FULL_TEXT_RULE_PROVIDERS`-dən ayrı bir opt-in-dir: `checkFallbackError` onu yalnız `fallbackResult.ruleScope` kimi üzə çıxarır və aşağı axın istehlakçıları onu məlumat etiketindən başqa bir şey kimi yalnız eyni fayldakı `HONORS_RULE_LOCK_SCOPE_PROVIDERS` icazə siyahısındakı provayderlər üçün qəbul edir (`gated via honorsRuleLockScope()` — bu gün yalnız `"agentrouter"`). Provayder həmin icazə siyahısına daxil olduqdan sonra `scope: "connection"` uyğunluğunun faktiki olaraq nə etdiyi üçün yuxarıdakı "Yenidən ifadə olunmuş kvota xətaları" bölməsinə baxın.

**#11104 — operator tərəfindən elan edilmiş qaydalar hər iki allowlist-i atləyir.** Operator bu faylı redaktə etmədən `settings.providerErrorRules` (`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`) vasitəsilə runtime zamanı provayderə xas qayda elan edə bilər. Operator qaydasını `FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` arxasına qoymaq — daxili kataloq qaydalarının **standart** davranışını qorumaq üçün nəzərdə tutulmuş allowlist-lər — qaydanın elan edilməsi artıq operatorun açıq opt-in-i olduğundan, parametrlər mexanizmini orada artıq siyahıya alınmışlardan başqa hər bir provayder üçün işləməz hala gətirərdi. `resolveRuleMatchBody()` və `honorsRuleLockScope()` hər ikisi əvvəlcə `hasOperatorRuleForProvider()`-i yoxlayır: operator qaydası olan provayder xam xəta mətnini alır və elan edilmiş `scope`-u hər hansı allowlist-də görünüb-görünməməsindən asılı olmayaraq nəzərə alınır.

**Məlum boşluq — HTTP 400 üçün `providerRuleRegistry` heç vaxt müraciət olunmur.** `checkFallbackError`-ın `BAD_REQUEST` budağı status 400-ü tamamilə öz pattern massivləri (`accountFallback.ts`-də `MODEL_ACCESS_DENIED_PATTERNS`, `CONTEXT_OVERFLOW_PATTERNS` və s.) vasitəsilə təsnifləşdirir və yuxarıdakı `configuredRule`/`getProviderErrorRuleMatch` budağına çatılmazdan əvvəl qayıdır. `status: 400` ilə daxili kataloq qaydası (və ya operator qaydası) sintaktik cəhətdən etibarlıdır, lakin heç vaxt işə düşməyəcək. Bu gün heç bir mövcud qayda 400-ü hədəfləmir, ona görə də prodakşnda heç nə təsirlənmir — lakin gələcək bir 400 qaydası əvvəlcə bu budağa toxunmağı tələb edir, bu isə qayda əlavə etməkdən daha böyük dəyişiklikdir (o, artıq pattern-massiv davranışına güvənən hər bir provayder üçün 400-ü yenidən təsnifləşdirir) və tək-provayderli qayda əlavəsinin əhatəsindən kənardır.

### Yeni kvotanı yanlış göstərən gateway əlavə etmək

1. `statusRestatementRegistry`-də (`open-sse/config/upstreamStatusRestatement.ts`) bir qayda massivi qeydiyyatdan keçirin. `textMarkers`-i provayderə xas saxlayın; `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`) ilə toqquşan ümumi ingilis ifadələrini heç vaxt təkrar istifadə etməyin.
2. İstəyə görə düzgün kilid əhatəsini seçmək üçün `open-sse/config/providerErrorRules.ts`-də (`providerRuleRegistry`) təsnifat qaydalarını qeydiyyatdan keçirin (hesab miqyaslı kvota üçün `connection`, modelə xas xətalar üçün `model`). Bu addım prodakşnda yalnız qaydaları tam xəta mətninə (body markerlərinə) ehtiyacı olan provayderlər üçün qüvvəyə minir: provayder id-ni eyni faylda `FULL_TEXT_RULE_PROVIDERS`-ə əlavə edin — əks halda `checkFallbackError` qaydaya yalnız strukturlaşdırılmış `{code, type}` xətasını verir və body mətnli qayda canlı trafikdə heç vaxt uyğunlaşmayacaq. Yalnız `status`/`headers` üzrə uyğunlaşan qaydalar (Opencode və ya Minimax-ınki kimi) bu opt-in-ə ehtiyac duymur. Ayrıca, əgər qayda `scope: "connection"` elan edirsə və məqsəd real bağlantı miqyaslı cooldown və eyni sorğuda combo atlanması isə (yalnız informasiya etiketi deyil), provayder id-ni eyni faylda `HONORS_RULE_LOCK_SCOPE_PROVIDERS`-ə əlavə edin — bu, `markAccountUnavailable()` (`src/sse/services/auth.ts`) və `applyComboTargetExhaustion()` (`open-sse/services/combo/targetExhaustion.ts`) daxilində `isAgentrouterConnectionQuotaScope()` tipli istehlakı idarə edən mexanizmdir; bu olmadan `scope` yenə də `fallbackResult.ruleScope` vasitəsilə axır, lakin heç nə ona reaksiya vermir.
3. `tests/unit/upstream-status-restatement.test.ts` və `tests/unit/agentrouter-error-rules.test.ts`-i əks etdirən unit testləri əlavə edin (not-permanent / not-creditsExhausted qoruyucuları daxil olmaqla və — əgər provayder allowlist-ə ehtiyac duyursa — `resolveRuleMatchBody()`-nin tam mətni yalnız həmin provayder üçün qaytardığını təsdiq edən test).

`chatCore.ts`, `classifyError` və ya combo-da heç bir dəyişiklik tələb olunmur.

#### Egress üzrə qruplaşdırılmış kilid (#10880)

`EGRESS_BUCKETED_LOCK_PROVIDERS`-dəki provayderlər (opencode ailəsi) IP üzrə qruplaşdırılmış upstream kimi qəbul edilir (opencode pulsuz səviyyəsi IP üzrə qruplaşdırılıb, hesab üzrə yox — bax #9611): `quota_exhausted` **və ya** `rate_limit_exceeded` kimi təsnifləşdirilmiş status-429, rotasiya onları sınamağa çatılmazdan əvvəl son məlum egress IP-si uğursuz olan bağlantınınki ilə üst-üstə düşən hər bir allowlist ailəsi bağlantısını soyudur — N-1 zəmanətli-uğursuz upstream çağırışının qarşısını alaraq (#10460/#10525 ilə eyni forma). `rate_limit_exceeded` qəsdən daxil edilib: `markAccountUnavailable` yolunda opencode-a xas qaydalar heç vaxt uyğunlaşmır (`checkFallbackError`-ə headers/body verilmir, opencode `FULL_TEXT_RULE_PROVIDERS`-də deyil), ona görə də body-sində abunə-kvota mətni ("monthly usage limit reached") daşıyan 429, `status_429` qaydasına heç çatılmazdan əvvəl kvota-mətn fallback-i (`buildSubscriptionQuotaFallback`, `accountFallback.ts`; 1 saatlıq cooldown) tərəfindən `quota_exhausted` kimi təsnifləşdirilir — kvota mətni olmayan 429 (sadə rate limiting) isə `status_429` qaydası vasitəsilə `rate_limit_exceeded` kimi təsnifləşir və yenə də IP ailəsini soyudur. Allowlist-dəki provayder üçün IP üzrə qruplaşdırılmış rate limit tükənmiş kvota ilə eyni siqnaldır. Dürüst məhdudiyyətlər:

- **Best-effort (maksimum cəhd)**: kilid, bağlantının son məlum `egress_ip`-sini `proxy_logs`-dan həll edir (24 saatlıq pəncərə, sinxron, keşsiz). Soyuq keş (egress IP heç vaxt yoxlanılmayıb) və ya sətrin olmaması → uğursuz bağlantı yenə də qol tərəfindən soyudulur (bu günkü kimi qeyd olunur), sadəcə heç bir qardaş kilidlənmir.
- **Heç vaxt terminal deyil**: soyuma, özünü yeniləyən kvota pəncərəsidir (`testStatus: "unavailable"`); IP səviyyəli siqnaldan heç vaxt daimi vəziyyət törədilmir. `disableCooling` bağlantıları qolu tamamilə atlayır.
- **İcazə siyahısındakı ailə üçün kilid qranulyarlığı dəyişir**: bu, əhatə dəyişikliyidir, təkcə qardaş optimallaşdırması deyil. opencode `passthroughModels` provayderidir, buna görə də bu qoldan əvvəl 429, MODEL-ə görə kilidləmə yaradırdı; indi isə bağlantı soyuması yaradır — heç bir qardaşı olmayan tək bağlantı işlədən operator üçün də. Bu, opencode qayda cədvəlinin artıq düzgün elan etdiyi qranulyarlıqdır (`scope: "connection"`, `providerErrorRules.ts`), lakin opencode `HONORS_RULE_LOCK_SCOPE_PROVIDERS` siyahısında olmadığı üçün indiyədək heç vaxt nəzərə alınmayıb. Qol, uğursuz bağlantının soyumasını + `backoffLevel`-i özü yazır, bağlantı əhatəli agentrouter qolunu əks etdirir və qayıdır — model-ə görə blok və aşağıdakı ümumi yol heç vaxt icra olunmur.
- **Combo daxildir**: agentrouter qolu kimi, əhatə combo çağırışçısının 429-a tətbiq etdiyi `persistUnavailableState`/`isCombo` endirməsini bilərəkdən məhəl qoymur. Model-ə görə kilidləmə bu əhatənin daha zəif forması deyil, yanlış vahiddir: o, tükənmiş IP haqqında heç nə bildirmir, buna görə də combo rotasiyası hər qardaş üçün bir zəmanətli-uğursuz çağırışı boşa xərcləməyə davam edərdi.
- **Qardaş təhlükəsizliyi**: artıq terminal olan (banned/credits_exhausted) və ya artıq daha uzun soyumada olan qardaşın üzərinə heç vaxt yazılmır.
- **Eksklüziv icazə siyahısı**: `EGRESS_BUCKETED_LOCK_PROVIDERS`-i genişləndirmək sahibin açıq qərarıdır; ümumi əlaqələndirmə yoxdur (pattern #10334/#10419). Qardaş sorğusu, onu SQL literali kimi təkrarlamaq əvəzinə həmin icazə siyahısını bağlayır, buna görə də onu genişləndirmək bir sətirlik dəyişiklik olaraq qalır.
- **Egress IP rotasiyası, hər iki istiqamətdə**: axtarış pəncərəsi (24 saat) egress-IP keş TTL-indən (5 dəq) xeyli genişdir, buna görə də "son məlum IP" tarixçədir, cari vəziyyət deyil. Bağlantının proksisi pəncərə daxilində rotasiya olunubsa, kilid həqiqətən paylaşılan IP-ni **qaçıra bilər** (qeyd olunmuş IP yeni, tükənməmiş olandır) — və simmetrik olaraq, o vaxtdan bəri tükənmiş IP-dən **rotasiya ilə uzaqlaşmış qardaşı soyuda bilər**. İkinci hal həmin qardaşa bir soyuma pəncərəsinə başa gəlir; hər ikisi tarixçə əsaslı axtarışın qəbul edilmiş best-effort məhdudiyyətləridir.
- **Xərc**: `proxy_logs`-un iki məhdud skanı (`idx_pl_timestamp` vasitəsilə pəncərə ilə filtrlənib), yalnız 429 tezliyində. Yeni indeks yoxdur (migrasiya 134 YAGNI). Orta ölçülü real-trafik DB nüsxəsində ölçülüb; yüksək məhsuldarlıqlı instansiya eyni pəncərədə proporsional olaraq daha çox sətir saxlayır.

---

## Digər Dayanıqlılıq Xüsusiyyətləri

- **20 marşrutlaşdırma strategiyası** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — baxın: [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Sıfırlanmadan xəbərdar marşrutlaşdırma** (v3.8.0) — kvota sıfırlanma vaxtına görə bağlantıları prioritetləşdirir.
- **Arxa plan rejiminin degradasiyası** — Responses API-də `background: true` xəbərdarlıqla sinxron rejimə endirilir.
- **Dinamik alət limiti aşkarlanması** — alət sayı limitlərinə çatıldıqda provayderləri geri çəkir.
- **Təcili ehtiyat (fallback)** — `OMNIROUTE_EMERGENCY_FALLBACK` ilə idarə olunur; operatorlar onu yenidən başlatma tələb etmədən Feature Flags səhifəsindən üstələyə bilərlər.

---

## Sazlama

- Çəkili kombo `503 all_targets_cooling_down` cavabı verirsə (`Retry-After` təyin olunub, `diagnostics.excluded` hər hədəfi `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable` ilə göstərir) → hovuz konfiqurasiya olunub və bağlıdır, hər hədəf sadəcə dayanıqlılıq taymeri ilə istisna edilib; `[COMBO] Weighted selection: every target excluded before dispatch — …` xəbərdarlığı səbəbləri və qalan saniyələri göstərir. Eyni kombodan gələn `404 no_executable_targets` heç bir dayanıqlılıq taymerinin iştirak etmədiyi deməkdir (icra edəcək heç nə yoxdur və ya hər hesab əlçatanlıq yoxlamasından keçməyib). `targetResolution.ts` faylında toplanan istisnalardan `open-sse/services/combo/pinRecovery.ts` faylında qurulub.
- Bir provayderin bütün açarları ötürülürsə → həm dövrə qırıcısının vəziyyətini, HƏM DƏ hər bağlantının `rateLimitedUntil`/`testStatus` dəyərini yoxlayın.
- Sıfırlanma pəncərəsindən sonra provayder daimi istisna olunubsa → kod `getStatus()`/`canExecute()` əvəzinə xam `state` oxuyur.
- Bir açar uğursuz olur, digərləri işləməlidir → dövrə qırıcısı əvəzinə bağlantı soyudulmasına üstünlük verin.
- Yalnız bir model uğursuz olursa → bağlantı soyudulması əvəzinə model kilidlənməsinə üstünlük verin.
- Vəziyyət özünü bərpa etməlidir, amma etmir → gələcək zaman damğasını + vaxtı keçmiş vəziyyəti yeniləyən oxu yolunu yoxlayın. Daimi statuslar əl ilə dəyişiklik tələb edir.

---

## Runtime vəziyyəti — agent üçün sürətli arayış

> `AGENTS.md` → "Resilience Runtime State" bölməsindən (PR #12743) sözbəsöz köçürülüb ki,
> agent bələdçisi 40k kontekst büdcəsi daxilində qalsın. Bu, yuxarıdakı bölmələrin
> sıxılmış, agentə yönəlmiş görünüşüdür; nömrələnmiş bölmələr tam arayış olaraq qalır.

OmniRoute-da əlaqəli, lakin fərqli üç müvəqqəti uğursuzluq mexanizmi var.
Marşrutlaşdırma davranışını sazlayarkən onların əhatə dairələrini ayrı saxlayın.
Bir baxışda xəritə üçün [3 qatlı dayanıqlılıq diaqramına](../diagrams/exported/resilience-3layers.svg)
(mənbə: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
baxın.

### Provayder Dövrə Qırıcısı

**Əhatə**: bütöv provayder, məs. `glm`, `openai`, `anthropic`.

**Məqsəd**: yuxarı axın/xidmət səviyyəsində təkrarlanan uğursuzluqlar yaşayan
provayderə trafik göndərməyi dayandırmaq ki, sağlam olmayan bir provayder hər sorğunu ləngitməsin.

**Tətbiq**:

- Əsas sinif: `src/shared/utils/circuitBreaker.ts`
- Chat qapısı/icra bağlanması: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- Runtime status API: `src/app/api/monitoring/health/route.ts`
- Paylaşılan wrapper-lər: `open-sse/services/accountFallback.ts`
- Saxlanılan vəziyyət cədvəli: `domain_circuit_breakers`

**Vəziyyətlər** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: normal trafikə icazə verilir.
- `DEGRADED`: erkən xəbərdarlıq zolağı — uğursuzluqlar degradasiya həddini keçib, amma hələ
  qırıcı həddini yox; trafik hələ də axır, idarə panelləri xəbərdarlığı göstərir. Etibarlı
  bağlantı testi və ya yeni uğursuzluq olmayan sakit pəncərə onu `CLOSED` vəziyyətinə qaytarır
  (pəncərə `docs/architecture/RESILIENCE_GUIDE.md` faylında göstərilib).
- `OPEN`: provayder müvəqqəti bloklanıb; çağıranlar provayder-dövrəsi-açıq cavabı alır
  və ya kombo marşrutlaşdırması başqa hədəfə keçir.
- `HALF_OPEN`: sıfırlanma müddəti bitib; sınaq sorğusuna icazə verilir. Uğur qırıcını
  bağlayır, uğursuzluq onu yenidən açır.

**Defolt dəyərlər** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, `src/lib/resilience/settings.ts` faylındakı
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` vasitəsilə istehlak olunur →
`src/sse/handlers/chatHelpers.ts` faylındakı `getCircuitBreaker(provider, …)`). Bütöv-provayder
qırıcısı `circuitBreakerThreshold` / `circuitBreakerReset` əsasında işləyir:

| Profil    | degradasiya həddi | açılma həddi (`circuitBreakerThreshold`) | sıfırlanma (`circuitBreakerReset`) |
| --------- | ----------------: | ---------------------------------------: | ---------------------------------: |
| OAuth     |               `5` |                                      `8` |                              `60s` |
| API açarı |               `7` |                                     `12` |                              `30s` |
| Yerli     |      (törədilmiş) |                                      `2` |                              `15s` |

`PROVIDER_PROFILES` həmçinin `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (15/30/5 dəq) və `providerCooldownMs` (5/10/1 dəq) təyin edir: bunlar
**opt-in qlobal Provider Cooldown-un pəncərə qapısını** (`PROVIDER_COOLDOWN_ENABLED`, defolt olaraq
söndürülüb) təmin edir — `open-sse/services/providerCooldownTracker.ts` faylındakı provayder səviyyəli
qeyd yalnız `providerFailureWindowMs` daxilində `providerFailureThreshold` qədər uğursuzluqdan sonra
soyuyur sayılır və sonra `providerCooldownMs` müddətinə soyuyur. Bunlar canlı qırıcının həddləri
DEYİL — qırıcı davranışı gözləyərək onları tənzimləməyin. Hər bir defolt dəyər
`OMNIROUTE_PROVIDER_BREAKER_*` və `OMNIROUTE_CIRCUIT_BREAKER_*` mühit dəyişənləri ilə üstələnə bilər;
runtime-a dəqiq uyğun arayış cədvəli `docs/architecture/RESILIENCE_GUIDE.md` faylında yerləşir.

Provayder qırıcısını yalnız provayder səviyyəli uğursuzluq statusları işə salmalıdır:

```ts
(408, 500, 502, 503, 504);
```

Çox `401`, `403` və ya `429` halları kimi normal hesab/açar/model xətaları üçün
bütöv-provayder qırıcısını işə salmayın. Bunlar adətən bağlantı soyudulması və ya model
kilidlənməsinə aiddir. Ümumi API açarı provayderinin `403` xətası, terminal provayder/hesab
xətası kimi təsnif edilmədikcə, bərpa edilə bilən olmalıdır.

Breaker fon taymeri yox, tənbəl (lazy) bərpa mexanizmi istifadə edir. `OPEN` müddəti bitdikdə, `getStatus()`, `canExecute()` və `getRetryAfterMs()` kimi oxuma əməliyyatları vəziyyəti `HALF_OPEN` olaraq yeniləyir, beləcə panel lövhələri (dashboards) və kombo namizəd qurucuları müddəti bitmiş provayderi əbədi olaraq istisna etmir.

### Bağlantı soyuma müddəti (Connection Cooldown)

**Əhatə**: bir provayder bağlantısı/hesabı/açarı.

**Məqsəd**: eyni provayderin digər bağlantılarına sorğulara xidmət etməyə davam etməyə icazə verərkən, bir problemli açarı/hesabı müvəqqəti olaraq atlamaq.

**Tətbiq**:

- Yazma/yeniləmə yolu: `src/sse/services/auth.ts::markAccountUnavailable()`
- Hesab seçimi/filtrasiyası: `src/sse/services/auth.ts::getProviderCredentials...`
- Soyuma müddətinin hesablanması: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Parametrlər: `src/lib/resilience/settings.ts`

Provayder bağlantılarındakı vacib sahələr:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

Hesab seçimi zamanı bağlantı aşağıdakı halda atlanır:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

Soyuma müddətləri də tənbəldir: `rateLimitedUntil` keçmişdə qaldıqda, bağlantı yenidən uyğun olur. Uğurlu istifadə zamanı `clearAccountError()` `testStatus`, `rateLimitedUntil`, xəta sahələrini və `backoffLevel`-i təmizləyir.

Defolt bağlantı soyuma davranışı:

- OAuth baza soyuma müddəti: `5s`.
- API-açarı baza soyuma müddəti: `3s`.
- API-açarı `429` halı mövcud olduqda yuxarı axının (upstream) təkrar cəhd göstərişlərinə (`Retry-After`, sıfırlanma başlıqları və ya təhlil edilə bilən sıfırlanma mətni) üstünlük verməlidir.
- Təkrarlanan bərpa edilə bilən uğursuzluqlar eksponensial geri çəkilmə (exponential backoff) istifadə edir:

```ts
baseCooldownMs * 2 ** failureIndex;
```

Anti-thundering-herd mühafizəsi eyni bağlantıda paralel uğursuzluqların soyuma müddətini təkrar-təkrar uzatmasının və ya `backoffLevel`-i ikiqat artırmasının qarşısını alır.

Terminal vəziyyətlər soyuma müddəti deyil. `banned`, `expired` (yalnız `EXPIRED_RETRY_MAX` vasitəsilə N sayda məhdud təkrar cəhddən sonra terminal olur) və `credits_exhausted` vəziyyətləri kimlik məlumatları/parametrlər dəyişənə və ya operator onları sıfırlayana qədər əlçatan olmamaq üçün nəzərdə tutulub. Terminal vəziyyətləri müvəqqəti soyuma vəziyyəti ilə üstələməyin.

### Model kilidlənməsi (Model Lockout)

**Əhatə**: provayder + bağlantı + model.

**Məqsəd**: həmin bağlantı üçün yalnız bir model əlçatan olmadıqda və ya kvota ilə məhdudlaşdırıldıqda bütöv bağlantını söndürməkdən qaçınmaq.

Nümunələr:

- Hər model üzrə kvota tətbiq edən və `429` qaytaran provayderlər.
- Çatışmayan bir model üçün `404` qaytaran lokal provayderlər.
- Seçilmiş Grok rejimləri kimi provayderə xas rejim/model icazəsi uğursuzluqları.

Model kilidlənməsi `open-sse/services/accountFallback.ts`-də yerləşir və eyni bağlantının digər modellərə xidmət etməyə davam etməsinə imkan verir.

### Xəta ayıqlama təlimatları

- Bir provayderin bütün açarları atlanırsa, həm provayder breaker vəziyyətini, həm də hər bağlantının `rateLimitedUntil`/`testStatus` dəyərlərini yoxlayın.
- Sıfırlanma pəncərəsindən sonra provayder daimi istisna olunmuş görünürsə, kodun `getStatus()`/`canExecute()` əvəzinə xam `state` oxuyub-oxumadığını yoxlayın.
- Bir provayder açarı uğursuz olarsa, lakin digərləri işləməlidirsə, provayder breaker əvəzinə bağlantı soyuma müddətinə üstünlük verin.
- Yalnız bir model uğursuz olarsa, bağlantı soyuma müddəti əvəzinə model kilidlənməsinə üstünlük verin.
- Bir vəziyyət özünü bərpa etməlidirsə, gələcək vaxt möhürü/sıfırlanma taym-autu və müddəti bitmiş vəziyyəti yeniləyən oxuma yolu olmalıdır. Daimi statuslar əl ilə kimlik məlumatı və ya konfiqurasiya dəyişiklikləri tələb edir.

---

## TLS Barmaq İzi və Gizlilik

Provayderə xas gizlilik (JA3/JA4, CCH, obfus-kasiya) ayrıca sənədləşdirilib — baxın `docs/security/STEALTH_GUIDE.md` (git; `/docs`-a kompilyasiya edilmir).

---

## Dayanıqlılıq testləri (Phase 8 · Block C)

Dayanıqlılıq məntiqi üçün unit testlərdən əlavə, üç test runtime-ı real
stress/xəta şəraitində yoxlayır (hamısı integration/nightly — heç biri PR-ları bloklamır):

| Test        | Nə yoxlayır                                                                                                                                                                                                  | İşə salınma                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| Chaos       | Saxta-upstream node real latency/reset/timeout/503 injeksiya edir; circuit breaker-in açıldığını/bərpa olunduğunu və `checkFallbackError`-un 503-ü bərpa edilə bilən fallback kimi təsnif etdiyini yoxlayır. | `RUN_CHAOS_INT=1 npm run test:chaos`     |
| Heap-growth | `--expose-gc` altında hər `createSSEStream` üçün ~500 stream; heap limiti aşarsa uğursuz olur (OOM qoruyucusu #3069).                                                                                        | `npm run test:heap`                      |
| k6 soak     | `/api/monitoring/health` ünvanına davamlı yük; p95/xəta eşik dəyərləri.                                                                                                                                      | `k6 run tests/load/k6-soak.js` (nightly) |

`.github/workflows/nightly-resilience.yml` tərəfindən orkestri olunur (cron + dispatch). Defolt
`test:integration`-da chaos və heap avtomatik ötürülür (`RUN_CHAOS_INT`/`--expose-gc` olmadan).

---

## Həmçinin bax

- [Arxitektura Bələdçisi](./ARCHITECTURE.md) — Sistem arxitekturası və daxili quruluş
- [İstifadəçi Bələdçisi](../guides/USER_GUIDE.md) — Provayderlər, kombolar, CLI inteqrasiyası
- [Auto-Combo Mühərriki](../routing/AUTO-COMBO.md) — 16 faktorlu qiymətləndirmə, rejim paketləri
