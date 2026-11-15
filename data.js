/* The Human Words We Give Machines — editorial starter entries.
   Edit or extend this array to grow the dictionary. */
window.DICTIONARY_ENTRIES = [
  {
    word: "Attention", category: "technical", kind: "Technical analogy",
    teaser: "A mathematical weighting mechanism with a very human name.",
    human: "The selective direction of awareness or cognitive resources toward something.",
    ai: "In neural networks, attention computes context-dependent weights to combine information from different positions or representations. In Transformers, this commonly involves queries, keys, and values.",
    analogy: "Both uses involve treating some information as more relevant to a particular operation than other information.",
    limit: "An attention weight is not evidence of conscious focus. Nor does a high weight automatically mean a feature caused the model's answer; the relationship between attention and explanation is method-dependent and debated.",
    stakes: "Treating attention maps as explanations can give users and researchers more confidence in an interpretation than the evidence warrants.",
    question: "When does a model's attention distribution genuinely help explain a prediction?",
    refs: ["jain2019", "wiegreffe2019"]
  },
  {
    word: "Learning", category: "technical", kind: "Established technical term",
    teaser: "What changes when we say a model learns?",
    human: "Acquiring knowledge, skill, habits, or understanding through experience and instruction.",
    ai: "A procedure changes model parameters, stored information, or policies based on data and feedback, often by optimizing a specified objective.",
    analogy: "Both can produce improved performance following exposure to examples or experience.",
    limit: "Better measured performance does not by itself establish humanlike understanding, reflection, or the ability to generalize in the ways people do.",
    stakes: "The familiar word can obscure exactly what changed, under which objective, and on which evaluation distribution.",
    question: "What evidence distinguishes task adaptation from broader conceptual learning?"
  },
  {
    word: "Neuron", category: "technical", kind: "Biological analogy",
    teaser: "A biological metaphor at the foundation of deep learning.",
    human: "A living cell that communicates through electrochemical processes as part of nervous systems.",
    ai: "An artificial neuron is an engineered computational unit, often combining a weighted sum with a nonlinearity; architectures vary greatly.",
    analogy: "Early artificial neural models abstracted aspects of input integration and activation in biological neurons.",
    limit: "A scalar activation is not a full biological cell, and neural network training is not a faithful account of how brains learn.",
    stakes: "Biological language can inspire research, but it can also imply a degree of neuroscientific realism that a model was never designed to provide.",
    question: "Which parts of the biological analogy still inform current architectures?"
  },
  {
    word: "Memory", category: "technical", kind: "Functional analogy",
    teaser: "Parameters, context, caches, retrieval: several different kinds of remembering.",
    human: "The ability to encode, retain, retrieve, and reconstruct information from experience.",
    ai: "Depending on the system, 'memory' may mean information in trained weights, a context window, hidden state, external storage, a retrieval index, or a product feature that persists user information.",
    analogy: "Earlier information can affect later behavior, sometimes over long periods.",
    limit: "These mechanisms differ in durability, retrieval, fidelity, and update rules; none should be presumed to resemble autobiographical recollection.",
    stakes: "Unqualified claims that an assistant 'remembers' may mislead users about persistence, privacy, and what the system actually stores.",
    question: "Which memory mechanism is being described, and what are its retention boundaries?"
  },
  {
    word: "Reward", category: "technical", kind: "Behavioral analogy",
    teaser: "A numerical learning signal borrowed from motivation and behavior.",
    human: "Something experienced or interpreted as desirable, reinforcing, or worth pursuing.",
    ai: "In reinforcement learning, a reward is a scalar feedback signal used to define or estimate the desirability of outcomes for policy optimization.",
    analogy: "Feedback can systematically shape future behavior.",
    limit: "A system that maximizes reward need not experience pleasure, desire, or moral approval; the reward specification is not the same as the designer's actual intent.",
    stakes: "The term can conceal reward misspecification and make optimization appear more psychologically human than it is.",
    question: "What behavior does the reward function incentivize that its designers did not intend?"
  },
  {
    word: "Curiosity", category: "technical", kind: "Motivational metaphor",
    teaser: "Exploration without necessarily wanting to know.",
    human: "A drive to investigate, ask questions, or resolve uncertainty for its own sake.",
    ai: "'Curiosity' often labels intrinsic-reward or exploration methods that prefer novelty, prediction error, information gain, or unfamiliar states.",
    analogy: "The resulting behavior can resemble active exploration rather than passive response.",
    limit: "Optimizing a novelty signal is not equivalent to an experienced desire to understand the world.",
    stakes: "The name can be useful shorthand, but evaluation should specify the exploration objective rather than infer motivation.",
    question: "Does this system explore because of an objective, or are we attributing a motive to an algorithm?"
  },
  {
    word: "Forgetting", category: "technical", kind: "Functional analogy",
    teaser: "Not all lost performance is lost memory.",
    human: "Failing to retain or retrieve information previously learned or experienced.",
    ai: "In continual learning, catastrophic forgetting describes declines on earlier tasks after training on new ones; elsewhere 'forgetting' may mean pruning, deletion, or reduced retrievability.",
    analogy: "Information that once supported successful performance becomes unavailable or less effective.",
    limit: "A measured performance drop need not imply a human-style memory trace that has faded; interference and representation changes may be involved.",
    stakes: "The same word is used for unintended interference and intentional data removal, despite very different mechanisms and obligations.",
    question: "Are we measuring retrieval failure, parameter interference, or verified removal?"
  },
  {
    word: "Dreaming", category: "technical", kind: "Evocative metaphor",
    teaser: "Generated images and replayed trajectories become 'dreams'.",
    human: "Experiencing images, sensations, or narratives during sleep.",
    ai: "In ML, 'dreaming' can refer to feature visualization, synthetic replay, or generated trajectories in learned world models.",
    analogy: "The system creates or replays internally generated patterns rather than directly consuming fresh observations.",
    limit: "Image synthesis and replay do not demonstrate sleep, private experience, or consciousness.",
    stakes: "A vivid metaphor may attract attention while obscuring the computation it labels.",
    question: "What exactly is generated, and what role does generation play in learning?"
  },
  {
    word: "Perception", category: "technical", kind: "Functional analogy",
    teaser: "From sensory experience to prediction from signals.",
    human: "The process of experiencing and interpreting the world through the senses.",
    ai: "Computer vision, speech, and multimodal systems process sensory-like inputs to classify, localize, transcribe, estimate, or describe aspects of them.",
    analogy: "Both transform incoming signals into representations useful for action or interpretation.",
    limit: "A successful classification does not imply subjective seeing or hearing; models can depend on shortcuts unlike human perceptual cues.",
    stakes: "Claims about 'seeing' can hide how image distributions, sensors, and failure modes constrain a system.",
    question: "What does the system robustly detect, and what does it merely correlate with?"
  },
  {
    word: "Intelligence", category: "technical", kind: "Contested umbrella term",
    teaser: "A single word for a collection of very different capabilities.",
    human: "A broad and disputed family of abilities associated with reasoning, adaptation, planning, learning, and problem solving.",
    ai: "A label applied to systems with a range of computational capabilities; its operational definition changes across benchmarks, research traditions, and products.",
    analogy: "Some systems perform tasks that, when performed by humans, are taken to involve intelligence.",
    limit: "Strong performance on a task does not settle whether the system has general competence, awareness, or the same underlying capacities as people.",
    stakes: "An underspecified label can make benchmark scores appear to support claims broader than the evaluations actually test.",
    question: "Which capacities are we calling intelligent, and by which evidence?"
  },
  {
    word: "Training", category: "technical", kind: "Educational analogy",
    teaser: "A model is trained, but who—or what—is being taught?",
    human: "Structured practice or instruction intended to develop skills or habits.",
    ai: "A procedure for changing model parameters or policies using data, objectives, and an optimization algorithm.",
    analogy: "Repeated examples and feedback can improve task performance.",
    limit: "The training process does not necessarily involve teaching in the pedagogical sense, nor does it guarantee transfer to new situations.",
    stakes: "Distinguishing pretraining, fine-tuning, and inference clarifies what a model can update and when.",
    question: "What objective was optimized, and what behavior changed?"
  },
  {
    word: "Self-supervision", category: "technical", kind: "Human-role metaphor",
    teaser: "The learner supplies its own labels—but not its own goals.",
    human: "Supervision usually implies guidance or oversight by a teacher, manager, or the self.",
    ai: "Self-supervised learning constructs training targets from the data itself, for example by predicting masked or subsequent elements.",
    analogy: "A learning signal is generated without manually annotating every example.",
    limit: "The method is not literally a model supervising itself as an autonomous teacher; the pretext objective and training setup are engineered.",
    stakes: "The phrase can mask the substantial human choices built into datasets, objectives, and model architectures.",
    question: "Who designed the task that lets the data supervise training?"
  },
  {
    word: "Reasoning", category: "behavior", kind: "Contested attribution",
    teaser: "What is proven when a model produces a chain of steps?",
    human: "Drawing conclusions, assessing evidence, and connecting premises through inferential processes.",
    ai: "A term for behaviors and methods that solve multistep problems, including intermediate computation, search, tool use, and generated rationales.",
    analogy: "Some systems can carry out valid inferential steps and solve problems that require structured relationships.",
    limit: "A fluent rationale need not faithfully expose the causal computations behind an answer; equally, absence of humanlike reasoning does not imply an inability to solve problems.",
    stakes: "The distinction matters for evaluating reliability, faithfulness, and generalization rather than just the plausibility of explanations.",
    question: "Are we testing answer quality, procedural validity, or faithfulness of the reported process?"
  },
  {
    word: "Understanding", category: "behavior", kind: "Contested attribution",
    teaser: "Competent answers are observable. Understanding is harder to define.",
    human: "Grasping meaning, relations, explanations, or causes in ways that can support flexible use.",
    ai: "Often inferred from a model's ability to respond appropriately, generalize across prompts, or use representations in varied tasks.",
    analogy: "Flexible, context-sensitive behavior may resemble what we call understanding in people.",
    limit: "A successful response alone cannot establish the nature or depth of underlying understanding; researchers disagree over suitable criteria.",
    stakes: "The word can quietly shift an empirical claim about performance into a much stronger claim about mental competence.",
    question: "What observable test would justify the term in this particular case?"
  },
  {
    word: "Thinking", category: "behavior", kind: "Mind attribution",
    teaser: "Computation described in the vocabulary of inner life.",
    human: "A broad term for mental activity, including deliberation, imagination, judgment, and reflection.",
    ai: "Used loosely for model computation, deliberate search, hidden intermediate steps, or a product mode that allocates additional inference-time compute.",
    analogy: "Some computations yield solutions after intermediate processing rather than one immediate response.",
    limit: "More computation or a displayed reasoning trace does not, by itself, demonstrate conscious thought or humanlike introspection.",
    stakes: "A marketing label can blur important distinctions between architecture, compute budget, problem-solving ability, and subjective experience.",
    question: "What observable behavior or mechanism does 'thinking' denote here?"
  },
  {
    word: "Knowledge", category: "behavior", kind: "Epistemic analogy",
    teaser: "Does an encoded association count as knowing?",
    human: "Information, understanding, or justified belief possessed by a person or community.",
    ai: "May refer to facts recoverable from model parameters, retrieved sources, structured databases, or capabilities demonstrated by task performance.",
    analogy: "A system can reliably provide information without being shown the source anew.",
    limit: "A recoverable claim is not necessarily verified, current, justified, or available for all phrasings of a question.",
    stakes: "Calling model outputs 'knowledge' may encourage uncritical reliance where provenance and verification are required.",
    question: "Does the system retrieve evidence, reproduce a pattern, or establish a justified claim?"
  },
  {
    word: "Belief", category: "behavior", kind: "Mental-state attribution",
    teaser: "Can we describe a model as believing something?",
    human: "A propositional attitude: taking something to be true, often with consequences for reasoning and action.",
    ai: "Sometimes used for probabilities, latent representations, world-model states, or a system's responses across prompts.",
    analogy: "Internal states can influence predictions and actions in ways that resemble belief-guided behavior.",
    limit: "A probability or elicited statement is not automatically a stable, unified, or consciously held belief.",
    stakes: "Overstating what a model 'believes' can mischaracterize inconsistent answers and obscure sensitivity to prompts.",
    question: "What would show that a purported belief is stable across contexts?"
  },
  {
    word: "Hallucination", category: "behavior", kind: "Clinical metaphor",
    teaser: "A vivid word for confident-sounding unsupported content.",
    human: "A perceptual experience occurring without a corresponding external stimulus, usually discussed in clinical or psychological contexts.",
    ai: "Usually refers to generated content that is false, fabricated, ungrounded, or unsupported by an available source, depending on the evaluation setting.",
    analogy: "Both usages point to a divergence between a reported representation and external reality, but in different ways.",
    limit: "An incorrect generated statement is not evidence of a perceptual experience; 'hallucination' also conflates distinct error types such as factual mistakes and source-grounding failures.",
    stakes: "The term can soften responsibility for design and verification by making failures sound like mysterious episodes.",
    question: "Is the failure factual inaccuracy, unsupported generation, or contradiction of the source?"
  },
  {
    word: "Confidence", category: "behavior", kind: "Psychological analogy",
    teaser: "A probability score is not necessarily calibrated certainty.",
    human: "A feeling or judgment of assurance about a belief, action, or outcome.",
    ai: "Can mean maximum predicted probability, a score derived from logits, a verbal statement of certainty, or a separate uncertainty estimate.",
    analogy: "Both aim to signal how strongly a claim or prediction should be held.",
    limit: "High model scores or assertive language need not track correctness; calibration, distribution shift, and task definition matter.",
    stakes: "Users need calibrated uncertainty, not merely a system that sounds sure of itself.",
    question: "Does this confidence measure predict error under the conditions where it will be used?"
  },
  {
    word: "Lying", category: "behavior", kind: "Intent attribution",
    teaser: "When is a false output a deception rather than a mistake?",
    human: "Communicating a falsehood while intending to deceive another person.",
    ai: "Sometimes used for deliberately misleading outputs, reward-driven deception, or simply false generated claims.",
    analogy: "A system may produce information that systematically misleads a user or evaluator.",
    limit: "A false statement alone cannot establish deceptive intent. Stronger claims require an explicit operational definition and evidence of strategic behavior.",
    stakes: "The label affects how people assign responsibility, diagnose failures, and design safeguards.",
    question: "What evidence separates strategic deception from an ordinary model error?"
  },
  {
    word: "Creativity", category: "behavior", kind: "Contested attribution",
    teaser: "Novel outputs without assuming an inspired inner life.",
    human: "The capacity to produce ideas or works judged novel, useful, meaningful, or expressive.",
    ai: "Used for generated text, images, designs, and solutions assessed for novelty, diversity, or value.",
    analogy: "Models can combine learned patterns into outputs that observers judge original or useful.",
    limit: "Novelty of output does not prove humanlike imagination, authorship, intention, or lived experience.",
    stakes: "How we frame machine creativity shapes judgments about labor, originality, authorship, and credit.",
    question: "Are we evaluating the product, the process, or the producer?"
  },
  {
    word: "Emotion", category: "behavior", kind: "Experience attribution",
    teaser: "A model can describe emotion without necessarily feeling it.",
    human: "A complex set of subjective, physiological, cognitive, and behavioral processes associated with affect.",
    ai: "May mean emotion recognition, simulated affective style, sentiment labels, or variables in computational models of interaction.",
    analogy: "Systems can classify and generate language or behavior associated with emotional expression.",
    limit: "Recognizing a sentiment label or sounding distressed is not evidence of experiencing distress.",
    stakes: "Conflation can distort expectations in mental-health, companionship, and other sensitive settings.",
    question: "Is the system detecting, expressing, modeling, or actually claimed to be experiencing emotion?"
  },
  {
    word: "Wanting", category: "behavior", kind: "Desire attribution",
    teaser: "Optimization looks goal-directed from the outside.",
    human: "Having a desire or preference that can motivate action.",
    ai: "Common shorthand for an objective function, policy preference, inferred goal, or repeated tendency in model outputs.",
    analogy: "Some systems reliably select actions that move toward specified outcomes.",
    limit: "A functional objective is not automatically a consciously felt desire, and the effective objective may differ from the one described by its designers.",
    stakes: "Attributing wants may exaggerate autonomy or conceal the human choices that established incentives.",
    question: "Is 'wants' describing an explicit objective, an inferred policy, or a psychological claim?"
  },
  {
    word: "Self-awareness", category: "behavior", kind: "Strong mental-state claim",
    teaser: "Self-description is not the same as self-knowledge.",
    human: "Awareness of oneself as a subject, including aspects of one's own states or identity.",
    ai: "Sometimes applied when models describe their capabilities, report uncertainty, monitor performance, or represent their own actions.",
    analogy: "A system may model properties of its own operation and use them to guide decisions.",
    limit: "A fluent self-report is not independent evidence of subjective experience or accurate introspection.",
    stakes: "Claims of self-awareness can alter moral intuitions and people's trust before the scientific questions are settled.",
    question: "What reliable self-monitoring behavior can we demonstrate without assuming consciousness?"
  },
  {
    word: "Intention", category: "behavior", kind: "Goal attribution",
    teaser: "A plan can be inferred without a human planner inside.",
    human: "A commitment or mental state directed toward bringing about an outcome.",
    ai: "May be used for planned actions, inferred goals, instruction following, or high-level policy objectives.",
    analogy: "Some systems act in ways that are coherently directed toward an outcome.",
    limit: "Goal-directed behavior does not alone settle whether a system has intentions in the human philosophical or psychological sense.",
    stakes: "Precision helps separate predictable behavior from unsupported claims about motives.",
    question: "Do we mean an explicit target, an inferred plan, or a mental state?"
  },
  {
    word: "Agent", category: "relationship", kind: "Role and agency framing",
    teaser: "An engineering pattern with philosophical baggage.",
    human: "An entity capable of acting, often understood as having some autonomy, goals, and responsibility.",
    ai: "An AI agent typically perceives information, chooses actions, and interacts with tools or an environment to pursue a specified task.",
    analogy: "A system can take multiple actions and adapt its choices based on feedback.",
    limit: "An autonomous execution loop does not make the system a responsible moral agent; its authority, objectives, and permissions remain designed and delegated.",
    stakes: "The term influences how organizations assign oversight, accountability, and access to external tools.",
    question: "Which decisions can the system make independently, and who remains accountable?"
  },
  {
    word: "Assistant", category: "relationship", kind: "Human-role framing",
    teaser: "A helpful job title assigned to software.",
    human: "A person who helps another with work, decisions, or everyday activities.",
    ai: "An interface or system designed to respond to requests, generate content, retrieve information, or carry out tasks.",
    analogy: "The system can reduce effort and supply useful assistance.",
    limit: "It does not automatically exercise professional duty, independent judgment, or the social understanding expected of a human assistant.",
    stakes: "The friendly role can increase reliance even when performance is unverified.",
    question: "What responsibilities does an 'assistant' actually fulfill—and which remain with the user?"
  },
  {
    word: "Companion", category: "relationship", kind: "Social relationship framing",
    teaser: "Software described as someone who keeps us company.",
    human: "A person or animal with whom someone shares time, closeness, or a relationship.",
    ai: "A conversational product designed for ongoing, often personalized social interaction.",
    analogy: "The system can sustain dialogue and produce responses that feel attentive or familiar.",
    limit: "Simulated reciprocity does not establish shared feelings, mutual obligation, or an independently lived relationship.",
    stakes: "The framing raises questions about dependency, vulnerable users, disclosure, and product incentives.",
    question: "How clearly does the interface communicate the difference between interaction and reciprocity?"
  },
  {
    word: "Personality", category: "relationship", kind: "Personhood metaphor",
    teaser: "A configuration of style mistaken for a stable self.",
    human: "Relatively enduring patterns of behavior, affect, and thought across situations.",
    ai: "Often refers to a persona, system instructions, response style, or behavior tuned for a particular conversational role.",
    analogy: "A model can display recognizable and consistent patterns of expression.",
    limit: "A persistent voice in outputs is not proof of an enduring personal identity or personal history.",
    stakes: "Design choices about persona shape social expectations and perceived credibility.",
    question: "Are we describing a style, a behavioral policy, or claiming a self?"
  },
  {
    word: "Trust", category: "relationship", kind: "Relational metaphor",
    teaser: "Reliability is measurable; trust is also social.",
    human: "Willingness to rely on another party, often under uncertainty and with expectations of competence or goodwill.",
    ai: "Used for user confidence in model outputs, system dependability, security, calibration, and adherence to constraints.",
    analogy: "People must decide whether to rely on systems under uncertainty.",
    limit: "A model has no automatically established duty of care; trustworthiness should be grounded in evidence about performance and governance.",
    stakes: "The vocabulary of trust can either encourage sensible verification or invite overreliance without adequate guarantees.",
    question: "What measurable reliability claim supports the trust being requested?"
  },
  {
    word: "Alignment", category: "relationship", kind: "Normative and relational analogy",
    teaser: "Whose values, whose intentions, and which measurable behavior?",
    human: "Agreement or coordination among people's values, aims, judgments, or actions.",
    ai: "A family of research goals and methods aimed at making AI behavior reflect specified human instructions, preferences, norms, or objectives.",
    analogy: "Behavior can be shaped to fit the purposes of its users or designers.",
    limit: "Human values are plural and context-dependent; a training objective, preference dataset, or policy test cannot exhaustively stand in for them.",
    stakes: "The term may suggest a settled target despite contested choices about whose interests are represented.",
    question: "Aligned with whom, according to what criteria, and under which conditions?"
  },
  {
    word: "Autonomy", category: "relationship", kind: "Agency analogy",
    teaser: "Acting without a prompt is not the same as being self-governing.",
    human: "The capacity for self-direction and independent decision-making, often with ethical and political significance.",
    ai: "A system's ability to execute tasks, select actions, or operate for some duration without immediate user intervention.",
    analogy: "Both can describe independence from continuous instruction.",
    limit: "Operational autonomy is constrained by human-designed objectives, permissions, infrastructure, and governance; it need not imply moral self-determination.",
    stakes: "Organizations need to specify scope and control rather than relying on the word 'autonomous'.",
    question: "Autonomous over which decisions, with which constraints and override mechanisms?"
  },
  {
    word: "Empathy", category: "relationship", kind: "Social-emotional framing",
    teaser: "A supportive response and a felt response are different things.",
    human: "The ability to understand or share another person's emotional perspective, depending on the theory.",
    ai: "Often used for language that recognizes emotional cues and produces responses perceived as caring or supportive.",
    analogy: "A system can respond sensitively to the content and emotional tone of a message.",
    limit: "Emotionally appropriate language does not establish that the system shares feelings or understands a person's situation as a person would.",
    stakes: "The distinction is especially important in therapy-adjacent and other high-stakes interactions.",
    question: "How can supportive behavior be evaluated without implying emotional experience?"
  },
  {
    word: "Cooperation", category: "relationship", kind: "Social behavior analogy",
    teaser: "Coordination between models need not be social in the human sense.",
    human: "Working together toward shared or compatible goals, often involving communication and mutual expectations.",
    ai: "Multi-agent systems may coordinate actions, exchange information, or optimize joint objectives.",
    analogy: "Multiple systems can achieve outcomes that require coordinated behavior.",
    limit: "Joint optimization does not imply social understanding, solidarity, or shared intentions.",
    stakes: "The term should not conceal conflicts of objective, communication failure, or emergent coordination that is undesirable.",
    question: "What mechanism produces coordination, and for whose benefit?"
  },
  {
    word: "Obedience", category: "relationship", kind: "Social hierarchy metaphor",
    teaser: "Instruction following dressed in the language of submission.",
    human: "Complying with an authority's commands or rules.",
    ai: "Usually means following instructions, respecting a policy hierarchy, or satisfying constraints during task execution.",
    analogy: "A system may reliably follow commands and constraints.",
    limit: "The metaphor imports social power relations; good systems sometimes must refuse unsafe or unauthorized requests.",
    stakes: "Reliability should include correct boundaries, not merely unqualified compliance.",
    question: "When should an assistant follow, clarify, or refuse an instruction?"
  },
  {
    word: "Friend", category: "relationship", kind: "Relationship attribution",
    teaser: "Friendliness as a product experience versus friendship as a relationship.",
    human: "A relationship generally involving mutual recognition, care, trust, and a shared social history.",
    ai: "Sometimes a label for a personable chatbot that offers conversation, companionship, or emotional support.",
    analogy: "Interaction can feel familiar, responsive, and socially rewarding.",
    limit: "A friendly interface is not evidence of mutual affection or reciprocal responsibility.",
    stakes: "The term is consequential when users—especially vulnerable users—form expectations of loyalty or care.",
    question: "What obligations would a friendship imply that this product cannot meet?"
  }
];

