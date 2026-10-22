# Resilience Guide (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute có ba cơ chế khả năng phục hồi (resilience) riêng biệt nhưng liên quan đến nhau. Mỗi cơ chế có phạm vi và mục đích khác nhau. Hãy giữ chúng tách biệt khi gỡ lỗi hành vi định tuyến.

![Mô hình khả năng phục hồi 3 lớp](../diagrams/exported/resilience-3layers.svg)

> Nguồn: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Circuit Breaker cấp Provider

**Phạm vi:** toàn bộ provider (ví dụ: `glm`, `openai`, `anthropic`).

**Mục đích:** ngừng gửi lưu lượng đến một provider đang liên tục gặp lỗi ở tầng upstream/dịch vụ.

**Triển khai:**

- Lớp lõi: `src/shared/utils/circuitBreaker.ts`
- Kết nối: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API trạng thái: `GET /api/monitoring/health`
- API đặt lại: `POST /api/resilience/reset`
- Các wrapper: `open-sse/services/accountFallback.ts`
- Bảng DB: `domain_circuit_breakers`

**Các trạng thái:**

- `CLOSED` — cho phép lưu lượng bình thường
- `DEGRADED` — lưu lượng vẫn được cho phép, nhưng các lỗi provider gia tăng đang được theo dõi; quay về `CLOSED` khi đạt đủ số lần thành công, khi có một lần kiểm tra kết nối hợp lệ, hoặc sau khoảng thời gian giữ `OPEN` dài nhất cho loại lỗi gần nhất (giá trị `cooldownByKind` của nó, nếu không có thì `resetTimeout`, × `maxBackoffMultiplier`, tối thiểu một chu kỳ cooldown) mà không phát sinh lỗi mới
- `OPEN` — provider tạm thời bị chặn; combo routing sẽ bỏ qua nó
- `HALF_OPEN` — thời gian reset timeout đã trôi qua; cho phép request thăm dò

**Các giá trị mặc định có thể cấu hình (`open-sse/config/constants.ts`, được hiển thị trong Dashboard → Settings → Resilience):**

| Loại    | Vào DEGRADED tại | Mở (OPEN) tại | Reset timeout |
| ------- | ---------------- | ------------- | ------------- |
| OAuth   | 5 lần lỗi        | 8 lần lỗi     | 60s           |
| API-key | 7 lần lỗi        | 12 lần lỗi    | 30s           |
| Local   | suy ra           | 2 lần lỗi     | 15s           |

`degradationThreshold` kiểm soát thời điểm một provider chuyển sang `DEGRADED`; `failureThreshold` kiểm soát thời điểm nó mở và bị bỏ qua. Các profile provider local chưa được hiển thị trên trang cài đặt Resilience.

**Mã kích hoạt (trip):** chỉ các mã trạng thái cấp provider `[408, 500, 502, 503, 504]`. KHÔNG kích hoạt cho các lỗi cấp tài khoản (phần lớn 401/403/429 — những lỗi đó thuộc về cooldown hoặc lockout).

**Phục hồi lười (lazy recovery):** khi `OPEN` hết hạn, `getStatus()`, `canExecute()`, `getRetryAfterMs()` sẽ làm mới trạng thái thành `HALF_OPEN`. Chính các lần đọc đó (và lỗi tiếp theo) cũng làm suy giảm một trạng thái `DEGRADED` đã cũ về `CLOSED`. Không cần bộ đếm thời gian chạy nền.

---

### Provider Cooldown toàn cục theo chế độ tùy chọn (window gate)

Một lớp thứ tư, **tùy chọn bật** (`PROVIDER_COOLDOWN_ENABLED`, mặc định **tắt**) lưu giữ bộ nhớ xuyên suốt các request về những provider đang gặp lỗi trong
`open-sse/services/providerCooldownTracker.ts`, được tham chiếu bởi quá trình phân giải mục tiêu combo để các request combo liên tiếp ngừng đi lại qua một provider vừa mới lỗi. Các mục cấp provider tuân theo window gate của `PROVIDER_PROFILES`:

| Profile | kích hoạt sau (`providerFailureThreshold`) | trong khoảng (`providerFailureWindowMs`) | cooldown trong (`providerCooldownMs`) |
| ------- | -----------------------------------------: | ---------------------------------------: | ------------------------------------: |
| OAuth   |                                       `10` |                                  `15min` |                                `5min` |
| API key |                                       `15` |                                  `30min` |                               `10min` |

Dưới ngưỡng này, provider **không** được coi là đang trong trạng thái cooldown; một lần thành công sẽ xóa cửa sổ. Các mục cấp kết nối (`provider:connectionId`) vẫn giữ backoff theo hàm mũ `minRetryCooldownMs → maxRetryCooldownMs`. Ghi đè:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Kiểm thử bảo vệ hồi quy: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Thời gian chờ kết nối (Connection Cooldown)

**Phạm vi:** một kết nối/tài khoản/khóa của nhà cung cấp.

**Mục đích:** bỏ qua một khóa bị lỗi trong khi các kết nối khác của cùng nhà cung cấp vẫn tiếp tục phục vụ.

**Triển khai:**

- Đánh dấu không khả dụng: `src/sse/services/auth.ts::markAccountUnavailable()`
- Lựa chọn: `getProviderCredentials*` trong cùng file
- Tính toán cooldown: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Cài đặt: `src/lib/resilience/settings.ts`

**Các trường theo từng kết nối:**

- `rateLimitedUntil` — dấu thời gian cho đến khi hết thời gian chờ
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — bộ đếm backoff theo hàm mũ

**Thời gian chờ mặc định:**

- OAuth cơ bản: 5s
- API-key cơ bản: 3s
- API-key 429: ưu tiên header `Retry-After`/header reset từ upstream/văn bản reset có thể phân tích được
- Backoff: `baseCooldownMs * 2 ** failureIndex`

**Cơ chế chống thundering herd:** ngăn các lỗi đồng thời kéo dài thời gian chờ quá mức hoặc tăng `backoffLevel` hai lần.

**Lỗi 429 do giới hạn đồng thời không leo thang backoff.** Một lỗi `429` mà phần body báo
giới hạn đồng thời ("too many concurrent requests", "concurrency limit", "parallel request
limit", GLM `并发数过高`) có nghĩa là tài khoản vẫn khỏe mạnh nhưng đang bận.
`checkFallbackError()` trả về lý do `concurrency_limited`: chuyển dự phòng ngay sang kết nối
tiếp theo, làm nguội kết nối này trong một khoảng cố định `CONCURRENCY_LIMIT_COOLDOWN_MS`
(1s) hoặc theo gợi ý thử lại từ upstream, giữ nguyên `backoffLevel`, và đặt
`skipProviderBreaker`. Một body chỉ rõ quota vẫn được ưu tiên, nên body đồng thời khớp với
mẫu quota vẫn được phán quyết là quota. Phát hiện: `looksLikeConcurrencyLimit()` trong
`src/shared/utils/classify429.ts`; phán quyết:
`open-sse/services/accountFallback/concurrencyLimit429.ts`. `classify429()` (`FailureKind`
của circuit breaker) không thay đổi và vẫn đọc `rate_limit` cho các body này.

**Đình trệ nội dung stream không làm nguội tài khoản.** Khi watchdog phát hiện đình trệ
nội dung (`open-sse/utils/streamHandler.ts`) từ bỏ một stream không gửi output của model
kịp thời, `markAccountUnavailable()` ghi lỗi lên kết nối nhưng không đặt thời gian chờ:
sự đình trệ thuộc về request đó, thường là một lượt suy luận dài chưa có output. Người
vận hành có thể bật lại với `resilienceSettings.streamStallCooldown.enabled` (mặc định
`false`).

**Các frame suy luận khởi động lại ngân sách thời gian chống đình trệ nội dung.** Một
model suy luận có thể nghĩ hàng phút trước token hiển thị đầu tiên: Claude stream các frame
`thinking_delta` mà văn bản suy nghĩ có thể rỗng, và Responses API stream từng mục suy luận
liên tiếp. `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) nhận diện các
frame này, và watchdog khởi động lại ngân sách thời gian ở mỗi frame thay vì hủy lượt.
Chúng vẫn không phải output của model, nên một lượt kết thúc chỉ với suy luận vẫn được báo
cáo là rỗng, và một lượt dừng suy luận và chỉ gửi heartbeat vẫn kích hoạt watchdog.

Các frame nhị phân `reasoningContentEvent` của Kiro với chữ ký không rỗng bảo toàn hoạt
động suy luận này qua executor dưới dạng delta `reasoning_content` rỗng. Chữ ký không được
chuyển tiếp. Metadata, frame không hoàn chỉnh và chữ ký rỗng không khởi động lại ngân sách
nội dung; timeout stream đang hoạt động độc lập và hủy từ client vẫn được áp dụng
(`open-sse/executors/kiro/reasoning.ts`).

**Trạng thái kết thúc (KHÔNG phải thời gian chờ):**

- `banned` — được đặt bởi phát hiện từ khóa bị cấm / cấm tài khoản (xem [BAN_DETECTION](../security/BAN_DETECTION.md)), và bởi ba lần từ chối liên tiếp từ upstream theo từng request (`request_rejected`, ví dụ Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`); một lần từ chối đơn lẻ chỉ làm nguội kết nối
- `expired` (chuyển sang trạng thái kết thúc sau số lần thử lại giới hạn — `EXPIRED_RETRY_MAX = 3` với backoff theo hàm mũ — để các lỗi OAuth tạm thời có thể tự phục hồi trước khi tài khoản bị vô hiệu hóa vĩnh viễn)
- `credits_exhausted`

Chúng tồn tại cho đến khi thông tin xác thực thay đổi hoặc người vận hành đặt lại. Không
ghi đè trạng thái kết thúc bằng trạng thái thời gian chờ tạm thời.

**Khôi phục lười (lazy recovery):** khi `rateLimitedUntil` đã qua, kết nối đủ điều kiện
trở lại. Khi sử dụng thành công, `clearAccountError()` xóa tất cả các trường lỗi.

### Tường giới hạn sử dụng Claude OAuth: làn ưu tiên thấp hơn + đặt lại giới hạn phiên

**Phạm vi:** một kết nối thuê bao Claude (OAuth). Cả hai tính năng đều **bật theo từng kết
nối** (Chỉnh sửa kết nối → phần Claude → `lowPriorityMode` / `autoLimitReset` trong
`providerSpecificData`, cả hai mặc định tắt) và phản ánh các lệnh `/low-priority` và
`/limit-reset` của Claude Code (wire contract được ghi lại từ Claude Code 2.1.263).

