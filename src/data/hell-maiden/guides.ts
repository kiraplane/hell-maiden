import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-07-17';

function localVideo(
  id: string,
  title: string,
  channel: string,
  thumbnailUrl: string,
  publishedAt: string,
  viewCountLabel: string
): GuideVideo {
  return {
    id,
    title,
    channel,
    url: `https://www.youtube.com/watch?v=${id}`,
    thumbnailUrl,
    publishedAt,
    viewCountLabel,
    checkedAt,
  };
}

const videos = {
  beginner: localVideo(
    'T49SzQwlhyw',
    'Combine HUNDREDS of Spells in this INSANE Survival Roguelite! - Hell Maiden',
    'Gohjoe',
    '/hell-maiden/guides/beginner.jpg',
    '2025-10-15',
    '270K+ views when checked'
  ),
  cards: localVideo(
    'cXfT1_u0Htw',
    'This Stylish Deckbuilding Survivor Is INSANELY Good | Hell Maiden',
    'Church The Green',
    '/hell-maiden/guides/cards.jpg',
    '2025-11-01',
    '1.7K+ views when checked'
  ),
  builds: localVideo(
    'Lh8nab89jp0',
    'The Blazing Quill Is Actually The MOST BROKEN! | Hell Maiden',
    'Church The Green',
    '/hell-maiden/guides/builds.jpg',
    '2025-11-15',
    '1.1K+ views when checked'
  ),
  minos: localVideo(
    'XF0uZYx-pcI',
    'Beating the Queen of the Underworld in Hell Maiden',
    'LeroyTheKing',
    '/hell-maiden/guides/minos.jpg',
    '2025-11-01',
    '660+ views when checked'
  ),
  demo: localVideo(
    'q55HHtfivL4',
    'Hell Maiden - Full Demo',
    'Nir',
    '/hell-maiden/guides/demo.jpg',
    '2025-10-15',
    '3.2K+ views when checked'
  ),
  release: localVideo(
    'Z43f0VYhNv8',
    'Hell Maiden | Release Date Trailer',
    'AstralShift',
    '/hell-maiden/guides/release.jpg',
    '2026-06-23',
    '368K+ views when checked'
  ),
  soundtrack: localVideo(
    'nKmHUQIUzmM',
    'Hell Maiden | Opening “Not My Paradiso”',
    'AstralShift & Mili',
    '/hell-maiden/guides/soundtrack.jpg',
    '2026-07-15',
    '21K+ views during launch-day check'
  ),
  gameplay: localVideo(
    '90EaQ4buCC8',
    'Hell Maiden | Gameplay Trailer',
    'AstralShift',
    '/hell-maiden/guides/gameplay.jpg',
    '2025-05-23',
    '137K+ views when checked'
  ),
} as const;

