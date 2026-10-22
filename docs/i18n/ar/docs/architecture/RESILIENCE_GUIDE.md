# Resilience Guide (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

تمتلك OmniRoute ثلاث آليات مرونة متميزة لكنها مترابطة. لكل منها نطاق وغرض مختلف. أبقِها منفصلة عند تصحيح أخطاء سلوك التوجيه.

![نموذج المرونة ثلاثي الطبقات](../diagrams/exported/resilience-3layers.svg)

> المصدر: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. قاطع دائرة المزوّد (Provider Circuit Breaker)

**النطاق:** المزوّد بأكمله (مثل `glm`، `openai`، `anthropic`).

**الغرض:** إيقاف إرسال الحركة إلى مزوّد يفشل بشكل متكرر على مستوى المنبع/الخدمة.

**التنفيذ:**

- الفئة الأساسية: `src/shared/utils/circuitBreaker.ts`
- الربط: `src/sse/handlers/chatHelpers.ts`، `src/sse/handlers/chat.ts`
- واجهة برمجة التطبيقات للحالة: `GET /api/monitoring/health`
- واجهة برمجة التطبيقات لإعادة التعيين: `POST /api/resilience/reset`
- الأغلفة: `open-sse/services/accountFallback.ts`
- جدول قاعدة البيانات: `domain_circuit_breakers`

**الحالات:**

- `CLOSED` — يُسمح بالحركة بشكل طبيعي
- `DEGRADED` — لا تزال الحركة مسموحًا بها، لكن تتم متابعة الإخفاقات المتصاعدة للمزوّد؛ وتعود إلى `CLOSED` عند تحقيق عدد كافٍ من النجاحات، أو عند اجتياز اختبار اتصال صالح، أو بعد مرور أطول مدة بقاء في حالة `OPEN` لآخر نوع من الإخفاق (قيمة `cooldownByKind` الخاصة به، وإلا `resetTimeout`، مضروبة × `maxBackoffMultiplier`، وبحد أدنى فترة تبريد واحدة) دون حدوث إخفاق جديد
- `OPEN` — المزوّد محظور مؤقتًا؛ يتخطاه التوجيه المركّب (combo)
- `HALF_OPEN` — انقضت مهلة إعادة التعيين؛ يُسمح بطلب استقصائي

**الإعدادات الافتراضية القابلة للتكوين (`open-sse/config/constants.ts`، معروضة في لوحة التحكم → الإعدادات → المرونة):**

| الفئة   | تتدهور عند | تنفتح عند  | مهلة إعادة التعيين |
| ------- | ---------- | ---------- | ------------------ |
| OAuth   | 5 إخفاقات  | 8 إخفاقات  | 60s                |
| API-key | 7 إخفاقات  | 12 إخفاقًا | 30s                |
| Local   | مشتقة      | إخفاقان    | 15s                |

يتحكم `degradationThreshold` في متى يدخل المزوّد حالة `DEGRADED`؛ بينما يتحكم `failureThreshold` في متى ينفتح ويتم تخطيه. ملفات تعريف المزوّدات المحلية (Local) غير معروضة بعد في صفحة إعدادات المرونة.

**رموز التفعيل:** فقط رموز الحالة على مستوى المزوّد `[408, 500, 502, 503, 504]`. لا يتم التفعيل لأخطاء مستوى الحساب (معظم 401/403/429 — فتلك تخص فترة التبريد أو القفل).

**التعافي الكسول:** عندما تنتهي صلاحية `OPEN`، تقوم `getStatus()` و`canExecute()` و`getRetryAfterMs()` بتحديث الحالة إلى `HALF_OPEN`. وتؤدي عمليات القراءة نفسها (والإخفاق التالي) إلى تحلّل حالة `DEGRADED` القديمة وعودتها إلى `CLOSED`. لا حاجة إلى مؤقّت يعمل في الخلفية.

---

### تبريد المزوّد العام الاختياري (بوابة النافذة الزمنية)

تحتفظ طبقة رابعة **اختيارية (opt-in)** (`PROVIDER_COOLDOWN_ENABLED`، الافتراضي **معطّل**) بذاكرة عابرة للطلبات عن المزوّدات الفاشلة في `open-sse/services/providerCooldownTracker.ts`، ويستشيرها حلّ أهداف combo بحيث تتوقف طلبات combo المتتالية عن إعادة المرور على مزوّد فشل للتوّ. تحترم الإدخالات على مستوى المزوّد بوابة النافذة الزمنية في `PROVIDER_PROFILES`:

| الملف التعريفي | يُفعَّل بعد (`providerFailureThreshold`) | خلال (`providerFailureWindowMs`) | يُبرَّد لمدة (`providerCooldownMs`) |
| -------------- | ---------------------------------------: | -------------------------------: | ----------------------------------: |
| OAuth          |                                     `10` |                          `15min` |                              `5min` |
| API key        |                                     `15` |                          `30min` |                             `10min` |

تحت العتبة، **لا** يُعتبر المزوّد في حالة تبريد؛ ويمحو النجاحُ النافذةَ الزمنية. أما الإدخالات على مستوى الاتصال (`provider:connectionId`) فتحتفظ بدلاً من ذلك بالتراجع الأُسّي `minRetryCooldownMs → maxRetryCooldownMs`. التجاوزات: `OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`. حارس الانحدار: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. فترة تهدئة الاتصال (Connection Cooldown)

**النطاق:** اتصال/حساب/مفتاح واحد لمزوّد معيّن.

**الغرض:** تخطّي مفتاح واحد معطوب بينما تستمر الاتصالات الأخرى لنفس المزوّد في تقديم الخدمة.

**التنفيذ:**

- وضع علامة "غير متاح": `src/sse/services/auth.ts::markAccountUnavailable()`
- الاختيار: `getProviderCredentials*` في نفس الملف
- حساب فترة التهدئة: `open-sse/services/accountFallback.ts::checkFallbackError()`
- الإعدادات: `src/lib/resilience/settings.ts`

**الحقول لكل اتصال:**

- `rateLimitedUntil` — الطابع الزمني الذي تنتهي عنده فترة التهدئة
- `testStatus: "unavailable"`
- `lastError`، `lastErrorType`، `errorCode`
- `backoffLevel` — عدّاد التراجع الأسي (exponential backoff)

**فترات التهدئة الافتراضية:**

- أساس OAuth: ‏5 ثوانٍ
- أساس مفتاح API: ‏3 ثوانٍ
- مفتاح API مع 429: يُفضِّل ترويسات `Retry-After`/reset القادمة من المصدر أو نص إعادة التعيين القابل للتحليل
- التراجع: `baseCooldownMs * 2 ** failureIndex`

**حماية ضد القطيع المزمج (anti-thundering-herd):** تمنع الأعطال المتزامنة من إطالة فترة التهدئة بشكل مفرط أو من زيادة `backoffLevel` مرتين.

