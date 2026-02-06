const dom = {
  dataModeBadge: document.getElementById("dataModeBadge"),
  switchModeBtn: document.getElementById("switchModeBtn"),
  languageToggle: document.getElementById("languageToggle"),
  summaryLine: document.getElementById("summaryLine"),
  heroLostBtn: document.getElementById("heroLostBtn"),
  heroFoundBtn: document.getElementById("heroFoundBtn"),
  heroDonateBtn: document.getElementById("heroDonateBtn"),
  entryBackdrop: document.getElementById("entryBackdrop"),
  entrySection: document.getElementById("entrySection"),
  entryPetTabBtn: document.getElementById("entryPetTabBtn"),
  entryDonationTabBtn: document.getElementById("entryDonationTabBtn"),
  petEntryPane: document.getElementById("petEntryPane"),
  donationEntryPane: document.getElementById("donationEntryPane"),
  boardSection: document.querySelector(".board-panel"),
  boardAlertsTabBtn: document.getElementById("boardAlertsTabBtn"),
  boardDonationsTabBtn: document.getElementById("boardDonationsTabBtn"),
  alertsBoardPane: document.getElementById("alertsBoardPane"),
  donationsBoardPane: document.getElementById("donationsBoardPane"),
  composerLostBtn: document.getElementById("composerLostBtn"),
  composerFoundBtn: document.getElementById("composerFoundBtn"),
  composerHint: document.getElementById("composerHint"),
  caseTypeInput: document.getElementById("caseTypeInput"),
  rewardField: document.getElementById("rewardField"),
  petCaseForm: document.getElementById("petCaseForm"),
  petCaseSubmitBtn: document.getElementById("petCaseSubmitBtn"),
  petPhotoFileInput: document.getElementById("petPhotoFileInput"),
  petPhotoUrlInput: document.getElementById("petPhotoUrlInput"),
  petPhotoStatus: document.getElementById("petPhotoStatus"),
  petPhotoError: document.getElementById("petPhotoError"),
  petPhotoPreview: document.getElementById("petPhotoPreview"),
  feedTitle: document.getElementById("feedTitle"),
  refreshCasesBtn: document.getElementById("refreshCasesBtn"),
  caseList: document.getElementById("caseList"),
  loadMoreCasesBtn: document.getElementById("loadMoreCasesBtn"),
  filterButtons: Array.from(document.querySelectorAll(".filter-btn")),
  donationForm: document.getElementById("donationForm"),
  donationSubmitBtn: document.getElementById("donationSubmitBtn"),
  donationPhotoFileInput: document.getElementById("donationPhotoFileInput"),
  donationPhotoUrlInput: document.getElementById("donationPhotoUrlInput"),
  donationPhotoStatus: document.getElementById("donationPhotoStatus"),
  donationPhotoError: document.getElementById("donationPhotoError"),
  donationPhotoPreview: document.getElementById("donationPhotoPreview"),
  facebookPostUrlInput: document.getElementById("facebookPostUrlInput"),
  facebookUrlError: document.getElementById("facebookUrlError"),
  refreshDonationsBtn: document.getElementById("refreshDonationsBtn"),
  donationList: document.getElementById("donationList"),
  loadMoreDonationsBtn: document.getElementById("loadMoreDonationsBtn"),
  clinicSearchForm: document.getElementById("clinicSearchForm"),
  useLocationBtn: document.getElementById("useLocationBtn"),
  radiusSelect: document.getElementById("radiusSelect"),
  clinicStatus: document.getElementById("clinicStatus"),
  clinicResults: document.getElementById("clinicResults"),
  openProfileBtn: document.getElementById("openProfileBtn"),
  quickProfileAvatar: document.getElementById("quickProfileAvatar"),
  quickProfileName: document.getElementById("quickProfileName"),
  profileBackdrop: document.getElementById("profileBackdrop"),
  profileModal: document.getElementById("profileModal"),
  profileForm: document.getElementById("profileForm"),
  closeProfileBtn: document.getElementById("closeProfileBtn"),
  translatableNodes: Array.from(document.querySelectorAll("[data-i18n]")),
  // New DOM elements for Wizard & Auto-Location
  autoLocationBtn: document.getElementById("autoLocationBtn"),
  wizardSteps: Array.from(document.querySelectorAll(".wizard-step")),
  wizardStepLabel: document.getElementById("wizardStepLabel"),
  wizardProgressBar: document.getElementById("wizardProgressBar"),
  wizardJumpButtons: Array.from(document.querySelectorAll(".wizard-jump-btn")),
  nextStepBtns: Array.from(document.querySelectorAll(".next-step-btn")),
  prevStepBtns: Array.from(document.querySelectorAll(".prev-step-btn")),
  petDescriptionInput: document.getElementById("petDescriptionInput"),
  petDescriptionCount: document.getElementById("petDescriptionCount"),
  donationDescriptionInput: document.getElementById("donationDescriptionInput"),
  donationDescriptionCount: document.getElementById("donationDescriptionCount"),
  // Search & Overlay
  closeEntryBtn: document.getElementById("closeEntryBtn"),
  caseSearchInput: document.getElementById("caseSearchInput"),
  donationSearchInput: document.getElementById("donationSearchInput"),
  detailBackdrop: document.getElementById("detailBackdrop"),
  detailModal: document.getElementById("detailModal"),
  detailContent: document.getElementById("detailContent"),
  closeDetailBtn: document.getElementById("closeDetailBtn"),
};

const STORAGE_KEYS = {
  dataMode: "pawBondhu.dataMode",
  language: "pawBondhu.language",
  entryTab: "pawBondhu.entryTab",
  composerMode: "pawBondhu.composerMode",
  boardTab: "pawBondhu.boardTab",
  feedFilter: "pawBondhu.feedFilter",
  userProfile: "pawBondhu.userProfile",
  petCases: "pawBondhu.petCases",
  donations: "pawBondhu.donations",
  caseComments: "pawBondhu.caseComments",
  donationComments: "pawBondhu.donationComments",
  commentProfile: "pawBondhu.commentProfile",
};

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80";

const IMAGE_UPLOAD_CONFIG = {
  provider: String(window.PAW_BONDHU_IMAGE_UPLOAD?.provider || "none").toLowerCase(),
  cloudName: String(window.PAW_BONDHU_IMAGE_UPLOAD?.cloudName || "").trim(),
  uploadPreset: String(window.PAW_BONDHU_IMAGE_UPLOAD?.uploadPreset || "").trim(),
  uploadFolder: String(window.PAW_BONDHU_IMAGE_UPLOAD?.uploadFolder || "paw-bondhu").trim(),
  imgurClientId: String(window.PAW_BONDHU_IMAGE_UPLOAD?.imgurClientId || "").trim(),
  maxFileSizeMb: Math.max(1, asNumber(window.PAW_BONDHU_IMAGE_UPLOAD?.maxFileSizeMb, 8)),
};

