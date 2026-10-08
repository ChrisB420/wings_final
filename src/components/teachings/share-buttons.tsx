import { useEffect, useState } from "react";
import { Check, Link2, MessageCircle, Share2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

const btn =
  "inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm text-primary shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]";

export function ShareButtons({ title, path }: { title: string; path: string }) {
  const url = `${siteConfig.url}${path}`;
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
      <span className="w-full text-center text-sm text-muted-foreground sm:w-auto">
        Share this scroll:
      </span>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
      >
        <MessageCircle className="size-4" /> WhatsApp
      </a>
      {canNativeShare && (
        <button type="button" onClick={() => navigator.share({ title, url }).catch(() => {})} className={btn}>
          <Share2 className="size-4" /> Share
        </button>
      )}
      <button type="button" onClick={copy} className={btn}>
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
