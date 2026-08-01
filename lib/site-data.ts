export type ActivityReport = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  body: string[];
};

export type Recruitment = {
  id: string;
  slug: string;
  title: string;
  status: "open" | "scheduled" | "closed" | "draft";
  period: string;
  deadline: string;
  fee: string;
  travelCost: string;
  accommodationCost: string;
  discount: string;
  capacity: string;
  formUrl: string;
  note: string;
};

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "ITS DAYについて", href: "/about" },
  { label: "活動内容", href: "/activities" },
  { label: "活動実績", href: "/achievements" },
  { label: "参加を考えている方へ", href: "/join" },
  { label: "募集情報", href: "/recruitments" },
  { label: "FAQ", href: "/faq" },
  { label: "活動レポート", href: "/reports" },
  { label: "お問い合わせ", href: "/contact" }
];

export const activityReports: ActivityReport[] = [
  {
    id: "mock-report-3days-school",
    slug: "3days-school-success",
    title: "3Days Schoolで生まれた、はじめての成功体験",
    date: "2026.03.21",
    category: "3Days School",
    excerpt: "図工や理科の実技授業を通して、子どもたちと学生が一緒に挑戦した記録です。",
    image: "/images/classroom-writing.jpeg",
    body: [
      "3Days Schoolでは、日本人大学生が先生となり、スポーツ、図工、理科などの実技授業を行います。",
      "正解を覚えることだけではなく、できた、楽しい、もう一度やってみたいという成功体験を大切にしています。"
    ]
  },
  {
    id: "mock-report-meal",
    slug: "meal-and-relationship",
    title: "食事の時間から始まる、安心できる関係づくり",
    date: "2026.03.20",
    category: "炊き出し",
    excerpt: "炊き出しは食事支援だけではなく、子どもたちと自然に言葉を交わす入口になっています。",
    image: "/images/meal.jpeg",
    body: [
      "活動期間中には、子どもたちが安心して活動に参加できるよう、食事を提供しています。",
      "食事の時間は、子どもたちと大学生が自然に会話し、関係をつくるきっかけにもなります。"
    ]
  },
  {
    id: "mock-report-sports",
    slug: "sports-challenge",
    title: "サッカーを通して、挑戦する楽しさを届ける",
    date: "2025.02.02",
    category: "スポーツ体験",
    excerpt: "身体を動かし、仲間と協力しながら、できたという感覚を積み重ねました。",
    image: "/images/sports.jpeg",
    body: [
      "サッカーや運動遊びを通して、身体を動かす楽しさ、仲間と協力する経験、挑戦する楽しさを届けています。",
      "過去の活動では、裸足で運動する子どもたちの姿から靴の寄付にもつながりました。"
    ]
  }
];

export const recruitments: Recruitment[] = [
  {
    id: "mock-2026-summer-1",
    slug: "2026-summer-1",
    title: "2026年夏 3Days School 第1回",
    status: "draft",
    period: "8月19日〜25日",
    deadline: "7月17日",
    fee: "参加費 50,000円",
    travelCost: "飛行機代 約40,000円",
    accommodationCost: "宿泊 約20,000円",
    discount: "紹介 40,000円",
    capacity: "確認中",
    formUrl: "",
    note: "資料記載情報をもとにした過去の募集例です。最新の募集情報ではありません。"
  },
  {
    id: "mock-2026-summer-2",
    slug: "2026-summer-2",
    title: "2026年夏 3Days School 第2回",
    status: "draft",
    period: "8月26日〜9月1日",
    deadline: "7月17日",
    fee: "参加費 50,000円 / 紹介 40,000円",
    travelCost: "飛行機代 約40,000円",
    accommodationCost: "宿泊 約20,000円",
    discount: "紹介 40,000円",
    capacity: "確認中",
    formUrl: "",
    note: "資料記載情報をもとにした過去の募集例です。最新の募集情報ではありません。"
  }
];

export const faqs = [
  {
    question: "英語が話せなくても参加できますか",
    answer: "英語力だけで参加可否を決める活動ではありません。必要な準備やサポート体制は募集情報公開時に確認できるようにします。"
  },
  {
    question: "一人で参加する人はいますか",
    answer: "一人参加でも活動に入りやすいよう、渡航前の顔合わせや授業計画の時間を設けます。"
  },
  {
    question: "安全面はどのように考えていますか",
    answer: "現地理解、安全講習、渡航説明会、海外旅行保険などを前提に、無理のない活動設計を大切にします。"
  }
];

export const mainProgram = {
  title: "3Days School",
  image: "/images/classroom-writing.jpeg",
  summary:
    "フィリピン・マニラの子どもたちに向けて、日本人大学生と現地学生が協力して運営する短期学校プログラムです。",
  purpose: "授業、スポーツ、夏祭り・日本文化体験、炊き出し・食事提供を通して、新しい体験や成功体験を届けます。"
};

