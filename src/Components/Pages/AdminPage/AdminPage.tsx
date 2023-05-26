import "./AdminPage.css";
import DetectorsManageSection from "./DetectorsManageSection/DetectorsManageSection";
import AdminsManageSection from "./AdminsManageSection/AdminsManageSection";
import FinesManageSection from "./FinesManageSection/FinesManageSection";
import GratitudesManageSection from "./GratitudesManageSection/GratitudesManageSection";

const AdminPage : React.FC = () => {
    return(
        <>
            <AdminsManageSection></AdminsManageSection>
            <DetectorsManageSection></DetectorsManageSection>
            <FinesManageSection></FinesManageSection>
            <GratitudesManageSection></GratitudesManageSection>
        </>
    );
}

export default AdminPage;