const MESSAGES = {
  en: {
    languageLabel: "Language",
    dataModeLabel: "Data Mode",
    heroKicker: "Fast Recovery First",
    heroTitle: "Report lost pets quickly. Coordinate with community. Reunite faster.",
    heroSubtitle:
      "Start with one of the two main actions below. Donations and clinics stay available as secondary support.",
    heroLostBtn: "Report Lost Pet",
    heroFoundBtn: "I Found a Pet",
    heroDonateBtn: "Start Donation Campaign",
    entryTitle: "Create Post",
    entrySubtitle: "One smart entry area for pet alerts and donation campaigns.",
    entryPetTab: "Pet Alert",
    entryDonationTab: "Donation",
    boardTitle: "Community Board",
    boardAlertsTab: "Alerts",
    boardDonationsTab: "Donations",
    composeTitle: "Create Pet Alert",
    composerLostHint: "Share last-seen details and contact so volunteers can help.",
    composerFoundHint:
      "Share where and when you found the pet so owners can identify quickly.",
    lostMode: "Lost Pet",
    foundMode: "Found Pet",
    petNameLabel: "Pet Name / Nickname",
    speciesLabel: "Species",
    locationLabel: "Area (last seen or found)",
    dateLabel: "Date",
    contactLabel: "Contact",
    urgencyLabel: "Urgency",
    rewardLabel: "Reward (optional)",
    photoLabel: "Pet Photo (required)",
    campaignImageLabel: "Campaign Image (required)",
    photoUrlLabel: "Image URL",
    photoUploadGuide: "Upload a file or paste an image URL.",
    photoUploadProcessing: "Uploading image...",
    photoUploadDone: "Image uploaded. URL filled automatically.",
    photoUploadConfigMissing: "Uploader is not configured. Paste image URL manually.",
    photoUploadFileTypeError: "Please select an image file.",
    photoUploadFileSizeError: "Image is too large. Max allowed is {max} MB.",
    photoUploadFailed: "Image upload failed. Paste URL manually or try another file.",
    photoRequired: "An image is required for every post.",
    photoUploadBusy: "Image upload is still running. Please wait.",
    descriptionLabel: "Description",
    postLostBtn: "Post Lost Alert",
    postFoundBtn: "Post Found Alert",
    refreshBtn: "Refresh",
    loadMore: "Load More",
    filterUrgent: "Urgent Lost",
    filterFound: "Recently Found",
    filterReunited: "Reunited",
    feedTitleUrgent: "Urgent Lost Alerts",
    feedTitleFound: "Recently Found Leads",
    feedTitleReunited: "Reunited Pets",
    emptyUrgent: "No urgent lost alerts right now.",
    emptyFound: "No found leads yet.",
    emptyReunited: "No reunited records yet.",
    markReunitedBtn: "Mark Reunited",
    markResolvedBtn: "Mark Resolved",
    commentsBtn: "Comments",
    noComments: "No comments yet.",
    commentsLoading: "Loading comments...",
    loadMoreComments: "Load More Comments",
    submitCommentBtn: "Post Comment",
    reportCommentBtn: "Report",
    reportConfirm: "Report this comment as inappropriate?",
    commentNamePlaceholder: "Your name",
    commentContactPlaceholder: "Contact",
    commentTextPlaceholder: "Write a helpful comment...",
    donationTitle: "Support Donation Campaigns",
    donationFormTitle: "Create Campaign",
    donationSubtitle: "A Facebook post link is required to publish a campaign.",
    campaignNameLabel: "Campaign Name",
    beneficiaryLabel: "Beneficiary",
    goalLabel: "Goal Amount",
    donationUrgencyLabel: "Urgency",
    facebookUrlLabel: "Facebook Post URL (required)",
    whyNeededLabel: "Why support is needed",
    campaignFeedTitle: "Campaign Feed",
    facebookRequired: "Facebook post URL is required.",
    facebookInvalid: "Please enter a valid facebook.com post URL.",
    createCampaignBtn: "Create Campaign",
    statusDraft: "Draft",
    statusActive: "Active",
    statusCompleted: "Completed",
    donationNeedsFb: "Campaign draft. Add Facebook proof to activate.",
    donateBtn: "Donate",
    clinicTitle: "Nearby Care",
    clinicSubtitle: "Lightweight nearby support while core focus stays on recovery.",
    cityAreaLabel: "City / Area (optional)",
    radiusLabel: "Radius",
    useLocationBtn: "Use My Location",
    findCareBtn: "Find Care",
    clinicNoSearch: "No search yet.",
    clinicSearching: "Searching nearby clinics...",
    clinicNoResult: "No clinics found in this range.",
    clinicUseLocationFirst: "Use your location or enter an area first.",
    clinicMapBtn: "Map",
    footerText: "Community-powered pet recovery and care.",
    modeLocal: "Local DB (Testing)",
    modeFirebase: "Firebase",
    switchToFirebase: "Switch to Firebase",
    switchToLocal: "Switch to Local DB",
    summaryOpenLost: "open lost",
    summaryFound: "found leads",
    summaryReunited: "reunited",
    summaryActive: "active campaigns",
    fbProofChip: "Facebook Proof",
    rewardNone: "Reward: Not listed",
    wizardStepIdentity: "Identity",
    wizardStepContext: "Location",
    wizardStepContact: "Contact",
    wizardStepOf: "Step {current} of {total}",
    closeEntryLabel: "Close form",
    closeWindowLabel: "Close window",
    profileBtn: "My Profile",
    profileTitle: "Set Your Profile",
    profileSubtitle: "Your profile is used for posts, donations, and comments.",
    profileNameLabel: "Display Name",
    profileContactLabel: "Primary Contact",
    profileAreaLabel: "City / Area",
    profileAvatarLabel: "Avatar URL (optional)",
    profileBioLabel: "Short Bio (optional)",
    saveProfileBtn: "Save Profile",
    createdBy: "Posted by",
    unknownMember: "Community Member",
    profileSaved: "Profile saved.",
  },
  bn: {
    languageLabel: "ভাষা",
    dataModeLabel: "ডেটা মোড",
    heroKicker: "দ্রুত উদ্ধার, নিরাপদ মিলন",
    heroTitle: "হারানো বন্ধুদের খুঁজে পেতে পাশে আছে আপনার কমিউনিটি। আজই রিপোর্ট করুন।",
    heroSubtitle:
      "নিচের প্রধান অপশনগুলো থেকে একটি বেছে নিন। আমরা সবাই মিলে প্রিয় পেটটিকে ঘরে ফিরিয়ে আনব।",
    heroLostBtn: "আমার পেট হারিয়ে গেছে",
    heroFoundBtn: "আমি একটি পেট খুঁজে পেয়েছি",
    heroDonateBtn: "ডোনেশন ক্যাম্পেইন শুরু করুন",
    entryTitle: "পোস্ট তৈরি করুন",
    entrySubtitle: "এখান থেকেই হারানো পেটের খবর দিন অথবা ডোনেশন সংগ্রহ শুরু করুন।",
    entryPetTab: "পেট অ্যালার্ট",
    entryDonationTab: "ডোনেশন",
    boardTitle: "কমিউনিটি বোর্ড",
    boardAlertsTab: "অ্যালার্ট",
    boardDonationsTab: "ডোনেশন",
    composeTitle: "পেট অ্যালার্ট তৈরি করুন",
    composerLostHint: "শেষ কোথায় দেখা গেছে এবং আপনার যোগাযোগের তথ্য দিয়ে সবাইকে সাহায্য করার সুযোগ দিন।",
    composerFoundHint: "আপনি যেখানে পেয়েছেন সেই তথ্য দিলে পেটের আসল মালিক দ্রুত খুঁজে পাবে।",
    lostMode: "হারানো পেট",
    foundMode: "পাওয়া পেট",
    petNameLabel: "পেটের নাম / ডাকনাম",
    speciesLabel: "ধরন",
    locationLabel: "এলাকা (যেখানে শেষ দেখা গেছে বা পাওয়া গেছে)",
    dateLabel: "তারিখ",
    contactLabel: "যোগাযোগের ফোন বা সোশ্যাল আইডি",
    urgencyLabel: "জরুরি স্তর",
    rewardLabel: "পুরস্কার (প্রযোজ্য হলে)",
    photoLabel: "পেটের ছবি (বাধ্যতামূলক)",
    campaignImageLabel: "ক্যাম্পেইনের ছবি (বাধ্যতামূলক)",
    photoUrlLabel: "ছবির URL",
    photoUploadGuide: "ফোন/ডিভাইস থেকে ছবি আপলোড করুন অথবা ছবির URL দিন।",
    photoUploadProcessing: "ছবি আপলোড হচ্ছে...",
    photoUploadDone: "ছবি আপলোড সম্পন্ন। URL স্বয়ংক্রিয়ভাবে বসানো হয়েছে।",
    photoUploadConfigMissing: "আপলোড সার্ভিস সেট করা নেই। আপাতত ছবির URL দিন।",
    photoUploadFileTypeError: "শুধু ছবি ফাইল নির্বাচন করুন।",
    photoUploadFileSizeError: "ছবিটি অনেক বড়। সর্বোচ্চ {max} MB দেওয়া যাবে।",
    photoUploadFailed: "ছবি আপলোড হয়নি। আবার চেষ্টা করুন অথবা URL দিন।",
    photoRequired: "প্রতিটি পোস্টে ছবি থাকা বাধ্যতামূলক।",
    photoUploadBusy: "ছবি এখনও আপলোড হচ্ছে। একটু অপেক্ষা করুন।",
    descriptionLabel: "বিস্তারিত (গায়ের রং, বিশেষ চিহ্ন বা আচরণ)",
    postLostBtn: "হারানো পেটের অ্যালার্ট দিন",
    postFoundBtn: "পাওয়া পেটের অ্যালার্ট দিন",
    refreshBtn: "রিফ্রেশ",
    loadMore: "আরও দেখুন",
    filterUrgent: "খুব জরুরি",
    filterFound: "সম্প্রতি পাওয়া",
    filterReunited: "ঘরে ফিরেছে",
    feedTitleUrgent: "খুব জরুরি হারানো অ্যালার্ট",
    feedTitleFound: "সম্প্রতি পাওয়া পেটগুলো",
    feedTitleReunited: "নিরাপদে ঘরে ফেরা বন্ধুরা",
    emptyUrgent: "এই মুহূর্তে কোনো জরুরি অ্যালার্ট নেই। সবাই নিরাপদে আছে!",
    emptyFound: "পাওয়া পেটের কোনো খবর নেই।",
    emptyReunited: "সফলভাবে ঘরে ফেরার কোনো তথ্য এখনও নেই।",
    markReunitedBtn: "ঘরে ফিরেছে নিশ্চিত করুন",
    markResolvedBtn: "সমাধান হয়েছে নিশ্চিত করুন",
    commentsBtn: "মন্তব্য",
    noComments: "এখনও কোনো মন্তব্য নেই। আপনিই প্রথম কিছু লিখুন!",
    commentsLoading: "মন্তব্যগুলো দেখা হচ্ছে...",
    loadMoreComments: "আরও মন্তব্য দেখুন",
    submitCommentBtn: "মন্তব্য পাঠান",
    reportCommentBtn: "রিপোর্ট",
    reportConfirm: "আপনি কি এই মন্তব্যটি অনুপযুক্ত মনে করছেন এবং রিপোর্ট করতে চান?",
    commentNamePlaceholder: "আপনার নাম",
    commentContactPlaceholder: "যোগাযোগ",
    commentTextPlaceholder: "সাহায্যমূলক বা প্রয়োজনীয় কিছু লিখুন...",
    donationTitle: "ডোনেশন দিয়ে সাহায্য করুন",
    donationFormTitle: "ডোনেশন ক্যাম্পেইন তৈরি করুন",
    donationSubtitle: "ক্যাম্পেইন চালুর জন্য একটি ফেসবুক পোস্টের লিংক থাকা বাধ্যতামূলক (বিশ্বস্ততার জন্য)।",
    campaignNameLabel: "ক্যাম্পেইনের নাম",
    beneficiaryLabel: "সাহায্য যার জন্য",
    goalLabel: "মোট লক্ষমাত্রা",
    donationUrgencyLabel: "কতটা জরুরি?",
    facebookUrlLabel: "ফেসবুক পোস্টের লিংক (বাধ্যতামূলক)",
    whyNeededLabel: "কেন সাহায্য প্রয়োজন?",
    campaignFeedTitle: "চলমান ক্যাম্পেইনগুলো",
    facebookRequired: "ফেসবুক পোস্টের লিংক অবশ্যই দিতে হবে।",
    facebookInvalid: "অনুগ্রহ করে একটি সঠিক ফেসবুক পোস্টের লিংক দিন।",
    createCampaignBtn: "ক্যাম্পেইন শুরু করুন",
    statusDraft: "খসড়া",
    statusActive: "চলমান",
    statusCompleted: "সাফল্য!",
    donationNeedsFb: "এটি খসড়া হিসেবে আছে। ফেসবুক লিংক যোগ করলে চালু হবে।",
    donateBtn: "ডোনেট করুন",
    clinicTitle: "কাছাকাছি ক্লিনিক",
    clinicSubtitle: "পেটদের জরুরি চিকিৎসায় আশেপাশের ক্লিনিক খুঁজে নিন।",
    cityAreaLabel: "শহর বা এলাকা (ঐচ্ছিক)",
    radiusLabel: "দূরত্ব",
    useLocationBtn: "আমার লোকেশন ব্যবহার করুন",
    findCareBtn: "ক্লিনিক খুঁজুন",
    clinicNoSearch: "এখনও কোনো সার্চ করা হয়নি।",
    clinicSearching: "কাছাকাছি ক্লিনিক খোঁজা হচ্ছে...",
    clinicNoResult: "এই সীমার মধ্যে কোনো ক্লিনিক পাওয়া যায়নি।",
    clinicUseLocationFirst: "আপনার লোকেশন ব্যবহার করুন অথবা কোনো এলাকার নাম লিখুন।",
    clinicMapBtn: "ম্যাপ দেখুন",
    footerText: "কমিউনিটির ভালোবাসায় পেটরা থাকুক সুরক্ষিত ও আপন ঘরে।",
    modeLocal: "লোকাল ডিবি (টেস্টিং)",
    modeFirebase: "ফায়ারবেস",
    switchToFirebase: "ফায়ারবেসে যান",
    switchToLocal: "লোকাল ডিবিতে ফিরুন",
    summaryOpenLost: "এখনও নিখোঁজ",
    summaryFound: "পাওয়া লিড",
    summaryReunited: "ঘরে ফিরেছে",
    summaryActive: "চলমান ক্যাম্পেইন",
    fbProofChip: "ফেসবুক প্রমাণ",
    rewardNone: "পুরস্কার: উল্লেখ নেই",
    wizardStepIdentity: "পেটের পরিচয়",
    wizardStepContext: "স্থান ও সময়",
    wizardStepContact: "যোগাযোগ",
    wizardStepOf: "ধাপ {current} / {total}",
    closeEntryLabel: "ফর্ম বন্ধ করুন",
    closeWindowLabel: "উইন্ডো বন্ধ করুন",
    profileBtn: "আমার প্রোফাইল",
    profileTitle: "আপনার প্রোফাইল সেট করুন",
    profileSubtitle: "এই প্রোফাইল তথ্য পোস্ট, ডোনেশন আর মন্তব্যে ব্যবহার হবে।",
    profileNameLabel: "ডিসপ্লে নাম",
    profileContactLabel: "প্রধান যোগাযোগ",
    profileAreaLabel: "শহর / এলাকা",
    profileAvatarLabel: "অ্যাভাটার URL (ঐচ্ছিক)",
    profileBioLabel: "ছোট পরিচিতি (ঐচ্ছিক)",
    saveProfileBtn: "প্রোফাইল সেভ করুন",
    createdBy: "পোস্ট করেছেন",
    unknownMember: "কমিউনিটি সদস্য",
    profileSaved: "প্রোফাইল সেভ হয়েছে।",
  },
};

const SAMPLE_CASES = [
  {
    id: "case-1",
    caseType: "lost",
    status: "open",
    petName: "Bruno",
    species: "Dog",
    photoUrl:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    description: "Golden retriever with blue collar, friendly but anxious.",
    locationText: "Dhanmondi Lake",
    eventDate: "2026-02-03",
    contact: "+880 1X XXX XXXXX",
    rewardAmount: 3500,
    urgency: "Critical",
    ownerName: "Ayesha Rahman",
    ownerArea: "Dhanmondi",
    language: "en",
    verificationLevel: "soft",
    commentCount: 0,
    createdAt: Date.now() - 6 * 60 * 60 * 1000,
    updatedAt: Date.now() - 6 * 60 * 60 * 1000,
  },
  {
    id: "case-2",
    caseType: "found",
    status: "open",
    petName: "Unknown Cat",
    species: "Cat",
    photoUrl:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80",
    description: "Calm cat found near market, wearing a red bell collar.",
    locationText: "Uttara Sector 7",
    eventDate: "2026-02-05",
    contact: "@saveMithi",
    rewardAmount: 0,
    urgency: "High",
    ownerName: "Mithi Chowdhury",
    ownerArea: "Uttara",
    language: "en",
    verificationLevel: "soft",
    commentCount: 0,
    createdAt: Date.now() - 20 * 60 * 60 * 1000,
    updatedAt: Date.now() - 20 * 60 * 60 * 1000,
  },
  {
    id: "case-3",
    caseType: "lost",
    status: "reunited",
    petName: "Nina",
    species: "Rabbit",
    photoUrl:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=80",
    description: "White rabbit with pink harness.",
    locationText: "Mohammadpur",
    eventDate: "2026-01-29",
    contact: "+880 1X XXX XXXXX",
    rewardAmount: 0,
    urgency: "Moderate",
    ownerName: "Tanvir Ahmed",
    ownerArea: "Mohammadpur",
    language: "en",
    verificationLevel: "soft",
    commentCount: 0,
    createdAt: Date.now() - 90 * 60 * 60 * 1000,
    updatedAt: Date.now() - 40 * 60 * 60 * 1000,
  },
];

const SAMPLE_DONATIONS = [
  {
    id: "don-1",
    campaignTitle: "Emergency Surgery for Kalu",
    beneficiary: "Street dog rescue foster",
    goalAmount: 45000,
    raisedAmount: 18250,
    urgency: "Critical",
    contact: "Bkash: 01XXXXXXXXX",
    description: "Accident trauma surgery + 10 day critical care bill.",
    photoUrl:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80",
    ownerName: "Paw Rescue Circle",
    ownerArea: "Dhaka",
    facebookPostUrl: "https://www.facebook.com/permalink.php?story_fbid=1&id=1",
    facebookVerified: true,
    status: "active",
    visibilityPriority: 0,
    commentCount: 0,
    createdAt: Date.now() - 18 * 60 * 60 * 1000,
    updatedAt: Date.now() - 18 * 60 * 60 * 1000,
  },
  {
    id: "don-2",
    campaignTitle: "Monthly Food + Deworming",
    beneficiary: "Mirpur shelter cats",
    goalAmount: 16000,
    raisedAmount: 16000,
    urgency: "Moderate",
    contact: "Facebook: Paw Home Mirpur",
    description: "Food sacks, deworming medicine, and litter for 24 cats.",
    photoUrl:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80",
    ownerName: "Paw Home Mirpur",
    ownerArea: "Mirpur",
    facebookPostUrl: "https://www.facebook.com/permalink.php?story_fbid=2&id=2",
    facebookVerified: true,
    status: "completed",
    visibilityPriority: 1,
    commentCount: 0,
    createdAt: Date.now() - 55 * 60 * 60 * 1000,
    updatedAt: Date.now() - 6 * 60 * 60 * 1000,
  },
];

function normalizeUserProfile(raw = {}) {
  const now = Date.now();
  const id = String(raw.id || uid());
  const displayName = String(raw.displayName || "").trim().slice(0, 40);
  const contact = String(raw.contact || "").trim().slice(0, 80);
  const area = String(raw.area || "").trim().slice(0, 80);
  const avatarUrl = String(raw.avatarUrl || "").trim().slice(0, 300);
  const bio = String(raw.bio || "").trim().slice(0, 180);
  return {
    id,
    displayName,
    contact,
    area,
    avatarUrl,
    bio,
    joinedAt: asNumber(raw.joinedAt, now),
    updatedAt: asNumber(raw.updatedAt, now),
  };
}

function loadUserProfileFromStorage() {
  const fallback = normalizeUserProfile({
    displayName: "",
    contact: "",
  });
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.userProfile) || "null");
    if (!raw || typeof raw !== "object") return fallback;
    return normalizeUserProfile(raw);
  } catch (_error) {
    return fallback;
  }
}

const state = {
  language: localStorage.getItem(STORAGE_KEYS.language) || "en",
  dataMode: localStorage.getItem(STORAGE_KEYS.dataMode) || "local",
  entryTab: localStorage.getItem(STORAGE_KEYS.entryTab) || "pet",
  composerMode: localStorage.getItem(STORAGE_KEYS.composerMode) || "lost",
  boardTab: localStorage.getItem(STORAGE_KEYS.boardTab) || "alerts",
  feedFilter: localStorage.getItem(STORAGE_KEYS.feedFilter) || "urgent",
  service: null,
  cases: [],
  donations: [],
  summary: {
    openLost: 0,
    foundLeads: 0,
    reunited: 0,
    activeCampaigns: 0,
  },
  caseCursor: null,
  donationCursor: null,
  hasMoreCases: false,
  hasMoreDonations: false,
  selectedLocation: null,
  commentThreads: {},
  caseSearchQuery: "",
  donationSearchQuery: "",
  profile: loadUserProfileFromStorage(),
  imageUploads: {
    pet: { uploading: false, url: "", statusKey: "photoUploadGuide" },
    donation: { uploading: false, url: "", statusKey: "photoUploadGuide" },
  },
};
function t(key) {
  const pack = MESSAGES[state.language] || MESSAGES.en;
  return pack[key] || MESSAGES.en[key] || key;
}

function uid() {
  if (crypto && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `id-${Math.random().toString(36).slice(2, 11)}-${Date.now()}`;
}

function parseJson(raw, fallback) {
  try {
    return JSON.parse(raw);
  } catch (_error) {
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function asNumber(value, fallback = 0) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function isValidFacebookUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    const host = url.hostname.toLowerCase();
    const isFacebookHost =
      host === "facebook.com" || host === "www.facebook.com" || host === "m.facebook.com";
    return isFacebookHost && url.pathname.length > 1;
  } catch (_error) {
    return false;
  }
}

function isValidHttpUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    return url.protocol === "https:" || url.protocol === "http:";
  } catch (_error) {
    return false;
  }
}

