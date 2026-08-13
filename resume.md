陳昱齊　Yu-Chi Chen
Apply AI Agent Systems Engineer　｜　製程 × MES × LLM 跨域整合
? chyi6295@gmail.com　　?? 0986-989798　　?? 國立陽明交通大學 資訊碩士專班（在學）
個人定位
近9年導體實戰背景（製程 7 年 + MES IT 2 年） 陽明交大資科碩專班（在學）。
以 LangChain / LangGraph 自主開發 Multi-Agent 工作流與 RAG 系統，實作符合 MCP 協定的 Tool Server，並在開發過程中測試 Prefix Cache 優化策略、Stateful Memory 設計與 Tool Error Fallback 機制。
核心優勢：8 年製造業業務邏輯積累，能精確將工廠複雜需求轉譯為 Agent Task / Tool 規格
建立嚴謹的 Harness 層設計才能真正落地。
核心技術
技術領域	具體技能與工具
AI Agent 架構	Harness 設計、LangChain / LangGraph Agent 建構、Tool / Tool Call / Tool Result Flow、Multi-Agent Orchestration、Subagent 拆分策略
MCP 整合	Model Context Protocol Tool Server 設計與實作（Python）、標準化 Tool 暴露介面、外部系統（DB / API / 模擬設備）接入 Agent
RAG / Memory	RAG 架構（Embedding → ChromaDB Vector Store → Retrieval → Context 注入）、Chunking 策略選擇、Prefix Cache 命中率優化、Stateful 跨 Session 持久化
LLM 應用	Prompt Engineering、System Prompt 設計、LangChain LCEL、OpenAI / Anthropic API、Non-determinism 控管、Tool Error Response 格式設計
後端 / 資料	C#、ASP.NET Core、Python、RESTful API、Oracle、IBM Informix、SQL 優化、ETL 流程設計
工程實踐	系統監控、日誌分析、Error Handling、Fallback 機制、State 持久化、Automated Check / Human Review 驗收流程
領域知識	半導體製程、FMEA 風險分析、IATF 16949 / ISO 26262、Apple / Intel / BOSCH 國際稽核經驗
工作經歷
MES IT 工程師　｜　南茂科技股份有限公司	2024/04 – 至今
?	[工具封裝架構]　主導晶圓凸塊製程 MES 系統重構，以 C# / ASP.NET Core 設計標準化 API 介面，將製程資料來源（Oracle / Informix DB、產線設備 API）封裝為可插拔工具模組。設計原則是推論邏輯不直接存取 DB，而是透過標準介面取得資料，確保系統可擴展性與資料安全邊界——此思路與 MCP Tool Server 的設計哲學一致。
?	[動態 Context 組裝]　設計 ETL 流程將產線即時數據轉化為結構化 Context，依任務類型動態注入業務邏輯判斷流程，採 Progressive Disclosure 策略避免全量資料塞入請求。此設計等同 RAG Retrieval 的核心原則：依任務動態撈取相關 Chunk，而非一次載入全部知識。
?	[State 持久化與 Fallback 設計]　設計跨製程步驟的 State 持久化機制（工作階段結束前寫入關鍵狀態，下次啟動精準重載）與明確的降級路徑：Tool 回傳異常時走 retry → 人工介入 → 記錄 Handoff Artifact，確保流程在異常情境下不進入無效循環。
?	[可觀測性與效能意識]　負責 MES 系統異常即時排查，建立監控與日誌分析機制，追蹤各工具模組的呼叫頻率與回應延遲。理解系統效能瓶頸不只在運算本身，更在工具呼叫的累積次數——設計上優先批次查詢以減少 Round-trip。

製程工程師（晶圓測試）　｜　南茂科技股份有限公司	2017/04 – 2024/03
?	[AI 落地 & Human-in-the-loop]　主導「Probe Mark AI 影像辨識系統」導入：CV 模型（Tool Call）→ 影像分析（Tool Result）→ 品質判讀 → Permission Request（人工複核高風險結果）；建立 Automated Check 閾值機制對抗 Non-determinism 輸出，年節省成本 295 萬元。
?	[多步驟推理實戰]　主持 50+ 場 FMEA 風險分析：問題拆解 → 根因假設 → 實驗驗證 → 改善追蹤；此流程與 Agent 的 Multi-step Reasoning 高度對應，培養了分解複雜任務、設計驗收條件的系統化思維。
?	[跨職能協作與企業稽核]　主導 20+ 項製程優化專案，協調製程、設備、品保、客戶多個平行工作流。應對 Apple、Intel、BOSCH 等 10+ 次國際客戶稽核，熟悉企業對 AI 系統的驗收標準：推理流程可追溯性、Hallucination 控管與 Automated Review 覆核機制。
專案亮點
Probe Mark AI 影像辨識系統導入　｜　南茂科技　2023
?	架構設計：CV Model（Tool）→ 影像擷取 API（Tool Call）→ 辨識結果（Tool Result）→ 製程 SOP 判讀（Context 組裝）→ Human Review
?	關鍵挑戰：Non-determinism 輸出導致不同班別判讀不一致 → 建立 Automated Check 閾值機制，低信心度結果自動觸發人工複核
?	效益：年節省人力成本 295 萬元；深刻體會 AI 落地的關鍵在 Harness 層設計，而非只是選模型

