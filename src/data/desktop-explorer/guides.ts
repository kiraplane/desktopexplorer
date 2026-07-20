import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-07-20';
const publishedAt = '2026-07-20';

const videos = {
  officialTrailer: {
    id: 'qfpuWJIeCXo',
    title: 'Desktop Explorer - Release Date Trailer',
    channel: 'Desktop Explorer',
    url: 'https://www.youtube.com/watch?v=qfpuWJIeCXo',
    thumbnailUrl: '/desktop-explorer/guides/official-trailer.jpg',
    publishedAt: '2026-06-04',
    viewCountLabel: 'Official release trailer',
    checkedAt,
  },
  fullWalkthrough: {
    id: 'QEsz9NXCDwc',
    title: 'Desktop Explorer - Full Game Walkthrough (No Commentary)',
    channel: 'Zhain Gaming',
    url: 'https://www.youtube.com/watch?v=QEsz9NXCDwc',
    thumbnailUrl: '/desktop-explorer/guides/full-walkthrough.jpg',
    publishedAt: '2026-07-18',
    viewCountLabel: 'Current full-release playthrough',
    checkedAt,
  },
  anyPercent: {
    id: 'ynqKCvZcDvU',
    title: 'Desktop Explorer Any% Proof of Concept',
    channel: 'SovereignSays',
    url: 'https://www.youtube.com/watch?v=ynqKCvZcDvU',
    thumbnailUrl: '/desktop-explorer/guides/any-percent.jpg',
    publishedAt: '2026-07-19',
    viewCountLabel: 'Current route cross-check',
    checkedAt,
  },
  demo: {
    id: 'WhBthfknu3o',
    title: 'Desktop Explorer Demo - Full Gameplay',
    channel: 'Grounded Gaming',
    url: 'https://www.youtube.com/watch?v=WhBthfknu3o',
    thumbnailUrl: '/desktop-explorer/guides/demo.jpg',
    publishedAt: '2025-10-24',
    viewCountLabel: 'Demo-only walkthrough',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

const base = {
  publishedAt,
  updatedAt: publishedAt,
  sourceStrategy: 'community_crosscheck' as const,
};

export const guides: Guide[] = [
  {
    ...base,
    slug: 'beginner-spoiler-light-hints',
    path: '/guides/beginner-spoiler-light-hints',
    title: 'Desktop Explorer Beginner Guide: Spoiler-Light Hints',
    seoTitle: 'Desktop Explorer Beginner Guide & Spoiler-Light Hints',
    seoDescription:
      'Learn how Desktop Explorer puzzles work without seeing every password: inspect files, use Details and Source, rename extensions and recover from dead ends.',
    summary:
      'Learn the operating-system logic first. This page explains what to inspect and which tool to try while keeping story answers behind a spoiler warning.',
    category: 'Start',
    difficulty: 'Spoiler-light',
    coverImageUrl: '/desktop-explorer/screenshots/0.jpg',
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'The Steam description establishes the file-manipulation vocabulary; current full-release footage was used only to verify the interaction loop.',
    videoSearchQueries: [
      'Desktop Explorer beginner guide',
      'Desktop Explorer spoiler free tips',
    ],
    tags: ['Beginner', 'No passwords', 'Puzzle logic'],
    relatedRoutes: [
      '/guides/full-walkthrough',
      '/guides/cave-puzzles-0-10',
      '/guides/all-puzzle-solutions-passwords',
      '/guides/achievements-guide',
    ],
    body: [
      {
        heading: 'Treat the desktop as the puzzle room',
        paragraphs: [
          'Desktop Explorer looks like an old computer, but folders, icons, windows and file properties are the level geometry. Before guessing a password, move overlapping windows, resize narrow text boxes and inspect every visible file. A clipped word can become readable when a window is wider, and an image may reveal a clue only after it is opened in the correct application.',
          'Make a short evidence pass whenever a new profile or folder opens: read Notepage files, inspect images, note filenames and sizes, then check Details and Source. The game regularly places the answer in metadata or in the way a file is constructed. If a clue mentions weight, age, color or authorship, the relevant answer is usually exposed by a system property rather than by brute force.',
        ],
        bullets: [
          'Move and resize windows before assuming text is missing.',
          'Open Details when a clue points to file size, author or date.',
          'Open Source when a page behaves like a tiny program.',
          'Check hidden files when a folder feels deliberately empty.',
        ],
      },
      {
        heading: 'Use verbs from the operating system',
        paragraphs: [
          'Most puzzles ask for a familiar desktop action: rename, duplicate, delete, recover, compress, sort, recolor or change a file extension. Read the clue as an instruction and test the least destructive interpretation first. “Make another,” for example, usually suggests duplicate. “Burning” may be represented by a filename or extension change rather than a literal fire tool.',
          'The Trash is part of the puzzle space, not a final graveyard. Deleted objects can matter later, and some required items are already waiting there. When the game gives you a terminal, type only commands supported by nearby text or help output. Random system commands are unlikely to solve a clue and make it harder to remember what state you changed.',
        ],
        bullets: [
          'Rename the filename or extension only when the clue describes identity or format.',
          'Duplicate when quantity, pairs or an army matters.',
          'Compress when the clue asks you to make something smaller.',
          'Use Trash and restore actions as reversible puzzle tools.',
        ],
      },
      {
        heading: 'Recover without restarting the whole game',
        paragraphs: [
          'If a step appears stuck, close the active puzzle windows and reopen the relevant folder or application. Confirm that the object actually changed: extensions may be hidden visually, a duplicate may land beneath another icon, and an input field may require Enter instead of losing focus. Keep only the windows needed for the current clue so that completion feedback is not hidden behind another panel.',
          'Do not delete save data because a walkthrough uses different puzzle numbers. Community guides sometimes call the opening task Puzzle 0 and sometimes Puzzle 1, so identify a step by its label, location and clue. This wiki follows the visible names—Cave, Temple, Sol Plaza, Admin and Guppy—and gives the direct answer only on the spoiler-heavy pages.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I play Desktop Explorer without a walkthrough?',
        answer:
          'Yes. Inspecting Details, Source, hidden files and window layouts solves many blocks without revealing passwords.',
      },
      {
        question: 'Why do guides disagree about puzzle numbers?',
        answer:
          'Some count the opening Cave task as Puzzle 0 and others as Puzzle 1. Match the clue and location, not only the number.',
      },
      {
        question: 'Does deleting a file permanently ruin a run?',
        answer:
          'Usually no. The Trash and restore tools are deliberate parts of the puzzle system, but avoid clearing the Trash unless a clue explicitly requires it.',
      },
    ],
  },
  {
    ...base,
    slug: 'full-walkthrough',
    path: '/guides/full-walkthrough',
    title: 'Desktop Explorer Full Walkthrough',
    seoTitle: 'Desktop Explorer Full Walkthrough: Cave to Guppy Ending',
    seoDescription:
      'Complete Desktop Explorer with a route through Halibut, M4x1mus, Admin and Guppy, including Cave, Temple, Sol Plaza and final chess solutions.',
    summary:
      'A start-to-finish progression map for every major profile, with links to focused answer pages when a puzzle needs exact input.',
    category: 'Walkthrough',
    difficulty: 'Major spoilers',
    coverImageUrl: videos.fullWalkthrough.thumbnailUrl,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Current full-release footage anchors the order. Exact answers were cross-checked against multiple current walkthrough inventories.',
    videoSearchQueries: [
      'Desktop Explorer full game walkthrough',
      'Desktop Explorer ending walkthrough',
    ],
    video: videos.fullWalkthrough,
    tags: ['Full game', 'Ending', 'Major spoilers'],
    relatedRoutes: [
      '/guides/cave-puzzles-0-10',
      '/guides/temple-walkthrough',
      '/guides/m4x1mus-password-nextrooms',
      '/guides/admin-guppy-ending',
    ],
    body: [
      {
        heading: 'Halibut: Cave and Temple',
        paragraphs: [
          'Begin with Halibut and complete the Cave chain. The early answers teach the core verbs: use guppy for OpenMe, read metadata for MMTT, reveal hidden files for Kassandra, and manipulate the key file for PORTONUS. Puzzle 9 is the stone altar, while Puzzle 10 asks for crocodile, 14, fire and Walleye. The separate Cave guide preserves the full sequence and the optional father input.',
          'The Temple starts with Shai and splits across Anubis, Thoth and Ra. Complete all three branches. Anubis uses a 120 KB weight total, the word Ammit, a Source edit from Abracadabra to Inanna, SEKHETAARU and a Topaz recovered from Trash. Thoth uses the mirror, a blue filter that reveals 5267, an hourglass total of 67 and a date change. Ra uses a burning-coal image, SAHMAT, the tomb phrase, the answer No and a compressed file named deadlyMistake.',
        ],
        bullets: [
          'Finish every Cave task before treating Temple doors as a separate campaign.',
          'Use clue labels when a guide’s puzzle number differs.',
          'Complete Anubis, Thoth and Ra; none is optional for the main route.',
          'Close surplus windows during the Ra branch so state changes can register.',
        ],
      },
      {
        heading: 'M4x1mus: recovery, NextRooms and Sol Plaza',
        paragraphs: [
          'The recovery questions are stegosaurus, Cascadia and Faiza. Visit fridgemagnets.com/posts/m4x1mus/06-07-96 and use POWER when the clue calls for the linked password. Let the maze screensaver appear, then enter NextRooms with user The_Max and password sweaters123. The room codes are RC-CLR7V40 and RC-L1Z4RD5; the Kojami direction sequence is North, West, South, East, South, West.',
          'On Sol Plaza F1, answer the Bee Kind quiz with The Sweaters, Zombie, Red and Pineapple Summer. In the magic shop, 6D, JH and 3S produce CRONOS. The pet-store/aquarium password is 3142. Complete the second maze with East, South, East, North, East, South, then solve the paint square and locker 0321. On F2, earn and manage arcade tickets, use MineSniffer positions B4, I7, G3, C8 and J5 for the $3.75 vendor task, dress the mannequin with green tie, blue shirt and glasses, and arrange the photo grid.',
        ],
      },
      {
        heading: 'Admin, Guppy and the last cave',
        paragraphs: [
          'Restore the needed terminal material, use goldenratio for de_analysis and TAROCCHI for the Admin profile. In the portrait space, cover the light with the cursor or hand, choose Feel Wall and use the lever. For the orb, interact with Middle Eye, Left Hand and Right Hand. These steps lead into Guppy’s final desktop.',
          'Use THESEUS for Guppy’s Desktop Explorer and Inanna when the painting asks for its word. The final cave route is Left, Right, Left, Below, Left, Right, Below. Enter bigCatch, dontForget and anglerTrio when requested. Finish the chess arrangement with King B1; Knights B2 and C2; Rooks C1 and A3; Pawn A2. Follow the remaining story prompts to complete Desktop Explorer.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the profile order in Desktop Explorer?',
        answer:
          'The main progression moves through Halibut, M4x1mus, Admin and Guppy.',
      },
      {
        question: 'What is the final cave route?',
        answer: 'Left, Right, Left, Below, Left, Right, Below.',
      },
      {
        question: 'What is the final chess solution?',
        answer: 'King B1; Knights B2 and C2; Rooks C1 and A3; Pawn A2.',
      },
    ],
  },
  {
    ...base,
    slug: 'all-puzzle-solutions-passwords',
    path: '/guides/all-puzzle-solutions-passwords',
    title: 'Desktop Explorer All Puzzle Solutions and Passwords',
    seoTitle: 'Desktop Explorer All Puzzle Solutions & Password List',
    seoDescription:
      'Find Desktop Explorer passwords and direct answers for Cave, Temple, NextRooms, Sol Plaza, Admin and Guppy in one spoiler-heavy reference.',
    summary:
      'The quickest answer sheet: every high-friction word, password, room code, route and final board position in story order.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/1.jpg',
    sourceNotes:
      'Compiled from the released build’s current walkthrough evidence and cross-checked across independent solution inventories.',
    videoSearchQueries: [
      'Desktop Explorer all puzzle solutions',
      'Desktop Explorer passwords',
    ],
    tags: ['Passwords', 'Answers', 'Quick reference'],
    relatedRoutes: [
      '/guides/cave-puzzles-0-10',
      '/guides/temple-walkthrough',
      '/guides/mall-f1-puzzles',
      '/guides/admin-guppy-ending',
    ],
    body: [
      {
        heading: 'Cave answer list',
        paragraphs: [
          'Use guppy for OpenMe. The Cave sequence then uses fortuna, Inanna, ELEPHAS, SALVE, PORTONUS, MMTT, Kassandra and Rubicon as the major named answers. ELEPHAS is revealed by making the word wrap expose “elephant.” SALVE is found in Source. PORTONUS is paired with the rune instruction RENAMEIT and the key.err to key.img change. MMTT comes from the file author field, and Kassandra requires hidden files.',
          'At the altar, stack stones by size using the required Large, Medium and Small order indicated on the puzzle. Beyond asks for crocodile, 14, fire and Walleye. Enter father as the alternate family answer only when hunting the related secret interaction; use the normal prompt answer for straightforward progression.',
        ],
        bullets: [
          'OpenMe: guppy',
          'Named chain: fortuna · Inanna · ELEPHAS · SALVE · PORTONUS · MMTT · Kassandra · Rubicon',
          'Puzzle 10 / Beyond: crocodile · 14 · fire · Walleye',
          'Optional alternate input: father',
        ],
      },
      {
        heading: 'Temple, M4x1mus and Sol Plaza',
        paragraphs: [
          'Temple entry is Shai. Anubis: total 120 KB, answer Ammit, replace Abracadabra with Inanna in Source, enter SEKHETAARU and recover Topaz from Trash. Thoth: mirror the clue, apply blue to expose 5267, total the hourglasses to 67 and advance the year for the ore. Ra: rename the largest coal into burningCoal36.img, duplicate it for SAHMAT, enter WE ARE INCOMPLETE WITHOUT YOU, answer No, then compress deadlyMistake and clear blocking windows.',
          'M4x1mus recovery answers are stegosaurus, Cascadia and Faiza. The linked fridge-magnets post uses POWER. NextRooms uses The_Max / sweaters123, then RC-CLR7V40 and RC-L1Z4RD5. Kojami is North, West, South, East, South, West. Sol Plaza F1 uses The Sweaters, Zombie, Red, Pineapple Summer; CRONOS; 3142; the route East, South, East, North, East, South; and locker 0321.',
        ],
      },
      {
        heading: 'Admin and Guppy answer list',
        paragraphs: [
          'For Admin, use goldenratio on de_analysis and TAROCCHI for the profile. The portrait sequence is cover the light, Feel Wall, Use Lever. The orb order is Middle Eye, Left Hand, Right Hand. If a terminal command differs after a patch, read the restored terminal help instead of pasting punctuation from an older guide; the password and interaction sequence remain the safer landmarks.',
          'For Guppy, use THESEUS, then Inanna for the painting. Take Left, Right, Left, Below, Left, Right, Below through the final cave. Enter bigCatch, dontForget and anglerTrio. Place the chess pieces as King B1; Knights B2/C2; Rooks C1/A3; Pawn A2.',
        ],
        bullets: [
          'Admin analysis: goldenratio',
          'Admin profile: TAROCCHI',
          'Guppy profile: THESEUS',
          'Final inputs: bigCatch · dontForget · anglerTrio',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Admin password?',
        answer: 'Use TAROCCHI for the Admin profile.',
      },
      {
        question: 'What is the Desktop Explorer Guppy password?',
        answer: 'Use THESEUS for Guppy’s Desktop Explorer.',
      },
      {
        question: 'What is the NextRooms login?',
        answer: 'The user is The_Max and the password is sweaters123.',
      },
    ],
  },
  {
    ...base,
    slug: 'cave-puzzles-0-10',
    path: '/guides/cave-puzzles-0-10',
    title: 'Desktop Explorer Cave Puzzles 0–10',
    seoTitle: 'Desktop Explorer Cave Puzzle Solutions 0–10',
    seoDescription:
      'Solve every Desktop Explorer Cave puzzle from OpenMe through Puzzle 10, with exact words, metadata actions, hidden-file steps and answer checks.',
    summary:
      'A chronological Cave guide that pairs each answer with the desktop action that reveals it, including the numbering mismatch found in other walkthroughs.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/2.jpg',
    sourceNotes:
      'Exact labels and answers were triangulated from current released-build walkthroughs; numbering differences are explained instead of hidden.',
    videoSearchQueries: [
      'Desktop Explorer cave puzzle 3',
      'Desktop Explorer puzzles 0 10',
    ],
    tags: ['Cave', 'Puzzles 0–10', 'Halibut'],
    relatedRoutes: [
      '/guides/puzzle-9-altar-solution',
      '/guides/puzzle-10-beyond-solution',
      '/guides/temple-walkthrough',
      '/guides/full-walkthrough',
    ],
    body: [
      {
        heading: 'Opening tasks and the first named answers',
        paragraphs: [
          'The opening protected item uses guppy. Some walkthroughs call this Puzzle 0 and others fold it into Puzzle 1, which shifts later numbers by one. Continue by following the visible Cave labels. Enter fortuna when the Fortuna clue resolves, then Inanna for the related name clue.',
          'For ELEPHAS, resize the text or window until the wrapped word exposes the elephant connection. For SALVE, inspect Source instead of guessing from what the page renders. These are tutorial puzzles for presentation versus underlying data: what appears on screen is not always the complete clue.',
        ],
        bullets: [
          'OpenMe password: guppy',
          'Early word answers: fortuna, Inanna',
          'Resize/wrap answer: ELEPHAS',
          'Source-code answer: SALVE',
        ],
      },
      {
        heading: 'PORTONUS through Rubicon',
        paragraphs: [
          'The PORTONUS step uses the aligned rune instruction RENAMEIT. Rename key.err to key.img so that the file becomes usable as an image, then submit PORTONUS where requested. If the icon does not update, reopen the folder and confirm that you changed the extension rather than adding a second suffix.',
          'MMTT comes from file Details, specifically the author metadata. Kassandra is connected to a hidden file, so enable the view that exposes hidden content before searching the visible folder again. Rubicon is the next direct answer. These steps deliberately rotate through extension, metadata and hidden-file mechanics.',
        ],
        bullets: [
          'Rune instruction: RENAMEIT',
          'Rename: key.err → key.img',
          'Metadata answer: MMTT',
          'Hidden-file answer: Kassandra',
          'Following word: Rubicon',
        ],
      },
      {
        heading: 'Puzzle 9 altar and Puzzle 10 Beyond',
        paragraphs: [
          'At the altar, use the stone sizes rather than their loose positions. Stack Large, Medium and Small in the order demanded by the silhouette and labels. If the altar does not complete, remove the stones and rebuild cleanly; an almost aligned pile can look correct while one object is registered in the wrong slot.',
          'Beyond uses a four-part answer sequence: crocodile, 14, fire and Walleye. Submit each answer to its matching clue rather than typing them as one password. The alternate input father triggers a separate secret interaction, so it is useful for achievement cleanup but is not the normal replacement for every family-related prompt.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the OpenMe password?',
        answer: 'The OpenMe password is guppy.',
      },
      {
        question: 'What are the Puzzle 10 answers?',
        answer: 'Use crocodile, 14, fire and Walleye in the matching prompts.',
      },
      {
        question: 'How do I reveal Kassandra?',
        answer: 'Enable hidden files and inspect the newly visible content.',
      },
    ],
  },
  {
    ...base,
    slug: 'puzzle-9-altar-solution',
    path: '/guides/puzzle-9-altar-solution',
    title: 'Desktop Explorer Puzzle 9 Altar Solution',
    seoTitle: 'Desktop Explorer Puzzle 9 Altar & Stone Solution',
    seoDescription:
      'Solve Desktop Explorer Puzzle 9 by identifying the altar stones, placing Large, Medium and Small correctly and resetting a pile that will not register.',
    summary:
      'A focused fix for the Cave altar: identify stones by size, use the silhouette as the target and rebuild if collision makes a correct-looking stack fail.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/3.jpg',
    sourceNotes:
      'Current walkthrough frames and multiple text inventories agree on the Large/Medium/Small interaction; this page emphasizes reliable placement.',
    videoSearchQueries: [
      'Desktop Explorer puzzle 9',
      'Desktop Explorer altar stones',
    ],
    tags: ['Puzzle 9', 'Altar', 'Stones'],
    relatedRoutes: [
      '/guides/cave-puzzles-0-10',
      '/guides/puzzle-10-beyond-solution',
      '/guides/all-puzzle-solutions-passwords',
      '/guides/full-walkthrough',
    ],
    body: [
      {
        heading: 'Read the altar as a size diagram',
        paragraphs: [
          'Puzzle 9 is a spatial desktop interaction rather than a typed password. Identify the three movable stones as Large, Medium and Small, then compare them with the altar silhouette. The visual target matters more than the stones’ starting order.',
          'Drag deliberately and release each piece only when it occupies a stable layer. A stone can overlap the right area without being accepted, especially if it is resting on an edge. Work from the base upward so later pieces do not dislodge the first one.',
        ],
      },
      {
        heading: 'Place Large, Medium and Small',
        paragraphs: [
          'Use the Large stone as the base, the Medium stone as the middle layer and the Small stone at the top. Center each layer enough that the pile reads as a single altar stack. Pause after each drop and watch for feedback before moving the next object.',
          'If your visible labels appear offset from a guide, remember that other walkthroughs may count the opening Cave task differently. The altar itself is the reliable landmark even when a page calls it Puzzle 8 or Puzzle 9.',
        ],
        bullets: [
          'Base: Large',
          'Middle: Medium',
          'Top: Small',
          'Place one object at a time and wait for state feedback.',
        ],
      },
      {
        heading: 'Reset a stack that looks correct',
        paragraphs: [
          'When nothing happens, pull all three pieces away from the altar and rebuild rather than nudging the top indefinitely. Close unrelated windows, make sure the puzzle has focus and leave visible separation before placing Large again.',
          'If a piece is hidden behind another window or outside the usable region, reopen the puzzle view. Do not restart the full save until a clean rebuild has failed; most non-registering piles are placement or focus issues.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Puzzle 9 stone order?',
        answer:
          'Place Large at the base, Medium in the middle and Small on top.',
      },
      {
        question: 'Why does the altar not register?',
        answer:
          'A stone may be overlapping rather than seated. Remove all three, close extra windows and rebuild from the Large base.',
      },
    ],
  },
  {
    ...base,
    slug: 'puzzle-10-beyond-solution',
    path: '/guides/puzzle-10-beyond-solution',
    title: 'Desktop Explorer Puzzle 10 Beyond Solution',
    seoTitle: 'Desktop Explorer Puzzle 10 Answers: Beyond Solution',
    seoDescription:
      'Enter the correct Desktop Explorer Puzzle 10 Beyond answers—crocodile, 14, fire and Walleye—and learn where the optional father input belongs.',
    summary:
      'The four direct Beyond answers, plus a warning that the optional father input is a secret interaction rather than the normal answer to every prompt.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/4.jpg',
    sourceNotes:
      'The four-answer sequence and alternate input were cross-checked against current full-game solution coverage.',
    videoSearchQueries: [
      'Desktop Explorer puzzle 10',
      'Desktop Explorer Beyond solution',
    ],
    tags: ['Puzzle 10', 'Beyond', 'Answers'],
    relatedRoutes: [
      '/guides/cave-puzzles-0-10',
      '/guides/puzzle-9-altar-solution',
      '/guides/achievements-guide',
      '/guides/temple-walkthrough',
    ],
    body: [
      {
        heading: 'Use one answer for each prompt',
        paragraphs: [
          'Beyond is not one long password. It presents separate clues that expect separate entries, so keep the answers in sequence and submit them only to the matching field. The direct progression answers are crocodile, 14, fire and Walleye.',
          'Preserve capitalization only where the interface clearly presents a proper name. If an answer fails, re-read the current clue and verify that you did not advance the list by one after a successful submission.',
        ],
        bullets: [
          'First answer: crocodile',
          'Second answer: 14',
          'Third answer: fire',
          'Fourth answer: Walleye',
        ],
      },
      {
        heading: 'Where the father input fits',
        paragraphs: [
          'The word father is an alternate input associated with a secret interaction. It is not a universal substitute for the normal four-answer route. Use it at the relevant family prompt when cleaning up secrets, then return to the expected clue answer if progression does not continue.',
          'Because the game rewards unusual desktop behavior, alternate words can produce feedback without completing the main objective. Distinguish an achievement or Easter-egg response from the completion state of the puzzle window.',
        ],
      },
      {
        heading: 'Fix a correct answer that does not advance',
        paragraphs: [
          'Click directly into the input, remove any trailing space and press Enter. Keep the puzzle window in front until its response appears. A prior answer may have advanced the clue while a different window covered the change.',
          'If the current clue and answer no longer match, close and reopen the puzzle view to confirm state. Do not paste all four answers into one line; the game checks them as individual steps.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are all Desktop Explorer Puzzle 10 answers?',
        answer: 'crocodile, 14, fire and Walleye, in their matching prompts.',
      },
      {
        question: 'Is father a required Puzzle 10 answer?',
        answer:
          'It is an alternate secret interaction, not a replacement for the normal four-answer progression.',
      },
    ],
  },
  {
    ...base,
    slug: 'temple-walkthrough',
    path: '/guides/temple-walkthrough',
    title: 'Desktop Explorer Temple Walkthrough',
    seoTitle: 'Desktop Explorer Temple Walkthrough: Anubis, Thoth & Ra',
    seoDescription:
      'Complete the Desktop Explorer Temple with Shai, Anubis, Thoth and Ra solutions, including 120 KB, 5267, 67, SAHMAT and the tomb phrase.',
    summary:
      'All three Temple branches in a practical order, including weight, color, Source, Trash, date, compression and window-state puzzles.',
    category: 'Walkthrough',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/1.jpg',
    sourceNotes:
      'Branch order and answer strings were cross-checked across current full-build walkthroughs.',
    videoSearchQueries: [
      'Desktop Explorer Temple walkthrough',
      'Desktop Explorer Anubis Thoth Ra',
    ],
    tags: ['Temple', 'Anubis', 'Thoth', 'Ra'],
    relatedRoutes: [
      '/guides/cave-puzzles-0-10',
      '/guides/full-walkthrough',
      '/guides/m4x1mus-password-nextrooms',
      '/guides/all-puzzle-solutions-passwords',
    ],
    body: [
      {
        heading: 'Enter with Shai and clear Anubis',
        paragraphs: [
          'Use Shai to begin the Temple route, then choose a branch and finish it before mixing windows from another. In Anubis, combine the correct weighted files until the total is 120 KB and enter Ammit for the named answer.',
          'Open Source and replace Abracadabra with Inanna where the scripted clue requires the correct invocation. Enter SEKHETAARU at the corresponding prompt. Recover Topaz from Trash instead of searching every visible Temple folder; its deleted state is the clue.',
        ],
        bullets: [
          'Temple entry: Shai',
          'Required weight: 120 KB',
          'Named answer: Ammit',
          'Source replacement: Abracadabra → Inanna',
          'Later answer: SEKHETAARU',
          'Recover Topaz from Trash.',
        ],
      },
      {
        heading: 'Solve Thoth with display and time',
        paragraphs: [
          'The Thoth branch asks you to change how information is viewed. Mirror the relevant clue, then use the blue color or filter to expose 5267. If the digits are still unclear, remove other color layers and check that blue applies to the clue itself.',
          'Add the hourglass values to reach 67. For the ore step, advance the relevant year or date so the material reaches the requested age. This is a metadata/time manipulation, not a request to wait in real time.',
        ],
        bullets: [
          'Blue reveal: 5267',
          'Hourglass total: 67',
          'Ore: advance the relevant year/date.',
        ],
      },
      {
        heading: 'Finish Ra and the tomb',
        paragraphs: [
          'Find the largest coal and rename it to burningCoal36.img so it becomes the expected image. Duplicate the correct object for the SAHMAT step. Enter WE ARE INCOMPLETE WITHOUT YOU as the tomb phrase and answer No at the following decision prompt.',
          'Compress deadlyMistake when the clue calls for a smaller object. Close surplus windows afterward; the Ra sequence can appear stuck when completion feedback or an interactive target is covered. Reopen the branch only after verifying the renamed extension, duplicate and compressed result.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Temple starting password?',
        answer: 'Use Shai.',
      },
      {
        question: 'What number does the blue filter reveal?',
        answer: '5267.',
      },
      {
        question: 'What is the tomb phrase?',
        answer: 'WE ARE INCOMPLETE WITHOUT YOU.',
      },
    ],
  },
  {
    ...base,
    slug: 'm4x1mus-password-nextrooms',
    path: '/guides/m4x1mus-password-nextrooms',
    title: 'Desktop Explorer M4x1mus Password and NextRooms',
    seoTitle: 'Desktop Explorer M4x1mus Password & NextRooms Codes',
    seoDescription:
      'Recover M4x1mus with stegosaurus, Cascadia and Faiza, find POWER, log into NextRooms and use both room codes plus the Kojami route.',
    summary:
      'Every credential between profile recovery and Sol Plaza: the fridge-magnets post, maze screensaver, The_Max login, room codes and direction sequence.',
    category: 'Walkthrough',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/2.jpg',
    sourceNotes:
      'Credentials and room codes were verified across current walkthrough inventories and full-release route footage.',
    videoSearchQueries: [
      'Desktop Explorer M4x1mus password',
      'Desktop Explorer NextRooms codes',
    ],
    tags: ['M4x1mus', 'NextRooms', 'Passwords'],
    relatedRoutes: [
      '/guides/mall-f1-puzzles',
      '/guides/mall-f2-admin-unlock',
      '/guides/full-walkthrough',
      '/guides/achievements-guide',
    ],
    body: [
      {
        heading: 'Pass the recovery questions',
        paragraphs: [
          'The recovery answers are stegosaurus, Cascadia and Faiza. Enter them in the order asked and keep spelling exact. These questions establish enough access to inspect the account’s web and desktop traces.',
          'Open fridgemagnets.com/posts/m4x1mus/06-07-96 and use POWER for the associated password. The date is part of the path, so a nearby post is not interchangeable even if it looks visually similar.',
        ],
        bullets: [
          'Recovery 1: stegosaurus',
          'Recovery 2: Cascadia',
          'Recovery 3: Faiza',
          'Fridge-magnets password: POWER',
        ],
      },
      {
        heading: 'Reveal and enter NextRooms',
        paragraphs: [
          'Allow the maze screensaver to appear and inspect it instead of dismissing it immediately. It provides the bridge into NextRooms. Use The_Max as the username and sweaters123 as the password.',
          'If the login fails, check the underscore and capitalization in The_Max, then remove trailing spaces from the password field. Use the profile connected to the maze clue rather than another visible account name.',
        ],
        bullets: ['Username: The_Max', 'Password: sweaters123'],
      },
      {
        heading: 'Room codes and Kojami directions',
        paragraphs: [
          'Enter RC-CLR7V40 and RC-L1Z4RD5 when the matching rooms request their codes. Each code includes hyphens and a mix of letters and digits, so copy the characters carefully.',
          'The Kojami direction sequence is North, West, South, East, South, West. It is deliberately reminiscent of an old-school input secret. Finish the room chain before moving to the Sol Plaza floor puzzles.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the M4x1mus password?',
        answer:
          'The linked fridge-magnets clue uses POWER; NextRooms uses The_Max / sweaters123.',
      },
      {
        question: 'What are the NextRooms room codes?',
        answer: 'RC-CLR7V40 and RC-L1Z4RD5.',
      },
      {
        question: 'What is the Kojami direction sequence?',
        answer: 'North, West, South, East, South, West.',
      },
    ],
  },
  {
    ...base,
    slug: 'mall-f1-puzzles',
    path: '/guides/mall-f1-puzzles',
    title: 'Desktop Explorer Sol Plaza Mall F1 Puzzles',
    seoTitle: 'Desktop Explorer Mall F1: Quiz, CRONOS, Paint & Locker',
    seoDescription:
      'Solve Desktop Explorer Sol Plaza F1 with Bee Kind quiz answers, CRONOS, aquarium password 3142, maze directions, paint grid and locker 0321.',
    summary:
      'A floor-by-floor answer route for Bee Kind, the magic shop, aquarium, maze, paint puzzle, circuit boxes and locker.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/3.jpg',
    sourceNotes:
      'Current full-game walkthroughs agree on the quiz, shop, route and locker; the paint fragment is described visually because one text guide conflicts on a digit.',
    videoSearchQueries: [
      'Desktop Explorer Sol Plaza F1',
      'Desktop Explorer paint puzzle 0321',
    ],
    tags: ['Sol Plaza', 'Mall F1', 'Paint puzzle'],
    relatedRoutes: [
      '/guides/mall-f2-admin-unlock',
      '/guides/m4x1mus-password-nextrooms',
      '/guides/achievements-guide',
      '/guides/full-walkthrough',
    ],
    body: [
      {
        heading: 'Bee Kind, magic shop and aquarium',
        paragraphs: [
          'Answer the Bee Kind quiz with The Sweaters, Zombie, Red and Pineapple Summer. In the magic shop, interpret 6D, JH and 3S to produce CRONOS. Use 3142 for the aquarium or pet-store password.',
          'Complete one storefront at a time and keep the answer window visible until it confirms. Sol Plaza layers several faux websites and shop interfaces, and feedback can be covered by the next app if you open everything at once.',
        ],
        bullets: [
          'Bee Kind: The Sweaters · Zombie · Red · Pineapple Summer',
          'Magic shop: CRONOS',
          'Aquarium / pet store: 3142',
        ],
      },
      {
        heading: 'Second maze and paint square',
        paragraphs: [
          'The second maze route is East, South, East, North, East, South. Enter one direction per step and reset from the start if you accidentally repeat an input.',
          'For the paint system, Source maps red to +2, yellow to +1, purple to 0, green to -3 and blue to -2. Use the magic-square arrangement 8 1 6 / 3 5 7 / 4 9 2 and match each requested painting to the torn visual fragment. Current released-build walkthroughs support 896 for the first painting, followed by 712 and 354; an early text guide prints 816, so use the visible fragment as the final authority if your build differs.',
        ],
        bullets: [
          'Maze: East · South · East · North · East · South',
          'Color values: red +2, yellow +1, purple 0, green -3, blue -2',
          'Magic square: 8 1 6 / 3 5 7 / 4 9 2',
          'Current painting entries: 896 · 712 · 354',
        ],
      },
      {
        heading: 'Locker and circuit cleanup',
        paragraphs: [
          'Use 0321 for the locker. Complete the nearby circuit-box interactions before leaving F1; the floor’s completion state depends on more than knowing the storefront passwords.',
          'If the floor does not finish, reopen each shop and look for an unconfirmed submit state, then inspect the circuit boxes. The paint code is the first item to recheck because a visually similar early transcription can send a player to 816 instead of the current 896.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer locker code?',
        answer: '0321.',
      },
      {
        question: 'What is the aquarium password?',
        answer: '3142.',
      },
      {
        question: 'What is the second maze route?',
        answer: 'East, South, East, North, East, South.',
      },
    ],
  },
  {
    ...base,
    slug: 'mall-f2-admin-unlock',
    path: '/guides/mall-f2-admin-unlock',
    title: 'Desktop Explorer Mall F2 and Admin Unlock',
    seoTitle: 'Desktop Explorer Mall F2 Walkthrough & Admin Unlock',
    seoDescription:
      'Complete Sol Plaza F2 arcade, MineSniffer, mannequin and photo-grid puzzles, then use goldenratio and TAROCCHI to unlock Admin.',
    summary:
      'Clear the second mall floor, organize the photo board and carry the recovered clues into the Admin account.',
    category: 'Walkthrough',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/4.jpg',
    sourceNotes:
      'F2 positions, outfit and grid were cross-checked against current walkthrough coverage; Admin credentials are consistent across sources.',
    videoSearchQueries: [
      'Desktop Explorer Sol Plaza F2',
      'Desktop Explorer Admin password',
    ],
    tags: ['Mall F2', 'Admin', 'MineSniffer'],
    relatedRoutes: [
      '/guides/mall-f1-puzzles',
      '/guides/admin-guppy-ending',
      '/guides/full-walkthrough',
      '/guides/achievements-guide',
    ],
    body: [
      {
        heading: 'Arcade tickets and the vendor',
        paragraphs: [
          'Use the desktop’s duplicate and compression tools to handle the arcade-ticket requirement. The puzzle is testing file operations, not reflex arcade play, so inspect the ticket object and the requested quantity or size.',
          'For the $3.75 vendor task, use MineSniffer positions B4, I7, G3, C8 and J5. Mark the coordinates carefully; one swapped row and column prevents the result from matching.',
        ],
        bullets: [
          'Use file duplication/compression for the ticket objective.',
          'MineSniffer: B4 · I7 · G3 · C8 · J5',
          'Vendor amount: $3.75',
        ],
      },
      {
        heading: 'Mannequin and photo grid',
        paragraphs: [
          'Dress the mannequin with the green tie, blue shirt and glasses. The combination is judged as a set, so remove any conflicting accessory before expecting completion.',
          'Arrange the photo grid as Camera, Paint, Candles on the first row; Aquarium, Crime, Magic on the second; Emotions, Arcade, Video on the third. Check both row and column placement after the last card because one near-synonym can look plausible in the wrong slot.',
        ],
        bullets: [
          'Outfit: green tie · blue shirt · glasses',
          'Row 1: Camera · Paint · Candles',
          'Row 2: Aquarium · Crime · Magic',
          'Row 3: Emotions · Arcade · Video',
        ],
      },
      {
        heading: 'Carry the clues into Admin',
        paragraphs: [
          'After Sol Plaza is complete, use the restored terminal material to continue. The de_analysis password is goldenratio, and the Admin profile password is TAROCCHI. Keep these distinct: the first opens the analysis material; the second authenticates the profile.',
          'If an older guide gives a terminal command with different punctuation, read the current restored help text and follow its syntax. Commands are sensitive to the live build, while goldenratio and TAROCCHI are the stable progression landmarks.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are the MineSniffer positions?',
        answer: 'B4, I7, G3, C8 and J5.',
      },
      {
        question: 'What is the de_analysis password?',
        answer: 'goldenratio.',
      },
      {
        question: 'What is the Admin password?',
        answer: 'TAROCCHI.',
      },
    ],
  },
  {
    ...base,
    slug: 'admin-guppy-ending',
    path: '/guides/admin-guppy-ending',
    title: 'Desktop Explorer Admin, Guppy and Ending Guide',
    seoTitle: 'Desktop Explorer Admin & Guppy Ending Walkthrough',
    seoDescription:
      'Finish Desktop Explorer with the Admin portrait and orb sequence, Guppy password THESEUS, final cave directions, three inputs and chess positions.',
    summary:
      'The late-game route from TAROCCHI through the portrait, orb, final cave and exact chess-board layout.',
    category: 'Walkthrough',
    difficulty: 'Major spoilers',
    coverImageUrl: videos.anyPercent.thumbnailUrl,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Current any% and full-run footage were used to verify the late profile order and board state; passwords were cross-checked independently.',
    videoSearchQueries: [
      'Desktop Explorer Admin Guppy ending',
      'Desktop Explorer final chess puzzle',
    ],
    video: videos.anyPercent,
    tags: ['Admin', 'Guppy', 'Ending'],
    relatedRoutes: [
      '/guides/mall-f2-admin-unlock',
      '/guides/achievements-guide',
      '/guides/full-walkthrough',
      '/guides/all-puzzle-solutions-passwords',
    ],
    body: [
      {
        heading: 'Admin portrait and orb',
        paragraphs: [
          'Use TAROCCHI to enter Admin after opening de_analysis with goldenratio. In the portrait space, cover the light with the cursor or hand, choose Feel Wall, then Use Lever. The apparent scene is an interface: the cursor is an object and the text actions change what can be reached.',
          'At the orb, use Middle Eye, Left Hand and Right Hand. Keep the sequence in order and wait for each interaction to register. If the next target does not appear, close an overlapping text panel rather than repeating the entire profile.',
        ],
        bullets: [
          'Admin password: TAROCCHI',
          'Portrait: cover light · Feel Wall · Use Lever',
          'Orb: Middle Eye · Left Hand · Right Hand',
        ],
      },
      {
        heading: 'Guppy and the final cave',
        paragraphs: [
          'Use THESEUS for Guppy’s Desktop Explorer. Enter Inanna when the painting asks for its word. The final cave route is Left, Right, Left, Below, Left, Right, Below.',
          'Enter bigCatch, dontForget and anglerTrio when the route presents their matching inputs. Preserve capitalization exactly. If a direction fails, return to the start of the sequence instead of trying to correct from an unknown room.',
        ],
        bullets: [
          'Guppy password: THESEUS',
          'Painting word: Inanna',
          'Route: Left · Right · Left · Below · Left · Right · Below',
          'Inputs: bigCatch · dontForget · anglerTrio',
        ],
      },
      {
        heading: 'Final chess placement',
        paragraphs: [
          'Place the King on B1. Put the Knights on B2 and C2, the Rooks on C1 and A3, and the Pawn on A2. Verify coordinates from the board’s own orientation before submitting; rotating the mental grid is the most common source of a mirrored answer.',
          'Once the board accepts the layout, follow the remaining story interactions. If you are cleaning up achievements, keep a save from before the ending so optional desktop actions and unread Chronolog entries remain easy to revisit.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Guppy password?',
        answer: 'THESEUS.',
      },
      {
        question: 'What is the final cave direction route?',
        answer: 'Left, Right, Left, Below, Left, Right, Below.',
      },
      {
        question: 'Where do the chess pieces go?',
        answer: 'King B1; Knights B2/C2; Rooks C1/A3; Pawn A2.',
      },
    ],
  },
  {
    ...base,
    slug: 'achievements-guide',
    path: '/guides/achievements-guide',
    title: 'Desktop Explorer Achievements Guide',
    seoTitle: 'Desktop Explorer Achievements Guide: All 23 Unlocks',
    seoDescription:
      'Track all 23 Desktop Explorer Steam achievements, including story milestones, WebSurfer, Lore Master, Clever Girl, Power to the People and Kojami Code.',
    summary:
      'A clean checklist for all 23 official Steam achievements, with direct methods for the known interaction and collection unlocks.',
    category: 'Achievements',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/0.jpg',
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'Names and descriptions come from Steam’s public achievement record; secret methods are limited to reproducible current community discoveries.',
    videoSearchQueries: [
      'Desktop Explorer achievements guide',
      'Desktop Explorer Clever Girl Power to the People',
    ],
    tags: ['23 achievements', 'Secrets', 'Completion'],
    relatedRoutes: [
      '/guides/full-walkthrough',
      '/guides/puzzle-10-beyond-solution',
      '/guides/admin-guppy-ending',
      '/guides/beginner-spoiler-light-hints',
    ],
    body: [
      {
        heading: 'Story and creation achievements',
        paragraphs: [
          'Normal progression awards Fortuna for the Cave, Merneith for Halibut’s Desktop Explorer, “What a Thrill...” for Sol Plaza F1, Sol Plaza for M4x1mus, The Tower for Admin, Desktop Detective for Guppy and Desktop Explorer for the overall journey. These are safest to earn on one continuous save.',
          'I like your style! unlocks when you change the wallpaper. Taking Notes comes from creating a Notepage file, and Masterpiece comes from creating a Sketchy file. Do these early so they are not mixed into late-game cleanup.',
        ],
        bullets: [
          'Story: Fortuna · Merneith · “What a Thrill...” · Sol Plaza · The Tower · Desktop Detective · Desktop Explorer',
          'Create/change: I like your style! · Taking Notes · Masterpiece',
        ],
      },
      {
        heading: 'Collection and time-based cleanup',
        paragraphs: [
          'Screen Time requires watching any screensaver for more than ten minutes. Sold Out asks for every CabiNet prize. Lore Master requires every past user’s Chronolog entry, and WebSurfer requires visiting all Websurfer websites. Can I Pet Her? unlocks by petting the Minesniffer Dog.',
          'Neat Freak, Muralist, Example quest, This is not your computer and I am the Law are deliberately phrased as discovery achievements. Inspect every usable surface, complete optional example behavior and test the role-related interactions before leaving a profile. Keep a simple checklist because the official description does not expose the missing item.',
        ],
      },
      {
        heading: 'Known secret inputs',
        paragraphs: [
          'For “Clever Girl...”, type uninstall desktopexplorer in the nOS Terminal. Power to the People is tied to creating an army of pawns, so duplicate the pawn object until the achievement triggers. Kojami Code is the old-school direction Easter egg connected with the repeating-room sequence.',
          'The optional father input in the Beyond area can produce a secret interaction relevant to thorough completion. Save before experimenting with alternate inputs. Steam currently lists 23 total achievements; if your account shows fewer, let the client synchronize after the game closes.',
        ],
        bullets: [
          '“Clever Girl...”: terminal command uninstall desktopexplorer',
          'Power to the People: duplicate pawns into an army',
          'Kojami Code: complete the old-school direction Easter egg',
          'Screen Time: leave a screensaver running for more than 10 minutes',
        ],
      },
    ],
    faq: [
      {
        question: 'How many Desktop Explorer achievements are there?',
        answer: 'Steam lists 23.',
      },
      {
        question: 'How do I unlock Clever Girl?',
        answer: 'Type uninstall desktopexplorer in the nOS Terminal.',
      },
      {
        question: 'How do I unlock Power to the People?',
        answer: 'Create an army by duplicating pawn objects.',
      },
    ],
  },
  {
    ...base,
    slug: 'demo-vs-full-game',
    path: '/guides/demo-vs-full-game',
    title: 'Desktop Explorer Demo vs Full Game',
    seoTitle: 'Desktop Explorer Demo vs Full Game: App IDs & Save Scope',
    seoDescription:
      'Separate Desktop Explorer Demo guides from the July 17 full release using Steam App IDs 2533590 and 2527160, route scope and current content.',
    summary:
      'Avoid using a demo-only solution for the released game by checking App ID, profile scope and recording date.',
    category: 'Reference',
    difficulty: 'Reference',
    coverImageUrl: videos.demo.thumbnailUrl,
    sourceStrategy: 'official_and_youtube',
    sourceNotes:
      'Steam App records identify the two products; demo footage is embedded only as a clearly labeled historical reference.',
    videoSearchQueries: [
      'Desktop Explorer demo walkthrough',
      'Desktop Explorer demo vs full game',
    ],
    video: videos.demo,
    tags: ['Demo', 'Full release', 'App IDs'],
    relatedRoutes: [
      '/guides/release-price-platforms',
      '/download',
      '/guides/full-walkthrough',
      '/system-requirements',
    ],
    body: [
      {
        heading: 'Check the Steam App ID first',
        paragraphs: [
          'The full Desktop Explorer game is Steam App 2527160. The separate demo is App 2533590. Search results and videos made before release may cover only the demo even when the title omits that word.',
          'Open the Steam URL or library properties before following a solution. A full-game guide should match the July 17, 2026 release and continue beyond the demo’s limited profile and puzzle scope.',
        ],
        bullets: ['Full game: 2527160', 'Demo: 2533590'],
      },
      {
        heading: 'What advice still transfers',
        paragraphs: [
          'The core desktop grammar transfers: inspect properties, resize windows, read Source, rename extensions, recover files and treat apps as puzzle rooms. Those mechanics are safe concepts even when a demo video does not include the same final route.',
          'Passwords, puzzle numbering, profile transitions and endings are build-specific. Use current full-game pages for Halibut, M4x1mus, Admin and Guppy rather than extrapolating from a demo stopping point.',
        ],
      },
      {
        heading: 'Save expectations',
        paragraphs: [
          'Treat demo and full-game data as separate unless Steam and the game explicitly offer an import. Do not remove the demo until you have confirmed the released game starts with the expected progress.',
          'For a new run, the full game remains the reliable source of current puzzle state and achievements. This wiki labels the demo video at the embed so it cannot be mistaken for complete released-build coverage.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the full-game Steam App ID?',
        answer: '2527160.',
      },
      {
        question: 'What is the demo App ID?',
        answer: '2533590.',
      },
      {
        question: 'Does every demo walkthrough apply to the full game?',
        answer:
          'No. The interaction vocabulary carries over, but route order, passwords and total content should be checked against the released build.',
      },
    ],
  },
  {
    ...base,
    slug: 'release-price-platforms',
    path: '/guides/release-price-platforms',
    title: 'Desktop Explorer Release, Price and Platforms',
    seoTitle: 'Desktop Explorer Release Date, Price & Platforms',
    seoDescription:
      'Check Desktop Explorer release date, Steam App ID, Windows and macOS support, languages, features and the safest way to verify current regional price.',
    summary:
      'Stable launch facts from Steam, with live-price guidance that avoids publishing a stale regional number.',
    category: 'Reference',
    difficulty: 'Reference',
    coverImageUrl: videos.officialTrailer.thumbnailUrl,
    sourceStrategy: 'official',
    sourceNotes:
      'Release, platforms, languages and features come from Steam; price is intentionally linked live because regional values and discounts change.',
    videoSearchQueries: [
      'Desktop Explorer release date trailer',
      'Desktop Explorer price Steam',
    ],
    video: videos.officialTrailer,
    tags: ['Release date', 'Price', 'Platforms'],
    relatedRoutes: [
      '/download',
      '/system-requirements',
      '/review',
      '/guides/demo-vs-full-game',
    ],
    body: [
      {
        heading: 'Release and ownership facts',
        paragraphs: [
          'Desktop Explorer released on July 17, 2026. The full game is Steam App 2527160, developed by Recurring Dream and published by Recurring Dream, Outersloth and indienova.',
          'The separate demo is App 2533590. Use the full-game App ID when checking reviews, achievements, store features or support discussions so demo data is not mixed into purchase advice.',
        ],
      },
      {
        heading: 'Platforms, languages and Steam features',
        paragraphs: [
          'Steam currently lists Windows and macOS versions, with no Linux build shown. The store lists single-player, Steam Achievements, Steam Cloud and Family Sharing. There are 23 achievements.',
          'Interface and subtitle support is listed for English, Simplified Chinese, Latin American Spanish and Traditional Chinese. Audio language support is not the core requirement for this text-and-interface-driven game, but check the live store matrix if language availability is decisive.',
        ],
      },
      {
        heading: 'How to check the current price',
        paragraphs: [
          'Price varies by region, tax and temporary promotion, so the official Steam page is the authority. This wiki does not freeze a launch price into a page that could become false at the next sale.',
          'Open the official listing while signed into the correct region and compare the displayed total with any bundle or launch discount. Third-party key listings are not official download sources and may have different refund or activation rules.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Desktop Explorer release?',
        answer: 'July 17, 2026.',
      },
      {
        question: 'Is Desktop Explorer on macOS?',
        answer: 'Yes. Steam currently lists Windows and macOS.',
      },
      {
        question: 'How much does Desktop Explorer cost?',
        answer:
          'Open the official Steam page for the current regional price and any active discount.',
      },
    ],
  },
  {
    ...base,
    slug: 'system-requirements',
    path: '/system-requirements',
    title: 'Desktop Explorer System Requirements',
    seoTitle: 'Desktop Explorer System Requirements for PC & Mac',
    seoDescription:
      'Check Desktop Explorer minimum requirements for Windows and macOS, including CPU, RAM, graphics, DirectX and 400 MB storage.',
    summary:
      'The official minimum PC and Mac specifications, plus practical checks for Steam client and display/input compatibility.',
    category: 'Reference',
    difficulty: 'Reference',
    coverImageUrl: '/desktop-explorer/header.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'Specifications are transcribed from the official Steam store; Steam client OS support is distinguished from the game’s listed minimum.',
    videoSearchQueries: ['Desktop Explorer system requirements'],
    tags: ['PC', 'macOS', 'Requirements'],
    relatedRoutes: [
      '/download',
      '/guides/release-price-platforms',
      '/review',
      '/guides/demo-vs-full-game',
    ],
    body: [
      {
        heading: 'Windows minimum',
        paragraphs: [
          'Steam lists Windows 7 SP1 or later for the game, a 2 GHz dual-core processor, 2 GB RAM, Intel HD Graphics 4400, DirectX 11 and 400 MB available storage.',
          'Steam’s own client now requires a newer supported Windows version than the game’s legacy minimum. A machine must satisfy both the game and the current Steam client, so treat Windows 10 or later as the practical baseline for a fresh installation.',
        ],
        bullets: [
          'OS: Windows 7 SP1+ listed for the game',
          'CPU: 2 GHz dual core',
          'Memory: 2 GB RAM',
          'Graphics: Intel HD Graphics 4400',
          'DirectX: Version 11',
          'Storage: 400 MB available',
        ],
      },
      {
        heading: 'macOS minimum',
        paragraphs: [
          'Steam lists macOS 10.12 or later, a 2 GHz dual-core processor, 2 GB RAM, Intel HD Graphics 4400-class graphics and 400 MB available storage.',
          'For Apple Silicon Macs, verify the current Steam compatibility label and use the latest game build. The official store page remains the authority if platform requirements change after launch.',
        ],
      },
      {
        heading: 'Practical setup checks',
        paragraphs: [
          'Leave more than the minimum free space for Steam updates and save synchronization. Because the game uses small text, layered windows and precise dragging, run at a readable resolution and confirm that display scaling does not clip the faux desktop.',
          'Desktop Explorer is single-player and does not require a high-end GPU. If performance is unstable on an integrated system, close overlays and unrelated applications before lowering resolution.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much storage does Desktop Explorer need?',
        answer: 'Steam lists 400 MB available space.',
      },
      {
        question: 'Does Desktop Explorer run on Linux?',
        answer:
          'Steam currently lists Windows and macOS, not a native Linux build.',
      },
      {
        question: 'How much RAM is required?',
        answer: 'The listed minimum is 2 GB RAM.',
      },
    ],
  },
  {
    ...base,
    slug: 'download',
    path: '/download',
    title: 'Download Desktop Explorer Safely',
    seoTitle: 'Desktop Explorer Download: Official Steam Links',
    seoDescription:
      'Download Desktop Explorer from the official Steam page, distinguish App 2527160 from the demo and avoid unofficial APK or crack pages.',
    summary:
      'Use the official Steam listing for the full game or demo, then verify the App ID before installing.',
    category: 'Safety',
    difficulty: 'Reference',
    coverImageUrl: '/desktop-explorer/header.jpg',
    sourceStrategy: 'official',
    sourceNotes:
      'This page links only to the official Steam store records and studio website.',
    videoSearchQueries: ['Desktop Explorer download Steam'],
    tags: ['Official download', 'Steam', 'Safety'],
    relatedRoutes: [
      '/guides/release-price-platforms',
      '/system-requirements',
      '/guides/demo-vs-full-game',
      '/review',
    ],
    body: [
      {
        heading: 'Use the official full-game listing',
        paragraphs: [
          'The official full game is Steam App 2527160. Open the Steam listing, confirm the title Desktop Explorer and developer Recurring Dream, then install through the Steam client.',
          'This site does not host game files, installers, cracks, torrents or APKs. Desktop Explorer is a Windows and macOS computer game; an “Android APK” result is not the official product described by Steam.',
        ],
      },
      {
        heading: 'Distinguish the demo',
        paragraphs: [
          'The separate demo is Steam App 2533590. It can be useful for testing the premise, but its scope and save behavior should not be treated as the complete July 17 release.',
          'Verify the App ID in the URL before troubleshooting missing profiles or achievements. A player following a full-game walkthrough while running the demo will eventually reach content that does not exist in that build.',
        ],
      },
      {
        heading: 'Protect saves and purchases',
        paragraphs: [
          'Use Steam Cloud where available and wait for synchronization before switching computers. Keep enough free storage for updates even though the listed install size is small.',
          'Regional price, sale status and refund terms can change. Review them on Steam at checkout. The official Recurring Dream website is useful for studio information, but Steam is the purchase and installation authority.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Desktop Explorer?',
        answer: 'From its official Steam App 2527160 page.',
      },
      {
        question: 'Is there an official Desktop Explorer APK?',
        answer:
          'No official Android release is listed; Steam currently lists Windows and macOS.',
      },
      {
        question: 'Where is the demo?',
        answer: 'The official demo is Steam App 2533590.',
      },
    ],
  },
  {
    ...base,
    slug: 'review',
    path: '/review',
    title: 'Desktop Explorer Review: Should You Play It?',
    seoTitle: 'Desktop Explorer Review: Puzzle Design, Length & Warnings',
    seoDescription:
      'A spoiler-light Desktop Explorer review covering its faux-1990s desktop puzzles, file-manipulation design, pacing, accessibility and content warnings.',
    summary:
      'A spoiler-light fit check for players who enjoy interface mysteries, deliberate reading and puzzles built from normal computer actions.',
    category: 'Review',
    difficulty: 'Spoiler-light',
    coverImageUrl: '/desktop-explorer/screenshots/0.jpg',
    sourceStrategy: 'official_and_developer',
    sourceNotes:
      'The review is based on the official design premise, store features and verified puzzle vocabulary; volatile score claims are omitted.',
    videoSearchQueries: [
      'Desktop Explorer review',
      'Desktop Explorer gameplay',
    ],
    tags: ['Review', 'Spoiler-light', 'Content warning'],
    relatedRoutes: [
      '/guides/beginner-spoiler-light-hints',
      '/guides/release-price-platforms',
      '/system-requirements',
      '/download',
    ],
    body: [
      {
        heading: 'The best idea is also the whole game',
        paragraphs: [
          'Desktop Explorer turns a faux 1990s computer into a layered mystery. Files, websites, chat logs, source code and damaged applications are not decoration around the puzzle; they are the puzzle. Ordinary actions such as renaming, resizing, sorting and compressing become a compact vocabulary the game can remix.',
          'That makes discoveries feel earned when a clue suddenly changes the meaning of a familiar interface. It also means the experience depends on careful reading. A player looking for fast action or conventional rooms may find the pace slow, while someone who enjoys poking at every icon can settle into it immediately.',
        ],
      },
      {
        heading: 'Who will enjoy it',
        paragraphs: [
          'It is a strong fit for fans of interface fiction, escape-room logic, computer-history aesthetics and mysteries told through personal digital traces. The best sessions leave enough time to keep windows organized and notice small metadata clues.',
          'It is a weaker fit if you dislike text-heavy investigation, precise mouse interaction or puzzles that deliberately hide information behind system behavior. The game is single-player, so there is no co-op partner to divide clue reading.',
        ],
        bullets: [
          'Good fit: interface mysteries, escape rooms, file archaeology, 1990s aesthetics',
          'Consider carefully: small text, layered windows, deliberate reading, precise dragging',
        ],
      },
      {
        heading: 'Accessibility and content warning',
        paragraphs: [
          'Steam warns about flashing imagery and photosensitivity. The store also describes mature themes involving depression, suicide, trauma, PTSD, self-harm, family grief and mild gore. Read the full store warning before playing if any of these subjects may be unsafe or unwanted.',
          'The game supports English, Simplified Chinese, Latin American Spanish and Traditional Chinese interface/subtitle text. Because visual window manipulation is central, readable scaling and a comfortable pointing device matter more than raw hardware power.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Desktop Explorer a horror game?',
        answer:
          'It is primarily a computer-interface mystery/puzzle game, but it includes dark mature themes and mild gore described on Steam.',
      },
      {
        question: 'Is Desktop Explorer multiplayer?',
        answer: 'No. Steam lists single-player.',
      },
      {
        question: 'Does it use generative AI content?',
        answer:
          'The Steam disclosure says no generative AI content is present.',
      },
    ],
  },
];

export const featuredGuides = [
  guides[0],
  guides[1],
  guides[2],
  guides[3],
  guides[6],
  guides[10],
].filter((guide): guide is Guide => Boolean(guide));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
