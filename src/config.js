// ═══════════════════════════════════════════════════════════
//  SITE CONFIG — update everything here before going live
// ═══════════════════════════════════════════════════════════

export const TRADER = {
  name: 'Wizard Trader 7',
  tagline: 'Stop Guessing. Start Trading.',
  subTagline: 'Learn From World\'s Best Mentor - Harshit Patel',
  bio: `Years of market experience. Thousands of traders mentored. One mission — to simplify trading.

Wizard Trader 7, founded by Harshit Patel, is a professional trading education platform focused on helping traders understand the markets with clarity and discipline.

With years of experience in the financial markets, Harshit Patel has built a strong community of traders, influencing millions of people with his trading knowledge, mentorship programs, and insights shared at multiple TEDx talks.

His approach focuses on real market understanding rather than shortcuts or unrealistic promises. Every lesson is designed to help traders build confidence, develop discipline, and make better trading decisions.`,

  photo: "/assets/media/photo.jpg",

  stats: [
    { n: 10, suffix: '+', label: 'Years Live Trading' },
    { n: 10000, suffix: '+', label: 'Students Trained' },
    { n: 5, suffix: '+', label: 'Years Teaching' },
    { n: 3, suffix: 'Cr+', label: 'Student Profits' },
  ],

}

// ═══════════════════════════════════════════════════════════
//  QUICK TABS — shown on the hero section
// ═══════════════════════════════════════════════════════════
export const QUICK_TABS = [
  { label: 'Live Trading Class', targetId: '/live-batch', color: 'var(--accent)', shadow: 'var(--accent)', theme: 'purple' },
  //{ label: 'Psychology Mastery', targetId: 'https://www.wizardtrader7.com/courses/813688', color: '#ffa94d', shadow: 'rgba(255,169,77,0.8)', theme: 'orange' },
  { label: 'Smart AI Access', targetId: 'https://smartaitradingpro.com/', color: '#00e5a0', shadow: 'rgba(0,229,160,0.8)', theme: 'green' },
]

// ═══════════════════════════════════════════════════════════
//  COURSES — add / edit courses here
// ═══════════════════════════════════════════════════════════

// Module types:
//   { type: 'section', icon: '🪙', title: 'Section Title' }
//   { type: 'item',    text: 'Bullet point text' }
//   { type: 'intro',   text: 'Introductory paragraph text' }
//   { type: 'disclaimer', text: 'Disclaimer text' }