**Triển khai:**

- Máy trạng thái + phân loại phản hồi: `open-sse/services/claudeLowPriority.ts`
- Client trạng thái/yêu cầu đặt lại: `open-sse/services/claudeLimitReset.ts`
- Hook executor (chèn header + thử lại cùng tài khoản): `open-sse/executors/base.ts::execute()`
- Lưu trữ tùy chọn bật: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**Kích hoạt:** tường giới hạn sử dụng 5 giờ — một lỗi `429` mà header mang
`anthropic-ratelimit-unified-status: rejected` và, khi tài khoản đủ điều kiện,
`anthropic-ratelimit-unified-slow-offer: treatment`. Không có gì được gửi trước lỗi 429
tường đầu tiên đó; một lỗi 429 đột biến không có header unified sẽ đi theo đường cooldown
thông thường.

**Làn ưu tiên thấp hơn** (`lowPriorityMode`):

- Khi gặp wall 429, executor chấp nhận đề nghị và ngay lập tức thử lại **cùng**
  tài khoản đó với `anthropic-usage-limit: slow`; lane duy trì hoạt động cho đến mốc
  `anthropic-ratelimit-unified-reset` đã thông báo (+60s ân hạn) và mọi request trong cửa sổ đó đều mang
  header này. 429 bị chặn không bao giờ đến được `handleChatCore`, nên kết nối
  **không** bị đưa vào cooldown và không bị xoay sang kết nối khác.
- `anthropic-ratelimit-unified-slow-status` trên các response sau đó: `active` / `not_needed`
  giữ lane; `slot_busy` (429) hoặc một `529` sẽ chờ theo
  `anthropic-ratelimit-unified-slow-retry-after` của server (mặc định 20s, giới hạn trong khoảng 5–600s, jitter ±30%)
  rồi thử lại, bị chặn trên bởi `anthropic-ratelimit-unified-slow-max-wait` (mặc định 20 phút, giới hạn trong khoảng
  1 phút–6 giờ) — vượt quá mức đó lane kết thúc và một khoảng cool-off 10 phút chặn việc chấp nhận lại. Thời gian
  chờ còn bị giới hạn thêm bởi phần còn lại của timeout bắt-đầu-upstream của chính request
  (`resolveFetchStartTimeout`, mặc định 10 phút) trừ đi biên an toàn 5 s: nếu không có giới hạn đó,
  max-wait mặc định 20 phút sẽ kéo dài hơn vòng đời request và giấc ngủ sẽ bị hủy
  giữa chừng, làm xuất hiện `TimeoutError` thay vì kết thúc `max_wait` một cách nhẹ nhàng + cool-off.
- `weekly_limit` / `budget_exhausted` / `off` / `ineligible`, một lần chuyển kỳ cửa sổ 5 giờ, hoặc
  `ineligible` + `anthropic-ratelimit-unified-overage-in-use: true` (kết thúc lane ở trạng thái
  `extra_usage` với mọi status, vì overage trả phí giờ đây đã bao phủ wall) sẽ kết thúc lane;
  response sau đó chảy vào đường cooldown bình thường. `budget_exhausted` được ghi nhớ cho đến
  mốc reset ngân sách đã thông báo (≤ 8 ngày).
- Việc kiểm tra wall chạy sau các lần thử lại nội-attempt xuất phát từ lỗi 400 của chính executor
  (chỉnh sửa context, clamp thinking/effort, tự học tham số), nên một wall 429 chỉ xuất hiện
  ở một trong những lần thử lại đó vẫn bị chặn thay vì đi đến đường cooldown.
- Trạng thái lưu trong bộ nhớ theo từng kết nối (một lần khởi động lại tốn thêm một wall 429 để chấp nhận lại).

**Reset giới hạn phiên** (`autoLimitReset`, được thử trước lane khi cả hai đều bật):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` → block `juniper_tide`;
  khi `arm: "reset"` và `available: true`,
  `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` với
  `{ "program": "juniper_tide" }` (UUID tổ chức lấy từ
  `providerSpecificData.organizationUUID`, fallback bootstrap).
- `result: reset|not_limited` → request được thử lại ở tốc độ đầy đủ (không mang header slow).
  `already_used` / `not_offered` ghi nhớ `next_available_at` (mặc định một tuần); mọi
  thất bại đều backoff 15 phút. Việc reset chỉ diễn ra một lần mỗi tuần và vẫn được tính vào giới hạn tuần.

Các test bảo vệ chống hồi quy: `tests/unit/claude-low-priority-mode.test.ts`,
`tests/unit/claude-limit-reset.test.ts`, `tests/unit/claude-low-priority-executor.test.ts`.

### Gắn kết phiên (session affinity) (#7274)

**Phạm vi:** một phiên client (header `X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`) được ghim vào một kết nối, cho **bất kỳ** provider nào.

**Mục đích:** giữ một agent nhiều lượt (Claude Code, aider, các agent tùy chỉnh) trên cùng một tài khoản xuyên suốt các request, giảm mất context xuyên tài khoản và các 429 khởi-động-lạnh lặp lại trên các provider có trạng thái phiên theo từng tài khoản.

**Triển khai:**

- Phân giải TTL: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Chọn/tạo pin: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Trích xuất header (tổng quát, mọi provider): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Bảng pin được lưu trữ bền: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Cài đặt: `sessionAffinityTtlMs` (TTL toàn cục tính bằng ms, `0` để tắt) — `src/lib/db/settings.ts`. Được đổi tên từ `codexSessionAffinityTtlMs` vốn chỉ dành cho Codex bởi migration `124_generic_session_affinity_ttl.sql`, vốn chuyển bất kỳ TTL Codex nào đã cấu hình trước đó thành giá trị mặc định mới.

Trước #7274, `resolveSessionAffinityTtlMs()` trả về cứng `0` với mọi provider ngoại trừ `codex`, nên cài đặt TTL (và các header phiên) không có tác dụng ở bất kỳ đâu khác mặc dù cơ chế ghim và trích xuất header vốn đã độc lập với provider. Bản sửa đã loại bỏ early-return đó; TTL giờ áp dụng đồng nhất cho mọi provider một khi được đặt toàn cục trên `0`.

Ba header session-affinity không bao giờ được chuyển tiếp lên upstream — các executor tự dựng header upstream từ đầu thay vì chuyển qua header của client, nên giá trị này chỉ là một correlation id nội bộ.

### Lease kết nối độc quyền cho phiên được quản lý

**Phạm vi:** một client/phiên HTTP được quản lý đang hoạt động sở hữu một kết nối OmniRoute đủ điều kiện.

**Mục đích:** cung cấp quyền sở hữu kết nối độc quyền bền vững cho các client cần một
rào chắn định tuyến cứng xuyên suốt các request. Điều này khác với session affinity, vốn là một
ưu tiên liên tục dạng mềm: một lease độc quyền lưu trữ bền trạng thái vòng đời trong SQLite, thực thi
tính duy nhất toàn cục của chủ-sở-hữu-đang-hoạt-động và kết-nối-đang-hoạt-động, và từ chối một
generation đã-stale trước khi dispatch tới provider.

Tính năng này opt-in theo từng API key. Một key được quản lý phải có scope `lease:exclusive` và một
danh sách `allowedConnections` không rỗng được chỉ định rõ ràng. Bất kỳ client HTTP nào cũng có thể
sử dụng endpoint vòng đời; không yêu cầu tên client, user-agent, provider, phương thức OAuth hay model
nào. Lease sở hữu một kết nối, không phải một model, nên việc thay đổi model vẫn giữ nguyên ràng buộc
miễn là kết nối đó vẫn đủ điều kiện theo quy tắc thông thường. Các quy tắc model, quota, sức khỏe,
cooldown và allowlist thông thường vẫn giữ thẩm quyền quyết định và có thể chuyển chính generation đó
sang một kết nối khác đang rảnh và đủ điều kiện.

Vòng đời là `POST /api/v1/session-leases` với các hành động JSON `acquire`, `renew` và `release`.
Các yêu cầu suy luận được quản lý trình giá trị `X-OmniRoute-Lease-Owner` mờ và giá trị
`X-OmniRoute-Lease-Generation` chính xác. Owner sử dụng tiền tố `vlo_` theo sau là 43 ký tự
base64url; chỉ có hàm băm SHA-256 của nó được lưu trữ. Mọi rào chắn (fence) điều phối cuối cùng
cũng liên kết ID khóa API đã xác thực và ID kết nối đang hoạt động. Các header điều khiển lease
được loại bỏ khỏi nhật ký, các bản chụp yêu cầu được giữ lại, và các header của executor upstream.

Nếu định tuyến thông thường có các ứng viên được quản lý đủ điều kiện nhưng mọi ứng viên rảnh đều
bị chiếm bởi một lease ngoại lai đang hoạt động, OmniRoute trả về HTTP `429`, mã
lease-capacity-unavailable, trạng thái waiting-for-capacity, và một giá trị `Retry-After` có giới
hạn được suy ra từ thời điểm hết hạn liên quan sớm nhất. Trường hợp đủ điều kiện trống thông
thường không phải là tranh chấp lease và giữ nguyên ngữ nghĩa lỗi định tuyến hiện có.

Các cơ chế liên quan vẫn tách biệt:

- Việc chiếm giữ phiên OAuth là phân phối mềm cục bộ theo tiến trình (process-local) dành cho các tài khoản OAuth.
- Semaphore tài khoản cấp giấy phép đồng thời yêu cầu và kết thúc khi một yêu cầu hoàn tất.
- Lease phiên được quản lý độc quyền là quyền sở hữu vòng đời bền vững với rào chắn generation.

---

## 3. Khóa Model (Model Lockout)

**Phạm vi:** bộ ba provider + connection + model.

**Phạm vi khóa theo status:** status lỗi quyết định khóa mà một lockout ghi
vào (`resolveLockoutScope()` trong `open-sse/services/accountFallback/exactModelLock.ts`):

- `429` / `403` / `402` — tín hiệu về quota hoặc quyền sử dụng — khóa **nhóm quota**:
  với codex là toàn bộ phạm vi `codex` / `spark` (mọi model `gpt-5*` của
  connection đó), với các provider khác là `getQuotaScopedModelForProvider()`.
- `404` khóa riêng model đó (`getModelLockKey()` thu hẹp trường hợp `not_found`).
- Bất kỳ status nào khác — các lỗi transport/server `5xx` và lỗi `502` do chính
  OmniRoute tổng hợp từ bước kiểm tra chất lượng — chỉ khóa **đúng**
  bộ ba provider/connection/model đó. Một stream lỗi trên một model không phải là bằng chứng
  về quota của tài khoản; trước khi có quy tắc này, một phản hồi rỗng trên
  `codex/gpt-5.6-luna` đã loại mọi model `gpt-5*` của connection đó khỏi
  việc định tuyến trong 2–30 phút (tăng dần) trong khi quota của nó không hề bị ảnh hưởng.
- Tùy chọn `scope` do caller chỉ định tường minh luôn được ưu tiên (Antigravity truyền `"exact"`).

**Mục đích:** tránh vô hiệu hóa toàn bộ một connection khi chỉ một model không khả dụng hoặc bị giới hạn quota.

**Ví dụ:**

- Các provider áp quota theo từng model trả về 429
- Các provider local trả về 404 cho một model bị thiếu
- Các lỗi quyền theo mode/model đặc thù của provider (ví dụ: các mode của Grok)

**Triển khai:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Bảng điều khiển Model Cooldowns (v3.8.0)

UI: Settings → Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Liệt kê các lockout đang hoạt động với: provider, connection, model, reason, expiresAt. Người vận hành có thể tự tay kích hoạt lại một model từ thẻ này.

**REST API:**

- `GET /api/resilience/model-cooldowns` — liệt kê các lockout đang hoạt động
- `DELETE /api/resilience/model-cooldowns` — kích hoạt lại thủ công. Body: `{provider, connection, model}`. Xác thực: management.

### Trình quản lý Cooldown

UI: Monitoring → Cooldown Manager (`src/app/(dashboard)/dashboard/resilience/cooldowns/`).

Một trang duy nhất cho mọi connection đang bị loại khỏi định tuyến vì lý do tạm thời, thay vì
phải mở từng trang provider. Trang này liệt kê các connection cooldown, model lockout và các trạng thái
cuối cùng (terminal), xóa chúng theo từng connection, theo một tập chọn, hoặc cho tất cả connection của một provider,
và chỉnh sửa các quy tắc cooldown được tinh chỉnh nhiều nhất: `streamStallCooldown.enabled` và
`connectionCooldown` của OAuth / API-key — thời gian cooldown cơ sở và số bước backoff tối đa (lưu qua
`PATCH /api/resilience`). Các trạng thái cuối cùng (`banned`, `expired`, `credits_exhausted`) được
liệt kê nhưng không bao giờ bị xóa tại đây.

**REST API** (`src/lib/resilience/cooldownManager.ts`, xác thực: management):

- `GET /api/resilience/cooldowns[?provider=]` — các connection kèm trạng thái, thời gian cooldown còn lại,
  mức backoff, loại lỗi gần nhất và các model lockout (không bao gồm credentials)
- `POST /api/resilience/cooldowns` — body `{connectionIds: string[]}` hoặc
  `{all: true, provider?}`; trả về `{cleared, unchanged, skippedTerminal, lockoutsCleared}`

### UI cài đặt Lockout + phục hồi bằng suy giảm theo thành công (v3.8.23)

Model lockout đã chuyển từ hành vi hardcoded luôn bật sang một tính năng
có thể cấu hình đầy đủ, opt-in, với thẻ cài đặt riêng và một lộ trình phục hồi tự lành.

**Thẻ cài đặt:** Settings → Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Thẻ này **khác biệt** với `ModelCooldownsCard` chỉ-đọc ở trên (vốn chỉ
_liệt kê_ các lockout đang hoạt động) — thẻ mới _cấu hình các tham số_. Giá trị mặc định
nằm trong `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| Cài đặt                 | Mặc định                         | Ý nghĩa                                                      |
| ----------------------- | -------------------------------- | ------------------------------------------------------------ |
| `enabled`               | `false`                          | Công tắc tổng — model lockout **mặc định tắt**.              |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Các status từ upstream được tính là lỗi ở phạm vi model.     |
| `baseCooldownMs`        | `120_000` (120 s)                | Thời gian lockout ban đầu cho lần lỗi đầu tiên.              |
| `maxCooldownMs`         | `1_800_000` (30 phút)            | Giới hạn trên của cooldown sau khi leo thang.                |
| `maxBackoffSteps`       | `10`                             | Số bước leo thang exponential-backoff tối đa.                |
| `useExponentialBackoff` | `true`                           | Có leo thang cooldown theo hàm mũ khi lỗi lặp lại hay không. |

