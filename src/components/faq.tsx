import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export function FAQ({className}: {className?: string}) {
  return (
    <Card className={cn("shadow-lg w-[550px]", className)}>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <Accordion className="w-full mt-4" type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:underline-none">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent>
              We offer a [number]-day return policy for unworn and undamaged items.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:underline-none">
              How do I track my order?
            </AccordionTrigger>
            <AccordionContent>
              You can track your order using the tracking number provided in your shipping confirmation email.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:underline-none">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept [list of accepted payment methods].
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:underline-none">
              Do you offer international shipping?
            </AccordionTrigger>
            <AccordionContent>
              [Yes/No] We offer international shipping to [list of countries].
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-b-0" value="item-5">
            <AccordionTrigger className="hover:underline-none">
              How do I care for my type of clothing?
            </AccordionTrigger>
            <AccordionContent>
              [Provide care instructions for the specific type of clothing, e.g., &quot;Our cotton t-shirts are machine washable in cold water.&quot;]
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