function urgencyRank(level) {
  const map = {
    Critical: 4,
    High: 3,
    Moderate: 2,
    Low: 1,
  };
  return map[level] || 1;
}

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(asNumber(value));
}

function shortTimeAgo(timestamp) {
  const diffMs = Date.now() - asNumber(timestamp);
  const hours = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60)));
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d`;
  return `${Math.floor(days / 30)}mo`;
}

function profileInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  if (!parts.length) return "PB";
  return parts.map((part) => part[0]?.toUpperCase() || "").join("") || "PB";
}

function avatarTokenMarkup(name, avatarUrl, className = "avatar-token") {
  const safeName = String(name || t("unknownMember"));
  const safeAvatar = String(avatarUrl || "").trim();
  if (safeAvatar) {
    return `<span class="${escapeHtml(className)} with-image"><img src="${escapeHtml(safeAvatar)}" alt="${escapeHtml(safeName)}" /></span>`;
  }
  return `<span class="${escapeHtml(className)}">${escapeHtml(profileInitials(safeName))}</span>`;
}

function persistUserProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.userProfile, JSON.stringify(profile));
}

function currentAuthorSnapshot() {
  const profile = state.profile || normalizeUserProfile({});
  return {
    ownerId: profile.id,
    ownerName: profile.displayName || t("unknownMember"),
    ownerAvatarUrl: profile.avatarUrl,
    ownerArea: profile.area,
    ownerBio: profile.bio,
  };
}

function normalizeCaseRecord(raw) {
  const statusRaw = String(raw.status || "open").toLowerCase();
  const mappedStatus = statusRaw === "found" ? "reunited" : statusRaw;
  const ownerName = String(raw.ownerName || raw.authorName || "").trim();
  return {
    id: String(raw.id || uid()),
    caseType: raw.caseType === "found" ? "found" : "lost",
    status:
      mappedStatus === "reunited" || mappedStatus === "closed" ? "reunited" : "open",
    petName: String(raw.petName || raw.petTitle || "Unknown"),
    species: String(raw.species || "Other"),
    photoUrl: String(raw.photoUrl || raw.imageUrl || "").trim(),
    description: String(raw.description || ""),
    locationText: String(raw.locationText || raw.lastSeenLocation || ""),
    eventDate: String(raw.eventDate || raw.lastSeenDate || ""),
    contact: String(raw.contact || ""),
    rewardAmount: asNumber(raw.rewardAmount),
    urgency: String(raw.urgency || "High"),
    ownerId: String(raw.ownerId || raw.authorId || ""),
    ownerName,
    ownerAvatarUrl: String(raw.ownerAvatarUrl || raw.authorAvatarUrl || ""),
    ownerArea: String(raw.ownerArea || ""),
    ownerBio: String(raw.ownerBio || ""),
    language: String(raw.language || "en"),
    verificationLevel: String(raw.verificationLevel || "soft"),
    commentCount: Math.max(0, asNumber(raw.commentCount)),
    createdAt: asNumber(raw.createdAt, Date.now()),
    updatedAt: asNumber(raw.updatedAt, asNumber(raw.createdAt, Date.now())),
  };
}

function normalizeDonationRecord(raw) {
  const url = String(raw.facebookPostUrl || "").trim();
  const facebookVerified = Boolean(raw.facebookVerified) || isValidFacebookUrl(url);
  const ownerName = String(raw.ownerName || raw.authorName || "").trim();
  let status = String(raw.status || "active");
  if (!facebookVerified) status = "draft";
  if (asNumber(raw.raisedAmount) >= asNumber(raw.goalAmount) && asNumber(raw.goalAmount) > 0) {
    status = "completed";
  }
  return {
    id: String(raw.id || uid()),
    campaignTitle: String(raw.campaignTitle || "Untitled Campaign"),
    beneficiary: String(raw.beneficiary || "Not specified"),
    goalAmount: Math.max(1, asNumber(raw.goalAmount, 1)),
    raisedAmount: Math.max(0, asNumber(raw.raisedAmount)),
    urgency: String(raw.urgency || "Moderate"),
    ownerId: String(raw.ownerId || raw.authorId || ""),
    ownerName,
    ownerAvatarUrl: String(raw.ownerAvatarUrl || raw.authorAvatarUrl || ""),
    ownerArea: String(raw.ownerArea || ""),
    ownerBio: String(raw.ownerBio || ""),
    contact: String(raw.contact || ""),
    description: String(raw.description || ""),
    photoUrl: String(raw.photoUrl || raw.imageUrl || "").trim(),
    facebookPostUrl: url,
    facebookVerified,
    status,
    visibilityPriority: asNumber(raw.visibilityPriority),
    commentCount: Math.max(0, asNumber(raw.commentCount)),
    createdAt: asNumber(raw.createdAt, Date.now()),
    updatedAt: asNumber(raw.updatedAt, asNumber(raw.createdAt, Date.now())),
  };
}

function normalizeCommentRecord(raw) {
  const authorName = String(raw.authorName || raw.ownerName || "").trim();
  return {
    id: String(raw.id || uid()),
    authorId: String(raw.authorId || ""),
    authorName,
    authorContact: String(raw.authorContact || "").trim().slice(0, 70),
    authorAvatarUrl: String(raw.authorAvatarUrl || "").trim().slice(0, 300),
    authorArea: String(raw.authorArea || "").trim().slice(0, 80),
    text: String(raw.text || "").trim().slice(0, 500),
    language: String(raw.language || "en"),
    status: String(raw.status || "active"),
    createdAt: asNumber(raw.createdAt, Date.now()),
    updatedAt: asNumber(raw.updatedAt, Date.now()),
  };
}

class LocalStorageService {
  constructor() {
    this.keys = {
      petCases: STORAGE_KEYS.petCases,
      donations: STORAGE_KEYS.donations,
      caseComments: STORAGE_KEYS.caseComments,
      donationComments: STORAGE_KEYS.donationComments,
    };
    this.seed();
  }

  readList(key) {
    return parseJson(localStorage.getItem(key) || "[]", []);
  }

  writeList(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  readMap(key) {
    return parseJson(localStorage.getItem(key) || "{}", {});
  }

  writeMap(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  migrateLegacyCases() {
    const legacy = parseJson(localStorage.getItem("pawBondhu.lostPets") || "[]", []);
    return legacy.map((item) =>
      normalizeCaseRecord({
        id: item.id,
        caseType: "lost",
        status: item.status === "found" ? "reunited" : "open",
        petName: item.petName,
        species: item.species,
        photoUrl: item.photoUrl,
        description: item.description,
        locationText: item.lastSeenLocation,
        eventDate: item.lastSeenDate,
        contact: item.contact,
        rewardAmount: item.rewardAmount,
        urgency: item.urgency || "High",
        createdAt: item.createdAt,
        updatedAt: item.createdAt,
      }),
    );
  }

  migrateLegacyDonations() {
    const legacy = parseJson(localStorage.getItem("pawBondhu.donations") || "[]", []);
    return legacy.map((item) =>
      normalizeDonationRecord({
        id: item.id,
        campaignTitle: item.campaignTitle,
        beneficiary: item.beneficiary,
        goalAmount: item.goalAmount,
        raisedAmount: item.raisedAmount,
        urgency: item.urgency,
        contact: item.contact,
        description: item.description,
        photoUrl: item.photoUrl || item.imageUrl || "",
        facebookPostUrl: item.facebookPostUrl || "",
        status: item.status,
        createdAt: item.createdAt,
        updatedAt: item.createdAt,
      }),
    );
  }

  seed() {
    const storedCases = localStorage.getItem(this.keys.petCases);
    if (!storedCases) {
      const migratedCases = this.migrateLegacyCases();
      const cases = migratedCases.length ? migratedCases : SAMPLE_CASES.map(normalizeCaseRecord);
      this.writeList(this.keys.petCases, cases);
    } else {
      this.writeList(
        this.keys.petCases,
        this.readList(this.keys.petCases).map(normalizeCaseRecord),
      );
    }

    const storedDonations = localStorage.getItem(this.keys.donations);
    if (!storedDonations) {
      const migratedDonations = this.migrateLegacyDonations();
      const donations = migratedDonations.length
        ? migratedDonations
        : SAMPLE_DONATIONS.map(normalizeDonationRecord);
      this.writeList(this.keys.donations, donations);
    } else {
      this.writeList(
        this.keys.donations,
        this.readList(this.keys.donations).map(normalizeDonationRecord),
      );
    }

    if (!localStorage.getItem(this.keys.caseComments)) {
      this.writeMap(this.keys.caseComments, {});
    }
    if (!localStorage.getItem(this.keys.donationComments)) {
      this.writeMap(this.keys.donationComments, {});
    }
    this.repairCommentCounts();
  }

  repairCommentCounts() {
    const caseComments = this.readMap(this.keys.caseComments);
    const donationComments = this.readMap(this.keys.donationComments);

    const caseRows = this.readList(this.keys.petCases).map((item) => {
      const list = Array.isArray(caseComments[item.id]) ? caseComments[item.id] : [];
      const activeCount = list.filter((comment) => comment.status !== "flagged").length;
      return { ...item, commentCount: activeCount };
    });
    this.writeList(this.keys.petCases, caseRows);

    const donationRows = this.readList(this.keys.donations).map((item) => {
      const list = Array.isArray(donationComments[item.id]) ? donationComments[item.id] : [];
      const activeCount = list.filter((comment) => comment.status !== "flagged").length;
      return { ...item, commentCount: activeCount };
    });
    this.writeList(this.keys.donations, donationRows);
  }

  filterCases(rows, filter) {
    if (filter === "found") {
      return rows.filter((item) => item.caseType === "found" && item.status === "open");
    }
    if (filter === "reunited") {
      return rows.filter((item) => item.status === "reunited");
    }
    return rows.filter((item) => item.caseType === "lost" && item.status === "open");
  }

  sortCases(rows, filter) {
    if (filter === "urgent") {
      return rows.sort((a, b) => {
        const urgencyDiff = urgencyRank(b.urgency) - urgencyRank(a.urgency);
        if (urgencyDiff !== 0) return urgencyDiff;
        return b.createdAt - a.createdAt;
      });
    }
    return rows.sort((a, b) => b.createdAt - a.createdAt);
  }

  paginate(rows, limit, cursor) {
    const filtered = cursor ? rows.filter((item) => item.createdAt < cursor) : rows;
    const items = filtered.slice(0, limit);
    const nextCursor = filtered.length > limit ? items[items.length - 1].createdAt : null;
    return { items, nextCursor };
  }

  async listPetCases({ filter = "urgent", limit = 8, cursor = null }) {
    const allRows = this.readList(this.keys.petCases).map(normalizeCaseRecord);
    const rows = this.sortCases(this.filterCases(allRows, filter), filter);
    return this.paginate(rows, limit, cursor);
  }

  async createPetCase(payload) {
    if (!isValidHttpUrl(payload.photoUrl)) {
      throw new Error(t("photoRequired"));
    }
    const rows = this.readList(this.keys.petCases).map(normalizeCaseRecord);
    const now = Date.now();
    rows.push(
      normalizeCaseRecord({
        id: uid(),
        ...payload,
        status: "open",
        commentCount: 0,
        verificationLevel: "soft",
        createdAt: now,
        updatedAt: now,
      }),
    );
    this.writeList(this.keys.petCases, rows);
  }

  async markPetCaseReunited(id) {
    const rows = this.readList(this.keys.petCases).map(normalizeCaseRecord);
    const now = Date.now();
    const updated = rows.map((item) =>
      item.id === id ? { ...item, status: "reunited", updatedAt: now } : item,
    );
    this.writeList(this.keys.petCases, updated);
  }

  sortedDonations(rows) {
    const statusOrder = {
      active: 0,
      completed: 1,
      draft: 2,
    };
    return rows.sort((a, b) => {
      const orderDiff = (statusOrder[a.status] ?? 9) - (statusOrder[b.status] ?? 9);
      if (orderDiff !== 0) return orderDiff;
      if (a.visibilityPriority !== b.visibilityPriority) {
        return a.visibilityPriority - b.visibilityPriority;
      }
      return b.createdAt - a.createdAt;
    });
  }

  async listDonations({ limit = 6, cursor = null }) {
    const allRows = this.readList(this.keys.donations).map(normalizeDonationRecord);
    const rows = this.sortedDonations(allRows);
    return this.paginate(rows, limit, cursor);
  }

  async createDonation(payload) {
    if (!isValidFacebookUrl(payload.facebookPostUrl)) {
      throw new Error("Invalid Facebook URL.");
    }
    if (!isValidHttpUrl(payload.photoUrl)) {
      throw new Error(t("photoRequired"));
    }
    const rows = this.readList(this.keys.donations).map(normalizeDonationRecord);
    const now = Date.now();
    rows.push(
      normalizeDonationRecord({
        id: uid(),
        ...payload,
        raisedAmount: 0,
        facebookVerified: true,
        status: "active",
        commentCount: 0,
        visibilityPriority: 0,
        createdAt: now,
        updatedAt: now,
      }),
    );
    this.writeList(this.keys.donations, rows);
  }

  async addDonationAmount(id, amount) {
    const rows = this.readList(this.keys.donations).map(normalizeDonationRecord);
    const now = Date.now();
    const updated = rows.map((item) => {
      if (item.id !== id) return item;
      if (item.status === "draft") {
        throw new Error("Draft campaign cannot receive donations.");
      }
      const raisedAmount = item.raisedAmount + amount;
      const status = raisedAmount >= item.goalAmount ? "completed" : "active";
      return { ...item, raisedAmount, status, updatedAt: now };
    });
    this.writeList(this.keys.donations, updated);
  }

  getCommentMapKey(entityType) {
    return entityType === "case" ? this.keys.caseComments : this.keys.donationComments;
  }

  async listComments({ entityType, entityId, limit = 10, cursor = null }) {
    const mapKey = this.getCommentMapKey(entityType);
    const commentsMap = this.readMap(mapKey);
    const allItems = Array.isArray(commentsMap[entityId])
      ? commentsMap[entityId].map(normalizeCommentRecord)
      : [];
    const active = allItems
      .filter((item) => item.status !== "flagged")
      .sort((a, b) => b.createdAt - a.createdAt);
    const filtered = cursor ? active.filter((item) => item.createdAt < cursor) : active;
    const items = filtered.slice(0, limit);
    const nextCursor = filtered.length > limit ? items[items.length - 1].createdAt : null;
    return { items, nextCursor };
  }

  updateEntityCommentCount(entityType, entityId, delta) {
    const listKey = entityType === "case" ? this.keys.petCases : this.keys.donations;
    const normalizer = entityType === "case" ? normalizeCaseRecord : normalizeDonationRecord;
    const rows = this.readList(listKey).map(normalizer);
    const updated = rows.map((item) =>
      item.id === entityId
        ? { ...item, commentCount: Math.max(0, item.commentCount + delta), updatedAt: Date.now() }
        : item,
    );
    this.writeList(listKey, updated);
  }

  async addComment({ entityType, entityId, payload }) {
    const mapKey = this.getCommentMapKey(entityType);
    const commentsMap = this.readMap(mapKey);
    const list = Array.isArray(commentsMap[entityId])
      ? commentsMap[entityId].map(normalizeCommentRecord)
      : [];
    const now = Date.now();
    const record = normalizeCommentRecord({
      id: uid(),
      authorId: String(payload.authorId || "").trim(),
      authorName: String(payload.authorName || "").trim(),
      authorContact: String(payload.authorContact || "").trim(),
      authorAvatarUrl: String(payload.authorAvatarUrl || "").trim(),
      authorArea: String(payload.authorArea || "").trim(),
      text: String(payload.text || "").trim(),
      language: String(payload.language || "en"),
      status: "active",
      createdAt: now,
      updatedAt: now,
    });
    list.push(record);
    commentsMap[entityId] = list;
    this.writeMap(mapKey, commentsMap);
    this.updateEntityCommentCount(entityType, entityId, 1);
    return record;
  }

  async flagComment({ entityType, entityId, commentId }) {
    const mapKey = this.getCommentMapKey(entityType);
    const commentsMap = this.readMap(mapKey);
    const list = Array.isArray(commentsMap[entityId])
      ? commentsMap[entityId].map(normalizeCommentRecord)
      : [];
    const target = list.find((item) => item.id === commentId);
    if (!target || target.status === "flagged") return false;
    target.status = "flagged";
    target.updatedAt = Date.now();
    commentsMap[entityId] = list;
    this.writeMap(mapKey, commentsMap);
    this.updateEntityCommentCount(entityType, entityId, -1);
    return true;
  }

  async getSummary() {
    const cases = this.readList(this.keys.petCases).map(normalizeCaseRecord);
    const donations = this.readList(this.keys.donations).map(normalizeDonationRecord);
    return {
      openLost: cases.filter((item) => item.caseType === "lost" && item.status === "open").length,
      foundLeads: cases.filter((item) => item.caseType === "found" && item.status === "open")
        .length,
      reunited: cases.filter((item) => item.status === "reunited").length,
      activeCampaigns: donations.filter((item) => item.status === "active").length,
    };
  }
}

async function createFirebaseService() {
  const config = window.PAW_BONDHU_FIREBASE_CONFIG;
  if (!config || !config.projectId) {
    throw new Error("Firebase is not configured. Edit firebase-config.js first.");
  }

  const [{ initializeApp }, firestoreModule] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js"),
  ]);

  const {
    addDoc,
    collection,
    connectFirestoreEmulator,
    doc,
    getDocs,
    getFirestore,
    getCountFromServer,
    increment,
    limit: fsLimit,
    orderBy,
    query,
    runTransaction,
    startAfter,
    updateDoc,
    where,
    writeBatch,
  } = firestoreModule;

  const app = initializeApp(config);
  const db = getFirestore(app);

  const shouldUseEmulator =
    window.PAW_BONDHU_FIREBASE_USE_EMULATOR !== false &&
    ["localhost", "127.0.0.1"].includes(window.location.hostname);

  if (shouldUseEmulator) {
    const host = window.PAW_BONDHU_FIRESTORE_EMULATOR_HOST || "127.0.0.1";
    const port = Number(window.PAW_BONDHU_FIRESTORE_EMULATOR_PORT || 8080);
    connectFirestoreEmulator(db, host, port);
  }

  const mapDocs = (snapshot) =>
    snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

  const getCaseConstraints = (filter) => {
    if (filter === "found") {
      return [where("caseType", "==", "found"), where("status", "==", "open")];
    }
    if (filter === "reunited") {
      return [where("status", "==", "reunited")];
    }
    return [where("caseType", "==", "lost"), where("status", "==", "open")];
  };

  const parentCollection = (entityType) => (entityType === "case" ? "petCases" : "donations");

  return {
    async listPetCases({ filter = "urgent", limit = 8, cursor = null }) {
      const constraints = [...getCaseConstraints(filter), orderBy("createdAt", "desc")];
      if (cursor) constraints.push(startAfter(cursor));
      constraints.push(fsLimit(limit));
      const q = query(collection(db, "petCases"), ...constraints);
      const snapshot = await getDocs(q);
      const items = mapDocs(snapshot).map(normalizeCaseRecord);
      const nextCursor = items.length === limit ? items[items.length - 1].createdAt : null;
      return { items, nextCursor };
    },

    async createPetCase(payload) {
      if (!isValidHttpUrl(payload.photoUrl)) {
        throw new Error(t("photoRequired"));
      }
      const now = Date.now();
      await addDoc(collection(db, "petCases"), {
        ...payload,
        status: "open",
        verificationLevel: "soft",
        commentCount: 0,
        createdAt: now,
        updatedAt: now,
      });
    },

    async markPetCaseReunited(id) {
      await updateDoc(doc(db, "petCases", id), {
        status: "reunited",
        updatedAt: Date.now(),
      });
    },

    async listDonations({ limit = 6, cursor = null }) {
      const constraints = [orderBy("createdAt", "desc")];
      if (cursor) constraints.push(startAfter(cursor));
      constraints.push(fsLimit(limit));
      const q = query(collection(db, "donations"), ...constraints);
      const snapshot = await getDocs(q);
      const items = mapDocs(snapshot).map(normalizeDonationRecord);
      const nextCursor = items.length === limit ? items[items.length - 1].createdAt : null;
      return { items, nextCursor };
    },

    async createDonation(payload) {
      if (!isValidFacebookUrl(payload.facebookPostUrl)) {
        throw new Error("Invalid Facebook URL.");
      }
      if (!isValidHttpUrl(payload.photoUrl)) {
        throw new Error(t("photoRequired"));
      }
      const now = Date.now();
      await addDoc(collection(db, "donations"), {
        ...payload,
        raisedAmount: 0,
        facebookVerified: true,
        status: "active",
        visibilityPriority: 0,
        commentCount: 0,
        createdAt: now,
        updatedAt: now,
      });
    },

    async addDonationAmount(id, amount) {
      const docRef = doc(db, "donations", id);
      await runTransaction(db, async (tx) => {
        const snap = await tx.get(docRef);
        if (!snap.exists()) return;
        const row = normalizeDonationRecord({ id: snap.id, ...snap.data() });
        if (row.status === "draft") {
          throw new Error("Draft campaign cannot receive donations.");
        }
        const raisedAmount = row.raisedAmount + amount;
        const status = raisedAmount >= row.goalAmount ? "completed" : "active";
        tx.update(docRef, { raisedAmount, status, updatedAt: Date.now() });
      });
    },

    async listComments({ entityType, entityId, limit = 10, cursor = null }) {
      const constraints = [orderBy("createdAt", "desc")];
      if (cursor) constraints.push(startAfter(cursor));
      constraints.push(fsLimit(limit));
      const q = query(collection(db, parentCollection(entityType), entityId, "comments"), ...constraints);
      const snapshot = await getDocs(q);
      const items = mapDocs(snapshot)
        .map(normalizeCommentRecord)
        .filter((item) => item.status !== "flagged");
      const nextCursor =
        snapshot.docs.length === limit
          ? asNumber(snapshot.docs[snapshot.docs.length - 1].data().createdAt)
          : null;
      return { items, nextCursor };
    },

    async addComment({ entityType, entityId, payload }) {
      const parentRef = doc(db, parentCollection(entityType), entityId);
      const commentRef = doc(collection(db, parentCollection(entityType), entityId, "comments"));
      const now = Date.now();
      const batch = writeBatch(db);
      batch.set(commentRef, {
        authorId: String(payload.authorId || "").trim(),
        authorName: String(payload.authorName || "").trim(),
        authorContact: String(payload.authorContact || "").trim(),
        authorAvatarUrl: String(payload.authorAvatarUrl || "").trim(),
        authorArea: String(payload.authorArea || "").trim(),
        text: String(payload.text || "").trim(),
        language: String(payload.language || "en"),
        status: "active",
        createdAt: now,
        updatedAt: now,
      });
      batch.update(parentRef, { commentCount: increment(1), updatedAt: now });
      await batch.commit();
      return { id: commentRef.id };
    },

    async flagComment({ entityType, entityId, commentId }) {
      const parentRef = doc(db, parentCollection(entityType), entityId);
      const commentRef = doc(db, parentCollection(entityType), entityId, "comments", commentId);
      let changed = false;
      const now = Date.now();

      // Always prioritize comment flagging so report works even if parent doc is legacy/misaligned.
      await runTransaction(db, async (tx) => {
        const commentSnap = await tx.get(commentRef);
        if (!commentSnap.exists()) return;
        const commentData = commentSnap.data();
        if (commentData.status === "flagged") return;
        const authorName = String(commentData.authorName || "Anonymous").trim().slice(0, 40);
        const authorContact = String(commentData.authorContact || "Not provided")
          .trim()
          .slice(0, 70);
        const authorAvatarUrl = String(commentData.authorAvatarUrl || "").trim().slice(0, 300);
        const authorArea = String(commentData.authorArea || "").trim().slice(0, 80);
        const text = String(commentData.text || "Reported content").trim().slice(0, 500);
        tx.set(
          commentRef,
          {
            authorId: String(commentData.authorId || "").trim().slice(0, 64),
            authorName: authorName || "Anonymous",
            authorContact: authorContact || "Not provided",
            authorAvatarUrl,
            authorArea,
            text: text || "Reported content",
            language: String(commentData.language || "en"),
            status: "flagged",
            createdAt: asNumber(commentData.createdAt, now),
            updatedAt: now,
          },
          { merge: true },
        );
        changed = true;
      });

      if (!changed) return false;

      // Best-effort parent count decrement; don't block report if parent update fails validation.
      try {
        await runTransaction(db, async (tx) => {
          const parentSnap = await tx.get(parentRef);
          if (!parentSnap.exists()) return;
          const parentData = parentSnap.data();
          const currentCount = Math.max(0, asNumber(parentData.commentCount));
          const nextCount = currentCount > 0 ? currentCount - 1 : 0;
          const normalizedParent =
            entityType === "donation"
              ? normalizeDonationRecord({
                  id: parentSnap.id,
                  ...parentData,
                  commentCount: nextCount,
                  updatedAt: now,
                })
              : normalizeCaseRecord({
                  id: parentSnap.id,
                  ...parentData,
                  commentCount: nextCount,
                  updatedAt: now,
                });
          const { id: _ignoredId, ...parentPayload } = normalizedParent;
          tx.set(parentRef, parentPayload, { merge: true });
        });
      } catch (error) {
        console.warn("Comment flagged but parent count update failed:", error);
      }

      return changed;
    },

    async getSummary() {
      const openLostQ = query(
        collection(db, "petCases"),
        where("caseType", "==", "lost"),
        where("status", "==", "open"),
      );
      const foundQ = query(
        collection(db, "petCases"),
        where("caseType", "==", "found"),
        where("status", "==", "open"),
      );
      const reunitedQ = query(collection(db, "petCases"), where("status", "==", "reunited"));
      const activeDonationsQ = query(collection(db, "donations"), where("status", "==", "active"));
      const [openLost, foundLeads, reunited, activeCampaigns] = await Promise.all([
        getCountFromServer(openLostQ),
        getCountFromServer(foundQ),
        getCountFromServer(reunitedQ),
        getCountFromServer(activeDonationsQ),
      ]);
      return {
        openLost: openLost.data().count,
        foundLeads: foundLeads.data().count,
        reunited: reunited.data().count,
        activeCampaigns: activeCampaigns.data().count,
      };
    },
  };
}

function commentKey(entityType, entityId) {
  return `${entityType}:${entityId}`;
}

function ensureThread(entityType, entityId) {
  const key = commentKey(entityType, entityId);
  if (!state.commentThreads[key]) {
    state.commentThreads[key] = {
      key,
      entityType,
      entityId,
      open: false,
      loaded: false,
      loading: false,
      items: [],
      cursor: null,
      hasMore: false,
    };
  }
  return state.commentThreads[key];
}

function getCommentProfile() {
  const stored = parseJson(localStorage.getItem(STORAGE_KEYS.commentProfile) || "{}", {});
  return {
    authorName: String(stored.authorName || state.profile.displayName || "").trim(),
    authorContact: String(stored.authorContact || state.profile.contact || "").trim(),
  };
}

function saveCommentProfile(profile) {
  localStorage.setItem(STORAGE_KEYS.commentProfile, JSON.stringify(profile));
}

function renderProfileQuick() {
  if (!dom.quickProfileName || !dom.quickProfileAvatar) return;
  dom.quickProfileName.textContent = state.profile.displayName || t("profileBtn");
  const hasImage = Boolean(String(state.profile.avatarUrl || "").trim());
  dom.quickProfileAvatar.classList.toggle("with-image", hasImage);
  if (hasImage) {
    dom.quickProfileAvatar.innerHTML = `<img src="${escapeHtml(state.profile.avatarUrl)}" alt="${escapeHtml(state.profile.displayName || t("profileBtn"))}" />`;
  } else {
    dom.quickProfileAvatar.textContent = profileInitials(state.profile.displayName || t("profileBtn"));
  }
}

function applyProfileDefaults() {
  const petContact = dom.petCaseForm?.elements?.namedItem("contact");
  if (petContact instanceof HTMLInputElement && !petContact.value.trim() && state.profile.contact) {
    petContact.value = state.profile.contact || "";
  }
  const donationContact = dom.donationForm?.elements?.namedItem("contact");
  if (
    donationContact instanceof HTMLInputElement &&
    !donationContact.value.trim() &&
    state.profile.contact
  ) {
    donationContact.value = state.profile.contact || "";
  }
}

function openProfileModal() {
  if (!dom.profileModal || !dom.profileBackdrop || !dom.profileForm) return;
  const displayName = dom.profileForm.elements.namedItem("displayName");
  const contact = dom.profileForm.elements.namedItem("contact");
  const area = dom.profileForm.elements.namedItem("area");
  const avatarUrl = dom.profileForm.elements.namedItem("avatarUrl");
  const bio = dom.profileForm.elements.namedItem("bio");
  if (displayName instanceof HTMLInputElement) displayName.value = state.profile.displayName || "";
  if (contact instanceof HTMLInputElement) contact.value = state.profile.contact || "";
  if (area instanceof HTMLInputElement) area.value = state.profile.area || "";
  if (avatarUrl instanceof HTMLInputElement) avatarUrl.value = state.profile.avatarUrl || "";
  if (bio instanceof HTMLTextAreaElement) bio.value = state.profile.bio || "";
  dom.profileBackdrop.classList.remove("hidden");
  dom.profileModal.classList.remove("hidden");
  document.body.classList.add("profile-modal-open");
}

function closeProfileModal() {
  if (!dom.profileModal || !dom.profileBackdrop) return;
  dom.profileModal.classList.add("hidden");
  dom.profileBackdrop.classList.add("hidden");
  document.body.classList.remove("profile-modal-open");
}

function renderEmpty(container, message) {
  container.innerHTML = `<div class="empty">${escapeHtml(message)}</div>`;
}

function renderMode() {
  const isFirebase = state.dataMode === "firebase";
  dom.dataModeBadge.textContent = isFirebase ? t("modeFirebase") : t("modeLocal");
  dom.switchModeBtn.textContent = isFirebase ? t("switchToLocal") : t("switchToFirebase");
}

function renderSummary() {
  dom.summaryLine.textContent = `${state.summary.openLost} ${t("summaryOpenLost")} • ${state.summary.foundLeads} ${t("summaryFound")} • ${state.summary.reunited} ${t("summaryReunited")} • ${state.summary.activeCampaigns} ${t("summaryActive")}`;
}

function renderFeedFilterButtons() {
  dom.filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.feedFilter);
  });
}

function renderFeedTitle() {
  if (state.feedFilter === "found") {
    dom.feedTitle.textContent = t("feedTitleFound");
    return;
  }
  if (state.feedFilter === "reunited") {
    dom.feedTitle.textContent = t("feedTitleReunited");
    return;
  }
  dom.feedTitle.textContent = t("feedTitleUrgent");
}

function setComposerMode(mode, persist = true) {
  state.composerMode = mode === "found" ? "found" : "lost";
  if (persist) {
    localStorage.setItem(STORAGE_KEYS.composerMode, state.composerMode);
  }
  dom.composerLostBtn.classList.toggle("active", state.composerMode === "lost");
  dom.composerFoundBtn.classList.toggle("active", state.composerMode === "found");
  dom.caseTypeInput.value = state.composerMode;
  dom.rewardField.classList.toggle("hidden", state.composerMode === "found");
  dom.petCaseSubmitBtn.textContent =
    state.composerMode === "found" ? t("postFoundBtn") : t("postLostBtn");
  dom.composerHint.textContent =
    state.composerMode === "found" ? t("composerFoundHint") : t("composerLostHint");
}

const WIZARD_STEP_KEYS = ["wizardStepIdentity", "wizardStepContext", "wizardStepContact"];

function getWizardActiveStepIndex() {
  const idx = dom.wizardSteps.findIndex((step) => step.classList.contains("active"));
  return idx >= 0 ? idx : 0;
}

function focusFirstField(container) {
  if (!container) return;
  const firstField = container.querySelector("input, select, textarea");
  if (firstField instanceof HTMLElement) {
    firstField.focus({ preventScroll: true });
  }
}

function refreshCharCount(input, counterEl) {
  if (!(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) || !counterEl) return;
  const max = Number(input.maxLength > 0 ? input.maxLength : 0);
  const length = input.value.length;
  counterEl.textContent = max > 0 ? `${length}/${max}` : `${length}`;
  counterEl.classList.toggle("over-limit", max > 0 && length > max);
}

function refreshCharCounters() {
  refreshCharCount(dom.petDescriptionInput, dom.petDescriptionCount);
  refreshCharCount(dom.donationDescriptionInput, dom.donationDescriptionCount);
}

function updateWizardChrome() {
  const total = dom.wizardSteps.length || 1;
  const activeIndex = Math.min(getWizardActiveStepIndex(), total - 1);
  const current = activeIndex + 1;
  if (dom.wizardProgressBar) {
    dom.wizardProgressBar.style.width = `${Math.round((current / total) * 100)}%`;
  }
  if (dom.wizardStepLabel) {
    const template = t("wizardStepOf");
    const stepText = String(template)
      .replace("{current}", String(current))
      .replace("{total}", String(total));
    const stepName = t(WIZARD_STEP_KEYS[activeIndex] || WIZARD_STEP_KEYS[0]);
    dom.wizardStepLabel.textContent = `${stepText} • ${stepName}`;
  }
  dom.wizardJumpButtons.forEach((button, index) => {
    const isActive = index === activeIndex;
    const isDone = index < activeIndex;
    button.classList.toggle("active", isActive);
    button.classList.toggle("done", isDone);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function validateWizardStep(stepEl) {
  if (!(stepEl instanceof HTMLElement)) return true;
  const requiredFields = Array.from(stepEl.querySelectorAll("input, select, textarea")).filter(
    (field) =>
      field instanceof HTMLInputElement ||
      field instanceof HTMLSelectElement ||
      field instanceof HTMLTextAreaElement,
  );
  for (const field of requiredFields) {
    if (field.hasAttribute("required") && !field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }
  return true;
}

function setWizardStep(index, { validateCurrent = false, focus = true } = {}) {
  if (!dom.wizardSteps.length) return false;
  const safeIndex = Math.max(0, Math.min(index, dom.wizardSteps.length - 1));
  const activeIndex = getWizardActiveStepIndex();
  const activeStep = dom.wizardSteps[activeIndex];
  if (validateCurrent && safeIndex > activeIndex && !validateWizardStep(activeStep)) {
    return false;
  }
  dom.wizardSteps.forEach((step, idx) => {
    step.classList.toggle("active", idx === safeIndex);
  });
  updateWizardChrome();
  if (focus) {
    focusFirstField(dom.wizardSteps[safeIndex]);
  }
  return true;
}

const wizard = {
  next() {
    setWizardStep(getWizardActiveStepIndex() + 1, { validateCurrent: true });
  },
  prev() {
    setWizardStep(getWizardActiveStepIndex() - 1, { focus: true });
  },
  jumpTo(index) {
    setWizardStep(index, { validateCurrent: true, focus: true });
  },
  reset() {
    setWizardStep(0, { focus: false });
  },
};

function setFeedFilter(filter, persist = true) {
  const safe = ["urgent", "found", "reunited"].includes(filter) ? filter : "urgent";
  state.feedFilter = safe;
  if (persist) {
    localStorage.setItem(STORAGE_KEYS.feedFilter, safe);
  }
  renderFeedFilterButtons();
  renderFeedTitle();
}

function setEntryTab(tab, persist = true) {
  const safe = tab === "donation" ? "donation" : "pet";
  state.entryTab = safe;
  if (persist) {
    localStorage.setItem(STORAGE_KEYS.entryTab, safe);
  }
  const petActive = safe === "pet";
  dom.entryPetTabBtn.classList.toggle("active", petActive);
  dom.entryDonationTabBtn.classList.toggle("active", !petActive);
  dom.entryPetTabBtn.setAttribute("aria-selected", petActive ? "true" : "false");
  dom.entryDonationTabBtn.setAttribute("aria-selected", petActive ? "false" : "true");
  dom.petEntryPane.classList.toggle("hidden", !petActive);
  dom.donationEntryPane.classList.toggle("hidden", petActive);
  if (petActive) {
    updateWizardChrome();
  }
}

function setBoardTab(tab, persist = true) {
  const safe = tab === "donations" ? "donations" : "alerts";
  state.boardTab = safe;
  if (persist) {
    localStorage.setItem(STORAGE_KEYS.boardTab, safe);
  }
  const alertsActive = safe === "alerts";
  dom.boardAlertsTabBtn.classList.toggle("active", alertsActive);
  dom.boardDonationsTabBtn.classList.toggle("active", !alertsActive);
  dom.boardAlertsTabBtn.setAttribute("aria-selected", alertsActive ? "true" : "false");
  dom.boardDonationsTabBtn.setAttribute("aria-selected", alertsActive ? "false" : "true");
  dom.alertsBoardPane.classList.toggle("hidden", !alertsActive);
  dom.donationsBoardPane.classList.toggle("hidden", alertsActive);
}

function applyTranslations() {
  document.documentElement.lang = state.language === "bn" ? "bn" : "en";
  dom.translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    node.textContent = t(key);
  });
  dom.refreshCasesBtn.textContent = t("refreshBtn");
  dom.refreshDonationsBtn.textContent = t("refreshBtn");
  dom.loadMoreCasesBtn.textContent = t("loadMore");
  dom.loadMoreDonationsBtn.textContent = t("loadMore");
  dom.donationSubmitBtn.textContent = t("createCampaignBtn");
  dom.facebookPostUrlInput.placeholder = "https://www.facebook.com/...";
  if (dom.petPhotoUrlInput) {
    dom.petPhotoUrlInput.placeholder = "https://...";
  }
  if (dom.donationPhotoUrlInput) {
    dom.donationPhotoUrlInput.placeholder = "https://...";
  }
  const placeQueryInput = dom.clinicSearchForm.elements.placeQuery;
  if (placeQueryInput instanceof HTMLInputElement) {
    placeQueryInput.placeholder = state.language === "bn" ? "গুলশান, ঢাকা" : "Gulshan, Dhaka";
  }
  renderMode();
  renderFeedTitle();
  setEntryTab(state.entryTab, false);
  setBoardTab(state.boardTab, false);
  setComposerMode(state.composerMode, false);
  renderSummary();
  if (dom.closeEntryBtn) {
    dom.closeEntryBtn.title = t("closeEntryLabel");
  }
  if (dom.closeDetailBtn) {
    const closeLabel = t("closeWindowLabel");
    dom.closeDetailBtn.title = closeLabel;
    dom.closeDetailBtn.setAttribute("aria-label", closeLabel);
  }
  if (dom.closeProfileBtn) {
    const closeLabel = t("closeWindowLabel");
    dom.closeProfileBtn.title = closeLabel;
    dom.closeProfileBtn.setAttribute("aria-label", closeLabel);
  }
  renderProfileQuick();
  updateWizardChrome();
  refreshCharCounters();
  if (!dom.facebookUrlError.textContent) {
    dom.facebookUrlError.textContent = "";
  }
  const petStatusKey = state.imageUploads.pet.statusKey || "photoUploadGuide";
  const donationStatusKey = state.imageUploads.donation.statusKey || "photoUploadGuide";
  setUploadStatus("pet", petStatusKey);
  setUploadStatus("donation", donationStatusKey);
}

function validateFacebookField(showErrors = true) {
  const value = String(dom.facebookPostUrlInput.value || "").trim();
  if (!value) {
    if (showErrors) dom.facebookUrlError.textContent = t("facebookRequired");
    return false;
  }
  if (!isValidFacebookUrl(value)) {
    if (showErrors) dom.facebookUrlError.textContent = t("facebookInvalid");
    return false;
  }
  dom.facebookUrlError.textContent = "";
  return true;
}

function fillTemplate(template, map = {}) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => String(map[key] ?? ""));
}

function imageUploadProviderReady() {
  if (IMAGE_UPLOAD_CONFIG.provider === "cloudinary") {
    return Boolean(IMAGE_UPLOAD_CONFIG.cloudName && IMAGE_UPLOAD_CONFIG.uploadPreset);
  }
  if (IMAGE_UPLOAD_CONFIG.provider === "imgur") {
    return Boolean(IMAGE_UPLOAD_CONFIG.imgurClientId);
  }
  return false;
}

function getUploadControls(kind) {
  if (kind === "donation") {
    return {
      fileInput: dom.donationPhotoFileInput,
      urlInput: dom.donationPhotoUrlInput,
      statusNode: dom.donationPhotoStatus,
      errorNode: dom.donationPhotoError,
      previewNode: dom.donationPhotoPreview,
    };
  }
  return {
    fileInput: dom.petPhotoFileInput,
    urlInput: dom.petPhotoUrlInput,
    statusNode: dom.petPhotoStatus,
    errorNode: dom.petPhotoError,
    previewNode: dom.petPhotoPreview,
  };
}

function syncUploadPreview(kind) {
  const controls = getUploadControls(kind);
  if (!(controls.previewNode instanceof HTMLImageElement) || !(controls.urlInput instanceof HTMLInputElement)) {
    return;
  }
  const value = String(controls.urlInput.value || "").trim();
  if (isValidHttpUrl(value)) {
    controls.previewNode.src = value;
    controls.previewNode.classList.remove("hidden");
  } else {
    controls.previewNode.src = "";
    controls.previewNode.classList.add("hidden");
  }
}

function setUploadStatus(kind, statusKeyOrText, isError = false, values = {}) {
  const controls = getUploadControls(kind);
  if (!(controls.statusNode instanceof HTMLElement) || !(controls.errorNode instanceof HTMLElement)) return;
  const resolved =
    statusKeyOrText && MESSAGES.en[statusKeyOrText]
      ? fillTemplate(t(statusKeyOrText), values)
      : fillTemplate(statusKeyOrText || "", values);
  if (isError) {
    controls.errorNode.textContent = resolved;
    controls.statusNode.textContent = "";
  } else {
    controls.errorNode.textContent = "";
    controls.statusNode.textContent = resolved;
  }
}

function setUploadState(kind, partial = {}) {
  const current = state.imageUploads[kind] || { uploading: false, url: "", statusKey: "photoUploadGuide" };
  state.imageUploads[kind] = { ...current, ...partial };
}

async function uploadImageViaCloudinary(file, context = "general") {
  const endpoint = `https://api.cloudinary.com/v1_1/${encodeURIComponent(IMAGE_UPLOAD_CONFIG.cloudName)}/image/upload`;
  const payload = new FormData();
  payload.append("file", file);
  payload.append("upload_preset", IMAGE_UPLOAD_CONFIG.uploadPreset);
  if (IMAGE_UPLOAD_CONFIG.uploadFolder) {
    payload.append("folder", IMAGE_UPLOAD_CONFIG.uploadFolder);
  }
  payload.append("context", `app=paw-bondhu|type=${context}`);
  const response = await fetch(endpoint, { method: "POST", body: payload });
  const data = await response.json();
  if (!response.ok || typeof data.secure_url !== "string" || !data.secure_url.trim()) {
    const message = data?.error?.message || "Cloudinary upload failed.";
    throw new Error(message);
  }
  return data.secure_url.trim();
}