export const COURSES = [
  {
    id: 'September Batch',
    tag: 'Live September Batch',
    isLive: true,           // ← drives the LIVE badge on the card
    lifetimeAccess: true,           // ← drives the Lifetime Access badge
    image: '/assets/media/september_batch_basic_to_advance.png',
    title: 'BASIC TO ADVANCE BATCH – LIVE SEPTEMBER BATCH',
    tags: ['Live Class', '1 Month Free Smart AI'],
    subtitle: 'FREE 1 MONTH ACCESS TO SMART AI IF ENROLLED IN THIS BATCH.',
    price: '₹28,000',
    landingPage: '/live-batch',
    duration: '1 Month',
    sessions: '5× per week',
    mode: 'Online',
    batchDate: '20 SEPTEMBER · 10 PM – 11 PM IST',
    hasCoupon: true,
    couponValue: '₹13,000',
    modules: [
      {
        type: 'intro',
        text: 'If you want to truly understand Crypto 🪙 and Gold 🥇 trading, this intensive 1-month live training program is designed to take you from absolute basics to advanced trading concepts using real market conditions.\n\nThis program is built from my 10+ years of real trading experience 📈 in financial markets and structured to help traders understand how markets actually behave, not just theoretical concepts.\n\nUnlike typical courses that rely heavily on PDFs and recorded lectures 📚, this training focuses on learning directly on live charts 📊 and real-time market movements, so students can understand how decisions are made in real trading environments.'
      },
      {
        type: 'section',
        icon: '📊',
        title: 'Crypto & Gold Market Fundamentals'
      },
      { type: 'item', text: 'Understanding how Crypto and Gold markets move' },
      { type: 'item', text: 'Key drivers behind price movements' },
      { type: 'item', text: 'Market structure and market behavior' },

      {
        type: 'section',
        icon: '📈',
        title: 'Technical Analysis (Practical Approach)'
      },
      { type: 'item', text: 'Chart reading from basic to advanced' },
      { type: 'item', text: 'High-probability trading setups' },
      { type: 'item', text: 'Identifying trends, reversals & momentum' },
      { type: 'item', text: 'Understanding liquidity and market behavior' },

      {
        type: 'section',
        icon: '⏰',
        title: 'Best Time Windows for Trading'
      },
      { type: 'item', text: 'Learn the most effective trading sessions for Crypto & Gold' },
      { type: 'item', text: 'Identify high-liquidity market hours for better trade opportunities' },
      { type: 'item', text: 'Understanding when volatility is highest for maximum trading outcome' },
      { type: 'item', text: 'How professional traders choose the right time window to trade' },

      {
        type: 'section',
        icon: '📊',
        title: 'Live Chart Learning'
      },
      { type: 'item', text: 'Concepts explained directly on live charts' },
      { type: 'item', text: 'Learn how to analyze real-time market situations' },
      { type: 'item', text: 'Practice reading charts like professional traders' },

      {
        type: 'section',
        icon: '🛡️',
        title: 'Risk Management (Most Important Skill)'
      },
      { type: 'item', text: 'Proper position sizing strategies' },
      { type: 'item', text: 'Capital protection techniques' },
      { type: 'item', text: 'How professional traders control risk' },

      {
        type: 'section',
        icon: '🧠',
        title: 'Trading Psychology'
      },
      { type: 'item', text: 'How to control emotions during trades' },
      { type: 'item', text: 'Building discipline and consistency' },
      { type: 'item', text: 'Avoiding common trader mistakes' },

      {
        type: 'section',
        icon: '🎯',
        title: 'Probability & Law of Averages'
      },
      { type: 'item', text: 'Understanding probability in trading' },
      { type: 'item', text: 'Why no strategy wins every trade' },
      { type: 'item', text: 'Building consistency using statistical thinking' },

      {
        type: 'section',
        icon: '🔥',
        title: 'Live Market Sessions'
      },
      { type: 'item', text: 'Live training with real markets' },
      { type: 'item', text: 'Real-time analysis of Crypto & Gold charts' },
      { type: 'item', text: 'Practical learning with actual market examples' },

      {
        type: 'section',
        icon: '👨‍🎓',
        title: 'Who This Program Is For'
      },
      { type: 'item', text: 'Beginners who want to start trading the right way' },
      { type: 'item', text: 'Traders who struggle with consistency' },
      { type: 'item', text: 'People who want to understand real trading, not just theory' },
      {
        type: 'intro',
        text: 'By the end of this program, you will develop a structured approach to analyzing markets, managing risk, and making disciplined trading decisions.'
      },

      {
        type: 'section',
        icon: '🚨',
        title: 'Limited Seats Only'
      },
      {
        type: 'intro',
        text: 'If you are serious about learning trading the right way 📈, understanding real markets, and developing professional trading discipline, this batch starting 20th September is the perfect opportunity.\n\n🚀 Secure your seat and begin your journey toward structured trading today.'
      },

      {
        type: 'disclaimer',
        text: '• We are not SEBI registered advisors.\n• This program is purely for educational purposes 📚.\n• We do not provide financial or investment advice.\n• Trading in financial markets involves risk ⚠️, and participants are responsible for their own decisions.\n• **Course fees are strictly non-refundable ❌ under any circumstance'
      },
    ],
    paymentUrl: "https://www.wizardtrader7.com/courses/880561?true&coupon=STUDENT007",
    highlight: true,
  },

  {
    id: 'Basic to Advance 2.0',
    tag: 'Recorded Course',
    isLive: false,
    lifetimeAccess: false,
    oneYearValidity: true,
    image: '/assets/media/BasicToAdvanceRecorded.jpeg',
    title: 'BASIC TO ADVANCE BATCH 2.0 (RECORDED CLASSES)',
    tags: ['trading for beginners', 'REC'],
    subtitle: 'Unlock your potential in the financial markets with our comprehensive Basic to Advance Trading Mastery Program 2.0.',
    price: '₹6,999',
    duration: '1 Year Validity',
    sessions: '40+ Hours of Content',
    mode: 'Recorded Videos',
    batchDate: 'Instant Access',
    modules: [
      {
        type: 'intro',
        text: 'Unlock your potential in the financial markets with our comprehensive Basic to Advance Trading Mastery Program 2.0, designed for beginners as well as experienced traders who want to build a strong foundation and develop a professional trading approach.\n\nWith 40+ hours of recorded content and 1 year validity, this program covers everything from market basics to advanced trading concepts across Stocks, Options, Futures, Crypto, Forex, and Gold.'
      },
      {
        type: 'section',
        icon: '📈',
        title: 'Technical Analysis & Price Action'
      },
      { type: 'item', text: 'Technical Analysis Concepts' },
      { type: 'item', text: 'Price Action Trading' },
      { type: 'item', text: 'Support & Resistance' },
      { type: 'item', text: 'Trendlines' },
      { type: 'item', text: 'Fibonacci Theory' },
      { type: 'item', text: 'Volume Analysis' },
      { type: 'item', text: 'Candlestick Patterns' },
      { type: 'item', text: 'Price Psychology' },
      { type: 'item', text: 'Demand & Supply Zones' },
      { type: 'item', text: 'RSI Indicator' },
      { type: 'item', text: 'Live Market Traps & Manipulation' },
      {
        type: 'section',
        icon: '📊',
        title: 'Trading Styles & Market Segments'
      },
      { type: 'item', text: 'Scalping Trading' },
      { type: 'item', text: 'Intraday Trading' },
      { type: 'item', text: 'Swing Trading' },
      { type: 'item', text: 'Equity Trading' },
      { type: 'item', text: 'Options Trading' },
      { type: 'item', text: 'Futures Trading' },
      { type: 'item', text: 'Option Strategies' },
      { type: 'item', text: 'Hedging Techniques' },
      {
        type: 'section',
        icon: '🛡️',
        title: 'Professional Trading Process'
      },
      { type: 'item', text: 'Risk Management' },
      { type: 'item', text: 'Money Management' },
      { type: 'item', text: 'Risk-to-Reward Planning' },
      { type: 'item', text: 'Position Sizing' },
      { type: 'item', text: 'Trade Planning & Execution' },
      {
        type: 'section',
        icon: '🧠',
        title: 'Trading Psychology & Discipline'
      },
      { type: 'item', text: 'Trading Psychology' },
      { type: 'item', text: 'Probability Theory' },
      { type: 'item', text: 'Law of Averages' },
      { type: 'item', text: 'Order Flow Concepts' },
      { type: 'item', text: 'Emotional Control' },
      { type: 'item', text: 'Fear of Execution' },
      { type: 'item', text: 'Fear of Loss' },
      { type: 'item', text: 'Building Discipline as a Trader' },
      {
        type: 'section',
        icon: '🎁',
        title: 'Bonus Learning Modules'
      },
      { type: 'item', text: 'Crypto Trading Masterclass' },
      { type: 'item', text: 'Gold Trading Masterclass' },
      { type: 'item', text: 'Forex Trading' },
      { type: 'item', text: 'Crypto Fundamental Analysis' },
      { type: 'item', text: 'Stock Fundamental Analysis' },
      { type: 'item', text: 'Options Greeks' },
      { type: 'item', text: 'Live Trading Sessions' },
      {
        type: 'section',
        icon: '✅',
        title: 'Course Benefits'
      },
      { type: 'item', text: '40+ Hours of Recorded Content' },
      { type: 'item', text: '1 Year Validity' },
      { type: 'item', text: 'Learn at Your Own Pace' },
      { type: 'item', text: 'Beginner to Advanced Curriculum' },
      { type: 'item', text: 'Practical Market-Oriented Approach' },
      { type: 'item', text: 'Multiple Asset Classes Covered' },
      { type: 'item', text: 'Real Trading Examples & Live Sessions' },
      {
        type: 'intro',
        text: 'Whether your goal is to generate an additional income stream, become a full-time trader, or gain confidence in the markets, this program provides a structured roadmap to help you develop the skills, mindset, and risk management techniques used by successful traders.'
      },
      {
        type: 'disclaimer',
        text: 'Note: Course fees are non-refundable.'
      }
    ],
    paymentUrl: "https://wzhdwc.courses.store/courses/509595",
    highlight: false,
  },

  {
    id: 'Crypto & Gold',
    tag: 'Recorded Course',
    isLive: false,
    lifetimeAccess: false,
    oneYearValidity: true,
    image: '/assets/media/Tradingsystem.jpeg',
    title: 'CRYPTO & GOLD TRADING SYSTEM by WIZARD TRADER',
    tags: ['Crypto', 'Gold', 'Recorded'],
    subtitle: 'Understand the complete trading process through a structured, recorded learning program.',
    price: '₹3,999',
    duration: '1 Year Validity',
    sessions: '20 Video lectures',
    mode: 'Recorded Videos',
    batchDate: 'Instant Access',
    modules: [
      {
        type: 'intro',
        text: 'If you want to learn how professional traders analyze and trade the Crypto market, CRYPTO & GOLD TRADING SYSTEM by WIZARD TRADER is designed to help you understand the complete trading process through a structured, recorded learning program.\n\nBuilt from years of practical market experience, this course focuses on real-world trading concepts, chart analysis, market behavior, and risk management techniques that traders can apply in their daily market decisions.'
      },
      {
        type: 'section',
        icon: '📚',
        title: 'What You\'ll Learn'
      },
      { type: 'item', text: 'Crypto Market Structure & Price Action' },
      { type: 'item', text: 'High-Probability Trading Setups' },
      { type: 'item', text: 'Trend, Reversal & Momentum Analysis' },
      { type: 'item', text: 'Liquidity Concepts & Market Behavior' },
      { type: 'item', text: 'Entry, Exit & Trade Management Techniques' },
      { type: 'item', text: 'Risk Management & Capital Protection' },
      { type: 'item', text: 'Trading Psychology & Discipline' },
      { type: 'item', text: 'Chart Reading from Basic to Advanced Levels' },
      {
        type: 'intro',
        text: 'This recorded course allows you to learn at your own pace with 1 year validity, making it suitable for both beginners and traders looking to improve their consistency and understanding of the market.'
      },
      {
        type: 'section',
        icon: '👨‍🎓',
        title: 'Who Is This Course For?'
      },
      { type: 'item', text: 'Complete Beginners' },
      { type: 'item', text: 'Intermediate Traders' },
      { type: 'item', text: 'Traders Struggling with Consistency' },
      { type: 'item', text: 'Anyone Interested in Learning a Structured Trading Approach' },
      {
        type: 'intro',
        text: 'By the end of this course, you will have a clear framework for analyzing market conditions, identifying trading opportunities, and managing risk with confidence.'
      },
      {
        type: 'disclaimer',
        text: '• This course is for educational purposes only.\n• We are not SEBI-registered investment advisors.\n• No financial or investment advice is provided.\n• Trading in financial markets involves risk, and participants are responsible for their own decisions.\n• Course fees are strictly non-refundable under any circumstances.'
      }
    ],
    paymentUrl: "https://wzhdwc.courses.store/courses/861704",
    highlight: false,
  },

  // {
  //   id: 'Brain Yoga',
  //   tag: 'Psychology',
  //   isLive: false,
  //   lifetimeAccess: false,
  //   image: '/assets/media/psychology.webp', // The user can drop a brain yoga image in public/assets/media/ and link it here
  //   title: 'PSYCHOLOGY by WIZARD TRADER : BRAIN YOGA',
  //   tags: ['Psychology', 'Mindset', 'Recorded'],
  //   subtitle: 'Develop discipline, emotional control, and a powerful trading mindset.',
  //   price: '₹1,999',
  //   duration: '1 Month Validity',
  //   sessions: '4 Video lectures',
  //   mode: 'Recorded Videos',
  //   batchDate: 'Instant Access',
  //   modules: [
  //     {
  //       type: 'intro',
  //       text: 'Trading success is not just about strategies or indicators — it’s about mastering your mind.\n\nBRAIN YOGA by Wizard Trader is a unique psychology-focused program designed to help traders develop discipline, emotional control, and a powerful trading mindset.\n\nMany traders know the strategies but still fail because of fear, greed, hesitation, and lack of discipline. This program trains your brain to think like a professional trader so you can make calm, logical, and confident decisions in the market.\n\nThrough powerful mindset training, practical exercises, and real trading insights, you will learn how to control emotions, eliminate impulsive decisions, and build long-term consistency.'
  //     },
  //     {
  //       type: 'section',
  //       icon: '🔥',
  //       title: 'What Makes This Program Special'
  //     },
  //     { type: 'item', text: 'Monthly Live Session with Wizard Trader: Every month, join an exclusive live session conducted personally by Wizard Trader where he shares real insights, mindset training, and answers trader questions.' },
  //     { type: 'item', text: 'Master Trading Psychology: Understand the mental framework professional traders use to stay consistent in volatile markets.' },
  //     { type: 'item', text: 'Control Fear & Greed: Learn how to overcome the two biggest emotions that destroy most trading accounts.' },
  //     { type: 'item', text: 'Develop Discipline: Train your mind to follow your trading system without hesitation or emotional interference.' },
  //     { type: 'item', text: 'Think Like a Professional Trader: Shift your mindset from random trading to structured decision-making.' },

  //     {
  //       type: 'section',
  //       icon: '📚',
  //       title: 'What You Will Learn'
  //     },
  //     { type: 'item', text: 'The psychology behind profitable traders' },
  //     { type: 'item', text: 'How to control emotions during wins and losses' },
  //     { type: 'item', text: 'Managing fear of loss and fear of execution' },
  //     { type: 'item', text: 'Developing patience and discipline' },
  //     { type: 'item', text: 'Building confidence in your trading system' },
  //     { type: 'item', text: 'Avoiding overtrading and revenge trading' },
  //     { type: 'item', text: 'Understanding probability in trading decisions' },
  //     { type: 'item', text: 'Creating a strong and stable trading mindset' },

  //     {
  //       type: 'disclaimer',
  //       text: '⚠️ Important Note\n\nThis program focuses on mental discipline and psychological development for traders.\n\n• This is for educational purposes only.\n• We are not SEBI registered.\n• Fees once paid are non-refundable.'
  //     }
  //   ],
  //   paymentUrl: "https://wzhdwc.courses.store/813688",
  //   highlight: false,
  // },
  // {
  //   id:              'AI Indicator',
  //   tag:             'Tools',
  //   isLive:          false,
  //   lifetimeAccess:  true,
  //   image:           '/assets/media/proxyimage.webp',
  //   title:           'AI INDICATOR',
  //   tags:            ['AI', 'Trading Tools'],
  //   subtitle:        'Next-generation trading indicator powered by artificial intelligence.',
  //   price:           'TBA',
  //   duration:        'Lifetime Access',
  //   sessions:        'Software Tool',
  //   mode:            'TradingView Indicator',
  //   batchDate:       'Prebook Now',
  //   modules: [
  //     {
  //       type: 'intro',
  //       text: 'The AI Indicator is a revolutionary tool designed to assist traders in making data-driven decisions using advanced artificial intelligence algorithms. Prebook now to get early access.'
  //     },
  //     {
  //       type: 'section',
  //       icon: '🤖',
  //       title: 'Key Features'
  //     },
  //     { type: 'item', text: 'Smart trend detection and reversal signals' },
  //     { type: 'item', text: 'Automated support and resistance mapping' },
  //     { type: 'item', text: 'Real-time alerts for high-probability setups' }
  //   ],
  //   isPrebook:   true,
  //   prebookUrl:  '/ai-indicator', // UPDATE THIS URL LATER ONCE THE NEW STANDALONE SITE IS DEPLOYED
  //   highlight:   false,
  // },
]