Các cài đặt được lưu qua settings store thông thường và được kiểm tra hợp lệ qua
schema cài đặt resilience; thẻ này ghim giá trị `baseCooldownMs`/`maxCooldownMs`
(với `maxCooldownMs ≥ baseCooldownMs`) và `maxBackoffSteps`.

**Phục hồi bằng suy giảm theo thành công:** việc phục hồi **không** hoàn toàn dựa vào hết hạn timer. Một phản hồi
khỏe mạnh sẽ đưa số đếm lỗi của model giảm dần về, nhờ đó một model đã phục hồi
giữa cửa sổ sẽ ngừng leo thang (và được xóa khóa) trước khi timer hết hạn. Khi một
combo target thành công, `open-sse/services/combo.ts` gọi `decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`), hàm này **giảm một nửa** giá trị
`failureCount` đã lưu (`Math.floor(failureCount / 2)`); khi về `0`, entry lockout
sẽ bị xóa hoàn toàn. Hàm đối ứng `recordModelLockoutFailure()`
tăng số đếm (và leo thang cooldown) khi có lỗi trong cửa sổ
leo thang. Cơ chế suy giảm theo thành công này bổ sung cho việc hết hạn timer thông thường —
cả hai lộ trình đều có thể kích hoạt lại một model.

**Trạng thái:** các lockout được giữ **trong bộ nhớ** (các `Map` theo tiến trình chứa
`ModelLockoutEntry` được khóa theo `provider:connectionId:model`, các khóa phạm vi exact được khóa theo
`provider:connectionId:exact:model`), không được lưu vào
DB — chúng sẽ mất khi khởi động lại. Các _cài đặt_ thì được lưu bền; còn _trạng thái_ lockout
đang hoạt động là tạm thời.

---

## 4. Kiểm soát đồng thời Quota-Share (v3.8.36)

Các tài khoản thuê bao (GLM, MiniMax, v.v.) thường chỉ chấp nhận ~1–3 yêu cầu
đồng thời; vượt quá mức đó sẽ gây ra lỗi 429 và cooldown. Điều này đặc biệt
trầm trọng với các combo **quota-share** (`qtSd/…`), trong đó nhiều API key dùng
chung một tài khoản upstream. Ba lớp bảo vệ giúp tài khoản dùng chung không bị
dồn dập yêu cầu.

### Giới hạn đồng thời theo kết nối (`max_concurrent`)

Mỗi kết nối provider có thể khai báo một ngưỡng trần `max_concurrent`
(`provider_connections.max_concurrent`, đặt trong modal kết nối / API / DB).
Để trống nếu không muốn giới hạn. Đây là núm vặn duy nhất điều khiển lớp tuần
tự hóa bên dưới — hãy đặt nó bằng mức đồng thời thực tế của tài khoản (ví dụ:
GLM ~1, MiniMax ~2).

### Giới hạn đồng thời theo model (`modelConcurrency`)

Một kết nối cũng có thể khai báo các ngưỡng trần đồng thời chính xác theo từng
model bên trong map `rateLimitOverrides`:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

Đặt giá trị này trong modal kết nối (**Ghi đè giới hạn tốc độ → Giới hạn đồng
thời theo model**, mỗi dòng một `model=cap`) hoặc qua
`PATCH /api/providers/[id]` với cùng cấu trúc JSON. Các ngữ nghĩa chính:

- **Toàn kết nối so với theo model cụ thể:** `maxConcurrent` vẫn là ngưỡng
  trần chung cho toàn bộ kết nối. Khi cả hai cùng áp dụng, cả hai cổng đều
  được chiếm một cách nguyên tử trong cùng một cổng tổng hợp
  (`global → provider → account → model`); hành vi hiệu lực là giới hạn
  nghiêm ngặt hơn trong các giới hạn áp dụng được.
- **Khớp chính xác khóa model:** khóa là chuỗi model được truyền tới executor
  sau khi phân giải định tuyến — thường là id model upstream thuần túy
  (`glm-5`), không phải alias `provider/model` phía client (`zai/glm-5` không
  khớp với `glm-5`). Giá trị là ngưỡng trần số yêu cầu đồng thời dạng số
  nguyên dương.
- **Xếp hàng cục bộ, không khám phá:** các yêu cầu vượt mức sẽ xếp hàng cục bộ
  với ngữ nghĩa hàng đợi/timeout hiện có (các lỗi kiểm soát nhận yêu cầu có
  kiểu `SEMAPHORE_TIMEOUT` / `SEMAPHORE_QUEUE_FULL`). OmniRoute không khám phá
  hay suy luận chính sách upstream — nó chỉ thực thi chính xác các ngưỡng trần
  mà người vận hành đã cấu hình. Một cổng model bị bão hòa không bao giờ vô
  hiệu hóa provider và không bao giờ tạo ra khóa model vĩnh viễn; hành vi
  429/cooldown/fallback từ upstream vẫn là chốt chặn lỗi cuối cùng.
- **Phạm vi theo kết nối, theo tiến trình:** các giới hạn áp dụng cho từng kết
  nối trong cơ sở dữ liệu và được giữ trong bộ nhớ, vì vậy hai kết nối dùng
  chung một API key upstream sẽ không phối hợp với nhau.
- **Không cấu hình nghĩa là không thay đổi:** bỏ qua map (hoặc để trống trường
  trên dashboard) sẽ không thêm cổng model nào. Cấu hình ví dụ không áp đặt
  bất kỳ giới hạn chung nào của provider:

```text
glm-5=1
glm-4.7=3
```

### Tuần tự hóa yêu cầu Quota-share

