import Accordion from '../components/Accordion';

function AccordionPages() {
    const items = [
        {
            id:'abftfuyj',
            label: 'Can I use React on a project?',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem ea non doloribus aut aliquam tempora, ratione dolorem ex dolor blanditiis enim dolore voluptatem nesciunt aspernatur! Ipsam quasi eos nesciunt.'

        },
        {
            id:'nihj',
            label: 'Can I use Javascript on a project?',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem ea non doloribus aut aliquam tempora, ratione dolorem ex dolor blanditiis enim dolore voluptatem nesciunt aspernatur! Ipsam quasi eos nesciunt.'
        },
        {
            id: 'vgugyf',
            label: 'Can I use CSS on a project?',
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem ea non doloribus aut aliquam tempora, ratione dolorem ex dolor blanditiis enim dolore voluptatem nesciunt aspernatur! Ipsam quasi eos nesciunt.'
        }
    ]
    return <Accordion items={items} />;
}

export default AccordionPages;