**أخطاء 429 الخاصة بحدّ التزامن لا تتسلّق سلّم التراجع.** الخطأ `429` الذي يُبلغ متنه عن
حدّ للتزامن ("too many concurrent requests"، "concurrency limit"، "parallel request
limit"، GLM `并发数过高`) يعني أن الحساب سليم لكنه مشغول.
تُعيد `checkFallbackError()` السبب `concurrency_limited`: انتقل فورًا إلى الاتصال
التالي، وبرّد هذا الاتصال لمدة ثابتة `CONCURRENCY_LIMIT_COOLDOWN_MS` (ثانية واحدة) أو
حسب تلميح إعادة المحاولة من المصدر، وأبقِ `backoffLevel` دون تغيير، واضبط `skipProviderBreaker`.
ولا يزال متن الحصة الصريح هو الغالب، فالمتن الذي يطابق أيضًا نمط حصة يبقى حُكمًا
بحصة. الكشف: `looksLikeConcurrencyLimit()` في `src/shared/utils/classify429.ts`؛
الحكم: `open-sse/services/accountFallback/concurrencyLimit429.ts`. الدالة `classify429()`
(وهي `FailureKind` الخاصة بقاطع الدائرة) لم تتغيّر وما زالت تقرأ `rate_limit` لهذه المتون.

**توقّف محتوى البثّ لا يُبرّد الحساب.** عندما يستسلم مراقب توقّف المحتوى
(`open-sse/utils/streamHandler.ts`) عن بثٍّ لم يُرسل أي مخرجات من النموذج في
الوقت المحدد، تُسجّل `markAccountUnavailable()` الخطأ على الاتصال لكنها لا تضبط أي
فترة تهدئة: فالتوقّف يخصّ ذلك الطلب، وغالبًا ما يكون دورة استدلال طويلة لم تُصدر
مخرجات بعد. يمكن للمشغّلين إعادة تفعيل التهدئة عبر `resilienceSettings.streamStallCooldown.enabled`
(الافتراضي `false`).

**إطارات الاستدلال تعيد تشغيل ميزانية توقّف المحتوى.** يمكن لنموذج استدلالي أن يفكّر
لدقائق قبل أول رمز مرئي له: فـ Claude يبثّ إطارات `thinking_delta` التي قد يكون
نصّ تفكيرها فارغًا، وواجهة Responses API تبثّ عنصر استدلال تلو الآخر.
تتعرّف `isReasoningProgressFrame()` (`open-sse/utils/streamReadiness.ts`) على
هذه الإطارات، ويعيد المراقب تشغيل ميزانيته عند كل واحد منها بدلًا من إلغاء
الدورة. ومع ذلك فهي ليست مخرجات نموذج، لذا فالدورة التي تنتهي باستدلال فقط تُبلَّغ
كفارغة، والدورة التي تتوقف عن الاستدلال وتُرسل نبضات (heartbeats) فقط ما تزال تُفعّل
المراقب.

إطارات `reasoningContentEvent` الثنائية في Kiro ذات التوقيع غير الفارغ تحافظ على
نشاط الاستدلال هذا عبر المنفّذ (executor) كدلتا `reasoning_content` فارغة. لا يتم
تمرير التوقيع. البيانات الوصفية والإطارات غير المكتملة والتواقيع الفارغة لا تعيد تشغيل
ميزانية المحتوى؛ وما زالت مهلة البثّ النشط المستقلة وإلغاء العميل
سارية (`open-sse/executors/kiro/reasoning.ts`).

**الحالات النهائية (ليست فترات تهدئة):**

- `banned` — تضبطها آلية كشف الكلمات المحظورة / حظر الحساب (انظر [BAN_DETECTION](../security/BAN_DETECTION.md))، وثلاثة رفوض متتالية من المصدر لكل طلب (`request_rejected`، مثل خطأ Anthropic OAuth 403 "Request not allowed" — `open-sse/services/requestRejectedStreak.ts`)؛ أما الرفض الواحد فيُبرّد الاتصال فقط
- `expired` (تتحوّل إلى حالة نهائية بعد محاولات إعادة محدودة — `EXPIRED_RETRY_MAX = 3` مع تراجع أسي — بحيث يمكن لأخطاء OAuth العابرة أن تتعافى ذاتيًا قبل إلغاء تنشيط الحساب نهائيًا)
- `credits_exhausted`

تبقى هذه الحالات حتى تتغيّر بيانات الاعتماد أو يعيد المشغّل ضبطها. لا تكتب فوق الحالات النهائية بحالة تهدئة عابرة.

**التعافي الكسول:** عندما ينقضي `rateLimitedUntil`، يصبح الاتصال مؤهلًا مجددًا. وعند الاستخدام الناجح، تمسح `clearAccountError()` جميع حقول الخطأ.

### جدار استخدام Claude OAuth: مسار أولوية أدنى + إعادة تعيين حدّ الجلسة

**النطاق:** اتصال اشتراك Claude واحد (OAuth). كلتا الميزتين **اختياريتان لكل
اتصال** (تعديل الاتصال ← قسم Claude ← `lowPriorityMode` / `autoLimitReset` في
`providerSpecificData`، وكلاهما معطّل افتراضيًا) وتعكسان أمرَي `/low-priority` و
`/limit-reset` في Claude Code (تم التقاط عقد الواجهة السلكية من Claude Code 2.1.263).

**التنفيذ:**

- آلة الحالات + تصنيف الاستجابة: `open-sse/services/claudeLowPriority.ts`
- عميل حالة/مطالبة إعادة التعيين: `open-sse/services/claudeLimitReset.ts`
- خطّاف المنفّذ (حقن الترويسات + إعادة المحاولة على نفس الحساب): `open-sse/executors/base.ts::execute()`
- استمرارية التفعيل الاختياري: `src/lib/providers/requestDefaults.ts::normalizeProviderSpecificData()`

**المُحفِّز:** جدار الاستخدام ذو الساعات الخمس — خطأ `429` تحمل ترويساته
`anthropic-ratelimit-unified-status: rejected` و، عندما يكون الحساب مؤهلًا،
`anthropic-ratelimit-unified-slow-offer: treatment`. لا يُرسَل أي شيء قبل أول خطأ 429 لذلك الجدار؛
أما خطأ 429 المفاجئ بدون الترويسات الموحّدة فيمرّ عبر مسار التهدئة العادي.

**مسار الأولوية الأدنى** (`lowPriorityMode`):

- عند بلوغ الحد الأقصى (wall) مع رمز 429، يقبل المنفِّذ العرض ويعيد المحاولة فورًا على **نفس** الحساب مع الترويسة `anthropic-usage-limit: slow`؛ تبقى المسار (lane) نشطًا حتى وقت إعادة التعيين المُعلَن في `anthropic-ratelimit-unified-reset` (مع مهلة سماح +60 ثانية)، ويحمل كل طلب ضمن هذه النافذة تلك الترويسة. لا يصل رمز 429 المُعترَض أبدًا إلى `handleChatCore`، لذا **لا** يُوضَع الاتصال في فترة تبريد (cooldown) ولا يُدوَّر إلى حساب آخر.
- الترويسة `anthropic-ratelimit-unified-slow-status` في الاستجابات اللاحقة: القيمتان `active` / `not_needed` تُبقيان المسار؛ أما `slot_busy` (429) أو `529` فينتظران القيمة المُعلنة من الخادم في `anthropic-ratelimit-unified-slow-retry-after` (الافتراضي 20 ثانية، مقيّدة بين 5–600 ثانية، مع اهتزاز عشوائي ±30%) ثم يعيدان المحاولة، ضمن حد أقصى يحدده `anthropic-ratelimit-unified-slow-max-wait` (الافتراضي 20 دقيقة، مقيّد بين دقيقة واحدة و6 ساعات) — بعد ذلك ينتهي المسار وتمنع فترة تهدئة مدتها 10 دقائق إعادة قبوله. كما يُقيَّد الانتظار إضافيًا بما تبقّى من مهلة بدء الطلب الخاص نحو المصدر العلوي (`resolveFetchStartTimeout`، الافتراضي 10 دقائق) مطروحًا منها هامش 5 ثوانٍ: فبدون هذا القيد، سيتجاوز الحد الأقصى الافتراضي للانتظار (20 دقيقة) عمر الطلب نفسه، وستُقطَع فترة السكون في منتصف الانتظار، فيظهر خطأ `TimeoutError` بدلًا من الإنهاء السلس عبر `max_wait` متبوعًا بفترة التهدئة.
- القيم `weekly_limit` / `budget_exhausted` / `off` / `ineligible`، أو انتقال نافذة الخمس ساعات (rollover)، أو `ineligible` مع `anthropic-ratelimit-unified-overage-in-use: true` (الذي ينهي المسار بوصفه `extra_usage` مهما كانت الحالة، لأن الاستهلاك الإضافي المدفوع يغطي الآن الحد) — كلها تُنهي المسار؛ ثم تتدفق الاستجابة إلى مسار التبريد الاعتيادي. وتُحفَظ حالة `budget_exhausted` حتى موعد إعادة تعيين الميزانية المُعلَن (≤ 8 أيام).
- يُنفَّذ فحص الحد (wall) بعد عمليات إعادة المحاولة الداخلية التي يجريها المنفِّذ نفسه استجابةً لرمز 400 ضمن المحاولة الواحدة (تحرير السياق، وتقييدات thinking/effort، والتعلّم التلقائي للمعاملات)، لذا فإن رمز 429 الخاص بالحد الذي لا يظهر إلا في إحدى تلك المحاولات المُعادة يُعترَض مع ذلك بدلًا من الوصول إلى مسار التبريد.
- الحالة محفوظة في الذاكرة لكل اتصال (إعادة التشغيل تكلّف رمز 429 إضافيًا واحدًا عند الحد لإعادة القبول).

**إعادة تعيين حد الجلسة** (`autoLimitReset`، يُجرَّب قبل المسار عندما يكون كلاهما مفعّلًا):

- `GET https://api.anthropic.com/api/oauth/usage?at_wall=1&skip_spend=1` ← كتلة `juniper_tide`؛ وعندما تكون `arm: "reset"` و`available: true`، يُرسَل `POST https://api.anthropic.com/api/organizations/{orgUUID}/reset_rate_limits` مع `{ "program": "juniper_tide" }` (معرّف UUID الخاص بالمؤسسة من `providerSpecificData.organizationUUID`، مع الرجوع إلى قيمة التهيئة الاحتياطية).
- `result: reset|not_limited` ← يُعاد الطلب بالسرعة الكاملة (بدون ترويسة slow). القيمتان `already_used` / `not_offered` تُخزِّنان قيمة `next_available_at` مؤقتًا (الافتراضي أسبوع واحد)؛ وأي فشل يؤدي إلى تراجع (backoff) مدته 15 دقيقة. إعادة التعيين متاحة مرة واحدة أسبوعيًا ولا تزال تُحتسَب ضمن الحد الأسبوعي.

اختبارات الحماية من الانحدار: `tests/unit/claude-low-priority-mode.test.ts`، و`tests/unit/claude-limit-reset.test.ts`، و`tests/unit/claude-low-priority-executor.test.ts`.

### تقارب الجلسات (#7274)

**النطاق:** جلسة عميل واحدة (ترويسة `X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`) مثبَّتة على اتصال واحد، لأي مزوّد.

**الغرض:** إبقاء وكيل متعدد الأدوار (Claude Code، aider، الوكلاء المخصصون) على الحساب نفسه عبر الطلبات، مما يقلل فقدان السياق بين الحسابات وتكرار أخطاء 429 الناتجة عن البدء البارد لدى المزوّدين الذين يحتفظون بحالة جلسة لكل حساب.

**التنفيذ:**

- استنتاج مدة الصلاحية (TTL): `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- اختيار/إنشاء التثبيت: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- استخراج الترويسة (عام، لأي مزوّد): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- جدول التثبيت الدائم: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- الإعداد: `sessionAffinityTtlMs` (مدة الصلاحية العامة بالمللي ثانية، والقيمة `0` تعطّل الميزة) — `src/lib/db/settings.ts`. أُعيدت تسميته من الإعداد القديم الخاص بـ Codex فقط `codexSessionAffinityTtlMs` عبر الترحيل `124_generic_session_affinity_ttl.sql`، الذي ينقل أي مدة صلاحية مضبوطة سابقًا لـ Codex لتصبح الافتراضي الجديد.

قبل #7274، كانت الدالة `resolveSessionAffinityTtlMs()` تُعيد `0` فورًا لكل مزوّد عدا `codex`، لذا لم يكن لإعداد مدة الصلاحية (ولترويسات الجلسة) أي أثر في أي مكان آخر، رغم أن آلية التثبيت واستخراج الترويسة كانت مستقلة عن المزوّد أصلًا. أزال الإصلاح ذلك الإرجاع المبكر؛ وأصبحت مدة الصلاحية تُطبَّق الآن بشكل موحّد على كل مزوّد فور ضبطها عموميًا فوق `0`.

لا تُمرَّر ترويسات تقارب الجلسات الثلاث أبدًا إلى المصدر العلوي — فالمنفِّذون يبنون ترويساتهم العلوية من الصفر بدلًا من تمرير ترويسات العميل كما هي، لذا تبقى مجرد معرّف ارتباط داخلي فقط.

### عقود إيجار الاتصالات الحصرية للجلسات المُدارة

**النطاق:** عميل/جلسة HTTP مُدارة نشطة واحدة تمتلك اتصال OmniRoute واحدًا مؤهلًا.

**الغرض:** توفير ملكية حصرية دائمة للاتصال للعملاء الذين يحتاجون إلى حاجز توجيه صارم عبر الطلبات. يختلف هذا عن تقارب الجلسات، الذي يمثّل تفضيلًا مرنًا للاستمرارية: فعقد الإيجار الحصري يُبقي حالة دورة الحياة في SQLite، ويفرض تفرّد المالك النشط والاتصال النشط على مستوى النظام كله، ويرفض الجيل (generation) القديم قبل إرسال الطلب إلى المزوّد.

الميزة اختيارية لكل مفتاح API. يجب أن يمتلك المفتاح المُدار النطاق `lease:exclusive` وقائمة `allowedConnections` صريحة غير فارغة. يمكن لأي عميل HTTP استخدام نقطة نهاية دورة الحياة؛ ولا يلزم اسم عميل أو user-agent أو مزوّد أو طريقة OAuth أو نموذج. يمتلك عقد الإيجار اتصالًا لا نموذجًا، لذا فإن تغيير النموذج يُبقي الارتباط ما دام الاتصال مؤهلًا في الوضع الطبيعي. وتظل قواعد النماذج والحصص والسلامة والتبريد وقوائم السماح الاعتيادية هي المرجعية النهائية، وقد تنقل الجيل نفسه إلى اتصال آخر مؤهل ومتاح.

تتم دورة الحياة عبر `POST /api/v1/session-leases` مع إجراءات JSON هي `acquire` و`renew` و`release`.
تحمل طلبات الاستدلال المُدارة القيمة غير الشفافة `X-OmniRoute-Lease-Owner` وقيمة `X-OmniRoute-Lease-Generation` الدقيقة. يستخدم المالك `vlo_` متبوعًا بـ 43 حرفًا بترميز base64url؛ ولا تُخزَّن سوى تجزئة SHA-256 الخاصة به. كما يربط كل حاجز إرسال نهائي معرّف مفتاح API الموثّق ومعرّف الاتصال النشط. تُزال ترويسات التحكم في التأجير من السجلات ولقطات الطلبات المحتفظ بها وترويسات المنفّذ في المنبع.

إذا كان لدى التوجيه العادي مرشحون مُدارون مؤهلون لكن كل مرشح حر مشغول بتأجير نشط أجنبي، فإن OmniRoute يُعيد HTTP `429`، ورمز lease-capacity-unavailable، وحالة waiting-for-capacity، وقيمة `Retry-After` محدودة مشتقة من أقرب تاريخ انتهاء صلاحية ذي صلة. الأهلية الفارغة العادية ليست تنازعًا على التأجير، وتحتفظ بدلالات خطأ التوجيه القائمة.

تظل الآليات ذات الصلة منفصلة:

- إشغال جلسات OAuth هو توزيع مرن محلي على مستوى العملية لحسابات OAuth.
- تمنح سيمافورات الحساب تصاريح تزامن الطلبات وتنتهي عند اكتمال الطلب.
- تأجيرات الجلسات المُدارة الحصرية هي ملكية دورة حياة متينة مع حاجز جيل.

---

## 3. قفل النموذج (Model Lockout)

**النطاق:** ثلاثية المزوّد + الاتصال + النموذج.

**نطاق المفتاح حسب الحالة:** حالة الفشل هي التي تحدد المفتاح الذي يُكتب عليه القفل
(`resolveLockoutScope()` في `open-sse/services/accountFallback/exactModelLock.ts`):

- `429` / `403` / `402` — إشارة حصة أو استحقاق — يُقفل **عائلة الحصة**:
  في حالة codex النطاق الكامل `codex` / `spark` (كل نموذج `gpt-5*` في
  الاتصال)، وفي المزوّدات الأخرى `getQuotaScopedModelForProvider()`.
- `404` يقفل النموذج المجرد (`getModelLockKey()` يضيّق نطاق `not_found`).
- أي حالة أخرى — أعطال النقل/الخادم `5xx` و`502` المُصنَّع داخليًا من OmniRoute
  الناتج عن التحقق من الجودة — يقفل مجموعة
  المزوّد/الاتصال/النموذج **الدقيقة** فقط. تدفّق تالف على نموذج واحد ليس دليلاً
  على حصة الحساب؛ قبل هذه القاعدة، كان ردّ واحد فارغ على
  `codex/gpt-5.6-luna` يُخرج كل نماذج `gpt-5*` في ذلك الاتصال من
  التوجيه لمدة 2–30 دقيقة (بتصاعد) بينما حصتها سليمة تمامًا.
- خيار `scope` الصريح من المُستدعي يتغلب دائمًا (Antigravity يمرر `"exact"`).

**الغرض:** تجنّب تعطيل اتصال كامل عندما يكون نموذج واحد فقط غير متاح أو محدود الحصة.

**أمثلة:**

- مزوّدات الحصة لكل نموذج التي تُعيد 429
- المزوّدات المحلية التي تُعيد 404 لنموذج واحد مفقود
- أعطال أذونات الوضع/النموذج الخاصة بالمزوّد (مثل أوضاع Grok)

**التنفيذ:** `open-sse/services/accountFallback.ts` — `lockModel()`، `clearModelLock()`، `getAllModelLockouts()`.

### لوحة فترات تبريد النماذج (v3.8.0)

واجهة المستخدم: الإعدادات ← Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

تعرض القفلات النشطة مع: المزوّد، الاتصال، النموذج، السبب، expiresAt. يمكن للمشغّلين إعادة تفعيل نموذج يدويًا من البطاقة.

**واجهة REST API:**

- `GET /api/resilience/model-cooldowns` — عرض القفلات النشطة
- `DELETE /api/resilience/model-cooldowns` — إعادة التفعيل اليدوي. الجسم: `{provider, connection, model}`. المصادقة: management.

### مدير فترات التبريد (Cooldown Manager)

واجهة المستخدم: المراقبة ← Cooldown Manager (`src/app/(dashboard)/dashboard/resilience/cooldowns/`).

صفحة واحدة لكل اتصال خارج التوجيه لسبب مؤقت، بدلاً من
فتح صفحة كل مزوّد على حدة. تعرض فترات تبريد الاتصالات وقفلات النماذج والحالات
النهائية، وتزيلها لكل اتصال، أو لمجموعة مختارة، أو لجميع اتصالات مزوّد معين،
وتُحرر أكثر قواعد التبريد تعديلاً: `streamStallCooldown.enabled` و
`connectionCooldown` الخاص بـ OAuth / مفتاح API (فترة التبريد الأساسية وخطوات
التراجع القصوى) (تُحفظ عبر
`PATCH /api/resilience`). الحالات النهائية (`banned`، `expired`، `credits_exhausted`)
تُعرض لكن لا تُزال هنا أبدًا.

**واجهة REST API** (`src/lib/resilience/cooldownManager.ts`، المصادقة: management):

- `GET /api/resilience/cooldowns[?provider=]` — الاتصالات مع الحالة، ووقت التبريد المتبقي،
  ومستوى التراجع، ونوع آخر خطأ، وقفلات النماذج (بدون بيانات اعتماد)
- `POST /api/resilience/cooldowns` — الجسم `{connectionIds: string[]}` أو
  `{all: true, provider?}`؛ يُعيد `{cleared, unchanged, skippedTerminal, lockoutsCleared}`

### واجهة إعدادات القفل + الاسترداد بالاضمحلال عند النجاح (v3.8.23)

تحوّل قفل النموذج من سلوك ثابت مفعّل دائمًا إلى ميزة قابلة للتكوين بالكامل
واختيارية (opt-in) لها بطاقة إعدادات خاصة ومسار استرداد ذاتي الإصلاح.

**بطاقة الإعدادات:** الإعدادات ← Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
هذه **مختلفة** عن `ModelCooldownsCard` للقراءة فقط أعلاه (التي _تعرض_ فقط
القفلات النشطة) — البطاقة الجديدة _تُكوّن المعاملات_. القيم الافتراضية
موجودة في `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| الإعداد                 | الافتراضي                        | المعنى                                                      |
| ----------------------- | -------------------------------- | ----------------------------------------------------------- |
| `enabled`               | `false`                          | المفتاح الرئيسي — قفل النموذج **معطّل افتراضيًا**.          |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | حالات المزوّد التي تُحسب فشلاً على مستوى النموذج.           |
| `baseCooldownMs`        | `120_000` (120 ثانية)            | مدة القفل الأولية لأول فشل.                                 |
| `maxCooldownMs`         | `1_800_000` (30 دقيقة)           | الحد الأقصى لفترة التبريد المتصاعدة.                        |
| `maxBackoffSteps`       | `10`                             | الحد الأقصى لخطوات تصعيد التراجع الأُسّي.                   |
| `useExponentialBackoff` | `true`                           | ما إذا كانت الإخفاقات المتكررة تُصعّد فترة التبريد أُسّيًا. |

تُحفظ الإعدادات عبر مخزن الإعدادات العادي وتُتحقق عبر
مخطط إعدادات المرونة؛ البطاقة تحدّ `baseCooldownMs`/`maxCooldownMs`
(مع `maxCooldownMs ≥ baseCooldownMs`) و`maxBackoffSteps`.

**الاسترداد بالاضمحلال عند النجاح:** الاسترداد **ليس** مجرد انتهاء المؤقت. الردّ
السليم يُنقص عداد فشل النموذج تدريجيًا بحيث يتوقف النموذج الذي تعافى
في منتصف النافذة عن التصعيد (ويتم مسحه) قبل انتهاء مؤقته. عند
هدف combo ناجح، يستدعي `open-sse/services/combo.ts` الدالة `decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`)، التي **تُنصّف** قيمة
`failureCount` المخزنة (`Math.floor(failureCount / 2)`)؛ وعندما تصل إلى `0` يُحذف
إدخال القفل بالكامل. الدالة المقابلة `recordModelLockoutFailure()`
تزيد العداد (وتُصعّد فترة التبريد) عند الإخفاقات ضمن
نافذة التصعيد. هذا الاضمحلال عند النجاح يأتي بالإضافة إلى انتهاء المؤقت العادي —
كلا المسارين يمكنه إعادة تفعيل نموذج.

