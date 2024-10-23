// import React, { useState, useCallback } from 'react'
// import { API } from '@aws-amplify/api';
// import { motion } from 'framer-motion';
// import { useDropzone } from 'react-dropzone'
// import {
//     AddIdentityDocumentWrapper, AddIdentityDocumentTitle, AddIdentityDocumentSubtitle, AddIdentityDocumentButton, AddIdentityDocumentButtonWrapper,
//     AddIdentityDocumentImageWrapper, AddIdentityDocumentImage, AddIdentityDocumentImageDeleteButton, AddIdentityDocumentImageDeleteButtonIcon, AddIdentityDocumentImageContainer,
//     AddCardElementCancelButton, AddIdentityDocumentButtonInput, AddIdentityDocumentButtonText,
// } from '../editProfileStyling'
// import ContinueBtn from '../../../components/btn/continueBtn/continueBtn';
// import useClickOutside from '../../../hook/useClickOutside';

// export default function IdVerification({ toggleInput, active, accessToken }) {
//     const [isLoading, setIsLoading] = useState(false);
//     const [idDocuments, setIdDocuments] = useState([]);
//     const hiddenFileInput = React.useRef(null);
//     const wrapperRef = useClickOutside(active, () => toggleInput("idInputActive", false));

//     const removeIdDocument = (id) => {
//         const documents = idDocuments.filter(e => e.id !== id)
//         setIdDocuments(documents);
//     }
//     const addIdDocument = useCallback(async (img) => {
//         setIdDocuments((idDocuments) => {
//             return [...idDocuments, img]
//         });
//     }, []);

//     const convertBase64 = (file) => {
//         return new Promise((resolve, reject) => {
//             const fileReader = new FileReader();
//             fileReader.readAsDataURL(file);

//             fileReader.onload = () => {
//                 resolve(fileReader.result);
//             };
//             fileReader.onerror = (error) => {
//                 reject(error);
//             };
//         });
//     };

//     const onChange = async (e) => {
//         const file = e.target.files[0];
//         const base64 = await convertBase64(file);
//         const saveData = { id: makeid(10), data: base64 };
//         addIdDocument(saveData);
//     };

//     const onSubmit = async () => {
//         setIsLoading(true);
//         const images = [];
//         for (let i = 0; i < idDocuments.length; i++) {
//             const base64 = idDocuments[i].data.split(',')[1];
//             images.push(base64);
//         }
//         try {
//             await API.post(`${process.env.REACT_APP_ENV}-anystay-user`, "user/id/verify", {
//                 body: {
//                     images: images
//                 },
//                 headers: {
//                     Authorization: accessToken
//                 },
//             })
//                 .then(res => {
//                     toggleInput("idInputActive", false)
//                     setIsLoading(false);
//                 })
//                 .catch(err => {
//                     console.log(err)
//                     setIsLoading(false);
//                 })
//         } catch (err) {
//             console.log(err)
//             setIsLoading(false);
//         }

//     }
//     const handleFileClick = () => {
//         hiddenFileInput.current.click();
//     }

//     const makeid = (length) => {
//         var result = '';
//         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         var charactersLength = characters.length;
//         for (var i = 0; i < length; i++) {
//             result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         }
//         result = "stripe-payout-verification-" + result;
//         return result;
//     }

//     const onDrop = useCallback(async (acceptedFiles) => {
//         const acceptedFileTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/apng', 'image/heic', 'image/avif', 'image/webp'];
//         const file = acceptedFiles[0];
//         if (!acceptedFileTypes.includes(file.type)) {
//             console.log("The uploaded file is not an accepted image type");
//             return;
//         }
//         const base64 = await convertBase64(file);
//         const saveData = { id: makeid(10), data: base64 };
//         addIdDocument(saveData);
//     }, [addIdDocument]);

//     const { getRootProps, getInputProps } = useDropzone({ onDrop })
//     return (
//         <motion.div
//             animate={{ display: active ? "unset" : "none" }}
//             transition={{ duration: 0.2, ease: "easeInOut" }}
//             initial={false}
//         >
//             <div style={{ height: "100%", width: "100%", position: "fixed", left: 0, bottom: 0, zIndex: 101, background: "rgba(0, 0, 0, 0.25)", backdropFilter: "blur(0px)" }}></div>
//             <AddIdentityDocumentWrapper ref={wrapperRef}
//             >
//                 <AddIdentityDocumentTitle>
//                     Verify your identity
//                 </AddIdentityDocumentTitle>
//                 <AddIdentityDocumentSubtitle>
//                     Upload the front and back of any Government issued ID.
//                 </AddIdentityDocumentSubtitle>
//                 <AddIdentityDocumentButton uploaded={idDocuments.length > 0} type="button" {...getRootProps()} onClick={handleFileClick}>
//                     <AddIdentityDocumentButtonInput
//                         {...getInputProps()}
//                         type="file"
//                         name="file"
//                         onChange={onChange}
//                         disabled={idDocuments.length > 1}
//                         onClick={(event) => {
//                             event.target.value = ''
//                         }}
//                         ref={hiddenFileInput}
//                         accept="image/*"
//                     />
//                     <AddIdentityDocumentButtonText>
//                         Drop files or click to upload.
//                     </AddIdentityDocumentButtonText>
//                 </AddIdentityDocumentButton>

//                 {idDocuments.length < 1 &&
//                     <AddIdentityDocumentSubtitle>
//                         Your documents will only be used to verify your identity.
//                     </AddIdentityDocumentSubtitle>
//                 }
//                 <AddIdentityDocumentImageContainer>
//                     {idDocuments.length > 0 && (
//                         idDocuments.map((item, index) => {
//                             return (
//                                 <AddIdentityDocumentImageWrapper key={item.id}>
//                                     <AddIdentityDocumentImage src={item.data} alt="ID-Document" />
//                                     <AddIdentityDocumentImageDeleteButton type="button" onClick={() => removeIdDocument(item.id)}>
//                                         <AddIdentityDocumentImageDeleteButtonIcon src={"https://d292awxalydr86.cloudfront.net/Universal+icons/None.svg"} alt="delte icon" />
//                                     </AddIdentityDocumentImageDeleteButton>
//                                 </AddIdentityDocumentImageWrapper>
//                             )
//                         })
//                     )}
//                 </AddIdentityDocumentImageContainer>
//                 <AddIdentityDocumentButtonWrapper>
//                     <AddCardElementCancelButton type="button" onClick={() => {
//                         toggleInput("idInputActive", false)
//                     }}>
//                         Cancel
//                     </AddCardElementCancelButton>
//                     <ContinueBtn
//                         type="button"
//                         onClick={onSubmit}
//                         isLoading={isLoading}
//                         background={"black"}
//                         disabled={idDocuments.length === 0 || isLoading} // Disable the button if no files are uploaded
//                         style={{ width: "120px" }}
//                     >
//                         Continue
//                     </ContinueBtn>
//                 </AddIdentityDocumentButtonWrapper>
//             </AddIdentityDocumentWrapper >
//         </motion.div>
//     )
// }
export {};
