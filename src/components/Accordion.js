import { useState } from 'react';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleClick = (nextIndex) => {
        setExpandedIndex(nextIndex);
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>
        {renderedItems}
    </div>;
}

export default Accordion;