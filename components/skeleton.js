import React from 'react';
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={490}
        viewBox="0 0 280 490"
        backgroundColor="#ebebeb"
        foregroundColor="#e7dfdf"
        {...props}
    >
        <circle cx="133" cy="123" r="119"/>
        <rect x="0" y="271" rx="7" ry="7" width="280" height="49"/>
        <rect x="0" y="343" rx="7" ry="7" width="280" height="81"/>
        <rect x="1" y="455" rx="7" ry="7" width="118" height="23"/>
        <rect x="128" y="445" rx="25" ry="25" width="150" height="43"/>
    </ContentLoader>
)
export default Skeleton;