async function uploadImageViaImgur(file) {
  const payload = new FormData();
  payload.append("image", file);
  const response = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: { Authorization: `Client-ID ${IMAGE_UPLOAD_CONFIG.imgurClientId}` },
    body: payload,
  });
  const data = await response.json();
  const link = String(data?.data?.link || "").trim();
  if (!response.ok || !data?.success || !link) {
    const message =
      typeof data?.data?.error === "string"
        ? data.data.error
        : data?.data?.error?.message || "Imgur upload failed.";
    throw new Error(message);
  }
  return link.replace(/^http:\/\//i, "https://");
}

async function uploadImageFile(kind, file) {
  const maxBytes = IMAGE_UPLOAD_CONFIG.maxFileSizeMb * 1024 * 1024;
  if (!file || !(file instanceof File)) {
    throw new Error(t("photoUploadFileTypeError"));
  }
  if (!String(file.type || "").toLowerCase().startsWith("image/")) {
    throw new Error(t("photoUploadFileTypeError"));
  }
  if (file.size > maxBytes) {
    throw new Error(fillTemplate(t("photoUploadFileSizeError"), { max: IMAGE_UPLOAD_CONFIG.maxFileSizeMb }));
  }
  if (IMAGE_UPLOAD_CONFIG.provider === "cloudinary") {
    return uploadImageViaCloudinary(file, kind);
  }
  if (IMAGE_UPLOAD_CONFIG.provider === "imgur") {
    return uploadImageViaImgur(file);
  }
  throw new Error(t("photoUploadConfigMissing"));
}

