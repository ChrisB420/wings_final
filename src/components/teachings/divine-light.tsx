import { useRef } from "react";
import { ScrollAudioPlayer } from "@/components/teachings/scroll-audio-player";

export function DivineLight() {
  const articleRef = useRef<HTMLElement>(null);

  return (
    <>
      <ScrollAudioPlayer targetRef={articleRef} />
      <article ref={articleRef} className="space-y-10 leading-relaxed text-muted-foreground">
      <section>
        <h2 className="mb-2 font-serif text-xl font-semibold text-primary">
          1. The Birth of Light and Time
        </h2>
        <p>
          A day is birthed in uniqueness, clothed in atmospheric light. It begins in ascending
          motion where light and time move as one continuous flow.
        </p>
        <p className="mt-2">
          “Let there be light” (Genesis 1:3) marks the beginning of structured time. Darkness
          represents separation, while light represents divine order.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-serif text-xl font-semibold text-primary">2. Structure of the Day</h2>
        <p>
          The day unfolds in divine rhythm — morning, mid-morning, midday, and evening. Each hour
          carries meaning in creation and completion.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>6AM — Birth of the day (zero hour)</li>
          <li>9AM — Ascending light (third hour)</li>
          <li>12PM — Full light (sixth hour)</li>
          <li>3PM — Declining light (ninth hour)</li>
          <li>6PM — Completion of the day</li>
        </ul>
      </section>
      <section>
        <h2 className="mb-2 font-serif text-xl font-semibold text-primary">3. Light and Color</h2>
        <p>
          Light unfolds as a spectrum — violet rising from darkness, moving through blue, green,
          yellow, and red as the day completes.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-serif text-xl font-semibold text-primary">4. Time and Humanity</h2>
        <p>
          Time is structured and intentional. The sixth hour reflects man, the ninth hour reflects
          transition and reflection.
        </p>
      </section>
      <section>
        <h2 className="mb-2 font-serif text-xl font-semibold text-primary">5. Completion</h2>
        <p>
          Each day is sealed as a complete expression of divine order, returning to rest and
          awaiting renewal.
        </p>
      </section>
    </article>
    </>
  );
}
