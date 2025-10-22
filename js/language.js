// Language Switcher
const translations = {
    tr: {
        // Navigation
        'nav.home': 'Ana Sayfa',
        'nav.services': 'Hizmetler',
        'nav.projects': 'Projeler',
        'nav.contact': 'İletişim',

        // Hero
        // include TM markup so it may render as HTML
        'hero.brand': "ELIYTE<sup class='tm'>&trade;</sup>",
        'hero.title': 'innovating for better',
        'hero.description': 'Yapay zeka, otomasyon ve yazılım geliştirme alanlarında kurumsal çözümler sunan teknoloji şirketiniz',
        'hero.cta': 'İletişime Geçin',

        // Services Section
        'services.title': 'Hizmetlerimiz',
        'services.subtitle': 'Teknoloji ve inovasyonda lider çözümler',

        // Service Cards
        'service.ai.title': 'Yapay Zeka Geliştirme',
        'service.ai.item1': 'Yapay Zeka Geliştirme',
        'service.ai.item2': 'Yapay Zeka Otomasyonları',
        'service.ai.item3': 'Yapay Zeka Entegresyonları',
        'service.ai.button': 'Detaylı Bilgi',

        'service.hardware.title': 'Donanım Geliştirme',
        'service.hardware.item1': 'Donanım AR-GE',
        'service.hardware.item2': 'Ürün Tasarım',
        'service.hardware.item3': 'Mobil Donanım Geliştirme',
        'service.hardware.item4': 'Endüstriyel Modelleme',

        'service.web.title': 'Web ve Yazılım',
        'service.web.item1': 'Kurumsal Web Sitesi',
        'service.web.item2': 'Yazılım Geliştirme',
        'service.web.item3': 'Web Servis & API Geliştirme',
        'service.web.item4': 'Bulut Mimari Tasarımı',

        'service.mobile.title': 'Mobil Çözümler',
        'service.mobile.item1': 'Mobil Uygulama Geliştirme',
        'service.mobile.item2': 'iOS & Android Geliştirme',
        'service.mobile.item3': 'Hibrit Uygulama Geliştirme',

        'service.automation.title': 'Otomasyon Sistemleri',
        'service.automation.item1': 'Otomasyon Sistemleri',
        'service.automation.item2': 'WhatsApp Otomasyonları',
        'service.automation.item3': 'Çağrı Merkezi Otomasyonları',

        'service.3d.title': '3D Modelleme & Tasarım',
        'service.3d.item1': 'Endüstriyel Modelleme',
        'service.3d.item2': '3D CAD Çizimleri',
        'service.3d.item3': 'Ürün Geliştirme',

        'service.corporate.title': 'Kurumsal Hizmetler',
        'service.corporate.item1': 'Kurumsal E-posta Hizmetleri',
        'service.corporate.item2': 'Dış Ticaret',
        'service.corporate.item3': 'Satın Alım & Kaynaklandırma',

        // Projects Section
        'projects.title': 'Projelerimiz',
        'projects.subtitle': 'Başarıyla tamamladığımız çözümler',

        'project.education.title': 'Eğitim Platformları',
        'project.lifestyle.title': 'Yaşam & İş Platformları',
        'project.enterprise.title': 'Kurumsal Çözümler',
        'project.hardware.title': 'Donanım Projeleri',
        // Mock hardware project descriptions (non-disclosed)
        'project.hardware.item1': 'Prototype smart sensor (mock)',
        'project.hardware.item2': 'Industrial controller (mock)',

        // Contact Section
        'contact.title': 'İletişim',
        'contact.subtitle': 'Projeleriniz için bizimle iletişime geçin',
        'contact.email.title': 'E-posta',
        'contact.cta.title': 'Projeleriniz için profesyonel çözümler',
        'contact.cta.description': 'Yapay zeka, otomasyon, web ve mobil uygulama geliştirme konularında uzman ekibimizle tanışın. Size özel çözümler üretelim.',
        'contact.cta.button': 'Mesaj Gönderin',
        'contact.form.link': 'İletişim Formu',

        // Footer
        'footer.description': 'Yapay zeka ve teknoloji çözümlerinde öncü firma. İnovasyon ve mükemmelliği bir araya getiriyoruz.',
        'footer.corporate': 'Kurumsal',
        'footer.about': 'Hakkımızda',
        'footer.careers': 'Kariyer',
        'footer.brand': 'Marka Kaynakları',
        'footer.services': 'Hizmetler',
        'footer.contact': 'İletişim',
        'footer.follow': 'Takip Edin',
        'footer.projects': 'Projelerimiz',
        'footer.ourservices': 'Hizmetlerimiz',
        'footer.copy': '2024 ELIYTE. Tüm hakları saklıdır. | Türkiye\'nin Teknoloji Şirketi',

        // About Page
        'about.hero.title': 'Hakkımızda',
        'about.hero.description': 'Geleceği Bugünden İnşa Ediyoruz',
        'about.who.title': 'ELIYTE Kimdir?',
        'about.who.subtitle': 'Teknoloji ve inovasyonda öncü çözüm ortağınız',
        'about.who.description': 'ELIYTE, yapay zeka, otomasyon, web ve mobil uygulama geliştirme, donanım tasarımı ve kurumsal çözümler alanlarında faaliyet gösteren yenilikçi bir teknoloji şirketidir. 2020 yılında kurulan şirketimiz, müşterilerimizin dijital dönüşüm yolculuklarında güvenilir teknoloji ortağı olma misyonuyla çalışmalarını sürdürmektedir.',
        'about.mission.title': 'Misyonumuz',
        'about.mission.description': 'İşletmelere cutting-edge teknoloji çözümleri sunarak dijital dönüşümlerini hızlandırmak ve rekabet gücü kazandırmak.',
        'about.vision.title': 'Vizyonumuz',
        'about.vision.description': 'Yapay zeka ve otomasyon alanında Türkiye\'nin lider teknoloji şirketi olmak ve global pazarda tanınan bir marka haline gelmek.',
        'about.values.title': 'Değerlerimiz',
        'about.values.item1': 'İnovasyon ve Yaratıcılık',
        'about.values.item2': 'Müşteri Odaklılık',
        'about.values.item3': 'Kalite ve Mükemmellik',
        'about.values.item4': 'Sürekli Öğrenme',
        'about.values.item5': 'Şeffaflık ve Dürüstlük',
        'about.why.title': 'Neden ELIYTE?',
        'about.why.subtitle': 'Bizi rakiplerimizden ayıran özellikler',
        'about.why.team.title': 'Uzman Ekip',
        'about.why.team.description': 'AI/ML, yazılım ve donanım alanlarında 15+ yıl deneyimli mühendisler',
        'about.why.projects.title': '50+ Proje',
        'about.why.projects.description': 'Başarıyla tamamlanmış çeşitli sektörlerde yenilikçi projeler',
        'about.why.global.title': 'Global Erişim',
        'about.why.global.description': 'Türkiye, Avrupa ve Asya\'da müşterilerimiz',
        'about.why.support.title': '7/24 Destek',
        'about.why.support.description': 'Kesintisiz teknik destek ve bakım hizmetleri',
        'about.cta.title': 'Birlikte Çalışalım',
        'about.cta.subtitle': 'Projeniz için bizimle iletişime geçin',
        'about.cta.button': 'İletişime Geçin',

        // Careers Page
        'careers.hero.title': 'Kariyer Fırsatları',
        'careers.hero.description': 'Geleceği birlikte inşa edelim',
        'careers.why.title': 'Neden ELIYTE?',
        'careers.why.subtitle': 'Yetenekli ekibimize katılmanız için nedenler',
        'careers.innovation.title': 'İnovasyon Odaklı',
        'careers.innovation.description': 'En yeni teknolojiler ve metodolojilerle çalışma fırsatı. AI, ML, IoT gibi cutting-edge projeler.',
        'careers.growth.title': 'Sürekli Gelişim',
        'careers.growth.description': 'Eğitim programları, konferanslar, sertifikasyon destekleri ile kariyer gelişimi.',
        'careers.global.title': 'Global Projeler',
        'careers.global.description': 'Uluslararası müşteriler ve projelerle çalışma deneyimi kazanın.',
        'careers.balance.title': 'İş-Yaşam Dengesi',
        'careers.balance.description': 'Esnek çalışma saatleri, remote çalışma imkanı ve dinlenme günleri.',
        'careers.salary.title': 'Rekabetçi Maaş',
        'careers.salary.description': 'Sektörün üstünde maaş, performans primleri ve çalışan hakları.',
        'careers.culture.title': 'Pozitif Kültür',
        'careers.culture.description': 'Destekleyici takım ortamı, açık iletişim ve takım etkinlikleri.',
        'careers.positions.title': 'Açık Pozisyonlar',
        'careers.positions.subtitle': 'Aramıza katılın!',
        'careers.ai.title': 'AI/ML Mühendisi',
        'careers.fullstack.title': 'Full-Stack Developer',
        'careers.mobile.title': 'Mobile Developer',
        'careers.hardware.title': 'Hardware Engineer',
        'careers.devops.title': 'DevOps Engineer',
        'careers.intern.title': 'Staj Programı',
        'careers.location': 'Lokasyon:',
        'careers.experience': 'Deneyim:',
        'careers.tech': 'Tech:',
        'careers.duration': 'Süre:',
        'careers.field': 'Alan:',
        'careers.fulltime': 'Tam Zamanlı',
        'careers.parttime': 'Part-Time / Full-Time',
        'careers.apply.button': 'Başvur',
        'careers.cv.title': 'Özgeçmişinizi Gönderin',
        'careers.cv.subtitle': 'Yukarıdaki pozisyonlara başvurmak veya spontan başvuru için',
        'careers.process.title': 'Başvuru Süreci',
        'careers.process.step1': '1. CV ve motivasyon mektubu gönderin',
        'careers.process.step2': '2. İlk değerlendirme (1-2 gün)',
        'careers.process.step3': '3. Teknik görüşme (online)',
        'careers.process.step4': '4. Kod challenge / proje görevi',
        'careers.process.step5': '5. Ekip ile tanışma',
        'careers.process.step6': '6. Teklif ve onboarding',
        'careers.send.button': 'CV Gönder',

        // AI Service Page
        'ai.hero.title': 'Yapay Zeka Geliştirme',
        'ai.hero.description': 'İşletmenizi geleceğe taşıyan yapay zeka çözümleri',
        'ai.services.title': 'Yapay Zeka Hizmetlerimiz',
        'ai.services.subtitle': 'Özelleştirilmiş AI çözümleriyle işinizi dönüştürün',
        'ai.ml.title': 'Machine Learning',
        'ai.nlp.title': 'Natural Language Processing',
        'ai.vision.title': 'Computer Vision',
        'ai.automation.title': 'AI Otomasyon',
        'ai.integration.title': 'AI Entegrasyon',
        'ai.datascience.title': 'Veri Bilimi',
        'ai.tech.title': 'Teknoloji Yığınımız',
        'ai.tech.subtitle': 'Endüstri lideri teknolojiler ve framework\'ler',
        'ai.cta.title': 'Yapay Zeka ile Dönüşüm Başlasın',
        'ai.cta.subtitle': 'Projeniz için ücretsiz danışmanlık alın',
        'ai.why.title': 'Neden ELIYTE?',

        // Hardware Service Page
        'hardware.hero.title': 'Donanım Geliştirme',
        'hardware.hero.description': 'Yenilikçi donanım çözümleri ve AR-GE hizmetleri',
        'hardware.services.title': 'Donanım Hizmetlerimiz',
        'hardware.services.subtitle': 'Fikir aşamasından üretime kadar tam destek',
        'hardware.rd.title': 'AR-GE ve İnovasyon',
        'hardware.design.title': 'Ürün Tasarımı',
        'hardware.electronic.title': 'Elektronik Geliştirme',
        'hardware.mobile.title': 'Mobil Donanım',
        'hardware.industrial.title': 'Endüstriyel Sistemler',
        'hardware.quality.title': 'Test ve Kalite',
        'hardware.projects.title': 'Örnek Projelerimiz',
        'hardware.projects.subtitle': 'Gerçekleştirdiğimiz donanım projeleri',
        'hardware.cta.title': 'Donanım Projeniz için Destek',
        'hardware.cta.subtitle': 'Uzman ekibimizle tanışın',

        // Web Service Page
        'web.hero.title': 'Web ve Yazılım Geliştirme',
        'web.hero.description': 'Modern, ölçeklenebilir ve güvenli web çözümleri',
        'web.services.title': 'Web ve Yazılım Hizmetlerimiz',
        'web.services.subtitle': 'Dijital dönüşümünüzün her adımında yanınızdayız',
        'web.corporate.title': 'Kurumsal Web Sitesi',
        'web.custom.title': 'Özel Yazılım Geliştirme',
        'web.api.title': 'Web Servis & API',
        'web.cloud.title': 'Bulut Mimari',
        'web.database.title': 'Veritabanı Yönetimi',
        'web.security.title': 'Güvenlik',
        'web.tech.title': 'Teknoloji Stack',
        'web.tech.subtitle': 'Kullandığımız modern teknolojiler',
        'web.cta.title': 'Web Projenize Başlayın',
        'web.cta.subtitle': 'Ücretsiz danışmanlık için iletişime geçin',

        // Brand Resources Page
        'brand.hero.title': 'Marka Kaynakları',
        'brand.hero.description': 'ELIYTE marka kimliği ve kullanım rehberi',
        'brand.logos.title': 'Logo Dosyaları',
        'brand.logos.subtitle': 'Farklı kullanım alanları için logo varyasyonları',
        'brand.logo.dark1200': '1200x300 Koyu Logo',
        'brand.logo.dark2x1': '2x1 Koyu Logo',
        'brand.logo.light2x1': '2x1 Açık Logo',
        'brand.logo.dark1x1': '1x1 Koyu Logo',
        'brand.logo.light1x1': '1x1 Açık Logo',
        'brand.logo.download': 'SVG İndir',
        'brand.colors.title': 'Marka Renkleri',
        'brand.colors.subtitle': 'ELIYTE kurumsal renk paleti',
        'brand.color.primary.title': 'Primary Color',
        'brand.color.accent.title': 'Accent Color',
        'brand.color.dark.title': 'Primary Dark',
        'brand.guidelines.title': 'Kullanım Kuralları',
        'brand.guidelines.subtitle': 'Marka kimliğini doğru kullanım için rehber',
        'brand.do.title': 'Yapılması Gerekenler',
        'brand.dont.title': 'Yapılmaması Gerekenler',
        'brand.typography.title': 'Tipografi',
        'brand.contact.title': 'Marka Kullanımı İçin İletişim',
        'brand.contact.subtitle': 'Sorularınız için bize ulaşın',
        'brand.contact.description': 'ELIYTE marka kimliğini kullanmak için özel izin gerekmektedir. Ticari kullanım, ortaklık veya marka kullanımı ile ilgili sorularınız için lütfen bizimle iletişime geçin.',

        // Common
        'common.getintouch': 'İletişime Geçin',
        'common.learnmore': 'Detaylı Bilgi',
        'common.why.eliyte': 'Neden ELIYTE?'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.brand': "ELIYTE<sup class='tm'>&trade;</sup>",
        'hero.title': 'innovating for better',
        'hero.description': 'Your technology company offering enterprise solutions in artificial intelligence, automation, and software development',
        'hero.cta': 'Get in Touch',

        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Leading solutions in technology and innovation',

        // Service Cards
        'service.ai.title': 'AI Development',
        'service.ai.item1': 'Artificial Intelligence Development',
        'service.ai.item2': 'AI Automation',
        'service.ai.item3': 'AI Integration',
        'service.ai.button': 'Learn More',

        'service.hardware.title': 'Hardware Development',
        'service.hardware.item1': 'Hardware R&D',
        'service.hardware.item2': 'Product Design',
        'service.hardware.item3': 'Mobile Hardware Development',
        'service.hardware.item4': 'Industrial Modeling',

        'service.web.title': 'Web & Software',
        'service.web.item1': 'Corporate Website',
        'service.web.item2': 'Software Development',
        'service.web.item3': 'Web Services & API Development',
        'service.web.item4': 'Cloud Architecture Design',

        'service.mobile.title': 'Mobile Solutions',
        'service.mobile.item1': 'Mobile App Development',
        'service.mobile.item2': 'iOS & Android Development',
        'service.mobile.item3': 'Hybrid App Development',

        'service.automation.title': 'Automation Systems',
        'service.automation.item1': 'Automation Systems',
        'service.automation.item2': 'WhatsApp Automation',
        'service.automation.item3': 'Call Center Automation',

        'service.3d.title': '3D Modeling & Design',
        'service.3d.item1': 'Industrial Modeling',
        'service.3d.item2': '3D CAD Drawings',
        'service.3d.item3': 'Product Development',

        'service.corporate.title': 'Corporate Services',
        'service.corporate.item1': 'Corporate Email Services',
        'service.corporate.item2': 'Foreign Trade',
        'service.corporate.item3': 'Procurement & Sourcing',

        // Projects Section
        'projects.title': 'Our Projects',
        'projects.subtitle': 'Successfully completed solutions',

        'project.education.title': 'Education Platforms',
        'project.lifestyle.title': 'Lifestyle & Business Platforms',
        'project.enterprise.title': 'Enterprise Solutions',
        'project.hardware.title': 'Hardware Projects',
        // Mock hardware project descriptions (non-disclosed examples)
        'project.hardware.item1': 'Prototype smart sensor (mock)',
        'project.hardware.item2': 'Industrial controller (mock)',

        // Contact Section
        'contact.title': 'Contact',
        'contact.subtitle': 'Get in touch for your projects',
        'contact.email.title': 'Email',
        'contact.cta.title': 'Professional solutions for your projects',
        'contact.cta.description': 'Meet our expert team in artificial intelligence, automation, web and mobile application development. Let\'s create custom solutions for you.',
        'contact.cta.button': 'Send Message',
        'contact.form.link': 'Contact Form',

        // Footer
        'footer.description': 'Leading company in artificial intelligence and technology solutions. Bringing together innovation and excellence.',
        'footer.corporate': 'Corporate',
        'footer.about': 'About Us',
        'footer.careers': 'Careers',
        'footer.brand': 'Brand Resources',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.follow': 'Follow',
        'footer.projects': 'Our Projects',
        'footer.ourservices': 'Our Services',
        'footer.copy': '2024 ELIYTE. All rights reserved. | Turkey\'s Technology Company',

        // About Page
        'about.hero.title': 'About Us',
        'about.hero.description': 'Building the Future Today',
        'about.who.title': 'Who is ELIYTE?',
        'about.who.subtitle': 'Your pioneering solution partner in technology and innovation',
        'about.who.description': 'ELIYTE is an innovative technology company operating in the fields of artificial intelligence, automation, web and mobile application development, hardware design and corporate solutions. Founded in 2020, our company continues to work with the mission of being a reliable technology partner in the digital transformation journey of our customers.',
        'about.mission.title': 'Our Mission',
        'about.mission.description': 'To accelerate digital transformation and gain competitive advantage for businesses by providing cutting-edge technology solutions.',
        'about.vision.title': 'Our Vision',
        'about.vision.description': 'To become Turkey\'s leading technology company in the field of artificial intelligence and automation and become a globally recognized brand.',
        'about.values.title': 'Our Values',
        'about.values.item1': 'Innovation and Creativity',
        'about.values.item2': 'Customer Focus',
        'about.values.item3': 'Quality and Excellence',
        'about.values.item4': 'Continuous Learning',
        'about.values.item5': 'Transparency and Honesty',
        'about.why.title': 'Why ELIYTE?',
        'about.why.subtitle': 'Features that set us apart from our competitors',
        'about.why.team.title': 'Expert Team',
        'about.why.team.description': 'Engineers with 15+ years of experience in AI/ML, software and hardware',
        'about.why.projects.title': '50+ Projects',
        'about.why.projects.description': 'Innovative projects successfully completed in various industries',
        'about.why.global.title': 'Global Reach',
        'about.why.global.description': 'Our clients in Turkey, Europe and Asia',
        'about.why.support.title': '24/7 Support',
        'about.why.support.description': 'Continuous technical support and maintenance services',
        'about.cta.title': 'Let\'s Work Together',
        'about.cta.subtitle': 'Contact us for your project',
        'about.cta.button': 'Get in Touch',

        // Careers Page
        'careers.hero.title': 'Career Opportunities',
        'careers.hero.description': 'Let\'s build the future together',
        'careers.why.title': 'Why ELIYTE?',
        'careers.why.subtitle': 'Reasons to join our talented team',
        'careers.innovation.title': 'Innovation Focused',
        'careers.innovation.description': 'Opportunity to work with the latest technologies and methodologies. Cutting-edge projects like AI, ML, IoT.',
        'careers.growth.title': 'Continuous Growth',
        'careers.growth.description': 'Career development with training programs, conferences, certification support.',
        'careers.global.title': 'Global Projects',
        'careers.global.description': 'Gain experience working with international clients and projects.',
        'careers.balance.title': 'Work-Life Balance',
        'careers.balance.description': 'Flexible working hours, remote work opportunity and rest days.',
        'careers.salary.title': 'Competitive Salary',
        'careers.salary.description': 'Above-industry salary, performance bonuses and employee benefits.',
        'careers.culture.title': 'Positive Culture',
        'careers.culture.description': 'Supportive team environment, open communication and team activities.',
        'careers.positions.title': 'Open Positions',
        'careers.positions.subtitle': 'Join us!',
        'careers.ai.title': 'AI/ML Engineer',
        'careers.fullstack.title': 'Full-Stack Developer',
        'careers.mobile.title': 'Mobile Developer',
        'careers.hardware.title': 'Hardware Engineer',
        'careers.devops.title': 'DevOps Engineer',
        'careers.intern.title': 'Internship Program',
        'careers.location': 'Location:',
        'careers.experience': 'Experience:',
        'careers.tech': 'Tech:',
        'careers.duration': 'Duration:',
        'careers.field': 'Field:',
        'careers.fulltime': 'Full-Time',
        'careers.parttime': 'Part-Time / Full-Time',
        'careers.apply.button': 'Apply',
        'careers.cv.title': 'Send Your CV',
        'careers.cv.subtitle': 'To apply for the positions above or for spontaneous applications',
        'careers.process.title': 'Application Process',
        'careers.process.step1': '1. Send CV and cover letter',
        'careers.process.step2': '2. Initial assessment (1-2 days)',
        'careers.process.step3': '3. Technical interview (online)',
        'careers.process.step4': '4. Code challenge / project assignment',
        'careers.process.step5': '5. Meet the team',
        'careers.process.step6': '6. Offer and onboarding',
        'careers.send.button': 'Send CV',

        // AI Service Page
        'ai.hero.title': 'AI Development',
        'ai.hero.description': 'Artificial intelligence solutions that take your business into the future',
        'ai.services.title': 'Our AI Services',
        'ai.services.subtitle': 'Transform your business with customized AI solutions',
        'ai.ml.title': 'Machine Learning',
        'ai.nlp.title': 'Natural Language Processing',
        'ai.vision.title': 'Computer Vision',
        'ai.automation.title': 'AI Automation',
        'ai.integration.title': 'AI Integration',
        'ai.datascience.title': 'Data Science',
        'ai.tech.title': 'Our Technology Stack',
        'ai.tech.subtitle': 'Industry-leading technologies and frameworks',
        'ai.cta.title': 'Let the AI Transformation Begin',
        'ai.cta.subtitle': 'Get free consultation for your project',
        'ai.why.title': 'Why ELIYTE?',

        // Hardware Service Page
        'hardware.hero.title': 'Hardware Development',
        'hardware.hero.description': 'Innovative hardware solutions and R&D services',
        'hardware.services.title': 'Our Hardware Services',
        'hardware.services.subtitle': 'Full support from idea stage to production',
        'hardware.rd.title': 'R&D and Innovation',
        'hardware.design.title': 'Product Design',
        'hardware.electronic.title': 'Electronic Development',
        'hardware.mobile.title': 'Mobile Hardware',
        'hardware.industrial.title': 'Industrial Systems',
        'hardware.quality.title': 'Testing and Quality',
        'hardware.projects.title': 'Our Sample Projects',
        'hardware.projects.subtitle': 'Hardware projects we have implemented',
        'hardware.cta.title': 'Support for Your Hardware Project',
        'hardware.cta.subtitle': 'Meet our expert team',

        // Web Service Page
        'web.hero.title': 'Web and Software Development',
        'web.hero.description': 'Modern, scalable and secure web solutions',
        'web.services.title': 'Our Web and Software Services',
        'web.services.subtitle': 'We are with you at every step of your digital transformation',
        'web.corporate.title': 'Corporate Website',
        'web.custom.title': 'Custom Software Development',
        'web.api.title': 'Web Services & API',
        'web.cloud.title': 'Cloud Architecture',
        'web.database.title': 'Database Management',
        'web.security.title': 'Security',
        'web.tech.title': 'Technology Stack',
        'web.tech.subtitle': 'Modern technologies we use',
        'web.cta.title': 'Start Your Web Project',
        'web.cta.subtitle': 'Contact us for free consultation',

        // Brand Resources Page
        'brand.hero.title': 'Brand Resources',
        'brand.hero.description': 'ELIYTE brand identity and usage guide',
        'brand.logos.title': 'Logo Files',
        'brand.logos.subtitle': 'Logo variations for different use cases',
        'brand.logo.dark1200': '1200x300 Dark Logo',
        'brand.logo.dark2x1': '2x1 Dark Logo',
        'brand.logo.light2x1': '2x1 Light Logo',
        'brand.logo.dark1x1': '1x1 Dark Logo',
        'brand.logo.light1x1': '1x1 Light Logo',
        'brand.logo.download': 'Download SVG',
        'brand.colors.title': 'Brand Colors',
        'brand.colors.subtitle': 'ELIYTE corporate color palette',
        'brand.color.primary.title': 'Primary Color',
        'brand.color.accent.title': 'Accent Color',
        'brand.color.dark.title': 'Primary Dark',
        'brand.guidelines.title': 'Usage Guidelines',
        'brand.guidelines.subtitle': 'Guide for correct use of brand identity',
        'brand.do.title': 'Do\'s',
        'brand.dont.title': 'Don\'ts',
        'brand.typography.title': 'Typography',
        'brand.contact.title': 'Contact for Brand Usage',
        'brand.contact.subtitle': 'Reach us for your questions',
        'brand.contact.description': 'Special permission is required to use the ELIYTE brand identity. Please contact us for questions regarding commercial use, partnership or brand usage.',

        // Common
        'common.getintouch': 'Get in Touch',
        'common.learnmore': 'Learn More',
        'common.why.eliyte': 'Why ELIYTE?'
    }
};

