import Authorized from './Authorized';
import Secured from './Secured';
import check, { hasPermissions } from './CheckPermissions';
import renderAuthorize from './renderAuthorize';

Authorized.Secured = Secured;
Authorized.check = check;
Authorized.hasPermissions = hasPermissions;

const RenderAuthorize = renderAuthorize(Authorized);

export default RenderAuthorize;