export const guides: Guide[] = [
  {
    slug: 'early-access-patch-0-2-31',
    path: '/guides/early-access-patch-0-2-31',
    title: 'Hell Maiden Early Access Patch 0.2.31',
    seoTitle: 'Hell Maiden Patch 0.2.31 - Fixes & Balance Changes',
    seoDescription:
      'See what Hell Maiden Early Access patch 0.2.31 fixes, including Libicocco progression, language settings, Virgil, Minos and a DirectX 11 launch option.',
    summary:
      'The first Early Access hotfix removes a Libicocco progression blocker, repairs language and visual issues, adjusts Virgil and Minos, and adds a DirectX 11 beta launch option.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/hell-maiden/guides/release.jpg',
    publishedAt: '2026-07-17',
    updatedAt: '2026-07-17',
    sourceStrategy: 'official',
    sourceNotes:
      'Summarized from the official July 16 Steam hotfix announcement for version 0.2.31.',
    videoSearchQueries: [
      'Hell Maiden 0.2.31 patch',
      'Hell Maiden Early Access hotfix',
    ],
    tags: ['Early Access', 'Patch notes', 'Troubleshooting'],
    relatedRoutes: [
      '/guides/demo-vs-early-access',
      '/guides/minos-boss-guide',
      '/guides/poets-of-limbo',
      '/steam-deck',
    ],
    body: [
      {
        heading: 'The progression blocker is fixed',
        paragraphs: [
          'Version 0.2.31 fixes a game-breaking case where progression could stop after Libicocco was defeated during her clone attack. Update and restart the game before retrying the encounter. Preserve the existing save until the next progression step has loaded successfully.',
          'The patch also removes cases where Horace’s carriage remained on screen after use. This is a display-state fix and should not require a fresh run.',
        ],
      },
      {
        heading: 'Language and visual fixes',
        paragraphs: [
          'Virgil’s Ultimate splash screen no longer shows white squares in Portuguese (Portugal), and Settings tab labels should now update when the selected language changes. Players who changed language in an older session should reopen Settings after restarting the patched build.',
          'These notes apply to the paid Early Access client. The demo is a separate Steam app and should not be assumed to share the same version number.',
        ],
      },
      {
        heading: 'Virgil and Minos balance changes',
        paragraphs: [
          'Virgil’s Curse card, Curse of Dido, now guarantees at least one projectile. Minos is less likely to repeat the same attack several times in quick succession, creating more variation in her pattern.',
          'The patch changes consistency rather than replacing either system. Build advice should still prioritize a coherent damage plan and safe movement, while Minos practice should focus on reading the current sequence instead of memorizing repeated attacks from older footage.',
        ],
      },
      {
        heading: 'DirectX 11 beta for GPU crashes',
        paragraphs: [
          'The update adds a DirectX 11 beta launch option for players experiencing GPU crashes. Use the official Steam launch choice rather than adding unofficial command files. If DX11 helps, record the GPU model, driver version and where the original crash occurred before reporting the issue.',
          'DirectX 11 is a troubleshooting route, not a promise of better performance on every system. Keep drivers current and return to the normal launch option if the beta path creates new visual or stability problems.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the latest Hell Maiden Early Access patch?',
        answer:
          'Version 0.2.31 is the first launch hotfix covered here, published on July 16, 2026.',
      },
      {
        question: 'Did Hell Maiden fix the Libicocco progression bug?',
        answer:
          'Yes. Patch 0.2.31 fixes progression stopping after Libicocco is defeated during her clone attack.',
      },
      {
        question: 'How do I try DirectX 11 in Hell Maiden?',
        answer:
          'Choose the DirectX 11 beta option from the official Steam launch dialog after installing patch 0.2.31.',
      },
    ],
  },
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Hell Maiden Beginner Guide: Your First Successful Runs',
    seoTitle: 'Hell Maiden Beginner Guide - First Runs, Cards & Minos',
    seoDescription:
      'Start Hell Maiden with a clear run plan: movement, card choices, merging, rerolls, upgrades and preparation for the Limbo boss.',
    summary:
      'Treat the opening runs as information gathering: stay mobile, build one coherent damage plan and save scarce decisions for the problems your hand actually has.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: '/hell-maiden/guides/beginner.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Broad demo gameplay cross-checked against the current Steam scope and official Spirit Card documentation. Exact balance may change in Early Access.',
    videoSearchQueries: [
      'Hell Maiden beginner guide',
      'Hell Maiden gameplay walkthrough',
      'Hell Maiden first run',
    ],
    video: videos.beginner,
    tags: ['First run', 'Movement', 'Deck plan'],
    relatedRoutes: [
      '/cards',
      '/guides/best-builds',
      '/guides/minos-boss-guide',
      '/guides/demo-vs-early-access',
    ],
    body: [
      {
        heading: 'Win the first minute before planning the final build',
        paragraphs: [
          'Hell Maiden looks like a passive bullet-heaven game, but the opening asks for active aiming, deliberate movement and a safe dash rhythm. Your first objective is not maximum damage on a spreadsheet. It is creating enough space to keep collecting experience without being boxed in. Aim through dense lanes, move around the outside of a pack instead of backing into unexplored space, and use the dash to cross danger rather than as a permanent movement button.',
          'A run becomes easier when every choice solves the next visible problem. If normal enemies are surrounding you, add reliable area coverage. If elites survive too long, improve focused damage or a status interaction. If you cannot collect experience safely, value reach, attack size, movement windows or pickup support. This approach prevents a common beginner failure: choosing three exciting but incompatible effects while the basic hand still cannot control the screen.',
        ],
        bullets: [
          'Keep a route around the pack; do not let the map edge become a surprise wall.',
          'Dash through a committed danger pattern, not into the next unscouted group.',
          'Read all three card choices before taking the first obvious damage increase.',
          'Use the live tooltip as the authority when a demo guide shows different values.',
        ],
      },
      {
        heading: 'Give every Weapon Card a job',
        paragraphs: [
          'Weapon Cards define attacks, while Mod Cards change how those attacks behave. Think in jobs: one weapon can clear nearby pressure, one can reach priority targets, one can carry a status package, and one can cover a gap. You do not need four unrelated stars. You need a hand whose jobs overlap enough that a bad roll does not collapse the run. A modest weapon with two compatible mods is often more useful than a rare-looking weapon with no support.',
          'Position matters because some modifiers affect adjacent weapons or cards to one side. Pause on the selection screen and rearrange before committing. If a spread modifier helps cards to the right, place the most important beneficiaries there; if an effect is strongest on frequent hits, do not attach it blindly to a slow attack. The card screen is where the build is made. The combat screen only reveals whether those decisions worked.',
        ],
      },
      {
        heading: 'Merge with a purpose and protect rerolls',
        paragraphs: [
          'Duplicate Mod Cards can become stronger through merging, but a merge is not automatically the best use of a roll. First ask whether the upgraded effect solves a real bottleneck and whether moving the card would improve more weapons. The safest beginner pattern is to strengthen one damage engine while keeping enough coverage to survive. Chasing a perfect maximum-level mod too early can leave the rest of the hand starved.',
          'Rerolls are valuable because they repair a broken choice set, not because the first option is merely imperfect. Save them for compulsory Weapon Card moments, a missing piece that completes an established interaction, or a late decision where all options actively damage the plan. When you spend rerolls casually, the game can force a poor weapon into a nearly full hand later. Early Access may adjust reroll rules, so confirm the count in the current run instead of memorizing a demo number.',
        ],
      },
      {
        heading: 'Prepare for the boss during the run',
        paragraphs: [
          'Limbo ends with Queen Minos, and a hand that only erases weak enemies can stall when a durable target arrives. Before the final stretch, check whether at least one weapon can keep dealing damage while you move. Preserve a dependable dash window, avoid building entirely around effects that trigger only on kills, and enter the arena with a plan for where your eyes will focus: first on telegraphs and safe ground, then on damage uptime.',
          'Failure is useful when you diagnose one cause. If the screen overwhelmed you before Minos, improve routing and crowd control. If Minos survived while you stayed safe, improve focused damage. If you dealt enough damage but lost to a pattern, the boss guide is the next page—not a total rebuild. This keeps progression efficient and stops every loss from turning into random card experimentation.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I prioritize first in Hell Maiden?',
        answer:
          'Prioritize safe experience collection and reliable screen control. Add focused boss damage after the hand can keep normal waves away.',
      },
      {
        question: 'Should I reroll early card choices?',
        answer:
          'Usually only when every option conflicts with the build or a compulsory Weapon Card would permanently fill the wrong job. Save rerolls for high-impact repairs.',
      },
      {
        question: 'Do cards carry between runs?',
        answer:
          'The documented run system builds a fresh combat hand each attempt. Persistent unlocks can expand future options, but the current client should be checked for Early Access changes.',
      },
    ],
  },
  {
    slug: 'cards',
    path: '/cards',
    title: 'Hell Maiden Cards Guide: Weapons, Mods, Merging and Positioning',
    seoTitle: 'Hell Maiden Cards Guide - Weapon Cards, Mods & Merging',
    seoDescription:
      'Understand Hell Maiden Spirit Cards: Weapon and Mod roles, hand positioning, merging, rerolls, status effects and safer build decisions.',
    summary:
      'Spirit Cards reward arrangement, not just rarity. Build around attack jobs, compatible modifiers and positional effects that improve the whole hand.',
    category: 'Cards',
    difficulty: 'Beginner',
    coverImageUrl: '/hell-maiden/guides/cards.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Official Steam description plus official-wiki Spirit Card documentation, with demo values treated as changeable.',
    videoSearchQueries: [
      'Hell Maiden cards guide',
      'Hell Maiden deck building',
      'Hell Maiden Weapon Cards Mod Cards',
    ],
    video: videos.cards,
    tags: ['Weapon Cards', 'Mod Cards', 'Merging'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/best-builds',
      '/guides/poets-of-limbo',
      '/guides/minos-boss-guide',
    ],
    body: [
      {
        heading: 'Weapon Cards decide what happens; Mod Cards decide how',
        paragraphs: [
          'Every useful hand starts by separating the two card roles. A Weapon Card creates an attack or ability. A Mod Card changes a weapon through raw stats, status effects, attack geometry or relationships with other positions in the hand. The official Early Access description centers this system: choose Spirit Cards, modify Weapon Cards and reorganize the deck as the run develops. A strong-looking mod without a suitable weapon is only potential; a weapon without support is often only a placeholder.',
          'Assign a combat job before comparing numbers. Close-range attacks can protect the space around Dante, projectiles can reach targets that are unsafe to approach, persistent areas can control a lane, and returning or piercing attacks can reward alignment. Once the job is clear, a mod choice becomes easier. Attack size may matter more for a protective orbit, while speed or projectile interactions may matter more for repeated ranged hits.',
        ],
        bullets: [
          'Weapon Card: creates the attack and usually stays in the hand once chosen.',
          'Boost-style Mod: improves a core stat such as damage, speed or size.',
          'Effect-style Mod: adds an on-hit or on-kill behavior such as Burn, Slow or an explosion.',
          'Spread/position Mod: improves neighboring cards or cards on a specified side.',
          'Curse-style Mod: offers a large benefit with a meaningful cost; read both halves.',
        ],
      },
      {
        heading: 'Build a hand, not four separate weapons',
        paragraphs: [
          'The documented demo system holds four Weapon Cards, including the selected signature weapon, and supports multiple Mod Cards on each weapon. That structure makes card order part of the build. A modifier that boosts weapons to the right should sit before its best targets. An adjacent effect should touch the two weapons that gain the most. Rearranging on the choice screen is not cosmetic housekeeping; it is a free optimization step before combat resumes.',
          'Use the whole-hand test after every major pick. Can the hand clear close pressure? Can it damage an elite while moving? Does it have an interaction worth upgrading? Is one weapon consuming mods without returning useful coverage? If one answer is no, the next card should repair that gap. This is more stable than choosing every gold-framed or high-damage card and hoping the final arrangement becomes coherent by itself.',
        ],
      },
      {
        heading: 'Merge duplicates when the upgraded effect remains relevant',
        paragraphs: [
          'The documented system lets duplicate Mod Cards merge into higher levels. Merging compresses power into one slot and can create a much stronger effect, but it also concentrates the build. A damage mod on the main engine is a straightforward merge target. A niche utility card may be better left flexible until the next weapon is known. Always compare the gain from one upgraded card with the loss of having two separate applications.',
          'Do the placement work before accepting the next choice. Move compatible duplicates together, check which weapons glow as valid targets and make sure a positional mod still points the correct way after a merge. Early Access can change values, rarity and availability, but this decision rule survives patches: improve the card that advances the hand plan, not the card that merely has the brightest border.',
        ],
      },
      {
        heading: 'Use status packages instead of isolated status cards',
        paragraphs: [
          'Burn, poison, slow, explosions and critical effects become meaningful when the weapon can apply them reliably or another card rewards the condition. For example, a bonus against burning enemies needs a dependable Burn source. An on-kill explosion belongs on a weapon that actually secures frequent kills. A slow effect can create safety even if its damage number is modest, especially when it keeps a boss or elite inside another persistent attack.',
          'Avoid mixing several low-chance effects just to collect labels. Choose one primary damage idea and one defensive or control idea, then reinforce them. If the current client changes a named card from its demo behavior, preserve the logic and replace the component: reliable application first, payoff second, then raw amplification. That turns a fragile copied build into a plan you can repair during imperfect rolls.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the difference between Weapon Cards and Mod Cards?',
        answer:
          'Weapon Cards create attacks. Mod Cards change a selected weapon or affect other cards through stats, status effects and positional rules.',
      },
      {
        question: 'Can I rearrange cards in Hell Maiden?',
        answer:
          'The documented card-selection screen allows rearranging Weapon and Mod Cards. Check the current Early Access interface because rules can evolve.',
      },
      {
        question: 'Should I always merge duplicate Mod Cards?',
        answer:
          'No. Merge when the stronger single effect advances the main plan. Keep separate copies when flexibility or coverage is more valuable.',
      },
    ],
  },
  {
    slug: 'best-builds',
    path: '/guides/best-builds',
    title: 'Hell Maiden Best Builds: A Patch-Safe Build Framework',
    seoTitle: 'Hell Maiden Best Builds - Cards, Status and Boss Damage',
    seoDescription:
      'Build stronger Hell Maiden runs without a fake tier list. Balance crowd clear, boss damage, status packages, card position and survivability.',
    summary:
      'The best Early Access build is the one your current rolls can complete: one damage engine, one coverage layer, one boss answer and no wasted positional mods.',
    category: 'Builds',
    difficulty: 'Intermediate',
    coverImageUrl: '/hell-maiden/guides/builds.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Blazing Quill demo build used as an example; named values and rankings are intentionally not frozen as Early Access truth.',
    videoSearchQueries: [
      'Hell Maiden best build',
      'Hell Maiden Blazing Quill build',
      'Hell Maiden card build guide',
    ],
    video: videos.builds,
    tags: ['Builds', 'Status', 'Boss damage'],
    relatedRoutes: [
      '/cards',
      '/guides/beginner-guide',
      '/guides/minos-boss-guide',
      '/guides/poets-of-limbo',
    ],
    body: [
      {
        heading: 'Use four tests instead of a permanent tier list',
        paragraphs: [
          'Early Access is too young for a trustworthy permanent ranking. Card values, unlock pools and interactions can move, while many public videos cover the demo. A build remains useful when it passes four tests: it clears ordinary waves before they close around Dante, damages a boss while she is moving, gains real value from its Mod Cards, and keeps enough safety to survive imperfect execution. A famous weapon that fails one of those tests in your hand is not the best pick for that run.',
          'Begin with the signature weapon and the first strong interaction the game offers. Then decide whether it is the engine or support. If it is the engine, route compatible damage, speed, size or status payoff into it. If it is support, stop overinvesting after it performs its job. This prevents a common trap where every weapon receives one average mod and none becomes strong enough to carry the difficult part of the run.',
        ],
      },
      {
        heading: 'Blazing Quill works when close-range risk is paid back',
        paragraphs: [
          'Blazing Quill is Dante’s documented signature weapon and a natural center for an aggressive build example. Close-range attacks demand better movement and positioning, so the payoff must be reliable damage, wide coverage or a status package that clears the space you enter. Damage and attack-size improvements are easy to understand; Burn becomes more interesting when another effect rewards burning enemies rather than existing as a decorative extra.',
          'Do not copy a demo loadout card for card. Preserve the structure: a close-range main engine, a ranged or persistent backup for targets you cannot safely hug, an answer to dense waves, and at least one modifier that scales the whole plan. If the live client changes a named card, replace it with the same job. This makes the build resilient to patches and to the random pool inside each run.',
        ],
        bullets: [
          'Engine: the weapon receiving the highest-value compatible mods.',
          'Coverage: an attack that reaches where the engine cannot.',
          'Control: slow, area denial, knockback-like safety or fast wave clearing.',
          'Boss answer: damage that remains active while you dodge patterns.',
        ],
      },
      {
        heading: 'Build status effects as a two-part package',
        paragraphs: [
          'A status build needs an applicator and a payoff. High hit frequency can make an on-hit status reliable; a slow persistent field can keep enemies inside another attack; Burn can become a damage plan when a second mod amplifies hits against burning targets. Without the payoff, the status may be useful control but should not consume every upgrade. Without reliable application, the payoff card becomes dead weight.',
          'Watch trigger language closely. On-kill effects are excellent during waves but can disappear during a boss phase without adds. On-hit effects may scale with hit frequency rather than the displayed damage of one strike. Positional spread effects can multiply value across several weapons, but only if the hand order is correct. The best build screen is therefore not a list of four weapons; it is a diagram of triggers and beneficiaries.',
        ],
      },
      {
        heading: 'Know when to stop improving the engine',
        paragraphs: [
          'An engine is complete when it already solves its job faster than the rest of the hand can support it. If ordinary waves vanish but Minos remains a long fight, the next improvement belongs to boss uptime. If damage is excellent but collecting experience forces dangerous paths, choose safety or reach. If one weapon has three strong mods while another does nothing, replace future support decisions rather than chasing a tiny increase on the already-complete card.',
          'Use losses as a build report. Death before the boss points to routing, coverage or control. Death during a readable pattern points to dash discipline and observation. A safe but very slow boss attempt points to focused damage. Only change the part connected to the loss. Randomly replacing the whole build hides the lesson and makes it harder to identify which interaction actually carried the successful run.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best weapon in Hell Maiden?',
        answer:
          'There is no verified permanent best weapon for the current Early Access build. Judge a weapon by its job, compatible mods and the gap in your current hand.',
      },
      {
        question: 'Is Blazing Quill still strong?',
        answer:
          'It is a documented signature weapon and a proven demo build center, but current values must be checked in the live client before treating it as top tier.',
      },
      {
        question: 'How many status effects should a build use?',
        answer:
          'Usually one reliable primary package is better than several low-chance effects. Add a second only when it supplies a distinct control or damage job.',
      },
    ],
  },
  {
    slug: 'minos-boss-guide',
    path: '/guides/minos-boss-guide',
    title: 'Hell Maiden Minos Boss Guide: Survive the Limbo Finale',
    seoTitle: 'Hell Maiden Minos Boss Guide - Phases, Build & Movement',
    seoDescription:
      'Prepare for Queen Minos in Hell Maiden: build checks, arena movement, phase discipline, dash timing and fixes for common Limbo failures.',
    summary:
      'Minos punishes tunnel vision. Enter with damage that works while moving, keep the center readable and treat every phase transition as a survival check.',
    category: 'Bosses',
    difficulty: 'Intermediate',
    coverImageUrl: '/hell-maiden/guides/minos.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Official-wiki Minos documentation and focused demo footage. Exact Early Access patterns can change.',
    videoSearchQueries: [
      'Hell Maiden Minos boss guide',
      'Hell Maiden Queen Minos fight',
      'Hell Maiden Limbo boss',
    ],
    video: videos.minos,
    tags: ['Minos', 'Limbo', 'Boss'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/best-builds',
      '/cards',
      '/characters',
    ],
    body: [
      {
        heading: 'Reach Minos with a boss-capable hand',
        paragraphs: [
          'Queen Minos is the final boss of Limbo. Demo documentation describes an enclosed arena and a three-phase fight that begins after the stage timer, which means the run before the fight is your preparation period. A hand built entirely around on-kill explosions can look spectacular during waves and then lose its engine when only the boss remains. Carry at least one weapon that deals dependable damage without requiring kills or unsafe stationary play.',
          'Before the transition, identify which attack keeps working while Dante moves. That is the boss engine. Put the best compatible direct modifiers there, then keep one coverage or control weapon for any additional pressure. Damage matters, but a slightly slower hand that lets you read the arena is more reliable than a glass cannon whose effects hide telegraphs and demand constant point-blank contact.',
        ],
      },
      {
        heading: 'Move for information, then for damage',
        paragraphs: [
          'The first goal in every unfamiliar pattern is to see its shape. Keep enough distance to identify where the safe lane will open, then move through that lane with normal movement when possible. Save the dash for a committed crossing, a closing gap or a mistake that cannot be corrected by walking. Repeatedly dashing on cooldown removes your emergency answer and often places Dante at the far side of the arena just as another pattern begins.',
          'Avoid staring at Minos or the damage numbers. Track Dante and the nearest hazard first, the future safe space second and the boss third. Auto-attacking or persistent weapons reward this priority because they keep contributing while you read. A close-range engine can still work, but use short damage windows after a pattern resolves instead of following Minos through every dangerous animation.',
        ],
        bullets: [
          'Enter each new phase near readable open space, not against the arena edge.',
          'Keep one dash available when several telegraphs overlap.',
          'Resume aggressive damage only after identifying the next safe lane.',
          'If visual effects hide danger, reduce effect density or change the support weapon next run.',
        ],
      },
      {
        heading: 'Treat phase transitions as resets',
        paragraphs: [
          'A multi-phase boss changes rhythm. Do not assume the next sequence will preserve the previous spacing, timing or attack order. When a transition begins, stop forcing damage and re-center your attention. Check Dante’s position, the edge of the arena and the direction with the most room. The few seconds lost to observation are cheaper than losing the run to a pattern you never actually read.',
          'If the current Early Access build differs from demo footage, keep the same learning method: name the tell, the danger area and the safe response. A useful boss note is “card raised, delayed area appears, walk out before dashing,” not a memorized timestamp that breaks after a patch. Record one failed pattern at a time and the fight becomes a sequence of small movement tests instead of one chaotic wall.',
        ],
      },
      {
        heading: 'Diagnose the loss before changing cards',
        paragraphs: [
          'A short fight with an early death is usually a movement or visibility problem. A long safe fight that ends to attrition is a damage problem. Failure before Minos is a wave-control or experience-routing problem. These require different fixes. Adding more raw damage to a dash-timing problem makes the next attempt faster but not safer; adding more crowd clear to a single-target problem makes the route cleaner but leaves the boss unchanged.',
          'For movement failures, practice with a hand that deals damage automatically while you watch patterns. For damage failures, consolidate mods on the boss engine and avoid effects that depend on kills. For visibility failures, choose cleaner coverage and keep the arena center in view. Once one attempt reaches the final phase consistently, make only one change per run so you know whether the adjustment helped.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who is the Limbo boss in Hell Maiden?',
        answer:
          'Queen Minos is the documented final boss of Limbo and the Judge of the Damned in the game’s story.',
      },
      {
        question: 'How many phases does Minos have?',
        answer:
          'Official-wiki demo documentation describes three phases. Check current Early Access patch notes and the live fight for changes.',
      },
      {
        question: 'What kind of build is best for Minos?',
        answer:
          'Use damage that remains active while moving, with enough range or persistence to keep uptime during dangerous patterns. Do not rely entirely on on-kill effects.',
      },
    ],
  },
  {
    slug: 'poets-of-limbo',
    path: '/guides/poets-of-limbo',
    title: 'Hell Maiden Poets of Limbo Guide: Decks, Blessings and Unlocks',
    seoTitle: 'Hell Maiden Poets of Limbo Guide - Cards & Unlocks',
    seoDescription:
      'Learn how the Poets of Limbo shape Hell Maiden runs, expand card choices and unlock signature abilities without relying on stale demo routes.',
    summary:
      'Poets are not decorative collectibles: each one broadens the combat vocabulary available to future hands and changes which interactions a run can assemble.',
    category: 'Characters',
    difficulty: 'Reference',
    coverImageUrl: '/hell-maiden/screenshots/6.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Current Steam scope plus official-wiki character/deck pages. No unverified Early Access rescue order is published.',
    videoSearchQueries: [
      'Hell Maiden Poets of Limbo',
      'Hell Maiden poet cards',
      'Hell Maiden character unlocks',
    ],
    tags: ['Poets', 'Unlocks', 'Deck pools'],
    relatedRoutes: [
      '/characters',
      '/cards',
      '/guides/best-builds',
      '/guides/demo-vs-early-access',
    ],
    body: [
      {
        heading: 'Poets expand the decisions available in a run',
        paragraphs: [
          'AstralShift describes the Poets of Limbo as allies Dante rescues and befriends on the climb through Hell. Their combat value is direct: rescued Poets unlock new abilities and perks, ultimate attacks and signature weapons. The Early Access store scope says four Poets are available and each rescued Poet adds five abilities. That means rescue progress changes the future card pool rather than simply filling a lore gallery.',
          'A larger pool is not automatically an easier pool. More options create stronger combinations but also make a specific roll less predictable. Learn what job each Poet’s cards tend to perform, then decide whether a run should lean into that package or use one card as support. The right question is not “which Poet is best?” but “which new deck solves the weakness my current signature weapon has?”',
        ],
      },
      {
        heading: 'Separate confirmed names from assumed rescue order',
        paragraphs: [
          'Official material names Virgil, Homer, Ovid, Horace and Lucan among the classical figures adapted for Hell Maiden, while current wiki pages reflect the demo and pre-release state at different moments. Those sources prove identities, not necessarily the exact order or location in the live Early Access build. Follow the current quest marker and dialogue rather than an old video timestamp when locating a rescue.',
          'Virgil is the guide who accompanies Dante and has a documented signature weapon, Wayfinder. Horace’s documented deck includes spear-themed weapons such as Carpe Diem and Undying Legacy. Other Poets broaden the pool as the story progresses. Use these names to recognize card ownership, but let the live card panel define the actual effects and values after patches.',
        ],
      },
      {
        heading: 'Evaluate a Poet deck by roles and triggers',
        paragraphs: [
          'When a new Poet becomes available, inspect the deck in three passes. First identify the Weapon Cards and the range or geometry they cover. Then identify the Mod Cards that apply status effects or raw stat changes. Finally look for positional language and payoff clauses. This reveals whether the deck can form a complete engine by itself or mainly supports weapons from another Poet.',
          'Do not force every newly unlocked card into the next run. Test one interaction at a time, ideally while keeping a familiar signature weapon. If the new card solves a real gap—such as persistent boss uptime or safer crowd control—keep it. If it duplicates a job the hand already performs, skip it even if it is new. Unlocking broadens choice; it does not remove the need for a coherent four-weapon plan.',
        ],
      },
      {
        heading: 'Use the Forum as the planning checkpoint',
        paragraphs: [
          'The Forum is the documented starting area and level-selection hub. Treat every return as a short planning checkpoint: review new dialogue, confirm which Poet or signature option is active, inspect unlock notifications and choose the next learning goal. This is more efficient than starting another run immediately and discovering halfway through that the card pool changed.',
          'Because Hell Maiden’s narrative advances across repeated attempts, dialogue and rescue context are part of progression. A clean route is therefore: check the Forum, choose a signature and test goal, run the Circle, then return and read what changed. Players focused only on damage can miss the clue that explains why a new card family or interaction has entered the pool.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many Poets of Limbo are in Early Access?',
        answer:
          'The Steam Early Access description states that four Poets of Limbo can be rescued and befriended in the current two-Circle scope.',
      },
      {
        question: 'What does rescuing a Poet unlock?',
        answer:
          'Steam says rescued Poets unlock abilities and perks, ultimate attacks and signature weapons, with five new abilities per rescued Poet.',
      },
      {
        question: 'Is Virgil playable?',
        answer:
          'Dante is the documented player character. Virgil is a guide and Poet whose cards and signature weapon can support Dante’s runs.',
      },
    ],
  },
  {
    slug: 'demo-vs-early-access',
    path: '/guides/demo-vs-early-access',
    title:
      'Hell Maiden Demo vs Early Access: What Changes and What Carries Over',
    seoTitle: 'Hell Maiden Demo vs Early Access - Content & Save Status',
    seoDescription:
      'Compare the free Hell Maiden demo with Early Access: Circles, Poets, abilities, cards, progression and what not to assume about save transfer.',
    summary:
      'The demo is a strong tutorial for Limbo and the card loop, but it is a separate Steam app with a smaller pool and no promised progress transfer.',
    category: 'Status',
    difficulty: 'Status',
    coverImageUrl: '/hell-maiden/guides/demo.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Steam app descriptions are authoritative. Full-demo footage is used only to identify the demo loop.',
    videoSearchQueries: [
      'Hell Maiden full demo',
      'Hell Maiden demo walkthrough',
      'Hell Maiden demo Early Access difference',
    ],
    video: videos.demo,
    tags: ['Demo', 'Early Access', 'Save status'],
    relatedRoutes: [
      '/download',
      '/release-date',
      '/guides/beginner-guide',
      '/cards',
    ],
    body: [
      {
        heading: 'The demo is a separate, smaller Steam app',
        paragraphs: [
          'Hell Maiden Demo uses Steam App ID 4002340, while Early Access uses App ID 3372060. The demo store describes the complete first level, Limbo, with enemies, quests, challenges and the Queen Minos boss. It advertises more than 25 abilities, one Poet of Limbo, six Weapon Cards and ten Mod Cards. That makes it a meaningful sample rather than a short cinematic prologue.',
          'The Early Access store expands the advertised scope to two Circles, four Poets, four signature weapons and more than 40 abilities. It also continues the narrative beyond the demo’s introduction. These numbers explain why a copied demo build may feel different after purchase: the pool, progression context and available combinations are broader even when the basic card language remains familiar.',
        ],
      },
      {
        heading: 'Use the demo to learn decisions that survive patches',
        paragraphs: [
          'Movement, aiming, dash discipline and the distinction between Weapon and Mod Cards are the demo’s most transferable lessons. Practice reading card compatibility, rearranging the hand and identifying whether a run lacks crowd control or boss damage. Those skills remain useful even when individual values or unlock timing change.',
          'Do not overtrain one exact sequence. A build that depends on a particular demo roll, rarity or timer can break when Early Access adjusts the pool. Instead practice a flexible route: secure safe experience, establish one engine, cover its weakness and preserve a boss answer. That is the part of the demo worth carrying into the paid game.',
        ],
      },
      {
        heading:
          'Assume progress does not transfer unless Steam says otherwise',
        paragraphs: [
          'The demo store explicitly says progress is not saved or transferable to the full game client. Treat the demo as practice and a purchase decision, not as an Early Access head start. Do not spend hours farming unlocks with the expectation that the separate app will import them. Start the paid build prepared to repeat story and progression steps.',
          'Separate apps can also keep separate settings, achievements and cloud data. If the Early Access client does not detect a demo configuration, set controls and accessibility options again rather than moving files manually. Copying save data between versions can create bugs and is not an official transfer method.',
        ],
      },
      {
        heading: 'Check the store state before buying or troubleshooting',
        paragraphs: [
          'The demo is free. The main Hell Maiden app is the paid Early Access product, with price expected to rise when the full version eventually releases. On launch day the store can move through regional unlock timing, so a page showing an announced date does not always mean the purchase button is active in every region at that exact moment.',
          'If the main app still displays “coming soon,” refresh the Steam client and the official store page rather than downloading from a mirror. If you only want to test performance and controls, use the official demo first. If you want the second Circle, expanded Poet pool and continuing story, those belong to the Early Access app.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Hell Maiden demo progress carry into Early Access?',
        answer:
          'No. The demo store says progress is not saved or transferable to the full game client.',
      },
      {
        question: 'How much content is in the Hell Maiden demo?',
        answer:
          'Steam lists Limbo, one Poet, 25+ abilities, six Weapon Cards, ten Mod Cards and the Minos boss.',
      },
      {
        question: 'Is the Hell Maiden demo free?',
        answer:
          'Yes. Use Steam App 4002340. The separate Early Access app is the paid product.',
      },
    ],
  },
  {
    slug: 'controls-and-first-run-tips',
    path: '/guides/controls-and-first-run-tips',
    title: 'Hell Maiden Controls and First-Run Movement Tips',
    seoTitle: 'Hell Maiden Controls - Aiming, Dash & Controller Tips',
    seoDescription:
      'Learn Hell Maiden control priorities for mouse, keyboard and controller: active aiming, dash timing, visibility and safer first-run movement.',
    summary:
      'Hell Maiden rewards active aim and deliberate dashes. Configure visibility first, then learn to move around danger instead of spending every escape immediately.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: '/hell-maiden/guides/gameplay.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Steam feature flags and official gameplay trailer. Specific button labels are left to the current in-game settings screen.',
    videoSearchQueries: [
      'Hell Maiden controls',
      'Hell Maiden controller gameplay',
      'Hell Maiden gameplay trailer',
    ],
    video: videos.gameplay,
    tags: ['Controls', 'Controller', 'Dash'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/cards',
      '/steam-deck',
      '/download',
    ],
    body: [
      {
        heading: 'Configure the screen before judging the controls',
        paragraphs: [
          'Steam lists full controller support and marks a gamepad as recommended, while the combat itself uses active aiming and a dash rather than purely passive survivor movement. Begin in the settings menu. Confirm the current bindings, aim sensitivity, display mode, effect readability and accessibility options before the first serious run. Exact buttons can change by device and patch, so the live binding screen is the reliable reference.',
          'Choose settings that let you see Dante, the nearest hazard and the aim direction at the same time. Excessively high sensitivity can make small corrections difficult; very low sensitivity can make target changes lag behind movement. Test against early enemies and adjust once, then keep the setting stable long enough to build muscle memory.',
        ],
      },
      {
        heading: 'Separate movement direction from attack intention',
        paragraphs: [
          'A common first-run mistake is moving directly toward whatever Dante is attacking. The safer pattern is to circle around a pack while aiming through its densest lane. Movement chooses the safe route; aim chooses the target. When those decisions are independent, you can damage enemies behind or beside the path without stepping into them.',
          'Use broad curves instead of sharp reversals. Reversing through the trail of enemies behind you often closes the escape lane. A controlled loop gathers the pack, exposes a dense line for piercing or area attacks and keeps unexplored space ahead. Change direction only after checking where the previous wave accumulated.',
        ],
      },
      {
        heading: 'Dash after the danger commits',
        paragraphs: [
          'The dash is most valuable when a pattern has already closed normal walking space. If you dash as soon as enemies appear, the recovery window arrives when the real threat begins. Wait for a lane, projectile field or elite attack to commit, then cross to known safe ground. Avoid ending the dash against the map edge or inside a second group.',
          'During boss fights, preserve one emergency response whenever several telegraphs can overlap. Move normally through wide openings and dash across the narrowest unavoidable boundary. This discipline makes the Minos fight easier without changing the build, because fewer damage windows are interrupted by panic movement.',
        ],
      },
      {
        heading: 'Use pause and card screens as control breaks',
        paragraphs: [
          'Card selection is a planning pause. Relax the movement hand, read the full choices, rearrange the deck and decide where Dante should move when combat resumes. Do not accept a card and immediately hold a direction from the menu; that can send the character into a pack before your attention returns to the arena.',
          'If a controller feels wrong, recheck Steam Input and the game’s own layout before assuming the game lacks support. If a keyboard-and-mouse setup feels too busy, lower aim sensitivity or reduce visual clutter first. The goal is a consistent mental loop: route, aim, dash only when needed, then use the card screen to rebuild the plan.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Hell Maiden support controllers?',
        answer:
          'Yes. Steam lists full controller support, gamepad recommendation and PlayStation controller support categories.',
      },
      {
        question: 'Does Hell Maiden auto-aim?',
        answer:
          'The game’s combat is built around active aiming. Check current settings for any aim assistance available on your input device.',
      },
      {
        question: 'When should I dash?',
        answer:
          'Dash after a danger pattern commits and normal movement no longer has a safe lane. Keep an emergency dash for overlapping boss telegraphs.',
      },
    ],
  },
  {
    slug: 'characters',
    path: '/characters',
    title:
      'Hell Maiden Characters: Dante, Virgil, Beatrice, Minos and the Poets',
    seoTitle: 'Hell Maiden Characters - Dante, Virgil, Minos & Poets',
    seoDescription:
      'Meet the current Hell Maiden characters and understand their roles: Dante, Beatrice, Virgil, Minos and the Poets connected to Spirit Cards.',
    summary:
      'The cast is both narrative and mechanical: Dante fights, Virgil guides, Beatrice anchors the goal, Minos judges Limbo and the Poets expand card options.',
    category: 'Characters',
    difficulty: 'Reference',
    coverImageUrl: '/hell-maiden/screenshots/3.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Steam story description and indexed official-wiki character pages; launch content can add or revise entries.',
    videoSearchQueries: [
      'Hell Maiden characters',
      'Hell Maiden Dante',
      'Hell Maiden Poets',
    ],
    tags: ['Characters', 'Dante', 'Minos'],
    relatedRoutes: [
      '/guides/poets-of-limbo',
      '/cards',
      '/guides/minos-boss-guide',
      '/soundtrack',
    ],
    body: [
      {
        heading: 'Dante is the player’s route through Hell',
        paragraphs: [
          'Hell Maiden continues from the end of Dante Alighieri’s Divine Comedy with a new premise: Dante has reached Paradiso before, yet returns to Hell without her memories. She fights upward in search of answers and another chance at salvation. In gameplay, Dante is the documented player character whose movement, aim, dash and selected signature weapon define each run.',
          'Blazing Quill is Dante’s documented signature Weapon Card, and her card family includes fire, area and status interactions in demo-era references. These mechanics can change, but her role is stable: she is the active combatant who receives the Poets’ assistance and turns their cards into a temporary hand during each attempt.',
        ],
      },
      {
        heading: 'Virgil guides the journey; Beatrice anchors the destination',
        paragraphs: [
          'Virgil is Dante’s guide through Hell and a Poet connected to a documented card deck and the Wayfinder signature weapon. Her story role and combat support overlap: she provides direction while her card family broadens the attacks available to Dante. Treat “character” and “build source” as connected categories in Hell Maiden rather than separate encyclopedia facts.',
          'Beatrice is associated with Paradiso and Dante’s search for truth. Official material describes Dante as protected by Beatrice while accompanied by Virgil. The exact story revelations belong to the game; this guide avoids turning launch-day character searches into unmarked spoilers.',
        ],
      },
      {
        heading: 'Minos is both judge and boss',
        paragraphs: [
          'Queen Minos is the Judge of the Damned and the final boss of Limbo. That makes her more than a stage endpoint: repeated encounters and dialogue connect the run structure to the larger mystery. Players searching for Minos usually need the boss guide, while readers interested in her role can use the official wiki’s dialogue and gallery tabs after avoiding spoilers.',
          'The fight has been documented with multiple phases in the demo. Early Access may change patterns or context, so character identity is stable while combat details remain version-sensitive. Build for damage while moving and learn phase tells instead of relying on a permanent script.',
        ],
      },
      {
        heading: 'The Poets expand both cast and card pool',
        paragraphs: [
          'Official material names poets such as Horace, Homer, Ovid and Lucan, with Virgil already central to the story. The current Early Access description promises four Poets of Limbo to rescue and befriend. Each rescue adds abilities and can unlock perks, ultimates or signature weapons, so meeting a character can change future combat decisions.',
          'Indexed official-wiki pages also list figures such as Libicocco and Scarmiglione alongside the central cast. Wiki and store pages were updated at different times, so this site avoids claiming a complete launch roster from one snapshot. Use the current game’s codex and story progress as the definitive list, then use this hub to understand why a named character matters to a build or boss route.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who is the main character in Hell Maiden?',
        answer:
          'Dante is the documented player character, reimagined after the events of the Divine Comedy and returned to Hell without her memories.',
      },
      {
        question: 'Who is Virgil in Hell Maiden?',
        answer:
          'Virgil is Dante’s guide and a Poet whose cards and signature weapon can support combat runs.',
      },
      {
        question: 'Who is the first major boss?',
        answer:
          'Queen Minos is the documented final boss of Limbo and the Judge of the Damned.',
      },
    ],
  },
  {
    slug: 'release-date',
    path: '/release-date',
    title: 'Hell Maiden Release Date: Early Access and Full Release Status',
    seoTitle: 'Hell Maiden Release Date - Early Access & Full Launch Status',
    seoDescription:
      'Hell Maiden Early Access was announced for July 16, 2026. Check the Steam unlock, current content and what AstralShift says about full release.',
    summary:
      'July 16, 2026 is the announced Steam Early Access date. The full version has no exact date and is expected only after a substantial development period.',
    category: 'Release',
    difficulty: 'Status',
    coverImageUrl: '/hell-maiden/guides/release.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Steam store and AstralShift release-date trailer. Store still returned coming_soon during the initial July 16 check.',
    videoSearchQueries: [
      'Hell Maiden release date',
      'Hell Maiden Early Access trailer',
      'Hell Maiden full release',
    ],
    video: videos.release,
    tags: ['Release date', 'Early Access', 'Full release'],
    relatedRoutes: [
      '/download',
      '/guides/demo-vs-early-access',
      '/platforms',
      '/steam-deck',
    ],
    body: [
      {
        heading: 'Early Access was announced for July 16, 2026',
        paragraphs: [
          'AstralShift announced July 16, 2026 as the Steam Early Access date for Hell Maiden. The main Steam page uses App ID 3372060 and the release-date trailer comes from the Steam-linked AstralShift channel. On the date itself, regional unlock timing can leave the page showing “coming soon” for part of the day, so the official purchase button is the final availability signal.',
          'The free demo is a separate app and was already available before Early Access. It covers Limbo, while the Early Access description expands the game to two Circles, four Poets of Limbo, four signature weapons and more than 40 abilities. Players looking for the second Circle or continued story need the main app rather than the demo.',
        ],
      },
      {
        heading: 'The full release has no exact date',
        paragraphs: [
          'AstralShift’s Steam Early Access statement estimates approximately an additional year or more of development. That is a development estimate, not a promise that the full version will launch on July 16, 2027. The studio explicitly says the schedule is difficult to predict and intends to keep sharing updates as development continues.',
          'The planned full version is broader than the launch build: all nine Circles of Hell, more Poets, weapons, perks, cards, ultimate attacks, story, bosses, lore and side quests are part of the stated vision, alongside quality-of-life improvements and an Endless Mode. Treat those as plans, not current features.',
        ],
      },
      {
        heading: 'What Early Access means for guide accuracy',
        paragraphs: [
          'Balance, card pools, progression and interface details can change. A guide published on release day should therefore separate stable design from patch-sensitive values. The stable design is the relationship between Weapon Cards, Mod Cards, movement and deck arrangement. Exact percentages, rarity, unlock order and optimal builds should always be checked against the current client.',
          'This site dates status pages and refuses to publish a permanent tier list from demo footage. When a patch changes an interaction, the build framework can stay while the named card recommendation changes. That is the correct way to use an Early Access wiki without turning old advice into false authority.',
        ],
      },
      {
        heading: 'Where to watch for the next milestone',
        paragraphs: [
          'Use the Steam news feed, AstralShift’s official website, Discord and YouTube channel for release and patch announcements. Steam discussions can surface problems quickly, but a community report is not the same as a confirmed roadmap item. Wait for an official post before publishing a date or platform promise.',
          'Wishlist or follow the Steam app if the store has not unlocked in your region. Do not use third-party download mirrors claiming to bypass the release timer. The official page is the only safe source for the paid client, and the official demo remains the correct free option.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Hell Maiden release?',
        answer:
          'Hell Maiden was announced to enter Steam Early Access on July 16, 2026.',
      },
      {
        question: 'When is the Hell Maiden full release?',
        answer:
          'No exact full-release date is announced. AstralShift estimates roughly another year or more of Early Access development.',
      },
      {
        question: 'How much content is in Early Access?',
        answer:
          'Steam advertises two Circles, four Poets of Limbo, four signature weapons and more than 40 abilities at the Early Access stage.',
      },
    ],
  },
  {
    slug: 'platforms',
    path: '/platforms',
    title: 'Hell Maiden Platforms: PC, PS5, Xbox, Switch and Mobile Status',
    seoTitle: 'Hell Maiden Platforms - PC, PS5, Xbox, Switch & Mobile',
    seoDescription:
      'Hell Maiden currently lists Windows on Steam. Check official PS5, Xbox, Switch, macOS, Linux, mobile and multiplayer status without rumors.',
    summary:
      'Windows via Steam is the current official platform. No console, mobile, macOS or Linux release should be assumed until AstralShift announces one.',
    category: 'Platforms',
    difficulty: 'Status',
    coverImageUrl: '/hell-maiden/screenshots/8.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Steam app API and store feature list checked on July 16, 2026.',
    videoSearchQueries: [
      'Hell Maiden platforms',
      'Hell Maiden PS5',
      'Hell Maiden Switch',
    ],
    tags: ['Windows', 'Consoles', 'Multiplayer'],
    relatedRoutes: [
      '/steam-deck',
      '/download',
      '/release-date',
      '/guides/controls-and-first-run-tips',
    ],
    body: [
      {
        heading: 'Windows is the current official platform',
        paragraphs: [
          'The Hell Maiden Steam app currently marks Windows as supported and does not mark macOS or Linux. The listed minimum operating system is Windows 10 or newer. This is the platform statement that can be verified today; a store page appearing in search results for other hardware is not an announcement.',
          'Steam also lists single-player, Steam Achievements, Steam Cloud, Family Sharing and full controller support. Those features describe the PC release. They do not imply cross-play, online co-op or a console version.',
        ],
      },
      {
        heading: 'No PS5, Xbox or Nintendo Switch version is confirmed',
        paragraphs: [
          'Search autocomplete already contains PS5, PlayStation, Switch and Switch 2 questions, but the official Steam page and AstralShift-linked launch materials do not announce those versions. The correct status is “not currently confirmed,” not “never.” Indie games often expand later, but guessing a port creates a false release promise.',
          'Watch the developer’s Steam news, website and official social links for platform announcements. If a retailer or database lists a console without an AstralShift announcement, treat it as unverified. Do not publish a release date from an autocomplete phrase alone.',
        ],
      },
      {
        heading: 'Mobile, macOS and Linux are not current store targets',
        paragraphs: [
          'There is no official Android, iOS, macOS or Linux listing in the current Steam app data. “Hell Maiden APK” and free mobile download pages are therefore not legitimate platform routes for the game. The safe mobile answer is to wait for an official store listing rather than install an unrelated package using the same name.',
          'Linux and Steam Deck are separate questions. A game can sometimes run through Proton without a native Linux build, but that does not create official support. The dedicated Steam Deck page tracks Valve’s compatibility category and gives cautious test steps without claiming a rating that does not exist.',
        ],
      },
      {
        heading: 'Hell Maiden is currently single-player',
        paragraphs: [
          'Steam lists single-player and does not list online co-op, local co-op or PvP. The horde-survival run, card choices and story progression are designed around Dante’s single-player journey in the current product description. Community sharing happens through builds, screenshots and discussion rather than a multiplayer lobby.',
          'If co-op appears in a future roadmap or patch, the Steam feature list should change and this page can be updated. Until then, avoid buying with the expectation of playing together. Remote-play tools do not turn a single-player design into supported co-op.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Hell Maiden on PS5?',
        answer:
          'No official PS5 version is currently announced. The verified release is Windows through Steam.',
      },
      {
        question: 'Is Hell Maiden coming to Switch?',
        answer:
          'AstralShift has not announced a Nintendo Switch or Switch 2 version in the official launch material checked here.',
      },
      {
        question: 'Does Hell Maiden have co-op?',
        answer:
          'Steam currently lists Hell Maiden as single-player and does not list co-op or multiplayer.',
      },
    ],
  },
  {
    slug: 'steam-deck',
    path: '/steam-deck',
    title: 'Hell Maiden Steam Deck Status: Compatibility and Safe Test Steps',
    seoTitle: 'Hell Maiden Steam Deck Status - Verified or Playable?',
    seoDescription:
      'Hell Maiden has no Valve Steam Deck rating yet. Check the current category, controller support, Proton expectations and safe first-launch tests.',
    summary:
      'Valve currently returns no resolved Deck compatibility category for Hell Maiden. Full controller support is promising, but it is not a Verified badge.',
    category: 'Platforms',
    difficulty: 'Status',
    coverImageUrl: '/hell-maiden/screenshots/2.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Valve compatibility endpoint returned category 0 with no resolved test items on July 16, 2026.',
    videoSearchQueries: ['Hell Maiden Steam Deck', 'Hell Maiden Proton'],
    tags: ['Steam Deck', 'Proton', 'Unrated'],
    relatedRoutes: [
      '/platforms',
      '/guides/controls-and-first-run-tips',
      '/download',
      '/release-date',
    ],
    body: [
      {
        heading: 'Hell Maiden is currently unrated by Valve',
        paragraphs: [
          'Valve’s compatibility report for App 3372060 returned resolved category 0 and no resolved test items during the July 16 check. That means the store has not assigned Verified, Playable or Unsupported status. “Unrated” is not the same as “unsupported”; it simply means this page cannot promise an official Deck result yet.',
          'Steam lists full controller support and gamepad recommendation, which removes one common handheld obstacle. However, Valve’s review also considers text readability, launcher behavior, default graphics, performance and whether every function can be completed with the built-in controls. Controller support alone is not enough to claim Verified.',
        ],
      },
      {
        heading: 'Use a short refund-safe test before committing',
        paragraphs: [
          'If you own the game and want to try it before Valve publishes a rating, keep the first session focused. Launch with the default stable Proton option, reach the Forum, start a run, test aiming and dash behavior, open the card screen and verify that text remains readable at the Deck’s native display. Avoid installing community files or unusual launch options before confirming the base game works.',
          'Watch frame pacing during a dense wave rather than judging only the menu. Horde-survival games can run well at the beginning and become heavier as enemies and effects accumulate. Check suspend and resume, Steam Cloud and controller prompts before investing in a long save. If the client crashes, return to default compatibility settings before reporting the issue.',
        ],
      },
      {
        heading: 'Choose stability before maximum effects',
        paragraphs: [
          'A stable frame rate helps more than high visual effects because dash timing and telegraph reading are central to survival. Start with a conservative preset, cap the frame rate if needed and reduce effect-heavy options before lowering resolution aggressively. Keep the UI scale readable; tiny card text defeats the benefit of smoother combat.',
          'Early Access patches can improve or temporarily reduce compatibility. Record the game version, Proton version and setting that changed when sharing a report. “Works for me” without those details is not enough to update a public status page.',
        ],
      },
      {
        heading: 'Wait for a Valve badge if certainty matters',
        paragraphs: [
          'Players buying specifically for handheld use should wait for the Steam Deck compatibility panel or a current developer statement if an unrated purchase feels risky. Community Proton reports can help, but they are hardware- and version-specific. This page will not convert one successful launch into a universal compatibility claim.',
          'Check the official Steam page before purchase. When Valve assigns a category, the report should include the tested issues behind the badge. Until then the accurate summary remains: Windows build, full controller support, no resolved Deck rating.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Hell Maiden Steam Deck Verified?',
        answer:
          'No Verified rating is currently assigned. Valve’s report was unresolved when checked on July 16, 2026.',
      },
      {
        question: 'Does Hell Maiden support a controller?',
        answer:
          'Yes. Steam lists full controller support and recommends a gamepad, but this does not guarantee Deck verification.',
      },
      {
        question: 'Can I try Hell Maiden with Proton?',
        answer:
          'You can test the official Steam build with the default stable Proton path, but compatibility is not yet guaranteed by Valve or this guide.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Hell Maiden Download: Official Steam Game and Free Demo',
    seoTitle: 'Hell Maiden Download - Official Steam Game & Free Demo',
    seoDescription:
      'Download Hell Maiden safely from Steam, try the official free demo, check Windows requirements and avoid fake APK, crack and mirror downloads.',
    summary:
      'Use Steam App 3372060 for Early Access or App 4002340 for the free demo. There is no official APK, mobile build or mirror installer.',
    category: 'Safety',
    difficulty: 'Reference',
    coverImageUrl: '/hell-maiden/cover.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Official Steam app and demo pages plus current Windows requirements.',
    videoSearchQueries: [
      'Hell Maiden official download',
      'Hell Maiden demo Steam',
    ],
    tags: ['Steam', 'Demo', 'Requirements'],
    relatedRoutes: [
      '/guides/demo-vs-early-access',
      '/platforms',
      '/steam-deck',
      '/release-date',
    ],
    body: [
      {
        heading: 'Use the two official Steam apps',
        paragraphs: [
          'The paid Early Access game is Steam App 3372060. The free demo is Steam App 4002340. Open those pages in the Steam client or on the official store domain, confirm AstralShift is the developer and publisher, then install through your library. The separate app IDs make it easy to identify the correct product.',
          'The demo is the safe free option. It includes Limbo and the core card loop but explicitly does not transfer progress to the full client. A page offering the complete paid game for free, an APK or a direct executable is not an official alternative.',
        ],
        bullets: [
          'Early Access: https://store.steampowered.com/app/3372060/Hell_Maiden/',
          'Free demo: https://store.steampowered.com/app/4002340/Hell_Maiden_Demo/',
          'Developer and publisher on both official records: AstralShift.',
          'Current official operating-system target: Windows 10 or newer.',
        ],
      },
      {
        heading: 'Check the Windows requirements before installing',
        paragraphs: [
          'Steam lists a 64-bit processor and operating system, Windows 10 or newer, four CPU cores at 2.5 GHz or better, 8 GB RAM, and Intel Iris Xe, Nvidia GTX 970 or AMD RX 570-class graphics as the minimum. The store lists 4 GB of available storage. Recommended memory rises to 16 GB with a faster 3.5 GHz-class four-core processor and GTX 1070 or RX 570 graphics.',
          'Requirements are a baseline, not a guarantee for every handheld, laptop or driver version. Update graphics drivers through the hardware vendor, close heavy background applications and test the demo when uncertain. Do not download “performance patches” from an unknown mirror; they can be modified clients or malware.',
        ],
      },
      {
        heading: 'There is no official Hell Maiden APK or mobile download',
        paragraphs: [
          'The current official platform listing is Windows through Steam. Android and iOS are not listed, so an APK using the Hell Maiden name is not the official game. It may be an unrelated app, a repackaged file or a credential-stealing installer. The same warning applies to “Skidrow,” crack, trainer and key-generator pages.',
          'If AstralShift announces another platform, it should appear through the studio’s official site or a recognized platform store. Until then, use the platform status page rather than searching for unofficial ports. Safe installation is part of preserving save data and Steam Cloud—not merely avoiding a bad download.',
        ],
      },
      {
        heading: 'Fix common Steam install problems safely',
        paragraphs: [
          'If the store still says coming soon on the announced date, check regional unlock timing and restart Steam. If an installed build does not launch, verify the game files, restart the client and remove unsupported compatibility options before reinstalling. Keep the demo and main app separate so you do not mistake one library entry for the other.',
          'For controller problems, confirm the in-game bindings and Steam Input. For performance issues, test a lower preset and effect density before changing system files. Report reproducible bugs through Steam discussions or the Steam-linked Discord with the game version, hardware and exact steps.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Hell Maiden?',
        answer:
          'Use the official Steam page for App 3372060. The free demo is the separate official App 4002340.',
      },
      {
        question: 'Is Hell Maiden free?',
        answer:
          'The demo is free. The main Early Access game is a paid product.',
      },
      {
        question: 'Is there a Hell Maiden APK?',
        answer:
          'No official Android build is currently listed. Do not install APKs or modified clients using the game name.',
      },
    ],
  },
  {
    slug: 'soundtrack',
    path: '/soundtrack',
    title: 'Hell Maiden Soundtrack and “Not My Paradiso” Opening',
    seoTitle: 'Hell Maiden Soundtrack - Not My Paradiso by Mili',
    seoDescription:
      'Find the official Hell Maiden opening “Not My Paradiso” by Mili, current soundtrack context and safe official listening links.',
    summary:
      '“Not My Paradiso” is Hell Maiden’s official opening by Mili. Use AstralShift’s upload for the animation and follow official channels for soundtrack releases.',
    category: 'Music',
    difficulty: 'Reference',
    coverImageUrl: '/hell-maiden/guides/soundtrack.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    sourceNotes:
      'Official AstralShift and Mili opening upload plus launch reporting. No unofficial audio downloads are linked.',
    videoSearchQueries: [
      'Hell Maiden soundtrack',
      'Hell Maiden Not My Paradiso',
      'Hell Maiden Mili opening',
    ],
    video: videos.soundtrack,
    tags: ['Soundtrack', 'Mili', 'Opening'],
    relatedRoutes: [
      '/characters',
      '/release-date',
      '/guides/poets-of-limbo',
      '/download',
    ],
    body: [
      {
        heading: '“Not My Paradiso” is the official opening',
        paragraphs: [
          'AstralShift premiered the Hell Maiden opening “Not My Paradiso” with Mili immediately before the July 16 Early Access date. The official upload pairs the song with a cinematic opening rather than functioning as a gameplay guide. It reinforces the central premise: Dante has already reached Paradiso and is now forced to confront a second journey through Hell.',
          'Use the AstralShift-linked YouTube channel for the canonical animation. Reuploads can be useful for discovery, but they should not replace the official source when sharing or embedding the opening. This page does not provide an audio rip or unauthorized download.',
        ],
      },
      {
        heading: 'The soundtrack gives each Circle its own identity',
        paragraphs: [
          'Developer interviews and launch coverage describe the music as part of the identity of each Circle of Hell, with gothic and arcade bullet-hell influences. That matters during play because a Circle is not only a mechanical stage; its music, enemies, boss and narrative tone form one repeated-run environment.',
          'The opening and in-game score should be treated separately. “Not My Paradiso” is the named opening collaboration with Mili. The stage and battle score belongs to the broader Hell Maiden soundtrack. Follow official credits and store listings for composer and album details as they are published.',
        ],
      },
      {
        heading: 'Use official listening and purchase links',
        paragraphs: [
          'The official YouTube upload is the safest current listening route. If AstralShift or the credited artists publish the soundtrack on Bandcamp, Steam, Spotify or another service, use the link from an official profile rather than an SEO download site. Launch-week search results often mix fan uploads, edits and unrelated songs with the same words.',
          'For use in streams or videos, check the rights information published with the official upload and the platform’s music policy. A public video does not automatically grant permission to redistribute the track or package it with another project.',
        ],
      },
      {
        heading: 'Keep story spoilers separate from music discovery',
        paragraphs: [
          'Opening animation can reveal character imagery and themes, while soundtrack titles can hint at bosses or locations. Players avoiding spoilers should begin with the release-date trailer or listen without reading unofficial track lists. The character and Poets pages on this site keep launch facts concise and avoid reproducing dialogue.',
          'As Early Access adds Circles, new musical themes are likely to appear alongside them, but unreleased tracks should not be guessed from the Divine Comedy. Update the soundtrack page only when an official credit, upload or in-game release confirms the title.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Hell Maiden opening song?',
        answer:
          'The official opening is “Not My Paradiso” by Mili, premiered through AstralShift’s official YouTube presence.',
      },
      {
        question: 'Where can I listen to the Hell Maiden soundtrack?',
        answer:
          'Start with AstralShift’s official YouTube channel and follow official artist or store links for any album release.',
      },
      {
        question: 'Can I download the opening from this wiki?',
        answer:
          'No. This guide embeds or links official media and does not redistribute copyrighted audio.',
      },
    ],
  },
];

export const featuredGuides = [
  guides.find((guide) => guide.slug === 'beginner-guide'),
  guides.find((guide) => guide.slug === 'cards'),
  guides.find((guide) => guide.slug === 'best-builds'),
  guides.find((guide) => guide.slug === 'minos-boss-guide'),
  guides.find((guide) => guide.slug === 'demo-vs-early-access'),
  guides.find((guide) => guide.slug === 'steam-deck'),
].filter((guide): guide is Guide => Boolean(guide));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
