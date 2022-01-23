import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import { Card, CardHeader, CardBody } from './style';

const SpaceCard = ({ open, icon, heading, children, contentPaddingX, contentPaddingY }) => {
    const [isOpen, updateOpen] = useState(open ? open : false);

    const toggleCollapse = () => {
        updateOpen(!isOpen);
        console.log('xxx');
    }

    return (
        <Card>
            <CardHeader onClick={toggleCollapse} open={isOpen}>
                <div className="mr-2.5">{ icon }</div>
                { heading }
                <BsChevronDown className="arrow-action" />
            </CardHeader>
            <CardBody open={isOpen} contentPaddingX={contentPaddingX} contentPaddingY={contentPaddingY}>
                { children }
            </CardBody>
        </Card>
    );
};
export default SpaceCard;

