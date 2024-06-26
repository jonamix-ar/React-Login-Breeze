import React from 'react'

export const LogoIcon = ({ className, width, height, ...props }) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 92.8 94.1"
            className={className}
        >
            <defs>
                <style>{`.cls-1{fill:none;}.cls-2{opacity:0.4;}.cls-3{clip-path:url(#clip-path);}.cls-4{fill:#fff;}.cls-5{clip-path:url(#clip-path-2);}.cls-6{clip-path:url(#clip-path-3);}.cls-7{clip-path:url(#clip-path-4);}`}</style>
                <clipPath id="clip-path">
                    <rect className="cls-1" width="32" height="32.1" />
                </clipPath>
                <clipPath id="clip-path-2">
                    <rect className="cls-1" x="60.8" width="32" height="32.1" />
                </clipPath>
                <clipPath id="clip-path-3">
                    <rect className="cls-1" y="62" width="32" height="32.1" />
                </clipPath>
                <clipPath id="clip-path-4">
                    <rect
                        className="cls-1"
                        x="60.8"
                        y="62"
                        width="32"
                        height="32.1"
                    />
                </clipPath>
            </defs>
            <g id="Capa_2" data-name="Capa 2">
                <g id="Capa_1-2" data-name="Capa 1">
                    <g className="cls-2">
                        <g className="cls-3">
                            <polygon
                                className="cls-4"
                                points="9.7 0 0 9.7 22.3 32.1 32 22.4 9.7 0"
                            />
                        </g>
                    </g>
                    <g className="cls-2">
                        <g className="cls-5">
                            <polygon
                                className="cls-4"
                                points="92.8 9.7 83.1 0 60.8 22.4 70.5 32.1 92.8 9.7"
                            />
                        </g>
                    </g>
                    <g className="cls-2">
                        <g className="cls-6">
                            <polygon
                                className="cls-4"
                                points="0 84.4 9.7 94.1 32 71.7 22.3 62 0 84.4"
                            />
                        </g>
                    </g>
                    <g className="cls-2">
                        <g className="cls-7">
                            <polygon
                                className="cls-4"
                                points="60.8 71.8 83.1 94.1 92.8 84.4 70.5 62 60.8 71.8"
                            />
                        </g>
                    </g>
                    <rect
                        className="cls-4"
                        x="34.2"
                        y="34.9"
                        width="24.4"
                        height="24.4"
                    />
                </g>
            </g>
        </svg>
    )
}

export default LogoIcon