Khi một lượt điều phối quota-share nhắm tới một kết nối có khai báo
`max_concurrent` dương, các yêu cầu đồng thời tới **tài khoản** đó sẽ được
tuần tự hóa qua một semaphore theo kết nối (khóa `qsconn:<connectionId>`): các
yêu cầu vượt mức sẽ **chờ trong hàng đợi** thay vì dồn dập vào tài khoản. Cơ
chế này là **fail-open** — hàng đợi bão hòa hoặc hết thời gian chờ sẽ tiếp tục
mà không có slot, thay vì từ chối một yêu cầu vốn có thể điều phối được.
Bật/tắt trong **Cài đặt → Khả năng phục hồi → Đồng thời theo kết nối
Quota-share** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`, mặc
định bật). Nếu không có ngưỡng `max_concurrent`, hành vi không thay đổi.

> Cổng định tuyến quota-share (`selectQuotaShareTarget`, DRR + P2C) bản thân
> nó cũng fail-open và chỉ _giảm mức ưu tiên_ của một kết nối đã đạt ngưỡng —
> với một pool chỉ có một kết nối, nó không thể giới hạn cứng, vì vậy
> semaphore này mới chính là thứ thực sự ngăn chặn làn sóng yêu cầu.

### Thử lại có nhận biết cooldown của combo

Với mọi chiến lược combo (khi được bật), một yêu cầu mà lẽ ra sẽ trở thành lỗi
429 do một cooldown tạm thời NGẮN sẽ chờ hết thời gian đó rồi điều phối lại
thay vì trả về 429 — điều này bao phủ các cửa sổ TPM/RPM kiểu Gemini (~60s
retry-after) trên các combo nhiều model, ví dụ cả hai đích của một combo 2
model cùng chạm giới hạn tốc độ theo model. Được giới hạn bởi
`comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`, `budgetMs`) trong
**Cài đặt → Khả năng phục hồi**. Nó không bao giờ chờ với `quota_exhausted`
(bị khóa tới nửa đêm) hoặc các lý do xác thực/không tìm thấy.

Cổng này cũng bao phủ trường hợp trước khi điều phối (#16319): khi mọi đích
của một combo đều bị bỏ qua trước khi có bất kỳ lần thử nào vì model của nó
đang nằm trong một khóa tạm thời ngắn, nhánh xử lý không-có-lần-thử sẽ chờ hết
khóa trong cùng các ngưỡng trần rồi điều phối lại, thay vì trả về
`503 ALL_TARGETS_SKIPPED` không kèm gợi ý. Khi không được phép chờ (đã hết
ngưỡng, hết lượt thử hoặc hết ngân sách thời gian, hoặc tính năng bị tắt),
phản hồi cuối cùng được nâng cấp thành `429 rate_limit_error` kèm theo
`retry_after` / `reset_at` từ thời điểm hết hạn của khóa tạm thời sớm nhất;
các khóa do hạn ngạch, xác thực và không tìm thấy vẫn giữ nguyên mã 503 không
kèm gợi ý.

---

## 5. Kiểm soát tiếp nhận hàng đợi request (v3.8.49 · issue #6593)

**Phạm vi**: hàng đợi rate-limit cục bộ theo từng provider+connection (`open-sse/services/rateLimitManager.ts`, được hỗ trợ bởi Bottleneck), nằm một tầng bên dưới ba cơ chế ở trên.

**`maxWaitMs` giới hạn thời gian chờ trong hàng đợi; `executionMaxWaitMs` giới hạn thời gian thực thi.**
Hai giá trị này được tách biệt một cách có chủ đích, và không giá trị nào cung cấp cho giá trị nào.

`resilienceSettings.requestQueue.maxWaitMs` là **ngân sách chờ-trong-hàng-đợi**: nó
bao gồm thời gian chờ một slot của provider rồi sau đó nằm ở trạng thái QUEUED, và bộ đếm thời gian của nó
được xóa ngay khoảnh khắc job rời khỏi QUEUED và bắt đầu thực thi
(`rateLimitManager.ts`, `wrappedFn`). Một request vượt quá ngân sách này sẽ không bao giờ chạm tới
upstream. Mặc định 30000ms, được cung cấp bởi `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS`
trong `src/lib/resilience/settings.ts` và được ghim bởi
`tests/unit/ratelimit-admission-control-6593.test.ts`, nên một thay đổi đối với nó sẽ
làm test đó chuyển đỏ thay vì để đoạn văn này lặng lẽ trở nên lỗi thời.

`resilienceSettings.requestQueue.executionMaxWaitMs` là thứ mà Bottleneck
nhận vào dưới dạng `expiration` của job, bộ đếm thời gian của nó chỉ bắt đầu sau khi dispatch. Nó là
một lớp phòng vệ cuối cùng cho các executor không có timeout upstream riêng, và nó
được nâng lên bằng timeout fetch-start của chính executor khi giá trị đó dài hơn, nhờ đó nó
không thể cắt ngang một phản hồi đang truyền khỏe mạnh. Mặc định 600000ms (10 phút).

Việc đưa ngân sách hàng đợi vào `expiration` chính là thứ từng giết các gateway
non-incremental giữa chừng — chúng chạy hợp lệ trong nhiều phút trước khi có byte đầu tiên —
và đó là lý do một expiration được hiển thị dưới dạng `code:
"RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) trong khi ngân sách hàng đợi mang
mã queue-timeout. Ghi đè một trong hai giá trị qua `RATE_LIMIT_MAX_WAIT_MS` /
`RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (env) hoặc qua dashboard
(**Settings → Resilience**). Cả hai đều được kẹp trong khoảng 1ms–24h khi chuẩn hóa.

**Thứ tự ưu tiên, cho cả hai:** biến env chỉ cung cấp giá trị _mặc định_. Một giá trị
được lưu bền trong `resilienceSettings.requestQueue` (dashboard / API patch, lưu
trong `key_value`) sẽ thắng nó, và một
`rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` theo từng connection sẽ thắng giá trị đó. Do đó, việc đặt
biến env trên một deployment đã có giá trị được lưu bền sẽ
không thay đổi gì cả — thay vào đó hãy xóa hoặc cập nhật cài đặt đã lưu.

Thời gian nằm trong hàng đợi bị giới hạn bởi `maxWaitMs`; `maxQueueDepth` bên dưới giới hạn
số lượng caller có thể nằm trong hàng đợi cùng một lúc.

**Các lần retry do body chỉ định: pacing vs lockout.** Một body 429 có thể tự nêu thời gian chờ của nó
(Gemini `RetryInfo.retryDelay`, đoạn text "retry after Ns"), thứ mà
`updateFromResponseBody` đọc. Một thời gian chờ vừa với `maxWaitMs` của connection
là pacing: limiter làm rỗng reservoir của nó trong khoảng thời gian đó và các call đang xếp hàng
được dispatch khi nó được nạp lại. Một thời gian chờ dài hơn `maxWaitMs` không phải thứ mà
hàng đợi có thể ngồi chờ hết — Gemini trả về `retryDelay: "86399s"` cho một daily quota đã cạn. `Retry-After` được chuyển tiếp trên response 429 được dựng lại (#16528)
đã khiến fallback engine khóa model trong khoảng thời gian đó, nhưng việc tạm dừng
limiter cho nó nữa vẫn sẽ làm bế tắc bất kỳ call nào chạm tới key sớm
(chẳng hạn sau một lần reset resilience) trong suốt `maxWaitMs`. Khi một thời gian chờ như vậy đến từ một detail `RetryInfo` có kiểu của Google
(nguồn gốc `google_rpc_retry_info`) và limiter của key đã
được scoped theo model (xem `getLimiterKey`), response 429 sẽ trở thành một
model lockout trên connection đó (`lockModelForLongBodyRetry` trong
`open-sse/services/rateLimitManager/bodyRetryPause.ts`, giới hạn tối đa 24h), và
limiter được giữ nguyên không tạm dừng. Việc chọn account sẽ bỏ qua lock đó qua
`isModelLocked()`, và cổng pre-dispatch của combo cũng vậy đối với các target được ghim vào
connection đó. Trên antigravity, nơi limiter theo từng quota family, lock nằm
trên chính xác model đó, giống như các quota lock khác của nó. Tên mà client yêu cầu
cũng bị khóa khi một alias đã phân giải nó thành model đó, vì các lượt kiểm tra đó dùng
tên được yêu cầu; nó bị khóa một cách chính xác (`lockExactModel`), nên một alias
vượt qua một quota family của antigravity hoặc một scope của codex sẽ không bao giờ khóa chính nó. Một
gợi ý dạng văn xuôi, một `retryDelay` không có kiểu, hoặc một
limiter được chia sẻ bởi toàn bộ connection sẽ giữ nguyên hành vi tạm dừng. Khi limiter mà
đường xử lý 429 vừa dựng lại có tạm dừng, một caller mà thời gian hàng đợi còn lại kết thúc
trước khi khoảng tạm dừng kết thúc sẽ bị từ chối ngay lập tức với mã queue-timeout
(`checkLimiterPause`) thay vì chờ hết khoảng thời gian đó; điểm kết thúc được ghi lại
được neo trước khi limiter được dựng, tại nơi Bottleneck bắt đầu đồng hồ refresh
của nó, và bất kỳ thay đổi nào sau đó đối với reservoir sẽ quên nó đi. Được bao phủ bởi
`tests/unit/rate-limit-long-body-retry-lockout.test.ts` và
`tests/unit/rate-limit-body-retry-pause.test.ts`.

**`maxQueueDepth` — giới hạn tiếp nhận dạng opt-in (mới).** `resilienceSettings.requestQueue.maxQueueDepth`
giới hạn số lượng request có thể nằm trong hàng đợi (chưa được dispatch) cho một
provider+connection tại một thời điểm. Khi hàng đợi đã giữ `maxQueueDepth`
request, một request mới bị từ chối nhanh với một lỗi có kiểu
`code: "RATE_LIMIT_QUEUE_FULL"` **trước khi** nó kịp chạm tới `limiter.schedule()`
— nhờ đó việc từ chối diễn ra rẻ và xảy ra trước bất kỳ công đoạn
prompt-compression / translation nào ở downstream cho request đó. Mặc định `0` =
tắt, giữ nguyên hành vi hàng đợi không giới hạn hiện có; giới hạn trong khoảng 0–100000.
Ghi đè qua `RATE_LIMIT_MAX_QUEUE_DEPTH` (env) hoặc
`resilienceSettings.requestQueue.maxQueueDepth` (dashboard/API patch).

Bản thân lượt kiểm tra tiếp nhận là một pure function
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`) nên
nó có thể được unit-test mà không cần một limiter Bottleneck thật.

