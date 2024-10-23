import { CategoryBarWrapper, CategoryBarItemsWrapper, CategoryItemSwiperSlide, CategoryBarDivider } from "./categoryBarStyling";
import CategoryItem from "./categoryItem/categoryItem";
import { Navigation, Mousewheel, FreeMode } from "swiper";
import { useEffect, useRef, useState } from "react";
import FilterBtn from "./filterBtn/filterBtn";
import { searchFiltersSelector } from "../../state/selectors/searchQuery";
import { useRecoilState } from "recoil";
import { SearchFilters } from "../../interfaces/state/searchQuery";
import { SwiperRef } from "swiper/react";
import useScrollDirection from "../../hook/useScrollDirection";

const categoryData = [
    { inlineId: "all", label: "All", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/All.jpg" },
    { inlineId: "entire-place", label: "Homes", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Home.jpg" },
    { inlineId: "private-room", label: "Rooms", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Rooms.jpg" },
    { inlineId: "shared-room", label: "Shared", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Shared.jpg" },
    { inlineId: "camping", label: "Camping", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Camping.jpg" },
    { inlineId: "resorts", label: "Resorts", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Resorts.jpg" },
    { inlineId: "motel", label: "Motels", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Motels.jpg" },
    { inlineId: "beach-house", label: "Beach", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Beach.jpg" },
    { inlineId: "cabin", label: "Cabins", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Cabins.jpg" },
    { inlineId: "farms", label: "Farms", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Farms.jpg" },
    { inlineId: "villa", label: "Villas", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Villa.jpg" },
    { inlineId: "glamping", label: "Glamping", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Glamping.jpg" },
    { inlineId: "island", label: "Islands", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Islands.jpg" },
    { inlineId: "romantic", label: "Romantic", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Romantic.jpg" },
    { inlineId: "bed-and-breakfast", label: "B&Bs", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/B%26Bs.jpg" },
    { inlineId: "boat", label: "Boats", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Boats.jpg" },
    { inlineId: "cozy", label: "Cozy", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Cozy.jpg" },
    { inlineId: "boutique-hotel", label: "Hostels", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Hostels.jpg" },
    { inlineId: "views", label: "Views", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Views.jpg" },
    { inlineId: "wineries", label: "Wineries", img: "https://d292awxalydr86.cloudfront.net/Home+page/Category+icons/Wineries.jpg" },
];

interface CategoryBarProps {
    updateFilter: (searchFilter: SearchFilters) => void;
    distribution: { [key: string]: number };
    isTouchDevice?: boolean;
    searchListingContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
    setPage?: React.Dispatch<React.SetStateAction<number>>;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ updateFilter, distribution, isTouchDevice, searchListingContainerRef, setPage }) => {
    const [searchFilters, setSearchFilters] = useRecoilState(searchFiltersSelector);
    const categoryBarRef = useRef<SwiperRef | null>(null);
    const [scrollDirection, isHitBottom] = useScrollDirection(window);
    const categoryChangedRef = useRef(true);

    useEffect(() => {
        if (distribution.min && distribution.max && categoryChangedRef.current) {
            setSearchFilters({
                ...searchFilters,
                priceRange: { min: distribution.min, max: distribution.max },
            });
            categoryChangedRef.current = false;
        }
    }, [distribution]);

    useEffect(() => {
        const preventVerticalScroll = (e: WheelEvent) => {
            e.preventDefault();
            e.stopPropagation();
        };
        const swiperWrapper = categoryBarRef.current?.swiper.el;
        if (swiperWrapper) {
            swiperWrapper.addEventListener("wheel", preventVerticalScroll, { passive: false });
        }

        return () => {
            if (swiperWrapper) {
                swiperWrapper.removeEventListener("wheel", preventVerticalScroll);
            }
        };
    }, []);

    return (
        <CategoryBarWrapper>
            <CategoryBarItemsWrapper
                ref={categoryBarRef}
                className="mySwiper"
                modules={[Navigation, Mousewheel, FreeMode]}
                navigation={true}
                mousewheel={true}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                loop={false}
                initialSlide={0}
                slidesPerView={"auto"}
            >
                {categoryData.map((item) => {
                    return (
                        <CategoryItemSwiperSlide key={item.inlineId}>
                            <CategoryItem
                                label={item.label}
                                imgSrc={item.img}
                                selected={item.inlineId === searchFilters.category}
                                onClick={
                                    !isTouchDevice
                                        ? () => {
                                              if (item.inlineId !== searchFilters.category) {
                                                  //update recoil state
                                                  const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
                                                  searchFiltersCopy.category = item.inlineId;
                                                  //fetch data
                                                  categoryChangedRef.current = true;
                                                  updateFilter(searchFiltersCopy);
                                                  window.scrollTo(0, 0);
                                                  if (searchListingContainerRef) searchListingContainerRef.current?.scrollTo(0, 0);
                                                  if (setPage) setPage(1);
                                              }
                                          }
                                        : undefined
                                }
                                onTouchEnd={
                                    isTouchDevice
                                        ? () => {
                                              if (item.inlineId !== searchFilters.category) {
                                                  //update recoil state
                                                  const searchFiltersCopy = JSON.parse(JSON.stringify(searchFilters));
                                                  searchFiltersCopy.category = item.inlineId;
                                                  //fetch
                                                  categoryChangedRef.current = true;
                                                  updateFilter(searchFiltersCopy);
                                                  window.scrollTo(0, 0);
                                                  if (searchListingContainerRef) searchListingContainerRef.current?.scrollTo(0, 0);
                                                  if (setPage) setPage(1);
                                              }
                                          }
                                        : undefined
                                }
                            />
                        </CategoryItemSwiperSlide>
                    );
                })}
            </CategoryBarItemsWrapper>
            <CategoryBarDivider />
            <FilterBtn updateFilter={updateFilter} distribution={distribution} isTouchDevice={isTouchDevice} />
        </CategoryBarWrapper>
    );
};

export default CategoryBar;
