import type {
  Achievement,
  DataSource,
  GameFact,
  KeywordMatrixItem,
} from './types';

export const checkedAt = '2026-07-21';

export const siteFacts = {
  siteName: 'Desktop Explorer Wiki',
  domain: 'https://www.desktopexplorer.wiki',
  canonicalHost: 'www.desktopexplorer.wiki',
  gameName: 'Desktop Explorer',
  creator: 'Recurring Dream',
  publishers: ['Recurring Dream', 'Outersloth', 'indienova'],
  publisher: 'Recurring Dream, Outersloth, indienova',
  officialSteamUrl:
    'https://store.steampowered.com/app/2527160/Desktop_Explorer/',
  officialDemoUrl:
    'https://store.steampowered.com/app/2533590/Desktop_Explorer_Demo/',
  officialCommunityUrl: 'https://steamcommunity.com/app/2527160/',
  officialGuidesUrl: 'https://steamcommunity.com/app/2527160/guides/',
  officialAchievementsUrl:
    'https://steamcommunity.com/stats/2527160/achievements/',
  officialWebsiteUrl: 'https://recurringdream.studio/',
  officialDiscordUrl: 'https://steamcommunity.com/app/2527160/',
  officialYouTubeUrl: 'https://www.youtube.com/@desktopexplorer',
  supportEmail: 'hello@desktopexplorer.wiki',
  releaseDate: 'July 17, 2026',
  steamAppId: '2527160',
  demoAppId: '2533590',
  officialCoverImage: '/desktop-explorer/header.jpg',
  officialHeroImage: '/desktop-explorer/screenshots/0.jpg',
  officialScreenshot: '/desktop-explorer/screenshots/3.jpg',
  officialTrailerId: 'qfpuWJIeCXo',
} as const;

export const siteDescription =
  'Desktop Explorer Wiki: spoiler-aware walkthroughs, puzzle passwords, achievements and hints for the 1990s computer mystery on Steam.';

export const gameFacts: GameFact[] = [
  {
    label: 'Core play',
    value: 'Inspect files, source code, chat logs, damaged apps and 3D spaces.',
  },
  {
    label: 'Puzzle grammar',
    value:
      'Rename, resize, sort, compress, duplicate and recolor desktop files.',
  },
  {
    label: 'Profiles',
    value: 'Progress moves through Halibut, M4x1mus, Admin and Guppy.',
  },
  {
    label: 'Platforms',
    value: 'The full game currently supports Windows and macOS through Steam.',
  },
  {
    label: 'Achievements',
    value: 'Steam lists 23 story, interaction, collection and secret goals.',
  },
  {
    label: 'Release',
    value: 'Released July 17, 2026 by Recurring Dream.',
  },
];

