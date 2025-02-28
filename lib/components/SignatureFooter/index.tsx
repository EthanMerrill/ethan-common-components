import React from 'react';

export interface SignatureFooterProps extends React.ComponentPropsWithoutRef<'div'> {
    backgroundColor: string;
    fontColor: string;
}

interface siteLinks {
    siteName: string;
    siteLink: string;
}

// a lightweight component which contains links to my other work
export function SignatureFooter(props: SignatureFooterProps) {
    const { backgroundColor, fontColor } = props;

    const sites: siteLinks[] = [
        { siteName: "JamSort", siteLink: "https://www.jamsort.com" },
        { siteName: "What Genre is This", siteLink: "https://www.whatgenreisthis.com" },
        { siteName: "The Recipes Only", siteLink: "https://www.therecipesonly.com" }
    ];

    return (
        <>
            <div style={{
                backgroundColor: backgroundColor, color: fontColor, padding: "0rem 1rem", textAlign: "center", fontSize: ".8rem",
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', height: '35px' }}>
                    <div className='made-by'>
                        <p className="signature-text"> Made with ♡ by
                            <a href='https://www.ethanmerrill.com' style={{ textDecoration: 'none' }} > <u>Ethan Merrill</u> </a>in Boston, Massachusetts USA</p>
                    </div>

                    <div>
                        {sites.map(site => (
                            <li key={site.siteName} style={{ marginRight: '1rem', listStyleType: 'none', display: 'inline-block' }}>
                                <a href={site.siteLink}>{site.siteName}</a>
                                {sites.indexOf(site) !== sites.length - 1 && (
                                    <span style={{ marginLeft: '1rem', display: 'inline-block', fontFamily: 'franklin' }}>/</span>
                                )}
                            </li>))}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }} className='socials'>
                        <a style={{ height: '100%' }} href='https://bsky.app/profile/ethanmerrill.bsky.social'>
                            <div style={{ width: '24px', height: '24px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 530" width="100%" height="100%" version="1.1">
                                    <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill={fontColor} />
                                </svg>
                            </div>
                        </a>
                        <a style={{ height: '24px' }} href='https://www.linkedin.com/in/ethanmerrill/'>
                            <div style={{ width: '24px', height: '24px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 50 50">
                                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill={fontColor} ></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div >
            </div >
            <style>
                {`
                    .signature-text {
                        text-align: left;
                       font-size: .7rem;
                    }
                    @media (max-width: 450px) {
                        .signature-text {
                            text-align: center;
                            font-size: .7rem;
                            margin: 0 auto;
                        }
                            .made-by {
                            width: 100%;
                        }
                        .socials {
                            justify-content: center;
                            align-items: center;
                            margin:auto;
                            margin-top: 1rem;
                            width: 100%;
                        }
                    }
                    a {
                        color: ${fontColor};
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
        </>
    );
};