async function onImageFileChange(kind) {
  const controls = getUploadControls(kind);
  if (!(controls.fileInput instanceof HTMLInputElement) || !(controls.urlInput instanceof HTMLInputElement)) return;
  const file = controls.fileInput.files?.[0];
  if (!file) return;
  if (!imageUploadProviderReady()) {
    setUploadState(kind, { uploading: false, statusKey: "photoUploadConfigMissing" });
    setUploadStatus(kind, "photoUploadConfigMissing");
    return;
  }
  setUploadState(kind, { uploading: true, statusKey: "photoUploadProcessing" });
  setUploadStatus(kind, "photoUploadProcessing");
  try {
    const uploadedUrl = await uploadImageFile(kind, file);
    controls.urlInput.value = uploadedUrl;
    setUploadState(kind, { uploading: false, url: uploadedUrl, statusKey: "photoUploadDone" });
    setUploadStatus(kind, "photoUploadDone");
    syncUploadPreview(kind);
  } catch (error) {
    console.error(error);
    setUploadState(kind, { uploading: false, statusKey: "photoUploadFailed" });
    setUploadStatus(kind, error?.message || t("photoUploadFailed"), true);
  }
}

function onImageUrlInput(kind) {
  const controls = getUploadControls(kind);
  if (!(controls.urlInput instanceof HTMLInputElement)) return;
  const value = String(controls.urlInput.value || "").trim();
  controls.urlInput.setCustomValidity("");
  const valid = isValidHttpUrl(value);
  setUploadState(kind, { url: value, statusKey: valid ? "photoUploadDone" : "photoUploadGuide" });
  if (valid) {
    setUploadStatus(kind, "photoUploadDone");
  } else if (imageUploadProviderReady()) {
    setUploadStatus(kind, "photoUploadGuide");
  } else {
    setUploadStatus(kind, "photoUploadConfigMissing");
  }
  syncUploadPreview(kind);
}

