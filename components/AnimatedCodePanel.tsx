"use client";

import { useState, useEffect, useMemo, useSyncExternalStore } from "react";

interface DataEntry {
  tag: string;
  content: string;
}

const DATA_ENTRIES: DataEntry[] = [
  { tag: "name", content: "Akash Prabhu" },
  { tag: "age", content: "19" },
  { tag: "title", content: "Frontend Developer & UI Engineer" },
  { tag: "education", content: "B.E. CSE" },
  { tag: "stack", content: "HTML, CSS, JavaScript, React, TypeScript, Next.js, Node.js" },
  { tag: "award", content: "1st Place, DEFY'26 Hackathon" },
  { tag: "status", content: "Building & Innovating" },
];

type AnimationState = "empty" | "typing" | "pause" | "deleting";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function AnimatedCodePanel() {
  const [entryIndex, setEntryIndex] = useState(0);
  const [displayedLength, setDisplayedLength] = useState(0);
  const [animState, setAnimState] = useState<AnimationState>("empty");
  const [isVisible, setIsVisible] = useState(true);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const currentEntry = DATA_ENTRIES[entryIndex];
  const fullText = useMemo(() => {
    return `<${currentEntry.tag}>${currentEntry.content}</${currentEntry.tag}>`;
  }, [currentEntry]);

  // Pause animation when tab is inactive to save CPU and battery
  useEffect(() => {
    const handleVisibility = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Main animation timer loop with natural human pacing and idle optimization
  useEffect(() => {
    if (prefersReducedMotion || !isVisible) return;

    let timeoutId: NodeJS.Timeout;

    if (animState === "empty") {
      // 1. Completely empty state with cursor for 1 second before typing begins
      timeoutId = setTimeout(() => {
        setDisplayedLength(0);
        setAnimState("typing");
      }, 1000);
    } else if (animState === "typing") {
      // 2. Type character by character with natural cadence and realistic micro-stops
      if (displayedLength < fullText.length) {
        const nextChar = fullText[displayedLength];
        const prevChar = displayedLength > 0 ? fullText[displayedLength - 1] : "";

        // Calculate natural human typing speed with realistic micro-pauses
        let delay = 65; // Baseline typing speed (relaxed and smooth)

        // Micro-pause right after closing the opening tag '>' (e.g. `<title>` -> pause -> `Frontend...`)
        if (prevChar === ">" && displayedLength === currentEntry.tag.length + 2) {
          delay = 240;
        }
        // Micro-pause after commas in lists (e.g. `React, Next.js`)
        else if (prevChar === ",") {
          delay = 200;
        }
        // Occasional natural keystroke variation
        else if (displayedLength % 7 === 0) {
          delay = 110;
        } else if (nextChar === "<" && displayedLength > 0) {
          // Slight hesitation before starting the closing tag
          delay = 190;
        }

        timeoutId = setTimeout(() => {
          setDisplayedLength((prev) => prev + 1);
        }, delay);
      } else {
        // Full entry typed: pause for 2 seconds
        timeoutId = setTimeout(() => {
          setAnimState("pause");
        }, 0);
      }
    } else if (animState === "pause") {
      // 3. Keep completed entry visible for 2 seconds (2000ms)
      timeoutId = setTimeout(() => {
        setAnimState("deleting");
      }, 2000);
    } else if (animState === "deleting") {
      // 4. Reverse deletion at a steady, relaxed pace (~38ms/char)
      if (displayedLength > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedLength((prev) => prev - 1);
        }, 38);
      } else {
        // Returned to completely empty: move to next item and pause 1s
        timeoutId = setTimeout(() => {
          setEntryIndex((prev) => (prev + 1) % DATA_ENTRIES.length);
          setAnimState("empty");
        }, 0);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [animState, currentEntry.tag.length, displayedLength, fullText, isVisible, prefersReducedMotion]);

  // Render semantic tagged structure with syntax highlighting
  const renderContent = () => {
    if (prefersReducedMotion) {
      return (
        <span className="leading-relaxed">
          <span className="text-accent font-semibold tracking-tight">&lt;name&gt;</span>
          <span className="text-foreground font-normal mx-1">Akash Prabhu</span>
          <span className="text-accent font-semibold tracking-tight">&lt;/name&gt;</span>
        </span>
      );
    }

    // Completely empty state: shows clean blinking cursor without <></>
    if (animState === "empty" || displayedLength === 0) {
      return (
        <span className="inline-flex items-center min-h-[1.5em]" aria-hidden="true">
          <span className="inline-block w-2 h-4.5 bg-accent animate-pulse" />
        </span>
      );
    }

    const currentSubstr = fullText.slice(0, displayedLength);
    const openTagFull = `<${currentEntry.tag}>`;
    const openTagLen = openTagFull.length;
    const contentLen = currentEntry.content.length;

    let openTagPart = "";
    let contentPart = "";
    let closeTagPart = "";

    if (currentSubstr.length <= openTagLen) {
      openTagPart = currentSubstr;
    } else if (currentSubstr.length <= openTagLen + contentLen) {
      openTagPart = openTagFull;
      contentPart = currentSubstr.slice(openTagLen);
    } else {
      openTagPart = openTagFull;
      contentPart = currentEntry.content;
      closeTagPart = currentSubstr.slice(openTagLen + contentLen);
    }

    const showCursor = animState !== "pause";

    return (
      <span className="leading-relaxed break-words font-mono">
        {openTagPart && (
          <span className="text-accent font-semibold tracking-tight">
            {openTagPart}
          </span>
        )}
        {contentPart && (
          <span className="text-foreground font-normal mx-0.5">
            {contentPart}
          </span>
        )}
        {closeTagPart && (
          <span className="text-accent font-semibold tracking-tight">
            {closeTagPart}
          </span>
        )}
        {showCursor && (
          <span
            className="inline-block w-2 h-4.5 bg-accent ml-1 align-middle animate-pulse"
            aria-hidden="true"
          />
        )}
      </span>
    );
  };

  return (
    <div className="w-full">
      {/* Terminal Code Display Container */}
      <div className="border border-border bg-muted/40 overflow-hidden shadow-2xl transition-all">
        {/* Minimal Window Header */}
        <div className="flex items-center justify-between text-xs px-4 py-3 bg-background/80 border-b border-border text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
            <span className="ml-2 text-foreground/80 font-mono font-medium tracking-wide">
              developer.data.tsx
            </span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px] uppercase text-accent font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-pulse" />
            <span>live</span>
          </div>
        </div>

        {/* Animated Tag/Content Output Area (fixed minimum height to prevent layout shifts) */}
        <div className="p-6 sm:p-8 min-h-[160px] sm:min-h-[180px] flex items-center justify-start text-sm sm:text-base md:text-lg">
          <div className="w-full font-medium" aria-hidden="true">
            {renderContent()}
          </div>
          {/* Accessible, screen-reader friendly summary of developer profile */}
          <span className="sr-only">
            Akash Prabhu, 19, Frontend Developer & UI Engineer, B.E. CSE, skilled in HTML, CSS, JavaScript, React, TypeScript, Next.js, and Node.js. 1st Place at DEFY&apos;26 Hackathon.
          </span>
        </div>

        {/* Status bar */}
        <div className="px-4 py-2.5 border-t border-border/60 bg-background/50 text-[11px] font-mono flex items-center justify-between text-muted-foreground">
          <span className="text-accent/80 font-medium">
            Personal Data Stream
          </span>
          <span className="uppercase tracking-wider">
            UTF-8 · TSX
          </span>
        </div>
      </div>
    </div>
  );
}
