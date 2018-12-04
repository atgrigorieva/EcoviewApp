import { DrawerNavigator } from 'react-navigation';
import Pasport from "./Pasport.js"
import YF3000 from "./YF3000.js"
import TypeApprovalCertificate from "./TypeApprovalCertificate.js"
import DeclarationConformity from "./DeclarationConformity.js"
import MethodVerification from "./MethodVerification.js"
import DescriptionTypeSI from "./DescriptionTypeSI.js"
import Catalog from "./Catalog.js"
import Manual from "./Manual.js"
import CertificateConformity from "./CertificateConformity.js"

const B1100Route = DrawerNavigator({
    //Home: { screen: HomePage },
    YF3000: {screen: YF3000},
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