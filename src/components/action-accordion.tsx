import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ReactNode } from "react";

export  function ActionAccordion({ children, name }: { children: ReactNode; name: string }) {
    return (
        <Accordion type="multiple">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#80848E] text-[1rem]">
                    {name}
                </AccordionTrigger>
                <AccordionContent>{children}</AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
