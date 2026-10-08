import { useRef } from "react";
import { ScrollAudioPlayer } from "@/components/teachings/scroll-audio-player";

export function SpiritualWarfare() {
  const articleRef = useRef<HTMLElement>(null);

  return (
    <>
      <ScrollAudioPlayer targetRef={articleRef} />
      <article ref={articleRef} className="space-y-10 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-primary">
            1. The Battle Behind the Battle
          </h2>
          <p>
            "For we wrestle not against flesh and blood, but against principalities, against
            powers, against the rulers of the darkness of this world, against spiritual wickedness
            in high places" (Ephesians 6:12). Every visible conflict — in nations, in churches, in
            the human heart — is the shadow of an unseen war.
          </p>
          <p className="mt-2">
            Spiritual warfare is not fought with fear but with revelation. The enemy&apos;s primary
            weapon has never been force; it is deception. What is not discerned cannot be resisted.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-primary">
            2. Truth Versus Deception
          </h2>
          <p>
            From the garden onward, the serpent&apos;s strategy has remained the same: question what
            God said, substitute a counterfeit light, and call darkness wisdom. In the last days
            this intensifies — "evil men and seducers shall wax worse and worse, deceiving, and
            being deceived" (2 Timothy 3:13).
          </p>
          <p className="mt-2">
            Truth is not merely information; it is a Person. "I am the way, the truth, and the
            life" (John 14:6). To stand in warfare is to stand rooted in Christ, not in opinion,
            fear, or the shifting language of the age.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-primary">
            3. The Armor of God
          </h2>
          <p>
            Paul does not describe warfare as offense first, but as readiness. Each piece of armor
            in Ephesians 6:14-17 covers a place of vulnerability:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>The belt of truth — holding everything else together</li>
            <li>The breastplate of righteousness — guarding the heart</li>
            <li>Feet shod with the gospel of peace — a stable standing place</li>
            <li>The shield of faith — quenching the fiery darts of the wicked one</li>
            <li>The helmet of salvation — guarding the mind</li>
            <li>The sword of the Spirit, which is the word of God — the only offensive weapon named</li>
          </ul>
          <p className="mt-3">
            Notice the armor is worn, not merely believed in. A revelation not walked in offers no
            protection.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-primary">
            4. Weapons Not Carnal
          </h2>
          <p>
            "For the weapons of our warfare are not carnal, but mighty through God to the pulling
            down of strong holds; casting down imaginations, and every high thing that exalteth
            itself against the knowledge of God" (2 Corinthians 10:4-5). The battlefield is first
            the mind — every thought is taken captive to the obedience of Christ before any outward
            victory is seen.
          </p>
          <p className="mt-2">
            Prayer, fasting, worship, and the spoken word of testimony are not symbolic gestures.
            They are the mechanics by which strongholds — patterns of fear, addiction, generational
            bondage, false belief — are dismantled.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-primary">
            5. Warfare Intensifying in the Last Days
          </h2>
          <p>
            Revelation 12:12 declares, "woe to the inhabiters of the earth and of the sea! for the
            devil is come down unto you, having great wrath, because he knoweth that he hath but a
            short time." As the age draws toward its close, resistance to truth does not fade — it
            sharpens. This is not cause for alarm but for readiness.
          </p>
          <p className="mt-2">
            The same hour that produces increased deception also produces an outpouring of
            discernment for those who watch and pray (Matthew 24:42, Joel 2:28). The Wings of the
            Cherubim ministry exists in this tension — proclaiming light precisely because the hour
            is dark.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-primary">
            6. Standing, Not Striving
          </h2>
          <p>
            Six times in Ephesians 6, believers are told to <em>stand</em> — never to attack a
            position they do not yet hold. The victory over the accuser was already accomplished at
            the cross: "they overcame him by the blood of the Lamb, and by the word of their
            testimony" (Revelation 12:11).
          </p>
          <p className="mt-2">
            Warfare, rightly understood, is not fear-driven combat but confident occupation of
            ground already won — light standing its ground until every shadow yields.
          </p>
        </section>
      </article>
    </>
  );
}
