import { 
  Building2, Globe, FileText, CheckCircle2,
  Clock, Shield, Landmark, Users, TrendingUp, Zap, Briefcase
} from 'lucide-react';

export const servicesData = {
  'free-zone-company-formation': {
    slug: 'free-zone-company-formation',
    title: 'Free Zone Company Formation',
    description: "Set up your business in any of UAE's top free zones with complete benefits, tax incentives, and full foreign ownership.",
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    dynamicInfo: {
      label: 'Estimated Setup Time',
      value: '3 - 7',
      subtext: 'Business Days',
      icon: Clock
    },
    overviewTitle: 'Build Your Business on the Right Foundation',
    overviewDescription: 'Free Zone company formation allows entrepreneurs and investors to conduct business with 100% foreign ownership, full repatriation of capital and profits, and access to world-class infrastructure. It is the ideal choice for international businesses looking for a secure and tax-efficient environment in the UAE.',
    infoBlocks: [
      { title: 'Ideal For', description: 'International trading, services, and consulting businesses.', icon: Users },
      { title: 'Ownership Structure', description: '100% Foreign Ownership allowed for all nationalities.', icon: Building2 },
      { title: 'Business Activities', description: 'Wide range of commercial, professional, and e-commerce activities.', icon: Briefcase },
      { title: 'Jurisdiction', description: 'Operates within the Free Zone and internationally.', icon: Globe }
    ],
    benefitsTitle: 'Why Choose a Free Zone Setup?',
    benefits: [
      { title: '100% Foreign Ownership', description: 'Retain complete control over your business without the need for a local sponsor.', icon: Shield, size: 'large' },
      { title: '0% Corporate Tax', description: 'Benefit from massive tax incentives and exemptions in most designated free zones.', icon: TrendingUp, size: 'small' },
      { title: 'Capital Repatriation', description: '100% repatriation of capital and profits back to your home country.', icon: Landmark, size: 'small' },
      { title: 'Fast Processing', description: 'Streamlined government procedures for quick trade license issuance.', icon: Zap, size: 'medium' },
      { title: 'Flexible Office Solutions', description: 'Choose from flexi-desks, co-working spaces, or full physical offices.', icon: Building2, size: 'medium' }
    ],
    timelineTitle: 'Simple. Transparent. Efficient.',
    timelineSteps: [
      { step: 1, title: 'Initial Consultation', description: 'We understand your business requirements and recommend the best free zone jurisdiction.', icon: Users },
      { step: 2, title: 'Document Preparation', description: 'Our team prepares and verifies all required documents, including your business plan.', icon: FileText },
      { step: 3, title: 'Government Approvals', description: 'We handle all application submissions and secure initial government approvals.', icon: CheckCircle2 },
      { step: 4, title: 'License Issuance', description: 'Your Trade License is issued upon final approval from the Free Zone authority.', icon: Briefcase },
      { step: 5, title: 'Visa & Bank Account', description: 'Assistance with securing your investor visa and opening a corporate bank account.', icon: Landmark }
    ],
    includedTitle: 'Included in this Service',
    includedFeatures: [
      { title: 'Trade License Issuance', icon: FileText },
      { title: 'MOA Drafting', icon: FileText },
      { title: 'Office Space Assistance', icon: Building2 },
      { title: 'Establishment Card', icon: Shield },
      { title: 'Government Approvals', icon: CheckCircle2 }
    ],
    checklistTitle: 'Required Documents',
    checklist: [
      { title: 'Passport Copy', description: 'Valid passport copy of all shareholders and directors.' },
      { title: 'Visa/Entry Stamp', description: 'UAE residency visa or visit visa entry stamp.' },
      { title: 'Passport Size Photos', description: 'White background photos of all shareholders.' },
      { title: 'Business Plan', description: 'Brief overview of your proposed business activities.' }
    ],
    faqs: [
      { question: 'How long does it take to set up a free zone company?', answer: 'Typically, it takes between 3 to 7 business days, depending on the chosen free zone and the complexity of the business activities.' },
      { question: 'Do I need physical office space?', answer: 'Not necessarily. Many free zones offer "flexi-desk" or virtual office solutions which are highly cost-effective for startups.' },
      { question: 'Can a free zone company trade within the UAE mainland?', answer: 'Direct trading within the mainland is generally restricted. You would typically need a local distributor or agent to sell goods in the local market, though services have more flexibility.' },
      { question: 'Can I open a corporate bank account?', answer: 'Yes, setting up a free zone company makes you eligible to open a corporate bank account in the UAE. We provide dedicated assistance for this.' }
    ],
    relatedServices: [
      { slug: 'dubai-mainland-company-formation', title: 'Mainland Company Formation', description: 'Establish your business in Dubai mainland with full market access.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2000' },
      { slug: 'business-bank-account', title: 'Corporate Bank Account', description: 'Hassle-free bank account opening support for your business.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000' },
      { slug: 'investor-visa', title: 'Investor Visa', description: 'Long-term residency solutions for business investors in the UAE.', image: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4bf?q=80&w=2000' }
    ]
  },
  'trade-license-issuance-renewal-amendments': {
    slug: 'trade-license-issuance-renewal-amendments',
    title: 'Trade License Issuance, Renewal & Amendments',
    description: "Whether you're launching a new business, renewing an existing trade licence, or updating company details, Fast Zone simplifies every stage of the licensing process. Our consultants coordinate documentation, approvals, and submissions to help keep your business compliant with Dubai regulations.",
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000',
    dynamicInfo: {
      label: 'Processing Support',
      value: 'All Licences',
      subtext: 'Issuance • Renewal • Amendments',
      icon: Briefcase
    },
    overviewTitle: 'Keep Your Business Licensed, Compliant & Ready for Growth',
    overviewDescription: 'A valid trade licence is essential for operating legally in Dubai. Fast Zone assists entrepreneurs and existing businesses with licence issuance, annual renewals, and amendments to ensure compliance with the latest regulatory requirements. Whether your business is expanding, changing activities, updating shareholders, or relocating, our specialists manage the licensing process from consultation through approval while helping minimize administrative delays.',
    infoBlocks: [
      { title: 'Suitable For', description: 'New Businesses, Existing Companies, SMEs, Branch Offices.', icon: Users },
      { title: 'Service Coverage', description: 'New Licence Issuance, Annual Renewal, Licence Amendments.', icon: Briefcase },
      { title: 'Authority', description: 'Dubai Department of Economy & Tourism (DET) and others.', icon: Building2 },
      { title: 'Business Types', description: 'Commercial, Professional, Industrial, Branch Offices.', icon: Globe }
    ],
    benefitsTitle: 'Why Choose Fast Zone?',
    benefits: [
      { title: 'Government Compliance', description: 'Stay compliant with applicable licensing requirements throughout your business lifecycle.', icon: Shield, size: 'large' },
      { title: 'End-to-End Assistance', description: 'From document preparation to application submission and follow-up, we handle every stage.', icon: Users, size: 'small' },
      { title: 'Faster Processing', description: 'Our experienced consultants coordinate the required documentation to help streamline approvals.', icon: Zap, size: 'small' },
      { title: 'Business Continuity', description: 'Timely licence renewals help businesses continue operating without interruption.', icon: Clock, size: 'medium' },
      { title: 'Expert Licensing Advice', description: 'Receive guidance on selecting the appropriate licence structure and making future amendments.', icon: Briefcase, size: 'medium' }
    ],
    timelineTitle: 'Simple. Transparent. Efficient.',
    timelineSteps: [
      { step: 1, title: 'Business Consultation', description: 'We understand your business activity and licensing requirements.', icon: Users },
      { step: 2, title: 'Document Review', description: 'Required documents are reviewed and verified.', icon: FileText },
      { step: 3, title: 'Application Submission', description: 'Applications are submitted through the relevant government channels.', icon: CheckCircle2 },
      { step: 4, title: 'Authority Processing', description: 'Relevant authorities review the application and issue approvals where applicable.', icon: Building2 },
      { step: 5, title: 'Licence Update', description: 'Your updated trade licence is issued once all requirements have been satisfied.', icon: Briefcase }
    ],
    includedTitle: 'What\'s Included',
    includedFeatures: [
      { title: 'Licence Consultation', icon: Users },
      { title: 'Application Preparation', icon: FileText },
      { title: 'Government Submission', icon: CheckCircle2 },
      { title: 'Documentation Review', icon: Shield },
      { title: 'Renewal Assistance', icon: Clock },
      { title: 'Amendment Processing', icon: Briefcase },
      { title: 'Status Tracking', icon: Zap },
      { title: 'Consultant Support', icon: Users }
    ],
    checklistTitle: 'Required Documents',
    checklist: [
      { title: 'Existing Trade Licence', description: 'Required for renewals or amendments.' },
      { title: 'Emirates ID / Passports', description: 'Copies of all shareholders.' },
      { title: 'MOA or Amendments', description: 'Memorandum of Association where applicable.' },
      { title: 'Ejari / Tenancy', description: 'Documentation for office space where required.' }
    ],
    faqs: [
      { question: 'How often does a trade licence need to be renewed?', answer: 'Trade licences generally require renewal before their expiry date to maintain legal business operations.' },
      { question: 'What licence amendments are commonly requested?', answer: 'Common amendments include changes to business activities, company name, partners, manager, address, capital, and certain Memorandum of Association details.' },
      { question: 'Can Fast Zone manage the entire licensing process?', answer: 'Yes. We assist with consultation, documentation, submission, follow-up, and coordination until completion.' },
      { question: 'Can I renew my licence online?', answer: 'Depending on the authority and business type, licence renewals may be completed through official online channels or authorized service centres.' }
    ],
    relatedServices: [
      { slug: 'dubai-mainland-company-formation', title: 'Mainland Company Formation', description: 'Establish your business in Dubai mainland with full market access.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2000' },
      { slug: 'business-bank-account', title: 'Corporate Bank Account', description: 'Hassle-free bank account opening support for your business.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000' },
      { slug: 'pro-document-clearing', title: 'PRO & Document Clearing Services', description: 'End-to-end PRO services for all your documentation and government approvals.', image: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4bf?q=80&w=2000' }
    ]
  }
};