export const slumTourProgram = {
  title: "スラムツアー",
  image: "/images/slum-tour.jpeg",
  summary:
    "現地の協力団体とともに、一般的なツアーでは入れないような地域の奥まで歩き、そこで暮らす人々の生活に触れます。",
  purpose:
    "子どもたちに向けた活動を始める前に、彼らがどのような環境で暮らしているのかを自分の目で知ることで、どのような姿勢で向き合うべきかを考えるきっかけにします。",
  note:
    "危険な場所へ入ることを目的にするのではなく、現地団体の協力のもと、安全に配慮しながら、表面的な見学では分からない生活の実態に触れるプログラムです。"
};

export const schoolContents = [
  {
    title: "授業",
    image: "/images/hero-classroom.jpeg",
    summary: "ものづくりや実験など、手を動かしながら学ぶ授業を企画します。",
    purpose: "知識を教えるだけではなく、自分で試すことの面白さを大切にします。"
  },
  {
    title: "スポーツ",
    image: "/images/sports.jpeg",
    summary: "サッカーや運動遊びを通して、身体を動かす楽しさを届けます。",
    purpose: "仲間と協力し、挑戦する楽しさを実感できる時間をつくります。"
  },
  {
    title: "夏祭り・日本文化体験",
    image: "/images/festival.jpeg",
    summary: "射的、ヨーヨー、輪投げ、屋台など、日本ならではの遊びを体験してもらいます。",
    purpose: "文化の違いを楽しみながら、子どもたちと学生が自然に交流できる場をつくります。"
  },
  {
    title: "炊き出し・食事提供",
    image: "/images/meal.jpeg",
    summary: "活動期間中には食事を提供し、子どもたちが安心して参加できる環境を整えます。",
    purpose: "食事支援にとどまらず、関係づくりの入口として大切にしています。"
  }
];

export const supportPrograms = [
  {
    title: "事前ミーティング",
    image: "/images/pre-meeting.jpeg",
    alt: "資料を見ながら事前ミーティングを行う学生たち",
    summary: "渡航前にメンバー同士で顔を合わせ、活動の目的や役割を共有します。",
    purpose: "現地での活動に向けて、参加者同士が準備しやすい状態をつくります。"
  },
  {
    title: "安全講習・渡航説明",
    image: "/images/safety-briefing.jpeg",
    alt: "スクリーンを使って安全面や渡航について説明している様子",
    summary: "渡航前に安全講習と渡航説明会を行います。",
    purpose: "現地での行動や注意点を事前に確認し、無理のない活動につなげます。"
  },
  {
    title: "活動後の振り返り",
    image: "/images/reflection.jpeg",
    alt: "現地活動後に円座で振り返りを行う学生たち",
    summary: "現地活動後に振り返りの時間を設けます。",
    purpose: "活動で得た学びや気づきを、次の一歩につなげるための時間です。"
  }
];

export const otherActivities = [
  {
    title: "学生向け講演",
    image: "/images/student-lecture.jpeg",
    alt: "体育館で学生に向けて活動経験を話している様子",
    badge: "これまでの取り組み",
    body: [
      "ITS DAYでは、現地での活動経験を活かした講演活動も行っています。",
      "フィリピン・マニラでの活動を通して感じたことや、現地の暮らし、子どもたちとの出会い、活動に込めた想いを、自身の経験をもとに伝えています。",
      "また、現地での経験をSDGsやキャリア教育と関連づけ、社会課題を自分ごととして考えることや、自分自身の将来、挑戦することの意味について考える機会を届けています。",
      "講演を通して、新しい価値観に触れたり、自分なりの一歩を踏み出したりするきっかけをつくることを目指しています。"
    ]
  },
  {
    title: "国内災害ボランティア",
    image: "/images/noto-volunteer.jpeg",
    alt: "能登半島地震の復興支援で屋外の復旧作業に参加している様子",
    badge: "現在は活動終了",
    body: [
      "ITS DAYでは、海外での活動だけでなく、国内で発生した災害の復興支援にも取り組んできました。",
      "能登半島地震の発生後、被災地を継続的に訪れ、瓦礫の撤去や清掃などの復旧支援、地域の方々との交流、復興に関わる活動に参加しました。",
      "現地で必要とされていることを知り、自分たちにできることを考えて行動する経験は、フィリピンでの活動にも共通するITS DAYの大切な姿勢につながっています。",
      "なお、能登半島地震の復興支援活動への参加は現在終了しており、現在も定期的に実施している活動ではありません。"
    ]
  }
];