// ═══════════════════════════════════════════════════════════
//  TESTIMONIALS
// ═══════════════════════════════════════════════════════════
export const TESTIMONIALS = [
  { name: 'Hardeep Honey', course: 'Basic to Advance', text: 'Wizard sir is best tutor for stock market in the world . He is my mentor now and he is the only one and last one for me' },
  { name: 'Prashant', course: 'Basic to Advance', text: 'What I could not learn in approx 2 year. You taught me in just 40 days class ! You are superb sir It\'s a pleasure to be a student your' },
  { name: 'Prashant Sharma', course: 'In January Batch', text: 'Harshit sir apne students ke liye hamesha best hi karte hai.. thanks sir thanks a lot lucty to have a guru like you in my Life🙏🕉' },
  { name: 'Dhruv', course: 'Basic to Advance', text: 'Sir, you teach very well. I got to learn a lot. Now I am becoming a profitable trader. Thank you Sir.' },
  { name: 'Aman Jain', course: 'Basic to Advance', text: 'Sir\'s ability to teach trading in the simplest and most understandable way is unmatched. No one can make it clearer or easier to learn. BEST' },
  { name: 'Manish Singh Rajpoot', course: 'Basic to Advance', text: 'My dear mentor Harshit patel sir . You are the bestist teacher in the world.And you are a true human being too. Thankyou so much enter life' },
  { name: 'Alisaad', course: 'Basic to Advance', text: 'Harshit Sir explains tough trading concepts so clearly. Practical, deep knowledge. Best mentor for serious traders' },
  { name: 'Ritesh Yadav', course: 'Basic to Advance', text: 'Hello sir you are very humble person. mere liye aap duniya ke number one teacher ho . Love you sir ❤️🙏' },
]