function validateRequiredPhoto(kind) {
  const controls = getUploadControls(kind);
  if (!(controls.urlInput instanceof HTMLInputElement)) return "";
  if (state.imageUploads[kind]?.uploading) {
    throw new Error(t("photoUploadBusy"));
  }
  const value = String(controls.urlInput.value || "").trim();
  if (!isValidHttpUrl(value)) {
    controls.urlInput.setCustomValidity(t("photoRequired"));
    controls.urlInput.reportValidity();
    controls.urlInput.setCustomValidity("");
    setUploadStatus(kind, "photoRequired", true);
    throw new Error(t("photoRequired"));
  }
  controls.urlInput.setCustomValidity("");
  return value;
}

function resetUploadUi(kind) {
  const controls = getUploadControls(kind);
  if (controls.fileInput instanceof HTMLInputElement) {
    controls.fileInput.value = "";
  }
  if (controls.urlInput instanceof HTMLInputElement) {
    controls.urlInput.value = "";
    controls.urlInput.setCustomValidity("");
  }
  setUploadState(kind, { uploading: false, url: "", statusKey: "photoUploadGuide" });
  if (imageUploadProviderReady()) {
    setUploadStatus(kind, "photoUploadGuide");
  } else {
    setUploadStatus(kind, "photoUploadConfigMissing");
  }
  syncUploadPreview(kind);
}

function caseStatusChip(caseItem) {
  if (caseItem.status === "reunited") {
    return `<span class="chip ok">${escapeHtml(t("feedTitleReunited"))}</span>`;
  }
  if (caseItem.caseType === "found") {
    return `<span class="chip info">${escapeHtml(t("filterFound"))}</span>`;
  }
  return `<span class="chip warn">${escapeHtml(t("filterUrgent"))}</span>`;
}

function donationStatusMeta(campaign) {
  if (campaign.status === "completed") {
    return { statusLabel: t("statusCompleted"), statusClass: "ok" };
  }
  if (campaign.status === "draft") {
    return { statusLabel: t("statusDraft"), statusClass: "info" };
  }
  return { statusLabel: t("statusActive"), statusClass: "warn" };
}

function renderOwnerMeta(item) {
  const ownerName = String(item.ownerName || t("unknownMember"));
  const ownerArea = String(item.ownerArea || "").trim();
  return `
    <div class="owner-meta">
      ${avatarTokenMarkup(ownerName, item.ownerAvatarUrl, "avatar-token xs")}
      <span class="owner-name">${escapeHtml(ownerName)}</span>
      ${ownerArea ? `<span class="owner-area">• ${escapeHtml(ownerArea)}</span>` : ""}
    </div>
  `;
}

function renderCaseDetailWindow(caseItem) {
  const image = caseItem.photoUrl || FALLBACK_IMG;
  const rewardText =
    caseItem.caseType === "lost" && asNumber(caseItem.rewardAmount) > 0
      ? money(caseItem.rewardAmount)
      : t("rewardNone");

  return `
    <article class="detail-sheet">
      <div class="detail-media-wrap">
        <img class="detail-image" src="${escapeHtml(image)}" alt="${escapeHtml(caseItem.petName)}" />
      </div>
      <div class="detail-body">
        <div class="detail-head">
          <h3 id="detailModalTitle">${escapeHtml(caseItem.petName)} (${escapeHtml(caseItem.species)})</h3>
          ${caseStatusChip(caseItem)}
        </div>
        <div class="detail-owner">
          <span class="detail-owner-label">${escapeHtml(t("createdBy"))}</span>
          ${renderOwnerMeta(caseItem)}
        </div>
        <p class="detail-description">${escapeHtml(caseItem.description)}</p>
        <div class="detail-grid">
          <div class="detail-row">
            <span>${escapeHtml(t("locationLabel"))}</span>
            <strong>${escapeHtml(caseItem.locationText)}</strong>
          </div>
          <div class="detail-row">
            <span>${escapeHtml(t("dateLabel"))}</span>
            <strong>${escapeHtml(caseItem.eventDate || "N/A")}</strong>
          </div>
          <div class="detail-row">
            <span>${escapeHtml(t("contactLabel"))}</span>
            <strong>${escapeHtml(caseItem.contact)}</strong>
          </div>
          <div class="detail-row">
            <span>${escapeHtml(t("urgencyLabel"))}</span>
            <strong>${escapeHtml(caseItem.urgency)}</strong>
          </div>
          <div class="detail-row">
            <span>${escapeHtml(t("rewardLabel"))}</span>
            <strong>${escapeHtml(rewardText)}</strong>
          </div>
          <div class="detail-row">
            <span>Posted</span>
            <strong>${escapeHtml(shortTimeAgo(caseItem.createdAt))} ago</strong>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderDonationDetailWindow(campaign) {
  const image = campaign.photoUrl || FALLBACK_IMG;
  const { statusLabel, statusClass } = donationStatusMeta(campaign);
  const progress = Math.min(
    100,
    Math.round((asNumber(campaign.raisedAmount) / Math.max(1, asNumber(campaign.goalAmount))) * 100),
  );
  const proofHtml = campaign.facebookVerified
    ? `<a class="chip info" href="${escapeHtml(campaign.facebookPostUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("fbProofChip"))}</a>`
    : `<span class="chip warn">${escapeHtml(t("donationNeedsFb"))}</span>`;

  return `
    <article class="detail-sheet">
      <div class="detail-media-wrap">
        <img class="detail-image" src="${escapeHtml(image)}" alt="${escapeHtml(campaign.campaignTitle)}" />
      </div>
      <div class="detail-body">
        <div class="detail-head">
          <h3 id="detailModalTitle">${escapeHtml(campaign.campaignTitle)}</h3>
          <span class="chip ${statusClass}">${escapeHtml(statusLabel)}</span>
        </div>
        <div class="detail-owner">
          <span class="detail-owner-label">${escapeHtml(t("createdBy"))}</span>
          ${renderOwnerMeta(campaign)}
        </div>
        <p class="detail-subtitle">${escapeHtml(campaign.beneficiary)}</p>
        <p class="detail-description">${escapeHtml(campaign.description)}</p>
        <div class="progress"><span style="width:${progress}%"></span></div>
        <p class="detail-progress"><strong>${money(campaign.raisedAmount)}</strong> / ${money(campaign.goalAmount)} (${progress}%)</p>
        <div class="detail-grid">
          <div class="detail-row">
            <span>${escapeHtml(t("beneficiaryLabel"))}</span>
            <strong>${escapeHtml(campaign.beneficiary)}</strong>
          </div>
          <div class="detail-row">
            <span>${escapeHtml(t("goalLabel"))}</span>
            <strong>${escapeHtml(money(campaign.goalAmount))}</strong>
          </div>
          <div class="detail-row">
            <span>${escapeHtml(t("contactLabel"))}</span>
            <strong>${escapeHtml(campaign.contact)}</strong>
          </div>
          <div class="detail-row">
            <span>${escapeHtml(t("urgencyLabel"))}</span>
            <strong>${escapeHtml(campaign.urgency)}</strong>
          </div>
          <div class="detail-row">
            <span>${escapeHtml(t("fbProofChip"))}</span>
            <strong>${proofHtml}</strong>
          </div>
        </div>
      </div>
    </article>
  `;
}

function openDetailWindow(entityType, entityId) {
  if (!dom.detailContent || !dom.detailBackdrop || !dom.detailModal) return;
  const item =
    entityType === "donation"
      ? state.donations.find((entry) => entry.id === entityId)
      : state.cases.find((entry) => entry.id === entityId);
  if (!item) return;
  dom.detailContent.innerHTML =
    entityType === "donation" ? renderDonationDetailWindow(item) : renderCaseDetailWindow(item);
  dom.detailBackdrop.classList.remove("hidden");
  dom.detailModal.classList.remove("hidden");
  document.body.classList.add("detail-modal-open");
}

function closeDetailWindow() {
  if (!dom.detailContent || !dom.detailBackdrop || !dom.detailModal) return;
  dom.detailContent.innerHTML = "";
  dom.detailBackdrop.classList.add("hidden");
  dom.detailModal.classList.add("hidden");
  document.body.classList.remove("detail-modal-open");
}

function openCardWindowFromElement(clickTarget, defaultEntityType) {
  if (!(clickTarget instanceof Element)) return false;
  const interactiveSelector =
    "[data-action], button, a, input, select, textarea, form, .comments-panel, .comment-form";
  if (clickTarget.closest(interactiveSelector)) {
    return false;
  }
  const cardEl = clickTarget.closest("[data-card-id][data-card-entity]");
  if (!(cardEl instanceof HTMLElement)) return false;
  const entityId = cardEl.dataset.cardId;
  const entityType = cardEl.dataset.cardEntity || defaultEntityType;
  if (!entityId) return false;
  openDetailWindow(entityType, entityId);
  return true;
}

function renderCommentPanel(entityType, entityId) {
  const thread = ensureThread(entityType, entityId);
  const profile = getCommentProfile();
  if (!thread.open) return "";

  let commentsHtml = `<p class="comments-empty">${escapeHtml(t("noComments"))}</p>`;
  if (thread.loading && !thread.items.length) {
    commentsHtml = `<p class="comments-empty">${escapeHtml(t("commentsLoading"))}</p>`;
  } else if (thread.items.length) {
    commentsHtml = `
      <div class="comment-list">
        ${thread.items
          .map(
            (comment) => `
          <article class="comment-item">
            <div class="comment-top">
              ${avatarTokenMarkup(comment.authorName || t("unknownMember"), comment.authorAvatarUrl, "avatar-token xs")}
              <div class="comment-meta-block">
                <span class="comment-author">${escapeHtml(comment.authorName || t("unknownMember"))}</span>
                <span class="comment-contact">${escapeHtml(comment.authorContact)}</span>
                ${comment.authorArea ? `<span class="comment-area">${escapeHtml(comment.authorArea)}</span>` : ""}
              </div>
              <span class="comment-time">${shortTimeAgo(comment.createdAt)} ago</span>
              <button
                type="button"
                class="btn ghost-btn"
                data-action="report-comment"
                data-entity="${escapeHtml(entityType)}"
                data-entity-id="${escapeHtml(entityId)}"
                data-comment-id="${escapeHtml(comment.id)}"
              >
                ${escapeHtml(t("reportCommentBtn"))}
              </button>
            </div>
            <p>${escapeHtml(comment.text)}</p>
          </article>
        `,
          )
          .join("")}
      </div>
    `;
  }

  return `
    <div class="comments-panel">
      ${commentsHtml}
      ${
        thread.hasMore
          ? `
          <button
            type="button"
            class="btn ghost-btn"
            data-action="load-more-comments"
            data-entity="${escapeHtml(entityType)}"
            data-entity-id="${escapeHtml(entityId)}"
          >
            ${escapeHtml(t("loadMoreComments"))}
          </button>
        `
          : ""
      }
      <form
        class="comment-form"
        data-action="submit-comment"
        data-entity="${escapeHtml(entityType)}"
        data-entity-id="${escapeHtml(entityId)}"
      >
        <div class="comment-inline">
          <input
            type="text"
            name="authorName"
            required
            maxlength="40"
            placeholder="${escapeHtml(t("commentNamePlaceholder"))}"
            value="${escapeHtml(profile.authorName || "")}"
          />
          <input
            type="text"
            name="authorContact"
            required
            maxlength="70"
            placeholder="${escapeHtml(t("commentContactPlaceholder"))}"
            value="${escapeHtml(profile.authorContact || "")}"
          />
        </div>
        <textarea
          name="text"
          required
          maxlength="500"
          placeholder="${escapeHtml(t("commentTextPlaceholder"))}"
        ></textarea>
        <button type="submit" class="btn secondary-btn">${escapeHtml(t("submitCommentBtn"))}</button>
      </form>
    </div>
  `;
}

