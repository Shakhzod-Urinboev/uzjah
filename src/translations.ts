export enum Language {
  UZ = 'UZ',
  RU = 'RU',
  EN = 'EN',
  CN = 'CN'
}

export const translations = {
  [Language.EN]: {
    nav: {
      about: 'About',
      products: 'Products',
      facility: 'Facility',
      investors: 'Investors',
      team: 'Team',
      careers: 'Careers',
      contact: 'Contact'
    },
    hero: {
      tagline: 'Precision in Automotive Wiring Solutions',
      cta_contact: 'Contact Us',
      cta_invest: 'Invest With Us'
    },
    about: {
      title: 'About UZJAH',
      subtitle: 'Chinese Technology, Uzbek Excellence',
      content: 'UZJAH is a strategic manufacturing hub in Jizzakh, Uzbekistan, backed by Shanghai Jinting Automobile Harness Co., Ltd. (SJAHL). Established in 1997, SJAHL is a core subsidiary of the publicly traded Jiangsu Yongding Co., Ltd. (Stock Code: 600105). We bring over 25 years of expertise in "Optoelectronics Integration" to the heart of Central Asia.',
      points: [
        'Backed by Yongding Group (Est. 1997)',
        'Advanced Industry 4.0 Manufacturing',
        'Strategic Belt and Road Initiative Partner',
        'Specialized in New Energy Vehicle (NEV) Solutions'
      ]
    },
    products: {
      title: 'Our Products',
      harness: {
        name: 'Body & Engine Harnesses',
        desc: 'Comprehensive body assembly and electronic fuel injection engine harnesses for all vehicle types.'
      },
      custom: {
        name: 'Control System Solutions',
        desc: 'Specialized harnesses for door control, instrument panels, and roof systems.'
      },
      oem: {
        name: 'Safety & Specialized Systems',
        desc: 'High-precision airbag, front-end, and trunk wiring systems for global OEMs.'
      }
    },
    facility: {
      title: 'Production Facility',
      desc: 'Our Jizzakh facility mirrors the high standards of our Shanghai headquarters, featuring automated cutting, crimping, and 100% electrical testing to ensure zero-defect delivery.'
    },
    iso: {
      title: 'Quality & Certifications'
    },
    why: {
      title: 'Why Choose UZJAH',
      items: [
        { title: 'Global Heritage', desc: 'Leveraging 25+ years of Jinting Automobile Harness expertise.' },
        { title: 'NEV Expertise', desc: 'Leading the transition to New Energy Vehicle wiring systems.' },
        { title: 'Supply Chain', desc: 'Integrated with Yongding Group\'s global optoelectronic network.' },
        { title: 'Quality First', desc: 'Multiple "Quality Excellence" awards from global automotive leaders.' }
      ]
    },
    investors: {
      title: 'Investor Relations',
      desc: 'UZJAH is a key part of Yongding Group\'s (600105.SH) global expansion strategy. We combine Chinese industrial maturity with Uzbekistan\'s dynamic economic growth.',
      stats: [
        { label: 'Parent Group Est.', value: '1997' },
        { label: 'Stock Code', value: '600105' },
        { label: 'Global Employees', value: '5000+' }
      ],
      cta: 'Download Group Profile'
    },
    careers: {
      title: 'Careers',
      subtitle: 'Join the Future of Automotive',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        position: 'Position',
        cv: 'Upload CV',
        submit: 'Submit Application'
      }
    },
    contact: {
      title: 'Contact Us',
      address: 'The Republic of Uzbekistan, Jizzakh City, Nurliobod District, Tashkent Street, Building 5',
      phone: '+998 91 626 34 14',
      email: 'info@uzjah.uz'
    },
    news: {
      title: 'Corporate News',
      more: 'View All News',
      items: [
        { date: 'Nov 2024', title: 'UZJAH Jizzakh Facility Reaches Full Operational Capacity', category: 'Corporate' },
        { date: 'Oct 2024', title: 'Strategic Partnership with Global EV Manufacturer Confirmed', category: 'Partnership' },
        { date: 'Sep 2024', title: 'Yongding Group Awarded "Top 100 Electronic Components" in China', category: 'Award' }
      ]
    },
    sustainability: {
      title: 'Sustainability & ESG',
      subtitle: 'Green Manufacturing for a Better Future',
      desc: 'We are committed to reducing our environmental footprint through energy-efficient production and zero-waste initiatives.',
      points: ['ISO 14001 Certified', '100% Recyclable Packaging', 'Solar-Powered Facility Expansion', 'Water Conservation Systems']
    },
    clients: {
      title: 'Our Global Partners'
    },
    downloads: {
      title: 'Technical Center',
      items: [
        { name: 'Company Profile 2024', type: 'PDF', size: '4.2 MB' },
        { name: 'IATF 16949 Certificate', type: 'PDF', size: '1.1 MB' },
        { name: 'Technical Datasheet - Harness', type: 'PDF', size: '2.5 MB' }
      ]
    },
    ai: {
      placeholder: 'Ask our AI Assistant...',
      welcome: 'Welcome to UZJAH. How can I help you today?',
      system: 'You are the official AI Assistant for UZJAH, a leading automotive wiring harness manufacturer in Uzbekistan. You are professional, helpful, and knowledgeable about the company history (founded in 1997 as SJAHL), products (harnesses for body, engine, control systems), and location (Jizzakh). Answer in the user\'s language.',
      quick_actions: {
        quote: 'Request Quote',
        status: 'Check Status',
        tech: 'Technical Specs'
      }
    },
    dashboard: {
      title: 'Live Production Status',
      active_lines: 'Active Lines',
      quality_rate: 'Quality Rate',
      daily_output: 'Daily Output (Sets)',
      status: 'Operational Efficiency'
    },
    specs: {
      voltage: 'Operating Voltage',
      temp: 'Temp Range',
      material: 'Core Material',
      standard: 'Compliance'
    },
    forms: {
      routing: 'Department',
      sales: 'Sales & Export',
      hr: 'Human Resources',
      tech: 'Technical Support',
      success_id: 'Your Tracking ID'
    },
    footer: {
      rights: 'All rights reserved.'
    },
    team: {
      title: 'Our Leadership',
      subtitle: 'Expertise & Innovation',
      departments: {
        management: 'Management',
        production: 'Production & Quality',
        technical: 'Technical & R&D'
      },
      members: {
        gm: { name: 'Zhang Wei', role: 'General Manager' },
        dgm: { name: 'Alisher Karimov', role: 'Deputy General Manager' },
        pd: { name: 'Li Jun', role: 'Production Director' },
        qc: { name: 'Elena Petrova', role: 'Head of Quality Control' },
        ce: { name: 'Wang Hao', role: 'Chief Engineer' },
        rd: { name: 'Dilshod Ahmedov', role: 'R&D Lead' }
      }
    }
  },
  [Language.RU]: {
    nav: {
      about: 'О компании',
      products: 'Продукция',
      facility: 'Производство',
      investors: 'Инвесторам',
      team: 'Команда',
      careers: 'Карьера',
      contact: 'Контакты'
    },
    hero: {
      tagline: 'Точность в решениях для автомобильной проводки',
      cta_contact: 'Связаться с нами',
      cta_invest: 'Инвестировать'
    },
    about: {
      title: 'О компании UZJAH',
      subtitle: 'Китайские технологии, узбекское мастерство',
      content: 'UZJAH — это стратегический производственный центр в Джизаке, созданный при поддержке Shanghai Jinting Automobile Harness Co., Ltd. (SJAHL). Основанная в 1997 году, SJAHL является ключевой дочерней компанией Jiangsu Yongding Co., Ltd. (Код акции: 600105).',
      points: [
        'При поддержке Yongding Group (осн. 1997)',
        'Передовое производство Индустрии 4.0',
        'Стратегический партнер инициативы "Один пояс, один путь"',
        'Специализация на решениях для электромобилей (NEV)'
      ]
    },
    products: {
      title: 'Наша продукция',
      harness: {
        name: 'Жгуты кузова и двигателя',
        desc: 'Комплексные жгуты проводов для сборки кузова и систем впрыска двигателя.'
      },
      custom: {
        name: 'Системы управления',
        desc: 'Специализированные жгуты для управления дверями, приборных панелей и систем крыши.'
      },
      oem: {
        name: 'Системы безопасности',
        desc: 'Высокоточные системы проводки для подушек безопасности и багажных отделений.'
      }
    },
    facility: {
      title: 'Производственные мощности',
      desc: 'Наш завод в Джизаке соответствует высоким стандартам штаб-квартиры в Шанхае, обеспечивая 100% электрическое тестирование.'
    },
    iso: {
      title: 'Качество и сертификаты'
    },
    why: {
      title: 'Почему выбирают UZJAH',
      items: [
        { title: 'Мировое наследие', desc: 'Использование 25-летнего опыта Jinting Automobile Harness.' },
        { title: 'Экспертиза в NEV', desc: 'Лидерство в переходе на системы проводки для электромобилей.' },
        { title: 'Цепочка поставок', desc: 'Интеграция в глобальную сеть Yongding Group.' },
        { title: 'Качество прежде всего', desc: 'Множество наград за качество от мировых автопроизводителей.' }
      ]
    },
    investors: {
      title: 'Инвесторам',
      desc: 'UZJAH является ключевой частью стратегии глобального расширения Yongding Group (600105.SH).',
      stats: [
        { label: 'Основание группы', value: '1997' },
        { label: 'Код акции', value: '600105' },
        { label: 'Сотрудников в мире', value: '5000+' }
      ],
      cta: 'Скачать профиль группы'
    },
    careers: {
      title: 'Карьера',
      subtitle: 'Присоединяйтесь к будущему автопрома',
      form: {
        name: 'ФИО',
        email: 'Электронная почта',
        phone: 'Номер телефона',
        position: 'Должность',
        cv: 'Загрузить резюме',
        submit: 'Отправить заявку'
      }
    },
    contact: {
      title: 'Контакты',
      address: 'Республика Узбекистан, город Джизак, махалля Нурлиобод, улица Ташкентская, дом 5',
      phone: '+998 91 626 34 14',
      email: 'info@uzjah.uz'
    },
    news: {
      title: 'Новости компании',
      more: 'Все новости',
      items: [
        { date: 'Ноя 2024', title: 'Завод UZJAH в Джизаке вышел на полную мощность', category: 'Корпоративные' },
        { date: 'Окт 2024', title: 'Подтверждено партнерство с мировым производителем электромобилей', category: 'Партнерство' },
        { date: 'Сен 2024', title: 'Yongding Group вошла в ТОП-100 производителей электроники Китая', category: 'Награды' }
      ]
    },
    sustainability: {
      title: 'Устойчивое развитие',
      subtitle: 'Экологичное производство для будущего',
      desc: 'Мы стремимся минимизировать воздействие на среду через энергоэффективность и безотходные инициативы.',
      points: ['Сертификат ISO 14001', '100% перерабатываемая упаковка', 'Солнечные панели на заводе', 'Системы экономии воды']
    },
    clients: {
      title: 'Наши глобальные партнеры'
    },
    downloads: {
      title: 'Технический центр',
      items: [
        { name: 'Профиль компании 2024', type: 'PDF', size: '4.2 MB' },
        { name: 'Сертификат IATF 16949', type: 'PDF', size: '1.1 MB' },
        { name: 'Технический паспорт', type: 'PDF', size: '2.5 MB' }
      ]
    },
    ai: {
      placeholder: 'Спросите нашего ИИ-ассистента...',
      welcome: 'Добро пожаловать в UZJAH. Чем я могу вам помочь?',
      system: 'Вы — официальный ИИ-ассистент UZJAH. Вы профессиональны и знаете все о компании (осн. в 1997 как SJAHL), продукции и локации в Джизаке. Отвечайте на языке пользователя.',
      quick_actions: {
        quote: 'Запросить цену',
        status: 'Статус заявки',
        tech: 'Тех. данные'
      }
    },
    dashboard: {
      title: 'Статус производства',
      active_lines: 'Активные линии',
      quality_rate: 'Показатель качества',
      daily_output: 'Выпуск (компл.)',
      status: 'Эффективность'
    },
    specs: {
      voltage: 'Раб. напряжение',
      temp: 'Темп. диапазон',
      material: 'Материал жил',
      standard: 'Стандарт'
    },
    forms: {
      routing: 'Отдел',
      sales: 'Продажи и экспорт',
      hr: 'Отдел кадров',
      tech: 'Тех. поддержка',
      success_id: 'Ваш ID отслеживания'
    },
    footer: {
      rights: 'Все права защищены.'
    },
    team: {
      title: 'Наше руководство',
      subtitle: 'Опыт и инновации',
      departments: {
        management: 'Управление',
        production: 'Производство и качество',
        technical: 'Технический отдел и R&D'
      },
      members: {
        gm: { name: 'Чжан Вэй', role: 'Генеральный директор' },
        dgm: { name: 'Алишер Каримов', role: 'Заместитель ген. директора' },
        pd: { name: 'Ли Цзюнь', role: 'Директор по производству' },
        qc: { name: 'Елена Петрова', role: 'Начальник отдела качества' },
        ce: { name: 'Ван Хао', role: 'Главный инженер' },
        rd: { name: 'Дилшод Ахмедов', role: 'Руководитель R&D' }
      }
    }
  },
  [Language.UZ]: {
    nav: {
      about: 'Kompaniya haqida',
      products: 'Mahsulotlar',
      facility: 'Ishlab chiqarish',
      investors: 'Investorlar',
      team: 'Jamoa',
      careers: 'Karyera',
      contact: 'Aloqa'
    },
    hero: {
      tagline: 'Avtomobil simlari yechimlarida aniqlik',
      cta_contact: 'Biz bilan bog\'laning',
      cta_invest: 'Investitsiya qiling'
    },
    about: {
      title: 'UZJAH haqida',
      subtitle: 'Xitoy texnologiyasi, O\'zbekiston mahorati',
      content: 'UZJAH - Jizzaxdagi strategik ishlab chiqarish markazi bo\'lib, Shanghai Jinting Automobile Harness Co., Ltd. (SJAHL) tomonidan qo\'llab-quvvatlanadi. 1997-yilda tashkil etilgan SJAHL, Jiangsu Yongding Co., Ltd. (Birja kodi: 600105) ning asosiy sho\'ba korxonasidir.',
      points: [
        'Yongding Group tomonidan qo\'llab-quvvatlanadi (1997-y.)',
        'Ilg\'or Sanoat 4.0 ishlab chiqarish',
        'Strategik "Bir makon, bir yo\'l" hamkori',
        'Elektromobillar (NEV) uchun maxsus yechimlar'
      ]
    },
    products: {
      title: 'Mahsulotlarimiz',
      harness: {
        name: 'Kuzov va dvigatel simlari',
        desc: 'Barcha turdagi transport vositalari uchun kuzov yig\'ish va dvigatel simlari.'
      },
      custom: {
        name: 'Boshqaruv tizimlari',
        desc: 'Eshik boshqaruvi, asboblar paneli va tom tizimlari uchun maxsus simlar.'
      },
      oem: {
        name: 'Xavfsizlik tizimlari',
        desc: 'Xavfsizlik yostiqchalari va yuk xonalari uchun yuqori aniqlikdagi simlar.'
      }
    },
    facility: {
      title: 'Ishlab chiqarish quvvati',
      desc: 'Jizzaxdagi zavodimiz Shanxaydagi bosh qarorgoh standartlariga to\'liq javob beradi.'
    },
    iso: {
      title: 'Sifat va sertifikatlar'
    },
    why: {
      title: 'Nima uchun UZJAH?',
      items: [
        { title: 'Global meros', desc: 'Jinting Automobile Harness ning 25 yillik tajribasidan foydalanish.' },
        { title: 'NEV tajribasi', desc: 'Elektromobillar simlari tizimlariga o\'tishda yetakchilik.' },
        { title: 'Ta\'minot zanjiri', desc: 'Yongding Groupning global tarmog\'iga integratsiya.' },
        { title: 'Sifat birinchi o\'rinda', desc: 'Global avtoishlab chiqaruvchilardan ko\'plab sifat mukofotlari.' }
      ]
    },
    investors: {
      title: 'Investorlar uchun',
      desc: 'UZJAH Yongding Group (600105.SH) ning global kengayish strategiyasining muhim qismidir.',
      stats: [
        { label: 'Guruh tashkil etilgan', value: '1997' },
        { label: 'Birja kodi', value: '600105' },
        { label: 'Global xodimlar', value: '5000+' }
      ],
      cta: 'Guruh profilini yuklab olish'
    },
    careers: {
      title: 'Karyera',
      subtitle: 'Avtomobilsozlik kelajagiga qo\'shiling',
      form: {
        name: 'F.I.SH.',
        email: 'Elektron pochta',
        phone: 'Telefon raqami',
        position: 'Lavozim',
        cv: 'Rezyumeni yuklash',
        submit: 'Ariza yuborish'
      }
    },
    contact: {
      title: 'Aloqa',
      address: 'O\'zbekiston Respublikasi, Jizzax shahri, Nurliobod MFY, Toshkent ko\'chasi, 5-uy',
      phone: '+998 91 626 34 14',
      email: 'info@uzjah.uz'
    },
    news: {
      title: 'Kompaniya yangiliklari',
      more: 'Barcha yangiliklar',
      items: [
        { date: 'Noy 2024', title: 'UZJAH Jizzax zavodi to\'liq quvvat bilan ishga tushdi', category: 'Korporativ' },
        { date: 'Okt 2024', title: 'Global EV ishlab chiqaruvchisi bilan hamkorlik tasdiqlandi', category: 'Hamkorlik' },
        { date: 'Sen 2024', title: 'Yongding Group Xitoyning TOP-100 elektronika ishlab chiqaruvchisi', category: 'Mukofot' }
      ]
    },
    sustainability: {
      title: 'Barqaror rivojlanish',
      subtitle: 'Kelajak uchun yashil ishlab chiqarish',
      desc: 'Biz energiya tejamkor ishlab chiqarish va chiqindisiz tashabbuslar orqali atrof-muhitga ta\'sirni kamaytirishga intilamiz.',
      points: ['ISO 14001 sertifikati', '100% qayta ishlanadigan qadoq', 'Quyosh panellari tizimi', 'Suvni tejash tizimlari']
    },
    clients: {
      title: 'Global hamkorlarimiz'
    },
    downloads: {
      title: 'Texnik markaz',
      items: [
        { name: 'Kompaniya profili 2024', type: 'PDF', size: '4.2 MB' },
        { name: 'IATF 16949 sertifikati', type: 'PDF', size: '1.1 MB' },
        { name: 'Texnik ma\'lumotlar varag\'i', type: 'PDF', size: '2.5 MB' }
      ]
    },
    ai: {
      placeholder: 'Sun\'iy intellekt yordamchisidan so\'rang...',
      welcome: 'UZJAHga xush kelibsiz. Bugun sizga qanday yordam bera olaman?',
      system: 'Siz UZJAHning rasmiy AI yordamchisiz. Siz professional va kompaniya haqida hamma narsani bilasiz. Foydalanuvchi tilida javob bering.',
      quick_actions: {
        quote: 'Narxni so\'rash',
        status: 'Holatni tekshirish',
        tech: 'Texnik ma\'lumotlar'
      }
    },
    dashboard: {
      title: 'Ishlab chiqarish holati',
      active_lines: 'Faol liniyalar',
      quality_rate: 'Sifat ko\'rsatkichi',
      daily_output: 'Kunlik mahsulot',
      status: 'Ish samaradorligi'
    },
    specs: {
      voltage: 'Ishchi kuchlanish',
      temp: 'Harorat oralig\'i',
      material: 'Asosiy material',
      standard: 'Muvofiqlik'
    },
    forms: {
      routing: 'Bo\'lim',
      sales: 'Sotuv va eksport',
      hr: 'Kadrlar bo\'limi',
      tech: 'Texnik yordam',
      success_id: 'Kuzatuv ID raqamingiz'
    },
    footer: {
      rights: 'Barcha huquqlar himoyalangan.'
    },
    team: {
      title: 'Bizning rahbariyat',
      subtitle: 'Tajriba va innovatsiya',
      departments: {
        management: 'Boshqaruv',
        production: 'Ishlab chiqarish va sifat',
        technical: 'Texnik bo\'lim va R&D'
      },
      members: {
        gm: { name: 'Zhang Wei', role: 'Bosh direktor' },
        dgm: { name: 'Alisher Karimov', role: 'Bosh direktor o\'rinbosari' },
        pd: { name: 'Li Jun', role: 'Ishlab chiqarish direktori' },
        qc: { name: 'Elena Petrova', role: 'Sifat nazorati rahbari' },
        ce: { name: 'Wang Hao', role: 'Bosh muhandis' },
        rd: { name: 'Dilshod Ahmedov', role: 'R&D rahbari' }
      }
    }
  },
  [Language.CN]: {
    nav: {
      about: '关于我们',
      products: '产品中心',
      facility: '生产基地',
      investors: '投资者关系',
      team: '团队',
      careers: '职业发展',
      contact: '联系我们'
    },
    hero: {
      tagline: '精准的汽车线束解决方案',
      cta_contact: '联系我们',
      cta_invest: '投资合作'
    },
    about: {
      title: '关于 UZJAH',
      subtitle: '中国技术，乌兹别克斯坦制造',
      content: 'UZJAH 是位于乌兹别克斯坦吉扎克的战略制造中心，由上海金亭汽车线束有限公司 (SJAHL) 提供支持。SJAHL 成立于 1997 年，是上市公司江苏永鼎股份有限公司（股票代码：600105）的核心子公司。',
      points: [
        '永鼎集团支持（始于 1997 年）',
        '先进的工业 4.0 制造',
        '战略性“一带一路”合作伙伴',
        '专注于新能源汽车 (NEV) 解决方案'
      ]
    },
    products: {
      title: '我们的产品',
      harness: {
        name: '车身及发动机线束',
        desc: '适用于各类车型的完整车身总成及电喷发动机线束。'
      },
      custom: {
        name: '控制系统方案',
        desc: '专注于门控、仪表板及车顶系统的专业线束。'
      },
      oem: {
        name: '安全及专用系统',
        desc: '为全球 OEM 提供高精度的安全气囊、前端及行李箱接线系统。'
      }
    },
    facility: {
      title: '生产设施',
      desc: '我们的吉扎克工厂遵循上海总部的严苛标准，配备自动化测试设备，确保零缺陷交付。'
    },
    iso: {
      title: '质量与认证'
    },
    why: {
      title: '为什么选择 UZJAH',
      items: [
        { title: '全球传承', desc: '依托金亭汽车线束 25 年以上的专业经验。' },
        { title: '新能源优势', desc: '引领新能源汽车线束系统的转型。' },
        { title: '供应链整合', desc: '深度整合永鼎集团全球光电网络。' },
        { title: '质量至上', desc: '多次荣获全球汽车领导者的“质量优胜奖”。' }
      ]
    },
    investors: {
      title: '投资者关系',
      desc: 'UZJAH 是永鼎集团 (600105.SH) 全球扩张战略的关键组成部分。',
      stats: [
        { label: '集团成立于', value: '1997' },
        { label: '股票代码', value: '600105' },
        { label: '全球员工', value: '5000+' }
      ],
      cta: '下载集团简介'
    },
    careers: {
      title: '职业发展',
      subtitle: '加入汽车工业的未来',
      form: {
        name: '姓名',
        email: '电子邮箱',
        phone: '电话号码',
        position: '职位',
        cv: '上传简历',
        submit: '提交申请'
      }
    },
    contact: {
      title: '联系我们',
      address: '乌兹别克斯坦共和国吉扎克市 Nurliobod 区塔什干街 5 号楼',
      phone: '+998 91 626 34 14',
      email: 'info@uzjah.uz'
    },
    news: {
      title: '企业新闻',
      more: '查看全部新闻',
      items: [
        { date: '2024年11月', title: 'UZJAH 吉扎克工厂达到满负荷生产能力', category: '企业' },
        { date: '2024年10月', title: '与全球电动汽车制造商的战略合作伙伴关系确认', category: '合作' },
        { date: '2024年9月', title: '永鼎集团荣获中国“电子元件百强企业”', category: '奖项' }
      ]
    },
    sustainability: {
      title: '可持续发展与 ESG',
      subtitle: '绿色制造，共创美好未来',
      desc: '我们致力于通过节能生产和零废物倡议来减少环境足迹。',
      points: ['ISO 14001 认证', '100% 可回收包装', '太阳能发电设施扩建', '节水系统']
    },
    clients: {
      title: '我们的全球合作伙伴'
    },
    downloads: {
      title: '技术中心',
      items: [
        { name: '2024 公司简介', type: 'PDF', size: '4.2 MB' },
        { name: 'IATF 16949 证书', type: 'PDF', size: '1.1 MB' },
        { name: '线束技术规格书', type: 'PDF', size: '2.5 MB' }
      ]
    },
    ai: {
      placeholder: '咨询我们的 AI 助手...',
      welcome: '欢迎来到 UZJAH。今天我能为您提供什么帮助？',
      system: '您是 UZJAH 的官方 AI 助手。您专业、热情，并且对公司历史、产品和吉扎克工厂非常了解。请使用用户的语言回答。',
      quick_actions: {
        quote: '询价',
        status: '查询状态',
        tech: '技术规格'
      }
    },
    dashboard: {
      title: '实时生产状态',
      active_lines: '运行生产线',
      quality_rate: '合格率',
      daily_output: '日产量 (套)',
      status: '运行效率'
    },
    specs: {
      voltage: '工作电压',
      temp: '温度范围',
      material: '核心材料',
      standard: '符合标准'
    },
    forms: {
      routing: '部门',
      sales: '销售与出口',
      hr: '人力资源',
      tech: '技术支持',
      success_id: '您的查询 ID'
    },
    footer: {
      rights: '版权所有。'
    },
    team: {
      title: '领导团队',
      subtitle: '专业与创新',
      departments: {
        management: '管理层',
        production: '生产与质量',
        technical: '技术与研发'
      },
      members: {
        gm: { name: '张伟', role: '总经理' },
        dgm: { name: 'Alisher Karimov', role: '副总经理' },
        pd: { name: '李军', role: '生产总监' },
        qc: { name: 'Elena Petrova', role: '质量控制负责人' },
        ce: { name: '王浩', role: '总工程师' },
        rd: { name: 'Dilshod Ahmedov', role: '研发负责人' }
      }
    }
  }
};