// ═══════════════════════════════════════════════════════════
//  PLATFORMS — Affiliate links for brokers
// ═══════════════════════════════════════════════════════════
export const PLATFORMS = [
  {
    title: 'Vantage',
    badge: 'FOREX & CFDS',
    desc: 'Trade Forex, indices, commodities, and crypto CFDs with tight spreads on a trusted multi-asset broker.',
    code: 'WIZARDTRADER',
    stats: [
      { value: '1000+', label: 'INSTRUMENTS' },
      { value: '172', label: 'COUNTRIES' },
      { value: '10+', label: 'YEARS' },
    ],
    link: 'https://vigco.co/la-com-inv/WIZARDTRADER',
    logo: '/assets/media/vantage.jpg',
  },
  {
    title: 'Coin DCX',
    badge: 'CRYPTO EXCHANGE',
    desc: 'India\'s safest crypto exchange. Trade Bitcoin, Ethereum and 500+ other crypto assets securely. Features deep liquidity, advanced trading tools, and robust security protocols to ensure a seamless and protected trading experience.',
    stats: [
      { value: '500+', label: 'ASSETS' },
      { value: 'INR', label: 'DEPOSITS' },
      { value: 'SECURE', label: 'PLATFORM' },
    ],
    link: 'https://invite.coindcx.com/51280970',
    logo: '/assets/media/coindcx.png',
    highlight: true,
  },
  {
    title: 'Delta Exchange',
    badge: 'CRYPTO DERIVATIVES',
    desc: 'Advanced crypto derivatives exchange offering futures, options, and perpetual contracts with competitive fees and professional trading tools.',
    code: 'RGKEWS',
    stats: [
      { value: '200+', label: 'MARKETS' },
      { value: '0.02%', label: 'MAKER FEE' },
      { value: '100X', label: 'LEVERAGE' },
    ],
    link: 'https://www.delta.exchange/?code=RGKEWS',
    logo: '/assets/media/delta.jpg',
  },
  {
    title: 'Exness',
    badge: 'MULTI-ASSET BROKER',
    desc: 'Experience instant withdrawals and market-leading spreads with one of the most reliable multi-asset brokers in the world.',
    code: 'xume42lkdk',
    stats: [
      { value: 'INSTANT', label: 'WITHDRAWAL' },
      { value: '0.0', label: 'SPREADS' },
      { value: 'HIGH', label: 'LEVERAGE' },
    ],
    link: 'https://one.exnessonelink.com/a/xume42lkdk',
    logo: '/assets/media/exness.jpg',
  },
  {
    title: 'XM',
    badge: 'FOREX & COMMODITIES',
    desc: 'Trade a wide range of instruments with ultra-low spreads and exceptional execution.',
    code: 'Wizardtrader',
    stats: [
      { value: '1000+', label: 'ASSETS' },
      { value: '0', label: 'REQUOTES' },
      { value: '24/7', label: 'SUPPORT' },
    ],
    link: 'https://affs.click/DDB1D',
    logo: '/assets/media/xm.jpg',
  },
  // {
  //   title: 'WinPro FX',
  //   badge: 'FOREX & CFD BROKER',
  //   desc: 'Trade forex, indices, metals, commodities, and cryptocurrency CFDs on the MT5 platform with access to 300+ tradable instruments.',
  //   code: 'Harshitpatel',
  //   stats: [
  //     { value: '300+', label: 'INSTRUMENTS' },
  //     { value: 'MT5', label: 'PLATFORM' },
  //     { value: '1:500', label: 'LEVERAGE' },
  //   ],
  //   link: 'https://my.winprofx.org/register?promo=Harshitpatel',
  //   logo: '/assets/media/winprofx.png',
  // }
]