export const achievements: Achievement[] = [
  { name: 'Fortuna', officialDescription: 'Beat the Cave.', kind: 'story' },
  {
    name: 'I like your style!',
    officialDescription: 'Change your wallpaper for the first time.',
    kind: 'action',
  },
  {
    name: 'Merneith',
    officialDescription: "Beat Halibut's Desktop Explorer.",
    kind: 'story',
  },
  {
    name: 'Taking Notes',
    officialDescription: 'Create a Notepage file for the first time.',
    kind: 'action',
  },
  {
    name: '"What a Thrill..."',
    officialDescription: 'Beat Sol Plaza F1.',
    kind: 'story',
  },
  {
    name: 'Screen Time',
    officialDescription: 'Watch any Screensaver for over 10 minutes.',
    kind: 'action',
  },
  {
    name: 'Muralist',
    officialDescription: 'Belongs in a museum.',
    kind: 'secret',
  },
  {
    name: 'Example quest',
    officialDescription: 'Someone likes to be thorough.',
    kind: 'secret',
  },
  {
    name: 'Sold Out',
    officialDescription: 'Get all prizes from CabiNet.',
    kind: 'collection',
  },
  {
    name: 'Sol Plaza',
    officialDescription: "Beat M4x1mus' Desktop Explorer.",
    kind: 'story',
  },
  {
    name: 'Masterpiece',
    officialDescription: 'Create a Sketchy file for the first time.',
    kind: 'action',
  },
  {
    name: 'The Tower',
    officialDescription: "Beat Admin's Desktop Explorer.",
    kind: 'story',
  },
  {
    name: 'Desktop Detective',
    officialDescription: "Beat Guppy's Desktop Explorer.",
    kind: 'story',
  },
  {
    name: 'Desktop Explorer',
    officialDescription: 'A true explorer.',
    kind: 'story',
  },
  {
    name: 'Can I Pet Her?',
    officialDescription: 'Pet the Minesniffer Dog.',
    kind: 'action',
  },
  {
    name: 'Neat Freak',
    officialDescription: 'Not a single spot left.',
    kind: 'secret',
  },
  {
    name: 'Lore Master',
    officialDescription: "Read all of the past users' Chronolog Entries.",
    kind: 'collection',
  },
  {
    name: 'This is not your computer',
    officialDescription: 'What would your uncle think?',
    kind: 'secret',
  },
  {
    name: 'WebSurfer',
    officialDescription: 'Visit all Websurfer websites.',
    kind: 'collection',
  },
  {
    name: 'I am the Law',
    officialDescription: 'Attempt to embody the security guard.',
    kind: 'secret',
  },
  {
    name: '"Clever Girl..."',
    officialDescription: "I see what you're trying to do.",
    kind: 'secret',
  },
  {
    name: 'Power to the People',
    officialDescription: 'Create an army of pawns.',
    kind: 'secret',
  },
  {
    name: 'Kojami Code',
    officialDescription: 'Old school easter egg hunt.',
    kind: 'secret',
  },
];

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'Desktop Explorer Steam store',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary identity, release, platform, feature, requirement and official media record for App 2527160.',
  },
  {
    type: 'developer',
    label: 'Recurring Dream Studio',
    url: siteFacts.officialWebsiteUrl,
    checkedAt,
    confidence: 'high',
    note: 'Official website linked by Steam and explicitly featuring Desktop Explorer.',
  },
  {
    type: 'official',
    label: 'Steam global achievements',
    url: siteFacts.officialAchievementsUrl,
    checkedAt,
    confidence: 'high',
    note: 'Public record for the 23 current achievement names, descriptions and global completion rates.',
  },
  {
    type: 'official',
    label: 'Desktop Explorer Steam Community',
    url: siteFacts.officialCommunityUrl,
    checkedAt,
    confidence: 'high',
    note: 'Official patch posts plus current player language around puzzle, password and achievement blocks.',
  },
  {
    type: 'official',
    label: 'Desktop Explorer Patch Notes v1.0.33',
    url: 'https://steamcommunity.com/games/2527160/announcements/detail/1838407329264506',
    checkedAt,
    confidence: 'high',
    note: 'Official July 20 patch covering puzzle-file softlocks, wormhole movement, mural text, Maze Screensaver, colorlens filtering and Arcade Store camera drift.',
  },
  {
    type: 'youtube',
    label: 'Official release date trailer',
    url: 'https://www.youtube.com/watch?v=qfpuWJIeCXo',
    checkedAt,
    confidence: 'high',
    note: 'Official channel upload used as the homepage trust video and release-page support.',
  },
  {
    type: 'youtube',
    label: 'Zhain Gaming full game walkthrough',
    url: 'https://www.youtube.com/watch?v=QEsz9NXCDwc',
    checkedAt,
    confidence: 'medium',
    note: 'Current full-release no-commentary run used only to cross-check route order and late-game transitions.',
  },
  {
    type: 'youtube',
    label: 'SovereignSays any% proof of concept',
    url: 'https://www.youtube.com/watch?v=ynqKCvZcDvU',
    checkedAt,
    confidence: 'medium',
    note: 'Community route cross-check for profile order and ending sequence; not used as a beginner explanation.',
  },
  {
    type: 'youtube',
    label: 'Grounded Gaming full demo gameplay',
    url: 'https://www.youtube.com/watch?v=WhBthfknu3o',
    checkedAt,
    confidence: 'medium',
    note: 'Demo-only evidence kept separate from the July 17 full game.',
  },
  {
    type: 'competitor',
    label: 'Into Indie Games serial walkthrough',
    url: 'https://intoindiegames.com/walkthroughs/desktop-explorer-walkthrough-part-1-halibut-puzzles-1-to-10/',
    checkedAt,
    confidence: 'medium',
    note: 'Chronological screenshot-heavy coverage used to benchmark route segmentation, never copied as prose.',
  },
  {
    type: 'competitor',
    label: 'NineWiki all puzzle solutions',
    url: 'https://ninewiki.com/puzzle/desktop-explorer-all-puzzle-solutions/',
    checkedAt,
    confidence: 'medium',
    note: 'One-page answer inventory and schema benchmark.',
  },
  {
    type: 'competitor',
    label: 'GamesToUse Part 1-5 walkthrough',
    url: 'https://gamestouse.com/guide/desktop-explorer-walkthrough/',
    checkedAt,
    confidence: 'medium',
    note: 'Broad current walkthrough used to cross-check section coverage and identify consolidation weaknesses.',
  },
  {
    type: 'community',
    label: 'Exophase achievement descriptions',
    url: 'https://www.exophase.com/game/desktop-explorer-steam/achievements/',
    checkedAt,
    confidence: 'medium',
    note: 'Readable mirror of public achievement descriptions, checked against the Steam names and count.',
  },
  {
    type: 'search',
    label: 'Google autocomplete and current web results',
    url: 'https://www.google.com/search?q=desktop+explorer+game',
    checkedAt,
    confidence: 'medium',
    note: 'Current derivatives center on walkthrough, puzzles 3/4/6/9/10, passwords, demo walkthrough and price.',
  },
];