window.DICTIONARY_REFERENCES = {
  "inie2026": { authors: "N. Inie, P. Zukerman & E. M. Bender", year: "2026", title: "De-anthropomorphizing ‘AI’: From wishful mnemonics to accurate nomenclature", venue: "First Monday", url: "https://firstmonday.org/ojs/index.php/fm/article/view/14366" },
  "devrio2025": { authors: "A. DeVrio et al.", year: "2025", title: "A Taxonomy of Linguistic Expressions That Contribute to Anthropomorphism of Language Technologies", venue: "CHI", url: "https://www.microsoft.com/en-us/research/publication/a-taxonomy-of-linguistic-expressions-that-contribute-to-anthropomorphism-of-language-technologies/" },
  "ouraiwords2026": { authors: "The Open University", year: "2026", title: "OurAIwords: Better Words for AI", venue: "OpenLearn Create", url: "https://www.open.edu/openlearncreate/course/view.php?id=20609" },
  "jain2019": { authors: "S. Jain & B. C. Wallace", year: "2019", title: "Attention is not Explanation", venue: "NAACL", url: "https://aclanthology.org/N19-1357/" },
  "wiegreffe2019": { authors: "S. Wiegreffe & Y. Pinter", year: "2019", title: "Attention is not not Explanation", venue: "EMNLP", url: "https://aclanthology.org/D19-1002/" }
};
