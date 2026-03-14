export type Locale = "en" | "kr" | "jp";

export const translations = {
  en: {
    nav: {
      home: "Home",
      philosophy: "Philosophy",
      experience: "Experience",
      blog: "Blog",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Chanwoo Song",
      tagline: "I find, define, and solve meaningful problems in the age of AI.",
      roles: ["Problem Finder", "Problem Definer", "Problem Solver", "Storyteller"],
      cta: "Explore My Journey",
      scroll: "Scroll to explore",
    },
    about: {
      title: "About",
      subtitle: "Holding the Vision, Owning the Execution",
      description:
        "I lead AI-driven projects from concept to deployment, blending strategic clarity with hands-on execution. My approach is grounded in a growth mindset, shaped by global experience, and driven by the belief that trust, not perfection, is what makes products work.",
      currentRole: "Project Manager at Mind AI",
      location: "Seoul, South Korea",
    },
    philosophy: {
      title: "Philosophy",
      subtitle: "GEKS",
      intro:
        "GEKS is the central identity framework that guides how I approach life and work. It represents a continuous cycle of personal and collective evolution.",
      growth: {
        title: "Growth",
        letter: "G",
        description:
          "Growth is not about achieving more — it's about understanding wider, judging deeper, and refining yourself to a higher standard. I value continuous self-renewal over static completion.",
        points: [
          "Embracing new problems without fear",
          "Refusing to settle into familiar patterns",
          "Demanding better thinking from myself",
          "Remaining a learner at every moment",
        ],
      },
      experience: {
        title: "Experience",
        letter: "E",
        description:
          "Experience is the most practical and powerful teacher. While theory points the way, real transformation comes from what you've walked through personally.",
        points: [
          "Why did I make that choice?",
          "What did I see in the process?",
          "What limits and possibilities did I discover?",
          "What would I do differently next time?",
        ],
      },
      knowledge: {
        title: "Knowledge",
        letter: "K",
        description:
          "Knowledge is not mere information accumulation. It's the foundation for more accurate understanding, more structural problem-viewing, and better decision-making.",
        points: [
          "Understanding phenomena as structures",
          "Connecting individual information into context",
          "Applying learning to actual judgment and execution",
          "Being able to articulate and organize what I've understood",
        ],
      },
      sharing: {
        title: "Sharing",
        letter: "S",
        description:
          "Growth that isn't shared ultimately stops within the individual. I believe insights gained through learning and experience expand into greater value when shared with others.",
        points: [
          "Organizing what I've learned so others can understand more easily",
          "Turning personal insights into shared assets",
          "Contributing to the growth of those around me",
          "Building a foundation to go further together",
        ],
      },
      cycle:
        "Growth enables new challenges. Challenges create diverse Experiences. Experiences become Knowledge through reflection. Knowledge expands through Sharing. And sharing becomes the starting point for greater Growth.",
    },
    experience: {
      title: "Experience",
      subtitle: "Career & Skills",
      timeline: [
        {
          company: "Mind AI",
          role: "Product/Project Manager",
          period: "Jun 2023 — Present",
          location: "Seoul",
          highlights: [
            "Led end-to-end delivery for LLM/agent-based products and enterprise AI programs",
            "Shipped initiatives across health-data/wellness, AI nutrition planning, generative media workflows, automotive documentation, and utility chatbots",
            "Designed evaluation criteria and test catalogs; built prototypes to validate workflows",
          ],
        },
        {
          company: "NCSOFT — NLP Center",
          role: "Language AI Research",
          period: "Sep 2022 — Mar 2023",
          location: "Seoul",
          highlights: [
            "Built training datasets for conversational summarization in news domains",
            "Constructed datasets for spam detection in game chats",
            "Developed NLP datasets: sentiment analysis, contradiction detection, NER, FAQ generation",
          ],
        },
        {
          company: "Kyung Hee University",
          role: "Researcher & Teaching Assistant",
          period: "Oct 2020 — Sep 2022",
          location: "Seoul",
          highlights: [
            "MA in Korean Language and Literature",
            "Led Asian Community course with $18,000 grant from Eurasia Foundation",
            "Published 'Wong Kar-Wai: Auteur of Time' Korean translation",
            "Presented at Penn State and AATK conferences",
          ],
        },
      ],
      skills: {
        title: "Skills & Certifications",
        categories: [
          {
            name: "AI & Product",
            items: ["LLM/Agent Architecture", "Prompt Engineering", "RAG Systems", "PRD & Roadmap", "User Research", "A/B Testing"],
          },
          {
            name: "Data & Analysis",
            items: ["Python", "SQL", "R", "NLP", "Data Architecture", "Big Data Analysis"],
          },
          {
            name: "Languages",
            items: ["Korean (Native)", "English (Advanced)", "Japanese (JLPT N1)"],
          },
          {
            name: "Certifications",
            items: ["Data Architecture Semi-Professional", "Big Data Analysis Engineer", "SQL Developer", "ADsP"],
          },
        ],
      },
    },
    blog: {
      title: "Blog",
      subtitle: "Thoughts & Stories",
      comingSoon: "Stories are being written...",
      comingSoonDesc: "I'll be sharing insights about AI, problem-solving, and the GEKS philosophy. Stay tuned.",
    },
    footer: {
      contact: "Get in Touch",
      email: "kame1639@gmail.com",
      rights: "All rights reserved.",
    },
  },
  kr: {
    nav: {
      home: "홈",
      philosophy: "철학",
      experience: "경험",
      blog: "블로그",
    },
    hero: {
      greeting: "안녕하세요,",
      name: "송찬우입니다",
      tagline: "AI 시대의 의미 있는 문제를 찾고, 정의하고, 해결합니다.",
      roles: ["Problem Finder", "Problem Definer", "Problem Solver", "Storyteller"],
      cta: "여정 탐색하기",
      scroll: "스크롤하여 탐색하기",
    },
    about: {
      title: "소개",
      subtitle: "비전을 품고, 실행을 책임지며",
      description:
        "저는 AI 기반 프로젝트를 기획부터 배포까지 리드합니다. 전략적 명확성과 실행력을 결합하며, 성장 마인드셋과 글로벌 경험을 기반으로, 완벽함이 아닌 신뢰가 제품을 만든다는 믿음으로 일합니다.",
      currentRole: "Mind AI 프로젝트 매니저",
      location: "서울, 대한민국",
    },
    philosophy: {
      title: "철학",
      subtitle: "GEKS",
      intro:
        "GEKS는 제가 삶과 일을 대하는 핵심 철학입니다. 개인과 공동체의 지속적인 발전을 이끄는 순환 구조를 나타냅니다.",
      growth: {
        title: "성장",
        letter: "G",
        description:
          "성장은 단순히 더 많은 것을 이루는 일이 아닙니다. 어제보다 더 넓게 이해하고, 더 깊게 판단하며, 더 높은 기준으로 스스로를 다듬어가는 과정입니다.",
        points: [
          "새로운 문제를 두려워하지 않는 것",
          "익숙한 방식에 안주하지 않는 것",
          "더 나은 사고방식과 기준을 요구하는 것",
          "매 순간 배울 수 있는 사람으로 남는 것",
        ],
      },
      experience: {
        title: "경험",
        letter: "E",
        description:
          "경험은 가장 현실적이고도 강력한 스승입니다. 책이나 이론이 방향을 제시할 수 있지만, 실제로 사람을 변화시키는 것은 결국 몸으로 통과한 경험입니다.",
        points: [
          "왜 그런 선택을 했는지",
          "그 과정에서 무엇을 보았는지",
          "어떤 한계와 가능성을 발견했는지",
          "다음에는 무엇을 다르게 할 수 있는지",
        ],
      },
      knowledge: {
        title: "지식",
        letter: "K",
        description:
          "지식은 단순한 정보의 축적이 아닙니다. 세상을 더 정확하게 이해하고, 문제를 더 구조적으로 바라보며, 더 나은 결정을 가능하게 하는 사고의 기반입니다.",
        points: [
          "현상을 구조로 이해하는 것",
          "개별 정보를 연결해 맥락을 만드는 것",
          "배운 내용을 실제 판단과 실행에 적용하는 것",
          "이해한 것을 언어화하고 정리할 수 있는 상태",
        ],
      },
      sharing: {
        title: "나눔",
        letter: "S",
        description:
          "나누지 않는 성장은 결국 개인 안에서 멈춥니다. 배운 것과 깨달은 것, 경험을 통해 얻은 통찰은 타인과 공유될 때 더 큰 가치로 확장됩니다.",
        points: [
          "내가 배운 것을 쉽게 이해할 수 있도록 정리하는 것",
          "혼자만의 깨달음을 공동의 자산으로 바꾸는 것",
          "주변 사람들의 성장에 기여하는 것",
          "함께 더 멀리 갈 수 있는 기반을 만드는 것",
        ],
      },
      cycle:
        "성장은 새로운 도전을 가능하게 하고, 그 도전은 다양한 경험을 만듭니다. 경험은 해석과 정리를 거쳐 지식이 되고, 지식은 나눔을 통해 더 큰 가치로 확장됩니다. 그리고 나눔은 다시 더 큰 성장의 시작점이 됩니다.",
    },
    experience: {
      title: "경험",
      subtitle: "경력 & 기술",
      timeline: [
        {
          company: "Mind AI",
          role: "프로덕트/프로젝트 매니저",
          period: "2023.06 — 현재",
          location: "서울",
          highlights: [
            "LLM/Agent 기반 제품 및 엔터프라이즈 AI 프로젝트 End-to-End 리드",
            "헬스 데이터, AI 영양사, 생성형 크리에이티브 스튜디오, 자동차 문서 자동화, 에너지 챗봇 등 다수 프로젝트 수행",
            "평가 기준 및 테스트 체계 설계, 프로토타입 구현으로 워크플로우 검증",
          ],
        },
        {
          company: "NCSOFT — NLP센터",
          role: "언어 AI 연구",
          period: "2022.09 — 2023.03",
          location: "서울",
          highlights: [
            "뉴스 도메인 대화형 요약 학습 데이터셋 구축",
            "게임 채팅 스팸 탐지 데이터 구축 및 모니터링",
            "감성 분석, 모순 탐지, NER, FAQ 생성 등 NLP 데이터셋 개발",
          ],
        },
        {
          company: "경희대학교",
          role: "연구원 & 조교",
          period: "2020.10 — 2022.09",
          location: "서울",
          highlights: [
            "국어국문학 석사",
            "유라시아재단 $18,000 지원 아시아공동체론 강의 기획 및 운영",
            "『왕가위의 시간』 한국어 번역 출판",
            "Penn State, AATK 학술대회 발표",
          ],
        },
      ],
      skills: {
        title: "기술 & 자격",
        categories: [
          {
            name: "AI & 프로덕트",
            items: ["LLM/Agent 아키텍처", "프롬프트 엔지니어링", "RAG 시스템", "PRD & 로드맵", "사용자 리서치", "A/B 테스트"],
          },
          {
            name: "데이터 & 분석",
            items: ["Python", "SQL", "R", "NLP", "데이터 아키텍처", "빅데이터 분석"],
          },
          {
            name: "언어",
            items: ["한국어 (모국어)", "영어 (상급)", "일본어 (JLPT N1)"],
          },
          {
            name: "자격증",
            items: ["데이터아키텍처 준전문가", "빅데이터분석기사", "SQL 개발자", "ADsP"],
          },
        ],
      },
    },
    blog: {
      title: "블로그",
      subtitle: "생각과 이야기",
      comingSoon: "이야기를 준비하고 있습니다...",
      comingSoonDesc: "AI, 문제 해결, 그리고 GEKS 철학에 대한 이야기를 나눌 예정입니다.",
    },
    footer: {
      contact: "연락하기",
      email: "kame1639@gmail.com",
      rights: "All rights reserved.",
    },
  },
  jp: {
    nav: {
      home: "ホーム",
      philosophy: "哲学",
      experience: "経験",
      blog: "ブログ",
    },
    hero: {
      greeting: "こんにちは、",
      name: "ソン・チャヌです",
      tagline: "AI時代の意味ある問題を見つけ、定義し、解決します。",
      roles: ["Problem Finder", "Problem Definer", "Problem Solver", "Storyteller"],
      cta: "旅を探る",
      scroll: "スクロールして探る",
    },
    about: {
      title: "紹介",
      subtitle: "ビジョンを持ち、実行を責任を持って",
      description:
        "私はAIベースのプロジェクトを企画からデプロイまでリードします。戦略的な明確さと実行力を組み合わせ、成長マインドセットとグローバルな経験を基に、完璧さではなく信頼が製品を作るという信念で働いています。",
      currentRole: "Mind AI プロジェクトマネージャー",
      location: "ソウル、韓国",
    },
    philosophy: {
      title: "哲学",
      subtitle: "GEKS",
      intro:
        "GEKSは私の人生と仕事に対する核心的な哲学です。個人とコミュニティの持続的な発展を導く循環構造を表しています。",
      growth: {
        title: "成長",
        letter: "G",
        description:
          "成長とは、単により多くのことを達成することではありません。昨日よりも広く理解し、より深く判断し、より高い基準で自分を磨いていくプロセスです。",
        points: [
          "新しい問題を恐れないこと",
          "慣れたやり方に安住しないこと",
          "より良い考え方と基準を自分に求めること",
          "常に学べる人であり続けること",
        ],
      },
      experience: {
        title: "経験",
        letter: "E",
        description:
          "経験は最も現実的で強力な師です。本や理論が方向を示すことはできますが、人を実際に変えるのは体で通過した経験です。",
        points: [
          "なぜその選択をしたのか",
          "その過程で何を見たのか",
          "どんな限界と可能性を発見したのか",
          "次回は何を変えるか",
        ],
      },
      knowledge: {
        title: "知識",
        letter: "K",
        description:
          "知識は単なる情報の蓄積ではありません。世界をより正確に理解し、問題をより構造的に見つめ、より良い判断を可能にする思考の基盤です。",
        points: [
          "現象を構造として理解すること",
          "個別の情報を繋げて文脈を作ること",
          "学んだことを実際の判断と実行に適用すること",
          "理解したことを言語化し整理できる状態",
        ],
      },
      sharing: {
        title: "共有",
        letter: "S",
        description:
          "共有しない成長は結局個人の中で止まります。学びと気づき、経験を通じた洞察は、他者と共有されることでより大きな価値に拡張されます。",
        points: [
          "学んだことを理解しやすく整理すること",
          "個人の気づきを共有の資産に変えること",
          "周囲の人々の成長に貢献すること",
          "共により遠くへ行ける基盤を作ること",
        ],
      },
      cycle:
        "成長は新たな挑戦を可能にし、その挑戦は多様な経験を生みます。経験は解釈と整理を経て知識となり、知識は共有を通じてより大きな価値に拡張されます。そして共有は再びより大きな成長の出発点になります。",
    },
    experience: {
      title: "経験",
      subtitle: "キャリア＆スキル",
      timeline: [
        {
          company: "Mind AI",
          role: "プロダクト/プロジェクトマネージャー",
          period: "2023.06 — 現在",
          location: "ソウル",
          highlights: [
            "LLM/Agentベースの製品とエンタープライズAIプロジェクトをEnd-to-Endでリード",
            "ヘルスデータ、AI栄養士、生成メディア、自動車ドキュメント自動化、エネルギーチャットボットなど多数のプロジェクト遂行",
            "評価基準とテスト体系の設計、プロトタイプ実装によるワークフロー検証",
          ],
        },
        {
          company: "NCSOFT — NLPセンター",
          role: "言語AI研究",
          period: "2022.09 — 2023.03",
          location: "ソウル",
          highlights: [
            "ニュースドメインの対話型要約学習データセット構築",
            "ゲームチャットスパム検出データの構築と監視",
            "感性分析、矛盾検出、NER、FAQ生成などNLPデータセット開発",
          ],
        },
        {
          company: "慶熙大学校",
          role: "研究員＆助手",
          period: "2020.10 — 2022.09",
          location: "ソウル",
          highlights: [
            "国語国文学修士",
            "ユーラシア財団$18,000支援のアジアコミュニティ論講義企画・運営",
            "『ウォン・カーウァイの時間』韓国語翻訳出版",
            "ペンシルベニア州立大学、AATK学術大会発表",
          ],
        },
      ],
      skills: {
        title: "スキル＆資格",
        categories: [
          {
            name: "AI＆プロダクト",
            items: ["LLM/Agentアーキテクチャ", "プロンプトエンジニアリング", "RAGシステム", "PRD＆ロードマップ", "ユーザーリサーチ", "A/Bテスト"],
          },
          {
            name: "データ＆分析",
            items: ["Python", "SQL", "R", "NLP", "データアーキテクチャ", "ビッグデータ分析"],
          },
          {
            name: "言語",
            items: ["韓国語（母語）", "英語（上級）", "日本語（JLPT N1）"],
          },
          {
            name: "資格証",
            items: ["データアーキテクチャ準専門家", "ビッグデータ分析技師", "SQL開発者", "ADsP"],
          },
        ],
      },
    },
    blog: {
      title: "ブログ",
      subtitle: "考えと物語",
      comingSoon: "物語を準備しています...",
      comingSoonDesc: "AI、問題解決、そしてGEKS哲学について語る予定です。",
    },
    footer: {
      contact: "お問い合わせ",
      email: "kame1639@gmail.com",
      rights: "All rights reserved.",
    },
  },
} as const;

export function t(locale: Locale) {
  return translations[locale];
}
