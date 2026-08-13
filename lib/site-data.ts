export type ActivityReport = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  contentHtml: string;
  gallery: {
    url: string;
    width?: number;
    height?: number;
  }[];
};

export type Recruitment = {
  id: string;
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  contentHtml: string;
  applicationUrl: string;
  isOpen: boolean;
  publishedAt: string;
};

export type FaqAnswerPart = {
  text: string;
  href?: string;
  external?: boolean;
};

export type Faq = {
  question: string;
  answer: string;
  answerParts?: FaqAnswerPart[];
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
    contentHtml:
      "<p>3Days Schoolでは、日本人大学生が先生となり、スポーツ、図工、理科などの実技授業を行います。</p><p>正解を覚えることだけではなく、できた、楽しい、もう一度やってみたいという成功体験を大切にしています。</p>",
    gallery: []
  },
  {
    id: "mock-report-meal",
    slug: "meal-and-relationship",
    title: "食事の時間から始まる、安心できる関係づくり",
    date: "2026.03.20",
    category: "炊き出し",
    excerpt: "炊き出しは食事支援だけではなく、子どもたちと自然に言葉を交わす入口になっています。",
    image: "/images/meal.jpeg",
    contentHtml:
      "<p>活動期間中には、子どもたちが安心して活動に参加できるよう、食事を提供しています。</p><p>食事の時間は、子どもたちと大学生が自然に会話し、関係をつくるきっかけにもなります。</p>",
    gallery: []
  },
  {
    id: "mock-report-sports",
    slug: "sports-challenge",
    title: "サッカーを通して、挑戦する楽しさを届ける",
    date: "2025.02.02",
    category: "スポーツ体験",
    excerpt: "身体を動かし、仲間と協力しながら、できたという感覚を積み重ねました。",
    image: "/images/sports.jpeg",
    contentHtml:
      "<p>サッカーや運動遊びを通して、身体を動かす楽しさ、仲間と協力する経験、挑戦する楽しさを届けています。</p><p>過去の活動では、裸足で運動する子どもたちの姿から靴の寄付にもつながりました。</p>",
    gallery: []
  }
];

export const faqs: Faq[] = [
  {
    question: "一人で参加する学生はいますか",
    answer: "一人で参加する学生も想定しています。渡航前に顔合わせやミーティングを行い、活動の目的や役割を共有しながら準備します。"
  },
  {
    question: "友人と一緒に参加できますか",
    answer: "はい、友人と一緒に参加していただけます。ただし、参加申し込みはそれぞれ個別にお願いいたします。"
  },
  {
    question: "海外経験がなくても参加できますか",
    answer: "海外経験の有無だけで参加可否を決める活動ではありません。初めて海外へ行く方にも分かるよう、渡航前の説明や準備の時間を設けます。"
  },
  {
    question: "英語が得意でなくても参加できますか",
    answer: "はい、英語が得意でなくても参加できます。実際に、英語をほとんど話せない状態で参加した学生もいます。また、希望者には参加確定後、現地での活動に向けた英語レッスンも行っています。"
  },
  {
    question: "大学や学年に制限はありますか",
    answer: "大学生であれば、大学や学年による制限はありません。所属する大学や学年に関係なく参加していただけます。"
  },
  {
    question: "初めてボランティアに参加する人でも大丈夫ですか",
    answer: "はい、初めてボランティアに参加する方でも参加できます。活動前に顔合わせや準備、渡航説明などを行うため、ボランティア経験がなくても安心して参加していただけます。"
  },
  {
    question: "現地ではどのような活動をしますか",
    answer: "主な活動は、スラムツアーへの参加と3Days Schoolの運営です。渡航前から授業や企画などの準備を行い、現地では子どもたちに向けてさまざまな活動を実施します。詳しくは「活動内容」ページをご覧ください。",
    answerParts: [
      { text: "主な活動は、スラムツアーへの参加と3Days Schoolの運営です。渡航前から授業や企画などの準備を行い、現地では子どもたちに向けてさまざまな活動を実施します。詳しくは" },
      { text: "「活動内容」", href: "/activities" },
      { text: "ページをご覧ください。" }
    ]
  },
  {
    question: "安全面はどのように考えていますか",
    answer: "海外での活動には一定のリスクが伴うため、参加者の安全を最優先に活動しています。渡航前には安全講習や現地での注意事項の共有を行い、活動中は原則として団体で行動します。また、現地のNGO団体「Bless the Children Foundation」と連携し、現地の状況を確認しながら活動を行っています。参加者には海外旅行保険への加入も必須としています。",
    answerParts: [
      { text: "海外での活動には一定のリスクが伴うため、参加者の安全を最優先に活動しています。渡航前には安全講習や現地での注意事項の共有を行い、活動中は原則として団体で行動します。また、現地のNGO団体" },
      { text: "「Bless the Children Foundation」", href: "http://www.bysmpblessthechildren.com/", external: true },
      { text: "と連携し、現地の状況を確認しながら活動を行っています。参加者には海外旅行保険への加入も必須としています。" }
    ]
  },
  {
    question: "海外旅行保険への加入は必要ですか",
    answer: "はい、参加者には海外旅行保険への加入を必須としています。万が一のけがや病気、トラブルなどに備え、渡航前に加入をお願いしています。"
  },
  {
    question: "参加費以外にどのくらい費用がかかりますか",
    answer: "参加費とは別に、航空券代と宿泊費が自己負担となります。時期や予約状況によって異なりますが、目安として航空券は往復4〜5万円程度、宿泊費は2万円程度です。あくまで目安となるため、実際の費用は参加時期によって前後します。"
  },
  {
    question: "参加までの流れを教えてください",
    answer: "説明会応募 → 参加申し込み → 顔合わせ → 授業計画・渡航説明 → 現地活動、という流れで進みます。参加確定後は、他の参加者や運営メンバーと一緒に渡航に向けた準備を進めていきます。"
  },
  {
    question: "募集情報はどこで確認できますか",
    answer: "最新の募集情報は、当サイトの「募集情報」ページとITS DAY公式Instagramでお知らせしています。募集開始時期や日程、参加費などの詳細もあわせてご確認いただけます。",
    answerParts: [
      { text: "最新の募集情報は、当サイトの" },
      { text: "「募集情報」", href: "/recruitments" },
      { text: "ページと" },
      { text: "ITS DAY公式Instagram", href: "instagram", external: true },
      { text: "でお知らせしています。募集開始時期や日程、参加費などの詳細もあわせてご確認いただけます。" }
    ]
  },
  {
    question: "参加を迷っている段階でも相談できますか",
    answer: "参加を決める前の相談も可能です。活動内容や不安な点について、InstagramのDMからお気軽にご連絡ください。"
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
