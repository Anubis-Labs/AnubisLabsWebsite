import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function RealLifeMandarinLearningCaseStudyPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 max-w-4xl relative z-10">
                <div className="mb-8">
                    <Link to="/case-studies" className="text-primary hover:underline font-medium">&larr; Back to Case Studies</Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                    Real-Life Mandarin Learning App
                </h1>
                <p className="text-2xl text-primary font-medium mb-12">Outcome: Offline-first spoken-language coaching with guided practice, review, and real-world conversation flows</p>

                <div className="space-y-16">
                    {/* SUMMARY & CLIENT PROFILE */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Summary</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                A mobile learning product needed to turn beginner Mandarin practice into a calm daily habit, not a textbook, chatbot, or generic flashcard loop. We built an offline-first Android experience around short spoken lessons, native audio, gentle speech checks, practical life situations, review gates, and visible progress.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                The product helps adult beginners open the app, learn one useful phrase, hear it clearly, say it once, use it in a guided scene, and know where it fits in real life.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h2 className="text-xl font-bold mb-4">Client Profile</h2>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Founder-led consumer learning product</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Adult beginner language learners</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Mobile-first Android experience</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Audio-heavy, offline-friendly use case</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Practical spoken confidence over academic language study</li>
                            </ul>
                        </div>
                    </div>

                    {/* THE PROBLEM & CONSTRAINTS */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            Most language-learning apps either feel too abstract, too gamified, or too open-ended for a true beginner. The product needed to help users build spoken confidence through tiny, useful daily wins while avoiding the anxiety of harsh pronunciation grading or the clutter of a large curriculum dump.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            The challenge was to connect content, audio, speech practice, review, and progress into one coherent learning spine.
                        </p>

                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">Constraints</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Must work as an offline-first Android app with packaged content and audio</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Must support real speech practice while allowing skips and recovery</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Must keep beginners moving with small, low-pressure steps</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Must organize content by real-life use cases, not just course levels</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Must persist progress, review state, rewards, audio exposure, and session history</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Must avoid making experimental cinematic or game modes the core product path</li>
                        </ul>
                    </div>

                    {/* SOLUTION */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            We developed a structured mobile learning system around a real-life Mandarin Atlas model.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Offline Learning Spine</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Native Android:</strong> Kotlin and Jetpack Compose app shell with Today, Path, Review, and More tabs.</li>
                                    <li><strong className="text-foreground">Local state:</strong> Room database at version 13 for phrases, lessons, attempts, review state, rewards, analytics, audio assets, and resume cursors.</li>
                                    <li><strong className="text-foreground">Packaged assets:</strong> Content and audio ship with the app so the main learning path works offline.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Speech Practice With Recovery</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Gentle speech checks:</strong> Practice is designed to build confidence, not punish beginners.</li>
                                    <li><strong className="text-foreground">Failure handling:</strong> Partial-result fallback, no-speech recovery, unavailable-recognizer handling, and duplicate-start protection keep sessions from dead-ending.</li>
                                    <li><strong className="text-foreground">Escape path:</strong> Users can skip or recover instead of getting trapped in a broken microphone moment.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Real-Life Atlas Content</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Use-case organization:</strong> Content is grouped around survival, food, travel, work, social, family, health, weather, digital life, home, time, feelings, visits, and more.</li>
                                    <li><strong className="text-foreground">Pattern learning:</strong> Reusable sentence patterns and guided scenes help phrases become usable in context.</li>
                                    <li><strong className="text-foreground">Review loops:</strong> Scheduler and mistake-rescue flows bring weak or due phrases back without overwhelming the learner.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Calm Daily Habit Design</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Small next step:</strong> A daily recommendation engine chooses one useful action instead of exposing the whole product at once.</li>
                                    <li><strong className="text-foreground">Visible progress:</strong> XP, weekly recap, mastery shelves, review gates, and reward surfaces show movement without turning the app into a noisy game.</li>
                                    <li><strong className="text-foreground">Practical confidence:</strong> The main flow emphasizes hearing native audio, saying a phrase once, and using it in a real scenario.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* DELIVERED SURFACE */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">What It Delivered</h2>
                        <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-muted-foreground">
                                <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>14 real-life content packs across practical daily situations</li>
                                <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>34 reusable sentence patterns</li>
                                <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>43 guided conversation scenes with 258 conversation turns</li>
                                <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>564 phrase rows and 26 structured lessons</li>
                                <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>78 practice items and 474 lesson beats</li>
                                <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>Over 2,000 packaged Mandarin audio files</li>
                                <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>Phrase Bank, Pattern Library, guided Conversation, Training Wheels, Review, Pinyin support, and practice flows</li>
                                <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>Reward surfaces, XP, weekly recap, mastery shelves, and review gates</li>
                            </ul>
                        </div>
                    </div>

                    {/* ARCHITECTURE & RESULTS */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Architecture Breakdown</h2>
                            <ul className="space-y-3 text-sm text-foreground bg-background border border-white/5 p-6 rounded-xl">
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span>Frontend: Kotlin and Jetpack Compose Android app</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span>Persistence: Room database version 13 for local learning state</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span>Data spine: Repository-backed phrases, lessons, attempts, review state, rewards, analytics, audio assets, and resume cursors</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span>Audio: Packaged Mandarin files plus steady listening mode with pack-specific audio sets</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span>Speech: Recognition layer with fallback, recovery, duplicate-start protection, and hard timeout escape</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span>Quality: Content-integrity checks, migration tests, connected Android tests, and UIAutomator smoke coverage</li>
                            </ul>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Outcome</h2>
                            <p className="text-muted-foreground leading-relaxed text-center mb-8">
                                The result is a premium, practical language-learning app that feels like a calm spoken coach rather than a generic course. Users are guided toward one useful step at a time, hear native audio first, speak with forgiving feedback, recover mistakes through review, and build visible usable language across real-life situations.
                            </p>
                            <ul className="space-y-5 text-center text-foreground font-medium">
                                <li><span className="text-primary text-xl font-black block">Validator-Clean Core</span>Content asset validation passes with 0 errors</li>
                                <li><span className="text-primary text-xl font-black block">Atlas Spine Verified</span>Metadata and audio references are validator-clean</li>
                                <li><span className="text-primary text-xl font-black block">Release Caveat Preserved</span>Physical-device microphone and speech QA should complete before claiming full production speech verification</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Proof Points</h2>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>Content asset validation passes with 0 errors.</li>
                            <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>Atlas metadata and audio references are validator-clean.</li>
                            <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>Known warnings are limited to optional Road demo stand-in audio, not the core Atlas learning spine.</li>
                            <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>Launch-readiness evidence includes connected Android tests, migration tests, repository persistence tests, content integrity checks, and UIAutomator smoke coverage.</li>
                            <li className="flex gap-2 items-start"><span className="text-primary shrink-0">&rarr;</span>Remaining release caveat: physical-device microphone and speech QA should be completed before claiming full production speech verification.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need an offline-first learning product with real practice loops?</h2>
                    <Button asChild size="lg" className="h-14 px-8 text-lg">
                        <Link to="/contact?inquiry=Case%20Study%3A%20Real-Life%20Mandarin%20Learning%20App">Request the Mandarin learning app case study</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
