// import React from "react";
// import { Storage } from "aws-amplify";
// import { EditProfilePromptButton, EditProfilePromptButtonTitle, EditProfilePromptButtonSubtitle, EditProfilePhotoPromptInput } from "../editProfileStyling";

// export default function AddAProfilePhotoPrompt({ updateProfilePhoto }) {
//     const makeid = (length) => {
//         var result = "profile-picture-";
//         var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//         var charactersLength = characters.length;
//         for (var i = 0; i < length; i++) {
//             result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         }
//         return result;
//     };

//     const onChange = async (e) => {
//         const file = e.target.files[0];
//         try {
//             if (file) {
//                 await Storage.put(makeid(12), file, {
//                     level: "protected",
//                     contentType: "image/*",
//                 }).then((res) => {
//                     updateProfilePhoto(res.key);
//                 });
//             } else {
//                 console.log("No file selected.");
//             }
//         } catch (error) {
//             console.log("Error uploading file: ", error);
//         }
//     };

//     const hiddenFileInput = React.useRef(null);

//     const handleFileClick = (event) => {
//         hiddenFileInput.current.click();
//     };

//     return (
//         <EditProfilePromptButton type="button" onClick={handleFileClick}>
//             <EditProfilePromptButtonTitle>Add profile photo</EditProfilePromptButtonTitle>
//             <EditProfilePromptButtonSubtitle>Add a profile picture to your account</EditProfilePromptButtonSubtitle>
//             <EditProfilePhotoPromptInput type="file" name="file" ref={hiddenFileInput} onChange={onChange} />
//         </EditProfilePromptButton>
//     );
// }
export {};