> RFC đã mở #6593 cũng đề xuất một cờ `bypassCompressionOnRateLimit`.
> Pipeline `open-sse/services/compression/` của repo này là nén prompt/ngữ cảnh
> trên request LLM đi ra (`chatCore.ts`, quanh khối
> `resolveCompressionSettings`/`selectCompressionStrategy`), chứ không phải nén
> HTTP response trên các body 429 được tổng hợp — không tồn tại đường code
> tương ứng cho một cờ bypass theo đúng nghĩa đen. Bước nén prompt đó cũng hiện
> chạy _trước_ `withRateLimit()` trong pipeline request, vì vậy việc sắp xếp
> lại thứ tự để bỏ qua nó khi bị từ chối do hàng đợi đầy là một thay đổi riêng
> biệt và lớn hơn so với phạm vi của issue này; nó đã cố tình **không** được
> triển khai ở đây và được để lại làm công việc tiếp theo nếu lợi ích tiết
> kiệm CPU xứng đáng với rủi ro của việc sắp xếp lại thứ tự.

### Cơ chế an toàn tự động bật giới hạn tốc độ & Bảo vệ kết nối (`rateLimitProtection`)

**Cơ chế an toàn tự động bật** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`, mặc định `true`):
Theo mặc định, OmniRoute tự động bật bảo vệ hàng đợi giới hạn tốc độ cho tất cả các kết nối provider API-key đang hoạt động (`getProviderCategory(provider) === "apikey"`). Điều này đảm bảo các request đến những upstream API key nhạy cảm về tốc độ được đưa vào hàng đợi và điều tiết thông qua Bottleneck thay vì bùng phát thành các lỗi 429 từ upstream. Cơ chế an toàn này có thể bị ghi đè qua biến môi trường `RATE_LIMIT_AUTO_ENABLE` (`false`/`0`/`off` để tắt, `true`/`1`/`on` để bắt buộc bật), biến này được ưu tiên hơn cài đặt dashboard đã lưu trữ (**Cài đặt → Khả năng phục hồi** / `PATCH /api/resilience`).

**Ngữ nghĩa của `rateLimitProtection` theo từng kết nối:**
Bảo vệ giới hạn tốc độ theo từng kết nối được theo dõi qua trường boolean `rateLimitProtection` trên các kết nối provider (được lưu trữ dưới dạng `rate_limit_protection` trong SQLite):

- **Bật tường minh (`rateLimitProtection === true`)**: Bảo vệ giới hạn tốc độ được bật một cách tường minh cho kết nối này, bất kể danh mục provider hay việc cơ chế an toàn tự động bật có đang bật hay không.
- **Tắt tường minh (`rateLimitProtection === false`)**: Tắt bảo vệ tường minh, nhưng **không** loại một kết nối API-key đang hoạt động ra khỏi cơ chế an toàn tự động bật toàn cục. Trong `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`), `false` và `undefined` là tương đương nhau: chỉ `rateLimitProtection === true` mới được coi là ghi đè tường minh. Nếu `rateLimitProtection` là `false` (hoặc chưa được đặt), một kết nối API-key đang hoạt động vẫn khớp với điều kiện tự động bật và vẫn được bảo vệ giới hạn tốc độ.
- **Không có tùy chọn từ chối theo từng kết nối**: Hiện tại người vận hành không thể biểu thị "chỉ riêng kết nối API-key đang hoạt động này phải chạy mà không có bảo vệ hàng đợi giới hạn tốc độ" trong khi vẫn giữ tự động bật cho các kết nối khác. Để chạy hoàn toàn các kết nối API-key mà không có hàng đợi giới hạn tốc độ, cơ chế an toàn phải được tắt trên toàn cục (`RATE_LIMIT_AUTO_ENABLE=false` hoặc `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`).

**Các đường ghi được hỗ trợ:**

- **`POST /api/rate-limits`**: Đường ghi quản lý được hỗ trợ để bật/tắt `rateLimitProtection` cho một kết nối (`{ connectionId: string, enabled: boolean }`). Gọi endpoint này với `enabled: true` sẽ bật bảo vệ tường minh; gọi với `enabled: false` sẽ gỡ bỏ bảo vệ tường minh (dù các kết nối API-key đang hoạt động vẫn được bao phủ bởi cơ chế an toàn toàn cục nếu tự động bật đang bật).
- **`PUT /api/providers/[id]`**: Cố tình **không** chấp nhận hoặc đảo `rateLimitProtection` (#11278). Việc cập nhật metadata kết nối provider qua `PUT /api/providers/[id]` sẽ không bao giờ thay đổi trạng thái bảo vệ giới hạn tốc độ đã lưu trữ.

---

## 6. Bộ giám sát thông lượng slow-stream (#9709)

Cơ chế bảo vệ tùy chọn `resilienceSettings.streamRecovery.throughputWatchdog` phát hiện
một upstream vẫn đang gửi các chunk nhưng tạo ra output của assistant thấp hơn
tốc độ output hữu ích đã cấu hình. Nó được cố ý tách biệt với idle timeout:
heartbeat và metadata không reset cả hai timer và không được tính là tiến triển. Nó cũng
khác với hard attempt deadline (#9153), vốn vẫn là giới hạn an toàn tuyệt đối
bất kể chất lượng output.

Watchdog yêu cầu một khoảng thời gian khởi động (warm-up) tiếp theo là một rolling window
hoàn chỉnh trước khi có thể abort. Nó đếm các text delta từ các output event của Chat
Completions và Responses API (một proxy byte UTF-8 ở mức bảo thủ), bỏ qua các event
chỉ chứa usage và event rỗng, đồng thời tạm ngưng đánh giá khi các event tool-call hoặc
reasoning đang được xử lý. Nó bị tắt
theo mặc định và có thể được bật bằng `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`;
window, warm-up, tốc độ tối thiểu và output có thể đo tối thiểu đều bị giới hạn bởi
lớp chuẩn hóa resilience-settings thông thường.

Khi được bật, một abort của watchdog chỉ được áp dụng cho upstream attempt đang hoạt động. Trước
khi có bất kỳ byte nào hiển thị với client, đường early-recovery cùng tài khoản hiện có có thể mở lại
attempt đó. Sau commit, stream không bao giờ bị replay một cách mù quáng; chỉ có
hợp đồng continuation giữa stream an toàn hiện có mới có thể ghép nối một suffix. Finalization vẫn
là single-shot, vì vậy việc tính toán usage và giải phóng semaphore không bị trùng lặp.

---

## 7. Diễn giải lại Status của Upstream (các lỗi quota bị báo sai status)

**Phạm vi:** một upstream gateway báo cáo tình trạng quota tạm thời cạn kiệt với HTTP status sai.

**Mục đích:** sửa status gây hiểu lầm TRƯỚC khi phân loại, để các consumer ở downstream (fallback engine, combo aggregation, response trả về client) nhìn thấy bản chất retryable thực sự của lỗi.

Một số gateway báo hiệu tình trạng quota TẠM THỜI cạn kiệt bằng một HTTP status
không retryable. `agentrouter.org` trả về `403` (đôi khi `400`) với body tiếng Trung
(`用户额度不足` / `额度不足`) thay vì `429` tiêu chuẩn. Các client như Claude
Code coi `403` là lỗi vĩnh viễn và hủy session, và nếu không có sự điều chỉnh,
fallback engine sẽ phân loại nó thành `AUTH_ERROR` thay vì một sự kiện quota.

**Triển khai:**

- Registry + matcher: `open-sse/config/upstreamStatusRestatement.ts` — một
  danh sách rule theo từng provider (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), được khớp thông qua `applyStatusRestatement()`.
- Vị trí gọi: khối `providerFailure:` trong `open-sse/handlers/chatCore.ts`
  (khoảng dòng 3654), ngay sau khi `parseUpstreamError()` parse một
  response của upstream có HTTP status lỗi (`!providerResponse.ok`), và trước khi
  bất kỳ quá trình phân loại nào chạy, để mọi consumer ở downstream đều thấy status
  đã được sửa. Các lỗi nằm bên trong một stream SSE `200` đi theo một
  đường stream-parsing riêng, ở bước sau và **không** được hook này bao phủ trong
  hiện tại — một giới hạn đã biết, chưa cần thiết cho misstatus của agentrouter (vốn
  xuất hiện dưới dạng một HTTP status lỗi).
- Điều kiện retry: `429` nằm trong `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`), vì vậy một lỗi đã được
  diễn giải lại mang theo một cửa sổ retry thực sự thay vì xuất hiện như một `403` chết.
- `defaultRetryAfterMs` `60s` tổng hợp (`upstreamStatusRestatement.ts`)
  chỉ là thứ mà response đã diễn giải lại thông báo cho **client**; bản thân nó không phải
  là thời lượng cooldown/lockout nội bộ của connection — thứ đó được quản lý
  riêng biệt bởi cơ chế nào thực sự xử lý lỗi đã diễn giải lại
  (backoff tăng dần của Connection Cooldown, §2, cơ sở `3s` cho các provider
  dùng API key; hoặc Model Lockout, §3, cho các provider dùng
  quota theo từng model như agentrouter). Router có thể đủ điều kiện retry nội bộ
  sớm hơn so với cửa sổ 60s mà nó thông báo cho client — đây là khoảng dự phòng
  có chủ đích, không phải bug.

Các lỗi vĩnh viễn (`无权访问模型` của agentrouter — không có quyền truy cập model này)
KHÔNG BAO GIỜ được diễn giải lại: `excludeMarkers` phủ quyết rule ngay cả khi `textMarkers` khớp,
vì vậy lỗi giữ nguyên status ban đầu và không có gì retry nó mãi mãi. Rule
phân loại provider tương ứng
(`agentrouter-model-access-denied` trong `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, một base cooldown khai báo `6h`) được
`checkFallbackError` (`open-sse/services/accountFallback.ts`) tham khảo
_trước_ early-return `FORBIDDEN` thuộc danh mục apikey chung, được kiểm soát bởi
`honorsRuleLockScope(provider)` (#10334 — hiện chỉ dành riêng cho agentrouter thông qua
allowlist `HONORS_RULE_LOCK_SCOPE_PROVIDERS` trong
`providerErrorRules.ts`). Cooldown 6h khai báo của rule được truyền qua dưới dạng
`fallbackResult.baseCooldownMs`, nhưng nó vẫn đi vào đường lockout
quota theo từng model có sẵn từ trước (`lockModelIfPerModelQuota()` /
`recordModelLockoutFailure()`, không thay đổi bởi #10334 ngoại trừ nguồn
cooldown): nó bị kẹp xuống `mlSettings.maxCooldownMs` của operator
(mặc định `1_800_000ms` / 30 phút), giống như mọi model lockout khác, và
_lý do lockout được lưu trữ_ vẫn là chuỗi hardcode có sẵn `"forbidden"`,
không phải `"auth_error"` của rule — chỉ có thời lượng cooldown được tôn trọng
từ đầu đến cuối, không phải chuỗi lý do. Bản thân connection vẫn
ở trạng thái hoạt động; các model anh em trên cùng connection không bị ảnh hưởng.

