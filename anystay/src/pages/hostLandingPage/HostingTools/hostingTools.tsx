import {
    HostingToolsContainer,
    HostingToolsTitle,
    HostingToolsListWrapper,
    HostingToolsListItem,
    HostingToolsListIcon,
    HostingToolsListTitle,
    HostingToolsListSubtitle,
    HostingToolsSeeMoreButton
} from "./hostingToolsStyling";
import { useState } from "react";   

const HostingTools = () => {
    const [seeAll, setSeeAll] = useState(false);
    return (
        <HostingToolsContainer>
            <HostingToolsTitle>Host with the tools you love</HostingToolsTitle>
            <HostingToolsListWrapper>
                <HostingToolsListItem>
                    <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%97%93%EF%B8%8F.jpg"} />
                    <HostingToolsListTitle>Sync your calendar</HostingToolsListTitle>
                    <HostingToolsListSubtitle>You can use Anystay by itself or sync with your current platform to host short and long stays anywhere in Australia.</HostingToolsListSubtitle>
                </HostingToolsListItem>
                <HostingToolsListItem>
                    <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%86%98.jpg"} />
                    <HostingToolsListTitle>24/7 Australian support</HostingToolsListTitle>
                    <HostingToolsListSubtitle>Enjoy peace of mind with 24/7 Australian-based support, ready to assist you anytime.</HostingToolsListSubtitle>
                </HostingToolsListItem>
                <HostingToolsListItem>
                    <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%9B%8E%EF%B8%8F.jpg"} />
                    <HostingToolsListTitle>Personal account manager</HostingToolsListTitle>
                    <HostingToolsListSubtitle>Get dedicated support with your own personal account manager, we’ll help you as your grow.</HostingToolsListSubtitle>
                </HostingToolsListItem>
                {window.innerWidth < 768 && !seeAll ? null : 
                    <HostingToolsListItem>
                        <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%E2%8F%B0.jpg"} />
                        <HostingToolsListTitle>Import your listings</HostingToolsListTitle>
                        <HostingToolsListSubtitle>Use Hostaway to sync your listings, calendar and messages with Anystay instantly. </HostingToolsListSubtitle>
                    </HostingToolsListItem>
                }
                {window.innerWidth < 768 && !seeAll ? null : 
                    <HostingToolsListItem>
                        <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%91%AE.jpg"} />
                        <HostingToolsListTitle>Active fraud detection</HostingToolsListTitle>
                        <HostingToolsListSubtitle>Stay secure with advanced fraud detection, protecting your bookings from threats around the clock.</HostingToolsListSubtitle>
                    </HostingToolsListItem>
                }
                {window.innerWidth < 768 && !seeAll ? null : 
                    <HostingToolsListItem>
                        <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%E2%9C%85.jpg"} />
                        <HostingToolsListTitle>ID verification</HostingToolsListTitle>
                        <HostingToolsListSubtitle>Whether you’re hosting or booking, Anystay’s secure ID verification ensures a safe experience for everyone.</HostingToolsListSubtitle>
                    </HostingToolsListItem>
                }
                {window.innerWidth < 768 && !seeAll ? null : 
                    <HostingToolsListItem>
                        <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%94%92.jpg"} />
                        <HostingToolsListTitle>Fast, secure payouts</HostingToolsListTitle>
                        <HostingToolsListSubtitle>Enjoy automatic payouts direct to your bank account with our secure payment system.  </HostingToolsListSubtitle>
                    </HostingToolsListItem>
                }
                {window.innerWidth < 768 && !seeAll ? null : 
                    <HostingToolsListItem>
                        <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%93%96.jpg"} />
                        <HostingToolsListTitle>Free hosting resources</HostingToolsListTitle>
                        <HostingToolsListSubtitle>Access our library of hosting guides to help you navigate your hosting journey.</HostingToolsListSubtitle>
                    </HostingToolsListItem>
                }
                {window.innerWidth < 768 && !seeAll ? null : 
                    <HostingToolsListItem>
                        <HostingToolsListIcon src={"https://d292awxalydr86.cloudfront.net/Landing+page/Host+landing+page/%F0%9F%87%A6%F0%9F%87%BA.jpg"} />
                        <HostingToolsListTitle>Aussie owned platform</HostingToolsListTitle>
                        <HostingToolsListSubtitle>We’re owned and built by a team around Australia with a mission to create experience driven stays.</HostingToolsListSubtitle>
                    </HostingToolsListItem>
                }
            </HostingToolsListWrapper>
            <HostingToolsSeeMoreButton onClick={() => setSeeAll(!seeAll)} type="button">{seeAll ? 'See less' : 'See more'}</HostingToolsSeeMoreButton>
        </HostingToolsContainer>
    );
};

export default HostingTools;
