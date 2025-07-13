import React, {useState} from 'react';

const HoverEffectsBlock = ({children}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{position: 'absolute',
                width: "373px",
                height: "373px"}}
        >
            {isHovered && (
                {children}
            )}
        </div>
    );
};

export default HoverEffectsBlock;