Các lỗi hạn ngạch đã được viết lại trạng thái (`额度不足`) khớp với một rule của provider trong production (`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`, không khai báo cooldown riêng — giá trị mặc định scaled backoff của lớp persistence sẽ được áp dụng). Kể từ #10334, `scope` trên `ProviderErrorRuleMatch` ĐÃ được sử dụng xuyên suốt đầu-cuối, nhưng **chỉ** đối với các provider nằm trong allowlist `HONORS_RULE_LOCK_SCOPE_PROVIDERS` (`providerErrorRules.ts` — hiện nay chỉ có `"agentrouter"`, được kiểm soát qua `honorsRuleLockScope()`). Với mọi provider khác, `scope` vẫn chỉ mang tính thông tin, đúng như trước #10334. `checkFallbackError` đưa scope của rule đã khớp ra ngoài dưới dạng `fallbackResult.ruleScope`; `isAgentrouterConnectionQuotaScope()` (`src/sse/services/auth.ts`) là guard dùng chung xác nhận rằng một `ruleScope` thực sự an toàn để được tôn trọng như một tín hiệu ở phạm vi toàn kết nối và có khả năng tự phục hồi (scope `"connection"`, reason `quota_exhausted`, không bao giờ là `permanent`, không bao giờ là `creditsExhausted` — một biện pháp phòng vệ trước khả năng tương lai có một rule ghép scope `"connection"` với một trạng thái tài khoản vĩnh viễn). Có hai consumer gọi nó:

- **Persistence** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  thay vì rơi vào nhánh lockout **theo từng model** của passthrough-provider
  (agentrouter là `passthroughModels: true` → `hasPerModelQuota()`
  trả về `true`), nó áp dụng một **cooldown kết nối tạm thời** —
  `testStatus: "unavailable"` + `rateLimitedUntil`, không bao giờ là trạng thái terminal
  (`credits_exhausted`/`banned`/`expired`) — để kết nối tự phục hồi
  khi cooldown hết hạn thay vì đòi hỏi reset credential thủ công.
  Bị bỏ qua đối với các kết nối có `disableCooling: true` (#2997): opt-out đó
  thay vào đó sẽ rơi xuống lockout theo từng model (một sự đánh đổi đã được
  ghi lại — xem comment trong code ngay phía trên nhánh).
- **Định tuyến combo trong cùng một request** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): cùng guard đó đánh dấu
  kết nối vào tập `exhaustedConnections` trong bộ nhớ, được khóa theo
  `${provider}:${connectionId}`. Điều này chỉ bỏ qua một target CÙNG-REQUEST
  còn lại mà _bản thân nó đã mang sẵn đúng `connectionId` đó_ trên target
  object của chính mình (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` trước khi tra cứu `exhaustedConnections`) — một combo
  kiểu danh sách model thông thường, trong đó các target anh em không mang
  `connectionId` được ghim sẵn của riêng mình và `connectionId` chỉ được
  resolve theo từng lần dispatch từ header `X-OmniRoute-Selected-Connection-Id`
  của response, sẽ không bao giờ chạm tới điểm khớp khóa đó. Với
  trường hợp phổ biến đó, cơ chế bảo vệ thực sự chống lại việc một chặng còn lại
  tái sử dụng tài khoản vừa cạn hạn ngạch KHÔNG phải là Set này — mà là
  lớp persistence ở trên (`rateLimitedUntil` của kết nối giờ đã nằm trong
  tương lai) kết hợp với việc chính guard này triệt tiêu `transientRateLimitedProviders`
  cho lần thất bại đó (xem mục "Thiết kế hai giai đoạn" và comment trong code
  tại nhánh `isAgentrouterConnectionQuotaScope` trong `targetExhaustion.ts`):
  khi Set đó không được đánh dấu, cơ chế force-allow `allowRateLimitedConnection`
  của `combo.ts` (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) KHÔNG được
  kích hoạt cho các chặng còn lại của provider, vì vậy bộ lọc `rateLimitedUntil`
  của bước chọn credential (`src/sse/services/auth.ts:1238`) được tôn trọng
  bình thường và một chặng còn lại hoặc sẽ chọn một kết nối agentrouter khác
  vẫn đủ điều kiện, hoặc thất bại với lỗi không có credential khả dụng — nó
  không ép đường quay lại kết nối mà nhánh này vừa đặt cooldown.

### Thiết kế hai giai đoạn: viết lại trạng thái, rồi phân loại

Việc viết lại trạng thái (`upstreamStatusRestatement.ts`) và các rule phân loại
của provider (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) là các registry riêng biệt, cả hai đều khóa theo provider id
và các marker văn bản, nhưng chúng chạy ở những vị trí khác nhau và phục vụ những
mục đích khác nhau: việc viết lại sẽ ghi đè HTTP status sớm trong `chatCore.ts`;
các rule phân loại chọn `reason` fallback và `scope` khóa
(`model` / `provider` / `connection`) bên trong `checkFallbackError()`
(`open-sse/services/accountFallback.ts`).

Các rule phân loại chỉ nhìn thấy **văn bản** lỗi đầy đủ (cần thiết để khớp các
marker trong body như `额度不足`) đối với các provider nằm trong allowlist
`FULL_TEXT_RULE_PROVIDERS` trong `providerErrorRules.ts` — hiện nay chỉ có
`"agentrouter"`. Với mọi provider **catalog tích hợp sẵn** khác,
`checkFallbackError` chỉ đưa cho `getProviderErrorRuleMatch` lỗi có cấu trúc
(`{code, type}`), đủ cho các rule dựa trên header/status/code nhưng mù trước
các marker văn bản trong body. Hàm helper `resolveRuleMatchBody()` thực hiện
lựa chọn này: toàn bộ văn bản lỗi cho các provider trong allowlist, còn lại là
lỗi có cấu trúc. Thêm một provider **tích hợp sẵn** vào `FULL_TEXT_RULE_PROVIDERS`
là một opt-in tường minh theo từng provider — nó tồn tại để đường đi mặc định
cho mọi provider không nằm trong danh sách vẫn giữ nguyên từng byte.

`scope` của một rule (`model` / `provider` / `connection`) là một opt-in riêng biệt
so với `FULL_TEXT_RULE_PROVIDERS`: `checkFallbackError` chỉ đưa nó ra dưới dạng
`fallbackResult.ruleScope`, và các consumer hạ nguồn chỉ tôn trọng nó như một
thứ gì đó hơn một nhãn thông tin, đối với các provider nằm trong allowlist
`HONORS_RULE_LOCK_SCOPE_PROVIDERS` trong cùng file (`gated via
honorsRuleLockScope()` — hiện nay chỉ có `"agentrouter"`). Xem mục "Các lỗi hạn
ngạch đã được viết lại trạng thái" ở trên để biết một kết quả khớp
`scope: "connection"` thực sự làm gì khi một provider đã nằm trong allowlist đó.

**#11104 — các rule do operator khai báo bỏ qua cả hai allowlist.** Operator có
thể khai báo một rule theo từng provider tại runtime thông qua `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
mà không cần chỉnh sửa file này. Việc kiểm soát một rule của operator bằng
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` — các allowlist
nhằm bảo vệ hành vi **mặc định** của các rule catalog tích hợp sẵn — sẽ
khiến cơ chế settings trở nên vô dụng đối với mọi provider ngoại trừ những
provider đã được liệt kê ở đó, vì việc khai báo rule vốn đã là sự opt-in
rõ ràng của operator. `resolveRuleMatchBody()` và `honorsRuleLockScope()`
đều kiểm tra `hasOperatorRuleForProvider()` trước: một provider có rule của
operator sẽ nhận được văn bản lỗi thô và có `scope` đã khai báo được tôn
trọng, bất kể provider đó có xuất hiện trong một trong hai allowlist hay không.

**Điểm thiếu sót đã biết — `providerRuleRegistry` không bao giờ được tham khảo
cho HTTP 400.** Nhánh `BAD_REQUEST` của `checkFallbackError` phân loại status
400 hoàn toàn thông qua các mảng pattern riêng của nó
(`MODEL_ACCESS_DENIED_PATTERNS`, `CONTEXT_OVERFLOW_PATTERNS`, v.v. trong
`accountFallback.ts`) và return trước khi nhánh
`configuredRule`/`getProviderErrorRuleMatch` phía trên được chạm tới. Một rule
catalog tích hợp sẵn (hoặc một rule của operator) với `status: 400` là hợp lệ
về cú pháp nhưng sẽ không bao giờ được kích hoạt. Hiện tại không có rule nào
nhắm tới 400, vì vậy không có gì trong production bị ảnh hưởng — nhưng một
rule 400 trong tương lai cần nhánh này được chỉnh sửa trước, đây là một thay
đổi lớn hơn việc thêm một rule (nó phân loại lại 400 cho mọi provider đang
dựa vào hành vi mảng pattern) và nằm ngoài phạm vi của một lần bổ sung rule
cho một provider đơn lẻ.

### Thêm một gateway báo sai quota mới

1. Đăng ký một mảng rule trong `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Giữ `textMarkers` mang
   tính đặc thù của provider; không bao giờ tái sử dụng các cụm tiếng Anh
   chung chung trùng lặp với `CREDITS_EXHAUSTED_SIGNALS`
   (`open-sse/services/accountFallback.ts`).
2. Tùy chọn đăng ký các rule phân loại trong
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) để chọn
   đúng phạm vi khóa (`connection` cho quota toàn tài khoản, `model` cho các
   lỗi theo từng model). Bước này chỉ có hiệu lực trong production đối với
   các provider có rule cần toàn bộ văn bản lỗi (body marker): thêm provider
   id vào `FULL_TEXT_RULE_PROVIDERS` trong cùng file — nếu không,
   `checkFallbackError` chỉ trao cho rule lỗi có cấu trúc `{code, type}` và
   một rule dựa trên văn bản body sẽ không bao giờ khớp với traffic thực.
   Các rule chỉ khớp thuần túy trên `status`/`headers` (như của Opencode
   hoặc Minimax) không cần opt-in này. Riêng biệt, nếu rule khai báo
   `scope: "connection"` và ý định là một cooldown thực sự trên toàn
   connection cộng với việc bỏ qua combo trong cùng request (không chỉ là
   một nhãn thông tin), hãy thêm provider id vào
   `HONORS_RULE_LOCK_SCOPE_PROVIDERS` trong cùng file — đây chính là thứ
   kiểm soát việc sử dụng theo kiểu `isAgentrouterConnectionQuotaScope()`
   trong `markAccountUnavailable()` (`src/sse/services/auth.ts`) và
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); nếu không có nó, `scope`
   vẫn chảy qua `fallbackResult.ruleScope` nhưng không có gì xử lý nó.