// Get current language from localStorage or default to Turkish
let currentLang = localStorage.getItem('language') || 'tr';

// Remote-loaded translations (optional) will be stored here
const remoteTranslations = {};

// Helper: apply translations for a given language from an object
function applyTranslations(lang, dict) {
    if (!dict) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dict[key]) {
            if (String(dict[key]).includes('<')) {
                element.innerHTML = dict[key];
            } else {
                element.textContent = dict[key];
            }
        }
    });
    updateLanguageButton(lang);
}

// Update page language (tries remote JSON first, then falls back to embedded translations)
async function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Try remote JSON if not already loaded
    if (!remoteTranslations[lang]) {
        try {
            const res = await fetch(`/lang/${lang}.json`, { cache: 'no-store' });
            if (res.ok) {
                remoteTranslations[lang] = await res.json();
            }
        } catch (e) {
            // network or file not present — ignore and fallback
            remoteTranslations[lang] = null;
        }
    }

    const dict = remoteTranslations[lang] || (translations[lang] || {});
    applyTranslations(lang, dict);
}

// Update language button text
function updateLanguageButton(lang) {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        // Prefer updating the internal .lang__code span so we don't replace
        // the button's icon/label markup. Fall back to replacing textContent
        // only if the expected span isn't present.
        const codeSpan = langBtn.querySelector('.lang__code');
        if (codeSpan) {
            codeSpan.textContent = lang === 'tr' ? 'EN' : 'TR';
        } else {
            // Graceful fallback for pages that have a simpler button
            langBtn.textContent = lang === 'tr' ? 'EN' : 'TR';
        }

        // Update accessible label to indicate the action (switch to the other language)
        const aria = lang === 'tr' ? 'Switch to English' : "Türkçe'ye geç";
        langBtn.setAttribute('aria-label', aria);
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    updateLanguage(currentLang);

    // Add language toggle event listener
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function () {
            const newLang = currentLang === 'tr' ? 'en' : 'tr';
            updateLanguage(newLang);
        });
    }
});
