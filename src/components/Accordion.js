import { useState } from 'react';
import { HiChevronDown, HiChevronLeft } from "react-icons/hi";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandedIndex((current) => {
            if (current === nextIndex) {
                return -1;
            }
            else {
                return nextIndex;
            }
        });
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-2xl">
            {isExpanded ? <HiChevronDown /> : <HiChevronLeft />}
        </span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">
        {renderedItems}
    </div>;
}

export default Accordion;