import { Wrapper } from "./LoadingSpinnerPlaceHolderStyling";
import LoadingSpinner from "../../../components/spinner/loadingSpinner/loadingSpinner";
const LoadingSpinnerPlaceHolder: React.FC = () => {
    return (
        <Wrapper>
            <LoadingSpinner />
        </Wrapper>
    );
};

export default LoadingSpinnerPlaceHolder;