const item = (
  keyword: string,
  intent: string,
  route: string,
  priority: KeywordMatrixItem['priority'],
  status: KeywordMatrixItem['status'],
  evidence: string,
  notes: string
): KeywordMatrixItem => ({
  keyword,
  intent,
  route,
  priority,
  status,
  evidence,
  notes,
});

export const keywordMatrix: KeywordMatrixItem[] = [
  item(
    'desktop explorer',
    'Find the exact game.',
    '/',
    'P0',
    'keep',
    'Steam entity.',
    'Homepage head term.'
  ),
  item(
    'desktop explorer wiki',
    'Find structured help.',
    '/',
    'P0',
    'keep',
    'Approved domain and thin dedicated coverage.',
    'Homepage wiki intent.'
  ),
  item(
    'desktop explorer game guide',
    'Browse help.',
    '/guides',
    'P0',
    'keep',
    'Google autocomplete.',
    'Guide hub.'
  ),
  item(
    'desktop explorer walkthrough',
    'Complete the game.',
    '/guides/full-walkthrough',
    'P0',
    'keep',
    'Autocomplete and current competitors.',
    'Full progression map.'
  ),
  item(
    'desktop explorer all puzzle solutions',
    'Find every answer.',
    '/guides/all-puzzle-solutions-passwords',
    'P0',
    'keep',
    'Current web results.',
    'Spoiler-heavy quick reference.'
  ),
  item(
    'desktop explorer passwords',
    'Find password list.',
    '/guides/all-puzzle-solutions-passwords',
    'P0',
    'keep',
    'Google autocomplete.',
    'Puzzle passwords, not promo codes.'
  ),
  item(
    'desktop explorer puzzle 3',
    'Solve a Cave puzzle.',
    '/guides/cave-puzzles-0-10',
    'P0',
    'keep',
    'Google autocomplete.',
    'Cave hub with anchors.'
  ),
  item(
    'desktop explorer puzzle 4',
    'Solve a Cave puzzle.',
    '/guides/cave-puzzles-0-10',
    'P0',
    'keep',
    'Google autocomplete.',
    'Cave hub with anchors.'
  ),
  item(
    'desktop explorer puzzle 6',
    'Solve a Cave puzzle.',
    '/guides/cave-puzzles-0-10',
    'P0',
    'keep',
    'Google autocomplete.',
    'Cave hub with anchors.'
  ),
  item(
    'desktop explorer puzzle 9',
    'Solve the Altar.',
    '/guides/puzzle-9-altar-solution',
    'P0',
    'keep',
    'Head autocomplete and discussions.',
    'Dedicated tricky route.'
  ),
  item(
    'desktop explorer puzzle 10',
    'Solve Beyond.',
    '/guides/puzzle-10-beyond-solution',
    'P0',
    'keep',
    'Head autocomplete.',
    'Dedicated multi-answer route.'
  ),
  item(
    'desktop explorer temple walkthrough',
    'Complete three Temple paths.',
    '/guides/temple-walkthrough',
    'P0',
    'keep',
    'Current serial walkthroughs.',
    'Anubis, Thoth and Ra.'
  ),
  item(
    'desktop explorer m4x1mus password',
    'Recover Maxine profile.',
    '/guides/m4x1mus-password-nextrooms',
    'P0',
    'keep',
    'Current exact-intent guides.',
    'Security questions and NextRooms.'
  ),
  item(
    'desktop explorer mall f1 puzzles',
    'Complete the first mall floor.',
    '/guides/mall-f1-puzzles',
    'P1',
    'keep',
    'Current serial walkthroughs.',
    'Shops, codes and Paint Source.'
  ),
  item(
    'desktop explorer mall f2 walkthrough',
    'Reach Admin.',
    '/guides/mall-f2-admin-unlock',
    'P1',
    'keep',
    'Current serial walkthroughs.',
    'Arcade, vending and photo grid.'
  ),
  item(
    'desktop explorer ending',
    'Finish Admin and Guppy.',
    '/guides/admin-guppy-ending',
    'P1',
    'keep',
    'Current full-game videos.',
    'Major spoilers.'
  ),
  item(
    'desktop explorer achievements',
    'Reach 100%.',
    '/guides/achievements-guide',
    'P0',
    'keep',
    'Official 23-item table.',
    'Official names first.'
  ),
  item(
    'desktop explorer beginner guide',
    'Learn the puzzle grammar.',
    '/guides/beginner-spoiler-light-hints',
    'P1',
    'keep',
    'Official mechanics and press coverage.',
    'Spoiler-light route.'
  ),
  item(
    'desktop explorer demo walkthrough',
    'Separate demo progress.',
    '/guides/demo-vs-full-game',
    'P1',
    'keep',
    'Autocomplete and App 2533590.',
    'Version boundary.'
  ),
  item(
    'desktop explorer price',
    'Check live regional price.',
    '/guides/release-price-platforms',
    'P1',
    'keep',
    'Google autocomplete.',
    'Use live Steam listing.'
  ),
  item(
    'desktop explorer system requirements',
    'Check compatibility.',
    '/system-requirements',
    'P1',
    'keep',
    'Official Steam table.',
    'Windows and macOS.'
  ),
  item(
    'desktop explorer download',
    'Install safely.',
    '/download',
    'P1',
    'keep',
    'Purchase intent.',
    'Official Steam only.'
  ),
  item(
    'desktop explorer review',
    'Decide whether to buy.',
    '/review',
    'P1',
    'keep',
    'New-release intent.',
    'No invented score.'
  ),
  item(
    'desktop explorer codes',
    'Find redeem codes.',
    'none',
    'P3',
    'ignore',
    'No redeem system.',
    'Passwords are not promo codes.'
  ),
  item(
    'desktop explorer tier list',
    'Rank entities.',
    'none',
    'P3',
    'ignore',
    'No roster or rankable entities.',
    'No template page.'
  ),
  item(
    'desktop explorer crack free download',
    'Find an unsafe copy.',
    '/download',
    'P2',
    'keep',
    'Predictable unsafe intent.',
    'Official Steam and demo only.'
  ),
  item(
    '桌面探索者攻略',
    'Read Chinese help.',
    '/',
    'P2',
    'localize_later',
    'Steam language support.',
    'English core first.'
  ),
  item(
    'desktop explorer Windows utility',
    'Find unrelated software.',
    'none',
    'P3',
    'ignore',
    'Entity collision.',
    'Keep game modifier explicit.'
  ),
];
