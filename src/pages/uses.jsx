import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Avery Hill</title>
        <meta
          name="description"
          content="Tools I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Tools I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to plan & manage events, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13.3” MacBook M1 (2020)">
              I was using an Intel-based MacBook Pro prior to this and the difference
              was quite stunning. A simple MacBook Air can be just as, if not more,
              powerful than a relative recent MacBook Pro (prior the M1s).
            </Tool>
            <Tool title="LG 27” UltraFine 5K IPS Monitor">
              Very curios to try the Apple Pro Display XDR next but because
              of how amazing the LG has been, I’m not in a rush to upgrade.
            </Tool>
            <Tool title="MX Keys for Mac">
              Love the travel time of this keyboard. Feels similar to the MacBooks, but a little more travel.
              It’s designed to work seamlessly with Macs & iPads. A pretty decent keyboard for developers.
            </Tool>
            <Tool title="MX Master 3S">
              I’ve been using the MX Master 3 for a few years now and it’s been great. The MX Master 3S feels similar, 
              with a few minor improvements, like the clicks. The scroll wheel is great as always!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Events">
            <Tool title="I live in Playa Vista Catering Team">
              It is important to have a great catering team to make sure your
              event is a success. I have been working with the team at
              Great Catering for years and they are amazing.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for everything.
            </Tool>
            <Tool title="Canva">
              Canva is a great tool for creating social media graphics and
              presentations.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Raycast">
              With a pretty UI, Raycast makes it simple, fast and delightful to control my tools.
              I love the fact I can assign custom keyboard shortcuts to anything.
            </Tool>
            <Tool title="SavvyCal">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