**الحالة:** تُحفظ القفلات **في الذاكرة** (`Map`s لكل عملية من
`ModelLockoutEntry` مفهرسة بـ `provider:connectionId:model`، وأقفال النطاق الدقيق بـ
`provider:connectionId:exact:model`)، ولا تُحفظ في
قاعدة البيانات — تُفقد عند إعادة التشغيل. _الإعدادات_ محفوظة بشكل دائم؛ أما
_حالة_ القفل النشطة فهي مؤقتة زائلة.

---

## 4. التحكم في التزامن للحصة المشتركة (Quota-Share) (v3.8.36)

غالبًا ما تقبل حسابات الاشتراك (GLM وMiniMax وغيرها) حوالي 1–3 طلبات
متزامنة فقط؛ وتجاوز ذلك يؤدي إلى أخطاء 429 وفترات تهدئة. وتكون هذه المشكلة حادة في
تركيبات **مشاركة الحصة** (`qtSd/…`)، حيث تتشارك عدة مفاتيح API حسابًا واحدًا
في الطرف البعث (upstream). ثلاث طبقات تمنع إغراق الحساب المشترك.

### حد التزامن لكل اتصال (`max_concurrent`)

يمكن لكل اتصال مزوّد أن يعلن عن سقف تزامن `max_concurrent`
(`provider_connections.max_concurrent`، يُضبط في نافذة الاتصال / API / قاعدة البيانات).
اتركه فارغًا لعدم وجود حد. هذا هو المفتاح الوحيد الذي يقود طبقة التسلسل
أدناه — اضبطه على التزامن الحقيقي للحساب (مثل GLM ~1، وMiniMax ~2).

### حدود التزامن لكل نموذج (`modelConcurrency`)

يمكن للاتصال أن يعلن إضافيًا عن سقوف تزامن دقيقة لكل نموذج
داخل خريطة `rateLimitOverrides` الخاصة به:

```json
{
  "rateLimitOverrides": {
    "maxConcurrent": 4,
    "modelConcurrency": { "glm-5": 1, "glm-4.7": 3 }
  }
}
```

اضبطه في نافذة الاتصال (**Rate limit overrides → Per-model
concurrency caps**، سطر واحد بصيغة `model=cap` لكل نموذج) أو عبر
`PATCH /api/providers/[id]` بنفس بنية JSON. الدلالات الأساسية:

- **على مستوى الاتصال مقابل خاص بالنموذج:** يبقى `maxConcurrent` هو السقف
  المشترك على مستوى الاتصال بأكمله. عندما ينطبق كلاهما، يتم الحصول على كلا البوابتين
  بشكل ذري في نفس البوابة المركّبة
  (`global → provider → account → model`)؛ والسلوك الفعلي هو
  الحد الأكثر صرامة المنطبق.
- **مطابقة دقيقة لمفتاح النموذج:** المفتاح هو سلسلة النموذج الممررة إلى
  المنفّذ بعد تحليل التوجيه — عادةً معرّف النموذج البعث المجرد
  (`glm-5`)، وليس اسمًا مستعارًا من جانب العميل بصيغة `provider/model` (فـ`zai/glm-5` لا
  يطابق `glm-5`). القيم هي سقوف أعداد صحيحة موجبة للطلبات المتزامنة.
- **طابور محلي، دون اكتشاف:** تنتظر الطلبات الزائدة في طابور محلي وفق
  دلالات الطابور/المهلة الحالية (أخطاء قبول مُنمّطة `SEMAPHORE_TIMEOUT` /
  `SEMAPHORE_QUEUE_FULL`). لا يكتشف OmniRoute سياسة الطرف البعث ولا
  يستنتجها — بل يفرض السقوف الدقيقة التي ضبطها المشغّل
  بالضبط. بوابة النموذج المشبعة لا تعطّل المزوّد أبدًا ولا
  تنشئ حظرًا دائمًا للنموذج؛ يبقى سلوك 429/التهدئة/الرجوع الاحتياطي (fallback) في الطرف البعث هو
  خط الدفاع الأخير للأخطاء.
- **نطاق لكل اتصال، لكل عملية:** السقوف محددة لكل اتصال في قاعدة البيانات
  ومحفوظة في الذاكرة، لذا فإن اتصالين يعيدان استخدام نفس مفتاح API البعث
  لا ينسّقان فيما بينهما.
- **غير المضبوط يعني لا تغيير:** حذف الخريطة (أو ترك حقل
  لوحة التحكم فارغًا) لا يضيف أي بوابة نموذج. مثال على إعداد دون
  افتراض أي حد عام للمزوّد:

```text
glm-5=1
glm-4.7=3
```

### تسلسل طلبات مشاركة الحصة

