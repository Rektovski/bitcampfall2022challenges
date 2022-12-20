import "../../design/challenge 13/faqAccordionStyle.css";
import platform from "../../assets/challenge 13/illustration-woman-online-desktop.svg";
import platformMobile from "../../assets/challenge 13/illustration-woman-online-mobile.svg";
import {Accordion, AccordionButton, AccordionPanel, Box, AccordionItem, AccordionIcon} from "@chakra-ui/react";

export default function FAQAccordionCard() {
    const accordionList = [
        {
            title: 'How many team members can I invite?',
            body: 'No more than 2GB. All files in your account must fit your allotted storage space.',
        },
        {
            title: 'What is the maximum file upload size?',
            body: 'No more than 2GB. All files in your account must fit your allotted storage space.',
        },
        {
            title: 'How do I reset my password?',
            body: 'No more than 2GB. All files in your account must fit your allotted storage space.',
        },
        {
            title: 'Can I cancel my subscription?',
            body: 'No more than 2GB. All files in your account must fit your allotted storage space.',
        },
        {
            title: 'Do you provide additional support?',
            body: 'No more than 2GB. All files in your account must fit your allotted storage space.',
        },
    ]

    return (
        <>
            <div className={'faqAccordionCardSpace'}>
                <div className={'faqCard'}>
                    <div className={'platformSpace'}>
                        <img className={window.innerWidth>=950 ? "platform" : "platformMobile"} src={window.innerWidth>=950 ?  platform : platformMobile} alt={platform}/>
                    </div>
                    <div>
                        <div className={'faqAccordionTitle'}>FAQ</div>
                        <Accordion className={'accordionBorder'} border={333}>
                            {
                                accordionList.map((item, id) => (
                                    <AccordionItem key={id}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>{item.title}</Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>{item.body} </AccordionPanel>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}