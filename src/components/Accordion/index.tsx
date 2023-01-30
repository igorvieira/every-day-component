import { useState } from 'react'
import { AccordionItems } from './AccordionItem'
import './styles.css'

export type Faqs = {
  question: string
  answer: string
}

export type AccordionProps = {
  faqs: Faqs[]
}

const Accordion = ({ faqs }: AccordionProps) => {
  return (
    <div>
      <ul className="accordion">
        {faqs.map((faq, index) => (
          <AccordionItems key={index} faq={faq} />
        ))}
      </ul>
    </div>
  )
}

export default Accordion
