// ────────────────────────────────────────────────────────────
//  Content for the /invitation page (Nepali first, English second).
//  Event dates, times, venues and map links come from wedding.ts.
//  Any list left empty is simply not shown on the page.
// ────────────────────────────────────────────────────────────

export const invitation = {
  groom: "सरोज",
  bride: "रेखा",
  groomFull: "सरोज राउत",
  brideFull: "रेखा बुढाथोकी",
  groomParents: "श्री कुमार राउत तथा श्रीमती गीता राउत",
  brideParents: "श्री मान बहादुर बुढाथोकी तथा श्रीमती गंगा माया निरौला",
  groomParentsEn: "Kumar & Gita Raut",
  brideParentsEn: "Man Bahadur Budhathoki & Ganga Maya Niraula",
  date: "२०८३ मंसिर १७ गते, बिहीबार",
  dateEn: "Thursday, 3 December 2026",

  // Shown on the closed envelope when the link has no ?to=Name
  defaultGuest: "आदरणीय महानुभाव",

  blessing: ["सात जुनीको साथ रहोस्, माया रहोस् अटल", "सरोज–रेखाको जीवन होस् सधैँ मङ्गलमय, सफल ।"],

  // Families. Leave arrays empty to hide a block.
  hostFamily: "समस्त राउत परिवार",
  hostFamilyEn: "the Raut family",
  hostAddress: "", // e.g. "इटहरी-६, सुनसरी"
  hosts: [
    { role: "बुबा", name: "कुमार राउत" },
    { role: "आमा", name: "गीता राउत" },
  ],
  // दर्शनाभिलाषी — relatives who look forward to seeing you, e.g. { role: "काका/काकी", names: ["… + …"] }
  wellWishers: [] as { role: string; names: string[] }[],
  // Phone numbers for questions, e.g. "९८XXXXXXXX"
  contacts: [] as string[],
};

export const eventNames = [
  { ne: "शुभ विवाह", en: "Wedding ceremony", venue: "टर्फ ब्याङ्क्वेट (पार्टी प्यालेस)", address: "इटहरी, सुनसरी", date: "२०८३ मंसिर १७ गते, बिहीबार" },
  { ne: "प्रीतिभोज", en: "Wedding reception", venue: "दुर्गा पार्टी प्यालेस एण्ड ब्याङ्क्वेट", address: "इटहरी, सुनसरी", date: "२०८३ मंसिर १८ गते, शुक्रबार" },
];
