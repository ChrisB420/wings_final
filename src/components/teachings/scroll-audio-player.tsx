import { Pause, Play, Square, Volume2 } from "lucide-react";
import { useEffect, useState, type RefObject } from "react";

type PlayState = "idle" | "playing" | "paused" | "unsupported";

export function ScrollAudioPlayer({
  targetRef,
  label = "Listen to this scroll",
}: {
  targetRef: RefObject<HTMLElement | null>;
  label?: string;
}) {
  const [state, setState] = useState<PlayState>("idle");

  useEffect(() => {
    const supported = typeof window !== "undefined" && "speechSynthesis" in window;
    if (!supported) setState("unsupported");
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
  }, []);

  if (state === "unsupported") return null;

  function speak() {
    const text = targetRef.current?.innerText?.trim();
    if (!text) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.onend = () => setState("idle");
    utterance.onerror = () => setState("idle");
    synth.speak(utterance);
    setState("playing");
  }

  function handlePrimary() {
    if (state === "paused") {
      window.speechSynthesis.resume();
      setState("playing");
      return;
    }
    speak();
  }

  function handlePause() {
    window.speechSynthesis.pause();
    setState("paused");
  }

  function handleStop() {
    window.speechSynthesis.cancel();
    setState("idle");
  }

  return (
    <div className="mb-8 inline-flex items-center gap-1 rounded-full bg-secondary p-1.5 pr-4">
      {state === "playing" ? (
        <button
          type="button"
          onClick={handlePause}
          className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
          aria-label="Pause narration"
        >
          <Pause className="size-4" />
        </button>
      ) : (
        <button
          type="button"
          onClick={handlePrimary}
          className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
          aria-label={state === "paused" ? "Resume narration" : "Play narration"}
        >
          <Play className="size-4" />
        </button>
      )}
      {state !== "idle" && (
        <button
          type="button"
          onClick={handleStop}
          className="flex size-7 items-center justify-center text-muted-foreground hover:text-foreground"
          aria-label="Stop narration"
        >
          <Square className="size-3.5" />
        </button>
      )}
      <span className="ml-1 flex items-center gap-1.5 text-sm font-medium text-foreground">
        <Volume2 className="size-4 text-primary" />
        {state === "playing" ? "Playing…" : state === "paused" ? "Paused" : label}
      </span>
    </div>
  );
}
