import { ErrorFallbackPageBtn, ErrorFallbackPageIconWrapper, ErrorFallbackPageText, ErrorFallbackPageTextWrapper, ErrorFallbackPageTitle, ErrorFallbackPageWrapper } from "./errorFallbackPageStyling";

const ErrorFallbackPage = () => {
    return (
        <ErrorFallbackPageWrapper>
            <ErrorFallbackPageBtn onClick={() => window.location.reload()}>
                <ErrorFallbackPageIconWrapper>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_50431_11586)">
                            <path
                                d="M4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C10.4407 5 8.98566 5.44609 7.75543 6.21762"
                                stroke="#1D1D1F"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                            <path d="M9.23933 1.89844L7.49949 5.83966C7.27645 6.3449 7.50522 6.93529 8.01047 7.15833L11.9517 8.89817" stroke="#1D1D1F" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_50431_11586">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </ErrorFallbackPageIconWrapper>
                <ErrorFallbackPageTextWrapper>
                    <ErrorFallbackPageTitle>Something went wrong</ErrorFallbackPageTitle>
                    <ErrorFallbackPageText>This page couldn’t be loaded, try again.</ErrorFallbackPageText>
                </ErrorFallbackPageTextWrapper>
            </ErrorFallbackPageBtn>
        </ErrorFallbackPageWrapper>
    );
};

export default ErrorFallbackPage;
