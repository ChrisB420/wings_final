import { MessageCircleHeart } from "lucide-react";
import { testimonies } from "@/lib/content/testimonies";

function TestimonyCard({ name, location, text }: { name: string; location?: string; text: string }) {
  return (
    <blockquote className="mx-3 inline-block w-80 shrink-0 rounded-2xl bg-card p-6 align-top whitespace-normal shadow-[var(--shadow-border)]">
      <p className="mb-4 leading-relaxed text-foreground/90">&ldquo;{text}&rdquo;</p>
      <footer className="text-sm font-medium text-primary">
        {name}
        {location ? `, ${location}` : ""}
      </footer>
    </blockquote>
  );
}

export function TestimonyWall() {
  if (testimonies.length === 0) {
    return (
      <section className="bg-secondary/40 px-4 py-16 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <MessageCircleHeart className="mx-auto mb-4 size-8 text-primary" />
          <h2 className="mb-2 font-serif text-2xl text-primary">This Wall Is Waiting For You</h2>
          <p className="text-muted-foreground">
            Every testimony shared here is another stone laid down as a witness of what God has
            done. Be the first one placed on this wall — share yours below.
          </p>
        </div>
      </section>
    );
  }

  const looped = [...testimonies, ...testimonies];

  return (
    <section className="overflow-hidden bg-secondary/40 py-16">
      <h2 className="mb-10 text-center font-serif text-3xl text-primary">Wall of Testimonies</h2>
      <div className="group [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-[wall-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">
          {looped.map((t, i) => (
            <TestimonyCard key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes wall-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
