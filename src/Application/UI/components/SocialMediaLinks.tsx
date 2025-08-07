import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

// Import các icon SVG - sử dụng đường dẫn tương đối từ public folder
const facebookIcon = '/textures/UI/facebook.svg';
const linkedinIcon = '/textures/UI/linkedin.svg';
const instagramIcon = '/textures/UI/instagram.svg';

interface SocialMediaLinksProps {}

interface SocialLinkProps {
    icon: string;
    url: string;
    label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, url, label }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const onMouseDownHandler = useCallback(
        (event) => {
            setIsActive(true);
            event.preventDefault();
            // Mở link trong tab mới
            window.open(url, '_blank', 'noopener,noreferrer');
        },
        [url]
    );

    const onMouseUpHandler = useCallback(() => {
        setIsActive(false);
    }, []);

    const iconSize = window.innerWidth < 768 ? 8 : 10;

    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={styles.socialLinkContainer}
            onMouseDown={onMouseDownHandler}
            onMouseUp={onMouseUpHandler}
            className="icon-control-container"
            id="prevent-click"
            title={label}
        >
            <motion.img
                id="prevent-click"
                src={icon}
                style={{ opacity: isActive ? 0.2 : isHovering ? 0.8 : 1 }}
                width={iconSize}
                height={iconSize}
                animate={
                    isActive ? 'active' : isHovering ? 'hovering' : 'default'
                }
                variants={iconVariants}
            />
        </div>
    );
};

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({}) => {
    const socialLinks = [
        {
            icon: facebookIcon,
            url: 'https://www.facebook.com/pwanm.ie', // URL Facebook thực tế
            label: 'Facebook'
        },
        {
            icon: linkedinIcon,
            url: 'https://www.linkedin.com/in/nam-phương-4a3503309', // URL LinkedIn thực tế
            label: 'LinkedIn'
        },
        {
            icon: instagramIcon,
            url: 'https://instagram.com/pwanm.ie', // URL Instagram thực tế
            label: 'Instagram'
        }
    ];

    return (
        <div style={styles.container}>
            {socialLinks.map((link, index) => (
                <SocialLink
                    key={index}
                    icon={link.icon}
                    url={link.url}
                    label={link.label}
                />
            ))}
        </div>
    );
};

const iconVariants = {
    hovering: {
        opacity: 0.8,
        scale: 1.1,
        transition: {
            duration: 0.2
        }
    },
    active: {
        opacity: 0.2,
        scale: 0.9,
        transition: {
            duration: 0.1
        }
    },
    default: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2
        }
    }
};

const styles: StyleSheetCSS = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    socialLinkContainer: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        background: 'black',
        borderRadius: 2
    }
};

export default SocialMediaLinks;