// ═══════════════════════════════════════════════════════════
//  SOCIAL MEDIA
// ═══════════════════════════════════════════════════════════
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/wizard_trader7/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@OfficialWizardTrader7' },
  { label: 'Twitter', href: 'https://x.com/wizardtrader7' },
  { label: 'Telegram', href: 'https://t.me/wizardtradercommunity' },
]

// ═══════════════════════════════════════════════════════════
//  CHARTS — TradingView published analysis for TCharts section
//  Snapshot URL pattern: https://s3.tradingview.com/snapshots/{id[0]}/{id}.png
// ═══════════════════════════════════════════════════════════
export const CHARTS = [
  {
    id: 'UhycNF3N',
    symbol: 'BTCUSD',
    signal: 'BEARISH',
    date: '2024-11-20',
    title: 'BTC — The Could Be Possible Trade',
    caption: 'A short setup on Bitcoin with key levels and potential downside targets identified.',
    tvLink: 'https://in.tradingview.com/chart/BTCUSD/UhycNF3N-The-could-be-possible-trade/',
    snapshot: 'https://s3.tradingview.com/u/UhycNF3N.png',
  },
  {
    id: '4ardiOVo',
    symbol: 'SILVER',
    signal: 'BULLISH',
    date: '2024-11-18',
    title: 'Silver — Plan to Target FVG',
    caption: 'Silver targeting its FVG zone. If it holds, all-time high incoming — else another low.',
    tvLink: 'https://in.tradingview.com/chart/SILVER/4ardiOVo-Silver-plan/',
    snapshot: 'https://s3.tradingview.com/4/4ardiOVo.png',
  },
  {
    id: 'poEcFfbJ',
    symbol: 'XAUUSD',
    signal: 'BULLISH',
    date: '2024-11-15',
    title: 'Gold — Long Setup',
    caption: 'Gold long trade setup with demand zone support and bullish structure confirmation.',
    tvLink: 'https://in.tradingview.com/chart/XAUUSD/poEcFfbJ-gold-long/',
    snapshot: 'https://s3.tradingview.com/p/poEcFfbJ.png',
  },
  {
    id: 'Hrhco0ww',
    symbol: 'BTCUSDT',
    signal: 'BULLISH',
    date: '2024-11-10',
    title: 'Bitcoin — Long Trade Setup',
    caption: 'Long trade in Bitcoin with key entry zones and risk-reward mapped out.',
    tvLink: 'https://in.tradingview.com/chart/BTCUSDT.P/Hrhco0ww-long-trade-in-bitcoin/',
    snapshot: 'https://s3.tradingview.com/h/Hrhco0ww.png',
  },
  {
    id: '0r0d8L7f',
    symbol: 'NIFTY',
    signal: 'BULLISH',
    date: '2024-11-05',
    title: 'Nifty — Long Opportunity',
    caption: 'Nifty bullish setup from demand zone with clear upside targets.',
    tvLink: 'https://in.tradingview.com/chart/NIFTY/0r0d8L7f-Nifty-long/',
    snapshot: 'https://s3.tradingview.com/0/0r0d8L7f.png',
  },
  {
    id: 'U8YNGTcq',
    symbol: 'NIFTY',
    signal: 'BEARISH',
    date: '2024-10-28',
    title: 'Nifty — A Short Could Be There',
    caption: 'Bearish structure on Nifty with supply zone rejection and short entry levels.',
    tvLink: 'https://in.tradingview.com/chart/NIFTY/U8YNGTcq-A-short-could-be-there/',
    snapshot: 'https://s3.tradingview.com/u/U8YNGTcq.png',
  },
  {
    id: 'GNwCOJYp',
    symbol: 'SILVER',
    signal: 'BULLISH',
    date: '2024-10-20',
    title: 'Silver — Long Setup',
    caption: 'Silver long trade with demand zone bounce and bullish continuation structure.',
    tvLink: 'https://in.tradingview.com/chart/SILVER/GNwCOJYp-Silver-Long/',
    snapshot: 'https://s3.tradingview.com/g/GNwCOJYp.png',
  },
  {
    id: '8SBmsKtF',
    symbol: 'DOTUSDT',
    signal: 'BULLISH',
    date: '2024-10-15',
    title: 'DOT — Polkadot Long Setup',
    caption: 'Polkadot long with ascending structure support and momentum confirmation.',
    tvLink: 'https://in.tradingview.com/chart/DOTUSDT/8SBmsKtF-dot/',
    snapshot: 'https://s3.tradingview.com/8/8SBmsKtF.png',
  },
]
