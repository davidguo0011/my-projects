// import {
//     CreateListingCheckboxInput,
//     CreateListingCheckboxInputLabel,
//     CreateListingCheckboxInputImage,
//     CreateListingCheckboxInputTitle,
//     NewListingAddAmenitiesQuestionWrapper,
//     NewListingAddAmenitiesCheckboxQuestionWrapper,
//     CreateListingNewListingDesktopTitle,
//     CreateListingTitleIcon,
//     CreateListingAddAddressTitle,
// } from "../createListingStyling";
// import { ColorTheme } from "../../../components/globaStyledComponents/globalStyledComponentsStyling";

// export default function NewListingAddCategoriesQuestion({ categories, previousSubPage, addCategory, removeCategory }) {
//     const options = [
//         {
//             name: "Relax",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Relax.png",
//         },
//         {
//             name: "Family",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Family.png",
//         },
//         {
//             name: "Work",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Work.png",
//         },
//         {
//             name: "Fun",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Fun.png",
//         },
//         {
//             name: "Nature",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Nature.png",
//         },
//         {
//             name: "Adventure",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Adventure.png",
//         },
//         {
//             name: "Scenic",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Scenic.png",
//         },
//         {
//             name: "Romantic",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Romantic.png",
//         },
//         {
//             name: "Cozy",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Cozy.png",
//         },
//         {
//             name: "Culture",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Culture.png",
//         },
//         {
//             name: "Wellness",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Wellness.png",
//         },
//         {
//             name: "Design",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Design.png",
//         },
//         {
//             name: "Accessible",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4116.png",
//         },
//         {
//             name: "Surfing",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4116.png",
//         },
//         {
//             name: "Outdoors",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4116.png",
//         },
//         {
//             name: "Camping",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4096.png",
//         },
//         {
//             name: "Shared",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4116.png",
//         },
//         {
//             name: "Fishing",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Fishing.png",
//         },
//         {
//             name: "Historical",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Historical.png",
//         },
//         {
//             name: "Simple",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Simple.png",
//         },
//         {
//             name: "???",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4116.png",
//         },
//         {
//             name: "???",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4116.png",
//         },
//         {
//             name: "???",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4116.png",
//         },
//         {
//             name: "???",
//             src: "https://d292awxalydr86.cloudfront.net/Categories+icons/Rectangle+4116.png",
//         },
//     ];

//     return (
//         <NewListingAddAmenitiesQuestionWrapper>
//             <CreateListingNewListingDesktopTitle>
//                 <CreateListingTitleIcon onClick={previousSubPage} src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"} alt={"back button"} />
//                 Choose categories
//             </CreateListingNewListingDesktopTitle>

//             <CreateListingAddAddressTitle>Choose categories</CreateListingAddAddressTitle>

//             <div style={{ marginBottom: "16px" }}></div>

//             <NewListingAddAmenitiesCheckboxQuestionWrapper>
//                 {options.map((option) => {
//                     return (
//                         <CreateListingCheckboxInputLabel
//                             style={categories.includes(option.name) ? { border: `2px solid ${ColorTheme.Blue.color}` } : { border: `2px solid ${ColorTheme.Grey1.color}` }}
//                             key={option.name}
//                         >
//                             <CreateListingCheckboxInput
//                                 type="checkbox"
//                                 checked={categories.includes(option.name)}
//                                 onChange={(e) => {
//                                     if (!categories.includes(option.name)) {
//                                         addCategory(option.name);
//                                     } else {
//                                         removeCategory(option.name);
//                                     }
//                                 }}
//                             />
//                             <CreateListingCheckboxInputImage src={option.src} />
//                             <CreateListingCheckboxInputTitle>{option.name}</CreateListingCheckboxInputTitle>
//                         </CreateListingCheckboxInputLabel>
//                     );
//                 })}
//             </NewListingAddAmenitiesCheckboxQuestionWrapper>
//         </NewListingAddAmenitiesQuestionWrapper>
//     );
// }

export {};
