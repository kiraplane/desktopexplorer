import type { Guide, GuideVideo } from './types';

const publishedAt = '2026-07-21';
const updatedAt = '2026-07-23';

const cavePuzzleWalkthrough = {
  id: '8chb_61JDdE',
  title: 'Desktop Explorers - Part 1 | First 10 Puzzles Walkthrough',
  channel: 'Dus10',
  url: 'https://www.youtube.com/watch?v=8chb_61JDdE',
  thumbnailUrl: 'https://i.ytimg.com/vi/8chb_61JDdE/sddefault.jpg',
  publishedAt: '2026-07-18',
  viewCountLabel: 'Focused Cave puzzle walkthrough',
  checkedAt: '2026-08-10',
} satisfies GuideVideo;

export function cavePuzzleVideoAt(startSeconds: number): GuideVideo {
  return {
    ...cavePuzzleWalkthrough,
    url: `${cavePuzzleWalkthrough.url}&t=${startSeconds}s`,
    startSeconds,
  };
}

const commonSourceNotes =
  'The visible-folder numbering and actions were cross-checked against current full-release walkthroughs and the active Steam guide. Some community guides omit the prologue and shift password numbers down by one; each page calls out that alternate count.';

const puzzlePaths = [
  '/guides/puzzle-0-prologue',
  '/guides/puzzle-1-fortuna-solution',
  '/guides/puzzle-2-inanna-solution',
  '/guides/puzzle-3-elephas-solution',
  '/guides/puzzle-4-salve-solution',
  '/guides/puzzle-5-portonus-solution',
  '/guides/puzzle-6-mmtt-solution',
  '/guides/puzzle-7-kassandra-solution',
  '/guides/puzzle-8-rubicon-solution',
  '/guides/puzzle-9-altar-solution',
  '/guides/puzzle-10-beyond-solution',
] as const;

function relatedRoutes(puzzleNumber: number) {
  return [
    '/guides/cave-puzzles-0-10',
    puzzleNumber > 0 ? puzzlePaths[puzzleNumber - 1] : null,
    puzzleNumber < 10 ? puzzlePaths[puzzleNumber + 1] : null,
    '/guides/all-puzzle-solutions-passwords',
  ].filter((route): route is string => Boolean(route));
}

