import { ArticleData } from './blog-types';

export const articlesBatch11: Record<string, ArticleData> = {
  'stop-being-a-meat-proxy-leader': {
    title: 'Stop Being a Meat-Proxy Leader',
    excerpt:
      'I advise CEOs and VPs on why forwarding unedited AI memos kills candor overnight, and how my Human Holdback Rule restores leadership trust.',
    directAnswer:
      'A meat-proxy leader forwards AI-generated memos, roadmaps, and feedback they barely read. Employees spot the synthetic phrasing in seconds, assume their leader values speed over judgment, and stop sharing bad news upward before things break.',
    date: '2026-11-27',
    category: 'Leadership',
    readTime: '7 min read',
    featured: true,
    relatedConcepts: ['ai-governance', 'deterministic-governance', 'change-management-in-ai'],
    content: `<h2>The 8:14 AM Slack Message That Cost a VP Six Months</h2>

<p>You can spot the Slack message at 8:14 AM without opening a single detector. Five tidy bold bullets. Zero specifics about Tuesday's outage. One polite wrap-up line asking the team to align.</p>

<p>An Engineering Manager reads that from a VP of Engineering and stops telling the truth in 1-on-1s that same week.</p>

<p>Everyone on your floor knows what happened. You had fifteen minutes between board prep and standup, pasted three messy notes into a chat window, and shipped the output with your name at the top. Now six people spend forty minutes decoding what you actually meant.</p>

<p>When I advise leadership teams on AI rollouts, this is the fastest way I watch credible executives lose the room before a single layoff memo ever goes out. Across Reddit developer threads and internal manager forums, workers now have a blunt name for a boss who runs interference between a chatbot and their own direct reports: a meat proxy.</p>

<h2>What Vendor Demos Promise vs. What Happens on Tuesday</h2>

<p>Every AI productivity vendor sells the same demo. An executive feeds rough meeting notes into an assistant, clicks generate, and blasts out a clean quarterly memo in twelve seconds.</p>

<p>On Tuesday afternoon, the math flips backwards.</p>

<p>Research published by BetterUp Labs and the Stanford Social Media Lab gave this mess a permanent name: workslop. It looks polished at a glance, lacks real context, and shifts the burden of thinking from the sender onto the reader. When you send workslop downward as a VP or CEO, you broadcast one unmistakable signal to your floor: your fifteen seconds matter more than their forty minutes.</p>

<p>In Glean's Work AI Index surveying 6,000 workers, Dr. Rebecca Hinds documented that 75% of workers feel faster on individual tasks, while only 13% say their organization actually performs better. Even sharper, roughly 70% admit shipping AI outputs they never verified and could not defend if questioned.</p>

<p>Harvard Business Review summed up what I see in almost every advisory call I take: AI does not diminish leadership; it exposes it. If your staff suspect you delegated your own judgment to a prompt, they start feeding sanitized prompts right back up to you.</p>

<h2>Where Polite Prompts Fail and Hard Rules Work</h2>

<p>Asking leaders to "use AI thoughtfully" fails within forty-eight hours. When calendars fill up, everyone reaches for the quickest draft button unless you draw a hard line around where AI stays out of the room.</p>

<p>In the same Glean research, the highest-performing AI users did something counterintuitive: they deliberately held back from using the tool in specific human moments, even when AI could have written the draft faster.</p>

<p>Here is the exact rule I advise clients to pin inside their leadership channel before Monday morning:</p>

<ul>
  <li><strong>Performance and 1-on-1 Feedback:</strong> Never let a model draft a coaching note, review summary, or corrective warning. If a person matters enough to manage, they deserve sentences you wrote yourself.</li>
  <li><strong>Conflict, Org Changes, and Layoff News:</strong> Ban AI phrasing completely whenever fear or career stakes sit in the room. Synthetic empathy reads like contempt to nervous engineers.</li>
  <li><strong>Strategy Trade-Offs:</strong> If you cannot explain what you are cutting in two plain sentences without AI filler, you have not made the decision yet.</li>
  <li><strong>Post-Incident Accountability:</strong> Never paste a machine-smoothed postmortem over a real production mistake. Own the miss plainly.</li>
</ul>

<h2>A 5-Minute Audit You Can Run Before Lunch</h2>

<p>Before we change a single policy on your engineering or product floor, pull up the last five messages you sent to your direct reports in Slack or email.</p>

<p>Ask yourself two blunt questions on each one:</p>

<ol>
  <li>Could another VP at a completely different company have pasted those exact five paragraphs?</li>
  <li>If an Engineering Manager pushed back on line three in tomorrow's meeting, could you defend the reasoning without re-opening your prompt history?</li>
</ol>

<p>If two or more fail that test, you do not have an AI adoption problem. You have a delegation habit that is training your team to tune you out.</p>

<p>Read the companion teardown on <a href="/ai-workplace-leadership">our AI Workplace &amp; Leadership hub</a>, or pair this with how <a href="/blog/absorbing-ai-twice-eight-report-cliff">flattening past eight direct reports breaks your middle managers</a> and why <a href="/blog/the-transaction-that-succeeds">unverified outputs fail silently in production</a>.</p>

<h2>When You Should Ignore This Rule</h2>

<p>I am not telling you to throw away AI writing tools. Keep using them for private prep, summarizing messy transcripts for your own eyes only, or organizing rough bullets before you sit down to write. When the draft stays strictly inside your own private scratchpad as raw clay, it saves you thirty minutes and hurts nobody.</p>

<p>The minute you paste unedited machine prose into a room where people report to you, you stop leading and start proxying.</p>

<p>If you want me to review your leadership memos and communication norms with you in thirty minutes, <a href="/schedule?source=stop-being-a-meat-proxy-leader">book a direct working session with me here</a>.</p>`,
  },

  'absorbing-ai-twice-eight-report-cliff': {
    title: 'Absorbing AI Twice and the 8-Report Cliff',
    excerpt:
      'We cut management layers assuming AI would coordinate teams. Instead, surviving managers absorb AI twice and snap past eight direct reports.',
    directAnswer:
      'Flattening management layers past seven or eight direct reports forces surviving Engineering Managers to absorb AI twice: adopting tools themselves while de-slopping team output, absorbing layoff fear, and losing every hour once spent coaching.',
    date: '2026-11-27',
    category: 'Leadership',
    readTime: '8 min read',
    featured: true,
    relatedConcepts: ['product-leadership', 'coordination-tax', 'engineering-to-product-alignment'],
    content: `<h2>Why Flattening Your Org Chart Broke the Wrong Layer</h2>

<p>I watched three companies flatten engineering management last year using the exact same slide deck. Remove one director layer, bump Engineering Managers from six direct reports up to fourteen or eighteen, and tell everyone AI dashboards will handle the coordination.</p>

<p>Within ninety days, delivery slowed down and senior engineers started burning out.</p>

<p>Your junior developers did ship pull requests faster with coding assistants. That speed created a massive review pileup for the exact Engineering Managers and Staff Engineers whose calendars had just doubled in size.</p>

<p>In workplace data from Gartner and Revelio Labs, corporate spans of control climbed past 12 reports on average and hit 15 to 25 inside tech-heavy units. Meanwhile, middle managers began reporting burnout rates near 45% because they are absorbing AI twice: forced to master AI tools in their own workflows while cleaning up unchecked AI drafts, soothing layoff panic, and shielding teams from 14-day executive deadlines.</p>

<h2>What Breaks Past Eight Human Reports</h2>

<p>During her recent Conversations in Action session, Rebecca Hinds pointed out a pattern from decades of organizational research that AI has not erased: once a team crosses seven or eight people, social loafing kicks in, corner-cutting rises, and individual ownership evaporates.</p>

<p>Something even stranger showed up in her Glean Work AI Index research. As a human manager's span of control stretches too wide, employees start rating AI as fairer and more helpful than their own boss, with 61% saying AI helps them more than their human manager. Not because AI understands people better, because an overloaded manager with twenty direct reports has zero hours left to show up.</p>

<p>We saw the real-world limit of replacing human judgment at companies like Klarna, which famously publicized automating 700 support roles before publicly walking back quality cuts and rehiring humans to handle complex, high-trust cases. You can automate status routing. You cannot flatten away human context, conflict resolution, and architectural taste.</p>

<p>At the same time, companies like Block and Coinbase moved away from headcount empire building toward hands-on player-coaches, backed by NBER research showing that skill at directing AI agents correlates closely with skill at delegating clearly to humans.</p>

<h2>Weak Manager Habits vs. Fixed Operating Habits</h2>

<p>When I advise VPs of Engineering who already flattened their org chart, we do not re-hire three layers of bureaucracy. We reset what surviving managers spend their week doing:</p>

<table>
  <thead>
    <tr>
      <th>Area</th>
      <th>Broken Habit (What I See Now)</th>
      <th>Fixed Habit (What We Put In Place)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Coordination</strong></td>
      <td>Manager chases Slack updates and compiles Friday status decks manually</td>
      <td>Top managers delegate 33% more status routing to automated summaries and cancel half of recurring syncs</td>
    </tr>
    <tr>
      <td><strong>AI Oversight</strong></td>
      <td>AI agents get placed directly on the org chart, diffusing blame when things fail</td>
      <td>Every automated agent has one named human owner accountable for verification</td>
    </tr>
    <tr>
      <td><strong>Span Ceiling</strong></td>
      <td>16 to 24 engineers report to one burned-out manager with zero coaching time</td>
      <td>Pods cap at 6 to 8 humans per lead with clear decision rights and zero cross-pod dependencies</td>
    </tr>
    <tr>
      <td><strong>Promotion Path</strong></td>
      <td>Only way up in pay or status is accumulating more direct reports</td>
      <td>High-agency Staff ICs and player-coaches advance without managing headcount</td>
    </tr>
  </tbody>
</table>

<h2>A 5-Minute Span Check You Can Run This Week</h2>

<p>Pull up your engineering and product org chart right now and run three quick checks:</p>

<ol>
  <li>Circle every Engineering Manager or Team Lead carrying more than eight direct reports.</li>
  <li>Ask each one how many 1-on-1s they rescheduled or shortened in the last fourteen days.</li>
  <li>Check how many hours they spent reviewing unvetted AI PRs or design docs on Friday afternoon.</li>
</ol>

<p>If your best managers are skipping 1-on-1s to babysit pull requests, your org chart is not flat. It is cracked right down the load-bearing beam. You can explore more structural math in my earlier teardowns on <a href="/blog/engineering-management-span">Engineering Manager span of control</a> and <a href="/blog/team-sizing-economics">team sizing economics</a>, or grab the copy-paste <a href="/ai-workplace-leadership#charters">Span Reset Scorecard here</a>.</p>

<h2>When a Wider Span Actually Holds Up</h2>

<p>Do not split every ten-person team tomorrow if the work does not need it. A twelve-person group can run cleanly under one leader when three conditions hold true at the same time: every engineer is senior, each person owns a self-contained service with clean API boundaries, and zero junior onboarding is happening inside that pod.</p>

<p>Once you drop junior hires, cross-team dependencies, or heavy AI review volume into a sixteen-person span, coaching dies first and production quality follows right behind it.</p>

<p>If you want me to look at your current spans and reset your manager load before your best leads quit, <a href="/schedule?source=absorbing-ai-twice-eight-report-cliff">book a 30-minute working session with me</a>.</p>`,
  },

  'workslop-tax-botsitting-burnout': {
    title: 'The Workslop Tax and Botsitting Burnout',
    excerpt:
      'Why your team loses 6.4 hours a week babysitting AI tools, ships unchecked workslop out of exhaustion, and how one free team rule stops the bleed.',
    directAnswer:
      'Knowledge workers report saving eleven hours a week with AI yet spend 6.4 hours babysitting outputs, toggling tools, and fixing hallucinations. Exhausted teams stop checking drafts and ship unchecked workslop that destroys peer trust.',
    date: '2026-11-27',
    category: 'Leadership',
    readTime: '8 min read',
    featured: true,
    relatedConcepts: ['probabilistic-supervision-failure', 'vibe-coding', 'software-factory-overproduction'],
    content: `<h2>The Cleanup Bill Nobody Counts</h2>

<p>Open any team Slack channel or engineering repository after a heavy AI mandate and you will see two numbers that refuse to match.</p>

<p>People genuinely feel faster drafting alone. Then you look at team trust, missed edge cases, and Friday review backlogs, and nothing feels calmer at all.</p>

<p>In Glean's Work AI Index across 6,000 digital workers, employees estimated automating around eleven hours of work per week. In the very same survey, they reported spending 6.4 hours every week botsitting: feeding missing company context into chat windows, toggling across tabs, and cleaning up hallucinations.</p>

<p>When people spend six and a half uncredited hours babysitting software every week while leadership demands 10x speed, exhaustion wins. They stop checking. Roughly 70% of workers admit shipping AI content they never verified and could not defend out loud. On Hacker News and Reddit, engineers describe the exact same fatigue under a different name: AI brain fry from losing flow state and spending whole afternoons reviewing someone else's unedited machine output.</p>

<h2>Why Mandates and Token Leaderboards Backfired</h2>

<p>Early mandates made the problem worse by rewarding noise instead of judgment.</p>

<p>Look at how quickly vanity tracking collapsed across tech in 2026. Companies built internal token leaderboards and praised "Token Legends" until they noticed staff running pointless background loops to look busy. Meta dismantled its leaderboards and shifted toward token caps. Duolingo walked back its aggressive AI review rhetoric after internal and public pushback.</p>

<p>Worse, workforce data from Visier showed that nearly 48% of employees admit exaggerating their AI fluency out of fear of layoffs. When you measure token volume or mandate "use AI on every ticket," you do not get higher quality. You get performative AI theater upward and raw workslop sideways.</p>

<p>Even LinkedIn had to introduce an explicit AI slop reporting path after feeds flooded with identical synthetic templates. Inside companies like Clay, leaders realized they needed written AI Slop Policies before internal trust rotted completely.</p>

<h2>One Rule That Stopped the Bleeding on Client Teams</h2>

<p>You do not fix workslop with another monitoring dashboard. You fix it by changing who absorbs the cost of unedited drafts.</p>

<p>Whenever I advise a product or engineering org drowning in bloated 20-page markdown files and unchecked pull requests, we adopt one simple charter in Slack and enforce it for thirty days:</p>

<ul>
  <li><strong>No Raw Chatbot Pastes Inside Team Channels:</strong> Use AI to brainstorm or structure rough thoughts privately. Never drop raw model output into Slack, Jira, or a design doc for peers to untangle.</li>
  <li><strong>Respect the Time Ratio Rule:</strong> If a document takes five people twenty minutes each to read and verify, you owe more than ten seconds of prompting before hitting send.</li>
  <li><strong>Keep AI Bots Out of Candid Rooms:</strong> Turn off automatic meeting note-takers during performance reviews, layoff discussions, and unscripted brainstorming where lingering transcripts destroy psychological safety.</li>
  <li><strong>Reward Deletions Over Volume:</strong> Celebrate the engineer who trims 400 lines of generated fluff or catches a silent bug before merge, not the person who opened twelve PRs on Friday afternoon.</li>
</ul>

<p>You can copy the full <a href="/ai-workplace-leadership#charters">Team AI Slop Charter from our hub page</a> and paste it straight into your team wiki today.</p>

<h2>A 5-Minute Friday Check Before You Close Your Laptop</h2>

<p>Pick three deliverables shipped by your team this week: one pull request, one product spec, and one customer-facing memo.</p>

<p>Ask the author two questions without making it a witch hunt:</p>

<ol>
  <li>How many minutes did you spend cleaning up or re-prompting before you felt safe putting your name on it?</li>
  <li>Which specific claim or edge case did you personally verify against live data after the AI wrote the first draft?</li>
</ol>

<p>If nobody can answer question two in five seconds, you are shipping workslop and calling it velocity. Pair this check with our <a href="/reality-check">AI Reality Check</a> or read why <a href="/blog/stop-being-a-meat-proxy-leader">meat-proxy leadership makes this habit spread downward</a>.</p>

<h2>Buy Nothing Right Now</h2>

<p>If a vendor pitches you an "AI governance suite" or automated slop detector before you have written down one human-ownership rule, close the tab and keep your wallet shut. Software cannot fix a cultural incentive where staff fear getting fired unless they look busy with bots.</p>

<p>Set one clear charter, remove vanity AI metrics from performance reviews, and stop praising unverified speed.</p>

<p>If you want me to help your leadership team roll out a clean Team AI Slop Charter without triggering pushback or burnout, <a href="/schedule?source=workslop-tax-botsitting-burnout">schedule a working session with me here</a>.</p>`,
  },
};