3. Thêm các unit test tương tự như `tests/unit/upstream-status-restatement.test.ts`
   và `tests/unit/agentrouter-error-rules.test.ts` (bao gồm các guard
   not-permanent / not-creditsExhausted, và — nếu provider cần allowlist —
   một test khẳng định `resolveRuleMatchBody()` chỉ trả về toàn bộ văn bản
   cho provider đó).

Không cần thay đổi nào đối với `chatCore.ts`, `classifyError`, hoặc combo.

#### Khóa theo nhóm egress (#10880)

Các provider trong `EGRESS_BUCKETED_LOCK_PROVIDERS` (họ opencode) được coi là
upstream phân nhóm theo IP (gói miễn phí của opencode phân nhóm theo IP,
không phải theo tài khoản — xem #9611): một status-429 được phân loại là
`quota_exhausted` **hoặc** `rate_limit_exceeded` sẽ làm nguội mọi connection
thuộc họ được allowlist có IP egress đã biết gần nhất khớp với IP của
connection gặp lỗi, trước khi rotation có thể thử chúng
— tránh N-1 lời gọi upstream chắc chắn thất bại (cùng dạng như #10460/#10525).
`rate_limit_exceeded` được bao gồm một cách có chủ đích: trên đường
`markAccountUnavailable`, các rule dành riêng cho opencode không bao giờ khớp
(không có headers/body nào được trao cho `checkFallbackError`, opencode không
nằm trong `FULL_TEXT_RULE_PROVIDERS`), vì vậy một lỗi 429 có body chứa văn
bản quota gói đăng ký ("monthly usage limit reached") được phân loại là
`quota_exhausted` bởi fallback theo văn bản quota
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; cooldown 1 giờ) trước
khi rule `status_429` được chạm tới — trong khi một lỗi 429 không chứa văn
bản quota (giới hạn tốc độ thuần túy) được phân loại qua rule `status_429`
là `rate_limit_exceeded` và vẫn làm nguội cả họ IP. Đối với một provider
trong allowlist, một rate limit phân nhóm theo IP cũng là tín hiệu giống như
quota đã cạn. Giới hạn thực tế:

- **Nỗ lực tối đa (best-effort)**: khóa phân giải `egress_ip` được biết
  đến gần nhất của kết nối từ `proxy_logs` (cửa sổ 24 giờ, đồng bộ, không
  cache). Cache nguội (IP egress chưa từng được thăm dò) hoặc không có hàng
  nào → kết nối bị lỗi vẫn được nhánh đưa vào trạng thái nguội (ghi lại như
  hiện nay), chỉ là không có kết nối anh em nào bị khóa.
- **Không bao giờ là trạng thái cuối cùng**: thời gian nguội là một cửa sổ
  hạn ngạch tự gia hạn (`testStatus: "unavailable"`); trạng thái vĩnh viễn
  không bao giờ được suy ra từ tín hiệu cấp IP. Các kết nối `disableCooling`
  bỏ qua hoàn toàn nhánh này.
- **Mức độ chi tiết của khóa thay đổi đối với nhóm trong danh sách cho
  phép**: đây là thay đổi về phạm vi, không chỉ là tối ưu hóa kết nối anh em.
  opencode là một provider `passthroughModels`, nên trước nhánh này, một lỗi
  429 tạo ra khóa theo từng MODEL; giờ đây nó tạo ra thời gian nguội cho kết
  nối — kể cả đối với người vận hành chỉ chạy một kết nối duy nhất, không có
  kết nối anh em nào. Đó là mức độ chi tiết mà bảng quy tắc của opencode vốn
  đã khai báo là đúng (`scope: "connection"`, `providerErrorRules.ts`), nhưng
  cho đến nay chưa được tôn trọng vì opencode không nằm trong
  `HONORS_RULE_LOCK_SCOPE_PROVIDERS`. Nhánh này tự ghi thời gian nguội +
  `backoffLevel` của kết nối bị lỗi, tương tự nhánh agentrouter có phạm vi
  kết nối, rồi trả về — khối khóa theo từng model và đường dẫn chung bên
  dưới không bao giờ được chạm tới.
- **Bao gồm cả combo**: giống như nhánh agentrouter, phạm vi này cố ý bỏ qua
  việc hạ cấp `persistUnavailableState`/`isCombo` mà bên gọi combo áp dụng
  cho lỗi 429. Khóa theo từng model không phải là dạng yếu hơn của phạm vi
  này, mà là sai đơn vị: nó không nói gì về IP đã cạn kiệt, nên vòng xoay
  combo sẽ tiếp tục đốt một lệnh gọi chắc chắn thất bại cho mỗi kết nối anh
  em.
- **An toàn cho kết nối anh em**: một kết nối anh em đã ở trạng thái cuối
  cùng (banned/credits_exhausted) hoặc đã ở trong thời gian nguội dài hơn sẽ
  không bao giờ bị ghi đè.
- **Danh sách cho phép loại trừ**: việc mở rộng
  `EGRESS_BUCKETED_LOCK_PROVIDERS` là quyết định rõ ràng của chủ sở hữu;
  không dùng cơ chế kết nối tổng quát (pattern #10334/#10419). Truy vấn kết
  nối anh em liên kết cùng danh sách cho phép đó thay vì lặp lại nó dưới dạng
  literal SQL, nên việc mở rộng nó vẫn chỉ là thay đổi một dòng.
- **Xoay vòng IP egress, cả hai chiều**: cửa sổ tra cứu (24 giờ) rộng hơn
  nhiều so với TTL của cache IP egress (5 phút), nên "IP được biết đến gần
  nhất" là lịch sử, không phải trạng thái hiện tại. Nếu proxy của một kết nối
  đã xoay vòng trong cửa sổ đó, khóa có thể **bỏ lỡ** một IP thực sự được
  dùng chung (IP được ghi lại là IP mới, chưa cạn kiệt) — và đối xứng, nó có
  thể **làm nguội một kết nối anh em vốn đã xoay vòng ra khỏi** IP cạn kiệt
  đó. Trường hợp thứ hai khiến kết nối anh em đó mất một cửa sổ nguội; cả hai
  đều là những giới hạn được chấp nhận của phương pháp tra cứu dựa trên lịch
  sử theo kiểu nỗ lực tối đa.
- **Chi phí**: hai lần quét có giới hạn trên `proxy_logs` (lọc theo cửa sổ
  qua `idx_pl_timestamp`), chỉ xảy ra ở tần suất lỗi 429. Không có chỉ mục
  mới (migration 134 YAGNI). Đã đo trên bản sao DB lưu lượng thực tế có kích
  thước trung bình; một instance thông lượng cao sẽ giữ số hàng nhiều hơn
  tương ứng trong cùng cửa sổ đó.

---

## Các tính năng resilience khác

- **20 chiến lược định tuyến** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, quota-weighted, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — xem [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Định tuyến nhận biết reset** (v3.8.0) — ưu tiên các kết nối theo thời điểm reset quota.
- **Suy giảm chế độ background** — Responses API `background: true` bị hạ xuống chế độ đồng bộ kèm cảnh báo.
- **Phát hiện giới hạn tool động** — tự back off các provider khi chạm giới hạn số lượng tool.
- **Fallback khẩn cấp** — được điều khiển bởi `OMNIROUTE_EMERGENCY_FALLBACK`; người vận hành có thể ghi đè từ trang Feature Flags mà không cần khởi động lại.

---

## Gỡ lỗi

- Combo weighted trả về `503 all_targets_cooling_down` (`Retry-After` được thiết lập, `diagnostics.excluded` liệt kê mọi target với `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable`) → pool đã được cấu hình và kết nối, chỉ là mọi target đều đang bị loại trừ bởi một bộ đếm thời gian resilience; cảnh báo `[COMBO] Weighted selection: every target excluded before dispatch — …` nêu rõ các lý do và số giây còn lại. Một lỗi `404 no_executable_targets` từ cùng combo đó nghĩa là không có bộ đếm thời gian resilience nào liên quan (không có gì để chạy, hoặc mọi tài khoản đều không vượt qua được bài kiểm tra khả dụng). Được xây dựng trong `open-sse/services/combo/pinRecovery.ts` từ các loại trừ thu thập được trong `targetResolution.ts`.
- Mọi key của một provider đều bị bỏ qua → kiểm tra cả trạng thái circuit breaker LẪN `rateLimitedUntil`/`testStatus` của từng kết nối.
- Provider bị loại trừ vĩnh viễn sau cửa sổ reset → code đang đọc `state` thô thay vì `getStatus()`/`canExecute()`.
- Một key lỗi, các key khác vẫn hoạt động → ưu tiên connection cooldown hơn circuit breaker.
- Chỉ một model lỗi → ưu tiên model lockout hơn connection cooldown.
- Trạng thái lẽ ra phải tự phục hồi nhưng không → kiểm tra timestamp ở tương lai + đường đọc làm mới trạng thái đã hết hạn. Các trạng thái vĩnh viễn yêu cầu thay đổi thủ công.

---

## Trạng thái runtime — tham khảo nhanh dành cho agent

> Được chuyển nguyên văn từ `AGENTS.md` → "Resilience Runtime State" (PR #12743) để hướng
> dẫn dành cho agent nằm trong ngân sách context 40k. Đây là phiên bản rút gọn, hướng tới
> agent, của các phần bên trên; các phần được đánh số vẫn là tài liệu tham khảo đầy đủ.

OmniRoute có ba cơ chế xử lý lỗi tạm thời liên quan nhưng khác biệt nhau. Hãy giữ
phạm vi của chúng tách biệt khi gỡ lỗi hành vi định tuyến. Xem
[sơ đồ resilience 3 lớp](../diagrams/exported/resilience-3layers.svg)
(nguồn: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
để có bản đồ tổng quan nhanh.

### Circuit Breaker cấp provider

**Phạm vi**: toàn bộ provider, ví dụ `glm`, `openai`, `anthropic`.

**Mục đích**: ngừng gửi traffic tới một provider liên tục lỗi ở tầng
upstream/dịch vụ, để một provider không khỏe mạnh không làm chậm mọi request.

**Triển khai**:

- Lớp cốt lõi: `src/shared/utils/circuitBreaker.ts`
- Kết nối gate/thực thi chat: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API trạng thái runtime: `src/app/api/monitoring/health/route.ts`
- Các wrapper dùng chung: `open-sse/services/accountFallback.ts`
- Bảng trạng thái được lưu trữ: `domain_circuit_breakers`

**Các trạng thái** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: traffic bình thường được phép.
- `DEGRADED`: vùng cảnh báo sớm — số lỗi đã vượt ngưỡng suy giảm nhưng chưa
  chạm ngưỡng breaker; traffic vẫn chạy, dashboard hiển thị cảnh báo. Một bài kiểm tra
  kết nối hợp lệ hoặc một cửa sổ yên tĩnh không có lỗi mới sẽ đưa nó về `CLOSED`
  (`docs/architecture/RESILIENCE_GUIDE.md` có thông tin về cửa sổ này).
- `OPEN`: provider tạm thời bị chặn; caller nhận phản hồi provider-circuit-open
  hoặc định tuyến combo bỏ qua sang target khác.
- `HALF_OPEN`: timeout reset đã trôi qua; cho phép một request thăm dò. Thành công thì
  đóng breaker, thất bại thì mở lại.

**Mặc định** (`open-sse/config/constants.ts` → `PROVIDER_PROFILES`, được sử dụng qua
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` trong `src/lib/resilience/settings.ts` →
`getCircuitBreaker(provider, …)` trong `src/sse/handlers/chatHelpers.ts`). Breaker cấp
toàn provider chạy dựa trên `circuitBreakerThreshold` / `circuitBreakerReset`:

| Profile | suy giảm tại | mở tại (`circuitBreakerThreshold`) | reset (`circuitBreakerReset`) |
| ------- | -----------: | ---------------------------------: | ----------------------------: |
| OAuth   |          `5` |                                `8` |                         `60s` |
| API key |          `7` |                               `12` |                         `30s` |
| Local   |     (suy ra) |                                `2` |                         `15s` |

`PROVIDER_PROFILES` cũng định nghĩa `providerFailureThreshold` (10/15/2),
`providerFailureWindowMs` (15/30/5 phút) và `providerCooldownMs` (5/10/1 phút): chúng vận hành
**cổng cửa sổ của tính năng Provider Cooldown toàn cục dạng opt-in** (`PROVIDER_COOLDOWN_ENABLED`, mặc định
tắt) — một mục cấp provider trong `open-sse/services/providerCooldownTracker.ts` chỉ được tính
là đang cooldown sau `providerFailureThreshold` lần lỗi trong `providerFailureWindowMs`, và sau đó
cooldown trong `providerCooldownMs`. Chúng KHÔNG phải là ngưỡng của breaker đang hoạt động
— đừng tinh chỉnh chúng với kỳ vọng thay đổi hành vi breaker. Mọi giá trị mặc định
đều có thể ghi đè qua các biến môi trường
`OMNIROUTE_PROVIDER_BREAKER_*` và `OMNIROUTE_CIRCUIT_BREAKER_*`; bảng
tham khảo chính xác theo runtime nằm trong `docs/architecture/RESILIENCE_GUIDE.md`.

Chỉ các trạng thái lỗi cấp provider mới được kích hoạt breaker của provider:

```ts
(408, 500, 502, 503, 504);
```

Không kích hoạt breaker cấp toàn provider cho các lỗi tài khoản/key/model thông thường
như đa số trường hợp `401`, `403`, hoặc `429`. Những lỗi đó thường thuộc về
connection cooldown hoặc model lockout. Một lỗi `403` của provider API key thông thường
nên có thể phục hồi trừ khi nó được phân loại là lỗi provider/tài khoản dứt điểm.

Bộ ngắt mạch (breaker) sử dụng cơ chế khôi phục lười (lazy recovery), không dùng bộ đếm thời gian chạy nền. Khi trạng thái `OPEN` hết hạn, các lượt đọc như `getStatus()`, `canExecute()`, và `getRetryAfterMs()` sẽ làm mới trạng thái thành `HALF_OPEN`, nhờ đó các dashboard và trình xây dựng ứng viên combo không tiếp tục loại trừ vĩnh viễn một provider đã hết hạn.

### Thời gian chờ kết nối (Connection Cooldown)

**Phạm vi**: một kết nối/tài khoản/khóa của provider.

**Mục đích**: tạm thời bỏ qua một khóa/tài khoản bị lỗi trong khi vẫn cho phép các kết nối khác của cùng provider tiếp tục phục vụ yêu cầu.

**Triển khai**:

- Đường ghi/cập nhật: `src/sse/services/auth.ts::markAccountUnavailable()`
- Lựa chọn/lọc tài khoản: `src/sse/services/auth.ts::getProviderCredentials...`
- Tính toán thời gian chờ: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Cài đặt: `src/lib/resilience/settings.ts`

Các trường quan trọng trên kết nối provider:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

Trong quá trình lựa chọn tài khoản, một kết nối sẽ bị bỏ qua khi:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

Thời gian chờ cũng hoạt động theo cơ chế lười: khi `rateLimitedUntil` đã ở trong quá khứ, kết nối sẽ đủ điều kiện trở lại. Khi sử dụng thành công, `clearAccountError()` sẽ xóa `testStatus`, `rateLimitedUntil`, các trường lỗi, và `backoffLevel`.

Hành vi mặc định của thời gian chờ kết nối:

- Thời gian chờ cơ bản của OAuth: `5s`.
- Thời gian chờ cơ bản của API-key: `3s`.
- Lỗi `429` của API-key nên ưu tiên các gợi ý thử lại từ phía upstream (`Retry-After`, các header reset, hoặc văn bản reset có thể phân tích được) khi có sẵn.
- Các lỗi có thể khôi phục lặp lại sẽ dùng backoff lũy thừa:

```ts
baseCooldownMs * 2 ** failureIndex;
```

Cơ chế chống hiệu ứng bầy đàn (thundering herd) ngăn các lỗi đồng thời trên cùng một kết nối kéo dài thời gian chờ nhiều lần hoặc tăng `backoffLevel` hai lần.

Các trạng thái cuối (terminal) không phải là thời gian chờ. `banned`, `expired` (chỉ trở thành terminal sau N lần thử lại có giới hạn thông qua `EXPIRED_RETRY_MAX`), và `credits_exhausted` được thiết kế để duy trì trạng thái không khả dụng cho đến khi thông tin xác thực/cài đặt thay đổi hoặc có người vận hành đặt lại chúng. Không ghi đè trạng thái terminal bằng trạng thái cooldown tạm thời.

### Khóa model (Model Lockout)

**Phạm vi**: provider + kết nối + model.

**Mục đích**: tránh vô hiệu hóa toàn bộ một kết nối khi chỉ có một model không khả dụng hoặc bị giới hạn quota cho kết nối đó.

Ví dụ:

- Các provider áp quota theo từng model trả về `429`.
- Các provider cục bộ trả về `404` cho một model bị thiếu.
- Các lỗi quyền theo chế độ/model riêng của provider, chẳng hạn như các chế độ Grok được chọn.

Khóa model nằm trong `open-sse/services/accountFallback.ts` và cho phép cùng một kết nối tiếp tục phục vụ các model khác.

### Hướng dẫn gỡ lỗi

- Nếu tất cả các khóa của một provider đều bị bỏ qua, hãy kiểm tra cả trạng thái breaker của provider và `rateLimitedUntil`/`testStatus` của từng kết nối.
- Nếu một provider có vẻ bị loại trừ vĩnh viễn sau cửa sổ reset, hãy kiểm tra xem mã nguồn có đang đọc `state` thô thay vì dùng `getStatus()`/`canExecute()` hay không.
- Nếu một khóa của provider bị lỗi nhưng các khóa khác vẫn hoạt động, hãy ưu tiên dùng connection cooldown thay vì provider breaker.
- Nếu chỉ một model bị lỗi, hãy ưu tiên dùng model lockout thay vì connection cooldown.
- Nếu một trạng thái cần tự khôi phục, nó phải có một dấu thời gian trong tương lai/timeout reset và một đường đọc làm mới trạng thái đã hết hạn. Các trạng thái vĩnh viễn đòi hỏi thay đổi thủ công về thông tin xác thực hoặc cấu hình.

---

## TLS Fingerprinting & Stealth

Tính năng stealth theo từng provider (JA3/JA4, CCH, obfuscation) được tài liệu riêng — xem `docs/security/STEALTH_GUIDE.md` (git; không được biên dịch vào `/docs`).

---

## Kiểm thử khả năng phục hồi (Phase 8 · Block C)

Ngoài các unit test cho logic phục hồi, có ba bài test vận hành runtime dưới
các điều kiện lỗi/áp lực thực tế (tất cả đều là integration/nightly — không bài nào chặn PR):

| Test        | Nội dung                                                                                                                                                             | Chạy                                     |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Chaos       | Node fake-upstream chèn độ trễ/reset/timeout/503 thực; xác nhận rằng circuit breaker mở/phục hồi và `checkFallbackError` phân loại 503 là fallback có thể khôi phục. | `RUN_CHAOS_INT=1 npm run test:chaos`     |
| Heap-growth | ~500 stream trên mỗi `createSSEStream` với `--expose-gc`; thất bại nếu heap tăng vượt ngưỡng trần (OOM guard #3069).                                                 | `npm run test:heap`                      |
| k6 soak     | Tải liên tục vào `/api/monitoring/health`; ngưỡng p95/tỉ lệ lỗi.                                                                                                     | `k6 run tests/load/k6-soak.js` (nightly) |

Được điều phối bởi `.github/workflows/nightly-resilience.yml` (cron + dispatch). Trong
`test:integration` mặc định, chaos và heap sẽ tự bỏ qua (khi không có `RUN_CHAOS_INT`/`--expose-gc`).

---

## Xem thêm

- [Hướng dẫn Kiến trúc](./ARCHITECTURE.md) — Kiến trúc hệ thống và cơ chế bên trong
- [Hướng dẫn Người dùng](../guides/USER_GUIDE.md) — Providers, combo, tích hợp CLI
- [Engine Auto-Combo](../routing/AUTO-COMBO.md) — Chấm điểm 16 yếu tố, các mode pack