export const cavePuzzleGuides: Guide[] = [
  {
    slug: 'puzzle-0-prologue',
    path: puzzlePaths[0],
    puzzleNumber: 0,
    answerSummary:
      'Choose the Halibut profile and open README.npg to begin. If OpenMe asks for a password before the numbered Cave folders appear, use guppy.',
    title: 'Desktop Explorer Puzzle 0 Prologue Guide',
    seoTitle: 'Desktop Explorer Puzzle 0: Prologue Solution',
    seoDescription:
      'Start Desktop Explorer Puzzle 0 by entering Halibut, opening README.npg and handling the optional OpenMe password prompt without skipping the prologue.',
    summary:
      'Start the Halibut investigation, open the correct desktop note and understand why some walkthroughs call the next Fortuna step Puzzle 0 instead.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/0.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 0 prologue',
      'Desktop Explorer Halibut README',
    ],
    video: cavePuzzleVideoAt(76),
    tags: ['Puzzle 0', 'Prologue', 'Halibut'],
    relatedRoutes: relatedRoutes(0),
    body: [
      {
        heading: 'Enter Halibut and open the desktop note',
        paragraphs: [
          'Select the Halibut profile at the workstation and let the desktop finish loading. Open README.npg before trying to force any of the locked Cave files. The note establishes the first investigation task and points you toward the numbered folder sequence.',
          'If an opening item named OpenMe appears and requests a password, enter guppy. That prompt sits before the main Cave password chain, so do not reuse guppy on the later Fortuna or Inanna files.',
        ],
        bullets: [
          'Profile: Halibut',
          'First file to read: README.npg',
          'OpenMe password, when prompted: guppy',
        ],
      },
      {
        heading: 'Why another guide may call Fortuna Puzzle 0',
        paragraphs: [
          'The game presents a prologue before the numbered password sequence, but several community checklists start counting only after the first locked Cave file. In that alternate count, the Fortuna step is labeled Puzzle 0 and every early password appears one number lower.',
          'This wiki follows the visible-folder sequence: Prologue is Puzzle 0, Fortuna is Puzzle 1 and Inanna is Puzzle 2. Match the filename and objective whenever a number from another walkthrough seems wrong.',
        ],
      },
      {
        heading: 'Fix a prologue that will not advance',
        paragraphs: [
          'Bring README.npg to the front and read through it before closing the window. If the next folder still looks unavailable, close overlapping windows, reopen the note and check the desktop for a newly enabled file or folder.',
          'Do not rapidly submit the same password more than once. The current release has received fixes for password-folder softlocks, so let a submission finish and install the latest Steam update before resetting the save.',
        ],
      },
    ],
    faq: [
      {
        question: 'What do I do in Desktop Explorer Puzzle 0?',
        answer:
          'Choose Halibut, open README.npg and follow the newly exposed Cave route.',
      },
      {
        question: 'What is the OpenMe password?',
        answer: 'Use guppy if the opening OpenMe item requests a password.',
      },
      {
        question: 'Is Fortuna Puzzle 0 or Puzzle 1?',
        answer:
          'The visible-folder count used here calls it Puzzle 1. Guides that omit the prologue may call Fortuna Puzzle 0.',
      },
    ],
  },
  {
    slug: 'puzzle-1-fortuna-solution',
    path: puzzlePaths[1],
    puzzleNumber: 1,
    answerSummary:
      'Open LostOnTheShore.stp and enter fortuna in the password field.',
    title: 'Desktop Explorer Puzzle 1 Fortuna Solution',
    seoTitle: 'Desktop Explorer Puzzle 1 Answer: Fortuna',
    seoDescription:
      'Solve Desktop Explorer Puzzle 1 Go In by opening LostOnTheShore.stp and entering the Fortuna password, with help for shifted guide numbering.',
    summary:
      'The first Cave password step: locate LostOnTheShore.stp, use fortuna and avoid the common Puzzle 0 versus Puzzle 1 numbering mismatch.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/1.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 1 fortuna',
      'Desktop Explorer LostOnTheShore password',
    ],
    video: cavePuzzleVideoAt(286),
    tags: ['Puzzle 1', 'Fortuna', 'Go In'],
    relatedRoutes: relatedRoutes(1),
    body: [
      {
        heading: 'Open the Go In puzzle file',
        paragraphs: [
          'Enter the first numbered Cave folder and open LostOnTheShore.stp. This is the locked steganography-style file that begins the named password chain; the answer belongs in this file rather than in the earlier OpenMe prompt.',
          'Click the password field, type fortuna and submit once. Wait for the folder state to change before opening or moving another window.',
        ],
        bullets: [
          'Target file: LostOnTheShore.stp',
          'Password: fortuna',
          'Next visible puzzle: Ancient Ruins',
        ],
      },
      {
        heading: 'Use the filename when numbering differs',
        paragraphs: [
          'A popular community count calls this Puzzle 0 because it begins with the first password and ignores the prologue. The released game’s visible progression can instead place it at Puzzle 1 after the workstation introduction.',
          'If you are looking at LostOnTheShore.stp, fortuna is the correct answer regardless of whether a guide labels the step 0 or 1.',
        ],
      },
      {
        heading: 'If fortuna is rejected',
        paragraphs: [
          'Remove leading or trailing spaces and confirm that the active window is LostOnTheShore.stp. Do not type guppy here; guppy belongs only to the earlier OpenMe prompt.',
          'Submit once and give the interface time to respond. If the password folder stops reacting, update through Steam and reopen the Cave folder before considering a save reset.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Puzzle 1 password?',
        answer: 'The LostOnTheShore.stp password is fortuna.',
      },
      {
        question: 'Why does another guide list fortuna as Puzzle 0?',
        answer:
          'That guide starts counting at the first password and omits the prologue. Match the LostOnTheShore filename instead of the number.',
      },
    ],
  },
  {
    slug: 'puzzle-2-inanna-solution',
    path: puzzlePaths[2],
    puzzleNumber: 2,
    answerSummary:
      'Open long_scroll.npg, scroll all the way to the bottom and enter Inanna.',
    title: 'Desktop Explorer Puzzle 2 Inanna Solution',
    seoTitle: 'Desktop Explorer Puzzle 2 Answer: Inanna',
    seoDescription:
      'Solve Desktop Explorer Puzzle 2 Ancient Ruins by finding Inanna at the bottom of long_scroll.npg and checking the numbering mismatch.',
    summary:
      'Find the word hidden below the visible portion of the long note, then use Inanna to continue through Ancient Ruins.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/2.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 2 Inanna',
      'Desktop Explorer long scroll answer',
    ],
    video: cavePuzzleVideoAt(350),
    tags: ['Puzzle 2', 'Inanna', 'Ancient Ruins'],
    relatedRoutes: relatedRoutes(2),
    body: [
      {
        heading: 'Read beyond the visible part of long_scroll.npg',
        paragraphs: [
          'Open long_scroll.npg inside Ancient Ruins. The clue is not limited to the text visible when the window first opens, so click into the note and move the scrollbar to the true bottom.',
          'The final hidden word is Inanna. Enter it in the matching locked file or password prompt to advance.',
        ],
        bullets: [
          'Clue file: long_scroll.npg',
          'Action: scroll to the bottom',
          'Answer: Inanna',
        ],
      },
      {
        heading: 'Do not mistake the altar entrance for this step',
        paragraphs: [
          'Puzzle 2 later matters again because the route toward the altar connects back to early Cave material. That does not change the immediate Ancient Ruins answer: use Inanna here and continue in order.',
          'When a walkthrough calls Inanna Puzzle 1, it is using the password-only count. The long_scroll.npg filename is the reliable landmark.',
        ],
      },
      {
        heading: 'Reveal a word that still looks missing',
        paragraphs: [
          'Enlarge the note window if the scrollbar or final line is clipped. Click the text area before using the mouse wheel, because scrolling an unfocused background window may move a different file instead.',
          'If Inanna fails, check the spelling and current prompt. The capital letter is useful for readability, but the more common failure is entering the right word in the wrong window.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Puzzle 2 answer?',
        answer: 'Scroll to the bottom of long_scroll.npg and use Inanna.',
      },
      {
        question: 'Where is Inanna hidden?',
        answer:
          'It appears at the bottom of the long note in the Ancient Ruins step.',
      },
    ],
  },
  {
    slug: 'puzzle-3-elephas-solution',
    path: puzzlePaths[3],
    puzzleNumber: 3,
    answerSummary:
      'Open wide_papyrus_strip.npg, enable Word Wrap, resize the window until an elephant appears and enter Elephas.',
    title: 'Desktop Explorer Puzzle 3 Elephas Solution',
    seoTitle: 'Desktop Explorer Puzzle 3 Answer: Elephas',
    seoDescription:
      'Solve Desktop Explorer Puzzle 3 Narrow Tunnel by using Word Wrap and resizing wide_papyrus_strip.npg to reveal the Elephas answer.',
    summary:
      'Turn the wide strip into a readable shape with Word Wrap and window resizing, then submit the elephant-related answer Elephas.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/3.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 3 Elephas',
      'Desktop Explorer Narrow Tunnel word wrap',
    ],
    video: cavePuzzleVideoAt(420),
    tags: ['Puzzle 3', 'Elephas', 'Word Wrap'],
    relatedRoutes: relatedRoutes(3),
    body: [
      {
        heading: 'Turn on Word Wrap in the papyrus note',
        paragraphs: [
          'Open wide_papyrus_strip.npg in Narrow Tunnel and use the Format menu to enable Word Wrap. The line is intentionally too wide to communicate its clue in the default window shape.',
          'Narrow and resize the note until the wrapped text forms an elephant-like silhouette. The image points to the password Elephas.',
        ],
        bullets: [
          'File: wide_papyrus_strip.npg',
          'Menu action: Format → Word Wrap',
          'Resize target: elephant shape',
          'Answer: Elephas',
        ],
      },
      {
        heading: 'Match the shape rather than guessing synonyms',
        paragraphs: [
          'The puzzle is demonstrating that window layout is part of the evidence. Keep adjusting width instead of searching other folders for a written password or trying ordinary words such as elephant.',
          'Elephas is the required form. If your guide labels Elephas as Puzzle 2, it has omitted the prologue from its numbering.',
        ],
      },
      {
        heading: 'Fix a strip that will not wrap',
        paragraphs: [
          'Confirm that Word Wrap has a check mark, then drag the side edge of the note inward. Moving the whole window does not change line length; you must change its width.',
          'If the text remains on one line, close and reopen wide_papyrus_strip.npg and enable Word Wrap again. Submit Elephas only after returning to the correct password prompt.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Puzzle 3 answer?',
        answer: 'The answer is Elephas.',
      },
      {
        question: 'How do I reveal the elephant?',
        answer:
          'Enable Format → Word Wrap in wide_papyrus_strip.npg and make the window narrower.',
      },
    ],
  },
  {
    slug: 'puzzle-4-salve-solution',
    path: puzzlePaths[4],
    puzzleNumber: 4,
    answerSummary:
      'Open detective_memories.stp, choose View Source Code and read the final paragraph. The answer is Salve.',
    title: 'Desktop Explorer Puzzle 4 Salve Solution',
    seoTitle: 'Desktop Explorer Puzzle 4 Answer: Salve',
    seoDescription:
      'Solve Desktop Explorer Puzzle 4 Crossroads by opening detective_memories.stp source code and finding the Salve password in the final paragraph.',
    summary:
      'Inspect the underlying source instead of the rendered story page to find Salve, the answer currently driving the strongest numbered-puzzle search demand.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/4.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 4 Salve',
      'Desktop Explorer Crossroads source code',
    ],
    video: cavePuzzleVideoAt(501),
    tags: ['Puzzle 4', 'Salve', 'Source Code'],
    relatedRoutes: relatedRoutes(4),
    body: [
      {
        heading: 'Inspect detective_memories.stp source code',
        paragraphs: [
          'Open detective_memories.stp in Crossroads. Reading only the rendered page leaves the important clue hidden, so use the file’s View Source Code command.',
          'Move to the final paragraph of the source and read the concealed word. Enter Salve in the password prompt to complete the step.',
        ],
        bullets: [
          'File: detective_memories.stp',
          'Command: View Source Code',
          'Location: final paragraph',
          'Answer: Salve',
        ],
      },
      {
        heading: 'Use the source view, not ordinary page text',
        paragraphs: [
          'Storyblock files can contain clues that never appear in the normal rendered window. Do not keep resizing the page or searching its visible prose once the clue points toward code; the answer is deliberately stored underneath the presentation layer.',
          'Some password-only walkthroughs call Salve Puzzle 3. If your current file is detective_memories.stp in Crossroads, this is the same step covered here as visible Puzzle 4.',
        ],
      },
      {
        heading: 'If View Source Code does not reveal Salve',
        paragraphs: [
          'Make sure you opened the source for detective_memories.stp rather than a nearby Notepage file. Scroll to the bottom of the source editor and widen it enough to read the last paragraph without clipping.',
          'Return to the active Crossroads prompt before submitting. Type Salve without extra spaces and wait for the folder to react before clicking again.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Puzzle 4 answer?',
        answer: 'The answer is Salve.',
      },
      {
        question: 'Where do I find Salve?',
        answer:
          'Open detective_memories.stp, select View Source Code and inspect the final paragraph.',
      },
      {
        question: 'Why does another guide call this Puzzle 3?',
        answer:
          'That guide does not count the prologue. Match the Crossroads label and detective_memories.stp filename.',
      },
    ],
  },
  {
    slug: 'puzzle-5-portonus-solution',
    path: puzzlePaths[5],
    puzzleNumber: 5,
    answerSummary:
      'Align the left and right rune images to read RENAMEIT, rename key.err to key.img, then open it and enter PORTONUS.',
    title: 'Desktop Explorer Puzzle 5 PORTONUS Solution',
    seoTitle: 'Desktop Explorer Puzzle 5 Answer: PORTONUS',
    seoDescription:
      'Solve Desktop Explorer Puzzle 5 Big Door by reading RENAMEIT, changing key.err to key.img and using the PORTONUS password.',
    summary:
      'Combine the two door clues, repair the key by changing its extension and reveal the PORTONUS password.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/0.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 5 PORTONUS',
      'Desktop Explorer Big Door key err',
    ],
    video: cavePuzzleVideoAt(530),
    tags: ['Puzzle 5', 'PORTONUS', 'File Extension'],
    relatedRoutes: relatedRoutes(5),
    body: [
      {
        heading: 'Align the two door rune images',
        paragraphs: [
          'Open the Left Door and Right Door folders and bring their rune images together. Their combined instruction reads RENAMEIT, which tells you to repair the broken key file rather than search for a separate physical key.',
          'Locate key.err and rename its extension to key.img. Open the repaired image to reveal PORTONUS, then enter that word at the Big Door prompt.',
        ],
        bullets: [
          'Rune instruction: RENAMEIT',
          'Rename: key.err → key.img',
          'Password: PORTONUS',
        ],
      },
      {
        heading: 'Change the extension instead of adding a second one',
        paragraphs: [
          'The useful part of the filename is the suffix after the final dot. Replace .err with .img; a name such as key.err.img may leave the original error extension in place depending on how the interface handles filenames.',
          'After renaming, reopen the folder if the icon does not refresh. The resulting image carries the answer, so the operation itself is part of the solution.',
        ],
      },
      {
        heading: 'Resolve the Puzzle 4 versus Puzzle 5 mismatch',
        paragraphs: [
          'Community password lists often label PORTONUS as Puzzle 4 because they begin at Fortuna and skip the prologue. The visible-folder route used here calls Big Door Puzzle 5.',
          'Use the landmarks RENAMEIT and key.err to identify the step. If those are on screen, PORTONUS is the correct answer regardless of the number shown in another guide.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Puzzle 5 answer?',
        answer: 'The Big Door password is PORTONUS.',
      },
      {
        question: 'What should key.err be renamed to?',
        answer: 'Rename key.err to key.img, then open the repaired image.',
      },
    ],
  },
  {
    slug: 'puzzle-6-mmtt-solution',
    path: puzzlePaths[6],
    puzzleNumber: 6,
    answerSummary:
      'Open etched_walls.img Properties, switch to Details and read the Author field. The answer is MMTT.',
    title: 'Desktop Explorer Puzzle 6 MMTT Solution',
    seoTitle: 'Desktop Explorer Puzzle 6 Answer: MMTT',
    seoDescription:
      'Solve Desktop Explorer Puzzle 6 Lights Out by checking etched_walls.img Properties and using the MMTT value from its Author metadata.',
    summary:
      'Read the metadata hidden behind the etched wall image instead of interpreting only the picture, then enter MMTT.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/1.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 6 MMTT',
      'Desktop Explorer etched walls author',
    ],
    video: cavePuzzleVideoAt(664),
    tags: ['Puzzle 6', 'MMTT', 'Metadata'],
    relatedRoutes: relatedRoutes(6),
    body: [
      {
        heading: 'Open the etched wall image properties',
        paragraphs: [
          'Find etched_walls.img in Lights Out and open its Properties window. The image content is a distraction from the system information attached to the file.',
          'Select the Details view and locate the Author field. It contains MMTT, which is the password for this step.',
        ],
        bullets: [
          'File: etched_walls.img',
          'Open: Properties → Details',
          'Metadata field: Author',
          'Answer: MMTT',
        ],
      },
      {
        heading: 'Read metadata rather than the visible wall',
        paragraphs: [
          'Desktop Explorer treats properties such as author, size and date as puzzle evidence. If an image has no obvious readable clue, inspect the file record before trying filters or changing the extension.',
          'The four-letter value should be entered as one answer. Do not add spaces between the letters or use the image filename itself.',
        ],
      },
      {
        heading: 'When a guide calls MMTT Puzzle 5',
        paragraphs: [
          'The password-only count places MMTT one number earlier. The visible-folder count includes the prologue, making Lights Out Puzzle 6.',
          'Confirm that you are looking at etched_walls.img and the Author field. Those landmarks are more dependable than a number copied from a different walkthrough.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Puzzle 6 answer?',
        answer: 'The answer is MMTT.',
      },
      {
        question: 'Where is MMTT shown?',
        answer:
          'It is the Author value under Properties → Details for etched_walls.img.',
      },
    ],
  },
  {
    slug: 'puzzle-7-kassandra-solution',
    path: puzzlePaths[7],
    puzzleNumber: 7,
    answerSummary:
      'Enable View → Hidden Files, open engraved_warning.npg and enter Kassandra.',
    title: 'Desktop Explorer Puzzle 7 Kassandra Solution',
    seoTitle: 'Desktop Explorer Puzzle 7 Answer: Kassandra',
    seoDescription:
      'Solve Desktop Explorer Puzzle 7 Dark Sanctum by enabling Hidden Files, reading engraved_warning.npg and entering Kassandra.',
    summary:
      'Expose the file that the normal folder view hides, read its warning and use Kassandra to clear Dark Sanctum.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/2.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 7 Kassandra',
      'Desktop Explorer Dark Sanctum hidden files',
    ],
    video: cavePuzzleVideoAt(769),
    tags: ['Puzzle 7', 'Kassandra', 'Hidden Files'],
    relatedRoutes: relatedRoutes(7),
    body: [
      {
        heading: 'Enable hidden files in Dark Sanctum',
        paragraphs: [
          'Open the folder View menu and enable Hidden Files. The room is meant to look incomplete until the file browser is allowed to show items with the hidden attribute.',
          'Open the newly visible engraved_warning.npg and read it for the required name. Enter Kassandra at the matching prompt.',
        ],
        bullets: [
          'Menu: View → Hidden Files',
          'Revealed file: engraved_warning.npg',
          'Answer: Kassandra',
        ],
      },
      {
        heading: 'Refresh the folder after changing the view',
        paragraphs: [
          'If nothing appears immediately, close the View menu and reopen the Dark Sanctum folder. A hidden icon can also spawn beneath an open window, so move the note and Properties panels out of the way.',
          'Do not rename visible files at random. The intended operation is changing the folder display setting, not altering the clue file.',
        ],
      },
      {
        heading: 'Identify the shifted Puzzle 6 label',
        paragraphs: [
          'Some solution lists call Kassandra Puzzle 6 because their numbering starts with Fortuna at zero. This page uses the in-game sequence that counts the prologue and places Dark Sanctum at Puzzle 7.',
          'The decisive signs are Hidden Files and engraved_warning.npg. If those match your screen, use Kassandra.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Puzzle 7 answer?',
        answer: 'The answer is Kassandra.',
      },
      {
        question: 'How do I find engraved_warning.npg?',
        answer:
          'Enable View → Hidden Files, then reopen or refresh the Dark Sanctum folder.',
      },
    ],
  },
  {
    slug: 'puzzle-8-rubicon-solution',
    path: puzzlePaths[8],
    puzzleNumber: 8,
    answerSummary:
      'Find Rubicon in the stalagmite image details, reveal the hidden Puzzle9_Altar entrance and use Rubicon on that locked item—not in the ordinary Puzzle 8 window.',
    title: 'Desktop Explorer Puzzle 8 Rubicon Solution',
    seoTitle: 'Desktop Explorer Puzzle 8 Answer: Rubicon',
    seoDescription:
      'Solve Desktop Explorer Puzzle 8 Following the Dark by finding Rubicon and locating the hidden Puzzle9_Altar password prompt.',
    summary:
      'Find the Rubicon clue and, more importantly, locate the hidden altar entrance where the password must actually be entered.',
    category: 'Puzzle',
    difficulty: 'Major spoilers',
    coverImageUrl: '/desktop-explorer/screenshots/3.jpg',
    publishedAt,
    updatedAt,
    sourceStrategy: 'community_crosscheck',
    sourceNotes: commonSourceNotes,
    videoSearchQueries: [
      'Desktop Explorer Puzzle 8 Rubicon',
      'Desktop Explorer where to enter Rubicon',
    ],
    video: cavePuzzleVideoAt(804),
    tags: ['Puzzle 8', 'Rubicon', 'Altar Entrance'],
    relatedRoutes: relatedRoutes(8),
    body: [
      {
        heading: 'Find Rubicon in the stalagmite details',
        paragraphs: [
          'Inspect the stalagmite image and its file details rather than searching the visible cave scene for a typed word. The metadata supplies Rubicon, the password that opens the route into the altar step.',
          'Keep the password ready, but do not assume the current Puzzle 8 window contains the input box. The target is the separate Puzzle9_Altar entrance.',
        ],
        bullets: [
          'Clue location: stalagmite image details',
          'Password: Rubicon',
          'Target: hidden Puzzle9_Altar entrance',
        ],
      },
      {
        heading: 'Reveal where Rubicon must be entered',
        paragraphs: [
          'Enable hidden files and inspect the connected early-Cave material until Puzzle9_Altar becomes available. Open that locked item and enter Rubicon there. Typing it into an unrelated Puzzle 8 file will not advance the route.',
          'This separation between finding the word and finding its destination is why players often know Rubicon but still cannot continue. Follow the altar filename rather than looking for another ordinary answer field.',
        ],
      },
      {
        heading: 'Prepare the altar stones before moving on',
        paragraphs: [
          'Puzzle 9 needs three flat stone images gathered across the Cave, including material connected with Puzzles 6 and 8. Keep those files available instead of deleting or permanently moving them.',
          'After Rubicon unlocks the altar, continue to the dedicated Puzzle 9 guide for the Large, Medium and Small stacking order.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Desktop Explorer Puzzle 8 answer?',
        answer: 'The password is Rubicon.',
      },
      {
        question: 'Where do I enter Rubicon?',
        answer:
          'Use it on the hidden Puzzle9_Altar entrance, not in an unrelated Puzzle 8 window.',
      },
      {
        question: 'Why can I not see the altar entrance?',
        answer:
          'Enable hidden files and revisit the connected Cave folders until Puzzle9_Altar is visible.',
      },
    ],
  },
];