function renderCaseCard(caseItem) {
  const key = commentKey("case", caseItem.id);
  const thread = ensureThread("case", caseItem.id);
  const image = caseItem.photoUrl || FALLBACK_IMG;
  const isOpen = caseItem.status === "open";
  const actionLabel = caseItem.caseType === "found" ? t("markResolvedBtn") : t("markReunitedBtn");

  return `
    <article
      class="card case-card ${thread.open ? "comments-open" : ""}"
      data-card-entity="case"
      data-card-id="${escapeHtml(caseItem.id)}"
    >
      <div class="case-card-main">
        <img class="image-preview case-image" src="${escapeHtml(image)}" alt="${escapeHtml(caseItem.petName)}" />
        <div class="case-card-content">
          <div class="card-head">
            <div>
              <h4 class="card-title">${escapeHtml(caseItem.petName)} (${escapeHtml(caseItem.species)})</h4>
              <p class="meta">${escapeHtml(caseItem.locationText)} • ${escapeHtml(caseItem.eventDate || "N/A")}</p>
            </div>
            ${caseStatusChip(caseItem)}
          </div>
          ${renderOwnerMeta(caseItem)}
          <p class="meta case-description">${escapeHtml(caseItem.description)}</p>
          <div class="row case-chip-row">
            <span class="chip">${escapeHtml(caseItem.contact)}</span>
            ${
              caseItem.caseType === "lost" && caseItem.rewardAmount > 0
                ? `<span class="chip">${money(caseItem.rewardAmount)}</span>`
                : ""
            }
            <span class="chip">${escapeHtml(caseItem.urgency)}</span>
            <span class="chip">${shortTimeAgo(caseItem.createdAt)} ago</span>
          </div>
        </div>
      </div>
      <div class="actions case-actions">
        ${
          isOpen
            ? `
              <button type="button" class="btn ghost-btn" data-action="mark-reunited" data-id="${escapeHtml(caseItem.id)}">
                ${escapeHtml(actionLabel)}
              </button>
            `
            : ""
        }
        <button
          type="button"
          class="btn ghost-btn"
          data-action="toggle-comments"
          data-entity="case"
          data-entity-id="${escapeHtml(caseItem.id)}"
        >
          ${escapeHtml(t("commentsBtn"))} (${asNumber(caseItem.commentCount)})
        </button>
      </div>
      <div data-comment-key="${escapeHtml(key)}" class="${thread.open ? "" : "hidden"}">
        ${thread.open ? renderCommentPanel("case", caseItem.id) : ""}
      </div>
    </article>
  `;
}

function renderDonationCard(campaign) {
  const key = commentKey("donation", campaign.id);
  const thread = ensureThread("donation", campaign.id);
  const progress = Math.min(
    100,
    Math.round((asNumber(campaign.raisedAmount) / Math.max(1, asNumber(campaign.goalAmount))) * 100),
  );
  const { statusLabel, statusClass } = donationStatusMeta(campaign);
  const image = campaign.photoUrl || FALLBACK_IMG;

  return `
    <article
      class="card donation-card ${thread.open ? "comments-open" : ""}"
      data-card-entity="donation"
      data-card-id="${escapeHtml(campaign.id)}"
    >
      <img class="image-preview donation-image" src="${escapeHtml(image)}" alt="${escapeHtml(campaign.campaignTitle)}" />
      <div class="card-head">
        <div>
          <h4 class="card-title">${escapeHtml(campaign.campaignTitle)}</h4>
          <p class="meta">${escapeHtml(campaign.beneficiary)}</p>
        </div>
        <span class="chip ${statusClass}">${escapeHtml(statusLabel)}</span>
      </div>
      ${renderOwnerMeta(campaign)}
      <p class="meta donation-description">${escapeHtml(campaign.description)}</p>
      <div class="progress"><span style="width:${progress}%"></span></div>
      <p class="meta"><strong>${money(campaign.raisedAmount)}</strong> / ${money(campaign.goalAmount)} (${progress}%)</p>
      <div class="row">
        <span class="chip">${escapeHtml(campaign.contact)}</span>
        ${
          campaign.facebookVerified
            ? `<a class="chip info" href="${escapeHtml(campaign.facebookPostUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t("fbProofChip"))}</a>`
            : `<span class="chip warn">${escapeHtml(t("donationNeedsFb"))}</span>`
        }
      </div>
      <div class="actions">
        ${
          campaign.status === "active"
            ? `
            <form class="inline-form" data-action="donate-inline" data-id="${escapeHtml(campaign.id)}">
              <label>
                +
                <input name="amount" type="number" min="1" required />
              </label>
              <button type="submit" class="btn primary-btn">${escapeHtml(t("donateBtn"))}</button>
            </form>
          `
            : ""
        }
        <button
          type="button"
          class="btn ghost-btn"
          data-action="toggle-comments"
          data-entity="donation"
          data-entity-id="${escapeHtml(campaign.id)}"
        >
          ${escapeHtml(t("commentsBtn"))} (${asNumber(campaign.commentCount)})
        </button>
      </div>
      <div data-comment-key="${escapeHtml(key)}" class="${thread.open ? "" : "hidden"}">
        ${thread.open ? renderCommentPanel("donation", campaign.id) : ""}
      </div>
    </article>
  `;
}

function renderCases() {
  const query = state.caseSearchQuery.toLowerCase().trim();
  const filtered = state.cases.filter((item) => {
    if (!query) return true;
    return (
      item.petName.toLowerCase().includes(query) ||
      item.species.toLowerCase().includes(query) ||
      item.locationText.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  if (!filtered.length) {
    const message = query 
      ? `No matches for "${query}"`
      : (state.feedFilter === "found"
          ? t("emptyFound")
          : state.feedFilter === "reunited"
            ? t("emptyReunited")
            : t("emptyUrgent"));
    renderEmpty(dom.caseList, message);
  } else {
    dom.caseList.innerHTML = filtered.map(renderCaseCard).join("");
  }
  dom.loadMoreCasesBtn.classList.toggle("hidden", !state.hasMoreCases || !!query);
}

function renderDonations() {
  const query = state.donationSearchQuery.toLowerCase().trim();
  const filtered = state.donations.filter((item) => {
    if (!query) return true;
    return (
      item.campaignTitle.toLowerCase().includes(query) ||
      item.beneficiary.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  if (!filtered.length) {
    renderEmpty(dom.donationList, query ? `No matches for "${query}"` : "No campaigns yet.");
  } else {
    dom.donationList.innerHTML = filtered.map(renderDonationCard).join("");
  }
  dom.loadMoreDonationsBtn.classList.toggle("hidden", !state.hasMoreDonations || !!query);
}

function setClinicStatus(message) {
  dom.clinicStatus.textContent = message;
}

function renderClinics(results) {
  if (!results.length) {
    renderEmpty(dom.clinicResults, t("clinicNoResult"));
    return;
  }
  dom.clinicResults.innerHTML = results
    .map(
      (clinic) => `
      <article class="clinic-card">
        <h4>${escapeHtml(clinic.name)}</h4>
        <p>${escapeHtml(clinic.address)}</p>
        <div class="row">
          <span class="chip">${clinic.distanceKm.toFixed(2)} km</span>
          <a
            class="btn ghost-btn"
            href="https://www.openstreetmap.org/?mlat=${clinic.lat}&mlon=${clinic.lon}#map=16/${clinic.lat}/${clinic.lon}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${escapeHtml(t("clinicMapBtn"))}
          </a>
        </div>
      </article>
    `,
    )
    .join("");
}

async function loadSummary() {
  state.summary = await state.service.getSummary();
  renderSummary();
}

async function loadCases(reset = false) {
  const limit = 8;
  const cursor = reset ? null : state.caseCursor;
  const response = await state.service.listPetCases({
    filter: state.feedFilter,
    limit,
    cursor,
  });
  if (reset) {
    state.cases = response.items;
  } else {
    state.cases = [...state.cases, ...response.items];
  }
  state.caseCursor = response.nextCursor;
  state.hasMoreCases = Boolean(response.nextCursor);
  renderCases();
}

async function loadDonations(reset = false) {
  const limit = 6;
  const cursor = reset ? null : state.donationCursor;
  const response = await state.service.listDonations({ limit, cursor });
  if (reset) {
    state.donations = response.items;
  } else {
    state.donations = [...state.donations, ...response.items];
  }
  state.donationCursor = response.nextCursor;
  state.hasMoreDonations = Boolean(response.nextCursor);
  renderDonations();
}

async function bootstrapMode() {
  renderMode();
  state.service =
    state.dataMode === "firebase" ? await createFirebaseService() : new LocalStorageService();
  await Promise.all([loadCases(true), loadDonations(true), loadSummary()]);
}

async function switchMode() {
  const nextMode = state.dataMode === "local" ? "firebase" : "local";
  try {
    state.dataMode = nextMode;
    localStorage.setItem(STORAGE_KEYS.dataMode, state.dataMode);
    await bootstrapMode();
  } catch (error) {
    console.error(error);
    alert(error.message || "Unable to switch data mode.");
    state.dataMode = "local";
    localStorage.setItem(STORAGE_KEYS.dataMode, "local");
    await bootstrapMode();
  }
}

async function loadCommentsThread(entityType, entityId, reset = false) {
  const thread = ensureThread(entityType, entityId);
  if (thread.loading) return;
  thread.loading = true;
  rerenderList(entityType);
  try {
    const response = await state.service.listComments({
      entityType,
      entityId,
      limit: 10,
      cursor: reset ? null : thread.cursor,
    });
    if (reset) {
      thread.items = response.items;
    } else {
      thread.items = [...thread.items, ...response.items];
    }
    thread.cursor = response.nextCursor;
    thread.hasMore = Boolean(response.nextCursor);
    thread.loaded = true;
  } catch (error) {
    console.error(error);
    alert(error.message || "Unable to load comments right now.");
  } finally {
    thread.loading = false;
    rerenderList(entityType);
  }
}

function rerenderList(entityType) {
  if (entityType === "donation") {
    renderDonations();
    return;
  }
  renderCases();
}

async function toggleComments(entityType, entityId) {
  const thread = ensureThread(entityType, entityId);
  thread.open = !thread.open;
  rerenderList(entityType);
  if (thread.open && !thread.loaded) {
    await loadCommentsThread(entityType, entityId, true);
  }
}

function openEntry() {
  dom.entrySection.classList.remove("hidden-overlay");
  dom.entryBackdrop?.classList.remove("hidden");
  document.body.classList.add("entry-modal-open");
  applyProfileDefaults();
  const focusField =
    state.entryTab === "donation"
      ? dom.donationForm?.elements.namedItem("campaignTitle")
      : dom.petCaseForm?.elements.namedItem("petName");
  requestAnimationFrame(() => {
    updateWizardChrome();
    refreshCharCounters();
    if (
      focusField instanceof HTMLInputElement ||
      focusField instanceof HTMLTextAreaElement ||
      focusField instanceof HTMLSelectElement
    ) {
      focusField.focus({ preventScroll: true });
    }
  });
}

function closeEntry() {
  dom.entrySection.classList.add("hidden-overlay");
  dom.entryBackdrop?.classList.add("hidden");
  document.body.classList.remove("entry-modal-open");
}

function onProfileSubmit(event) {
  event.preventDefault();
  if (!dom.profileForm) return;
  const formData = new FormData(dom.profileForm);
  const profile = normalizeUserProfile({
    ...state.profile,
    displayName: String(formData.get("displayName") || "").trim(),
    contact: String(formData.get("contact") || "").trim(),
    area: String(formData.get("area") || "").trim(),
    avatarUrl: String(formData.get("avatarUrl") || "").trim(),
    bio: String(formData.get("bio") || "").trim(),
    updatedAt: Date.now(),
  });
  state.profile = profile;
  persistUserProfile(profile);
  saveCommentProfile({
    authorName: profile.displayName,
    authorContact: profile.contact,
  });
  renderProfileQuick();
  applyProfileDefaults();
  closeProfileModal();
  alert(t("profileSaved"));
}

async function onPetCaseSubmit(event) {
  event.preventDefault();
  try {
    const formData = new FormData(dom.petCaseForm);
    const caseType = state.composerMode;
    const photoUrl = validateRequiredPhoto("pet");
    await state.service.createPetCase({
      caseType,
      petName: String(formData.get("petName") || "").trim(),
      species: String(formData.get("species") || "").trim(),
      locationText: String(formData.get("locationText") || "").trim(),
      eventDate: String(formData.get("eventDate") || "").trim(),
      contact: String(formData.get("contact") || "").trim(),
      urgency: String(formData.get("urgency") || "Moderate").trim(),
      rewardAmount: caseType === "lost" ? asNumber(formData.get("rewardAmount")) : 0,
      photoUrl,
      description: String(formData.get("description") || "").trim(),
      ...currentAuthorSnapshot(),
      language: state.language,
    });
    dom.petCaseForm.reset();
    resetUploadUi("pet");
    setComposerMode(caseType, false);
    setFeedFilter(caseType === "found" ? "found" : "urgent");
    await Promise.all([loadCases(true), loadSummary()]);
    closeEntry();
    dom.caseList.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  } catch (error) {
    console.error(error);
    alert(error.message || "Unable to post right now.");
    return false;
  }
}

async function onDonationSubmit(event) {
  event.preventDefault();
  if (!validateFacebookField(true)) return;
  try {
    const formData = new FormData(dom.donationForm);
    const photoUrl = validateRequiredPhoto("donation");
    await state.service.createDonation({
      campaignTitle: String(formData.get("campaignTitle") || "").trim(),
      beneficiary: String(formData.get("beneficiary") || "").trim(),
      goalAmount: asNumber(formData.get("goalAmount"), 1),
      urgency: String(formData.get("urgency") || "Moderate"),
      contact: String(formData.get("contact") || "").trim(),
      description: String(formData.get("description") || "").trim(),
      photoUrl,
      facebookPostUrl: String(formData.get("facebookPostUrl") || "").trim(),
      ...currentAuthorSnapshot(),
    });
    dom.donationForm.reset();
    dom.facebookUrlError.textContent = "";
    resetUploadUi("donation");
    await Promise.all([loadDonations(true), loadSummary()]);
    setEntryTab("donation");
    setBoardTab("donations");
    closeEntry();
    dom.boardSection.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error(error);
    alert(error.message || "Unable to create campaign right now.");
  }
}

async function onListClick(event, defaultEntityType) {
  const rawTarget = event.target;
  const clickTarget =
    rawTarget instanceof Element
      ? rawTarget
      : rawTarget instanceof Node
        ? rawTarget.parentElement
        : null;
  if (!clickTarget) return;
  const actionEl = clickTarget.closest("[data-action]");
  if (!actionEl) {
    openCardWindowFromElement(clickTarget, defaultEntityType);
    return;
  }
  const action = actionEl.dataset.action;

  try {
    if (action === "mark-reunited") {
      const id = actionEl.dataset.id;
      if (!id) return;
      await state.service.markPetCaseReunited(id);
      await Promise.all([loadCases(true), loadSummary()]);
      return;
    }

    const entityType = actionEl.dataset.entity || defaultEntityType;
    const entityId = actionEl.dataset.entityId;
    if (!entityId) return;

    if (action === "toggle-comments") {
      await toggleComments(entityType, entityId);
      return;
    }

    if (action === "load-more-comments") {
      await loadCommentsThread(entityType, entityId, false);
      return;
    }

    if (action === "report-comment") {
      const commentId = actionEl.dataset.commentId;
      if (!commentId) return;
      const confirmed = window.confirm(t("reportConfirm"));
      if (!confirmed) return;
      const changed = await state.service.flagComment({ entityType, entityId, commentId });
      if (entityType === "donation") {
        await loadDonations(true);
      } else {
        await loadCases(true);
      }
      await loadCommentsThread(entityType, entityId, true);
      if (!changed) {
        alert("Comment was already reported or is no longer available.");
      }
    }
  } catch (error) {
    console.error(error);
    alert(error.message || "Unable to complete this action right now.");
  }
}

async function onListSubmit(event, defaultEntityType) {
  const target = event.target;
  if (!(target instanceof HTMLFormElement)) return;
  const action = target.dataset.action;
  if (!action) return;
  event.preventDefault();

  if (action === "donate-inline") {
    const donationId = target.dataset.id;
    if (!donationId) return;
    const amountInput = target.elements.namedItem("amount");
    if (!(amountInput instanceof HTMLInputElement)) return;
    const amount = asNumber(amountInput.value);
    if (amount <= 0) return;
    await state.service.addDonationAmount(donationId, amount);
    await Promise.all([loadDonations(true), loadSummary()]);
    return;
  }

  if (action === "submit-comment") {
    const entityType = target.dataset.entity || defaultEntityType;
    const entityId = target.dataset.entityId;
    if (!entityId) return;
    const formData = new FormData(target);
    const authorName = String(formData.get("authorName") || "").trim();
    const authorContact = String(formData.get("authorContact") || "").trim();
    const text = String(formData.get("text") || "").trim();
    if (!authorName || !authorContact || !text) return;
    saveCommentProfile({ authorName, authorContact });
    await state.service.addComment({
      entityType,
      entityId,
      payload: {
        authorId: state.profile.id,
        authorName,
        authorContact,
        authorAvatarUrl: state.profile.avatarUrl,
        authorArea: state.profile.area,
        text,
        language: state.language,
      },
    });
    if (entityType === "donation") {
      await loadDonations(true);
    } else {
      await loadCases(true);
    }
    const thread = ensureThread(entityType, entityId);
    thread.open = true;
    thread.loaded = false;
    thread.cursor = null;
    await loadCommentsThread(entityType, entityId, true);
  }
}

function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const earth = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return earth * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

async function geocodePlace(queryText) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(queryText)}&limit=1`;
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error("Unable to search this area.");
  const rows = await response.json();
  if (!rows.length) throw new Error(t("clinicNoResult"));
  return {
    lat: asNumber(rows[0].lat),
    lon: asNumber(rows[0].lon),
    label: rows[0].display_name,
  };
}

