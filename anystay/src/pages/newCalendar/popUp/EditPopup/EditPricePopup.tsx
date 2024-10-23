import { PopupWrapper, BackBtn, BackBtnIcon, EditPopupTitle, PriceDiscountWrapper, PriceInputWrapper, Input, ErrMsg, InputLabel } from "../popUpStyling";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import ContinueBtn from "../../../../components/btn/continueBtn/continueBtn";

interface EditPricePopupProps {
    setEditState: React.Dispatch<React.SetStateAction<string>>;
    setNewPrice: React.Dispatch<React.SetStateAction<string>>;
}

const EditPricePopup: React.FC<EditPricePopupProps> = ({ setEditState, setNewPrice }) => {
    const [price, setPrice] = useState<number | null>(null);
    const [errMessage, setErrMessage] = useState("");
    const [showErr, setShowErr] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [isContinueBtnLoading, setIsContinueBtnLoading] = useState(false);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
        setPrice(Number(value));
    };

    useEffect(() => {
        if (!price) return;
        if ((price as number) < 10) {
            setErrMessage("Price must be at least $10 AUD");
            setShowErr(true);
        } else if ((price as number) > 100000) {
            setErrMessage("Price must be below $100000 AUD ");
            setShowErr(true);
        } else {
            setErrMessage("");
            setShowErr(false);
        }
    }, [price]);

    return (
        <PopupWrapper>
            <BackBtn
                onClick={() => {
                    setEditState("main");
                }}
            >
                <BackBtnIcon src="https://d292awxalydr86.cloudfront.net/Universal+icons/Arrow.svg" alt={"back button"} />
            </BackBtn>
            <EditPopupTitle>Price</EditPopupTitle>
            <PriceDiscountWrapper>
                <PriceInputWrapper style={{ justifyContent: "unset" }}>
                    <InputLabel>$</InputLabel>
                    <Input ref={inputRef} type={"text"} placeholder={"0"} value={price as number} onChange={handlePrice} />
                </PriceInputWrapper>
                {showErr && <ErrMsg>{errMessage}</ErrMsg>}
            </PriceDiscountWrapper>
            <ContinueBtn
                background={"black"}
                style={{ width: "fit-content" }}
                disabled={showErr || !price}
                isLoading={isContinueBtnLoading}
                onClick={() => {
                    setIsContinueBtnLoading(true);
                    setEditState("main");
                    setNewPrice((price as number).toString());
                    setIsContinueBtnLoading(false);
                }}
            >
                Done
            </ContinueBtn>
        </PopupWrapper>
    );
};

export default EditPricePopup;