عندما يستهدف إرسال مشاركة حصة اتصالًا يعلن عن قيمة موجبة
لـ`max_concurrent`، تُسلسَل الطلبات المتزامنة إلى ذلك **الحساب** عبر
إشارة (semaphore) لكل اتصال (مفتاح `qsconn:<connectionId>`): الطلبات الزائدة **تنتظر في
الطابور** بدلاً من إغراق الحساب. وهو **متساهل عند الفشل (fail-open)** — فالطابور
المشبع أو المهلة المنتهية يتابعان دون خانة بدلاً من رفض أي طلب قابل
للإرسال. بدّله في **Settings → Resilience → Quota-share per-connection
concurrency** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`، مفعّل
افتراضيًا). بدون سقف `max_concurrent` يبقى السلوك دون تغيير.

> بوابة توجيه مشاركة الحصة (`selectQuotaShareTarget`، DRR + P2C) هي نفسها
> متساهلة عند الفشل وتقوم فقط _بتخفيض أولوية_ الاتصال الذي بلغ السقف — ومع
> تجمع باتصال واحد لا يمكنها فرض حد صارم، لذا فإن هذه الإشارة هي ما
> يحتوي الطوفان فعليًا.

### إعادة المحاولة الواعية بالتهدئة للتركيبات

لكل استراتيجية تركيبة (عند تفعيلها)، الطلب الذي كان سيُبلور خطأ 429
لفترة تهدئة مؤقتة قصيرة ينتظر انقضاءها ويُعيد الإرسال بدلاً من
إرجاع 429 — وهذا يغطي نوافذ TPM/RPM من فئة Gemini (مهلة إعادة المحاولة ~60 ثانية)
على التركيبات متعددة النماذج، مثل بلوغ كلا هدفي تركيبة ثنائية النماذج حدًا للمعدل
خاصًا بكل نموذج. مقيّد بـ`comboCooldownWait` (`enabled` و`maxWaitMs` و`maxAttempts`
و`budgetMs`) في **Settings → Resilience**. لا ينتظر أبدًا عند `quota_exhausted`
(مقفل حتى منتصف الليل) أو أسباب المصادقة/عدم الوجود.

تغطي نفس البوابة حالة ما قبل الإرسال (#16319): عندما يتم تخطي كل أهداف
التركيبة قبل أي محاولة لأن نموذجه يقع في قفل
مؤقت قصير، ينتظر مسار المحاولات الصفري انقضاء القفل ضمن نفس
السقوف ويُعيد الإرسال، بدلاً من الإجابة بـ
`503 ALL_TARGETS_SKIPPED` بلا تلميحات. عندما لا يُسمح بأي انتظار (بلوغ السقف، أو استنفاد المحاولات
أو الميزانية، أو الميزة معطّلة)، تتم ترقية الاستجابة النهائية إلى
`429 rate_limit_error` حاملةً `retry_after` / `reset_at` من أقرب
انتهاء لقفل مؤقت؛ أما أقفال الحصة والمصادقة وعدم الوجود فتبقي 503 بلا تلميحات.

---

## 5. التحكم في قبول طابور الطلبات (v3.8.49 · issue #6593)

**النطاق**: طابور تحديد المعدل المحلي لكل مزوّد+اتصال (`open-sse/services/rateLimitManager.ts`، المدعوم بـ Bottleneck)، وهي طبقة واحدة أسفل الآليات الثلاث المذكورة أعلاه.

**`maxWaitMs` يحدّد زمن الانتظار في الطابور؛ `executionMaxWaitMs` يحدّد زمن التنفيذ.**
كلاهما منفصل عمدًا عن الآخر، ولا يغذّي أحدهما الآخر.

`resilienceSettings.requestQueue.maxWaitMs` هو **ميزانية الانتظار في الطابور**: يغطي الانتظار للحصول على خانة من المزوّد ثم البقاء في حالة QUEUED، ويتم مسح مؤقّته في اللحظة التي تغادر فيها المهمة حالة QUEUED وتبدأ التنفيذ (`rateLimitManager.ts`، `wrappedFn`). الطلب الذي يتجاوزها لا يصل أبدًا إلى المصدر upstream. القيمة الافتراضية 30000ms، ويوفّرها `DEFAULT_REQUEST_QUEUE_MAX_WAIT_MS` في `src/lib/resilience/settings.ts` ويثبّتها `tests/unit/ratelimit-admission-control-6593.test.ts`، لذا فإن أي تغيير فيها يجعل ذلك الاختبار يفشل بدلًا من ترك هذه الفقرة قديمة بصمت.

`resilienceSettings.requestQueue.executionMaxWaitMs` هو ما يستلمه Bottleneck كـ `expiration` للمهمة، ولا يبدأ مؤقّته إلا بعد الإرسال للتنفيذ. إنه شبكة أمان للمنفّذين الذين لا يملكون مهلة upstream خاصة بهم، ويُرفع إلى مهلة بدء الجلب الخاصة بالمنفّذ عندما تكون أطول، بحيث لا يمكنه قطع استجابة سليمة قيد النقل. القيمة الافتراضية 600000ms (10 دقائق).

تغذية ميزانية الطابور في `expiration` هي ما كان يقتل البوابات غير التزايدية في منتصف الرحلة — فهي تعمل بشكل مشروع لدقائق قبل وصول أول البايتات — ولهذا السبب يُعرَض انتهاء صلاحية التنفيذ كـ `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` (HTTP 504) بينما تحمل ميزانية الطابور رمز مهلة الطابور. يمكن تجاوز أيٍّ منهما عبر `RATE_LIMIT_MAX_WAIT_MS` / `RATE_LIMIT_EXECUTION_MAX_WAIT_MS` (متغيّرات البيئة) أو عبر لوحة التحكم (**Settings ← Resilience**). كلاهما يُحصَر ضمن النطاق 1ms–24h عند التطبيع.

**الأولوية، لكليهما:** متغيّر البيئة يوفّر القيمة _الافتراضية_ فقط. القيمة المحفوظة في `resilienceSettings.requestQueue` (لوحة التحكم / تعديل API، المخزّنة في `key_value`) تتفوّق عليها، وقيمة `rateLimitOverrides.maxWaitMs` / `.executionMaxWaitMs` الخاصة بكل اتصال تتفوّق على تلك. لذلك فإن تعيين متغيّر البيئة على نشرٍ لديه قيمة محفوظة مسبقًا لا يغيّر شيئًا — امسح الإعداد المحفوظ أو حدّثه بدلًا من ذلك.

مدة البقاء في الطابور محدودة بـ `maxWaitMs`؛ أما `maxQueueDepth` أدناه فيحدّ عدد المتصلين الذين يمكنهم الانتظار في الطابور في آنٍ واحد.

**إعادة المحاولة المذكورة في جسم الاستجابة: التنظيم مقابل القفل.** يمكن لجسم استجابة 429 أن يحدّد مدة انتظاره الخاصة (Gemini `RetryInfo.retryDelay`، نص "retry after Ns")، والذي تقرؤه `updateFromResponseBody`. الانتظار الذي يندرج ضمن `maxWaitMs` الخاص بالاتصال هو تنظيم للإيقاع: يفرغ المحدِّد خزّانه لتلك المدة وتُرسَل الاستدعاءات المنتظرة عندما يُعاد ملؤه. أما الانتظار الأطول من `maxWaitMs` فليس شيئًا يمكن للطابور أن يصبر عليه — فـ Gemini يجيب عن الحصة اليومية المستنفدة بـ `retryDelay: "86399s"`. إن `Retry-After` المُرحَّل على استجابة 429 المعاد بناؤها (#16528) يجعل محرّك الاحتياط يقفل النموذج لتلك النافذة أصلًا، لكن إيقاف المحدِّد مؤقتًا عنها أيضًا كان سيظل يعطّل أي استدعاء يصل إلى المفتاح مبكرًا (بعد إعادة تعيين المرونة مثلًا) طوال مدة `maxWaitMs`. عندما يأتي مثل هذا الانتظار من تفصيل Google `RetryInfo` مُنمَّط (مصدر `google_rpc_retry_info`) ويكون محدِّد المفتاح مُوجَّهًا أصلًا إلى النموذج (انظر `getLimiterKey`)، تتحول استجابة 429 إلى قفلٍ للنموذج على ذلك الاتصال بدلًا من ذلك (`lockModelForLongBodyRetry` في `open-sse/services/rateLimitManager/bodyRetryPause.ts`، وبحد أقصى 24h)، ويُترَك المحدِّد دون إيقاف مؤقت. يتخطّى اختيار الحساب ذلك القفل عبر `isModelLocked()`، وكذلك بوابة ما قبل الإرسال للتركيبات للأهداف المثبَّتة على الاتصال. في antigravity، حيث يكون المحدِّد لكل عائلة حصص، يكون القفل على النموذج المحدد بالضبط، مثل أقفال الحصص الأخرى. الاسم الذي طلبه العميل يُقفَل أيضًا عندما يحلّه اسمٌ مستعار إلى ذلك النموذج، لأن تلك الفحوصات تستخدم الاسم المطلوب؛ ويُقفَل بدقة (`lockExactModel`)، لذا فإن اسمًا مستعارًا يعبر عائلة حصص antigravity أو نطاق codex لا يقفل نفسه أبدًا. التلميح النصي، أو `retryDelay` غير المُنمَّط، أو محدِّد يتشاركه الاتصال بأكمله يُبقي على الإيقاف المؤقت. عندما يتوقف المحدِّد الذي أعاد مسار 429 بناءه للتو مؤقتًا، يُرفَض المتصل الذي ينتهي زمن طابوره المتبقّي قبل انتهاء الإيقاف المؤقت فورًا برمز مهلة الطابور (`checkLimiterPause`) بدلًا من انتظار انقضاء ذلك الزمن؛ ويُثبَّت النهاية المسجَّلة قبل بناء المحدِّد، حيث يبدأ Bottleneck ساعة التحديث الخاصة به، وأي تغيير لاحق في الخزّان ينساها. تغطية ذلك في `tests/unit/rate-limit-long-body-retry-lockout.test.ts` و`tests/unit/rate-limit-body-retry-pause.test.ts`.

**`maxQueueDepth` — حدّ القبول الاختياري (جديد).** تحدّد `resilienceSettings.requestQueue.maxQueueDepth` عدد الطلبات التي يمكنها البقاء في الطابور (لم تُرسَل للتنفيذ بعد) لمزوّد+اتصال واحد في آنٍ واحد. عندما يحتوي الطابور أصلًا على `maxQueueDepth` من الطلبات، يُرفَض الطلب الجديد بسرعة بخطأ مُنمَّط `code: "RATE_LIMIT_QUEUE_FULL"` **قبل** أن يصل أصلًا إلى `limiter.schedule()` — لذا يكون الرفض رخيصًا ويحدث قبل أي عمل لاحق لضغط الموجّهات / الترجمة لذلك الطلب. القيمة الافتراضية `0` = معطّل، مع الحفاظ على السلوك الحالي للطابور غير المحدود؛ النطاق 0–100000. يمكن التجاوز عبر `RATE_LIMIT_MAX_QUEUE_DEPTH` (متغيّر بيئة) أو `resilienceSettings.requestQueue.maxQueueDepth` (لوحة التحكم / تعديل API).

فحص القبول نفسه دالة نقية (`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`) بحيث يمكن اختباره وحدةً دون محدِّد Bottleneck حقيقي.

> اقترحت وثيقة RFC التي فتحت #6593 أيضًا علمًا باسم `bypassCompressionOnRateLimit`.
> إن مسار `open-sse/services/compression/` في هذا المستودع هو ضغط الموجّه/السياق
> على طلب LLM الصادر (`chatCore.ts`، حول كتلة
> `resolveCompressionSettings`/`selectCompressionStrategy`)، وليس ضغط استجابة
> HTTP على أجسام 429 المُصنَّعة — فلا يوجد مسار كود مطابق لعلم تجاوز حرفي. كما
> أن خطوة ضغط الموجّه هذه تعمل حاليًا _قبل_ `withRateLimit()` في مسار الطلب،
> لذا فإن إعادة الترتيب لتخطّيها عند رفضٍ بسبب امتلاء قائمة الانتظار يُعدّ
> تغييرًا منفصلًا وأكبر من نطاق هذه المشكلة؛ وقد **لم** يُنفَّذ هنا عن قصد،
> وتُرك كمتابعة لاحقة إذا كانت فائدة توفير وحدة المعالجة المركزية تستحق
> مخاطرة إعادة الترتيب.

### شبكة أمان التفعيل التلقائي لحد المعدل وحماية الاتصال (`rateLimitProtection`)

**شبكة أمان التفعيل التلقائي** (`resilienceSettings.requestQueue.autoEnableApiKeyProviders`، الافتراضي `true`):
افتراضيًا، يُفعّل OmniRoute تلقائيًا حماية قائمة انتظار حد المعدل لجميع اتصالات مزوّدي مفاتيح API النشطة (`getProviderCategory(provider) === "apikey"`). يضمن هذا أن الطلبات الواردة إلى مفاتيح API المنبعية الحساسة للمعدل تُدرج في قائمة الانتظار وتُقيَّد عبر Bottleneck بدلًا من التدفق المفاجئ نحو أخطاء 429 من المنبع. يمكن تجاوز شبكة الأمان عبر متغير البيئة `RATE_LIMIT_AUTO_ENABLE` (`false`/`0`/`off` للتعطيل، `true`/`1`/`on` للفرض)، والذي تكون له الأسبقية على إعداد لوحة التحكم المُخزَّن (**الإعدادات → المرونة** / `PATCH /api/resilience`).

**دلالات `rateLimitProtection` على مستوى كل اتصال:**
تُتتبَّع حماية حد المعدل لكل اتصال عبر الحقل المنطقي `rateLimitProtection` في اتصالات المزوّد (المُخزَّن باسم `rate_limit_protection` في SQLite):

- **التفعيل الصريح (`rateLimitProtection === true`)**: تُفعَّل حماية حد المعدل صراحةً لهذا الاتصال، بغض النظر عن فئة المزوّد أو عمّا إذا كانت شبكة أمان التفعيل التلقائي مُفعّلة.
- **التعطيل الصريح (`rateLimitProtection === false`)**: يُعطّل الحماية الصريحة، لكنه **لا** يُخرج اتصال مفتاح API نشطًا من نطاق شبكة أمان التفعيل التلقائي العامة. في `reconcileEnabledConnections` (`open-sse/services/rateLimitManager.ts`)، تكون `false` و`undefined` متكافئتين: فقط `rateLimitProtection === true` تُعامل بوصفها تجاوزًا صريحًا. إذا كانت `rateLimitProtection` تساوي `false` (أو غير مضبوطة)، فإن اتصال مفتاح API النشط يظل مطابقًا لشرط التفعيل التلقائي ويبقى محميًّا بحد المعدل.
- **لا يوجد استثناء على مستوى الاتصال**: لا يستطيع المشغّل حاليًا التعبير عن "يجب أن يعمل هذا الاتصال النشط الوحيد بمفتاح API دون حماية قائمة انتظار حد المعدل" مع إبقاء التفعيل التلقائي نشطًا للاتصالات الأخرى. لتشغيل اتصالات مفاتيح API دون قوائم انتظار حد المعدل تمامًا، يجب إيقاف شبكة الأمان عالميًا (`RATE_LIMIT_AUTO_ENABLE=false` أو `resilienceSettings.requestQueue.autoEnableApiKeyProviders = false`).

**مسارات الكتابة المدعومة:**

- **`POST /api/rate-limits`**: مسار الكتابة الإداري المدعوم لتبديل `rateLimitProtection` لاتصالٍ ما (`{ connectionId: string, enabled: boolean }`). استدعاؤه مع `enabled: true` يُفعّل الحماية الصريحة؛ واستدعاؤه مع `enabled: false` يُزيل الحماية الصريحة (مع بقاء اتصالات مفاتيح API النشطة مشمولةً بشبكة الأمان العامة إذا كان التفعيل التلقائي مُفعّلًا).
- **`PUT /api/providers/[id]`**: عمدًا **لا** يقبل أو يبدّل `rateLimitProtection` (#11278). إن تحديث بيانات وصف اتصال المزوّد عبر `PUT /api/providers/[id]` لن يغيّر أبدًا حالة حماية حد المعدل المُخزَّنة.

---

## 6. مراقب معدل الإنتاجية للتدفقات البطيئة (#9709)

يكتشف الحارس الاختياري `resilienceSettings.streamRecovery.throughputWatchdog` حالة مجرى علوي ما زال يرسل أجزاءً لكنه يُنتج مخرجات مساعد بمعدل أدنى من معدل المخرجات المفيدة المُهيّأ. وهو متميّز عمدًا عن مهلة الخمول: فنبضات القلب والبيانات الوصفية لا تُعيد ضبط أيٍّ من المؤقتين ولا تُحسب تقدمًا. وهو متميّز أيضًا عن الموعد النهائي الصارم للمحاولة (#9153)، الذي يظل سقف أمان مطلقًا بغض النظر عن جودة المخرجات.

يتطلب المراقب فترة إحماء تليها نافذة متدحرجة كاملة قبل أن يتمكن من الإجهاض. وهو يحسب فروقات النص التزايدية من أحداث مخرجات Chat Completions وResponses API (كبديل تقريبي متحفظ عن بايتات UTF-8)، ويتجاهل الأحداث المقتصرة على الاستخدام والأحداث الفارغة، ويعلّق الحكم ما دامت أحداث استدعاء الأدوات أو الاستدلال جارية. وهو معطّل افتراضيًا ويمكن تفعيله عبر `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`؛ أما النافذة وفترة الإحماء والحد الأدنى للمعدل والحد الأدنى للمخرجات القابلة للقياس فتخضع لحدود طبقة التطبيع الاعتيادية لإعدادات المرونة.

عند تفعيله، لا يُطبَّق إجهاض المراقب إلا على محاولة المجرى العلوي النشطة. قبل أي بايتات مرئية للعميل، قد يُعيد مسار الاسترداد المبكر الحالي للحساب نفسه فتح المحاولة. وبعد الالتزام، لا يُعاد تشغيل التدفق أبدًا بشكل أعمى؛ فلا يمكن سوى عقد الاستمرار الآمن الحالي في منتصف التدفق أن يخيط لاحقةً. ويظل الإنهاء أحادي التنفيذ، بحيث لا تتكرر محاسبة الاستخدام ولا تحرير السيمافور.

---

## 7. إعادة صياغة حالة المجرى العلوي (أخطاء الحصة المُبلَّغ عنها خطأً)

**النطاق:** بوابة علوية واحدة تُبلغ عن نفاد مؤقت للحصة بحالة HTTP خاطئة.

**الغرض:** تصحيح حالة مضللة قبل التصنيف، بحيث ترى الجهات المستهلِكة اللاحقة (محرك التراجع، تجميع combos، الاستجابة الموجهة للعميل) الطبيعة الحقيقية القابلة لإعادة المحاولة للفشل.

تشير بعض البوابات إلى نفاد مؤقت للحصة بحالة HTTP غير قابلة لإعادة المحاولة. يُعيد `agentrouter.org` الحالة `403` (وأحيانًا `400`) مع جسم صيني (`用户额度不足` / `额度不足`) بدلًا من الحالة القياسية `429`. تتعامل عملاء مثل Claude Code مع `403` على أنها دائمة وتُجهض الجلسة، وبدون تصحيح سيصنّفها محرك التراجع على أنها `AUTH_ERROR` بدلًا من حدث حصة.

**التنفيذ:**

- السجل + المطابِق: `open-sse/config/upstreamStatusRestatement.ts` — قائمة قواعد لكل مزوّد (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`)، تُطابَق عبر `applyStatusRestatement()`.
- موضع الاستدعاء: كتلة `providerFailure:` في `open-sse/handlers/chatCore.ts` (حوالي السطر 3654)، مباشرة بعد أن يحلّل `parseUpstreamError()` استجابة علوية ذات حالة خطأ HTTP (`!providerResponse.ok`)، وقبل تشغيل أي تصنيف، بحيث يرى كل مستهلِك لاحق الحالة المصحّحة. أما الأخطاء المضمّنة داخل تدفق SSE بحالة `200` فتتبع مسار تحليل تدفق منفصلًا ولاحقًا و**لا** يغطيها هذا الخطاف اليوم — وهو قيد معروف، ليس مطلوبًا بعد لحالة agentrouter الخاطئة (التي تظهر كحالة خطأ HTTP).
- الأهلية لإعادة المحاولة: `429` موجودة في `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`)، لذا يحمل الخطأ المعاد صياغته نافذة إعادة محاولة حقيقية بدلًا من الظهور كحالة `403` ميتة.
- القيمة التركيبية `60s` لـ `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`) هي فقط ما تخبر به الاستجابة المعاد صياغتها **العميل**؛ وهي ليست بنفسها مدة التهدئة/الحظر الداخلية للاتصال — فذلك يخضع بشكل منفصل لأيٍّ كانت الآلية التي تعالج فعليًا الخطأ المعاد صياغته (التراجع التصاعدي لتهدئة الاتصال، §2، بقاعدة `3s` لمزودي مفاتيح API؛ أو حظر النموذج، §3، لمزودي الحصة لكل نموذج مثل agentrouter). يمكن للموجّه أن يصبح مؤهلًا لإعادة المحاولة داخليًا قبل نافذة الـ 60 ثانية التي يعلنها للعميل — وهو هامش مقصود وليس خطأً.

