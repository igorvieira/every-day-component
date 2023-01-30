import { MutableRefObject, useRef, useState } from 'react'
import { Faqs } from '.'

export type AccordionItems = {
  faq: Faqs
}

export const AccordionItems = ({ faq }: AccordionItems) => {
  const { question, answer } = faq
  const [cliked, setCliked] = useState(false)

  const contentEl = useRef(null)

  const activeList = () => `accordion_item ${cliked ? 'active' : ''} `
  const activeControl = cliked ? '-' : '+'

  const handleWithScrool = (
    contentEl: { current: { scrollHeight: string } } | MutableRefObject<null>
  ) => {
    return contentEl?.current?.scrollHeight
  }

  return (
    <li className={activeList()}>
      <button className="button" onClick={() => setCliked(!cliked)}>
        {question}
        <span className="control">{activeControl}</span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          cliked ? { height: handleWithScrool(contentEl) } : { height: '0px' }
        }
      >
        <div className="answer"> {answer}</div>
      </div>
    </li>
  )
}