MES 晶圓凸塊生產管控系統重構　｜　南茂科技　2024
?	工具封裝：將 Oracle DB、Informix 即時數據、設備 API 各自封裝為獨立工具模組，系統具備熱插拔擴充能力
?	動態 Context：依任務類型動態組裝 Context，常駐規則固定，專項知識按需載入，避免全量資料塞入請求
?	State 持久化：每個製程工作階段結束前將關鍵 State 寫入持久化儲存，下次工作階段啟動時精準重載入
?	Fallback 設計：工具回傳異常時有明確降級路徑（retry → 人工介入 → 記錄 Handoff Artifact）

LangChain / LangGraph Agent 系統（自主開發）　｜　2024 – 2025
以製造業異常分析為情境，自主設計並實作基於 LLM 的 Agentic 工作流，目標是在實際開發中理解 Agent 系統的設計邊界與常見失效模式。
【RAG Pipeline 設計與 Retrieval 策略選擇】
?	以 LangChain LCEL 建構製程 SOP 文件的 RAG 系統（PDF → 切片 → Embedding → ChromaDB → Similarity Search → Prompt 組裝）
?	關鍵挑戰：SOP 文件含半結構化規格表格，純語義切片在處理含數值規格的段落時 Retrieval 精準度不足
?	解決方案：改用固定大小切片搭配 metadata filter（文件類型 + 製程步驟標籤），相關 Chunk 召回率明顯提升
【LangGraph Stateful Multi-Agent 實作】
?	設計 Orchestrator Agent 拆解異常分析任務，分派給三個獨立 Subagent（歷史資料查詢、SOP 比對、根因推論），各帶獨立 Context Window 執行
?	關鍵問題：Subagent 回傳冗餘資訊導致主 Agent Context 膨脹，整體 Token Usage 超出預期
?	解決方案：要求 Subagent 以結構化摘要格式回傳 Tool Result，設定欄位上限，Context 膨脹問題有效控制
【Prefix Cache 命中率優化實驗】
?	系統性測試 System Prompt 設計對 Prefix Cache 命中率的影響
?	發現：System Prompt 中混入動態內容（時間戳記、Session ID）時，Cache 命中率歸零
?	調整為「靜態 System Prompt + 動態 User Turn 承載 Context」架構，重複查詢情境下 Input Token 消耗明顯降低
【MCP Tool Server 實作】
?	以 Python 設計符合 MCP 協定的 Tool Server，暴露 SQLite DB（模擬製程歷史資料庫）與設備狀態 API 為標準化 Tool 介面
?	重點設計：Tool 錯誤回傳的格式（成功 / 失敗 / 部分失敗三種狀態），確保 Agent 能正確判斷是否需要 retry 或 fallback
?	驗證推論邏輯與資料來源完全解耦的架構可行性：新增資料源只需掛載新 Tool Server，不修改 Agent Harness
核心收穫：Agent 系統的穩定性，取決於 Tool 邊界定義的嚴謹度、Error Response 格式的一致性，以及 Orchestrator 對「任務已完成 vs 需繼續推論」的判斷邏輯——而非模型本身的能力。
學歷
資訊科學碩士專班（在學）　｜　國立陽明交通大學	2024 – 預計 2026
核心課程：Big Data Analytics、Data Mining、AI/MLOps、Machine Learning　｜　研究方向：LLM × RAG 應用於製造業良率預測與異常告警
物理學系　學士　｜　國立中正大學	2011 – 2015
系統化建模、抽象推理與實驗驗證能力，奠定 Agent 系統 Spec 制定、Task 拆解與 Automated Check 驗收的方法論基礎
為什麼選我
優勢項目	具體說明
工具封裝設計力	8 年 API / DB 整合經驗，能快速設計標準化 Tool Server，讓 Agent 以統一介面存取企業內部系統，無需為每個資料源客製 Wrapper
RAG & Cache 優化	親自測試 Chunking 策略差異、Prefix Cache 對 System Prompt 穩定度的敏感性，設計上主動控制 Token Usage 與 Inference Cost
LangChain 實戰	具備 LangChain LCEL / LangGraph Multi-Agent / Stateful Memory 自主開發經驗，理解常見 Agent 失效模式（Context 膨脹、Tool Error 處理、Prefix Cache 失效）
Harness 設計力	8 年製程 + MES 雙視角，能精確設計 Tool / System Prompt / Permission Mode 的完整 Harness 層，而非只會呼叫 LLM API
業務邏輯轉譯	將模糊工廠需求轉譯為 Agent Task / Tool 規格是核心優勢——能跨越「技術可行」與「業務真正需要」之間的鴻溝
AI 落地完整經歷	主導 AI 影像辨識系統從需求→驗收→上線，熟悉 Non-determinism / Hallucination 在企業場景的實際挑戰與控管策略