لا تُعاد صياغة الأخطاء الدائمة (خطأ `无权访问模型` لدى agentrouter — أي لا وصول إلى هذا النموذج) أبدًا: فـ `excludeMarkers` يستخدم حق النقض ضد القاعدة حتى عندما تتطابق `textMarkers`، لذا يحتفظ الخطأ بحالته الأصلية ولا شيء يعيد محاولته إلى الأبد. تستشير `checkFallbackError` (`open-sse/services/accountFallback.ts`) قاعدة تصنيف المزود المطابِقة (`agentrouter-model-access-denied` في `open-sse/config/providerErrorRules.ts`: `reason: "auth_error"`، و`scope: "model"`، وتهدئة أساسية معلنة قدرها `6h`) _قبل_ الإرجاع المبكر العام `FORBIDDEN` لفئة مفاتيح API، وذلك مشروطًا بـ `honorsRuleLockScope(provider)` (#10334 — حاليًا حصري بـ agentrouter عبر قائمة السماح `HONORS_RULE_LOCK_SCOPE_PROVIDERS` في `providerErrorRules.ts`). تتدفق التهدئة المعلنة للقاعدة (6 ساعات) عبر `fallbackResult.baseCooldownMs`، لكنها ما زالت تغذي مسار الحظر الموجود مسبقًا للحصة لكل نموذج (`lockModelIfPerModelQuota()` / `recordModelLockoutFailure()`، دون تغيير بفعل #10334 سوى مصدر التهدئة): إذ تُقصّ إلى `mlSettings.maxCooldownMs` الخاصة بالمشغّل (الافتراضي `1_800_000ms` أي 30 دقيقة)، مثل أي حظر نموذج آخر، ويظل _سبب الحظر المُخزَّن_ هو القيمة الثابتة الموجودة مسبقًا `"forbidden"`، وليس `"auth_error"` الخاصة بالقاعدة — فمدة التهدئة وحدها هي ما يُحترَم من الطرف إلى الطرف، لا سلسلة السبب. ويبقى الاتصال نفسه نشطًا؛ ولا تتأثر النماذج الشقيقة على الاتصال ذاته.

تصل أخطاء الحصة المُعاد صياغتها (`额度不足`) إلى قاعدة مزوّد في بيئة الإنتاج
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`، `scope:
"connection"`، دون فترة تهدئة مُعلنة خاصة بها — ويسري بدلًا من ذلك التراجع المتدرج الافتراضي لطبقة الاستمرارية). منذ ‎#10334، يُستهلَك `scope` في
`ProviderErrorRuleMatch` من الطرف إلى الطرف، لكن **فقط** للمزوّدين المدرجين في
القائمة البيضاء `HONORS_RULE_LOCK_SCOPE_PROVIDERS` (`providerErrorRules.ts` —
حاليًا `"agentrouter"` فقط، ويُتحكَّم فيه عبر `honorsRuleLockScope()`). أما لدى كل
مزوّد آخر فيظل `scope` لأغراض إعلامية فقط، تمامًا كما كان قبل ‎#10334.
يكشف `checkFallbackError` نطاق القاعدة المطابقة على أنه
`fallbackResult.ruleScope`؛ و`isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) هو الحارس المشترك الذي يؤكد أن `ruleScope`
آمن فعلًا ليُحتَرم بوصفه إشارة ذاتية التعافي على مستوى الاتصال بأكمله
(النطاق `"connection"`، والسبب `quota_exhausted`، وليس `permanent` أبدًا،
وليس `creditsExhausted` أبدًا — وهذا دفاع ضد قاعدة مستقبلية تقرن النطاق
`"connection"` بحالة حساب دائمة). هناك مستهلكان يستدعيانه:

