9年半導體，7年製程、2年 MES IT，正在往 AI Engineer、製造 AI 轉型。
原先於晶圓測試當製程工程師，現在做 MES 生產系統
目前同步於陽明交大資科碩士在職專班進修。

【Probe Mark AI：真正上線的影像辨識】
2023 年做的。晶圓測試現場，PAD 色差常常造成誤判，加上雙框選定的問題，各班看的標準也不一致。
用 CNN 做影像檢索跟判定，多層 convolution 配 DoG 銳化把針痕邊緣凸顯出來，再用 particle size 的級距把針痕跟異物分開。
後面接影像 API、SOP 判讀跟人工複核，訂出一套自動複核標準，各班照同一套看。
從驗證做到上線，一年省下約 NT$2.95M。

【MES：維運跟導入是本業】
2024 年 4 月轉 MES IT。平常管 MES 伺服器、寫生產報表、規劃流程，撰寫防堵線上異常措施。
專案從需求訪談、規劃書跟規格、測試、上線到教育訓練都跑過，軟硬體架構一起規劃。

【生產管控 API】
用 .NET 8 實作，串 Oracle、Informix、SQL Server 跟內部舊頁面，供工廠使用。
常用查詢走快取，任務進排隊消化，減少系統來回。
失敗自動重試，排程可手動觸發。

【LLM / Agent：side project】
用 LangGraph 排 Agent，做成 API service，
加 checkpoint，斷掉可以續跑。接 RAG（faiss）跟 Tool Use / Function Calling。
有 error fallback、logging 跟 tracing、human review，也會先拿 LLM 當 judge 跑一輪評估。
還不到正式交付的水準，持續理解並嘗試實作。

【品質跟客戶應對】
之前主導過 50 幾場 FMEA，照 IATF 16949 / VDA 的做法，
從假設、實驗、驗證，一路到 SOP 跟防呆。
APQP 新品導入也做過，新產品進系統前的風險先盤一遍。
客戶稽核參加過 10 幾次，Apple、Intel、Infineon、Toshiba、Bosch、華為都有，
製程、系統架構、風險管理都上台講過，中英文都可以。

【背景】
南茂 2017 年 4 月到 2024 年 3 月做製程，晶圓測試，之後轉 MES IT 到現在。
中正物理系畢業，電子、光學、熱力、材料、程式都碰過，
優勢是把現場的話翻成工程能做的事，再拿數字回來驗收。

Nine years in semiconductors. Seven in process, two in MES IT. Now moving toward AI Engineer and manufacturing AI.
I'm Yu-Chi Chen. Started as a process engineer in wafer testing at ChipMOS, now building MES systems, studying CS at NYCU.
Shipped Probe Mark AI in 2023. It uses a CNN (GoogLeNet) with DoG sharpening and particle size rules, which fixed our PAD color shift miscalls. Image API plus SOP plus human review. About NT$2.95M saved per year.
Since April 2024 I'm in MES IT. My day job is MES servers, production reports, flow planning, and writing countermeasures that stop line issues. I run projects end to end, from interviews and specs to testing, go-live, and training, including the software and hardware setup. On the side, I built a production control API on .NET 8, wired to Oracle, Informix, SQL Server, and legacy internal pages for factory use. Hot queries hit cache, jobs go through a queue. Failures retry automatically, schedules can be triggered by hand.
I have led 50+ FMEAs and sat through 10+ audits with Apple, Intel, Infineon, Toshiba, Bosch, and Huawei.
The LLM and agent work is a side project for now. LangGraph, faiss RAG, Tool Use, checkpoints, fallback, tracing, and human review, plus LLM-as-judge eval. Still learning, still building toward deployable.
My edge is turning floor language into buildable specs, proven with numbers.
Happy to talk manufacturing AI, LLM on the line, or MES. Email: chyi6295@gmail.com. GitHub: github.com/HaleyChui