async function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported."));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          label: "Current location",
        });
      },
      () => reject(new Error("Could not access location.")),
      { enableHighAccuracy: true, timeout: 12000 },
    );
  });
}

async function fetchNearbyCare({ lat, lon, radius }) {
  const queryText = `
[out:json][timeout:25];
(
  node["amenity"~"veterinary|hospital"](around:${radius},${lat},${lon});
  node["healthcare"="veterinary"](around:${radius},${lat},${lon});
  way["amenity"~"veterinary|hospital"](around:${radius},${lat},${lon});
  relation["amenity"~"veterinary|hospital"](around:${radius},${lat},${lon});
);
out center;`;
  const response = await fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    body: queryText,
  });
  if (!response.ok) throw new Error("Clinic lookup failed.");
  const data = await response.json();
  return (data.elements || [])
    .map((item) => {
      const itemLat = asNumber(item.lat || item.center?.lat);
      const itemLon = asNumber(item.lon || item.center?.lon);
      return {
        id: `${item.type}-${item.id}`,
        name: item.tags?.name || "Unnamed Pet Care Center",
        address:
          item.tags?.["addr:full"] ||
          [item.tags?.["addr:street"], item.tags?.["addr:city"]].filter(Boolean).join(", ") ||
          "Address not listed",
        lat: itemLat,
        lon: itemLon,
        distanceKm: haversineDistanceKm(lat, lon, itemLat, itemLon),
      };
    })
    .filter((item) => Number.isFinite(item.distanceKm))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 3);
}

async function runClinicSearch({ placeQuery, radius }) {
  setClinicStatus(t("clinicSearching"));
  try {
    let location = state.selectedLocation;
    if (placeQuery) {
      location = await geocodePlace(placeQuery);
      state.selectedLocation = location;
    }
    if (!location) {
      throw new Error(t("clinicUseLocationFirst"));
    }
    const results = await fetchNearbyCare({
      lat: location.lat,
      lon: location.lon,
      radius: asNumber(radius, 5000),
    });
    setClinicStatus(`${results.length} results near ${location.label}`);
    renderClinics(results);
  } catch (error) {
    console.error(error);
    setClinicStatus(error.message || t("clinicNoResult"));
    renderEmpty(dom.clinicResults, t("clinicNoResult"));
  }
}

async function onClinicSubmit(event) {
  event.preventDefault();
  const formData = new FormData(dom.clinicSearchForm);
  await runClinicSearch({
    placeQuery: String(formData.get("placeQuery") || "").trim(),
    radius: asNumber(formData.get("radius"), 5000),
  });
}

async function onUseLocation() {
  try {
    setClinicStatus("Getting location...");
    state.selectedLocation = await getCurrentPosition();
    await runClinicSearch({
      placeQuery: "",
      radius: asNumber(dom.radiusSelect.value, 5000),
    });
  } catch (error) {
    console.error(error);
    setClinicStatus(error.message || "Location failed.");
  }
}

async function onAutoLocation() {
  const locationField = dom.petCaseForm.elements.namedItem("locationText");
  if (!(locationField instanceof HTMLInputElement)) return;
  const autoBtn = dom.autoLocationBtn;
  const originalLabel = autoBtn ? autoBtn.textContent : "";
  if (autoBtn) {
    autoBtn.disabled = true;
    autoBtn.textContent = "…";
  }
  try {
    const position = await getCurrentPosition();
    let label = `${position.lat.toFixed(5)}, ${position.lon.toFixed(5)}`;
    const reverseUrl =
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.lat}&lon=${position.lon}`;
    const response = await fetch(reverseUrl, { headers: { Accept: "application/json" } });
    if (response.ok) {
      const payload = await response.json();
      if (payload && typeof payload.display_name === "string" && payload.display_name.trim()) {
        label = payload.display_name.trim();
      }
    }
    locationField.value = label;
    state.selectedLocation = { lat: position.lat, lon: position.lon, label };
  } catch (error) {
    console.error(error);
    alert(error.message || "Unable to auto-fill your location.");
  } finally {
    if (autoBtn) {
      autoBtn.disabled = false;
      autoBtn.textContent = originalLabel || "📍";
    }
  }
}

function scrollToComposer(mode) {
  setEntryTab("pet");
  setComposerMode(mode);
  const hash = mode === "found" ? "#report-found" : "#report-lost";
  if (window.location.hash !== hash) {
    history.replaceState(null, "", hash);
  }
  openEntry();
}

function scrollToDonationEntry() {
  setEntryTab("donation");
  if (window.location.hash !== "#start-donation") {
    history.replaceState(null, "", "#start-donation");
  }
  openEntry();
}

function handleInitialHash() {
  if (window.location.hash === "#report-found") {
    setEntryTab("pet");
    setComposerMode("found");
    openEntry();
  } else if (window.location.hash === "#report-lost") {
    setEntryTab("pet");
    setComposerMode("lost");
    openEntry();
  } else if (window.location.hash === "#start-donation") {
    setEntryTab("donation");
    openEntry();
  } else if (window.location.hash === "#donations") {
    setBoardTab("donations");
    setEntryTab("donation");
    dom.boardSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function attachEvents() {
  dom.switchModeBtn.addEventListener("click", switchMode);
  dom.languageToggle.addEventListener("change", () => {
    state.language = dom.languageToggle.value === "bn" ? "bn" : "en";
    localStorage.setItem(STORAGE_KEYS.language, state.language);
    applyTranslations();
    renderCases();
    renderDonations();
    setClinicStatus(t("clinicNoSearch"));
  });

  dom.autoLocationBtn?.addEventListener("click", onAutoLocation);
  dom.nextStepBtns.forEach((button) => button.addEventListener("click", () => wizard.next()));
  dom.prevStepBtns.forEach((button) => button.addEventListener("click", () => wizard.prev()));
  dom.wizardJumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const raw = Number(button.dataset.stepJump || "1");
      const index = Number.isFinite(raw) ? raw - 1 : 0;
      wizard.jumpTo(index);
    });
  });

  dom.petDescriptionInput?.addEventListener("input", refreshCharCounters);
  dom.donationDescriptionInput?.addEventListener("input", refreshCharCounters);
  dom.petPhotoFileInput?.addEventListener("change", () => onImageFileChange("pet"));
  dom.donationPhotoFileInput?.addEventListener("change", () => onImageFileChange("donation"));
  dom.petPhotoUrlInput?.addEventListener("input", () => onImageUrlInput("pet"));
  dom.donationPhotoUrlInput?.addEventListener("input", () => onImageUrlInput("donation"));

  dom.closeEntryBtn?.addEventListener("click", closeEntry);
  dom.entryBackdrop?.addEventListener("click", closeEntry);
  dom.closeDetailBtn?.addEventListener("click", closeDetailWindow);
  dom.detailBackdrop?.addEventListener("click", closeDetailWindow);
  dom.openProfileBtn?.addEventListener("click", openProfileModal);
  dom.closeProfileBtn?.addEventListener("click", closeProfileModal);
  dom.profileBackdrop?.addEventListener("click", closeProfileModal);
  dom.profileForm?.addEventListener("submit", onProfileSubmit);
  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (dom.detailModal && !dom.detailModal.classList.contains("hidden")) {
      closeDetailWindow();
      return;
    }
    if (dom.profileModal && !dom.profileModal.classList.contains("hidden")) {
      closeProfileModal();
      return;
    }
    if (!dom.entrySection.classList.contains("hidden-overlay")) {
      closeEntry();
    }
  });

  dom.caseSearchInput?.addEventListener("input", (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    state.caseSearchQuery = e.target.value;
    renderCases();
  });

  dom.donationSearchInput?.addEventListener("input", (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    state.donationSearchQuery = e.target.value;
    renderDonations();
  });

  dom.heroLostBtn.addEventListener("click", () => {
    wizard.reset();
    scrollToComposer("lost");
  });
  dom.heroFoundBtn.addEventListener("click", () => {
    wizard.reset();
    scrollToComposer("found");
  });
  dom.heroDonateBtn.addEventListener("click", scrollToDonationEntry);

  dom.entryPetTabBtn.addEventListener("click", () => setEntryTab("pet"));
  dom.entryDonationTabBtn.addEventListener("click", () => setEntryTab("donation"));

  dom.boardAlertsTabBtn.addEventListener("click", () => {
    setBoardTab("alerts");
  });
  dom.boardDonationsTabBtn.addEventListener("click", () => {
    setBoardTab("donations");
  });

  dom.composerLostBtn.addEventListener("click", () => {
    setEntryTab("pet");
    setComposerMode("lost");
  });
  dom.composerFoundBtn.addEventListener("click", () => {
    setEntryTab("pet");
    setComposerMode("found");
  });

  dom.petCaseForm.addEventListener("submit", async (e) => {
    const created = await onPetCaseSubmit(e);
    if (created) {
      wizard.reset();
    }
  });

  dom.filterButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const nextFilter = button.dataset.filter || "urgent";
      setFeedFilter(nextFilter);
      await loadCases(true);
    });
  });

  dom.refreshCasesBtn.addEventListener("click", async () => {
    await Promise.all([loadCases(true), loadSummary()]);
  });
  dom.loadMoreCasesBtn.addEventListener("click", () => loadCases(false));
  dom.caseList.addEventListener("click", (event) => onListClick(event, "case"));
  dom.caseList.addEventListener("submit", (event) => onListSubmit(event, "case"));

  dom.facebookPostUrlInput.addEventListener("input", () => validateFacebookField(false));
  dom.donationForm.addEventListener("submit", onDonationSubmit);
  dom.refreshDonationsBtn.addEventListener("click", async () => {
    await Promise.all([loadDonations(true), loadSummary()]);
  });
  dom.loadMoreDonationsBtn.addEventListener("click", () => loadDonations(false));
  dom.donationList.addEventListener("click", (event) => onListClick(event, "donation"));
  dom.donationList.addEventListener("submit", (event) => onListSubmit(event, "donation"));

  dom.clinicSearchForm.addEventListener("submit", onClinicSubmit);
  dom.useLocationBtn.addEventListener("click", onUseLocation);
  window.addEventListener("hashchange", handleInitialHash);
}

async function init() {
  persistUserProfile(state.profile);
  const rawCommentProfile = parseJson(localStorage.getItem(STORAGE_KEYS.commentProfile) || "{}", {});
  const authorName = String(rawCommentProfile.authorName || "").trim();
  const authorContact = String(rawCommentProfile.authorContact || "").trim();
  if (!authorName || !authorContact) {
    saveCommentProfile({
      authorName: authorName || state.profile.displayName,
      authorContact: authorContact || state.profile.contact,
    });
  }
  dom.languageToggle.value = state.language;
  setBoardTab(state.boardTab, false);
  setComposerMode(state.composerMode, false);
  setFeedFilter(state.feedFilter, false);
  applyTranslations();
  resetUploadUi("pet");
  resetUploadUi("donation");
  applyProfileDefaults();
  setClinicStatus(t("clinicNoSearch"));
  attachEvents();
  try {
    await bootstrapMode();
  } catch (error) {
    console.error(error);
    alert("Falling back to Local DB because Firebase setup is unavailable.");
    state.dataMode = "local";
    localStorage.setItem(STORAGE_KEYS.dataMode, "local");
    await bootstrapMode();
  }
  handleInitialHash();
}

init();