- **الاستمرارية** (`markAccountUnavailable()`، `src/sse/services/auth.ts`):
  بدلًا من الوقوع في فرع القفل **على مستوى النموذج** الخاص بمزوّد التمرير
  (فـagentrouter هو `passthroughModels: true` ← تُرجع `hasPerModelQuota()`
  القيمة `true`)، تُطبَّق **تهدئة مؤقتة للاتصال** —
  `testStatus: "unavailable"` + `rateLimitedUntil`، ولا تكون أبدًا حالة نهائية
  (`credits_exhausted`/`banned`/`expired`) — بحيث يتعافى الاتصال ذاتيًا
  فور انقضاء فترة التهدئة بدلًا من الحاجة إلى إعادة تعيين يدوية لبيانات الاعتماد.
  يُتخطّى ذلك للاتصالات التي فيها `disableCooling: true` (‎#2997): فذلك الاستثناء
  يسقط بدلًا منه إلى القفل على مستوى النموذج (وهي مفاضلة موثَّقة —
  راجع تعليق الشيفرة فوق هذا الفرع).
- **توجيه الكومبو ضمن الطلب نفسه** (`applyComboTargetExhaustion()`،
  `open-sse/services/combo/targetExhaustion.ts`): الحارس نفسه يضع علامة على
  الاتصال في مجموعة `exhaustedConnections` الموجودة في الذاكرة، والمفهرسة
  بالمفتاح `${provider}:${connectionId}`. وهذا لا يتخطّى سوى هدف متبقٍّ ضمن
  الطلب نفسه _يحمل هو نفسه ذلك الـ`connectionId` بالضبط_ في كائن الهدف
  الخاص به (`getExhaustedTargetSkipReason()`،
  `open-sse/services/combo/comboPredicates.ts`، مع `if (provider &&
connectionId)` قبل البحث في `exhaustedConnections`) — أما الكومبو البسيط
  المكوَّن من قائمة نماذج، حيث لا تحمل الأهداف الشقيقة أي `connectionId`
  مثبَّت خاص بها ولا يُحسم أحدها إلا عند كل إرسال من ترويسة
  `X-OmniRoute-Selected-Connection-Id` في الاستجابة، فلا يصيب ذلك التطابق
  مع المفتاح أبدًا. وفي تلك الحالة الشائعة، ليست هذه المجموعة (Set)
  هي الحماية الحقيقية من إعادة مرحلة متبقية استخدام الحساب الذي
  استُنفد للتو — بل الحماية هي طبقة الاستمرارية أعلاه
  (فأصبح `rateLimitedUntil` الخاص بالاتصال الآن في المستقبل) مقترنةً
  بقيام هذا الحارس نفسه بكبح `transientRateLimitedProviders` لهذا الفشل
  (راجع "تصميم على مرحلتين" وتعليق الشيفرة على فرع
  `isAgentrouterConnectionQuotaScope` في `targetExhaustion.ts`): ومع بقاء
  تلك المجموعة دون علامة، فإن السماح القسري `allowRateLimitedConnection`
  في `combo.ts` (`open-sse/services/combo.ts:1005-1013`، `:2734-2738`)
  لا يتفعّل لصالح المراحل المتبقية للمزوّد، وبالتالي يُحترم مرشِّح
  `rateLimitedUntil` الخاص باختيار بيانات الاعتماد
  (`src/sse/services/auth.ts:1238`) كالمعتاد، فإما أن تختار المرحلة المتبقية
  اتصال agentrouter مختلفًا لا يزال مؤهلًا، وإما أن تفشل لعدم توفّر
  بيانات اعتماد — أي إنها لا تشقّ طريقها قسرًا عائدةً إلى الاتصال الذي
  برّده هذا الفرع للتو.

### تصميم على مرحلتين: إعادة صياغة الحالة، ثم التصنيف

إعادة صياغة الحالة (`upstreamStatusRestatement.ts`) وقواعد تصنيف المزوّد
(`open-sse/config/providerErrorRules.ts`، `providerRuleRegistry`) سجلّان
منفصلان يفهرَس كلٌّ منهما بمعرّف المزوّد وبالعلامات النصية، لكنهما يعملان
في مواضع مختلفة ويخدمان غرضين مختلفين: فإعادة الصياغة تعيد كتابة حالة HTTP
مبكرًا داخل `chatCore.ts`؛ بينما تختار قواعد التصنيف سبب الاحتياط `reason`
ونطاق القفل `scope` (`model` / `provider` / `connection`) داخل
`checkFallbackError()` (`open-sse/services/accountFallback.ts`).

لا ترى قواعد التصنيف **نص** الخطأ الكامل (اللازم لمطابقة علامات المتن مثل
`额度不足`) إلا للمزوّدين المدرجين في القائمة البيضاء `FULL_TEXT_RULE_PROVIDERS`
في `providerErrorRules.ts` — وحاليًا `"agentrouter"` فقط. أما لدى كل مزوّد
آخر من **الكتالوج المدمج**، فيُسلّم `checkFallbackError` إلى
`getProviderErrorRuleMatch` الخطأ المهيكل فقط (`{code, type}`)، وهو ما يكفي
للقواعد المعتمدة على الترويسات/الحالة/الرموز، لكنه أعمى عن علامات نص المتن.
تُجري الدالة المساعدة `resolveRuleMatchBody()` هذا الاختيار: نص الخطأ الكامل
للمزوّدين المدرجين في القائمة البيضاء، والخطأ المهيكل فيما عدا ذلك. إضافة
مزوّد **مدمج** إلى `FULL_TEXT_RULE_PROVIDERS` هي اشتراك صريح يتم لكل مزوّد
على حدة — وهي موجودة كي يبقى المسار الافتراضي لكل مزوّد غير مدرج في
القائمة دون تغيير بايت ببايت.

إن `scope` الخاص بالقاعدة (`model` / `provider` / `connection`) هو اشتراك
منفصل عن `FULL_TEXT_RULE_PROVIDERS`: فـ`checkFallbackError` لا يكشفه إلا
على أنه `fallbackResult.ruleScope`، والمستهلكون في المراحل اللاحقة لا
يحترمونه بوصفه أكثر من مجرد وسم إعلامي إلا للمزوّدين المدرجين في القائمة
البيضاء `HONORS_RULE_LOCK_SCOPE_PROVIDERS` في الملف نفسه (`gated via
honorsRuleLockScope()` — حاليًا `"agentrouter"` فقط). راجع "أخطاء الحصة
المعاد صياغتها" أعلاه لمعرفة ما يفعله تطابق `scope: "connection"` فعليًا
بمجرد أن يصبح المزوّد مدرجًا في تلك القائمة البيضاء.

**#11104 — القواعد المُعلَنة من قِبل المُشغِّل تتجاوز كلتا القائمتين البيضاويتين.** يمكن للمُشغِّل
إعلان قاعدة خاصة بمزوّد بعينه في وقت التشغيل عبر `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
دون تعديل هذا الملف. إن إخضاع قاعدة المُشغِّل لـ
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` — وهما قائمتان
بيضاويتان تهدفان إلى حماية السلوك **الافتراضي** لقواعد الفهرس المدمجة — سيجعل
آلية الإعدادات بلا جدوى لكل مزوّد باستثناء المدرجين فيهما أصلًا، إذ إن إعلان
القاعدة هو بحد ذاته اشتراك صريح من المُشغِّل. يتحقق كل من `resolveRuleMatchBody()`
و`honorsRuleLockScope()` أولًا من `hasOperatorRuleForProvider()`: فالمزوّد الذي
لديه قاعدة مُشغِّل يحصل على نص الخطأ الخام ويُحترَم `scope` المُعلَن فيه، بغض
النظر عمّا إذا كان مدرجًا أيضًا في أي من القائمتين البيضاويتين.

**فجوة معروفة — لا تتم مراجعة `providerRuleRegistry` إطلاقًا عند HTTP 400.**
يصنّف فرع `BAD_REQUEST` في `checkFallbackError` الحالة 400 بالكامل
عبر مصفوفات الأنماط الخاصة به (`MODEL_ACCESS_DENIED_PATTERNS` و
`CONTEXT_OVERFLOW_PATTERNS` وغيرها في `accountFallback.ts`) ويعود قبل
الوصول إلى فرع `configuredRule`/`getProviderErrorRuleMatch` الموجود فوقه.
فقاعدة الفهرس المدمجة (أو قاعدة المُشغِّل) ذات `status: 400` صالحة
نحويًا لكنها لن تنطلق أبدًا. لا توجد اليوم أي قاعدة تستهدف 400،
لذا لا يتأثر شيء في الإنتاج — لكن أي قاعدة مستقبلية للحالة 400 تتطلب
تعديل هذا الفرع أولًا، وهو تغيير أكبر من مجرد إضافة قاعدة (فهو
يعيد تصنيف 400 لكل مزوّد يعتمد أصلًا على سلوك مصفوفات
الأنماط) وهو خارج نطاق إضافة قاعدة لمزوّد واحد.

### إضافة بوابة جديدة تُبلِّغ عن الحصة بشكل مضلِّل

1. سجّل مصفوفة قواعد واحدة في `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). اجعل `textMarkers`
   خاصة بالمزوّد؛ ولا تُعِد استخدام عبارات إنجليزية عامة تتعارض مع
   `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`).
2. سجّل اختياريًا قواعد التصنيف في
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) لاختيار
   نطاق القفل الصحيح (`connection` للحصة على مستوى الحساب، و`model`
   للأخطاء الخاصة بكل نموذج). لا يسري مفعول هذه الخطوة في الإنتاج
   إلا للمزوّدين الذين تحتاج قواعدهم إلى نص الخطأ الكامل (علامات متن
   الرسالة): أضف معرّف المزوّد إلى `FULL_TEXT_RULE_PROVIDERS` في الملف
   نفسه — وإلا فلن يمرّر `checkFallbackError` إلى القاعدة سوى الخطأ
   المنظَّم `{code, type}`، ولن تطابق قاعدة نص المتن حركة المرور
   الفعلية أبدًا. القواعد التي تطابق اعتمادًا على `status`/`headers`
   فحسب (مثل قواعد Opencode أو Minimax) لا تحتاج إلى هذا الاشتراك
   الصريح. وبشكل منفصل، إذا أعلنت القاعدة `scope: "connection"` وكان
   المقصود تهدئة فعلية على مستوى الاتصال بالكامل مع تخطّي الكومبو في
   الطلب نفسه (وليس مجرد وسم معلوماتي)، فأضف معرّف المزوّد إلى
   `HONORS_RULE_LOCK_SCOPE_PROVIDERS` في الملف نفسه — فهذا هو ما يتحكم
   في الاستهلاك بأسلوب `isAgentrouterConnectionQuotaScope()` داخل
   `markAccountUnavailable()` (`src/sse/services/auth.ts`) و
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`)؛ وبدونه يظل `scope`
   يتدفق عبر `fallbackResult.ruleScope` لكن لا شيء يتصرف بناءً عليه.
