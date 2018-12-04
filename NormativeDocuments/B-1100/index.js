import { DrawerNavigator } from 'react-navigation';
import Pasport from "./Pasport.js"
import B1100 from "./B1100.js"
import TypeApprovalCertificate from "./TypeApprovalCertificate.js"
import DeclarationConformity from "./DeclarationConformity.js"
import MethodVerification from "./MethodVerification.js"
import DescriptionTypeSI from "./DescriptionTypeSI.js"
import Catalog from "./Catalog.js"
import Manual from "./Manual.js"
import CertificateConformity from "./CertificateConformity.js"

const B1100Route = DrawerNavigator({
    //Home: { screen: HomePage },
    B1100: {screen: B1100},
    Pasport: { screen: Pasport},
    TypeApprovalCertificate: {screen:TypeApprovalCertificate},
    DeclarationConformity: {screen: DeclarationConformity},
    MethodVerification: {screen: MethodVerification},
    DescriptionTypeSI: {screen: DescriptionTypeSI},
    Catalog: {screen: Catalog},
    Manual: {screen: Manual},
    CertificateConformity: {screen: CertificateConformity},


    ///Profile: { screen: ProfileScreen },
});

export default B1100Route;