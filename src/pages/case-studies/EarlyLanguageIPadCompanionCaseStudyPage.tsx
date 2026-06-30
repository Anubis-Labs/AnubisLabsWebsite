import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

export function EarlyLanguageIPadCompanionCaseStudyPage() {
    return (
        <div className="w-full">
            <section className="container mx-auto px-4 pt-8 pb-24 lg:pt-16 lg:pb-32 max-w-4xl relative z-10">
                <div className="mb-8">
                    <Link to="/case-studies" className="text-primary hover:underline font-medium">&larr; Back to Case Studies</Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                    Early-Language iPad Companion
                </h1>
                <p className="text-2xl text-primary font-medium mb-12">Outcome: A local-first communication and speech-development app built for toddler-scale interaction, parent customization, and offline use</p>

                <div className="space-y-16">
                    {/* SUMMARY & CLIENT PROFILE */}
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Summary</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                A family needed a highly personal iPad experience to help a young child communicate, practice early speech, move through routines, and stay engaged without exposing the child to adult-style menus or fragile cloud dependencies.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                We built a native iPad companion that combines AAC-style communication cards, phrase ladders, parent-recorded voice, daily routines, progress tracking, and play-based speech practice. The product is designed around very large touch targets, calm storybook visuals, offline audio, and child-safe navigation.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h2 className="text-xl font-bold mb-4">Client Profile</h2>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Family-centered early-language and communication use case</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> iPad-first environment for a very young child</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Parent-managed content, photos, audio, routines, and settings</li>
                                <li className="flex gap-2 items-start"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Strong need for privacy, reliability, and low-friction daily use</li>
                            </ul>
                        </div>
                    </div>

                    {/* THE PROBLEM & CONSTRAINTS */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Problem</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            Most communication tools are either clinical, generic, too adult-structured, or too brittle for a toddler using an iPad independently. The child needed something that could support real communication, not just entertainment: requests, feelings, routines, people, favorite objects, and emerging speech attempts.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            The parent also needed a way to customize the system over time: add real photos, record familiar voices, adjust phrase ladders, review progress, and keep the experience calm on lower-sensory days.
                        </p>

                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">Constraints</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Must work locally on iPad without relying on cloud services during use</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Touch targets and flows must be toddler-safe</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Parent controls must be gated away from kid mode</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Speech output must support bundled voice, system TTS fallback, and parent recordings</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Progress tracking must be useful without turning the app into a test</li>
                            <li className="bg-background border border-white/5 p-4 rounded-lg">Visual design must stay warm, playful, and low-overwhelm</li>
                        </ul>
                    </div>

                    {/* SOLUTION */}
                    <div>
                        <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-6 text-foreground">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            We built a native SwiftUI iPad application with SwiftData persistence and a local-first media layer.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            The child experience is organized around a world-like home surface instead of a dense app menu. A child can tap into simple intent areas such as wanting something, people, calm and feelings, routines, train play, or the toy box. Inside those spaces, the app uses large card tiles, repeated-tap phrase growth, spoken feedback, and full-screen activities.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                            Parents get a separate gated studio for managing cards, categories, phrase ladders, routines, progress, speech rate, sound effects, and visual palette.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Communication System</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">AAC-style cards:</strong> Requests, labels, actions, feelings, body words, routines, people, and favorite objects.</li>
                                    <li><strong className="text-foreground">Phrase ladders:</strong> Repeated taps grow from single words into fuller sentences without forcing a formal lesson.</li>
                                    <li><strong className="text-foreground">Parent voice:</strong> Each card can use familiar recorded audio, bundled voice-bank clips, or on-device text-to-speech fallback.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Daily Use Layer</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Routine boards:</strong> Daily sequences for bedtime, morning, pool time, leaving the house, and other repeatable moments.</li>
                                    <li><strong className="text-foreground">Local photos:</strong> Application Support storage and thumbnail caching keep familiar images fast and available offline.</li>
                                    <li><strong className="text-foreground">Progress signals:</strong> Logs track card taps, phrase use, routine steps, tracing, and sound recording without making the child feel tested.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Play-Based Speech Practice</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Activity library:</strong> 29 kid activities spanning finding, matching, tracing, counting, feelings, train play, sound copy, and race-car play.</li>
                                    <li><strong className="text-foreground">Child-safe interaction:</strong> Full-screen play spaces, large targets, repeated patterns, reduced-motion support, and fewer interruption points.</li>
                                    <li><strong className="text-foreground">Rewards with restraint:</strong> Encouragement loops support engagement without constantly breaking the flow of play.</li>
                                </ul>
                            </div>

                            <div className="bg-card glass border border-white/5 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 text-primary">Parent Studio</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                                    <li><strong className="text-foreground">Gated controls:</strong> Adult management stays outside kid mode and away from accidental taps.</li>
                                    <li><strong className="text-foreground">Editable content:</strong> Parents can manage cards, categories, phrase ladders, routines, sounds, speech rate, and palette.</li>
                                    <li><strong className="text-foreground">Useful summaries:</strong> Dashboard surfaces weekly digest, top words, first-time word moments, and recent activity.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ARCHITECTURE & RESULTS */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold border-b border-white/10 pb-2 mb-4">Architecture Breakdown</h2>
                            <ul className="space-y-3 text-sm text-foreground bg-background border border-white/5 p-6 rounded-xl">
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Frontend: Native SwiftUI iPad app</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Persistence: SwiftData models for cards, categories, routines, progress logs, and settings</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Audio: AVFoundation for speech, playback, recording, sound effects, and synthesized tones</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Media: Local Application Support storage for photos and recordings, with thumbnail caching</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Child UI: Full-screen SwiftUI views, illustrated scene backgrounds, large targets, and reduced-motion support</li>
                                <li className="flex gap-2 items-center"><span className="text-primary shrink-0">&rarr;</span> Parent UI: Gated management studio for content, routines, ladders, progress, and settings</li>
                            </ul>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Results</h2>
                            <ul className="space-y-6 text-center text-foreground font-medium">
                                <li>
                                    <span className="text-primary text-2xl font-black block">Compiling Native Product</span>
                                    Verified with an iOS Simulator build
                                </li>
                                <li>
                                    <span className="text-primary text-2xl font-black block">Private By Design</span>
                                    Local-first architecture suitable for family use and offline daily routines
                                </li>
                                <li>
                                    <span className="text-primary text-2xl font-black block">Parent-Editable System</span>
                                    A flexible communication companion instead of a fixed content pack
                                </li>
                                <li>
                                    <span className="text-primary text-2xl font-black block">Toddler-Readable UX</span>
                                    Adult complexity hidden behind simple visual destinations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need a local-first child or family workflow?</h2>
                    <Button asChild size="lg" className="h-14 px-8 text-lg">
                        <Link to="/contact?inquiry=Case%20Study%3A%20Early-Language%20iPad%20Companion">Request the early-language companion case study</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
