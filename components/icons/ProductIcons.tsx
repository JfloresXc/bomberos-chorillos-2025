import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-12 h-12">{children}</div>
);

export const ShirtIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
        </svg>
    </IconWrapper>
);

export const CapIcon: React.FC = () => (
    <IconWrapper>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 21.686a8.25 8.25 0 01-8.22-6.522c.24-.044.494-.08.756-.106 1.833-.186 3.535-.854 4.957-1.816 1.34- .885 2.518-2.023 3.426-3.344.473-.67 1.056-1.285 1.746-1.832.616-.484 1.34- .893 2.14-1.187a.75.75 0 11.458 1.417c-.24.08-.49.167-.745.263-1.833.186-3.535.854-4.957 1.816-1.34.885-2.518 2.023-3.426 3.344-.473.67-1.056 1.285-1.746 1.832-.616.484-1.34.893-2.14 1.187a15.01 15.01 0 00-2.08 6.224M12.75 21.686c-1.386.136-2.813.136-4.2 0" />
        </svg>
    </IconWrapper>
);

export const KeychainIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
    </IconWrapper>
);

export const WaterBottleIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18.75 0h-18.75m18.75 0h-1.5m1.5 0v-4.875c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125V21" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.125 3.125v2.625" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.125v2.625" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.375 3.125v2.625" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.125v2.625" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.625 3.125v2.625" />
        </svg>
    </IconWrapper>
);

export const PenIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
    </IconWrapper>
);