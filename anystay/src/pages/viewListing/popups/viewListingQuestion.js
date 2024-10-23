// import { useState } from "react";
// import {
//     ViewListingQuestionCardWrapper,
//     ViewListingQuestionCardTitleWrapper,
//     ViewListingQuestionCardTitle,
//     ViewListingQuestionCardTitleIcon,
//     ViewListingQuestionTitle,
//     ViewListingQuestionSubtitle,
//     ViewListingQuestionInputTextarea,
//     ViewListingQuestionButton,
//     ViewListingQuestionButtonDivider,
// } from "../viewListingStyling";
// import { motion } from "framer-motion";

// export default function ViewListingQuestion({ questionCard, toggleQuestionCard, createConversation }) {
//     const [question, setQuestion] = useState("");

//     return (
//         <>
//             <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 10, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>

//             <motion.div
//                 animate={{ y: questionCard ? 0 : window.innerHeight * 3, opacity: questionCard ? 1 : 0, visibility: questionCard ? "visible" : "hidden" }}
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 style={{ position: "relative", width: "100%" }}
//                 initial={false}
//             >
//                 <ViewListingQuestionCardWrapper>
//                     <ViewListingQuestionCardTitleWrapper>
//                         <ViewListingQuestionCardTitleIcon
//                             onClick={toggleQuestionCard}
//                             src={"https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg"}
//                             alt={"Back arrow"}
//                         />
//                         <ViewListingQuestionCardTitle>Ask a question</ViewListingQuestionCardTitle>
//                     </ViewListingQuestionCardTitleWrapper>
//                     <ViewListingQuestionTitle>What can you ask?</ViewListingQuestionTitle>
//                     <ViewListingQuestionSubtitle>You can ask your host anything about their property. If you are new to the area, you can ask about the neighbourhood as well.</ViewListingQuestionSubtitle>
//                     <ViewListingQuestionInputTextarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Please enter your message here" />
//                     <ViewListingQuestionButtonDivider />
//                     <ViewListingQuestionButton onClick={() => createConversation(question)} type="button">
//                         Send messege
//                     </ViewListingQuestionButton>
//                 </ViewListingQuestionCardWrapper>
//             </motion.div>
//         </>
//     );
// }