3. أضف اختبارات وحدة تحاكي `tests/unit/upstream-status-restatement.test.ts`
   و`tests/unit/agentrouter-error-rules.test.ts` (بما في ذلك فحوصات
   «ليس دائمًا / ليس creditsExhausted»، و — إذا كان المزوّد يحتاج إلى
   القائمة البيضاء — اختبارًا يؤكد أن `resolveRuleMatchBody()` يعيد
   النص الكامل لذلك المزوّد فقط).

لا حاجة إلى أي تغييرات في `chatCore.ts` أو `classifyError` أو الكومبو.

#### القفل المُجمَّع حسب مخرج الشبكة (#10880)

يُعامَل المزوّدون المدرجون في `EGRESS_BUCKETED_LOCK_PROVIDERS` (عائلة opencode)
على أنهم مُجمَّعون حسب عنوان IP في جهة المنبع (فالطبقة المجانية من opencode
مُجمَّعة حسب IP وليس حسب الحساب — انظر #9611): فالحالة 429 المصنَّفة
`quota_exhausted` **أو** `rate_limit_exceeded` تُبرِّد كل اتصال من العائلة
المدرجة في القائمة البيضاء يطابق آخر عنوان IP صادر معروف له عنوان IP الخاص
بالاتصال الفاشل، قبل أن تتمكن عملية التدوير من تجربتها
— مما يتجنب N-1 من استدعاءات المنبع المضمونة الفشل (بالشكل نفسه كما في #10460/#10525).
تضمين `rate_limit_exceeded` متعمَّد: ففي مسار `markAccountUnavailable`
لا تطابق قواعد opencode الخاصة أبدًا (لا تُمرَّر ترويسات/متن إلى
`checkFallbackError`، وopencode ليس في `FULL_TEXT_RULE_PROVIDERS`)، لذا فإن
429 الذي يحمل متنه نص حصة الاشتراك ("monthly usage limit
reached") يُصنَّف `quota_exhausted` بواسطة الرجوع إلى نص الحصة
(`buildSubscriptionQuotaFallback`، `accountFallback.ts`؛ تهدئة لمدة ساعة واحدة) قبل
الوصول إلى قاعدة `status_429` أصلًا — بينما 429 الخالي من نص الحصة
(تقييد معدل عادي) يُصنَّف عبر قاعدة `status_429` كـ `rate_limit_exceeded`
ويظل يُبرِّد عائلة IP. فبالنسبة لمزوّد مدرج في القائمة البيضاء،
إن حد المعدل المُجمَّع حسب IP هو الإشارة نفسها كحصة مستنفدة.
القيود بصراحة:

- **أفضل جهد ممكن**: يحلّل القفل آخر `egress_ip` معروف للاتصال من
  `proxy_logs` (نافذة 24 ساعة، بشكل متزامن، دون ذاكرة تخزين مؤقت). ذاكرة مؤقتة
  باردة (لم يُفحص الـ IP الصادر مطلقاً) أو لا يوجد صف → يظل الاتصال الفاشل
  مُبرَّداً بواسطة الفرع (يُسجَّل كما هو الحال اليوم)، مع عدم قفل أي شقيق فقط.
- **ليس نهائياً أبداً**: فترة التبريد هي نافذة حصة متجددة
  (`testStatus: "unavailable"`)؛ لا تُشتق حالة دائمة أبداً من إشارة على مستوى
  الـ IP. الاتصالات ذات `disableCooling` تتخطى الفرع بالكامل.
- **تتغيّر دقة القفل للعائلة المدرجة في القائمة البيضاء**: هذا تغيير في النطاق،
  وليس مجرد تحسين للأشقاء. opencode هو موفّر `passthroughModels`، لذا قبل هذا
  الفرع كان خطأ 429 ينتج عنه قفل لكل نموذج (per-MODEL)؛ أما الآن فينتج عنه
  تبريد للاتصال — بما في ذلك لمشغّل يشغّل اتصالاً واحداً دون أي شقيق على
  الإطلاق. هذه هي الدقة التي يعلن جدول قواعد opencode أنها صحيحة بالفعل
  (`scope: "connection"`، `providerErrorRules.ts`)، ولم تُحترم حتى الآن لأن
  opencode غير موجود في `HONORS_RULE_LOCK_SCOPE_PROVIDERS`. يكتب الفرع تبريد
  الاتصال الفاشل + `backoffLevel` بنفسه، مطابقاً لفرع agentrouter ذي النطاق
  على الاتصال، ثم يعود — فلا يتم الوصول إلى الحظر لكل نموذج ولا إلى المسار
  العام أدناه مطلقاً.
- **يشمل الكومبو**: مثل فرع agentrouter، يتجاهل النطاق عمداً تخفيض
  `persistUnavailableState`/`isCombo` الذي يطبّقه متصل الكومبو على خطأ 429.
  قفل كل نموذج ليس شكلاً أضعف من هذا النطاق، بل هو الوحدة الخاطئة: فهو لا يقول
  شيئاً عن الـ IP المستنفد، وبالتالي سيستمر تناوب الكومبو في حرق استدعاء واحد
  مضمون الفشل لكل شقيق.
- **سلامة الأشقاء**: الشقيق الذي هو بالفعل في حالة نهائية (محظور/نفدت أرصدته)
  أو الذي هو بالفعل في فترة تبريد أطول لا يُكتب فوقه أبداً.
- **قائمة بيضاء حصرية**: توسيع `EGRESS_BUCKETED_LOCK_PROVIDERS` قرار صريح
  للمالك؛ لا توجد أسلاك عامة (النمط #10334/#10419). يربط استعلام الأشقاء تلك
  القائمة البيضاء نفسها بدلاً من تكرارها كقيمة حرفية في SQL، لذا يظل توسيعها
  تغييراً في سطر واحد.
- **تناوب الـ IP الصادر، في كلا الاتجاهين**: نافذة البحث (24 ساعة) أوسع بكثير
  من مدة صلاحية ذاكرة التخزين المؤقت للـ IP الصادر (5 دقائق)، لذا فإن "آخر IP
  معروف" هو سجل تاريخي، وليس حالة حالية. إذا تناوب بروكسي الاتصال ضمن النافذة
  فقد **يفشل** القفل في اكتشاف IP مشترك فعلاً (الـ IP المسجَّل هو الجديد غير
  المستنفد) — وبالمقابل قد **يُبرِّد شقيقاً قد تناوب بعيداً** عن الـ IP
  المستنفد. الحالة الثانية تكلّف ذلك الشقيق نافذة تبريد واحدة؛ وكلاهما حدود
  مقبولة ضمن "أفضل جهد ممكن" لبحث قائم على السجل التاريخي.
- **التكلفة**: مسحان محدودان لـ `proxy_logs` (مفلتران بالنافذة عبر
  `idx_pl_timestamp`)، فقط عند تكرار حدوث 429. لا يوجد فهرس جديد (الترحيل 134
  YAGNI). قُيست على نسخة من قاعدة بيانات ذات حركة مرور حقيقية متوسطة الحجم؛
  تحتفظ النسخة عالية الإنتاجية بعدد أكبر نسبياً من الصفوف في النافذة نفسها.

---

## ميزات المرونة الأخرى

- **20 استراتيجية توجيه** (priority وweighted وround-robin وcontext-relay وfill-first وp2c وrandom وleast-used وcost-optimized وreset-aware وreset-window وheadroom وquota-weighted وstrict-random وauto وlkgp وcontext-optimized وcache-optimized وfusion وpipeline) — راجع [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **التوجيه الواعي بإعادة التعيين** (v3.8.0) — يمنح الأولوية للاتصالات بحسب وقت إعادة تعيين الحصة.
- **تدهور الوضع الخلفي** — يُرجَع `background: true` في Responses API إلى الوضع المتزامن مع تحذير.
- **الاكتشاف الديناميكي لحدود الأدوات** — يتراجع عن المزوّدين عند بلوغ حدود عدد الأدوات.
- **الاحتياط الطارئ** — يُتحكَّم به عبر `OMNIROUTE_EMERGENCY_FALLBACK`؛ ويمكن للمشغّلين تجاوزه من صفحة Feature Flags دون إعادة تشغيل.

---

## تصحيح الأخطاء

- يردّ الكومبو المرجّح بـ `503 all_targets_cooling_down` (مع تعيين `Retry-After`، ويسرد `diagnostics.excluded` كل هدف مع `model_lockout` / `circuit_open` / `provider_cooldown` / `unavailable`) ← المجموعة مُهيأة ومتصلة، وكل هدف مستبعَد فقط بفعل مؤقّت مرونة؛ وتحذير `[COMBO] Weighted selection: every target excluded before dispatch — …` يذكر الأسباب والثواني المتبقية. أما `404 no_executable_targets` من الكومبو نفسه فيعني أنه لم يتدخل أي مؤقّت مرونة (لا يوجد ما يمكن تشغيله، أو فشل كل حساب في فحص التوافر). بُني في `open-sse/services/combo/pinRecovery.ts` انطلاقًا من الاستبعادات المُجمَّعة في `targetResolution.ts`.
- تخطّي جميع مفاتيح أحد المزوّدين ← تحقّق من حالة قاطع الدائرة **ومن** `rateLimitedUntil`/`testStatus` لكل اتصال على حدة.
- استبعاد المزوّد نهائيًا بعد نافذة إعادة التعيين ← كود يقرأ `state` الخام بدلًا من `getStatus()`/`canExecute()`.
- فشل مفتاح واحد بينما يفترض أن تعمل البقية ← فضّل تهدئة الاتصال على قاطع الدائرة.
- فشل نموذج واحد فقط ← فضّل قفل النموذج على تهدئة الاتصال.
- يفترض أن تتعافى الحالة تلقائيًا لكنها لا تفعل ← تحقّق من وجود طابع زمني مستقبلي + مسار قراءة يُحدِّث الحالة المنتهية الصلاحية. الحالات الدائمة تتطلب تغييرات يدوية.

---

## حالة وقت التشغيل — مرجع سريع للوكيل

> نُقل حرفيًا من `AGENTS.md` ← "Resilience Runtime State" (PR #12743) كي يبقى دليل
> الوكيل ضمن ميزانية السياق 40k. وهو العرض المكثّف الموجَّه للوكيل للأقسام
> أعلاه؛ بينما تبقى الأقسام المرقّمة هي المرجع الكامل.

تملك OmniRoute ثلاث آليات متقاربة لكنها متميزة للفشل المؤقت. حافظ على فصل
نطاقاتها عند تصحيح سلوك التوجيه. اطلع على
[مخطط المرونة ثلاثي الطبقات](../diagrams/exported/resilience-3layers.svg)
(المصدر: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd))
للحصول على خريطة شاملة بنظرة واحدة.

### قاطع دائرة المزوّد

**النطاق**: المزوّد بالكامل، مثل `glm` و`openai` و`anthropic`.

**الغرض**: إيقاف إرسال حركة المرور إلى مزوّد يفشل بشكل متكرر على مستوى
المنبع/الخدمة، حتى لا يتسبب مزوّد واحد غير سليم في إبطاء كل طلب.

**التنفيذ**:

- الفئة الأساسية: `src/shared/utils/circuitBreaker.ts`
- توصيل بوابة الدردشة/التنفيذ: `src/sse/handlers/chatHelpers.ts` و`src/sse/handlers/chat.ts`
- واجهة برمجة تطبيقات حالة وقت التشغيل: `src/app/api/monitoring/health/route.ts`
- الأغلفة المشتركة: `open-sse/services/accountFallback.ts`
- جدول الحالة المُخزَّن: `domain_circuit_breakers`

**الحالات** (4 — `src/shared/utils/circuitBreaker.ts`):

- `CLOSED`: يُسمح بحركة المرور العادية.
- `DEGRADED`: نطاق إنذار مبكر — تجاوزت حالات الفشل عتبة التدهور لكنها لم تبلغ
  عتبة القاطع بعد؛ تستمر حركة المرور، وتعرض لوحات المعلومات التحذير. يعيدها اختبار
  اتصال ناجح أو نافذة هدوء دون فشل جديد إلى `CLOSED`
  (نافذة الزمن موضحة في `docs/architecture/RESILIENCE_GUIDE.md`).
- `OPEN`: المزوّد محظور مؤقتًا؛ يتلقى المتصلون استجابة «دائرة المزوّد مفتوحة»
  أو يتخطى توجيه الكومبو إلى هدف آخر.
- `HALF_OPEN`: انقضت مهلة إعادة التعيين؛ يُسمح بطلب فحص. النجاح يغلق
  القاطع، والفشل يعيد فتحه.

**الإعدادات الافتراضية** (`open-sse/config/constants.ts` ← `PROVIDER_PROFILES`، تُستهلك عبر
`DEFAULT_RESILIENCE_SETTINGS.providerBreaker` في `src/lib/resilience/settings.ts` ←
`getCircuitBreaker(provider, …)` في `src/sse/handlers/chatHelpers.ts`). يعمل قاطع المزوّد
الكامل على `circuitBreakerThreshold` / `circuitBreakerReset`:

| الملف     | يتدهور عند | يفتح عند (`circuitBreakerThreshold`) | إعادة التعيين (`circuitBreakerReset`) |
| --------- | ---------: | -----------------------------------: | ------------------------------------: |
| OAuth     |        `5` |                                  `8` |                                 `60s` |
| مفتاح API |        `7` |                                 `12` |                                 `30s` |
| محلي      |    (مشتقّ) |                                  `2` |                                 `15s` |

يعرّف `PROVIDER_PROFILES` أيضًا `providerFailureThreshold` (10/15/2) و
`providerFailureWindowMs` (15/30/5 دقائق) و`providerCooldownMs` (5/10/1 دقائق): وهذه تشغّل
**بوابة النافذة الزمنية لميزة تهدئة المزوّد العامة الاختيارية** (`PROVIDER_COOLDOWN_ENABLED`، معطّلة
افتراضيًا) — فلا يُحتسب الإدخال على مستوى المزوّد في `open-sse/services/providerCooldownTracker.ts`
كتهدئة إلا بعد `providerFailureThreshold` من حالات الفشل داخل `providerFailureWindowMs`، ثم
يهدأ لمدة `providerCooldownMs`. هذه **ليست** عتبات القاطع الفعلي — لا تضبطها
متوقعًا سلوك القاطع. كل قيمة افتراضية قابلة للتجاوز عبر متغيرات البيئة
`OMNIROUTE_PROVIDER_BREAKER_*` و`OMNIROUTE_CIRCUIT_BREAKER_*`؛
وجدول المرجع الدقيق لوقت التشغيل موجود في `docs/architecture/RESILIENCE_GUIDE.md`.

يجب ألا تُفعِّل قاطع المزوّد إلا رموز حالة الفشل على مستوى المزوّد:

```ts
(408, 500, 502, 503, 504);
```

لا تُفعِّل قاطع المزوّد الكامل بسبب أخطاء الحساب/المفتاح/النموذج المعتادة مثل معظم
حالات `401` أو `403` أو `429`. تلك تنتمي عادةً إلى تهدئة الاتصال أو قفل
النموذج. ويجب أن تكون حالة `403` من مزوّد بمفتاح API عام قابلة للاسترداد ما لم تُصنَّف
كخطأ نهائي على مستوى المزوّد/الحساب.

يستخدم المُقطِّع (breaker) الاسترداد الكسول (lazy recovery)، وليس مؤقّتًا يعمل في الخلفية. عندما تنتهي صلاحية الحالة `OPEN`، فإن عمليات القراءة مثل `getStatus()` و`canExecute()` و`getRetryAfterMs()` تُحدِّث الحالة إلى `HALF_OPEN`، بحيث لا تستمر لوحات المراقبة ومُنشئات المرشّحين المدمجة في استبعاد مزوّد منتهية صلاحيته إلى الأبد.

### فترة تهدئة الاتصال (Connection Cooldown)

**النطاق**: اتصال/حساب/مفتاح واحد للمزوّد.

**الغرض**: تخطّي مفتاح/حساب معيب مؤقتًا مع السماح للاتصالات الأخرى لنفس المزوّد بمواصلة خدمة الطلبات.

**التنفيذ**:

- مسار الكتابة/التحديث: `src/sse/services/auth.ts::markAccountUnavailable()`
- اختيار الحساب/تصفيته: `src/sse/services/auth.ts::getProviderCredentials...`
- حساب فترة التهدئة: `open-sse/services/accountFallback.ts::checkFallbackError()`
- الإعدادات: `src/lib/resilience/settings.ts`

الحقول المهمة في اتصالات المزوّد:

```ts
rateLimitedUntil;
testStatus: "unavailable";
lastError;
lastErrorType;
errorCode;
backoffLevel;
```

أثناء اختيار الحساب، يتم تخطّي الاتصال طالما:

```ts
new Date(rateLimitedUntil).getTime() > Date.now();
```

فترات التهدئة كسولة أيضًا: عندما يصبح `rateLimitedUntil` في الماضي، يصبح الاتصال مؤهَّلًا مرة أخرى. وعند الاستخدام الناجح، يقوم `clearAccountError()` بمسح `testStatus` و`rateLimitedUntil` وحقول الأخطاء و`backoffLevel`.

السلوك الافتراضي لفترة تهدئة الاتصال:

- فترة التهدئة الأساسية لـ OAuth: ‏`5s`.
- فترة التهدئة الأساسية لمفتاح API: ‏`3s`.
- عند حدوث الخطأ `429` لمفتاح API، يجب تفضيل تلميحات إعادة المحاولة الواردة من المصدر (`Retry-After`، أو ترويسات إعادة الضبط، أو نص إعادة ضبط قابل للتحليل) عند توفّرها.
- الإخفاقات المتكررة القابلة للاسترداد تستخدم التراجع الأُسّي (exponential backoff):

```ts
baseCooldownMs * 2 ** failureIndex;
```

يمنع حارس مكافحة تأثير القطيع المدوّي (anti-thundering-herd) الإخفاقات المتزامنة على نفس الاتصال من إطالة فترة التهدئة بشكل متكرر أو زيادة `backoffLevel` مرتين.

الحالات النهائية (Terminal states) ليست فترات تهدئة. فالحالات `banned` و`expired` (التي تصبح نهائية فقط بعد N من المحاولات المحدودة عبر `EXPIRED_RETRY_MAX`) و`credits_exhausted` مُصمَّمة لتبقى غير متاحة حتى تتغيّر بيانات الاعتماد/الإعدادات أو يقوم المشغِّل بإعادة ضبطها. لا تكتب فوق الحالات النهائية بحالة تهدئة عابرة.

### حظر النموذج (Model Lockout)

**النطاق**: المزوّد + الاتصال + النموذج.

**الغرض**: تجنّب تعطيل اتصال كامل عندما يكون نموذج واحد فقط غير متاح أو محدود الحصة لذلك الاتصال.

أمثلة:

- مزوّدون بحصص لكل نموذج يُرجعون `429`.
- مزوّدون محليون يُرجعون `404` لنموذج واحد مفقود.
- إخفاقات أذونات الوضع/النموذج الخاصة بالمزوّد، مثل أوضاع Grok المحدَّدة.

يوجد حظر النموذج في `open-sse/services/accountFallback.ts` ويسمح لنفس الاتصال بمواصلة خدمة النماذج الأخرى.

### إرشادات تصحيح الأخطاء

- إذا تم تخطّي جميع مفاتيح أحد المزوّدين، افحص كلًّا من حالة مُقطِّع المزوّد و`rateLimitedUntil`/`testStatus` لكل اتصال.
- إذا بدا أن أحد المزوّدين مستبعَد بشكل دائم بعد نافذة إعادة الضبط، تحقّق ممّا إذا كان الكود يقرأ `state` الخام بدلًا من استخدام `getStatus()`/`canExecute()`.
- إذا فشل أحد مفاتيح المزوّد بينما يُفترض أن تعمل المفاتيح الأخرى، فضِّل فترة تهدئة الاتصال على مُقطِّع المزوّد.
- إذا فشل نموذج واحد فقط، فضِّل حظر النموذج على فترة تهدئة الاتصال.
- إذا كان يُفترض أن تتعافى حالة ما تلقائيًا، فيجب أن تحتوي على طابع زمني مستقبلي/مهلة إعادة ضبط ومسار قراءة يُحدِّث الحالة المنتهية الصلاحية. أما الحالات الدائمة فتتطلب تغييرات يدوية في بيانات الاعتماد أو الإعدادات.

---

## بصمات TLS والتخفي

التخفي الخاص بكل مزوّد (JA3/JA4 وCCH والتشويش) موثَّق بشكل منفصل — راجع `docs/security/STEALTH_GUIDE.md` (في git؛ غير مُجمَّع ضمن `/docs`).

---

## اختبار المرونة (المرحلة 8 · الكتلة C)

إلى جانب اختبارات الوحدة لمنطق المرونة، تُخضِع ثلاثة اختبارات بيئة التشغيل
لظروف ضغط/فشل حقيقية (جميعها اختبارات تكامل/ليلية — ولا يمنع أيٌّ منها طلبات الدمج PRs):

| الاختبار    | الوظيفة                                                                                                                                                                | التشغيل                               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| الفوضى      | عقدة upstream وهمية تحقن زمن استجابة/إعادة تعيين/مهلة/503 حقيقية؛ تتحقق من أن قاطع الدائرة يفتح ويتعافى وأن `checkFallbackError` يصنّف 503 كـ fallback قابل للاسترداد. | `RUN_CHAOS_INT=1 npm run test:chaos`  |
| نمو الذاكرة | نحو 500 تدفق لكل `createSSEStream` تحت `--expose-gc`؛ يفشل إذا تجاوز نمو الـ heap الحد الأقصى (حارس OOM رقم #3069).                                                    | `npm run test:heap`                   |
| نقع k6      | حمل مستدام على `/api/monitoring/health`؛ عتبات p95/الأخطاء.                                                                                                            | `k6 run tests/load/k6-soak.js` (ليلي) |

يُنسَّق عبر `.github/workflows/nightly-resilience.yml` (cron + dispatch). في
`test:integration` الافتراضي، يتخطى اختبارا الفوضى والذاكرة نفسيهما تلقائيًا (دون `RUN_CHAOS_INT`/`--expose-gc`).

---

## انظر أيضًا

- [دليل البنية](./ARCHITECTURE.md) — بنية النظام وتفاصيله الداخلية
- [دليل المستخدم](../guides/USER_GUIDE.md) — المزوّدون والتركيبات والتكامل مع CLI
- [محرك التركيب التلقائي](../routing/AUTO-COMBO.md) — تسجيل بـ 16 عاملًا، وحزم الأوضاع
