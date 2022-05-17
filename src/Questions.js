module.exports = {
    topics: [
        {
            name: "Anexiety",
            boundaries: [
                {
                    name: "Not Present",
                    maxValue: 0,
                },
                {
                    name: "Low",
                    minValue: 0,
                    maxValue: 2,
                },
                {
                    name: "Moderate",
                    minValue: 3,
                    maxValue: 7,
                },
                {
                    name: "High",
                    minValue: 8,
                    maxValue: 12,
                },
                {
                    name: "Very High",
                    minValue: 13,
                }
            ],
            questions: [
                {
                    title: "Repetitive anxious complaints/concerns",
                    description: "For example, persistently seeks attention or reassurance from others regarding schedules, school, clothing, separation from caregiver, or relationships. For example, the young person may repeatedly call his or her parent from school to make sure the parent is coming to pick him or her up after school, continuously come off the soccer field to check that his or her parents are still watching the game, or require constant reassurance that soccer practice is always on Thursdays.",
                },
                {
                    title: "Unrealistic fears",
                    description: "For example, fear of being abandoned, being left alone, or being with others (social phobia); intense fear of specific objects or situations.",
                },
                {
                    title: "Obsessive thoughts",
                    description: "Unwanted, intrusive ideas or irrational thoughts that cannot be eliminated through conscious attempts to ignore or suppress them (for example, thoughts about being responsible for a tragedy, sinister or malicious thoughts, repetitive or nonsensical words; any thoughts that the young person “just can’t get out of my head”).",
                },
                {
                    title: "Intrusive thoughts or flashbacks",
                    description: "Disturbing memories or images that intrude into thoughts, or unexpected recall of adverse events.",
                },
                {
                    title: "Episodes of panic",
                    description: "Cascade of symptoms of fear, anxiety, loss of control. For example, the young person has sudden episodes where he or she is overwhelmed by feelings of losing control; the young person may freeze, cry, try to run away, or become aggressive due to severe panic",
                },
                {
                    title: "Nightmares",
                    description: "The young person experiences frightening dreams, night terrors, and difficulty functioning upon awakening. For example, the young person awakes suddenly with eyes widened, hyperventilating, crying, or screaming. He or she may wake from sleep with expressions of fear (including nonverbal); a younger child may cling to a parent upon awakening, cry excessively, and require a significant amount of time to soothe.",
                },
                {
                    title: "Hypervigilance",
                    description: "The young person demonstrates physiological reactiveness (“jumpiness”) or feeling as though in danger.",
                }
            ]
        },
        {
            name: "Aggression",
            boundaries: [
                {
                    name: "Not Present",
                    maxValue: 0,
                },
                {
                    name: "Low",
                    minValue: 0,
                    maxValue: 3,
                },
                {
                    name: "Moderate",
                    minValue: 4,
                    maxValue: 9,
                },
                {
                    name: "High",
                    minValue: 10,
                    maxValue: 14,
                },
                {
                    name: "Very High",
                    minValue: 15,
                }
            ],
            questions: [
                {
                    title: "Verbal abuse",
                    description: "For example, others were threatened, screamed at, cursed at. The young person may denigrate others, including family, friends, or teachers. There is no distinction as to whether or not the abuse is intended to cause emotional harm.",
                },
                {
                    title: "Physical abuse",
                    description: "For example, others were hit, shoved, scratched, sexually abused. This item identifies physically aggressive behaviour without making the distinction between intentional and unintentional behaviours, whereas Item D4d, “Violence to others”, identifies purposeful, malicious, or vicious intent",
                },
                {
                    title: "Socially inappropriate or disruptive behaviour",
                    description: "For example, the young person made disruptive sounds or noises, screamed out during class, smeared or threw feces. This item focuses on behaviours that would be viewed as contradictory to social norms or that have a negative impact on others.",
                },
                {
                    title: "Destructive behaviour toward property",
                    description: "The young person acts in a deliberate manner to destroy his or her own or others’ things. For example, throwing or breaking objects, turning over furniture, vandalism.",
                },
                {
                    title: "Outburst of anger",
                },
            ]
        },
        {
            name: "Social Disengagement",
            boundaries: [
                {
                    name: "Not Present",
                    maxValue: 0,
                },
                {
                    name: "Low",
                    minValue: 1,
                    maxValue: 2,
                },
                {
                    name: "Moderate",
                    minValue: 3,
                    maxValue: 5,
                },
                {
                    name: "High",
                    minValue: 6,
                    maxValue: 8,
                },
                {
                    name: "Very High",
                    minValue: 9,
                }
            ],
            questions: [
                {
                    title: "Lack of interest in social interaction",
                    description: "This indicator deals with the young person’s overall interest in socializing with others, regardless of the closeness of the tie. The young person demonstrates a general avoidance or rejection of people around him or her, including family or friends, regardless of the event. For example, the young person will avoid social interactions, online or phone contact, or being with others. He or she may make excuses to be alone or is content to be alone in his or her room.",
                },
                {
                    title: "Lack of motivation",
                    description: "Subjective reporting or objective observation of an absence of spontaneous goal-directed activity related to any aspect of living, such as ADL, IADL, social, or recreational activities (for example, the young person may show limited or no motivation to get dressed in the morning, get ready for meals, attend to grooming, or attend activities).",
                },
                {
                    title: "Anhedonia",
                    description: "For example, saying “I don’t have fun anymore” or “I don’t like to do anything.” The young person experiences a change in overall interest in day-to-day life; previously interesting activities no longer provide enjoyment; may present as gloomy during favourite activities. When assessing anhedonia, consider both verbal and nonverbal indicators.",
                },
                {
                    title: "Withdrawal from activities of interest",
                    description: "Withdrawal from normal pattern of long-standing activities or interactions with family or friends. This indicator deals with a substantial reduction in the young person’s level of participation in activities or involvement with his or her long-standing relationships with others. For example, the young person refuses to attend his or her usual youth group, will not answer when friends call on the phone or come to the door when they come to visit, or drops out of a sports team that he or she formerly enjoyed being a part of.",
                },
            ]
        },
        {
            name: "Distractibility/Hyperactivity",
            boundaries: [
                {
                    name: "Not Present",
                    maxValue: 0,
                },
                {
                    name: "Low",
                    minValue: 0,
                    maxValue: 8,
                },
                {
                    name: "Moderate",
                    minValue: 9,
                    maxValue: 10,
                },
                {
                    name: "High",
                    minValue: 11,
                    maxValue: 12,
                },
                {
                    name: "Very High",
                    minValue: 13,
                }
            ],
            questions: [
                {
                    title: "Impulsive",
                    description: "The young person responds to his or her environment impul­sively, that is, with lack of planning or insight. He or she may participate in risky actions without thinking (for example, running into traffic, jumping off a high roof). The young person may have difficulty waiting his or her turn (for example, barges in front of others, unable to wait in line).",
                },
                {
                    title: "Easily distracted",
                    description: "The young person demonstrates episodes of difficulty paying attention and gets easily sidetracked. The young person may have difficulty filtering environmental stimulation (for example, the young person does not notice when the teacher calls his or her name because he or she is looking around the classroom).",
                },
                {
                    title: "Hyperactivity",
                    description: "Excessive level of activity or motor excitation. For example, a young person runs around the room, climbs on furniture, and makes noises when he or she is supposed to be sitting.",
                },
                {
                    title: "Disorganization",
                    description: "For example, the young person has problems organizing personal belongings, has difficulty adhering to schedule, may frequently fail to plan ahead, may lose things constantly, is often unprepared for his or her day.",
                },
            ]
        },
        {
            name: "Sleep Difficulties",
            boundaries: [
                {
                    name: "Not Present",
                    maxValue: 0,
                },
                {
                    name: "Low",
                    minValue: 0,
                    maxValue: 3,
                },
                {
                    name: "Moderate",
                    minValue: 4,
                    maxValue: 9,
                },
                {
                    name: "High",
                    minValue: 10,
                    maxValue: 12,
                },
                {
                    name: "Very High",
                    minValue: 13,
                }
            ],
            questions: [
                {
                    title: "Wakes multiple times at night",
                },
                {
                    title: "Falls asleep during day",
                },
                {
                    title: "Resists bedtime",
                },
            ]
        },
        {
            name: "Peer Conflict",
            boundaries: [
                {
                    name: "Not Present",
                    maxValue: 0,
                },
                {
                    name: "Moderate",
                    minValue: 1,
                    maxValue: 1,
                },
                {
                    name: "High",
                    minValue: 2,
                    maxValue: 2,
                },
                {
                    name: "Very High",
                    minValue: 3,
                }
            ],
            questions: [
                {
                    title: "Conflict with or repeated criticism of close friends",
                    description: "The young person engages in frequent, persistent interpersonal conflicts with the friends (for example, persistent arguing with peers, repeatedly threatens peers).",
                },
                {
                    title: "Friends are persistently hostile or critical of child/youth",
                    description: "A pattern of blaming, scapegoating, denigrating the young person by friends. For example, a group of peers consistently blames the young person for getting them into trouble, even though it is not the case.",
                },
                {
                    title: "Pervasive conflict with peers",
                    description: "The young person does not have mutually satisfying, conflict-free relationships with same-age peers. The young person may be hostile and defensive toward peers at school or in the community. Cycles of conflict are entrenched in the child’s or youth’s repertoire (for example, he or she cannot play unsupervised on the schoolyard without an altercation).",
                },
            ]
        },
        {
            name: "Depression", 
            boundaries: [
                {
                    name: "Not Present",
                    maxValue: 0,
                },
                {
                    name: "Low",
                    minValue: 0,
                    maxValue: 2,
                },
                {
                    name: "Moderate",
                    minValue: 3,
                    maxValue: 7,
                },
                {
                    name: "High",
                    minValue: 8,
                    maxValue: 12,
                },
                {
                    name: "Very High",
                    minValue: 13,
                }
            ],
            questions: [
                {
                    title: "Sad, Pained, or Worried Facial Expressions",
                    description: "For example, furrowed brow, constant frowning, downturned mouth, eyes that are drooped.",
                },
                {
                    title: "Made Negative Statements",
                    description: "For example, “Nothing matters”; “No one likes me”; “I hate my life”; “Would rather be dead”; “What’s the use?”; “Let me die.”",
                },
                {
                    title: "Self-Deprecation",
                    description: "Subjective report indicating a negative view of self (for example, “I am stupid”; “I am bad”; “I can’t do anything right”; “I am nothing”; “I am of no use to anyone”). The young person may express a lack of self-worth and may belittle his or her own accomplishments or activities.",
                },
                {
                    title: "Expressions of Guilt or Shame",
                    description: "Any statements suggesting a feeling of self-blame, self-reproach, self-accusation, or shame, regardless of the legitimacy or cause of the feelings (for example, “I’ve done something awful”; “This is all my fault”; “I’m a terrible person”). The young person may express feelings of responsibility for events over which he or she had no control.",
                },
                {
                    title: "Expressions of Hopelessness",
                    description: "For example, “There’s no hope for the future”; “Nothing’s going to change for the better”; “It won’t matter whatever I do”; “Why should I try?” The young person may indicate that he or she has no control over the future and will not amount to anything",
                },
            ]
        },
    ]
}